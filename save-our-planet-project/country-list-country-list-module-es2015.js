(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["country-list-country-list-module"],{

/***/ "./src/app/country-list/country-list-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/country-list/country-list-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: CountryListRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountryListRoutingModule", function() { return CountryListRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _country_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./country-list.component */ "./src/app/country-list/country-list.component.ts");
/* harmony import */ var _region_region_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../region/region.component */ "./src/app/region/region.component.ts");
/* harmony import */ var _country_country_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../country/country.component */ "./src/app/country/country.component.ts");
/* harmony import */ var _guards_country_list_can_proceed_to_region_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../guards/country-list/can-proceed-to-region.guard */ "./src/app/guards/country-list/can-proceed-to-region.guard.ts");
/* harmony import */ var _guards_country_list_can_proceed_to_country_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../guards/country-list/can-proceed-to-country.guard */ "./src/app/guards/country-list/can-proceed-to-country.guard.ts");
/* harmony import */ var _guards_country_list_can_leave_country_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../guards/country-list/can-leave-country.guard */ "./src/app/guards/country-list/can-leave-country.guard.ts");










const routes = [
    {
        path: '',
        component: _country_list_component__WEBPACK_IMPORTED_MODULE_2__["CountryListComponent"]
    },
    {
        path: 'region/:regionName/:subRegionName',
        component: _region_region_component__WEBPACK_IMPORTED_MODULE_3__["RegionComponent"],
        canActivate: [_guards_country_list_can_proceed_to_region_guard__WEBPACK_IMPORTED_MODULE_5__["CanProceedToRegionGuard"]],
        children: [{
                path: 'country/:countryName',
                component: _country_country_component__WEBPACK_IMPORTED_MODULE_4__["CountryComponent"],
                canActivate: [_guards_country_list_can_proceed_to_country_guard__WEBPACK_IMPORTED_MODULE_6__["CanProceedToCountryGuard"]],
                canDeactivate: [_guards_country_list_can_leave_country_guard__WEBPACK_IMPORTED_MODULE_7__["CanLeaveCountryGuard"]]
            }]
    },
];
class CountryListRoutingModule {
}
CountryListRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: CountryListRoutingModule });
CountryListRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function CountryListRoutingModule_Factory(t) { return new (t || CountryListRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](CountryListRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CountryListRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/country-list/country-list.component.ts":
/*!********************************************************!*\
  !*** ./src/app/country-list/country-list.component.ts ***!
  \********************************************************/
/*! exports provided: CountryListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountryListComponent", function() { return CountryListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class CountryListComponent {
    constructor(_router) {
        this._router = _router;
        this.menuMode = false;
        this.asiaMenuMode = false;
        this.europeMenuMode = false;
        this.africaMenuMode = false;
        this.oceaniaMenuMode = false;
        this.americaMenuMode = false;
    }
    takeNameOfContent(htmlElement) {
        const currentSubRegionContent = htmlElement.innerHTML.split(' ').filter((name) => Boolean(name));
        return currentSubRegionContent[0].toLowerCase();
    }
    toggleMenuMode() {
        this.menuMode = !this.menuMode;
    }
    returnMenuMode() {
        this.menuMode = !this.menuMode;
        this.asiaMenuMode = false;
        this.europeMenuMode = false;
        this.africaMenuMode = false;
        this.oceaniaMenuMode = false;
        this.americaMenuMode = false;
    }
    toggleAsiaMenuMode() {
        this.asiaMenuMode = !this.asiaMenuMode;
    }
    toggleEuropeMenuMode() {
        this.europeMenuMode = !this.europeMenuMode;
    }
    toggleOceaniaMenuMode() {
        this.oceaniaMenuMode = !this.oceaniaMenuMode;
    }
    toggleAfricaMenuMode() {
        this.africaMenuMode = !this.africaMenuMode;
    }
    toggleAmericaMenuMode() {
        this.americaMenuMode = !this.americaMenuMode;
    }
    switchRouter(regionHtmlElement, subRegionHtmlElement) {
        const regionName = this.takeNameOfContent(regionHtmlElement);
        const subRegionName = this.takeNameOfContent(subRegionHtmlElement);
        this._router.navigate(['/countries', 'region', regionName, subRegionName]);
    }
}
CountryListComponent.ɵfac = function CountryListComponent_Factory(t) { return new (t || CountryListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
CountryListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CountryListComponent, selectors: [["app-country-list"]], decls: 88, vars: 124, consts: [[1, "-app-countries"], [1, "-app-countries__start-menu"], [1, "-app-countries__start-menu-title", 3, "click"], [1, "-app-countries__start-menu-search"], [1, "-app-countries__menu", "-app-countries__menu_bg"], [1, "-app-countries__menu-return", 3, "click"], [1, "-app-countries__menu-list", 3, "click"], ["asia", ""], [1, "-app-countries__menu-item", 3, "click"], ["southernAsia", ""], ["westernAsia", ""], ["centralAsia", ""], ["easternAsia", ""], [1, "-app-countries__menu-item", "-app-countries__menu-item_south-eastern-asia", 3, "click"], ["southEasternAsia", ""], ["europe", ""], ["northernEurope", ""], ["southernEurope", ""], ["westernEurope", ""], ["easternEurope", ""], ["africa", ""], ["northernAfrica", ""], ["middleAfrica", ""], ["southernAfrica", ""], ["easternAfrica", ""], ["westernAfrica", ""], ["oceania", ""], ["polynesia", ""], [1, "-app-countries__menu-item", "-app-countries__menu-item_australia-oceania", 3, "click"], ["australia", ""], ["melanesia", ""], ["micronesia", ""], ["america", ""], ["centralAmerica", ""], ["northernAmerica", ""], ["southAmerica", ""], ["caribbean", ""]], template: function CountryListComponent_Template(rf, ctx) { if (rf & 1) {
        const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CountryListComponent_Template_div_click_2_listener() { return ctx.toggleMenuMode(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Menu ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CountryListComponent_Template_span_click_6_listener() { return ctx.returnMenuMode(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CountryListComponent_Template_div_click_7_listener() { return ctx.toggleAsiaMenuMode(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Asia ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CountryListComponent_Template_div_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11); return ctx.switchRouter(_r0, _r1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Southern Asia ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CountryListComponent_Template_div_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14); return ctx.switchRouter(_r0, _r2); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Western Asia ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 8, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CountryListComponent_Template_div_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](17); return ctx.switchRouter(_r0, _r3); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Central Asia ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 8, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CountryListComponent_Template_div_click_19_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](20); return ctx.switchRouter(_r0, _r4); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Eastern Asia ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 13, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CountryListComponent_Template_div_click_22_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8); const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](23); return ctx.switchRouter(_r0, _r5); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " South-Eastern Asia ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 6, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CountryListComponent_Template_div_click_25_listener() { return ctx.toggleEuropeMenuMode(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Europe ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 8, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CountryListComponent_Template_div_click_28_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](26); const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](29); return ctx.switchRouter(_r6, _r7); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Northern Europe ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 8, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CountryListComponent_Template_div_click_31_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](26); const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](32); return ctx.switchRouter(_r6, _r8); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Southern Europe ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 8, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CountryListComponent_Template_div_click_34_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](26); const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](35); return ctx.switchRouter(_r6, _r9); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " Western Europe ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 8, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CountryListComponent_Template_div_click_37_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](26); const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](38); return ctx.switchRouter(_r6, _r10); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " Eastern Europe ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 6, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CountryListComponent_Template_div_click_40_listener() { return ctx.toggleAfricaMenuMode(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " Africa ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 8, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CountryListComponent_Template_div_click_43_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](41); const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](44); return ctx.switchRouter(_r11, _r12); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " Northern Africa ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 8, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CountryListComponent_Template_div_click_46_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](41); const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](47); return ctx.switchRouter(_r11, _r13); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " Middle Africa ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 8, 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CountryListComponent_Template_div_click_49_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](41); const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](50); return ctx.switchRouter(_r11, _r14); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " Southern Africa ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 8, 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CountryListComponent_Template_div_click_52_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](41); const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](53); return ctx.switchRouter(_r11, _r15); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " Eastern Africa ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 8, 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CountryListComponent_Template_div_click_55_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](41); const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](56); return ctx.switchRouter(_r11, _r16); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, " Western Africa ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 6, 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CountryListComponent_Template_div_click_58_listener() { return ctx.toggleOceaniaMenuMode(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, " Oceania ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 8, 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CountryListComponent_Template_div_click_61_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](59); const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](62); return ctx.switchRouter(_r17, _r18); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, " Polynesia ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 28, 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CountryListComponent_Template_div_click_64_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](59); const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](65); return ctx.switchRouter(_r17, _r19); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, " Australia And New Zealand ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 8, 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CountryListComponent_Template_div_click_67_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](59); const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](68); return ctx.switchRouter(_r17, _r20); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, " Melanesia ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 8, 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CountryListComponent_Template_div_click_70_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](59); const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](71); return ctx.switchRouter(_r17, _r21); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, " Micronesia ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 6, 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CountryListComponent_Template_div_click_73_listener() { return ctx.toggleAmericaMenuMode(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, " Americas ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 8, 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CountryListComponent_Template_div_click_76_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](74); const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](77); return ctx.switchRouter(_r22, _r23); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, " Central America ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 28, 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CountryListComponent_Template_div_click_79_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](74); const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](80); return ctx.switchRouter(_r22, _r24); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, " Northern America ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 8, 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CountryListComponent_Template_div_click_82_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](74); const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](83); return ctx.switchRouter(_r22, _r25); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, " South America ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 8, 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CountryListComponent_Template_div_click_85_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](74); const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](86); return ctx.switchRouter(_r22, _r26); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, " Caribbean ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("-app-countries__start-menu_menu-mode", ctx.menuMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("-app-countries__menu_bg-menu-mode", ctx.menuMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("-app-countries__menu-return_visible", ctx.menuMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("-app-countries__menu-list_invisible", ctx.oceaniaMenuMode || ctx.europeMenuMode || ctx.americaMenuMode || ctx.africaMenuMode)("-app-countries__menu-list_asia", ctx.menuMode)("-app-countries__menu-list_asia-menu-mode", ctx.asiaMenuMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("-app-countries__menu-item_visible", ctx.asiaMenuMode)("-app-countries__menu-item_visible-southern-asia", ctx.asiaMenuMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("-app-countries__menu-item_visible", ctx.asiaMenuMode)("-app-countries__menu-item_visible-western-asia", ctx.asiaMenuMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("-app-countries__menu-item_visible", ctx.asiaMenuMode)("-app-countries__menu-item_visible-central-asia", ctx.asiaMenuMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("-app-countries__menu-item_visible", ctx.asiaMenuMode)("-app-countries__menu-item_visible-eastern-asia", ctx.asiaMenuMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("-app-countries__menu-item_visible", ctx.asiaMenuMode)("-app-countries__menu-item_visible-south-eastern-asia", ctx.asiaMenuMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("-app-countries__menu-list_invisible", ctx.oceaniaMenuMode || ctx.americaMenuMode || ctx.asiaMenuMode || ctx.africaMenuMode)("-app-countries__menu-list_europe", ctx.menuMode)("-app-countries__menu-list_europe-menu-mode", ctx.europeMenuMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("-app-countries__menu-item_visible", ctx.europeMenuMode)("-app-countries__menu-item_visible-northern-europe", ctx.europeMenuMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("-app-countries__menu-item_visible", ctx.europeMenuMode)("-app-countries__menu-item_visible-southern-europe", ctx.europeMenuMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("-app-countries__menu-item_visible", ctx.europeMenuMode)("-app-countries__menu-item_visible-western-europe", ctx.europeMenuMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("-app-countries__menu-item_visible", ctx.europeMenuMode)("-app-countries__menu-item_visible-eastern-europe", ctx.europeMenuMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("-app-countries__menu-list_invisible", ctx.oceaniaMenuMode || ctx.europeMenuMode || ctx.asiaMenuMode || ctx.americaMenuMode)("-app-countries__menu-list_africa", ctx.menuMode)("-app-countries__menu-list_africa-menu-mode", ctx.africaMenuMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("-app-countries__menu-item_visible", ctx.africaMenuMode)("-app-countries__menu-item_visible-northern-africa", ctx.africaMenuMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("-app-countries__menu-item_visible", ctx.africaMenuMode)("-app-countries__menu-item_visible-middle-africa", ctx.africaMenuMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("-app-countries__menu-item_visible", ctx.africaMenuMode)("-app-countries__menu-item_visible-southern-africa", ctx.africaMenuMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("-app-countries__menu-item_visible", ctx.africaMenuMode)("-app-countries__menu-item_visible-eastern-africa", ctx.africaMenuMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("-app-countries__menu-item_visible", ctx.africaMenuMode)("-app-countries__menu-item_visible-western-africa", ctx.africaMenuMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("-app-countries__menu-list_invisible", ctx.americaMenuMode || ctx.europeMenuMode || ctx.asiaMenuMode || ctx.africaMenuMode)("-app-countries__menu-list_oceania", ctx.menuMode)("-app-countries__menu-list_oceania-menu-mode", ctx.oceaniaMenuMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("-app-countries__menu-item_visible", ctx.oceaniaMenuMode)("-app-countries__menu-item_visible-polynesia-oceania", ctx.oceaniaMenuMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("-app-countries__menu-item_visible", ctx.oceaniaMenuMode)("-app-countries__menu-item_visible-australia-oceania", ctx.oceaniaMenuMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("-app-countries__menu-item_visible", ctx.oceaniaMenuMode)("-app-countries__menu-item_visible-melanesia-oceania", ctx.oceaniaMenuMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("-app-countries__menu-item_visible", ctx.oceaniaMenuMode)("-app-countries__menu-item_visible-micronesia-oceania", ctx.oceaniaMenuMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("-app-countries__menu-list_invisible", ctx.oceaniaMenuMode || ctx.europeMenuMode || ctx.asiaMenuMode || ctx.africaMenuMode)("-app-countries__menu-list_america", ctx.menuMode)("-app-countries__menu-list_america-menu-mode", ctx.americaMenuMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("-app-countries__menu-item_visible", ctx.americaMenuMode)("-app-countries__menu-item_visible-central-america", ctx.americaMenuMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("-app-countries__menu-item_visible", ctx.americaMenuMode)("-app-countries__menu-item_visible-northern-america", ctx.americaMenuMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("-app-countries__menu-item_visible", ctx.americaMenuMode)("-app-countries__menu-item_visible-south-america", ctx.americaMenuMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("-app-countries__menu-item_visible", ctx.americaMenuMode)("-app-countries__menu-item_visible-caribbean-america", ctx.americaMenuMode);
    } }, styles: ["@charset \"UTF-8\";\n@-webkit-keyframes menuLine {\n  0% {\n    left: 0%;\n  }\n  100% {\n    left: 100%;\n    transform: translate(-100%, 0%);\n  }\n}\n@keyframes menuLine {\n  0% {\n    left: 0%;\n  }\n  100% {\n    left: 100%;\n    transform: translate(-100%, 0%);\n  }\n}\n[_nghost-%COMP%] {\n  width: 100%;\n  height: 100vh;\n}\n.-app-countries[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  background-image: url('country-list-menu-bg.jpg');\n  background-size: cover;\n}\n.-app-countries__start-menu[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 3;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  width: 200px;\n  height: 100px;\n}\n.-app-countries__start-menu_menu-mode[_ngcontent-%COMP%] {\n  transition: 0.4s;\n  z-index: -1;\n  opacity: 0;\n}\n.-app-countries__start-menu[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  bottom: 10%;\n  left: 0%;\n  width: 30%;\n  height: 3px;\n  -webkit-animation: 1s menuLine alternate infinite;\n          animation: 1s menuLine alternate infinite;\n  border-radius: 2px;\n  background-color: white;\n}\n.-app-countries__start-menu-title[_ngcontent-%COMP%] {\n  width: 50%;\n  transition: 0.2s;\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  color: white;\n  text-shadow: 2px 2px 5px black;\n  text-align: center;\n  letter-spacing: 2px;\n  font-size: 24px;\n  font-weight: 600;\n}\n.-app-countries__start-menu-title[_ngcontent-%COMP%]:hover {\n  -webkit-filter: brightness(1.3);\n          filter: brightness(1.3);\n  letter-spacing: 2.5px;\n  font-size: 26px;\n}\n.-app-countries__start-menu-title_search-mode[_ngcontent-%COMP%] {\n  display: none;\n}\n.-app-countries__start-menu-search[_ngcontent-%COMP%] {\n  position: relative;\n  width: 50%;\n  height: 100%;\n  cursor: pointer;\n}\n.-app-countries__start-menu-search[_ngcontent-%COMP%]::before {\n  content: \"\uF002\";\n  position: absolute;\n  top: 52%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  color: white;\n  text-shadow: 2px 2px 5px black;\n  font-family: \"Font Awesome 5 free\", \"Font Awesome 5 brands\";\n  font-size: 26px;\n  font-weight: 900;\n}\n.-app-countries__menu[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n.-app-countries__menu_bg[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 1;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 10px;\n  height: 10px;\n  transition: 0.5s;\n  opacity: 0;\n  border-radius: 20%;\n  background: rgba(0, 0, 0, 0.7);\n}\n.-app-countries__menu_bg-menu-mode[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  opacity: 1;\n  border-radius: 0%;\n}\n.-app-countries__menu-return[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 2;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  opacity: 0;\n  transition: 1s;\n  width: 50px;\n  height: 50px;\n  cursor: pointer;\n}\n.-app-countries__menu-return_visible[_ngcontent-%COMP%] {\n  left: 25%;\n  opacity: 1;\n}\n.-app-countries__menu-return[_ngcontent-%COMP%]::before {\n  content: \"\uF2EA\";\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  color: white;\n  font-family: \"Font Awesome 5 free\", \"Font Awesome 5 brands\";\n  font-size: 20px;\n  font-weight: 900;\n}\n.-app-countries__menu-item[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: -1;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  transition: 0.5s;\n  opacity: 0;\n  text-shadow: none;\n  text-align: center;\n}\n.-app-countries__menu-item_south-eastern-asia[_ngcontent-%COMP%] {\n  width: 200px;\n}\n.-app-countries__menu-item_australia-oceania[_ngcontent-%COMP%] {\n  width: 150px;\n}\n.-app-countries__menu-item_visible[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.-app-countries__menu-item_visible-southern-asia[_ngcontent-%COMP%], .-app-countries__menu-item_visible-southern-africa[_ngcontent-%COMP%], .-app-countries__menu-item_visible-south-america[_ngcontent-%COMP%] {\n  transform: translate(-120%, 100%);\n}\n.-app-countries__menu-item_visible-western-asia[_ngcontent-%COMP%], .-app-countries__menu-item_visible-western-europe[_ngcontent-%COMP%], .-app-countries__menu-item_visible-western-africa[_ngcontent-%COMP%] {\n  transform: translate(-175%, -50%);\n}\n.-app-countries__menu-item_visible-central-asia[_ngcontent-%COMP%], .-app-countries__menu-item_visible-northern-europe[_ngcontent-%COMP%], .-app-countries__menu-item_visible-northern-africa[_ngcontent-%COMP%], .-app-countries__menu-item_visible-northern-america[_ngcontent-%COMP%] {\n  transform: translate(-50%, -200%);\n}\n.-app-countries__menu-item_visible-eastern-asia[_ngcontent-%COMP%], .-app-countries__menu-item_visible-eastern-europe[_ngcontent-%COMP%], .-app-countries__menu-item_visible-eastern-africa[_ngcontent-%COMP%], .-app-countries__menu-item_visible-caribbean-america[_ngcontent-%COMP%] {\n  transform: translate(100%, -50%);\n}\n.-app-countries__menu-item_visible-southern-europe[_ngcontent-%COMP%] {\n  transform: translate(-50%, 100%);\n}\n.-app-countries__menu-item_visible-micronesia-oceania[_ngcontent-%COMP%] {\n  transform: translate(75%, -400%);\n}\n.-app-countries__menu-item_visible-melanesia-oceania[_ngcontent-%COMP%] {\n  transform: translate(50%, -200%);\n}\n.-app-countries__menu-item_visible-polynesia-oceania[_ngcontent-%COMP%] {\n  transform: translate(110%, 0%);\n}\n.-app-countries__menu-item_visible-australia-oceania[_ngcontent-%COMP%] {\n  transform: translate(-150%, 0%);\n}\n.-app-countries__menu-item_visible-middle-africa[_ngcontent-%COMP%], .-app-countries__menu-item_visible-central-america[_ngcontent-%COMP%] {\n  transform: translate(40%, 100%);\n}\n.-app-countries__menu-item_visible-south-eastern-asia[_ngcontent-%COMP%] {\n  transform: translate(5%, 100%);\n}\n.-app-countries__menu-list[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 2;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  transition: 1s;\n  opacity: 0;\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  color: white;\n  letter-spacing: 2px;\n  font-size: 30px;\n}\n.-app-countries__menu-list_invisible[_ngcontent-%COMP%] {\n  transition: 0.5s;\n}\n.-app-countries__menu-list_invisible.-app-countries__menu-list[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n.-app-countries__menu-list[_ngcontent-%COMP%]:hover {\n  -webkit-filter: brightness(0.8);\n          filter: brightness(0.8);\n}\n.-app-countries__menu-list_asia[_ngcontent-%COMP%] {\n  top: 20%;\n  left: 80%;\n  opacity: 1;\n}\n.-app-countries__menu-list_asia-menu-mode[_ngcontent-%COMP%] {\n  text-shadow: 3px 3px 4px rgba(0, 0, 0, 0.6);\n}\n.-app-countries__menu-list_europe[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.-app-countries__menu-list_europe-menu-mode[_ngcontent-%COMP%] {\n  text-shadow: 3px 3px 4px rgba(0, 0, 0, 0.6);\n}\n.-app-countries__menu-list_africa[_ngcontent-%COMP%] {\n  top: 80%;\n  left: 20%;\n  opacity: 1;\n}\n.-app-countries__menu-list_africa-menu-mode[_ngcontent-%COMP%] {\n  text-shadow: 3px 3px 4px rgba(0, 0, 0, 0.6);\n}\n.-app-countries__menu-list_oceania[_ngcontent-%COMP%] {\n  top: 80%;\n  left: 80%;\n  opacity: 1;\n}\n.-app-countries__menu-list_oceania-menu-mode[_ngcontent-%COMP%] {\n  text-shadow: 3px 3px 4px rgba(0, 0, 0, 0.6);\n}\n.-app-countries__menu-list_america[_ngcontent-%COMP%] {\n  top: 20%;\n  left: 20%;\n  opacity: 1;\n}\n.-app-countries__menu-list_america-menu-mode[_ngcontent-%COMP%] {\n  text-shadow: 3px 3px 4px rgba(0, 0, 0, 0.6);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY291bnRyeS1saXN0L2NvdW50cnktbGlzdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY291bnRyeS1saXN0L0Q6XFxFUEFNIHRyYWluaW5nXFxzYXZlLW91ci1wbGFuZXRcXHNhdmUtb3VyLXBsYW5ldC1wcm9qZWN0L3NyY1xcYXBwXFxjb3VudHJ5LWxpc3RcXGNvdW50cnktbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNBaEI7RUFDSTtJQUNJLFFBQUE7RURFTjtFQ0FFO0lBQ0ksVUFBQTtJQUNBLCtCQUFBO0VERU47QUFDRjtBQ1RBO0VBQ0k7SUFDSSxRQUFBO0VERU47RUNBRTtJQUNJLFVBQUE7SUFDQSwrQkFBQTtFREVOO0FBQ0Y7QUNDQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0FEQ0o7QUNFQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUVBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBRUEsV0FBQTtFQUNBLFlBQUE7RUFFQSxpREFBQTtFQUNBLHNCQUFBO0FERko7QUNHSTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7RUFFQSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtFQUVBLFlBQUE7RUFDQSxhQUFBO0FESFI7QUNLUTtFQUNJLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7QURIWjtBQ0tRO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7RUFFQSxVQUFBO0VBQ0EsV0FBQTtFQUVBLGlEQUFBO1VBQUEseUNBQUE7RUFFQSxrQkFBQTtFQUVBLHVCQUFBO0FEUFo7QUNTUTtFQUNJLFVBQUE7RUFFQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtLQUFBLHNCQUFBO01BQUEscUJBQUE7VUFBQSxpQkFBQTtFQUVBLFlBQUE7RUFDQSw4QkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QURUWjtBQ1VZO0VBQ0ksK0JBQUE7VUFBQSx1QkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtBRFJoQjtBQ1VZO0VBQ0ksYUFBQTtBRFJoQjtBQ1dRO0VBQ0ksa0JBQUE7RUFFQSxVQUFBO0VBQ0EsWUFBQTtFQUVBLGVBQUE7QURYWjtBQ2FZO0VBQ0ksWUFBQTtFQUVBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtFQUVBLFlBQUE7RUFDQSw4QkFBQTtFQUNBLDJEQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FEYmhCO0FDaUJJO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QURmUjtBQ2lCUTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7RUFFQSxXQUFBO0VBQ0EsWUFBQTtFQUVBLGdCQUFBO0VBQ0EsVUFBQTtFQUVBLGtCQUFBO0VBRUEsOEJBQUE7QURuQlo7QUNvQlk7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUVBLFVBQUE7RUFFQSxpQkFBQTtBRHBCaEI7QUN1QlE7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0VBRUEsVUFBQTtFQUNBLGNBQUE7RUFFQSxXQUFBO0VBQ0EsWUFBQTtFQUVBLGVBQUE7QUR4Qlo7QUN5Qlk7RUFDSSxTQUFBO0VBQ0EsVUFBQTtBRHZCaEI7QUN5Qlk7RUFDSSxZQUFBO0VBRUEsa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0VBRUEsWUFBQTtFQUNBLDJEQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FEekJoQjtBQzRCUTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7RUFFQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtFQUVBLGtCQUFBO0FENUJaO0FDNkJZO0VBQ0ksWUFBQTtBRDNCaEI7QUM2Qlk7RUFDSSxZQUFBO0FEM0JoQjtBQzZCWTtFQUNJLFVBQUE7QUQzQmhCO0FDNkJnQjtFQUdJLGlDQUFBO0FEN0JwQjtBQytCZ0I7RUFHSSxpQ0FBQTtBRC9CcEI7QUNpQ2dCO0VBSUksaUNBQUE7QURsQ3BCO0FDb0NnQjtFQUlJLGdDQUFBO0FEckNwQjtBQ3VDZ0I7RUFDSSxnQ0FBQTtBRHJDcEI7QUN1Q2dCO0VBQ0ksZ0NBQUE7QURyQ3BCO0FDdUNnQjtFQUNJLGdDQUFBO0FEckNwQjtBQ3VDZ0I7RUFDSSw4QkFBQTtBRHJDcEI7QUN1Q2dCO0VBQ0ksK0JBQUE7QURyQ3BCO0FDdUNnQjtFQUVJLCtCQUFBO0FEdENwQjtBQ3dDZ0I7RUFDSSw4QkFBQTtBRHRDcEI7QUMwQ1E7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0VBRUEsY0FBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7S0FBQSxzQkFBQTtNQUFBLHFCQUFBO1VBQUEsaUJBQUE7RUFFQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FEMUNaO0FDMkNZO0VBQ0ksZ0JBQUE7QUR6Q2hCO0FDMENnQjtFQUNJLFVBQUE7QUR4Q3BCO0FDMkNZO0VBQ0ksK0JBQUE7VUFBQSx1QkFBQTtBRHpDaEI7QUMyQ1k7RUFDSSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUR6Q2hCO0FDMENnQjtFQUNJLDJDQUFBO0FEeENwQjtBQzJDWTtFQUNJLFVBQUE7QUR6Q2hCO0FDMENnQjtFQUNJLDJDQUFBO0FEeENwQjtBQzJDWTtFQUNJLFFBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBRHpDaEI7QUMwQ2dCO0VBQ0ksMkNBQUE7QUR4Q3BCO0FDMkNZO0VBQ0ksUUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FEekNoQjtBQzBDZ0I7RUFDSSwyQ0FBQTtBRHhDcEI7QUMyQ1k7RUFDSSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUR6Q2hCO0FDMENnQjtFQUNJLDJDQUFBO0FEeENwQiIsImZpbGUiOiJzcmMvYXBwL2NvdW50cnktbGlzdC9jb3VudHJ5LWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG5Aa2V5ZnJhbWVzIG1lbnVMaW5lIHtcbiAgMCUge1xuICAgIGxlZnQ6IDAlO1xuICB9XG4gIDEwMCUge1xuICAgIGxlZnQ6IDEwMCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTEwMCUsIDAlKTtcbiAgfVxufVxuOmhvc3Qge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDB2aDtcbn1cblxuLi1hcHAtY291bnRyaWVzIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAxO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL2ltYWdlcy9jb3VudHJ5LWxpc3QvY291bnRyeS1saXN0LW1lbnUtYmcuanBnXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuLi1hcHAtY291bnRyaWVzX19zdGFydC1tZW51IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAzO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMjAwcHg7XG4gIGhlaWdodDogMTAwcHg7XG59XG4uLWFwcC1jb3VudHJpZXNfX3N0YXJ0LW1lbnVfbWVudS1tb2RlIHtcbiAgdHJhbnNpdGlvbjogMC40cztcbiAgei1pbmRleDogLTE7XG4gIG9wYWNpdHk6IDA7XG59XG4uLWFwcC1jb3VudHJpZXNfX3N0YXJ0LW1lbnU6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAxMCU7XG4gIGxlZnQ6IDAlO1xuICB3aWR0aDogMzAlO1xuICBoZWlnaHQ6IDNweDtcbiAgYW5pbWF0aW9uOiAxcyBtZW51TGluZSBhbHRlcm5hdGUgaW5maW5pdGU7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG4uLWFwcC1jb3VudHJpZXNfX3N0YXJ0LW1lbnUtdGl0bGUge1xuICB3aWR0aDogNTAlO1xuICB0cmFuc2l0aW9uOiAwLjJzO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtc2hhZG93OiAycHggMnB4IDVweCBibGFjaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4uLWFwcC1jb3VudHJpZXNfX3N0YXJ0LW1lbnUtdGl0bGU6aG92ZXIge1xuICBmaWx0ZXI6IGJyaWdodG5lc3MoMS4zKTtcbiAgbGV0dGVyLXNwYWNpbmc6IDIuNXB4O1xuICBmb250LXNpemU6IDI2cHg7XG59XG4uLWFwcC1jb3VudHJpZXNfX3N0YXJ0LW1lbnUtdGl0bGVfc2VhcmNoLW1vZGUge1xuICBkaXNwbGF5OiBub25lO1xufVxuLi1hcHAtY291bnRyaWVzX19zdGFydC1tZW51LXNlYXJjaCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDUwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uLWFwcC1jb3VudHJpZXNfX3N0YXJ0LW1lbnUtc2VhcmNoOjpiZWZvcmUge1xuICBjb250ZW50OiBcIu+AglwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTIlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtc2hhZG93OiAycHggMnB4IDVweCBibGFjaztcbiAgZm9udC1mYW1pbHk6IFwiRm9udCBBd2Vzb21lIDUgZnJlZVwiLCBcIkZvbnQgQXdlc29tZSA1IGJyYW5kc1wiO1xuICBmb250LXNpemU6IDI2cHg7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG59XG4uLWFwcC1jb3VudHJpZXNfX21lbnUge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLi1hcHAtY291bnRyaWVzX19tZW51X2JnIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAxO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgd2lkdGg6IDEwcHg7XG4gIGhlaWdodDogMTBweDtcbiAgdHJhbnNpdGlvbjogMC41cztcbiAgb3BhY2l0eTogMDtcbiAgYm9yZGVyLXJhZGl1czogMjAlO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNyk7XG59XG4uLWFwcC1jb3VudHJpZXNfX21lbnVfYmctbWVudS1tb2RlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgb3BhY2l0eTogMTtcbiAgYm9yZGVyLXJhZGl1czogMCU7XG59XG4uLWFwcC1jb3VudHJpZXNfX21lbnUtcmV0dXJuIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAyO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNpdGlvbjogMXM7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi4tYXBwLWNvdW50cmllc19fbWVudS1yZXR1cm5fdmlzaWJsZSB7XG4gIGxlZnQ6IDI1JTtcbiAgb3BhY2l0eTogMTtcbn1cbi4tYXBwLWNvdW50cmllc19fbWVudS1yZXR1cm46OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi74uqXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1mYW1pbHk6IFwiRm9udCBBd2Vzb21lIDUgZnJlZVwiLCBcIkZvbnQgQXdlc29tZSA1IGJyYW5kc1wiO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG59XG4uLWFwcC1jb3VudHJpZXNfX21lbnUtaXRlbSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogLTE7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB0cmFuc2l0aW9uOiAwLjVzO1xuICBvcGFjaXR5OiAwO1xuICB0ZXh0LXNoYWRvdzogbm9uZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLi1hcHAtY291bnRyaWVzX19tZW51LWl0ZW1fc291dGgtZWFzdGVybi1hc2lhIHtcbiAgd2lkdGg6IDIwMHB4O1xufVxuLi1hcHAtY291bnRyaWVzX19tZW51LWl0ZW1fYXVzdHJhbGlhLW9jZWFuaWEge1xuICB3aWR0aDogMTUwcHg7XG59XG4uLWFwcC1jb3VudHJpZXNfX21lbnUtaXRlbV92aXNpYmxlIHtcbiAgb3BhY2l0eTogMTtcbn1cbi4tYXBwLWNvdW50cmllc19fbWVudS1pdGVtX3Zpc2libGUtc291dGhlcm4tYXNpYSwgLi1hcHAtY291bnRyaWVzX19tZW51LWl0ZW1fdmlzaWJsZS1zb3V0aGVybi1hZnJpY2EsIC4tYXBwLWNvdW50cmllc19fbWVudS1pdGVtX3Zpc2libGUtc291dGgtYW1lcmljYSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xMjAlLCAxMDAlKTtcbn1cbi4tYXBwLWNvdW50cmllc19fbWVudS1pdGVtX3Zpc2libGUtd2VzdGVybi1hc2lhLCAuLWFwcC1jb3VudHJpZXNfX21lbnUtaXRlbV92aXNpYmxlLXdlc3Rlcm4tZXVyb3BlLCAuLWFwcC1jb3VudHJpZXNfX21lbnUtaXRlbV92aXNpYmxlLXdlc3Rlcm4tYWZyaWNhIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTE3NSUsIC01MCUpO1xufVxuLi1hcHAtY291bnRyaWVzX19tZW51LWl0ZW1fdmlzaWJsZS1jZW50cmFsLWFzaWEsIC4tYXBwLWNvdW50cmllc19fbWVudS1pdGVtX3Zpc2libGUtbm9ydGhlcm4tZXVyb3BlLCAuLWFwcC1jb3VudHJpZXNfX21lbnUtaXRlbV92aXNpYmxlLW5vcnRoZXJuLWFmcmljYSwgLi1hcHAtY291bnRyaWVzX19tZW51LWl0ZW1fdmlzaWJsZS1ub3J0aGVybi1hbWVyaWNhIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTIwMCUpO1xufVxuLi1hcHAtY291bnRyaWVzX19tZW51LWl0ZW1fdmlzaWJsZS1lYXN0ZXJuLWFzaWEsIC4tYXBwLWNvdW50cmllc19fbWVudS1pdGVtX3Zpc2libGUtZWFzdGVybi1ldXJvcGUsIC4tYXBwLWNvdW50cmllc19fbWVudS1pdGVtX3Zpc2libGUtZWFzdGVybi1hZnJpY2EsIC4tYXBwLWNvdW50cmllc19fbWVudS1pdGVtX3Zpc2libGUtY2FyaWJiZWFuLWFtZXJpY2Ege1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxMDAlLCAtNTAlKTtcbn1cbi4tYXBwLWNvdW50cmllc19fbWVudS1pdGVtX3Zpc2libGUtc291dGhlcm4tZXVyb3BlIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMTAwJSk7XG59XG4uLWFwcC1jb3VudHJpZXNfX21lbnUtaXRlbV92aXNpYmxlLW1pY3JvbmVzaWEtb2NlYW5pYSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDc1JSwgLTQwMCUpO1xufVxuLi1hcHAtY291bnRyaWVzX19tZW51LWl0ZW1fdmlzaWJsZS1tZWxhbmVzaWEtb2NlYW5pYSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDUwJSwgLTIwMCUpO1xufVxuLi1hcHAtY291bnRyaWVzX19tZW51LWl0ZW1fdmlzaWJsZS1wb2x5bmVzaWEtb2NlYW5pYSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDExMCUsIDAlKTtcbn1cbi4tYXBwLWNvdW50cmllc19fbWVudS1pdGVtX3Zpc2libGUtYXVzdHJhbGlhLW9jZWFuaWEge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMTUwJSwgMCUpO1xufVxuLi1hcHAtY291bnRyaWVzX19tZW51LWl0ZW1fdmlzaWJsZS1taWRkbGUtYWZyaWNhLCAuLWFwcC1jb3VudHJpZXNfX21lbnUtaXRlbV92aXNpYmxlLWNlbnRyYWwtYW1lcmljYSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDQwJSwgMTAwJSk7XG59XG4uLWFwcC1jb3VudHJpZXNfX21lbnUtaXRlbV92aXNpYmxlLXNvdXRoLWVhc3Rlcm4tYXNpYSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDUlLCAxMDAlKTtcbn1cbi4tYXBwLWNvdW50cmllc19fbWVudS1saXN0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAyO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgdHJhbnNpdGlvbjogMXM7XG4gIG9wYWNpdHk6IDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgZm9udC1zaXplOiAzMHB4O1xufVxuLi1hcHAtY291bnRyaWVzX19tZW51LWxpc3RfaW52aXNpYmxlIHtcbiAgdHJhbnNpdGlvbjogMC41cztcbn1cbi4tYXBwLWNvdW50cmllc19fbWVudS1saXN0X2ludmlzaWJsZS4tYXBwLWNvdW50cmllc19fbWVudS1saXN0IHtcbiAgb3BhY2l0eTogMDtcbn1cbi4tYXBwLWNvdW50cmllc19fbWVudS1saXN0OmhvdmVyIHtcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDAuOCk7XG59XG4uLWFwcC1jb3VudHJpZXNfX21lbnUtbGlzdF9hc2lhIHtcbiAgdG9wOiAyMCU7XG4gIGxlZnQ6IDgwJTtcbiAgb3BhY2l0eTogMTtcbn1cbi4tYXBwLWNvdW50cmllc19fbWVudS1saXN0X2FzaWEtbWVudS1tb2RlIHtcbiAgdGV4dC1zaGFkb3c6IDNweCAzcHggNHB4IHJnYmEoMCwgMCwgMCwgMC42KTtcbn1cbi4tYXBwLWNvdW50cmllc19fbWVudS1saXN0X2V1cm9wZSB7XG4gIG9wYWNpdHk6IDE7XG59XG4uLWFwcC1jb3VudHJpZXNfX21lbnUtbGlzdF9ldXJvcGUtbWVudS1tb2RlIHtcbiAgdGV4dC1zaGFkb3c6IDNweCAzcHggNHB4IHJnYmEoMCwgMCwgMCwgMC42KTtcbn1cbi4tYXBwLWNvdW50cmllc19fbWVudS1saXN0X2FmcmljYSB7XG4gIHRvcDogODAlO1xuICBsZWZ0OiAyMCU7XG4gIG9wYWNpdHk6IDE7XG59XG4uLWFwcC1jb3VudHJpZXNfX21lbnUtbGlzdF9hZnJpY2EtbWVudS1tb2RlIHtcbiAgdGV4dC1zaGFkb3c6IDNweCAzcHggNHB4IHJnYmEoMCwgMCwgMCwgMC42KTtcbn1cbi4tYXBwLWNvdW50cmllc19fbWVudS1saXN0X29jZWFuaWEge1xuICB0b3A6IDgwJTtcbiAgbGVmdDogODAlO1xuICBvcGFjaXR5OiAxO1xufVxuLi1hcHAtY291bnRyaWVzX19tZW51LWxpc3Rfb2NlYW5pYS1tZW51LW1vZGUge1xuICB0ZXh0LXNoYWRvdzogM3B4IDNweCA0cHggcmdiYSgwLCAwLCAwLCAwLjYpO1xufVxuLi1hcHAtY291bnRyaWVzX19tZW51LWxpc3RfYW1lcmljYSB7XG4gIHRvcDogMjAlO1xuICBsZWZ0OiAyMCU7XG4gIG9wYWNpdHk6IDE7XG59XG4uLWFwcC1jb3VudHJpZXNfX21lbnUtbGlzdF9hbWVyaWNhLW1lbnUtbW9kZSB7XG4gIHRleHQtc2hhZG93OiAzcHggM3B4IDRweCByZ2JhKDAsIDAsIDAsIDAuNik7XG59IiwiQGtleWZyYW1lcyBtZW51TGluZSB7XHJcbiAgICAwJSB7XHJcbiAgICAgICAgbGVmdDogMCU7XHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgICBsZWZ0OiAxMDAlO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xMDAlLCAwJSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbjpob3N0IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxufVxyXG5cclxuLi1hcHAtY291bnRyaWVzIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHotaW5kZXg6IDE7XHJcblxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuXHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvaW1hZ2VzL2NvdW50cnktbGlzdC9jb3VudHJ5LWxpc3QtbWVudS1iZy5qcGdcIik7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgJl9fc3RhcnQtbWVudSB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHotaW5kZXg6IDM7XHJcbiAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG5cclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDBweDtcclxuXHJcbiAgICAgICAgJl9tZW51LW1vZGUge1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjRzO1xyXG4gICAgICAgICAgICB6LWluZGV4OiAtMTtcclxuICAgICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgJjo6YmVmb3JlIHtcclxuICAgICAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICBib3R0b206IDEwJTtcclxuICAgICAgICAgICAgbGVmdDogMCU7XHJcblxyXG4gICAgICAgICAgICB3aWR0aDogMzAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDNweDtcclxuXHJcbiAgICAgICAgICAgIGFuaW1hdGlvbjogMXMgbWVudUxpbmUgYWx0ZXJuYXRlIGluZmluaXRlO1xyXG5cclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG5cclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJi10aXRsZSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA1MCU7XHJcblxyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjJzO1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG5cclxuICAgICAgICAgICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XHJcbiAgICAgICAgICAgIHRleHQtc2hhZG93OiAycHggMnB4IDVweCByZ2JhKDAsIDAsIDAsIDEpO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMS4zKTtcclxuICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAyLjVweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjZweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmX3NlYXJjaC1tb2RlIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgJi1zZWFyY2gge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcblxyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgICAgICAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgY29udGVudDogXCJcXGYwMDJcIjtcclxuXHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDUyJTtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xyXG4gICAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDJweCAycHggNXB4IHJnYmEoMCwgMCwgMCwgMSk7XHJcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogXCJGb250IEF3ZXNvbWUgNSBmcmVlXCIsIFwiRm9udCBBd2Vzb21lIDUgYnJhbmRzXCI7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDI2cHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogOTAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgJl9fbWVudSB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG5cclxuICAgICAgICAmX2JnIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuXHJcbiAgICAgICAgICAgIHdpZHRoOiAxMHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwcHg7XHJcblxyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjVzO1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG5cclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjAlO1xyXG5cclxuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjcpO1xyXG4gICAgICAgICAgICAmLW1lbnUtbW9kZSB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuXHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG5cclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYtcmV0dXJuIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB6LWluZGV4OiAyO1xyXG4gICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuXHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IDFzO1xyXG5cclxuICAgICAgICAgICAgd2lkdGg6IDUwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogNTBweDtcclxuXHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgJl92aXNpYmxlIHtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IDI1JTtcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJjo6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXFxmMmVhXCI7XHJcblxyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcclxuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIkZvbnQgQXdlc29tZSA1IGZyZWVcIiwgXCJGb250IEF3ZXNvbWUgNSBicmFuZHNcIjtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgJi1pdGVtIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB6LWluZGV4OiAtMTtcclxuICAgICAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcblxyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjVzO1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgICB0ZXh0LXNoYWRvdzogbm9uZTtcclxuXHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgJl9zb3V0aC1lYXN0ZXJuLWFzaWEge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICZfYXVzdHJhbGlhLW9jZWFuaWEge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICZfdmlzaWJsZSB7XHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG5cclxuICAgICAgICAgICAgICAgICYtc291dGhlcm4tYXNpYSxcclxuICAgICAgICAgICAgICAgICYtc291dGhlcm4tYWZyaWNhLFxyXG4gICAgICAgICAgICAgICAgJi1zb3V0aC1hbWVyaWNhIHtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMTIwJSwgMTAwJSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAmLXdlc3Rlcm4tYXNpYSxcclxuICAgICAgICAgICAgICAgICYtd2VzdGVybi1ldXJvcGUsXHJcbiAgICAgICAgICAgICAgICAmLXdlc3Rlcm4tYWZyaWNhIHtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMTc1JSwgLTUwJSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAmLWNlbnRyYWwtYXNpYSxcclxuICAgICAgICAgICAgICAgICYtbm9ydGhlcm4tZXVyb3BlLFxyXG4gICAgICAgICAgICAgICAgJi1ub3J0aGVybi1hZnJpY2EsXHJcbiAgICAgICAgICAgICAgICAmLW5vcnRoZXJuLWFtZXJpY2Ege1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC0yMDAlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICYtZWFzdGVybi1hc2lhLFxyXG4gICAgICAgICAgICAgICAgJi1lYXN0ZXJuLWV1cm9wZSxcclxuICAgICAgICAgICAgICAgICYtZWFzdGVybi1hZnJpY2EsXHJcbiAgICAgICAgICAgICAgICAmLWNhcmliYmVhbi1hbWVyaWNhIHtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxMDAlLCAtNTAlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICYtc291dGhlcm4tZXVyb3BlIHtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAxMDAlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICYtbWljcm9uZXNpYS1vY2VhbmlhIHtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg3NSUsIC00MDAlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICYtbWVsYW5lc2lhLW9jZWFuaWEge1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDUwJSwgLTIwMCUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgJi1wb2x5bmVzaWEtb2NlYW5pYSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTEwJSwgMCUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgJi1hdXN0cmFsaWEtb2NlYW5pYSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTE1MCUsIDAlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICYtbWlkZGxlLWFmcmljYSxcclxuICAgICAgICAgICAgICAgICYtY2VudHJhbC1hbWVyaWNhIHtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg0MCUsIDEwMCUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgJi1zb3V0aC1lYXN0ZXJuLWFzaWEge1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDUlLCAxMDAlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAmLWxpc3Qge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IDI7XHJcbiAgICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG5cclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogMXM7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcblxyXG4gICAgICAgICAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcclxuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgICAgICAgICAmX2ludmlzaWJsZSB7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjVzO1xyXG4gICAgICAgICAgICAgICAgJi4tYXBwLWNvdW50cmllc19fbWVudS1saXN0IHtcclxuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgZmlsdGVyOiBicmlnaHRuZXNzKDAuOCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJl9hc2lhIHtcclxuICAgICAgICAgICAgICAgIHRvcDogMjAlO1xyXG4gICAgICAgICAgICAgICAgbGVmdDogODAlO1xyXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgICAgICAgICYtbWVudS1tb2RlIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LXNoYWRvdzogM3B4IDNweCA0cHggcmdiYSgwLCAwLCAwLCAwLjYpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICZfZXVyb3BlIHtcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICAgICAgICAmLW1lbnUtbW9kZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDNweCAzcHggNHB4IHJnYmEoMCwgMCwgMCwgMC42KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmX2FmcmljYSB7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDgwJTtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IDIwJTtcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICAgICAgICAmLW1lbnUtbW9kZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDNweCAzcHggNHB4IHJnYmEoMCwgMCwgMCwgMC42KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmX29jZWFuaWEge1xyXG4gICAgICAgICAgICAgICAgdG9wOiA4MCU7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiA4MCU7XHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgICAgICAgJi1tZW51LW1vZGUge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtc2hhZG93OiAzcHggM3B4IDRweCByZ2JhKDAsIDAsIDAsIDAuNik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJl9hbWVyaWNhIHtcclxuICAgICAgICAgICAgICAgIHRvcDogMjAlO1xyXG4gICAgICAgICAgICAgICAgbGVmdDogMjAlO1xyXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgICAgICAgICYtbWVudS1tb2RlIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LXNoYWRvdzogM3B4IDNweCA0cHggcmdiYSgwLCAwLCAwLCAwLjYpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CountryListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-country-list',
                templateUrl: './country-list.component.html',
                styleUrls: ['./country-list.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/country-list/country-list.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/country-list/country-list.module.ts ***!
  \*****************************************************/
/*! exports provided: CountryListModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountryListModule", function() { return CountryListModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _country_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./country-list.component */ "./src/app/country-list/country-list.component.ts");
/* harmony import */ var _country_list_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./country-list-routing.module */ "./src/app/country-list/country-list-routing.module.ts");
/* harmony import */ var _country_country_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../country/country.component */ "./src/app/country/country.component.ts");
/* harmony import */ var _region_region_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../region/region.component */ "./src/app/region/region.component.ts");
/* harmony import */ var _country_name_country_name_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../country-name/country-name.component */ "./src/app/country-name/country-name.component.ts");
/* harmony import */ var _guards_country_list_can_proceed_to_region_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../guards/country-list/can-proceed-to-region.guard */ "./src/app/guards/country-list/can-proceed-to-region.guard.ts");
/* harmony import */ var _guards_country_list_can_proceed_to_country_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../guards/country-list/can-proceed-to-country.guard */ "./src/app/guards/country-list/can-proceed-to-country.guard.ts");
/* harmony import */ var _guards_country_list_can_leave_country_guard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../guards/country-list/can-leave-country.guard */ "./src/app/guards/country-list/can-leave-country.guard.ts");
/* harmony import */ var _pipes_country_list_format_forest_area_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../pipes/country-list/format-forest-area.pipe */ "./src/app/pipes/country-list/format-forest-area.pipe.ts");
/* harmony import */ var _pipes_country_list_format_area_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../pipes/country-list/format-area.pipe */ "./src/app/pipes/country-list/format-area.pipe.ts");
/* harmony import */ var _pipes_country_list_format_region_title_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../pipes/country-list/format-region-title.pipe */ "./src/app/pipes/country-list/format-region-title.pipe.ts");














