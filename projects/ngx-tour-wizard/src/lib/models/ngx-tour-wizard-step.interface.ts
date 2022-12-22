import {TemplateRef} from "@angular/core";
import {Subject} from "rxjs";
//
import {NgxTourWizardPopperSettings} from "./ngx-tour-wizard-popper-settings.interface";
import {NgxTourWizardPopperFace} from "./ngx-tour-wizard-popper-face.interface";

export interface NgxTourWizardStep {
    subjectForNext?: Subject<boolean>;
    subjectForPrev?: Subject<boolean>;
    onNextClick?: () => void;
    onPauseClick?: () => void;
    onPrevClick?: () => void;
    stepId?: string;
    anchorId?: string;
    title?: string;
    content?: string;
    nextStep?: number | string;
    prevStep?: number | string;
    preventScrolling?: boolean;
    prevBtnTitle?: string;
    pauseBtnTitle?: string;
    nextBtnTitle?: string;
    endBtnTitle?: string;
    hidePrevButton?: boolean;
    hideNextButton?: boolean;
    showPauseButton?: boolean;
    targetElement?: string | HTMLElement;
    customPopperContent?: TemplateRef<NgxTourWizardPopperFace>;
    // Popper options
    popperSettings?: NgxTourWizardPopperSettings;
}
