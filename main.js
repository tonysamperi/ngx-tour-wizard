(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./projects/ngx-tour-wizard/src/lib/tour-wizard-anchor/tour-wizard-anchor.directive.ts":
/*!*********************************************************************************************!*\
  !*** ./projects/ngx-tour-wizard/src/lib/tour-wizard-anchor/tour-wizard-anchor.directive.ts ***!
  \*********************************************************************************************/
/*! exports provided: TourWizardAnchorDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TourWizardAnchorDirective", function() { return TourWizardAnchorDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
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
        this._viewPortOptions = {
            inline: "start",
            block: "start",
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
    TourWizardAnchorDirective.prototype.hideTourStep = function () {
        this.isActive = false;
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
        this._anchorPopper.showPopper(step.targetElement || this._elRef.nativeElement);
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
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
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@font-face {\n  font-family: \"Gloria Hallelujah\";\n  font-style: normal;\n  font-weight: 400;\n  src: local(\"Gloria Hallelujah\"), local(\"GloriaHallelujah\"), url(\"https://fonts.gstatic.com/s/gloriahallelujah/v9/LYjYdHv3kUk9BMV96EIswT9DIbW-MIS11zM.woff2\") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n\n:host > .tour-wizard-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  opacity: 0;\n  z-index: -1;\n  background-color: rgba(0, 0, 0, 0.5);\n  transition: opacity .15s linear; }\n\n:host.show > .tour-wizard-overlay {\n  opacity: 1;\n  z-index: 899; }\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _tour_wizard_services_tour_wizard_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tour-wizard-services/tour-wizard.service */ "./projects/ngx-tour-wizard/src/lib/tour-wizard-services/tour-wizard.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TourWizardOverlayComponent = /** @class */ (function () {
    function TourWizardOverlayComponent(_tourWizardService) {
        var _this = this;
        this._tourWizardService = _tourWizardService;
        this.showOverlay = false;
        this._tourWizardService.events$
            .subscribe(function (event) {
            if (event.name === "start" || event.name === "resume") {
                _this._tourWizardService.isBackdropEnabled && (_this.showOverlay = true);
            }
            if (event.name === "end" || event.name === "pause") {
                _this.showOverlay = false;
            }
        });
    }
    TourWizardOverlayComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "tour-wizard-overlay",
            host: {
                "[class.show]": "showOverlay"
            },
            template: "\n        <div class=\"tour-wizard-overlay\"></div>\n    ",
            styles: [__webpack_require__(/*! ./tour-wizard-overlay.component.scss */ "./projects/ngx-tour-wizard/src/lib/tour-wizard-overlay/tour-wizard-overlay.component.scss")]
        }),
        __metadata("design:paramtypes", [_tour_wizard_services_tour_wizard_service__WEBPACK_IMPORTED_MODULE_1__["TourWizardService"]])
    ], TourWizardOverlayComponent);
    return TourWizardOverlayComponent;
}());



/***/ }),

/***/ "./projects/ngx-tour-wizard/src/lib/tour-wizard-popper/tour-wizard-popper.component.html":
/*!***********************************************************************************************!*\
  !*** ./projects/ngx-tour-wizard/src/lib/tour-wizard-popper/tour-wizard-popper.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-template [popper]=\"tourWizardPopper\"\r\n             [popperPlacement]=\"popperPlacement\"\r\n             popperApplyClass=\"tourWizardPopper\"\r\n             [popperTrigger]=\"'none'\">\r\n\r\n    <!--[popperTarget]=\"popperTarget\"-->\r\n</ng-template>\r\n\r\n<ng-template #defaultTemplate let-step=\"step\">\r\n    <p class=\"tour-wizard-content-title\">{{step?.title}}</p>\r\n    <p class=\"tour-wizard-content-text\" [innerHTML]=\"step?.content\"></p>\r\n    <div class=\"tour-step-navigation\">\r\n        <button *ngIf=\"!step.hidePrevButton && tourWizardService.hasPrev(step)\"\r\n                class=\"tour-wizard-content-button btn-prev\"\r\n                [innerHTML]=\"step?.prevBtnTitle || '« Prev'\"\r\n                (click)=\"tourWizardService.prev()\">\r\n        </button>\r\n        <button *ngIf=\"step.showPauseButton\"\r\n                [innerHTML]=\"step?.pauseBtnTitle || 'Pause'\"\r\n                class=\"tour-wizard-content-button btn-pause\"\r\n                (click)=\"tourWizardService.pause()\">\r\n        </button>\r\n        <button *ngIf=\"!step.hideNextButton && tourWizardService.hasNext(step)\"\r\n                class=\"tour-wizard-content-button btn-next\"\r\n                [innerHTML]=\"step?.nextBtnTitle || 'Next »'\"\r\n                (click)=\"tourWizardService.next()\">\r\n        </button>\r\n        <button class=\"tour-wizard-content-button btn-end\"\r\n                [innerHtml]=\"step?.endBtnTitle || 'End'\"\r\n                (click)=\"tourWizardService.end()\">\r\n        </button>\r\n    </div>\r\n</ng-template>\r\n\r\n<popper-content class=\"tour-wizard-content-wrap\" #tourWizardPopper>\r\n    <ng-container *ngIf=\"isActive\">\r\n        <ng-container *ngTemplateOutlet=\"stepTemplate || defaultTemplate; context: { step: step }\">\r\n\r\n        </ng-container>\r\n    </ng-container>\r\n</popper-content>\r\n"

/***/ }),

