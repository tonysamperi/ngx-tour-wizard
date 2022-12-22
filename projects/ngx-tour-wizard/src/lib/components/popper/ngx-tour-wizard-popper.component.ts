import {Component, OnDestroy, TemplateRef, ViewChild, ViewEncapsulation} from "@angular/core";
import {DomSanitizer, SafeHtml} from "@angular/platform-browser";
//
import {NgxPopperjsContentComponent, NgxPopperjsPlacements} from "ngx-popperjs";
import {NgxTourWizardStep} from "../../models/ngx-tour-wizard-step.interface";
import {NgxTourWizardService} from "../../services/ngx-tour-wizard.service";
import {NgxTourWizardPopperFace, NgxTourWizardPopperSettings, NgxTourWizardButtons} from "../../models/public";

@Component({
    selector: "tour-wizard-popper-component",
    templateUrl: "./ngx-tour-wizard-popper.component.html",
    styleUrls: ["./ngx-tour-wizard-popper.component.scss"],
    encapsulation: ViewEncapsulation.None
})
export class NgxTourWizardPopperComponent implements OnDestroy {

    @ViewChild(NgxPopperjsContentComponent, {static: !0}) tourWizardPopper: NgxPopperjsContentComponent;

    defaultEndBtn: SafeHtml = this._domSanitizer.bypassSecurityTrustHtml(NgxTourWizardButtons.END);
    defaultNextBtn: SafeHtml = this._domSanitizer.bypassSecurityTrustHtml(NgxTourWizardButtons.NEXT);
    defaultPauseBtn: SafeHtml = this._domSanitizer.bypassSecurityTrustHtml(NgxTourWizardButtons.PAUSE);
    defaultPrevBtn: SafeHtml = this._domSanitizer.bypassSecurityTrustHtml(NgxTourWizardButtons.PREV);
    isActive: boolean = false;
    popperPlacement: NgxPopperjsPlacements = NgxPopperjsPlacements.TOP;
    step: NgxTourWizardStep;
    stepTemplate: TemplateRef<NgxTourWizardPopperFace>;

    constructor(public tourWizardService: NgxTourWizardService,
                private _domSanitizer: DomSanitizer) {
    }

    applySettings(settings: NgxTourWizardPopperSettings = {}) {
        // Always start from defaults and add specific settings
        this.tourWizardPopper.popperOptions = {
            ...this.tourWizardPopper.popperOptions,
            ...this.tourWizardService.popperDefaults,
            ...settings
        };
    }

    hidePopper(): void {
        this.tourWizardPopper.hide();
        this.isActive = false;
    }

    ngOnDestroy(): void {
        this.hidePopper();
    }

    setTemplate(newTemplate: TemplateRef<NgxTourWizardPopperFace>) {
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

