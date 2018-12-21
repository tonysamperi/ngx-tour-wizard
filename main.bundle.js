webpackJsonp(["main"],{

/***/ "./lib/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__public_api__ = __webpack_require__("./lib/public_api.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__public_api__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__public_api__["b"]; });



/***/ }),

/***/ "./lib/public_api.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tour_wizard_model__ = __webpack_require__("./lib/tour-wizard.model.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tour_wizard_module__ = __webpack_require__("./lib/tour-wizard.module.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__tour_wizard_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tour_wizard_service__ = __webpack_require__("./lib/tour-wizard.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__tour_wizard_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tour_wizard_popper_component__ = __webpack_require__("./lib/tour-wizard-popper.component.ts");
/* unused harmony namespace reexport */






/***/ }),

/***/ "./lib/tour-wizard-anchor.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TourWizardAnchorDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tour_wizard_popper_component__ = __webpack_require__("./lib/tour-wizard-popper.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tour_wizard_service__ = __webpack_require__("./lib/tour-wizard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tour_wizard_dom_service__ = __webpack_require__("./lib/tour-wizard-dom.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tour_wizard_kboard_component__ = __webpack_require__("./lib/tour-wizard-kboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tour_wizard_overlay_component__ = __webpack_require__("./lib/tour-wizard-overlay.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_js_viewport_utils__ = __webpack_require__("./node_modules/js-viewport-utils/js-viewport-utils.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_js_viewport_utils___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_js_viewport_utils__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
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
        this._popperClass = __WEBPACK_IMPORTED_MODULE_1__tour_wizard_popper_component__["a" /* TourWizardPopperComponent */];
        this._viewPortOptions = {
            inline: "start",
            block: "start",
            behavior: "smooth"
        };
        // Prevents adding layers multiple times
        if (this._id === 1) {
            this._tourWizardDomService.appendComps([
                {
                    comp: __WEBPACK_IMPORTED_MODULE_4__tour_wizard_kboard_component__["a" /* TourWizardKboardComponent */],
                    key: "TourWizardKboardComponent"
                },
                {
                    comp: __WEBPACK_IMPORTED_MODULE_5__tour_wizard_overlay_component__["a" /* TourWizardOverlayComponent */],
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
        }
        this._anchorPopper.applySettings(step.popperSettings);
        if (!step.preventScrolling) {
            if (!__WEBPACK_IMPORTED_MODULE_6_js_viewport_utils__["inViewportBottom"](el)) {
                el.scrollIntoView(this._viewPortOptions);
            }
            else if (!__WEBPACK_IMPORTED_MODULE_6_js_viewport_utils__["inViewport"](el, { sides: "left top right" })) {
                el.scrollIntoView({
                    inline: "start",
                    block: "end",
                    behavior: "smooth"
                });
            }
            else if (!__WEBPACK_IMPORTED_MODULE_6_js_viewport_utils__["inViewportTop"](el)) {
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
                    if (!!vp && !__WEBPACK_IMPORTED_MODULE_6_js_viewport_utils__["inViewport"](vp)) {
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
    TourWizardAnchorDirective.nextId = 0;
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Input */])(),
        __metadata("design:type", String)
    ], TourWizardAnchorDirective.prototype, "tourWizardAnchor", void 0);
    TourWizardAnchorDirective = TourWizardAnchorDirective_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Directive */])({
            selector: "[tourWizardAnchor]",
            host: {
                "[class.show]": "isActive && !hasRemoteTarget",
                "[attr.tourWizardAnchor]": "tourWizardAnchor"
            }
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* ElementRef */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* ComponentFactoryResolver */],
            __WEBPACK_IMPORTED_MODULE_2__tour_wizard_service__["a" /* TourWizardService */],
            __WEBPACK_IMPORTED_MODULE_3__tour_wizard_dom_service__["a" /* TourWizardDomService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* ViewContainerRef */]])
    ], TourWizardAnchorDirective);
    return TourWizardAnchorDirective;
    var TourWizardAnchorDirective_1;
}());



/***/ }),

/***/ "./lib/tour-wizard-dom.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TourWizardDomService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* ComponentFactoryResolver */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* ApplicationRef */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Injector */]])
    ], TourWizardDomService);
    return TourWizardDomService;
}());



/***/ }),

