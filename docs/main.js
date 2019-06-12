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

module.exports = "<router-outlet ></router-outlet>\n\n\n<hr/>\n\n<div style=\"text-align: center; background: white\">\n\nCopyright © <a style=\"color: blue\" href=\"https://metamagicglobal.com\" target=\"_blank\">MetaMagic Global Inc</a>, 2017-19.NJ, USA.\n<a style=\"color: blue\" href=\"http://www.amexio.tech/\" target=\"_blank\">Amexio Angular EXtensions</a>. All rights reserved. \n<br />\n\nBetaMagic Global Pvt Ltd, Pune, Maharashtra, India is a wholly owned subsidiary of MetaMagic Global Inc, NJ, USA. \n<br />\n\nLicensed under the <a style=\"color: blue\" href=\"https://api.amexio.org/api/license.html\"target=\"_blank\">Apache2.0 License</a>.\n<a style=\"color: blue\" href=\"http://api.amexio.org/\" target=\"_blank\">Amexio API Docs</a> by\n<a style=\"color: blue\" href=\"https://creativecommons.org/licenses/by/4.0/legalcode\" target=\"_blank\">CC By 4.0 </a>\n<br />\n<hr/>\nShowcase and all the Demos are powered by Amexio API\n\n</div>\n\n    \n<hr/>\n\n"

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
                _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_3__["LandingPageComponent"]
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

