import {Injectable} from "@angular/core";
import {TourWizardAnchorDirective} from "./tour-wizard-anchor.directive";
import {TourWizardEvent, TourWizardOptions, TourWizardState, TourWizardStep} from "./tour-wizard.model";
import {merge as mergeStatic} from "rxjs/observable/merge";
import {Subject} from "rxjs/Subject";
import {Observable} from "rxjs/Observable";
import {map} from "rxjs/operators";
import {Subscription} from "rxjs/Subscription";

@Injectable()
export class TourWizardService<T extends TourWizardStep = TourWizardStep> {

    public events$: Observable<TourWizardEvent>;

    public additionalViewports: string[];
    public anchors: { [anchorId: string]: TourWizardAnchorDirective } = {};
    public backdropTarget: string;
    public currentStep: T;
    public isHotKeysEnabled: boolean;
    public isBackdropEnabled: boolean;
    public steps: T[] = [];

    private _subs: Subscription = new Subscription();
    private _tourStatus: TourWizardState = TourWizardState.OFF;

    // Events
    private _stepShow$: Subject<T> = new Subject<T>();
    private _stepHide$: Subject<T> = new Subject<T>();
    private _start$: Subject<T> = new Subject<T>();
    private _end$: Subject<T> = new Subject<T>();
    private _pause$: Subject<T> = new Subject<T>();
    private _resume$: Subject<T> = new Subject<T>();
    private _anchorRegister$: Subject<string> = new Subject<string>();
    private _anchorUnregister$: Subject<string> = new Subject<string>();

    constructor(private _config: TourWizardOptions) {
        if (!!_config) {
            this.backdropTarget = _config.backdropTarget;
            this.isBackdropEnabled = _config.backdropEnabled;
            this.isHotKeysEnabled = _config.keyboardEnabled;
            this.additionalViewports = _config.additionalViewports;
        }
        this.events$ = mergeStatic(
            this._stepShow$.pipe(map(value => ({name: "stepShow", value}))),
            this._stepHide$.pipe(map(value => ({name: "stepHide", value}))),
            this._start$.pipe(map(value => ({name: "start", value}))),
            this._end$.pipe(map(value => ({name: "end", value}))),
            this._pause$.pipe(map(value => ({name: "pause", value}))),
            this._resume$.pipe(map(value => ({name: "resume", value}))),
            this._anchorRegister$.pipe(map(value => ({name: "anchorRegister", value}))),
            this._anchorUnregister$.pipe(map(value => ({name: "anchorRegister", value})))
        );

    }

    end(): void {
        this._subs.unsubscribe();
        this._tourStatus = TourWizardState.OFF;
        this._hideStep(this.currentStep);
        this.currentStep = void 0;
        this._end$.next();
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
        return (
            step.nextStep !== undefined || this.steps.indexOf(step) < this.steps.length - 1
        );
    }

    hasPrev(step: T): boolean {
        if (!step) {
            console.warn("Can\"t get previous step. No currentStep.");
            return false;
        }
        return step.prevStep !== undefined || this.steps.indexOf(step) > 0;
    }

    initialize(steps: T[], stepDefaults?: T): void {
        if (steps && steps.length > 0) {
            this.steps = steps.map(step => Object.assign({}, stepDefaults, step));
        }
    }

    next(): void {
        if (typeof this.currentStep.onNextClick === typeof isNaN) {
            this.currentStep.onNextClick();
        }
        if (this.hasNext(this.currentStep)) {
            const targetStep = this._loadStep(this.currentStep.nextStep || this.steps.indexOf(this.currentStep) + 1);
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
        if (typeof this.currentStep.onPrevClick === typeof isNaN) {
            this.currentStep.onPrevClick();
        }
        if (this.hasPrev(this.currentStep)) {
            const targetStep = this._loadStep(this.currentStep.prevStep || this.steps.indexOf(this.currentStep) - 1);
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
        this._tourStatus = TourWizardState.PAUSED;
        this._hideStep(this.currentStep);
        this._pause$.next();
    }


    register(anchorId: string, anchor: TourWizardAnchorDirective): void {
        if (this.anchors[anchorId]) {
            throw new Error("anchorId " + anchorId + " already registered!");
        }
        this.anchors[anchorId] = anchor;
        this._anchorRegister$.next(anchorId);
    }

    resume(): void {
        this._tourStatus = TourWizardState.ON;
        this._showStep(this.currentStep);
        this._resume$.next();
    }

    start(): void {
        this.startAt(0);
    }

    startAt(stepId: number | string): void {
        this._tourStatus = TourWizardState.ON;
        this._goToStep(this._loadStep(stepId));
        this._start$.next();
    }

    unregister(anchorId: string): void {
        delete this.anchors[anchorId];
        this._anchorUnregister$.next(anchorId);
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
        this._stepHide$.next(step);
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
        this._stepShow$.next(step);
    }

}
