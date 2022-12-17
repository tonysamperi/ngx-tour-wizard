import {Component, OnInit} from "@angular/core";
//
import {TourWizardService, TourWizardStep} from "ngx-tour-wizard";
//
import pkg from "../../../../package.json";
import {Subject} from "rxjs";

@Component({
    selector: "tour-wizard-app",
    templateUrl: "tour-wizard-app.component.html",
    styleUrls: ["./tour-wizard-app.component.scss"]
})
export class TourWizardAppComponent implements OnInit {

    get buildRef(): string {
        return `${pkg.version}-build-${pkg.build}`;
    }

    firstAnchor: string = "FOO_1";
    year: number = new Date().getFullYear();

    private _fooTwo$: Subject<boolean> = new Subject();
    private _fooThree$: Subject<boolean> = new Subject();

    constructor(private _tourWizardService: TourWizardService) {

    }

    ngOnInit(): void {
        this._tourWizardService.initialize([
            {
                anchorId: this.firstAnchor,
                content: `Define in your class an array (TourWizardStep[ ]) with your steps, setting at least <strong>anchorId</strong> and <strong>content</strong>.
<br />The <em>content property can contain a HTML string</em>`,
                title: "1) SET UP THE DATA"
            },
            {
                anchorId: "FOO_2",
                content: "call the TourWizardService <strong>initialize</strong> method and provide the previously defined array",
                title: "2) Init the tour",
                subjectForNext: this._fooTwo$,
                targetElement: ".tour-wizard-my-target",
                onNextClick: () => {
                    this._onFooTwoNext();
                }
            },
            {
                anchorId: "FOO_3",
                content: "Bind anchor IDs on your anchors with the [tourWizardAnchor] attribute",
                title: "3) HTML markup",
                subjectForPrev: this._fooThree$,
                onPrevClick: () => {
                    this._onFooThreePrev();
                }
            },
            {
                anchorId: "FOO_4",
                content: "To start the tour call the <strong>start</strong> method of the <strong>TourWizardService</strong>",
                title: "4) Start the tour",
                popperSettings: {
                    styles: {
                        maxWidth: 190,
                        backgroundColor: "#002143"
                    }
                }
            }
        ] as TourWizardStep[]);
    }

    startTour(): void {
        this._tourWizardService.start();
    }

    private _onFooThreePrev(): void {
        setTimeout(() => {
            this._fooThree$.next(true);
        }, 2000);
    }

    private _onFooTwoNext(): void {
        setTimeout(() => {
            this._fooTwo$.next(true);
        }, 2000);
    }

}