module.exports = "<amexio-viewport [type]=\"'2'\" [scrollable]=\"true\">\n  <!-- image 1 -->\n  <amexio-viewport-content class=\"view-port-bg-image\" [scrollable]=\"false\">\n\n    <amexio-viewport-background>\n      <amexio-image [path]=\"'assets/images/Amexio-Showcase-EE.jpg'\"></amexio-image>\n    </amexio-viewport-background>\n\n    <amexio-viewport-content-body>\n\n      <amexio-nav [enable-side-nav-position]=\"true\" [enable-more-mode]=\"true\" [title]=\"'Amexio Showcase'\"\n        [logo]=\"'assets/images/amexio-logo.png'\">\n\n        <amexio-nav-item position-right *ngFor=\"let menus of amexiotechmenus\" [type]=\"'menu'\" [title]=\"menus.text\"\n          [icon]=\"menus.icon\" [data]=\"menus.submenus\" (onNavItemClick)=\"externalLink($event)\">\n        </amexio-nav-item>\n\n\n      </amexio-nav>\n      <br>\n      <br>\n      <amexio-layout-grid style=\"padding: 0px 10px 0px 10px;\" [layout]=\"'page1'\">\n        <amexio-grid-item [name]=\"'gridDemo1'\">\n\n          <amexio-menu-ce [font-color]=\"'white'\" [menu-positioning]=\"'left'\" [font]=\"'sans-serif'\" [animation-type]=\"4\" [data]=\"tempData\"\n            [size]=\"50\" (onClick)=\"onMenuClick($event)\">\n          </amexio-menu-ce>\n        </amexio-grid-item>\n\n        <amexio-grid-item [name]=\"'gridLabel'\">\n          <amexio-label size=\"large-bold\" [font-color]=\"'white'\">\n            Enterprise Edition Demos\n          </amexio-label>\n        </amexio-grid-item>\n\n        <amexio-grid-item [name]=\"'gridDemo2'\">\n          <amexio-card-ce [align]=\"'start'\" [color]=\"'white'\" [background]=\"'rgba(228, 175, 104,0.3)'\" [color]=\"'white'\"\n            [background]=\"'rgba(228,175,104,0.3)'\">\n            <amexio-header-ce amexioColorPalette [gradient]=\"true\" [color-palette]=\"'random'\" [height]=\"'35px'\"\n              align=\"start\">\n              <amexio-label [size]=\"'medium-bold'\">\n                Demo 1\n              </amexio-label>\n            </amexio-header-ce>\n            <amexio-body-ce>\n              <amexio-image class=\"homepage-cursor\" [path]=\"'assets/images/homepage_demo1.jpg'\">\n              </amexio-image>\n              <p>\n                Home Page Layouts provides built-in layouts to have a quick start on Home Pages for your enterprise\n                Apps.!\n              </p>\n            </amexio-body-ce>\n            <amexio-action-ce align=\"center\" [border-top]=\"true\">\n              <amexio-button [label]=\"'Demo'\" (onClick)=\"onDemoFirstClick()\" [type]=\"'theme-color'\" [tooltip]=\"'Demo'\">\n              </amexio-button>\n            </amexio-action-ce>\n          </amexio-card-ce>\n        </amexio-grid-item>\n\n\n        <amexio-grid-item [name]=\"'gridDemo3'\">\n          <amexio-card-ce [align]=\"'center'\" [color]=\"'white'\" [background]=\"'rgba(228,175,104,0.3)'\">\n            <amexio-header-ce amexioColorPalette [gradient]=\"true\" [color-palette]=\"'random'\" [height]=\"'35px'\"\n              align=\"start\">\n              <amexio-label [size]=\"'medium-bold'\">\n                Demo 2\n              </amexio-label>\n\n            </amexio-header-ce>\n            <amexio-body-ce>\n              <amexio-image class=\"homepage-cursor\" [path]=\"'assets/images/homepage_demo2.jpg'\">\n              </amexio-image>\n              <p>\n                Home Page Layouts provides built-in layouts to have a quick start on Home Pages for your enterprise\n                Apps.\n              </p>\n\n            </amexio-body-ce>\n            <amexio-action-ce align=\"center\" [border-top]=\"true\">\n              <amexio-button [label]=\"'Demo'\" (onClick)=\"onDemoSecondClick()\" [type]=\"'theme-color'\" [tooltip]=\"'Demo'\">\n              </amexio-button>\n            </amexio-action-ce>\n\n          </amexio-card-ce>\n        </amexio-grid-item>\n      </amexio-layout-grid>\n\n\n\n    </amexio-viewport-content-body>\n  </amexio-viewport-content>\n\n  <!-- image 2 -->\n  <amexio-viewport-content>\n    <amexio-viewport-background>\n      <amexio-image [path]=\"'assets/images/vp1.jpg'\"></amexio-image>\n    </amexio-viewport-background>\n\n    <amexio-viewport-content-body [scrollable]=\"false\">\n      <br>\n      <br>\n      <amexio-layout-grid style=\"padding: 0px 10px 0px 10px;\" [layout]=\"'page2'\">\n        <amexio-grid-item [name]=\"'gridpage2title'\">\n          <amexio-label size=\"large-bold\" [font-color]=\"'white'\">\n            Creative Viewport Demos\n          </amexio-label>\n        </amexio-grid-item>\n\n        <amexio-grid-item [name]=\"'gridpage2view1'\">\n          <amexio-card-ce [align]=\"'start'\" [color]=\"'white'\" [background]=\"'rgba(132,99,102,0.3)'\">\n            <amexio-header-ce amexioColorPalette [gradient]=\"true\" [color-palette]=\"'random'\" [height]=\"'35px'\"\n              align=\"start\">\n              <amexio-label [size]=\"'medium-bold'\">\n                Viewort Demo 1\n              </amexio-label>\n            </amexio-header-ce>\n            <amexio-body-ce>\n              <amexio-image class=\"homepage-cursor\" [path]=\"'assets/viewport/demo1.jpg'\">\n              </amexio-image>\n              <p>Life is better when you Dance Because Dance is the hidden language of the soul.\n              </p>\n            </amexio-body-ce>\n            <amexio-action-ce align=\"center\" [border-top]=\"true\">\n              <amexio-button [label]=\"'Demo'\" (onClick)=\"onViewportDemoFirstClick()\" [type]=\"'theme-color'\"\n                [tooltip]=\"'Demo'\">\n              </amexio-button>\n            </amexio-action-ce>\n          </amexio-card-ce>\n        </amexio-grid-item>\n\n        <amexio-grid-item [name]=\"'gridpage2view2'\">\n          <amexio-card-ce [align]=\"'start'\" [color]=\"'white'\" [background]=\"'rgba(132,99,102,0.3)'\">\n            <amexio-header-ce amexioColorPalette [gradient]=\"true\" [color-palette]=\"'vibrant'\" [height]=\"'35px'\"\n              align=\"start\">\n              <amexio-label [size]=\"'medium-bold'\">\n                Viewport Demo 2\n              </amexio-label>\n            </amexio-header-ce>\n            <amexio-body-ce>\n              <amexio-image class=\"homepage-cursor\" [path]=\"'assets/viewport/demo2.jpg'\">\n              </amexio-image>\n              <p>\n                Offers A Unique Selection Of Stylish, Contemporary, And Chic Furniture Online. High Quality Furniture.\n\n              </p>\n\n            </amexio-body-ce>\n            <amexio-action-ce align=\"center\" [border-top]=\"true\">\n              <amexio-button [label]=\"'Demo'\" (onClick)=\"onViewportDemoSecondClick()\" [type]=\"'theme-color'\"\n                [tooltip]=\"'Demo'\"> </amexio-button>\n            </amexio-action-ce>\n\n          </amexio-card-ce>\n        </amexio-grid-item>\n\n        <amexio-grid-item [name]=\"'gridpage2view3'\">\n          <amexio-card-ce [align]=\"'start'\" [color]=\"'white'\" [background]=\"'rgba(132,99,102,0.3)'\">\n            <amexio-header-ce amexioColorPalette [gradient]=\"true\" [color-palette]=\"'random'\" [height]=\"'35px'\"\n              align=\"start\">\n              <amexio-label [size]=\"'medium-bold'\">\n                Viewport Demo 3\n              </amexio-label>\n            </amexio-header-ce>\n            <amexio-body-ce>\n              <amexio-image class=\"homepage-cursor\" [path]=\"'assets/viewport/demo3.jpg'\">\n              </amexio-image>\n              <p>\n                By the deep sea, or the jungle, and music in its roar;\n                I love not Man the less, but Nature more.\n              </p>\n\n            </amexio-body-ce>\n            <amexio-action-ce align=\"center\" [border-top]=\"true\">\n              <amexio-button [label]=\"'Demo'\" (onClick)=\"onViewportDemoThreeClick()\" [type]=\"'theme-color'\"\n                [tooltip]=\"'Demo'\"> </amexio-button>\n            </amexio-action-ce>\n\n          </amexio-card-ce>\n        </amexio-grid-item>\n      </amexio-layout-grid>\n\n\n\n    </amexio-viewport-content-body>\n  </amexio-viewport-content>\n  <!-- image  3 new added -->\n  <amexio-viewport-content [scrollable]=\"false\">\n\n    <amexio-viewport-background>\n      <amexio-image [path]=\"'assets/images/can.jpg'\"></amexio-image>\n    </amexio-viewport-background>\n\n    <amexio-viewport-content-body>\n      <!--  Creative Menu Demo -->\n      <br>\n      <amexio-layout-grid style=\"padding: 0px 10px 0px 10px;\" [layout]=\"'page3'\">\n        <amexio-grid-item [name]=\"'gridpage3title'\">\n          <amexio-label size=\"large-bold\" [font-color]=\"'white'\">\n            Creative Menu Demos\n          </amexio-label>\n        </amexio-grid-item>\n\n        <amexio-grid-item [name]=\"'gridpage3menu1'\">\n          <amexio-card-ce [align]=\"'start'\" [color]=\"'white'\" [background]=\"'rgba(64,28,6,0.6)'\">\n            <amexio-header-ce amexioColorPalette [gradient]=\"true\" [color-palette]=\"'classic'\" [height]=\"'35px'\"\n              align=\"start\">\n              <amexio-label [size]=\"'medium-bold'\">\n                Menu Demo 1\n              </amexio-label>\n            </amexio-header-ce>\n            <amexio-body-ce>\n              <amexio-image class=\"homepage-cursor\" [path]=\"'assets/viewport/menu1.jpg'\">\n              </amexio-image>\n              <p>\n                Creative Menu Demo with center alignment and animation effect.\n              </p>\n\n            </amexio-body-ce>\n            <amexio-action-ce align=\"center\" [border-top]=\"true\">\n              <amexio-button [label]=\"'Demo'\" (onClick)=\"onMenuDemoFirstClick()\" [type]=\"'theme-color'\"\n                [tooltip]=\"'Demo'\"> </amexio-button>\n            </amexio-action-ce>\n\n          </amexio-card-ce>\n        </amexio-grid-item>\n\n\n        <amexio-grid-item [name]=\"'gridpage3menu2'\">\n          <amexio-card-ce [align]=\"'start'\" [color]=\"'white'\" [background]=\"'rgba(64,28,6,0.6)'\">\n            <amexio-header-ce amexioColorPalette [gradient]=\"true\" [color-palette]=\"'random'\" [height]=\"'35px'\"\n              align=\"start\">\n              <amexio-label [size]=\"'medium-bold'\">\n                Menu Demo 2\n              </amexio-label>\n            </amexio-header-ce>\n            <amexio-body-ce>\n              <amexio-image class=\"homepage-cursor\" [path]=\"'assets/viewport/menu2.jpg'\">\n              </amexio-image>\n\n              <p>\n                Creative Menu Demo with Right side alignment and animation effect.\n              </p>\n            </amexio-body-ce>\n            <amexio-action-ce align=\"center\" [border-top]=\"true\">\n              <amexio-button [label]=\"'Demo'\" (onClick)=\"onMenuDemoSecondClick()\" [type]=\"'theme-color'\"\n                [tooltip]=\"'Demo'\"> </amexio-button>\n            </amexio-action-ce>\n\n          </amexio-card-ce>\n        </amexio-grid-item>\n\n\n        <amexio-grid-item [name]=\"'gridpage3menu3'\">\n          <amexio-card-ce [align]=\"'start'\" [color]=\"'white'\" [background]=\"'rgba(64,28,6,0.6)'\">\n            <amexio-header-ce amexioColorPalette [gradient]=\"true\" [color-palette]=\"'vibrant'\" [height]=\"'35px'\"\n              align=\"start\">\n              <amexio-label [size]=\"'medium-bold'\">\n                Menu Demo 3\n              </amexio-label>\n            </amexio-header-ce>\n            <amexio-body-ce>\n              <amexio-image class=\"homepage-cursor\" [path]=\"'assets/viewport/menu3.jpg'\">\n              </amexio-image>\n              <p>\n                Creative Menu Demo with left side alignment and animation effect.\n\n              </p>\n            </amexio-body-ce>\n            <amexio-action-ce align=\"center\" [border-top]=\"true\">\n              <amexio-button [label]=\"'Demo'\" (onClick)=\"onMenuDemoThreeClick()\" [type]=\"'theme-color'\"\n                [tooltip]=\"'Demo'\"> </amexio-button>\n            </amexio-action-ce>\n\n          </amexio-card-ce>\n        </amexio-grid-item>\n      </amexio-layout-grid>\n\n\n    </amexio-viewport-content-body>\n  </amexio-viewport-content>\n\n  <!-- image 4 -->\n  <amexio-viewport-content [scrollable]=\"false\">\n\n    <amexio-viewport-background>\n      <amexio-image [path]=\"'assets/images/techm.jpg'\"></amexio-image>\n    </amexio-viewport-background>\n\n    <amexio-viewport-content-body>\n      <br>\n      <amexio-layout-grid style=\"padding: 0px 10px 0px 10px;\" [layout]=\"'page4'\">\n        <amexio-grid-item [name]=\"'gridpage4demo1'\">\n\n\n          <amexio-card-ce [color]=\"'white'\" [background]=\"'rgba(19,72,80,0.7)'\">\n            <amexio-header-ce amexioColorPalette [gradient]=\"true\" [color-palette]=\"'classic'\" [height]=\"'35px'\"\n              [border-bottom]=\"true\" [align]=\"'start'\" [color]=\"'white'\" [background]=\"'rgba(218,105,114,0.3)'\">\n              <amexio-label [size]=\"'medium-bold'\">\n                TecMFlix\n              </amexio-label>\n            </amexio-header-ce>\n\n\n            <amexio-body-ce>\n              <amexio-image class=\"homepage-cursor\" [path]=\"'assets/images/tech.jpg'\">\n              </amexio-image>\n              <p>\n                Netflix chronicles the rise of the cocaine trade in Colombia and the gripping real-life stories of drug\n                kingpins of the late 80s in this raw.\n              </p>\n\n            </amexio-body-ce>\n            <amexio-action-ce align=\"center\" [border-top]=\"true\">\n              <amexio-button [label]=\"'Demo'\" (onClick)=\"onDemoTechMClick()\" [type]=\"'theme-color'\" [tooltip]=\"'BUY'\">\n              </amexio-button>\n            </amexio-action-ce>\n          </amexio-card-ce>\n        </amexio-grid-item>\n\n        <amexio-grid-item [name]=\"'gridpage4demo2'\">\n          <amexio-card-ce [color]=\"'white'\" [background]=\"'rgba(19,72,80,0.7)'\">\n            <amexio-header-ce amexioColorPalette [gradient]=\"true\" [color-palette]=\"'random'\" [height]=\"'35px'\"\n              [border-bottom]=\"true\" [align]=\"'start'\" [color]=\"'white'\" [background]=\"'rgba(218,105,114,0.3)'\">\n              <amexio-label [size]=\"'medium-bold'\">\n                Virtual Scroller Demo\n              </amexio-label>\n            </amexio-header-ce>\n            <amexio-body-ce>\n              <amexio-image class=\"homepage-cursor\" [path]=\"'assets/images/virtualDemo.jpg'\">\n              </amexio-image>\n              <p>\n                Amexio virtual scroller displays a small subset of records just enough to fill the viewport and uses the\n                same DOM elements as the user scrolls.\n              </p>\n\n            </amexio-body-ce>\n            <amexio-action-ce align=\"center\" [border-top]=\"true\">\n              <amexio-button [label]=\"'Demo'\" (onClick)=\"onVirtualScrollDemoClick()\" [type]=\"'theme-color'\"\n                [tooltip]=\"'BUY'\">\n              </amexio-button>\n            </amexio-action-ce>\n          </amexio-card-ce>\n        </amexio-grid-item>\n      </amexio-layout-grid>\n\n\n\n    </amexio-viewport-content-body>\n\n  </amexio-viewport-content>\n  <!-- image 5 -->\n\n  <amexio-viewport-content [scrollable]=\"false\">\n\n    <amexio-viewport-background>\n      <amexio-image [path]=\"'assets/images/se9.jpg'\"></amexio-image>\n    </amexio-viewport-background>\n\n    <amexio-viewport-content-body>\n      <br>\n      <br>\n      <!-- gridpage5app1 -->\n\n      <amexio-layout-grid style=\"padding: 0px 10px 0px 10px;\" [layout]=\"'page5'\">\n        <amexio-grid-item [name]=\"'gridpage5title'\">\n          <amexio-label size=\"large-bold\" [font-color]=\"'black'\">\n            Standard Edition Demos\n          </amexio-label>\n        </amexio-grid-item>\n        <amexio-grid-item [name]=\"'gridpage5app1'\">\n          <amexio-card-ce [align]=\"'start'\" [color]=\"'white'\" [background]=\"'rgba(10,140,140,0.9)'\">\n            <amexio-header-ce amexioColorPalette [gradient]=\"true\" [color-palette]=\"'random'\" [height]=\"'35px'\"\n              align=\"start\">\n              <amexio-label [size]=\"'medium-bold'\">\n                U.S. Election App\n              </amexio-label>\n            </amexio-header-ce>\n            <amexio-body-ce>\n              <amexio-image class=\"homepage-cursor\" [path]=\"'assets/viewport/election.jpg'\">\n              </amexio-image>\n\n              <p>\n                U.S election Demo Application using multiple component of Amexio and Amexio tags.\n              </p>\n            </amexio-body-ce>\n            <amexio-action-ce align=\"center\" [border-top]=\"true\">\n              <amexio-button [label]=\"'Demo'\" (onClick)=\"onElectionDemoClick()\" [type]=\"'theme-color'\"\n                [tooltip]=\"'Demo'\"> </amexio-button>\n            </amexio-action-ce>\n          </amexio-card-ce>\n        </amexio-grid-item>\n        <amexio-grid-item [name]=\"'gridpage5app2'\">\n          <amexio-card-ce [align]=\"'center'\" [color]=\"'white'\" [background]=\"'rgba(10,140,140,0.9)'\">\n            <amexio-header-ce amexioColorPalette [gradient]=\"true\" [color-palette]=\"'random'\" [color]=\"'white'\"\n              [color]=\"'black'\" [height]=\"'35px'\" align=\"start\">\n              <amexio-label [size]=\"'medium-bold'\">\n                Shopping App\n              </amexio-label>\n            </amexio-header-ce>\n            <amexio-body-ce>\n              <amexio-image class=\"homepage-cursor\" [path]=\"'assets/images/shopping.jpg'\">\n              </amexio-image>\n              <p>\n                Shopping Demo Application using multiple component of Amexio and Amexio tags.\n\n              </p>\n            </amexio-body-ce>\n            <amexio-action-ce align=\"center\" [border-top]=\"true\">\n              <amexio-button [label]=\"'Demo'\" (onClick)=\"onShoppingDemoClick()\" [type]=\"'theme-color'\"\n                [tooltip]=\"'Demo'\"> </amexio-button>\n            </amexio-action-ce>\n\n          </amexio-card-ce>\n        </amexio-grid-item>\n\n      </amexio-layout-grid>\n\n\n    </amexio-viewport-content-body>\n  </amexio-viewport-content>\n\n  <!--  image 6 -->\n  <amexio-viewport-content [scrollable]=\"false\">\n\n    <amexio-viewport-background>\n      <amexio-image [path]=\"'assets/images/se3.jpg'\"></amexio-image>\n    </amexio-viewport-background>\n\n    <amexio-viewport-content-body>\n      <br>\n      <br>\n      <!-- gridpage5app1 -->\n\n      <amexio-layout-grid style=\"padding: 0px 10px 0px 10px;\" [layout]=\"'page6'\">\n\n        <amexio-grid-item [name]=\"'gridpage6app1'\">\n          <amexio-card-ce [align]=\"'center'\" [color]=\"'white'\" [background]=\"'rgba(40,49,58,0.9)'\">\n            <amexio-header-ce [height]=\"'35px'\" amexioColorPalette [gradient]=\"true\"\n              [color-palette]=\"'amexio-theme-color4  '\" align=\"start\">\n              <amexio-label [size]=\"'medium-bold'\">\n                Insurance App\n              </amexio-label>\n            </amexio-header-ce>\n            <amexio-body-ce>\n\n              <amexio-image class=\"homepage-cursor\" [path]=\"'assets/images/policy.jpg'\">\n              </amexio-image>\n              <p>\n                Digital policy Demo Application using multiple component of Amexio and Amexio tags.\n              </p>\n\n            </amexio-body-ce>\n            <amexio-action-ce align=\"center\" [border-top]=\"true\">\n              <amexio-button [label]=\"'Demo'\" (onClick)=\"onPolicyDemoClick()\" [type]=\"'theme-color'\" [tooltip]=\"'Demo'\">\n              </amexio-button>\n            </amexio-action-ce>\n\n          </amexio-card-ce>\n        </amexio-grid-item>\n        <amexio-grid-item [name]=\"'gridpage6app2'\">\n          <amexio-card-ce [align]=\"'center'\" [color]=\"'white'\" [background]=\"'rgba(40,49,58,0.9)'\">\n            <amexio-header-ce [height]=\"'35px'\" amexioColorPalette [gradient]=\"true\" [color-palette]=\"'random'\"\n              align=\"start\">\n              <amexio-label [size]=\"'medium-bold'\">\n                Theme App\n              </amexio-label>\n            </amexio-header-ce>\n            <amexio-body-ce>\n\n              <amexio-image class=\"homepage-cursor\" [path]=\"'assets/viewport/theme.jpg'\">\n              </amexio-image>\n              <p>\n                Theme App Demo Application using multiple component of Amexio and Amexio tags.\n              </p>\n\n            </amexio-body-ce>\n            <amexio-action-ce align=\"center\" [border-top]=\"true\">\n              <amexio-button [label]=\"'Demo'\" (onClick)=\"onAmexioDemoClick()\" [type]=\"'theme-color'\" [tooltip]=\"'Demo'\">\n              </amexio-button>\n            </amexio-action-ce>\n\n          </amexio-card-ce>\n        </amexio-grid-item>\n      </amexio-layout-grid>\n\n\n    </amexio-viewport-content-body>\n  </amexio-viewport-content>\n\n</amexio-viewport>\n"

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
        this.DEMO_FIRST_URL = 'https://eedemo.amexio.org/#/home/dashboard';
        this.DEMO_SEC_URL = 'https://eedemo.amexio.org/#/home/dashboardtwo';
        this.DEMO_TECH_M_URL = 'https://cedemo.amexio.org/tecmflix/';
        this.DEMO_THREE_URL = ' https://cedemo.amexio.org/#/home/dashboard';
        this.DEMO_FOUR_URL = ' https://cedemo.amexio.org/amexio-ce-demo-app/index.html#/viewport/viewport-one';
        this.DEMO_FIVE_URL = ' https://cedemo.amexio.org/amexio-ce-demo-app/index.html#/viewport/viewport-two';
        this.DEMO_SIX_URL = ' https://cedemo.amexio.org/amexio-ce-demo-app/index.html#/viewport/viewport-three';
        //
        this.DEMO_SEVEN_URL = ' https://cedemo.amexio.org/amexio-ce-demo-app/index.html#/menu/menu-one';
        this.DEMO_EIGHT_URL = 'https://cedemo.amexio.org/amexio-ce-demo-app/index.html#/menu/menu-two';
        this.DEMO_NINE_URL = ' https://cedemo.amexio.org/amexio-ce-demo-app/index.html#/menu/menu-three';
        this.DEMO_SHOPPING_URL = 'https://sedemo.amexio.org/se/shoppingportal/#/home';
        this.DEMO_POLICY_URL = 'https://sedemo.amexio.org/se/insuranceportal/#/home';
        this.DEMO_ELECTION_URL = 'https://sedemo.amexio.org/se/us-election/';
        this.DEMO_THEME_URL = 'https://sedemo.amexio.org/se/v5.12/index.html#/home';
        this.DEMO_VIRTUAL_URL = 'https://cedemo.amexio.org/Virtual-Scroller/#/sc';
        this.createLayouts();
        // Create the Layouts
        this._gridlayoutService.createLayout(this.gridDesktop);
        this._gridlayoutService.createLayout(this.gridTablet);
        this._gridlayoutService.createLayout(this.gridMobile);
        this._gridlayoutService.createLayout(this.gridDesktopPage2);
        this._gridlayoutService.createLayout(this.gridTabletPage2);
        this._gridlayoutService.createLayout(this.gridMobilePage2);
        this._gridlayoutService.createLayout(this.gridDesktopPage3);
        this._gridlayoutService.createLayout(this.gridTabletPage3);
        this._gridlayoutService.createLayout(this.gridMobilePage3);
        this._gridlayoutService.createLayout(this.gridDesktopPage4);
        this._gridlayoutService.createLayout(this.gridTabletPage4);
        this._gridlayoutService.createLayout(this.gridMobilePage4);
        this._gridlayoutService.createLayout(this.gridDesktopPage5);
        this._gridlayoutService.createLayout(this.gridTabletPage5);
        this._gridlayoutService.createLayout(this.gridMobilePage5);
        this._gridlayoutService.createLayout(this.gridDesktopPage6);
        this._gridlayoutService.createLayout(this.gridTabletPage6);
        this._gridlayoutService.createLayout(this.gridMobilePage6);
    }
    LandingPageComponent.prototype.ngOnInit = function () {
        this.tempData = [
            {
                label: 'API',
                "link": "https://api.amexio.org/"
            },
            {
                label: 'GITHUB',
                "link": "https://github.com/meta-magic/amexio.github.io"
            },
            {
                label: 'NPM STATS',
                "link": "https://www.npmstats.com/"
            },
            {
                label: 'SUPPORT',
                "link": "https://amexio.tech/support"
            },
            {
                label: 'ROAD MAP',
                "link": "https://amexio.tech/roadmap"
            }
        ];
        this.amexiotechmenus = [
            {
                "text": "Products",
                "icon": "fa fa-snowflake-o fa-fw",
                "submenus": [
                    {
                        "text": "Amexio API",
                        "link": "https://amexio.tech/amexio-api"
                    },
                    {
                        "text": "Amexio D3 Charts",
                        "link": " https://amexio.tech/amexio-d3-charts"
                    },
                    {
                        "text": "Amexio Canvas",
                        "link": "https://amexio.tech/amexio-canvas"
                    }, {
                        "text": "Amexio Colors",
                        "link": "https://amexio.tech/amexio-colors"
                    }, {
                        "text": "Amexio Plugins",
                        "link": "https://amexio.tech/amexio-plugins-1"
                    },
                    {
                        "text": "Amexio Demo Apps",
                        "link": "http://demo.amexio.tech/"
                    }
                ]
            },
            {
                "text": "Start Using",
                "icon": "fa fa-television fa-fw",
                "submenus": [
                    {
                        "text": "Roadmap",
                        "link": "https://amexio.tech/roadmap"
                    },
                    {
                        "text": "Support",
                        "link": "https://amexio.tech/support"
                    },
                    {
                        "text": "Pricing",
                        "link": "https://amexio.tech/pricing"
                    },
                    {
                        "text": "Quality-Assurance",
                        "link": "https://amexio.tech/quality-assurance"
                    },
                    {
                        "text": "Downloads",
                        "link": "https://amexio.tech/download"
                    },
                    {
                        "text": "License and Other Docs",
                        "link": "https://amexio.tech/license-and-other-docs-1"
                    },
                    {
                        "text": "Canvas Login (Beta)",
                        "link": "https://canvas.amexio.org/"
                    },
                    {
                        "text": "Subscribe ",
                        "link": "https://canvas.amexio.org/#/user/signup"
                    }
                ]
            },
            {
                "text": "Training",
                "icon": "fa fa-user fa-fw",
                "submenus": [
                    {
                        "text": "Component Example",
                        "link": "http://demo.amexio.tech/"
                    }, {
                        "text": "Amexio Training",
                        "link": "http://metaarivu.com/amexio-training"
                    }
                ]
            },
            {
                "text": "Case Studies",
                "icon": "fa fa-clone fa-fw",
                "submenus": [
                    { "text": "Shopping Portal", "link": "https://sedemo.amexio.org/se/shoppingportal/#/home" },
                    { "text": "US Election Results", "link": "https://sedemo.amexio.org/se/us-election/ " },
                    { "text": "Insurance Portal", "link": "https://sedemo.amexio.org/se/insuranceportal/#/home" },
                    { "text": "Movie Portal", "link": "https://cedemo.amexio.org/tecmflix/#/app" },
                    { "text": "NpmStats", "link": "https://www.npmstats.com/" },
                    { "text": "Creative Demo", "link": "https://eedemo.amexio.org/#/login" }
                ]
            },
            {
                "text": "Engage",
                "submenus": [
                    {
                        "text": "Events",
                        "link": "https://metamagicglobal.com/events"
                    }, {
                        "text": "Forums",
                        "link": "http://forum.metamagicglobal.com/"
                    }, {
                        "text": "Blogs",
                        "link": "http://blog.metamagicglobal.com/"
                    }, {
                        "text": "Node Package Manager",
                        "link": "https://www.npmjs.com/package/amexio-ng-extensions"
                    }, {
                        "text": "GitHub - Source Code",
                        "link": "https://github.com/meta-magic/amexio.github.io"
                    }
                ]
            },
            {
                "text": "About Us",
                "submenus": [
                    {
                        "text": "Contact",
                        "link": "https://metamagicglobal.com/contact"
                    }, {
                        "text": "Company",
                        "link": "http://www.metamagicglobal.com/company"
                    }, {
                        "text": "MetaMagic",
                        "link": "https://www.metamagicglobal.com/"
                    }
                ]
            }
        ];
    };
    LandingPageComponent.prototype.externalLink = function (event) {
        if (event.data.node.link)
            //this.document.location.href=event.data.node.link;
            window.open(event.data.node.link, '_blank');
    };
    LandingPageComponent.prototype.createLayouts = function () {
        // PAGE 1
        this.gridDesktop = new amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__["GridConfig"]('page1', amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__["GridConstants"].Desktop)
            .addlayout(['gridDemo1', 'gridDemo1', 'gridLabel', 'gridLabel', 'gridLabel', 'gridLabel'])
            .addlayout(['gridDemo1', 'gridDemo1', 'gridDemo2', 'gridDemo2', 'gridDemo3', 'gridDemo3']);
        this.gridTablet = new amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__["GridConfig"]('page1', amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__["GridConstants"].Tablet)
            .addlayout(['gridDemo1', 'gridDemo1', 'gridLabel', 'gridLabel', 'gridLabel', 'gridLabel'])
            .addlayout(['gridDemo1', 'gridDemo1', 'gridDemo2', 'gridDemo2', 'gridDemo2', 'gridDemo2'])
            .addlayout(['gridDemo1', 'gridDemo1', 'gridDemo3', 'gridDemo3', 'gridDemo3', 'gridDemo3']);
        this.gridMobile = new amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__["GridConfig"]('page1', amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__["GridConstants"].Mobile)
            .addlayout(['gridDemo1', 'gridDemo1', 'gridDemo1', 'gridDemo1', 'gridDemo1', 'gridDemo1'])
            .addlayout(['gridLabel', 'gridLabel', 'gridLabel', 'gridLabel', 'gridLabel', 'gridLabel'])
            .addlayout(['gridDemo2', 'gridDemo2', 'gridDemo2', 'gridDemo2', 'gridDemo2', 'gridDemo2'])
            .addlayout(['gridDemo3', 'gridDemo3', 'gridDemo3', 'gridDemo3', 'gridDemo3', 'gridDemo3']);
        // PAGE 2
        this.gridDesktopPage2 = new amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__["GridConfig"]('page2', amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__["GridConstants"].Desktop)
            .addlayout(['gridpage2title', 'gridpage2title', 'gridpage2title', 'gridpage2title', 'gridpage2title', 'gridpage2title'])
            .addlayout(['gridpage2view1', 'gridpage2view1', 'gridpage2view2', 'gridpage2view2', 'gridpage2view3', 'gridpage2view3']);
        this.gridTabletPage2 = new amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__["GridConfig"]('page2', amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__["GridConstants"].Tablet)
            .addlayout(['gridpage2title', 'gridpage2title', 'gridpage2title', 'gridpage2title', 'gridpage2title', 'gridpage2title'])
            .addlayout(['gridpage2view1', 'gridpage2view1', 'gridpage2view1', 'gridpage2view2', 'gridpage2view2', 'gridpage2view2'])
            .addlayout(['gridpage2view3', 'gridpage2view3', 'gridpage2view3', 'gridpage2view3', 'gridpage2view3', 'gridpage2view3']);
        this.gridMobilePage2 = new amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__["GridConfig"]('page2', amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__["GridConstants"].Mobile)
            .addlayout(['gridpage2title', 'gridpage2title', 'gridpage2title', 'gridpage2title', 'gridpage2title', 'gridpage2title'])
            .addlayout(['gridpage2view1', 'gridpage2view1', 'gridpage2view1', 'gridpage2view1', 'gridpage2view1', 'gridpage2view1'])
            .addlayout(['gridpage2view2', 'gridpage2view2', 'gridpage2view2', 'gridpage2view2', 'gridpage2view2', 'gridpage2view2'])
            .addlayout(['gridpage2view3', 'gridpage2view3', 'gridpage2view3', 'gridpage2view3', 'gridpage2view3', 'gridpage2view3']);
        // PAGE 3
        this.gridDesktopPage3 = new amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__["GridConfig"]('page3', amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__["GridConstants"].Desktop)
            .addlayout(['gridpage3title', 'gridpage3title', 'gridpage3title', 'gridpage3title', 'gridpage3title', 'gridpage3title'])
            .addlayout(['gridpage3menu1', 'gridpage3menu1', 'gridpage3menu2', 'gridpage3menu2', 'gridpage3menu3', 'gridpage3menu3']);
        this.gridTabletPage3 = new amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__["GridConfig"]('page3', amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__["GridConstants"].Tablet)
            .addlayout(['gridpage3title', 'gridpage3title', 'gridpage3title', 'gridpage3title', 'gridpage3title', 'gridpage3title'])
            .addlayout(['gridpage3menu1', 'gridpage3menu1', 'gridpage3menu1', 'gridpage3menu2', 'gridpage3menu2', 'gridpage3menu2'])
            .addlayout(['gridpage3menu3', 'gridpage3menu3', 'gridpage3menu3', 'gridpage3menu3', 'gridpage3menu3', 'gridpage3menu3']);
        this.gridMobilePage3 = new amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__["GridConfig"]('page3', amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__["GridConstants"].Mobile)
            .addlayout(['gridpage3title', 'gridpage3title', 'gridpage3title', 'gridpage3title', 'gridpage3title', 'gridpage3title'])
            .addlayout(['gridpage3menu1', 'gridpage3menu1', 'gridpage3menu1', 'gridpage3menu1', 'gridpage3menu1', 'gridpage3menu1'])
            .addlayout(['gridpage3menu2', 'gridpage3menu2', 'gridpage3menu2', 'gridpage3menu2', 'gridpage3menu2', 'gridpage3menu2'])
            .addlayout(['gridpage3menu3', 'gridpage3menu3', 'gridpage3menu3', 'gridpage3menu3', 'gridpage3menu3', 'gridpage3menu3']);
        // PAGE 4
        this.gridDesktopPage4 = new amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__["GridConfig"]('page4', amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__["GridConstants"].Desktop)
            .addlayout(['gridpage4demo1', 'gridpage4demo1', 'gridpage4demo1', 'gridpage4demo2', 'gridpage4demo2', 'gridpage4demo2']);
        this.gridTabletPage4 = new amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__["GridConfig"]('page4', amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__["GridConstants"].Tablet)
            .addlayout(['gridpage4demo1', 'gridpage4demo1', 'gridpage4demo1', 'gridpage4demo2', 'gridpage4demo2', 'gridpage4demo2']);
        this.gridMobilePage4 = new amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__["GridConfig"]('page4', amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__["GridConstants"].Mobile)
            .addlayout(['gridpage4demo1', 'gridpage4demo1', 'gridpage4demo1', 'gridpage4demo1', 'gridpage4demo1', 'gridpage4demo1'])
            .addlayout(['gridpage4demo2', 'gridpage4demo2', 'gridpage4demo2', 'gridpage4demo2', 'gridpage4demo2', 'gridpage4demo2']);
        // PAGE 5
        this.gridDesktopPage5 = new amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__["GridConfig"]('page5', amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__["GridConstants"].Desktop)
            .addlayout(['gridpage5title', 'gridpage5title', 'gridpage5title', 'gridpage5title'])
            .addlayout(['gridpage5app1', 'gridpage5app1', 'gridpage5app2', 'gridpage5app2']);
        this.gridTabletPage5 = new amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__["GridConfig"]('page5', amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__["GridConstants"].Tablet)
            .addlayout(['gridpage5title', 'gridpage5title', 'gridpage5title', 'gridpage5title'])
            .addlayout(['gridpage5app1', 'gridpage5app1', 'gridpage5app2', 'gridpage5app2']);
        this.gridMobilePage5 = new amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__["GridConfig"]('page5', amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__["GridConstants"].Mobile)
            .addlayout(['gridpage5title', 'gridpage5title', 'gridpage5title', 'gridpage5title'])
            .addlayout(['gridpage5app1', 'gridpage5app1', 'gridpage5app1', 'gridpage5app1'])
            .addlayout(['gridpage5app2', 'gridpage5app2', 'gridpage5app2', 'gridpage5app2']);
        // PAGE 6
        this.gridDesktopPage6 = new amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__["GridConfig"]('page6', amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__["GridConstants"].Desktop)
            .addlayout(['gridpage6app1', 'gridpage6app1', 'gridpage6app2', 'gridpage6app2']);
        this.gridTabletPage6 = new amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__["GridConfig"]('page6', amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__["GridConstants"].Tablet)
            .addlayout(['gridpage6app1', 'gridpage6app1', 'gridpage6app2', 'gridpage6app2']);
        this.gridMobilePage6 = new amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__["GridConfig"]('page6', amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__["GridConstants"].Mobile)
            .addlayout(['gridpage6app1', 'gridpage6app1', 'gridpage6app1', 'gridpage6app1'])
            .addlayout(['gridpage6app2', 'gridpage6app2', 'gridpage6app2', 'gridpage6app2']);
    };
    LandingPageComponent.prototype.onLoginClick = function (data) {
        this.facebookLoginData = data;
    };
    LandingPageComponent.prototype.onMenuClick = function (data) {
        if (data.link) {
            window.open(data.link, '_blank');
        }
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
    LandingPageComponent.prototype.onAmexioDemoClick = function () {
        window.open(this.DEMO_THEME_URL);
    };
    LandingPageComponent.prototype.onVirtualScrollDemoClick = function () {
        window.open(this.DEMO_VIRTUAL_URL);
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

module.exports = __webpack_require__(/*! /home/travis/build/meta-magic/amexio-demo-apps-landingpage/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map