import {Component, ElementRef} from "@angular/core";
import {TourWizardService} from "../tour-wizard-services/tour-wizard.service";
import {TourWizardEvent, TourWizardOverlayStyle} from "../tour-wizard-models/tour-wizard.model";
//
import {extend} from "lodash";
import {debounceTime} from "rxjs/operators";
import {fromEvent} from "rxjs";

const overlayInitStyle = (): TourWizardOverlayStyle => ({display: "none"});

@Component({
    selector: "tour-wizard-overlay",
    host: {
        "[class.show]": "showOverlay"
    },
    template: `
        <div class="tour-wizard-cover" [ngClass]="{'hide': !showCover}"></div>
        <div class="tour-wizard-overlay top" [ngStyle]="topStyle"></div>
        <div class="tour-wizard-overlay right" [ngStyle]="rightStyle"></div>
        <div class="tour-wizard-overlay bottom" [ngStyle]="bottomStyle"></div>
        <div class="tour-wizard-overlay left" [ngStyle]="leftStyle"></div>
    `,
    styleUrls: ["./tour-wizard-overlay.component.scss"]
})
export class TourWizardOverlayComponent {

    showOverlay: boolean = !1;
    topStyle: TourWizardOverlayStyle;
    bottomStyle: TourWizardOverlayStyle;
    leftStyle: TourWizardOverlayStyle;
    rightStyle: TourWizardOverlayStyle;
    showCover: boolean = !0;

    constructor(private _elRef: ElementRef,
                private _tourWizardService: TourWizardService) {
        this._deleteStyles();
        this._handleResize();
        this._handleWizardEvents();
    }

    //

    protected _handleWizardEvents(): void {
        this._tourWizardService.events$
        .subscribe((event: TourWizardEvent) => {

            if (this._tourWizardService.isBackdropEnabled) {
                if (event.name === "start" || event.name === "resume") {
                    const $parent = this._elRef.nativeElement.parentElement;
                    $parent.style.position = "relative";
                    this.showOverlay = !0;
                }
                if (event.name === "stepHide") {
                    this._deleteStyles();
                }
                if (event.name === "stepShow") {
                    this._calcStyles();
                }

            }
            if (event.name === "end" || event.name === "pause") {
                this._deleteStyles();
                this.showOverlay = !1;
            }
        });
    }

    protected _calcStyles(): void {
        const rect = this._tourWizardService.getActiveAnchorBoundaries();
        if (!rect) {
            return this._deleteStyles();
        }
        this.topStyle = extend({}, {
            width: `calc(100% - ${rect.left}px`,
            top: "initial",
            bottom: `calc(100% - ${rect.top + window.pageYOffset}px)`,
            left: `${rect.left}px`,
            // "background-color": `rgba(255, 0, 0, 0.5)`
        });
        this.rightStyle = extend({}, {
            height: `calc(100% - ${rect.top + window.pageYOffset}px)`,
            width: `calc(100% - ${rect.left + rect.width}px`,
            //
            top: `${rect.top + window.pageYOffset}px`,
            left: `${rect.left + rect.width}px`,
            // "background-color": `rgba(0, 255, 0, 0.5)`
        });
        this.bottomStyle = extend({}, {
            height: `calc(100% - ${rect.top + window.pageYOffset + rect.height}px)`,
            //
            top: `${rect.top + rect.height + window.pageYOffset}px`,
            right: `calc(100% - ${rect.left + rect.width}px`,
            // "background-color": `rgba(0, 0, 255, 0.5)`,
            left: "auto"
        });
        this.leftStyle = extend({}, {
            top: "auto",
            right: `calc(100% - ${rect.left}px)`,
            // "background-color": `rgba(120, 120, 0, 0.5)`,
            bottom: `calc(100% - ${rect.top + rect.height + window.pageYOffset}px)`,
            left: "auto"
        });
        this.showCover = !1;
    }

    protected _deleteStyles(): void {
        this.topStyle = this.rightStyle = this.bottomStyle = this.leftStyle = overlayInitStyle();
        this.showCover = !0;
    }

    protected _handleResize(): void {
        fromEvent(window, "resize")
        .pipe(debounceTime(150))
        .subscribe((_event_) => {
            this.showOverlay && this._calcStyles();
        });
    }

}
