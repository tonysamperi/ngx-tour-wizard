import {Component, OnInit} from "@angular/core";
//
import {NgxTourWizardService, NgxTourWizardStep} from "ngx-tour-wizard";
//
import pkg from "../../../../package.json";
import {catchError, of, switchMap, timer, Subject} from "rxjs";
import {ajax, AjaxResponse} from "rxjs/ajax";
import TypeWriter from "typewriter-effect/dist/core.js";

@Component({
    selector: "tour-wizard-app",
    templateUrl: "app.component.html",
    styleUrls: ["app.component.scss"]
})
export class NgxTourWizardAppComponent implements OnInit {

    get buildRef(): string {
        return `${pkg.version}-build-${pkg.build}`;
    }

    firstAnchor: string = "FOO_1";
    messages: { opts?: { delay?: number | "natural"; loop?: boolean; }; text: string; }[] = [];
    year: number = new Date().getFullYear();

    private _fooTwo$: Subject<boolean> = new Subject();
    private _fooThree$: Subject<boolean> = new Subject();

    constructor(private _tourWizardService: NgxTourWizardService) {

    }

    ngOnInit(): void {
        this._initTour();
        this._getMessages("[pop-messages]");
    }

    startTour(): void {
        this._tourWizardService.start();
    }

    private _getMessages(wrapperSelector: string): void {
        ajax.get(`./assets/messages.json`)
            .pipe(
                switchMap((resp: AjaxResponse<any>) => {
                    this.messages = resp.response.messages;

                    return timer(150);
                }),
                catchError(() => of([]))
            )
            .subscribe({
                next: () => {
                    this.messages.forEach(({text, opts = {}}, i: number) => {
                        const tw = new TypeWriter(`${wrapperSelector} li:nth-child(${i + 1})`, {
                            strings: !!opts.loop ? [text] : void 0,
                            autoStart: !!opts.loop,
                            loop: !!opts.loop,
                            delay: opts.delay || "natural"
                        });
                        if (!opts.loop) {
                            tw.typeString(text).stop().start();
                        }
                        else {
                            console.info("AUTOSTART WAS TRUE FOR", text);
                        }
                    });
                }
            });
    }

    private _initTour(): void {
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
        ] as NgxTourWizardStep[]);
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
