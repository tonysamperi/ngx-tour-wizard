#1.0.0
* Release

#1.0.2
* Removed export of NgxPopperModule breaking with modules which already import that
* Fixed default z-index
* Used defaults in SCSS
* Postponed popper init to AfterViewInit

#1.0.3
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

#1.0.4
* Fixed missing SCSS dependency
* Fixed missing text and options for PAUSE button

#1.0.5
* Fixed wrong ref to SCSS

#1.0.6
* Added optional forRoot method to be used in your root Module to pass options (see ReadMe)
* Fixed readme wrong reference: NgxTourWizardModule instead of TourWizardModule

#1.0.7
* Missing type causing build issues fixed

#1.0.8
* Added host attribute for tourWizardAnchor to keep styling when using attr binding

#1.0.9
* Fixed missing implementation on pause button
* Wrong CSS classname fixed

#1.0.10
* Fixed css rule messing with buttons style
* Removed encapsulation for easier styling

#1.0.11
* Added additionalViewports to module options, to check other viewports other than window
* Fixed z-index for popper and anchor (popper must be over everything)

#1.0.12
* Added nextSubject to handle async step loading
* Added nextCallback on single step
* Fixed smooth scroll issue on keyboard navigation

#1.0.13
* Fixed double hide when using nextSubject
* Refactor

#1.0.14
* Linked missing popper options
* Allowed override of target
* Removed fixed arrows from buttons
* Changed BtnContent to be HTML
* Moved popper max-width to styles
* Removed useless CSS rules for [tourKboard]
* Removed unused placement prop in Step (use popperSettings instead)
* Refactor

#1.0.15
* Switched to CustomEvent for IE Compatibility (polyfill required - see ReadMe)

#1.0.16
* Added prevSubject and prevCallback
* package.json improved
* Fixed linting config
* Refactor

#1.0.17
* Set node-sass version to 4.9.3
* Fixed TourWizardService._tourState change on initialize (It's possible to update steps even with active tour)
* Refactor

#1.0.18
* Fixed loosing currentStep reference when calling initialize
* Changed access modifiers on TourWizardEvents (made public to avoid filtering events$)
* Refactor

#1.0.19
* Used lodash to avoid step reference issues