class CountryListModule {
}
CountryListModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CountryListModule, bootstrap: [_country_list_component__WEBPACK_IMPORTED_MODULE_2__["CountryListComponent"]] });
CountryListModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CountryListModule_Factory(t) { return new (t || CountryListModule)(); }, providers: [
        _guards_country_list_can_proceed_to_region_guard__WEBPACK_IMPORTED_MODULE_7__["CanProceedToRegionGuard"],
        _guards_country_list_can_proceed_to_country_guard__WEBPACK_IMPORTED_MODULE_8__["CanProceedToCountryGuard"],
        _guards_country_list_can_leave_country_guard__WEBPACK_IMPORTED_MODULE_9__["CanLeaveCountryGuard"]
    ], imports: [[
            _country_list_routing_module__WEBPACK_IMPORTED_MODULE_3__["CountryListRoutingModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CountryListModule, { declarations: [_country_list_component__WEBPACK_IMPORTED_MODULE_2__["CountryListComponent"],
        _country_country_component__WEBPACK_IMPORTED_MODULE_4__["CountryComponent"],
        _region_region_component__WEBPACK_IMPORTED_MODULE_5__["RegionComponent"],
        _country_name_country_name_component__WEBPACK_IMPORTED_MODULE_6__["CountryNameComponent"],
        _pipes_country_list_format_forest_area_pipe__WEBPACK_IMPORTED_MODULE_10__["FormatForestAreaPipe"],
        _pipes_country_list_format_area_pipe__WEBPACK_IMPORTED_MODULE_11__["FormatAreaPipe"],
        _pipes_country_list_format_region_title_pipe__WEBPACK_IMPORTED_MODULE_12__["FormatRegionTitlePipe"]], imports: [_country_list_routing_module__WEBPACK_IMPORTED_MODULE_3__["CountryListRoutingModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CountryListModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _country_list_component__WEBPACK_IMPORTED_MODULE_2__["CountryListComponent"],
                    _country_country_component__WEBPACK_IMPORTED_MODULE_4__["CountryComponent"],
                    _region_region_component__WEBPACK_IMPORTED_MODULE_5__["RegionComponent"],
                    _country_name_country_name_component__WEBPACK_IMPORTED_MODULE_6__["CountryNameComponent"],
                    _pipes_country_list_format_forest_area_pipe__WEBPACK_IMPORTED_MODULE_10__["FormatForestAreaPipe"],
                    _pipes_country_list_format_area_pipe__WEBPACK_IMPORTED_MODULE_11__["FormatAreaPipe"],
                    _pipes_country_list_format_region_title_pipe__WEBPACK_IMPORTED_MODULE_12__["FormatRegionTitlePipe"]
                ],
                imports: [
                    _country_list_routing_module__WEBPACK_IMPORTED_MODULE_3__["CountryListRoutingModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ],
                providers: [
                    _guards_country_list_can_proceed_to_region_guard__WEBPACK_IMPORTED_MODULE_7__["CanProceedToRegionGuard"],
                    _guards_country_list_can_proceed_to_country_guard__WEBPACK_IMPORTED_MODULE_8__["CanProceedToCountryGuard"],
                    _guards_country_list_can_leave_country_guard__WEBPACK_IMPORTED_MODULE_9__["CanLeaveCountryGuard"]
                ],
                bootstrap: [_country_list_component__WEBPACK_IMPORTED_MODULE_2__["CountryListComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/country-name/country-name.component.ts":
/*!********************************************************!*\
  !*** ./src/app/country-name/country-name.component.ts ***!
  \********************************************************/
/*! exports provided: CountryNameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountryNameComponent", function() { return CountryNameComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





class CountryNameComponent {
    constructor(_router, _activatedRoute) {
        this._router = _router;
        this._activatedRoute = _activatedRoute;
        this._destroySubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    ngOnInit() {
        this._activatedRoute.params
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this._destroySubject$)).subscribe((params) => {
            this._regionName = params.regionName;
            this._subRegionName = params.subRegionName;
        });
    }
    ngOnDestroy() {
        this._destroySubject$.next(true);
        this._destroySubject$.complete();
    }
    goToCurrentCountryRouter() {
        const countryName = this.country.name.replace(/\./g, '')
            .replace(/\(|\)/g, '')
            .toLowerCase()
            .split(' ')
            .join('-');
        this._router.navigate(['/countries', 'region', this._regionName, this._subRegionName, 'country', countryName]);
    }
}
CountryNameComponent.ɵfac = function CountryNameComponent_Factory(t) { return new (t || CountryNameComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"])); };
CountryNameComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CountryNameComponent, selectors: [["app-country-name"]], inputs: { country: "country" }, decls: 3, vars: 1, consts: [[1, "-app-country"], [1, "-app-country__name", 3, "click"]], template: function CountryNameComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CountryNameComponent_Template_div_click_1_listener() { return ctx.goToCurrentCountryRouter(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.country.name, " ");
    } }, styles: ["[_nghost-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100px;\n}\n\n.-app-country[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n\n.-app-country__name[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  padding: 10px 20px;\n  box-sizing: border-box;\n  transition: 0.2s;\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  color: white;\n  text-shadow: 2px 2px 4px black;\n  text-align: center;\n  letter-spacing: 1.5px;\n  font-size: 22px;\n  font-weight: 600;\n}\n\n.-app-country__name[_ngcontent-%COMP%]:hover {\n  letter-spacing: 3.5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY291bnRyeS1uYW1lL0Q6XFxFUEFNIHRyYWluaW5nXFxzYXZlLW91ci1wbGFuZXRcXHNhdmUtb3VyLXBsYW5ldC1wcm9qZWN0L3NyY1xcYXBwXFxjb3VudHJ5LW5hbWVcXGNvdW50cnktbmFtZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY291bnRyeS1uYW1lL2NvdW50cnktbmFtZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBRUEsYUFBQTtBQ0FKOztBREdBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUNBSjs7QURDSTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBRUEsV0FBQTtFQUNBLFlBQUE7RUFFQSxrQkFBQTtFQUVBLHNCQUFBO0VBRUEsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7S0FBQSxzQkFBQTtNQUFBLHFCQUFBO1VBQUEsaUJBQUE7RUFFQSxZQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDSlI7O0FES1E7RUFDSSxxQkFBQTtBQ0haIiwiZmlsZSI6InNyYy9hcHAvY291bnRyeS1uYW1lL2NvdW50cnktbmFtZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxufVxyXG5cclxuLi1hcHAtY291bnRyeSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgICZfX25hbWUge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG5cclxuICAgICAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcblxyXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblxyXG4gICAgICAgIHRyYW5zaXRpb246IDAuMnM7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG5cclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgdGV4dC1zaGFkb3c6IDJweCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMSk7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAxLjVweDtcclxuICAgICAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDMuNXB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCI6aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBoZWlnaHQ6IDEwMHB4O1xufVxuXG4uLWFwcC1jb3VudHJ5IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cbi4tYXBwLWNvdW50cnlfX25hbWUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZzogMTBweCAyMHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB0cmFuc2l0aW9uOiAwLjJzO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtc2hhZG93OiAycHggMnB4IDRweCBibGFjaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsZXR0ZXItc3BhY2luZzogMS41cHg7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbi4tYXBwLWNvdW50cnlfX25hbWU6aG92ZXIge1xuICBsZXR0ZXItc3BhY2luZzogMy41cHg7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CountryNameComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-country-name',
                templateUrl: './country-name.component.html',
                styleUrls: ['./country-name.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }]; }, { country: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/country/country.component.ts":
/*!**********************************************!*\
  !*** ./src/app/country/country.component.ts ***!
  \**********************************************/
/*! exports provided: CountryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountryComponent", function() { return CountryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _store_country_list_country_list_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/country-list/country-list.selectors */ "./src/app/store/country-list/country-list.selectors.ts");
/* harmony import */ var _store_donation_list_donation_list_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/donation-list/donation-list.selectors */ "./src/app/store/donation-list/donation-list.selectors.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _store_donation_list_donation_list_facade__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../store/donation-list/donation-list.facade */ "./src/app/store/donation-list/donation-list.facade.ts");
/* harmony import */ var _store_country_list_country_list_facade__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../store/country-list/country-list.facade */ "./src/app/store/country-list/country-list.facade.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _pipes_country_list_format_area_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../pipes/country-list/format-area.pipe */ "./src/app/pipes/country-list/format-area.pipe.ts");
/* harmony import */ var _pipes_country_list_format_forest_area_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../pipes/country-list/format-forest-area.pipe */ "./src/app/pipes/country-list/format-forest-area.pipe.ts");













function CountryComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h3", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Capital ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h3", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h3", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h3", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Region: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Sub Region: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " Area: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](32, "formatArea");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " Forest Area: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](38, "formatForestArea");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " Native Name: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " Time Zone: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CountryComponent_div_0_Template_button_click_50_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.switchToPreviousCountry(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CountryComponent_div_0_Template_button_click_51_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.choose(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, " choose ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CountryComponent_div_0_Template_button_click_53_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.unchoose(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " unchoose ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CountryComponent_div_0_Template_button_click_55_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.switchToNextCountry(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.country.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r0.country.flag, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Name: ", ctx_r0.country.capital.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Latitude: ", ctx_r0.country.capital.latitude, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Longitude: ", ctx_r0.country.capital.longitude, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.country.region, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.country.subRegion, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](32, 17, ctx_r0.country.area), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](38, 19, ctx_r0.country.forestArea), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.country.nativeName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.country.timeZone, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r0.isPreviousCountry);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("-app-country__button_choose-invisible", !ctx_r0.isCanChosenCountry);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("-app-country__button_unchoose-visible", !ctx_r0.isCanChosenCountry);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r0.isNextCountry);
} }
function CountryComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class CountryComponent {
    constructor(_store$, _activatedRoute, _router, _facadeDonationListService, _facadeCountryListService) {
        this._store$ = _store$;
        this._activatedRoute = _activatedRoute;
        this._router = _router;
        this._facadeDonationListService = _facadeDonationListService;
        this._facadeCountryListService = _facadeCountryListService;
        this._destroySubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.isSearchLoading = true;
        this.isCanChosenCountry = true;
    }
    canChosenCountry(countryName) {
        if (Boolean(this._selectedCountriesForDonation)) {
            const chosenCountry = this._selectedCountriesForDonation.find((country) => country.name === countryName);
            return !Boolean(chosenCountry);
        }
        else {
            return true;
        }
    }
    switchRouterToSomeCountry(countryName) {
        const countryRouterName = countryName.replace(/\./g, '')
            .replace(/\(|\)/g, '')
            .toLowerCase()
            .split(' ')
            .join('-');
        const countryRegionName = this.country.region;
        const countrySubRegionName = this.country.subRegion;
        const countryRegionRouterName = this.takeRouterNameOfRegionOrSubRegion(countryRegionName);
        const countrySubRegionRouterName = this.takeRouterNameOfRegionOrSubRegion(countrySubRegionName);
        this._router.navigate([
            '/countries',
            'region',
            countryRegionRouterName,
            countrySubRegionRouterName,
            'country',
            countryRouterName
        ]);
    }
    takeRouterNameOfRegionOrSubRegion(name) {
        return name.toLowerCase().split(' ')[0];
    }
    ngOnInit() {
        this._activatedRoute.params
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(this._destroySubject$)).subscribe((params) => {
            this._appNavigationDonationButton = document.querySelector('.-app-navigation__donation-button');
            this._appNavigationDonationButton.classList.remove('-app-navigation__donation-button_blinking');
            this._facadeCountryListService.searchCountry(params.countryName);
        });
        this._store$.select(_store_donation_list_donation_list_selectors__WEBPACK_IMPORTED_MODULE_4__["selectCountriesForDonation"])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(this._destroySubject$)).subscribe((selectedCountriesForDonation) => {
            if (Boolean(selectedCountriesForDonation)) {
                this._isChosenAtLeastOneCountry = true;
                this._selectedCountriesForDonation = selectedCountriesForDonation;
            }
        });
        const countrySearchDelay = 3000;
        this._store$.select(_store_country_list_country_list_selectors__WEBPACK_IMPORTED_MODULE_3__["selectSearchCountry"])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(this._destroySubject$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["delay"])(countrySearchDelay)).subscribe((country) => {
            if (Boolean(country)) {
                this.country = country;
                this.isCanChosenCountry = this.canChosenCountry(this.country.name);
                this._facadeCountryListService.searchCountrySuccess();
            }
        });
        this._store$.select(_store_country_list_country_list_selectors__WEBPACK_IMPORTED_MODULE_3__["selectSearchPreviousCountry"])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(this._destroySubject$)).subscribe((previousCountry) => {
            if (Boolean(previousCountry)) {
                this.previousCountry = previousCountry;
                this.isPreviousCountry = true;
            }
            else {
                this.isPreviousCountry = false;
            }
        });
        this._store$.select(_store_country_list_country_list_selectors__WEBPACK_IMPORTED_MODULE_3__["selectSearchNextCountry"])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(this._destroySubject$)).subscribe((nextCountry) => {
            if (Boolean(nextCountry)) {
                this.nextCountry = nextCountry;
                this.isNextCountry = true;
            }
            else {
                this.isNextCountry = false;
            }
        });
        this._store$.select(_store_country_list_country_list_selectors__WEBPACK_IMPORTED_MODULE_3__["selectIsCountrySearchLoading"])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(this._destroySubject$)).subscribe((isSearchLoading) => {
            this.isSearchLoading = isSearchLoading;
        });
    }
    ngOnDestroy() {
        this._destroySubject$.next(true);
        this._destroySubject$.complete();
    }
    choose() {
        this._appNavigationDonationButton.classList.add('-app-navigation__donation-button_blinking');
        this.isCanChosenCountry = false;
        this._facadeDonationListService.initNewCountryForDonation(this.country);
    }
    unchoose() {
        this.isCanChosenCountry = true;
        this._facadeDonationListService.deleteNewCountryForDonation(this.country);
    }
    switchToPreviousCountry() {
        const previousCountryName = this.previousCountry.name;
        this.switchRouterToSomeCountry(previousCountryName);
    }
    switchToNextCountry() {
        const nextCountryName = this.nextCountry.name;
        this.switchRouterToSomeCountry(nextCountryName);
    }
    canDeactivate() {
        const deactivateQuestion = 'You haven’t chosen country. Are you sure that you want to go from this page? For donation you need at least one country';
        return (!this._isChosenAtLeastOneCountry)
            ? confirm(deactivateQuestion)
            : true;
    }
}
CountryComponent.ɵfac = function CountryComponent_Factory(t) { return new (t || CountryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_store_donation_list_donation_list_facade__WEBPACK_IMPORTED_MODULE_7__["FacadeServiceDonationList"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_store_country_list_country_list_facade__WEBPACK_IMPORTED_MODULE_8__["FacadeServiceCountryList"])); };
CountryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CountryComponent, selectors: [["app-country"]], decls: 2, vars: 2, consts: [["class", "-app-country", 4, "ngIf"], ["class", "-app-loader", 4, "ngIf"], [1, "-app-country"], [1, "-app-country-wrapper"], [1, "-app-country__current-country"], [1, "-app-country__header"], [1, "-app-country__header-info"], [1, "-app-country__header-info-title"], [1, "-app-country__header-info-image", 3, "src"], [1, "-app-country__header-info-capital-title"], [1, "-app-country__header-info-capital-name"], [1, "-app-country__header-info-capital-latitude"], [1, "-app-country__header-info-capital-longitude"], [1, "-app-country__item"], [1, "-app-country__item-title"], [1, "-app-country__item-info"], [1, "-app-country__button-container"], [1, "-app-country__button-slide", "-app-country__button-slide_left", 3, "disabled", "click"], [1, "-app-country__button", "-app-country__button_choose", 3, "click"], [1, "-app-country__button", "-app-country__button_unchoose", 3, "click"], [1, "-app-country__button-slide", "-app-country__button-slide_right", 3, "disabled", "click"], [1, "-app-loader"], [1, "-app-loader__ball", "-app-loader__ball_first"], [1, "-app-loader__inner"], [1, "-app-loader__ball", "-app-loader__ball_second"], [1, "-app-loader__ball", "-app-loader__ball_third"], [1, "-app-loader__ball", "-app-loader__ball_fourth"], [1, "-app-loader__ball", "-app-loader__ball_fifth"], [1, "-app-loader__ball", "-app-loader__ball_sixth"], [1, "-app-loader__ball", "-app-loader__ball_center"]], template: function CountryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CountryComponent_div_0_Template, 56, 21, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CountryComponent_div_1_Template, 15, 0, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isSearchLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isSearchLoading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"]], pipes: [_pipes_country_list_format_area_pipe__WEBPACK_IMPORTED_MODULE_10__["FormatAreaPipe"], _pipes_country_list_format_forest_area_pipe__WEBPACK_IMPORTED_MODULE_11__["FormatForestAreaPipe"]], styles: ["@charset \"UTF-8\";\n[_nghost-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n}\n.-app-country[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  color: white;\n  letter-spacing: 2px;\n}\n.-app-country-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 80%;\n  overflow: hidden;\n}\n.-app-country__current-country[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n}\n.-app-country__header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 30%;\n  border-bottom: 2px solid white;\n}\n.-app-country__header-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 50%;\n  height: 100%;\n}\n.-app-country__header-info-title[_ngcontent-%COMP%] {\n  margin: 0px;\n  margin-bottom: 20px;\n  text-align: center;\n}\n.-app-country__header-info-image[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 100px;\n  border: 2px solid white;\n  border-radius: 5px;\n}\n.-app-country__header-info-capital-title[_ngcontent-%COMP%], .-app-country__header-info-capital-name[_ngcontent-%COMP%], .-app-country__header-info-capital-latitude[_ngcontent-%COMP%], .-app-country__header-info-capital-longitude[_ngcontent-%COMP%] {\n  margin: 10px;\n  text-align: center;\n}\n.-app-country__item[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n  padding: 33px 0px;\n  box-sizing: border-box;\n  border-bottom: 2px solid white;\n  font-size: 20px;\n}\n.-app-country__item-title[_ngcontent-%COMP%] {\n  padding-left: 75px;\n}\n.-app-country__item-info[_ngcontent-%COMP%] {\n  padding-right: 75px;\n}\n.-app-country__item[_ngcontent-%COMP%], .-app-country__header[_ngcontent-%COMP%] {\n  position: relative;\n}\n.-app-country__item[_ngcontent-%COMP%]:hover::before, .-app-country__header[_ngcontent-%COMP%]:hover::before {\n  height: 70%;\n}\n.-app-country__item[_ngcontent-%COMP%]::before, .-app-country__header[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  transition: 0.2s;\n  width: 3px;\n  height: 60%;\n  background-color: white;\n}\n.-app-country__button-container[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  width: 100%;\n  height: 20%;\n}\n.-app-country__button_choose[_ngcontent-%COMP%], .-app-country__button_unchoose[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  padding: 25px 80px;\n  transition: 0.4s;\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  outline: none;\n  box-shadow: 3px 3px 4px rgba(0, 0, 0, 0.6);\n  border: 2px solid white;\n  border-radius: 40px;\n  background-color: rgba(0, 0, 0, 0.8);\n  color: white;\n  letter-spacing: 2px;\n  font-weight: 700;\n  font-size: 20px;\n}\n.-app-country__button_choose[_ngcontent-%COMP%]:hover, .-app-country__button_unchoose[_ngcontent-%COMP%]:hover {\n  transform: translate(-51%, -51%);\n  background-color: rgba(0, 0, 0, 0.9);\n  box-shadow: 4px 5px 7px rgba(0, 0, 0, 0.9);\n}\n.-app-country__button_choose[_ngcontent-%COMP%] {\n  z-index: 4;\n  opacity: 1;\n}\n.-app-country__button_choose-invisible[_ngcontent-%COMP%] {\n  z-index: -1;\n  opacity: 0;\n}\n.-app-country__button_unchoose[_ngcontent-%COMP%] {\n  z-index: -1;\n  opacity: 0;\n}\n.-app-country__button_unchoose-visible[_ngcontent-%COMP%] {\n  z-index: 4;\n  opacity: 1;\n}\n.-app-country__button-slide[_ngcontent-%COMP%] {\n  position: relative;\n  width: 70px;\n  height: 70px;\n  transition: 0.2s;\n  cursor: pointer;\n  outline: none;\n  border: none;\n  background: none;\n}\n.-app-country__button-slide[_ngcontent-%COMP%]:active::before {\n  font-size: 50px;\n}\n.-app-country__button-slide[disabled][_ngcontent-%COMP%] {\n  cursor: default;\n  opacity: 0.3;\n}\n.-app-country__button-slide_left[_ngcontent-%COMP%]::before, .-app-country__button-slide_right[_ngcontent-%COMP%]::before {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  color: white;\n  text-shadow: 0px 0px 10px rgba(0, 0, 0, 0.9);\n  font-size: 46px;\n  font-weight: 900;\n  font-family: \"Font Awesome 5 free\", \"Font Awesome 5 brands\";\n}\n.-app-country__button-slide_left[_ngcontent-%COMP%]::before {\n  content: \"\uF053\";\n}\n.-app-country__button-slide_right[_ngcontent-%COMP%]::before {\n  content: \"\uF054\";\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY291bnRyeS9jb3VudHJ5LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb3VudHJ5L0Q6XFxFUEFNIHRyYWluaW5nXFxzYXZlLW91ci1wbGFuZXRcXHNhdmUtb3VyLXBsYW5ldC1wcm9qZWN0L3NyY1xcYXBwXFxjb3VudHJ5XFxjb3VudHJ5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQjtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBRUEsV0FBQTtFQUNBLFlBQUE7QURDSjtBQ0VBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtFQUVBLFdBQUE7RUFDQSxZQUFBO0VBRUEsWUFBQTtFQUNBLG1CQUFBO0FEREo7QUNFSTtFQUNJLGtCQUFBO0VBRUEsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFFQSxXQUFBO0VBQ0EsV0FBQTtFQUVBLGdCQUFBO0FESFI7QUNLSTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7RUFFQSxXQUFBO0VBQ0EsWUFBQTtBREpSO0FDTUk7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUVBLFdBQUE7RUFDQSxXQUFBO0VBRUEsOEJBQUE7QUROUjtBQ09RO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUVBLFVBQUE7RUFDQSxZQUFBO0FETlo7QUNPWTtFQUNJLFdBQUE7RUFDQSxtQkFBQTtFQUVBLGtCQUFBO0FETmhCO0FDUVk7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUVBLHVCQUFBO0VBQ0Esa0JBQUE7QURQaEI7QUNVZ0I7RUFJSSxZQUFBO0VBRUEsa0JBQUE7QURacEI7QUNpQkk7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUVBLFdBQUE7RUFFQSxpQkFBQTtFQUVBLHNCQUFBO0VBRUEsOEJBQUE7RUFFQSxlQUFBO0FEcEJSO0FDcUJRO0VBQ0ksa0JBQUE7QURuQlo7QUNxQlE7RUFDSSxtQkFBQTtBRG5CWjtBQ3NCSTtFQUVJLGtCQUFBO0FEckJSO0FDd0JZO0VBQ0ksV0FBQTtBRHRCaEI7QUN5QlE7RUFDSSxXQUFBO0VBRUEsa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0VBRUEsZ0JBQUE7RUFFQSxVQUFBO0VBQ0EsV0FBQTtFQUVBLHVCQUFBO0FEM0JaO0FDK0JRO0VBQ0ksa0JBQUE7RUFFQSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtFQUVBLFdBQUE7RUFDQSxXQUFBO0FEL0JaO0FDaUNRO0VBRUksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0VBRUEsa0JBQUE7RUFFQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtLQUFBLHNCQUFBO01BQUEscUJBQUE7VUFBQSxpQkFBQTtFQUVBLGFBQUE7RUFDQSwwQ0FBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFFQSxvQ0FBQTtFQUVBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBRHJDWjtBQ3NDWTtFQUNJLGdDQUFBO0VBQ0Esb0NBQUE7RUFDQSwwQ0FBQTtBRHBDaEI7QUN1Q1E7RUFDSSxVQUFBO0VBRUEsVUFBQTtBRHRDWjtBQ3VDWTtFQUNJLFdBQUE7RUFDQSxVQUFBO0FEckNoQjtBQ3dDUTtFQUNJLFdBQUE7RUFFQSxVQUFBO0FEdkNaO0FDd0NZO0VBQ0ksVUFBQTtFQUVBLFVBQUE7QUR2Q2hCO0FDMENRO0VBQ0ksa0JBQUE7RUFFQSxXQUFBO0VBQ0EsWUFBQTtFQUVBLGdCQUFBO0VBQ0EsZUFBQTtFQUVBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUQzQ1o7QUM4Q2dCO0VBQ0ksZUFBQTtBRDVDcEI7QUMrQ1k7RUFDSSxlQUFBO0VBRUEsWUFBQTtBRDlDaEI7QUNrRGdCO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0VBRUEsWUFBQTtFQUNBLDRDQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsMkRBQUE7QURqRHBCO0FDcURnQjtFQUNJLFlBQUE7QURuRHBCO0FDdURnQjtFQUNJLFlBQUE7QURyRHBCIiwiZmlsZSI6InNyYy9hcHAvY291bnRyeS9jb3VudHJ5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuOmhvc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLi1hcHAtY291bnRyeSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgY29sb3I6IHdoaXRlO1xuICBsZXR0ZXItc3BhY2luZzogMnB4O1xufVxuLi1hcHAtY291bnRyeS13cmFwcGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogODAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLi1hcHAtY291bnRyeV9fY3VycmVudC1jb3VudHJ5IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLi1hcHAtY291bnRyeV9faGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDMwJTtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHdoaXRlO1xufVxuLi1hcHAtY291bnRyeV9faGVhZGVyLWluZm8ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDUwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLi1hcHAtY291bnRyeV9faGVhZGVyLWluZm8tdGl0bGUge1xuICBtYXJnaW46IDBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLi1hcHAtY291bnRyeV9faGVhZGVyLWluZm8taW1hZ2Uge1xuICB3aWR0aDogMjAwcHg7XG4gIGhlaWdodDogMTAwcHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG4uLWFwcC1jb3VudHJ5X19oZWFkZXItaW5mby1jYXBpdGFsLXRpdGxlLCAuLWFwcC1jb3VudHJ5X19oZWFkZXItaW5mby1jYXBpdGFsLW5hbWUsIC4tYXBwLWNvdW50cnlfX2hlYWRlci1pbmZvLWNhcGl0YWwtbGF0aXR1ZGUsIC4tYXBwLWNvdW50cnlfX2hlYWRlci1pbmZvLWNhcGl0YWwtbG9uZ2l0dWRlIHtcbiAgbWFyZ2luOiAxMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uLWFwcC1jb3VudHJ5X19pdGVtIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMzNweCAwcHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB3aGl0ZTtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuLi1hcHAtY291bnRyeV9faXRlbS10aXRsZSB7XG4gIHBhZGRpbmctbGVmdDogNzVweDtcbn1cbi4tYXBwLWNvdW50cnlfX2l0ZW0taW5mbyB7XG4gIHBhZGRpbmctcmlnaHQ6IDc1cHg7XG59XG4uLWFwcC1jb3VudHJ5X19pdGVtLCAuLWFwcC1jb3VudHJ5X19oZWFkZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uLWFwcC1jb3VudHJ5X19pdGVtOmhvdmVyOjpiZWZvcmUsIC4tYXBwLWNvdW50cnlfX2hlYWRlcjpob3Zlcjo6YmVmb3JlIHtcbiAgaGVpZ2h0OiA3MCU7XG59XG4uLWFwcC1jb3VudHJ5X19pdGVtOjpiZWZvcmUsIC4tYXBwLWNvdW50cnlfX2hlYWRlcjo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgdHJhbnNpdGlvbjogMC4ycztcbiAgd2lkdGg6IDNweDtcbiAgaGVpZ2h0OiA2MCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuLi1hcHAtY291bnRyeV9fYnV0dG9uLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDIwJTtcbn1cbi4tYXBwLWNvdW50cnlfX2J1dHRvbl9jaG9vc2UsIC4tYXBwLWNvdW50cnlfX2J1dHRvbl91bmNob29zZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIHBhZGRpbmc6IDI1cHggODBweDtcbiAgdHJhbnNpdGlvbjogMC40cztcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm94LXNoYWRvdzogM3B4IDNweCA0cHggcmdiYSgwLCAwLCAwLCAwLjYpO1xuICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogNDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xuICBjb2xvcjogd2hpdGU7XG4gIGxldHRlci1zcGFjaW5nOiAycHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cbi4tYXBwLWNvdW50cnlfX2J1dHRvbl9jaG9vc2U6aG92ZXIsIC4tYXBwLWNvdW50cnlfX2J1dHRvbl91bmNob29zZTpob3ZlciB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MSUsIC01MSUpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOSk7XG4gIGJveC1zaGFkb3c6IDRweCA1cHggN3B4IHJnYmEoMCwgMCwgMCwgMC45KTtcbn1cbi4tYXBwLWNvdW50cnlfX2J1dHRvbl9jaG9vc2Uge1xuICB6LWluZGV4OiA0O1xuICBvcGFjaXR5OiAxO1xufVxuLi1hcHAtY291bnRyeV9fYnV0dG9uX2Nob29zZS1pbnZpc2libGUge1xuICB6LWluZGV4OiAtMTtcbiAgb3BhY2l0eTogMDtcbn1cbi4tYXBwLWNvdW50cnlfX2J1dHRvbl91bmNob29zZSB7XG4gIHotaW5kZXg6IC0xO1xuICBvcGFjaXR5OiAwO1xufVxuLi1hcHAtY291bnRyeV9fYnV0dG9uX3VuY2hvb3NlLXZpc2libGUge1xuICB6LWluZGV4OiA0O1xuICBvcGFjaXR5OiAxO1xufVxuLi1hcHAtY291bnRyeV9fYnV0dG9uLXNsaWRlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogNzBweDtcbiAgaGVpZ2h0OiA3MHB4O1xuICB0cmFuc2l0aW9uOiAwLjJzO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZDogbm9uZTtcbn1cbi4tYXBwLWNvdW50cnlfX2J1dHRvbi1zbGlkZTphY3RpdmU6OmJlZm9yZSB7XG4gIGZvbnQtc2l6ZTogNTBweDtcbn1cbi4tYXBwLWNvdW50cnlfX2J1dHRvbi1zbGlkZVtkaXNhYmxlZF0ge1xuICBjdXJzb3I6IGRlZmF1bHQ7XG4gIG9wYWNpdHk6IDAuMztcbn1cbi4tYXBwLWNvdW50cnlfX2J1dHRvbi1zbGlkZV9sZWZ0OjpiZWZvcmUsIC4tYXBwLWNvdW50cnlfX2J1dHRvbi1zbGlkZV9yaWdodDo6YmVmb3JlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LXNoYWRvdzogMHB4IDBweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC45KTtcbiAgZm9udC1zaXplOiA0NnB4O1xuICBmb250LXdlaWdodDogOTAwO1xuICBmb250LWZhbWlseTogXCJGb250IEF3ZXNvbWUgNSBmcmVlXCIsIFwiRm9udCBBd2Vzb21lIDUgYnJhbmRzXCI7XG59XG4uLWFwcC1jb3VudHJ5X19idXR0b24tc2xpZGVfbGVmdDo6YmVmb3JlIHtcbiAgY29udGVudDogXCLvgZNcIjtcbn1cbi4tYXBwLWNvdW50cnlfX2J1dHRvbi1zbGlkZV9yaWdodDo6YmVmb3JlIHtcbiAgY29udGVudDogXCLvgZRcIjtcbn0iLCI6aG9zdCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uLWFwcC1jb3VudHJ5IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuXHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gICAgJi13cmFwcGVyIHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiA4MCU7XHJcblxyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB9XHJcbiAgICAmX19jdXJyZW50LWNvdW50cnkge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgfVxyXG4gICAgJl9faGVhZGVyIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMzAlO1xyXG5cclxuICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgd2hpdGU7XHJcbiAgICAgICAgJi1pbmZvIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICYtdGl0bGUge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG5cclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmLWltYWdlIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAyMDBweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwcHg7XHJcblxyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJi1jYXBpdGFsIHtcclxuICAgICAgICAgICAgICAgICYtdGl0bGUsXHJcbiAgICAgICAgICAgICAgICAmLW5hbWUsXHJcbiAgICAgICAgICAgICAgICAmLWxhdGl0dWRlLFxyXG4gICAgICAgICAgICAgICAgJi1sb25naXR1ZGUge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMTBweDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgJl9faXRlbSB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgICAgIHBhZGRpbmc6IDMzcHggMHB4O1xyXG5cclxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cclxuICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgd2hpdGU7XHJcblxyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAmLXRpdGxlIHtcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA3NXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAmLWluZm8ge1xyXG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiA3NXB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgICZfX2l0ZW0sXHJcbiAgICAmX19oZWFkZXIge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICY6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDcwJTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG5cclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuXHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IDAuMnM7XHJcblxyXG4gICAgICAgICAgICB3aWR0aDogM3B4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDYwJTtcclxuXHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgICZfX2J1dHRvbiB7XHJcbiAgICAgICAgJi1jb250YWluZXIge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDIwJTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJl9jaG9vc2UsXHJcbiAgICAgICAgJl91bmNob29zZSB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcblxyXG4gICAgICAgICAgICBwYWRkaW5nOiAyNXB4IDgwcHg7XHJcblxyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjRzO1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG5cclxuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogM3B4IDNweCA0cHggcmdiYSgwLCAwLCAwLCAwLjYpO1xyXG4gICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNDBweDtcclxuXHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTtcclxuXHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MSUsIC01MSUpO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjkpO1xyXG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogNHB4IDVweCA3cHggcmdiYSgwLCAwLCAwLCAwLjkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICZfY2hvb3NlIHtcclxuICAgICAgICAgICAgei1pbmRleDogNDtcclxuXHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICAgICYtaW52aXNpYmxlIHtcclxuICAgICAgICAgICAgICAgIHotaW5kZXg6IC0xO1xyXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAmX3VuY2hvb3NlIHtcclxuICAgICAgICAgICAgei1pbmRleDogLTE7XHJcblxyXG4gICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgICAmLXZpc2libGUge1xyXG4gICAgICAgICAgICAgICAgei1pbmRleDogNDtcclxuXHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYtc2xpZGUge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgICAgICAgICB3aWR0aDogNzBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiA3MHB4O1xyXG5cclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogMC4ycztcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG5cclxuICAgICAgICAgICAgJjphY3RpdmUge1xyXG4gICAgICAgICAgICAgICAgJjo6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDUwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJltkaXNhYmxlZF0ge1xyXG4gICAgICAgICAgICAgICAgY3Vyc29yOiBkZWZhdWx0O1xyXG5cclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuMztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmX2xlZnQsXHJcbiAgICAgICAgICAgICZfcmlnaHQge1xyXG4gICAgICAgICAgICAgICAgJjo6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDBweCAwcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuOSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiA0NnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiRm9udCBBd2Vzb21lIDUgZnJlZVwiLCBcIkZvbnQgQXdlc29tZSA1IGJyYW5kc1wiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICZfbGVmdCB7XHJcbiAgICAgICAgICAgICAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXFxmMDUzXCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJl9yaWdodCB7XHJcbiAgICAgICAgICAgICAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXFxmMDU0XCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CountryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-country',
                templateUrl: './country.component.html',
                styleUrls: ['./country.component.scss']
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }, { type: _store_donation_list_donation_list_facade__WEBPACK_IMPORTED_MODULE_7__["FacadeServiceDonationList"] }, { type: _store_country_list_country_list_facade__WEBPACK_IMPORTED_MODULE_8__["FacadeServiceCountryList"] }]; }, null); })();


