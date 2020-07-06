(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tree-list-tree-list-module"],{

/***/ "./src/app/guards/tree-list/can-leave-tree.guard.ts":
/*!**********************************************************!*\
  !*** ./src/app/guards/tree-list/can-leave-tree.guard.ts ***!
  \**********************************************************/
/*! exports provided: CanLeaveTreeGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanLeaveTreeGuard", function() { return CanLeaveTreeGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class CanLeaveTreeGuard {
    canDeactivate(component) {
        return component.canDeactivate ? component.canDeactivate() : true;
    }
}
CanLeaveTreeGuard.ɵfac = function CanLeaveTreeGuard_Factory(t) { return new (t || CanLeaveTreeGuard)(); };
CanLeaveTreeGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CanLeaveTreeGuard, factory: CanLeaveTreeGuard.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CanLeaveTreeGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();


/***/ }),

/***/ "./src/app/guards/tree-list/can-proceed-to-tree-category.guard.ts":
/*!************************************************************************!*\
  !*** ./src/app/guards/tree-list/can-proceed-to-tree-category.guard.ts ***!
  \************************************************************************/
/*! exports provided: CanProceedToTreeCategoryGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanProceedToTreeCategoryGuard", function() { return CanProceedToTreeCategoryGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _models_tree_list_tree_type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/tree-list/tree-type */ "./src/app/models/tree-list/tree-type.ts");



class CanProceedToTreeCategoryGuard {
    isExistTreeType(currentCategoryName) {
        for (const treeType in _models_tree_list_tree_type__WEBPACK_IMPORTED_MODULE_1__["TreeType"]) {
            if (currentCategoryName === _models_tree_list_tree_type__WEBPACK_IMPORTED_MODULE_1__["TreeType"][treeType]) {
                return true;
            }
        }
        return false;
    }
    canActivate(next) {
        const currentCategoryName = next.params.categoryName;
        const isTreeTypeExist = this.isExistTreeType(currentCategoryName);
        if (!isTreeTypeExist) {
            const errorMessage = `This tree category (${currentCategoryName}) does not exist! Try more!`;
            throw new Error(errorMessage);
        }
        return isTreeTypeExist;
    }
}
CanProceedToTreeCategoryGuard.ɵfac = function CanProceedToTreeCategoryGuard_Factory(t) { return new (t || CanProceedToTreeCategoryGuard)(); };
CanProceedToTreeCategoryGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CanProceedToTreeCategoryGuard, factory: CanProceedToTreeCategoryGuard.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CanProceedToTreeCategoryGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();


/***/ }),

/***/ "./src/app/guards/tree-list/can-proceed-to-tree.guard.ts":
/*!***************************************************************!*\
  !*** ./src/app/guards/tree-list/can-proceed-to-tree.guard.ts ***!
  \***************************************************************/
/*! exports provided: CanProceedToTreeGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanProceedToTreeGuard", function() { return CanProceedToTreeGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _store_tree_list_tree_list_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../store/tree-list/tree-list.selectors */ "./src/app/store/tree-list/tree-list.selectors.ts");
/* harmony import */ var _models_tree_list_tree_type__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/tree-list/tree-type */ "./src/app/models/tree-list/tree-type.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");





class CanProceedToTreeGuard {
    constructor(_store$) {
        this._store$ = _store$;
    }
    isExistTreeCategoryRouteName(treeType) {
        let isExistTreeCategory;
        for (const currentTreeType in _models_tree_list_tree_type__WEBPACK_IMPORTED_MODULE_2__["TreeType"]) {
            if (treeType === _models_tree_list_tree_type__WEBPACK_IMPORTED_MODULE_2__["TreeType"][currentTreeType]) {
                isExistTreeCategory = true;
            }
        }
        if (isExistTreeCategory && this._currentUrl.includes(treeType)) {
            return true;
        }
        else {
            return false;
        }
    }
    checkTree(treeRouteName) {
        let isExistCurrentUrlTree;
        const searchTree = this._treeList.find((tree) => {
            if (Boolean(tree)) {
                const currentTreeRouteName = tree.name.replace(/\(|\)/g, '')
                    .toLowerCase()
                    .split(' ')
                    .join('-');
                if (treeRouteName === currentTreeRouteName) {
                    return tree;
                }
            }
        });
        if (Boolean(searchTree)) {
            isExistCurrentUrlTree = this.isExistTreeCategoryRouteName(searchTree.type);
        }
        if (!isExistCurrentUrlTree) {
            const errorMessage = `There is no tree with this name (${treeRouteName})`;
            throw new Error(errorMessage);
        }
    }
    canActivate(next, state) {
        this._currentUrl = state.url;
        const currentTreeRouteName = next.params.treeName;
        this._store$.select(_store_tree_list_tree_list_selectors__WEBPACK_IMPORTED_MODULE_1__["selectTreeList"])
            .subscribe((treeList) => {
            this._treeList = treeList;
            this.checkTree(currentTreeRouteName);
        }).unsubscribe();
        return true;
    }
}
CanProceedToTreeGuard.ɵfac = function CanProceedToTreeGuard_Factory(t) { return new (t || CanProceedToTreeGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"])); };
CanProceedToTreeGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CanProceedToTreeGuard, factory: CanProceedToTreeGuard.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CanProceedToTreeGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pipes/tree-list/format-tree-category-title.pipe.ts":
/*!********************************************************************!*\
  !*** ./src/app/pipes/tree-list/format-tree-category-title.pipe.ts ***!
  \********************************************************************/
/*! exports provided: FormatTreeCategoryTitlePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormatTreeCategoryTitlePipe", function() { return FormatTreeCategoryTitlePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class FormatTreeCategoryTitlePipe {
    transform(value) {
        return value.split('-').map((currentWord) => {
            return currentWord[0].toUpperCase() + currentWord.slice(1);
        }).join(' ');
    }
}
FormatTreeCategoryTitlePipe.ɵfac = function FormatTreeCategoryTitlePipe_Factory(t) { return new (t || FormatTreeCategoryTitlePipe)(); };
FormatTreeCategoryTitlePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "formatTreeCategoryTitle", type: FormatTreeCategoryTitlePipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormatTreeCategoryTitlePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'formatTreeCategoryTitle'
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/tree-category/tree-category.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/tree-category/tree-category.component.ts ***!
  \**********************************************************/
/*! exports provided: TreeCategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeCategoryComponent", function() { return TreeCategoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _store_tree_list_tree_list_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/tree-list/tree-list.selectors */ "./src/app/store/tree-list/tree-list.selectors.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
/* harmony import */ var _store_tree_list_tree_list_facade__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../store/tree-list/tree-list.facade */ "./src/app/store/tree-list/tree-list.facade.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _tree_product_tree_product_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../tree-product/tree-product.component */ "./src/app/tree-product/tree-product.component.ts");
/* harmony import */ var _pipes_tree_list_format_tree_category_title_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../pipes/tree-list/format-tree-category-title.pipe */ "./src/app/pipes/tree-list/format-tree-category-title.pipe.ts");











function TreeCategoryComponent_app_tree_product_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-tree-product", 5);
} if (rf & 2) {
    const tree_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tree", tree_r1);
} }
class TreeCategoryComponent {
    constructor(_activatedRoute, _store$, _router, _facadeTreeListService) {
        this._activatedRoute = _activatedRoute;
        this._store$ = _store$;
        this._router = _router;
        this._facadeTreeListService = _facadeTreeListService;
        this._destroySubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this._windowScrollHeight = 20;
    }
    ngOnInit() {
        const scrollUpButton = document.querySelector('.-app-scroll-up-button_tree-category');
        window.addEventListener('scroll', () => {
            if (window.scrollY > this._windowScrollHeight) {
                scrollUpButton.classList.add('-app-scroll-up-button_tree-category-visible');
            }
            else {
                scrollUpButton.classList.remove('-app-scroll-up-button_tree-category-visible');
            }
        });
        this._activatedRoute.params
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this._destroySubject$)).subscribe((params) => {
            this.treeCategory = params.categoryName;
            if (Boolean(this.treeCategory)) {
                this._facadeTreeListService.searchTreeCategoryTrees(this.treeCategory);
            }
        });
        this._store$.select(_store_tree_list_tree_list_selectors__WEBPACK_IMPORTED_MODULE_3__["selectTreeCategoryTrees"])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this._destroySubject$)).subscribe((treeCategoryTrees) => {
            this.treeCategoryTrees = treeCategoryTrees;
        });
        this._store$.select(_store_tree_list_tree_list_selectors__WEBPACK_IMPORTED_MODULE_3__["selectIsTreeRouterModeAction"])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["delay"])(0), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this._destroySubject$)).subscribe((isTreeRouterMode) => {
            this.treeMode = isTreeRouterMode;
        });
    }
    ngOnDestroy() {
        this._destroySubject$.next(true);
        this._destroySubject$.complete();
        this._facadeTreeListService.goFromTreeRouter();
    }
    goToTreeCategoryRouter() {
        this._facadeTreeListService.goFromTreeRouter();
        this._router.navigate(['/trees', 'tree-category', this.treeCategory]);
    }
    scrollTop() {
        window.scrollTo(0, 0);
    }
}
TreeCategoryComponent.ɵfac = function TreeCategoryComponent_Factory(t) { return new (t || TreeCategoryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_store_tree_list_tree_list_facade__WEBPACK_IMPORTED_MODULE_6__["FacadeServiceTreeList"])); };
TreeCategoryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TreeCategoryComponent, selectors: [["app-tree-category"]], decls: 9, vars: 8, consts: [[1, "-app-tree-category"], [1, "-app-tree-category__title"], ["class", "-app-tree-category__product", 3, "tree", 4, "ngFor", "ngForOf"], [1, "-app-tree-category__back-button", 3, "click"], [1, "-app-scroll-up-button", "-app-scroll-up-button_tree-category", 3, "click"], [1, "-app-tree-category__product", 3, "tree"]], template: function TreeCategoryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "formatTreeCategoryTitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, TreeCategoryComponent_app_tree_product_5_Template, 1, 1, "app-tree-product", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TreeCategoryComponent_Template_div_click_6_listener() { return ctx.goToTreeCategoryRouter(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TreeCategoryComponent_Template_a_click_7_listener() { return ctx.scrollTop(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "router-outlet");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("-app-tree-category_tree-mode", ctx.treeMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 6, ctx.treeCategory), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.treeCategoryTrees);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("-app-tree-category__back-button_tree-mode", ctx.treeMode);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"], _tree_product_tree_product_component__WEBPACK_IMPORTED_MODULE_8__["TreeProductComponent"]], pipes: [_pipes_tree_list_format_tree_category_title_pipe__WEBPACK_IMPORTED_MODULE_9__["FormatTreeCategoryTitlePipe"]], styles: ["@charset \"UTF-8\";\n[_nghost-%COMP%] {\n  display: flex;\n  width: 100%;\n  height: 100%;\n}\n.-app-tree-category[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  transition: 0.2s;\n}\n.-app-tree-category[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: fixed;\n  top: 0;\n  left: 120px;\n  z-index: -9999;\n  width: 100%;\n  height: 100vh;\n  background-image: url('tree-category-bg.jpg');\n  background-size: cover;\n}\n.-app-tree-category_tree-mode[_ngcontent-%COMP%] {\n  width: 40%;\n}\n.-app-tree-category__title[_ngcontent-%COMP%] {\n  margin: 0px;\n  padding-top: 50px;\n  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.9);\n  color: white;\n  font-size: 36px;\n  letter-spacing: 4px;\n}\n.-app-tree-category__product[_ngcontent-%COMP%]:not(:last-child) {\n  position: relative;\n}\n.-app-tree-category__product[_ngcontent-%COMP%]:not(:last-child)::before {\n  content: \"\";\n  position: absolute;\n  top: 87%;\n  left: 50%;\n  transform: translate(-50%, 0%);\n  height: 100px;\n  width: 4px;\n  background-color: white;\n}\n.-app-tree-category__back-button[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 10%;\n  left: 10%;\n  transform: translate(-50%, 0%);\n  width: 60px;\n  height: 60px;\n  transition: 0.3s;\n  cursor: pointer;\n  opacity: 0;\n  box-shadow: 0px 0px 8px black;\n  border: 1px solid white;\n  border-radius: 50%;\n  background-color: #082508;\n}\n.-app-tree-category__back-button[_ngcontent-%COMP%]:active {\n  transform: translate(-50%, 2%);\n  width: 65px;\n  height: 65px;\n}\n.-app-tree-category__back-button[_ngcontent-%COMP%]:hover::before {\n  text-shadow: 2px 2px 6px black;\n}\n.-app-tree-category__back-button[_ngcontent-%COMP%]::before {\n  content: \"\uF053\";\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  transition: 0.3s;\n  color: white;\n  text-shadow: 0px 0px 8px black;\n  font-size: 23px;\n  font-weight: 900;\n  font-family: \"Font Awesome 5 free\", \"Font Awesome 5 brands\";\n}\n.-app-tree-category__back-button_tree-mode[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHJlZS1jYXRlZ29yeS90cmVlLWNhdGVnb3J5LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC90cmVlLWNhdGVnb3J5L0Q6XFxFUEFNIHRyYWluaW5nXFxzYXZlLW91ci1wbGFuZXRcXHNhdmUtb3VyLXBsYW5ldC1wcm9qZWN0L3NyY1xcYXBwXFx0cmVlLWNhdGVnb3J5XFx0cmVlLWNhdGVnb3J5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQjtFQUNJLGFBQUE7RUFFQSxXQUFBO0VBQ0EsWUFBQTtBRENKO0FDRUE7RUFDSSxrQkFBQTtFQUVBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFFQSxXQUFBO0VBQ0EsWUFBQTtFQUVBLGdCQUFBO0FERko7QUNJSTtFQUNJLFdBQUE7RUFFQSxlQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBRUEsV0FBQTtFQUNBLGFBQUE7RUFFQSw2Q0FBQTtFQUNBLHNCQUFBO0FETFI7QUNPSTtFQUNJLFVBQUE7QURMUjtBQ09JO0VBQ0ksV0FBQTtFQUNBLGlCQUFBO0VBRUEsMkNBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FETlI7QUNRSTtFQUNJLGtCQUFBO0FETlI7QUNPUTtFQUNJLFdBQUE7RUFFQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsOEJBQUE7RUFFQSxhQUFBO0VBQ0EsVUFBQTtFQUVBLHVCQUFBO0FEUlo7QUNXSTtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLDhCQUFBO0VBRUEsV0FBQTtFQUNBLFlBQUE7RUFFQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0VBRUEsNkJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBRUEseUJBQUE7QURiUjtBQ2NRO0VBQ0ksOEJBQUE7RUFFQSxXQUFBO0VBQ0EsWUFBQTtBRGJaO0FDZ0JZO0VBQ0ksOEJBQUE7QURkaEI7QUNpQlE7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0VBRUEsZ0JBQUE7RUFFQSxZQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSwyREFBQTtBRGpCWjtBQ21CUTtFQUNJLFVBQUE7QURqQloiLCJmaWxlIjoic3JjL2FwcC90cmVlLWNhdGVnb3J5L3RyZWUtY2F0ZWdvcnkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG46aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi4tYXBwLXRyZWUtY2F0ZWdvcnkge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0cmFuc2l0aW9uOiAwLjJzO1xufVxuLi1hcHAtdHJlZS1jYXRlZ29yeTo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMTIwcHg7XG4gIHotaW5kZXg6IC05OTk5O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwic3JjL2Fzc2V0cy9pbWFnZXMvdHJlZS1saXN0L3RyZWUtY2F0ZWdvcnktYmcuanBnXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuLi1hcHAtdHJlZS1jYXRlZ29yeV90cmVlLW1vZGUge1xuICB3aWR0aDogNDAlO1xufVxuLi1hcHAtdHJlZS1jYXRlZ29yeV9fdGl0bGUge1xuICBtYXJnaW46IDBweDtcbiAgcGFkZGluZy10b3A6IDUwcHg7XG4gIHRleHQtc2hhZG93OiAycHggMnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuOSk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAzNnB4O1xuICBsZXR0ZXItc3BhY2luZzogNHB4O1xufVxuLi1hcHAtdHJlZS1jYXRlZ29yeV9fcHJvZHVjdDpub3QoOmxhc3QtY2hpbGQpIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLi1hcHAtdHJlZS1jYXRlZ29yeV9fcHJvZHVjdDpub3QoOmxhc3QtY2hpbGQpOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogODclO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDAlKTtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgd2lkdGg6IDRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG4uLWFwcC10cmVlLWNhdGVnb3J5X19iYWNrLWJ1dHRvbiB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAxMCU7XG4gIGxlZnQ6IDEwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCUpO1xuICB3aWR0aDogNjBweDtcbiAgaGVpZ2h0OiA2MHB4O1xuICB0cmFuc2l0aW9uOiAwLjNzO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG9wYWNpdHk6IDA7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggOHB4IGJsYWNrO1xuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDgyNTA4O1xufVxuLi1hcHAtdHJlZS1jYXRlZ29yeV9fYmFjay1idXR0b246YWN0aXZlIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMiUpO1xuICB3aWR0aDogNjVweDtcbiAgaGVpZ2h0OiA2NXB4O1xufVxuLi1hcHAtdHJlZS1jYXRlZ29yeV9fYmFjay1idXR0b246aG92ZXI6OmJlZm9yZSB7XG4gIHRleHQtc2hhZG93OiAycHggMnB4IDZweCBibGFjaztcbn1cbi4tYXBwLXRyZWUtY2F0ZWdvcnlfX2JhY2stYnV0dG9uOjpiZWZvcmUge1xuICBjb250ZW50OiBcIu+Bk1wiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB0cmFuc2l0aW9uOiAwLjNzO1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtc2hhZG93OiAwcHggMHB4IDhweCBibGFjaztcbiAgZm9udC1zaXplOiAyM3B4O1xuICBmb250LXdlaWdodDogOTAwO1xuICBmb250LWZhbWlseTogXCJGb250IEF3ZXNvbWUgNSBmcmVlXCIsIFwiRm9udCBBd2Vzb21lIDUgYnJhbmRzXCI7XG59XG4uLWFwcC10cmVlLWNhdGVnb3J5X19iYWNrLWJ1dHRvbl90cmVlLW1vZGUge1xuICBvcGFjaXR5OiAxO1xufSIsIjpob3N0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcblxyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi4tYXBwLXRyZWUtY2F0ZWdvcnkge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG5cclxuICAgIHRyYW5zaXRpb246IDAuMnM7XHJcblxyXG4gICAgJjo6YWZ0ZXIge1xyXG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcblxyXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgbGVmdDogMTIwcHg7XHJcbiAgICAgICAgei1pbmRleDogLTk5OTk7XHJcblxyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwdmg7XHJcblxyXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcInNyYy9hc3NldHMvaW1hZ2VzL3RyZWUtbGlzdC90cmVlLWNhdGVnb3J5LWJnLmpwZ1wiKTtcclxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgfVxyXG4gICAgJl90cmVlLW1vZGUge1xyXG4gICAgICAgIHdpZHRoOiA0MCU7XHJcbiAgICB9XHJcbiAgICAmX190aXRsZSB7XHJcbiAgICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDUwcHg7XHJcblxyXG4gICAgICAgIHRleHQtc2hhZG93OiAycHggMnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuOSk7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMzZweDtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogNHB4O1xyXG4gICAgfVxyXG4gICAgJl9fcHJvZHVjdDpub3QoOmxhc3QtY2hpbGQpIHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgJjo6YmVmb3JlIHtcclxuICAgICAgICAgICAgY29udGVudDogXCJcIjtcclxuXHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgdG9wOiA4NyU7XHJcbiAgICAgICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCUpO1xyXG5cclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDBweDtcclxuICAgICAgICAgICAgd2lkdGg6IDRweDtcclxuXHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgICZfX2JhY2stYnV0dG9uIHtcclxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgYm90dG9tOiAxMCU7XHJcbiAgICAgICAgbGVmdDogMTAlO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDAlKTtcclxuXHJcbiAgICAgICAgd2lkdGg6IDYwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA2MHB4O1xyXG5cclxuICAgICAgICB0cmFuc2l0aW9uOiAwLjNzO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG5cclxuICAgICAgICBib3gtc2hhZG93OiAwcHggMHB4IDhweCByZ2JhKDAsIDAsIDAsIDEpO1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuXHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg4LCAzNywgOCwgMSk7XHJcbiAgICAgICAgJjphY3RpdmUge1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAyJSk7XHJcblxyXG4gICAgICAgICAgICB3aWR0aDogNjVweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiA2NXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgJjo6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgIHRleHQtc2hhZG93OiAycHggMnB4IDZweCByZ2JhKDAsIDAsIDAsIDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICY6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiXFxmMDUzXCI7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcblxyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjNzO1xyXG5cclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICB0ZXh0LXNoYWRvdzogMHB4IDBweCA4cHggcmdiYSgwLCAwLCAwLCAxKTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyM3B4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogOTAwO1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJGb250IEF3ZXNvbWUgNSBmcmVlXCIsIFwiRm9udCBBd2Vzb21lIDUgYnJhbmRzXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICZfdHJlZS1tb2RlIHtcclxuICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TreeCategoryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-tree-category',
                templateUrl: './tree-category.component.html',
                styleUrls: ['./tree-category.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }, { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _store_tree_list_tree_list_facade__WEBPACK_IMPORTED_MODULE_6__["FacadeServiceTreeList"] }]; }, null); })();


/***/ }),

