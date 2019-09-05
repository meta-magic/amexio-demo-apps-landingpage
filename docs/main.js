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

/***/ "./src/app/accessibility/accessibility.demo.html":
/*!*******************************************************!*\
  !*** ./src/app/accessibility/accessibility.demo.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div style=\" padding: 0% 1% 0% 1%;\">\n\n<amexio-box amexioColorPalette [color-palette]=\"'classic'\" [gradient]=\"true\" class=\"api-header-style \" [padding]=\"true\"\n    align=\"left\">\n    <amexio-label size=\"large\">\n        ARIA, WCAG, Section 508\n    </amexio-label>\n    <br>\n    <br>\n    The power of the Web is in its universality.\n    Access by everyone regardless of disability is an essential aspect. Tim Berners-Lee.\n    <br />\n</amexio-box>\n<amexio-row>\n    <amexio-column size=\"12\">\n        <amexio-card style=\"display: block; padding-top:30px;\">\n            <amexio-body>\n                <p>\n                    When you build a Web Application or a Web Site it's critical that it is designed to work for all\n                    people irrespective of the Hardware, Software, Language and Location which is used to build the\n                    App. It's mandatory to meet the above goal and when your application meets the above goal then it\n                    is accessible to people with a diverse range of hearing, movement, sight, and cognitive ability.\n                    <a style=\"color: blue;\" href=\"https://www.w3.org/standards/webdesign/accessibility\"><b>Read more...</b></a>\n                </p>\n                <p>\n                    Accessibility of web content requires semantic information about widgets, structures, and\n                    behaviors, in order to allow assistive technologies to convey appropriate information to persons\n                    with disabilities.\n                    This specification provides an ontology of roles, states, and properties that define accessible\n                    user interface elements and can be used to improve the accessibility and interoperability of web\n                    content and applications.\n                    These semantics are designed to allow an author to properly convey user interface behaviors and\n                    structural information to assistive technologies in document-level markup.\n                </p>\n                <p>\n                    The Web Accessibility Initiative's Accessible Rich Internet Applications specification (WAI-ARIA,\n                    or just ARIA) is good for bridging areas with accessibility issues that can't be managed with\n                    native HTML.\n                    It works by allowing you to specify attributes that modify the way an element is translated into\n                    the accessibility tree.\n                </p>\n                <p>\n                    After a brief introduction section, the guide begins with ARIA implementation patterns for\n                    common widgets that both enumerate expected behaviors.\n                    <!-- >aria-label-ARIA can add extra label and description text that is only exposed to assistive technology APIs.\n                    >aria-controls-ARIA can express semantic relationships between elements that extend the standard parent/child connection, such as a custom scrollbar that controls a specific region. -->\n                </p>\n                <p>\n                    ><b>Roles</b> are element types and will not change with time or user actions. And to provide\n                    normal\n                    processing of the specified element type.\n                </p>\n                <p>\n                    ><b>States and properties</b> are used to declare important attributes of an element that affect\n                    and\n                    describe interaction.\n                    They enable the user agent and operating system to properly handle the element even when the\n                    attributes are dynamically changed by client-side scripts.\n                </p>\n                <p>\n                    ><b>Managing Focus</b> to be managed by the container using the\n                    aria-activedescendant attribute on the managing container element, or by the container managing the\n                    tabindex of its child elements and setting focus on the appropriate child.When active descendant\n                    has\n                    focus, the user may navigate through the container by pressing additional\n                    keys, such as the arrow keys, to change the currently active descendant. Any additional press of\n                    the main navigation key (generally the TAB key) will move out of the container to the next widget.\n                </p>\n                <p><b>WHAT DOES ARIA DO?</b>\n                    ARIA can modify existing element semantics or add semantics to elements where no native semantics\n                    exist. It can also express semantic patterns that don't exist at all in HTML, like a menu or a tab\n                    panel. Often, ARIA lets us create widget-type elements that wouldn't be possible with plain HTML.\n                </p>\n                <ul>\n                    <li>\n                        For example, ARIA can add extra label and description text that is only exposed to\n                        assistive technology APIs.\n                    </li>\n                    <li>\n                        ARIA can express semantic relationships between elements that extend the standard parent/child\n                        connection, such as a custom scrollbar that controls a specific region.\n                    </li>\n                </ul>\n                <amexio-box border-color=\"blue\" border=\"borderPosition\" [padding]=\"true\" [closable]=\"false\" align=\"left\">\n                    <b>Example of Aria CheckBox</b><br>\n                    <span>\n                    </span><span>\n                        </span> <span>li><span>\n                            </span>&nbsp;\n                    </span>\n                    <span>tabindex = \"0\" class=\"checkbox\" role=\"checkbox\" checked aria-checked=\"true\"</span>\n                    <span>></span><br>\n                    <span>/li></span>\n\n                        <!--  checked aria-checked=\"true\"> -->\n                        <!-- Receive promotional offers -->\n                        <!-- </li> -->\n\n                </amexio-box><br>\n                <amexio-box border-color=\"blue\" border=\"borderPosition\" [padding]=\"true\" [closable]=\"false\" align=\"left\">\n                    <b>Example of Aria Button</b><br>\n                    <span>\n                    </span> <span>\n                        </span> <span>div&nbsp;\n                    </span>\n                    <span>tabindex = \"0\" id=\"savechanges\" role=\"button\" pressed aria-pressed=\"false\"</span>\n                    <span>></span><br>\n                    <span>\n                    </span>\n                    <span>/div>\n                        </span>\n\n                </amexio-box>\n\n                <p>\n                    Figure illustrates the relationship between user agents (e.g., browsers),\n                    accessibility APIs, and assistive technologies. It describes the \"contract\" provided by the user\n                    agent to assistive technologies,which includes typical accessibility information found in the\n                    accessibility API for many of our\n                    accessible platforms for GUIs (role, state, selection, event notification,\n                    relationship information, and descriptions). The DOM, usually HTML, acts as the data model and view\n                    in a typical model-view-controller relationship, and JavaScript acts as the controller by\n                    manipulating the style and content of the displayed data.\n                    The user agent conveys relevant information to the operating system's accessibility API,\n                    which can be used by any assistive technologies, such as screen readers.\n                </p>\n                <amexio-image width=\"100%\" [path]=\"'assets/images/accessibilitydemo.jpeg'\" [tooltip]=\"'Image'\"></amexio-image>\n            </amexio-body>\n        </amexio-card>\n        <amexio-card style=\"display: block; padding-top:20px\">\n            <amexio-body>\n                <amexio-layout-grid [layout]=\"'LayoutSample'\">\n                    <amexio-grid-item [name]=\"'gridtable1'\">\n                        <amexio-card [header]=\"true\" [header-align]=\"'left'\" [footer]=\"false\" [footer-align]=\"'left'\"\n                            [show]=\"'showVariable'\" height=\"height\">\n                            <amexio-header>\n                                Panel\n                            </amexio-header>\n                            <amexio-body>\n                                <amexio-datagrid [data-reader]=\"'data'\" [height]=\"'200'\" [http-url]=\"'assets/menuaccessibilityjson/panelaccessibility.json'\"\n                                    [http-method]=\"'get'\" (rowSelect)=\"onRowSelect($event)\">\n                                    <amexio-data-table-column [data-index]=\"'Component'\" [data-type]=\"'string'\"\n                                        [hidden]=\"false\" [text]=\"'Component'\">\n                                    </amexio-data-table-column>\n                                    <amexio-data-table-column [data-index]=\"'Keyboard'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Keyboard'\">\n                                    </amexio-data-table-column>\n                                    <amexio-data-table-column [data-index]=\"'Screen-Reader'\" [data-type]=\"'string'\"\n                                        [hidden]=\"false\" [text]=\"'Screen-Reader'\">\n                                    </amexio-data-table-column>\n                                </amexio-datagrid>\n                            </amexio-body>\n                        </amexio-card>\n                    </amexio-grid-item>\n                    <amexio-grid-item [name]=\"'gridtable2'\">\n                        <amexio-card [header]=\"true\" [header-align]=\"'left'\" [footer]=\"false\" [footer-align]=\"'left'\"\n                            [show]=\"'showVariable'\" height=\"height\">\n                            <amexio-header>\n                                App-Navigation\n                            </amexio-header>\n                            <amexio-body>\n                                <amexio-datagrid [data-reader]=\"'data'\" [height]=\"'200'\" [http-url]=\"'assets/menuaccessibilityjson/appnavigationaccesibility.json'\"\n                                    [http-method]=\"'get'\" (rowSelect)=\"onRowSelect($event)\">\n                                    <amexio-data-table-column [data-index]=\"'Component'\" [data-type]=\"'string'\"\n                                        [hidden]=\"false\" [text]=\"'Component'\">\n                                    </amexio-data-table-column>\n                                    <amexio-data-table-column [data-index]=\"'Keyboard'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Keyboard'\">\n                                    </amexio-data-table-column>\n                                    <amexio-data-table-column [data-index]=\"'Screen-Reader'\" [data-type]=\"'string'\"\n                                        [hidden]=\"false\" [text]=\"'Screen-Reader'\">\n                                    </amexio-data-table-column>\n                                </amexio-datagrid>\n                            </amexio-body>\n                        </amexio-card>\n                    </amexio-grid-item>\n                    <amexio-grid-item [name]=\"'gridtable3'\">\n                        <amexio-card [header]=\"true\" [header-align]=\"'left'\" [footer]=\"false\" [footer-align]=\"'left'\"\n                            [show]=\"'showVariable'\" height=\"height\">\n                            <amexio-header>\n                                Layout\n                            </amexio-header>\n                            <amexio-body>\n                                <amexio-datagrid [data-reader]=\"'data'\" [height]=\"'200'\" [http-url]=\"'assets/menuaccessibilityjson/layoutaccessibility.json'\"\n                                    [http-method]=\"'get'\" (rowSelect)=\"onRowSelect($event)\">\n                                    <amexio-data-table-column [data-index]=\"'Component'\" [data-type]=\"'string'\"\n                                        [hidden]=\"false\" [text]=\"'Component'\">\n                                    </amexio-data-table-column>\n                                    <amexio-data-table-column [data-index]=\"'Keyboard'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Keyboard'\">\n                                    </amexio-data-table-column>\n                                    <amexio-data-table-column [data-index]=\"'Screen-Reader'\" [data-type]=\"'string'\"\n                                        [hidden]=\"false\" [text]=\"'Screen-Reader'\">\n                                    </amexio-data-table-column>\n                                </amexio-datagrid>\n\n                            </amexio-body>\n                        </amexio-card>\n                    </amexio-grid-item>\n                    <amexio-grid-item [name]=\"'gridtable4'\">\n                        <amexio-card [header]=\"true\" [header-align]=\"'left'\" [footer]=\"false\" [footer-align]=\"'left'\"\n                            [show]=\"'showVariable'\" height=\"height\">\n                            <amexio-header>\n                                Form-Actions\n                            </amexio-header>\n                            <amexio-body>\n                                <amexio-datagrid [data-reader]=\"'data'\" [height]=\"'200'\" [http-url]=\"'assets/menuaccessibilityjson/formactionaccessibility.json'\"\n                                    [http-method]=\"'get'\" (rowSelect)=\"onRowSelect($event)\">\n                                    <amexio-data-table-column [data-index]=\"'Component'\" [data-type]=\"'string'\"\n                                        [hidden]=\"false\" [text]=\"'Component'\">\n                                    </amexio-data-table-column>\n                                    <amexio-data-table-column [data-index]=\"'Keyboard'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Keyboard'\">\n                                    </amexio-data-table-column>\n                                    <amexio-data-table-column [data-index]=\"'Screen-Reader'\" [data-type]=\"'string'\"\n                                        [hidden]=\"false\" [text]=\"'Screen-Reader'\">\n                                    </amexio-data-table-column>\n                                </amexio-datagrid>\n                            </amexio-body>\n                        </amexio-card>\n                    </amexio-grid-item>\n                    <amexio-grid-item [name]=\"'gridtable5'\">\n                        <amexio-card [header]=\"true\" [header-align]=\"'left'\" [footer]=\"false\" [footer-align]=\"'left'\"\n                            [show]=\"'showVariable'\" height=\"height\">\n                            <amexio-header>\n                                Enterprise\n                            </amexio-header>\n                            <amexio-body>\n                                <amexio-datagrid [data-reader]=\"'data'\" [height]=\"'200'\" [http-url]=\"'assets/menuaccessibilityjson/enterpriseaccessibility.json'\"\n                                    [http-method]=\"'get'\" (rowSelect)=\"onRowSelect($event)\">\n                                    <amexio-data-table-column [data-index]=\"'Component'\" [data-type]=\"'string'\"\n                                        [hidden]=\"false\" [text]=\"'Component'\">\n                                    </amexio-data-table-column>\n                                    <amexio-data-table-column [data-index]=\"'Keyboard'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Keyboard'\">\n                                    </amexio-data-table-column>\n                                    <amexio-data-table-column [data-index]=\"'Screen-Reader'\" [data-type]=\"'string'\"\n                                        [hidden]=\"false\" [text]=\"'Screen-Reader'\">\n                                    </amexio-data-table-column>\n                                </amexio-datagrid>\n                            </amexio-body>\n                        </amexio-card>\n                    </amexio-grid-item>\n                    <amexio-grid-item [name]=\"'gridtable6'\">\n                        <amexio-card [header]=\"true\" [header-align]=\"'left'\" [footer]=\"false\" [footer-align]=\"'left'\"\n                            [show]=\"'showVariable'\" height=\"height\">\n                            <amexio-header>\n                                Data\n                            </amexio-header>\n                            <amexio-body>\n                                <amexio-datagrid [data-reader]=\"'data'\" [height]=\"'200'\" [http-url]=\"'assets/menuaccessibilityjson/dataaccessibility.json'\"\n                                    [http-method]=\"'get'\" (rowSelect)=\"onRowSelect($event)\">\n                                    <amexio-data-table-column [data-index]=\"'Component'\" [data-type]=\"'string'\"\n                                        [hidden]=\"false\" [text]=\"'Component'\">\n                                    </amexio-data-table-column>\n                                    <amexio-data-table-column [data-index]=\"'Keyboard'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Keyboard'\">\n                                    </amexio-data-table-column>\n                                    <amexio-data-table-column [data-index]=\"'Screen-Reader'\" [data-type]=\"'string'\"\n                                        [hidden]=\"false\" [text]=\"'Screen-Reader'\">\n                                    </amexio-data-table-column>\n                                </amexio-datagrid>\n                            </amexio-body>\n                        </amexio-card>\n                    </amexio-grid-item>\n                    <amexio-grid-item [name]=\"'gridtable7'\">\n                        <amexio-card [header]=\"true\" [header-align]=\"'left'\" [footer]=\"false\" [footer-align]=\"'left'\"\n                            [show]=\"'showVariable'\">\n                            <amexio-header>\n                                Form-Inputs\n                            </amexio-header>\n                            <amexio-body>\n                                <amexio-datagrid [data-reader]=\"'data'\" [height]=\"'920'\" [http-url]=\"'assets/menuaccessibilityjson/forminputaccessibility.json'\"\n                                    [http-method]=\"'get'\" (rowSelect)=\"onRowSelect($event)\">\n                                    <amexio-data-table-column [data-index]=\"'Component'\" [data-type]=\"'string'\"\n                                        [hidden]=\"false\" [text]=\"'Component'\">\n                                    </amexio-data-table-column>\n                                    <amexio-data-table-column [data-index]=\"'Keyboard'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Keyboard'\">\n                                    </amexio-data-table-column>\n                                    <amexio-data-table-column [data-index]=\"'Screen-Reader'\" [data-type]=\"'string'\"\n                                        [hidden]=\"false\" [text]=\"'Screen-Reader'\">\n                                    </amexio-data-table-column>\n                                </amexio-datagrid>\n                            </amexio-body>\n                        </amexio-card>\n                    </amexio-grid-item>\n                </amexio-layout-grid>\n            </amexio-body>\n        </amexio-card>\n        <amexio-card-ce  style=\"display: block; padding-top:20px\">\n            <amexio-body-ce>\n                <span style=\"font-weight:bold\">Home: <a href=\"https://www.w3schools.com/html/\" style=\"text-decoration: none; color:blue\">https://www.w3schools.com/html/</a></span><br>\n                <span style=\"font-weight:bold\">Patterns: <a href=\"https://a11yproject.com/patterns\" style=\"text-decoration: none; color:blue\">https://a11yproject.com/patterns</a></span><br>\n                <span style=\"font-weight:bold\">Checklist: <a href=\"https://a11yproject.com/checklist\" style=\"text-decoration: none; color:blue\">https://a11yproject.com/checklist</a></span><br>\n                <span style=\"font-weight:bold\">WAVE - Chrome Extension: <a href=\"https://chrome.google.com/webstore/detail/wave-evaluation-tool/jbbplnpkjmmeebjpijfedlgcdilocofh\"\n                        style=\"text-decoration: none; color:blue\">https://chrome.google.com/webstore/detail/wave-evaluation-tool/jbbplnpkjmmeebjpijfedlgcdilocofh</a></span><br>\n\n                <p>Overview</p>\n                <p>Evaluate web accessibility within the Chrome browser.</p>\n                <p>\n                    WAVE is a web accessibility evaluation tool developed by WebAIM.org. It provides visual feedback\n                    about the accessibility of your web content by injecting icons and indicators into your page. No\n                    automated tool can tell you if your page is accessible, but WAVE facilitates human evaluation and\n                    educates about accessibility issues. All analysis is done entirely within the Chrome browser\n                    allowing secure valuation of intranet, local, password protected, and other sensitive web pages.\n                </p>\n\n\n                <span style=\"font-weight:bold\">Tools to test the\n                    Site for Accessibility Compliance -Link 1: <a href=\"https://www.powermapper.com/products/sortsite/checks/accessibility-checks/\"\n                        style=\"text-decoration: none; color:blue\">https://www.powermapper.com/products/sortsite/checks/accessibility-checks/</a></span><br>\n\n                <span style=\"font-weight:bold\">Tools\n                    to test the\n                    Site for Accessibility Compliance -Link 2: <a href=\"http://www.508checker.com/\" style=\"text-decoration: none; color:blue\">http://www.508checker.com/</a></span><br>\n\n            </amexio-body-ce>\n\n        </amexio-card-ce>\n    </amexio-column>\n\n</amexio-row>\n\n\n<amexio-action-ce [align]=\"'space-between'\">\n    <amexio-button [label]=\"'Previous'\" [type]=\"'theme-color'\" (onClick)=\"previous()\">\n    </amexio-button>\n</amexio-action-ce>\n\n</div>\n"

/***/ }),

