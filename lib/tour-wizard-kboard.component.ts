import {Component, HostListener} from "@angular/core";
import {TourWizardService} from "./tour-wizard.service";
import {TourWizardState} from "./tour-wizard.model";

@Component({
    selector: "tour-wizard-overlay",
    template: `<ng-content></ng-content>`
})
export class TourWizardKboardComponent {
    constructor(private _tourWizardService: TourWizardService) {
    }

    @HostListener("window:keydown.Escape")
    public onEscapeKey(): void {
        if (
            this._tourWizardService.getStatus() === TourWizardState.ON &&
            this._tourWizardService.isHotKeysEnabled
        ) {
            this._tourWizardService.end();
        }
    }

    @HostListener("window:keydown.ArrowRight")
    public onArrowRightKey(): void {
        if (
            this._tourWizardService.getStatus() === TourWizardState.ON &&
            this._tourWizardService.hasNext(this._tourWizardService.currentStep) &&
            this._tourWizardService.isHotKeysEnabled
        ) {
            this._tourWizardService.next(true);
        }
    }

    @HostListener("window:keydown.ArrowLeft")
    public onArrowLeftKey(): void {
        if (
            this._tourWizardService.getStatus() === TourWizardState.ON &&
            this._tourWizardService.hasPrev(this._tourWizardService.currentStep) &&
            this._tourWizardService.isHotKeysEnabled
        ) {
            this._tourWizardService.prev(true);
        }
    }
}