/***/ "./src/app/tree-list/tree-list-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/tree-list/tree-list-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: TreeListRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeListRoutingModule", function() { return TreeListRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _tree_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tree-list.component */ "./src/app/tree-list/tree-list.component.ts");
/* harmony import */ var _tree_category_tree_category_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../tree-category/tree-category.component */ "./src/app/tree-category/tree-category.component.ts");
/* harmony import */ var _tree_tree_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../tree/tree.component */ "./src/app/tree/tree.component.ts");
/* harmony import */ var _guards_tree_list_can_proceed_to_tree_category_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../guards/tree-list/can-proceed-to-tree-category.guard */ "./src/app/guards/tree-list/can-proceed-to-tree-category.guard.ts");
/* harmony import */ var _guards_tree_list_can_proceed_to_tree_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../guards/tree-list/can-proceed-to-tree.guard */ "./src/app/guards/tree-list/can-proceed-to-tree.guard.ts");
/* harmony import */ var _guards_tree_list_can_leave_tree_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../guards/tree-list/can-leave-tree.guard */ "./src/app/guards/tree-list/can-leave-tree.guard.ts");










const routes = [
    {
        path: '',
        component: _tree_list_component__WEBPACK_IMPORTED_MODULE_2__["TreeListComponent"]
    },
    {
        path: 'tree-category/:categoryName',
        component: _tree_category_tree_category_component__WEBPACK_IMPORTED_MODULE_3__["TreeCategoryComponent"],
        canActivate: [_guards_tree_list_can_proceed_to_tree_category_guard__WEBPACK_IMPORTED_MODULE_5__["CanProceedToTreeCategoryGuard"]],
        children: [{
                path: 'tree/:treeName',
                component: _tree_tree_component__WEBPACK_IMPORTED_MODULE_4__["TreeComponent"],
                canActivate: [_guards_tree_list_can_proceed_to_tree_guard__WEBPACK_IMPORTED_MODULE_6__["CanProceedToTreeGuard"]],
                canDeactivate: [_guards_tree_list_can_leave_tree_guard__WEBPACK_IMPORTED_MODULE_7__["CanLeaveTreeGuard"]]
            }]
    },
    {
        path: 'tree-category/:categoryName#header',
        component: _tree_category_tree_category_component__WEBPACK_IMPORTED_MODULE_3__["TreeCategoryComponent"]
    }
];
class TreeListRoutingModule {
}
TreeListRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: TreeListRoutingModule });
TreeListRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function TreeListRoutingModule_Factory(t) { return new (t || TreeListRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](TreeListRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TreeListRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/tree-list/tree-list.component.ts":
/*!**************************************************!*\
  !*** ./src/app/tree-list/tree-list.component.ts ***!
  \**************************************************/
/*! exports provided: TreeListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeListComponent", function() { return TreeListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class TreeListComponent {
    constructor(_router) {
        this._router = _router;
    }
    switchRouter(treeTypeHtmlElement) {
        const treeTypeContent = treeTypeHtmlElement.innerHTML.toLowerCase();
        const treeCategory = treeTypeContent.split(' ').join('-');
        this._router.navigate(['/trees', 'tree-category', treeCategory]);
    }
}
TreeListComponent.ɵfac = function TreeListComponent_Factory(t) { return new (t || TreeListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
TreeListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TreeListComponent, selectors: [["app-tree-list"]], decls: 60, vars: 0, consts: [[1, "-app-trees"], [1, "-app-trees__design-block", "-app-trees__design-block_upper-left-corner"], [1, "-app-trees__design-block", "-app-trees__design-block_bottom-right-corner"], [1, "-app-trees__design-block", "-app-trees__design-block_upper-right-corner"], [1, "-app-trees__design-block", "-app-trees__design-block_bottom-left-corner"], [1, "-app-trees__bird-container", "-app-trees__bird-container_first"], [1, "-app-trees__bird", "-app-trees__bird_first"], [1, "-app-trees__bird-container", "-app-trees__bird-container_second"], [1, "-app-trees__bird", "-app-trees__bird_second"], [1, "-app-trees__title"], [1, "-app-trees__menu-list"], [1, "-app-trees__menu-item", "-app-trees__menu-item_native", 3, "click"], [1, "-app-trees__item"], [1, "-app-trees__item-title"], ["native", ""], [1, "-app-trees__item-image", "-app-trees__item-image_native"], [1, "-app-trees__item-sub-title"], [1, "-app-trees__menu-item", "-app-trees__menu-item_arboretum", 3, "click"], ["arboretum", ""], [1, "-app-trees__item-image", "-app-trees__item-image_arboretum"], [1, "-app-trees__menu-item", "-app-trees__menu-item_patio", 3, "click"], ["patio", ""], [1, "-app-trees__item-image", "-app-trees__item-image_patio"], [1, "-app-trees__menu-item", "-app-trees__menu-item_evergreen", 3, "click"], ["evergreen", ""], [1, "-app-trees__item-image", "-app-trees__item-image_evergreen"], [1, "-app-trees__menu-item", "-app-trees__menu-item_potgrown", 3, "click"], ["potgrown", ""], [1, "-app-trees__item-image", "-app-trees__item-image_potgrown"], [1, "-app-trees__menu-item", "-app-trees__menu-item_shrubs", 3, "click"], ["shrubs", ""], [1, "-app-trees__item-image", "-app-trees__item-image_shrubs"]], template: function TreeListComponent_Template(rf, ctx) { if (rf & 1) {
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h1", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Save Our Planet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TreeListComponent_Template_div_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](15); return ctx.switchRouter(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h3", 13, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Native Trees");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h4", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "View Products");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TreeListComponent_Template_div_click_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](23); return ctx.switchRouter(_r1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h3", 13, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Arboretum Species");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h4", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "View Products");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TreeListComponent_Template_div_click_28_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](31); return ctx.switchRouter(_r2); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h3", 13, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Patio Fruit Trees");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "img", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "h4", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "View Products");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TreeListComponent_Template_div_click_36_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](39); return ctx.switchRouter(_r3); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h3", 13, 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Evergreen");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "img", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "h4", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "View Products");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TreeListComponent_Template_div_click_44_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](47); return ctx.switchRouter(_r4); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "h3", 13, 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Pot Grown Trees");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "img", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "h4", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "View Products");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TreeListComponent_Template_div_click_52_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](55); return ctx.switchRouter(_r5); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "h3", 13, 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Shrubs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "img", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "h4", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "View Products");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["[_nghost-%COMP%] {\n  width: 100%;\n  height: 100vh;\n}\n\n@-webkit-keyframes fly-cycle {\n  100% {\n    background-position: -900px 0;\n  }\n}\n\n@keyframes fly-cycle {\n  100% {\n    background-position: -900px 0;\n  }\n}\n\n@-webkit-keyframes fly-right-one {\n  0% {\n    transform: scale(0.3) translateX(-10vw);\n  }\n  10% {\n    transform: translateY(2vh) translateX(10vw) scale(0.4);\n  }\n  20% {\n    transform: translateY(0vh) translateX(30vw) scale(0.5);\n  }\n  30% {\n    transform: translateY(4vh) translateX(50vw) scale(0.6);\n  }\n  40% {\n    transform: translateY(2vh) translateX(70vw) scale(0.6);\n  }\n  50% {\n    transform: translateY(0vh) translateX(90vw) scale(0.6);\n  }\n  60% {\n    transform: translateY(0vh) translateX(110vw) scale(0.6);\n  }\n  100% {\n    transform: translateY(0vh) translateX(110vw) scale(0.6);\n  }\n}\n\n@keyframes fly-right-one {\n  0% {\n    transform: scale(0.3) translateX(-10vw);\n  }\n  10% {\n    transform: translateY(2vh) translateX(10vw) scale(0.4);\n  }\n  20% {\n    transform: translateY(0vh) translateX(30vw) scale(0.5);\n  }\n  30% {\n    transform: translateY(4vh) translateX(50vw) scale(0.6);\n  }\n  40% {\n    transform: translateY(2vh) translateX(70vw) scale(0.6);\n  }\n  50% {\n    transform: translateY(0vh) translateX(90vw) scale(0.6);\n  }\n  60% {\n    transform: translateY(0vh) translateX(110vw) scale(0.6);\n  }\n  100% {\n    transform: translateY(0vh) translateX(110vw) scale(0.6);\n  }\n}\n\n.-app-trees[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  background-image: url('tree-list-menu-bg.jpg');\n  background-size: cover;\n}\n\n.-app-trees__bird-container[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 9999;\n  top: 20%;\n  left: -10%;\n  transform: scale(0) translateX(-10vw);\n  will-change: transform;\n  -webkit-animation-name: fly-right-one;\n          animation-name: fly-right-one;\n  -webkit-animation-timing-function: linear;\n          animation-timing-function: linear;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n}\n\n.-app-trees__bird-container_first[_ngcontent-%COMP%] {\n  -webkit-animation-duration: 15s;\n          animation-duration: 15s;\n  -webkit-animation-delay: 0;\n          animation-delay: 0;\n}\n\n.-app-trees__bird-container_second[_ngcontent-%COMP%] {\n  -webkit-animation-duration: 16s;\n          animation-duration: 16s;\n  -webkit-animation-delay: 1s;\n          animation-delay: 1s;\n}\n\n.-app-trees__bird[_ngcontent-%COMP%] {\n  background-image: url(\"https://s3-us-west-2.amazonaws.com/s.cdpn.io/174479/bird-cells-new.svg\");\n  background-size: auto 100%;\n  width: 88px;\n  height: 125px;\n  will-change: background-position;\n  -webkit-animation-name: fly-cycle;\n          animation-name: fly-cycle;\n  -webkit-animation-timing-function: steps(10);\n          animation-timing-function: steps(10);\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n}\n\n.-app-trees__bird_first[_ngcontent-%COMP%] {\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s;\n  -webkit-animation-delay: -0.5s;\n          animation-delay: -0.5s;\n}\n\n.-app-trees__bird_second[_ngcontent-%COMP%] {\n  -webkit-animation-duration: 0.9s;\n          animation-duration: 0.9s;\n  -webkit-animation-delay: -0.75s;\n          animation-delay: -0.75s;\n}\n\n.-app-trees__title[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 9999;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 10px 30px;\n  padding-left: 54px;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  border-radius: 10px;\n  background-color: rgba(255, 255, 255, 0.8);\n  text-transform: uppercase;\n  font-style: italic;\n  color: black;\n  letter-spacing: 24px;\n}\n\n.-app-trees__menu-list[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n\n.-app-trees__menu-item[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 2;\n  width: 200px;\n  height: 200px;\n  color: white;\n}\n\n.-app-trees__menu-item_native[_ngcontent-%COMP%] {\n  top: 10%;\n  left: 20%;\n}\n\n.-app-trees__menu-item_arboretum[_ngcontent-%COMP%] {\n  top: 5%;\n  right: 40%;\n}\n\n.-app-trees__menu-item_patio[_ngcontent-%COMP%] {\n  top: 35%;\n  right: 10%;\n  transform: translate(0%, -50%);\n}\n\n.-app-trees__menu-item_evergreen[_ngcontent-%COMP%] {\n  bottom: 5%;\n  left: 40%;\n}\n\n.-app-trees__menu-item_potgrown[_ngcontent-%COMP%] {\n  bottom: 10%;\n  right: 20%;\n}\n\n.-app-trees__menu-item_shrubs[_ngcontent-%COMP%] {\n  top: 70%;\n  left: 10%;\n  transform: translate(0%, -50%);\n}\n\n.-app-trees__item[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  padding: 15px;\n  cursor: pointer;\n  box-sizing: border-box;\n}\n\n.-app-trees__item[_ngcontent-%COMP%]:hover::before {\n  transform: translate(-50%, -50%) scale(1, 1);\n}\n\n.-app-trees__item[_ngcontent-%COMP%]:hover::after {\n  transform: translate(-50%, -50%) scale(1, 1);\n}\n\n.-app-trees__item[_ngcontent-%COMP%]:hover   .-app-trees__item-title[_ngcontent-%COMP%] {\n  top: 50%;\n  opacity: 1;\n}\n\n.-app-trees__item[_ngcontent-%COMP%]:hover   .-app-trees__item-sub-title[_ngcontent-%COMP%] {\n  bottom: 20%;\n  opacity: 1;\n}\n\n.-app-trees__item[_ngcontent-%COMP%]:hover   .-app-trees__item-image[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n\n.-app-trees__item[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  z-index: 3;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%) scale(1, 0);\n  width: 90%;\n  height: 90%;\n  transition: 0.2s;\n  border-right: 1.5px solid white;\n  border-left: 1.5px solid white;\n}\n\n.-app-trees__item[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  z-index: 3;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%) scale(0, 1);\n  width: 91.5%;\n  height: 90%;\n  transition: 0.2s;\n  border-top: 1.5px solid white;\n  border-bottom: 1.5px solid white;\n}\n\n.-app-trees__item-title[_ngcontent-%COMP%], .-app-trees__item-sub-title[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 6;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 100%;\n  margin: 0;\n  padding: 0px 20px;\n  box-sizing: border-box;\n  transition: 0.3s;\n  opacity: 0;\n  text-shadow: 2px 2px 6px black;\n  text-align: center;\n  letter-spacing: 1.5px;\n  font-weight: 600;\n}\n\n.-app-trees__item-title[_ngcontent-%COMP%] {\n  top: 40%;\n}\n\n.-app-trees__item-sub-title[_ngcontent-%COMP%] {\n  bottom: 5%;\n}\n\n.-app-trees__item-image[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 2;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 100%;\n  height: 100%;\n  opacity: 0.9;\n  background-size: cover;\n}\n\n.-app-trees__item-image_native[_ngcontent-%COMP%] {\n  background-image: url('tree-list-native-trees-bg.jpg');\n}\n\n.-app-trees__item-image_arboretum[_ngcontent-%COMP%] {\n  background-image: url('tree-list-arboretum-species-bg.jpg');\n}\n\n.-app-trees__item-image_patio[_ngcontent-%COMP%] {\n  background-image: url('tree-list-patio-fruit-trees-bg.jpg');\n}\n\n.-app-trees__item-image_evergreen[_ngcontent-%COMP%] {\n  background-image: url('tree-list-evergreen-bg.jpg');\n}\n\n.-app-trees__item-image_potgrown[_ngcontent-%COMP%] {\n  background-image: url('tree-list-pot-grown-trees-bg.jpg');\n}\n\n.-app-trees__item-image_shrubs[_ngcontent-%COMP%] {\n  background-image: url('tree-list-shrubs-bg.jpg');\n}\n\n.-app-trees__design-block[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 2;\n  width: 300px;\n  height: 300px;\n  border: 2px solid white;\n  background-color: rgba(0, 0, 0, 0.4);\n}\n\n.-app-trees__design-block_upper-left-corner[_ngcontent-%COMP%] {\n  top: 0%;\n  left: 0%;\n  transform: translate(-50%, -50%) rotate(45deg);\n}\n\n.-app-trees__design-block_bottom-right-corner[_ngcontent-%COMP%] {\n  bottom: 0%;\n  right: 0%;\n  transform: translate(50%, 50%) rotate(45deg);\n}\n\n.-app-trees__design-block_upper-right-corner[_ngcontent-%COMP%] {\n  top: 0%;\n  right: 0%;\n  transform: translate(50%, -50%) rotate(45deg);\n}\n\n.-app-trees__design-block_bottom-left-corner[_ngcontent-%COMP%] {\n  bottom: 0%;\n  left: 0%;\n  transform: translate(-50%, 50%) rotate(45deg);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHJlZS1saXN0L0Q6XFxFUEFNIHRyYWluaW5nXFxzYXZlLW91ci1wbGFuZXRcXHNhdmUtb3VyLXBsYW5ldC1wcm9qZWN0L3NyY1xcYXBwXFx0cmVlLWxpc3RcXHRyZWUtbGlzdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdHJlZS1saXN0L3RyZWUtbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0FDQ0o7O0FEQ0E7RUFDSTtJQUNJLDZCQUFBO0VDRU47QUFDRjs7QURMQTtFQUNJO0lBQ0ksNkJBQUE7RUNFTjtBQUNGOztBRENBO0VBRUM7SUFDQyx1Q0FBQTtFQ0FBO0VER0Q7SUFDQyxzREFBQTtFQ0RBO0VESUQ7SUFDQyxzREFBQTtFQ0ZBO0VES0Q7SUFDQyxzREFBQTtFQ0hBO0VETUQ7SUFDQyxzREFBQTtFQ0pBO0VET0Q7SUFDQyxzREFBQTtFQ0xBO0VEUUQ7SUFDQyx1REFBQTtFQ05BO0VEU0Q7SUFDQyx1REFBQTtFQ1BBO0FBQ0Y7O0FEekJBO0VBRUM7SUFDQyx1Q0FBQTtFQ0FBO0VER0Q7SUFDQyxzREFBQTtFQ0RBO0VESUQ7SUFDQyxzREFBQTtFQ0ZBO0VES0Q7SUFDQyxzREFBQTtFQ0hBO0VETUQ7SUFDQyxzREFBQTtFQ0pBO0VET0Q7SUFDQyxzREFBQTtFQ0xBO0VEUUQ7SUFDQyx1REFBQTtFQ05BO0VEU0Q7SUFDQyx1REFBQTtFQ1BBO0FBQ0Y7O0FEVUE7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFFQSxXQUFBO0VBQ0EsWUFBQTtFQUVBLGdCQUFBO0VBRUEsOENBQUE7RUFDQSxzQkFBQTtBQ1hKOztBRFlJO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxxQ0FBQTtFQUNBLHNCQUFBO0VBRUEscUNBQUE7VUFBQSw2QkFBQTtFQUNBLHlDQUFBO1VBQUEsaUNBQUE7RUFDQSwyQ0FBQTtVQUFBLG1DQUFBO0FDWFI7O0FEWVE7RUFDSSwrQkFBQTtVQUFBLHVCQUFBO0VBQ0EsMEJBQUE7VUFBQSxrQkFBQTtBQ1ZaOztBRFlRO0VBQ0ksK0JBQUE7VUFBQSx1QkFBQTtFQUNBLDJCQUFBO1VBQUEsbUJBQUE7QUNWWjs7QURhSTtFQUNJLCtGQUFBO0VBQ0EsMEJBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGdDQUFBO0VBRUEsaUNBQUE7VUFBQSx5QkFBQTtFQUNBLDRDQUFBO1VBQUEsb0NBQUE7RUFDQSwyQ0FBQTtVQUFBLG1DQUFBO0FDWlI7O0FEYVE7RUFDSSw4QkFBQTtVQUFBLHNCQUFBO0VBQ0EsOEJBQUE7VUFBQSxzQkFBQTtBQ1haOztBRGFRO0VBQ0ksZ0NBQUE7VUFBQSx3QkFBQTtFQUNBLCtCQUFBO1VBQUEsdUJBQUE7QUNYWjs7QURjSTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7RUFFQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUVBLGtCQUFBO0VBQ0Esa0JBQUE7RUFFQSx5QkFBQTtLQUFBLHNCQUFBO01BQUEscUJBQUE7VUFBQSxpQkFBQTtFQUVBLG1CQUFBO0VBRUEsMENBQUE7RUFFQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0FDbEJSOztBRG9CSTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDbEJSOztBRG9CSTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUVBLFlBQUE7RUFDQSxhQUFBO0VBRUEsWUFBQTtBQ3BCUjs7QURxQlE7RUFDSSxRQUFBO0VBQ0EsU0FBQTtBQ25CWjs7QURxQlE7RUFDSSxPQUFBO0VBQ0EsVUFBQTtBQ25CWjs7QURxQlE7RUFDSSxRQUFBO0VBQ0EsVUFBQTtFQUNBLDhCQUFBO0FDbkJaOztBRHFCUTtFQUNJLFVBQUE7RUFDQSxTQUFBO0FDbkJaOztBRHFCUTtFQUNJLFdBQUE7RUFDQSxVQUFBO0FDbkJaOztBRHFCUTtFQUNJLFFBQUE7RUFDQSxTQUFBO0VBQ0EsOEJBQUE7QUNuQlo7O0FEc0JJO0VBQ0ksa0JBQUE7RUFFQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBRUEsV0FBQTtFQUNBLFlBQUE7RUFFQSxhQUFBO0VBRUEsZUFBQTtFQUVBLHNCQUFBO0FDekJSOztBRDJCWTtFQUNJLDRDQUFBO0FDekJoQjs7QUQyQlk7RUFDSSw0Q0FBQTtBQ3pCaEI7O0FEMkJZO0VBQ0ksUUFBQTtFQUNBLFVBQUE7QUN6QmhCOztBRDJCWTtFQUNJLFdBQUE7RUFDQSxVQUFBO0FDekJoQjs7QUQyQlk7RUFDSSxVQUFBO0FDekJoQjs7QUQ0QlE7RUFDSSxXQUFBO0VBRUEsa0JBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSw0Q0FBQTtFQUVBLFVBQUE7RUFDQSxXQUFBO0VBRUEsZ0JBQUE7RUFFQSwrQkFBQTtFQUNBLDhCQUFBO0FDOUJaOztBRGdDUTtFQUNJLFdBQUE7RUFFQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLDRDQUFBO0VBRUEsWUFBQTtFQUNBLFdBQUE7RUFFQSxnQkFBQTtFQUVBLDZCQUFBO0VBQ0EsZ0NBQUE7QUNsQ1o7O0FEb0NRO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0VBRUEsV0FBQTtFQUVBLFNBQUE7RUFDQSxpQkFBQTtFQUVBLHNCQUFBO0VBRUEsZ0JBQUE7RUFDQSxVQUFBO0VBRUEsOEJBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7QUN2Q1o7O0FEeUNRO0VBQ0ksUUFBQTtBQ3ZDWjs7QUR5Q1E7RUFDSSxVQUFBO0FDdkNaOztBRHlDUTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7RUFFQSxXQUFBO0VBQ0EsWUFBQTtFQUVBLFlBQUE7RUFFQSxzQkFBQTtBQzFDWjs7QUQyQ1k7RUFDSSxzREFBQTtBQ3pDaEI7O0FEMkNZO0VBQ0ksMkRBQUE7QUN6Q2hCOztBRDJDWTtFQUNJLDJEQUFBO0FDekNoQjs7QUQyQ1k7RUFDSSxtREFBQTtBQ3pDaEI7O0FEMkNZO0VBQ0kseURBQUE7QUN6Q2hCOztBRDJDWTtFQUNJLGdEQUFBO0FDekNoQjs7QUQ2Q0k7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFFQSxZQUFBO0VBQ0EsYUFBQTtFQUVBLHVCQUFBO0VBRUEsb0NBQUE7QUM5Q1I7O0FEK0NRO0VBQ0ksT0FBQTtFQUNBLFFBQUE7RUFDQSw4Q0FBQTtBQzdDWjs7QUQrQ1E7RUFDSSxVQUFBO0VBQ0EsU0FBQTtFQUNBLDRDQUFBO0FDN0NaOztBRCtDUTtFQUNJLE9BQUE7RUFDQSxTQUFBO0VBQ0EsNkNBQUE7QUM3Q1o7O0FEK0NRO0VBQ0ksVUFBQTtFQUNBLFFBQUE7RUFDQSw2Q0FBQTtBQzdDWiIsImZpbGUiOiJzcmMvYXBwL3RyZWUtbGlzdC90cmVlLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbn1cclxuQGtleWZyYW1lcyBmbHktY3ljbGUge1xyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTkwMHB4IDA7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgZmx5LXJpZ2h0LW9uZSB7XHJcblx0XHJcblx0MCUge1xyXG5cdFx0dHJhbnNmb3JtOiBzY2FsZSgwLjMpIHRyYW5zbGF0ZVgoLTEwdncpO1xyXG5cdH1cclxuXHRcclxuXHQxMCUge1xyXG5cdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKDJ2aCkgdHJhbnNsYXRlWCgxMHZ3KSBzY2FsZSgwLjQpO1xyXG5cdH1cclxuXHRcclxuXHQyMCUge1xyXG5cdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKDB2aCkgdHJhbnNsYXRlWCgzMHZ3KSBzY2FsZSgwLjUpO1xyXG5cdH1cclxuXHRcclxuXHQzMCUge1xyXG5cdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKDR2aCkgdHJhbnNsYXRlWCg1MHZ3KSBzY2FsZSgwLjYpO1xyXG5cdH1cclxuXHRcclxuXHQ0MCUge1xyXG5cdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKDJ2aCkgdHJhbnNsYXRlWCg3MHZ3KSBzY2FsZSgwLjYpO1xyXG5cdH1cclxuXHRcclxuXHQ1MCUge1xyXG5cdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKDB2aCkgdHJhbnNsYXRlWCg5MHZ3KSBzY2FsZSgwLjYpO1xyXG5cdH1cclxuXHRcclxuXHQ2MCUge1xyXG5cdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKDB2aCkgdHJhbnNsYXRlWCgxMTB2dykgc2NhbGUoMC42KTtcclxuXHR9XHJcblx0XHJcblx0MTAwJSB7XHJcblx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHZoKSB0cmFuc2xhdGVYKDExMHZ3KSBzY2FsZSgwLjYpO1xyXG5cdH1cclxuXHRcclxufVxyXG4uLWFwcC10cmVlcyB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB6LWluZGV4OiAxO1xyXG5cclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG5cclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnc3JjL2Fzc2V0cy9pbWFnZXMvdHJlZS1saXN0L3RyZWUtbGlzdC1tZW51LWJnLmpwZycpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICZfX2JpcmQtY29udGFpbmVyIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgei1pbmRleDogOTk5OTtcclxuICAgICAgICB0b3A6IDIwJTtcclxuICAgICAgICBsZWZ0OiAtMTAlO1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCkgdHJhbnNsYXRlWCgtMTB2dyk7XHJcbiAgICAgICAgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybTtcclxuXHJcbiAgICAgICAgYW5pbWF0aW9uLW5hbWU6IGZseS1yaWdodC1vbmU7XHJcbiAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xyXG4gICAgICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xyXG4gICAgICAgICZfZmlyc3Qge1xyXG4gICAgICAgICAgICBhbmltYXRpb24tZHVyYXRpb246IDE1cztcclxuICAgICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmX3NlY29uZCB7XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMTZzO1xyXG4gICAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IDFzO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgICZfX2JpcmQge1xyXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9zMy11cy13ZXN0LTIuYW1hem9uYXdzLmNvbS9zLmNkcG4uaW8vMTc0NDc5L2JpcmQtY2VsbHMtbmV3LnN2ZycpO1xyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogYXV0byAxMDAlO1xyXG4gICAgICAgIHdpZHRoOiA4OHB4O1xyXG4gICAgICAgIGhlaWdodDogMTI1cHg7XHJcbiAgICAgICAgd2lsbC1jaGFuZ2U6IGJhY2tncm91bmQtcG9zaXRpb247XHJcblxyXG4gICAgICAgIGFuaW1hdGlvbi1uYW1lOiBmbHktY3ljbGU7XHJcbiAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogc3RlcHMoMTApO1xyXG4gICAgICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xyXG4gICAgICAgICZfZmlyc3Qge1xyXG4gICAgICAgICAgICBhbmltYXRpb24tZHVyYXRpb246IDFzO1xyXG4gICAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IC0wLjVzO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmX3NlY29uZCB7XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMC45cztcclxuICAgICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAtMC43NXM7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgJl9fdGl0bGUge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB6LWluZGV4OiA5OTk5O1xyXG4gICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuXHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgICBwYWRkaW5nOiAxMHB4IDMwcHg7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA1NHB4O1xyXG5cclxuICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuXHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuXHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjgpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMjRweDtcclxuICAgIH1cclxuICAgICZfX21lbnUtbGlzdCB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgfVxyXG4gICAgJl9fbWVudS1pdGVtIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgei1pbmRleDogMjtcclxuXHJcbiAgICAgICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgICAgIGhlaWdodDogMjAwcHg7XHJcblxyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAmX25hdGl2ZSB7XHJcbiAgICAgICAgICAgIHRvcDogMTAlO1xyXG4gICAgICAgICAgICBsZWZ0OiAyMCU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICZfYXJib3JldHVtIHtcclxuICAgICAgICAgICAgdG9wOiA1JTtcclxuICAgICAgICAgICAgcmlnaHQ6IDQwJTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJl9wYXRpbyB7XHJcbiAgICAgICAgICAgIHRvcDogMzUlO1xyXG4gICAgICAgICAgICByaWdodDogMTAlO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgLTUwJSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICZfZXZlcmdyZWVuIHtcclxuICAgICAgICAgICAgYm90dG9tOiA1JTtcclxuICAgICAgICAgICAgbGVmdDogNDAlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmX3BvdGdyb3duIHtcclxuICAgICAgICAgICAgYm90dG9tOiAxMCU7XHJcbiAgICAgICAgICAgIHJpZ2h0OiAyMCU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICZfc2hydWJzIHtcclxuICAgICAgICAgICAgdG9wOiA3MCU7XHJcbiAgICAgICAgICAgIGxlZnQ6IDEwJTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIC01MCUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgICZfX2l0ZW0ge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuXHJcbiAgICAgICAgcGFkZGluZzogMTVweDtcclxuXHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMSwgMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJjo6YWZ0ZXIge1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMSwgMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJiAuLWFwcC10cmVlc19faXRlbS10aXRsZSB7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJiAuLWFwcC10cmVlc19faXRlbS1zdWItdGl0bGUge1xyXG4gICAgICAgICAgICAgICAgYm90dG9tOiAyMCU7XHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICYgLi1hcHAtdHJlZXNfX2l0ZW0taW1hZ2Uge1xyXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG5cclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB6LWluZGV4OiAzO1xyXG4gICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgxLCAwKTtcclxuXHJcbiAgICAgICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogOTAlO1xyXG5cclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogLjJzO1xyXG5cclxuICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiAxLjVweCBzb2xpZCB3aGl0ZTtcclxuICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IDEuNXB4IHNvbGlkIHdoaXRlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmOjphZnRlciB7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcblxyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IDM7XHJcbiAgICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDAsIDEpO1xyXG5cclxuICAgICAgICAgICAgd2lkdGg6IDkxLjUlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDkwJTtcclxuXHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IC4ycztcclxuXHJcbiAgICAgICAgICAgIGJvcmRlci10b3A6IDEuNXB4IHNvbGlkIHdoaXRlO1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxLjVweCBzb2xpZCB3aGl0ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJi10aXRsZSwgJi1zdWItdGl0bGUge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IDY7XHJcbiAgICAgICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcblxyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgcGFkZGluZzogMHB4IDIwcHg7XHJcblxyXG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogLjNzO1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG5cclxuICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDJweCAycHggNnB4IHJnYmEoMCwgMCwgMCwgMSk7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDEuNXB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmLXRpdGxlIHtcclxuICAgICAgICAgICAgdG9wOiA0MCU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYtc3ViLXRpdGxlIHtcclxuICAgICAgICAgICAgYm90dG9tOiA1JTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJi1pbWFnZSB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgei1pbmRleDogMjtcclxuICAgICAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcblxyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG5cclxuICAgICAgICAgICAgb3BhY2l0eTogMC45O1xyXG5cclxuICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgICAgICAgJl9uYXRpdmUge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdzcmMvYXNzZXRzL2ltYWdlcy90cmVlLWxpc3QvdHJlZS1saXN0LW5hdGl2ZS10cmVlcy1iZy5qcGcnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmX2FyYm9yZXR1bSB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ3NyYy9hc3NldHMvaW1hZ2VzL3RyZWUtbGlzdC90cmVlLWxpc3QtYXJib3JldHVtLXNwZWNpZXMtYmcuanBnJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJl9wYXRpbyB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ3NyYy9hc3NldHMvaW1hZ2VzL3RyZWUtbGlzdC90cmVlLWxpc3QtcGF0aW8tZnJ1aXQtdHJlZXMtYmcuanBnJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJl9ldmVyZ3JlZW4ge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdzcmMvYXNzZXRzL2ltYWdlcy90cmVlLWxpc3QvdHJlZS1saXN0LWV2ZXJncmVlbi1iZy5qcGcnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmX3BvdGdyb3duIHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnc3JjL2Fzc2V0cy9pbWFnZXMvdHJlZS1saXN0L3RyZWUtbGlzdC1wb3QtZ3Jvd24tdHJlZXMtYmcuanBnJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJl9zaHJ1YnMge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdzcmMvYXNzZXRzL2ltYWdlcy90cmVlLWxpc3QvdHJlZS1saXN0LXNocnVicy1iZy5qcGcnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgICZfX2Rlc2lnbi1ibG9jayB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHotaW5kZXg6IDI7XHJcblxyXG4gICAgICAgIHdpZHRoOiAzMDBweDtcclxuICAgICAgICBoZWlnaHQ6IDMwMHB4O1xyXG5cclxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcclxuXHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xyXG4gICAgICAgICZfdXBwZXItbGVmdC1jb3JuZXIge1xyXG4gICAgICAgICAgICB0b3A6IDAlO1xyXG4gICAgICAgICAgICBsZWZ0OiAwJTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKSByb3RhdGUoNDVkZWcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmX2JvdHRvbS1yaWdodC1jb3JuZXIge1xyXG4gICAgICAgICAgICBib3R0b206IDAlO1xyXG4gICAgICAgICAgICByaWdodDogMCU7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDUwJSw1MCUpIHJvdGF0ZSg0NWRlZyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICZfdXBwZXItcmlnaHQtY29ybmVyIHtcclxuICAgICAgICAgICAgdG9wOiAwJTtcclxuICAgICAgICAgICAgcmlnaHQ6IDAlO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg1MCUsLTUwJSkgcm90YXRlKDQ1ZGVnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJl9ib3R0b20tbGVmdC1jb3JuZXIge1xyXG4gICAgICAgICAgICBib3R0b206IDAlO1xyXG4gICAgICAgICAgICBsZWZ0OiAwJTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSw1MCUpIHJvdGF0ZSg0NWRlZyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIjpob3N0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwdmg7XG59XG5cbkBrZXlmcmFtZXMgZmx5LWN5Y2xlIHtcbiAgMTAwJSB7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTkwMHB4IDA7XG4gIH1cbn1cbkBrZXlmcmFtZXMgZmx5LXJpZ2h0LW9uZSB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuMykgdHJhbnNsYXRlWCgtMTB2dyk7XG4gIH1cbiAgMTAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMnZoKSB0cmFuc2xhdGVYKDEwdncpIHNjYWxlKDAuNCk7XG4gIH1cbiAgMjAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHZoKSB0cmFuc2xhdGVYKDMwdncpIHNjYWxlKDAuNSk7XG4gIH1cbiAgMzAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNHZoKSB0cmFuc2xhdGVYKDUwdncpIHNjYWxlKDAuNik7XG4gIH1cbiAgNDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMnZoKSB0cmFuc2xhdGVYKDcwdncpIHNjYWxlKDAuNik7XG4gIH1cbiAgNTAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHZoKSB0cmFuc2xhdGVYKDkwdncpIHNjYWxlKDAuNik7XG4gIH1cbiAgNjAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHZoKSB0cmFuc2xhdGVYKDExMHZ3KSBzY2FsZSgwLjYpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwdmgpIHRyYW5zbGF0ZVgoMTEwdncpIHNjYWxlKDAuNik7XG4gIH1cbn1cbi4tYXBwLXRyZWVzIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAxO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJzcmMvYXNzZXRzL2ltYWdlcy90cmVlLWxpc3QvdHJlZS1saXN0LW1lbnUtYmcuanBnXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuLi1hcHAtdHJlZXNfX2JpcmQtY29udGFpbmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiA5OTk5O1xuICB0b3A6IDIwJTtcbiAgbGVmdDogLTEwJTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwKSB0cmFuc2xhdGVYKC0xMHZ3KTtcbiAgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybTtcbiAgYW5pbWF0aW9uLW5hbWU6IGZseS1yaWdodC1vbmU7XG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XG59XG4uLWFwcC10cmVlc19fYmlyZC1jb250YWluZXJfZmlyc3Qge1xuICBhbmltYXRpb24tZHVyYXRpb246IDE1cztcbiAgYW5pbWF0aW9uLWRlbGF5OiAwO1xufVxuLi1hcHAtdHJlZXNfX2JpcmQtY29udGFpbmVyX3NlY29uZCB7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMTZzO1xuICBhbmltYXRpb24tZGVsYXk6IDFzO1xufVxuLi1hcHAtdHJlZXNfX2JpcmQge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJodHRwczovL3MzLXVzLXdlc3QtMi5hbWF6b25hd3MuY29tL3MuY2Rwbi5pby8xNzQ0NzkvYmlyZC1jZWxscy1uZXcuc3ZnXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGF1dG8gMTAwJTtcbiAgd2lkdGg6IDg4cHg7XG4gIGhlaWdodDogMTI1cHg7XG4gIHdpbGwtY2hhbmdlOiBiYWNrZ3JvdW5kLXBvc2l0aW9uO1xuICBhbmltYXRpb24tbmFtZTogZmx5LWN5Y2xlO1xuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBzdGVwcygxMCk7XG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xufVxuLi1hcHAtdHJlZXNfX2JpcmRfZmlyc3Qge1xuICBhbmltYXRpb24tZHVyYXRpb246IDFzO1xuICBhbmltYXRpb24tZGVsYXk6IC0wLjVzO1xufVxuLi1hcHAtdHJlZXNfX2JpcmRfc2Vjb25kIHtcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjlzO1xuICBhbmltYXRpb24tZGVsYXk6IC0wLjc1cztcbn1cbi4tYXBwLXRyZWVzX190aXRsZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogOTk5OTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAxMHB4IDMwcHg7XG4gIHBhZGRpbmctbGVmdDogNTRweDtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBjb2xvcjogYmxhY2s7XG4gIGxldHRlci1zcGFjaW5nOiAyNHB4O1xufVxuLi1hcHAtdHJlZXNfX21lbnUtbGlzdCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4uLWFwcC10cmVlc19fbWVudS1pdGVtIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAyO1xuICB3aWR0aDogMjAwcHg7XG4gIGhlaWdodDogMjAwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi4tYXBwLXRyZWVzX19tZW51LWl0ZW1fbmF0aXZlIHtcbiAgdG9wOiAxMCU7XG4gIGxlZnQ6IDIwJTtcbn1cbi4tYXBwLXRyZWVzX19tZW51LWl0ZW1fYXJib3JldHVtIHtcbiAgdG9wOiA1JTtcbiAgcmlnaHQ6IDQwJTtcbn1cbi4tYXBwLXRyZWVzX19tZW51LWl0ZW1fcGF0aW8ge1xuICB0b3A6IDM1JTtcbiAgcmlnaHQ6IDEwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIC01MCUpO1xufVxuLi1hcHAtdHJlZXNfX21lbnUtaXRlbV9ldmVyZ3JlZW4ge1xuICBib3R0b206IDUlO1xuICBsZWZ0OiA0MCU7XG59XG4uLWFwcC10cmVlc19fbWVudS1pdGVtX3BvdGdyb3duIHtcbiAgYm90dG9tOiAxMCU7XG4gIHJpZ2h0OiAyMCU7XG59XG4uLWFwcC10cmVlc19fbWVudS1pdGVtX3NocnVicyB7XG4gIHRvcDogNzAlO1xuICBsZWZ0OiAxMCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAtNTAlKTtcbn1cbi4tYXBwLXRyZWVzX19pdGVtIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZzogMTVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuLi1hcHAtdHJlZXNfX2l0ZW06aG92ZXI6OmJlZm9yZSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDEsIDEpO1xufVxuLi1hcHAtdHJlZXNfX2l0ZW06aG92ZXI6OmFmdGVyIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMSwgMSk7XG59XG4uLWFwcC10cmVlc19faXRlbTpob3ZlciAuLWFwcC10cmVlc19faXRlbS10aXRsZSB7XG4gIHRvcDogNTAlO1xuICBvcGFjaXR5OiAxO1xufVxuLi1hcHAtdHJlZXNfX2l0ZW06aG92ZXIgLi1hcHAtdHJlZXNfX2l0ZW0tc3ViLXRpdGxlIHtcbiAgYm90dG9tOiAyMCU7XG4gIG9wYWNpdHk6IDE7XG59XG4uLWFwcC10cmVlc19faXRlbTpob3ZlciAuLWFwcC10cmVlc19faXRlbS1pbWFnZSB7XG4gIG9wYWNpdHk6IDE7XG59XG4uLWFwcC10cmVlc19faXRlbTo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAzO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgxLCAwKTtcbiAgd2lkdGg6IDkwJTtcbiAgaGVpZ2h0OiA5MCU7XG4gIHRyYW5zaXRpb246IDAuMnM7XG4gIGJvcmRlci1yaWdodDogMS41cHggc29saWQgd2hpdGU7XG4gIGJvcmRlci1sZWZ0OiAxLjVweCBzb2xpZCB3aGl0ZTtcbn1cbi4tYXBwLXRyZWVzX19pdGVtOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMztcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMCwgMSk7XG4gIHdpZHRoOiA5MS41JTtcbiAgaGVpZ2h0OiA5MCU7XG4gIHRyYW5zaXRpb246IDAuMnM7XG4gIGJvcmRlci10b3A6IDEuNXB4IHNvbGlkIHdoaXRlO1xuICBib3JkZXItYm90dG9tOiAxLjVweCBzb2xpZCB3aGl0ZTtcbn1cbi4tYXBwLXRyZWVzX19pdGVtLXRpdGxlLCAuLWFwcC10cmVlc19faXRlbS1zdWItdGl0bGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDY7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDBweCAyMHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB0cmFuc2l0aW9uOiAwLjNzO1xuICBvcGFjaXR5OiAwO1xuICB0ZXh0LXNoYWRvdzogMnB4IDJweCA2cHggYmxhY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGV0dGVyLXNwYWNpbmc6IDEuNXB4O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuLi1hcHAtdHJlZXNfX2l0ZW0tdGl0bGUge1xuICB0b3A6IDQwJTtcbn1cbi4tYXBwLXRyZWVzX19pdGVtLXN1Yi10aXRsZSB7XG4gIGJvdHRvbTogNSU7XG59XG4uLWFwcC10cmVlc19faXRlbS1pbWFnZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMjtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG9wYWNpdHk6IDAuOTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cbi4tYXBwLXRyZWVzX19pdGVtLWltYWdlX25hdGl2ZSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcInNyYy9hc3NldHMvaW1hZ2VzL3RyZWUtbGlzdC90cmVlLWxpc3QtbmF0aXZlLXRyZWVzLWJnLmpwZ1wiKTtcbn1cbi4tYXBwLXRyZWVzX19pdGVtLWltYWdlX2FyYm9yZXR1bSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcInNyYy9hc3NldHMvaW1hZ2VzL3RyZWUtbGlzdC90cmVlLWxpc3QtYXJib3JldHVtLXNwZWNpZXMtYmcuanBnXCIpO1xufVxuLi1hcHAtdHJlZXNfX2l0ZW0taW1hZ2VfcGF0aW8ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJzcmMvYXNzZXRzL2ltYWdlcy90cmVlLWxpc3QvdHJlZS1saXN0LXBhdGlvLWZydWl0LXRyZWVzLWJnLmpwZ1wiKTtcbn1cbi4tYXBwLXRyZWVzX19pdGVtLWltYWdlX2V2ZXJncmVlbiB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcInNyYy9hc3NldHMvaW1hZ2VzL3RyZWUtbGlzdC90cmVlLWxpc3QtZXZlcmdyZWVuLWJnLmpwZ1wiKTtcbn1cbi4tYXBwLXRyZWVzX19pdGVtLWltYWdlX3BvdGdyb3duIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwic3JjL2Fzc2V0cy9pbWFnZXMvdHJlZS1saXN0L3RyZWUtbGlzdC1wb3QtZ3Jvd24tdHJlZXMtYmcuanBnXCIpO1xufVxuLi1hcHAtdHJlZXNfX2l0ZW0taW1hZ2Vfc2hydWJzIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwic3JjL2Fzc2V0cy9pbWFnZXMvdHJlZS1saXN0L3RyZWUtbGlzdC1zaHJ1YnMtYmcuanBnXCIpO1xufVxuLi1hcHAtdHJlZXNfX2Rlc2lnbi1ibG9jayB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMjtcbiAgd2lkdGg6IDMwMHB4O1xuICBoZWlnaHQ6IDMwMHB4O1xuICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xufVxuLi1hcHAtdHJlZXNfX2Rlc2lnbi1ibG9ja191cHBlci1sZWZ0LWNvcm5lciB7XG4gIHRvcDogMCU7XG4gIGxlZnQ6IDAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSByb3RhdGUoNDVkZWcpO1xufVxuLi1hcHAtdHJlZXNfX2Rlc2lnbi1ibG9ja19ib3R0b20tcmlnaHQtY29ybmVyIHtcbiAgYm90dG9tOiAwJTtcbiAgcmlnaHQ6IDAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg1MCUsIDUwJSkgcm90YXRlKDQ1ZGVnKTtcbn1cbi4tYXBwLXRyZWVzX19kZXNpZ24tYmxvY2tfdXBwZXItcmlnaHQtY29ybmVyIHtcbiAgdG9wOiAwJTtcbiAgcmlnaHQ6IDAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg1MCUsIC01MCUpIHJvdGF0ZSg0NWRlZyk7XG59XG4uLWFwcC10cmVlc19fZGVzaWduLWJsb2NrX2JvdHRvbS1sZWZ0LWNvcm5lciB7XG4gIGJvdHRvbTogMCU7XG4gIGxlZnQ6IDAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCA1MCUpIHJvdGF0ZSg0NWRlZyk7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TreeListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-tree-list',
                templateUrl: './tree-list.component.html',
                styleUrls: ['./tree-list.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/tree-list/tree-list.module.ts":
/*!***********************************************!*\
  !*** ./src/app/tree-list/tree-list.module.ts ***!
  \***********************************************/
/*! exports provided: TreeListModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeListModule", function() { return TreeListModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _tree_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tree-list.component */ "./src/app/tree-list/tree-list.component.ts");
/* harmony import */ var _tree_category_tree_category_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tree-category/tree-category.component */ "./src/app/tree-category/tree-category.component.ts");
/* harmony import */ var _tree_product_tree_product_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../tree-product/tree-product.component */ "./src/app/tree-product/tree-product.component.ts");
/* harmony import */ var _tree_tree_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../tree/tree.component */ "./src/app/tree/tree.component.ts");
/* harmony import */ var _tree_list_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tree-list-routing.module */ "./src/app/tree-list/tree-list-routing.module.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _guards_tree_list_can_proceed_to_tree_category_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../guards/tree-list/can-proceed-to-tree-category.guard */ "./src/app/guards/tree-list/can-proceed-to-tree-category.guard.ts");
/* harmony import */ var _guards_tree_list_can_proceed_to_tree_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../guards/tree-list/can-proceed-to-tree.guard */ "./src/app/guards/tree-list/can-proceed-to-tree.guard.ts");
/* harmony import */ var _guards_tree_list_can_leave_tree_guard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../guards/tree-list/can-leave-tree.guard */ "./src/app/guards/tree-list/can-leave-tree.guard.ts");
/* harmony import */ var _pipes_tree_list_format_tree_category_title_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../pipes/tree-list/format-tree-category-title.pipe */ "./src/app/pipes/tree-list/format-tree-category-title.pipe.ts");