/***/ "./lib/tour-wizard-kboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TourWizardKboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tour_wizard_service__ = __webpack_require__("./lib/tour-wizard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tour_wizard_model__ = __webpack_require__("./lib/tour-wizard.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TourWizardKboardComponent = /** @class */ (function () {
    function TourWizardKboardComponent(_tourWizardService) {
        this._tourWizardService = _tourWizardService;
    }
    TourWizardKboardComponent.prototype.onEscapeKey = function () {
        if (this._tourWizardService.getStatus() === __WEBPACK_IMPORTED_MODULE_2__tour_wizard_model__["a" /* TourWizardState */].ON &&
            this._tourWizardService.isHotKeysEnabled) {
            this._tourWizardService.end();
        }
    };
    TourWizardKboardComponent.prototype.onArrowRightKey = function () {
        var _this = this;
        if (this._tourWizardService.getStatus() === __WEBPACK_IMPORTED_MODULE_2__tour_wizard_model__["a" /* TourWizardState */].ON &&
            this._tourWizardService.hasNext(this._tourWizardService.currentStep) &&
            this._tourWizardService.isHotKeysEnabled) {
            // Timeout resolves smooth scrolling issue
            setTimeout(function () {
                _this._tourWizardService.next();
            });
        }
    };
    TourWizardKboardComponent.prototype.onArrowLeftKey = function () {
        var _this = this;
        if (this._tourWizardService.getStatus() === __WEBPACK_IMPORTED_MODULE_2__tour_wizard_model__["a" /* TourWizardState */].ON &&
            this._tourWizardService.hasPrev(this._tourWizardService.currentStep) &&
            this._tourWizardService.isHotKeysEnabled) {
            // Timeout resolves smooth scrolling issue
            setTimeout(function () {
                _this._tourWizardService.prev();
            });
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* HostListener */])("window:keydown.Escape"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], TourWizardKboardComponent.prototype, "onEscapeKey", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* HostListener */])("window:keydown.ArrowRight"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], TourWizardKboardComponent.prototype, "onArrowRightKey", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* HostListener */])("window:keydown.ArrowLeft"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], TourWizardKboardComponent.prototype, "onArrowLeftKey", null);
    TourWizardKboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "tour-wizard-kboard",
            template: "\n        <ng-content></ng-content>"
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__tour_wizard_service__["a" /* TourWizardService */]])
    ], TourWizardKboardComponent);
    return TourWizardKboardComponent;
}());



/***/ }),

/***/ "./lib/tour-wizard-overlay.component.scss":
/***/ (function(module, exports) {

module.exports = "@font-face {\n  font-family: \"Gloria Hallelujah\";\n  font-style: normal;\n  font-weight: 400;\n  src: local(\"Gloria Hallelujah\"), local(\"GloriaHallelujah\"), url(\"https://fonts.gstatic.com/s/gloriahallelujah/v9/LYjYdHv3kUk9BMV96EIswT9DIbW-MIS11zM.woff2\") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n\n:host > .tour-wizard-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  opacity: 0;\n  z-index: -1;\n  background-color: rgba(0, 0, 0, 0.5);\n  -webkit-transition: opacity .15s linear;\n  transition: opacity .15s linear; }\n\n:host.show > .tour-wizard-overlay {\n  opacity: 1;\n  z-index: 899; }\n"

/***/ }),

/***/ "./lib/tour-wizard-overlay.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TourWizardOverlayComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tour_wizard_service__ = __webpack_require__("./lib/tour-wizard.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "tour-wizard-overlay",
            host: {
                "[class.show]": "showOverlay"
            },
            template: "\n        <div class=\"tour-wizard-overlay\"></div>\n    ",
            styles: [__webpack_require__("./lib/tour-wizard-overlay.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__tour_wizard_service__["a" /* TourWizardService */]])
    ], TourWizardOverlayComponent);
    return TourWizardOverlayComponent;
}());



/***/ }),

