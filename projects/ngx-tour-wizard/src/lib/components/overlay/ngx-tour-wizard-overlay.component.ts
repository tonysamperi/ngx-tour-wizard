import {Component, ElementRef} from "@angular/core";
//
import {NgxTourWizardService} from "../../services/ngx-tour-wizard.service";
import {NgxTourWizardEvent, NgxTourWizardOverlayStyle} from "../../models/public";
//
import {debounceTime} from "rxjs/operators";
import {fromEvent} from "rxjs";

const overlayInitStyle = (): NgxTourWizardOverlayStyle => ({display: "none"});

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
    styleUrls: ["./ngx-tour-wizard-overlay.component.scss"]
})
export class NgxTourWizardOverlayComponent {

    showOverlay: boolean = !1;
    topStyle: NgxTourWizardOverlayStyle;
    bottomStyle: NgxTourWizardOverlayStyle;
    leftStyle: NgxTourWizardOverlayStyle;
    rightStyle: NgxTourWizardOverlayStyle;
    showCover: boolean = !0;

    constructor(private _elRef: ElementRef,
                private _tourWizardService: NgxTourWizardService) {
        this._deleteStyles();
        this._handleResize();
        this._handleWizardEvents();
    }

    //

    protected _handleWizardEvents(): void {
        this._tourWizardService.events$
        .subscribe((event: NgxTourWizardEvent) => {

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
        this.topStyle = Object.assign({}, {
            width: `calc(100% - ${rect.left}px`,
            top: "initial",
            bottom: `calc(100% - ${rect.top + window.pageYOffset}px)`,
            left: `${rect.left}px`,
            // "background-color": `rgba(255, 0, 0, 0.5)`
        });
        this.rightStyle = Object.assign({}, {
            height: `calc(100% - ${rect.top + window.pageYOffset}px)`,
            width: `calc(100% - ${rect.left + rect.width}px`,
            //
            top: `${rect.top + window.pageYOffset}px`,
            left: `${rect.left + rect.width}px`,
            // "background-color": `rgba(0, 255, 0, 0.5)`
        });
        this.bottomStyle = Object.assign({}, {
            height: `calc(100% - ${rect.top + window.pageYOffset + rect.height}px)`,
            //
            top: `${rect.top + rect.height + window.pageYOffset}px`,
            right: `calc(100% - ${rect.left + rect.width}px`,
            // "background-color": `rgba(0, 0, 255, 0.5)`,
            left: "auto"
        });
        this.leftStyle = Object.assign({}, {
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
