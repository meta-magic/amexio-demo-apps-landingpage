(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet ></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./landing-page/landing-page.component */ "./src/app/landing-page/landing-page.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_app_routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/app.routes */ "./src/app/app.routes.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! amexio-ng-extensions */ "./node_modules/amexio-ng-extensions/amexio-ng-extensions.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







 // Import Amexio library
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_3__["LandingPageComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_7__["AmexioWidgetModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(src_app_app_routes__WEBPACK_IMPORTED_MODULE_5__["APP_ROUTE"], { useHash: true })
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routes.ts":
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/*! exports provided: APP_ROUTE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APP_ROUTE", function() { return APP_ROUTE; });
/* harmony import */ var src_app_landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/landing-page/landing-page.component */ "./src/app/landing-page/landing-page.component.ts");

var APP_ROUTE = [
    {
        path: '', redirectTo: 'landingPage-app', pathMatch: 'full',
    },
    {
        path: 'landingPage-app', component: src_app_landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_0__["LandingPageComponent"],
    }
];


/***/ }),

/***/ "./src/app/landing-page/landing-page.component.css":
/*!*********************************************************!*\
  !*** ./src/app/landing-page/landing-page.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbardemo .navbar-container {\n    position: relative !important;\n    width: 90%;\n  }\n\n  .bgCss834backgound {\n    height: 50% !important;\n  }\n\n  /* .navbardemo{\n    .topnav{\n      position: unset;\n      position: static !important;\n    }\n  } */"

/***/ }),

