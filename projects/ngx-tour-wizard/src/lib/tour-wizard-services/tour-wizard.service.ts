import {Injectable} from "@angular/core";
import {TourWizardAnchorDirective} from "../tour-wizard-anchor/tour-wizard-anchor.directive";
import {
    TourWizardEvent,
    TourWizardOptions,
    TourWizardState,
    TourWizardStep,
    TourWizardPopperSettings
} from "../tour-wizard-models/tour-wizard.model";
import {merge as mergeStatic, Subject, Observable} from "rxjs";
import {map, takeUntil} from "rxjs/operators";
import {Inject} from "@angular/core";
import {merge, cloneDeep, findIndex} from "lodash";

@Injectable()
export class TourWizardService<T extends TourWizardStep = TourWizardStep> {

    events$: Observable<TourWizardEvent>;

    additionalViewports: string[];
    anchors: { [anchorId: string]: TourWizardAnchorDirective } = {};
    appendDelay: number = 0;
    backdropTarget: string;
    currentStep: T;
    isHotKeysEnabled: boolean;
    isBackdropEnabled: boolean;
    navigating: boolean = !1;
    popperDefaults: TourWizardPopperSettings = {};
    steps: T[] = [];


    // Events
    stepShow$: Subject<T> = new Subject<T>();
    stepHide$: Subject<T> = new Subject<T>();
    start$: Subject<T> = new Subject<T>();
    end$: Subject<T> = new Subject<T>();
    pause$: Subject<T> = new Subject<T>();
    resume$: Subject<T> = new Subject<T>();
    anchorRegister$: Subject<string> = new Subject<string>();
    anchorUnregister$: Subject<string> = new Subject<string>();

    private _stepIndex: number = void 0;
    private _subsCtrl$: Subject<boolean> = new Subject<boolean>();
    private _tourStatus: TourWizardState = TourWizardState.OFF;

    constructor(@Inject("TOUR_WIZARD_DEFAULTS") private _config: TourWizardOptions) {
        if (!!_config) {
            this.backdropTarget = _config.backdropTarget;
            this.isBackdropEnabled = !!_config.backdropEnabled;
            this.isHotKeysEnabled = !!_config.keyboardEnabled;
            this.additionalViewports = _config.additionalViewports || [];
            this.appendDelay = _config.appendDelay || 0;
            merge(this.popperDefaults, _config.popperDefaults || {});
        }
        this.events$ = mergeStatic(
            this.stepShow$.pipe(map(value => ({name: "stepShow", value} as TourWizardEvent))),
            this.stepHide$.pipe(map(value => ({name: "stepHide", value} as TourWizardEvent))),
            this.start$.pipe(map(value => ({name: "start", value} as TourWizardEvent))),
            this.end$.pipe(map(value => ({name: "end", value} as TourWizardEvent))),
            this.pause$.pipe(map(value => ({name: "pause", value} as TourWizardEvent))),
            this.resume$.pipe(map(value => ({name: "resume", value} as TourWizardEvent))),
            this.anchorRegister$.pipe(map(value => ({name: "anchorRegister", value} as TourWizardEvent))),
            this.anchorUnregister$.pipe(map(value => ({name: "anchorUnregister", value} as TourWizardEvent)))
        );

    }

    end(): void {
        this._subsCtrl$.next(!0);
        this.navigating = !1;
        this._tourStatus = TourWizardState.OFF;
        this._hideStep(this.currentStep);
        const currentStepBak = cloneDeep(this.currentStep);
        this._voidTour();
        this.end$.next(currentStepBak);
    }

    getActiveAnchorBoundaries(): ClientRect {
        if (this._tourStatus !== TourWizardState.ON || !this.currentStep) {
            console.warn("Couldn't get anchor client rect, tour wasn't active");
        }
        const $target = this.anchors[this.currentStep.anchorId].getPopperTarget();
        return $target ? $target.getBoundingClientRect() : void 0;
    }

    getStatus(): TourWizardState {
        return this._tourStatus;
    }

    goto(stepId: number | string): void {
        this._goToStep(this._loadStep(stepId));
    }

    hasNext(step: T): boolean {
        if (!step) {
            console.warn("Can\"t get next step. No currentStep.");
            return false;
        }
        return step.nextStep !== undefined || this._stepIndex < this.steps.length - 1;
    }

    hasPrev(step: T): boolean {
        if (!step) {
            console.warn("Can\"t get previous step. No currentStep.");
            return false;
        }
        return step.prevStep !== undefined || this._stepIndex > 0;
    }