/***/ "./projects/ngx-tour-wizard/src/lib/tour-wizard-popper/tour-wizard-popper.component.scss":
/*!***********************************************************************************************!*\
  !*** ./projects/ngx-tour-wizard/src/lib/tour-wizard-popper/tour-wizard-popper.component.scss ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@font-face {\n  font-family: \"Gloria Hallelujah\";\n  font-style: normal;\n  font-weight: 400;\n  src: local(\"Gloria Hallelujah\"), local(\"GloriaHallelujah\"), url(\"https://fonts.gstatic.com/s/gloriahallelujah/v9/LYjYdHv3kUk9BMV96EIswT9DIbW-MIS11zM.woff2\") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n\n.tour-wizard-content-wrap .tour-wizard-content-title {\n  font-size: 18px;\n  font-weight: bold;\n  font-family: \"Gloria Hallelujah\", cursive;\n  margin: 0 0 8px 0; }\n\n.tour-wizard-content-wrap .tour-wizard-content-content {\n  font-size: 14px;\n  font-weight: normal; }\n\n.tour-wizard-content-wrap .tour-wizard-content-button {\n  border: none;\n  margin-top: 8px;\n  margin-right: 8px; }\n\n.tour-wizard-content-wrap .tour-wizard-content-button:last-child {\n    margin-right: 0; }\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_popper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-popper */ "./node_modules/ngx-popper/fesm5/ngx-popper.js");