/***/ "./src/app/landing-page/landing-page.component.html":
/*!**********************************************************!*\
  !*** ./src/app/landing-page/landing-page.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<amexio-viewport [type]=\"'2'\" [scrollable]=\"true\">\n  <!-- image 1 -->\n  <amexio-viewport-content class=\"view-port-bg-image\" [scrollable]=\"false\">\n\n    <amexio-viewport-background>\n      <amexio-image [path]=\"'assets/images/ce1.jpeg'\"></amexio-image>\n    </amexio-viewport-background>\n\n    <amexio-viewport-content-body>\n      <amexio-nav [transparent]=\"true\" [enable-side-nav-position]=\"true\" [title]=\"'Amexio Demo App'\"\n        [logo]=\"'assets/images/amexio-logo.png'\">\n        <amexio-nav-item position-right [title]=\"'Training'\" [icon]=\"'fa fa-yelp fa-fw fa-lg'\" [type]=\"'link'\"\n          style=\"cursor: pointer;\">\n        </amexio-nav-item>\n        <amexio-nav-item position-right [title]=\"'Engage'\" [icon]=\"'fa fa-retweet fa-fw fa-lg'\" [type]=\"'link'\"\n          style=\"cursor: pointer;\">\n        </amexio-nav-item>\n        <amexio-nav-item position-right [title]=\"'About'\" [icon]=\"'fa fa-address-book fa-fw fa-lg'\" [type]=\"'link'\"\n          style=\"cursor: pointer;\">\n        </amexio-nav-item>\n      </amexio-nav>\n      <amexio-row>\n        <amexio-column size=\"3\" fit=\"false\">\n          <amexio-menu-ce [menu-alignment]=\"'center'\" [menu-positioning]=\"'center'\" [animation-type]=\"4\"\n            [data]=\"tempData\" [size]=\"60\">\n          </amexio-menu-ce>\n        </amexio-column>\n        <amexio-column size=\"1\" fit=\"false\">\n        </amexio-column>\n        <amexio-column size=\"8\" fit=\"false\">\n          <amexio-label size=\"large-bold\" [font-color]=\"'black'\">\n            Enterprise Edition Demos\n          </amexio-label>\n          <amexio-row>\n            <amexio-column [size]=\"6\" [fit]=\"false\">\n\n              <amexio-card-ce [align]=\"'start'\" [color]=\"'white'\" [background]=\"'rgba(176,214,154,.5)'\">\n                <amexio-header-ce amexioColorPalette [gradient]=\"true\" [color-palette]=\"'random'\" [height]=\"'35px'\"\n                  align=\"space-between\">\n                  <amexio-label [size]=\"'medium-bold'\">\n                    Demo 1\n                  </amexio-label>\n                  <amexio-image style=\" cursor: pointer;\" [icon-class]=\"'fa fa-external-link fa-2x'\"\n                    [tooltip]=\"'Fontawesome apple'\" (onClick)=\"onDemoFirstClick()\"></amexio-image>\n                </amexio-header-ce>\n                <amexio-body-ce>\n                  <amexio-image [overlay-effect]=\"'slide-left'\"\n                    [overlay-text]=\"'Home Page Layouts provides built-in layouts to have a quick start on Home Pages for your enterprise Apps.!'\"\n                    class=\"homepage-cursor\" [path]=\"'assets/images/homepage_demo1.jpg'\" >\n                  </amexio-image>\n                </amexio-body-ce>\n              </amexio-card-ce>\n\n\n            </amexio-column>\n            <amexio-column [size]=\"6\" [fit]=\"false\">\n\n              <amexio-card-ce [align]=\"'start'\" [color]=\"'white'\" [background]=\"'rgba(176,214,154,.5)'\">\n                <amexio-header-ce amexioColorPalette [gradient]=\"true\" [color-palette]=\"'random'\" [height]=\"'35px'\"\n                  align=\"space-between\">\n                  <amexio-label [size]=\"'medium-bold'\">\n                    Demo 2\n                  </amexio-label>\n                  <amexio-image style=\" cursor: pointer;\" [icon-class]=\"'fa fa-external-link fa-2x'\"\n                    [tooltip]=\"'Fontawesome apple'\" (onClick)=\"onDemoSecondClick()\"></amexio-image>\n\n                </amexio-header-ce>\n                <amexio-body-ce>\n                  <amexio-image [overlay-effect]=\"'slide-left'\"\n                    [overlay-text]=\"'Home Page Layouts provides built-in layouts to have a quick start on Home Pages for your enterprise Apps.'\"\n                    class=\"homepage-cursor\" [path]=\"'assets/images/homepage_demo2.jpg'\" >\n                  </amexio-image>\n\n                </amexio-body-ce>\n\n              </amexio-card-ce>\n            </amexio-column>\n          </amexio-row>\n        </amexio-column>\n      </amexio-row>\n\n\n    </amexio-viewport-content-body>\n  </amexio-viewport-content>\n\n  <!-- image 2 -->\n  <amexio-viewport-content>\n    <amexio-viewport-background>\n      <amexio-image [path]=\"'assets/images/vp1.jpg'\"></amexio-image>\n    </amexio-viewport-background>\n\n    <amexio-viewport-content-body [scrollable]=\"true\">\n\n      <amexio-row>\n        <amexio-column size=\"1\" fit=\"false\">\n        </amexio-column>\n        <amexio-column size=\"10\" fit=\"false\">\n\n          <!--  ViewPort Demo -->\n          <amexio-row>\n            <amexio-column size=\"12\" fit=\"true\">\n\n              <amexio-label size=\"large-bold\" [font-color]=\"'white'\">\n                Creative Edition Demos\n              </amexio-label>\n              <amexio-layout-columns [orientation]=\"'vertical'\" [border]=\"false\" [alignment]=\"'space-evenly'\">\n                <amexio-layout-item [fit]=\"true\">\n                  <amexio-layout-columns [border]=\"false\" [orientation]=\"'horizontal'\" [alignment]=\"'space-evenly'\">\n                    <amexio-layout-item>\n                      <amexio-card-ce [align]=\"'start'\" [color]=\"'white'\" [background]=\"'rgba(29,187,22,.45)'\">\n                        <amexio-header-ce amexioColorPalette [gradient]=\"true\" [color-palette]=\"'random'\"\n                          [height]=\"'35px'\" align=\"space-between\">\n                          <amexio-label [size]=\"'medium-bold'\">\n                            Viewort Demo 1\n                          </amexio-label>\n                          <amexio-image style=\" cursor: pointer;\" [icon-class]=\"'fa fa-external-link fa-2x'\"\n                            [tooltip]=\"'Fontawesome apple'\" (onClick)=\"onViewportDemoFirstClick()\"></amexio-image>\n                        </amexio-header-ce>\n                        <amexio-body-ce>\n                          <amexio-image [overlay-effect]=\"'slide-left'\" [overlay-text]=\"'Life is better when you Dance\n                      Because Dance is the hidden language of the soul.'\" class=\"homepage-cursor\"\n                            [path]=\"'assets/viewport/demo1.png'\" >\n                          </amexio-image>\n\n                        </amexio-body-ce>\n                      </amexio-card-ce>\n                    </amexio-layout-item>\n                    <amexio-layout-item>\n                      <amexio-card-ce [align]=\"'start'\" [color]=\"'white'\" [background]=\"'rgba(29,187,22,.45)'\">\n                        <amexio-header-ce amexioColorPalette [gradient]=\"true\" [color-palette]=\"'vibrant'\"\n                          [height]=\"'35px'\" align=\"space-between\">\n                          <amexio-label [size]=\"'medium-bold'\">\n                            Viewport Demo 2\n                          </amexio-label>\n                          <amexio-image style=\" cursor: pointer;\" [icon-class]=\"'fa fa-external-link fa-2x'\"\n                            [tooltip]=\"'Fontawesome apple'\" (onClick)=\"onViewportDemoSecondClick()\"></amexio-image>\n                        </amexio-header-ce>\n                        <amexio-body-ce>\n                          <amexio-image [overlay-effect]=\"'slide-left'\"\n                            [overlay-text]=\"'If you want to buy some furniture then go throught it.'\"\n                            class=\"homepage-cursor\" [path]=\"'assets/viewport/demo2.png'\" >\n                          </amexio-image>\n\n                        </amexio-body-ce>\n\n                      </amexio-card-ce>\n                    </amexio-layout-item>\n                    <amexio-layout-item>\n                      <amexio-card-ce [align]=\"'start'\" [color]=\"'white'\" [background]=\"'rgba(29,187,22,.45)'\">\n                        <amexio-header-ce amexioColorPalette [gradient]=\"true\" [color-palette]=\"'random'\"\n                          [height]=\"'35px'\" align=\"space-between\">\n                          <amexio-label [size]=\"'medium-bold'\">\n                            Viewport Demo 3\n                          </amexio-label>\n                          <amexio-image style=\" cursor: pointer;\" [icon-class]=\"'fa fa-external-link fa-2x'\"\n                            [tooltip]=\"'Fontawesome apple'\" (onClick)=\"onViewportDemoThreeClick()\"></amexio-image>\n                        </amexio-header-ce>\n                        <amexio-body-ce>\n                          <amexio-image [overlay-effect]=\"'slide-left'\" [overlay-text]=\"'By the deep sea, or the jungle, and music in its roar;\n                      I love not Man the less, but Nature more.'\" class=\"homepage-cursor\"\n                            [path]=\"'assets/viewport/demo3.png'\" >\n                          </amexio-image>\n\n                        </amexio-body-ce>\n\n                      </amexio-card-ce>\n                    </amexio-layout-item>\n\n                  </amexio-layout-columns>\n                </amexio-layout-item>\n              </amexio-layout-columns>\n            </amexio-column>\n          </amexio-row>\n\n\n\n          <!--  Creative Menu Demo -->\n          <amexio-row>\n            <amexio-column size=\"12\" fit=\"true\">\n              <amexio-layout-columns [orientation]=\"'vertical'\" [border]=\"false\" [alignment]=\"'center'\">\n                <amexio-layout-item [fit]=\"true\">\n                  <amexio-layout-columns [border]=\"false\" [orientation]=\"'horizontal'\" [alignment]=\"'center'\">\n                    <amexio-layout-item>\n                      <amexio-card-ce [align]=\"'start'\" [color]=\"'white'\" [background]=\"'rgba(29,187,22,.45)'\">\n                        <amexio-header-ce amexioColorPalette [gradient]=\"true\" [color-palette]=\"'classic'\"\n                          [height]=\"'35px'\" align=\"space-between\">\n                          <amexio-label [size]=\"'medium-bold'\">\n                            Menu Demo 1\n                          </amexio-label>\n                          <amexio-image style=\" cursor: pointer;\" [icon-class]=\"'fa fa-external-link fa-2x'\"\n                            [tooltip]=\"'Fontawesome apple'\" (onClick)=\"onMenuDemoFirstClick()\"></amexio-image>\n                        </amexio-header-ce>\n                        <amexio-body-ce>\n                          <amexio-image [overlay-effect]=\"'slide-left'\"\n                            [overlay-text]=\"'Creative Menu Demo with center alignment and animation effect.'\"\n                            class=\"homepage-cursor\" [path]=\"'assets/viewport/menu1.png'\" >\n                          </amexio-image>\n\n                        </amexio-body-ce>\n\n                      </amexio-card-ce>\n                    </amexio-layout-item>\n\n                    <amexio-layout-item>\n                      <amexio-card-ce [align]=\"'start'\" [color]=\"'white'\" [background]=\"'rgba(29,187,22,.45)'\">\n                        <amexio-header-ce amexioColorPalette [gradient]=\"true\" [color-palette]=\"'random'\"\n                          [height]=\"'35px'\" align=\"space-between\">\n                          <amexio-label [size]=\"'medium-bold'\">\n                            Menu Demo 2\n                          </amexio-label>\n                          <amexio-image style=\" cursor: pointer;\" [icon-class]=\"'fa fa-external-link fa-2x'\"\n                            [tooltip]=\"'Fontawesome apple'\" (onClick)=\"onMenuDemoSecondClick()\"></amexio-image>\n                        </amexio-header-ce>\n                        <amexio-body-ce>\n                          <amexio-image [overlay-effect]=\"'slide-left'\"\n                            [overlay-text]=\"'Creative Menu Demo with Right side alignment and animation effect.'\"\n                            class=\"homepage-cursor\" [path]=\"'assets/viewport/menu2.png'\" >\n                          </amexio-image>\n\n                        </amexio-body-ce>\n\n                      </amexio-card-ce>\n                    </amexio-layout-item>\n                    <amexio-layout-item>\n\n                      <amexio-card-ce [align]=\"'start'\" [color]=\"'white'\" [background]=\"'rgba(29,187,22,.45)'\">\n                        <amexio-header-ce amexioColorPalette [gradient]=\"true\" [color-palette]=\"'vibrant'\"\n                          [height]=\"'35px'\" align=\"space-between\">\n                          <amexio-label [size]=\"'medium-bold'\">\n                            Menu Demo 3\n                          </amexio-label>\n                          <amexio-image style=\" cursor: pointer;\" [icon-class]=\"'fa fa-external-link fa-2x'\"\n                            [tooltip]=\"'Fontawesome apple'\" (onClick)=\"onMenuDemoThreeClick()\"></amexio-image>\n                        </amexio-header-ce>\n                        <amexio-body-ce>\n                          <amexio-image [overlay-effect]=\"'slide-left'\"\n                            [overlay-text]=\"'Creative Menu Demo with left side alignment and animation effect.'\"\n                            class=\"homepage-cursor\" [path]=\"'assets/viewport/menu3.png'\" >\n                          </amexio-image>\n\n                        </amexio-body-ce>\n\n                      </amexio-card-ce>\n\n                    </amexio-layout-item>\n                  </amexio-layout-columns>\n                </amexio-layout-item>\n              </amexio-layout-columns>\n            </amexio-column>\n          </amexio-row>\n        </amexio-column>\n        <amexio-column size=\"1\" fit=\"false\">\n        </amexio-column>\n      </amexio-row>\n\n\n    </amexio-viewport-content-body>\n  </amexio-viewport-content>\n\n  <!-- image 3 -->\n  <amexio-viewport-content [scrollable]=\"false\">\n\n    <amexio-viewport-background>\n      <amexio-image [path]=\"'assets/images/techm.jpg'\"></amexio-image>\n    </amexio-viewport-background>\n\n    <amexio-viewport-content-body>\n      <br>\n      <br>\n\n      <amexio-row>\n        <amexio-column size=\"2\" fit=\"false\">\n        </amexio-column>\n        <amexio-column [size]=\"8\" [fit]=\"true\">\n\n          <amexio-card-ce [align]=\"'center'\" [color]=\"'white'\" [background]=\"'rgba(22,187,183,.4)'\">\n            <amexio-header-ce amexioColorPalette [gradient]=\"true\" [color-palette]=\"'classic'\" [height]=\"'35px'\"\n              align=\" space-between\">\n              <amexio-label [size]=\"'medium-bold'\" style=\"padding-left:40px; cursor: pointer;\">\n                Tech M Flix\n              </amexio-label>\n              <amexio-image style=\" cursor: pointer;\" [icon-class]=\"'fa fa-external-link fa-2x'\"\n                [tooltip]=\"'Fontawesome apple'\" (onClick)=\"onDemoTechMClick()\"></amexio-image>\n            </amexio-header-ce>\n            <amexio-body-ce>\n              <amexio-image [overlay-effect]=\"'slide-left'\"\n                [overlay-text]=\"'Netflix chronicles the rise of the cocaine trade in Colombia and the gripping real-life stories of drug kingpins of the late 80s in this raw, gritty original series.\n               Also detailed are the actions taken by law enforcement as they battle in the war on drugs, targeting notorious and powerful figures that include drug lord Pablo Escobar.'\"\n                class=\"homepage-cursor\" [path]=\"'assets/images/techm.png'\" >\n              </amexio-image>\n\n            </amexio-body-ce>\n\n          </amexio-card-ce>\n\n        </amexio-column>\n        <amexio-column size=\"2\" fit=\"false\">\n        </amexio-column>\n\n      </amexio-row>\n\n    </amexio-viewport-content-body>\n\n  </amexio-viewport-content>\n  <!-- image 4 -->\n\n  <amexio-viewport-content [scrollable]=\"false\">\n\n    <amexio-viewport-background>\n      <amexio-image [path]=\"'assets/images/se9.jpg'\"></amexio-image>\n    </amexio-viewport-background>\n\n    <amexio-viewport-content-body>\n      <br>\n      <br>\n      <br>\n      <br>\n      <amexio-row>\n        <amexio-column size=\"1\" fit=\"false\">\n        </amexio-column>\n        <amexio-column size=\"10\" fit=\"true\">\n\n\n          <amexio-label size=\"large-bold\" [font-color]=\"'black'\">\n            Standard Edition Demos\n          </amexio-label>\n          <amexio-layout-columns [orientation]=\"'vertical'\" [border]=\"false\" [alignment]=\"'center'\">\n            <amexio-layout-item [fit]=\"true\">\n              <amexio-layout-columns [border]=\"false\" [orientation]=\"'horizontal'\" [alignment]=\"'center'\">\n                <amexio-layout-item>\n                  <amexio-card-ce [align]=\"'start'\" [color]=\"'white'\" [background]=\"'rgba(220,17,125,.4)'\">\n                    <amexio-header-ce amexioColorPalette [gradient]=\"true\" [color-palette]=\"'random'\" [height]=\"'35px'\"\n                      align=\"space-between\">\n                      <amexio-label [size]=\"'medium-bold'\">\n                        U.S. Election APP\n                      </amexio-label>\n                      <amexio-image style=\" cursor: pointer;\" [icon-class]=\"'fa fa-external-link fa-2x'\"\n                        [tooltip]=\"'Fontawesome apple'\" (onClick)=\"onElectionDemoClick()\"></amexio-image>\n                    </amexio-header-ce>\n                    <amexio-body-ce>\n                      <amexio-image [overlay-effect]=\"'slide-left'\"\n                        [overlay-text]=\"' U.S election Demo Application using Amexio tags. '\" class=\"homepage-cursor\"\n                        [path]=\"'assets/images/election.png'\" >\n                      </amexio-image>\n\n                    </amexio-body-ce>\n                  </amexio-card-ce>\n                </amexio-layout-item>\n\n                <amexio-layout-item>\n                  <amexio-card-ce [align]=\"'center'\" [color]=\"'white'\" [background]=\"'rgba(220,17,125,.4)'\">\n                    <amexio-header-ce amexioColorPalette [gradient]=\"true\" [color-palette]=\"'random'\" [color]=\"'white'\"\n                      [color]=\"'black'\" [height]=\"'35px'\" align=\"space-between\">\n                      <amexio-label [size]=\"'medium-bold'\">\n                        Shopping APP\n                      </amexio-label>\n                      <amexio-image style=\" cursor: pointer;\" [icon-class]=\"'fa fa-external-link fa-2x'\"\n                        [tooltip]=\"'Fontawesome apple'\" (onClick)=\"onShoppingDemoClick()\"></amexio-image>\n                    </amexio-header-ce>\n                    <amexio-body-ce>\n                      <amexio-image [overlay-effect]=\"'slide-left'\"\n                        [overlay-text]=\"' Shopping Demo Application using multiple component of Amexio and  Amexio tags.'\"\n                        class=\"homepage-cursor\" [path]=\"'assets/images/shopping.png'\" >\n                      </amexio-image>\n\n                    </amexio-body-ce>\n\n                  </amexio-card-ce>\n                </amexio-layout-item>\n                <amexio-layout-item>\n\n                  <amexio-card-ce [align]=\"'center'\" [color]=\"'white'\" [background]=\"'rgba(220,17,125,.4)'\">\n                    <amexio-header-ce [height]=\"'35px'\" amexioColorPalette [gradient]=\"true\"\n                      [color-palette]=\"'amexio-theme-color4  '\" align=\"space-between\">\n                      <amexio-label [size]=\"'medium-bold'\">\n                        Insurance APP\n                      </amexio-label>\n                      <amexio-image style=\" cursor: pointer;\" [icon-class]=\"'fa fa-external-link fa-2x'\"\n                        [tooltip]=\"'Fontawesome apple'\" (onClick)=\"onPolicyDemoClick()\"></amexio-image>\n                    </amexio-header-ce>\n                    <amexio-body-ce>\n\n                      <amexio-image [overlay-effect]=\"'slide-left'\"\n                        [overlay-text]=\"' Digital policy Demo Application using multiple component of Amexio and  Amexio tags.'\"\n                        class=\"homepage-cursor\" [path]=\"'assets/images/policy.png'\" >\n                      </amexio-image>\n\n                    </amexio-body-ce>\n\n                  </amexio-card-ce>\n\n                </amexio-layout-item>\n              </amexio-layout-columns>\n            </amexio-layout-item>\n          </amexio-layout-columns>\n        </amexio-column>\n        <amexio-column size=\"1\" fit=\"false\">\n        </amexio-column>\n      </amexio-row>\n    </amexio-viewport-content-body>\n  </amexio-viewport-content>\n\n</amexio-viewport>"

/***/ }),

