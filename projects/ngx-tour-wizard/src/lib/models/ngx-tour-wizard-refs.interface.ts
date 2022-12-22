import {ComponentRef} from "@angular/core";

export interface NgxTourWizardRefs<T = any> {
    [key: string]: ComponentRef<T>;
}
