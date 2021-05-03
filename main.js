(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./projects/ngx-tour-wizard/src/lib/tour-wizard-popper/tour-wizard-popper.component.html":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./projects/ngx-tour-wizard/src/lib/tour-wizard-popper/tour-wizard-popper.component.html ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-template [popper]=\"tourWizardPopper\"\n             [popperPlacement]=\"popperPlacement\"\n             popperApplyClass=\"tourWizardPopper\"\n             [popperTrigger]=\"'none'\">\n</ng-template>\n\n<ng-template #defaultTemplate let-step=\"step\">\n    <p class=\"tour-wizard-content-title\">{{step?.title}}</p>\n    <p class=\"tour-wizard-content-text\" [innerHTML]=\"step?.content\"></p>\n    <div class=\"tour-wizard-step-navigation\">\n        <button *ngIf=\"!step.hidePrevButton && tourWizardService.hasPrev(step)\"\n                class=\"tour-wizard-content-button btn-prev\"\n                [innerHTML]=\"step?.prevBtnTitle || defaultPrevBtn\"\n                (click)=\"tourWizardService.prev()\">\n        </button>\n        <button *ngIf=\"step.showPauseButton\"\n                [innerHTML]=\"step?.pauseBtnTitle || defaultPauseBtn\"\n                class=\"tour-wizard-content-button btn-pause\"\n                (click)=\"tourWizardService.pause()\">\n        </button>\n        <button *ngIf=\"!step.hideNextButton && tourWizardService.hasNext(step)\"\n                class=\"tour-wizard-content-button btn-next\"\n                [innerHTML]=\"step?.nextBtnTitle || defaultNextBtn\"\n                (click)=\"tourWizardService.next()\">\n        </button>\n        <button class=\"tour-wizard-content-button btn-end\"\n                [innerHtml]=\"step?.endBtnTitle || defaultEndBtn\"\n                (click)=\"tourWizardService.end()\">\n        </button>\n    </div>\n</ng-template>\n\n<popper-content class=\"tour-wizard-content-wrap\" #tourWizardPopper>\n    <ng-container *ngIf=\"isActive\">\n        <ng-container *ngTemplateOutlet=\"stepTemplate || defaultTemplate; context: { step: step }\">\n\n        </ng-container>\n    </ng-container>\n</popper-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tour-wizard-app.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tour-wizard-app.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->\n<!-- * * * * * * * * * * * * POPPER DEMO! :) * * * * * * * * * * * -->\n<!-- * * * * * * * * * cloned from popper.js.org * * * * * * * * * -->\n<!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->\n<div class=\"content\"\n     role=\"main\">\n    <div class=\"pop-top-section\">\n        <img class=\"pop-popper-logo\"\n             src=\"assets/images/ngx-tour-wizard-logo.svg\"\n             alt=\"NGX-TOUR-WIZARD\"/>\n        <img class=\"pop-angular-logo\"\n             alt=\"Angular Logo\"\n             src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\"\n        />\n        <h2 class=\"pop-lucky-font pop-color-primary\">THE WIZARD TO MAKE FANTASTIC INTRO TOURS</h2>\n        <div>\n            <a href=\"https://github.com/tonysamperi/ngx-tour-wizard\"\n               rel=\"nofollow noreferrer\"\n               class=\"pop-button-white\">\n                <svg xmlns=\"http://www.w3.org/2000/svg\"\n                     width=\"24\"\n                     height=\"24\"\n                     viewBox=\"0 0 24 24\"\n                     fill=\"none\"\n                     stroke=\"currentColor\"\n                     stroke-width=\"2\"\n                     stroke-linecap=\"round\"\n                     stroke-linejoin=\"round\">\n                    <path d=\"M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22\"></path>\n                </svg>\n                Star on GitHub\n            </a>\n            <a (click)=\"startTour()\"\n               class=\"pop-button-white\">\n                <svg width=\"24\"\n                     height=\"24\"\n                     aria-hidden=\"true\"\n                     data-prefix=\"far\"\n                     data-icon=\"play\"\n                     role=\"img\"\n                     xmlns=\"http://www.w3.org/2000/svg\"\n                     viewBox=\"0 0 448 512\">\n                    <path fill=\"currentColor\"\n                          d=\"M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6zM48 453.5v-395c0-4.6 5.1-7.5 9.1-5.2l334.2 197.5c3.9 2.3 3.9 8 0 10.3L57.1 458.7c-4 2.3-9.1-.6-9.1-5.2z\"></path>\n                </svg>\n                Take a tour\n            </a>\n        </div>\n    </div>\n    <div class=\"pop-install-section\">\n        <h3 class=\"pop-title-light\">\n            <svg xmlns=\"http://www.w3.org/2000/svg\"\n                 width=\"24\"\n                 height=\"24\"\n                 viewBox=\"0 0 24 24\"\n                 fill=\"none\"\n                 stroke=\"currentColor\"\n                 stroke-width=\"2\"\n                 stroke-linecap=\"round\"\n                 stroke-linejoin=\"round\"\n                 class=\"css-mc2z91\">\n                <polyline points=\"20 12 20 22 4 22 4 12\"></polyline>\n                <rect x=\"2\"\n                      y=\"7\"\n                      width=\"20\"\n                      height=\"5\"></rect>\n                <line x1=\"12\"\n                      y1=\"22\"\n                      x2=\"12\"\n                      y2=\"7\"></line>\n                <path d=\"M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z\"></path>\n                <path d=\"M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z\"></path>\n            </svg>\n            Install NGX Tour Wizard\n        </h3>\n        <div>\n            <div class=\"terminal\">\n                <ul>\n                    <li>npm i @popperjs/core</li>\n                    <li>npm i ngx-tour-wizard</li>\n                </ul>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"pop-demo\">\n        <article>\n            <div class=\"pop-text-center\">\n                <p>I'm an anchor</p>\n                <img alt=\"Popcorn box\"\n                     src=\"assets/images/popcorn-box.svg\"\n                     [tourWizardAnchor]=\"firstAnchor\"\n                     class=\"pop-popcorn-box\">\n            </div>\n            <div class=\"tour-wizard-spacer\"></div>\n            <div class=\"pop-d-flex pop-flex-justify-center\">\n                <div class=\"pop-box pop-text-center\">\n                    <span tourWizardAnchor=\"FOO_2\">You can have an anchor here, but set the target over there: useful to target hidden elements (or not).</span>\n                </div>\n                <div class=\"pop-box pop-text-center tour-wizard-my-target\">\n                    <p>My target for step 2</p>\n                    <p>Step 3 will appear with a 2 seconds delay, useful to handle async calls during a tour, for example.</p>\n                </div>\n            </div>\n            <div class=\"tour-wizard-spacer\"></div>\n            <div class=\"pop-d-flex pop-flex-justify-center\">\n                <div class=\"pop-box pop-text-center\">\n                    <span tourWizardAnchor=\"FOO_3\">\n                        You can also delay the appearance of the next step: pass a <strong>Subject</strong> into the <strong>subjectForNext</strong> or <strong>subjectForPrev</strong> property of the step config.\n                        <br/>\n                        The step will be shown after the Subject is triggered!\n                    </span>\n                </div>\n                <div class=\"pop-box pop-text-center\">\n                    <span tourWizardAnchor=\"FOO_4\">\n                        You can customize the appearance of any single popper, by using the <strong>style</strong> property in the step config!\n                    </span>\n                </div>\n            </div>\n\n        </article>\n    </div>\n    <div class=\"pop-generic-section\">\n        <div class=\"pop-text-center\">\n            <svg xmlns=\"http://www.w3.org/2000/svg\"\n                 width=\"50\"\n                 height=\"50\"\n                 viewBox=\"0 0 24 24\"\n                 fill=\"none\"\n                 stroke=\"#ffe69d\"\n                 stroke-width=\"2\"\n                 stroke-linecap=\"round\"\n                 stroke-linejoin=\"round\">\n                <path d=\"M19 16.9A5 5 0 0 0 18 7h-1.26a8 8 0 1 0-11.62 9\"></path>\n                <polyline points=\"13 11 9 17 15 17 11 23\"></polyline>\n            </svg>\n            <h3 class=\"pop-title-light\">Features</h3>\n        </div>\n        <ul class=\"pop-list\">\n            <li>\n                <svg xmlns=\"http://www.w3.org/2000/svg\"\n                     width=\"24\"\n                     height=\"24\"\n                     viewBox=\"0 0 24 24\"\n                     fill=\"none\"\n                     stroke=\"currentColor\"\n                     stroke-width=\"2\"\n                     stroke-linecap=\"round\"\n                     stroke-linejoin=\"round\">\n                    <polyline points=\"20 6 9 17 4 12\"></polyline>\n                </svg>\n                Uses <strong>Popper 2</strong> which has been proven to be a very effective and performing library for\n                tooltips and popovers\n            </li>\n            <li>\n                <svg xmlns=\"http://www.w3.org/2000/svg\"\n                     width=\"24\"\n                     height=\"24\"\n                     viewBox=\"0 0 24 24\"\n                     fill=\"none\"\n                     stroke=\"currentColor\"\n                     stroke-width=\"2\"\n                     stroke-linecap=\"round\"\n                     stroke-linejoin=\"round\">\n                    <polyline points=\"20 6 9 17 4 12\"></polyline>\n                </svg>\n                Optional <strong>Keyboard</strong> navigation: use the <strong>arrows</strong> to move between steps\n                and the\n                <strong>ESC</strong> key to exit the tour!\n            </li>\n            <li>\n                <svg xmlns=\"http://www.w3.org/2000/svg\"\n                     width=\"24\"\n                     height=\"24\"\n                     viewBox=\"0 0 24 24\"\n                     fill=\"none\"\n                     stroke=\"currentColor\"\n                     stroke-width=\"2\"\n                     stroke-linecap=\"round\"\n                     stroke-linejoin=\"round\">\n                    <polyline points=\"20 6 9 17 4 12\"></polyline>\n                </svg>\n                <strong>Automatic scroll</strong> to the step reference\n            </li>\n            <li>\n                <svg xmlns=\"http://www.w3.org/2000/svg\"\n                     width=\"24\"\n                     height=\"24\"\n                     viewBox=\"0 0 24 24\"\n                     fill=\"none\"\n                     stroke=\"currentColor\"\n                     stroke-width=\"2\"\n                     stroke-linecap=\"round\"\n                     stroke-linejoin=\"round\">\n                    <polyline points=\"20 6 9 17 4 12\"></polyline>\n                </svg>\n                Accepts <strong>HTML</strong> and can even be highly connected with your components, by passing a\n                <strong>component ref</strong> in the <em>customPopperContent</em> property.\n            </li>\n        </ul>\n    </div>\n    <div class=\"pop-generic-section\">\n        <div class=\"pop-text-center\">\n            <svg xmlns=\"http://www.w3.org/2000/svg\"\n                 width=\"50\"\n                 height=\"50\"\n                 viewBox=\"0 0 24 24\"\n                 fill=\"none\"\n                 stroke=\"#ffe69d\"\n                 stroke-width=\"2\"\n                 stroke-linecap=\"round\"\n                 stroke-linejoin=\"round\">\n                <path d=\"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z\"></path>\n            </svg>\n            <h3 class=\"pop-title-light\">Free and open-source</h3>\n        </div>\n    </div>\n    <div class=\"pop-generic-section\">\n        <div class=\"pop-text-center\">\n            <svg xmlns=\"http://www.w3.org/2000/svg\"\n                 width=\"50\"\n                 height=\"50\"\n                 viewBox=\"0 0 24 24\"\n                 fill=\"none\"\n                 stroke=\"#ffe69d\"\n                 stroke-width=\"2\"\n                 stroke-linecap=\"round\"\n                 stroke-linejoin=\"round\">\n                <polyline points=\"9 18 15 12 9 6\"></polyline>\n            </svg>\n            <h3 class=\"pop-title-light\">Ready to start?</h3>\n            <p>Start reading <a class=\"pop-link-yellow\"\n                                href=\"http://github.com/tonysamperi/ngx-tour-wizard\">Popper's\n                documentation</a>!</p>\n        </div>\n    </div>\n</div>\n<footer>\n    <p>Created with ♥ by <a class=\"pop-link-yellow\"\n                            href=\"tonysamperi.github.io\"\n                            target=\"_blank\">Tony\n        Samperi</a>\n    </p>\n    <p>© 2020 MIT License</p>\n</footer>");

/***/ }),

/***/ "./projects/ngx-tour-wizard/src/lib/tour-wizard-anchor/tour-wizard-anchor.directive.ts":
/*!*********************************************************************************************!*\
  !*** ./projects/ngx-tour-wizard/src/lib/tour-wizard-anchor/tour-wizard-anchor.directive.ts ***!
  \*********************************************************************************************/
/*! exports provided: TourWizardAnchorDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TourWizardAnchorDirective", function() { return TourWizardAnchorDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _tour_wizard_popper_tour_wizard_popper_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tour-wizard-popper/tour-wizard-popper.component */ "./projects/ngx-tour-wizard/src/lib/tour-wizard-popper/tour-wizard-popper.component.ts");
/* harmony import */ var _tour_wizard_services_tour_wizard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tour-wizard-services/tour-wizard.service */ "./projects/ngx-tour-wizard/src/lib/tour-wizard-services/tour-wizard.service.ts");
/* harmony import */ var _tour_wizard_services_tour_wizard_dom_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../tour-wizard-services/tour-wizard-dom.service */ "./projects/ngx-tour-wizard/src/lib/tour-wizard-services/tour-wizard-dom.service.ts");
/* harmony import */ var _tour_wizard_kboard_tour_wizard_kboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../tour-wizard-kboard/tour-wizard-kboard.component */ "./projects/ngx-tour-wizard/src/lib/tour-wizard-kboard/tour-wizard-kboard.component.ts");
/* harmony import */ var _tour_wizard_overlay_tour_wizard_overlay_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../tour-wizard-overlay/tour-wizard-overlay.component */ "./projects/ngx-tour-wizard/src/lib/tour-wizard-overlay/tour-wizard-overlay.component.ts");
/* harmony import */ var js_viewport_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! js-viewport-utils */ "./node_modules/js-viewport-utils/dist/js-viewport-utils.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};







