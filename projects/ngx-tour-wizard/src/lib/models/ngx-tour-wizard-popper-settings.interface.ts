import {NgxPopperjsPlacements, NgxPopperjsOptions} from "ngx-popperjs";

export interface NgxTourWizardPopperSettings {
    showDelay?: number;
    disableAnimation?: boolean;
    disableDefaultStyling?: boolean;
    placement?: NgxPopperjsPlacements;
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
    styles?: NgxPopperjsOptions["styles"];
    appendTo?: string;
}
