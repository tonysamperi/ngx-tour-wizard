# ngx-tour-wizard

A cool Angular8+ module for intro tours!
NgxTourWizard a highly customizable library. Popper are made with NgxPopperjs.

[![npm](https://img.shields.io/npm/v/ngx-tour-wizard.svg?style=flat-square)](https://www.npmjs.com/package/ngx-tour-wizard) 
[![npm](https://img.shields.io/npm/dm/ngx-tour-wizard.svg?style=flat-square)](https://www.npmjs.com/package/ngx-tour-wizard) 
[![MIT licensed](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://github.com/tonysamperi/ngx-tour-wizard/blob/master/LICENSE)
[![Build Status](https://travis-ci.org/tonysamperi/ngx-tour-wizard.svg?branch=master)](https://travis-ci.org/tonysamperi/ngx-tour-wizard)
[![Size](https://img.shields.io/bundlephobia/min/ngx-tour-wizard)](https://unpkg.com/ngx-tour-wizard@8.0.0/bundles/ngx-tour-wizard.umd.js)

# Before starting

##IMPORTANT for IE

This library use CustomEvents. If you want compatibility with IE,
you should add a polyfill to your app polyfills.ts.

See polyfill on [gist](https://gist.github.com/tonysamperi/0e73f8489000e8261600a92af92748c1)

##Styling

As you may know directives don't have a "Styles" property.
So it's impossible to let them style your markup,
**unless** you include an external CSS.

For this purpose you can import prebuild themes for NgxTourWizard...

...in SASS style, where you can edit variables (it's very straight forward so read the source)

`@import "node_modules/ngx-tour-wizard/scss/tour-wizard.scss";`

...or in CSS style (and you can always override everything you want)

 `@import "node_modules/ngx-tour-wizard/css/tour-wizard.css";`

Be sure of including at least one of these in your styles.css / styles.scss
to get the basic style

## Installation

```bash
$ npm install ngx-tour-wizard@latest
```

and then from your Angular `AppModule`:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Import what you need from ngx-mat-lib
import { TourWizardModule } from 'ngx-tour-wizard';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,

    // Specify the import
    TourWizardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

You can optionally use the `forRoot()` method and pass tourWizardDefaults as follows

```js
// ...
providers: [
    TourWizardModule.forRoot({
        backdropTarget: ".my-selector",
        backdropEnabled: true,
        keyboardEnabled: false
    })
]
// ...
```

Once your library is imported, you can use its components, directives and pipes in your Angular application:

```html
<!-- You can now use your library component in app.component.html -->
<h1>
  {{title}}
</h1>
<span (click)="startTour()">
    Start tour
</span>
<any tourWizardAnchor="FOO_1">MY ANCHOR 1 </any>
<any tourWizardAnchor="FOO_2">MY ANCHOR 2 </any>
<any tourWizardAnchor="FOO_3">MY ANCHOR 3</any>
```

```typescript
import { TourWizardService, TourWizardStep } from 'ngx-tour-wizard';

export class MyComponent {

    constructor(private _tourWizardService: TourWizardService) {
    }

    ngOnInit(): void {
        this._tourWizardService.initialize([
            {
                anchorId: "FOO_1",
                content: "Some text for FOO 1",
                title: "First"
            },
            {
                anchorId: "FOO_2",
                content: "Some other stuff for FOO 2",
                title: "Second"
            },
            {
                anchorId: "FOO_3",
                content: "Let's finish this up!!!",
                title: "Third"
            },
        ] as TourWizardStep[]);
    }

    startTour(): void {
        this._tourWizardService.start();
    }
}

```

Versioning
NgxTourWizard will be maintained under the Semantic Versioning guidelines as much as possible. Releases will be numbered with the following format:

<major>.<minor>.<patch>

And constructed with the following guidelines:

Breaking backward compatibility bumps the major (and resets the minor and patch)
New additions, including new icons, without breaking backward compatibility bumps the minor (and resets the patch)
Bug fixes, changes to brand logos, and misc changes bumps the patch
For more information on SemVer, please visit http://semver.org.

## License

MIT © [Tony Samperi](mailto:github@tonysamperi.it)

This library is free, open source, and GPL friendly. You can use it for
commercial projects, open source projects, or really almost whatever you want.

Attribution is required by MIT, SIL OLF, and CC BY licenses.
Downloaded files already contain embedded comments with sufficient attribution,
so you shouldn't need to do anything additional when using these files normally.

# TODOS
* IMPORTANT!! Add optional ID for backdrop, or custom backdrop
* Optional pause on click outside
* Add option to remove backdrop and kboard on end?
* Disable tour on route change??
* Disable scrolling between 2 steps?