class TreeListModule {
}
TreeListModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: TreeListModule, bootstrap: [_tree_list_component__WEBPACK_IMPORTED_MODULE_1__["TreeListComponent"]] });
TreeListModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function TreeListModule_Factory(t) { return new (t || TreeListModule)(); }, providers: [
        _guards_tree_list_can_proceed_to_tree_category_guard__WEBPACK_IMPORTED_MODULE_7__["CanProceedToTreeCategoryGuard"],
        _guards_tree_list_can_proceed_to_tree_guard__WEBPACK_IMPORTED_MODULE_8__["CanProceedToTreeGuard"],
        _guards_tree_list_can_leave_tree_guard__WEBPACK_IMPORTED_MODULE_9__["CanLeaveTreeGuard"]
    ], imports: [[
            _tree_list_routing_module__WEBPACK_IMPORTED_MODULE_5__["TreeListRoutingModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TreeListModule, { declarations: [_tree_list_component__WEBPACK_IMPORTED_MODULE_1__["TreeListComponent"],
        _tree_category_tree_category_component__WEBPACK_IMPORTED_MODULE_2__["TreeCategoryComponent"],
        _tree_product_tree_product_component__WEBPACK_IMPORTED_MODULE_3__["TreeProductComponent"],
        _tree_tree_component__WEBPACK_IMPORTED_MODULE_4__["TreeComponent"],
        _pipes_tree_list_format_tree_category_title_pipe__WEBPACK_IMPORTED_MODULE_10__["FormatTreeCategoryTitlePipe"]], imports: [_tree_list_routing_module__WEBPACK_IMPORTED_MODULE_5__["TreeListRoutingModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TreeListModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _tree_list_component__WEBPACK_IMPORTED_MODULE_1__["TreeListComponent"],
                    _tree_category_tree_category_component__WEBPACK_IMPORTED_MODULE_2__["TreeCategoryComponent"],
                    _tree_product_tree_product_component__WEBPACK_IMPORTED_MODULE_3__["TreeProductComponent"],
                    _tree_tree_component__WEBPACK_IMPORTED_MODULE_4__["TreeComponent"],
                    _pipes_tree_list_format_tree_category_title_pipe__WEBPACK_IMPORTED_MODULE_10__["FormatTreeCategoryTitlePipe"]
                ],
                imports: [
                    _tree_list_routing_module__WEBPACK_IMPORTED_MODULE_5__["TreeListRoutingModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"],
                ],
                providers: [
                    _guards_tree_list_can_proceed_to_tree_category_guard__WEBPACK_IMPORTED_MODULE_7__["CanProceedToTreeCategoryGuard"],
                    _guards_tree_list_can_proceed_to_tree_guard__WEBPACK_IMPORTED_MODULE_8__["CanProceedToTreeGuard"],
                    _guards_tree_list_can_leave_tree_guard__WEBPACK_IMPORTED_MODULE_9__["CanLeaveTreeGuard"]
                ],
                bootstrap: [_tree_list_component__WEBPACK_IMPORTED_MODULE_1__["TreeListComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/tree-product/tree-product.component.ts":
/*!********************************************************!*\
  !*** ./src/app/tree-product/tree-product.component.ts ***!
  \********************************************************/
/*! exports provided: TreeProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeProductComponent", function() { return TreeProductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





class TreeProductComponent {
    constructor(_activatedRoute, _router) {
        this._activatedRoute = _activatedRoute;
        this._router = _router;
        this._destroySubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    ngOnInit() {
        this._activatedRoute.params
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(this._destroySubject$)).subscribe((params) => {
            this._treeCategoryName = params.categoryName;
        });
    }
    ngOnDestroy() {
        this._destroySubject$.next(true);
        this._destroySubject$.complete();
    }
    goToCurrentTreeRouter() {
        const currentTreeName = this.tree.name;
        const currentTreeRouterName = currentTreeName.replace(/\(|\)/g, '').toLowerCase().split(' ').join('-');
        this._router.navigate(['/trees', 'tree-category', this._treeCategoryName, 'tree', currentTreeRouterName]);
    }
}
TreeProductComponent.ɵfac = function TreeProductComponent_Factory(t) { return new (t || TreeProductComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
TreeProductComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TreeProductComponent, selectors: [["app-tree-product"]], inputs: { tree: "tree" }, decls: 6, vars: 1, consts: [[1, "-app-tree-product"], [1, "-app-tree-product__title"], [1, "-app-tree-product__image"], [1, "-app-tree-product__button", 3, "click"]], template: function TreeProductComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TreeProductComponent_Template_a_click_4_listener() { return ctx.goToCurrentTreeRouter(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " View Product ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.tree.name, " ");
    } }, styles: ["@charset \"UTF-8\";\n[_nghost-%COMP%] {\n  height: 250px;\n  width: 250px;\n  padding: 50px;\n}\n.-app-tree-product[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  transition: 0.3s;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  border: 3px solid white;\n  border-radius: 50%;\n}\n.-app-tree-product[_ngcontent-%COMP%]:hover   .-app-tree-product__title[_ngcontent-%COMP%] {\n  top: -50%;\n}\n.-app-tree-product[_ngcontent-%COMP%]:hover   .-app-tree-product__button[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.-app-tree-product[_ngcontent-%COMP%]:hover::before {\n  top: 0%;\n}\n.-app-tree-product[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  z-index: 1;\n  top: 100%;\n  left: 0%;\n  width: 100%;\n  height: 100%;\n  transition: 0.2s;\n  background-color: rgba(0, 0, 0, 0.8);\n}\n.-app-tree-product[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  z-index: 1;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.2);\n}\n.-app-tree-product__title[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 3;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 80%;\n  margin: 0px;\n  transition: 0.2s;\n  color: white;\n  text-shadow: 2px 2px 6px black;\n  font-size: 22px;\n  text-align: center;\n  letter-spacing: 1px;\n}\n.-app-tree-product__image[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: -1;\n  width: 100%;\n  height: 100%;\n  background-image: url('tree-product-image.jpg');\n  background-size: cover;\n}\n.-app-tree-product__button[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 2;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 170px;\n  transition: 0.4s;\n  cursor: pointer;\n  opacity: 0;\n  color: white;\n  font-size: 18px;\n  letter-spacing: 3px;\n}\n.-app-tree-product__button[_ngcontent-%COMP%]:hover {\n  text-shadow: 0px 0px 4px rgba(255, 255, 255, 0.6);\n}\n.-app-tree-product__button[_ngcontent-%COMP%]:hover::before {\n  text-shadow: 0px 0px 4px rgba(255, 255, 255, 0.6);\n}\n.-app-tree-product__button[_ngcontent-%COMP%]::before {\n  content: \"\uF30A\";\n  position: absolute;\n  top: 50%;\n  left: 90%;\n  transform: translate(0%, -50%) rotate(180deg);\n  transition: 0.6s;\n  color: white;\n  font-family: \"Font Awesome 5 free\", \"Font Awesome 5 brands\";\n  font-size: 20px;\n  font-weight: 900;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHJlZS1wcm9kdWN0L3RyZWUtcHJvZHVjdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdHJlZS1wcm9kdWN0L0Q6XFxFUEFNIHRyYWluaW5nXFxzYXZlLW91ci1wbGFuZXRcXHNhdmUtb3VyLXBsYW5ldC1wcm9qZWN0L3NyY1xcYXBwXFx0cmVlLXByb2R1Y3RcXHRyZWUtcHJvZHVjdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNBaEI7RUFDSSxhQUFBO0VBQ0EsWUFBQTtFQUVBLGFBQUE7QURDSjtBQ0VBO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBRUEsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFFQSxXQUFBO0VBQ0EsWUFBQTtFQUVBLGdCQUFBO0VBRUEsZ0JBQUE7RUFDQSx5QkFBQTtLQUFBLHNCQUFBO01BQUEscUJBQUE7VUFBQSxpQkFBQTtFQUVBLHVCQUFBO0VBQ0Esa0JBQUE7QURKSjtBQ01RO0VBQ0ksU0FBQTtBREpaO0FDTVE7RUFDSSxVQUFBO0FESlo7QUNNUTtFQUNJLE9BQUE7QURKWjtBQ09JO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBRUEsV0FBQTtFQUNBLFlBQUE7RUFFQSxnQkFBQTtFQUVBLG9DQUFBO0FEUlI7QUNVSTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUVBLFdBQUE7RUFDQSxZQUFBO0VBRUEsb0NBQUE7QURWUjtBQ1lJO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtFQUVBLFVBQUE7RUFDQSxXQUFBO0VBRUEsZ0JBQUE7RUFFQSxZQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBRGJSO0FDZUk7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFFQSxXQUFBO0VBQ0EsWUFBQTtFQUVBLCtDQUFBO0VBQ0Esc0JBQUE7QURmUjtBQ2lCSTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7RUFFQSxZQUFBO0VBRUEsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUVBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QURsQlI7QUNtQlE7RUFDSSxpREFBQTtBRGpCWjtBQ2tCWTtFQUNJLGlEQUFBO0FEaEJoQjtBQ21CUTtFQUNJLFlBQUE7RUFFQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsNkNBQUE7RUFFQSxnQkFBQTtFQUVBLFlBQUE7RUFDQSwyREFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBRHBCWiIsImZpbGUiOiJzcmMvYXBwL3RyZWUtcHJvZHVjdC90cmVlLXByb2R1Y3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG46aG9zdCB7XG4gIGhlaWdodDogMjUwcHg7XG4gIHdpZHRoOiAyNTBweDtcbiAgcGFkZGluZzogNTBweDtcbn1cblxuLi1hcHAtdHJlZS1wcm9kdWN0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdHJhbnNpdGlvbjogMC4zcztcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIGJvcmRlcjogM3B4IHNvbGlkIHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG4uLWFwcC10cmVlLXByb2R1Y3Q6aG92ZXIgLi1hcHAtdHJlZS1wcm9kdWN0X190aXRsZSB7XG4gIHRvcDogLTUwJTtcbn1cbi4tYXBwLXRyZWUtcHJvZHVjdDpob3ZlciAuLWFwcC10cmVlLXByb2R1Y3RfX2J1dHRvbiB7XG4gIG9wYWNpdHk6IDE7XG59XG4uLWFwcC10cmVlLXByb2R1Y3Q6aG92ZXI6OmJlZm9yZSB7XG4gIHRvcDogMCU7XG59XG4uLWFwcC10cmVlLXByb2R1Y3Q6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMTtcbiAgdG9wOiAxMDAlO1xuICBsZWZ0OiAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgdHJhbnNpdGlvbjogMC4ycztcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xufVxuLi1hcHAtdHJlZS1wcm9kdWN0OjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMik7XG59XG4uLWFwcC10cmVlLXByb2R1Y3RfX3RpdGxlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAzO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgd2lkdGg6IDgwJTtcbiAgbWFyZ2luOiAwcHg7XG4gIHRyYW5zaXRpb246IDAuMnM7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1zaGFkb3c6IDJweCAycHggNnB4IGJsYWNrO1xuICBmb250LXNpemU6IDIycHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbn1cbi4tYXBwLXRyZWUtcHJvZHVjdF9faW1hZ2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IC0xO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJzcmMvYXNzZXRzL2ltYWdlcy90cmVlLWxpc3QvdHJlZS1wcm9kdWN0LWltYWdlLmpwZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cbi4tYXBwLXRyZWUtcHJvZHVjdF9fYnV0dG9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAyO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgd2lkdGg6IDE3MHB4O1xuICB0cmFuc2l0aW9uOiAwLjRzO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG9wYWNpdHk6IDA7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBsZXR0ZXItc3BhY2luZzogM3B4O1xufVxuLi1hcHAtdHJlZS1wcm9kdWN0X19idXR0b246aG92ZXIge1xuICB0ZXh0LXNoYWRvdzogMHB4IDBweCA0cHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpO1xufVxuLi1hcHAtdHJlZS1wcm9kdWN0X19idXR0b246aG92ZXI6OmJlZm9yZSB7XG4gIHRleHQtc2hhZG93OiAwcHggMHB4IDRweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNik7XG59XG4uLWFwcC10cmVlLXByb2R1Y3RfX2J1dHRvbjo6YmVmb3JlIHtcbiAgY29udGVudDogXCLvjIpcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogOTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgLTUwJSkgcm90YXRlKDE4MGRlZyk7XG4gIHRyYW5zaXRpb246IDAuNnM7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1mYW1pbHk6IFwiRm9udCBBd2Vzb21lIDUgZnJlZVwiLCBcIkZvbnQgQXdlc29tZSA1IGJyYW5kc1wiO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG59IiwiOmhvc3Qge1xyXG4gICAgaGVpZ2h0OiAyNTBweDtcclxuICAgIHdpZHRoOiAyNTBweDtcclxuXHJcbiAgICBwYWRkaW5nOiA1MHB4O1xyXG59XHJcblxyXG4uLWFwcC10cmVlLXByb2R1Y3Qge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgei1pbmRleDogMDtcclxuXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG5cclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcblxyXG4gICAgdHJhbnNpdGlvbjogMC4zcztcclxuICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG5cclxuICAgIGJvcmRlcjogM3B4IHNvbGlkIHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgICAgJiAuLWFwcC10cmVlLXByb2R1Y3RfX3RpdGxlIHtcclxuICAgICAgICAgICAgdG9wOiAtNTAlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmIC4tYXBwLXRyZWUtcHJvZHVjdF9fYnV0dG9uIHtcclxuICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJjo6YmVmb3JlIHtcclxuICAgICAgICAgICAgdG9wOiAwJTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgICAgdG9wOiAxMDAlO1xyXG4gICAgICAgIGxlZnQ6IDAlO1xyXG5cclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcblxyXG4gICAgICAgIHRyYW5zaXRpb246IDAuMnM7XHJcblxyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTtcclxuICAgIH1cclxuICAgICY6OmFmdGVyIHtcclxuICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICBsZWZ0OiAwO1xyXG5cclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcblxyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAgIH1cclxuICAgICZfX3RpdGxlIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgei1pbmRleDogMztcclxuICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcblxyXG4gICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICAgICAgbWFyZ2luOiAwcHg7XHJcblxyXG4gICAgICAgIHRyYW5zaXRpb246IDAuMnM7XHJcblxyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICB0ZXh0LXNoYWRvdzogMnB4IDJweCA2cHggcmdiYSgwLCAwLCAwLCAxKTtcclxuICAgICAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICB9XHJcbiAgICAmX19pbWFnZSB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHotaW5kZXg6IC0xO1xyXG5cclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcblxyXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcInNyYy9hc3NldHMvaW1hZ2VzL3RyZWUtbGlzdC90cmVlLXByb2R1Y3QtaW1hZ2UuanBnXCIpO1xyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICB9XHJcbiAgICAmX19idXR0b24ge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB6LWluZGV4OiAyO1xyXG4gICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuXHJcbiAgICAgICAgd2lkdGg6IDE3MHB4O1xyXG5cclxuICAgICAgICB0cmFuc2l0aW9uOiAwLjRzO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG5cclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAzcHg7XHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIHRleHQtc2hhZG93OiAwcHggMHB4IDRweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNik7XHJcbiAgICAgICAgICAgICY6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LXNoYWRvdzogMHB4IDBweCA0cHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICY6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiXFxmMzBhXCI7XHJcblxyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgICBsZWZ0OiA5MCU7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAtNTAlKSByb3RhdGUoMTgwZGVnKTtcclxuXHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IDAuNnM7XHJcblxyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIkZvbnQgQXdlc29tZSA1IGZyZWVcIiwgXCJGb250IEF3ZXNvbWUgNSBicmFuZHNcIjtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogOTAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TreeProductComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-tree-product',
                templateUrl: './tree-product.component.html',
                styleUrls: ['./tree-product.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, { tree: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/tree/tree.component.ts":
/*!****************************************!*\
  !*** ./src/app/tree/tree.component.ts ***!
  \****************************************/
/*! exports provided: TreeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeComponent", function() { return TreeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _store_tree_list_tree_list_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/tree-list/tree-list.selectors */ "./src/app/store/tree-list/tree-list.selectors.ts");
/* harmony import */ var _models_donation_list_donation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/donation-list/donation */ "./src/app/models/donation-list/donation.ts");
/* harmony import */ var _models_tree_list_tree_donation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/tree-list/tree-donation */ "./src/app/models/tree-list/tree-donation.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
/* harmony import */ var _store_donation_list_donation_list_facade__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../store/donation-list/donation-list.facade */ "./src/app/store/donation-list/donation-list.facade.ts");
/* harmony import */ var _store_tree_list_tree_list_facade__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../store/tree-list/tree-list.facade */ "./src/app/store/tree-list/tree-list.facade.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");












function TreeComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TreeComponent_div_0_Template_a_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.toggleMenuMode(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " description ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TreeComponent_div_0_Template_a_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.toggleMenuMode(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " details ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Size: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Environment: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Key Feature: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](36, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TreeComponent_div_0_Template_button_click_38_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.removeTreeBuyNumber(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TreeComponent_div_0_Template_button_click_39_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.minusTreeBuyNumber(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TreeComponent_div_0_Template_button_click_42_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.plusTreeBuyNumber(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TreeComponent_div_0_Template_button_click_43_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.choose(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " Choose ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.tree.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("-app-current-tree__description-button_description-mode", ctx_r0.descriptionMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("-app-current-tree__details-button_not-description-mode", !ctx_r0.descriptionMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("-app-current-tree__description_not-description-mode", !ctx_r0.descriptionMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.tree.description, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("-app-current-tree__details_description-mode", ctx_r0.descriptionMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r0.tree.picture, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.tree.size, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.tree.environment, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.tree.keyFeature, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](36, 18, ctx_r0.totalCost), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r0.canMinusTreeNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r0.canMinusTreeNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.treeBuyNumber, " ");
} }
function TreeComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class TreeComponent {
    constructor(_activatedRoute, _store$, _facadeDonationListService, _facadeTreeListService) {
        this._activatedRoute = _activatedRoute;
        this._store$ = _store$;
        this._facadeDonationListService = _facadeDonationListService;
        this._facadeTreeListService = _facadeTreeListService;
        this._destroySubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.isSearchLoading = true;
        this.descriptionMode = true;
        this.treeBuyNumber = 1;
    }
    calculateTotalBuyCost() {
        return this.tree.cost * this.treeBuyNumber;
    }
    isCanMinusTreeNumber() {
        return (this.treeBuyNumber > 1) ? true : false;
    }
    ngOnInit() {
        this._activatedRoute.params
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this._destroySubject$)).subscribe((params) => {
            this._appNavigationDonationButton = document.querySelector('.-app-navigation__donation-button');
            this._appNavigationDonationButton.classList.remove('-app-navigation__donation-button_blinking');
            this.treeBuyNumber = 1;
            this._facadeTreeListService.searchTree(params.treeName);
            this._facadeTreeListService.goToTreeRouterMode();
        });
        const searTreeDelay = 3000;
        this._store$.select(_store_tree_list_tree_list_selectors__WEBPACK_IMPORTED_MODULE_3__["selectSearchTree"])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this._destroySubject$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["delay"])(searTreeDelay)).subscribe((tree) => {
            if (Boolean(tree)) {
                this.tree = tree;
                this.totalCost = this.tree.cost;
                this._facadeTreeListService.searchTreeSuccess();
            }
        });
        this._store$.select(_store_tree_list_tree_list_selectors__WEBPACK_IMPORTED_MODULE_3__["selectIsTreeSearchLoading"])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this._destroySubject$)).subscribe((isSearchLoading) => {
            this.isSearchLoading = isSearchLoading;
        });
    }
    ngOnDestroy() {
        this._destroySubject$.next(true);
        this._destroySubject$.complete();
    }
    toggleMenuMode() {
        this.descriptionMode = !this.descriptionMode;
    }
    minusTreeBuyNumber() {
        this.treeBuyNumber--;
        this.totalCost = this.calculateTotalBuyCost();
        this.canMinusTreeNumber = this.isCanMinusTreeNumber();
    }
    plusTreeBuyNumber() {
        this.treeBuyNumber++;
        this.totalCost = this.calculateTotalBuyCost();
        this.canMinusTreeNumber = true;
    }
    removeTreeBuyNumber() {
        this.treeBuyNumber = 1;
        this.totalCost = this.calculateTotalBuyCost();
        this.canMinusTreeNumber = false;
    }
    choose() {
        this._appNavigationDonationButton.classList.add('-app-navigation__donation-button_blinking');
        this._isChosenAtLeastOneTree = true;
        const donation = new _models_donation_list_donation__WEBPACK_IMPORTED_MODULE_4__["Donation"]('D', null, new _models_tree_list_tree_donation__WEBPACK_IMPORTED_MODULE_5__["TreeDonation"]('TD', this.treeBuyNumber, this.totalCost, this.tree), new Date());
        this._facadeDonationListService.initNewUserDonationBeforeRegistration(donation);
    }
    canDeactivate() {
        const deactivateQuestion = 'You haven’t chosen any tree. Are you sure that you want to go from this page? For donation you need at least one tree';
        return (!this._isChosenAtLeastOneTree)
            ? confirm(deactivateQuestion)
            : true;
    }
}
TreeComponent.ɵfac = function TreeComponent_Factory(t) { return new (t || TreeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_7__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_store_donation_list_donation_list_facade__WEBPACK_IMPORTED_MODULE_8__["FacadeServiceDonationList"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_store_tree_list_tree_list_facade__WEBPACK_IMPORTED_MODULE_9__["FacadeServiceTreeList"])); };
TreeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TreeComponent, selectors: [["app-tree"]], decls: 2, vars: 2, consts: [["class", "-app-current-tree", 4, "ngIf"], ["class", "-app-loader", 4, "ngIf"], [1, "-app-current-tree"], [1, "-app-current-tree-wrapper"], [1, "-app-current-tree__title-ribbon"], [1, "-app-current-tree__title-ribbon_left"], [1, "-app-current-tree__title"], [1, "-app-current-tree__title-ribbon_right"], [1, "-app-current-tree__menu"], [1, "-app-current-tree__description-button", 3, "click"], [1, "-app-current-tree__details-button", 3, "click"], [1, "-app-current-tree__content-wrapper"], [1, "-app-current-tree__description"], [1, "-app-current-tree__details"], [1, "-app-current-tree__image", 3, "src"], [1, "-app-current-tree__feature-list"], [1, "-app-current-tree__feature"], [1, "-app-current-tree__feature-title"], [1, "-app-current-tree__feature-sub-title"], [1, "-app-current-tree_feature-sub-title"], [1, "-app-current-tree__cost-ribbon"], [1, "-app-current-tree__cost"], [1, "-app-current-tree__donate"], [1, "-app-current-tree__button", "-app-current-tree__button_remove", 3, "disabled", "click"], [1, "-app-current-tree__button", "-app-current-tree__button_minus", 3, "disabled", "click"], [1, "-app-current-tree__tree-number"], [1, "-app-current-tree__button", "-app-current-tree__button_plus", 3, "click"], [1, "-app-current-tree__donate-button", "-app-current-tree__donate-button_donate", 3, "click"], [1, "-app-loader"], [1, "-app-loader__ball", "-app-loader__ball_first"], [1, "-app-loader__inner"], [1, "-app-loader__ball", "-app-loader__ball_second"], [1, "-app-loader__ball", "-app-loader__ball_third"], [1, "-app-loader__ball", "-app-loader__ball_fourth"], [1, "-app-loader__ball", "-app-loader__ball_fifth"], [1, "-app-loader__ball", "-app-loader__ball_sixth"], [1, "-app-loader__ball", "-app-loader__ball_center"]], template: function TreeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TreeComponent_div_0_Template, 45, 20, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TreeComponent_div_1_Template, 15, 0, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isSearchLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isSearchLoading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["CurrencyPipe"]], styles: ["@charset \"UTF-8\";\n[_nghost-%COMP%] {\n  position: fixed;\n  right: 0;\n  top: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 60%;\n  height: 100vh;\n}\n.-app-current-tree[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 60%;\n  padding: 200px;\n  color: white;\n}\n.-app-current-tree-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: flex-start;\n  width: 100%;\n  height: 100%;\n  padding: 70px;\n  box-sizing: border-box;\n  border: 2px solid white;\n  border-radius: 10px;\n  background-color: rgba(8, 37, 8, 0.95);\n}\n.-app-current-tree__title-ribbon[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 15px;\n  left: 0px;\n  width: 100%;\n  padding: 8px 10px;\n  box-sizing: border-box;\n  box-shadow: -1px 2px 3px rgba(0, 0, 0, 0.3);\n  background: white;\n}\n.-app-current-tree__title-ribbon_left[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: -9px;\n  width: 7px;\n  height: 100%;\n  padding: 0 0 7px;\n  border-right: 2px solid white;\n  border-radius: 5px 0 0 5px;\n  background: white;\n}\n.-app-current-tree__title-ribbon_left[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  bottom: -5px;\n  left: -4.5px;\n  width: 5px;\n  height: 5px;\n  border-radius: 5px 0 0 5px;\n  background: rgba(0, 0, 0, 0.6);\n}\n.-app-current-tree__title-ribbon_right[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  right: -9px;\n  width: 7px;\n  height: 100%;\n  padding: 0 0 7px;\n  border-left: 2px solid white;\n  border-radius: 0 5px 5px 0;\n  background: white;\n}\n.-app-current-tree__title-ribbon_right[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  bottom: -5px;\n  right: -4.5px;\n  width: 5px;\n  height: 5px;\n  border-radius: 5px 0 0 5px;\n  background: rgba(0, 0, 0, 0.6);\n}\n.-app-current-tree__title[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  width: 100%;\n  margin: 0px;\n  padding: 25px 0px;\n  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);\n  color: rgba(8, 37, 8, 0.95);\n  letter-spacing: 3px;\n  font-size: 28px;\n}\n.-app-current-tree__menu[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  padding-top: 100px;\n  padding-bottom: 20px;\n  letter-spacing: 1px;\n}\n.-app-current-tree__description-button[_ngcontent-%COMP%], .-app-current-tree__details-button[_ngcontent-%COMP%] {\n  position: relative;\n  display: block;\n  padding: 10px 20px;\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  overflow: hidden;\n  font-weight: 600;\n}\n.-app-current-tree__description-button[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover, .-app-current-tree__details-button[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover {\n  -webkit-filter: brightness(1.2);\n          filter: brightness(1.2);\n}\n.-app-current-tree__description-button[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  bottom: 0%;\n  left: 100%;\n  transform: translate(0%, 0%);\n  transition: 0.4s;\n  width: 100%;\n  height: 2px;\n  background-color: white;\n}\n.-app-current-tree__description-button_description-mode[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  bottom: 0%;\n  left: 50%;\n  transform: translate(-50%, 0%);\n  width: 100%;\n  height: 2px;\n  background-color: white;\n}\n.-app-current-tree__details-button[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  bottom: 0%;\n  left: -100%;\n  transform: translate(0%, 0%);\n  transition: 0.4s;\n  width: 100%;\n  height: 2px;\n  background-color: white;\n}\n.-app-current-tree__details-button_not-description-mode[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  bottom: 0%;\n  left: 50%;\n  transform: translate(-50%, 0%);\n  width: 100%;\n  height: 2px;\n  background-color: white;\n}\n.-app-current-tree__content-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  height: 60%;\n  overflow: hidden;\n}\n.-app-current-tree__description[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0%;\n  left: 0%;\n  transform: translate(0%, 0%);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  margin: 0;\n  overflow: auto;\n  transition: 0.4s;\n  text-align: center;\n  letter-spacing: 2px;\n  font-size: 18px;\n}\n.-app-current-tree__description_not-description-mode[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0%;\n  left: 50%;\n  transform: translate(-50%, -120%);\n}\n.-app-current-tree__details[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0%;\n  left: 50%;\n  transform: translate(-50%, 0%);\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  transition: 0.4s;\n}\n.-app-current-tree__details_description-mode[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0%;\n  left: 120%;\n  transform: translate(0%, 0%);\n}\n.-app-current-tree__image[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 200px;\n  border: 2px solid white;\n}\n.-app-current-tree__feature-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-end;\n  padding-left: 20px;\n  font-size: 20px;\n}\n.-app-current-tree__feature[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  width: 100%;\n  padding: 10px 0px;\n  text-align: right;\n}\n.-app-current-tree__feature-title[_ngcontent-%COMP%] {\n  padding-right: 20px;\n  white-space: nowrap;\n  text-align: left;\n}\n.-app-current-tree__cost-ribbon[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: -6.1px;\n  right: 10%;\n}\n.-app-current-tree__cost-ribbon[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  right: 10px;\n  bottom: 44px;\n  width: 0;\n  height: 0;\n  border-left: 53px solid transparent;\n  border-right: 53px solid transparent;\n  border-bottom: 15px solid white;\n}\n.-app-current-tree__cost[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: -3px;\n  right: 10px;\n  display: block;\n  width: 90px;\n  padding: 12px 8px 16px;\n  border-bottom-right-radius: 8px;\n  background: white;\n  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);\n  color: rgba(8, 37, 8, 0.95);\n  line-height: 1;\n  text-align: center;\n  letter-spacing: 1px;\n  font-weight: 600;\n  font-size: 20px;\n}\n.-app-current-tree__cost[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  bottom: 0px;\n  left: -7.5px;\n  width: 8px;\n  height: 8px;\n  border-bottom-left-radius: 4px;\n  background: white;\n}\n.-app-current-tree__cost[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  bottom: -0.5px;\n  left: -9px;\n  width: 9px;\n  height: 8px;\n  border-radius: 0 0 8px 8px;\n  background: rgba(0, 0, 0, 0.8);\n}\n.-app-current-tree__donate[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  width: 100%;\n  height: 50px;\n  margin-top: 20px;\n  box-sizing: border-box;\n}\n.-app-current-tree__donate-button[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  padding: 15px 50px;\n  transition: 0.3s;\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.9);\n  outline: none;\n  border: 2px solid #082508;\n  border-radius: 15px;\n  background-color: white;\n  color: rgba(8, 37, 8, 0.95);\n  text-transform: uppercase;\n  letter-spacing: 2px;\n  font-size: 20px;\n  font-weight: 600;\n}\n.-app-current-tree__donate-button[_ngcontent-%COMP%]:active {\n  transform: translate(-52%, -52%);\n  box-shadow: 2px 2px 6px black;\n  font-size: 21px;\n}\n.-app-current-tree__button[_ngcontent-%COMP%] {\n  position: relative;\n  width: 40px;\n  height: 40px;\n  padding: 0px 10px;\n  transition: 0.3s;\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  outline: none;\n  border: none;\n  background: none;\n}\n.-app-current-tree__button[_ngcontent-%COMP%]:hover {\n  -webkit-filter: brightness(1.3);\n          filter: brightness(1.3);\n}\n.-app-current-tree__button[_ngcontent-%COMP%]:active::before {\n  font-size: 24px;\n}\n.-app-current-tree__button[_ngcontent-%COMP%]::before {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  color: white;\n  text-shadow: 0px 0px 8px black;\n  font-size: 22px;\n  font-weight: 900;\n  font-family: \"Font Awesome 5 free\", \"Font Awesome 5 brands\";\n}\n.-app-current-tree__button.-app-current-tree__button[disabled][_ngcontent-%COMP%] {\n  opacity: 0.6;\n}\n.-app-current-tree__button_plus[_ngcontent-%COMP%]::before {\n  content: \"\uF067\";\n}\n.-app-current-tree__button_minus[_ngcontent-%COMP%]::before {\n  content: \"\uF068\";\n}\n.-app-current-tree__button_remove[_ngcontent-%COMP%]::before {\n  content: \"\uF1F8\";\n}\n.-app-current-tree__tree-number[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 35px;\n  height: 35px;\n  margin: 0px 10px;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.6);\n  border: 2px solid white;\n  border-radius: 5px;\n  background: rgba(8, 37, 8, 0.95);\n  color: white;\n  letter-spacing: 1px;\n  font-size: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHJlZS90cmVlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC90cmVlL0Q6XFxFUEFNIHRyYWluaW5nXFxzYXZlLW91ci1wbGFuZXRcXHNhdmUtb3VyLXBsYW5ldC1wcm9qZWN0L3NyY1xcYXBwXFx0cmVlXFx0cmVlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQjtFQUNJLGVBQUE7RUFDQSxRQUFBO0VBQ0EsTUFBQTtFQUVBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBRUEsVUFBQTtFQUNBLGFBQUE7QURBSjtBQ0dBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFFQSxXQUFBO0VBQ0EsV0FBQTtFQUVBLGNBQUE7RUFFQSxZQUFBO0FESEo7QUNJSTtFQUNJLGtCQUFBO0VBRUEsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSwyQkFBQTtFQUVBLFdBQUE7RUFDQSxZQUFBO0VBRUEsYUFBQTtFQUVBLHNCQUFBO0VBRUEsdUJBQUE7RUFDQSxtQkFBQTtFQUVBLHNDQUFBO0FEUlI7QUNVSTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFFQSxXQUFBO0VBRUEsaUJBQUE7RUFFQSxzQkFBQTtFQUNBLDJDQUFBO0VBRUEsaUJBQUE7QURaUjtBQ2NZO0VBQ0ksV0FBQTtFQUVBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFVBQUE7RUFFQSxVQUFBO0VBQ0EsWUFBQTtFQUVBLGdCQUFBO0VBRUEsNkJBQUE7RUFDQSwwQkFBQTtFQUVBLGlCQUFBO0FEakJoQjtBQ21CWTtFQUNJLFdBQUE7RUFFQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBRUEsVUFBQTtFQUNBLFdBQUE7RUFFQSwwQkFBQTtFQUVBLDhCQUFBO0FEckJoQjtBQ3lCWTtFQUNJLFdBQUE7RUFFQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0VBRUEsVUFBQTtFQUNBLFlBQUE7RUFFQSxnQkFBQTtFQUVBLDRCQUFBO0VBQ0EsMEJBQUE7RUFFQSxpQkFBQTtBRDVCaEI7QUM4Qlk7RUFDSSxXQUFBO0VBRUEsa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUVBLFVBQUE7RUFDQSxXQUFBO0VBRUEsMEJBQUE7RUFFQSw4QkFBQTtBRGhDaEI7QUNvQ0k7RUFDSSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtFQUVBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFFQSwyQ0FBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FEcENSO0FDc0NJO0VBQ0ksYUFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7RUFFQSxrQkFBQTtFQUNBLG9CQUFBO0VBRUEsbUJBQUE7QUR0Q1I7QUN3Q0k7RUFFSSxrQkFBQTtFQUVBLGNBQUE7RUFFQSxrQkFBQTtFQUVBLGVBQUE7RUFDQSx5QkFBQTtLQUFBLHNCQUFBO01BQUEscUJBQUE7VUFBQSxpQkFBQTtFQUVBLGdCQUFBO0VBRUEsZ0JBQUE7QUQ1Q1I7QUM2Q1E7RUFDSSwrQkFBQTtVQUFBLHVCQUFBO0FEM0NaO0FDK0NRO0VBQ0ksV0FBQTtFQUVBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSw0QkFBQTtFQUVBLGdCQUFBO0VBRUEsV0FBQTtFQUNBLFdBQUE7RUFFQSx1QkFBQTtBRGpEWjtBQ29EWTtFQUNJLFdBQUE7RUFFQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsOEJBQUE7RUFFQSxXQUFBO0VBQ0EsV0FBQTtFQUVBLHVCQUFBO0FEckRoQjtBQzBEUTtFQUNJLFdBQUE7RUFFQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsNEJBQUE7RUFFQSxnQkFBQTtFQUVBLFdBQUE7RUFDQSxXQUFBO0VBRUEsdUJBQUE7QUQ1RFo7QUMrRFk7RUFDSSxXQUFBO0VBRUEsa0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLDhCQUFBO0VBRUEsV0FBQTtFQUNBLFdBQUE7RUFFQSx1QkFBQTtBRGhFaEI7QUNvRUk7RUFDSSxrQkFBQTtFQUVBLFdBQUE7RUFDQSxXQUFBO0VBRUEsZ0JBQUE7QURwRVI7QUNzRUk7RUFDSSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsNEJBQUE7RUFFQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUVBLFdBQUE7RUFDQSxZQUFBO0VBRUEsU0FBQTtFQUVBLGNBQUE7RUFFQSxnQkFBQTtFQUVBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FEMUVSO0FDMkVRO0VBQ0ksa0JBQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQUNBLGlDQUFBO0FEekVaO0FDNEVJO0VBQ0ksa0JBQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQUNBLDhCQUFBO0VBRUEsYUFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7RUFFQSxXQUFBO0VBQ0EsWUFBQTtFQUVBLGdCQUFBO0FEN0VSO0FDOEVRO0VBQ0ksa0JBQUE7RUFDQSxPQUFBO0VBQ0EsVUFBQTtFQUNBLDRCQUFBO0FENUVaO0FDK0VJO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFFQSx1QkFBQTtBRDlFUjtBQ2dGSTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7RUFFQSxrQkFBQTtFQUVBLGVBQUE7QURoRlI7QUNrRkk7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSx1QkFBQTtFQUVBLFdBQUE7RUFFQSxpQkFBQTtFQUVBLGlCQUFBO0FEbkZSO0FDb0ZRO0VBQ0ksbUJBQUE7RUFFQSxtQkFBQTtFQUNBLGdCQUFBO0FEbkZaO0FDc0ZJO0VBQ0ksa0JBQUE7RUFFQSxjQUFBO0VBQ0EsVUFBQTtBRHJGUjtBQ3NGUTtFQUNJLFdBQUE7RUFFQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBRUEsUUFBQTtFQUNBLFNBQUE7RUFFQSxtQ0FBQTtFQUNBLG9DQUFBO0VBQ0EsK0JBQUE7QUR2Rlo7QUMwRkk7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBRUEsY0FBQTtFQUVBLFdBQUE7RUFDQSxzQkFBQTtFQUVBLCtCQUFBO0VBRUEsaUJBQUE7RUFFQSwyQ0FBQTtFQUNBLDJCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUQ3RlI7QUM4RlE7RUFDSSxXQUFBO0VBRUEsa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUVBLFVBQUE7RUFDQSxXQUFBO0VBRUEsOEJBQUE7RUFFQSxpQkFBQTtBRGhHWjtBQ2tHUTtFQUNJLFdBQUE7RUFFQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBRUEsVUFBQTtFQUNBLFdBQUE7RUFFQSwwQkFBQTtFQUVBLDhCQUFBO0FEcEdaO0FDdUdJO0VBQ0ksa0JBQUE7RUFFQSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtFQUVBLFdBQUE7RUFDQSxZQUFBO0VBRUEsZ0JBQUE7RUFFQSxzQkFBQTtBRHpHUjtBQzBHUTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtFQUVBLGtCQUFBO0VBRUEsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7S0FBQSxzQkFBQTtNQUFBLHFCQUFBO1VBQUEsaUJBQUE7RUFFQSwwQ0FBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBRUEsdUJBQUE7RUFFQSwyQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUQ3R1o7QUM4R1k7RUFDSSxnQ0FBQTtFQUVBLDZCQUFBO0VBRUEsZUFBQTtBRDlHaEI7QUNrSEk7RUFDSSxrQkFBQTtFQUVBLFdBQUE7RUFDQSxZQUFBO0VBRUEsaUJBQUE7RUFFQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtLQUFBLHNCQUFBO01BQUEscUJBQUE7VUFBQSxpQkFBQTtFQUVBLGFBQUE7RUFDQSxZQUFBO0VBRUEsZ0JBQUE7QURySFI7QUNzSFE7RUFDSSwrQkFBQTtVQUFBLHVCQUFBO0FEcEhaO0FDdUhZO0VBQ0ksZUFBQTtBRHJIaEI7QUN3SFE7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7RUFFQSxZQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSwyREFBQTtBRHZIWjtBQ3lIUTtFQUNJLFlBQUE7QUR2SFo7QUMwSFk7RUFDSSxZQUFBO0FEeEhoQjtBQzRIWTtFQUNJLFlBQUE7QUQxSGhCO0FDOEhZO0VBQ0ksWUFBQTtBRDVIaEI7QUNnSUk7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUVBLFdBQUE7RUFDQSxZQUFBO0VBRUEsZ0JBQUE7RUFFQSx5QkFBQTtLQUFBLHNCQUFBO01BQUEscUJBQUE7VUFBQSxpQkFBQTtFQUVBLDBDQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUVBLGdDQUFBO0VBRUEsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBRHBJUiIsImZpbGUiOiJzcmMvYXBwL3RyZWUvdHJlZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbjpob3N0IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICByaWdodDogMDtcbiAgdG9wOiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDYwJTtcbiAgaGVpZ2h0OiAxMDB2aDtcbn1cblxuLi1hcHAtY3VycmVudC10cmVlIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDYwJTtcbiAgcGFkZGluZzogMjAwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi4tYXBwLWN1cnJlbnQtdHJlZS13cmFwcGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwYWRkaW5nOiA3MHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg4LCAzNywgOCwgMC45NSk7XG59XG4uLWFwcC1jdXJyZW50LXRyZWVfX3RpdGxlLXJpYmJvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxNXB4O1xuICBsZWZ0OiAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiA4cHggMTBweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm94LXNoYWRvdzogLTFweCAycHggM3B4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG59XG4uLWFwcC1jdXJyZW50LXRyZWVfX3RpdGxlLXJpYmJvbl9sZWZ0OjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogLTlweDtcbiAgd2lkdGg6IDdweDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwYWRkaW5nOiAwIDAgN3B4O1xuICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4IDAgMCA1cHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xufVxuLi1hcHAtY3VycmVudC10cmVlX190aXRsZS1yaWJib25fbGVmdDo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogLTVweDtcbiAgbGVmdDogLTQuNXB4O1xuICB3aWR0aDogNXB4O1xuICBoZWlnaHQ6IDVweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4IDAgMCA1cHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC42KTtcbn1cbi4tYXBwLWN1cnJlbnQtdHJlZV9fdGl0bGUtcmliYm9uX3JpZ2h0OjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IC05cHg7XG4gIHdpZHRoOiA3cHg7XG4gIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZzogMCAwIDdweDtcbiAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogMCA1cHggNXB4IDA7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xufVxuLi1hcHAtY3VycmVudC10cmVlX190aXRsZS1yaWJib25fcmlnaHQ6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IC01cHg7XG4gIHJpZ2h0OiAtNC41cHg7XG4gIHdpZHRoOiA1cHg7XG4gIGhlaWdodDogNXB4O1xuICBib3JkZXItcmFkaXVzOiA1cHggMCAwIDVweDtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjYpO1xufVxuLi1hcHAtY3VycmVudC10cmVlX190aXRsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMHB4O1xuICBwYWRkaW5nOiAyNXB4IDBweDtcbiAgdGV4dC1zaGFkb3c6IDJweCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC43KTtcbiAgY29sb3I6IHJnYmEoOCwgMzcsIDgsIDAuOTUpO1xuICBsZXR0ZXItc3BhY2luZzogM3B4O1xuICBmb250LXNpemU6IDI4cHg7XG59XG4uLWFwcC1jdXJyZW50LXRyZWVfX21lbnUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmctdG9wOiAxMDBweDtcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG59XG4uLWFwcC1jdXJyZW50LXRyZWVfX2Rlc2NyaXB0aW9uLWJ1dHRvbiwgLi1hcHAtY3VycmVudC10cmVlX19kZXRhaWxzLWJ1dHRvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbi4tYXBwLWN1cnJlbnQtdHJlZV9fZGVzY3JpcHRpb24tYnV0dG9uIDpob3ZlciwgLi1hcHAtY3VycmVudC10cmVlX19kZXRhaWxzLWJ1dHRvbiA6aG92ZXIge1xuICBmaWx0ZXI6IGJyaWdodG5lc3MoMS4yKTtcbn1cbi4tYXBwLWN1cnJlbnQtdHJlZV9fZGVzY3JpcHRpb24tYnV0dG9uOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMCU7XG4gIGxlZnQ6IDEwMCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAwJSk7XG4gIHRyYW5zaXRpb246IDAuNHM7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG4uLWFwcC1jdXJyZW50LXRyZWVfX2Rlc2NyaXB0aW9uLWJ1dHRvbl9kZXNjcmlwdGlvbi1tb2RlOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCUpO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAycHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuLi1hcHAtY3VycmVudC10cmVlX19kZXRhaWxzLWJ1dHRvbjo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDAlO1xuICBsZWZ0OiAtMTAwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIDAlKTtcbiAgdHJhbnNpdGlvbjogMC40cztcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cbi4tYXBwLWN1cnJlbnQtdHJlZV9fZGV0YWlscy1idXR0b25fbm90LWRlc2NyaXB0aW9uLW1vZGU6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwJSk7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG4uLWFwcC1jdXJyZW50LXRyZWVfX2NvbnRlbnQtd3JhcHBlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNjAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLi1hcHAtY3VycmVudC10cmVlX19kZXNjcmlwdGlvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwJTtcbiAgbGVmdDogMCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAwJSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXJnaW46IDA7XG4gIG92ZXJmbG93OiBhdXRvO1xuICB0cmFuc2l0aW9uOiAwLjRzO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxldHRlci1zcGFjaW5nOiAycHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cbi4tYXBwLWN1cnJlbnQtdHJlZV9fZGVzY3JpcHRpb25fbm90LWRlc2NyaXB0aW9uLW1vZGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTEyMCUpO1xufVxuLi1hcHAtY3VycmVudC10cmVlX19kZXRhaWxzIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDAlKTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0cmFuc2l0aW9uOiAwLjRzO1xufVxuLi1hcHAtY3VycmVudC10cmVlX19kZXRhaWxzX2Rlc2NyaXB0aW9uLW1vZGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMCU7XG4gIGxlZnQ6IDEyMCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAwJSk7XG59XG4uLWFwcC1jdXJyZW50LXRyZWVfX2ltYWdlIHtcbiAgd2lkdGg6IDIwMHB4O1xuICBoZWlnaHQ6IDIwMHB4O1xuICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcbn1cbi4tYXBwLWN1cnJlbnQtdHJlZV9fZmVhdHVyZS1saXN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICBmb250LXNpemU6IDIwcHg7XG59XG4uLWFwcC1jdXJyZW50LXRyZWVfX2ZlYXR1cmUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMTBweCAwcHg7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuLi1hcHAtY3VycmVudC10cmVlX19mZWF0dXJlLXRpdGxlIHtcbiAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbi4tYXBwLWN1cnJlbnQtdHJlZV9fY29zdC1yaWJib24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogLTYuMXB4O1xuICByaWdodDogMTAlO1xufVxuLi1hcHAtY3VycmVudC10cmVlX19jb3N0LXJpYmJvbjo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxMHB4O1xuICBib3R0b206IDQ0cHg7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDA7XG4gIGJvcmRlci1sZWZ0OiA1M3B4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmlnaHQ6IDUzcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1ib3R0b206IDE1cHggc29saWQgd2hpdGU7XG59XG4uLWFwcC1jdXJyZW50LXRyZWVfX2Nvc3Qge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogLTNweDtcbiAgcmlnaHQ6IDEwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogOTBweDtcbiAgcGFkZGluZzogMTJweCA4cHggMTZweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDhweDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIHRleHQtc2hhZG93OiAycHggMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gIGNvbG9yOiByZ2JhKDgsIDM3LCA4LCAwLjk1KTtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuLi1hcHAtY3VycmVudC10cmVlX19jb3N0OjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMHB4O1xuICBsZWZ0OiAtNy41cHg7XG4gIHdpZHRoOiA4cHg7XG4gIGhlaWdodDogOHB4O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA0cHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xufVxuLi1hcHAtY3VycmVudC10cmVlX19jb3N0OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IC0wLjVweDtcbiAgbGVmdDogLTlweDtcbiAgd2lkdGg6IDlweDtcbiAgaGVpZ2h0OiA4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDAgMCA4cHggOHB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuOCk7XG59XG4uLWFwcC1jdXJyZW50LXRyZWVfX2RvbmF0ZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1MHB4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuLi1hcHAtY3VycmVudC10cmVlX19kb25hdGUtYnV0dG9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgcGFkZGluZzogMTVweCA1MHB4O1xuICB0cmFuc2l0aW9uOiAwLjNzO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICBib3gtc2hhZG93OiAwcHggMHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuOSk7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlcjogMnB4IHNvbGlkICMwODI1MDg7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBjb2xvcjogcmdiYSg4LCAzNywgOCwgMC45NSk7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGxldHRlci1zcGFjaW5nOiAycHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbi4tYXBwLWN1cnJlbnQtdHJlZV9fZG9uYXRlLWJ1dHRvbjphY3RpdmUge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTIlLCAtNTIlKTtcbiAgYm94LXNoYWRvdzogMnB4IDJweCA2cHggYmxhY2s7XG4gIGZvbnQtc2l6ZTogMjFweDtcbn1cbi4tYXBwLWN1cnJlbnQtdHJlZV9fYnV0dG9uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBwYWRkaW5nOiAwcHggMTBweDtcbiAgdHJhbnNpdGlvbjogMC4zcztcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kOiBub25lO1xufVxuLi1hcHAtY3VycmVudC10cmVlX19idXR0b246aG92ZXIge1xuICBmaWx0ZXI6IGJyaWdodG5lc3MoMS4zKTtcbn1cbi4tYXBwLWN1cnJlbnQtdHJlZV9fYnV0dG9uOmFjdGl2ZTo6YmVmb3JlIHtcbiAgZm9udC1zaXplOiAyNHB4O1xufVxuLi1hcHAtY3VycmVudC10cmVlX19idXR0b246OmJlZm9yZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1zaGFkb3c6IDBweCAwcHggOHB4IGJsYWNrO1xuICBmb250LXNpemU6IDIycHg7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG4gIGZvbnQtZmFtaWx5OiBcIkZvbnQgQXdlc29tZSA1IGZyZWVcIiwgXCJGb250IEF3ZXNvbWUgNSBicmFuZHNcIjtcbn1cbi4tYXBwLWN1cnJlbnQtdHJlZV9fYnV0dG9uLi1hcHAtY3VycmVudC10cmVlX19idXR0b25bZGlzYWJsZWRdIHtcbiAgb3BhY2l0eTogMC42O1xufVxuLi1hcHAtY3VycmVudC10cmVlX19idXR0b25fcGx1czo6YmVmb3JlIHtcbiAgY29udGVudDogXCLvgadcIjtcbn1cbi4tYXBwLWN1cnJlbnQtdHJlZV9fYnV0dG9uX21pbnVzOjpiZWZvcmUge1xuICBjb250ZW50OiBcIu+BqFwiO1xufVxuLi1hcHAtY3VycmVudC10cmVlX19idXR0b25fcmVtb3ZlOjpiZWZvcmUge1xuICBjb250ZW50OiBcIu+HuFwiO1xufVxuLi1hcHAtY3VycmVudC10cmVlX190cmVlLW51bWJlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMzVweDtcbiAgaGVpZ2h0OiAzNXB4O1xuICBtYXJnaW46IDBweCAxMHB4O1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgYm94LXNoYWRvdzogMnB4IDJweCA4cHggcmdiYSgwLCAwLCAwLCAwLjYpO1xuICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDgsIDM3LCA4LCAwLjk1KTtcbiAgY29sb3I6IHdoaXRlO1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICBmb250LXNpemU6IDIwcHg7XG59IiwiOmhvc3Qge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcblxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgICB3aWR0aDogNjAlO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxufVxyXG5cclxuLi1hcHAtY3VycmVudC10cmVlIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDYwJTtcclxuXHJcbiAgICBwYWRkaW5nOiAyMDBweDtcclxuXHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAmLXdyYXBwZXIge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuXHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG5cclxuICAgICAgICBwYWRkaW5nOiA3MHB4O1xyXG5cclxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cclxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcblxyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoOCwgMzcsIDgsIDAuOTUpO1xyXG4gICAgfVxyXG4gICAgJl9fdGl0bGUtcmliYm9uIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAxNXB4O1xyXG4gICAgICAgIGxlZnQ6IDBweDtcclxuXHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgICAgIHBhZGRpbmc6IDhweCAxMHB4O1xyXG5cclxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgIGJveC1zaGFkb3c6IC0xcHggMnB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcblxyXG4gICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICAgICZfbGVmdCB7XHJcbiAgICAgICAgICAgICY6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG5cclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IC05cHg7XHJcblxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDdweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuXHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDAgN3B4O1xyXG5cclxuICAgICAgICAgICAgICAgIGJvcmRlci1yaWdodDogMnB4IHNvbGlkIHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4IDAgMCA1cHg7XHJcblxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJjo6YWZ0ZXIge1xyXG4gICAgICAgICAgICAgICAgY29udGVudDogXCJcIjtcclxuXHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICBib3R0b206IC01cHg7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiAtNC41cHg7XHJcblxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDVweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogNXB4O1xyXG5cclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweCAwIDAgNXB4O1xyXG5cclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC42KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAmX3JpZ2h0IHtcclxuICAgICAgICAgICAgJjo6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcblxyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IC05cHg7XHJcblxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDdweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuXHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDAgN3B4O1xyXG5cclxuICAgICAgICAgICAgICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgd2hpdGU7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwIDVweCA1cHggMDtcclxuXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmOjphZnRlciB7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG5cclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIGJvdHRvbTogLTVweDtcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiAtNC41cHg7XHJcblxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDVweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogNXB4O1xyXG5cclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweCAwIDAgNXB4O1xyXG5cclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC42KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgICZfX3RpdGxlIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBtYXJnaW46IDBweDtcclxuICAgICAgICBwYWRkaW5nOiAyNXB4IDBweDtcclxuXHJcbiAgICAgICAgdGV4dC1zaGFkb3c6IDJweCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC43KTtcclxuICAgICAgICBjb2xvcjogcmdiYSg4LCAzNywgOCwgMC45NSk7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDNweDtcclxuICAgICAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgICB9XHJcbiAgICAmX19tZW51IHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgICBwYWRkaW5nLXRvcDogMTAwcHg7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcblxyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICB9XHJcbiAgICAmX19kZXNjcmlwdGlvbi1idXR0b24sXHJcbiAgICAmX19kZXRhaWxzLWJ1dHRvbiB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuXHJcbiAgICAgICAgcGFkZGluZzogMTBweCAyMHB4O1xyXG5cclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcblxyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcblxyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgOmhvdmVyIHtcclxuICAgICAgICAgICAgZmlsdGVyOiBicmlnaHRuZXNzKDEuMik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgJl9fZGVzY3JpcHRpb24tYnV0dG9uIHtcclxuICAgICAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG5cclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICBib3R0b206IDAlO1xyXG4gICAgICAgICAgICBsZWZ0OiAxMDAlO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgMCUpO1xyXG5cclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogMC40cztcclxuXHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDJweDtcclxuXHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICZfZGVzY3JpcHRpb24tbW9kZSB7XHJcbiAgICAgICAgICAgICY6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG5cclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIGJvdHRvbTogMCU7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwJSk7XHJcblxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDJweDtcclxuXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgJl9fZGV0YWlscy1idXR0b24ge1xyXG4gICAgICAgICY6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcblxyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIGJvdHRvbTogMCU7XHJcbiAgICAgICAgICAgIGxlZnQ6IC0xMDAlO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgMCUpO1xyXG5cclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogMC40cztcclxuXHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDJweDtcclxuXHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICZfbm90LWRlc2NyaXB0aW9uLW1vZGUge1xyXG4gICAgICAgICAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgY29udGVudDogXCJcIjtcclxuXHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICBib3R0b206IDAlO1xyXG4gICAgICAgICAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCUpO1xyXG5cclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAycHg7XHJcblxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgICZfX2NvbnRlbnQtd3JhcHBlciB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDYwJTtcclxuXHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIH1cclxuICAgICZfX2Rlc2NyaXB0aW9uIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAwJTtcclxuICAgICAgICBsZWZ0OiAwJTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgMCUpO1xyXG5cclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuXHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG5cclxuICAgICAgICBvdmVyZmxvdzogYXV0bztcclxuXHJcbiAgICAgICAgdHJhbnNpdGlvbjogMC40cztcclxuXHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICZfbm90LWRlc2NyaXB0aW9uLW1vZGUge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHRvcDogMCU7XHJcbiAgICAgICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTEyMCUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgICZfX2RldGFpbHMge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDAlO1xyXG4gICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwJSk7XHJcblxyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuXHJcbiAgICAgICAgdHJhbnNpdGlvbjogMC40cztcclxuICAgICAgICAmX2Rlc2NyaXB0aW9uLW1vZGUge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHRvcDogMCU7XHJcbiAgICAgICAgICAgIGxlZnQ6IDEyMCU7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAwJSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgJl9faW1hZ2Uge1xyXG4gICAgICAgIHdpZHRoOiAyMDBweDtcclxuICAgICAgICBoZWlnaHQ6IDIwMHB4O1xyXG5cclxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xyXG4gICAgfVxyXG4gICAgJl9fZmVhdHVyZS1saXN0IHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG5cclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcblxyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIH1cclxuICAgICZfX2ZlYXR1cmUge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG5cclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAgICAgcGFkZGluZzogMTBweCAwcHg7XHJcblxyXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgICYtdGl0bGUge1xyXG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG5cclxuICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAmX19jb3N0LXJpYmJvbiB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG5cclxuICAgICAgICBib3R0b206IC02LjFweDtcclxuICAgICAgICByaWdodDogMTAlO1xyXG4gICAgICAgICY6OmFmdGVyIHtcclxuICAgICAgICAgICAgY29udGVudDogXCJcIjtcclxuXHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICAgIGJvdHRvbTogNDRweDtcclxuXHJcbiAgICAgICAgICAgIHdpZHRoOiAwO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDA7XHJcblxyXG4gICAgICAgICAgICBib3JkZXItbGVmdDogNTNweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiA1M3B4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxNXB4IHNvbGlkIHdoaXRlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgICZfX2Nvc3Qge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBib3R0b206IC0zcHg7XHJcbiAgICAgICAgcmlnaHQ6IDEwcHg7XHJcblxyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG5cclxuICAgICAgICB3aWR0aDogOTBweDtcclxuICAgICAgICBwYWRkaW5nOiAxMnB4IDhweCAxNnB4O1xyXG5cclxuICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogOHB4O1xyXG5cclxuICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuXHJcbiAgICAgICAgdGV4dC1zaGFkb3c6IDJweCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC40KTtcclxuICAgICAgICBjb2xvcjogcmdiYSg4LCAzNywgOCwgMC45NSk7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgJjo6YmVmb3JlIHtcclxuICAgICAgICAgICAgY29udGVudDogXCJcIjtcclxuXHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgYm90dG9tOiAwcHg7XHJcbiAgICAgICAgICAgIGxlZnQ6IC03LjVweDtcclxuXHJcbiAgICAgICAgICAgIHdpZHRoOiA4cHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogOHB4O1xyXG5cclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNHB4O1xyXG5cclxuICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICY6YWZ0ZXIge1xyXG4gICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG5cclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICBib3R0b206IC0wLjVweDtcclxuICAgICAgICAgICAgbGVmdDogLTlweDtcclxuXHJcbiAgICAgICAgICAgIHdpZHRoOiA5cHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogOHB4O1xyXG5cclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMCAwIDhweCA4cHg7XHJcblxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuOCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgJl9fZG9uYXRlIHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogNTBweDtcclxuXHJcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuXHJcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICAmLWJ1dHRvbiB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcblxyXG4gICAgICAgICAgICBwYWRkaW5nOiAxNXB4IDUwcHg7XHJcblxyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjNzO1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG5cclxuICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDBweCA4cHggcmdiYSgwLCAwLCAwLCAwLjkpO1xyXG4gICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDgsIDM3LCA4LCAxKTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuXHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG5cclxuICAgICAgICAgICAgY29sb3I6IHJnYmEoOCwgMzcsIDgsIDAuOTUpO1xyXG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgICY6YWN0aXZlIHtcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MiUsIC01MiUpO1xyXG5cclxuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDJweCAycHggNnB4IHJnYmEoMCwgMCwgMCwgMSk7XHJcblxyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgJl9fYnV0dG9uIHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgICAgIGhlaWdodDogNDBweDtcclxuXHJcbiAgICAgICAgcGFkZGluZzogMHB4IDEwcHg7XHJcblxyXG4gICAgICAgIHRyYW5zaXRpb246IDAuM3M7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG5cclxuICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuXHJcbiAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgZmlsdGVyOiBicmlnaHRuZXNzKDEuMyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICY6YWN0aXZlIHtcclxuICAgICAgICAgICAgJjo6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG5cclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICB0ZXh0LXNoYWRvdzogMHB4IDBweCA4cHggcmdiYSgwLCAwLCAwLCAxKTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogOTAwO1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJGb250IEF3ZXNvbWUgNSBmcmVlXCIsIFwiRm9udCBBd2Vzb21lIDUgYnJhbmRzXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYuLWFwcC1jdXJyZW50LXRyZWVfX2J1dHRvbltkaXNhYmxlZF0ge1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAwLjY7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICZfcGx1cyB7XHJcbiAgICAgICAgICAgICY6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiBcIlxcZjA2N1wiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICZfbWludXMge1xyXG4gICAgICAgICAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgY29udGVudDogXCJcXGYwNjhcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAmX3JlbW92ZSB7XHJcbiAgICAgICAgICAgICY6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiBcIlxcZjFmOFwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgJl9fdHJlZS1udW1iZXIge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgd2lkdGg6IDM1cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAzNXB4O1xyXG5cclxuICAgICAgICBtYXJnaW46IDBweCAxMHB4O1xyXG5cclxuICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuXHJcbiAgICAgICAgYm94LXNoYWRvdzogMnB4IDJweCA4cHggcmdiYSgwLCAwLCAwLCAwLjYpO1xyXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuXHJcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSg4LCAzNywgOCwgMC45NSk7XHJcblxyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIH1cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TreeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-tree',
                templateUrl: './tree.component.html',
                styleUrls: ['./tree.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] }, { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_7__["Store"] }, { type: _store_donation_list_donation_list_facade__WEBPACK_IMPORTED_MODULE_8__["FacadeServiceDonationList"] }, { type: _store_tree_list_tree_list_facade__WEBPACK_IMPORTED_MODULE_9__["FacadeServiceTreeList"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=tree-list-tree-list-module-es2015.js.map