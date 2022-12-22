import {NgxTourWizardPopperSettings} from "./ngx-tour-wizard-popper-settings.interface";

export interface NgxTourWizardOptions {
    backdropEnabled: boolean;
    backdropTarget: string;
    keyboardEnabled: boolean;
    additionalViewports?: string[];
    appendDelay?: number;
    popperDefaults?: NgxTourWizardPopperSettings;
}