var remoteAnchorShowClassname = "tour-wizard-anchor-show";
var TourWizardAnchorDirective = /** @class */ (function () {
    function TourWizardAnchorDirective(_elRef, _resolver, _tourWizardService, _tourWizardDomService, _viewContainerRef) {
        this._elRef = _elRef;
        this._resolver = _resolver;
        this._tourWizardService = _tourWizardService;
        this._tourWizardDomService = _tourWizardDomService;
        this._viewContainerRef = _viewContainerRef;
        this.hasRemoteTarget = !1;
        this._id = ++TourWizardAnchorDirective_1.nextId;
        this._popperClass = _tour_wizard_popper_tour_wizard_popper_component__WEBPACK_IMPORTED_MODULE_1__["TourWizardPopperComponent"];
        // 2020-09-16 changing viewPortOptions because Chrome/Edge 85 are probably bugged
        this._viewPortOptions = {
            inline: "start",
            block: "end",
            behavior: "smooth"
        };
        // Prevents adding layers multiple times
        if (this._id === 1) {
            this._tourWizardDomService.appendComps([
                {
                    comp: _tour_wizard_kboard_tour_wizard_kboard_component__WEBPACK_IMPORTED_MODULE_4__["TourWizardKboardComponent"],
                    key: "TourWizardKboardComponent"
                },
                {
                    comp: _tour_wizard_overlay_tour_wizard_overlay_component__WEBPACK_IMPORTED_MODULE_5__["TourWizardOverlayComponent"],
                    key: "TourWizardOverlayComponent",
                    targetSelector: this._tourWizardService.backdropTarget
                }
            ], this._tourWizardService.appendDelay);
        }
    }
    TourWizardAnchorDirective_1 = TourWizardAnchorDirective;
    TourWizardAnchorDirective.prototype.getPopperTarget = function () {
        return this._popperTarget;
    };
    TourWizardAnchorDirective.prototype.hideTourStep = function () {
        this.isActive = false;
        this._popperTarget = void 0;
        this.hasRemoteTarget && this._remoteTarget.classList.remove(remoteAnchorShowClassname);
        this._anchorPopper.hidePopper();
    };
    TourWizardAnchorDirective.prototype.ngOnInit = function () {
        this._anchorPopper = this._constructPopper();
        this._tourWizardService.register(this.tourWizardAnchor, this);
        Array.isArray(this._tourWizardService.additionalViewports) && (this._addedViewports = this._tourWizardService.additionalViewports);
    };
    TourWizardAnchorDirective.prototype.ngOnDestroy = function () {
        this._tourWizardService.unregister(this.tourWizardAnchor);
    };
    TourWizardAnchorDirective.prototype.showTourStep = function (step) {
        this.hasRemoteTarget = !1;
        var el = this._elRef.nativeElement;
        // const el = document.querySelector(`[tourWizardAnchor="${this.tourWizardAnchor}"]`);
        this.isActive = true;
        this._anchorPopper.step = step;
        this._remoteTarget = void 0;
        if (!!step.targetElement) {
            if (typeof step.targetElement === "string") {
                step.targetElement = document.querySelector(step.targetElement);
            }
            if (this._isDOMElement(step.targetElement)) {
                // Replace el to also scroll to targetElement
                this.hasRemoteTarget = !0;
                step.targetElement.classList.add(remoteAnchorShowClassname);
                el = step.targetElement;
                this._remoteTarget = el;
            }
            else {
                step.targetElement = void 0;
            }
        }
        if (!!step.customPopperContent) {
            this._anchorPopper.setTemplate(step.customPopperContent);
            step.customPopperContent = void 0; // REMOVE REF TO AVOID PERFORMANCE ISSUES
        }
        this._anchorPopper.applySettings(step.popperSettings);
        if (!step.preventScrolling) {
            if (!Object(js_viewport_utils__WEBPACK_IMPORTED_MODULE_6__["inViewportBottom"])(el)) {
                el.scrollIntoView(this._viewPortOptions);
            }
            else if (!Object(js_viewport_utils__WEBPACK_IMPORTED_MODULE_6__["inViewport"])(el, { sides: [js_viewport_utils__WEBPACK_IMPORTED_MODULE_6__["JsViewportSides"].LEFT, js_viewport_utils__WEBPACK_IMPORTED_MODULE_6__["JsViewportSides"].TOP, js_viewport_utils__WEBPACK_IMPORTED_MODULE_6__["JsViewportSides"].RIGHT] })) {
                el.scrollIntoView({
                    inline: "start",
                    block: "end",
                    behavior: "smooth"
                });
            }
            else if (!Object(js_viewport_utils__WEBPACK_IMPORTED_MODULE_6__["inViewportTop"])(el)) {
                el.scrollIntoView({
                    inline: "start",
                    block: "end",
                    behavior: "smooth"
                });
            }
            else if (!!this._addedViewports) {
                var i = this._addedViewports.length + 1;
                while (--i) {
                    var vp = document.querySelector(this._addedViewports[i]);
                    if (!!vp && !Object(js_viewport_utils__WEBPACK_IMPORTED_MODULE_6__["inViewport"])(vp)) {
                        // Breaks at first scroll
                        el.scrollIntoView(this._viewPortOptions);
                        break;
                    }
                }
            }
        }
        this._popperTarget = step.targetElement || this._elRef.nativeElement;
        this._anchorPopper.showPopper(this._popperTarget);
    };
    TourWizardAnchorDirective.prototype._constructPopper = function () {
        var factory = this._resolver.resolveComponentFactory(this._popperClass);
        this._popperRef = this._viewContainerRef.createComponent(factory);
        return this._popperRef.instance;
    };
    // Returns true if it is a DOM element
    TourWizardAnchorDirective.prototype._isDOMElement = function (entity) {
        if (!entity) {
            return false;
        }
        if (typeof HTMLElement === "object") {
            return entity instanceof HTMLElement;
        }
        return entity.nodeType === 1 && typeof entity.nodeName === "string";
    };
    var TourWizardAnchorDirective_1;
    TourWizardAnchorDirective.nextId = 0;
    TourWizardAnchorDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"] },
        { type: _tour_wizard_services_tour_wizard_service__WEBPACK_IMPORTED_MODULE_2__["TourWizardService"] },
        { type: _tour_wizard_services_tour_wizard_dom_service__WEBPACK_IMPORTED_MODULE_3__["TourWizardDomService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], TourWizardAnchorDirective.prototype, "tourWizardAnchor", void 0);
    TourWizardAnchorDirective = TourWizardAnchorDirective_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: "[tourWizardAnchor]",
            host: {
                "[class.show]": "isActive && !hasRemoteTarget",
                "[attr.tourWizardAnchor]": "tourWizardAnchor"
            }
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"],
            _tour_wizard_services_tour_wizard_service__WEBPACK_IMPORTED_MODULE_2__["TourWizardService"],
            _tour_wizard_services_tour_wizard_dom_service__WEBPACK_IMPORTED_MODULE_3__["TourWizardDomService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]])
    ], TourWizardAnchorDirective);
    return TourWizardAnchorDirective;
}());



/***/ }),

/***/ "./projects/ngx-tour-wizard/src/lib/tour-wizard-kboard/tour-wizard-kboard.component.ts":
/*!*********************************************************************************************!*\
  !*** ./projects/ngx-tour-wizard/src/lib/tour-wizard-kboard/tour-wizard-kboard.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: TourWizardKboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TourWizardKboardComponent", function() { return TourWizardKboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _tour_wizard_services_tour_wizard_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tour-wizard-services/tour-wizard.service */ "./projects/ngx-tour-wizard/src/lib/tour-wizard-services/tour-wizard.service.ts");
/* harmony import */ var _tour_wizard_models_tour_wizard_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tour-wizard-models/tour-wizard.model */ "./projects/ngx-tour-wizard/src/lib/tour-wizard-models/tour-wizard.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



var TourWizardKboardComponent = /** @class */ (function () {
    function TourWizardKboardComponent(_tourWizardService) {
        this._tourWizardService = _tourWizardService;
    }
    TourWizardKboardComponent.prototype.onEscapeKey = function () {
        if (this._tourWizardService.isHotKeysEnabled &&
            this._tourWizardService.getStatus() === _tour_wizard_models_tour_wizard_model__WEBPACK_IMPORTED_MODULE_2__["TourWizardState"].ON) {
            this._tourWizardService.end();
        }
    };
    TourWizardKboardComponent.prototype.onArrowRightKey = function () {
        var _this = this;
        if (this._tourWizardService.isHotKeysEnabled &&
            !this._tourWizardService.currentStep.hideNextButton &&
            this._tourWizardService.getStatus() === _tour_wizard_models_tour_wizard_model__WEBPACK_IMPORTED_MODULE_2__["TourWizardState"].ON &&
            this._tourWizardService.hasNext(this._tourWizardService.currentStep)) {
            // Timeout resolves smooth scrolling issue
            setTimeout(function () {
                _this._tourWizardService.next();
            });
        }
    };
    TourWizardKboardComponent.prototype.onArrowLeftKey = function () {
        var _this = this;
        if (this._tourWizardService.isHotKeysEnabled &&
            !this._tourWizardService.currentStep.hidePrevButton &&
            this._tourWizardService.getStatus() === _tour_wizard_models_tour_wizard_model__WEBPACK_IMPORTED_MODULE_2__["TourWizardState"].ON &&
            this._tourWizardService.hasPrev(this._tourWizardService.currentStep)) {
            // Timeout resolves smooth scrolling issue
            setTimeout(function () {
                _this._tourWizardService.prev();
            });
        }
    };
    TourWizardKboardComponent.ctorParameters = function () { return [
        { type: _tour_wizard_services_tour_wizard_service__WEBPACK_IMPORTED_MODULE_1__["TourWizardService"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])("window:keydown.Escape"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], TourWizardKboardComponent.prototype, "onEscapeKey", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])("window:keydown.ArrowRight"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], TourWizardKboardComponent.prototype, "onArrowRightKey", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])("window:keydown.ArrowLeft"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], TourWizardKboardComponent.prototype, "onArrowLeftKey", null);
    TourWizardKboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "tour-wizard-kboard",
            template: "\n        <ng-content></ng-content>"
        }),
        __metadata("design:paramtypes", [_tour_wizard_services_tour_wizard_service__WEBPACK_IMPORTED_MODULE_1__["TourWizardService"]])
    ], TourWizardKboardComponent);
    return TourWizardKboardComponent;
}());



/***/ }),

/***/ "./projects/ngx-tour-wizard/src/lib/tour-wizard-models/tour-wizard-buttons.model.ts":
/*!******************************************************************************************!*\
  !*** ./projects/ngx-tour-wizard/src/lib/tour-wizard-models/tour-wizard-buttons.model.ts ***!
  \******************************************************************************************/
/*! exports provided: TourWizardButtons */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TourWizardButtons", function() { return TourWizardButtons; });
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var TourWizardButtons = /** @class */ (function () {
    function TourWizardButtons() {
    }
    TourWizardButtons.END = "<svg aria-hidden=\"true\"\n        class=\"icon-left\"\n        width=\"1em\"\n        height=\"1em\"\n        focusable=\"false\"\n        role=\"img\"\n        xmlns=\"http://www.w3.org/2000/svg\"\n        viewBox=\"0 0 320 512\">\n        <path fill=\"currentColor\"\n              d=\"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z\">\n        </path>\n    </svg> Exit";
    TourWizardButtons.NEXT = "Next <svg aria-hidden=\"true\"\n        class=\"icon-right\"\n        width=\"1em\"\n        height=\"1em\"\n        focusable=\"false\"\n        role=\"img\"\n        xmlns=\"http://www.w3.org/2000/svg\"\n        viewBox=\"0 0 320 512\">\n        <path fill=\"currentColor\"\n              d=\"M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z\">\n        </path>\n    </svg>";
    TourWizardButtons.PAUSE = "<svg aria-hidden=\"true\"\n        class=\"icon-left\"\n        width=\"1em\"\n        height=\"1em\"\n        focusable=\"false\"\n        role=\"img\"\n        xmlns=\"http://www.w3.org/2000/svg\"\n        viewBox=\"0 0 320 512\">\n        <path fill=\"currentColor\"\n              d=\"M144 479H48c-26.5 0-48-21.5-48-48V79c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v352c0 26.5-21.5 48-48 48zm304-48V79c0-26.5-21.5-48-48-48h-96c-26.5 0-48 21.5-48 48v352c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48z\">\n        </path>\n    </svg> Pause";
    TourWizardButtons.PREV = "<svg aria-hidden=\"true\"\n        class=\"icon-left\"\n        width=\"1em\"\n        height=\"1em\"\n        focusable=\"false\"\n        role=\"img\"\n        xmlns=\"http://www.w3.org/2000/svg\"\n        viewBox=\"0 0 320 512\">\n       <path fill=\"currentColor\"\n             d=\"M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z\">\n       </path>\n    </svg> Prev";
    return TourWizardButtons;
}());



/***/ }),

/***/ "./projects/ngx-tour-wizard/src/lib/tour-wizard-models/tour-wizard.model.ts":
/*!**********************************************************************************!*\
  !*** ./projects/ngx-tour-wizard/src/lib/tour-wizard-models/tour-wizard.model.ts ***!
  \**********************************************************************************/
/*! exports provided: TourWizardState, tourWizardDefaults */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TourWizardState", function() { return TourWizardState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tourWizardDefaults", function() { return tourWizardDefaults; });
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var TourWizardState;
(function (TourWizardState) {
    TourWizardState[TourWizardState["OFF"] = 0] = "OFF";
    TourWizardState[TourWizardState["ON"] = 1] = "ON";
    TourWizardState[TourWizardState["PAUSED"] = 2] = "PAUSED";
})(TourWizardState || (TourWizardState = {}));
var tourWizardDefaults = {
    backdropEnabled: true,
    backdropTarget: "body",
    keyboardEnabled: true
};


/***/ }),

/***/ "./projects/ngx-tour-wizard/src/lib/tour-wizard-overlay/tour-wizard-overlay.component.scss":
/*!*************************************************************************************************!*\
  !*** ./projects/ngx-tour-wizard/src/lib/tour-wizard-overlay/tour-wizard-overlay.component.scss ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host > div {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: -1;\n  opacity: 0;\n  background-color: rgba(0, 0, 0, 0.5); }\n  :host > div.tour-wizard-cover.hide {\n    display: none; }\n  :host > div.tour-wizard-overlay {\n    transition: opacity .15s linear; }\n  :host.show > .tour-wizard-overlay, :host.show > .tour-wizard-cover {\n  opacity: 1;\n  z-index: 899; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL25neC10b3VyLXdpemFyZC9zcmMvbGliL3RvdXItd2l6YXJkLW92ZXJsYXkvQzpcXGVhc3lQaHBcXGVkcy13d3dcXGdpdFxcbmd4LXRvdXItd2l6YXJkL3Byb2plY3RzXFxuZ3gtdG91ci13aXphcmRcXHNyY1xcbGliXFx0b3VyLXdpemFyZC1vdmVybGF5XFx0b3VyLXdpemFyZC1vdmVybGF5LmNvbXBvbmVudC5zY3NzIiwicHJvamVjdHMvbmd4LXRvdXItd2l6YXJkL3NyYy9saWIvdG91ci13aXphcmQtb3ZlcmxheS9DOlxcZWFzeVBocFxcZWRzLXd3d1xcZ2l0XFxuZ3gtdG91ci13aXphcmQvcHJvamVjdHNcXG5neC10b3VyLXdpemFyZFxcc3JjXFxsaWJcXHNjc3NcXHRvdXItd2l6YXJkLXZhcnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUdDLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLFdBQVc7RUFDWCxZQUFZO0VBQ1osV0FBVztFQUNYLFVBQVU7RUFDVixvQ0FBb0MsRUFBQTtFQVZyQztJQWNJLGFBQWEsRUFBQTtFQWRqQjtJQXFCRywrQkFBK0IsRUFBQTtFQXJCbEM7RUEyQkcsVUFBVTtFQUNWLFlDNUJzQixFQUFBIiwiZmlsZSI6InByb2plY3RzL25neC10b3VyLXdpemFyZC9zcmMvbGliL3RvdXItd2l6YXJkLW92ZXJsYXkvdG91ci13aXphcmQtb3ZlcmxheS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi9zY3NzL3RvdXItd2l6YXJkLXZhcnNcIjtcblxuOmhvc3Qge1xuXG4gID4gZGl2IHtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHR0b3A6IDA7XG5cdGxlZnQ6IDA7XG5cdHdpZHRoOiAxMDAlO1xuXHRoZWlnaHQ6IDEwMCU7XG5cdHotaW5kZXg6IC0xO1xuXHRvcGFjaXR5OiAwO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG5cblx0Ji50b3VyLXdpemFyZC1jb3ZlciB7XG5cdFx0Ji5oaWRlIHtcblx0XHQgIGRpc3BsYXk6IG5vbmU7XG5cdFx0fVxuXHR9XG5cblx0Ji50b3VyLXdpemFyZC1vdmVybGF5IHtcblx0ICAtd2Via2l0LXRyYW5zaXRpb246IG9wYWNpdHkgLjE1cyBsaW5lYXI7XG5cdCAgLW8tdHJhbnNpdGlvbjogb3BhY2l0eSAuMTVzIGxpbmVhcjtcblx0ICB0cmFuc2l0aW9uOiBvcGFjaXR5IC4xNXMgbGluZWFyO1xuXHR9XG4gIH1cblxuICAmLnNob3cge1xuXHQ+IC50b3VyLXdpemFyZC1vdmVybGF5LCA+IC50b3VyLXdpemFyZC1jb3ZlciB7XG5cdCAgb3BhY2l0eTogMTtcblx0ICB6LWluZGV4OiAkdG91ci1kZWZhdWx0LXppbmRleCAtICR0b3VyLXppbmRleC1mYWN0b3I7XG5cdH1cbiAgfVxuXG59XG4iLCIkdG91ci1wb3BwZXItY29sb3I6ICNGRkYgIWRlZmF1bHQ7XG4kdG91ci1wb3BwZXItdGV4dC1jb2xvcjogIzQ0NCAhZGVmYXVsdDtcbiR0b3VyLWRlZmF1bHQtemluZGV4OiA5OTkgIWRlZmF1bHQ7XG4kdG91ci16aW5kZXgtZmFjdG9yOiAxMDAgIWRlZmF1bHQ7XG4kdG91ci1wYWQtZmFjdG9yOiA4cHggIWRlZmF1bHQ7XG4kdG91ci1wb3BwZXItd2lkdGg6IDI1MHB4ICFkZWZhdWx0OyJdfQ== */");

/***/ }),

/***/ "./projects/ngx-tour-wizard/src/lib/tour-wizard-overlay/tour-wizard-overlay.component.ts":
/*!***********************************************************************************************!*\
  !*** ./projects/ngx-tour-wizard/src/lib/tour-wizard-overlay/tour-wizard-overlay.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: TourWizardOverlayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TourWizardOverlayComponent", function() { return TourWizardOverlayComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _tour_wizard_services_tour_wizard_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tour-wizard-services/tour-wizard.service */ "./projects/ngx-tour-wizard/src/lib/tour-wizard-services/tour-wizard.service.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