/* harmony import */ var _tour_wizard_services_tour_wizard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tour-wizard-services/tour-wizard.service */ "./projects/ngx-tour-wizard/src/lib/tour-wizard-services/tour-wizard.service.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TourWizardPopperComponent = /** @class */ (function () {
    function TourWizardPopperComponent(tourWizardService) {
        this.tourWizardService = tourWizardService;
        this.isActive = false;
        this.popperPlacement = "top";
    }
    TourWizardPopperComponent.prototype.applySettings = function (settings) {
        if (settings === void 0) { settings = {}; }
        // Bug when merging step options due to issue https://github.com/MrFrankel/ngx-popper/issues/107
        lodash__WEBPACK_IMPORTED_MODULE_3__["merge"](this.tourWizardPopper.popperOptions, this.tourWizardService.popperDefaults, settings);
    };
    TourWizardPopperComponent.prototype.hidePopper = function () {
        this.tourWizardPopper.hide();
        this.isActive = false;
        // (typeof this._listener === typeof isNaN) && this._listener();
    };
    TourWizardPopperComponent.prototype.ngOnDestroy = function () {
        this.hidePopper();
    };
    TourWizardPopperComponent.prototype.setTemplate = function (newTemplate) {
        this.stepTemplate = newTemplate;
    };
    TourWizardPopperComponent.prototype.showPopper = function (popperTarget) {
        this.tourWizardPopper.referenceObject = popperTarget;
        if (!this.isActive) {
            this.isActive = true;
            this.tourWizardPopper.show();
            window.dispatchEvent(new CustomEvent("resize"));
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(ngx_popper__WEBPACK_IMPORTED_MODULE_1__["PopperContent"]),
        __metadata("design:type", ngx_popper__WEBPACK_IMPORTED_MODULE_1__["PopperContent"])
    ], TourWizardPopperComponent.prototype, "tourWizardPopper", void 0);
    TourWizardPopperComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "tour-wizard-popper-component",
            template: __webpack_require__(/*! ./tour-wizard-popper.component.html */ "./projects/ngx-tour-wizard/src/lib/tour-wizard-popper/tour-wizard-popper.component.html"),
            styles: [__webpack_require__(/*! ./tour-wizard-popper.component.scss */ "./projects/ngx-tour-wizard/src/lib/tour-wizard-popper/tour-wizard-popper.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [_tour_wizard_services_tour_wizard_service__WEBPACK_IMPORTED_MODULE_2__["TourWizardService"]])
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
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
            lodash__WEBPACK_IMPORTED_MODULE_4__["merge"](this.popperDefaults, _config.popperDefaults || {});
        }
        this.events$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"])(this.stepShow$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (value) { return ({ name: "stepShow", value: value }); })), this.stepHide$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (value) { return ({ name: "stepHide", value: value }); })), this.start$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (value) { return ({ name: "start", value: value }); })), this.end$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (value) { return ({ name: "end", value: value }); })), this.pause$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (value) { return ({ name: "pause", value: value }); })), this.resume$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (value) { return ({ name: "resume", value: value }); })), this.anchorRegister$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (value) { return ({ name: "anchorRegister", value: value }); })), this.anchorUnregister$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (value) { return ({ name: "anchorUnregister", value: value }); })));
    }
    TourWizardService.prototype.end = function () {
        this._subsCtrl$.next(!0);
        this.navigating = !1;
        this._tourStatus = _tour_wizard_models_tour_wizard_model__WEBPACK_IMPORTED_MODULE_1__["TourWizardState"].OFF;
        this._hideStep(this.currentStep);
        var currentStepBak = lodash__WEBPACK_IMPORTED_MODULE_4__["cloneDeep"](this.currentStep);
        this._voidTour();
        this.end$.next(currentStepBak);
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
        this._stepIndex = lodash__WEBPACK_IMPORTED_MODULE_4__["findIndex"](this.steps, function (s) { return s.anchorId === step.anchorId; });
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ngx_popper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-popper */ "./node_modules/ngx-popper/fesm5/ngx-popper.js");
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
                ngx_popper__WEBPACK_IMPORTED_MODULE_2__["NgxPopperModule"]
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
/*! exports provided: TourWizardState, tourWizardDefaults, TOUR_WIZARD_DEFAULTS, setupTourWizardService, provideTourWizardConfig, TOUR_WIZARD_PROVIDERS, TourWizardModule, TourWizardService, TourWizardPopperComponent, TourWizardOverlayComponent, TourWizardKboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_tour_wizard_models_tour_wizard_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/tour-wizard-models/tour-wizard.model */ "./projects/ngx-tour-wizard/src/lib/tour-wizard-models/tour-wizard.model.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TourWizardState", function() { return _lib_tour_wizard_models_tour_wizard_model__WEBPACK_IMPORTED_MODULE_0__["TourWizardState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tourWizardDefaults", function() { return _lib_tour_wizard_models_tour_wizard_model__WEBPACK_IMPORTED_MODULE_0__["tourWizardDefaults"]; });

/* harmony import */ var _lib_tour_wizard_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/tour-wizard.module */ "./projects/ngx-tour-wizard/src/lib/tour-wizard.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TOUR_WIZARD_DEFAULTS", function() { return _lib_tour_wizard_module__WEBPACK_IMPORTED_MODULE_1__["TOUR_WIZARD_DEFAULTS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setupTourWizardService", function() { return _lib_tour_wizard_module__WEBPACK_IMPORTED_MODULE_1__["setupTourWizardService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "provideTourWizardConfig", function() { return _lib_tour_wizard_module__WEBPACK_IMPORTED_MODULE_1__["provideTourWizardConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TOUR_WIZARD_PROVIDERS", function() { return _lib_tour_wizard_module__WEBPACK_IMPORTED_MODULE_1__["TOUR_WIZARD_PROVIDERS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TourWizardModule", function() { return _lib_tour_wizard_module__WEBPACK_IMPORTED_MODULE_1__["TourWizardModule"]; });

/* harmony import */ var _lib_tour_wizard_services_tour_wizard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/tour-wizard-services/tour-wizard.service */ "./projects/ngx-tour-wizard/src/lib/tour-wizard-services/tour-wizard.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TourWizardService", function() { return _lib_tour_wizard_services_tour_wizard_service__WEBPACK_IMPORTED_MODULE_2__["TourWizardService"]; });

/* harmony import */ var _lib_tour_wizard_popper_tour_wizard_popper_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/tour-wizard-popper/tour-wizard-popper.component */ "./projects/ngx-tour-wizard/src/lib/tour-wizard-popper/tour-wizard-popper.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TourWizardPopperComponent", function() { return _lib_tour_wizard_popper_tour_wizard_popper_component__WEBPACK_IMPORTED_MODULE_3__["TourWizardPopperComponent"]; });

/* harmony import */ var _lib_tour_wizard_overlay_tour_wizard_overlay_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/tour-wizard-overlay/tour-wizard-overlay.component */ "./projects/ngx-tour-wizard/src/lib/tour-wizard-overlay/tour-wizard-overlay.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TourWizardOverlayComponent", function() { return _lib_tour_wizard_overlay_tour_wizard_overlay_component__WEBPACK_IMPORTED_MODULE_4__["TourWizardOverlayComponent"]; });

/* harmony import */ var _lib_tour_wizard_kboard_tour_wizard_kboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/tour-wizard-kboard/tour-wizard-kboard.component */ "./projects/ngx-tour-wizard/src/lib/tour-wizard-kboard/tour-wizard-kboard.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TourWizardKboardComponent", function() { return _lib_tour_wizard_kboard_tour_wizard_kboard_component__WEBPACK_IMPORTED_MODULE_5__["TourWizardKboardComponent"]; });









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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _tour_wizard_app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tour-wizard-app.component */ "./src/app/tour-wizard-app.component.ts");
/* harmony import */ var ngx_tour_wizard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-tour-wizard */ "./projects/ngx-tour-wizard/src/public_api.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
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
                            backgroundColor: "#da8834"
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