/***/ }),

/***/ "./src/app/guards/country-list/can-leave-country.guard.ts":
/*!****************************************************************!*\
  !*** ./src/app/guards/country-list/can-leave-country.guard.ts ***!
  \****************************************************************/
/*! exports provided: CanLeaveCountryGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanLeaveCountryGuard", function() { return CanLeaveCountryGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class CanLeaveCountryGuard {
    canDeactivate(component) {
        return component.canDeactivate ? component.canDeactivate() : true;
    }
}
CanLeaveCountryGuard.ɵfac = function CanLeaveCountryGuard_Factory(t) { return new (t || CanLeaveCountryGuard)(); };
CanLeaveCountryGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CanLeaveCountryGuard, factory: CanLeaveCountryGuard.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CanLeaveCountryGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();


/***/ }),

/***/ "./src/app/guards/country-list/can-proceed-to-country.guard.ts":
/*!*********************************************************************!*\
  !*** ./src/app/guards/country-list/can-proceed-to-country.guard.ts ***!
  \*********************************************************************/
/*! exports provided: CanProceedToCountryGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanProceedToCountryGuard", function() { return CanProceedToCountryGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _store_country_list_country_list_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../store/country-list/country-list.selectors */ "./src/app/store/country-list/country-list.selectors.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");




