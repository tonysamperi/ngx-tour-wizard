import {Placement, Trigger} from "ngx-popper";

export enum TourWizardState {
    OFF,
    ON,
    PAUSED
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
    nextBtnTitle?: string;
    endBtnTitle?: string;
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
