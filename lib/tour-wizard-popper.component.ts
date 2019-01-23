import {Component, OnDestroy, TemplateRef, ViewChild} from "@angular/core";
import {ViewEncapsulation} from "@angular/core";
import {PopperContent} from "ngx-popper";
import {TourWizardService} from "./tour-wizard.service";
import {TourWizardStep, TourWizardPopperSettings, TourWizardPopperFace} from "./tour-wizard.model";
import {Placement} from "ngx-popper";
import * as _ from "lodash";

@Component({
    selector: "tour-wizard-popper-component",
    templateUrl: "./tour-wizard-popper.component.html",
    styleUrls: ["./tour-wizard-popper.component.scss"],
    encapsulation: ViewEncapsulation.None
})
export class TourWizardPopperComponent implements OnDestroy {

    @ViewChild(PopperContent) tourWizardPopper: PopperContent;

    isActive: boolean = false;
    popperPlacement: Placement = "top";
    step: TourWizardStep;
    stepTemplate: TemplateRef<TourWizardPopperFace>;

    // private _listener: () => void;

    // private _renderer: Renderer2
    constructor(public tourWizardService: TourWizardService) {
    }

    applySettings(settings: TourWizardPopperSettings = {}) {
        // Bug when merging step options due to issue https://github.com/MrFrankel/ngx-popper/issues/107
        _.merge(this.tourWizardPopper.popperOptions, this.tourWizardService.popperDefaults, settings);
    }

    hidePopper(): void {
        this.tourWizardPopper.hide();
        this.isActive = false;
        // (typeof this._listener === typeof isNaN) && this._listener();
    }

    ngOnDestroy(): void {
        this.hidePopper();
    }

    setTemplate(newTemplate: TemplateRef<TourWizardPopperFace>) {
        this.stepTemplate = newTemplate;
    }

    showPopper(popperTarget?: HTMLElement): void {
        // this.popperTarget = popperTarget;
        this.tourWizardPopper.referenceObject = popperTarget;
        if (!this.isActive) {
            this.isActive = true;
            this.tourWizardPopper.show();
            window.dispatchEvent(new CustomEvent("resize"));
            // this._listener = this._renderer.listen("document", "click", this._popperClickHandler.bind(this));
        }
    }

    /* private _popperClickHandler($event: MouseEvent): void {
         const popperNative = this.tourWizardPopper.elemRef.nativeElement;
         if ($event.srcElement &&
             $event.srcElement === popperNative ||
             popperNative.contains($event.srcElement)) {
             return;
         }
         this.hidePopper();
     } */
}