/***/ "./src/app/accessibility/accessibility.demo.ts":
/*!*****************************************************!*\
  !*** ./src/app/accessibility/accessibility.demo.ts ***!
  \*****************************************************/
/*! exports provided: AccessibilityDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccessibilityDemo", function() { return AccessibilityDemo; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! amexio-ng-extensions */ "./node_modules/amexio-ng-extensions/amexio-ng-extensions.es5.js");
/**
 * Created by ankita on 4/4/19.
 */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AccessibilityDemo = /** @class */ (function () {
    function AccessibilityDemo(http, router, _gridlayoutService) {
        this.http = http;
        this.router = router;
        this._gridlayoutService = _gridlayoutService;
        this.createLayouts();
        // Create the Layouts
        this._gridlayoutService.createLayout(this.gridDesktop);
    }
    AccessibilityDemo.prototype.ngOnInit = function () {
    };
    AccessibilityDemo.prototype.onRowSelect = function (data) {
        this.router.navigate([data.link]);
    };
    AccessibilityDemo.prototype.createLayouts = function () {
        this.gridDesktop = new amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_3__["GridConfig"]('LayoutSample', amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_3__["GridConstants"].Desktop)
            .addlayout(["gridtable1", "gridtable2", "gridtable7"])
            .addlayout(["gridtable3", "gridtable4", "gridtable7"])
            .addlayout(["gridtable5", "gridtable6", "gridtable7"]);
    };
    AccessibilityDemo.prototype.previous = function () {
        this.router.navigate(['d3-charts']);
    };
    AccessibilityDemo = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'accesibility-page',
            template: __webpack_require__(/*! ./accessibility.demo.html */ "./src/app/accessibility/accessibility.demo.html"),
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_3__["AmexioGridLayoutService"]])
    ], AccessibilityDemo);
    return AccessibilityDemo;
}());



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

module.exports = "<div style=\"padding-bottom:63px\">\n\n  <amexio-nav [enable-side-nav-position]=\"true\" [enable-more-mode]=\"true\" [title]=\"'Amexio Showcase'\"\n    (onNavTitleClick)=\"titleClick()\" [logo]=\"'assets/images/amexio-logo.png'\">\n    <amexio-nav-item position-right (onNavItemClick)=\"titleClick()\" [icon]=\"'fa fa-home fa-fw fa-lg'\" [type]=\"'link'\"\n      style=\"cursor: pointer;\">\n    </amexio-nav-item>\n    <amexio-nav-item position-right *ngFor=\"let menus of amexiotechmenus\" [type]=\"'menu'\" [title]=\"menus.text\"\n      [icon]=\"menus.icon\" [data]=\"menus.submenus\" (onNavItemClick)=\"externalLink($event)\">\n    </amexio-nav-item>\n  </amexio-nav>\n\n</div>\n\n<router-outlet></router-outlet>\n\n<hr />\n\n<div style=\"text-align: center; background: white\">\n\n  Copyright © <a style=\"color: blue\" href=\"https://metamagicglobal.com\" target=\"_blank\">MetaMagic Global Inc</a>,\n  2017-19.NJ, USA.\n  <a style=\"color: blue\" href=\"http://www.amexio.tech/\" target=\"_blank\">Amexio Angular EXtensions</a>. All rights\n  reserved.\n  <br />\n\n  BetaMagic Global Pvt Ltd, Pune, Maharashtra, India is a wholly owned subsidiary of MetaMagic Global Inc, NJ, USA.\n  <br />\n\n  Licensed under the <a style=\"color: blue\" href=\"https://api.amexio.org/api/license.html\" target=\"_blank\">Apache2.0\n    License</a>.\n  <a style=\"color: blue\" href=\"http://api.amexio.org/\" target=\"_blank\">Amexio API Docs</a> by\n  <a style=\"color: blue\" href=\"https://creativecommons.org/licenses/by/4.0/legalcode\" target=\"_blank\">CC By 4.0 </a>\n  <br />\n  <hr />\n  Showcase and all the Demos are powered by Amexio API\n\n</div>\n\n\n<hr />"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(router) {
        this.router = router;
        this.title = 'app';
        this.amexiotechmenus = [
            {
                "text": "Amexio API",
                "icon": "fa fa-empire fa-fw",
                "submenus": [
                    {
                        "text": "Concept",
                        "routeLink": true,
                        "link": "concept"
                    },
                    {
                        "text": "Getting Started",
                        "routeLink": true,
                        "link": "getting-started"
                    },
                    {
                        "text": "Colors (Themes)",
                        "routeLink": true,
                        "link": "theme",
                        "separator": true
                    },
                    {
                        "text": "D3 Charts",
                        "routeLink": true,
                        "link": "d3-charts"
                    },
                    {
                        "text": "Accessibility",
                        "routeLink": true,
                        "link": "accessibility",
                        "separator": true
                    },
                    {
                        "text": "Quality Assurance",
                        "routeLink": false,
                        "link": "https://amexio.tech/quality-assurance"
                    },
                    {
                        "text": "Support",
                        "routeLink": false,
                        "link": "https://amexio.tech/support"
                    },
                    {
                        "text": "API Docs",
                        "routeLink": false,
                        "link": "http://api.amexio.org/",
                        "separator": true
                    }
                ]
            },
            {
                "text": "Products",
                "icon": "fa fa-snowflake-o fa-fw",
                "submenus": [
                    {
                        "text": "Amexio API",
                        "routeLink": false,
                        "link": "https://amexio.tech/amexio-api"
                    },
                    {
                        "text": "Amexio D3 Charts",
                        "routeLink": false,
                        "link": " https://amexio.tech/amexio-d3-charts"
                    },
                    {
                        "text": "Amexio Canvas",
                        "routeLink": false,
                        "link": "https://amexio.tech/amexio-canvas"
                    },
                    {
                        "text": "Amexio Colors",
                        "routeLink": false,
                        "link": "https://amexio.tech/amexio-colors"
                    },
                    {
                        "text": "Amexio Plugins",
                        "routeLink": false,
                        "link": "https://amexio.tech/amexio-plugins-1"
                    },
                    {
                        "text": "Amexio Demo Apps",
                        "routeLink": false,
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
                        "routeLink": false,
                        "link": "https://amexio.tech/roadmap"
                    },
                    {
                        "text": "Pricing",
                        "routeLink": false,
                        "link": "https://amexio.tech/pricing"
                    },
                    {
                        "text": "Downloads",
                        "routeLink": false,
                        "link": "https://amexio.tech/download"
                    },
                    {
                        "text": "License and Other Docs",
                        "routeLink": false,
                        "link": "https://amexio.tech/license-and-other-docs-1"
                    },
                    {
                        "text": "Canvas Login (Beta)",
                        "routeLink": false,
                        "link": "https://canvas.amexio.org/"
                    },
                    {
                        "text": "Subscribe ",
                        "routeLink": false,
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
                        "routeLink": false,
                        "link": "http://demo.amexio.tech/"
                    },
                    {
                        "text": "Amexio Training",
                        "routeLink": false,
                        "link": "http://metaarivu.com/amexio-training"
                    }
                ]
            },
            {
                "text": "Case Studies",
                "icon": "fa fa-clone fa-fw",
                "submenus": [
                    {
                        "text": "Showcase",
                        "routeLink": false,
                        "link": "https://showcase.amexio.org/#/landingPage-app"
                    },
                    {
                        "text": "Traffic Analysis",
                        "routeLink": false,
                        "link": "https://eedemo.amexio.org/#/home/dashboard",
                        "separator": true,
                        "separatorHeader": "Enterprise Edition Apps"
                    },
                    {
                        "text": "City Analysis",
                        "routeLink": false,
                        "link": "https://eedemo.amexio.org/#/home/dashboardtwo"
                    },
                    {
                        "text": "Creative Home Page",
                        "routeLink": false,
                        "link": "https://cedemo.amexio.org/amexio-ce-demo-app/index.html#/ce-demo-app",
                        "separator": true,
                        "separatorHeader": "Creative Edition Apps"
                    },
                    {
                        "text": "Movie Portal",
                        "routeLink": false,
                        "link": "https://cedemo.amexio.org/Virtual-Scroller/#/sc"
                    },
                    {
                        "text": "TecMFlix",
                        "routeLink": false,
                        "link": "https://cedemo.amexio.org/tecmflix/"
                    },
                    {
                        "text": "Components App",
                        "routeLink": false,
                        "link": "https://demo.amexio.org/se/v5.12/index.html#/home",
                        "separator": true,
                        "separatorHeader": "Standard Edition Apps"
                    },
                    {
                        "text": "Insurance Portal",
                        "routeLink": false,
                        "link": "https://sedemo.amexio.org/se/insuranceportal/#/home"
                    },
                    {
                        "text": "Shopping Portal",
                        "routeLink": false,
                        "link": "https://sedemo.amexio.org/se/shoppingportal/#/home"
                    },
                    {
                        "text": "US Election Results",
                        "routeLink": false,
                        "link": "https://sedemo.amexio.org/se/us-election/ "
                    },
                    {
                        "text": "NpmStats",
                        "routeLink": false,
                        "link": "https://www.npmstats.com/"
                    }
                ]
            },
            {
                "text": "Engage",
                "submenus": [
                    {
                        "text": "Events",
                        "routeLink": false,
                        "link": "https://metamagicglobal.com/events"
                    },
                    {
                        "text": "Forums",
                        "routeLink": false,
                        "link": "http://forum.metamagicglobal.com/"
                    },
                    {
                        "text": "Blogs",
                        "routeLink": false,
                        "link": "http://blog.metamagicglobal.com/"
                    },
                    {
                        "text": "Node Package Manager",
                        "routeLink": false,
                        "link": "https://www.npmjs.com/package/amexio-ng-extensions"
                    },
                    {
                        "text": "GitHub - Source Code",
                        "routeLink": false,
                        "link": "https://github.com/meta-magic/amexio.github.io"
                    }
                ]
            },
            {
                "text": "About Us",
                "submenus": [
                    {
                        "text": "Contact",
                        "routeLink": false,
                        "link": "https://metamagicglobal.com/contact"
                    },
                    {
                        "text": "Company",
                        "routeLink": false,
                        "link": "http://www.metamagicglobal.com/company"
                    },
                    {
                        "text": "MetaMagic",
                        "routeLink": false,
                        "link": "https://www.metamagicglobal.com/"
                    }
                ]
            }
        ];
    }
    AppComponent.prototype.externalLink = function (event) {
        if (event.data.link && event.data.routeLink == false) {
            //this.document.location.href=event.data.node.link;
            window.open(event.data.link, '_blank');
        }
        if (event.data.link && event.data.routeLink == true) {
            this.router.navigate([event.data.link]);
        }
    };
    AppComponent.prototype.titleClick = function () {
        this.router.navigate(['landingPage-app']);
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
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
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./landing-page/landing-page.component */ "./src/app/landing-page/landing-page.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.es5.js");
/* harmony import */ var src_app_app_routes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/app.routes */ "./src/app/app.routes.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var amexio_chart_d3__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! amexio-chart-d3 */ "./node_modules/amexio-chart-d3/fesm5/amexio-chart-d3.js");
/* harmony import */ var _app_chartd3_chard3_demo__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../app/chartd3/chard3.demo */ "./src/app/chartd3/chard3.demo.ts");
/* harmony import */ var _accessibility_accessibility_demo__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./accessibility/accessibility.demo */ "./src/app/accessibility/accessibility.demo.ts");
/* harmony import */ var _concept_keyfeatures_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./concept/keyfeatures.component */ "./src/app/concept/keyfeatures.component.ts");
/* harmony import */ var _theme_theme_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./theme/theme.component */ "./src/app/theme/theme.component.ts");
/* harmony import */ var _gettingstarted_gettingstarted__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./gettingstarted/gettingstarted */ "./src/app/gettingstarted/gettingstarted.ts");
/* harmony import */ var amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! amexio-ng-extensions */ "./node_modules/amexio-ng-extensions/amexio-ng-extensions.es5.js");
/* harmony import */ var _concept_concept_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./concept/concept.component */ "./src/app/concept/concept.component.ts");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./shared.module */ "./src/app/shared.module.ts");
/* harmony import */ var _service_http_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./service/http.service */ "./src/app/service/http.service.ts");
/* harmony import */ var _theme_service_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./theme-service.service */ "./src/app/theme-service.service.ts");
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
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_4__["LandingPageComponent"],
                _app_chartd3_chard3_demo__WEBPACK_IMPORTED_MODULE_10__["ChartD3Demo"],
                _accessibility_accessibility_demo__WEBPACK_IMPORTED_MODULE_11__["AccessibilityDemo"],
                _concept_concept_component__WEBPACK_IMPORTED_MODULE_16__["ConceptPage"],
                _concept_keyfeatures_component__WEBPACK_IMPORTED_MODULE_12__["KeyFeaturesComponent"],
                _theme_theme_component__WEBPACK_IMPORTED_MODULE_13__["ThemeComponent"],
                amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_15__["AmexioThemeSwitcherComponent"],
                _gettingstarted_gettingstarted__WEBPACK_IMPORTED_MODULE_14__["GettingStatedDemo"],
                _shared_module__WEBPACK_IMPORTED_MODULE_17__["PrismComponent"]
            ],
            imports: [
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_15__["AmexioWidgetModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"], amexio_chart_d3__WEBPACK_IMPORTED_MODULE_9__["AmexioChartD3Module"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot(src_app_app_routes__WEBPACK_IMPORTED_MODULE_7__["APP_ROUTE"], { useHash: true })
            ],
            providers: [ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"], _service_http_service__WEBPACK_IMPORTED_MODULE_18__["HTTPService"], _theme_service_service__WEBPACK_IMPORTED_MODULE_19__["ThemeServiceService"], amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_15__["AmexioThemeSwitcherService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
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
/* harmony import */ var _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./landing-page/landing-page.component */ "./src/app/landing-page/landing-page.component.ts");
/* harmony import */ var _chartd3_chard3_demo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chartd3/chard3.demo */ "./src/app/chartd3/chard3.demo.ts");
/* harmony import */ var _accessibility_accessibility_demo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./accessibility/accessibility.demo */ "./src/app/accessibility/accessibility.demo.ts");
/* harmony import */ var _concept_concept_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./concept/concept.component */ "./src/app/concept/concept.component.ts");
/* harmony import */ var _theme_theme_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./theme/theme.component */ "./src/app/theme/theme.component.ts");
/* harmony import */ var _gettingstarted_gettingstarted__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./gettingstarted/gettingstarted */ "./src/app/gettingstarted/gettingstarted.ts");






var APP_ROUTE = [
    {
        path: '', redirectTo: 'landingPage-app', pathMatch: 'full',
    },
    {
        path: 'landingPage-app', component: _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_0__["LandingPageComponent"]
    },
    {
        path: 'd3-charts', component: _chartd3_chard3_demo__WEBPACK_IMPORTED_MODULE_1__["ChartD3Demo"],
    },
    {
        //AccessibilityDemoModule
        path: 'accessibility', component: _accessibility_accessibility_demo__WEBPACK_IMPORTED_MODULE_2__["AccessibilityDemo"],
    },
    {
        path: 'getting-started', component: _gettingstarted_gettingstarted__WEBPACK_IMPORTED_MODULE_5__["GettingStatedDemo"],
    },
    {
        path: 'concept', component: _concept_concept_component__WEBPACK_IMPORTED_MODULE_3__["ConceptPage"],
    },
    {
        path: 'theme', component: _theme_theme_component__WEBPACK_IMPORTED_MODULE_4__["ThemeComponent"],
    },
];