class CanProceedToCountryGuard {
    constructor(_store$) {
        this._store$ = _store$;
    }
    takeNameOfRegionOrSubRegion(name) {
        return name.toLowerCase().split(' ')[0];
    }
    isExistRegionOrSubRegionRouteName(name) {
        const currentCountryRegionOrSubRegionRouteName = this.takeNameOfRegionOrSubRegion(name);
        if (this._currentUrl.includes(currentCountryRegionOrSubRegionRouteName)) {
            return true;
        }
        else {
            return false;
        }
    }
    checkCountry(countryRouterName) {
        let isExistCurrentUrlCountry;
        const searchCountry = this._countryList.find((country) => {
            if (Boolean(country)) {
                const currentCountryRouterName = country.name.replace(/\./g, '')
                    .replace(/\(|\)/g, '')
                    .toLowerCase()
                    .split(' ')
                    .join('-');
                if (currentCountryRouterName === countryRouterName) {
                    return country;
                }
            }
        });
        if (Boolean(searchCountry)) {
            isExistCurrentUrlCountry = this.isExistRegionOrSubRegionRouteName(searchCountry.region);
            isExistCurrentUrlCountry = this.isExistRegionOrSubRegionRouteName(searchCountry.subRegion);
        }
        if (!isExistCurrentUrlCountry) {
            const errorMessage = `There is no country with this name (${countryRouterName}) in this region and sub-region`;
            throw new Error(errorMessage);
        }
    }
    canActivate(next, state) {
        this._currentUrl = state.url;
        const currentCountryName = next.params.countryName;
        this._store$.select(_store_country_list_country_list_selectors__WEBPACK_IMPORTED_MODULE_1__["selectCountryList"])
            .subscribe((countryList) => {
            this._countryList = countryList;
            this.checkCountry(currentCountryName);
        }).unsubscribe();
        return true;
    }
}
CanProceedToCountryGuard.ɵfac = function CanProceedToCountryGuard_Factory(t) { return new (t || CanProceedToCountryGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"])); };
CanProceedToCountryGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CanProceedToCountryGuard, factory: CanProceedToCountryGuard.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CanProceedToCountryGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }]; }, null); })();