/***/ "./lib/tour-wizard-popper.component.html":
/***/ (function(module, exports) {

module.exports = "<ng-template [popper]=\"tourWizardPopper\"\r\n             [popperPlacement]=\"popperPlacement\"\r\n             popperApplyClass=\"tourWizardPopper\"\r\n             [popperTrigger]=\"'none'\">\r\n\r\n    <!--[popperTarget]=\"popperTarget\"-->\r\n</ng-template>\r\n\r\n<ng-template #defaultTemplate let-step=\"step\">\r\n    <p class=\"tour-wizard-content-title\">{{step?.title}}</p>\r\n    <p class=\"tour-wizard-content-text\" [innerHTML]=\"step?.content\"></p>\r\n    <div class=\"tour-step-navigation\">\r\n        <button *ngIf=\"!step.hidePrevButton && tourWizardService.hasPrev(step)\"\r\n                class=\"tour-wizard-content-button btn-prev\"\r\n                [innerHTML]=\"step?.prevBtnTitle || '« Prev'\"\r\n                (click)=\"tourWizardService.prev()\">\r\n        </button>\r\n        <button *ngIf=\"step.showPauseButton\"\r\n                [innerHTML]=\"step?.pauseBtnTitle || 'Pause'\"\r\n                class=\"tour-wizard-content-button btn-pause\"\r\n                (click)=\"tourWizardService.pause()\">\r\n        </button>\r\n        <button *ngIf=\"!step.hideNextButton && tourWizardService.hasNext(step)\"\r\n                class=\"tour-wizard-content-button btn-next\"\r\n                [innerHTML]=\"step?.nextBtnTitle || 'Next »'\"\r\n                (click)=\"tourWizardService.next()\">\r\n        </button>\r\n        <button class=\"tour-wizard-content-button btn-end\"\r\n                [innerHtml]=\"step?.endBtnTitle || 'End'\"\r\n                (click)=\"tourWizardService.end()\">\r\n        </button>\r\n    </div>\r\n</ng-template>\r\n\r\n<popper-content class=\"tour-wizard-content-wrap\" #tourWizardPopper>\r\n    <ng-container *ngIf=\"isActive\">\r\n        <ng-container *ngTemplateOutlet=\"stepTemplate || defaultTemplate; context: { step: step }\">\r\n\r\n        </ng-container>\r\n    </ng-container>\r\n</popper-content>\r\n"

/***/ }),

/***/ "./lib/tour-wizard-popper.component.scss":
/***/ (function(module, exports) {

module.exports = "@font-face {\n  font-family: \"Gloria Hallelujah\";\n  font-style: normal;\n  font-weight: 400;\n  src: local(\"Gloria Hallelujah\"), local(\"GloriaHallelujah\"), url(\"https://fonts.gstatic.com/s/gloriahallelujah/v9/LYjYdHv3kUk9BMV96EIswT9DIbW-MIS11zM.woff2\") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n\n.tour-wizard-content-wrap .tour-wizard-content-title {\n  font-size: 18px;\n  font-weight: bold;\n  font-family: \"Gloria Hallelujah\", cursive;\n  margin: 0 0 8px 0; }\n\n.tour-wizard-content-wrap .tour-wizard-content-content {\n  font-size: 14px;\n  font-weight: normal; }\n\n.tour-wizard-content-wrap .tour-wizard-content-button {\n  border: none;\n  margin-top: 8px;\n  margin-bottom: 8px; }\n"

/***/ }),

/***/ "./lib/tour-wizard-popper.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TourWizardPopperComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_popper__ = __webpack_require__("./node_modules/ngx-popper/fesm5/ngx-popper.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tour_wizard_service__ = __webpack_require__("./lib/tour-wizard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TourWizardPopperComponent = /** @class */ (function () {
    // private _listener: () => void;
    // private _renderer: Renderer2
    function TourWizardPopperComponent(tourWizardService) {
        this.tourWizardService = tourWizardService;
        this.isActive = false;
        this.popperPlacement = "top";
    }
    TourWizardPopperComponent.prototype.applySettings = function (settings) {
        if (!settings) {
            return;
        }
        __WEBPACK_IMPORTED_MODULE_3_lodash__["merge"](this.tourWizardPopper.popperOptions, settings);
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
        // this.popperTarget = popperTarget;
        this.tourWizardPopper.referenceObject = popperTarget;
        if (!this.isActive) {
            this.isActive = true;
            this.tourWizardPopper.show();
            window.dispatchEvent(new CustomEvent("resize"));
            // this._listener = this._renderer.listen("document", "click", this._popperClickHandler.bind(this));
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ngx_popper__["b" /* PopperContent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ngx_popper__["b" /* PopperContent */])
    ], TourWizardPopperComponent.prototype, "tourWizardPopper", void 0);
    TourWizardPopperComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "tour-wizard-popper-component",
            template: __webpack_require__("./lib/tour-wizard-popper.component.html"),
            styles: [__webpack_require__("./lib/tour-wizard-popper.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__tour_wizard_service__["a" /* TourWizardService */]])
    ], TourWizardPopperComponent);
    return TourWizardPopperComponent;
}());



/***/ }),

/***/ "./lib/tour-wizard.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TourWizardState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return tourWizardDefaults; });
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