//



var overlayInitStyle = function () { return ({ display: "none" }); };
var TourWizardOverlayComponent = /** @class */ (function () {
    function TourWizardOverlayComponent(_elRef, _tourWizardService) {
        this._elRef = _elRef;
        this._tourWizardService = _tourWizardService;
        this.showOverlay = !1;
        this.showCover = !0;
        this._deleteStyles();
        this._handleResize();
        this._handleWizardEvents();
    }
    //
    TourWizardOverlayComponent.prototype._handleWizardEvents = function () {
        var _this = this;
        this._tourWizardService.events$
            .subscribe(function (event) {
            if (_this._tourWizardService.isBackdropEnabled) {
                if (event.name === "start" || event.name === "resume") {
                    var $parent = _this._elRef.nativeElement.parentElement;
                    $parent.style.position = "relative";
                    _this.showOverlay = !0;
                }
                if (event.name === "stepHide") {
                    _this._deleteStyles();
                }
                if (event.name === "stepShow") {
                    _this._calcStyles();
                }
            }
            if (event.name === "end" || event.name === "pause") {
                _this._deleteStyles();
                _this.showOverlay = !1;
            }
        });
    };
    TourWizardOverlayComponent.prototype._calcStyles = function () {
        var rect = this._tourWizardService.getActiveAnchorBoundaries();
        if (!rect) {
            return this._deleteStyles();
        }
        this.topStyle = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["extend"])({}, {
            width: "calc(100% - " + rect.left + "px",
            top: "initial",
            bottom: "calc(100% - " + (rect.top + window.pageYOffset) + "px)",
            left: rect.left + "px",
        });
        this.rightStyle = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["extend"])({}, {
            height: "calc(100% - " + (rect.top + window.pageYOffset) + "px)",
            width: "calc(100% - " + (rect.left + rect.width) + "px",
            //
            top: rect.top + window.pageYOffset + "px",
            left: rect.left + rect.width + "px",
        });
        this.bottomStyle = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["extend"])({}, {
            height: "calc(100% - " + (rect.top + window.pageYOffset + rect.height) + "px)",
            //
            top: rect.top + rect.height + window.pageYOffset + "px",
            right: "calc(100% - " + (rect.left + rect.width) + "px",
            // "background-color": `rgba(0, 0, 255, 0.5)`,
            left: "auto"
        });
        this.leftStyle = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["extend"])({}, {
            top: "auto",
            right: "calc(100% - " + rect.left + "px)",
            // "background-color": `rgba(120, 120, 0, 0.5)`,
            bottom: "calc(100% - " + (rect.top + rect.height + window.pageYOffset) + "px)",
            left: "auto"
        });
        this.showCover = !1;
    };
    TourWizardOverlayComponent.prototype._deleteStyles = function () {
        this.topStyle = this.rightStyle = this.bottomStyle = this.leftStyle = overlayInitStyle();
        this.showCover = !0;
    };
    TourWizardOverlayComponent.prototype._handleResize = function () {
        var _this = this;
        Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["fromEvent"])(window, "resize")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(150))
            .subscribe(function (_event_) {
            _this.showOverlay && _this._calcStyles();
        });
    };
    TourWizardOverlayComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
        { type: _tour_wizard_services_tour_wizard_service__WEBPACK_IMPORTED_MODULE_1__["TourWizardService"] }
    ]; };
    TourWizardOverlayComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "tour-wizard-overlay",
            host: {
                "[class.show]": "showOverlay"
            },
            template: "\n        <div class=\"tour-wizard-cover\" [ngClass]=\"{'hide': !showCover}\"></div>\n        <div class=\"tour-wizard-overlay top\" [ngStyle]=\"topStyle\"></div>\n        <div class=\"tour-wizard-overlay right\" [ngStyle]=\"rightStyle\"></div>\n        <div class=\"tour-wizard-overlay bottom\" [ngStyle]=\"bottomStyle\"></div>\n        <div class=\"tour-wizard-overlay left\" [ngStyle]=\"leftStyle\"></div>\n    ",
            styles: [__importDefault(__webpack_require__(/*! ./tour-wizard-overlay.component.scss */ "./projects/ngx-tour-wizard/src/lib/tour-wizard-overlay/tour-wizard-overlay.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            _tour_wizard_services_tour_wizard_service__WEBPACK_IMPORTED_MODULE_1__["TourWizardService"]])
    ], TourWizardOverlayComponent);
    return TourWizardOverlayComponent;
}());



/***/ }),

/***/ "./projects/ngx-tour-wizard/src/lib/tour-wizard-popper/tour-wizard-popper.component.scss":
/*!***********************************************************************************************!*\
  !*** ./projects/ngx-tour-wizard/src/lib/tour-wizard-popper/tour-wizard-popper.component.scss ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".tour-wizard-content-wrap .tour-wizard-content-title {\n  font-weight: bold;\n  margin: 0 0 8px 0; }\n\n.tour-wizard-content-wrap .tour-wizard-step-navigation {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between; }\n\n.tour-wizard-content-wrap .tour-wizard-content-button {\n  border: none;\n  margin-top: 8px;\n  margin-right: 8px;\n  padding: 4px 8px;\n  border-radius: 4px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  cursor: pointer;\n  background-color: #FFF; }\n\n.tour-wizard-content-wrap .tour-wizard-content-button > svg.icon-left {\n    margin-right: 4px; }\n\n.tour-wizard-content-wrap .tour-wizard-content-button > svg.icon-right {\n    margin-left: 4px; }\n\n.tour-wizard-content-wrap .tour-wizard-content-button:last-child {\n    margin-right: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL25neC10b3VyLXdpemFyZC9zcmMvbGliL3RvdXItd2l6YXJkLXBvcHBlci9DOlxcZWFzeVBocFxcZWRzLXd3d1xcZ2l0XFxuZ3gtdG91ci13aXphcmQvcHJvamVjdHNcXG5neC10b3VyLXdpemFyZFxcc3JjXFxsaWJcXHRvdXItd2l6YXJkLXBvcHBlclxcdG91ci13aXphcmQtcG9wcGVyLmNvbXBvbmVudC5zY3NzIiwicHJvamVjdHMvbmd4LXRvdXItd2l6YXJkL3NyYy9saWIvdG91ci13aXphcmQtcG9wcGVyL0M6XFxlYXN5UGhwXFxlZHMtd3d3XFxnaXRcXG5neC10b3VyLXdpemFyZC9wcm9qZWN0c1xcbmd4LXRvdXItd2l6YXJkXFxzcmNcXGxpYlxcc2Nzc1xcdG91ci13aXphcmQtdmFycy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBR0ksaUJBQWlCO0VBQ2pCLGlCQUE4QixFQUFBOztBQUpsQztFQVFJLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsOEJBQThCLEVBQUE7O0FBVmxDO0VBY0ksWUFBWTtFQUNaLGVDYmlCO0VEY2pCLGlCQ2RpQjtFRGVqQixnQkNmaUI7RURnQmpCLGtCQUFxQztFQUNyQyxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2Ysc0JBQXNCLEVBQUE7O0FBdkIxQjtJQTJCUSxpQkFBb0MsRUFBQTs7QUEzQjVDO0lBOEJRLGdCQUFtQyxFQUFBOztBQTlCM0M7SUFtQ00sZUFBZSxFQUFBIiwiZmlsZSI6InByb2plY3RzL25neC10b3VyLXdpemFyZC9zcmMvbGliL3RvdXItd2l6YXJkLXBvcHBlci90b3VyLXdpemFyZC1wb3BwZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vc2Nzcy90b3VyLXdpemFyZC12YXJzXCI7XG5cbi50b3VyLXdpemFyZC1jb250ZW50LXdyYXAge1xuXG4gIC50b3VyLXdpemFyZC1jb250ZW50LXRpdGxlIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBtYXJnaW46IDAgMCAkdG91ci1wYWQtZmFjdG9yIDA7XG4gIH1cblxuICAudG91ci13aXphcmQtc3RlcC1uYXZpZ2F0aW9uIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB9XG5cbiAgLnRvdXItd2l6YXJkLWNvbnRlbnQtYnV0dG9uIHtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgbWFyZ2luLXRvcDogJHRvdXItcGFkLWZhY3RvcjtcbiAgICBtYXJnaW4tcmlnaHQ6ICR0b3VyLXBhZC1mYWN0b3I7XG4gICAgcGFkZGluZzogMC41ICogJHRvdXItcGFkLWZhY3RvciAkdG91ci1wYWQtZmFjdG9yO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuNSAqICR0b3VyLXBhZC1mYWN0b3I7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcblxuICAgID4gc3ZnIHtcbiAgICAgICYuaWNvbi1sZWZ0IHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwLjUgKiAkdG91ci1wYWQtZmFjdG9yO1xuICAgICAgfVxuICAgICAgJi5pY29uLXJpZ2h0IHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDAuNSAqICR0b3VyLXBhZC1mYWN0b3I7XG4gICAgICB9XG4gICAgfVxuXG4gICAgJjpsYXN0LWNoaWxke1xuICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgIH1cbiAgfVxufVxuXG4iLCIkdG91ci1wb3BwZXItY29sb3I6ICNGRkYgIWRlZmF1bHQ7XG4kdG91ci1wb3BwZXItdGV4dC1jb2xvcjogIzQ0NCAhZGVmYXVsdDtcbiR0b3VyLWRlZmF1bHQtemluZGV4OiA5OTkgIWRlZmF1bHQ7XG4kdG91ci16aW5kZXgtZmFjdG9yOiAxMDAgIWRlZmF1bHQ7XG4kdG91ci1wYWQtZmFjdG9yOiA4cHggIWRlZmF1bHQ7XG4kdG91ci1wb3BwZXItd2lkdGg6IDI1MHB4ICFkZWZhdWx0OyJdfQ== */");

/***/ }),

/***/ "./projects/ngx-tour-wizard/src/lib/tour-wizard-popper/tour-wizard-popper.component.ts":
/*!*********************************************************************************************!*\
  !*** ./projects/ngx-tour-wizard/src/lib/tour-wizard-popper/tour-wizard-popper.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: TourWizardPopperComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TourWizardPopperComponent", function() { return TourWizardPopperComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var ngx_popperjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-popperjs */ "./node_modules/ngx-popperjs/__ivy_ngcc__/fesm5/ngx-popperjs.js");
/* harmony import */ var _tour_wizard_services_tour_wizard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../tour-wizard-services/tour-wizard.service */ "./projects/ngx-tour-wizard/src/lib/tour-wizard-services/tour-wizard.service.ts");
/* harmony import */ var _tour_wizard_models_tour_wizard_buttons_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../tour-wizard-models/tour-wizard-buttons.model */ "./projects/ngx-tour-wizard/src/lib/tour-wizard-models/tour-wizard-buttons.model.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


//



//

var TourWizardPopperComponent = /** @class */ (function () {
    function TourWizardPopperComponent(tourWizardService, _domSanitizer) {
        this.tourWizardService = tourWizardService;
        this._domSanitizer = _domSanitizer;
        this.defaultEndBtn = this._domSanitizer.bypassSecurityTrustHtml(_tour_wizard_models_tour_wizard_buttons_model__WEBPACK_IMPORTED_MODULE_4__["TourWizardButtons"].END);
        this.defaultNextBtn = this._domSanitizer.bypassSecurityTrustHtml(_tour_wizard_models_tour_wizard_buttons_model__WEBPACK_IMPORTED_MODULE_4__["TourWizardButtons"].NEXT);
        this.defaultPauseBtn = this._domSanitizer.bypassSecurityTrustHtml(_tour_wizard_models_tour_wizard_buttons_model__WEBPACK_IMPORTED_MODULE_4__["TourWizardButtons"].PAUSE);
        this.defaultPrevBtn = this._domSanitizer.bypassSecurityTrustHtml(_tour_wizard_models_tour_wizard_buttons_model__WEBPACK_IMPORTED_MODULE_4__["TourWizardButtons"].PREV);
        this.isActive = false;
        this.popperPlacement = ngx_popperjs__WEBPACK_IMPORTED_MODULE_2__["NgxPopperjsPlacements"].TOP;
    }
    TourWizardPopperComponent.prototype.applySettings = function (settings) {
        if (settings === void 0) { settings = {}; }
        // Always start from defaults and add specific settings
        Object(lodash__WEBPACK_IMPORTED_MODULE_5__["merge"])(this.tourWizardPopper.popperOptions, this.tourWizardService.popperDefaults, settings);
    };
    TourWizardPopperComponent.prototype.hidePopper = function () {
        this.tourWizardPopper.hide();
        this.isActive = false;
    };
    TourWizardPopperComponent.prototype.ngOnDestroy = function () {
        this.hidePopper();
    };
    TourWizardPopperComponent.prototype.setTemplate = function (newTemplate) {
        this.stepTemplate = newTemplate;
    };
    TourWizardPopperComponent.prototype.showPopper = function (popperTarget) {
        var _this = this;
        this.tourWizardPopper.referenceObject = popperTarget;
        if (!this.isActive) {
            this.isActive = true;
            setTimeout(function () {
                _this.tourWizardPopper.show();
                window.dispatchEvent(new CustomEvent("resize"));
            });
        }
    };
    TourWizardPopperComponent.ctorParameters = function () { return [
        { type: _tour_wizard_services_tour_wizard_service__WEBPACK_IMPORTED_MODULE_3__["TourWizardService"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(ngx_popperjs__WEBPACK_IMPORTED_MODULE_2__["NgxPopperjsContentComponent"], { static: !0 }),
        __metadata("design:type", ngx_popperjs__WEBPACK_IMPORTED_MODULE_2__["NgxPopperjsContentComponent"])
    ], TourWizardPopperComponent.prototype, "tourWizardPopper", void 0);
    TourWizardPopperComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "tour-wizard-popper-component",
            template: __importDefault(__webpack_require__(/*! raw-loader!./tour-wizard-popper.component.html */ "./node_modules/raw-loader/dist/cjs.js!./projects/ngx-tour-wizard/src/lib/tour-wizard-popper/tour-wizard-popper.component.html")).default,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            styles: [__importDefault(__webpack_require__(/*! ./tour-wizard-popper.component.scss */ "./projects/ngx-tour-wizard/src/lib/tour-wizard-popper/tour-wizard-popper.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_tour_wizard_services_tour_wizard_service__WEBPACK_IMPORTED_MODULE_3__["TourWizardService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]])
    ], TourWizardPopperComponent);
    return TourWizardPopperComponent;
}());



/***/ }),

/***/ "./projects/ngx-tour-wizard/src/lib/tour-wizard-services/tour-wizard-dom.service.ts":
/*!******************************************************************************************!*\
  !*** ./projects/ngx-tour-wizard/src/lib/tour-wizard-services/tour-wizard-dom.service.ts ***!
  \******************************************************************************************/
/*! exports provided: TourWizardDomService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TourWizardDomService", function() { return TourWizardDomService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




var TourWizardDomService = /** @class */ (function () {
    function TourWizardDomService(_componentFactoryResolver, _appRef, _injector) {
        this._componentFactoryResolver = _componentFactoryResolver;
        this._appRef = _appRef;
        this._injector = _injector;
        this._refs = {};
    }
    TourWizardDomService.prototype.appendComps = function (compsData, delay) {
        var _this = this;
        if (delay === void 0) { delay = 0; }
        compsData.forEach(function (compData) { return _this.appendComp(compData.comp, compData.key, compData.targetSelector, delay); });
    };
    TourWizardDomService.prototype.appendComp = function (component, key, targetSelector, delay) {
        if (targetSelector === void 0) { targetSelector = "body"; }
        if (delay === void 0) { delay = 0; }
        // 1. Create a component reference from the component
        var componentRef = this._componentFactoryResolver
            .resolveComponentFactory(component)
            .create(this._injector);
        // 2. Attach component to the appRef so that it's inside the ng component tree
        this._appRef.attachView(componentRef.hostView);
        // 3. Get DOM element from component
        var domElem = componentRef.hostView
            .rootNodes[0];
        if (!!key) {
            !!this._refs[key] && console.warn("A ref with this key already exists and will be overwritten");
            this._refs[key] = componentRef;
        }
        else {
            console.warn("Component appended, but key wasn't provided. It won't be possible to remove it from the DOM automagically");
        }
        setTimeout(function () {
            // 4. Append DOM element to the body
            var targetEl = document.querySelector(targetSelector);
            if (targetEl !== null) {
                targetEl.appendChild(domElem);
            }
            else {
                document.body.appendChild(domElem);
            }
        }, delay);
    };
    TourWizardDomService.prototype.removeComp = function (key) {
        if (!!this._refs[key]) {
            var componentRef = this._refs[key];
            this._appRef.detachView(componentRef.hostView);
            componentRef.destroy();
            return true;
        }
        else {
            console.warn("No ref found with key " + key);
            return false;
        }
    };
    TourWizardDomService.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"] }
    ]; };
    TourWizardDomService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]])
    ], TourWizardDomService);
    return TourWizardDomService;
}());



