import {Component, OnInit} from "@angular/core";
import {TourWizardService, TourWizardStep} from "ngx-tour-wizard";
import {Subject} from "rxjs/Subject";

@Component({
    selector: "tour-wizard-app",
    templateUrl: "tour-wizard-app.component.html",
    styleUrls: ["./tour-wizard-app.component.scss"],
})
export class TourWizardAppComponent implements OnInit {

    firstAnchor: string = "FOO_1";

    private _fooTwo$: Subject<boolean> = new Subject();
    private _fooThree$: Subject<boolean> = new Subject();

    constructor(private _tourWizardService: TourWizardService) {

    }

    ngOnInit(): void {
        this._tourWizardService.initialize([
            {
                anchorId: "FOO_1",
                content: "Some text for FOO 1",
                title: "First"
            },
            {
                anchorId: "FOO_2",
                content: "Some other stuff for FOO 2. Next anchor will fire after 2 seconds!!",
                title: "Second",
                subjectForNext: this._fooTwo$,
                targetElement: ".tour-wizard-my-target",
                onNextClick: () => {
                    this._onFooTwoNext();
                }
            },
            {
                anchorId: "FOO_3",
                content: "Let's finish this up!!!",
                title: "Third",
                subjectForPrev: this._fooThree$,
                onPrevClick: () => {
                    this._onFooThreePrev();
                }
            },
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