/***/ }),

/***/ "./src/app/chartd3/chard3.demo.ts":
/*!****************************************!*\
  !*** ./src/app/chartd3/chard3.demo.ts ***!
  \****************************************/
/*! exports provided: ChartD3Demo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartD3Demo", function() { return ChartD3Demo; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/**
 * Created by kedar on 21/9/18.
 */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChartD3Demo = /** @class */ (function () {
    function ChartD3Demo(http, router) {
        this.http = http;
        this.router = router;
        this.multiAreaData = [
            ["date", "index", "open", "close", "high"],
            ["2014", 58.13, 610, 234, 100],
            ["2015", 53.98, 626, 356, 150],
            ["2016", 99.00, 543, 456, 200],
            ["2017", 130.28, 443, 556, 250],
            ["2018", 58.13, 610, 245, 300],
            ["2019", 53.98, 626, 345, 350],
            ["2020", 99.00, 543, 556, 400],
            ["2021", 130.28, 443, 443, 500]
        ];
        this.comboChartData = [
            ['State', 'Rice Production', 'Rice Export'],
            ['W.B', 600, 50],
            ['Kerala', 500, 100],
            ['Goa', 400, 350],
            ['Assam', 250, 200],
            ['Punjab', 300, 250],
            ['Bihar', 400, 380],
            ['Orissa', 500, 200]
        ];
        this.barData = [
            ['State', 'Corn Export', 'Bajra Export', 'Rice Export', 'Wheat Export', 'Jowar Export'],
            ['Andhra Pradesh', 600, 500, 250, 50, 95],
            ['Kerala', 500, 400, 75, 150, 195],
            ['Tamil Nadu', 400, 300, 250, 50, 95],
            ['Assam', 250, 150, 75, 150, 195],
            ['Maharshtra', 300, 200, 250, 50, 95]
        ];
        this.lineArray = [
            { column: "Rice Export", label: true, color: "yellow" },
            { column: "Jowar Export" },
            { column: "Wheat Export" }
        ];
        this.lineArray2 = [
            { column: "Jowar Export" },
            { column: "Wheat Export", label: true }
        ];
        this.barArray = [
            { column: "Corn Export", label: true },
            { column: "Bajra Export", label: true }
        ];
        this.horizontalBarData = [
            ['year', 'production'],
            ['2011', 300],
            ['2012', 500],
            ['2013', 700],
            ['2014', 400],
            ['2015', 600],
            ['2016', 500],
            ['2017', 200]
        ];
        this.userDefineColors = ["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00", "#b9936c"];
        this.userDefineColorData =
            [
                ['city', 'population'],
                ['Mumbai', 94423],
                ['Kochi', 69932],
                ['Delhi', 91345],
                ['Chennai', 46467],
                ['Pune', 31244],
                ['Jaipur', 30461],
                ['Ranchi', 84436]
            ];
        this.bubblechart = [
            ['ID', 'Life Expectancy', 'Fertility Rate', 'Region', 'Population'],
            ['CAN', 80.66, 1.67, 'North America', 33739900],
            ['DEU', 79.84, 1.36, 'Europe', 81902307],
            ['DNK', 78.6, 1.84, 'Europe', 5523095],
            ['EGY', 72.73, 2.78, 'Middle East', 79716203],
            ['GBR', 80.05, 2, 'Europe', 61801570],
            ['IRN', 72.49, 1.7, 'Middle East', 73137148],
            ['IRQ', 68.09, 4.77, 'Middle East', 31090763],
            ['ISR', 81.55, 2.96, 'Middle East', 7485600],
            ['RUS', 68.6, 1.54, 'Europe', 141850000],
            ['USA', 78.09, 2.05, 'North America', 307007000]
        ];
    }
    ChartD3Demo.prototype.ngOnInit = function () {
        this.donutDataColor = ["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"];
        this.donutData = [
            ['browser', 'activity'],
            ['IE', 11.43],
            ['Chrome', 63.14],
            ['Safari', 3.83],
            ['Firefox', 10.23],
            ['Others', 10.01]
        ];
        this.pieData = [
            ['country', 'ratio'],
            ['India', 30.3],
            ['Spain', 9.52],
            ['France', 13.68],
            ['China', 18.71],
            ['Germany', 8.01],
            ['U.K', 8.01],
            ['U.S', 14.01],
            ['Korea', 4.01]
        ];
        this.multiData = [
            ['date', 'Sales', 'Expenses', 'Profit'],
            ['2014', 1000, 400, 200],
            ['2015', 1170, 460, 250],
            ['2016', 660, 1120, 300],
            ['2017', 1030, 540, 350],
            ['2018', 1090, 740, 450],
            ['2019', 1050, 640, 350]
        ];
        this.doubleLineData = [[{ "datatype": "number", "label": "Day" }, { "datatype": "number", "label": "XYZ" }, { "datatype": "number", "label": "PQR" }], [0, 0, 0], [1, 10, 5], [2, 23, 15], [3, 17, 9], [4, 18, 10], [5, 9, 5], [6, 11, 3], [7, 27, 19], [8, 33, 25], [9, 40, 32], [10, 32, 24], [11, 35, 27], [12, 30, 22], [13, 40, 32], [14, 42, 34], [15, 47, 39]];
        this.stackData = [
            ['Year', 'Sales', 'Expenses', 'Profit'],
            ['2014', 1000, 400, 200],
            ['2015', 1170, 460, 250],
            ['2016', 660, 1120, 300],
            ['2017', 1030, 540, 350],
            ['2018', 1090, 740, 450],
            ['2019', 1050, 640, 350]
        ];
        this.scatterChartData = [
            ['Age', 'Weight'],
            [5, 35],
            [8, 40],
            [10, 45],
            [3, 12],
            [12, 48],
            [6, 39],
            [8, 42],
            [5, 32],
            [7, 46],
            [1, 10],
            [3, 15],
            [2, 8],
            [4, 20]
        ];
        this.histogramdata = [
            ['Dinosaur', 'Length'],
            ['Acrocanthosaurus (top-spined lizard)', 12.2],
            ['Albertosaurus (Alberta lizard)', 9.1],
            ['Allosaurus (other lizard)', 12.2],
            ['Apatosaurus (deceptive lizard)', 22.9],
            ['Archaeopteryx (ancient wing)', 0.9],
            ['Argentinosaurus (Argentina lizard)', 36.6],
            ['Baryonyx (heavy claws)', 9.1],
            ['Brachiosaurus (arm lizard)', 30.5],
            ['Ceratosaurus (horned lizard)', 6.1],
            ['Coelophysis (hollow form)', 2.7],
            ['Compsognathus (elegant jaw)', 0.9],
            ['Deinonychus (terrible claw)', 2.7],
            ['Diplodocus (double beam)', 27.1],
            ['Dromicelomimus (emu mimic)', 3.4],
            ['Gallimimus (fowl mimic)', 5.5],
            ['Mamenchisaurus (Mamenchi lizard)', 21.0],
            ['Megalosaurus (big lizard)', 7.9],
            ['Microvenator (small hunter)', 1.2],
            ['Ornithomimus (bird mimic)', 4.6],
            ['Oviraptor (egg robber)', 1.5],
            ['Plateosaurus (flat lizard)', 7.9],
            ['Sauronithoides (narrow-clawed lizard)', 2.0],
            ['Seismosaurus (tremor lizard)', 45.7],
            ['Spinosaurus (spiny lizard)', 12.2],
            ['Supersaurus (super lizard)', 30.5],
            ['Tyrannosaurus (tyrant lizard)', 15.2],
            ['Ultrasaurus (ultra lizard)', 30.5],
            ['Velociraptor (swift robber)', 1.8]
        ];
        this.waterfallChartData = [
            ["name", "value"],
            ["Product Revenue", 420000],
            ["Services Revenue", 210000],
            ["Fixed Costs", -170000],
            ["letiable Costs", -140000]
        ];
    };
    ChartD3Demo.prototype.previous = function () {
        this.router.navigate(['amexio-colors']);
    };
    ChartD3Demo.prototype.next = function () {
        this.router.navigate(['amexio-accessibility']);
    };
    ChartD3Demo = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'chart-d3-page',
            template: __webpack_require__(/*! ./chartd3.demo.html */ "./src/app/chartd3/chartd3.demo.html"),
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ChartD3Demo);
    return ChartD3Demo;
}());



/***/ }),

/***/ "./src/app/chartd3/chartd3.demo.html":
/*!*******************************************!*\
  !*** ./src/app/chartd3/chartd3.demo.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\" padding: 0% 1% 0% 1%;\">\n<amexio-row>\n    <amexio-column size=\"12\">\n        <amexio-card [header]=\"false\" [show]=\"'true'\">\n\n            <amexio-body>\n                <amexio-image [path]=\"'assets/staticPageImages/D3_chart_page1.jpg'\" [tooltip]=\"'Image'\"></amexio-image>\n\n                <p><b>D3</b> allows you to bind arbitrary data to a Document Object Model (DOM),\n                    and then apply data-driven transformations to the document. For example,\n                    you can use D3 to generate an HTML table from an array of numbers.\n                    Or, use the same data to create an interactive SVG bar chart with smooth transitions\n                    and interaction.</p>\n\n                <p>D3 is not a monolithic framework that seeks to provide every conceivable feature.\n                    Instead, D3 solves the crux of the problem: efficient manipulation of documents\n                    based on data. This avoids proprietary representation and affords extraordinary\n                    flexibility, exposing the full capabilities of web standards such as HTML, SVG, and CSS.\n                    With minimal overhead, D3 is extremely fast, supporting large datasets and dynamic\n                    behaviors for interaction and animation. D3’s functional style allows code reuse\n                    through a diverse collection of <span style=\"color: #0000FF\"><ins>official</ins></span> and <span\n                        style=\"color: #0000FF\"><ins>community-developed</ins></span> modules.</p>\n\n            </amexio-body>\n        </amexio-card>\n    </amexio-column>\n</amexio-row>\n\n\n<amexio-row>\n    <amexio-column size=\"6\" [fit]=\"true\">\n        <amexio-card [header]=\"true\" [show]=\"'true'\">\n            <amexio-header>\n                amexio D3-bar chart\n            </amexio-header>\n            <amexio-body>\n                <amexio-d3-chart-bar [title]=\"'Population Of Cities In India'\" [label]=\"true\" [color]=\"userDefineColors\" [data]=\"userDefineColorData\">\n                </amexio-d3-chart-bar>\n            </amexio-body>\n        </amexio-card>\n    </amexio-column>\n\n    <amexio-column size=\"6\" [fit]=\"true\">\n        <amexio-card [header]=\"true\" [show]=\"'true'\">\n            <amexio-header>\n                amexio D3-line chart\n            </amexio-header>\n            <amexio-body>\n                <amexio-d3-chart-line [title]=\"'Popularity Of XYZ & PQR'\" [label]=\"true\" [data]=\"doubleLineData\">\n                </amexio-d3-chart-line>\n            </amexio-body>\n        </amexio-card>\n    </amexio-column>\n</amexio-row>\n\n\n\n<amexio-row>\n\n    <amexio-column size=\"6\" [fit]=\"true\">\n        <amexio-card [header]=\"true\" [show]=\"'true'\">\n            <amexio-header>\n                amexio D3-donut chart\n            </amexio-header>\n            <amexio-body>\n                <amexio-d3-chart-donut [label]=\"true\" [title]=\"'Browser Popularity'\" [color]=\"donutDataColor\" [data]=\"donutData\">\n                </amexio-d3-chart-donut>\n            </amexio-body>\n        </amexio-card>\n    </amexio-column>\n\n    <amexio-column size=\"6\" [fit]=\"true\">\n        <amexio-card [header]=\"true\" [show]=\"'true'\">\n            <amexio-header>\n                amexio D3-pie chart\n            </amexio-header>\n            <amexio-body>\n                <amexio-d3-chart-pie [label]=\"true\" [title]=\"'Visitor Visit Country Ratio'\" [color]=\"userDefineColors\" [data]=\"pieData\">\n                </amexio-d3-chart-pie>\n            </amexio-body>\n        </amexio-card>\n    </amexio-column>\n</amexio-row>\n\n<amexio-row>\n    <amexio-column size=\"6\" [fit]=\"true\">\n        <amexio-card [header]=\"true\" [show]=\"'true'\">\n            <amexio-header>\n                Amexio D3-multiseries Chart\n            </amexio-header>\n            <amexio-body>\n                <amexio-d3-chart-multiseries [title]=\"'Market Information'\" [data]=\"stackData\" [label]=\"true\">\n                </amexio-d3-chart-multiseries>\n            </amexio-body>\n        </amexio-card>\n    </amexio-column>\n\n    <amexio-column size=\"6\" [fit]=\"true\">\n        <amexio-card [header]=\"true\" [show]=\"'true'\">\n            <amexio-header>\n                amexio D3-Stack Bar chart\n            </amexio-header>\n            <amexio-body>\n                <amexio-d3-chart-barstack [title]=\"'Market Information'\" [data]=\"stackData\" [label]=\"true\">\n                </amexio-d3-chart-barstack>\n\n            </amexio-body>\n        </amexio-card>\n    </amexio-column>\n</amexio-row>\n<amexio-row>\n\n    <amexio-column size=\"6\" [fit]=\"true\">\n        <amexio-card [header]=\"true\" [show]=\"'true'\">\n            <amexio-header>\n                amexio D3-Horizontal bar chart\n            </amexio-header>\n            <amexio-body>\n                <amexio-d3-chart-bar [label]=\"true\" [title]=\"'Production Information'\" [horizontal]=\"true\" [data]=\"horizontalBarData\">\n                </amexio-d3-chart-bar>\n            </amexio-body>\n        </amexio-card>\n    </amexio-column>\n\n    <amexio-column size=\"6\" [fit]=\"true\">\n        <amexio-card [header]=\"true\" [show]=\"'true'\">\n            <amexio-header>\n                amexio D3-Combo Chart\n            </amexio-header>\n            <amexio-body>\n                <amexio-d3-combochart [title]=\"'State Wise Rice Production'\" [data]=\"comboChartData\" >\n                </amexio-d3-combochart>\n            </amexio-body>\n        </amexio-card>\n    </amexio-column>\n</amexio-row>\n\n<amexio-row>\n\n    <amexio-column size=\"6\" [fit]=\"true\">\n        <amexio-card [header]=\"true\" [show]=\"'true'\">\n            <amexio-header>\n                amexio D3-Multi-Area chart\n            </amexio-header>\n            <amexio-body>\n                <amexio-d3-chart-multiarea [label]=\"true\" [data]=\"multiAreaData\" [title]=\"'Stock Market Information'\">\n                </amexio-d3-chart-multiarea>\n            </amexio-body>\n        </amexio-card>\n    </amexio-column>\n\n    <amexio-column size=\"6\" [fit]=\"true\">\n        <amexio-card [header]=\"true\" [show]=\"'true'\">\n            <amexio-header>\n                amexio D3-Scatter chart\n            </amexio-header>\n            <amexio-body>\n                <amexio-d3-chart-scatter [title]=\"'Age vs Weight'\" [label]=\"true\" [data]=\"scatterChartData\" [color]=\"'green'\">\n                </amexio-d3-chart-scatter>\n            </amexio-body>\n        </amexio-card>\n    </amexio-column>\n</amexio-row>\n\n<amexio-row>\n    <amexio-column size=\"6\" [fit]=\"true\">\n        <amexio-card [header]=\"true\" [show]=\"'true'\">\n            <amexio-header>\n                amexio D3-Histogram chart\n            </amexio-header>\n            <amexio-body>\n                <amexio-d3-chart-histogram [label]=\"true\" [title]=\"'Count Of Dinosaur'\" [data]=\"histogramdata\" [color]=\"'blue'\"></amexio-d3-chart-histogram>\n            </amexio-body>\n        </amexio-card>\n    </amexio-column>\n\n    <amexio-column size=\"6\" [fit]=\"true\">\n        <amexio-card [header]=\"true\" [show]=\"'true'\">\n            <amexio-header>\n                amexio D3-Waterfall chart\n            </amexio-header>\n            <amexio-body>\n                <amexio-d3-chart-waterfall [title]=\"'Product Information'\" [data]=\"waterfallChartData\" [label]=\"true\">\n                </amexio-d3-chart-waterfall>\n\n            </amexio-body>\n        </amexio-card>\n    </amexio-column>\n</amexio-row>\n\n\n<amexio-row>\n    <amexio-column size=\"6\" [fit]=\"true\">\n        <amexio-card [header]=\"true\" [show]=\"'true'\">\n            <amexio-header>\n                amexio D3-Bubble chart\n            </amexio-header>\n            <amexio-body>\n                <amexio-d3-chart-bubble [title]=\"'Region Wise Life Expectancy '\" [label]=\"true\"\n                [zoom-enable]=\"true\" [data]=\"bubblechart\">\n                </amexio-d3-chart-bubble>\n            </amexio-body>\n        </amexio-card>\n    </amexio-column>\n    <amexio-column size=\"6\" [fit]=\"true\">\n        <amexio-card [header]=\"true\" [show]=\"'true'\">\n            <amexio-header>\n                amexio D3-Combo Chart with multi lines\n            </amexio-header>\n            <amexio-body>\n                <amexio-d3-combochart [title]=\"' Production in India'\" \n                \n               [data]=\"barData\"\n               [bar-data-index]=\"barArray\"\n               [line-data-index]=\"lineArray\"\n               >\n               </amexio-d3-combochart>   \n            </amexio-body>\n        </amexio-card>\n    </amexio-column>\n</amexio-row>\n\n\n<amexio-action-ce [align]=\"'space-between'\">\n        <amexio-button [label]=\"'Previous'\" [type]=\"'theme-color'\" (onClick)=\"previous()\">\n        </amexio-button>\n        <amexio-button [label]=\"'Next'\" [type]=\"'theme-color'\" [tooltip]=\"'toolTip'\"  (onClick)=\"next()\">\n        </amexio-button>\n</amexio-action-ce>\n</div>"

/***/ }),

