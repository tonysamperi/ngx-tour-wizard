import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {NgxPopperModule} from "ngx-popper";
import {TourWizardPopperComponent} from "./tour-wizard-popper.component";
import {TourWizardKboardComponent} from "./tour-wizard-kboard.component";
import {TourWizardOverlayComponent} from "./tour-wizard-overlay.component";
import {TourWizardAnchorDirective} from "./tour-wizard-anchor.directive";
import {TourWizardService} from "./tour-wizard.service";
import {TourWizardDomService} from "./tour-wizard-dom.service";

@NgModule({
    imports: [
        CommonModule,
        NgxPopperModule
    ],
    declarations: [
        TourWizardPopperComponent,
        TourWizardAnchorDirective,
        TourWizardKboardComponent,
        TourWizardOverlayComponent
    ],
    entryComponents: [
        TourWizardPopperComponent,
        TourWizardKboardComponent,
        TourWizardOverlayComponent
    ],
    exports: [
        TourWizardPopperComponent,
        TourWizardAnchorDirective,
        TourWizardKboardComponent
    ],
    providers: [
        TourWizardService,
        TourWizardDomService
    ]
})
export class TourWizardModule {
}
