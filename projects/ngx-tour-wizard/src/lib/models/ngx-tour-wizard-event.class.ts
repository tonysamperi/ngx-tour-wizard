import {NgxTourWizardEventNames} from "./ngx-tour-wizard-event-names.enum";

export class NgxTourWizardEvent {

    constructor(public name: NgxTourWizardEventNames,
                public value?: any) {
    }
}