/***/ "./src/app/concept/concept.component.html":
/*!************************************************!*\
  !*** ./src/app/concept/concept.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div style=\" padding: 0% 1% 0% 1%;\">\n\n<amexio-box amexioColorPalette [color-palette]=\"'classic'\" [gradient]=\"true\" class=\"api-header-style \" [padding]=\"true\"\n  align=\"left\">\n    <amexio-label size=\"large\">\n        Amexio\n    </amexio-label>\n  <br />\n  <amexio-label size=\"medium\">\n        Angular MetaMagic EXtensions for Inputs and Outputs\n  </amexio-label>\n</amexio-box>\n\n<br/><br/>\n\n<amexio-card-ce >\n    <amexio-body-ce>\n        <amexio-layout-columns [border]=\"false\" [fit]=\"true\" [alignment]=\"'center'\" [orientation]=\"'vertical'\">\n            <amexio-layout-item [fit]=\"true\">\n                <amexio-label [size]=\"'small'\">\n                    Angular is a UI platform (from Google) to build your Web and Smart Device Applications. It focuses\n                    on UI component development, navigation, dependency injection, security with a modular architecture. \n                    <br/><br/>\n\n                    Amexio is a rich set of <b>Angular 7 components</b> powered by HTML5 & CSS3 for <b>Responsive Web\n                    Design</b> and 80+ built-in <b>Material Design Theme</b> support. <b>Amexio is completely Open Sourced and Free.\n                    It's based on Apache 2 License. </b>\n                    <br/><br/>\n\n                    With <b>160+ UI Components</b> which includes, Grid, Trees, Tabs, Dynamic Tabs, Form Inputs, Layouts,\n                    Charts, Dashboards, Maps etc <b>with Accessibility support</b>. It’s one of the best Angular UI Library in\n                    the market today.\n                    <br/><br/>\n                    The codebase follows the best in class coding standards and the Amexio build (Travis CI) process is\n                    integrated with an open source static code analysis tool - Sonar TS to check the <b>code quality in\n                    every build. v5.1.0 release has a Code Quality rating as follows - Security - A. Maintainability - A\n                    Reliability - A grade</b>. Sonar TS is a static code analyzer for TypeScript detecting bugs and\n                    suspicious patterns in your code.\n                    <br/><br/>\n\n                    <b>Amexio Chart Library</b> is augmented with the <b>support of 12+ D3 Charts</b>. Amexio D3 Chart is a separate\n                    npm download.\n                    <br/><br/>\n\n                    With the v5.5 release, introduced <b>Drillable / Zoomable multi-level charts</b> with Single and Multiple\n                    Targets as drilling options.\n                    <br/><br/>\n                    You can use it in your production grade work today at no cost or no obligation.\n                </amexio-label>\n                <br/><br/>\n                <amexio-label [size]=\"'large-bold'\">\n                    Amexio Editions \n                </amexio-label>\n                <ul>\n                    <li>Standard Edition</li>\n                    <li>Enterprise Edition</li>\n                    <li>Creative Edition</li>\n                </ul>\n\n            </amexio-layout-item>\n            \n            <amexio-layout-item>\n                    <amexio-label [size]=\"'large-bold'\">\n                            Amexio Architecture\n                        </amexio-label><br/><br/>\n                <amexio-image\n                    [path]=\"'https://img1.wsimg.com/isteam/ip/36e99eeb-f2d4-43e5-ba0f-5ea68df2588f/b0f2e860-eb63-40e9-b24c-f360748ba3ca.jpg'\">\n                </amexio-image>\n                <br/>\n            </amexio-layout-item>\n            \n\n            <amexio-layout-item>\n                   <key-features></key-features>\n            </amexio-layout-item>\n\n\n            <amexio-layout-item>\n                <amexio-label [size]=\"'large-bold'\">\n                    Key Differentiators from Competition \n                </amexio-label>\n                <ul style=\"list-style: decimal;\">\n                   <li>160+ Enterprise Grade UI Components</li>\n                   <li>Powerful Layouts</li>\n                   <li>Charts with Drillable and Zoomable features</li>\n                   <li>Simplified Forms - TDF and Reactive Forms</li>\n                   <li>Enterprise and Creative Editions</li>                   \n                </ul>\n                <amexio-image [path]=\"'assets/staticPageImages/Amexio-Differentiator.jpg'\">\n                </amexio-image>\n            </amexio-layout-item>\n       \n            <amexio-layout-item>\n                    <amexio-property-grid [key-value-data]=\"linksData\" (onValueClick)=\"navigate($event)\"></amexio-property-grid>\n            </amexio-layout-item>\n        </amexio-layout-columns>\n\n        \n\n    </amexio-body-ce>\n    <amexio-action-ce [align]=\"'end'\">\n        <amexio-button [label]=\"'Next'\" [type]=\"'theme-color'\" [tooltip]=\"'toolTip'\"  (onClick)=\"next()\">\n        </amexio-button>\n    </amexio-action-ce>\n\n    \n\n</amexio-card-ce>\n\n\n</div>"

/***/ }),

/***/ "./src/app/concept/concept.component.ts":
/*!**********************************************!*\
  !*** ./src/app/concept/concept.component.ts ***!
  \**********************************************/
/*! exports provided: ConceptPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConceptPage", function() { return ConceptPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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



var ConceptPage = /** @class */ (function () {
    function ConceptPage(router) {
        this.router = router;
        this.linksData = [];
        this.linksData.push(new amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__["PropertyGridModel"]("Amexio Home", "http://www.amexio.tech", null, false, "http://www.amexio.tech", "http://www.amexio.tech"));
        this.linksData.push(new amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__["PropertyGridModel"]("API", "http://www.amexio.tech", null, false, "http://www.amexio.tech", "http://www.amexio.tech"));
        this.linksData.push(new amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__["PropertyGridModel"]("Brochure", "https://api.amexio.org/AmexioBrochure.pdf ", null, false, "https://api.amexio.org/AmexioBrochure.pdf ", "https://api.amexio.org/AmexioBrochure.pdf "));
        this.linksData.push(new amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__["PropertyGridModel"]("Demo SE", "http://demo.amexio.org/ ", null, false, "http://demo.amexio.org/ ", "http://demo.amexio.org/ "));
        this.linksData.push(new amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__["PropertyGridModel"]("Demo EE", "http://eedemo.amexio.org/ ", null, false, "http://eedemo.amexio.org/ ", "http://eedemo.amexio.org/ "));
        this.linksData.push(new amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__["PropertyGridModel"]("Demo CE", "http://cedemo.amexio.org/ ", null, false, "http://cedemo.amexio.org/ ", "http://cedemo.amexio.org/ "));
        this.linksData.push(new amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__["PropertyGridModel"]("Support", "https://amexio.tech/support", null, false, "https://amexio.tech/support", "https://amexio.tech/support"));
        this.linksData.push(new amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__["PropertyGridModel"]("Quality Assurance", "https://amexio.tech/quality-assurance ", null, false, "https://amexio.tech/quality-assurance ", "https://amexio.tech/quality-assurance "));
        this.linksData.push(new amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__["PropertyGridModel"]("API Training Videos", "https://www.youtube.com/watch?v=zpfpfnOV6Y0&list=PLi505KVOMPrGRUgJF4C3QoXbrhFGEOI4j", null, false, "https://www.youtube.com/watch?v=zpfpfnOV6Y0&list=PLi505KVOMPrGRUgJF4C3QoXbrhFGEOI4j", "https://www.youtube.com/watch?v=zpfpfnOV6Y0&list=PLi505KVOMPrGRUgJF4C3QoXbrhFGEOI4j"));
    }
    ConceptPage.prototype.previous = function () {
    };
    ConceptPage.prototype.next = function () {
        this.router.navigate(['getting-started']);
    };
    ConceptPage.prototype.navigate = function (event) {
        if (event.link) {
            window.open(event.link, '_blank');
        }
    };
    ConceptPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'concept-page',
            template: __webpack_require__(/*! ./concept.component.html */ "./src/app/concept/concept.component.html")
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ConceptPage);
    return ConceptPage;
}());



/***/ }),

/***/ "./src/app/concept/keyfeatures.component.html":
/*!****************************************************!*\
  !*** ./src/app/concept/keyfeatures.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<amexio-label [size]=\"'large-bold'\">\n    Key Features\n</amexio-label>\n<br /><br />\n<amexio-row>\n    <amexio-column [fit]=\"true\" [size]=4 *ngFor=\"let item of features\">\n        <amexio-card-ce>\n            <amexio-layout-columns\n                [alignment]=\"'start'\"\n                [orientation]=\"'horizontal'\"\n                [responsive-mode]=\"'true'\">\n                <amexio-layout-item>\n                    <amexio-image [height]=\"'100px'\" [width]=\"'100px'\" [path]=\"item.image\" [filter]=\"'round'\">\n                    </amexio-image>\n                </amexio-layout-item>\n                <amexio-layout-item >\n                    <amexio-label [size]=\"'medium-bold'\"> {{item.title}}</amexio-label> <br/>\n                    <amexio-label [size]=\"'small'\"> {{item.desc}}</amexio-label> <br/>\n                </amexio-layout-item>\n            </amexio-layout-columns>\n        </amexio-card-ce>\n    </amexio-column>\n    <amexio-column [size]=6>\n\n    </amexio-column>\n\n</amexio-row>"

/***/ }),

/***/ "./src/app/concept/keyfeatures.component.ts":
/*!**************************************************!*\
  !*** ./src/app/concept/keyfeatures.component.ts ***!
  \**************************************************/
/*! exports provided: KeyFeaturesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeyFeaturesComponent", function() { return KeyFeaturesComponent; });
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

var KeyFeaturesComponent = /** @class */ (function () {
    function KeyFeaturesComponent() {
        this.features = [
            {
                "image": "https://img1.wsimg.com/isteam/stock/WVeNQYA/:/cr=t:0%25,l:0%25,w:65.85%25,h:100%25/rs=w:365,h:365,cg:true",
                "title": " Accessibility",
                "desc": "Amexio components support all Accessibility requirements based on ARIA 1.1, WCAG 2.1 and Section 508 Compliance."
            },
            {
                "image": "https://img1.wsimg.com/isteam/stock/114088/:/cr=t:0%25,l:0%25,w:66.94%25,h:100%25/rs=w:365,h:365,cg:true",
                "title": "Layouts",
                "desc": "Amexio Provides the Best in Class Layout support for the Angular Platform. Out of box 10 layouts are supported including CSS3 Grid."
            },
            {
                "image": "https://img1.wsimg.com/isteam/stock/8402/:/cr=t:0%25,l:27.37%25,w:64.23%25,h:100%25/rs=w:365,h:365,cg:true",
                "title": "Forms",
                "desc": "Amexio supports both Template Driven and Reactive Forms with 1 way and 2-way data bindings. With 5.9 release we introduced Creative Forms."
            },
            {
                "image": "https://img1.wsimg.com/isteam/stock/d4YwmOa/:/cr=t:0%25,l:11.32%25,w:81.34%25,h:100%25/rs=w:730,h:730,cg:true",
                "title": " Responsive Design",
                "desc": "Responsive Design for Layouts and Component Structures enabled by default."
            },
            {
                "image": "https://img1.wsimg.com/isteam/stock/378/:/cr=t:0%25,l:12.67%25,w:69.36%25,h:100%25/rs=w:730,h:730,cg:true",
                "title": " Amexio UI Components",
                "desc": "160+ UI Components with powerful Responsive Layouts & additional 70+ features to enhance the UI. Components are available in 3 Editions – Standard, Enterprise and Creative Editions."
            },
            {
                "image": "https://img1.wsimg.com/isteam/stock/76021/:/rs=w:1200,h:600,cg:true,m/cr=w:1200,h:600",
                "title": " Themes",
                "desc": "80+ Material Design themes out of box. Support for gradient header and night mode."
            },
            {
                "image": "https://img1.wsimg.com/isteam/stock/5zw4Aq8/:/cr=t:0%25,l:4.06%25,w:66.67%25,h:100%25/rs=w:730,h:730,cg:true",
                "title": " Amexio Charts / D3 Charts",
                "desc": "Charts based on Angular Platform, contains all basic chart types like Pie, Bar, Line, Bubbles etc, with Drillable and Zoomable capabilities."
            },
            {
                "image": "https://img1.wsimg.com/isteam/stock/2445/:/cr=t:0%25,l:19.13%25,w:66.67%25,h:100%25/rs=w:730,h:730,cg:true",
                "title": " Amexio Dashboard",
                "desc": "Amexio Dashboard will contain Gauges, Data Point Widgets, Data POint Charts with built-in dashboard templates."
            },
            {
                "image": "https://img1.wsimg.com/isteam/stock/93676/:/cr=t:0%25,l:0%25,w:66.67%25,h:100%25/rs=w:730,h:730,cg:true",
                "title": "Amexio Maps & Social",
                "desc": " Maps will help you plot your enterprise data on Google Maps. Social Logins enable you to authenticate using FB, Google, LinkedIn, etc"
            }
        ];
    }
    KeyFeaturesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'key-features',
            template: __webpack_require__(/*! ./keyfeatures.component.html */ "./src/app/concept/keyfeatures.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], KeyFeaturesComponent);
    return KeyFeaturesComponent;
}());



/***/ }),

