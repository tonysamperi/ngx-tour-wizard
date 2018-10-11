import {Injectable} from "@angular/core";
import {ComponentFactoryResolver} from "@angular/core";
import {ApplicationRef} from "@angular/core";
import {Injector} from "@angular/core";
import {EmbeddedViewRef} from "@angular/core";
import {TourWizardRefs} from "./tour-wizard.model";

@Injectable()
export class TourWizardDomService {

    private _refs: TourWizardRefs = {};

    constructor(
        private _componentFactoryResolver: ComponentFactoryResolver,
        private _appRef: ApplicationRef,
        private _injector: Injector) {
    }

    appendCompToBody(component: any, key?: string) {
        // 1. Create a component reference from the component
        const componentRef = this._componentFactoryResolver
        .resolveComponentFactory(component)
        .create(this._injector);

        // 2. Attach component to the appRef so that it's inside the ng component tree
        this._appRef.attachView(componentRef.hostView);

        // 3. Get DOM element from component
        const domElem = (componentRef.hostView as EmbeddedViewRef<any>)
            .rootNodes[0] as HTMLElement;

        // 4. Append DOM element to the body
        document.body.appendChild(domElem);

        if (!!key) {
            !!this._refs[key] && console.warn("A ref with this key already exists and will be overwritten");
            this._refs[key] = componentRef;
        }
        else {
            console.warn("Component appended, but key wasn't provided. It won't be possible to remove it from the DOM automagically");
        }

    }

    removeCompFromBody(key: string) {
        if (!!this._refs[key]) {
            const componentRef = this._refs[key];
            this._appRef.detachView(componentRef.hostView);
            componentRef.destroy();
        }
        else {
            console.warn(`No ref found with key ${key}`);
        }
    }
}