/***/ }),

/***/ "./projects/ngx-tour-wizard/src/lib/tour-wizard-services/tour-wizard.service.ts":
/*!**************************************************************************************!*\
  !*** ./projects/ngx-tour-wizard/src/lib/tour-wizard-services/tour-wizard.service.ts ***!
  \**************************************************************************************/
/*! exports provided: TourWizardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TourWizardService", function() { return TourWizardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _tour_wizard_models_tour_wizard_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tour-wizard-models/tour-wizard.model */ "./projects/ngx-tour-wizard/src/lib/tour-wizard-models/tour-wizard.model.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};






var TourWizardService = /** @class */ (function () {
    function TourWizardService(_config) {
        this._config = _config;
        this.anchors = {};
        this.appendDelay = 0;
        this.navigating = !1;
        this.popperDefaults = {};
        this.steps = [];
        // Events
        this.stepShow$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.stepHide$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.start$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.end$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.pause$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.resume$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.anchorRegister$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.anchorUnregister$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this._stepIndex = void 0;
        this._subsCtrl$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this._tourStatus = _tour_wizard_models_tour_wizard_model__WEBPACK_IMPORTED_MODULE_1__["TourWizardState"].OFF;
        if (!!_config) {
            this.backdropTarget = _config.backdropTarget;
            this.isBackdropEnabled = !!_config.backdropEnabled;
            this.isHotKeysEnabled = !!_config.keyboardEnabled;
            this.additionalViewports = _config.additionalViewports || [];
            this.appendDelay = _config.appendDelay || 0;
            Object(lodash__WEBPACK_IMPORTED_MODULE_4__["merge"])(this.popperDefaults, _config.popperDefaults || {});
        }
        this.events$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"])(this.stepShow$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (value) { return ({ name: "stepShow", value: value }); })), this.stepHide$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (value) { return ({ name: "stepHide", value: value }); })), this.start$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (value) { return ({ name: "start", value: value }); })), this.end$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (value) { return ({ name: "end", value: value }); })), this.pause$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (value) { return ({ name: "pause", value: value }); })), this.resume$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (value) { return ({ name: "resume", value: value }); })), this.anchorRegister$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (value) { return ({ name: "anchorRegister", value: value }); })), this.anchorUnregister$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (value) { return ({ name: "anchorUnregister", value: value }); })));
    }
    TourWizardService.prototype.end = function () {
        this._subsCtrl$.next(!0);
        this.navigating = !1;
        this._tourStatus = _tour_wizard_models_tour_wizard_model__WEBPACK_IMPORTED_MODULE_1__["TourWizardState"].OFF;
        this._hideStep(this.currentStep);
        var currentStepBak = Object(lodash__WEBPACK_IMPORTED_MODULE_4__["cloneDeep"])(this.currentStep);
        this._voidTour();
        this.end$.next(currentStepBak);
    };
    TourWizardService.prototype.getActiveAnchorBoundaries = function () {
        if (this._tourStatus !== _tour_wizard_models_tour_wizard_model__WEBPACK_IMPORTED_MODULE_1__["TourWizardState"].ON || !this.currentStep) {
            console.warn("Couldn't get anchor client rect, tour wasn't active");
        }
        var $target = this.anchors[this.currentStep.anchorId].getPopperTarget();
        return $target ? $target.getBoundingClientRect() : void 0;
    };
    TourWizardService.prototype.getStatus = function () {
        return this._tourStatus;
    };
    TourWizardService.prototype.goto = function (stepId) {
        this._goToStep(this._loadStep(stepId));
    };
    TourWizardService.prototype.hasNext = function (step) {
        if (!step) {
            console.warn("Can\"t get next step. No currentStep.");
            return false;
        }
        return step.nextStep !== undefined || this._stepIndex < this.steps.length - 1;
    };
    TourWizardService.prototype.hasPrev = function (step) {
        if (!step) {
            console.warn("Can\"t get previous step. No currentStep.");
            return false;
        }
        return step.prevStep !== undefined || this._stepIndex > 0;
    };
    TourWizardService.prototype.initialize = function (steps, stepDefaults) {
        if (steps && steps.length > 0) {
            this.steps = steps.map(function (step) { return Object.assign({}, stepDefaults, step); });
        }
    };
    TourWizardService.prototype.next = function () {
        var _this = this;
        if (this.navigating) {
            return;
        }
        this.navigating = !0;
        if (typeof this.currentStep.onNextClick === typeof isNaN) {
            this.currentStep.onNextClick();
        }
        if (this.hasNext(this.currentStep)) {
            var targetStep_1 = this._loadStep(this.currentStep.nextStep || this._stepIndex + 1);
            if (!!this.currentStep && !!this.currentStep.subjectForNext) {
                // Hide current step
                this._hideStep(this.currentStep);
                // Start listening
                this.currentStep.subjectForNext
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._subsCtrl$))
                    .subscribe(function (value) {
                    if (value) {
                        _this._voidTour();
                        _this._goToStep(targetStep_1);
                    }
                });
            }
            else {
                this._goToStep(targetStep_1);
            }
        }
    };
    TourWizardService.prototype.prev = function () {
        var _this = this;
        if (this.navigating) {
            return;
        }
        this.navigating = !0;
        if (typeof this.currentStep.onPrevClick === typeof isNaN) {
            this.currentStep.onPrevClick();
        }
        if (this.hasPrev(this.currentStep)) {
            var targetStep_2 = this._loadStep(this.currentStep.prevStep || this._stepIndex - 1);
            if (!!this.currentStep && !!this.currentStep.subjectForPrev) {
                // Hide current step
                this._hideStep(this.currentStep);
                // Start listening
                this.currentStep.subjectForPrev
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._subsCtrl$))
                    .subscribe(function (value) {
                    if (value) {
                        _this._voidTour();
                        _this._goToStep(targetStep_2);
                    }
                });
            }
            else {
                this._goToStep(targetStep_2);
            }
        }
    };
    TourWizardService.prototype.pause = function () {
        if (typeof this.currentStep.onPauseClick === typeof isNaN) {
            this.currentStep.onPauseClick();
        }
        this._tourStatus = _tour_wizard_models_tour_wizard_model__WEBPACK_IMPORTED_MODULE_1__["TourWizardState"].PAUSED;
        this.navigating = !1;
        this._hideStep(this.currentStep);
        this.pause$.next(this.currentStep);
    };
    TourWizardService.prototype.register = function (anchorId, anchor) {
        if (this.anchors[anchorId]) {
            throw new Error("anchorId " + anchorId + " already registered!");
        }
        this.anchors[anchorId] = anchor;
        this.anchorRegister$.next(anchorId);
    };
    TourWizardService.prototype.resume = function () {
        this._tourStatus = _tour_wizard_models_tour_wizard_model__WEBPACK_IMPORTED_MODULE_1__["TourWizardState"].ON;
        this._showStep(this.currentStep);
        this.resume$.next();
    };
    TourWizardService.prototype.start = function () {
        this.startAt(0);
    };
    TourWizardService.prototype.startAt = function (stepId) {
        this._tourStatus = _tour_wizard_models_tour_wizard_model__WEBPACK_IMPORTED_MODULE_1__["TourWizardState"].ON;
        this._goToStep(this._loadStep(stepId));
        this.start$.next();
    };
    TourWizardService.prototype.unregister = function (anchorId) {
        delete this.anchors[anchorId];
        this.anchorUnregister$.next(anchorId);
    };
    TourWizardService.prototype.unregisterAll = function () {
        this.anchors = {};
    };
    TourWizardService.prototype.toggle = function (pause) {
        if (pause) {
            if (this.currentStep) {
                this.pause();
            }
            else {
                this.resume();
            }
        }
        else {
            if (this.currentStep) {
                this.end();
            }
            else {
                this.start();
            }
        }
    };
    // Private methods
    TourWizardService.prototype._goToStep = function (step) {
        if (!step) {
            console.warn("Can\"t go to non-existent step");
            this.end();
            return;
        }
        this._setCurrentStep(step);
    };
    TourWizardService.prototype._hideStep = function (step) {
        var anchor = this.anchors[step && step.anchorId];
        if (!anchor) {
            return;
        }
        anchor.hideTourStep();
        this.stepHide$.next(step);
    };
    TourWizardService.prototype._loadStep = function (stepId) {
        if (typeof stepId === "number") {
            return this.steps[stepId];
        }
        else {
            return this.steps.find(function (step) { return step.stepId === stepId; });
        }
    };
    TourWizardService.prototype._setCurrentStep = function (step) {
        this._subsCtrl$.next();
        this.navigating = !1;
        if (this.currentStep) {
            this._hideStep(this.currentStep);
        }
        this.currentStep = step;
        this._stepIndex = Object(lodash__WEBPACK_IMPORTED_MODULE_4__["findIndex"])(this.steps, function (s) { return s.anchorId === step.anchorId; });
        this._showStep(this.currentStep);
    };
    TourWizardService.prototype._showStep = function (step) {
        var anchor = this.anchors[step && step.anchorId];
        if (!anchor) {
            console.warn("Can\"t attach to unregistered anchor with id " + step.anchorId);
            this.end();
            return;
        }
        anchor.showTourStep(step);
        this.stepShow$.next(step);
    };
    TourWizardService.prototype._voidTour = function () {
        this.currentStep = void 0;
        this._stepIndex = void 0;
    };
    TourWizardService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: ["TOUR_WIZARD_DEFAULTS",] }] }
    ]; };
    TourWizardService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])("TOUR_WIZARD_DEFAULTS")),
        __metadata("design:paramtypes", [Object])
    ], TourWizardService);
    return TourWizardService;
}());



/***/ }),

/***/ "./projects/ngx-tour-wizard/src/lib/tour-wizard.module.ts":
/*!****************************************************************!*\
  !*** ./projects/ngx-tour-wizard/src/lib/tour-wizard.module.ts ***!
  \****************************************************************/
/*! exports provided: TOUR_WIZARD_DEFAULTS, setupTourWizardService, provideTourWizardConfig, TOUR_WIZARD_PROVIDERS, TourWizardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOUR_WIZARD_DEFAULTS", function() { return TOUR_WIZARD_DEFAULTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setupTourWizardService", function() { return setupTourWizardService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "provideTourWizardConfig", function() { return provideTourWizardConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOUR_WIZARD_PROVIDERS", function() { return TOUR_WIZARD_PROVIDERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TourWizardModule", function() { return TourWizardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var ngx_popperjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-popperjs */ "./node_modules/ngx-popperjs/__ivy_ngcc__/fesm5/ngx-popperjs.js");
/* harmony import */ var _tour_wizard_popper_tour_wizard_popper_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tour-wizard-popper/tour-wizard-popper.component */ "./projects/ngx-tour-wizard/src/lib/tour-wizard-popper/tour-wizard-popper.component.ts");
/* harmony import */ var _tour_wizard_kboard_tour_wizard_kboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tour-wizard-kboard/tour-wizard-kboard.component */ "./projects/ngx-tour-wizard/src/lib/tour-wizard-kboard/tour-wizard-kboard.component.ts");
/* harmony import */ var _tour_wizard_overlay_tour_wizard_overlay_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tour-wizard-overlay/tour-wizard-overlay.component */ "./projects/ngx-tour-wizard/src/lib/tour-wizard-overlay/tour-wizard-overlay.component.ts");
/* harmony import */ var _tour_wizard_anchor_tour_wizard_anchor_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tour-wizard-anchor/tour-wizard-anchor.directive */ "./projects/ngx-tour-wizard/src/lib/tour-wizard-anchor/tour-wizard-anchor.directive.ts");
/* harmony import */ var _tour_wizard_services_tour_wizard_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tour-wizard-services/tour-wizard.service */ "./projects/ngx-tour-wizard/src/lib/tour-wizard-services/tour-wizard.service.ts");
/* harmony import */ var _tour_wizard_services_tour_wizard_dom_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tour-wizard-services/tour-wizard-dom.service */ "./projects/ngx-tour-wizard/src/lib/tour-wizard-services/tour-wizard-dom.service.ts");
/* harmony import */ var _tour_wizard_models_tour_wizard_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./tour-wizard-models/tour-wizard.model */ "./projects/ngx-tour-wizard/src/lib/tour-wizard-models/tour-wizard.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};










// tslint:disable-next-line:naming-convention
var TOUR_WIZARD_DEFAULTS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]("TOUR_WIZARD_DEFAULTS");
function setupTourWizardService(config) {
    return new _tour_wizard_services_tour_wizard_service__WEBPACK_IMPORTED_MODULE_7__["TourWizardService"](config);
}
function provideTourWizardConfig(config) {
    if (config === void 0) { config = _tour_wizard_models_tour_wizard_model__WEBPACK_IMPORTED_MODULE_9__["tourWizardDefaults"]; }
    return [
        { provide: TOUR_WIZARD_DEFAULTS, multi: false, useValue: config },
    ];
}
// tslint:disable-next-line:naming-convention
var TOUR_WIZARD_PROVIDERS = [
    {
        provide: _tour_wizard_services_tour_wizard_service__WEBPACK_IMPORTED_MODULE_7__["TourWizardService"],
        useFactory: setupTourWizardService,
        deps: [TOUR_WIZARD_DEFAULTS]
    }
];
var TourWizardModule = /** @class */ (function () {
    function TourWizardModule() {
    }
    TourWizardModule_1 = TourWizardModule;
    TourWizardModule.forRoot = function (config) {
        return {
            ngModule: TourWizardModule_1,
            providers: [
                TOUR_WIZARD_PROVIDERS,
                provideTourWizardConfig(config)
            ]
        };
    };
    var TourWizardModule_1;
    TourWizardModule = TourWizardModule_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                ngx_popperjs__WEBPACK_IMPORTED_MODULE_2__["NgxPopperjsModule"]
            ],
            declarations: [
                _tour_wizard_popper_tour_wizard_popper_component__WEBPACK_IMPORTED_MODULE_3__["TourWizardPopperComponent"],
                _tour_wizard_anchor_tour_wizard_anchor_directive__WEBPACK_IMPORTED_MODULE_6__["TourWizardAnchorDirective"],
                _tour_wizard_kboard_tour_wizard_kboard_component__WEBPACK_IMPORTED_MODULE_4__["TourWizardKboardComponent"],
                _tour_wizard_overlay_tour_wizard_overlay_component__WEBPACK_IMPORTED_MODULE_5__["TourWizardOverlayComponent"]
            ],
            entryComponents: [
                _tour_wizard_popper_tour_wizard_popper_component__WEBPACK_IMPORTED_MODULE_3__["TourWizardPopperComponent"],
                _tour_wizard_kboard_tour_wizard_kboard_component__WEBPACK_IMPORTED_MODULE_4__["TourWizardKboardComponent"],
                _tour_wizard_overlay_tour_wizard_overlay_component__WEBPACK_IMPORTED_MODULE_5__["TourWizardOverlayComponent"]
            ],
            exports: [
                _tour_wizard_popper_tour_wizard_popper_component__WEBPACK_IMPORTED_MODULE_3__["TourWizardPopperComponent"],
                _tour_wizard_anchor_tour_wizard_anchor_directive__WEBPACK_IMPORTED_MODULE_6__["TourWizardAnchorDirective"],
                _tour_wizard_kboard_tour_wizard_kboard_component__WEBPACK_IMPORTED_MODULE_4__["TourWizardKboardComponent"],
                _tour_wizard_overlay_tour_wizard_overlay_component__WEBPACK_IMPORTED_MODULE_5__["TourWizardOverlayComponent"]
            ],
            providers: [
                _tour_wizard_services_tour_wizard_dom_service__WEBPACK_IMPORTED_MODULE_8__["TourWizardDomService"],
                TOUR_WIZARD_PROVIDERS,
                provideTourWizardConfig(),
            ]
        })
    ], TourWizardModule);
    return TourWizardModule;
}());



/***/ }),

/***/ "./projects/ngx-tour-wizard/src/public_api.ts":
/*!****************************************************!*\
  !*** ./projects/ngx-tour-wizard/src/public_api.ts ***!
  \****************************************************/