/***/ "./src/app/gettingstarted/gettingstarted.html":
/*!****************************************************!*\
  !*** ./src/app/gettingstarted/gettingstarted.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"padding-left: 10px;padding-right: 10px;\">\n    <amexio-row>\n        <amexio-column [size]=5>\n            <amexio-image style=\"display: flex; justify-content: center; \"\n                [path]=\"'https://image.ibb.co/kdy6Ev/logo.png'\">\n            </amexio-image>\n        </amexio-column>\n        <amexio-column [size]=7>\n            <iframe align=\"right\" width=\"100%\" height=\"300\"\n                src=\"https://www.youtube.com/embed/videoseries?list=PLi505KVOMPrGRUgJF4C3QoXbrhFGEOI4j&hl=en_US\"\n                frameborder=\"0\" allowfullscreen></iframe>\n        </amexio-column>\n\n    </amexio-row>\n\n    <amexio-row>\n        <amexio-column size=\"12\">\n            <div align=\"center\">\n                <amexio-label [blackLabel]=\"true\" size=\"'large-bold'\">\n                    <h1> Amexio Angular EXtensions v5.15 </h1>\n                </amexio-label>\n                <br>\n\n                <amexio-image [height]=\"50\" [width]=\"50\"\n                    path=\"https://travis-ci.org/meta-magic/amexio.github.io.svg?branch=v5.6\"></amexio-image>\n                <amexio-image [height]=\"50\" [width]=\"50\" path=\"https://badge.fury.io/js/amexio-ng-extensions.svg\">\n                </amexio-image>\n                <a href=\"https://badge.fury.io/js/amexio-ng-extensions\">\n                    <amexio-image [height]=\"50\" [width]=\"50\"\n                        path=\"https://img.shields.io/npm/dt/amexio-ng-extensions.svg\"></amexio-image>\n                </a>\n                <a href=\"https://npmjs.org/package/amexio-ng-extensions\">\n                    <amexio-image [height]=\"50\" [width]=\"50\"\n                        path=\"https://img.shields.io/npm/dw/amexio-ng-extensions.svg\" alt=\"Weekly Downloads\">\n                    </amexio-image>\n                </a>\n                <a href=\"https://npmjs.org/package/amexio-ng-extensions\">\n                    <amexio-image [height]=\"50\" [width]=\"50\"\n                        path=\"https://img.shields.io/npm/dm/amexio-ng-extensions.svg\" alt=\"Monthly Downloads\">\n                    </amexio-image>\n                </a>\n\n                <br>\n\n                <a class=\"badge-align\" target=\"_blank\"\n                    href=\"https://www.codacy.com/app/arafkarsh/amexio.github.io?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=meta-magic/amexio.github.io&amp;utm_campaign=Badge_Grade\">\n                    <amexio-image [height]=\"50\" [width]=\"50\"\n                        path=\"https://api.codacy.com/project/badge/Grade/06ad409b12ad4c1c81794c81889dc6ee\">\n                    </amexio-image>\n                </a>\n                <a target=\"_blank\" href=\"https://sonarcloud.io/dashboard?id=Amexio-API\">\n                    <amexio-image [height]=\"50\" [width]=\"50\"\n                        path=\"https://sonarcloud.io/api/project_badges/measure?project=Amexio-API&metric=alert_status\">\n                    </amexio-image>\n                </a>\n                <a target=\"_blank\" href=\"https://sonarcloud.io/dashboard?id=Amexio-API\">\n                    <amexio-image [height]=\"50\" [width]=\"50\"\n                        path=\"https://sonarcloud.io/api/project_badges/measure?project=Amexio-API&metric=reliability_rating\">\n                    </amexio-image>\n                </a>\n                <a target=\"_blank\" href=\"https://sonarcloud.io/dashboard?id=Amexio-API\">\n                    <amexio-image [height]=\"50\" [width]=\"50\"\n                        path=\"https://sonarcloud.io/api/project_badges/measure?project=Amexio-API&metric=security_rating\">\n                    </amexio-image>\n                </a>\n                <a target=\"_blank\" href=\"https://sonarcloud.io/dashboard?id=Amexio-API\">\n                    <amexio-image [height]=\"50\" [width]=\"50\"\n                        path=\"https://sonarcloud.io/api/project_badges/measure?project=Amexio-API&metric=sqale_rating\">\n                    </amexio-image>\n                </a>\n                <br>\n\n                <amexio-image [height]=\"50\" [width]=\"50\"\n                    path=\"https://sonarcloud.io/api/project_badges/measure?project=Amexio-API&metric=vulnerabilities\">\n                </amexio-image>\n                <amexio-image [height]=\"50\" [width]=\"50\"\n                    path=\"https://sonarcloud.io/api/project_badges/measure?project=Amexio-API&metric=code_smells\">\n                </amexio-image>\n                <amexio-image [height]=\"50\" [width]=\"50\"\n                    path=\"https://sonarcloud.io/api/project_badges/measure?project=Amexio-API&metric=sqale_index\">\n                </amexio-image>\n                <a href=\"https://sonarcloud.io/dashboard?id=Amexio-API\">\n                    <amexio-image [height]=\"50\" [width]=\"50\"\n                        path=\"https://sonarcloud.io/api/project_badges/measure?project=Amexio-API&metric=bugs\">\n                    </amexio-image>\n                </a>\n\n                <a href=\"https://sonarcloud.io/dashboard?id=Amexio-API\">\n                    <amexio-image [height]=\"50\" [width]=\"50\"\n                        path=\"https://sonarcloud.io/api/project_badges/measure?project=Amexio-API&metric=ncloc\">\n                    </amexio-image>\n                </a>\n\n                <br>\n\n                <a href=\"https://github.com/meta-magic/amexio.github.io\">\n                    <amexio-image [height]=\"50\" [width]=\"50\"\n                        path=\"https://img.shields.io/github/license/meta-magic/amexio.github.io.svg\"></amexio-image>\n                </a>\n                <a href=\"https://github.com/meta-magic/amexio.github.io\">\n                    <amexio-image [height]=\"50\" [width]=\"50\"\n                        path=\"https://img.shields.io/github/issues/meta-magic/amexio.github.io.svg\"></amexio-image>\n                </a>\n                <a href=\"https://github.com/meta-magic/amexio.github.io\">\n                    <amexio-image [height]=\"50\" [width]=\"50\"\n                        path=\"https://img.shields.io/github/languages/code-size/meta-magic/amexio.github.io.svg\">\n                    </amexio-image>\n                </a>\n                <a href=\"https://github.com/meta-magic/amexio.github.io\">\n                    <amexio-image [height]=\"50\" [width]=\"50\"\n                        path=\"https://img.shields.io/github/stars/meta-magic/amexio.github.io.svg\"></amexio-image>\n                </a>\n                <a href=\"https://gitter.im/amexio-github-io/\">\n                    <amexio-image [height]=\"50\" [width]=\"50\"\n                        path=\"https://img.shields.io/gitter/room/amexio-github-io/amexio-github-io.svg\"></amexio-image>\n                </a>\n\n            </div>\n            <hr>\n        </amexio-column>\n    </amexio-row>\n\n    <amexio-row>\n\n        <amexio-column [size]=3 [fit]='true'>\n            <amexio-card header=\"true\">\n                <amexio-header>\n                    Table Of Contents\n                </amexio-header>\n                <amexio-body style=\"display: flex; justify-content: center; flex-direction: column;\">\n                    <div style=\"height: 100%;\">\n                        <amexio-row>\n                            <amexio-column size=\"12\">\n                                <span style=\"cursor: pointer\">1. Install Amexio Components</span>\n                            </amexio-column>\n                        </amexio-row>\n                        <amexio-row>\n                            <amexio-column size=\"12\">\n                                <span style=\"cursor: pointer;\">2. Apply Material Design Themes</span>\n                            </amexio-column>\n                        </amexio-row>\n                        <amexio-row>\n                            <amexio-column size=\"12\">\n                                <span style=\"cursor: pointer;\">3. Dependencies</span>\n                            </amexio-column>\n                        </amexio-row>\n                        <amexio-row>\n                            <amexio-column size=\"12\">\n                                <span style=\"cursor: pointer;\">4. Install Amexio D3 Chart</span>\n                            </amexio-column>\n                        </amexio-row>\n                        <amexio-row>\n                            <amexio-column size=\"12\">\n                                <span style=\"cursor: pointer;\">5. Amexio License</span>\n                            </amexio-column>\n                        </amexio-row>\n                    </div>\n                </amexio-body>\n            </amexio-card>\n        </amexio-column>\n\n        <amexio-column [size]=\"3\" [fit]='true'>\n            <amexio-card [header]=\"true\" [footer]=\"true\" [footer-align]=\"'center'\">\n                <amexio-header>Source Code</amexio-header>\n                <amexio-body style=\"display: flex; justify-content: center; flex-direction: column;\">\n                    <amexio-image style=\"display: flex; justify-content: center; \"\n                        [path]=\"'assets/staticPageImages/github.png'\" [height]=\"'100px'\">\n                    </amexio-image>\n                    <amexio-label style=\"display: flex; justify-content: center; \">\n                        <br />Open Source\n                        <br />Apache 2 License\n                    </amexio-label>\n                </amexio-body>\n                <amexio-action>\n                    <amexio-button (onClick)=\"onLinkClick('https://github.com/meta-magic/amexio.github.io')\"\n                        [label]=\"'GitHub'\" [type]=\"'theme-color'\">\n                    </amexio-button>\n                </amexio-action>\n            </amexio-card>\n        </amexio-column>\n        <amexio-column [size]=\"3\" [fit]='true'>\n            <amexio-card [header]=\"true\" [footer]=\"true\" [footer-align]=\"'center'\">\n                <amexio-header>Amexio Plugin</amexio-header>\n                <amexio-body style=\"display: flex; justify-content: center; flex-direction: column;\">\n                    <amexio-image style=\"display: flex; justify-content: center; \"\n                        [path]=\"'assets/staticPageImages/amexio_plugin.jpeg'\" [height]=\"'100px'\">\n                    </amexio-image>\n                    <amexio-label style=\"display: flex; justify-content: center; \">\n                        Visual Studio Plugin\n                        <br />Increases Productivity By 50%\n                    </amexio-label>\n                </amexio-body>\n                <amexio-action>\n                    <amexio-button\n                        (onClick)=\"onLinkClick('https://marketplace.visualstudio.com/items?itemName=MetaMagic.amexio')\"\n                        [label]=\"'Get Plugin'\" [type]=\"'theme-color'\">\n                    </amexio-button>\n                </amexio-action>\n            </amexio-card>\n        </amexio-column>\n        <amexio-column [size]=\"3\" [fit]='true'>\n            <amexio-card [header]=\"true\" [footer]=\"true\" [footer-align]=\"'center'\">\n                <amexio-header>Amexio Canvas</amexio-header>\n                <amexio-body style=\"display: flex; justify-content: center; flex-direction: column;\">\n                    <amexio-image style=\"display: flex; justify-content: center; \" [height]=\"'102px'\"\n                        [path]=\"'assets/staticPageImages/amexio_canvas.jpeg'\">\n                    </amexio-image>\n                    <amexio-label style=\"display: flex; justify-content: center; \">\n                        Angular UI Automation Platform Increases Productivity by 3x\n                        <br />\n                    </amexio-label>\n                </amexio-body>\n                <amexio-action>\n                    <amexio-button (onClick)=\"onLinkClick('https://canvas.amexio.org/#/login')\"\n                        [label]=\"'Login to Canvas'\" [type]=\"'theme-color'\">\n                    </amexio-button>\n                </amexio-action>\n            </amexio-card>\n        </amexio-column>\n\n    </amexio-row>\n\n    <amexio-row>\n        <amexio-column size=\"12\">\n            <amexio-panel [header]=\"true\" [title]=\"'1. Install Amexio Components'\" [expanded]=\"true\">\n                <amexio-row>\n                    <amexio-column size=\"12\">\n                        <amexio-accordion>\n                            <amexio-accordion-tab header=\"Amexio 5.x - Angular 6\" active=\"true\">\n                                <amexio-tab-view>\n                                    <amexio-tab title=\"Installation\" active=\"true\">\n                                        <amexio-row>\n                                            <amexio-column size=\"12\">\n                                                <b>To install this Amexio 5.x follow the steps given below:</b>\n                                                <br>\n                                                <pre\n                                                    style=\"font-weight: bold;color: #c0392b\"><code>npm install amexio-ng-extensions@latest --save</code></pre>\n                                                Please make sure you have the latest version of\n                                                <span style=\"font-weight: bold;color:  #c0392b\">NodeJS & npm Angular CLI\n                                                </span> installed.\n                                                <br>\n                                                <b>NodeJS</b> version should be above\n                                                <span style=\"font-weight: bold;color:  #c0392b\">8.9.0</span>\n                                                <br>\n                                                <b>Angular CLI</b> version should be above\n                                                <span style=\"font-weight: bold;color:  #c0392b\">6.0.0</span>\n                                                <br>\n\n\n                                                <b>and then from your Angular AppModule:</b>\n                                            </amexio-column>\n                                        </amexio-row>\n                                        <br>\n                                        <amexio-row>\n                                            <amexio-column size=\"12\">\n                                                <div style=\"height: 400px\">\n                                                    <ng-container *ngIf=\"tsCode\">\n                                                        <prism-block [code]=\"tsCode\" [language]=\"'typescript'\">\n                                                        </prism-block>\n                                                    </ng-container>\n                                                </div>\n\n                                            </amexio-column>\n                                        </amexio-row>\n                                    </amexio-tab>\n                                    <amexio-tab title=\"Modules\">\n                                        <p>Amexio Library Consist of the following modules</p>\n                                        <ng-container *ngIf=\"modulesData\">\n                                            <amexio-datagrid title=\"\" [enable-column-filter]=\"false\"\n                                                [data]=\"modulesData\" [height]=\"300\" [enable-data-filter]=\"false\">\n                                                <amexio-data-table-column [width]=\"25\" [data-index]=\"'name'\"\n                                                    [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Module Name'\">\n                                                </amexio-data-table-column>\n                                                <amexio-data-table-column [width]=\"65\" [data-index]=\"'description'\"\n                                                    [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Description'\">\n                                                </amexio-data-table-column>\n                                            </amexio-datagrid>\n                                        </ng-container>\n                                        <br>\n\n                                    </amexio-tab>\n                                    <amexio-tab title=\"Services\">\n                                        <div style=\"height: 500px;overflow-x: auto;\">\n\n\n                                            <p>Amexio Provides the below services :</p>\n\n                                            <h3>IconService</h3>\n                                            <span style=\"font-weight: bolder\">Change all amexio icons from font-awesome\n                                                to material and vice versa in a single\n                                                line of code by injecting the\n                                                <code>IconLoaderService</code>\n                                            </span>\n                                            <ng-container *ngIf=\"iconCode\">\n                                                <prism-block [code]=\"iconCode\" [language]=\"'typescript'\"></prism-block>\n                                            </ng-container>\n                                            <br>\n                                            <h3>CommonDataService</h3>\n                                            <span style=\"font-weight: bolder\">By injecting\n                                                <code>CommonDataService</code> into to module, you could easly fetch\n                                                data from Rest</span>\n                                            <ng-container *ngIf=\"dataCode\">\n                                                <prism-block [code]=\"dataCode\" [language]=\"'typescript'\"></prism-block>\n                                            </ng-container>\n                                        </div>\n                                    </amexio-tab>\n                                </amexio-tab-view>\n                            </amexio-accordion-tab>\n                            <amexio-accordion-tab header=\"Amexio 4.x - Angular 5\">\n                                <amexio-tab-view>\n                                    <amexio-tab title=\"Installation\" active=\"true\">\n                                        <amexio-row>\n                                            <amexio-column size=\"12\">\n                                                <b>To install this Amexio 4.x follow the steps given below:</b>\n                                                <br>\n                                                <pre\n                                                    style=\"font-weight: bold;color: #c0392b\"><code>npm install amexio-ng-extensions@latest --save</code></pre>\n                                                Please make sure you have the latest version of\n                                                <span style=\"font-weight: bold;color:  #c0392b\">NodeJS & npm Angular CLI\n                                                </span> installed.\n                                                <b>and then from your Angular AppModule:</b>\n                                            </amexio-column>\n                                        </amexio-row>\n                                        <br>\n                                        <amexio-row>\n                                            <amexio-column size=\"12\">\n                                                <div style=\"height: 400px;width:80%\">\n                                                    <ng-container *ngIf=\"tsCode\">\n                                                        <prism-block [code]=\"tsCode\" [language]=\"'typescript'\">\n                                                        </prism-block>\n                                                    </ng-container>\n                                                </div>\n\n                                            </amexio-column>\n                                        </amexio-row>\n                                    </amexio-tab>\n                                    <amexio-tab title=\"Modules\">\n                                        <p>Amexio Library Consist of the following modules</p>\n                                        <ng-container *ngIf=\"modulesData\">\n                                            <amexio-datagrid title=\"\" [enable-column-filter]=\"false\"\n                                                [data]=\"modulesData\" [height]=\"300\" [enable-data-filter]=\"false\">\n                                                <amexio-data-table-column [width]=\"25\" [data-index]=\"'name'\"\n                                                    [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Module Name'\">\n                                                </amexio-data-table-column>\n                                                <amexio-data-table-column [width]=\"65\" [data-index]=\"'description'\"\n                                                    [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Description'\">\n                                                </amexio-data-table-column>\n                                            </amexio-datagrid>\n                                        </ng-container>\n                                        <br>\n\n                                    </amexio-tab>\n                                    <amexio-tab title=\"Services\">\n                                        <div style=\"height: 500px;overflow-x: auto;\">\n\n\n                                            <p>Amexio Provides the below services :</p>\n\n                                            <h3>IconService</h3>\n                                            <span style=\"font-weight: bolder\">Change all amexio icons from font-awesome\n                                                to material and vice versa in a single\n                                                line of code by injecting the\n                                                <code>IconLoaderService</code>\n                                            </span>\n                                            <ng-container *ngIf=\"iconCode\">\n                                                <prism-block [code]=\"iconCode\" [language]=\"'typescript'\"></prism-block>\n                                            </ng-container>\n                                            <br>\n                                            <h3>CommonDataService</h3>\n                                            <span style=\"font-weight: bolder\">By injecting\n                                                <code>CommonDataService</code> into to module, you could easly fetch\n                                                data from Rest</span>\n                                            <ng-container *ngIf=\"dataCode\">\n                                                <prism-block [code]=\"dataCode\" [language]=\"'typescript'\"></prism-block>\n                                            </ng-container>\n                                        </div>\n                                    </amexio-tab>\n                                </amexio-tab-view>\n                            </amexio-accordion-tab>\n                            <amexio-accordion-tab header=\"Amexio 3.2.x - Angular 5 and Bootstrap 4\" expanded=\"true\">\n                                <amexio-row>\n                                    <amexio-column size=\"12\">\n                                        <b>To install this Amexio 3.2.x - Angular 5 and Bootstrap 4 follow the steps\n                                            given below:</b>\n                                        <br>\n                                        <pre\n                                            style=\"font-weight: bold;color: #c0392b\"><code>npm install amexio-ng-extensions@3.2.1 --save</code></pre>\n                                        Please make sure you have the latest version of\n                                        <span style=\"font-weight: bold;color:  #c0392b\">NodeJS & npm Angular CLI</span>\n                                        installed.\n                                        <b>and then from your Angular AppModule:</b>\n                                    </amexio-column>\n                                </amexio-row>\n                                <br>\n                                <amexio-row>\n                                    <amexio-column size=\"12\">\n                                        <ng-container *ngIf=\"tsCodeV32\">\n                                            <prism-block [code]=\"tsCodeV32\" [language]=\"'typescript'\"></prism-block>\n                                        </ng-container>\n                                    </amexio-column>\n                                </amexio-row>\n\n                                <div align=\"center\">\n                                    <a href=\"https://api.amexio.org/api/v3/index.html#/home\" target=\"_blank\"\n                                        style=\"color: blueviolet\">Link for API for V3.2</a>\n                                </div>\n\n                            </amexio-accordion-tab>\n                            <amexio-accordion-tab header=\"Amexio 3.0.x - Angular 4 and Bootstrap 4\" expanded=\"true\">\n                                <amexio-row>\n                                    <amexio-column size=\"12\">\n                                        <b>To install this Amexio 3.0.x - Angular 4 and Bootstrap 4 follow the steps\n                                            given below:</b>\n                                        <br>\n                                        <pre\n                                            style=\"font-weight: bold;color: #c0392b\"><code>npm install amexio-ng-extensions@3.0.12 --save</code></pre>\n                                        Please make sure you have the latest version of\n                                        <span style=\"font-weight: bold;color:  #c0392b\">NodeJS & npm Angular CLI</span>\n                                        installed.\n                                        <b>and then from your Angular AppModule:</b>\n                                    </amexio-column>\n                                </amexio-row>\n\n                                <br>\n                                <amexio-row>\n                                    <amexio-column size=\"12\">\n                                        <ng-container *ngIf=\"tsCodeV32\">\n                                            <prism-block [code]=\"tsCodeV32\" [language]=\"'typescript'\"></prism-block>\n                                        </ng-container>\n                                    </amexio-column>\n                                </amexio-row>\n                                <!-- add dependent libraries -->\n                                <div align=\"center\">\n                                    <a href=\"../index.html#/home\" target=\"_blank\" style=\"color: blueviolet\">Link for API\n                                        for V3.0.x</a>\n                                </div>\n\n                            </amexio-accordion-tab>\n                        </amexio-accordion>\n                    </amexio-column>\n                </amexio-row>\n\n\n            </amexio-panel>\n        </amexio-column>\n    </amexio-row>\n\n\n    <amexio-row>\n        <amexio-column size=\"12\">\n            <amexio-panel [header]=\"true\" [title]=\"'2. Apply Material Design Themes'\" [expanded]=\"true\">\n                <p style=\"color: darkred\"> Themes are available from Version 4 </p>\n\n                <b>Angular 6 :</b> add\n                <code\n                    style=\"font-weight: bold;color:  #c0392b\">node_modules/amexio-ng-extensions/styles/css/at-md-blue.css</code>\n                in angular.json\n                <code style=\"font-weight: bolder\">styles</code> key.\n                <br>\n\n                <b>Below angular 6 version :</b> add\n                <code\n                    style=\"font-weight: bold;color:  #c0392b\">../node_modules/amexio-ng-extensions/styles/css/at-md-blue.css</code>\n                in angular.json\n                <code style=\"font-weight: bolder\">styles</code> key.\n                <br>\n\n                <ng-container *ngIf=\"styleCode\">\n                    <div style=\"max-height: 300px;overflow-y: scroll;\">\n                        <prism-block [code]=\"styleCode\" [language]=\"'json'\"></prism-block>\n                    </div>\n\n                </ng-container>\n\n                <p>Or refer the below table for other themes provided.</p>\n\n                <amexio-row>\n                    <amexio-column size=\"12\">\n                        <amexio-datagrid title=\"Amexio Material Themes\" [enable-column-filter]=\"false\" [height]=\"300\"\n                            [http-method]=\"'get'\" [http-url]=\"'assets/themejson/modules/modules.json'\"\n                            [data-reader]=\"'properties'\" [enable-data-filter]=\"false\">\n                            <amexio-data-table-column [width]=\"15\" [data-index]=\"'name'\" [data-type]=\"'string'\"\n                                [hidden]=\"false\" [text]=\"'Theme Name'\">\n                            </amexio-data-table-column>\n                            <amexio-data-table-column [width]=\"15\" [data-index]=\"'version'\" [data-type]=\"'string'\"\n                                [hidden]=\"false\" [text]=\"'Version'\">\n                            </amexio-data-table-column>\n                            <amexio-data-table-column [width]=\"60\" [data-index]=\"'description'\" [data-type]=\"'string'\"\n                                [hidden]=\"false\" [text]=\"'Path'\">\n                            </amexio-data-table-column>\n                        </amexio-datagrid>\n                    </amexio-column>\n                </amexio-row>\n\n                <amexio-row>\n                    <amexio-column size=\"12\">\n                        <amexio-datagrid title=\"Amexio Themes (Deprecated from version v5.12) \"\n                            [enable-column-filter]=\"false\" [height]=\"300\" [http-method]=\"'get'\"\n                            [http-url]=\"'assets/themejson/modules/amx_themes.json'\" [data-reader]=\"'properties'\"\n                            [enable-data-filter]=\"false\">\n                            <amexio-data-table-column [width]=\"15\" [data-index]=\"'name'\" [data-type]=\"'string'\"\n                                [hidden]=\"false\" [text]=\"'Theme Name'\">\n                            </amexio-data-table-column>\n                            <amexio-data-table-column [width]=\"65\" [data-index]=\"'description'\" [data-type]=\"'string'\"\n                                [hidden]=\"false\" [text]=\"'Path'\"></amexio-data-table-column>\n                        </amexio-datagrid>\n                    </amexio-column>\n                </amexio-row>\n            </amexio-panel>\n        </amexio-column>\n    </amexio-row>\n\n    <br>\n    <amexio-row>\n        <amexio-column size=\"12\">\n            <amexio-panel [header]=\"true\" [title]=\"'3. Dependencies'\" [expanded]=\"true\">\n                <p style=\"color: darkred\"></p>\n                Add font-awesome.scss in angular.json. Please refer to sample\n                <a href=\"https://raw.githubusercontent.com/meta-magic/amexio-ce-demo/v1.1/angular.json\">\n                    <font color=\"blue\"> angular.json </font>\n                </a>file.\n                <br>\n            </amexio-panel>\n        </amexio-column>\n    </amexio-row>\n    <br>\n    <amexio-row>\n        <amexio-column size=\"12\">\n            <amexio-panel [header]=\"true\" [title]=\"'4. Install Amexio Chart D3'\" [expanded]=\"true\">\n                <amexio-row>\n                    <amexio-column size=\"12\">\n                        <amexio-tab title=\"Installation\" active=\"true\">\n                            <amexio-row>\n                                <amexio-column size=\"12\">\n                                    <b>Prerequisites: </b>\n                                    <br>\n                                    <b>To install D3 Dependancy follow the step given below:</b>\n                                    <pre\n                                        style=\"font-weight: bold;color: #c0392b\"><code>npm install d3 --save</code></pre>\n                                    <b>To install this Amexio Chart D3 follow the steps given below:</b>\n                                    <br>\n                                    <pre\n                                        style=\"font-weight: bold;color: #c0392b\"><code>npm install amexio-chart-d3 --save</code></pre>\n                                    <b>Theme to Add : </b> add\n                                    <code\n                                        style=\"font-weight: bold;color:  #c0392b\">node_modules/amexio-chart-d3/lib/styles/amexio-chart-d3-components.css</code>\n                                    in angular.json\n                                    <code style=\"font-weight: bolder\">styles</code> key.\n                                    <br>\n                                    <br> Please make sure you have the latest version of\n                                    <span style=\"font-weight: bold;color:  #c0392b\">NodeJS & npm Angular CLI</span>\n                                    installed.\n                                    <br>\n                                    <b>NodeJS</b> version should be above\n                                    <span style=\"font-weight: bold;color:  #c0392b\">8.9.0</span>\n                                    <br>\n                                    <b>Angular CLI</b> version should be above\n                                    <span style=\"font-weight: bold;color: #c0392b\">6.0.0</span>\n                                    <br>\n                                    <b>and then from your Angular AppModule:</b>\n                                </amexio-column>\n                            </amexio-row>\n                            <br>\n                            <amexio-row>\n                                <amexio-column size=\"12\">\n                                    <div style=\"height: 400px\">\n                                        <ng-container *ngIf=\"tsCodeD3\">\n                                            <prism-block [code]=\"tsCodeD3\" [language]=\"'typescript'\"></prism-block>\n                                        </ng-container>\n                                    </div>\n                                </amexio-column>\n                            </amexio-row>\n                        </amexio-tab>\n                    </amexio-column>\n                </amexio-row>\n            </amexio-panel>\n        </amexio-column>\n    </amexio-row>\n\n\n    <amexio-row>\n        <amexio-column size=\"12\">\n            <amexio-panel [header]=\"true\" [title]=\"'5. Amexio License'\" [expanded]=\"true\">\n                <br>\n                <b>Amexio API License for Standard & Enterprise Edition</b>\n                <p>\n                    Amexio API is Free & Open Source & based on Apache 2 License. A Permissive License whose main\n                    condition require preservation\n                    of copyright and license notices. Contributors provide an express grant of patent rights. Licensed\n                    works,\n                    modification and larger works may be distributed under different terms and without source code.\n                </p>\n                <p>\n                    <a href=\"https://api.amexio.org/api/license.html\" style=\"color: blue\">Click here to read the Apache\n                        2 License. </a>\n                </p>\n            </amexio-panel>\n        </amexio-column>\n    </amexio-row>\n\n    <amexio-action-ce [align]=\"'space-between'\">\n        <amexio-button [label]=\"'Previous'\" [type]=\"'theme-color'\" (onClick)=\"previous()\">\n        </amexio-button>\n        <amexio-button [label]=\"'Next'\" [type]=\"'theme-color'\" [tooltip]=\"'toolTip'\" (onClick)=\"next()\">\n        </amexio-button>\n    </amexio-action-ce>"

/***/ }),

