import {Placement} from "ngx-popper";
import {ComponentRef} from "@angular/core";
import {Subject} from "rxjs/Subject";
import {TemplateRef} from "@angular/core";

export enum TourWizardState {
    OFF,
    ON,
    PAUSED
}

export interface TourWizardOptions {
    backdropEnabled: boolean;
    backdropTarget: string;
    keyboardEnabled: boolean;
    additionalViewports?: string[];
    appendDelay?: number;
}

export const tourWizardDefaults: TourWizardOptions = {
    backdropEnabled: true,
    backdropTarget: "body",
    keyboardEnabled: true
};

export interface TourWizardCompData {
    comp: any;
    key?: string;
    targetSelector?: string;
}

export interface TourWizardEvent {
    name: string;
    value: any;
}

export interface TourWizardRefs<T = any> {
    [key: string]: ComponentRef<T>;
}

export interface TourWizardPopperSettings {
    showDelay?: number;
    disableAnimation?: boolean;
    disableDefaultStyling?: boolean;
    placement?: Placement;
    boundariesElement?: string;
    // trigger?: Trigger; // Trigger cannot be changed
    positionFixed?: boolean;
    // hideOnClickOutside?: boolean; // Still to develop
    // hideOnMouseLeave?: boolean; // Maybe to develop
    // hideOnScroll?: boolean; // Maybe to develop
    // popperModifiers?: {}; // Not sure if this has a real utility
    ariaRole?: string;
    ariaDescribe?: string;
    applyClass?: string;
    applyArrowClass?: string;
    styles?: Object;
    appendTo?: string;
}

export interface TourWizardPopperFace {
    step: TourWizardStep;
}

export interface TourWizardStep {
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
    customPopperContent?: TemplateRef<TourWizardPopperFace>;
    // Popper options
    popperSettings?: TourWizardPopperSettings;
}

