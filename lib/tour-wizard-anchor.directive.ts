import {
    Directive,
    OnInit,
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
import {TourWizardDomService} from "./tour-wizard-dom.service";
import {TourWizardKboardComponent} from "./tour-wizard-kboard.component";
import {TourWizardOverlayComponent} from "./tour-wizard-overlay.component";
import * as viewportUtils from "js-viewport-utils";

@Directive({
    selector: "[tourWizardAnchor]",
    host: {
        "[class.show]": "isActive",
        "[attr.tourWizardAnchor]": "tourWizardAnchor"
    }
})

export class TourWizardAnchorDirective implements OnInit, OnDestroy {

    static nextId: number = 0;

    @Input() public tourWizardAnchor: string;

    public isActive: boolean;

    protected _id: number = ++TourWizardAnchorDirective.nextId;
    protected _addedViewports: string[];
    protected _anchorPopper: TourWizardPopperComponent;
    protected _popperClass: typeof TourWizardPopperComponent = TourWizardPopperComponent;
    protected _popperRef: ComponentRef<TourWizardPopperComponent>;
    protected _viewPortOptions: ScrollIntoViewOptions = {
        inline: "start",
        block: "start",
        behavior: "smooth"
    };

    constructor(
        private _elRef: ElementRef,
        private _resolver: ComponentFactoryResolver,
        private _tourWizardService: TourWizardService,
        private _tourWizardDomService: TourWizardDomService,
        private _viewContainerRef: ViewContainerRef) {
    }

    hideTourStep(): void {
        this.isActive = false;
        this._anchorPopper.hidePopper();
    }

    ngOnInit() {
        // Prevents adding layers multiple times
        if (this._id === 1) {
            this._tourWizardDomService.appendComps([
                {
                    comp: TourWizardKboardComponent,
                    key: "TourWizardKboardComponent"
                },
                {
                    comp: TourWizardOverlayComponent,
                    key: "TourWizardOverlayComponent",
                    targetSelector: this._tourWizardService.backdropTarget
                }
            ]);
        }
        this._anchorPopper = this._constructPopper();
        this._anchorPopper.setTarget(this._elRef.nativeElement);
        this._tourWizardService.register(this.tourWizardAnchor, this);
        // Attach keyboard listener only on first anchor
        Array.isArray(this._tourWizardService.additionalViewports) && (this._addedViewports = this._tourWizardService.additionalViewports);
    }

    ngOnDestroy(): void {
        this._tourWizardService.unregister(this.tourWizardAnchor);
    }

    showTourStep(step: TourWizardStep): void {
        const el = this._elRef.nativeElement as HTMLElement;
        // const el = document.querySelector(`[tourWizardAnchor="${this.tourWizardAnchor}"]`);
        this.isActive = true;
        this._anchorPopper.step = step;
        if (!!step.targetElement) {
            this._anchorPopper.setTarget(step.targetElement);
        }
        this._anchorPopper.applySettings(step.popperSettings);
        if (!step.preventScrolling) {
            if (!viewportUtils.inViewportBottom(el)) {
                el.scrollIntoView(this._viewPortOptions);
            }
            else if (!viewportUtils.inViewport(el, {sides: "left top right"})) {
                el.scrollIntoView({
                    inline: "start",
                    block: "end",
                    behavior: "smooth"
                });
            }
            else if (!viewportUtils.inViewportTop(el)) {
                el.scrollIntoView({
                    inline: "start",
                    block: "end",
                    behavior: "smooth"
                });
            }
            else if (!!this._addedViewports) {
                let i = this._addedViewports.length + 1;
                while (--i) {
                    const vp = document.querySelector(this._addedViewports[i]);
                    if (!!vp && !viewportUtils.inViewport(vp)) {
                        // Breaks at first scroll
                        el.scrollIntoView(this._viewPortOptions);
                        break;
                    }
                }
            }
        }
        this._anchorPopper.showPopper();
    }

    protected _constructPopper(): TourWizardPopperComponent {
        const factory = this._resolver.resolveComponentFactory(this._popperClass);
        this._popperRef = this._viewContainerRef.createComponent(factory);
        return this._popperRef.instance as TourWizardPopperComponent;
    }

}