/*! exports provided: TOUR_WIZARD_DEFAULTS, setupTourWizardService, provideTourWizardConfig, TOUR_WIZARD_PROVIDERS, TourWizardModule, TourWizardState, tourWizardDefaults, TourWizardService, TourWizardKboardComponent, TourWizardOverlayComponent, TourWizardPopperComponent, TourWizardAnchorDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_tour_wizard_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/tour-wizard.module */ "./projects/ngx-tour-wizard/src/lib/tour-wizard.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TOUR_WIZARD_DEFAULTS", function() { return _lib_tour_wizard_module__WEBPACK_IMPORTED_MODULE_0__["TOUR_WIZARD_DEFAULTS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setupTourWizardService", function() { return _lib_tour_wizard_module__WEBPACK_IMPORTED_MODULE_0__["setupTourWizardService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "provideTourWizardConfig", function() { return _lib_tour_wizard_module__WEBPACK_IMPORTED_MODULE_0__["provideTourWizardConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TOUR_WIZARD_PROVIDERS", function() { return _lib_tour_wizard_module__WEBPACK_IMPORTED_MODULE_0__["TOUR_WIZARD_PROVIDERS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TourWizardModule", function() { return _lib_tour_wizard_module__WEBPACK_IMPORTED_MODULE_0__["TourWizardModule"]; });

/* harmony import */ var _lib_tour_wizard_models_tour_wizard_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/tour-wizard-models/tour-wizard.model */ "./projects/ngx-tour-wizard/src/lib/tour-wizard-models/tour-wizard.model.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TourWizardState", function() { return _lib_tour_wizard_models_tour_wizard_model__WEBPACK_IMPORTED_MODULE_1__["TourWizardState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tourWizardDefaults", function() { return _lib_tour_wizard_models_tour_wizard_model__WEBPACK_IMPORTED_MODULE_1__["tourWizardDefaults"]; });

/* harmony import */ var _lib_tour_wizard_services_tour_wizard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/tour-wizard-services/tour-wizard.service */ "./projects/ngx-tour-wizard/src/lib/tour-wizard-services/tour-wizard.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TourWizardService", function() { return _lib_tour_wizard_services_tour_wizard_service__WEBPACK_IMPORTED_MODULE_2__["TourWizardService"]; });

/* harmony import */ var _lib_tour_wizard_kboard_tour_wizard_kboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/tour-wizard-kboard/tour-wizard-kboard.component */ "./projects/ngx-tour-wizard/src/lib/tour-wizard-kboard/tour-wizard-kboard.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TourWizardKboardComponent", function() { return _lib_tour_wizard_kboard_tour_wizard_kboard_component__WEBPACK_IMPORTED_MODULE_3__["TourWizardKboardComponent"]; });

/* harmony import */ var _lib_tour_wizard_overlay_tour_wizard_overlay_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/tour-wizard-overlay/tour-wizard-overlay.component */ "./projects/ngx-tour-wizard/src/lib/tour-wizard-overlay/tour-wizard-overlay.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TourWizardOverlayComponent", function() { return _lib_tour_wizard_overlay_tour_wizard_overlay_component__WEBPACK_IMPORTED_MODULE_4__["TourWizardOverlayComponent"]; });

/* harmony import */ var _lib_tour_wizard_popper_tour_wizard_popper_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/tour-wizard-popper/tour-wizard-popper.component */ "./projects/ngx-tour-wizard/src/lib/tour-wizard-popper/tour-wizard-popper.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TourWizardPopperComponent", function() { return _lib_tour_wizard_popper_tour_wizard_popper_component__WEBPACK_IMPORTED_MODULE_5__["TourWizardPopperComponent"]; });

/* harmony import */ var _lib_tour_wizard_anchor_tour_wizard_anchor_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lib/tour-wizard-anchor/tour-wizard-anchor.directive */ "./projects/ngx-tour-wizard/src/lib/tour-wizard-anchor/tour-wizard-anchor.directive.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TourWizardAnchorDirective", function() { return _lib_tour_wizard_anchor_tour_wizard_anchor_directive__WEBPACK_IMPORTED_MODULE_6__["TourWizardAnchorDirective"]; });

var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
// MAIN MODULE

// MODELS

// SERVICES

// COMPONENTS






/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: TourWizardTestModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TourWizardTestModule", function() { return TourWizardTestModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _tour_wizard_app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tour-wizard-app.component */ "./src/app/tour-wizard-app.component.ts");
/* harmony import */ var ngx_tour_wizard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-tour-wizard */ "./projects/ngx-tour-wizard/src/public_api.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};





var TourWizardTestModule = /** @class */ (function () {
    function TourWizardTestModule() {
    }
    TourWizardTestModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                // TourWizardModule,
                ngx_tour_wizard__WEBPACK_IMPORTED_MODULE_4__["TourWizardModule"].forRoot({
                    backdropTarget: ".pippo",
                    backdropEnabled: true,
                    keyboardEnabled: true,
                    popperDefaults: {
                        appendTo: "body",
                        styles: {
                            backgroundColor: "#642f45",
                            color: "#FFF"
                        }
                    }
                })
            ],
            entryComponents: [_tour_wizard_app_component__WEBPACK_IMPORTED_MODULE_3__["TourWizardAppComponent"]],
            declarations: [_tour_wizard_app_component__WEBPACK_IMPORTED_MODULE_3__["TourWizardAppComponent"]],
            bootstrap: [_tour_wizard_app_component__WEBPACK_IMPORTED_MODULE_3__["TourWizardAppComponent"]],
        })
    ], TourWizardTestModule);
    return TourWizardTestModule;
}());



/***/ }),

