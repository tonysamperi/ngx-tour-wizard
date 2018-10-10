import {
    Directive,
    AfterViewInit,
    OnDestroy,
    Input,
    ComponentFactoryResolver,
    ComponentRef,
    ViewContainerRef,
    ElementRef
} from "@angular/core";

import {TourWizardPopperComponent} from "./tour-wizard-popper.component";
import {TourWizardStep} from "./tour-wizard.model";
import {TourWizardService} from "./tour-wizard.service";
import {TourWizardKboardComponent} from "./tour-wizard-kboard.component";
import * as viewportUtils from "js-viewport-utils";

@Directive({
    selector: "[tourWizardAnchor]",
    host: {
        "[class.show]": "isActive"
    }
})

export class TourWizardAnchorDirective implements AfterViewInit, OnDestroy {

    static nextId: number = 0;

    @Input() public tourWizardAnchor: string;

    public isActive: boolean;

    protected _id: number = ++TourWizardAnchorDirective.nextId;
    protected _anchorPopper: TourWizardPopperComponent;
    protected _kboardClass: typeof TourWizardKboardComponent = TourWizardKboardComponent;
    protected _kboardRef: ComponentRef<TourWizardKboardComponent>;
    protected _popperClass: typeof TourWizardPopperComponent = TourWizardPopperComponent;
    protected _popperRef: ComponentRef<TourWizardPopperComponent>;

    constructor(
        private _elRef: ElementRef,
        private _resolver: ComponentFactoryResolver,
        private _tourWizardService: TourWizardService,
        private _viewContainerRef: ViewContainerRef) {
    }

    hideTourStep(): void {
        this.isActive = false;
        this._anchorPopper.hidePopper();
    }

    ngAfterViewInit() {
        this._anchorPopper = this._constructPopper();
        this._anchorPopper.setTarget(this._elRef.nativeElement);
        this._tourWizardService.register(this.tourWizardAnchor, this);
        // Attach keyboard listener only on first anchor
        this._id === 1 && this._constructKboardListener();
    }

    ngOnDestroy(): void {
        this._tourWizardService.unregister(this.tourWizardAnchor);
    }

    showTourStep(step: TourWizardStep, fromKeyboard: boolean = false): void {
        const el = this._elRef.nativeElement as HTMLElement;
        // const el = document.querySelector(`[tourWizardAnchor="${this.tourWizardAnchor}"]`);
        this.isActive = true;
        this._anchorPopper.step = step;
        if (!step.preventScrolling) {
            if (!viewportUtils.inViewportBottom(el)) {
                el.scrollIntoView(fromKeyboard ? true : {
                    inline: "start",
                    block: "start",
                    behavior: "smooth"
                });
            }
            else if (!viewportUtils.inViewport(el, {sides: "left top right"})) {
                el.scrollIntoView(fromKeyboard ? false : {
                    inline: "start",
                    block: "end",
                    behavior: "smooth"
                });
            }
        }
        this._anchorPopper.showPopper();
    }

    protected _constructPopper(): TourWizardPopperComponent {
        const factory = this._resolver.resolveComponentFactory(this._popperClass);
        this._popperRef = this._viewContainerRef.createComponent(factory);
        return this._popperRef.instance as TourWizardPopperComponent;
    }

    protected _constructKboardListener(): TourWizardKboardComponent {
        const factory = this._resolver.resolveComponentFactory(this._kboardClass);
        this._kboardRef = this._viewContainerRef.createComponent(factory);
        return this._kboardRef.instance as TourWizardKboardComponent;
    }
}
