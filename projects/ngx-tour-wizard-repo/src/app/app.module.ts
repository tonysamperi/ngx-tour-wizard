import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

import {NgxTourWizardAppComponent} from "./app.component";
import {NgxTourWizardModule} from "ngx-tour-wizard";

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        // TourWizardModule,
        NgxTourWizardModule.forRoot({
            backdropTarget: ".pippo",
            backdropEnabled: true,
            keyboardEnabled: true,
            popperDefaults: {
                appendTo: "body",
                styles: {
                    backgroundColor: "#642f45",
                    color: "#FFF"
                }
            }
        })
    ],
    declarations: [NgxTourWizardAppComponent],
    bootstrap: [NgxTourWizardAppComponent]
})
export class TourWizardAppModule {
}
