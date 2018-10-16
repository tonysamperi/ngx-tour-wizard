import {Component, OnInit} from "@angular/core";
import {TourWizardService, TourWizardStep} from "ngx-tour-wizard";
import {Subject} from "rxjs";

@Component({
    selector: "tour-wizard-app",
    templateUrl: "tour-wizard-app.component.html",
    styleUrls: ["./tour-wizard-app.component.scss"],
})
export class TourWizardAppComponent implements OnInit {

    firstAnchor: string = "FOO_1";

    private _fooTwo$: Subject<boolean> = new Subject();

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
                content: "Some other stuff for FOO 2",
                title: "Second",
                subjectForNext: this._fooTwo$,
                onNextClick: () => {
                    this._onFooTwoNext();
                }
            },
            {
                anchorId: "FOO_3",
                content: "Let's finish this up!!!",
                title: "Third"
            },
        ] as TourWizardStep[]);
    }

    startTour(): void {
        this._tourWizardService.start();
    }

    private _onFooTwoNext(): void {
        setTimeout(() => {
            this._fooTwo$.next(true);
        }, 2000);
    }
}


/**  Copyright 2018 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license */
