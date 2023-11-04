#16.0.1
* Fix dependencies

#16.0.0
* Upgrade for Angular 16! 🎉

#15.0.1
* Version bump

#15.0.0
* Upgrade for Angular 15! 🎉

#14.1.0
* Removed lodash dependency

#14.0.1
* Version bump

#14.0.0
* Upgrade for Angular 14! 🎉

#13.1.2
* Improved readme

#13.1.1
* Added required dependencies to dependencies, instead of peerDependencies, because it doesn't make sense having to install them  
* Inverted changelog

#13.1.0
* Removed TourWizardDomService in favour of @ngx-tonysamperi/dom to have more modular and maintanable code

#13.0.2
* Version bump

#13.0.1
* Updated to Angular 13.x

#13.0.0
* Allowing all minor versions of Angular 12
* Updated min version of ngx-popperjs
* Fixed viewport-utils version

#12.1.0
* Updated deps for Angular 12

#12.0.0
* Updated deps for Angular 11

#11.0.0
* Updated deps for Angular 10

#10.0.0
* Updated deps for Angular 9
* Improved basic appearance of popper buttons

#9.0.0
* Dependencies updated

#8.0.3
* Improved appearance
* Refactor and cleanup
* Created a proper demo and demo site inspired to ngx-popperjs

#8.0.2
* Version bump to fix Readme

#8.0.1
* Update to Angular 8
* Switched to ngx-popperjs
* Update to gulp 4 (dev only)

#8.0.0
* Improved overlay handling on step change
* Misc and refactor

#7.2.5-beta.1
* Changed overlay behaviour to grant compatibility with Safari (mainly on iOS)
* Handled overlay with resize
* Removed unnecessary styles
* Misc and refactor

#7.2.5-beta.0
* Updated js-viewport-utils

#7.2.4
* Fixed keyboard listener behaviour

#7.2.3
* Version bump

#7.2.2
* Solved performance issue when using custom template in popper
* Events subscriptions managed through "takeUntil"
* Misc and refactor

#7.2.1
* Upgrade to Angular 7

#7.2.0
* Fixed missing info in lib package

#6.1.11
* Upgrade to Angular 6

#6.1.10
* Improve readme preview for NPM

#1.0.37
* TourWizardModule config param was meant to be optional, "?" added in forRoot()
* Added missing @Inject in TourWizardService constructor resolving a warning when using AOT in my app

#1.0.36
* Added missing listing in TourWizardModule exports

#1.0.35
* Exported missing components to be used manually

#1.0.34
* Added vars to change "Gloria Halleluja" font url and format in tour-wizard-vars.scss

#1.0.33
* Fixed usage of protected member in hostBinding

#1.0.32
* Changed interpolation to [innerHTML] to allow static HTML as popper content

#1.0.31
* Added last step data to end$ event
* Added option to delay append of backdrop component and keyboard component

#1.0.30
* Added data to pause$ event in tour-wizard.service
* Added "onPauseClick" in TourWizardStep

#1.0.29
* Fixed remote anchor target

#1.0.28
* Consistent style for gulpfile

#1.0.27
* Fixed handling of "targetElement" (removed overwriting)

#1.0.26
* Improved step options "targetElement" to allow string selector (lazy loaded elements)
* Added step option for "customPopperContent", to pass an elementRef

#1.0.25
* Replaced carets (^) in package with tildes (~)

#1.0.24
* Removed expression from @hostBinding in TourWizardOverlayComponent to avoid "dirty checked warning"
* Fixed ng-packagr version due to dependency issues
* Removed package-lock
* Removed package-bak
* Added pack task in gulpfile and package.json
* Refactor

#1.0.22-1.0.23
* Added $tour-zindex-factor to enable customization
* Increased zindex-factor to 100

#1.0.21
* Added TourWizardService.unregisterAll to clear all anchors at once
* Added TourWizardService.navigating to handle pending navigation and prevent keyboard issues

#1.0.20
* Used lodash to avoid step reference issues

#1.0.19
* Fixed loosing currentStep reference when calling initialize
* Changed access modifiers on TourWizardEvents (made public to avoid filtering events$)
* Refactor

#1.0.18
* Set node-sass version to 4.9.3
* Fixed TourWizardService._tourState change on initialize (It's possible to update steps even with active tour)
* Refactor

#1.0.17
* Added prevSubject and prevCallback
* package.json improved
* Fixed linting config
* Refactor

#1.0.16
* Switched to CustomEvent for IE Compatibility (polyfill required - see ReadMe)

#1.0.15
* Linked missing popper options
* Allowed override of target
* Removed fixed arrows from buttons
* Changed BtnContent to be HTML
* Moved popper max-width to styles
* Removed useless CSS rules for [tourKboard]
* Removed unused placement prop in Step (use popperSettings instead)
* Refactor

#1.0.14
* Fixed double hide when using nextSubject
* Refactor

#1.0.13
* Added nextSubject to handle async step loading
* Added nextCallback on single step
* Fixed smooth scroll issue on keyboard navigation

#1.0.12
* Added additionalViewports to module options, to check other viewports other than window
* Fixed z-index for popper and anchor (popper must be over everything)

#1.0.11
* Fixed css rule messing with buttons style
* Removed encapsulation for easier styling

#1.0.10
* Fixed missing implementation on pause button
* Wrong CSS classname fixed

#1.0.9
* Added host attribute for tourWizardAnchor to keep styling when using attr binding

#1.0.8
* Missing type causing build issues fixed

#1.0.7
* Added optional forRoot method to be used in your root Module to pass options (see ReadMe)
* Fixed readme wrong reference: NgxTourWizardModule instead of TourWizardModule

#1.0.6
* Fixed wrong ref to SCSS

#1.0.5
* Fixed missing SCSS dependency
* Fixed missing text and options for PAUSE button

#1.0.4
* Moved scss vars in tour-wizard-vars.scss
* Moved backdrop to unique component
* Better handling of backdrop and keyboard listener
* Set backdrop optional
* Added licence
* Fixed package.json (license, keywords, etc)
* Changed build:tour cmd to build:lib (consistent package style)
* Set optional next/prev buttons
* Added pause button (optional, default hidden)
* Refactor

#1.0.3
* Removed export of NgxPopperModule breaking with modules which already import that
* Fixed default z-index
* Used defaults in SCSS
* Postponed popper init to AfterViewInit

#1.0.2
* Release

#1.0.0
* Added popperDefaults in TourWizardOptions
