import {Placement, Trigger} from "ngx-popper";
import {ComponentRef} from "@angular/core";

export enum TourWizardState {
    OFF,
    ON,
    PAUSED
}

export interface TourWizardOptions {
    backdropEnabled: boolean;
    backdropTarget: string;
    keyboardEnabled: boolean;
}

export const tourWizardDefaults = {
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

export interface TourWizardStep {
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
    // Popper options
    placement?: Placement;
    popperSettings?: {
        boundariesElement?: string;
        closeOnClickOutside?: boolean;
        disableAnimation?: boolean;
        disabled?: boolean;
        disableStyle?: boolean;
        forceDetection?: boolean;
        hideOnClickOutside?: boolean;
        hideOnScroll?: boolean;
        hideTimeout?: number;
        popperModifiers?: any;
        popperOnHidden?: any;
        popperOnShown?: any;
        positionFixed?: boolean;
        showDelay?: number;
        showOnStart?: boolean;
        showTrigger?: Trigger;
        targetElement?: HTMLElement;
        timeoutAfterShow?: number;
    };
}
