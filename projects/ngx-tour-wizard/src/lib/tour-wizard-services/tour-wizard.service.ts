import { Injectable } from "@angular/core";
import { TourWizardAnchorDirective } from "../tour-wizard-anchor/tour-wizard-anchor.directive";
import {
    TourWizardEvent,
    TourWizardOptions,
    TourWizardState,
    TourWizardStep,
    TourWizardPopperSettings
} from "../tour-wizard-models/tour-wizard.model";
import { merge as mergeStatic, Subject, Observable, Subscription } from "rxjs";
import { map } from "rxjs/operators";
import { Inject } from "@angular/core";
import * as _ from "lodash";

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

    private _subs: Subscription = new Subscription();
    private _tourStatus: TourWizardState = TourWizardState.OFF;

    constructor(@Inject("TOUR_WIZARD_DEFAULTS") private _config: TourWizardOptions) {
        if (!!_config) {
            this.backdropTarget = _config.backdropTarget;
            this.isBackdropEnabled = !!_config.backdropEnabled;
            this.isHotKeysEnabled = !!_config.keyboardEnabled;
            this.additionalViewports = _config.additionalViewports || [];
            this.appendDelay = _config.appendDelay || 0;
            _.merge(this.popperDefaults, _config.popperDefaults || {});
        }
        this.events$ = mergeStatic(
            this.stepShow$.pipe(map(value => ({ name: "stepShow", value }))),
            this.stepHide$.pipe(map(value => ({ name: "stepHide", value }))),
            this.start$.pipe(map(value => ({ name: "start", value }))),
            this.end$.pipe(map(value => ({ name: "end", value }))),
            this.pause$.pipe(map(value => ({ name: "pause", value }))),
            this.resume$.pipe(map(value => ({ name: "resume", value }))),
            this.anchorRegister$.pipe(map(value => ({ name: "anchorRegister", value }))),
            this.anchorUnregister$.pipe(map(value => ({ name: "anchorUnregister", value })))
        );

    }

    end(): void {
        this._subs.unsubscribe();
        this.navigating = !1;
        this._tourStatus = TourWizardState.OFF;
        this._hideStep(this.currentStep);
        const currentStepBak = _.cloneDeep(this.currentStep);
        this.currentStep = void 0;
        this.end$.next(currentStepBak);
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
        return step.nextStep !== undefined || _.findIndex(this.steps, step) < this.steps.length - 1;
    }

    hasPrev(step: T): boolean {
        if (!step) {
            console.warn("Can\"t get previous step. No currentStep.");
            return false;
        }
        return step.prevStep !== undefined || _.findIndex(this.steps, step) > 0;
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
            const targetStep = this._loadStep(this.currentStep.nextStep || _.findIndex(this.steps, this.currentStep) + 1);
            if (!!this.currentStep && !!this.currentStep.subjectForNext) {
                // Hide current step
                this._hideStep(this.currentStep);
                // Start listening
                this._subs = this.currentStep.subjectForNext.subscribe((value: boolean) => {
                    if (value) {
                        this.currentStep = void 0;
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
            const targetStep = this._loadStep(this.currentStep.prevStep || _.findIndex(this.steps, this.currentStep) - 1);
            if (!!this.currentStep && !!this.currentStep.subjectForPrev) {
                // Hide current step
                this._hideStep(this.currentStep);
                // Start listening
                this._subs = this.currentStep.subjectForPrev.subscribe((value: boolean) => {
                    if (value) {
                        this.currentStep = void 0;
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
            } else {
                this.resume();
            }
        } else {
            if (this.currentStep) {
                this.end();
            } else {
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
        } else {
            return this.steps.find(step => step.stepId === stepId);
        }
    }

    private _setCurrentStep(step: T): void {
        this._subs.unsubscribe();
        this.navigating = !1;
        if (this.currentStep) {
            this._hideStep(this.currentStep);
        }
        this.currentStep = step;
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

}