/***/ "./src/app/gettingstarted/gettingstarted.ts":
/*!**************************************************!*\
  !*** ./src/app/gettingstarted/gettingstarted.ts ***!
  \**************************************************/
/*! exports provided: GettingStatedDemo, GettingStatedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GettingStatedDemo", function() { return GettingStatedDemo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GettingStatedModule", function() { return GettingStatedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! amexio-ng-extensions */ "./node_modules/amexio-ng-extensions/amexio-ng-extensions.es5.js");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared.module */ "./src/app/shared.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by sagar on 17/01/17.
 */







var GettingStatedDemo = /** @class */ (function () {
    function GettingStatedDemo(http, route) {
        this.http = http;
        this.route = route;
        this.getHtmlAndTypeScriptCode();
    }
    GettingStatedDemo.prototype.previous = function () {
        this.route.navigate(['concept-page']);
    };
    GettingStatedDemo.prototype.next = function () {
        this.route.navigate(['amexio-colors']);
    };
    GettingStatedDemo.prototype.onLinkClick = function (link) {
        window.open(link, '_blank');
    };
    //TO LOAD HTML AND TYPESCRIPT CODE
    GettingStatedDemo.prototype.getHtmlAndTypeScriptCode = function () {
        var _this = this;
        var responseTs;
        //TS FILE 
        this.http.get('assets/themejson/gettingstated/gettingstated.text', { responseType: 'text' }).subscribe(function (data) {
            responseTs = data;
        }, function (error) {
        }, function () {
            _this.tsCode = responseTs;
        });
        this.http.get('assets/themejson/gettingstated/d3gettingstated.text', { responseType: 'text' }).subscribe(function (data) {
            responseTs = data;
        }, function (error) {
        }, function () {
            _this.tsCodeD3 = responseTs;
        });
        this.http.get('assets/themejson/gettingstated/icon.text', { responseType: 'text' }).subscribe(function (data) {
            _this.iconCode = data;
        });
        this.http.get('assets/themejson/gettingstated/data.text', { responseType: 'text' }).subscribe(function (data) {
            _this.dataCode = data;
        });
        this.http.get('assets/themejson/gettingstated/style.text', { responseType: 'text' }).subscribe(function (data) {
            _this.styleCode = data;
        });
        this.http.get('assets/themejson/modules.json').subscribe(function (data) {
            var response = data;
            _this.modulesData = response.properties.sort(function (a, b) {
                if (a.name < b.name)
                    return -1;
                if (a.name > b.name)
                    return 1;
                return 0;
            });
        });
        this.http.get('assets/themejson/gettingstated/gettingstatedv32.text', { responseType: 'text' }).subscribe(function (data) {
            _this.tsCodeV32 = data;
        });
        this.http.get('assets/themejson/gettingstated/gettingstatedv1x.text', { responseType: 'text' }).subscribe(function (data) {
            _this.tsCodeV1x = data;
        });
    };
    GettingStatedDemo = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'getting-started',
            template: __webpack_require__(/*! ./gettingstarted.html */ "./src/app/gettingstarted/gettingstarted.html")
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], GettingStatedDemo);
    return GettingStatedDemo;
}());

var GettingStatedModule = /** @class */ (function () {
    function GettingStatedModule() {
    }
    GettingStatedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [GettingStatedDemo],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_4__["AmexioWidgetModule"],
                amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_4__["AmexioEnterpriseModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([
                    { path: '', component: GettingStatedDemo, pathMatch: 'full' }
                ])
            ],
            providers: []
        })
    ], GettingStatedModule);
    return GettingStatedModule;
}());



/***/ }),

/***/ "./src/app/landing-page/landing-page.component.css":
/*!*********************************************************!*\
  !*** ./src/app/landing-page/landing-page.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbardemo .navbar-container {\n    position: relative !important;\n    width: 90%;\n  }\n\n  .bgCss834backgound {\n    height: 50% !important;\n  }\n\n  /* .navbardemo{\n    .topnav{\n      position: unset;\n      position: static !important;\n    }\n  } */ \n  "

/***/ }),