/***/ "./src/app/landing-page/landing-page.component.ts":
/*!********************************************************!*\
  !*** ./src/app/landing-page/landing-page.component.ts ***!
  \********************************************************/
/*! exports provided: LandingPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingPageComponent", function() { return LandingPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! amexio-ng-extensions */ "./node_modules/amexio-ng-extensions/amexio-ng-extensions.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LandingPageComponent = /** @class */ (function () {
    function LandingPageComponent(http, _gridlayoutService) {
        this.http = http;
        this._gridlayoutService = _gridlayoutService;
        this.DEMO_FIRST_URL = 'https://meta-magic.github.io/amexio-ce-demo/#/home/dashboard?type=1';
        this.DEMO_SEC_URL = 'https://meta-magic.github.io/amexio-ce-demo/#/home/dashboard?type=2';
        this.DEMO_TECH_M_URL = 'https://demo.amexio.org/ee/tecmflix/index.html#/app';
        this.DEMO_THREE_URL = ' https://cedemo.amexio.org/#/home/dashboard';
        this.DEMO_FOUR_URL = ' https://meta-magic.github.io/viewport-Demo/#/home/scrollable-viewport';
        this.DEMO_FIVE_URL = ' https://meta-magic.github.io/viewport-Demo/#/home/viewport';
        this.DEMO_SIX_URL = ' https://meta-magic.github.io/viewport-Demo/#/home/video-viewport';
        //
        this.DEMO_SEVEN_URL = ' https://meta-magic.github.io/viewport-Demo/#/home/menu-one';
        this.DEMO_EIGHT_URL = ' https://meta-magic.github.io/viewport-Demo/#/home/menu-two';
        this.DEMO_NINE_URL = ' https://meta-magic.github.io/viewport-Demo/#/home/menu-three';
        this.DEMO_SHOPPING_URL = 'https://demo.amexio.org/se/shoppingportal/#/home';
        this.DEMO_POLICY_URL = 'https://demo.amexio.org/se/insuranceportal/#/home';
        this.DEMO_ELECTION_URL = 'https://demo.amexio.org/se/us-election/';
        this.createLayouts();
        // Create the Layouts
        this._gridlayoutService.createLayout(this.gridDesktop);
    }
    LandingPageComponent.prototype.ngOnInit = function () {
        this.tempData = [
            {
                label: 'API'
            },
            {
                label: 'GITHUB'
            },
            {
                label: 'NPM STATS'
            },
            {
                label: 'SUPPORT'
            },
            {
                label: 'ROAD MAP'
            }
        ];
    };
    LandingPageComponent.prototype.createLayouts = function () {
        this.gridDesktop = new amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__["GridConfig"]('LayoutSample1', amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__["GridConstants"].Desktop)
            .addlayout(['gridmenu1', 'gridmenu2', 'gridmenu3', 'gridlogin'])
            .addlayout(['gridmenu4', 'gridmenu5', 'gridmenu6', 'gridlogin1']);
    };
    LandingPageComponent.prototype.onLoginClick = function (data) {
        this.facebookLoginData = data;
    };
    LandingPageComponent.prototype.onDemoTechMClick = function () {
        window.open(this.DEMO_TECH_M_URL);
    };
    LandingPageComponent.prototype.onDemoFirstClick = function () {
        window.open(this.DEMO_FIRST_URL);
    };
    LandingPageComponent.prototype.onDemoSecondClick = function () {
        window.open(this.DEMO_SEC_URL);
    };
    LandingPageComponent.prototype.onDemoThreeClick = function () {
        window.open(this.DEMO_THREE_URL);
    };
    LandingPageComponent.prototype.onViewportDemoFirstClick = function () {
        window.open(this.DEMO_FOUR_URL);
    };
    LandingPageComponent.prototype.onViewportDemoSecondClick = function () {
        window.open(this.DEMO_FIVE_URL);
    };
    LandingPageComponent.prototype.onViewportDemoThreeClick = function () {
        window.open(this.DEMO_SIX_URL);
    };
    LandingPageComponent.prototype.onMenuDemoFirstClick = function () {
        window.open(this.DEMO_SEVEN_URL);
    };
    LandingPageComponent.prototype.onMenuDemoSecondClick = function () {
        window.open(this.DEMO_EIGHT_URL);
    };
    LandingPageComponent.prototype.onMenuDemoThreeClick = function () {
        window.open(this.DEMO_NINE_URL);
    };
    LandingPageComponent.prototype.onPolicyDemoClick = function () {
        window.open(this.DEMO_POLICY_URL);
    };
    LandingPageComponent.prototype.onShoppingDemoClick = function () {
        window.open(this.DEMO_SHOPPING_URL);
    };
    LandingPageComponent.prototype.onElectionDemoClick = function () {
        window.open(this.DEMO_ELECTION_URL);
    };
    LandingPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-landing-page',
            template: __webpack_require__(/*! ./landing-page.component.html */ "./src/app/landing-page/landing-page.component.html"),
            styles: [__webpack_require__(/*! ./landing-page.component.css */ "./src/app/landing-page/landing-page.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__["AmexioGridLayoutService"]])
    ], LandingPageComponent);
    return LandingPageComponent;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/deepali/Docker-Containers/Api_Dist/amexio-demo-apps-landingpage/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map