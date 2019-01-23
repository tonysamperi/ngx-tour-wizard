import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

import {TourWizardAppComponent} from "./tour-wizard-app.component";
import {TourWizardModule} from "ngx-tour-wizard";

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        // TourWizardModule,
        TourWizardModule.forRoot({
            backdropTarget: ".pippo",
            backdropEnabled: true,
            keyboardEnabled: true,
            popperDefaults: {
                appendTo: "body",
                styles: {
                    backgroundColor: "red"
                }
            }
        })
    ],
    entryComponents: [TourWizardAppComponent],
    declarations: [TourWizardAppComponent],
    bootstrap: [TourWizardAppComponent],
})
export class TourWizardTestModule {
}