/***/ "./src/app/landing-page/landing-page.component.html":
/*!**********************************************************!*\
  !*** ./src/app/landing-page/landing-page.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<amexio-viewport [type]=\"'2'\" [scrollable]=\"true\">\n  <!-- image 1 -->\n  <amexio-viewport-content class=\"view-port-bg-image\" [scrollable]=\"false\">\n\n    <amexio-viewport-background>\n      <amexio-image [path]=\"'assets/images/Amexio-Showcase-EE.jpg'\"></amexio-image>\n    </amexio-viewport-background>\n\n    <amexio-viewport-content-body>\n\n    \n      <br>\n      <br>\n      <amexio-layout-grid style=\"padding: 0px 10px 0px 10px;\" [layout]=\"'page1'\">\n        <amexio-grid-item [name]=\"'gridDemo1'\">\n\n          <amexio-menu-ce [font-color]=\"'white'\" [menu-positioning]=\"'left'\" [font]=\"'sans-serif'\" [animation-type]=\"4\" [data]=\"tempData\"\n            [size]=\"50\" (onClick)=\"onMenuClick($event)\">\n          </amexio-menu-ce>\n        </amexio-grid-item>\n\n        <amexio-grid-item [name]=\"'gridLabel'\">\n          <amexio-label size=\"large-bold\" [font-color]=\"'white'\">\n            Enterprise Edition Demos\n          </amexio-label>\n        </amexio-grid-item>\n\n        <amexio-grid-item [name]=\"'gridDemo2'\">\n          <amexio-card-ce [align]=\"'start'\" [color]=\"'white'\" [background]=\"'rgba(228, 175, 104,0.3)'\" [color]=\"'white'\"\n            [background]=\"'rgba(228,175,104,0.3)'\">\n            <amexio-header-ce amexioColorPalette [gradient]=\"true\" [color-palette]=\"'random'\" [height]=\"'35px'\"\n              align=\"start\">\n              <amexio-label [size]=\"'medium-bold'\">\n                Demo 1\n              </amexio-label>\n            </amexio-header-ce>\n            <amexio-body-ce>\n              <amexio-image class=\"homepage-cursor\" [path]=\"'assets/images/homepage_demo1.jpg'\">\n              </amexio-image>\n              <p>\n                Home Page Layouts provides built-in layouts to have a quick start on Home Pages for your enterprise\n                Apps.!\n              </p>\n            </amexio-body-ce>\n            <amexio-action-ce align=\"center\" [border-top]=\"true\">\n              <amexio-button [label]=\"'Demo'\" (onClick)=\"onDemoFirstClick()\" [type]=\"'theme-color'\" [tooltip]=\"'Demo'\">\n              </amexio-button>\n            </amexio-action-ce>\n          </amexio-card-ce>\n        </amexio-grid-item>\n\n\n        <amexio-grid-item [name]=\"'gridDemo3'\">\n          <amexio-card-ce [align]=\"'center'\" [color]=\"'white'\" [background]=\"'rgba(228,175,104,0.3)'\">\n            <amexio-header-ce amexioColorPalette [gradient]=\"true\" [color-palette]=\"'random'\" [height]=\"'35px'\"\n              align=\"start\">\n              <amexio-label [size]=\"'medium-bold'\">\n                Demo 2\n              </amexio-label>\n\n            </amexio-header-ce>\n            <amexio-body-ce>\n              <amexio-image class=\"homepage-cursor\" [path]=\"'assets/images/homepage_demo2.jpg'\">\n              </amexio-image>\n              <p>\n                Home Page Layouts provides built-in layouts to have a quick start on Home Pages for your enterprise\n                Apps.\n              </p>\n\n            </amexio-body-ce>\n            <amexio-action-ce align=\"center\" [border-top]=\"true\">\n              <amexio-button [label]=\"'Demo'\" (onClick)=\"onDemoSecondClick()\" [type]=\"'theme-color'\" [tooltip]=\"'Demo'\">\n              </amexio-button>\n            </amexio-action-ce>\n\n          </amexio-card-ce>\n        </amexio-grid-item>\n      </amexio-layout-grid>\n\n\n\n    </amexio-viewport-content-body>\n  </amexio-viewport-content>\n\n  <!-- image 2 -->\n  <amexio-viewport-content>\n    <amexio-viewport-background>\n      <amexio-image [path]=\"'assets/images/vp1.jpg'\"></amexio-image>\n    </amexio-viewport-background>\n\n    <amexio-viewport-content-body [scrollable]=\"false\">\n      <br>\n      <br>\n      <amexio-layout-grid style=\"padding: 0px 10px 0px 10px;\" [layout]=\"'page2'\">\n        <amexio-grid-item [name]=\"'gridpage2title'\">\n          <amexio-label size=\"large-bold\" [font-color]=\"'white'\">\n            Creative Viewport Demos\n          </amexio-label>\n        </amexio-grid-item>\n\n        <amexio-grid-item [name]=\"'gridpage2view1'\">\n          <amexio-card-ce [align]=\"'start'\" [color]=\"'white'\" [background]=\"'rgba(132,99,102,0.3)'\">\n            <amexio-header-ce amexioColorPalette [gradient]=\"true\" [color-palette]=\"'random'\" [height]=\"'35px'\"\n              align=\"start\">\n              <amexio-label [size]=\"'medium-bold'\">\n                Viewort Demo 1\n              </amexio-label>\n            </amexio-header-ce>\n            <amexio-body-ce>\n              <amexio-image class=\"homepage-cursor\" [path]=\"'assets/viewport/demo1.jpg'\">\n              </amexio-image>\n              <p>Life is better when you Dance Because Dance is the hidden language of the soul.\n              </p>\n            </amexio-body-ce>\n            <amexio-action-ce align=\"center\" [border-top]=\"true\">\n              <amexio-button [label]=\"'Demo'\" (onClick)=\"onViewportDemoFirstClick()\" [type]=\"'theme-color'\"\n                [tooltip]=\"'Demo'\">\n              </amexio-button>\n            </amexio-action-ce>\n          </amexio-card-ce>\n        </amexio-grid-item>\n\n        <amexio-grid-item [name]=\"'gridpage2view2'\">\n          <amexio-card-ce [align]=\"'start'\" [color]=\"'white'\" [background]=\"'rgba(132,99,102,0.3)'\">\n            <amexio-header-ce amexioColorPalette [gradient]=\"true\" [color-palette]=\"'vibrant'\" [height]=\"'35px'\"\n              align=\"start\">\n              <amexio-label [size]=\"'medium-bold'\">\n                Viewport Demo 2\n              </amexio-label>\n            </amexio-header-ce>\n            <amexio-body-ce>\n              <amexio-image class=\"homepage-cursor\" [path]=\"'assets/viewport/demo2.jpg'\">\n              </amexio-image>\n              <p>\n                Offers A Unique Selection Of Stylish, Contemporary, And Chic Furniture Online. High Quality Furniture.\n\n              </p>\n\n            </amexio-body-ce>\n            <amexio-action-ce align=\"center\" [border-top]=\"true\">\n              <amexio-button [label]=\"'Demo'\" (onClick)=\"onViewportDemoSecondClick()\" [type]=\"'theme-color'\"\n                [tooltip]=\"'Demo'\"> </amexio-button>\n            </amexio-action-ce>\n\n          </amexio-card-ce>\n        </amexio-grid-item>\n\n        <amexio-grid-item [name]=\"'gridpage2view3'\">\n          <amexio-card-ce [align]=\"'start'\" [color]=\"'white'\" [background]=\"'rgba(132,99,102,0.3)'\">\n            <amexio-header-ce amexioColorPalette [gradient]=\"true\" [color-palette]=\"'random'\" [height]=\"'35px'\"\n              align=\"start\">\n              <amexio-label [size]=\"'medium-bold'\">\n                Viewport Demo 3\n              </amexio-label>\n            </amexio-header-ce>\n            <amexio-body-ce>\n              <amexio-image class=\"homepage-cursor\" [path]=\"'assets/viewport/demo3.jpg'\">\n              </amexio-image>\n              <p>\n                By the deep sea, or the jungle, and music in its roar;\n                I love not Man the less, but Nature more.\n              </p>\n\n            </amexio-body-ce>\n            <amexio-action-ce align=\"center\" [border-top]=\"true\">\n              <amexio-button [label]=\"'Demo'\" (onClick)=\"onViewportDemoThreeClick()\" [type]=\"'theme-color'\"\n                [tooltip]=\"'Demo'\"> </amexio-button>\n            </amexio-action-ce>\n\n          </amexio-card-ce>\n        </amexio-grid-item>\n      </amexio-layout-grid>\n\n\n\n    </amexio-viewport-content-body>\n  </amexio-viewport-content>\n  <!-- image  3 new added -->\n  <amexio-viewport-content [scrollable]=\"false\">\n\n    <amexio-viewport-background>\n      <amexio-image [path]=\"'assets/images/can.jpg'\"></amexio-image>\n    </amexio-viewport-background>\n\n    <amexio-viewport-content-body>\n      <!--  Creative Menu Demo -->\n      <br>\n      <amexio-layout-grid style=\"padding: 0px 10px 0px 10px;\" [layout]=\"'page3'\">\n        <amexio-grid-item [name]=\"'gridpage3title'\">\n          <amexio-label size=\"large-bold\" [font-color]=\"'white'\">\n            Creative Menu Demos\n          </amexio-label>\n        </amexio-grid-item>\n\n        <amexio-grid-item [name]=\"'gridpage3menu1'\">\n          <amexio-card-ce [align]=\"'start'\" [color]=\"'white'\" [background]=\"'rgba(64,28,6,0.6)'\">\n            <amexio-header-ce amexioColorPalette [gradient]=\"true\" [color-palette]=\"'classic'\" [height]=\"'35px'\"\n              align=\"start\">\n              <amexio-label [size]=\"'medium-bold'\">\n                Menu Demo 1\n              </amexio-label>\n            </amexio-header-ce>\n            <amexio-body-ce>\n              <amexio-image class=\"homepage-cursor\" [path]=\"'assets/viewport/menu1.jpg'\">\n              </amexio-image>\n              <p>\n                Creative Menu Demo with center alignment and animation effect.\n              </p>\n\n            </amexio-body-ce>\n            <amexio-action-ce align=\"center\" [border-top]=\"true\">\n              <amexio-button [label]=\"'Demo'\" (onClick)=\"onMenuDemoFirstClick()\" [type]=\"'theme-color'\"\n                [tooltip]=\"'Demo'\"> </amexio-button>\n            </amexio-action-ce>\n\n          </amexio-card-ce>\n        </amexio-grid-item>\n\n\n        <amexio-grid-item [name]=\"'gridpage3menu2'\">\n          <amexio-card-ce [align]=\"'start'\" [color]=\"'white'\" [background]=\"'rgba(64,28,6,0.6)'\">\n            <amexio-header-ce amexioColorPalette [gradient]=\"true\" [color-palette]=\"'random'\" [height]=\"'35px'\"\n              align=\"start\">\n              <amexio-label [size]=\"'medium-bold'\">\n                Menu Demo 2\n              </amexio-label>\n            </amexio-header-ce>\n            <amexio-body-ce>\n              <amexio-image class=\"homepage-cursor\" [path]=\"'assets/viewport/menu2.jpg'\">\n              </amexio-image>\n\n              <p>\n                Creative Menu Demo with Right side alignment and animation effect.\n              </p>\n            </amexio-body-ce>\n            <amexio-action-ce align=\"center\" [border-top]=\"true\">\n              <amexio-button [label]=\"'Demo'\" (onClick)=\"onMenuDemoSecondClick()\" [type]=\"'theme-color'\"\n                [tooltip]=\"'Demo'\"> </amexio-button>\n            </amexio-action-ce>\n\n          </amexio-card-ce>\n        </amexio-grid-item>\n\n\n        <amexio-grid-item [name]=\"'gridpage3menu3'\">\n          <amexio-card-ce [align]=\"'start'\" [color]=\"'white'\" [background]=\"'rgba(64,28,6,0.6)'\">\n            <amexio-header-ce amexioColorPalette [gradient]=\"true\" [color-palette]=\"'vibrant'\" [height]=\"'35px'\"\n              align=\"start\">\n              <amexio-label [size]=\"'medium-bold'\">\n                Menu Demo 3\n              </amexio-label>\n            </amexio-header-ce>\n            <amexio-body-ce>\n              <amexio-image class=\"homepage-cursor\" [path]=\"'assets/viewport/menu3.jpg'\">\n              </amexio-image>\n              <p>\n                Creative Menu Demo with left side alignment and animation effect.\n\n              </p>\n            </amexio-body-ce>\n            <amexio-action-ce align=\"center\" [border-top]=\"true\">\n              <amexio-button [label]=\"'Demo'\" (onClick)=\"onMenuDemoThreeClick()\" [type]=\"'theme-color'\"\n                [tooltip]=\"'Demo'\"> </amexio-button>\n            </amexio-action-ce>\n\n          </amexio-card-ce>\n        </amexio-grid-item>\n      </amexio-layout-grid>\n\n\n    </amexio-viewport-content-body>\n  </amexio-viewport-content>\n\n  <!-- image 4 -->\n  <amexio-viewport-content [scrollable]=\"false\">\n\n    <amexio-viewport-background>\n      <amexio-image [path]=\"'assets/images/techm.jpg'\"></amexio-image>\n    </amexio-viewport-background>\n\n    <amexio-viewport-content-body>\n      <br>\n      <amexio-layout-grid style=\"padding: 0px 10px 0px 10px;\" [layout]=\"'page4'\">\n        <amexio-grid-item [name]=\"'gridpage4demo1'\">\n\n\n          <amexio-card-ce [color]=\"'white'\" [background]=\"'rgba(19,72,80,0.7)'\">\n            <amexio-header-ce amexioColorPalette [gradient]=\"true\" [color-palette]=\"'classic'\" [height]=\"'35px'\"\n              [border-bottom]=\"true\" [align]=\"'start'\" [color]=\"'white'\" [background]=\"'rgba(218,105,114,0.3)'\">\n              <amexio-label [size]=\"'medium-bold'\">\n                TecMFlix\n              </amexio-label>\n            </amexio-header-ce>\n\n\n            <amexio-body-ce>\n              <amexio-image class=\"homepage-cursor\" [path]=\"'assets/images/tech.jpg'\">\n              </amexio-image>\n              <p>\n                Netflix chronicles the rise of the cocaine trade in Colombia and the gripping real-life stories of drug\n                kingpins of the late 80s in this raw.\n              </p>\n\n            </amexio-body-ce>\n            <amexio-action-ce align=\"center\" [border-top]=\"true\">\n              <amexio-button [label]=\"'Demo'\" (onClick)=\"onDemoTechMClick()\" [type]=\"'theme-color'\" [tooltip]=\"'BUY'\">\n              </amexio-button>\n            </amexio-action-ce>\n          </amexio-card-ce>\n        </amexio-grid-item>\n\n        <amexio-grid-item [name]=\"'gridpage4demo2'\">\n          <amexio-card-ce [color]=\"'white'\" [background]=\"'rgba(19,72,80,0.7)'\">\n            <amexio-header-ce amexioColorPalette [gradient]=\"true\" [color-palette]=\"'random'\" [height]=\"'35px'\"\n              [border-bottom]=\"true\" [align]=\"'start'\" [color]=\"'white'\" [background]=\"'rgba(218,105,114,0.3)'\">\n              <amexio-label [size]=\"'medium-bold'\">\n                Virtual Scroller Demo\n              </amexio-label>\n            </amexio-header-ce>\n            <amexio-body-ce>\n              <amexio-image class=\"homepage-cursor\" [path]=\"'assets/images/virtualDemo.jpg'\">\n              </amexio-image>\n              <p>\n                Amexio virtual scroller displays a small subset of records just enough to fill the viewport and uses the\n                same DOM elements as the user scrolls.\n              </p>\n\n            </amexio-body-ce>\n            <amexio-action-ce align=\"center\" [border-top]=\"true\">\n              <amexio-button [label]=\"'Demo'\" (onClick)=\"onVirtualScrollDemoClick()\" [type]=\"'theme-color'\"\n                [tooltip]=\"'BUY'\">\n              </amexio-button>\n            </amexio-action-ce>\n          </amexio-card-ce>\n        </amexio-grid-item>\n      </amexio-layout-grid>\n\n\n\n    </amexio-viewport-content-body>\n\n  </amexio-viewport-content>\n  <!-- image 5 -->\n\n  <amexio-viewport-content [scrollable]=\"false\">\n\n    <amexio-viewport-background>\n      <amexio-image [path]=\"'assets/images/se9.jpg'\"></amexio-image>\n    </amexio-viewport-background>\n\n    <amexio-viewport-content-body>\n      <br>\n      <br>\n      <!-- gridpage5app1 -->\n\n      <amexio-layout-grid style=\"padding: 0px 10px 0px 10px;\" [layout]=\"'page5'\">\n        <amexio-grid-item [name]=\"'gridpage5title'\">\n          <amexio-label size=\"large-bold\" [font-color]=\"'black'\">\n            Standard Edition Demos\n          </amexio-label>\n        </amexio-grid-item>\n        <amexio-grid-item [name]=\"'gridpage5app1'\">\n          <amexio-card-ce [align]=\"'start'\" [color]=\"'white'\" [background]=\"'rgba(10,140,140,0.9)'\">\n            <amexio-header-ce amexioColorPalette [gradient]=\"true\" [color-palette]=\"'random'\" [height]=\"'35px'\"\n              align=\"start\">\n              <amexio-label [size]=\"'medium-bold'\">\n                U.S. Election App\n              </amexio-label>\n            </amexio-header-ce>\n            <amexio-body-ce>\n              <amexio-image class=\"homepage-cursor\" [path]=\"'assets/viewport/election.jpg'\">\n              </amexio-image>\n\n              <p>\n                U.S election Demo Application using multiple component of Amexio and Amexio tags.\n              </p>\n            </amexio-body-ce>\n            <amexio-action-ce align=\"center\" [border-top]=\"true\">\n              <amexio-button [label]=\"'Demo'\" (onClick)=\"onElectionDemoClick()\" [type]=\"'theme-color'\"\n                [tooltip]=\"'Demo'\"> </amexio-button>\n            </amexio-action-ce>\n          </amexio-card-ce>\n        </amexio-grid-item>\n        <amexio-grid-item [name]=\"'gridpage5app2'\">\n          <amexio-card-ce [align]=\"'center'\" [color]=\"'white'\" [background]=\"'rgba(10,140,140,0.9)'\">\n            <amexio-header-ce amexioColorPalette [gradient]=\"true\" [color-palette]=\"'random'\" [color]=\"'white'\"\n              [color]=\"'black'\" [height]=\"'35px'\" align=\"start\">\n              <amexio-label [size]=\"'medium-bold'\">\n                Shopping App\n              </amexio-label>\n            </amexio-header-ce>\n            <amexio-body-ce>\n              <amexio-image class=\"homepage-cursor\" [path]=\"'assets/images/shopping.jpg'\">\n              </amexio-image>\n              <p>\n                Shopping Demo Application using multiple component of Amexio and Amexio tags.\n\n              </p>\n            </amexio-body-ce>\n            <amexio-action-ce align=\"center\" [border-top]=\"true\">\n              <amexio-button [label]=\"'Demo'\" (onClick)=\"onShoppingDemoClick()\" [type]=\"'theme-color'\"\n                [tooltip]=\"'Demo'\"> </amexio-button>\n            </amexio-action-ce>\n\n          </amexio-card-ce>\n        </amexio-grid-item>\n\n      </amexio-layout-grid>\n\n\n    </amexio-viewport-content-body>\n  </amexio-viewport-content>\n\n  <!--  image 6 -->\n  <amexio-viewport-content [scrollable]=\"false\">\n\n    <amexio-viewport-background>\n      <amexio-image [path]=\"'assets/images/se3.jpg'\"></amexio-image>\n    </amexio-viewport-background>\n\n    <amexio-viewport-content-body>\n      <br>\n      <br>\n      <!-- gridpage5app1 -->\n\n      <amexio-layout-grid style=\"padding: 0px 10px 0px 10px;\" [layout]=\"'page6'\">\n\n        <amexio-grid-item [name]=\"'gridpage6app1'\">\n          <amexio-card-ce [align]=\"'center'\" [color]=\"'white'\" [background]=\"'rgba(40,49,58,0.9)'\">\n            <amexio-header-ce [height]=\"'35px'\" amexioColorPalette [gradient]=\"true\"\n              [color-palette]=\"'amexio-theme-color4  '\" align=\"start\">\n              <amexio-label [size]=\"'medium-bold'\">\n                Insurance App\n              </amexio-label>\n            </amexio-header-ce>\n            <amexio-body-ce>\n\n              <amexio-image class=\"homepage-cursor\" [path]=\"'assets/images/policy.jpg'\">\n              </amexio-image>\n              <p>\n                Digital policy Demo Application using multiple component of Amexio and Amexio tags.\n              </p>\n\n            </amexio-body-ce>\n            <amexio-action-ce align=\"center\" [border-top]=\"true\">\n              <amexio-button [label]=\"'Demo'\" (onClick)=\"onPolicyDemoClick()\" [type]=\"'theme-color'\" [tooltip]=\"'Demo'\">\n              </amexio-button>\n            </amexio-action-ce>\n\n          </amexio-card-ce>\n        </amexio-grid-item>\n        <amexio-grid-item [name]=\"'gridpage6app2'\">\n          <amexio-card-ce [align]=\"'center'\" [color]=\"'white'\" [background]=\"'rgba(40,49,58,0.9)'\">\n            <amexio-header-ce [height]=\"'35px'\" amexioColorPalette [gradient]=\"true\" [color-palette]=\"'random'\"\n              align=\"start\">\n              <amexio-label [size]=\"'medium-bold'\">\n                Theme App\n              </amexio-label>\n            </amexio-header-ce>\n            <amexio-body-ce>\n\n              <amexio-image class=\"homepage-cursor\" [path]=\"'assets/viewport/theme.jpg'\">\n              </amexio-image>\n              <p>\n                Theme App Demo Application using multiple component of Amexio and Amexio tags.\n              </p>\n\n            </amexio-body-ce>\n            <amexio-action-ce align=\"center\" [border-top]=\"true\">\n              <amexio-button [label]=\"'Demo'\" (onClick)=\"onAmexioDemoClick()\" [type]=\"'theme-color'\" [tooltip]=\"'Demo'\">\n              </amexio-button>\n            </amexio-action-ce>\n\n          </amexio-card-ce>\n        </amexio-grid-item>\n      </amexio-layout-grid>\n\n\n    </amexio-viewport-content-body>\n  </amexio-viewport-content>\n\n</amexio-viewport>\n"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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
    function LandingPageComponent(router, http, _gridlayoutService) {
        this.router = router;
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
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__["AmexioGridLayoutService"]])
    ], LandingPageComponent);
    return LandingPageComponent;
}());



/***/ }),

