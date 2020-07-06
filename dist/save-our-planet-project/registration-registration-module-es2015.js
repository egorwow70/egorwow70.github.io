(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["registration-registration-module"],{

/***/ "./src/app/guards/user-list/can-leave-registration.guard.ts":
/*!******************************************************************!*\
  !*** ./src/app/guards/user-list/can-leave-registration.guard.ts ***!
  \******************************************************************/
/*! exports provided: CanLeaveRegistrationGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanLeaveRegistrationGuard", function() { return CanLeaveRegistrationGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class CanLeaveRegistrationGuard {
    canDeactivate(component) {
        return component.canDeactivate ? component.canDeactivate() : true;
    }
}
CanLeaveRegistrationGuard.ɵfac = function CanLeaveRegistrationGuard_Factory(t) { return new (t || CanLeaveRegistrationGuard)(); };
CanLeaveRegistrationGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CanLeaveRegistrationGuard, factory: CanLeaveRegistrationGuard.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CanLeaveRegistrationGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();


/***/ }),

/***/ "./src/app/guards/user-list/can-proceed-to-registration.guard.ts":
/*!***********************************************************************!*\
  !*** ./src/app/guards/user-list/can-proceed-to-registration.guard.ts ***!
  \***********************************************************************/
/*! exports provided: CanProceedToRegistrationGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanProceedToRegistrationGuard", function() { return CanProceedToRegistrationGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _models_user_list_registration_type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/user-list/registration-type */ "./src/app/models/user-list/registration-type.ts");



class CanProceedToRegistrationGuard {
    canActivate(next) {
        const currentRegistrationMode = next.params.registrationMode;
        if (currentRegistrationMode !== _models_user_list_registration_type__WEBPACK_IMPORTED_MODULE_1__["RegistrationType"].RM && currentRegistrationMode !== _models_user_list_registration_type__WEBPACK_IMPORTED_MODULE_1__["RegistrationType"].LM) {
            const errorMessage = `This mode (${currentRegistrationMode}) does not exist, try registration-mode or login-mode`;
            throw new Error(errorMessage);
        }
        return true;
    }
}
CanProceedToRegistrationGuard.ɵfac = function CanProceedToRegistrationGuard_Factory(t) { return new (t || CanProceedToRegistrationGuard)(); };
CanProceedToRegistrationGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CanProceedToRegistrationGuard, factory: CanProceedToRegistrationGuard.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CanProceedToRegistrationGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();


/***/ }),

/***/ "./src/app/models/user-list/registration-type.ts":
/*!*******************************************************!*\
  !*** ./src/app/models/user-list/registration-type.ts ***!
  \*******************************************************/
/*! exports provided: RegistrationType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationType", function() { return RegistrationType; });
var RegistrationType;
(function (RegistrationType) {
    RegistrationType["LM"] = "login-mode";
    RegistrationType["RM"] = "registration-mode";
})(RegistrationType || (RegistrationType = {}));


/***/ }),

/***/ "./src/app/registration/registration-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/registration/registration-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: RegistrationRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationRoutingModule", function() { return RegistrationRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _registration_registration_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../registration/registration.component */ "./src/app/registration/registration.component.ts");
/* harmony import */ var _guards_user_list_can_leave_registration_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../guards/user-list/can-leave-registration.guard */ "./src/app/guards/user-list/can-leave-registration.guard.ts");
/* harmony import */ var _guards_user_list_can_proceed_to_registration_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../guards/user-list/can-proceed-to-registration.guard */ "./src/app/guards/user-list/can-proceed-to-registration.guard.ts");







const routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'mode/login-mode'
    },
    {
        path: 'mode/:registrationMode',
        component: _registration_registration_component__WEBPACK_IMPORTED_MODULE_2__["RegistrationComponent"],
        canActivate: [_guards_user_list_can_proceed_to_registration_guard__WEBPACK_IMPORTED_MODULE_4__["CanProceedToRegistrationGuard"]],
        canDeactivate: [_guards_user_list_can_leave_registration_guard__WEBPACK_IMPORTED_MODULE_3__["CanLeaveRegistrationGuard"]]
    }
];
class RegistrationRoutingModule {
}
RegistrationRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: RegistrationRoutingModule });
RegistrationRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function RegistrationRoutingModule_Factory(t) { return new (t || RegistrationRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](RegistrationRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](RegistrationRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/registration/registration.component.ts":
/*!********************************************************!*\
  !*** ./src/app/registration/registration.component.ts ***!
  \********************************************************/
/*! exports provided: RegistrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationComponent", function() { return RegistrationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _models_user_list_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/user-list/user */ "./src/app/models/user-list/user.ts");
/* harmony import */ var _store_user_list_user_list_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/user-list/user-list.selectors */ "./src/app/store/user-list/user-list.selectors.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _models_user_list_registration_type__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../models/user-list/registration-type */ "./src/app/models/user-list/registration-type.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _store_user_list_user_list_facade__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../store/user-list/user-list.facade */ "./src/app/store/user-list/user-list.facade.ts");