/***/ }),

/***/ "./src/app/guards/country-list/can-proceed-to-region.guard.ts":
/*!********************************************************************!*\
  !*** ./src/app/guards/country-list/can-proceed-to-region.guard.ts ***!
  \********************************************************************/
/*! exports provided: CanProceedToRegionGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanProceedToRegionGuard", function() { return CanProceedToRegionGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _store_country_list_country_list_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../store/country-list/country-list.selectors */ "./src/app/store/country-list/country-list.selectors.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");




class CanProceedToRegionGuard {
    constructor(_store$) {
        this._store$ = _store$;
    }
    checkRouterParams(regionName, subRegionName) {
        const currentRegionSubRegionCountry = this._countryList.find((country) => {
            if (Boolean(country)) {
                const currentCountryRegionName = country.region.split(' ')[0].toLowerCase();
                const currentCountrySubRegionName = country.subRegion.split(' ')[0].toLowerCase();
                if (currentCountryRegionName === regionName && currentCountrySubRegionName === subRegionName) {
                    return country;
                }
            }
        });
        if (!Boolean(currentRegionSubRegionCountry)) {
            const errorMessage = `There are no countries in such region (${regionName}) and sub-region (${subRegionName})`;
            throw new Error(errorMessage);
        }
    }
    canActivate(next) {
        const currentRegion = next.params.regionName;
        const currentSubRegion = next.params.subRegionName;
        this._store$.select(_store_country_list_country_list_selectors__WEBPACK_IMPORTED_MODULE_1__["selectCountryList"])
            .subscribe((countryList) => {
            this._countryList = countryList;
        }).unsubscribe();
        this.checkRouterParams(currentRegion, currentSubRegion);
        return true;
    }
}
CanProceedToRegionGuard.ɵfac = function CanProceedToRegionGuard_Factory(t) { return new (t || CanProceedToRegionGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"])); };
CanProceedToRegionGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CanProceedToRegionGuard, factory: CanProceedToRegionGuard.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CanProceedToRegionGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pipes/country-list/format-area.pipe.ts":
/*!********************************************************!*\
  !*** ./src/app/pipes/country-list/format-area.pipe.ts ***!
  \********************************************************/
/*! exports provided: FormatAreaPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormatAreaPipe", function() { return FormatAreaPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class FormatAreaPipe {
    transform(value) {
        const currentCountryArea = value.toString();
        const currentCountryAreaInfoWithSpacesAfterEachThirdCharacters = currentCountryArea
            .replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, '$1' + ' ');
        const countryAreaInfo = currentCountryAreaInfoWithSpacesAfterEachThirdCharacters + ' sq/km';
        return countryAreaInfo;
    }
}
FormatAreaPipe.ɵfac = function FormatAreaPipe_Factory(t) { return new (t || FormatAreaPipe)(); };
FormatAreaPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "formatArea", type: FormatAreaPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormatAreaPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'formatArea'
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pipes/country-list/format-forest-area.pipe.ts":
/*!***************************************************************!*\
  !*** ./src/app/pipes/country-list/format-forest-area.pipe.ts ***!
  \***************************************************************/
/*! exports provided: FormatForestAreaPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormatForestAreaPipe", function() { return FormatForestAreaPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class FormatForestAreaPipe {
    transform(value) {
        const currentCountryForestArea = value;
        const currentCountryForestAreaInfo = `${currentCountryForestArea}%`;
        return currentCountryForestAreaInfo;
    }
}
FormatForestAreaPipe.ɵfac = function FormatForestAreaPipe_Factory(t) { return new (t || FormatForestAreaPipe)(); };
FormatForestAreaPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "formatForestArea", type: FormatForestAreaPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormatForestAreaPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'formatForestArea'
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pipes/country-list/format-region-title.pipe.ts":
/*!****************************************************************!*\
  !*** ./src/app/pipes/country-list/format-region-title.pipe.ts ***!
  \****************************************************************/
/*! exports provided: FormatRegionTitlePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormatRegionTitlePipe", function() { return FormatRegionTitlePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class FormatRegionTitlePipe {
    transform(value) {
        return value.split('-').map((currentWord) => {
            return currentWord[0].toUpperCase() + currentWord.slice(1);
        }).join(' ');
    }
}
FormatRegionTitlePipe.ɵfac = function FormatRegionTitlePipe_Factory(t) { return new (t || FormatRegionTitlePipe)(); };
FormatRegionTitlePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "formatRegionTitle", type: FormatRegionTitlePipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormatRegionTitlePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'formatRegionTitle'
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/region/region.component.ts":
/*!********************************************!*\
  !*** ./src/app/region/region.component.ts ***!
  \********************************************/
/*! exports provided: RegionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegionComponent", function() { return RegionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _store_country_list_country_list_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/country-list/country-list.selectors */ "./src/app/store/country-list/country-list.selectors.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _store_country_list_country_list_facade__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../store/country-list/country-list.facade */ "./src/app/store/country-list/country-list.facade.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _country_name_country_name_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../country-name/country-name.component */ "./src/app/country-name/country-name.component.ts");
/* harmony import */ var _pipes_country_list_format_region_title_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../pipes/country-list/format-region-title.pipe */ "./src/app/pipes/country-list/format-region-title.pipe.ts");











