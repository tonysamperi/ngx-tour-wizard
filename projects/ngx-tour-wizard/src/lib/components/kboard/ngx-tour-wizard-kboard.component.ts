import {Component, HostListener} from "@angular/core";
//
import {NgxTourWizardService} from "../../services/ngx-tour-wizard.service";
import {NgxTourWizardState} from "../../models/ngx-tour-wizard-state.enum";

@Component({
    selector: "tour-wizard-kboard",
    template: `
        <ng-content></ng-content>`
})
export class NgxTourWizardKboardComponent {

    constructor(private _tourWizardService: NgxTourWizardService) {
    }

    @HostListener("window:keydown.Escape")
    public onEscapeKey(): void {
        if (this._tourWizardService.isHotKeysEnabled &&
            this._tourWizardService.getStatus() === NgxTourWizardState.ON) {
            this._tourWizardService.end();
        }
    }

    @HostListener("window:keydown.ArrowRight")
    public onArrowRightKey(): void {
        if (this._tourWizardService.isHotKeysEnabled &&
            !this._tourWizardService.currentStep.hideNextButton &&
            this._tourWizardService.getStatus() === NgxTourWizardState.ON &&
            this._tourWizardService.hasNext(this._tourWizardService.currentStep)) {
            // Timeout resolves smooth scrolling issue
            setTimeout(() => {
                this._tourWizardService.next();
            });
        }
    }

    @HostListener("window:keydown.ArrowLeft")
    public onArrowLeftKey(): void {
        if (this._tourWizardService.isHotKeysEnabled &&
            !this._tourWizardService.currentStep.hidePrevButton &&
            this._tourWizardService.getStatus() === NgxTourWizardState.ON &&
            this._tourWizardService.hasPrev(this._tourWizardService.currentStep)) {
            // Timeout resolves smooth scrolling issue
            setTimeout(() => {
                this._tourWizardService.prev();
            });
        }
    }

}