class RegistrationComponent {
    constructor(_store$, _router, _facadeUserListService, _activatedRoute) {
        this._store$ = _store$;
        this._router = _router;
        this._facadeUserListService = _facadeUserListService;
        this._activatedRoute = _activatedRoute;
        this._destroySubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.initLoginForm();
        this.initRegistrateForm();
    }
    static validMatch(content) {
        const onlyLatinCharactersNumbersAndUnderscoreMatch = new RegExp('^[a-zA-Z_0-9]*$');
        return (onlyLatinCharactersNumbersAndUnderscoreMatch.test(content))
            ? true
            : false;
    }
    static isUserNameOrSurnameIncludesUnderscore(userNameOrSurname) {
        return Boolean(userNameOrSurname.includes('_'))
            ? true
            : false;
    }
    static isValidUserNameOrSurnameNumberOfCharacters(userNameOrSurname, minNumbers, maxNumbers) {
        return (userNameOrSurname.length >= minNumbers
            && userNameOrSurname.length <= maxNumbers)
            ? true
            : false;
    }
    static isUserNameOrSurnameIncludeNumbers(userNameOrSurname) {
        return (Boolean(userNameOrSurname.search(/\d/) >= 0))
            ? true
            : false;
    }
    static isUserNameOrSurnameValidMatch(userNameOrSurname) {
        return RegistrationComponent.validMatch(userNameOrSurname);
    }
    static isValidUserNameOrSurname(userNameOrSurname, minNumbers, maxNumbers) {
        if (Boolean(userNameOrSurname)) {
            const isContentIncludeNumbers = RegistrationComponent.isUserNameOrSurnameIncludeNumbers(userNameOrSurname);
            const isContentValidMatch = RegistrationComponent.isUserNameOrSurnameValidMatch(userNameOrSurname);
            const isValidNumberOfContentCharacters = RegistrationComponent.isValidUserNameOrSurnameNumberOfCharacters(userNameOrSurname, minNumbers, maxNumbers);
            const isContentIncludeUnderscore = RegistrationComponent.isUserNameOrSurnameIncludesUnderscore(userNameOrSurname);
            if (!isContentIncludeNumbers
                && isContentValidMatch
                && isValidNumberOfContentCharacters
                && !isContentIncludeUnderscore) {
                return true;
            }
            else {
                return false;
            }
        }
        else {
            return false;
        }
    }
    static isValidUserAgeYearsOld(userAge, minAge, maxAge) {
        return (userAge >= minAge
            && userAge <= maxAge)
            ? true
            : false;
    }
    static isUserPasswordValidMatch(userPassword) {
        return RegistrationComponent.validMatch(userPassword);
    }
    initLoginForm() {
        this.myFormLogin = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            userName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                this.userNameValidator
            ]),
            userSurname: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                this.userSurnameValidator
            ]),
            userPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                this.userPasswordValidator
            ])
        });
    }
    initRegistrateForm() {
        this.myFormRegistrate = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            userName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                this.userNameValidator
            ]),
            userSurname: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                this.userSurnameValidator
            ]),
            userEmail: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[^\s@]+@[^\s@]+\.[^\s@]+$')
            ]),
            userAge: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                this.userAgeValidator
            ]),
            userPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                this.userPasswordValidator
            ]),
            userRepeatPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                this.userRepeatPasswordValidator
            ])
        });
    }
    userNameValidator(control) {
        const currentUserName = control.value;
        const minNumberOfCharacters = 3;
        const maxNumberOfCharacters = 12;
        const isValidUserName = RegistrationComponent.isValidUserNameOrSurname(currentUserName, minNumberOfCharacters, maxNumberOfCharacters);
        if (isValidUserName) {
            return null;
        }
        else {
            return { userNameInputControlName: true };
        }
    }
    userSurnameValidator(control) {
        const currentUserSurname = control.value;
        const minNumberOfCharacters = 3;
        const maxNumberOfCharacters = 20;
        const isValidUserSurname = RegistrationComponent.isValidUserNameOrSurname(currentUserSurname, minNumberOfCharacters, maxNumberOfCharacters);
        if (isValidUserSurname) {
            return null;
        }
        else {
            return { userSurnameInputControlName: true };
        }
    }
    userAgeValidator(control) {
        const currentUserAge = control.value;
        if (Boolean(currentUserAge) && !isNaN(currentUserAge)) {
            const minAge = 12;
            const maxAge = 150;
            const isValidUserAgeYearsOld = RegistrationComponent.isValidUserAgeYearsOld(currentUserAge, minAge, maxAge);
            if (isValidUserAgeYearsOld) {
                return null;
            }
            else {
                return { userAgeInputControlName: true };
            }
        }
        else {
            return { userAgeInputControlName: true };
        }
    }
    userPasswordValidator(control) {
        const currentUserPassword = control.value;
        const minNumberOfCharacters = 6;
        const maxNumberOfCharacters = 15;
        const isUserPasswordValidMatch = RegistrationComponent.isUserPasswordValidMatch(currentUserPassword);
        if (Boolean(currentUserPassword)) {
            if (isUserPasswordValidMatch
                && currentUserPassword.length >= minNumberOfCharacters
                && currentUserPassword.length <= maxNumberOfCharacters) {
                RegistrationComponent.enteredUserPassword = currentUserPassword;
                return null;
            }
            else {
                return { userPasswordInputControlName: true };
            }
        }
        else {
            return { userPasswordInputControlName: true };
        }
    }
    userRepeatPasswordValidator(control) {
        const currentUserPassword = RegistrationComponent.enteredUserPassword;
        const currentUserRepeatPassword = control.value;
        if (Boolean(currentUserPassword)
            && currentUserRepeatPassword === currentUserPassword) {
            return null;
        }
        else {
            return { userRepeatPasswordInputControlName: true };
        }
    }
    getNewUserId(newRegistrationUser) {
        const dash = '-';
        const firstLetterOfNameForId = newRegistrationUser.newUserName[0].toUpperCase();
        const firstLetterOfSurnameForId = newRegistrationUser.newUserSurname[0].toUpperCase();
        const defaultNewUserId = firstLetterOfNameForId + firstLetterOfSurnameForId + dash
            + String(newRegistrationUser.newUserAge);
        return defaultNewUserId;
    }
    getRegistrationFormValue() {
        const userAge = Number(this.myFormRegistrate.controls.userAge.value);
        const userName = this.myFormRegistrate.controls.userName.value;
        const userSurname = this.myFormRegistrate.controls.userSurname.value;
        const userPassword = this.myFormRegistrate.controls.userPassword.value;
        const userRepeatPassword = this.myFormRegistrate.controls.userRepeatPassword.value;
        const userEmail = this.myFormRegistrate.controls.userEmail.value;
        return {
            newUserName: userName,
            newUserSurname: userSurname,
            newUserEmail: userEmail,
            newUserAge: userAge,
            newUserPassword: userPassword,
            newUserRepeatPassword: userRepeatPassword
        };
    }
    isAnyValuesEnteredInRegistrationForm() {
        const newRegistrationUser = this.getRegistrationFormValue();
        if (Boolean(newRegistrationUser.newUserAge)
            || Boolean(newRegistrationUser.newUserName)
            || Boolean(newRegistrationUser.newUserSurname)
            || Boolean(newRegistrationUser.newUserPassword)
            || Boolean(newRegistrationUser.newUserEmail)) {
            return true;
        }
        else {
            return false;
        }
    }
    ngOnInit() {
        this._activatedRoute.params
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this._destroySubject$)).subscribe((params) => {
            this._registrationModeName = params.registrationMode;
            if (this._registrationModeName === _models_user_list_registration_type__WEBPACK_IMPORTED_MODULE_6__["RegistrationType"].RM) {
                this.registrationMode = true;
            }
        });
        this._store$.select(_store_user_list_user_list_selectors__WEBPACK_IMPORTED_MODULE_3__["selectUserList"])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this._destroySubject$)).subscribe((userList) => {
            this._userList = userList;
        });
    }
    ngOnDestroy() {
        this._destroySubject$.next(true);
        this._destroySubject$.complete();
    }
    switchRegistrationMode() {
        const registrationModeAfterSwitch = (this._registrationModeName === _models_user_list_registration_type__WEBPACK_IMPORTED_MODULE_6__["RegistrationType"].LM)
            ? _models_user_list_registration_type__WEBPACK_IMPORTED_MODULE_6__["RegistrationType"].RM
            : _models_user_list_registration_type__WEBPACK_IMPORTED_MODULE_6__["RegistrationType"].LM;
        this._router.navigate([
            '/registration',
            'mode',
            registrationModeAfterSwitch
        ]);
        this.registrationMode = !this.registrationMode;
    }
    login() {
        const loginUserName = this.myFormLogin.controls.userName.value;
        const loginUserSurname = this.myFormLogin.controls.userSurname.value;
        const loginUserPassword = this.myFormLogin.controls.userPassword.value;
        const defaultUserLoginId = '1';
        const userLogsIn = new _models_user_list_user__WEBPACK_IMPORTED_MODULE_2__["User"](defaultUserLoginId, loginUserName, loginUserSurname, loginUserPassword);
        const currentUser = this._userList.find((user) => {
            return userLogsIn.loginEquals(user);
        });
        if (Boolean(currentUser)) {
            this._facadeUserListService.initUser(currentUser);
            this._router.navigate(['/user-profile']);
        }
        else {
            this.initLoginForm();
            this.myFormLogin.controls.userName.markAsTouched();
            this.myFormLogin.controls.userSurname.markAsTouched();
            this.myFormLogin.controls.userPassword.markAsTouched();
        }
    }
    registrate() {
        const newRegistrationUser = this.getRegistrationFormValue();
        const newUserRegistrationDate = new Date();
        const defaultNewUserDonationList = null;
        const deafultNewUserCountry = null;
        const defaultNewUserMedicalPoints = 0;
        const defaultNewUserId = this.getNewUserId(newRegistrationUser);
        const defaultNewUser = new _models_user_list_user__WEBPACK_IMPORTED_MODULE_2__["User"](defaultNewUserId, newRegistrationUser.newUserName, newRegistrationUser.newUserSurname, newRegistrationUser.newUserPassword, newRegistrationUser.newUserEmail, '', newRegistrationUser.newUserAge, newUserRegistrationDate, deafultNewUserCountry, defaultNewUserDonationList, defaultNewUserMedicalPoints);
        this._isUserRegistrated = true;
        this._facadeUserListService.initNewUser(defaultNewUser);
        this.initRegistrateForm();
    }
    canDeactivate() {
        let deactivateQuestion;
        deactivateQuestion = 'You filled in the form fields but did not registrate. Are you sure that you want to go from this page?';
        return (!this._isUserRegistrated && this.isAnyValuesEnteredInRegistrationForm())
            ? confirm(deactivateQuestion)
            : true;
    }
}
RegistrationComponent.ɵfac = function RegistrationComponent_Factory(t) { return new (t || RegistrationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_7__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_store_user_list_user_list_facade__WEBPACK_IMPORTED_MODULE_9__["FacadeServiceUserList"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"])); };
RegistrationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RegistrationComponent, selectors: [["app-registration"]], decls: 79, vars: 112, consts: [[1, "-app-registration"], [1, "-app-registration-form__top-decoration"], [1, "-app-registration-form", 3, "formGroup", "ngSubmit"], [1, "-app-registration-form__title"], [1, "-app-registration-form__item"], ["name", "name", "type", "text", "formControlName", "userName", "autocomplete", "off", 1, "-app-registration-form__item-input"], [1, "-app-registration-form__item-line"], [1, "-app-registration-form__item-label"], ["title", "Invalid value. Maximum number of characters from 3 to 12\n            and without any characters and numbers", 1, "-app-registration-form__item-warning"], [1, "-app-registration-form__item-check"], ["name", "surname", "type", "text", "formControlName", "userSurname", "autocomplete", "off", 1, "-app-registration-form__item-input"], ["title", "Invalid value. Maximum number of characters from 3 to 20\n                and without any characters and numbers", 1, "-app-registration-form__item-warning"], ["name", "password", "type", "password", "formControlName", "userPassword", "autocomplete", "off", 1, "-app-registration-form__item-input"], ["title", "Invalid value. User password must contain only numbers, characters and underscore\n                and password length must be in diapazon from 6 to 15 symbols", 1, "-app-registration-form__item-warning"], ["type", "submit", 1, "-app-registration-form__button", "-app-registration-form__button_login", 3, "disabled"], [1, "-app-registration-form__sub-title", 3, "click"], [1, "-app-registration-form__shape-button"], [1, "-app-registration-form__plus", 3, "click"], ["title", "Invalid value. Maximum number of characters from 3 to 12\n                        and without any characters and numbers", 1, "-app-registration-form__item-warning"], ["title", "Invalid value. Maximum number of characters from 3 to 20\n                        and without any characters and numbers", 1, "-app-registration-form__item-warning"], ["name", "email", "type", "email", "formControlName", "userEmail", 1, "-app-registration-form__item-input"], ["title", "Invalid value. Example: egor@g.c", 1, "-app-registration-form__item-warning"], ["name", "age", "type", "text", "formControlName", "userAge", "autocomplete", "off", 1, "-app-registration-form__item-input"], ["title", "Invalid value. User age must not be more than 150 and less than 12 years old", 1, "-app-registration-form__item-warning"], ["title", "Invalid value. User password must contain only numbers, characters and underscore\n                        and password length must be in diapazon from 6 to 15 symbols", 1, "-app-registration-form__item-warning"], ["name", "repeatPassword", "type", "password", "formControlName", "userRepeatPassword", "autocomplete", "off", 1, "-app-registration-form__item-input"], ["title", "Invalid value. you should enter the same password", 1, "-app-registration-form__item-warning"], ["type", "submit", 1, "-app-registration-form__button", "-app-registration-form__button_registrate", 3, "disabled", "click"]], template: function RegistrationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function RegistrationComponent_Template_form_ngSubmit_2_listener() { return ctx.login(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Login ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Name ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Surname ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Password ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Go ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h4", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegistrationComponent_Template_h4_click_28_listener() { return ctx.switchRegistrationMode(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " Are you not registrated? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegistrationComponent_Template_button_click_31_listener() { return ctx.switchRegistrationMode(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function RegistrationComponent_Template_form_ngSubmit_32_listener() { return ctx.registrate(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " Registrate ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " Name ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " Surname ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, " Email ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, " Age ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, " Password ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, " Repeat Password ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegistrationComponent_Template_button_click_77_listener() { return ctx.switchRegistrationMode(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, " Next ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("-app-registration-form__top-decoration_registration-mode", ctx.registrationMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("-app-registration-form_not-login-mode", ctx.registrationMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.myFormLogin);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("-app-registration-form__item-line_valid", ctx.myFormLogin.controls["userName"].touched && ctx.myFormLogin.controls["userName"].valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("-app-registration-form__item-label_invisible", ctx.myFormLogin.controls["userName"].dirty);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("-app-registration-form__item-warning_login", !ctx.registrationMode)("-app-registration-form__item-warning_invalid", ctx.myFormLogin.controls["userName"].touched && ctx.myFormLogin.controls["userName"].invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("-app-registration-form__item-check_login", !ctx.registrationMode)("-app-registration-form__item-check_valid", ctx.myFormLogin.controls["userName"].touched && ctx.myFormLogin.controls["userName"].valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("-app-registration-form__item-line_valid", ctx.myFormLogin.controls["userSurname"].touched && ctx.myFormLogin.controls["userName"].valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("-app-registration-form__item-label_invisible", ctx.myFormLogin.controls["userSurname"].dirty);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("-app-registration-form__item-warning_login", !ctx.registrationMode)("-app-registration-form__item-warning_invalid", ctx.myFormLogin.controls["userSurname"].touched && ctx.myFormLogin.controls["userSurname"].invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("-app-registration-form__item-check_login", !ctx.registrationMode)("-app-registration-form__item-check_valid", ctx.myFormLogin.controls["userSurname"].touched && ctx.myFormLogin.controls["userSurname"].valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("-app-registration-form__item-line_valid", ctx.myFormLogin.controls["userPassword"].touched && ctx.myFormLogin.controls["userPassword"].valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("-app-registration-form__item-label_invisible", ctx.myFormLogin.controls["userPassword"].dirty);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("-app-registration-form__item-warning_login", !ctx.registrationMode)("-app-registration-form__item-warning_invalid", ctx.myFormLogin.controls["userPassword"].touched && ctx.myFormLogin.controls["userPassword"].invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("-app-registration-form__item-check_login", !ctx.registrationMode)("-app-registration-form__item-check_valid", ctx.myFormLogin.controls["userPassword"].touched && ctx.myFormLogin.controls["userPassword"].valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.myFormLogin.controls["userName"].invalid || ctx.myFormLogin.controls["userSurname"].invalid || ctx.myFormLogin.controls["userPassword"].invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("-app-registration-form__shape-button_registration-mode", ctx.registrationMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("-app-registration-form__plus_registration-mode", ctx.registrationMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("-app-registration-form_registrate", !ctx.registrationMode)("-app-registration-form_registration-mode", ctx.registrationMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.myFormRegistrate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("-app-registration-form__item-line_valid", ctx.myFormRegistrate.controls["userName"].touched && ctx.myFormRegistrate.controls["userName"].valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("-app-registration-form__item-label_registration-mode", ctx.registrationMode)("-app-registration-form__item-label_invisible", ctx.myFormRegistrate.controls["userName"].dirty);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("-app-registration-form__item-warning_invalid", ctx.myFormRegistrate.controls["userName"].touched && ctx.myFormRegistrate.controls["userName"].invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("-app-registration-form__item-check_valid", ctx.myFormRegistrate.controls["userName"].touched && ctx.myFormRegistrate.controls["userName"].valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("-app-registration-form__item-line_valid", ctx.myFormRegistrate.controls["userSurname"].touched && ctx.myFormRegistrate.controls["userSurname"].valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("-app-registration-form__item-label_registration-mode", ctx.registrationMode)("-app-registration-form__item-label_invisible", ctx.myFormRegistrate.controls["userSurname"].dirty);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("-app-registration-form__item-warning_invalid", ctx.myFormRegistrate.controls["userSurname"].touched && ctx.myFormRegistrate.controls["userSurname"].invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("-app-registration-form__item-check_valid", ctx.myFormRegistrate.controls["userSurname"].touched && ctx.myFormRegistrate.controls["userSurname"].valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("-app-registration-form__item-line_valid", ctx.myFormRegistrate.controls["userEmail"].touched && ctx.myFormRegistrate.controls["userEmail"].valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("-app-registration-form__item-label_registration-mode", ctx.registrationMode)("-app-registration-form__item-label_invisible", ctx.myFormRegistrate.controls["userEmail"].dirty);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("-app-registration-form__item-warning_invalid", ctx.myFormRegistrate.controls["userEmail"].touched && ctx.myFormRegistrate.controls["userEmail"].invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("-app-registration-form__item-check_valid", ctx.myFormRegistrate.controls["userEmail"].touched && ctx.myFormRegistrate.controls["userEmail"].valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("-app-registration-form__item-line_valid", ctx.myFormRegistrate.controls["userAge"].touched && ctx.myFormRegistrate.controls["userAge"].valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("-app-registration-form__item-label_registration-mode", ctx.registrationMode)("-app-registration-form__item-label_invisible", ctx.myFormRegistrate.controls["userAge"].dirty);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("-app-registration-form__item-warning_invalid", ctx.myFormRegistrate.controls["userAge"].touched && ctx.myFormRegistrate.controls["userAge"].invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("-app-registration-form__item-check_valid", ctx.myFormRegistrate.controls["userAge"].touched && ctx.myFormRegistrate.controls["userAge"].valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("-app-registration-form__item-line_valid", ctx.myFormRegistrate.controls["userPassword"].touched && ctx.myFormRegistrate.controls["userPassword"].valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("-app-registration-form__item-label_registration-mode", ctx.registrationMode)("-app-registration-form__item-label_invisible", ctx.myFormRegistrate.controls["userPassword"].dirty);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("-app-registration-form__item-warning_invalid", ctx.myFormRegistrate.controls["userPassword"].touched && ctx.myFormRegistrate.controls["userPassword"].invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("-app-registration-form__item-check_valid", ctx.myFormRegistrate.controls["userPassword"].touched && ctx.myFormRegistrate.controls["userPassword"].valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("-app-registration-form__item-line_valid", ctx.myFormRegistrate.controls["userRepeatPassword"].touched && ctx.myFormRegistrate.controls["userRepeatPassword"].valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("-app-registration-form__item-label_registration-mode", ctx.registrationMode)("-app-registration-form__item-label_invisible", ctx.myFormRegistrate.controls["userRepeatPassword"].dirty);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("-app-registration-form__item-warning_invalid", ctx.myFormRegistrate.controls["userRepeatPassword"].touched && ctx.myFormRegistrate.controls["userRepeatPassword"].invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("-app-registration-form__item-check_valid", ctx.myFormRegistrate.controls["userRepeatPassword"].touched && ctx.myFormRegistrate.controls["userRepeatPassword"].valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.myFormRegistrate.controls["userName"].invalid || ctx.myFormRegistrate.controls["userSurname"].invalid || ctx.myFormRegistrate.controls["userEmail"].invalid || ctx.myFormRegistrate.controls["userAge"].invalid || ctx.myFormRegistrate.controls["userPassword"].invalid || ctx.myFormRegistrate.controls["userRepeatPassword"].invalid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]], styles: ["@charset \"UTF-8\";\n[_nghost-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100vh;\n  background-image: url('user-registration-bg.jpg');\n  background-size: cover;\n}\n@-webkit-keyframes shapeButtonToRegistrationMode {\n  0% {\n    width: 120px;\n    height: 120px;\n    border-radius: 50%;\n  }\n  100% {\n    width: 100%;\n    height: 95%;\n    border-radius: 10px;\n  }\n}\n@keyframes shapeButtonToRegistrationMode {\n  0% {\n    width: 120px;\n    height: 120px;\n    border-radius: 50%;\n  }\n  100% {\n    width: 100%;\n    height: 95%;\n    border-radius: 10px;\n  }\n}\n@-webkit-keyframes blinkRegistration {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n    display: block;\n  }\n}\n@keyframes blinkRegistration {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n    display: block;\n  }\n}\n.-app-registration[_ngcontent-%COMP%] {\n  position: relative;\n  width: 500px;\n  height: 650px;\n}\n.-app-registration-form[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0%;\n  left: 0%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-start;\n  width: 100%;\n  height: 100%;\n  padding: 60px 50px 40px 50px;\n  transform: translate(0%, 0%) scale(1);\n  -webkit-transform: translate(0%, 0%) scale(1);\n  -ms-transform: translate(0%, 0%) scale(1);\n  opacity: 1;\n  transition: 0.2s;\n  box-sizing: border-box;\n  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.6);\n  border-radius: 10px;\n  background: rgba(0, 0, 0, 0.8);\n  color: white;\n}\n.-app-registration-form_registrate[_ngcontent-%COMP%] {\n  display: none;\n}\n.-app-registration-form_registration-mode[_ngcontent-%COMP%] {\n  color: black;\n  background-color: #ffd4ad;\n  opacity: 0;\n  -webkit-animation: 0.4s blinkRegistration forwards 1s;\n          animation: 0.4s blinkRegistration forwards 1s;\n}\n.-app-registration-form_registration-mode[_ngcontent-%COMP%]   .-app-registration-form__title[_ngcontent-%COMP%]::before {\n  left: -49px;\n  background-color: black;\n}\n.-app-registration-form_registration-mode[_ngcontent-%COMP%]   .-app-registration-form__title[_ngcontent-%COMP%], .-app-registration-form_registration-mode[_ngcontent-%COMP%]   .-app-registration-form__sub-title[_ngcontent-%COMP%] {\n  color: black;\n}\n.-app-registration-form_registration-mode[_ngcontent-%COMP%]   .-app-registration-form__item-input[_ngcontent-%COMP%] {\n  color: black;\n}\n.-app-registration-form_registration-mode[_ngcontent-%COMP%]   .-app-registration-form__item-line[_ngcontent-%COMP%] {\n  background-color: black;\n}\n.-app-registration-form_registration-mode[_ngcontent-%COMP%]   .-app-registration-form__button[_ngcontent-%COMP%] {\n  border: 2px solid black;\n  color: black;\n}\n.-app-registration-form_not-login-mode[_ngcontent-%COMP%] {\n  transform: translate(0%, -2.5%) scale(0.95);\n  -webkit-transform: translate(0%, -2.5%) scale(0.95);\n  -ms-transform: translate(0%, -2.5%) scale(0.95);\n  opacity: 0.9;\n}\n.-app-registration-form__top-decoration[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 0;\n  top: -15px;\n  left: 50%;\n  transform: translate(-50%, 0%) scale(1);\n  -webkit-transform: translate(-50%, 0%) scale(1);\n  -ms-transform: translate(-50%, 0%) scale(1);\n  opacity: 1;\n  transition: 0.2s;\n  width: 95%;\n  height: 20px;\n  border-radius: 20px 20px 0px 0px;\n  background: rgba(255, 255, 255, 0.6);\n}\n.-app-registration-form__top-decoration_registration-mode[_ngcontent-%COMP%] {\n  transform: translate(-50%, -2%) scale(0.95);\n  -webkit-transform: translate(-50%, -2%) scale(0.95);\n  -ms-transform: translate(-50%, -2%) scale(0.95);\n  opacity: 0.9;\n}\n.-app-registration-form__title[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  color: #ffd4ad;\n  text-transform: uppercase;\n  letter-spacing: 3px;\n  font-size: 30px;\n}\n.-app-registration-form__title[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  top: 50%;\n  left: -50px;\n  transform: translate(-50%, -50%);\n  width: 4px;\n  height: 120%;\n  background-color: #ffd4ad;\n}\n.-app-registration-form__item[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  height: 90px;\n}\n.-app-registration-form__item-check[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 1;\n  top: 45%;\n  right: 0%;\n  transform: translate(0%, -50%);\n  width: 50px;\n  height: 50px;\n  transition: 0.3s;\n  opacity: 0;\n  cursor: pointer;\n  outline: none;\n  border: none;\n  background: none;\n}\n.-app-registration-form__item-check_valid[_ngcontent-%COMP%] {\n  opacity: 1;\n  z-index: 9000;\n}\n.-app-registration-form__item-check_valid.-app-registration-form__item-check[_ngcontent-%COMP%]::before {\n  z-index: 9001;\n}\n.-app-registration-form__item-check[_ngcontent-%COMP%]:hover {\n  -webkit-filter: brightness(1.2);\n          filter: brightness(1.2);\n}\n.-app-registration-form__item-check.-app-registration-form__item-check_login[_ngcontent-%COMP%]::before {\n  color: #f4a669;\n}\n.-app-registration-form__item-check[_ngcontent-%COMP%]::before {\n  content: \"\uF00C\";\n  position: absolute;\n  z-index: 2;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  color: #e2965d;\n  font-family: \"Font Awesome 5 free\", \"Font Awesome 5 brands\";\n  font-size: 24px;\n  font-weight: 600;\n}\n.-app-registration-form__item-warning[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 1;\n  top: 45%;\n  right: 0%;\n  transform: translate(0%, -50%);\n  width: 50px;\n  height: 50px;\n  transition: 0.3s;\n  opacity: 0;\n  cursor: pointer;\n  outline: none;\n  border: none;\n  background: none;\n}\n.-app-registration-form__item-warning_invalid[_ngcontent-%COMP%] {\n  opacity: 1;\n  z-index: 9000;\n}\n.-app-registration-form__item-warning_invalid.-app-registration-form__item-warning[_ngcontent-%COMP%]::before {\n  z-index: 9001;\n}\n.-app-registration-form__item-warning[_ngcontent-%COMP%]:hover {\n  -webkit-filter: brightness(1.2);\n          filter: brightness(1.2);\n}\n.-app-registration-form__item-warning.-app-registration-form__item-warning_login[_ngcontent-%COMP%]::before {\n  color: #f4a669;\n}\n.-app-registration-form__item-warning[_ngcontent-%COMP%]::before {\n  content: \"\uF12A\";\n  position: absolute;\n  z-index: 2;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  color: #e2965d;\n  font-family: \"Font Awesome 5 free\", \"Font Awesome 5 brands\";\n  font-size: 24px;\n  font-weight: 600;\n}\n.-app-registration-form__item-label[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 4;\n  top: 50%;\n  left: 0%;\n  transform: translate(0%, -50%);\n  transition: 300ms cubic-bezier(0.4, 0, 0.2, 1);\n  -webkit-transition: 300ms cubic-bezier(0.4, 0, 0.2, 1);\n  -ms-transition: 300ms cubic-bezier(0.4, 0, 0.2, 1);\n  opacity: 1;\n  font-weight: 600;\n  letter-spacing: 1.5px;\n}\n.-app-registration-form__item-label_registration-mode[_ngcontent-%COMP%] {\n  color: black;\n}\n.-app-registration-form__item-label_invisible[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n.-app-registration-form__item-line[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 15%;\n  left: 0%;\n  width: 0%;\n  height: 2px;\n  transition: 300ms cubic-bezier(0.4, 0, 0.2, 1);\n  -webkit-transition: 300ms cubic-bezier(0.4, 0, 0.2, 1);\n  -ms-transition: 300ms cubic-bezier(0.4, 0, 0.2, 1);\n  background-color: #ffd4ad;\n}\n.-app-registration-form__item-line_valid[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.-app-registration-form__item-input[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 5;\n  top: 50%;\n  left: 0%;\n  transform: translate(0%, -50%);\n  width: 100%;\n  height: 40px;\n  transition: 0.3s;\n  cursor: pointer;\n  outline: none;\n  border: none;\n  background: transparent;\n  color: white;\n  letter-spacing: 1.5px;\n  font-weight: 600;\n  font-size: 18px;\n}\n.-app-registration-form__item-input[_ngcontent-%COMP%]:focus    + .-app-registration-form__item-line[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.-app-registration-form__item-input[_ngcontent-%COMP%]:focus    ~ .-app-registration-form__item-label[_ngcontent-%COMP%] {\n  top: 0%;\n  left: 0%;\n  transform: translate(0%, -50%);\n  opacity: 1;\n}\n.-app-registration-form__button[_ngcontent-%COMP%] {\n  width: 60%;\n  height: 80px;\n  margin: 25px 0px;\n  transition: 0.3s;\n  opacity: 1;\n  cursor: pointer;\n  outline: none;\n  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.6);\n  border: 2px solid white;\n  background: transparent;\n  color: white;\n  font-size: 20px;\n  text-transform: uppercase;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 2px;\n}\n.-app-registration-form__button[_ngcontent-%COMP%]:hover {\n  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.6);\n}\n.-app-registration-form__button_registrate[_ngcontent-%COMP%]:hover.-app-registration-form__button {\n  border: 2px solid #e2965d;\n  background-color: #e2965d;\n}\n.-app-registration-form__button_registrate[disabled][_ngcontent-%COMP%]:hover {\n  border: 2px solid black;\n  background-color: transparent;\n  color: black;\n}\n.-app-registration-form__button_login[_ngcontent-%COMP%]:hover.-app-registration-form__button {\n  border: 2px solid #e2965d;\n  background-color: rgba(0, 0, 0, 0.2);\n  color: #e2965d;\n}\n.-app-registration-form__button_login[disabled][_ngcontent-%COMP%]:hover {\n  border: 2px solid white;\n  background-color: transparent;\n  color: white;\n}\n.-app-registration-form__button[_ngcontent-%COMP%]:active {\n  -webkit-filter: brightness(1.5);\n          filter: brightness(1.5);\n  font-size: 22px;\n}\n.-app-registration-form__button[disabled][_ngcontent-%COMP%] {\n  opacity: 0.7;\n  cursor: default;\n  box-shadow: none;\n}\n.-app-registration-form__sub-title[_ngcontent-%COMP%] {\n  position: relative;\n  cursor: pointer;\n  color: #ffd4ad;\n  letter-spacing: 2px;\n}\n.-app-registration-form__sub-title[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  bottom: -40%;\n  left: 50%;\n  transform: translate(-50%, 0%);\n  width: 110%;\n  height: 2px;\n  background-color: #ffd4ad;\n}\n.-app-registration-form__shape-button[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 6;\n  top: 7%;\n  right: 0%;\n  transform: translate(50%, 10px);\n  width: 130px;\n  height: 130px;\n  transition: 300ms cubic-bezier(0.4, 0, 0.2, 1);\n  -webkit-transition: 300ms cubic-bezier(0.4, 0, 0.2, 1);\n  -ms-transition: 300ms cubic-bezier(0.4, 0, 0.2, 1);\n  border-radius: 50%;\n  background-color: #ffd4ad;\n}\n.-app-registration-form__shape-button_registration-mode[_ngcontent-%COMP%] {\n  top: 50%;\n  right: 50%;\n  transform: translate(50%, -50%);\n  -webkit-animation: 0.3s shapeButtonToRegistrationMode forwards 0.3s;\n          animation: 0.3s shapeButtonToRegistrationMode forwards 0.3s;\n  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.4);\n}\n.-app-registration-form__plus[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 7;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%) rotate(0deg);\n  width: 65px;\n  height: 65px;\n  cursor: pointer;\n  outline: none;\n  border: none;\n  background: transparent;\n  transition: 300ms cubic-bezier(0.4, 0, 0.2, 1);\n  -webkit-transition: 300ms cubic-bezier(0.4, 0, 0.2, 1);\n  -ms-transition: 300ms cubic-bezier(0.4, 0, 0.2, 1);\n}\n.-app-registration-form__plus[_ngcontent-%COMP%]:hover::before {\n  font-size: 34px;\n}\n.-app-registration-form__plus[_ngcontent-%COMP%]::before {\n  content: \"\uF067\";\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  color: white;\n  font-size: 30px;\n  font-weight: 900;\n  font-family: \"Font Awesome 5 free\", \"Font Awesome 5 brands\";\n}\n.-app-registration-form__plus_registration-mode[_ngcontent-%COMP%] {\n  transition-delay: 0.8s;\n  top: 10%;\n  left: 90%;\n  transform: translate(-50%, -50%) rotate(45deg);\n}\n.-app-registration-form__plus_registration-mode[_ngcontent-%COMP%]::before {\n  transition-delay: 0.8s;\n  color: black;\n}\n.-app-registration-form__plus_from-registration-mode[_ngcontent-%COMP%] {\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%) rotate(0deg);\n}\n.-app-registration-form__plus_from-registration-mode[_ngcontent-%COMP%]::before {\n  transition-delay: 0.8s;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0cmF0aW9uL3JlZ2lzdHJhdGlvbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcmVnaXN0cmF0aW9uL0Q6XFxFUEFNIHRyYWluaW5nXFxzYXZlLW91ci1wbGFuZXRcXHNhdmUtb3VyLXBsYW5ldC1wcm9qZWN0L3NyY1xcYXBwXFxyZWdpc3RyYXRpb25cXHJlZ2lzdHJhdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNBaEI7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUVBLFdBQUE7RUFDQSxhQUFBO0VBRUEsaURBQUE7RUFDQSxzQkFBQTtBREFKO0FDR0E7RUFDSTtJQUNJLFlBQUE7SUFDQSxhQUFBO0lBRUEsa0JBQUE7RURETjtFQ0dFO0lBQ0ksV0FBQTtJQUNBLFdBQUE7SUFFQSxtQkFBQTtFREZOO0FBQ0Y7QUNWQTtFQUNJO0lBQ0ksWUFBQTtJQUNBLGFBQUE7SUFFQSxrQkFBQTtFREROO0VDR0U7SUFDSSxXQUFBO0lBQ0EsV0FBQTtJQUVBLG1CQUFBO0VERk47QUFDRjtBQ0tBO0VBQ0k7SUFDSSxVQUFBO0VESE47RUNLRTtJQUNJLFVBQUE7SUFDQSxjQUFBO0VESE47QUFDRjtBQ0pBO0VBQ0k7SUFDSSxVQUFBO0VESE47RUNLRTtJQUNJLFVBQUE7SUFDQSxjQUFBO0VESE47QUFDRjtBQ01BO0VBQ0ksa0JBQUE7RUFFQSxZQUFBO0VBQ0EsYUFBQTtBRExKO0FDTUk7RUFDSSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBRUEsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtFQUVBLFdBQUE7RUFDQSxZQUFBO0VBRUEsNEJBQUE7RUFFQSxxQ0FBQTtFQUNBLDZDQUFBO0VBQ0EseUNBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFFQSxzQkFBQTtFQUVBLDJDQUFBO0VBQ0EsbUJBQUE7RUFFQSw4QkFBQTtFQUVBLFlBQUE7QURaUjtBQ2FRO0VBQ0ksYUFBQTtBRFhaO0FDYVE7RUFDSSxZQUFBO0VBRUEseUJBQUE7RUE2QkEsVUFBQTtFQUNBLHFEQUFBO1VBQUEsNkNBQUE7QUR4Q1o7QUNjb0I7RUFDSSxXQUFBO0VBRUEsdUJBQUE7QURieEI7QUNnQmdCO0VBRUksWUFBQTtBRGZwQjtBQ21CZ0I7RUFDSSxZQUFBO0FEakJwQjtBQ21CZ0I7RUFDSSx1QkFBQTtBRGpCcEI7QUNvQlk7RUFDSSx1QkFBQTtFQUVBLFlBQUE7QURuQmhCO0FDeUJRO0VBQ0ksMkNBQUE7RUFDQSxtREFBQTtFQUNBLCtDQUFBO0VBQ0EsWUFBQTtBRHZCWjtBQ3lCUTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBRUEsdUNBQUE7RUFDQSwrQ0FBQTtFQUNBLDJDQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBRUEsVUFBQTtFQUNBLFlBQUE7RUFFQSxnQ0FBQTtFQUVBLG9DQUFBO0FEM0JaO0FDNEJZO0VBQ0ksMkNBQUE7RUFDQSxtREFBQTtFQUNBLCtDQUFBO0VBQ0EsWUFBQTtBRDFCaEI7QUM2QlE7RUFDSSxrQkFBQTtFQUVBLFdBQUE7RUFFQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUQ3Qlo7QUM4Qlk7RUFDSSxXQUFBO0VBRUEsa0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLGdDQUFBO0VBRUEsVUFBQTtFQUNBLFlBQUE7RUFFQSx5QkFBQTtBRC9CaEI7QUNrQ1E7RUFDSSxrQkFBQTtFQUVBLFdBQUE7RUFDQSxZQUFBO0FEakNaO0FDa0NZO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSw4QkFBQTtFQUVBLFdBQUE7RUFDQSxZQUFBO0VBRUEsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUVBLGFBQUE7RUFDQSxZQUFBO0VBRUEsZ0JBQUE7QURwQ2hCO0FDc0NnQjtFQUNJLFVBQUE7RUFFQSxhQUFBO0FEckNwQjtBQ3NDb0I7RUFDSSxhQUFBO0FEcEN4QjtBQ3VDZ0I7RUFDSSwrQkFBQTtVQUFBLHVCQUFBO0FEckNwQjtBQ3dDb0I7RUFDSSxjQUFBO0FEdEN4QjtBQ3lDZ0I7RUFDSSxZQUFBO0VBRUEsa0JBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtFQUVBLGNBQUE7RUFDQSwyREFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBRHpDcEI7QUM0Q1k7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLDhCQUFBO0VBRUEsV0FBQTtFQUNBLFlBQUE7RUFFQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBRUEsYUFBQTtFQUNBLFlBQUE7RUFFQSxnQkFBQTtBRDlDaEI7QUNnRGdCO0VBQ0ksVUFBQTtFQUVBLGFBQUE7QUQvQ3BCO0FDZ0RvQjtFQUNJLGFBQUE7QUQ5Q3hCO0FDaURnQjtFQUNJLCtCQUFBO1VBQUEsdUJBQUE7QUQvQ3BCO0FDa0RvQjtFQUNJLGNBQUE7QURoRHhCO0FDbURnQjtFQUNJLFlBQUE7RUFFQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0VBRUEsY0FBQTtFQUNBLDJEQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FEbkRwQjtBQ3NEWTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7RUFDQSxRQUFBO0VBQ0EsOEJBQUE7RUFFQSw4Q0FBQTtFQUNBLHNEQUFBO0VBQ0Esa0RBQUE7RUFDQSxVQUFBO0VBRUEsZ0JBQUE7RUFDQSxxQkFBQTtBRHREaEI7QUN1RGdCO0VBQ0ksWUFBQTtBRHJEcEI7QUN1RGdCO0VBQ0ksVUFBQTtBRHJEcEI7QUN3RFk7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0VBRUEsU0FBQTtFQUNBLFdBQUE7RUFFQSw4Q0FBQTtFQUNBLHNEQUFBO0VBQ0Esa0RBQUE7RUFFQSx5QkFBQTtBRHpEaEI7QUMwRGdCO0VBQ0ksV0FBQTtBRHhEcEI7QUMyRFk7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLDhCQUFBO0VBRUEsV0FBQTtFQUNBLFlBQUE7RUFFQSxnQkFBQTtFQUNBLGVBQUE7RUFFQSxhQUFBO0VBQ0EsWUFBQTtFQUVBLHVCQUFBO0VBRUEsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FEOURoQjtBQ2dFb0I7RUFDSSxXQUFBO0FEOUR4QjtBQ2dFb0I7RUFDSSxPQUFBO0VBQ0EsUUFBQTtFQUNBLDhCQUFBO0VBRUEsVUFBQTtBRC9EeEI7QUNvRVE7RUFDSSxVQUFBO0VBQ0EsWUFBQTtFQUVBLGdCQUFBO0VBRUEsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUVBLGFBQUE7RUFDQSwwQ0FBQTtFQUNBLHVCQUFBO0VBRUEsdUJBQUE7RUFFQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0FEdkVaO0FDd0VZO0VBQ0ksMkNBQUE7QUR0RWhCO0FDMEVvQjtFQUNJLHlCQUFBO0VBRUEseUJBQUE7QUR6RXhCO0FDNkVvQjtFQUNJLHVCQUFBO0VBRUEsNkJBQUE7RUFFQSxZQUFBO0FEN0V4QjtBQ21Gb0I7RUFDSSx5QkFBQTtFQUVBLG9DQUFBO0VBRUEsY0FBQTtBRG5GeEI7QUN1Rm9CO0VBQ0ksdUJBQUE7RUFFQSw2QkFBQTtFQUVBLFlBQUE7QUR2RnhCO0FDMkZZO0VBQ0ksK0JBQUE7VUFBQSx1QkFBQTtFQUNBLGVBQUE7QUR6RmhCO0FDMkZZO0VBQ0ksWUFBQTtFQUNBLGVBQUE7RUFFQSxnQkFBQTtBRDFGaEI7QUM2RlE7RUFDSSxrQkFBQTtFQUVBLGVBQUE7RUFFQSxjQUFBO0VBQ0EsbUJBQUE7QUQ3Rlo7QUM4Rlk7RUFDSSxXQUFBO0VBRUEsa0JBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLDhCQUFBO0VBRUEsV0FBQTtFQUNBLFdBQUE7RUFFQSx5QkFBQTtBRC9GaEI7QUNrR1E7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQUNBLCtCQUFBO0VBRUEsWUFBQTtFQUNBLGFBQUE7RUFFQSw4Q0FBQTtFQUNBLHNEQUFBO0VBQ0Esa0RBQUE7RUFFQSxrQkFBQTtFQUVBLHlCQUFBO0FEcEdaO0FDcUdZO0VBQ0ksUUFBQTtFQUNBLFVBQUE7RUFDQSwrQkFBQTtFQUVBLG1FQUFBO1VBQUEsMkRBQUE7RUFDQSwyQ0FBQTtBRHBHaEI7QUN1R1E7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLDZDQUFBO0VBRUEsV0FBQTtFQUNBLFlBQUE7RUFFQSxlQUFBO0VBRUEsYUFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUVBLDhDQUFBO0VBQ0Esc0RBQUE7RUFDQSxrREFBQTtBRHpHWjtBQzJHZ0I7RUFDSSxlQUFBO0FEekdwQjtBQzRHWTtFQUNJLFlBQUE7RUFFQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7RUFFQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsMkRBQUE7QUQ1R2hCO0FDOEdZO0VBQ0ksc0JBQUE7RUFFQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLDhDQUFBO0FEN0doQjtBQzhHZ0I7RUFDSSxzQkFBQTtFQUNBLFlBQUE7QUQ1R3BCO0FDK0dZO0VBQ0ksUUFBQTtFQUNBLFNBQUE7RUFDQSw2Q0FBQTtBRDdHaEI7QUM4R2dCO0VBQ0ksc0JBQUE7RUFDQSxZQUFBO0FENUdwQiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdHJhdGlvbi9yZWdpc3RyYXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG46aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwic3JjL2Fzc2V0cy9pbWFnZXMvdXNlci1saXN0L3VzZXItcmVnaXN0cmF0aW9uLWJnLmpwZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuQGtleWZyYW1lcyBzaGFwZUJ1dHRvblRvUmVnaXN0cmF0aW9uTW9kZSB7XG4gIDAlIHtcbiAgICB3aWR0aDogMTIwcHg7XG4gICAgaGVpZ2h0OiAxMjBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIH1cbiAgMTAwJSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA5NSU7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgfVxufVxuQGtleWZyYW1lcyBibGlua1JlZ2lzdHJhdGlvbiB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbn1cbi4tYXBwLXJlZ2lzdHJhdGlvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDUwMHB4O1xuICBoZWlnaHQ6IDY1MHB4O1xufVxuLi1hcHAtcmVnaXN0cmF0aW9uLWZvcm0ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMCU7XG4gIGxlZnQ6IDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmc6IDYwcHggNTBweCA0MHB4IDUwcHg7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAwJSkgc2NhbGUoMSk7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIDAlKSBzY2FsZSgxKTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAwJSkgc2NhbGUoMSk7XG4gIG9wYWNpdHk6IDE7XG4gIHRyYW5zaXRpb246IDAuMnM7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuNik7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC44KTtcbiAgY29sb3I6IHdoaXRlO1xufVxuLi1hcHAtcmVnaXN0cmF0aW9uLWZvcm1fcmVnaXN0cmF0ZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4uLWFwcC1yZWdpc3RyYXRpb24tZm9ybV9yZWdpc3RyYXRpb24tbW9kZSB7XG4gIGNvbG9yOiBibGFjaztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZDRhZDtcbiAgb3BhY2l0eTogMDtcbiAgYW5pbWF0aW9uOiAwLjRzIGJsaW5rUmVnaXN0cmF0aW9uIGZvcndhcmRzIDFzO1xufVxuLi1hcHAtcmVnaXN0cmF0aW9uLWZvcm1fcmVnaXN0cmF0aW9uLW1vZGUgLi1hcHAtcmVnaXN0cmF0aW9uLWZvcm1fX3RpdGxlOjpiZWZvcmUge1xuICBsZWZ0OiAtNDlweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG59XG4uLWFwcC1yZWdpc3RyYXRpb24tZm9ybV9yZWdpc3RyYXRpb24tbW9kZSAuLWFwcC1yZWdpc3RyYXRpb24tZm9ybV9fdGl0bGUsIC4tYXBwLXJlZ2lzdHJhdGlvbi1mb3JtX3JlZ2lzdHJhdGlvbi1tb2RlIC4tYXBwLXJlZ2lzdHJhdGlvbi1mb3JtX19zdWItdGl0bGUge1xuICBjb2xvcjogYmxhY2s7XG59XG4uLWFwcC1yZWdpc3RyYXRpb24tZm9ybV9yZWdpc3RyYXRpb24tbW9kZSAuLWFwcC1yZWdpc3RyYXRpb24tZm9ybV9faXRlbS1pbnB1dCB7XG4gIGNvbG9yOiBibGFjaztcbn1cbi4tYXBwLXJlZ2lzdHJhdGlvbi1mb3JtX3JlZ2lzdHJhdGlvbi1tb2RlIC4tYXBwLXJlZ2lzdHJhdGlvbi1mb3JtX19pdGVtLWxpbmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbn1cbi4tYXBwLXJlZ2lzdHJhdGlvbi1mb3JtX3JlZ2lzdHJhdGlvbi1tb2RlIC4tYXBwLXJlZ2lzdHJhdGlvbi1mb3JtX19idXR0b24ge1xuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcbiAgY29sb3I6IGJsYWNrO1xufVxuLi1hcHAtcmVnaXN0cmF0aW9uLWZvcm1fbm90LWxvZ2luLW1vZGUge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgLTIuNSUpIHNjYWxlKDAuOTUpO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAtMi41JSkgc2NhbGUoMC45NSk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgLTIuNSUpIHNjYWxlKDAuOTUpO1xuICBvcGFjaXR5OiAwLjk7XG59XG4uLWFwcC1yZWdpc3RyYXRpb24tZm9ybV9fdG9wLWRlY29yYXRpb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDA7XG4gIHRvcDogLTE1cHg7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCUpIHNjYWxlKDEpO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDAlKSBzY2FsZSgxKTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDAlKSBzY2FsZSgxKTtcbiAgb3BhY2l0eTogMTtcbiAgdHJhbnNpdGlvbjogMC4ycztcbiAgd2lkdGg6IDk1JTtcbiAgaGVpZ2h0OiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiAyMHB4IDIwcHggMHB4IDBweDtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpO1xufVxuLi1hcHAtcmVnaXN0cmF0aW9uLWZvcm1fX3RvcC1kZWNvcmF0aW9uX3JlZ2lzdHJhdGlvbi1tb2RlIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTIlKSBzY2FsZSgwLjk1KTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtMiUpIHNjYWxlKDAuOTUpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTIlKSBzY2FsZSgwLjk1KTtcbiAgb3BhY2l0eTogMC45O1xufVxuLi1hcHAtcmVnaXN0cmF0aW9uLWZvcm1fX3RpdGxlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgY29sb3I6ICNmZmQ0YWQ7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGxldHRlci1zcGFjaW5nOiAzcHg7XG4gIGZvbnQtc2l6ZTogMzBweDtcbn1cbi4tYXBwLXJlZ2lzdHJhdGlvbi1mb3JtX190aXRsZTo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogLTUwcHg7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB3aWR0aDogNHB4O1xuICBoZWlnaHQ6IDEyMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmQ0YWQ7XG59XG4uLWFwcC1yZWdpc3RyYXRpb24tZm9ybV9faXRlbSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogOTBweDtcbn1cbi4tYXBwLXJlZ2lzdHJhdGlvbi1mb3JtX19pdGVtLWNoZWNrIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAxO1xuICB0b3A6IDQ1JTtcbiAgcmlnaHQ6IDAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgLTUwJSk7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIHRyYW5zaXRpb246IDAuM3M7XG4gIG9wYWNpdHk6IDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kOiBub25lO1xufVxuLi1hcHAtcmVnaXN0cmF0aW9uLWZvcm1fX2l0ZW0tY2hlY2tfdmFsaWQge1xuICBvcGFjaXR5OiAxO1xuICB6LWluZGV4OiA5MDAwO1xufVxuLi1hcHAtcmVnaXN0cmF0aW9uLWZvcm1fX2l0ZW0tY2hlY2tfdmFsaWQuLWFwcC1yZWdpc3RyYXRpb24tZm9ybV9faXRlbS1jaGVjazo6YmVmb3JlIHtcbiAgei1pbmRleDogOTAwMTtcbn1cbi4tYXBwLXJlZ2lzdHJhdGlvbi1mb3JtX19pdGVtLWNoZWNrOmhvdmVyIHtcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDEuMik7XG59XG4uLWFwcC1yZWdpc3RyYXRpb24tZm9ybV9faXRlbS1jaGVjay4tYXBwLXJlZ2lzdHJhdGlvbi1mb3JtX19pdGVtLWNoZWNrX2xvZ2luOjpiZWZvcmUge1xuICBjb2xvcjogI2Y0YTY2OTtcbn1cbi4tYXBwLXJlZ2lzdHJhdGlvbi1mb3JtX19pdGVtLWNoZWNrOjpiZWZvcmUge1xuICBjb250ZW50OiBcIu+AjFwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDI7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICBjb2xvcjogI2UyOTY1ZDtcbiAgZm9udC1mYW1pbHk6IFwiRm9udCBBd2Vzb21lIDUgZnJlZVwiLCBcIkZvbnQgQXdlc29tZSA1IGJyYW5kc1wiO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4uLWFwcC1yZWdpc3RyYXRpb24tZm9ybV9faXRlbS13YXJuaW5nIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAxO1xuICB0b3A6IDQ1JTtcbiAgcmlnaHQ6IDAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgLTUwJSk7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIHRyYW5zaXRpb246IDAuM3M7XG4gIG9wYWNpdHk6IDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kOiBub25lO1xufVxuLi1hcHAtcmVnaXN0cmF0aW9uLWZvcm1fX2l0ZW0td2FybmluZ19pbnZhbGlkIHtcbiAgb3BhY2l0eTogMTtcbiAgei1pbmRleDogOTAwMDtcbn1cbi4tYXBwLXJlZ2lzdHJhdGlvbi1mb3JtX19pdGVtLXdhcm5pbmdfaW52YWxpZC4tYXBwLXJlZ2lzdHJhdGlvbi1mb3JtX19pdGVtLXdhcm5pbmc6OmJlZm9yZSB7XG4gIHotaW5kZXg6IDkwMDE7XG59XG4uLWFwcC1yZWdpc3RyYXRpb24tZm9ybV9faXRlbS13YXJuaW5nOmhvdmVyIHtcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDEuMik7XG59XG4uLWFwcC1yZWdpc3RyYXRpb24tZm9ybV9faXRlbS13YXJuaW5nLi1hcHAtcmVnaXN0cmF0aW9uLWZvcm1fX2l0ZW0td2FybmluZ19sb2dpbjo6YmVmb3JlIHtcbiAgY29sb3I6ICNmNGE2Njk7XG59XG4uLWFwcC1yZWdpc3RyYXRpb24tZm9ybV9faXRlbS13YXJuaW5nOjpiZWZvcmUge1xuICBjb250ZW50OiBcIu+EqlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDI7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICBjb2xvcjogI2UyOTY1ZDtcbiAgZm9udC1mYW1pbHk6IFwiRm9udCBBd2Vzb21lIDUgZnJlZVwiLCBcIkZvbnQgQXdlc29tZSA1IGJyYW5kc1wiO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4uLWFwcC1yZWdpc3RyYXRpb24tZm9ybV9faXRlbS1sYWJlbCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogNDtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgLTUwJSk7XG4gIHRyYW5zaXRpb246IDMwMG1zIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMzAwbXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcbiAgLW1zLXRyYW5zaXRpb246IDMwMG1zIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XG4gIG9wYWNpdHk6IDE7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxldHRlci1zcGFjaW5nOiAxLjVweDtcbn1cbi4tYXBwLXJlZ2lzdHJhdGlvbi1mb3JtX19pdGVtLWxhYmVsX3JlZ2lzdHJhdGlvbi1tb2RlIHtcbiAgY29sb3I6IGJsYWNrO1xufVxuLi1hcHAtcmVnaXN0cmF0aW9uLWZvcm1fX2l0ZW0tbGFiZWxfaW52aXNpYmxlIHtcbiAgb3BhY2l0eTogMDtcbn1cbi4tYXBwLXJlZ2lzdHJhdGlvbi1mb3JtX19pdGVtLWxpbmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMTUlO1xuICBsZWZ0OiAwJTtcbiAgd2lkdGg6IDAlO1xuICBoZWlnaHQ6IDJweDtcbiAgdHJhbnNpdGlvbjogMzAwbXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAzMDBtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xuICAtbXMtdHJhbnNpdGlvbjogMzAwbXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZDRhZDtcbn1cbi4tYXBwLXJlZ2lzdHJhdGlvbi1mb3JtX19pdGVtLWxpbmVfdmFsaWQge1xuICB3aWR0aDogMTAwJTtcbn1cbi4tYXBwLXJlZ2lzdHJhdGlvbi1mb3JtX19pdGVtLWlucHV0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiA1O1xuICB0b3A6IDUwJTtcbiAgbGVmdDogMCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAtNTAlKTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNDBweDtcbiAgdHJhbnNpdGlvbjogMC4zcztcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogd2hpdGU7XG4gIGxldHRlci1zcGFjaW5nOiAxLjVweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuLi1hcHAtcmVnaXN0cmF0aW9uLWZvcm1fX2l0ZW0taW5wdXQ6Zm9jdXMgKyAuLWFwcC1yZWdpc3RyYXRpb24tZm9ybV9faXRlbS1saW5lIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4uLWFwcC1yZWdpc3RyYXRpb24tZm9ybV9faXRlbS1pbnB1dDpmb2N1cyB+IC4tYXBwLXJlZ2lzdHJhdGlvbi1mb3JtX19pdGVtLWxhYmVsIHtcbiAgdG9wOiAwJTtcbiAgbGVmdDogMCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAtNTAlKTtcbiAgb3BhY2l0eTogMTtcbn1cbi4tYXBwLXJlZ2lzdHJhdGlvbi1mb3JtX19idXR0b24ge1xuICB3aWR0aDogNjAlO1xuICBoZWlnaHQ6IDgwcHg7XG4gIG1hcmdpbjogMjVweCAwcHg7XG4gIHRyYW5zaXRpb246IDAuM3M7XG4gIG9wYWNpdHk6IDE7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm94LXNoYWRvdzogMnB4IDJweCA4cHggcmdiYSgwLCAwLCAwLCAwLjYpO1xuICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAyMHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXdlaWdodDogNjAwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBsZXR0ZXItc3BhY2luZzogMnB4O1xufVxuLi1hcHAtcmVnaXN0cmF0aW9uLWZvcm1fX2J1dHRvbjpob3ZlciB7XG4gIGJveC1zaGFkb3c6IDNweCAzcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuNik7XG59XG4uLWFwcC1yZWdpc3RyYXRpb24tZm9ybV9fYnV0dG9uX3JlZ2lzdHJhdGU6aG92ZXIuLWFwcC1yZWdpc3RyYXRpb24tZm9ybV9fYnV0dG9uIHtcbiAgYm9yZGVyOiAycHggc29saWQgI2UyOTY1ZDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UyOTY1ZDtcbn1cbi4tYXBwLXJlZ2lzdHJhdGlvbi1mb3JtX19idXR0b25fcmVnaXN0cmF0ZVtkaXNhYmxlZF06aG92ZXIge1xuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiBibGFjaztcbn1cbi4tYXBwLXJlZ2lzdHJhdGlvbi1mb3JtX19idXR0b25fbG9naW46aG92ZXIuLWFwcC1yZWdpc3RyYXRpb24tZm9ybV9fYnV0dG9uIHtcbiAgYm9yZGVyOiAycHggc29saWQgI2UyOTY1ZDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpO1xuICBjb2xvcjogI2UyOTY1ZDtcbn1cbi4tYXBwLXJlZ2lzdHJhdGlvbi1mb3JtX19idXR0b25fbG9naW5bZGlzYWJsZWRdOmhvdmVyIHtcbiAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogd2hpdGU7XG59XG4uLWFwcC1yZWdpc3RyYXRpb24tZm9ybV9fYnV0dG9uOmFjdGl2ZSB7XG4gIGZpbHRlcjogYnJpZ2h0bmVzcygxLjUpO1xuICBmb250LXNpemU6IDIycHg7XG59XG4uLWFwcC1yZWdpc3RyYXRpb24tZm9ybV9fYnV0dG9uW2Rpc2FibGVkXSB7XG4gIG9wYWNpdHk6IDAuNztcbiAgY3Vyc29yOiBkZWZhdWx0O1xuICBib3gtc2hhZG93OiBub25lO1xufVxuLi1hcHAtcmVnaXN0cmF0aW9uLWZvcm1fX3N1Yi10aXRsZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjb2xvcjogI2ZmZDRhZDtcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbn1cbi4tYXBwLXJlZ2lzdHJhdGlvbi1mb3JtX19zdWItdGl0bGU6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAtNDAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDAlKTtcbiAgd2lkdGg6IDExMCU7XG4gIGhlaWdodDogMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZkNGFkO1xufVxuLi1hcHAtcmVnaXN0cmF0aW9uLWZvcm1fX3NoYXBlLWJ1dHRvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogNjtcbiAgdG9wOiA3JTtcbiAgcmlnaHQ6IDAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg1MCUsIDEwcHgpO1xuICB3aWR0aDogMTMwcHg7XG4gIGhlaWdodDogMTMwcHg7XG4gIHRyYW5zaXRpb246IDMwMG1zIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMzAwbXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcbiAgLW1zLXRyYW5zaXRpb246IDMwMG1zIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZDRhZDtcbn1cbi4tYXBwLXJlZ2lzdHJhdGlvbi1mb3JtX19zaGFwZS1idXR0b25fcmVnaXN0cmF0aW9uLW1vZGUge1xuICB0b3A6IDUwJTtcbiAgcmlnaHQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNTAlLCAtNTAlKTtcbiAgYW5pbWF0aW9uOiAwLjNzIHNoYXBlQnV0dG9uVG9SZWdpc3RyYXRpb25Nb2RlIGZvcndhcmRzIDAuM3M7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuNCk7XG59XG4uLWFwcC1yZWdpc3RyYXRpb24tZm9ybV9fcGx1cyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogNztcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgcm90YXRlKDBkZWcpO1xuICB3aWR0aDogNjVweDtcbiAgaGVpZ2h0OiA2NXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIHRyYW5zaXRpb246IDMwMG1zIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMzAwbXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcbiAgLW1zLXRyYW5zaXRpb246IDMwMG1zIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XG59XG4uLWFwcC1yZWdpc3RyYXRpb24tZm9ybV9fcGx1czpob3Zlcjo6YmVmb3JlIHtcbiAgZm9udC1zaXplOiAzNHB4O1xufVxuLi1hcHAtcmVnaXN0cmF0aW9uLWZvcm1fX3BsdXM6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi74GnXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBmb250LXdlaWdodDogOTAwO1xuICBmb250LWZhbWlseTogXCJGb250IEF3ZXNvbWUgNSBmcmVlXCIsIFwiRm9udCBBd2Vzb21lIDUgYnJhbmRzXCI7XG59XG4uLWFwcC1yZWdpc3RyYXRpb24tZm9ybV9fcGx1c19yZWdpc3RyYXRpb24tbW9kZSB7XG4gIHRyYW5zaXRpb24tZGVsYXk6IDAuOHM7XG4gIHRvcDogMTAlO1xuICBsZWZ0OiA5MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHJvdGF0ZSg0NWRlZyk7XG59XG4uLWFwcC1yZWdpc3RyYXRpb24tZm9ybV9fcGx1c19yZWdpc3RyYXRpb24tbW9kZTo6YmVmb3JlIHtcbiAgdHJhbnNpdGlvbi1kZWxheTogMC44cztcbiAgY29sb3I6IGJsYWNrO1xufVxuLi1hcHAtcmVnaXN0cmF0aW9uLWZvcm1fX3BsdXNfZnJvbS1yZWdpc3RyYXRpb24tbW9kZSB7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHJvdGF0ZSgwZGVnKTtcbn1cbi4tYXBwLXJlZ2lzdHJhdGlvbi1mb3JtX19wbHVzX2Zyb20tcmVnaXN0cmF0aW9uLW1vZGU6OmJlZm9yZSB7XG4gIHRyYW5zaXRpb24tZGVsYXk6IDAuOHM7XG4gIGNvbG9yOiB3aGl0ZTtcbn0iLCI6aG9zdCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuXHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJzcmMvYXNzZXRzL2ltYWdlcy91c2VyLWxpc3QvdXNlci1yZWdpc3RyYXRpb24tYmcuanBnXCIpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG5cclxuQGtleWZyYW1lcyBzaGFwZUJ1dHRvblRvUmVnaXN0cmF0aW9uTW9kZSB7XHJcbiAgICAwJSB7XHJcbiAgICAgICAgd2lkdGg6IDEyMHB4O1xyXG4gICAgICAgIGhlaWdodDogMTIwcHg7XHJcblxyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogOTUlO1xyXG5cclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGJsaW5rUmVnaXN0cmF0aW9uIHtcclxuICAgIDAlIHtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxufVxyXG5cclxuLi1hcHAtcmVnaXN0cmF0aW9uIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICB3aWR0aDogNTAwcHg7XHJcbiAgICBoZWlnaHQ6IDY1MHB4O1xyXG4gICAgJi1mb3JtIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAwJTtcclxuICAgICAgICBsZWZ0OiAwJTtcclxuXHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG5cclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcblxyXG4gICAgICAgIHBhZGRpbmc6IDYwcHggNTBweCA0MHB4IDUwcHg7XHJcblxyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAwJSkgc2NhbGUoMSk7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgMCUpIHNjYWxlKDEpO1xyXG4gICAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgMCUpIHNjYWxlKDEpO1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogMC4ycztcclxuXHJcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHJcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC42KTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG5cclxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuOCk7XHJcblxyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAmX3JlZ2lzdHJhdGUge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmX3JlZ2lzdHJhdGlvbi1tb2RlIHtcclxuICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xyXG5cclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZDRhZDtcclxuXHJcbiAgICAgICAgICAgICYgLi1hcHAtcmVnaXN0cmF0aW9uLWZvcm0ge1xyXG4gICAgICAgICAgICAgICAgJl9fdGl0bGUge1xyXG4gICAgICAgICAgICAgICAgICAgICY6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IC00OXB4O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgJl9fdGl0bGUsXHJcbiAgICAgICAgICAgICAgICAmX19zdWItdGl0bGUge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmIC4tYXBwLXJlZ2lzdHJhdGlvbi1mb3JtX19pdGVtIHtcclxuICAgICAgICAgICAgICAgICYtaW5wdXQge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICYtbGluZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJiAuLWFwcC1yZWdpc3RyYXRpb24tZm9ybV9fYnV0dG9uIHtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgICAgYW5pbWF0aW9uOiAwLjRzIGJsaW5rUmVnaXN0cmF0aW9uIGZvcndhcmRzIDFzO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmX25vdC1sb2dpbi1tb2RlIHtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIC0yLjUlKSBzY2FsZSgwLjk1KTtcclxuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgLTIuNSUpIHNjYWxlKDAuOTUpO1xyXG4gICAgICAgICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIC0yLjUlKSBzY2FsZSgwLjk1KTtcclxuICAgICAgICAgICAgb3BhY2l0eTogMC45O1xyXG4gICAgICAgIH1cclxuICAgICAgICAmX190b3AtZGVjb3JhdGlvbiB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgei1pbmRleDogMDtcclxuICAgICAgICAgICAgdG9wOiAtMTVweDtcclxuICAgICAgICAgICAgbGVmdDogNTAlO1xyXG5cclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCUpIHNjYWxlKDEpO1xyXG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDAlKSBzY2FsZSgxKTtcclxuICAgICAgICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDAlKSBzY2FsZSgxKTtcclxuICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogMC4ycztcclxuXHJcbiAgICAgICAgICAgIHdpZHRoOiA5NSU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMjBweDtcclxuXHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHggMjBweCAwcHggMHB4O1xyXG5cclxuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpO1xyXG4gICAgICAgICAgICAmX3JlZ2lzdHJhdGlvbi1tb2RlIHtcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC0yJSkgc2NhbGUoMC45NSk7XHJcbiAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC0yJSkgc2NhbGUoMC45NSk7XHJcbiAgICAgICAgICAgICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTIlKSBzY2FsZSgwLjk1KTtcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuOTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAmX190aXRsZSB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgICAgICAgICAgY29sb3I6ICNmZmQ0YWQ7XHJcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAzcHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgICAgICAgICAgJjo6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcblxyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiAtNTBweDtcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG5cclxuICAgICAgICAgICAgICAgIHdpZHRoOiA0cHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEyMCU7XHJcblxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZDRhZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAmX19pdGVtIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogOTBweDtcclxuICAgICAgICAgICAgJi1jaGVjayB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgICAgICAgICAgdG9wOiA0NSU7XHJcbiAgICAgICAgICAgICAgICByaWdodDogMCU7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgLTUwJSk7XHJcblxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDUwcHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcblxyXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogMC4zcztcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG5cclxuICAgICAgICAgICAgICAgICZfdmFsaWQge1xyXG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDkwMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgJi4tYXBwLXJlZ2lzdHJhdGlvbi1mb3JtX19pdGVtLWNoZWNrOjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiA5MDAxO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIGZpbHRlcjogYnJpZ2h0bmVzcygxLjIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgJi4tYXBwLXJlZ2lzdHJhdGlvbi1mb3JtX19pdGVtLWNoZWNrX2xvZ2luIHtcclxuICAgICAgICAgICAgICAgICAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2Y0YTY2OTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXFxmMDBjXCI7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAyO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNlMjk2NWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiRm9udCBBd2Vzb21lIDUgZnJlZVwiLCBcIkZvbnQgQXdlc29tZSA1IGJyYW5kc1wiO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICYtd2FybmluZyB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgICAgICAgICAgdG9wOiA0NSU7XHJcbiAgICAgICAgICAgICAgICByaWdodDogMCU7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgLTUwJSk7XHJcblxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDUwcHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcblxyXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogMC4zcztcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG5cclxuICAgICAgICAgICAgICAgICZfaW52YWxpZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgei1pbmRleDogOTAwMDtcclxuICAgICAgICAgICAgICAgICAgICAmLi1hcHAtcmVnaXN0cmF0aW9uLWZvcm1fX2l0ZW0td2FybmluZzo6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgei1pbmRleDogOTAwMTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMS4yKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICYuLWFwcC1yZWdpc3RyYXRpb24tZm9ybV9faXRlbS13YXJuaW5nX2xvZ2luIHtcclxuICAgICAgICAgICAgICAgICAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2Y0YTY2OTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXFxmMTJhXCI7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAyO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNlMjk2NWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiRm9udCBBd2Vzb21lIDUgZnJlZVwiLCBcIkZvbnQgQXdlc29tZSA1IGJyYW5kc1wiO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICYtbGFiZWwge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgei1pbmRleDogNDtcclxuICAgICAgICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgICAgICAgbGVmdDogMCU7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgLTUwJSk7XHJcblxyXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogMzAwbXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcclxuICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogMzAwbXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcclxuICAgICAgICAgICAgICAgIC1tcy10cmFuc2l0aW9uOiAzMDBtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xyXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuXHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDEuNXB4O1xyXG4gICAgICAgICAgICAgICAgJl9yZWdpc3RyYXRpb24tbW9kZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgJl9pbnZpc2libGUge1xyXG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJi1saW5lIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIGJvdHRvbTogMTUlO1xyXG4gICAgICAgICAgICAgICAgbGVmdDogMCU7XHJcblxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDAlO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAycHg7XHJcblxyXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogMzAwbXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcclxuICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogMzAwbXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcclxuICAgICAgICAgICAgICAgIC1tcy10cmFuc2l0aW9uOiAzMDBtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xyXG5cclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmQ0YWQ7XHJcbiAgICAgICAgICAgICAgICAmX3ZhbGlkIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmLWlucHV0IHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIHotaW5kZXg6IDU7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IDAlO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIC01MCUpO1xyXG5cclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG5cclxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IDAuM3M7XHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuXHJcbiAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMS41cHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICAgICAgJjpmb2N1cyB7XHJcbiAgICAgICAgICAgICAgICAgICAgJiArIC4tYXBwLXJlZ2lzdHJhdGlvbi1mb3JtX19pdGVtLWxpbmUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgJiB+IC4tYXBwLXJlZ2lzdHJhdGlvbi1mb3JtX19pdGVtLWxhYmVsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAtNTAlKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICZfX2J1dHRvbiB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA2MCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogODBweDtcclxuXHJcbiAgICAgICAgICAgIG1hcmdpbjogMjVweCAwcHg7XHJcblxyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjNzO1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAycHggMnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuNik7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xyXG5cclxuICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcblxyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAzcHggM3B4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjYpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICZfcmVnaXN0cmF0ZSB7XHJcbiAgICAgICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAmLi1hcHAtcmVnaXN0cmF0aW9uLWZvcm1fX2J1dHRvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNlMjk2NWQ7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTI5NjVkO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICZbZGlzYWJsZWRdIHtcclxuICAgICAgICAgICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJl9sb2dpbiB7XHJcbiAgICAgICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAmLi1hcHAtcmVnaXN0cmF0aW9uLWZvcm1fX2J1dHRvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNlMjk2NWQ7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2UyOTY1ZDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAmW2Rpc2FibGVkXSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICY6YWN0aXZlIHtcclxuICAgICAgICAgICAgICAgIGZpbHRlcjogYnJpZ2h0bmVzcygxLjUpO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICZbZGlzYWJsZWRdIHtcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuNztcclxuICAgICAgICAgICAgICAgIGN1cnNvcjogZGVmYXVsdDtcclxuXHJcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICZfX3N1Yi10aXRsZSB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZkNGFkO1xyXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gICAgICAgICAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgY29udGVudDogXCJcIjtcclxuXHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICBib3R0b206IC00MCU7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwJSk7XHJcblxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDExMCU7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDJweDtcclxuXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZkNGFkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICZfX3NoYXBlLWJ1dHRvbiB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgei1pbmRleDogNjtcclxuICAgICAgICAgICAgdG9wOiA3JTtcclxuICAgICAgICAgICAgcmlnaHQ6IDAlO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg1MCUsIDEwcHgpO1xyXG5cclxuICAgICAgICAgICAgd2lkdGg6IDEzMHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEzMHB4O1xyXG5cclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogMzAwbXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcclxuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiAzMDBtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xyXG4gICAgICAgICAgICAtbXMtdHJhbnNpdGlvbjogMzAwbXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcclxuXHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuXHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmQ0YWQ7XHJcbiAgICAgICAgICAgICZfcmVnaXN0cmF0aW9uLW1vZGUge1xyXG4gICAgICAgICAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgICAgICAgICByaWdodDogNTAlO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNTAlLCAtNTAlKTtcclxuXHJcbiAgICAgICAgICAgICAgICBhbmltYXRpb246IDAuM3Mgc2hhcGVCdXR0b25Ub1JlZ2lzdHJhdGlvbk1vZGUgZm9yd2FyZHMgMC4zcztcclxuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuNCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgJl9fcGx1cyB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgei1pbmRleDogNztcclxuICAgICAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgcm90YXRlKDBkZWcpO1xyXG5cclxuICAgICAgICAgICAgd2lkdGg6IDY1cHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogNjVweDtcclxuXHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcblxyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAzMDBtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xyXG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IDMwMG1zIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XHJcbiAgICAgICAgICAgIC1tcy10cmFuc2l0aW9uOiAzMDBtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xyXG4gICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICY6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAzNHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICY6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiBcIlxcZjA2N1wiO1xyXG5cclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcblxyXG4gICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIkZvbnQgQXdlc29tZSA1IGZyZWVcIiwgXCJGb250IEF3ZXNvbWUgNSBicmFuZHNcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmX3JlZ2lzdHJhdGlvbi1tb2RlIHtcclxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDAuOHM7XHJcblxyXG4gICAgICAgICAgICAgICAgdG9wOiAxMCU7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiA5MCU7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSByb3RhdGUoNDVkZWcpO1xyXG4gICAgICAgICAgICAgICAgJjo6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAwLjhzO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmX2Zyb20tcmVnaXN0cmF0aW9uLW1vZGUge1xyXG4gICAgICAgICAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSByb3RhdGUoMGRlZyk7XHJcbiAgICAgICAgICAgICAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDAuOHM7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegistrationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-registration',
                templateUrl: './registration.component.html',
                styleUrls: ['./registration.component.scss']
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_7__["Store"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] }, { type: _store_user_list_user_list_facade__WEBPACK_IMPORTED_MODULE_9__["FacadeServiceUserList"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/app/registration/registration.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/registration/registration.module.ts ***!
  \*****************************************************/
/*! exports provided: RegistrationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationModule", function() { return RegistrationModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _registration_registration_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../registration/registration.component */ "./src/app/registration/registration.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _registration_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./registration-routing.module */ "./src/app/registration/registration-routing.module.ts");
/* harmony import */ var _guards_user_list_can_leave_registration_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../guards/user-list/can-leave-registration.guard */ "./src/app/guards/user-list/can-leave-registration.guard.ts");
/* harmony import */ var _guards_user_list_can_proceed_to_registration_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../guards/user-list/can-proceed-to-registration.guard */ "./src/app/guards/user-list/can-proceed-to-registration.guard.ts");








class RegistrationModule {
}
RegistrationModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: RegistrationModule, bootstrap: [_registration_registration_component__WEBPACK_IMPORTED_MODULE_2__["RegistrationComponent"]] });
RegistrationModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function RegistrationModule_Factory(t) { return new (t || RegistrationModule)(); }, providers: [
        _guards_user_list_can_proceed_to_registration_guard__WEBPACK_IMPORTED_MODULE_6__["CanProceedToRegistrationGuard"],
        _guards_user_list_can_leave_registration_guard__WEBPACK_IMPORTED_MODULE_5__["CanLeaveRegistrationGuard"]
    ], imports: [[
            _registration_routing_module__WEBPACK_IMPORTED_MODULE_4__["RegistrationRoutingModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](RegistrationModule, { declarations: [_registration_registration_component__WEBPACK_IMPORTED_MODULE_2__["RegistrationComponent"]], imports: [_registration_routing_module__WEBPACK_IMPORTED_MODULE_4__["RegistrationRoutingModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](RegistrationModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _registration_registration_component__WEBPACK_IMPORTED_MODULE_2__["RegistrationComponent"]
                ],
                imports: [
                    _registration_routing_module__WEBPACK_IMPORTED_MODULE_4__["RegistrationRoutingModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                ],
                providers: [
                    _guards_user_list_can_proceed_to_registration_guard__WEBPACK_IMPORTED_MODULE_6__["CanProceedToRegistrationGuard"],
                    _guards_user_list_can_leave_registration_guard__WEBPACK_IMPORTED_MODULE_5__["CanLeaveRegistrationGuard"]
                ],
                bootstrap: [_registration_registration_component__WEBPACK_IMPORTED_MODULE_2__["RegistrationComponent"]]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=registration-registration-module-es2015.js.map