/***/ "./src/app/tour-wizard-app.component.html":
/*!************************************************!*\
  !*** ./src/app/tour-wizard-app.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"pippo\">\r\n\r\n    <div class=\"tour-wizard-test\">\r\n\r\n        <span class=\"tour-wizard-button tour-wizard-text-gloria\"\r\n              (click)=\"startTour()\">\r\n            Start tour\r\n        </span>\r\n\r\n        <hr />\r\n\r\n        <span class=\"tour-wizard-text-gloria\" [tourWizardAnchor]=\"firstAnchor\">MY ANCHOR 1</span>\r\n\r\n        <div class=\"tour-wizard-spacer\"></div>\r\n\r\n        <span class=\"tour-wizard-text-gloria\" tourWizardAnchor=\"FOO_2\">MY ANCHOR 2, but target is there</span>\r\n\r\n        <span class=\"tour-wizard-text-gloria tour-wizard-my-target\">MY TARGET 2</span>\r\n\r\n        <div class=\"tour-wizard-spacer\"></div>\r\n\r\n        <span class=\"tour-wizard-text-gloria\" tourWizardAnchor=\"FOO_3\">MY ANCHOR 3</span>\r\n\r\n        <div class=\"tour-wizard-spacer\"></div>\r\n\r\n        <span class=\"tour-wizard-text-gloria\" tourWizardAnchor=\"FOO_4\">MY ANCHOR 4</span>\r\n\r\n    </div>\r\n\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/tour-wizard-app.component.scss":
/*!************************************************!*\
  !*** ./src/app/tour-wizard-app.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tour-wizard-test {\n  box-sizing: border-box;\n  text-align: center;\n  width: 100%;\n  background: #e2e2e2;\n  padding: 16px; }\n  .tour-wizard-test > .tour-wizard-button {\n    display: inline-block;\n    border-radius: 5px;\n    padding: 8px 16px;\n    background-color: #8dd000;\n    cursor: pointer;\n    text-transform: uppercase; }\n  .tour-wizard-test > .tour-wizard-button:hover {\n      box-shadow: 0 0 10px #AAA;\n      background-color: #c7ff51; }\n  .tour-wizard-test hr {\n    margin: 20px 0; }\n  .tour-wizard-test .tour-wizard-spacer {\n    width: 100%;\n    height: 350px; }\n  .tour-wizard-test > span {\n    background: white;\n    display: inline-block;\n    padding: 16px;\n    border: 1px solid rgba(0, 0, 0, 0.5); }\n  .tour-wizard-test .tour-wizard-my-target {\n    background: #8dd000;\n    color: #000;\n    float: right; }\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
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
                anchorId: "FOO_1",
                content: "Some text for FOO 1",
                title: "First"
            },
            {
                anchorId: "FOO_2",
                content: "Some other stuff for FOO 2. Next anchor will fire after 2 seconds!!",
                title: "Second",
                subjectForNext: this._fooTwo$,
                targetElement: ".tour-wizard-my-target",
                onNextClick: function () {
                    _this._onFooTwoNext();
                }
            },
            {
                anchorId: "FOO_3",
                content: "Prev anchor will fire after 2 seconds!! One more next...",
                title: "Third",
                subjectForPrev: this._fooThree$,
                onPrevClick: function () {
                    _this._onFooThreePrev();
                }
            },
            {
                anchorId: "FOO_4",
                content: "Let's finish this up!!!",
                title: "Fourth",
                popperSettings: {
                    styles: {
                        maxWidth: 190,
                        backgroundColor: "green"
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
    TourWizardAppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "tour-wizard-app",
            template: __webpack_require__(/*! ./tour-wizard-app.component.html */ "./src/app/tour-wizard-app.component.html"),
            styles: [__webpack_require__(/*! ./tour-wizard-app.component.scss */ "./src/app/tour-wizard-app.component.scss")],
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




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