/***/ "./src/app/service/http.service.ts":
/*!*****************************************!*\
  !*** ./src/app/service/http.service.ts ***!
  \*****************************************/
/*! exports provided: HTTPService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTTPService", function() { return HTTPService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HTTPService = /** @class */ (function () {
    function HTTPService(http) {
        this.http = http;
    }
    HTTPService.prototype.fetch = function (url) {
        return this.http.get(url);
    };
    HTTPService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], HTTPService);
    return HTTPService;
}());



/***/ }),

/***/ "./src/app/shared.module.ts":
/*!**********************************!*\
  !*** ./src/app/shared.module.ts ***!
  \**********************************/
/*! exports provided: PrismComponent, SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrismComponent", function() { return PrismComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var prismjs_prism__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prismjs/prism */ "./node_modules/prismjs/prism.js");
/* harmony import */ var prismjs_prism__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prismjs_prism__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prismjs_components_prism_typescript__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prismjs/components/prism-typescript */ "./node_modules/prismjs/components/prism-typescript.js");
/* harmony import */ var prismjs_components_prism_typescript__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_typescript__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! amexio-ng-extensions */ "./node_modules/amexio-ng-extensions/amexio-ng-extensions.es5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/* Import prism core */

/* Import the language you need to highlight */

// import { AmexioApiReferenceComponent } from 'amexio-ng-extensions';
// import { AmexioStructureComponent } from "./amexioStructureDemo/amexiostructure/amexiostructure.component";
// import { AmexioApiDemoComponent } from "./amexioStructureDemo/apiDemo/amexioapidemo.component";
// import { AmexioApiInfoComponent } from "./amexioStructureDemo/apiInfo/amexioapiinfo.component";
// import { AmexioApiSourceCodeComponent } from "./amexioStructureDemo/apiSourceCode/apisourcecode.component";
// import { AmexioApiLiveDemoComponent } from "./amexioStructureDemo/apiLiveDemo/apilivedemo.component";
// import { AmexioApiAccessibleComponent } from "./amexioStructureDemo/apiAccessbility/amexioapiaccessible.component"

// import { RestCallService } from "amexio-ng-extensions";

// import { CalendarDemoComponent1 } from './enterprise/calendar-demo-1/calendar.demo.component';
// import { floatingPanelCalendarComponent } from './enterprise/floating-panel-calendar/floatingpanelcalendar.component';
var PrismComponent = /** @class */ (function () {
    function PrismComponent(_renderer, _el) {
        this._renderer = _renderer;
        this._el = _el;
        this.nativeElement = _el.nativeElement;
    }
    PrismComponent.prototype.ngAfterViewInit = function () {
        this.preNode = this._renderer.createElement('pre');
        this.codeNode = this._renderer.createElement('code');
        this._renderer.addClass(this.codeNode, 'language-' + this.language);
        this._renderer.appendChild(this.nativeElement, this.preNode);
        this._renderer.appendChild(this.preNode, this.codeNode);
        this.codeNode.textContent = this.code;
        Prism.highlightElement(this.codeNode);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], PrismComponent.prototype, "code", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], PrismComponent.prototype, "language", void 0);
    PrismComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'prism-block',
            template: "",
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], PrismComponent);
    return PrismComponent;
}());

var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule_1 = SharedModule;
    SharedModule.forRoot = function () {
        return {
            ngModule: SharedModule_1,
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["TitleCasePipe"]],
        };
    };
    SharedModule = SharedModule_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_4__["AmexioWidgetModule"], amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_4__["AmexioEnterpriseModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"]],
            exports: [PrismComponent,
            ],
            declarations: [PrismComponent,
            ],
        })
    ], SharedModule);
    return SharedModule;
    var SharedModule_1;
}());



/***/ }),

/***/ "./src/app/theme-service.service.ts":
/*!******************************************!*\
  !*** ./src/app/theme-service.service.ts ***!
  \******************************************/
/*! exports provided: ThemeServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeServiceService", function() { return ThemeServiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
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



var ThemeServiceService = /** @class */ (function () {
    function ThemeServiceService(_http) {
        this._http = _http;
        this.themeColorData = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
    }
    ThemeServiceService.prototype.loadThemes = function (url) {
        return this._http.get(url);
    };
    ThemeServiceService.prototype.switchTheme = function (theme) {
        var response;
        this._http.get('https://api.amexio.org/api/mda/' + theme.themeJSONFile).subscribe(function (data) {
            response = data;
        }, function (error) {
        }, function () {
            var themeColor = response.themeColor;
            var appColor = response.appColor;
            var compColor = response.compColor;
            themeColor.forEach(function (style) {
                var value = style.value.replace(';', '');
                document.documentElement.style.setProperty(style.key, value);
            });
            appColor.forEach(function (style) {
                var value = style.value.replace(';', '');
                document.documentElement.style.setProperty(style.key, value);
            });
            compColor.forEach(function (style) {
                document.documentElement.style.setProperty(style.key, style.value);
            });
        });
        var currentTheme = document.head.querySelectorAll("link[rel=\"stylesheet\"]");
    };
    ThemeServiceService.prototype.getColorCode = function (themeData) {
        this.themeColorData.next(themeData.themeColor);
    };
    ThemeServiceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ThemeServiceService);
    return ThemeServiceService;
}());



/***/ }),

/***/ "./src/app/theme/theme.component.html":
/*!********************************************!*\
  !*** ./src/app/theme/theme.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div style=\" padding: 0% 1% 0% 1%;\">\n\n<amexio-image [path]=\"'assets/staticPageImages/amexio_colors.jpeg'\" [tooltip]=\"'Image'\"></amexio-image>\n\n<amexio-tab-view [closable]=\"false\">\n    <amexio-tab title=\"Material Design\" [active]=\"true\">\n        <amexio-theme-switcher [closeable]=\"false\" [relative]=\"true\" [mda]=\"true\" ></amexio-theme-switcher>\n    </amexio-tab>\n    <amexio-tab title=\"Amexio\">\n        <amexio-theme-switcher  [closeable]=\"false\" [relative]=\"true\"  [mda]=\"false\" [test-mode]=\"false\" [data]=\"amexioThemeData\"></amexio-theme-switcher>\n    </amexio-tab>\n    <amexio-tab title=\"Colors\">\n        Eventually we can apply this attribute [amexio-color] to all components, currently we can apply to progress bar\n        and datapoints.\n        To know more refer the API reference section\n        <amexio-datagrid title=\"Amexio Colors\" [enable-column-filter]=\"false\" [http-method]=\"'get'\"\n       \n        [http-url]=\"'assets/themejson/amexio-colours.json'\" [data-reader]=\"'colors'\" [enable-data-filter]=\"false\">\n            <amexio-data-table-column [width]=\"15\" [data-index]=\"'name'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                [text]=\"'Name'\"></amexio-data-table-column>\n            <amexio-data-table-column [width]=\"15\" [data-index]=\"'css'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                [text]=\"'CSS Class Name'\">\n                <ng-template #amexioBodyTmpl let-column let-row=\"row\">\n                    <span>\n                        [amexio-color] = '{{row.css}}' </span>\n                </ng-template>\n            </amexio-data-table-column>\n            <amexio-data-table-column [width]=\"15\" [data-index]=\"'BG'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                [text]=\"'Color'\">\n                <ng-template #amexioBodyTmpl let-column let-row=\"row\">\n                    <span>\n                        <div [ngStyle]=\"{'background-color':row.BG, 'color' : row.font}\">\n                            This is amexio color {{ row.name }} background <b> {{ row.BG }} </b> with opposite font\n                            color <b> {{ row.font }} </b>\n                        </div>\n                    </span>\n                </ng-template>\n            </amexio-data-table-column>\n        </amexio-datagrid>\n    </amexio-tab>\n    <amexio-tab title=\"Getting Started\">\n        <amexio-label size=\"large\">To install the Amexio Colors:</amexio-label>\n        <amexio-box background-color=\"blue\" border=\"left\" border-color=\"blue\" padding=\"true\">\n            <amexio-label size=\"medium-bold\">$ sudo npm install -g amexio-colors</amexio-label>\n        </amexio-box>\n        <amexio-label size=\"large\">Check the Amexio Colors version:</amexio-label>\n        <amexio-box background-color=\"blue\" border=\"left\" border-color=\"blue\" padding=\"true\">\n            <amexio-label size=\"medium-bold\"> $ ac </amexio-label><br />\n            <amexio-label> Amexio Colors v1.0 </amexio-label><br />\n            <amexio-label> Copyright (c) 2018, MetaMagic Global Inc, NJ, USA </amexio-label><br />\n            <amexio-label> ..... </amexio-label><br />\n        </amexio-box>\n        <amexio-label size=\"large\">To Generate Amexio Material Design Themes</amexio-label>\n\n        <amexio-box background-color=\"blue\" border=\"left\" border-color=\"blue\" padding=\"true\">\n            <amexio-label size=\"medium-bold\">$ pwd</amexio-label><br />\n            <amexio-label size=\"medium\">/home/user/</amexio-label><br /><br />\n            <amexio-label size=\"medium-bold\">$ mkdir mythemes</amexio-label><br />\n            <amexio-label size=\"medium-bold\">$ echo \"// Amexio Themes v0.0 \" >> Themes-Data.txt</amexio-label><br />\n            <amexio-label size=\"medium-bold\">$ echo \"// Design-Type : Material Design \" >> Themes-Data.txt\n            </amexio-label><br />\n            <amexio-label size=\"medium-bold\">$ echo \"// Theme-Version : 4.0 \" >> Themes-Data.txt</amexio-label><br />\n            <amexio-label size=\"medium-bold\">$ echo \"army-olive,#4B5320,#708238\" >> Themes-Data.txt</amexio-label><br />\n            <amexio-label size=\"medium-bold\">$ echo \"ash-stone-black,#544C4A,#877F7D\" >> Themes-Data.txt</amexio-label>\n            <br />\n            <br />\n            <amexio-label size=\"medium-bold\">$ ac Themes-Data.txt /home/user/mythemes/</amexio-label><br />\n        </amexio-box>\n        <amexio-label size=\"large\"> Amexio Colors API Documentation</amexio-label>\n        <p>\n            <amexio-label>\n                Checkout the Amexio Colors API Documentation published in </amexio-label>\n            <a href=\"https://meta-magic.github.io/AmexioColors/\" target=\"_blank\"> GitHub Pages</a>\n            <br />\n            <amexio-label>For Testing the Themes Autogenerated by the Amexio Colors Checkout the Amexio</amexio-label>\n            <a href=\"https://api.amexio.org\" target=\"_blank\"> API Site</a>\n        </p>\n\n    </amexio-tab>\n</amexio-tab-view>\n\n\n<amexio-action-ce [align]=\"'space-between'\">\n        <amexio-button [label]=\"'Previous'\" [type]=\"'theme-color'\" (onClick)=\"previous()\">\n        </amexio-button>\n        <amexio-button [label]=\"'Next'\" [type]=\"'theme-color'\" [tooltip]=\"'toolTip'\"  (onClick)=\"next()\">\n        </amexio-button>\n</amexio-action-ce>\n</div>"

/***/ }),

/***/ "./src/app/theme/theme.component.ts":
/*!******************************************!*\
  !*** ./src/app/theme/theme.component.ts ***!
  \******************************************/
/*! exports provided: ThemeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeComponent", function() { return ThemeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.es5.js");
/* harmony import */ var _service_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/http.service */ "./src/app/service/http.service.ts");
/* harmony import */ var _theme_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../theme-service.service */ "./src/app/theme-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by sagar on 11/1/18.
 */






var ThemeComponent = /** @class */ (function () {
    function ThemeComponent(route, http, httpService, cookieService, themeServiceService) {
        this.route = route;
        this.http = http;
        this.httpService = httpService;
        this.cookieService = cookieService;
        this.themeServiceService = themeServiceService;
        this.hasThemeInit = false;
    }
    ThemeComponent.prototype.ngOnInit = function () {
        var _this = this;
        var response;
        this.http.get('https://raw.githubusercontent.com/meta-magic/amexio-api-website/master/api/json/amexio-am.json', { responseType: 'json' }).subscribe(function (data) {
            response = data;
        }, function (error) {
        }, function () {
            _this.amexioThemeData = response;
        });
    };
    ThemeComponent.prototype.previous = function () {
        this.route.navigate(['getting-started']);
    };
    ThemeComponent.prototype.next = function () {
        this.route.navigate(['d3-charts']);
    };
    ThemeComponent.prototype.addNewTheme = function (newTheme, existingTheme) {
        var _this = this;
        var linkEl = document.createElement('link');
        linkEl.onload = function () {
            _this.removeExistingTheme(existingTheme);
        };
        linkEl.setAttribute('rel', 'stylesheet');
        linkEl.id = 'themeid';
        linkEl.href = newTheme;
        document.head.appendChild(linkEl);
    };
    //removed old theme css
    ThemeComponent.prototype.removeExistingTheme = function (keyList) {
        if (keyList != null && keyList && keyList.length != 0) {
            for (var i = 0; i < keyList.length; i++) {
                var key = keyList[i];
                if (key.id == 'themeid') {
                    document.head.removeChild(key);
                }
            }
        }
    };
    ThemeComponent.prototype.themeChange = function (theme) {
        this.themeServiceService.switchTheme(theme);
    };
    ThemeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'theme-page',
            template: __webpack_require__(/*! ./theme.component.html */ "./src/app/theme/theme.component.html")
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _service_http_service__WEBPACK_IMPORTED_MODULE_3__["HTTPService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"], _theme_service_service__WEBPACK_IMPORTED_MODULE_4__["ThemeServiceService"]])
    ], ThemeComponent);
    return ThemeComponent;
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