    initialize(steps: T[], stepDefaults?: T): void {
        if (steps && steps.length > 0) {
            this.steps = steps.map(step => Object.assign({}, stepDefaults, step));
        }
    }

    next(): void {
        if (this.navigating) {
            return;
        }
        this.navigating = !0;
        if (typeof this.currentStep.onNextClick === typeof isNaN) {
            this.currentStep.onNextClick();
        }
        if (this.hasNext(this.currentStep)) {
            const targetStep = this._loadStep(this.currentStep.nextStep || this._stepIndex + 1);
            if (!!this.currentStep && !!this.currentStep.subjectForNext) {
                // Hide current step
                this._hideStep(this.currentStep);
                // Start listening
                this.currentStep.subjectForNext
                .pipe(takeUntil(this._subsCtrl$))
                .subscribe((value: boolean) => {
                    if (value) {
                        this._voidTour();
                        this._goToStep(targetStep);
                    }
                });
            }
            else {
                this._goToStep(targetStep);
            }
        }
    }

    prev(): void {
        if (this.navigating) {
            return;
        }
        this.navigating = !0;
        if (typeof this.currentStep.onPrevClick === typeof isNaN) {
            this.currentStep.onPrevClick();
        }
        if (this.hasPrev(this.currentStep)) {
            const targetStep = this._loadStep(this.currentStep.prevStep || this._stepIndex - 1);
            if (!!this.currentStep && !!this.currentStep.subjectForPrev) {
                // Hide current step
                this._hideStep(this.currentStep);
                // Start listening
                this.currentStep.subjectForPrev
                .pipe(takeUntil(this._subsCtrl$))
                .subscribe((value: boolean) => {
                    if (value) {
                        this._voidTour();
                        this._goToStep(targetStep);
                    }
                });
            }
            else {
                this._goToStep(targetStep);
            }
        }
    }

    pause(): void {
        if (typeof this.currentStep.onPauseClick === typeof isNaN) {
            this.currentStep.onPauseClick();
        }
        this._tourStatus = TourWizardState.PAUSED;
        this.navigating = !1;
        this._hideStep(this.currentStep);
        this.pause$.next(this.currentStep);
    }


    register(anchorId: string, anchor: TourWizardAnchorDirective): void {
        if (this.anchors[anchorId]) {
            throw new Error("anchorId " + anchorId + " already registered!");
        }
        this.anchors[anchorId] = anchor;
        this.anchorRegister$.next(anchorId);
    }

    resume(): void {
        this._tourStatus = TourWizardState.ON;
        this._showStep(this.currentStep);
        this.resume$.next();
    }

    start(): void {
        this.startAt(0);
    }

    startAt(stepId: number | string): void {
        this._tourStatus = TourWizardState.ON;
        this._goToStep(this._loadStep(stepId));
        this.start$.next();
    }

    unregister(anchorId: string): void {
        delete this.anchors[anchorId];
        this.anchorUnregister$.next(anchorId);
    }

    unregisterAll(): void {
        this.anchors = {};
    }


    toggle(pause?: boolean): void {
        if (pause) {
            if (this.currentStep) {
                this.pause();
            }
            else {
                this.resume();
            }
        }
        else {
            if (this.currentStep) {
                this.end();
            }
            else {
                this.start();
            }
        }
    }

    // Private methods

    private _goToStep(step: T): void {
        if (!step) {
            console.warn("Can\"t go to non-existent step");
            this.end();
            return;
        }
        this._setCurrentStep(step);
    }

    private _hideStep(step: T): void {
        const anchor = this.anchors[step && step.anchorId];
        if (!anchor) {
            return;
        }
        anchor.hideTourStep();
        this.stepHide$.next(step);
    }

    private _loadStep(stepId: number | string): T {
        if (typeof stepId === "number") {
            return this.steps[stepId];
        }
        else {
            return this.steps.find(step => step.stepId === stepId);
        }
    }

    private _setCurrentStep(step: T): void {
        this._subsCtrl$.next();
        this.navigating = !1;
        if (this.currentStep) {
            this._hideStep(this.currentStep);
        }
        this.currentStep = step;
        this._stepIndex = findIndex(this.steps, (s) => s.anchorId === step.anchorId);
        this._showStep(this.currentStep);
    }

    private _showStep(step: T): void {
        const anchor = this.anchors[step && step.anchorId];
        if (!anchor) {
            console.warn("Can\"t attach to unregistered anchor with id " + step.anchorId);
            this.end();
            return;
        }
        anchor.showTourStep(step);
        this.stepShow$.next(step);
    }

    private _voidTour(): void {
        this.currentStep = void 0;
        this._stepIndex = void 0;
    }

}
