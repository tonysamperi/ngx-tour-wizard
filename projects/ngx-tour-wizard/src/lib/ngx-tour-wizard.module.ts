import {NgModule, ModuleWithProviders, Provider} from "@angular/core";
import {CommonModule} from "@angular/common";
import {SmpDomModule} from "@ngx-tonysamperi/dom";
import {NgxPopperjsModule} from "ngx-popperjs";
//
import {NgxTourWizardPopperComponent, NgxTourWizardKboardComponent, NgxTourWizardOverlayComponent} from "./components/public";
import {NgxTourWizardAnchorDirective} from "./directives/public";
import {NgxTourWizardService} from "./services/public";
import {NGX_TOUR_WIZARD_DEFAULTS_TOKEN, NgxTourWizardOptions} from "./models/public";
import {NGX_TOUR_WIZARD_DEFAULTS} from "./shared/public";

function setupTourWizardService(config: NgxTourWizardOptions): NgxTourWizardService {
    return new NgxTourWizardService(config);
}

function provideTourWizardConfig(config: NgxTourWizardOptions = NGX_TOUR_WIZARD_DEFAULTS): any {
    return [
        {provide: NGX_TOUR_WIZARD_DEFAULTS_TOKEN, multi: false, useValue: config},
    ];
}

const TOUR_WIZARD_PROVIDERS: Provider[] = [
    {
        provide: NgxTourWizardService,
        useFactory: setupTourWizardService,
        deps: [NGX_TOUR_WIZARD_DEFAULTS_TOKEN]
    }
];

@NgModule({
    imports: [
        CommonModule,
        NgxPopperjsModule,
        SmpDomModule.forRoot()
    ],
    declarations: [
        NgxTourWizardPopperComponent,
        NgxTourWizardAnchorDirective,
        NgxTourWizardKboardComponent,
        NgxTourWizardOverlayComponent
    ],
    exports: [
        NgxTourWizardPopperComponent,
        NgxTourWizardAnchorDirective,
        NgxTourWizardKboardComponent,
        NgxTourWizardOverlayComponent
    ],
    providers: [
        TOUR_WIZARD_PROVIDERS,
        provideTourWizardConfig(),
    ]
})
export class NgxTourWizardModule {

    static forRoot(config?: NgxTourWizardOptions): ModuleWithProviders<NgxTourWizardModule> {
        return {
            ngModule: NgxTourWizardModule,
            providers: [
                TOUR_WIZARD_PROVIDERS,
                provideTourWizardConfig(config)
            ]
        };
    }
}