/***/ "./lib/tour-wizard.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export TOUR_WIZARD_DEFAULTS */
/* unused harmony export setupTourWizardService */
/* unused harmony export provideTourWizardConfig */
/* unused harmony export TOUR_WIZARD_PROVIDERS */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TourWizardModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_popper__ = __webpack_require__("./node_modules/ngx-popper/fesm5/ngx-popper.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tour_wizard_popper_component__ = __webpack_require__("./lib/tour-wizard-popper.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tour_wizard_kboard_component__ = __webpack_require__("./lib/tour-wizard-kboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tour_wizard_overlay_component__ = __webpack_require__("./lib/tour-wizard-overlay.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__tour_wizard_anchor_directive__ = __webpack_require__("./lib/tour-wizard-anchor.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__tour_wizard_service__ = __webpack_require__("./lib/tour-wizard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__tour_wizard_dom_service__ = __webpack_require__("./lib/tour-wizard-dom.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__tour_wizard_model__ = __webpack_require__("./lib/tour-wizard.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










// tslint:disable-next-line:naming-convention
var TOUR_WIZARD_DEFAULTS = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* InjectionToken */]("TOUR_WIZARD_DEFAULTS");
function setupTourWizardService(config) {
    return new __WEBPACK_IMPORTED_MODULE_7__tour_wizard_service__["a" /* TourWizardService */](config);
}
function provideTourWizardConfig(config) {
    if (config === void 0) { config = __WEBPACK_IMPORTED_MODULE_9__tour_wizard_model__["b" /* tourWizardDefaults */]; }
    return [
        { provide: TOUR_WIZARD_DEFAULTS, multi: false, useValue: config },
    ];
}
// tslint:disable-next-line:naming-convention
var TOUR_WIZARD_PROVIDERS = [
    {
        provide: __WEBPACK_IMPORTED_MODULE_7__tour_wizard_service__["a" /* TourWizardService */],
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
                provideTourWizardConfig(config),
            ]
        };
    };
    TourWizardModule = TourWizardModule_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2_ngx_popper__["a" /* NgxPopperModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__tour_wizard_popper_component__["a" /* TourWizardPopperComponent */],
                __WEBPACK_IMPORTED_MODULE_6__tour_wizard_anchor_directive__["a" /* TourWizardAnchorDirective */],
                __WEBPACK_IMPORTED_MODULE_4__tour_wizard_kboard_component__["a" /* TourWizardKboardComponent */],
                __WEBPACK_IMPORTED_MODULE_5__tour_wizard_overlay_component__["a" /* TourWizardOverlayComponent */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__tour_wizard_popper_component__["a" /* TourWizardPopperComponent */],
                __WEBPACK_IMPORTED_MODULE_4__tour_wizard_kboard_component__["a" /* TourWizardKboardComponent */],
                __WEBPACK_IMPORTED_MODULE_5__tour_wizard_overlay_component__["a" /* TourWizardOverlayComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__tour_wizard_popper_component__["a" /* TourWizardPopperComponent */],
                __WEBPACK_IMPORTED_MODULE_6__tour_wizard_anchor_directive__["a" /* TourWizardAnchorDirective */],
                __WEBPACK_IMPORTED_MODULE_4__tour_wizard_kboard_component__["a" /* TourWizardKboardComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__tour_wizard_dom_service__["a" /* TourWizardDomService */],
                TOUR_WIZARD_PROVIDERS,
                provideTourWizardConfig(),
            ]
        })
    ], TourWizardModule);
    return TourWizardModule;
    var TourWizardModule_1;
}());



/***/ }),