/***/ "./src/app/tour-wizard-app.component.scss":
/*!************************************************!*\
  !*** ./src/app/tour-wizard-app.component.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".pop-generic-section {\n  padding: 50px 40px;\n  max-width: 900px;\n  margin: 0 auto;\n  border-bottom: 1px solid #362c4f; }\n\n.pop-top-section {\n  background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQ0MCIgaGVpZ2h0PSI2NTMiIHZpZXdCb3g9IjAgMCAxNDQwIDY1MyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgc3R5bGU9Im1peC1ibGVuZC1tb2RlOmxpZ2h0ZW4iIG9wYWNpdHk9IjAuMSI+CjxnIGNsaXAtcGF0aD0idXJsKCNjbGlwMCkiPgo8cGF0aCBkPSJNMTk5My43MSAwSC01NTMuNzFWMTk5OC42M0gxOTkzLjcxVjBaIiBmaWxsPSIjMkM0Qjk1Ii8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNzIwIDMwMi42NzZDNTUwLjI5MyAyMTkuOTYzIDMxMC4yOTQgMTAyLjk5IDAgLTQ4LjI0MjdIMTgwQzQwNi42NjMgODguNDQzNSA1ODYuNjYzIDIwNS40MTcgNzIwIDMwMi42NzZaIiBmaWxsPSIjRkZGQ0UxIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNzIwIDMwMi42NzZDNjI4LjE1NyAxOTQuNjA3IDUwOC4xNTYgNzcuNjM0NSAzNjAgLTQ4LjI0MjdINTQwQzYxMy4xNzggNzAuOTc3NiA2NzMuMTc4IDE4Ny45NTEgNzIwIDMwMi42NzZaIiBmaWxsPSIjRkZGQ0UxIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNzIwIDMwMi42NzZDNzIwIDE4NS43MDMgNzIwIDY4LjczMDMgNzIwIC00OC4yNDI3SDkwMEM4MjYuODIyIDcwLjk3NzYgNzY2LjgyMiAxODcuOTUxIDcyMCAzMDIuNjc2WiIgZmlsbD0iI0ZGRkNFMSIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTcyMCAzMDIuNjc2QzgxMS44NDMgMTk0LjYwNyA5MzEuODQ0IDc3LjYzNDUgMTA4MCAtNDguMjQyN0gxMjYwQzEwMzMuMzQgODguNDQzNSA4NTMuMzM3IDIwNS40MTcgNzIwIDMwMi42NzZaIiBmaWxsPSIjRkZGQ0UxIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNzIwIDMwMi42NzZDODg5LjcwNyAyMTkuOTYzIDExMjkuNzEgMTAyLjk5IDE0NDAgLTQ4LjI0MjdWMzkuNDg2OUMxMTU5LjU1IDE0OS45NTkgOTE5LjU1MiAyMzcuNjg5IDcyMCAzMDIuNjc2WiIgZmlsbD0iI0ZGRkNFMSIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTM2MCA2NTNIMTgwQzQwNi42NjMgNTE2LjQyOSA1ODYuNjYzIDM5OS41NTUgNzIwIDMwMi4zNzlDNjI4LjE1NyA0MTAuMzU1IDUwOC4xNTYgNTI3LjIyOSAzNjAgNjUzWiIgZmlsbD0iI0ZGRkNFMSIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTAgNjUzVjU2NS4zNDVDMjgwLjQ0NyA0NTQuOTY2IDUyMC40NDggMzY3LjMxIDcyMCAzMDIuMzc5QzU1MC4yOTMgMzg1LjAyMSAzMTAuMjk0IDUwMS44OTUgMCA2NTNaIiBmaWxsPSIjRkZGQ0UxIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMCA0NzcuNjg5VjM5MC4wMzRDMjQ0LjYxMSAzNTQuMzk4IDQ4NC42MTIgMzI1LjE4IDcyMCAzMDIuMzc5QzQ5OC4yNyAzNDcuMTA0IDI1OC4yNyA0MDUuNTQxIDAgNDc3LjY4OVoiIGZpbGw9IiNGRkZDRTEiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0wIDMwMi4zNzlWMjE0LjcyM0MyNDQuNjExIDI1MC4zNTkgNDg0LjYxMiAyNzkuNTc4IDcyMCAzMDIuMzc5QzQ4MCAzMDIuMzc5IDI0MCAzMDIuMzc5IDAgMzAyLjM3OVoiIGZpbGw9IiNGRkZDRTEiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0wIDEyNy4wNjhWMzkuNDEyNkMyODAuNDQ3IDE0OS43OTIgNTIwLjQ0OCAyMzcuNDQ3IDcyMCAzMDIuMzc5QzQ5OC4yNyAyNTcuNjUzIDI1OC4yNyAxOTkuMjE2IDAgMTI3LjA2OFoiIGZpbGw9IiNGRkZDRTEiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik03MjAgMzAyLjM3OUM5NDEuNzMgMjU3LjUyNiAxMTgxLjczIDE5OC45MjIgMTQ0MCAxMjYuNTY4VjIxNC40NzRDMTE5NS4zOSAyNTAuMjExIDk1NS4zODggMjc5LjUxMyA3MjAgMzAyLjM3OVoiIGZpbGw9IiNGRkZDRTEiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik03MjAgMzAyLjM3OUM5NjAgMzAyLjM3OSAxMjAwIDMwMi4zNzkgMTQ0MCAzMDIuMzc5VjM5MC4yODRDMTE5NS4zOSAzNTQuNTQ2IDk1NS4zODggMzI1LjI0NCA3MjAgMzAyLjM3OVoiIGZpbGw9IiNGRkZDRTEiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik03MjAgMzAyLjM3OUM5NDEuNzMgMzQ3LjA2MSAxMTgxLjczIDQwNS40NDMgMTQ0MCA0NzcuNTIzVjU2NS4wOTVDMTE1OS41NSA0NTQuODIxIDkxOS41NTIgMzY3LjI0OSA3MjAgMzAyLjM3OVoiIGZpbGw9IiNGRkZDRTEiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik03MjAgMzAyLjM3OUM4ODkuNzA3IDM4NS4wMjEgMTEyOS43MSA1MDEuODk1IDE0NDAgNjUzSDEyNjBDMTAzMy4zNCA1MTYuNDI5IDg1My4zMzcgMzk5LjU1NSA3MjAgMzAyLjM3OVoiIGZpbGw9IiNGRkZDRTEiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik03MjAgMzAyLjM3OUM4MTIuMTA1IDQxMC4zNTUgOTMyLjQ0OCA1MjcuMjI5IDEwODEuMDMgNjUzSDkwMC41MTNDODI3LjEyNiA1MzMuODgxIDc2Ni45NTUgNDE3LjAwNyA3MjAgMzAyLjM3OVoiIGZpbGw9IiNGRkZDRTEiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik03MjAgMzAyLjM3OUM3MjAgNDE5LjI1MyA3MjAgNTM2LjEyNiA3MjAgNjUzSDUzOS40ODdDNjEyLjg3NCA1MzMuODgxIDY3My4wNDUgNDE3LjAwNyA3MjAgMzAyLjM3OVoiIGZpbGw9IiNGRkZDRTEiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik03MjAgMzAyLjM3OUM1ODYuNjYzIDIwNS4yMDIgNDA2LjY2MyA4OC4zMjc4IDE4MCAtNDguMjQyN0gzNjBDNTA4LjE1NiA3Ny41MjggNjI4LjE1NyAxOTQuNDAxIDcyMCAzMDIuMzc5WiIgZmlsbD0iI0U5OTk5NCIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTcyMCAzMDIuMzc5QzY3My4xNzggMTg3Ljc1MSA2MTMuMTc4IDcwLjg3NjcgNTQwIC00OC4yNDI3SDcyMEM3MjAgNjguNjMxMyA3MjAgMTg1LjUwNSA3MjAgMzAyLjM3OVoiIGZpbGw9IiNFOTk5OTQiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik03MjAgMzAyLjM3OUM3NjYuODIyIDE4Ny43NTEgODI2LjgyMiA3MC44NzY3IDkwMCAtNDguMjQyN0gxMDgwQzkzMS44NDQgNzcuNTI4IDgxMS44NDMgMTk0LjQwMSA3MjAgMzAyLjM3OVoiIGZpbGw9IiNFOTk5OTQiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik03MjAgMzAyLjM3OUM4NTMuMzM3IDIwNS4yMDIgMTAzMy4zNCA4OC4zMjc4IDEyNjAgLTQ4LjI0MjdIMTQ0MEMxMTI5LjcxIDEwMi44NjIgODg5LjcwNyAyMTkuNzM3IDcyMCAzMDIuMzc5WiIgZmlsbD0iI0U5OTk5NCIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTcyMCAzMDIuMzc5QzkxOS41NTIgMjM3LjUwOSAxMTU5LjU1IDE0OS45MzcgMTQ0MCAzOS42NjI0VjEyNy4yMzRDMTE4MS43MyAxOTkuMzE0IDk0MS43MyAyNTcuNjk2IDcyMCAzMDIuMzc5WiIgZmlsbD0iI0U5OTk5NCIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTcyMCAzMDIuMzc5Qzk1NS4zODggMjc5LjUxMyAxMTk1LjM5IDI1MC4yMTEgMTQ0MCAyMTQuNDc0VjMwMi4zNzlDMTIwMCAzMDIuMzc5IDk2MCAzMDIuMzc5IDcyMCAzMDIuMzc5WiIgZmlsbD0iI0U5OTk5NCIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTcyMCAzMDIuMzc5Qzk1NS4zODggMzI1LjI0NCAxMTk1LjM5IDM1NC41NDYgMTQ0MCAzOTAuMjg0VjQ3OC4xODlDMTE4MS43MyA0MDUuODM1IDk0MS43MyAzNDcuMjMxIDcyMCAzMDIuMzc5WiIgZmlsbD0iI0U5OTk5NCIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTcyMCAzMDIuMzc5QzkxOS41NTIgMzY3LjMxIDExNTkuNTUgNDU0Ljk2NiAxNDQwIDU2NS4zNDVWNjUzQzExMjkuNzEgNTAxLjg5NSA4ODkuNzA3IDM4NS4wMjEgNzIwIDMwMi4zNzlaIiBmaWxsPSIjRTk5OTk0Ii8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNzIwIDMwMi4zNzlDODUzLjIxIDM5OS41NTUgMTAzMy4wNCA1MTYuNDI5IDEyNTkuNDkgNjUzSDEwNzkuNjZDOTMxLjY0MyA1MjcuMjI5IDgxMS43NTYgNDEwLjM1NSA3MjAgMzAyLjM3OVoiIGZpbGw9IiNFOTk5OTQiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik05MDAuNTEzIDY1M0g3MjBDNzIwIDUzNi4xMjYgNzIwIDQxOS4yNTMgNzIwIDMwMi4zNzlDNzY2Ljk1NSA0MTcuMDA3IDgyNy4xMjYgNTMzLjg4MSA5MDAuNTEzIDY1M1oiIGZpbGw9IiNFOTk5OTQiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik01NDAgNjUzSDM2MEM1MDguMTU2IDUyNy4yMjkgNjI4LjE1NyA0MTAuMzU1IDcyMCAzMDIuMzc5QzY3My4xNzggNDE3LjAwNyA2MTMuMTc4IDUzMy44ODEgNTQwIDY1M1oiIGZpbGw9IiNFOTk5OTQiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xODAgNjUzSDBDMzEwLjI5NCA1MDEuODk1IDU1MC4yOTMgMzg1LjAyMSA3MjAgMzAyLjM3OUM1ODYuNjYzIDM5OS41NTUgNDA2LjY2MyA1MTYuNDI5IDE4MCA2NTNaIiBmaWxsPSIjRTk5OTk0Ii8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMCA1NjUuMzQ1VjQ3Ny42ODlDMjU4LjI3IDQwNS41NDEgNDk4LjI3IDM0Ny4xMDQgNzIwIDMwMi4zNzlDNTIwLjQ0OCAzNjcuMzEgMjgwLjQ0NyA0NTQuOTY2IDAgNTY1LjM0NVoiIGZpbGw9IiNFOTk5OTQiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0wIDM5MC4wMzRWMzAyLjM3OUMyNDAgMzAyLjM3OSA0ODAgMzAyLjM3OSA3MjAgMzAyLjM3OUM0ODQuNjEyIDMyNS4xOCAyNDQuNjExIDM1NC4zOTggMCAzOTAuMDM0WiIgZmlsbD0iI0U5OTk5NCIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTAgMjE0LjcyM1YxMjcuMDY4QzI1OC4yNyAxOTkuMjE2IDQ5OC4yNyAyNTcuNjUzIDcyMCAzMDIuMzc5QzQ4NC42MTIgMjc5LjU3OCAyNDQuNjExIDI1MC4zNTkgMCAyMTQuNzIzWiIgZmlsbD0iI0U5OTk5NCIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTAgMzkuNDEyNlYtNDguMjQyN0MzMTAuMjk0IDEwMi44NjIgNTUwLjI5MyAyMTkuNzM3IDcyMCAzMDIuMzc5QzUyMC40NDggMjM3LjQ0NyAyODAuNDQ3IDE0OS43OTIgMCAzOS40MTI2WiIgZmlsbD0iI0U5OTk5NCIvPgo8L2c+CjwvZz4KPGRlZnM+CjxjbGlwUGF0aCBpZD0iY2xpcDAiPgo8cmVjdCB3aWR0aD0iMTQ0MCIgaGVpZ2h0PSI2NTMiIGZpbGw9IndoaXRlIi8+CjwvY2xpcFBhdGg+CjwvZGVmcz4KPC9zdmc+Cg==), radial-gradient(500px, #fff, #fff1e1 20%, #ffa0b1);\n  width: 100%;\n  background-repeat: no-repeat;\n  background-position: center;\n  text-align: center;\n  padding: 60px 25px 50px;\n  position: relative; }\n\n.pop-top-section > img.pop-angular-logo {\n    position: absolute;\n    width: 40px;\n    left: calc(50% - 20px);\n    top: 260px;\n    border-radius: 50%;\n    background-color: #FFF;\n    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.5); }\n\n.pop-top-section > img.pop-popper-logo {\n    height: 225px;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    user-select: none;\n    margin-bottom: 24px;\n    display: inline-block; }\n\n.pop-top-section > h2 {\n    font-size: 36px; }\n\n.pop-install-section {\n  background: #c83b50;\n  padding: 15px 0;\n  font-weight: bold;\n  margin-bottom: 25px;\n  width: 100%;\n  text-align: center;\n  border-bottom: 1px solid #362c4f; }\n\n.pop-install-section > div {\n    padding: 0 40px;\n    max-width: 900px;\n    margin: 0 auto;\n    flex-direction: row;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    color: white; }\n\n@media (max-width: 767px) {\n      .pop-install-section > div {\n        flex-direction: column; } }\n\n.pop-demo {\n  position: relative;\n  padding: 0 40px;\n  background-color: #2f263c;\n  border-bottom: 1px solid #362c4f; }\n\n@media (max-width: 991px) {\n    .pop-demo {\n      padding: 0 20px; } }\n\n.pop-demo > article {\n    position: relative;\n    align-items: start;\n    font-size: 17px;\n    padding: 50px 0;\n    border-bottom: 1px solid #362c4f; }\n\n.pop-demo > article:last-child {\n      border-bottom: 0; }\n\n.pop-demo > article .pop-popcorn-box {\n      width: 100px; }\n\nfooter {\n  text-align: center;\n  background-color: #1c1428;\n  padding: 25px 0;\n  color: #9479b9;\n  width: 100%; }\n\n.terminal {\n  position: relative;\n  width: 80%;\n  max-width: 600px;\n  border-radius: 6px;\n  padding-top: 45px;\n  margin-top: 8px;\n  overflow: hidden;\n  background-color: #0f0f10; }\n\n@media (max-width: 991px) {\n    .terminal {\n      width: 100%; } }\n\n.terminal::before {\n  content: \"\\2022 \\2022 \\2022\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  background: #3a3a3a;\n  color: #c2c3c4;\n  width: 100%;\n  font-size: 34px;\n  line-height: 26px;\n  text-indent: 6px;\n  text-align: left;\n  height: 34px; }\n\n.terminal {\n  font-family: SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace;\n  color: white;\n  padding: 0 1rem 1rem;\n  margin: 0;\n  text-align: left;\n  padding-top: 44px; }\n\n.terminal ul {\n  list-style: none;\n  padding: 0;\n  margin: 0; }\n\n.content {\n  position: relative; }\n\n.content .tour-wizard-test {\n    box-sizing: border-box;\n    text-align: center;\n    width: 100%;\n    padding: 16px; }\n\n.content .tour-wizard-test hr {\n      margin: 20px 0; }\n\n.content .tour-wizard-test > span {\n      display: inline-block;\n      padding: 16px;\n      border: 1px solid rgba(0, 0, 0, 0.5); }\n\n.content .tour-wizard-test .tour-wizard-my-target {\n      background: #8dd000;\n      color: #000;\n      float: right; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXGVhc3lQaHBcXGVkcy13d3dcXGdpdFxcbmd4LXRvdXItd2l6YXJkL3NyY1xcYXBwXFx0b3VyLXdpemFyZC1hcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL0M6XFxlYXN5UGhwXFxlZHMtd3d3XFxnaXRcXG5neC10b3VyLXdpemFyZC9zcmNcXHNjc3NcXHZhcnMuc2NzcyIsInNyYy9hcHAvQzpcXGVhc3lQaHBcXGVkcy13d3dcXGdpdFxcbmd4LXRvdXItd2l6YXJkL3NyY1xcc2Nzc1xccmVzcG9uc2l2ZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsZ0NDTnFCLEVBQUE7O0FEU3ZCO0VBQ0UscXNQQUFxc1A7RUFDcnNQLFdBQVc7RUFDWCw0QkFBNEI7RUFDNUIsMkJBQTJCO0VBQzNCLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIsa0JBQWtCLEVBQUE7O0FBUHBCO0lBVUksa0JBQWtCO0lBQ2xCLFdDYndCO0lEY3hCLHNCQUE2QztJQUM3QyxVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0Qix3Q0FBd0MsRUFBQTs7QUFoQjVDO0lBb0JJLGFBQWE7SUFDYix5QkFBeUI7SUFDekIsc0JBQXNCO0lBRXRCLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIscUJBQXFCLEVBQUE7O0FBMUJ6QjtJQThCSSxlQUFlLEVBQUE7O0FBSW5CO0VBQ0UsbUJDM0NzQjtFRDRDdEIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixnQ0NsRHFCLEVBQUE7O0FEMkN2QjtJQVVJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsY0FBYztJQUdkLG1CQUFtQjtJQUluQixhQUFhO0lBSWIsdUJBQXVCO0lBSXZCLG1CQUFtQjtJQUNuQixZQUFZLEVBQUE7O0FFekJaO01GSEo7UUErQk0sc0JBQXNCLEVBQUEsRUFFekI7O0FBR0g7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLHlCQ25GeUI7RURvRnpCLGdDQ25GcUIsRUFBQTs7QUM4Q25CO0lGaUNKO01BT0ksZUFBZSxFQUFBLEVBdUJsQjs7QUE5QkQ7SUFXSSxrQkFBa0I7SUFJbEIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixlQUFlO0lBQ2YsZ0NDakdtQixFQUFBOztBRCtFdkI7TUFxQk0sZ0JBQWdCLEVBQUE7O0FBckJ0QjtNQXlCTSxZQUFZLEVBQUE7O0FBT2xCO0VBQ0Usa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixlQUFlO0VBQ2YsY0FBYztFQUNkLFdBQVcsRUFBQTs7QUFLYjtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQix5QkFBaUMsRUFBQTs7QUVuRi9CO0lGMkVKO01BVUksV0FBVyxFQUFBLEVBRWQ7O0FBRUQ7RUFDRSw0QkFBNEI7RUFDNUIsa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBQ1AsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxXQUFXO0VBQ1gsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLFlBQVksRUFBQTs7QUFHZDtFQUNFLHdFQUF3RTtFQUN4RSxZQUFZO0VBQ1osb0JBQW9CO0VBQ3BCLFNBQVM7RUFDVCxnQkFBZ0I7RUFDaEIsaUJBQWlCLEVBQUE7O0FBR25CO0VBQ0UsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVixTQUFTLEVBQUE7O0FBR1g7RUFDRSxrQkFBa0IsRUFBQTs7QUFEcEI7SUFJSSxzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxhQUFhLEVBQUE7O0FBUGpCO01BVU0sY0FBYyxFQUFBOztBQVZwQjtNQWNNLHFCQUFxQjtNQUNyQixhQUFhO01BQ2Isb0NBQW9DLEVBQUE7O0FBaEIxQztNQW9CTSxtQkFBbUI7TUFDbkIsV0FBVztNQUNYLFlBQVksRUFBQSIsImZpbGUiOiJzcmMvYXBwL3RvdXItd2l6YXJkLWFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi9zY3NzL3ZhcnNcIjtcbkBpbXBvcnQgXCIuLi9zY3NzL3Jlc3BvbnNpdmVcIjtcbkBpbXBvcnQgXCIuLi9zY3NzL21peGluc1wiO1xuXG4ucG9wLWdlbmVyaWMtc2VjdGlvbiB7XG4gIHBhZGRpbmc6IDUwcHggNDBweDtcbiAgbWF4LXdpZHRoOiA5MDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBtYXAtZ2V0KCRwb3AtY29sb3JzLCB2aW9sZXQpO1xufVxuXG4ucG9wLXRvcC1zZWN0aW9uIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEhOMlp5QjNhV1IwYUQwaU1UUTBNQ0lnYUdWcFoyaDBQU0kyTlRNaUlIWnBaWGRDYjNnOUlqQWdNQ0F4TkRRd0lEWTFNeUlnWm1sc2JEMGlibTl1WlNJZ2VHMXNibk05SW1oMGRIQTZMeTkzZDNjdWR6TXViM0puTHpJd01EQXZjM1puSWo0S1BHY2djM1I1YkdVOUltMXBlQzFpYkdWdVpDMXRiMlJsT214cFoyaDBaVzRpSUc5d1lXTnBkSGs5SWpBdU1TSStDanhuSUdOc2FYQXRjR0YwYUQwaWRYSnNLQ05qYkdsd01Da2lQZ284Y0dGMGFDQmtQU0pOTVRrNU15NDNNU0F3U0MwMU5UTXVOekZXTVRrNU9DNDJNMGd4T1RrekxqY3hWakJhSWlCbWFXeHNQU0lqTWtNMFFqazFJaTgrQ2p4d1lYUm9JR1pwYkd3dGNuVnNaVDBpWlhabGJtOWtaQ0lnWTJ4cGNDMXlkV3hsUFNKbGRtVnViMlJrSWlCa1BTSk5Oekl3SURNd01pNDJOelpETlRVd0xqSTVNeUF5TVRrdU9UWXpJRE14TUM0eU9UUWdNVEF5TGprNUlEQWdMVFE0TGpJME1qZElNVGd3UXpRd05pNDJOak1nT0RndU5EUXpOU0ExT0RZdU5qWXpJREl3TlM0ME1UY2dOekl3SURNd01pNDJOelphSWlCbWFXeHNQU0lqUmtaR1EwVXhJaTgrQ2p4d1lYUm9JR1pwYkd3dGNuVnNaVDBpWlhabGJtOWtaQ0lnWTJ4cGNDMXlkV3hsUFNKbGRtVnViMlJrSWlCa1BTSk5Oekl3SURNd01pNDJOelpETmpJNExqRTFOeUF4T1RRdU5qQTNJRFV3T0M0eE5UWWdOemN1TmpNME5TQXpOakFnTFRRNExqSTBNamRJTlRRd1F6WXhNeTR4TnpnZ056QXVPVGMzTmlBMk56TXVNVGM0SURFNE55NDVOVEVnTnpJd0lETXdNaTQyTnpaYUlpQm1hV3hzUFNJalJrWkdRMFV4SWk4K0NqeHdZWFJvSUdacGJHd3RjblZzWlQwaVpYWmxibTlrWkNJZ1kyeHBjQzF5ZFd4bFBTSmxkbVZ1YjJSa0lpQmtQU0pOTnpJd0lETXdNaTQyTnpaRE56SXdJREU0TlM0M01ETWdOekl3SURZNExqY3pNRE1nTnpJd0lDMDBPQzR5TkRJM1NEa3dNRU00TWpZdU9ESXlJRGN3TGprM056WWdOelkyTGpneU1pQXhPRGN1T1RVeElEY3lNQ0F6TURJdU5qYzJXaUlnWm1sc2JEMGlJMFpHUmtORk1TSXZQZ284Y0dGMGFDQm1hV3hzTFhKMWJHVTlJbVYyWlc1dlpHUWlJR05zYVhBdGNuVnNaVDBpWlhabGJtOWtaQ0lnWkQwaVRUY3lNQ0F6TURJdU5qYzJRemd4TVM0NE5ETWdNVGswTGpZd055QTVNekV1T0RRMElEYzNMall6TkRVZ01UQTRNQ0F0TkRndU1qUXlOMGd4TWpZd1F6RXdNek11TXpRZ09EZ3VORFF6TlNBNE5UTXVNek0zSURJd05TNDBNVGNnTnpJd0lETXdNaTQyTnpaYUlpQm1hV3hzUFNJalJrWkdRMFV4SWk4K0NqeHdZWFJvSUdacGJHd3RjblZzWlQwaVpYWmxibTlrWkNJZ1kyeHBjQzF5ZFd4bFBTSmxkbVZ1YjJSa0lpQmtQU0pOTnpJd0lETXdNaTQyTnpaRE9EZzVMamN3TnlBeU1Ua3VPVFl6SURFeE1qa3VOekVnTVRBeUxqazVJREUwTkRBZ0xUUTRMakkwTWpkV016a3VORGcyT1VNeE1UVTVMalUxSURFME9TNDVOVGtnT1RFNUxqVTFNaUF5TXpjdU5qZzVJRGN5TUNBek1ESXVOamMyV2lJZ1ptbHNiRDBpSTBaR1JrTkZNU0l2UGdvOGNHRjBhQ0JtYVd4c0xYSjFiR1U5SW1WMlpXNXZaR1FpSUdOc2FYQXRjblZzWlQwaVpYWmxibTlrWkNJZ1pEMGlUVE0yTUNBMk5UTklNVGd3UXpRd05pNDJOak1nTlRFMkxqUXlPU0ExT0RZdU5qWXpJRE01T1M0MU5UVWdOekl3SURNd01pNHpOemxETmpJNExqRTFOeUEwTVRBdU16VTFJRFV3T0M0eE5UWWdOVEkzTGpJeU9TQXpOakFnTmpVeldpSWdabWxzYkQwaUkwWkdSa05GTVNJdlBnbzhjR0YwYUNCbWFXeHNMWEoxYkdVOUltVjJaVzV2WkdRaUlHTnNhWEF0Y25Wc1pUMGlaWFpsYm05a1pDSWdaRDBpVFRBZ05qVXpWalUyTlM0ek5EVkRNamd3TGpRME55QTBOVFF1T1RZMklEVXlNQzQwTkRnZ016WTNMak14SURjeU1DQXpNREl1TXpjNVF6VTFNQzR5T1RNZ016ZzFMakF5TVNBek1UQXVNamswSURVd01TNDRPVFVnTUNBMk5UTmFJaUJtYVd4c1BTSWpSa1pHUTBVeElpOCtDanh3WVhSb0lHWnBiR3d0Y25Wc1pUMGlaWFpsYm05a1pDSWdZMnhwY0MxeWRXeGxQU0psZG1WdWIyUmtJaUJrUFNKTk1DQTBOemN1TmpnNVZqTTVNQzR3TXpSRE1qUTBMall4TVNBek5UUXVNems0SURRNE5DNDJNVElnTXpJMUxqRTRJRGN5TUNBek1ESXVNemM1UXpRNU9DNHlOeUF6TkRjdU1UQTBJREkxT0M0eU55QTBNRFV1TlRReElEQWdORGMzTGpZNE9Wb2lJR1pwYkd3OUlpTkdSa1pEUlRFaUx6NEtQSEJoZEdnZ1ptbHNiQzF5ZFd4bFBTSmxkbVZ1YjJSa0lpQmpiR2x3TFhKMWJHVTlJbVYyWlc1dlpHUWlJR1E5SWswd0lETXdNaTR6TnpsV01qRTBMamN5TTBNeU5EUXVOakV4SURJMU1DNHpOVGtnTkRnMExqWXhNaUF5TnprdU5UYzRJRGN5TUNBek1ESXVNemM1UXpRNE1DQXpNREl1TXpjNUlESTBNQ0F6TURJdU16YzVJREFnTXpBeUxqTTNPVm9pSUdacGJHdzlJaU5HUmtaRFJURWlMejRLUEhCaGRHZ2dabWxzYkMxeWRXeGxQU0psZG1WdWIyUmtJaUJqYkdsd0xYSjFiR1U5SW1WMlpXNXZaR1FpSUdROUlrMHdJREV5Tnk0d05qaFdNemt1TkRFeU5rTXlPREF1TkRRM0lERTBPUzQzT1RJZ05USXdMalEwT0NBeU16Y3VORFEzSURjeU1DQXpNREl1TXpjNVF6UTVPQzR5TnlBeU5UY3VOalV6SURJMU9DNHlOeUF4T1RrdU1qRTJJREFnTVRJM0xqQTJPRm9pSUdacGJHdzlJaU5HUmtaRFJURWlMejRLUEhCaGRHZ2dabWxzYkMxeWRXeGxQU0psZG1WdWIyUmtJaUJqYkdsd0xYSjFiR1U5SW1WMlpXNXZaR1FpSUdROUlrMDNNakFnTXpBeUxqTTNPVU01TkRFdU56TWdNalUzTGpVeU5pQXhNVGd4TGpjeklERTVPQzQ1TWpJZ01UUTBNQ0F4TWpZdU5UWTRWakl4TkM0ME56UkRNVEU1TlM0ek9TQXlOVEF1TWpFeElEazFOUzR6T0RnZ01qYzVMalV4TXlBM01qQWdNekF5TGpNM09Wb2lJR1pwYkd3OUlpTkdSa1pEUlRFaUx6NEtQSEJoZEdnZ1ptbHNiQzF5ZFd4bFBTSmxkbVZ1YjJSa0lpQmpiR2x3TFhKMWJHVTlJbVYyWlc1dlpHUWlJR1E5SWswM01qQWdNekF5TGpNM09VTTVOakFnTXpBeUxqTTNPU0F4TWpBd0lETXdNaTR6TnprZ01UUTBNQ0F6TURJdU16YzVWak01TUM0eU9EUkRNVEU1TlM0ek9TQXpOVFF1TlRRMklEazFOUzR6T0RnZ016STFMakkwTkNBM01qQWdNekF5TGpNM09Wb2lJR1pwYkd3OUlpTkdSa1pEUlRFaUx6NEtQSEJoZEdnZ1ptbHNiQzF5ZFd4bFBTSmxkbVZ1YjJSa0lpQmpiR2x3TFhKMWJHVTlJbVYyWlc1dlpHUWlJR1E5SWswM01qQWdNekF5TGpNM09VTTVOREV1TnpNZ016UTNMakEyTVNBeE1UZ3hMamN6SURRd05TNDBORE1nTVRRME1DQTBOemN1TlRJelZqVTJOUzR3T1RWRE1URTFPUzQxTlNBME5UUXVPREl4SURreE9TNDFOVElnTXpZM0xqSTBPU0EzTWpBZ016QXlMak0zT1ZvaUlHWnBiR3c5SWlOR1JrWkRSVEVpTHo0S1BIQmhkR2dnWm1sc2JDMXlkV3hsUFNKbGRtVnViMlJrSWlCamJHbHdMWEoxYkdVOUltVjJaVzV2WkdRaUlHUTlJazAzTWpBZ016QXlMak0zT1VNNE9Ea3VOekEzSURNNE5TNHdNakVnTVRFeU9TNDNNU0ExTURFdU9EazFJREUwTkRBZ05qVXpTREV5TmpCRE1UQXpNeTR6TkNBMU1UWXVOREk1SURnMU15NHpNemNnTXprNUxqVTFOU0EzTWpBZ016QXlMak0zT1ZvaUlHWnBiR3c5SWlOR1JrWkRSVEVpTHo0S1BIQmhkR2dnWm1sc2JDMXlkV3hsUFNKbGRtVnViMlJrSWlCamJHbHdMWEoxYkdVOUltVjJaVzV2WkdRaUlHUTlJazAzTWpBZ016QXlMak0zT1VNNE1USXVNVEExSURReE1DNHpOVFVnT1RNeUxqUTBPQ0ExTWpjdU1qSTVJREV3T0RFdU1ETWdOalV6U0Rrd01DNDFNVE5ET0RJM0xqRXlOaUExTXpNdU9EZ3hJRGMyTmk0NU5UVWdOREUzTGpBd055QTNNakFnTXpBeUxqTTNPVm9pSUdacGJHdzlJaU5HUmtaRFJURWlMejRLUEhCaGRHZ2dabWxzYkMxeWRXeGxQU0psZG1WdWIyUmtJaUJqYkdsd0xYSjFiR1U5SW1WMlpXNXZaR1FpSUdROUlrMDNNakFnTXpBeUxqTTNPVU0zTWpBZ05ERTVMakkxTXlBM01qQWdOVE0yTGpFeU5pQTNNakFnTmpVelNEVXpPUzQwT0RkRE5qRXlMamczTkNBMU16TXVPRGd4SURZM015NHdORFVnTkRFM0xqQXdOeUEzTWpBZ016QXlMak0zT1ZvaUlHWnBiR3c5SWlOR1JrWkRSVEVpTHo0S1BIQmhkR2dnWm1sc2JDMXlkV3hsUFNKbGRtVnViMlJrSWlCamJHbHdMWEoxYkdVOUltVjJaVzV2WkdRaUlHUTlJazAzTWpBZ016QXlMak0zT1VNMU9EWXVOall6SURJd05TNHlNRElnTkRBMkxqWTJNeUE0T0M0ek1qYzRJREU0TUNBdE5EZ3VNalF5TjBnek5qQkROVEE0TGpFMU5pQTNOeTQxTWpnZ05qSTRMakUxTnlBeE9UUXVOREF4SURjeU1DQXpNREl1TXpjNVdpSWdabWxzYkQwaUkwVTVPVGs1TkNJdlBnbzhjR0YwYUNCbWFXeHNMWEoxYkdVOUltVjJaVzV2WkdRaUlHTnNhWEF0Y25Wc1pUMGlaWFpsYm05a1pDSWdaRDBpVFRjeU1DQXpNREl1TXpjNVF6WTNNeTR4TnpnZ01UZzNMamMxTVNBMk1UTXVNVGM0SURjd0xqZzNOamNnTlRRd0lDMDBPQzR5TkRJM1NEY3lNRU0zTWpBZ05qZ3VOak14TXlBM01qQWdNVGcxTGpVd05TQTNNakFnTXpBeUxqTTNPVm9pSUdacGJHdzlJaU5GT1RrNU9UUWlMejRLUEhCaGRHZ2dabWxzYkMxeWRXeGxQU0psZG1WdWIyUmtJaUJqYkdsd0xYSjFiR1U5SW1WMlpXNXZaR1FpSUdROUlrMDNNakFnTXpBeUxqTTNPVU0zTmpZdU9ESXlJREU0Tnk0M05URWdPREkyTGpneU1pQTNNQzQ0TnpZM0lEa3dNQ0F0TkRndU1qUXlOMGd4TURnd1F6a3pNUzQ0TkRRZ056Y3VOVEk0SURneE1TNDRORE1nTVRrMExqUXdNU0EzTWpBZ016QXlMak0zT1ZvaUlHWnBiR3c5SWlORk9UazVPVFFpTHo0S1BIQmhkR2dnWm1sc2JDMXlkV3hsUFNKbGRtVnViMlJrSWlCamJHbHdMWEoxYkdVOUltVjJaVzV2WkdRaUlHUTlJazAzTWpBZ016QXlMak0zT1VNNE5UTXVNek0zSURJd05TNHlNRElnTVRBek15NHpOQ0E0T0M0ek1qYzRJREV5TmpBZ0xUUTRMakkwTWpkSU1UUTBNRU14TVRJNUxqY3hJREV3TWk0NE5qSWdPRGc1TGpjd055QXlNVGt1TnpNM0lEY3lNQ0F6TURJdU16YzVXaUlnWm1sc2JEMGlJMFU1T1RrNU5DSXZQZ284Y0dGMGFDQm1hV3hzTFhKMWJHVTlJbVYyWlc1dlpHUWlJR05zYVhBdGNuVnNaVDBpWlhabGJtOWtaQ0lnWkQwaVRUY3lNQ0F6TURJdU16YzVRemt4T1M0MU5USWdNak0zTGpVd09TQXhNVFU1TGpVMUlERTBPUzQ1TXpjZ01UUTBNQ0F6T1M0Mk5qSTBWakV5Tnk0eU16UkRNVEU0TVM0M015QXhPVGt1TXpFMElEazBNUzQzTXlBeU5UY3VOamsySURjeU1DQXpNREl1TXpjNVdpSWdabWxzYkQwaUkwVTVPVGs1TkNJdlBnbzhjR0YwYUNCbWFXeHNMWEoxYkdVOUltVjJaVzV2WkdRaUlHTnNhWEF0Y25Wc1pUMGlaWFpsYm05a1pDSWdaRDBpVFRjeU1DQXpNREl1TXpjNVF6azFOUzR6T0RnZ01qYzVMalV4TXlBeE1UazFMak01SURJMU1DNHlNVEVnTVRRME1DQXlNVFF1TkRjMFZqTXdNaTR6TnpsRE1USXdNQ0F6TURJdU16YzVJRGsyTUNBek1ESXVNemM1SURjeU1DQXpNREl1TXpjNVdpSWdabWxzYkQwaUkwVTVPVGs1TkNJdlBnbzhjR0YwYUNCbWFXeHNMWEoxYkdVOUltVjJaVzV2WkdRaUlHTnNhWEF0Y25Wc1pUMGlaWFpsYm05a1pDSWdaRDBpVFRjeU1DQXpNREl1TXpjNVF6azFOUzR6T0RnZ016STFMakkwTkNBeE1UazFMak01SURNMU5DNDFORFlnTVRRME1DQXpPVEF1TWpnMFZqUTNPQzR4T0RsRE1URTRNUzQzTXlBME1EVXVPRE0xSURrME1TNDNNeUF6TkRjdU1qTXhJRGN5TUNBek1ESXVNemM1V2lJZ1ptbHNiRDBpSTBVNU9UazVOQ0l2UGdvOGNHRjBhQ0JtYVd4c0xYSjFiR1U5SW1WMlpXNXZaR1FpSUdOc2FYQXRjblZzWlQwaVpYWmxibTlrWkNJZ1pEMGlUVGN5TUNBek1ESXVNemM1UXpreE9TNDFOVElnTXpZM0xqTXhJREV4TlRrdU5UVWdORFUwTGprMk5pQXhORFF3SURVMk5TNHpORFZXTmpVelF6RXhNamt1TnpFZ05UQXhMamc1TlNBNE9Ea3VOekEzSURNNE5TNHdNakVnTnpJd0lETXdNaTR6TnpsYUlpQm1hV3hzUFNJalJUazVPVGswSWk4K0NqeHdZWFJvSUdacGJHd3RjblZzWlQwaVpYWmxibTlrWkNJZ1kyeHBjQzF5ZFd4bFBTSmxkbVZ1YjJSa0lpQmtQU0pOTnpJd0lETXdNaTR6TnpsRE9EVXpMakl4SURNNU9TNDFOVFVnTVRBek15NHdOQ0ExTVRZdU5ESTVJREV5TlRrdU5Ea2dOalV6U0RFd056a3VOalpET1RNeExqWTBNeUExTWpjdU1qSTVJRGd4TVM0M05UWWdOREV3TGpNMU5TQTNNakFnTXpBeUxqTTNPVm9pSUdacGJHdzlJaU5GT1RrNU9UUWlMejRLUEhCaGRHZ2dabWxzYkMxeWRXeGxQU0psZG1WdWIyUmtJaUJqYkdsd0xYSjFiR1U5SW1WMlpXNXZaR1FpSUdROUlrMDVNREF1TlRFeklEWTFNMGczTWpCRE56SXdJRFV6Tmk0eE1qWWdOekl3SURReE9TNHlOVE1nTnpJd0lETXdNaTR6TnpsRE56WTJMamsxTlNBME1UY3VNREEzSURneU55NHhNallnTlRNekxqZzRNU0E1TURBdU5URXpJRFkxTTFvaUlHWnBiR3c5SWlORk9UazVPVFFpTHo0S1BIQmhkR2dnWm1sc2JDMXlkV3hsUFNKbGRtVnViMlJrSWlCamJHbHdMWEoxYkdVOUltVjJaVzV2WkdRaUlHUTlJazAxTkRBZ05qVXpTRE0yTUVNMU1EZ3VNVFUySURVeU55NHlNamtnTmpJNExqRTFOeUEwTVRBdU16VTFJRGN5TUNBek1ESXVNemM1UXpZM015NHhOemdnTkRFM0xqQXdOeUEyTVRNdU1UYzRJRFV6TXk0NE9ERWdOVFF3SURZMU0xb2lJR1pwYkd3OUlpTkZPVGs1T1RRaUx6NEtQSEJoZEdnZ1ptbHNiQzF5ZFd4bFBTSmxkbVZ1YjJSa0lpQmpiR2x3TFhKMWJHVTlJbVYyWlc1dlpHUWlJR1E5SWsweE9EQWdOalV6U0RCRE16RXdMakk1TkNBMU1ERXVPRGsxSURVMU1DNHlPVE1nTXpnMUxqQXlNU0EzTWpBZ016QXlMak0zT1VNMU9EWXVOall6SURNNU9TNDFOVFVnTkRBMkxqWTJNeUExTVRZdU5ESTVJREU0TUNBMk5UTmFJaUJtYVd4c1BTSWpSVGs1T1RrMElpOCtDanh3WVhSb0lHWnBiR3d0Y25Wc1pUMGlaWFpsYm05a1pDSWdZMnhwY0MxeWRXeGxQU0psZG1WdWIyUmtJaUJrUFNKTk1DQTFOalV1TXpRMVZqUTNOeTQyT0RsRE1qVTRMakkzSURRd05TNDFOREVnTkRrNExqSTNJRE0wTnk0eE1EUWdOekl3SURNd01pNHpOemxETlRJd0xqUTBPQ0F6TmpjdU16RWdNamd3TGpRME55QTBOVFF1T1RZMklEQWdOVFkxTGpNME5Wb2lJR1pwYkd3OUlpTkZPVGs1T1RRaUx6NEtQSEJoZEdnZ1ptbHNiQzF5ZFd4bFBTSmxkbVZ1YjJSa0lpQmpiR2x3TFhKMWJHVTlJbVYyWlc1dlpHUWlJR1E5SWswd0lETTVNQzR3TXpSV016QXlMak0zT1VNeU5EQWdNekF5TGpNM09TQTBPREFnTXpBeUxqTTNPU0EzTWpBZ016QXlMak0zT1VNME9EUXVOakV5SURNeU5TNHhPQ0F5TkRRdU5qRXhJRE0xTkM0ek9UZ2dNQ0F6T1RBdU1ETTBXaUlnWm1sc2JEMGlJMFU1T1RrNU5DSXZQZ284Y0dGMGFDQm1hV3hzTFhKMWJHVTlJbVYyWlc1dlpHUWlJR05zYVhBdGNuVnNaVDBpWlhabGJtOWtaQ0lnWkQwaVRUQWdNakUwTGpjeU0xWXhNamN1TURZNFF6STFPQzR5TnlBeE9Ua3VNakUySURRNU9DNHlOeUF5TlRjdU5qVXpJRGN5TUNBek1ESXVNemM1UXpRNE5DNDJNVElnTWpjNUxqVTNPQ0F5TkRRdU5qRXhJREkxTUM0ek5Ua2dNQ0F5TVRRdU56SXpXaUlnWm1sc2JEMGlJMFU1T1RrNU5DSXZQZ284Y0dGMGFDQm1hV3hzTFhKMWJHVTlJbVYyWlc1dlpHUWlJR05zYVhBdGNuVnNaVDBpWlhabGJtOWtaQ0lnWkQwaVRUQWdNemt1TkRFeU5sWXRORGd1TWpReU4wTXpNVEF1TWprMElERXdNaTQ0TmpJZ05UVXdMakk1TXlBeU1Ua3VOek0zSURjeU1DQXpNREl1TXpjNVF6VXlNQzQwTkRnZ01qTTNMalEwTnlBeU9EQXVORFEzSURFME9TNDNPVElnTUNBek9TNDBNVEkyV2lJZ1ptbHNiRDBpSTBVNU9UazVOQ0l2UGdvOEwyYytDand2Wno0S1BHUmxabk0rQ2p4amJHbHdVR0YwYUNCcFpEMGlZMnhwY0RBaVBnbzhjbVZqZENCM2FXUjBhRDBpTVRRME1DSWdhR1ZwWjJoMFBTSTJOVE1pSUdacGJHdzlJbmRvYVhSbElpOCtDand2WTJ4cGNGQmhkR2crQ2p3dlpHVm1jejRLUEM5emRtYytDZz09KSwgcmFkaWFsLWdyYWRpZW50KDUwMHB4LCAjZmZmLCAjZmZmMWUxIDIwJSwgI2ZmYTBiMSk7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogNjBweCAyNXB4IDUwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICA+IGltZy5wb3AtYW5ndWxhci1sb2dvIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6ICRwb3AtYW5ndWxhci1sb2dvLXNpemU7XG4gICAgbGVmdDogY2FsYyg1MCUgLSAjeyRwb3AtYW5ndWxhci1sb2dvLXNpemUvMn0pO1xuICAgIHRvcDogMjYwcHg7IC8vIFNpbmNlIHBvcHBlciBsb2dvIGhhcyBoZWlnaHQgMjI1cHhcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcbiAgICBib3gtc2hhZG93OiAwIDAgNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjUpO1xuICB9XG5cbiAgPiBpbWcucG9wLXBvcHBlci1sb2dvIHtcbiAgICBoZWlnaHQ6IDIyNXB4O1xuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgbWFyZ2luLWJvdHRvbTogMjRweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIH1cblxuICA+IGgyIHtcbiAgICBmb250LXNpemU6IDM2cHg7XG4gIH1cbn1cblxuLnBvcC1pbnN0YWxsLXNlY3Rpb24ge1xuICBiYWNrZ3JvdW5kOiBtYXAtZ2V0KCRwb3AtY29sb3JzLCBwcmltYXJ5KTtcbiAgcGFkZGluZzogMTVweCAwO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIG1hcC1nZXQoJHBvcC1jb2xvcnMsIHZpb2xldCk7XG5cbiAgPiBkaXYge1xuICAgIHBhZGRpbmc6IDAgNDBweDtcbiAgICBtYXgtd2lkdGg6IDkwMHB4O1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIC13ZWJraXQtZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAtbXMtZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcbiAgICAtd2Via2l0LWp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAtd2Via2l0LWFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcbiAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgY29sb3I6IHdoaXRlO1xuXG4gICAgQGluY2x1ZGUgcmVzcG9uZC1iZWxvdyh4cykge1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB9XG4gIH1cbn1cblxuLnBvcC1kZW1vIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiAwIDQwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IG1hcC1nZXQoJHBvcC1jb2xvcnMsIGJhY2tncm91bmQpO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgbWFwLWdldCgkcG9wLWNvbG9ycywgdmlvbGV0KTtcblxuICBAaW5jbHVkZSByZXNwb25kLWJlbG93KHNtKSB7XG4gICAgcGFkZGluZzogMCAyMHB4O1xuICB9XG5cbiAgPiBhcnRpY2xlIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgLXdlYmtpdC1hbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICAtd2Via2l0LWJveC1hbGlnbjogc3RhcnQ7XG4gICAgLW1zLWZsZXgtYWxpZ246IHN0YXJ0O1xuICAgIGFsaWduLWl0ZW1zOiBzdGFydDtcbiAgICBmb250LXNpemU6IDE3cHg7XG4gICAgcGFkZGluZzogNTBweCAwO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBtYXAtZ2V0KCRwb3AtY29sb3JzLCB2aW9sZXQpO1xuXG4gICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgIGJvcmRlci1ib3R0b206IDA7XG4gICAgfVxuXG4gICAgLnBvcC1wb3Bjb3JuLWJveCB7XG4gICAgICB3aWR0aDogMTAwcHg7XG4gICAgfVxuXG4gIH1cblxufVxuXG5mb290ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxYzE0Mjg7XG4gIHBhZGRpbmc6IDI1cHggMDtcbiAgY29sb3I6ICM5NDc5Yjk7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4vLyBUZXJtaW5hbFxuXG4udGVybWluYWwge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiA4MCU7XG4gIG1heC13aWR0aDogNjAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgcGFkZGluZy10b3A6IDQ1cHg7XG4gIG1hcmdpbi10b3A6IDhweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE1LCAxNSwgMTYpO1xuICBAaW5jbHVkZSByZXNwb25kLWJlbG93KHNtKSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cblxuLnRlcm1pbmFsOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcMjAyMiBcXDIwMjIgXFwyMDIyXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBiYWNrZ3JvdW5kOiAjM2EzYTNhO1xuICBjb2xvcjogI2MyYzNjNDtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMzRweDtcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XG4gIHRleHQtaW5kZW50OiA2cHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGhlaWdodDogMzRweDtcbn1cblxuLnRlcm1pbmFsIHtcbiAgZm9udC1mYW1pbHk6IFNGTW9uby1SZWd1bGFyLCBDb25zb2xhcywgTGliZXJhdGlvbiBNb25vLCBNZW5sbywgbW9ub3NwYWNlO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDAgMXJlbSAxcmVtO1xuICBtYXJnaW46IDA7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBhZGRpbmctdG9wOiA0NHB4O1xufVxuXG4udGVybWluYWwgdWwge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG59XG5cbi5jb250ZW50IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gIC50b3VyLXdpemFyZC10ZXN0IHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAxNnB4O1xuXG4gICAgaHIge1xuICAgICAgbWFyZ2luOiAyMHB4IDA7XG4gICAgfVxuXG4gICAgPiBzcGFuIHtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gICAgfVxuXG4gICAgLnRvdXItd2l6YXJkLW15LXRhcmdldCB7XG4gICAgICBiYWNrZ3JvdW5kOiAjOGRkMDAwO1xuICAgICAgY29sb3I6ICMwMDA7XG4gICAgICBmbG9hdDogcmlnaHQ7XG4gICAgfVxuICB9XG59XG4iLCIkcG9wLWNvbG9yczogKFxuICAgICAgICBiYWNrZ3JvdW5kOiAjMmYyNjNjLFxuICAgICAgICB2aW9sZXQ6ICMzNjJjNGYsXG4gICAgICAgIHByaW1hcnk6ICNjODNiNTAsXG4gICAgICAgIHByaW1hcnktbGlnaHQ6ICNmZjZiODEsXG4gICAgICAgIGFjY2VudDogI2Y0ZTBmMSxcbiAgICAgICAgdGV4dDogI2QyY2JlNFxuKTtcblxuJHBvcC1hbmd1bGFyLWxvZ28tc2l6ZTogNDBweDtcbiIsIiRicmVha3BvaW50czogKFxuICAgICAgICB4eHM6IDM2MHB4LFxuICAgICAgICB4czogNzY4cHgsXG4gICAgICAgIHNtOiA5OTJweCxcbiAgICAgICAgbWQ6IDEyMDBweCxcbiAgICAgICAgbGc6IDE5MjBweFxuKTtcblxuLy9cbi8vICBSRVNQT05EIEFCT1ZFXG4vL+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk1xuXG4vLyBlLmcuIEBpbmNsdWRlIHJlc3BvbmQtYWJvdmUoc20pIHt9XG5AbWl4aW4gcmVzcG9uZC1hYm92ZSgkYnJlYWtwb2ludCkge1xuXG4gIC8vIElmIHRoZSBicmVha3BvaW50IGV4aXN0cyBpbiB0aGUgbWFwLlxuICBAaWYgbWFwLWhhcy1rZXkoJGJyZWFrcG9pbnRzLCAkYnJlYWtwb2ludCkge1xuXG4gICAgLy8gR2V0IHRoZSBicmVha3BvaW50IHZhbHVlLlxuICAgICRicmVha3BvaW50LXZhbHVlOiBtYXAtZ2V0KCRicmVha3BvaW50cywgJGJyZWFrcG9pbnQpO1xuXG4gICAgLy8gV3JpdGUgdGhlIG1lZGlhIHF1ZXJ5LlxuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkYnJlYWtwb2ludC12YWx1ZSkge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGJyZWFrcG9pbnQgZG9lc24ndCBleGlzdCBpbiB0aGUgbWFwLlxuICB9IEBlbHNlIHtcblxuICAgIC8vIExvZyBhIHdhcm5pbmcuXG4gICAgQHdhcm4gJ0ludmFsaWQgYnJlYWtwb2ludDogI3skYnJlYWtwb2ludH0uJztcbiAgfVxufVxuXG4vL1xuLy8gIFJFU1BPTkQgQkVMT1dcbi8v4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCTXG5cbi8vIGUuZy4gQGluY2x1ZGUgcmVzcG9uZC1iZWxvdyhzbSkge31cbkBtaXhpbiByZXNwb25kLWJlbG93KCRicmVha3BvaW50KSB7XG5cbiAgLy8gSWYgdGhlIGJyZWFrcG9pbnQgZXhpc3RzIGluIHRoZSBtYXAuXG4gIEBpZiBtYXAtaGFzLWtleSgkYnJlYWtwb2ludHMsICRicmVha3BvaW50KSB7XG5cbiAgICAvLyBHZXQgdGhlIGJyZWFrcG9pbnQgdmFsdWUuXG4gICAgJGJyZWFrcG9pbnQtdmFsdWU6IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAkYnJlYWtwb2ludCk7XG5cbiAgICAvLyBXcml0ZSB0aGUgbWVkaWEgcXVlcnkuXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6ICgkYnJlYWtwb2ludC12YWx1ZSAtIDEpKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgYnJlYWtwb2ludCBkb2Vzbid0IGV4aXN0IGluIHRoZSBtYXAuXG4gIH0gQGVsc2Uge1xuXG4gICAgLy8gTG9nIGEgd2FybmluZy5cbiAgICBAd2FybiAnSW52YWxpZCBicmVha3BvaW50OiAjeyRicmVha3BvaW50fS4nO1xuICB9XG59XG5cbi8vXG4vLyAgUkVTUE9ORCBCRVRXRUVOXG4vL+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk1xuXG4vLyBlLmcuIEBpbmNsdWRlIHJlc3BvbmQtYmV0d2VlbihzbSwgbWQpIHt9XG5AbWl4aW4gcmVzcG9uZC1iZXR3ZWVuKCRsb3dlciwgJHVwcGVyKSB7XG5cbiAgLy8gSWYgYm90aCB0aGUgbG93ZXIgYW5kIHVwcGVyIGJyZWFrcG9pbnRzIGV4aXN0IGluIHRoZSBtYXAuXG4gIEBpZiBtYXAtaGFzLWtleSgkYnJlYWtwb2ludHMsICRsb3dlcikgYW5kIG1hcC1oYXMta2V5KCRicmVha3BvaW50cywgJHVwcGVyKSB7XG5cbiAgICAvLyBHZXQgdGhlIGxvd2VyIGFuZCB1cHBlciBicmVha3BvaW50cy5cbiAgICAkbG93ZXItYnJlYWtwb2ludDogbWFwLWdldCgkYnJlYWtwb2ludHMsICRsb3dlcik7XG4gICAgJHVwcGVyLWJyZWFrcG9pbnQ6IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAkdXBwZXIpO1xuXG4gICAgLy8gV3JpdGUgdGhlIG1lZGlhIHF1ZXJ5LlxuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkbG93ZXItYnJlYWtwb2ludCkgYW5kIChtYXgtd2lkdGg6ICgkdXBwZXItYnJlYWtwb2ludCAtIDEpKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG5cbiAgICAvLyBJZiBvbmUgb3IgYm90aCBvZiB0aGUgYnJlYWtwb2ludHMgZG9uJ3QgZXhpc3QuXG4gIH0gQGVsc2Uge1xuXG4gICAgLy8gSWYgbG93ZXIgYnJlYWtwb2ludCBpcyBpbnZhbGlkLlxuICAgIEBpZiAobWFwLWhhcy1rZXkoJGJyZWFrcG9pbnRzLCAkbG93ZXIpID09IGZhbHNlKSB7XG5cbiAgICAgIC8vIExvZyBhIHdhcm5pbmcuXG4gICAgICBAd2FybiAnWW91ciBsb3dlciBicmVha3BvaW50IHdhcyBpbnZhbGlkOiAjeyRsb3dlcn0uJztcbiAgICB9XG5cbiAgICAvLyBJZiB1cHBlciBicmVha3BvaW50IGlzIGludmFsaWQuXG4gICAgQGlmIChtYXAtaGFzLWtleSgkYnJlYWtwb2ludHMsICR1cHBlcikgPT0gZmFsc2UpIHtcblxuICAgICAgLy8gTG9nIGEgd2FybmluZy5cbiAgICAgIEB3YXJuICdZb3VyIHVwcGVyIGJyZWFrcG9pbnQgd2FzIGludmFsaWQ6ICN7JHVwcGVyfS4nO1xuICAgIH1cbiAgfVxufVxuIl19 */");

