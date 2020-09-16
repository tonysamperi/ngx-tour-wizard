import {Component, OnDestroy, TemplateRef, ViewChild, ViewEncapsulation} from "@angular/core";
import {NgxPopperjsContentComponent, NgxPopperjsPlacements} from "ngx-popperjs";
import {TourWizardService} from "../tour-wizard-services/tour-wizard.service";
import {TourWizardPopperFace, TourWizardPopperSettings, TourWizardStep} from "../tour-wizard-models/tour-wizard.model";
import {merge} from "lodash";

@Component({
    selector: "tour-wizard-popper-component",
    templateUrl: "./tour-wizard-popper.component.html",
    styleUrls: ["./tour-wizard-popper.component.scss"],
    encapsulation: ViewEncapsulation.None
})
export class TourWizardPopperComponent implements OnDestroy {

    @ViewChild(NgxPopperjsContentComponent, {static: !0}) tourWizardPopper: NgxPopperjsContentComponent;

    isActive: boolean = false;
    popperPlacement: NgxPopperjsPlacements = NgxPopperjsPlacements.TOP;
    step: TourWizardStep;
    stepTemplate: TemplateRef<TourWizardPopperFace>;

    constructor(public tourWizardService: TourWizardService) {
    }

    applySettings(settings: TourWizardPopperSettings = {}) {
        // Always start from defaults and add specific settings
        merge(this.tourWizardPopper.popperOptions, this.tourWizardService.popperDefaults, settings);
    }

    hidePopper(): void {
        this.tourWizardPopper.hide();
        this.isActive = false;
    }

    ngOnDestroy(): void {
        this.hidePopper();
    }

    setTemplate(newTemplate: TemplateRef<TourWizardPopperFace>) {
        this.stepTemplate = newTemplate;
    }

    showPopper(popperTarget?: HTMLElement): void {
        this.tourWizardPopper.referenceObject = popperTarget;
        if (!this.isActive) {
            this.isActive = true;
            setTimeout(() => {
                this.tourWizardPopper.show();
                window.dispatchEvent(new CustomEvent("resize"));
            });
        }
    }

}

