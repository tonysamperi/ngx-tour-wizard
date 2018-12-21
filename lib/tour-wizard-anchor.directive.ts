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
    protected _remoteTarget: HTMLElement;
    protected _viewPortOptions: ScrollIntoViewOptions = {
        inline: "start",
        block: "start",
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

    hideTourStep(): void {
        this.isActive = false;
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
            }
            else {
                step.targetElement = void 0;
            }
        }
        if (!!step.customPopperContent) {
            this._anchorPopper.setTemplate(step.customPopperContent);
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
        this._anchorPopper.showPopper(step.targetElement || this._elRef.nativeElement);
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
