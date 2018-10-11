import {
    Component
} from "@angular/core";
import {TourWizardService} from "./tour-wizard.service";
import {TourWizardEvent} from "./tour-wizard.model";

@Component({
    selector: "tour-wizard-overlay",
    host: {
        "[class.show]": "showOverlay || null"
    },
    template: `
        <div class="tour-wizard-overlay"></div>
    `,
    styleUrls: ["./tour-wizard-overlay.component.scss"]
})
export class TourWizardOverlayComponent {

    showOverlay: boolean = false;

    constructor(private _tourWizardService: TourWizardService) {

        this._tourWizardService.events$
        .subscribe((event: TourWizardEvent) => {

            if (event.name === "start" || event.name === "resume") {
                this._tourWizardService.isBackdropEnabled && (this.showOverlay = true);
            }
            if (event.name === "end" || event.name === "pause") {
                this.showOverlay = false;
            }

        });
    }

}