/***/ "./lib/tour-wizard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TourWizardService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tour_wizard_model__ = __webpack_require__("./lib/tour-wizard.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_merge__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/merge.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators__ = __webpack_require__("./node_modules/rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Subscription__ = __webpack_require__("./node_modules/rxjs/_esm5/Subscription.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lodash__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var TourWizardService = /** @class */ (function () {
    function TourWizardService(_config) {
        this._config = _config;
        this.anchors = {};
        this.appendDelay = 0;
        this.navigating = !1;
        this.steps = [];
        // Events
        this.stepShow$ = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["a" /* Subject */]();
        this.stepHide$ = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["a" /* Subject */]();
        this.start$ = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["a" /* Subject */]();
        this.end$ = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["a" /* Subject */]();
        this.pause$ = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["a" /* Subject */]();
        this.resume$ = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["a" /* Subject */]();
        this.anchorRegister$ = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["a" /* Subject */]();
        this.anchorUnregister$ = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["a" /* Subject */]();
        this._subs = new __WEBPACK_IMPORTED_MODULE_5_rxjs_Subscription__["a" /* Subscription */]();
        this._tourStatus = __WEBPACK_IMPORTED_MODULE_1__tour_wizard_model__["a" /* TourWizardState */].OFF;
        if (!!_config) {
            this.backdropTarget = _config.backdropTarget;
            this.isBackdropEnabled = !!_config.backdropEnabled;
            this.isHotKeysEnabled = !!_config.keyboardEnabled;
            this.additionalViewports = _config.additionalViewports || [];
            this.appendDelay = _config.appendDelay || 0;
        }
        this.events$ = Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_merge__["a" /* merge */])(this.stepShow$.pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["a" /* map */])(function (value) { return ({ name: "stepShow", value: value }); })), this.stepHide$.pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["a" /* map */])(function (value) { return ({ name: "stepHide", value: value }); })), this.start$.pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["a" /* map */])(function (value) { return ({ name: "start", value: value }); })), this.end$.pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["a" /* map */])(function (value) { return ({ name: "end", value: value }); })), this.pause$.pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["a" /* map */])(function (value) { return ({ name: "pause", value: value }); })), this.resume$.pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["a" /* map */])(function (value) { return ({ name: "resume", value: value }); })), this.anchorRegister$.pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["a" /* map */])(function (value) { return ({ name: "anchorRegister", value: value }); })), this.anchorUnregister$.pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["a" /* map */])(function (value) { return ({ name: "anchorUnregister", value: value }); })));
    }
    TourWizardService.prototype.end = function () {
        this._subs.unsubscribe();
        this.navigating = !1;
        this._tourStatus = __WEBPACK_IMPORTED_MODULE_1__tour_wizard_model__["a" /* TourWizardState */].OFF;
        this._hideStep(this.currentStep);
        var currentStepBak = __WEBPACK_IMPORTED_MODULE_6_lodash__["cloneDeep"](this.currentStep);
        this.currentStep = void 0;
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
        return step.nextStep !== undefined || __WEBPACK_IMPORTED_MODULE_6_lodash__["findIndex"](this.steps, step) < this.steps.length - 1;
    };
    TourWizardService.prototype.hasPrev = function (step) {
        if (!step) {
            console.warn("Can\"t get previous step. No currentStep.");
            return false;
        }
        return step.prevStep !== undefined || __WEBPACK_IMPORTED_MODULE_6_lodash__["findIndex"](this.steps, step) > 0;
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
            var targetStep_1 = this._loadStep(this.currentStep.nextStep || __WEBPACK_IMPORTED_MODULE_6_lodash__["findIndex"](this.steps, this.currentStep) + 1);
            if (!!this.currentStep && !!this.currentStep.subjectForNext) {
                // Hide current step
                this._hideStep(this.currentStep);
                // Start listening
                this._subs = this.currentStep.subjectForNext.subscribe(function (value) {
                    if (value) {
                        _this.currentStep = void 0;
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
            var targetStep_2 = this._loadStep(this.currentStep.prevStep || __WEBPACK_IMPORTED_MODULE_6_lodash__["findIndex"](this.steps, this.currentStep) - 1);
            if (!!this.currentStep && !!this.currentStep.subjectForPrev) {
                // Hide current step
                this._hideStep(this.currentStep);
                // Start listening
                this._subs = this.currentStep.subjectForPrev.subscribe(function (value) {
                    if (value) {
                        _this.currentStep = void 0;
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
        this._tourStatus = __WEBPACK_IMPORTED_MODULE_1__tour_wizard_model__["a" /* TourWizardState */].PAUSED;
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
        this._tourStatus = __WEBPACK_IMPORTED_MODULE_1__tour_wizard_model__["a" /* TourWizardState */].ON;
        this._showStep(this.currentStep);
        this.resume$.next();
    };
    TourWizardService.prototype.start = function () {
        this.startAt(0);
    };
    TourWizardService.prototype.startAt = function (stepId) {
        this._tourStatus = __WEBPACK_IMPORTED_MODULE_1__tour_wizard_model__["a" /* TourWizardState */].ON;
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
        this._subs.unsubscribe();
        this.navigating = !1;
        if (this.currentStep) {
            this._hideStep(this.currentStep);
        }
        this.currentStep = step;
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
    TourWizardService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* Injectable */])(),
        __metadata("design:paramtypes", [Object])
    ], TourWizardService);
    return TourWizardService;
}());



/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TourWizardTestModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tour_wizard_app_component__ = __webpack_require__("./src/app/tour-wizard-app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_tour_wizard__ = __webpack_require__("./lib/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var TourWizardTestModule = /** @class */ (function () {
    function TourWizardTestModule() {
    }
    TourWizardTestModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                // TourWizardModule,
                __WEBPACK_IMPORTED_MODULE_4_ngx_tour_wizard__["a" /* TourWizardModule */].forRoot({
                    backdropTarget: ".pippo",
                    backdropEnabled: true,
                    keyboardEnabled: true
                })
            ],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_3__tour_wizard_app_component__["a" /* TourWizardAppComponent */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__tour_wizard_app_component__["a" /* TourWizardAppComponent */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__tour_wizard_app_component__["a" /* TourWizardAppComponent */]],
        })
    ], TourWizardTestModule);
    return TourWizardTestModule;
}());



