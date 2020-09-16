import {
    ComponentFactoryResolver,
    ComponentRef,
    Directive,
    ElementRef,
    Input,
    OnDestroy,
    OnInit,
    ViewContainerRef
} from "@angular/core";

import {TourWizardPopperComponent} from "../tour-wizard-popper/tour-wizard-popper.component";
import {TourWizardStep} from "../tour-wizard-models/tour-wizard.model";
import {TourWizardService} from "../tour-wizard-services/tour-wizard.service";
import {TourWizardDomService} from "../tour-wizard-services/tour-wizard-dom.service";
import {TourWizardKboardComponent} from "../tour-wizard-kboard/tour-wizard-kboard.component";
import {TourWizardOverlayComponent} from "../tour-wizard-overlay/tour-wizard-overlay.component";
import {inViewport, inViewportBottom, inViewportTop, JsViewportSides} from "js-viewport-utils";

const remoteAnchorShowClassname: string = "tour-wizard-anchor-show";

@Directive({
    selector: "[tourWizardAnchor]",
    host: {
        "[class.show]": "isActive && !hasRemoteTarget",
        "[attr.tourWizardAnchor]": "tourWizardAnchor"
    }
})

export class TourWizardAnchorDirective implements OnInit, OnDestroy {

    static nextId: number = 0;

    @Input() public tourWizardAnchor: string;

    public isActive: boolean;
    hasRemoteTarget: boolean = !1;

    protected _id: number = ++TourWizardAnchorDirective.nextId;
    protected _addedViewports: string[];
    protected _anchorPopper: TourWizardPopperComponent;
    protected _popperClass: typeof TourWizardPopperComponent = TourWizardPopperComponent;
    protected _popperRef: ComponentRef<TourWizardPopperComponent>;
    protected _popperTarget: HTMLElement;
    protected _remoteTarget: HTMLElement;
    // 2020-09-16 changing viewPortOptions because Chrome/Edge 85 are probably bugged
    protected _viewPortOptions: ScrollIntoViewOptions = {
        inline: "start",
        block: "end",
        behavior: "smooth"
    };

    constructor(private _elRef: ElementRef,
                private _resolver: ComponentFactoryResolver,
                private _tourWizardService: TourWizardService,
                private _tourWizardDomService: TourWizardDomService,
                private _viewContainerRef: ViewContainerRef) {
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
            ], this._tourWizardService.appendDelay);
        }
    }

    getPopperTarget(): HTMLElement {
        return this._popperTarget;
    }

    hideTourStep(): void {
        this.isActive = false;
        this._popperTarget = void 0;
        this.hasRemoteTarget && this._remoteTarget.classList.remove(remoteAnchorShowClassname);
        this._anchorPopper.hidePopper();
    }

    ngOnInit() {
        this._anchorPopper = this._constructPopper();
        this._tourWizardService.register(this.tourWizardAnchor, this);
        Array.isArray(this._tourWizardService.additionalViewports) && (this._addedViewports = this._tourWizardService.additionalViewports);
    }

    ngOnDestroy(): void {
        this._tourWizardService.unregister(this.tourWizardAnchor);
    }

    showTourStep(step: TourWizardStep): void {
        this.hasRemoteTarget = !1;
        let el = this._elRef.nativeElement as HTMLElement;
        // const el = document.querySelector(`[tourWizardAnchor="${this.tourWizardAnchor}"]`);
        this.isActive = true;
        this._anchorPopper.step = step;
        this._remoteTarget = void 0;
        if (!!step.targetElement) {
            if (typeof step.targetElement === "string") {
                step.targetElement = document.querySelector(step.targetElement) as HTMLElement;
            }
            if (this._isDOMElement(step.targetElement)) {
                // Replace el to also scroll to targetElement
                this.hasRemoteTarget = !0;
                step.targetElement.classList.add(remoteAnchorShowClassname);
                el = step.targetElement;
                this._remoteTarget = el;
            } else {
                step.targetElement = void 0;
            }
        }
        if (!!step.customPopperContent) {
            this._anchorPopper.setTemplate(step.customPopperContent);
            step.customPopperContent = void 0; // REMOVE REF TO AVOID PERFORMANCE ISSUES
        }
        this._anchorPopper.applySettings(step.popperSettings);
        if (!step.preventScrolling) {
            if (!inViewportBottom(el)) {
                el.scrollIntoView(this._viewPortOptions);
            } else if (!inViewport(el, {sides: [JsViewportSides.LEFT, JsViewportSides.TOP, JsViewportSides.RIGHT]})) {
                el.scrollIntoView({
                    inline: "start",
                    block: "end",
                    behavior: "smooth"
                });
            } else if (!inViewportTop(el)) {
                el.scrollIntoView({
                    inline: "start",
                    block: "end",
                    behavior: "smooth"
                });
            } else if (!!this._addedViewports) {
                let i = this._addedViewports.length + 1;
                while (--i) {
                    const vp = document.querySelector(this._addedViewports[i]) as HTMLElement;
                    if (!!vp && !inViewport(vp)) {
                        // Breaks at first scroll
                        el.scrollIntoView(this._viewPortOptions);
                        break;
                    }
                }
            }
        }
        this._popperTarget = step.targetElement || this._elRef.nativeElement;
        this._anchorPopper.showPopper(this._popperTarget);
    }

    protected _constructPopper(): TourWizardPopperComponent {
        const factory = this._resolver.resolveComponentFactory(this._popperClass);
        this._popperRef = this._viewContainerRef.createComponent(factory);
        return this._popperRef.instance as TourWizardPopperComponent;
    }

    // Returns true if it is a DOM element
    protected _isDOMElement(entity): boolean {
        if (!entity) {
            return false;
        }
        if (typeof HTMLElement === "object") {
            return entity instanceof HTMLElement;
        }
        return entity.nodeType === 1 && typeof entity.nodeName === "string";

    }

}
