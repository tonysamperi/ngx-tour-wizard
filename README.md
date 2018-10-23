# ngxTourWizard 1.0.20

A cool Angular5+ module for intro tours!

# Before starting

##IMPORTANT for IE

This library use CustomEvents. If you want compatibility with IE,
you should add a polyfill to your app polyfills.ts.

See polyfill on [gist](https://gist.github.com/tonysamperi/0e73f8489000e8261600a92af92748c1)

##Styling

As you may know directives don't have a "Styles" property.
So it's impossible to let them style your markup,
**unless** you include an external CSS.

For this purpose the style of directives is compiled in

* /styles/ngx-tour-wizard.css
* /styles/ngx-tour-wizard.scss

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
<span class="tour-wizard-button tour-wizard-text-gloria"
          (click)="startTour()">
    Start tour
</span>
<any class="tour-wizard-text-gloria" tourWizardAnchor="FOO_1">MY ANCHOR 1 </any>
<any class="tour-wizard-text-gloria" tourWizardAnchor="FOO_2">MY ANCHOR 2 </any>
<any class="tour-wizard-text-gloria" tourWizardAnchor="FOO_3">MY ANCHOR 3</any>
```

```js
// SOME CONTENT
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
// SOME OTHER CONTENT
```

Versioning
Font Awesome will be maintained under the Semantic Versioning guidelines as much as possible. Releases will be numbered with the following format:

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

Attribution is required by MIT, SIL OLF, and CC BY licenses. Downloaded files already
contain embedded comments with sufficient
attribution, so you shouldn't need to do anything additional when using these
files normally.

# TODOS
* Optional pause on click outside
* Add prevSubject
* Add prevCallback
* Add option to remove backdrop and kboard on end?