/***/ }),

/***/ "./src/app/tour-wizard-app.component.ts":
/*!**********************************************!*\
  !*** ./src/app/tour-wizard-app.component.ts ***!
  \**********************************************/
/*! exports provided: TourWizardAppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TourWizardAppComponent", function() { return TourWizardAppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ngx_tour_wizard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-tour-wizard */ "./projects/ngx-tour-wizard/src/public_api.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



var TourWizardAppComponent = /** @class */ (function () {
    function TourWizardAppComponent(_tourWizardService) {
        this._tourWizardService = _tourWizardService;
        this.firstAnchor = "FOO_1";
        this._fooTwo$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this._fooThree$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    TourWizardAppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._tourWizardService.initialize([
            {
                anchorId: this.firstAnchor,
                content: "Define in your class an array (TourWizardStep[ ]) with your steps, setting at least <strong>anchorId</strong> and <strong>content</strong>.\n<br />The <em>content property can contain a HTML string</em>",
                title: "1) SET UP THE DATA"
            },
            {
                anchorId: "FOO_2",
                content: "call the TourWizardService <strong>initialize</strong> method and provide the previously defined array",
                title: "2) Init the tour",
                subjectForNext: this._fooTwo$,
                targetElement: ".tour-wizard-my-target",
                onNextClick: function () {
                    _this._onFooTwoNext();
                }
            },
            {
                anchorId: "FOO_3",
                content: "Bind anchor IDs on your anchors with the [tourWizardAnchor] attribute",
                title: "3) HTML markup",
                subjectForPrev: this._fooThree$,
                onPrevClick: function () {
                    _this._onFooThreePrev();
                }
            },
            {
                anchorId: "FOO_4",
                content: "To start the tour call the <strong>start</strong> method of the <strong>TourWizardService</strong>",
                title: "4) Start the tour",
                popperSettings: {
                    styles: {
                        maxWidth: 190,
                        backgroundColor: "#002143"
                    }
                }
            }
        ]);
    };
    TourWizardAppComponent.prototype.startTour = function () {
        this._tourWizardService.start();
    };
    TourWizardAppComponent.prototype._onFooThreePrev = function () {
        var _this = this;
        setTimeout(function () {
            _this._fooThree$.next(true);
        }, 2000);
    };
    TourWizardAppComponent.prototype._onFooTwoNext = function () {
        var _this = this;
        setTimeout(function () {
            _this._fooTwo$.next(true);
        }, 2000);
    };
    TourWizardAppComponent.ctorParameters = function () { return [
        { type: ngx_tour_wizard__WEBPACK_IMPORTED_MODULE_1__["TourWizardService"] }
    ]; };
    TourWizardAppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "tour-wizard-app",
            template: __importDefault(__webpack_require__(/*! raw-loader!./tour-wizard-app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tour-wizard-app.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./tour-wizard-app.component.scss */ "./src/app/tour-wizard-app.component.scss")).default]
        }),
        __metadata("design:paramtypes", [ngx_tour_wizard__WEBPACK_IMPORTED_MODULE_1__["TourWizardService"]])
    ], TourWizardAppComponent);
    return TourWizardAppComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["TourWizardTestModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\easyPhp\eds-www\git\ngx-tour-wizard\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map