/***/ }),

/***/ "./src/app/tour-wizard-app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"pippo\">\r\n\r\n    <div class=\"tour-wizard-test\">\r\n\r\n    <span class=\"tour-wizard-button tour-wizard-text-gloria\"\r\n          (click)=\"startTour()\">\r\n        Start tour\r\n    </span>\r\n\r\n        <hr />\r\n\r\n        <span class=\"tour-wizard-text-gloria\" [tourWizardAnchor]=\"firstAnchor\">MY ANCHOR 1</span>\r\n\r\n        <div class=\"tour-wizard-spacer\"></div>\r\n\r\n        <span class=\"tour-wizard-text-gloria\" tourWizardAnchor=\"FOO_2\">MY ANCHOR 2, but target is there</span>\r\n\r\n        <span class=\"tour-wizard-text-gloria tour-wizard-my-target\">MY TARGET</span>\r\n\r\n        <div class=\"tour-wizard-spacer\"></div>\r\n\r\n        <span class=\"tour-wizard-text-gloria\" tourWizardAnchor=\"FOO_3\">MY ANCHOR 3</span>\r\n\r\n    </div>\r\n\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/tour-wizard-app.component.scss":
/***/ (function(module, exports) {

module.exports = ".tour-wizard-test {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  text-align: center;\n  width: 100%;\n  background: #e2e2e2;\n  padding: 16px; }\n  .tour-wizard-test > .tour-wizard-button {\n    display: inline-block;\n    border-radius: 5px;\n    padding: 8px 16px;\n    background-color: #8dd000;\n    cursor: pointer;\n    text-transform: uppercase; }\n  .tour-wizard-test > .tour-wizard-button:hover {\n      -webkit-box-shadow: 0 0 10px #AAA;\n      box-shadow: 0 0 10px #AAA;\n      background-color: #c7ff51; }\n  .tour-wizard-test hr {\n    margin: 20px 0; }\n  .tour-wizard-test .tour-wizard-spacer {\n    width: 100%;\n    height: 350px; }\n  .tour-wizard-test > span {\n    background: white;\n    display: inline-block;\n    padding: 16px;\n    border: 1px solid rgba(0, 0, 0, 0.5); }\n  .tour-wizard-test .tour-wizard-my-target {\n    background: #8dd000;\n    color: #000;\n    float: right; }\n"

/***/ }),

/***/ "./src/app/tour-wizard-app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TourWizardAppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_tour_wizard__ = __webpack_require__("./lib/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TourWizardAppComponent = /** @class */ (function () {
    function TourWizardAppComponent(_tourWizardService) {
        this._tourWizardService = _tourWizardService;
        this.firstAnchor = "FOO_1";
        this._fooTwo$ = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["a" /* Subject */]();
        this._fooThree$ = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["a" /* Subject */]();
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
                content: "Let's finish this up!!!",
                title: "Third",
                subjectForPrev: this._fooThree$,
                onPrevClick: function () {
                    _this._onFooThreePrev();
                }
            },
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "tour-wizard-app",
            template: __webpack_require__("./src/app/tour-wizard-app.component.html"),
            styles: [__webpack_require__("./src/app/tour-wizard-app.component.scss")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ngx_tour_wizard__["b" /* TourWizardService */]])
    ], TourWizardAppComponent);
    return TourWizardAppComponent;
}());



/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_app_module__ = __webpack_require__("./src/app/app.module.ts");


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_app_module__["a" /* TourWizardTestModule */]);


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map