import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {NgxPopperModule} from "ngx-popper";
import {TourWizardPopperComponent} from "./tour-wizard-popper.component";
import {TourWizardAnchorDirective} from "./tour-wizard-anchor.directive";
import {TourWizardService} from "./tour-wizard.service";
import {TourWizardKboardComponent} from "./tour-wizard-kboard.component";

@NgModule({
    imports: [
        CommonModule,
        NgxPopperModule
    ],
    declarations: [
        TourWizardPopperComponent,
        TourWizardAnchorDirective,
        TourWizardKboardComponent
    ],
    entryComponents: [
        TourWizardPopperComponent,
        TourWizardKboardComponent
    ],
    exports: [
        NgxPopperModule,
        TourWizardPopperComponent,
        TourWizardAnchorDirective,
        TourWizardKboardComponent
    ],
    providers: [
        TourWizardService
    ]
})
export class TourWizardModule {
}