function RegionComponent_app_country_name_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-country-name", 7);
} if (rf & 2) {
    const country_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("country", country_r1);
} }
class RegionComponent {
    constructor(_store$, _router, _activatedRoute, _facadeCountryListService) {
        this._store$ = _store$;
        this._router = _router;
        this._activatedRoute = _activatedRoute;
        this._facadeCountryListService = _facadeCountryListService;
        this._destroySubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this._windowScrollHeight = 2;
    }
    navigateToCurrentSubRegionRoute() {
        const firstSubRegionCountryName = this.subRegionsCountries[0].name;
        const firstSubRegionCountryRouterName = firstSubRegionCountryName.replace(/\./g, '')
            .replace(/\(|\)/g, '')
            .toLowerCase()
            .split(' ')
            .join('-');
        this._router.navigate(['/countries', 'region', this.regionName, this.subRegionName, 'country', firstSubRegionCountryRouterName]);
    }
    ngOnInit() {
        const scrollUpButton = document.querySelector('.-app-scroll-up-button_sub-region-category');
        this._scrollBlock = document.querySelector('.-app-region');
        this._scrollBlock.addEventListener('scroll', () => {
            if (this._scrollBlock.scrollTop > this._windowScrollHeight) {
                scrollUpButton.classList.add('-app-scroll-up-button_sub-region-category-visible');
            }
            else {
                scrollUpButton.classList.remove('-app-scroll-up-button_sub-region-category-visible');
            }
        });
        this._activatedRoute.params
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(this._destroySubject$)).subscribe((params) => {
            this.regionName = params.regionName;
            this.subRegionName = params.subRegionName;
            this._facadeCountryListService.searchSubRegionCountries(this.regionName, this.subRegionName);
        });
        this._store$.select(_store_country_list_country_list_selectors__WEBPACK_IMPORTED_MODULE_3__["selectSubRegionsCountries"])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(this._destroySubject$)).subscribe((subRegionsCountries) => {
            if (Boolean(subRegionsCountries)) {
                this.subRegionsCountries = subRegionsCountries;
                this.navigateToCurrentSubRegionRoute();
            }
        });
    }
    ngOnDestroy() {
        this._destroySubject$.next(true);
        this._destroySubject$.complete();
    }
    scrollTop() {
        this._scrollBlock.scrollTo(0, 0);
    }
}
RegionComponent.ɵfac = function RegionComponent_Factory(t) { return new (t || RegionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_store_country_list_country_list_facade__WEBPACK_IMPORTED_MODULE_6__["FacadeServiceCountryList"])); };
RegionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RegionComponent, selectors: [["app-region"]], decls: 12, vars: 7, consts: [[1, "-app-region"], [1, "-app-region__title"], [1, "-app-region__sub-title"], [1, "-app-region__country-list"], [3, "country", 4, "ngFor", "ngForOf"], [1, "-app-scroll-up-button", "-app-scroll-up-button_sub-region-category", 3, "click"], [1, "-app-region__current-country"], [3, "country"]], template: function RegionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "formatRegionTitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "formatRegionTitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, RegionComponent_app_country_name_8_Template, 1, 1, "app-country-name", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegionComponent_Template_a_click_9_listener() { return ctx.scrollTop(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 3, ctx.regionName), " Region ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 5, ctx.subRegionName), " Subregion ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.subRegionsCountries);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterOutlet"], _country_name_country_name_component__WEBPACK_IMPORTED_MODULE_8__["CountryNameComponent"]], pipes: [_pipes_country_list_format_region_title_pipe__WEBPACK_IMPORTED_MODULE_9__["FormatRegionTitlePipe"]], styles: ["[_nghost-%COMP%] {\n  position: relative;\n  display: flex;\n  width: 100%;\n  height: 100vh;\n}\n[_nghost-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: -1;\n  width: 100%;\n  height: 100vh;\n  background-image: url('region-menu-bg.jpg');\n  background-size: cover;\n}\n.-app-region[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  overflow: scroll;\n  width: 50%;\n  height: 100vh;\n}\n.-app-region__title[_ngcontent-%COMP%], .-app-region__sub-title[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 0px;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  color: white;\n  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);\n  text-align: center;\n  letter-spacing: 2.5px;\n  font-weight: 800;\n}\n.-app-region__title[_ngcontent-%COMP%] {\n  padding: 30px;\n  font-size: 36px;\n}\n.-app-region__sub-title[_ngcontent-%COMP%] {\n  padding: 30px;\n  padding-top: 0px;\n  font-size: 28px;\n}\n.-app-region__country-list[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 80vh;\n}\n.-app-region__current-country[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 50%;\n  height: 100vh;\n  border-left: 2px solid white;\n  background-color: rgba(0, 0, 0, 0.6);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaW9uL0Q6XFxFUEFNIHRyYWluaW5nXFxzYXZlLW91ci1wbGFuZXRcXHNhdmUtb3VyLXBsYW5ldC1wcm9qZWN0L3NyY1xcYXBwXFxyZWdpb25cXHJlZ2lvbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcmVnaW9uL3JlZ2lvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBRUEsYUFBQTtFQUVBLFdBQUE7RUFDQSxhQUFBO0FDREo7QURFSTtFQUNJLFdBQUE7RUFFQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUVBLFdBQUE7RUFDQSxhQUFBO0VBRUEsMkNBQUE7RUFDQSxzQkFBQTtBQ0hSO0FET0E7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFFQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBRUEsZ0JBQUE7RUFFQSxVQUFBO0VBQ0EsYUFBQTtBQ1BKO0FEUUk7RUFFSSxXQUFBO0VBRUEsV0FBQTtFQUVBLHlCQUFBO0tBQUEsc0JBQUE7TUFBQSxxQkFBQTtVQUFBLGlCQUFBO0VBRUEsWUFBQTtFQUNBLDJDQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0FDVlI7QURZSTtFQUNJLGFBQUE7RUFFQSxlQUFBO0FDWFI7QURhSTtFQUNJLGFBQUE7RUFDQSxnQkFBQTtFQUVBLGVBQUE7QUNaUjtBRGNJO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUNaUjtBRGNJO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBRUEsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFFQSxVQUFBO0VBQ0EsYUFBQTtFQUVBLDRCQUFBO0VBRUEsb0NBQUE7QUNoQlIiLCJmaWxlIjoic3JjL2FwcC9yZWdpb24vcmVnaW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcblxyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgJjo6YWZ0ZXIge1xyXG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcblxyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICB6LWluZGV4OiAtMTtcclxuXHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDB2aDtcclxuXHJcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL2ltYWdlcy9jb3VudHJ5LWxpc3QvcmVnaW9uLW1lbnUtYmcuanBnXCIpO1xyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICB9XHJcbn1cclxuXHJcbi4tYXBwLXJlZ2lvbiB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB6LWluZGV4OiAyO1xyXG5cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICAgIG92ZXJmbG93OiBzY3JvbGw7XHJcblxyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICAmX190aXRsZSxcclxuICAgICZfX3N1Yi10aXRsZSB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgICAgIG1hcmdpbjogMHB4O1xyXG5cclxuICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuXHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIHRleHQtc2hhZG93OiAycHggMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuOCk7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAyLjVweDtcclxuICAgICAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgfVxyXG4gICAgJl9fdGl0bGUge1xyXG4gICAgICAgIHBhZGRpbmc6IDMwcHg7XHJcblxyXG4gICAgICAgIGZvbnQtc2l6ZTogMzZweDtcclxuICAgIH1cclxuICAgICZfX3N1Yi10aXRsZSB7XHJcbiAgICAgICAgcGFkZGluZzogMzBweDtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMHB4O1xyXG5cclxuICAgICAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgICB9XHJcbiAgICAmX19jb3VudHJ5LWxpc3Qge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogODB2aDtcclxuICAgIH1cclxuICAgICZfX2N1cnJlbnQtY291bnRyeSB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHotaW5kZXg6IDI7XHJcblxyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMHZoO1xyXG5cclxuICAgICAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkIHdoaXRlO1xyXG5cclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XHJcbiAgICB9XHJcbn1cclxuIiwiOmhvc3Qge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMHZoO1xufVxuOmhvc3Q6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6IC0xO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL2ltYWdlcy9jb3VudHJ5LWxpc3QvcmVnaW9uLW1lbnUtYmcuanBnXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4uLWFwcC1yZWdpb24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBvdmVyZmxvdzogc2Nyb2xsO1xuICB3aWR0aDogNTAlO1xuICBoZWlnaHQ6IDEwMHZoO1xufVxuLi1hcHAtcmVnaW9uX190aXRsZSwgLi1hcHAtcmVnaW9uX19zdWItdGl0bGUge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwcHg7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtc2hhZG93OiAycHggMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuOCk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGV0dGVyLXNwYWNpbmc6IDIuNXB4O1xuICBmb250LXdlaWdodDogODAwO1xufVxuLi1hcHAtcmVnaW9uX190aXRsZSB7XG4gIHBhZGRpbmc6IDMwcHg7XG4gIGZvbnQtc2l6ZTogMzZweDtcbn1cbi4tYXBwLXJlZ2lvbl9fc3ViLXRpdGxlIHtcbiAgcGFkZGluZzogMzBweDtcbiAgcGFkZGluZy10b3A6IDBweDtcbiAgZm9udC1zaXplOiAyOHB4O1xufVxuLi1hcHAtcmVnaW9uX19jb3VudHJ5LWxpc3Qge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA4MHZoO1xufVxuLi1hcHAtcmVnaW9uX19jdXJyZW50LWNvdW50cnkge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB3aWR0aDogNTAlO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBib3JkZXItbGVmdDogMnB4IHNvbGlkIHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-region',
                templateUrl: './region.component.html',
                styleUrls: ['./region.component.scss']
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }, { type: _store_country_list_country_list_facade__WEBPACK_IMPORTED_MODULE_6__["FacadeServiceCountryList"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=country-list-country-list-module-es2015.js.map