(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["about-about-module"],{

/***/ "./src/app/about/about-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/about/about-routing.module.ts ***!
  \***********************************************/
/*! exports provided: AboutRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutRoutingModule", function() { return AboutRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _about_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about.component */ "./src/app/about/about.component.ts");





const routes = [
    {
        path: '',
        component: _about_component__WEBPACK_IMPORTED_MODULE_2__["AboutComponent"]
    }
];
class AboutRoutingModule {
}
AboutRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AboutRoutingModule });
AboutRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AboutRoutingModule_Factory(t) { return new (t || AboutRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AboutRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class AboutComponent {
    // tslint:disable-next-line: no-empty
    constructor() {
        this._windowScrollHeight = 500;
    }
    ngOnInit() {
        const leftDesert = document.querySelector('.-app-about__parallax-item_desert-left');
        const rightDesert = document.querySelector('.-app-about__parallax-item_desert-right');
        window.addEventListener('scroll', () => {
            if (window.scrollY > this._windowScrollHeight) {
                leftDesert.classList.add('-app-about__parallax-item_desert-left-invisible');
                rightDesert.classList.add('-app-about__parallax-item_desert-right-invisible');
            }
            else {
                leftDesert.classList.remove('-app-about__parallax-item_desert-left-invisible');
                rightDesert.classList.remove('-app-about__parallax-item_desert-right-invisible');
            }
        });
    }
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(); };
AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["app-about"]], decls: 21, vars: 0, consts: [[1, "-app-about"], [1, "-app-about__parallax"], [1, "-app-about__parallax-item", "-app-about__parallax-item_forest"], [1, "-app-about__parallax-item", "-app-about__parallax-item_desert-left"], [1, "-app-about__parallax-item", "-app-about__parallax-item_desert-right"], [1, "-app-about__content"], [1, "-app-about__content-wrapper"], [1, "-app-about__content-header"], [1, "-app-about__content-title"], [1, "-app-about__content-sub-title"], [1, "-app-about__content-article"], [1, "-app-about__content-article-paragraph"]], template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h1", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Hello ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h2", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " It is Save Our Planet Project ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Our project is based on planting trees around the world. You can select any country in the countries menu and select any tree in the trees menu. If you donate a tree to a country, you will receive honey points which you can convert in your profile to health insurance with which you can get a good discount in any medical institution. Our project is still young enough but we try to make the world a better place. Join our project and make the world green! Egor Samuilionok was engaged in this project, the development of which was spent about a month. All ideas were invented either in the shower or in the soft bed. Also inspiration was my imagination and rich inner world. Our office is located in the city of Mogilev at 10 Lane Oil House. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Lorem ipsum dolor sit amet consectetur adipisicing elit. Error aspernatur sint eius totam, numquam ipsa vel ab cumque itaque, voluptatibus placeat. Iusto dolore nostrum fugit quos tempore qui voluptatem, incidunt provident nemo officiis fugiat voluptas sint! Asperiores vel fuga magni excepturi dignissimos velit quisquam pariatur adipisci quos neque rem soluta consectetur corrupti illo sapiente alias rerum quibusdam, error provident tempore ipsum porro nemo officia. Molestiae rem molestias doloribus consequuntur, reprehenderit vitae aliquid deleniti totam velit quis adipisci magni iure, commodi deserunt? Harum aut atque possimus voluptates aspernatur libero suscipit similique, quas nostrum sunt consequuntur, magni obcaecati iste magnam. Minima laborum, voluptatem maiores ratione perspiciatis ducimus totam voluptas voluptate ipsa saepe modi expedita! Sequi, tenetur quas autem aliquam vel cum! Perferendis recusandae necessitatibus inventore vel voluptates fuga rem aspernatur temporibus obcaecati? Excepturi tenetur voluptate quae ea alias ratione ipsum reiciendis quisquam vel qui velit error quos unde, at modi itaque earum. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Lorem ipsum dolor sit amet consectetur adipisicing elit. Error aspernatur sint eius totam, numquam ipsa vel ab cumque itaque, voluptatibus placeat. Iusto dolore nostrum fugit quos tempore qui voluptatem, incidunt provident nemo officiis fugiat voluptas sint! Asperiores vel fuga magni excepturi dignissimos velit quisquam pariatur adipisci quos neque rem soluta consectetur corrupti illo sapiente alias rerum quibusdam, error provident tempore ipsum porro nemo officia. Molestiae rem molestias doloribus consequuntur, reprehenderit vitae aliquid deleniti totam velit quis adipisci magni iure, commodi deserunt? Harum aut atque possimus voluptates aspernatur libero suscipit similique, quas nostrum sunt consequuntur, magni obcaecati iste magnam. Minima laborum, voluptatem maiores ratione perspiciatis ducimus totam voluptas voluptate ipsa saepe modi expedita! Sequi, tenetur quas autem aliquam vel cum! Perferendis recusandae necessitatibus inventore vel voluptates fuga rem aspernatur temporibus obcaecati? Excepturi tenetur voluptate quae ea alias ratione ipsum reiciendis quisquam vel qui velit error quos unde, at modi itaque earum. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Lorem ipsum dolor sit amet consectetur adipisicing elit. Error aspernatur sint eius totam, numquam ipsa vel ab cumque itaque, voluptatibus placeat. Iusto dolore nostrum fugit quos tempore qui voluptatem, incidunt provident nemo officiis fugiat voluptas sint! Asperiores vel fuga magni excepturi dignissimos velit quisquam pariatur adipisci quos neque rem soluta consectetur corrupti illo sapiente alias rerum quibusdam, error provident tempore ipsum porro nemo officia. Molestiae rem molestias doloribus consequuntur, reprehenderit vitae aliquid deleniti totam velit quis adipisci magni iure, commodi deserunt? Harum aut atque possimus voluptates aspernatur libero suscipit similique, quas nostrum sunt consequuntur, magni obcaecati iste magnam. Minima laborum, voluptatem maiores ratione perspiciatis ducimus totam voluptas voluptate ipsa saepe modi expedita! Sequi, tenetur quas autem aliquam vel cum! Perferendis recusandae necessitatibus inventore vel voluptates fuga rem aspernatur temporibus obcaecati? Excepturi tenetur voluptate quae ea alias ratione ipsum reiciendis quisquam vel qui velit error quos unde, at modi itaque earum. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["[_nghost-%COMP%] {\n  position: relative;\n  width: 100%;\n  height: 100vh;\n}\n\n.-app-about[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0%;\n  left: 0%;\n  width: 100%;\n  height: 100%;\n}\n\n.-app-about__parallax[_ngcontent-%COMP%] {\n  position: relative;\n  height: 100%;\n}\n\n.-app-about__parallax-item[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 0%;\n  left: 120px;\n  width: 100%;\n  transition: 3s;\n}\n\n.-app-about__parallax-item_forest[_ngcontent-%COMP%] {\n  height: 100%;\n  background: url('green-trees-bg.jpg') 0 0/cover no-repeat;\n}\n\n.-app-about__parallax-item_desert-right[_ngcontent-%COMP%] {\n  z-index: 1;\n  height: 80%;\n  perspective: 800px;\n  perspective-origin: top right;\n  transform-style: preserve-3d;\n  transform: rotate(0deg, 10deg, 10deg);\n  background: url('desert-right-image.png') top right/100% no-repeat;\n}\n\n.-app-about__parallax-item_desert-right-invisible[_ngcontent-%COMP%] {\n  transform: translate3d(100px, 50%, -100px);\n}\n\n.-app-about__parallax-item_desert-left[_ngcontent-%COMP%] {\n  z-index: 1;\n  height: 70%;\n  perspective: 800px;\n  perspective-origin: bottom left;\n  transform-style: preserve-3d;\n  transform: rotate(0deg, 10deg, 10deg);\n  background: url('desert-left-image.png') left top/45% no-repeat;\n}\n\n.-app-about__parallax-item_desert-left-invisible[_ngcontent-%COMP%] {\n  transform: translate3d(-100px, 50%, -200px);\n}\n\n.-app-about__content[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  max-width: 100%;\n  background: url('green-trees-bg.png') 0 0/cover no-repeat;\n}\n\n.-app-about__content-wrapper[_ngcontent-%COMP%] {\n  max-width: 1200px;\n}\n\n.-app-about__content-header[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n  padding: 0px 20px;\n  text-align: center;\n  text-transform: uppercase;\n}\n\n.-app-about__content-title[_ngcontent-%COMP%], .-app-about__content-sub-title[_ngcontent-%COMP%] {\n  margin: 0px;\n}\n\n.-app-about__content-title[_ngcontent-%COMP%] {\n  font-size: 100px;\n}\n\n.-app-about__content-sub-title[_ngcontent-%COMP%] {\n  font-size: 50px;\n}\n\n.-app-about__content-article[_ngcontent-%COMP%] {\n  padding: 25px;\n  border-radius: 10px;\n  background-color: rgba(255, 255, 255, 0.3);\n  text-align: center;\n  line-height: 24px;\n  font-size: 18px;\n}\n\n.-app-about__content-article-paragraph[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQvRDpcXEVQQU0gdHJhaW5pbmdcXHNhdmUtb3VyLXBsYW5ldFxcc2F2ZS1vdXItcGxhbmV0LXByb2plY3Qvc3JjXFxhcHBcXGFib3V0XFxhYm91dC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUVBLFdBQUE7RUFDQSxhQUFBO0FDQUo7O0FER0E7RUFDSSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBRUEsV0FBQTtFQUNBLFlBQUE7QUNESjs7QURFSTtFQUNJLGtCQUFBO0VBRUEsWUFBQTtBQ0RSOztBREVRO0VBQ0ksZUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBRUEsV0FBQTtFQUVBLGNBQUE7QUNGWjs7QURHWTtFQUNJLFlBQUE7RUFFQSx5REFBQTtBQ0ZoQjs7QURJWTtFQUNJLFVBQUE7RUFFQSxXQUFBO0VBRUEsa0JBQUE7RUFDQSw2QkFBQTtFQUNBLDRCQUFBO0VBQ0EscUNBQUE7RUFFQSxrRUFBQTtBQ0xoQjs7QURNZ0I7RUFDSSwwQ0FBQTtBQ0pwQjs7QURPWTtFQUNJLFVBQUE7RUFFQSxXQUFBO0VBRUEsa0JBQUE7RUFDQSwrQkFBQTtFQUNBLDRCQUFBO0VBQ0EscUNBQUE7RUFFQSwrREFBQTtBQ1JoQjs7QURTZ0I7RUFDSSwyQ0FBQTtBQ1BwQjs7QURZSTtFQUNJLGtCQUFBO0VBRUEsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFFQSxlQUFBO0VBRUEseURBQUE7QUNiUjs7QURjUTtFQUNJLGlCQUFBO0FDWlo7O0FEY1E7RUFDSSxtQkFBQTtFQUNBLGlCQUFBO0VBRUEsa0JBQUE7RUFDQSx5QkFBQTtBQ2JaOztBRGVRO0VBRUksV0FBQTtBQ2RaOztBRGdCUTtFQUNJLGdCQUFBO0FDZFo7O0FEZ0JRO0VBQ0ksZUFBQTtBQ2RaOztBRGdCUTtFQUNJLGFBQUE7RUFFQSxtQkFBQTtFQUVBLDBDQUFBO0VBRUEsa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUNqQlo7O0FEa0JZO0VBQ0ksbUJBQUE7QUNoQmhCIiwiZmlsZSI6InNyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG59XHJcblxyXG4uLWFwcC1hYm91dCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDAlO1xyXG4gICAgbGVmdDogMCU7XHJcblxyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAmX19wYXJhbGxheCB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgJi1pdGVtIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgICAgICBib3R0b206IDAlO1xyXG4gICAgICAgICAgICBsZWZ0OiAxMjBweDtcclxuXHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogM3M7XHJcbiAgICAgICAgICAgICZfZm9yZXN0IHtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoXCJzcmMvYXNzZXRzL2ltYWdlcy9hYm91dC9ncmVlbi10cmVlcy1iZy5qcGdcIikgMCAwIC8gY292ZXIgbm8tcmVwZWF0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICZfZGVzZXJ0LXJpZ2h0IHtcclxuICAgICAgICAgICAgICAgIHotaW5kZXg6IDE7XHJcblxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA4MCU7XHJcblxyXG4gICAgICAgICAgICAgICAgcGVyc3BlY3RpdmU6IDgwMHB4O1xyXG4gICAgICAgICAgICAgICAgcGVyc3BlY3RpdmUtb3JpZ2luOiB0b3AgcmlnaHQ7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZywgMTBkZWcsIDEwZGVnKTtcclxuXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoXCJzcmMvYXNzZXRzL2ltYWdlcy9hYm91dC9kZXNlcnQtcmlnaHQtaW1hZ2UucG5nXCIpIHRvcCByaWdodCAvIDEwMCUgbm8tcmVwZWF0O1xyXG4gICAgICAgICAgICAgICAgJi1pbnZpc2libGUge1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTAwcHgsIDUwJSwgLTEwMHB4KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmX2Rlc2VydC1sZWZ0IHtcclxuICAgICAgICAgICAgICAgIHotaW5kZXg6IDE7XHJcblxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA3MCU7XHJcblxyXG4gICAgICAgICAgICAgICAgcGVyc3BlY3RpdmU6IDgwMHB4O1xyXG4gICAgICAgICAgICAgICAgcGVyc3BlY3RpdmUtb3JpZ2luOiBib3R0b20gbGVmdDtcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnLCAxMGRlZywgMTBkZWcpO1xyXG5cclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybChcInNyYy9hc3NldHMvaW1hZ2VzL2Fib3V0L2Rlc2VydC1sZWZ0LWltYWdlLnBuZ1wiKSBsZWZ0IHRvcCAvIDQ1JSBuby1yZXBlYXQ7XHJcbiAgICAgICAgICAgICAgICAmLWludmlzaWJsZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTAwcHgsIDUwJSwgLTIwMHB4KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgICZfX2NvbnRlbnQge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgICAgIGJhY2tncm91bmQ6IHVybChcInNyYy9hc3NldHMvaW1hZ2VzL2Fib3V0L2dyZWVuLXRyZWVzLWJnLnBuZ1wiKSAwIDAgLyBjb3ZlciBuby1yZXBlYXQ7XHJcbiAgICAgICAgJi13cmFwcGVyIHtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiAxMjAwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYtaGVhZGVyIHtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgICAgICAgICAgcGFkZGluZzogMHB4IDIwcHg7XHJcblxyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYtdGl0bGUsXHJcbiAgICAgICAgJi1zdWItdGl0bGUge1xyXG4gICAgICAgICAgICBtYXJnaW46IDBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgJi10aXRsZSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTAwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYtc3ViLXRpdGxlIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiA1MHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAmLWFydGljbGUge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAyNXB4O1xyXG5cclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuXHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcclxuXHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgICAgJi1wYXJhZ3JhcGgge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCI6aG9zdCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwdmg7XG59XG5cbi4tYXBwLWFib3V0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDAlO1xuICBsZWZ0OiAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cbi4tYXBwLWFib3V0X19wYXJhbGxheCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLi1hcHAtYWJvdXRfX3BhcmFsbGF4LWl0ZW0ge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMCU7XG4gIGxlZnQ6IDEyMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgdHJhbnNpdGlvbjogM3M7XG59XG4uLWFwcC1hYm91dF9fcGFyYWxsYXgtaXRlbV9mb3Jlc3Qge1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHVybChcInNyYy9hc3NldHMvaW1hZ2VzL2Fib3V0L2dyZWVuLXRyZWVzLWJnLmpwZ1wiKSAwIDAvY292ZXIgbm8tcmVwZWF0O1xufVxuLi1hcHAtYWJvdXRfX3BhcmFsbGF4LWl0ZW1fZGVzZXJ0LXJpZ2h0IHtcbiAgei1pbmRleDogMTtcbiAgaGVpZ2h0OiA4MCU7XG4gIHBlcnNwZWN0aXZlOiA4MDBweDtcbiAgcGVyc3BlY3RpdmUtb3JpZ2luOiB0b3AgcmlnaHQ7XG4gIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG4gIHRyYW5zZm9ybTogcm90YXRlKDBkZWcsIDEwZGVnLCAxMGRlZyk7XG4gIGJhY2tncm91bmQ6IHVybChcInNyYy9hc3NldHMvaW1hZ2VzL2Fib3V0L2Rlc2VydC1yaWdodC1pbWFnZS5wbmdcIikgdG9wIHJpZ2h0LzEwMCUgbm8tcmVwZWF0O1xufVxuLi1hcHAtYWJvdXRfX3BhcmFsbGF4LWl0ZW1fZGVzZXJ0LXJpZ2h0LWludmlzaWJsZSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTAwcHgsIDUwJSwgLTEwMHB4KTtcbn1cbi4tYXBwLWFib3V0X19wYXJhbGxheC1pdGVtX2Rlc2VydC1sZWZ0IHtcbiAgei1pbmRleDogMTtcbiAgaGVpZ2h0OiA3MCU7XG4gIHBlcnNwZWN0aXZlOiA4MDBweDtcbiAgcGVyc3BlY3RpdmUtb3JpZ2luOiBib3R0b20gbGVmdDtcbiAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZywgMTBkZWcsIDEwZGVnKTtcbiAgYmFja2dyb3VuZDogdXJsKFwic3JjL2Fzc2V0cy9pbWFnZXMvYWJvdXQvZGVzZXJ0LWxlZnQtaW1hZ2UucG5nXCIpIGxlZnQgdG9wLzQ1JSBuby1yZXBlYXQ7XG59XG4uLWFwcC1hYm91dF9fcGFyYWxsYXgtaXRlbV9kZXNlcnQtbGVmdC1pbnZpc2libGUge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMDBweCwgNTAlLCAtMjAwcHgpO1xufVxuLi1hcHAtYWJvdXRfX2NvbnRlbnQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHVybChcInNyYy9hc3NldHMvaW1hZ2VzL2Fib3V0L2dyZWVuLXRyZWVzLWJnLnBuZ1wiKSAwIDAvY292ZXIgbm8tcmVwZWF0O1xufVxuLi1hcHAtYWJvdXRfX2NvbnRlbnQtd3JhcHBlciB7XG4gIG1heC13aWR0aDogMTIwMHB4O1xufVxuLi1hcHAtYWJvdXRfX2NvbnRlbnQtaGVhZGVyIHtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgcGFkZGluZzogMHB4IDIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cbi4tYXBwLWFib3V0X19jb250ZW50LXRpdGxlLCAuLWFwcC1hYm91dF9fY29udGVudC1zdWItdGl0bGUge1xuICBtYXJnaW46IDBweDtcbn1cbi4tYXBwLWFib3V0X19jb250ZW50LXRpdGxlIHtcbiAgZm9udC1zaXplOiAxMDBweDtcbn1cbi4tYXBwLWFib3V0X19jb250ZW50LXN1Yi10aXRsZSB7XG4gIGZvbnQtc2l6ZTogNTBweDtcbn1cbi4tYXBwLWFib3V0X19jb250ZW50LWFydGljbGUge1xuICBwYWRkaW5nOiAyNXB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cbi4tYXBwLWFib3V0X19jb250ZW50LWFydGljbGUtcGFyYWdyYXBoIHtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-about',
                templateUrl: './about.component.html',
                styleUrls: ['./about.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/about/about.module.ts":
/*!***************************************!*\
  !*** ./src/app/about/about.module.ts ***!
  \***************************************/
/*! exports provided: AboutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutModule", function() { return AboutModule; });
/* harmony import */ var _about_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _about_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about-routing.module */ "./src/app/about/about-routing.module.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





class AboutModule {
}
AboutModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AboutModule, bootstrap: [_about_component__WEBPACK_IMPORTED_MODULE_0__["AboutComponent"]] });
AboutModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AboutModule_Factory(t) { return new (t || AboutModule)(); }, providers: [], imports: [[
            _about_routing_module__WEBPACK_IMPORTED_MODULE_2__["AboutRoutingModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AboutModule, { declarations: [_about_component__WEBPACK_IMPORTED_MODULE_0__["AboutComponent"]], imports: [_about_routing_module__WEBPACK_IMPORTED_MODULE_2__["AboutRoutingModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AboutModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _about_component__WEBPACK_IMPORTED_MODULE_0__["AboutComponent"],
                ],
                imports: [
                    _about_routing_module__WEBPACK_IMPORTED_MODULE_2__["AboutRoutingModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]
                ],
                providers: [],
                bootstrap: [_about_component__WEBPACK_IMPORTED_MODULE_0__["AboutComponent"]]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=about-about-module-es2015.js.map