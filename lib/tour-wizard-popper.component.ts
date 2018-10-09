import {
    Component, OnDestroy, ViewChild,
    // Renderer2,
    TemplateRef
} from "@angular/core";
import {PopperContent} from "ngx-popper";
import {TourWizardService} from "./tour-wizard.service";
import {TourWizardStep} from "./tour-wizard.model";

@Component({
    selector: "tour-wizard-popper-component",
    templateUrl: "./tour-wizard-popper.component.html",
    styleUrls: ["./tour-wizard-popper.component.scss"]
})
export class TourWizardPopperComponent implements OnDestroy {

    @ViewChild(PopperContent) tourWizardPopper: PopperContent;

    isActive: boolean = false;
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
