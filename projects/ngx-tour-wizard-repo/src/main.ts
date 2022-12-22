import {enableProdMode} from "@angular/core";
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";

import {TourWizardAppModule} from "./app/app.module";
import {environment} from "./environments/environment";

if (environment.production) {
    enableProdMode();
}

platformBrowserDynamic().bootstrapModule(TourWizardAppModule)
    .catch(err => console.log(err));

