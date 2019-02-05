import {NgModule, ModuleWithProviders, Provider, InjectionToken} from "@angular/core";
import {CommonModule} from "@angular/common";
import {NgxPopperModule} from "ngx-popper";
import {TourWizardPopperComponent} from "./tour-wizard-popper/tour-wizard-popper.component";
import {TourWizardKboardComponent} from "./tour-wizard-kboard/tour-wizard-kboard.component";
import {TourWizardOverlayComponent} from "./tour-wizard-overlay/tour-wizard-overlay.component";
import {TourWizardAnchorDirective} from "./tour-wizard-anchor/tour-wizard-anchor.directive";
import {TourWizardService} from "./tour-wizard-services/tour-wizard.service";
import {TourWizardDomService} from "./tour-wizard-services/tour-wizard-dom.service";
import {tourWizardDefaults, TourWizardOptions, TourWizardStep} from "./tour-wizard-models/tour-wizard.model";

// tslint:disable-next-line:naming-convention
export const TOUR_WIZARD_DEFAULTS = new InjectionToken<TourWizardOptions>("TOUR_WIZARD_DEFAULTS");

export function setupTourWizardService(config: TourWizardOptions): TourWizardService<TourWizardStep> {
    return new TourWizardService(config);
}

export function provideTourWizardConfig(config: TourWizardOptions = tourWizardDefaults): any {
    return [
        {provide: TOUR_WIZARD_DEFAULTS, multi: false, useValue: config},
    ];
}

// tslint:disable-next-line:naming-convention
export const TOUR_WIZARD_PROVIDERS: Provider[] = [
    {
        provide: TourWizardService,
        useFactory: setupTourWizardService,
        deps: [TOUR_WIZARD_DEFAULTS]
    }
];

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
        TourWizardKboardComponent,
        TourWizardOverlayComponent
    ],
    providers: [
        TourWizardDomService,
        TOUR_WIZARD_PROVIDERS,
        provideTourWizardConfig(),
    ]
})
export class TourWizardModule {

    static forRoot(config?: TourWizardOptions): ModuleWithProviders {
        return {
            ngModule: TourWizardModule,
            providers: [
                TOUR_WIZARD_PROVIDERS,
                provideTourWizardConfig(config)
            ]
        };
    }
}
