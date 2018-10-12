import {Component, OnDestroy, TemplateRef, ViewChild} from "@angular/core";
import {ViewEncapsulation} from "@angular/core";
import {Placements, PopperContent} from "ngx-popper";
import {TourWizardService} from "./tour-wizard.service";
import {TourWizardStep} from "./tour-wizard.model";

@Component({
    selector: "tour-wizard-popper-component",
    templateUrl: "./tour-wizard-popper.component.html",
    styleUrls: ["./tour-wizard-popper.component.scss"],
    encapsulation: ViewEncapsulation.None
})
export class TourWizardPopperComponent implements OnDestroy {

    @ViewChild(PopperContent) tourWizardPopper: PopperContent;

    isActive: boolean = false;
    popperPlacement: Placements = "top";
    popperTarget: HTMLElement;
    step: TourWizardStep;
    stepTemplate: TemplateRef<{ step: TourWizardStep }>;

    // private _listener: () => void;

    constructor(public tourWizardService: TourWizardService,
                // private _renderer: Renderer2
    ) {
    }

    hidePopper(): void {
        this.tourWizardPopper.hide();
        this.isActive = false;
        // (typeof this._listener === typeof isNaN) && this._listener();
    }


    ngOnDestroy(): void {
        this.hidePopper();
    }

    setTarget($target: any) {
        this.popperTarget = $target;
    }

    showPopper(): void {
        if (!this.isActive) {
            this.isActive = true;
            this.tourWizardPopper.show();
            window.dispatchEvent(new Event("resize"));
            // this._listener = this._renderer.listen("document", "click", this._popperClickHandler.bind(this));
        }
    }

    /* private _popperClickHandler($event: MouseEvent): void {
         const popperNative = this.tourWizardPopper.elemRef.nativeElement;
         if ($event.srcElement &&
             $event.srcElement === popperNative ||
             popperNative.contains($event.srcElement)) {
             return;
         }
         this.hidePopper();
     } */
}

