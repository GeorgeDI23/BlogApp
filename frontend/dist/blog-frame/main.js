(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/gionas/Dev/week12/Full-Stack-Frontend/src/main.ts */"zUnb");


/***/ }),

/***/ "1W4x":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent, checkIfPasswordsEqual */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkIfPasswordsEqual", function() { return checkIfPasswordsEqual; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth.service */ "ccyI");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");








function RegisterComponent_div_18_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Username is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegisterComponent_div_18_div_1_Template, 2, 0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.userName.errors.required);
} }
function RegisterComponent_div_19_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Password is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegisterComponent_div_19_div_1_Template, 2, 0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.password1.errors.required);
} }
function RegisterComponent_div_20_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please enter password again for validation. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegisterComponent_div_20_div_1_Template, 2, 0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.password2.errors.required);
} }
function RegisterComponent_div_21_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Passwords do not match. Please try again. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegisterComponent_div_21_div_1_Template, 2, 0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.loginForm.errors.invalidPasswords);
} }
class RegisterComponent {
    constructor(formBuilder, http, router, authService) {
        this.formBuilder = formBuilder;
        this.http = http;
        this.router = router;
        this.authService = authService;
    }
    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            userName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            password1: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            password2: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        }, { validator: checkIfPasswordsEqual });
    }
    onClickSubmit() {
        if (this.loginForm.valid) {
            this.authService.createAuthProfile(this.loginForm.value.userName, this.loginForm.value.password1);
            this.router.navigate(['/home']);
        }
    }
    get userName() {
        return this.loginForm.get('userName');
    }
    get password1() {
        return this.loginForm.get('password1');
    }
    get password2() {
        return this.loginForm.get('password2');
    }
}
RegisterComponent.ɵfac = function RegisterComponent_Factory(t) { return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"])); };
RegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RegisterComponent, selectors: [["app-register"]], decls: 22, vars: 5, consts: [[1, "register"], [3, "formGroup", "ngSubmit"], ["type", "text", "formControlName", "userName", "required", ""], ["type", "password", "formControlName", "password1", "required", ""], ["type", "password", "formControlName", "password2", "required", ""], ["type", "submit", 1, "button"], ["class", "alert alert-danger", 4, "ngIf"], [1, "alert", "alert-danger"], [4, "ngIf"]], template: function RegisterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Input Your Login Information Below");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function RegisterComponent_Template_form_ngSubmit_3_listener() { return ctx.onClickSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " UserName: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Password: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Enter Password Again: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Create Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, RegisterComponent_div_18_Template, 2, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, RegisterComponent_div_19_Template, 2, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, RegisterComponent_div_20_Template, 2, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, RegisterComponent_div_21_Template, 2, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.loginForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userName.invalid && (ctx.userName.dirty || ctx.userName.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.password1.invalid && (ctx.password1.dirty || ctx.password1.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.password2.invalid && (ctx.password2.dirty || ctx.password2.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loginForm.invalid && (ctx.loginForm.dirty || ctx.loginForm.touched));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], styles: [".register[_ngcontent-%COMP%]{\n  margin-top:60px;\n}\ninput[_ngcontent-%COMP%]{\n  width: 100%;\n  padding: 12px 20px;\n  margin: 8px 0;\n  box-sizing: border-box;\n  border-radius: 4px;\n}\ninput[type=text][_ngcontent-%COMP%]:focus {\n  border: .75px solid #555;\n}\nbutton[_ngcontent-%COMP%] {\n  border: none;\n  padding: 8px 16px;\n  text-decoration: none;\n  margin: 4px 2px;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7QUFDakI7QUFDQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLHdCQUF3QjtBQUMxQjtBQUVBO0VBQ0UsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixxQkFBcUI7RUFDckIsZUFBZTtFQUNmLGVBQWU7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJlZ2lzdGVye1xuICBtYXJnaW4tdG9wOjYwcHg7XG59XG5pbnB1dHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDEycHggMjBweDtcbiAgbWFyZ2luOiA4cHggMDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuaW5wdXRbdHlwZT10ZXh0XTpmb2N1cyB7XG4gIGJvcmRlcjogLjc1cHggc29saWQgIzU1NTtcbn1cblxuYnV0dG9uIHtcbiAgYm9yZGVyOiBub25lO1xuICBwYWRkaW5nOiA4cHggMTZweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBtYXJnaW46IDRweCAycHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegisterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-register',
                templateUrl: './register.component.html',
                styleUrls: ['./register.component.css']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }]; }, null); })();
function checkIfPasswordsEqual(c) {
    if (!c.get('password1').value || !c.get('password2').value) {
        return null;
    }
    else {
        if (c.get('password1').value != c.get('password2').value) {
            return { invalidPasswords: true };
        }
    }
}


/***/ }),

/***/ "9vUh":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _posts_posts_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../posts/posts.component */ "JEYT");
/* harmony import */ var _tags_tags_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tags/tags.component */ "aJX1");





class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
    ngAfterViewInit() {
        this.child.getPosts();
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], viewQuery: function HomeComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_posts_posts_component__WEBPACK_IMPORTED_MODULE_1__["PostsComponent"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.child = _t.first);
    } }, decls: 4, vars: 0, consts: [[1, "tags"], [1, "container1"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-tags");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-posts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_tags_tags_component__WEBPACK_IMPORTED_MODULE_2__["TagsComponent"], _posts_posts_component__WEBPACK_IMPORTED_MODULE_1__["PostsComponent"]], styles: [".container1[_ngcontent-%COMP%] {\n  display: flex;\n  margin: 22px auto 12px;\n  padding: 0 16px;\n  max-width: 960px;\n  flex-direction: column;\n  align-items: center;\n}\n.tags[_ngcontent-%COMP%] {\n  margin: 22px auto 12px;\n  padding: 0 16px;\n  max-width: 960px;\n  flex-direction: row;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0Usc0JBQXNCO0VBQ3RCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLG1CQUFtQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lcjEge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW46IDIycHggYXV0byAxMnB4O1xuICBwYWRkaW5nOiAwIDE2cHg7XG4gIG1heC13aWR0aDogOTYwcHg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4udGFncyB7XG4gIG1hcmdpbjogMjJweCBhdXRvIDEycHg7XG4gIHBhZGRpbmc6IDAgMTZweDtcbiAgbWF4LXdpZHRoOiA5NjBweDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css']
            }]
    }], function () { return []; }, { child: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_posts_posts_component__WEBPACK_IMPORTED_MODULE_1__["PostsComponent"]]
        }] }); })();


/***/ }),

/***/ "AytR":
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
const environment = {
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

/***/ "GZck":
/*!**********************************!*\
  !*** ./src/app/markdown.pipe.ts ***!
  \**********************************/
/*! exports provided: MarkdownPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarkdownPipe", function() { return MarkdownPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var showdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! showdown */ "M55E");
/* harmony import */ var showdown__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(showdown__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var dompurify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dompurify */ "wMS7");
/* harmony import */ var dompurify__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dompurify__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");





class MarkdownPipe {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    transform(value) {
        var converter = new showdown__WEBPACK_IMPORTED_MODULE_1__["Converter"]();
        const htmlFromMarkdown = converter.makeHtml(value);
        const sanitizedHtml = dompurify__WEBPACK_IMPORTED_MODULE_2___default.a.sanitize(htmlFromMarkdown);
        return this.sanitizer.bypassSecurityTrustHtml(sanitizedHtml);
    }
}
MarkdownPipe.ɵfac = function MarkdownPipe_Factory(t) { return new (t || MarkdownPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"])); };
MarkdownPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "markdownTranslater", type: MarkdownPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MarkdownPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{ name: 'markdownTranslater' }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"] }]; }, null); })();


/***/ }),

/***/ "JEYT":
/*!******************************************!*\
  !*** ./src/app/posts/posts.component.ts ***!
  \******************************************/
/*! exports provided: PostsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsComponent", function() { return PostsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _post_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../post.service */ "fhD/");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _markdown_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../markdown.pipe */ "GZck");







function PostsComponent_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](11, "markdownTranslater");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const entry_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](entry_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" by user ", entry_r1.userName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" tagged: ", entry_r1.tag, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", entry_r1.postContent.imageData, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](11, 5, entry_r1.postContent.text), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
} }
class PostsComponent {
    constructor(postService, http) {
        this.postService = postService;
        this.http = http;
    }
    getPosts() {
        this.postService.getPosts().subscribe(post => this.post = post);
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.getPosts();
        });
    }
}
PostsComponent.ɵfac = function PostsComponent_Factory(t) { return new (t || PostsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_post_service__WEBPACK_IMPORTED_MODULE_2__["PostService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
PostsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PostsComponent, selectors: [["app-posts"]], decls: 2, vars: 1, consts: [[1, "posts"], [4, "ngFor", "ngForOf"], [1, "card"], [2, "float", "right"], [2, "text-align", "center"], [3, "src"], [3, "innerHTML"]], template: function PostsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ul", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, PostsComponent_li_1_Template, 12, 7, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.post.slice().reverse());
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], pipes: [_markdown_pipe__WEBPACK_IMPORTED_MODULE_5__["MarkdownPipe"]], styles: ["p[_ngcontent-%COMP%] {\n  font-family: Lato;\n}\n\nimg[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  border-radius: 50%;\n}\n\n.hoverable[_ngcontent-%COMP%]{\n  position: relative;\n  display: block;\n  cursor: pointer;\n  height: 200px;\n  width: 200px;\n  border: 5px solid #000;\n  border-radius: 50%;\n}\n\n.hoverable[_ngcontent-%COMP%]   .hover-text[_ngcontent-%COMP%]{\n  position: absolute;\n  display: none;\n  top: 50%;\n  left:  50%;\n  transform: translate(-50%,-50%);\n  z-index: 2;\n}\n\n.hoverable[_ngcontent-%COMP%]   .background[_ngcontent-%COMP%]{\n  position: absolute;\n  display: none;\n  top: 0;\n  left:  0;\n  bottom: 0;\n  right: 0;\n  background-color:rgba(255, 255, 255, 0.5);\n  pointer-events: none;\n  border-radius: 50%;\n  z-index: 1;\n}\n\n.hoverable[_ngcontent-%COMP%]:hover   .hover-text[_ngcontent-%COMP%]{\n  display: block;\n}\n\n.hoverable[_ngcontent-%COMP%]:hover   .background[_ngcontent-%COMP%]{\n  display: block;\n}\n\n#fileInput[_ngcontent-%COMP%]{\n  display: none;\n}\n\n.posts[_ngcontent-%COMP%] {\n    margin: 0 0 2em 0;\n    list-style-type: none;\n    padding: 0;\n    width: 50em;\n    border-width: 7px;\n    border-style: solid;\n    border-color: #1C6EA4;\n    border-radius: 4px;\n    background-color: #f1f1f1;\n    margin-top: -40px;\n  }\n\n.posts[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    position: relative;\n    \n    margin: .5em;\n    padding: .3em 0;\n    \n    border-width: 5px;\n    border-style: ridge;\n    border-color: #1C6EA4;\n}\n\n.card[_ngcontent-%COMP%] {\n  padding-top: 10px;\n  padding-right: 20px;\n  padding-bottom: 10px;\n  padding-left: 20px;\n}\n\nimg[_ngcontent-%COMP%] {\n    width: auto;\n    height: auto;\n    padding-right: 20px;\n    padding-left: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9zdHMvcG9zdHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLGtCQUFrQjtBQUNwQjs7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsZUFBZTtFQUNmLGFBQWE7RUFDYixZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLGtCQUFrQjtBQUNwQjs7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsUUFBUTtFQUNSLFVBQVU7RUFDViwrQkFBK0I7RUFDL0IsVUFBVTtBQUNaOztBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixNQUFNO0VBQ04sUUFBUTtFQUNSLFNBQVM7RUFDVCxRQUFRO0VBQ1IseUNBQXlDO0VBQ3pDLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsVUFBVTtBQUNaOztBQUNBO0VBQ0UsY0FBYztBQUNoQjs7QUFDQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIscUJBQXFCO0lBQ3JCLFVBQVU7SUFDVixXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixpQkFBaUI7RUFDbkI7O0FBQ0Y7SUFDSSxrQkFBa0I7SUFDbEIsMEJBQTBCO0lBQzFCLFlBQVk7SUFDWixlQUFlO0lBQ2Y7MEJBQ3NCO0lBQ3RCLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIscUJBQXFCO0FBQ3pCOztBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixvQkFBb0I7RUFDcEIsa0JBQWtCO0FBQ3BCOztBQUNBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvcG9zdHMvcG9zdHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxucCB7XG4gIGZvbnQtZmFtaWx5OiBMYXRvO1xufVxuXG5pbWcge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG4uaG92ZXJhYmxle1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGhlaWdodDogMjAwcHg7XG4gIHdpZHRoOiAyMDBweDtcbiAgYm9yZGVyOiA1cHggc29saWQgIzAwMDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuLmhvdmVyYWJsZSAuaG92ZXItdGV4dHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBkaXNwbGF5OiBub25lO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogIDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKTtcbiAgei1pbmRleDogMjtcbn1cbi5ob3ZlcmFibGUgLmJhY2tncm91bmR7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZGlzcGxheTogbm9uZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAgMDtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHotaW5kZXg6IDE7XG59XG4uaG92ZXJhYmxlOmhvdmVyIC5ob3Zlci10ZXh0e1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5ob3ZlcmFibGU6aG92ZXIgLmJhY2tncm91bmR7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4jZmlsZUlucHV0e1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4ucG9zdHMge1xuICAgIG1hcmdpbjogMCAwIDJlbSAwO1xuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICBwYWRkaW5nOiAwO1xuICAgIHdpZHRoOiA1MGVtO1xuICAgIGJvcmRlci13aWR0aDogN3B4O1xuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgYm9yZGVyLWNvbG9yOiAjMUM2RUE0O1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xuICAgIG1hcmdpbi10b3A6IC00MHB4O1xuICB9XG4ucG9zdHMgbGkge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAvKmJhY2tncm91bmQtY29sb3I6ICNFRUU7Ki9cbiAgICBtYXJnaW46IC41ZW07XG4gICAgcGFkZGluZzogLjNlbSAwO1xuICAgIC8qaGVpZ2h0OiAxLjZlbTtcbiAgICAvL2JvcmRlci1yYWRpdXM6IDRweDsqL1xuICAgIGJvcmRlci13aWR0aDogNXB4O1xuICAgIGJvcmRlci1zdHlsZTogcmlkZ2U7XG4gICAgYm9yZGVyLWNvbG9yOiAjMUM2RUE0O1xufVxuLmNhcmQge1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbn1cbmltZyB7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PostsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-posts',
                templateUrl: './posts.component.html',
                styleUrls: ['./posts.component.css']
            }]
    }], function () { return [{ type: _post_service__WEBPACK_IMPORTED_MODULE_2__["PostService"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "MOh7":
/*!************************************************!*\
  !*** ./src/app/tag-page/tag-page.component.ts ***!
  \************************************************/
/*! exports provided: TagPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagPageComponent", function() { return TagPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _tags_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tags.service */ "ffDJ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _markdown_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../markdown.pipe */ "GZck");





function TagPageComponent_li_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "markdownTranslater");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const post_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](post_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" by user ", post_r1.userName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" tagged: ", post_r1.tag, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", post_r1.postContent.imageData, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 5, post_r1.postContent.text), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
class TagPageComponent {
    constructor(tagService) {
        this.tagService = tagService;
    }
    ngOnInit() {
        this.tagService.change.subscribe(emitedValue => {
            this.postFromTag = emitedValue;
        });
    }
}
TagPageComponent.ɵfac = function TagPageComponent_Factory(t) { return new (t || TagPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_tags_service__WEBPACK_IMPORTED_MODULE_1__["TagsService"])); };
TagPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TagPageComponent, selectors: [["app-tag-page"]], decls: 5, vars: 1, consts: [[1, "container"], [1, "row"], [1, "col-xs-6", "col-sm-6", "col-md-6"], [1, "posttags"], [4, "ngFor", "ngForOf"], [1, "card"], [2, "float", "right"], [2, "text-align", "center"], [3, "src"], [3, "innerHTML"]], template: function TagPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TagPageComponent_li_4_Template, 12, 7, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.postFromTag);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], pipes: [_markdown_pipe__WEBPACK_IMPORTED_MODULE_3__["MarkdownPipe"]], styles: [".container[_ngcontent-%COMP%]{\n  margin-top:60px;\n}\n.posttags[_ngcontent-%COMP%] {\n  \n  list-style-type: none;\n  padding: 0;\n  width: 50em;\n  border-width: 7px;\n  border-style: solid;\n  border-color: #1C6EA4;\n  border-radius: 4px;\n  background-color: #f1f1f1;\n  margin-left: auto;\n  margin-right: auto;\n}\n.posttags[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  position: relative;\n  \n  margin: .5em;\n  padding: .3em 0;\n  \n  border-width: 5px;\n  border-style: ridge;\n  border-color: #1C6EA4;\n}\n.card[_ngcontent-%COMP%] {\npadding-top: 10px;\npadding-right: 20px;\npadding-bottom: 10px;\npadding-left: 20px;\n}\nimg[_ngcontent-%COMP%] {\n  width: auto;\n  height: auto;\n  padding-right: 20px;\n  padding-left: 20px;\n  border-radius: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFnLXBhZ2UvdGFnLXBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7QUFDakI7QUFDQTtFQUNFLHVCQUF1QjtFQUN2QixxQkFBcUI7RUFDckIsVUFBVTtFQUNWLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQiwwQkFBMEI7RUFDMUIsWUFBWTtFQUNaLGVBQWU7RUFDZjt3QkFDc0I7RUFDdEIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixxQkFBcUI7QUFDdkI7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixtQkFBbUI7QUFDbkIsb0JBQW9CO0FBQ3BCLGtCQUFrQjtBQUNsQjtBQUNBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL3RhZy1wYWdlL3RhZy1wYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVye1xuICBtYXJnaW4tdG9wOjYwcHg7XG59XG4ucG9zdHRhZ3Mge1xuICAvKiBtYXJnaW46IDAgMCAyZW0gMDsgKi9cbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICBwYWRkaW5nOiAwO1xuICB3aWR0aDogNTBlbTtcbiAgYm9yZGVyLXdpZHRoOiA3cHg7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci1jb2xvcjogIzFDNkVBNDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuLnBvc3R0YWdzIGxpIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAvKmJhY2tncm91bmQtY29sb3I6ICNFRUU7Ki9cbiAgbWFyZ2luOiAuNWVtO1xuICBwYWRkaW5nOiAuM2VtIDA7XG4gIC8qaGVpZ2h0OiAxLjZlbTtcbiAgLy9ib3JkZXItcmFkaXVzOiA0cHg7Ki9cbiAgYm9yZGVyLXdpZHRoOiA1cHg7XG4gIGJvcmRlci1zdHlsZTogcmlkZ2U7XG4gIGJvcmRlci1jb2xvcjogIzFDNkVBNDtcbn1cbi5jYXJkIHtcbnBhZGRpbmctdG9wOiAxMHB4O1xucGFkZGluZy1yaWdodDogMjBweDtcbnBhZGRpbmctYm90dG9tOiAxMHB4O1xucGFkZGluZy1sZWZ0OiAyMHB4O1xufVxuaW1nIHtcbiAgd2lkdGg6IGF1dG87XG4gIGhlaWdodDogYXV0bztcbiAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TagPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-tag-page',
                templateUrl: './tag-page.component.html',
                styleUrls: ['./tag-page.component.css']
            }]
    }], function () { return [{ type: _tags_service__WEBPACK_IMPORTED_MODULE_1__["TagsService"] }]; }, null); })();


/***/ }),

/***/ "RnhZ":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "K/tc",
	"./af.js": "K/tc",
	"./ar": "jnO4",
	"./ar-dz": "o1bE",
	"./ar-dz.js": "o1bE",
	"./ar-kw": "Qj4J",
	"./ar-kw.js": "Qj4J",
	"./ar-ly": "HP3h",
	"./ar-ly.js": "HP3h",
	"./ar-ma": "CoRJ",
	"./ar-ma.js": "CoRJ",
	"./ar-sa": "gjCT",
	"./ar-sa.js": "gjCT",
	"./ar-tn": "bYM6",
	"./ar-tn.js": "bYM6",
	"./ar.js": "jnO4",
	"./az": "SFxW",
	"./az.js": "SFxW",
	"./be": "H8ED",
	"./be.js": "H8ED",
	"./bg": "hKrs",
	"./bg.js": "hKrs",
	"./bm": "p/rL",
	"./bm.js": "p/rL",
	"./bn": "kEOa",
	"./bn.js": "kEOa",
	"./bo": "0mo+",
	"./bo.js": "0mo+",
	"./br": "aIdf",
	"./br.js": "aIdf",
	"./bs": "JVSJ",
	"./bs.js": "JVSJ",
	"./ca": "1xZ4",
	"./ca.js": "1xZ4",
	"./cs": "PA2r",
	"./cs.js": "PA2r",
	"./cv": "A+xa",
	"./cv.js": "A+xa",
	"./cy": "l5ep",
	"./cy.js": "l5ep",
	"./da": "DxQv",
	"./da.js": "DxQv",
	"./de": "tGlX",
	"./de-at": "s+uk",
	"./de-at.js": "s+uk",
	"./de-ch": "u3GI",
	"./de-ch.js": "u3GI",
	"./de.js": "tGlX",
	"./dv": "WYrj",
	"./dv.js": "WYrj",
	"./el": "jUeY",
	"./el.js": "jUeY",
	"./en-au": "Dmvi",
	"./en-au.js": "Dmvi",
	"./en-ca": "OIYi",
	"./en-ca.js": "OIYi",
	"./en-gb": "Oaa7",
	"./en-gb.js": "Oaa7",
	"./en-ie": "4dOw",
	"./en-ie.js": "4dOw",
	"./en-il": "czMo",
	"./en-il.js": "czMo",
	"./en-in": "7C5Q",
	"./en-in.js": "7C5Q",
	"./en-nz": "b1Dy",
	"./en-nz.js": "b1Dy",
	"./en-sg": "t+mt",
	"./en-sg.js": "t+mt",
	"./eo": "Zduo",
	"./eo.js": "Zduo",
	"./es": "iYuL",
	"./es-do": "CjzT",
	"./es-do.js": "CjzT",
	"./es-us": "Vclq",
	"./es-us.js": "Vclq",
	"./es.js": "iYuL",
	"./et": "7BjC",
	"./et.js": "7BjC",
	"./eu": "D/JM",
	"./eu.js": "D/JM",
	"./fa": "jfSC",
	"./fa.js": "jfSC",
	"./fi": "gekB",
	"./fi.js": "gekB",
	"./fil": "1ppg",
	"./fil.js": "1ppg",
	"./fo": "ByF4",
	"./fo.js": "ByF4",
	"./fr": "nyYc",
	"./fr-ca": "2fjn",
	"./fr-ca.js": "2fjn",
	"./fr-ch": "Dkky",
	"./fr-ch.js": "Dkky",
	"./fr.js": "nyYc",
	"./fy": "cRix",
	"./fy.js": "cRix",
	"./ga": "USCx",
	"./ga.js": "USCx",
	"./gd": "9rRi",
	"./gd.js": "9rRi",
	"./gl": "iEDd",
	"./gl.js": "iEDd",
	"./gom-deva": "qvJo",
	"./gom-deva.js": "qvJo",
	"./gom-latn": "DKr+",
	"./gom-latn.js": "DKr+",
	"./gu": "4MV3",
	"./gu.js": "4MV3",
	"./he": "x6pH",
	"./he.js": "x6pH",
	"./hi": "3E1r",
	"./hi.js": "3E1r",
	"./hr": "S6ln",
	"./hr.js": "S6ln",
	"./hu": "WxRl",
	"./hu.js": "WxRl",
	"./hy-am": "1rYy",
	"./hy-am.js": "1rYy",
	"./id": "UDhR",
	"./id.js": "UDhR",
	"./is": "BVg3",
	"./is.js": "BVg3",
	"./it": "bpih",
	"./it-ch": "bxKX",
	"./it-ch.js": "bxKX",
	"./it.js": "bpih",
	"./ja": "B55N",
	"./ja.js": "B55N",
	"./jv": "tUCv",
	"./jv.js": "tUCv",
	"./ka": "IBtZ",
	"./ka.js": "IBtZ",
	"./kk": "bXm7",
	"./kk.js": "bXm7",
	"./km": "6B0Y",
	"./km.js": "6B0Y",
	"./kn": "PpIw",
	"./kn.js": "PpIw",
	"./ko": "Ivi+",
	"./ko.js": "Ivi+",
	"./ku": "JCF/",
	"./ku.js": "JCF/",
	"./ky": "lgnt",
	"./ky.js": "lgnt",
	"./lb": "RAwQ",
	"./lb.js": "RAwQ",
	"./lo": "sp3z",
	"./lo.js": "sp3z",
	"./lt": "JvlW",
	"./lt.js": "JvlW",
	"./lv": "uXwI",
	"./lv.js": "uXwI",
	"./me": "KTz0",
	"./me.js": "KTz0",
	"./mi": "aIsn",
	"./mi.js": "aIsn",
	"./mk": "aQkU",
	"./mk.js": "aQkU",
	"./ml": "AvvY",
	"./ml.js": "AvvY",
	"./mn": "lYtQ",
	"./mn.js": "lYtQ",
	"./mr": "Ob0Z",
	"./mr.js": "Ob0Z",
	"./ms": "6+QB",
	"./ms-my": "ZAMP",
	"./ms-my.js": "ZAMP",
	"./ms.js": "6+QB",
	"./mt": "G0Uy",
	"./mt.js": "G0Uy",
	"./my": "honF",
	"./my.js": "honF",
	"./nb": "bOMt",
	"./nb.js": "bOMt",
	"./ne": "OjkT",
	"./ne.js": "OjkT",
	"./nl": "+s0g",
	"./nl-be": "2ykv",
	"./nl-be.js": "2ykv",
	"./nl.js": "+s0g",
	"./nn": "uEye",
	"./nn.js": "uEye",
	"./oc-lnc": "Fnuy",
	"./oc-lnc.js": "Fnuy",
	"./pa-in": "8/+R",
	"./pa-in.js": "8/+R",
	"./pl": "jVdC",
	"./pl.js": "jVdC",
	"./pt": "8mBD",
	"./pt-br": "0tRk",
	"./pt-br.js": "0tRk",
	"./pt.js": "8mBD",
	"./ro": "lyxo",
	"./ro.js": "lyxo",
	"./ru": "lXzo",
	"./ru.js": "lXzo",
	"./sd": "Z4QM",
	"./sd.js": "Z4QM",
	"./se": "//9w",
	"./se.js": "//9w",
	"./si": "7aV9",
	"./si.js": "7aV9",
	"./sk": "e+ae",
	"./sk.js": "e+ae",
	"./sl": "gVVK",
	"./sl.js": "gVVK",
	"./sq": "yPMs",
	"./sq.js": "yPMs",
	"./sr": "zx6S",
	"./sr-cyrl": "E+lV",
	"./sr-cyrl.js": "E+lV",
	"./sr.js": "zx6S",
	"./ss": "Ur1D",
	"./ss.js": "Ur1D",
	"./sv": "X709",
	"./sv.js": "X709",
	"./sw": "dNwA",
	"./sw.js": "dNwA",
	"./ta": "PeUW",
	"./ta.js": "PeUW",
	"./te": "XLvN",
	"./te.js": "XLvN",
	"./tet": "V2x9",
	"./tet.js": "V2x9",
	"./tg": "Oxv6",
	"./tg.js": "Oxv6",
	"./th": "EOgW",
	"./th.js": "EOgW",
	"./tk": "Wv91",
	"./tk.js": "Wv91",
	"./tl-ph": "Dzi0",
	"./tl-ph.js": "Dzi0",
	"./tlh": "z3Vd",
	"./tlh.js": "z3Vd",
	"./tr": "DoHr",
	"./tr.js": "DoHr",
	"./tzl": "z1FC",
	"./tzl.js": "z1FC",
	"./tzm": "wQk9",
	"./tzm-latn": "tT3J",
	"./tzm-latn.js": "tT3J",
	"./tzm.js": "wQk9",
	"./ug-cn": "YRex",
	"./ug-cn.js": "YRex",
	"./uk": "raLr",
	"./uk.js": "raLr",
	"./ur": "UpQW",
	"./ur.js": "UpQW",
	"./uz": "Loxo",
	"./uz-latn": "AQ68",
	"./uz-latn.js": "AQ68",
	"./uz.js": "Loxo",
	"./vi": "KSF8",
	"./vi.js": "KSF8",
	"./x-pseudo": "/X5v",
	"./x-pseudo.js": "/X5v",
	"./yo": "fzPg",
	"./yo.js": "fzPg",
	"./zh-cn": "XDpg",
	"./zh-cn.js": "XDpg",
	"./zh-hk": "SatO",
	"./zh-hk.js": "SatO",
	"./zh-mo": "OmwH",
	"./zh-mo.js": "OmwH",
	"./zh-tw": "kOpN",
	"./zh-tw.js": "kOpN"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "RnhZ";

/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ "ccyI");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class AppComponent {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
        this.title = 'Pigeonhole Blog';
    }
    logout() {
        this.authService.logout();
        this.router.navigate(['/home']);
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 30, vars: 0, consts: [["role", "banner", 1, "toolbar"], [1, "pigeon"], [1, "spacer"], [1, "subtitle"], [1, "subtoolbar"], [1, "navbar"], ["routerLink", "/home"], ["routerLink", "/newpost"], ["routerLink", "/login"], ["routerLink", "/profile"], ["routerLink", "/register"], ["role", "button", 3, "click"], ["role", "main", 1, "content"], ["href", "https://github.com/GeorgeDI23/BlogApp", 1, "link"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Pigeonholed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " a blog born from trial and error");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "New Blog Post");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Register New User");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_a_click_20_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Checkout The Github Page:\u00A0\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "GitHub\u00A0\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["[_nghost-%COMP%] {\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n  font-size: 14px;\n  color: #333;\n  box-sizing: border-box;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {\n  margin: 8px 0;\n}\n\np[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.spacer[_ngcontent-%COMP%] {\n  flex: 1;\n}\n\n.pigeon[_ngcontent-%COMP%]{\n  background-image: url('pigeonCrop.png');\n  width:75px;\n  height: 35px;\n  padding: 0px 10px 0px -20px;\n}\n\n.subtitle[_ngcontent-%COMP%]{\n  font-size:20px;\n\n}\n\n.toolbar[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 5;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 60px;\n  min-width: 830px;\n  display: flex;\n  align-items: center;\n  background-image: linear-gradient(#196ABB, #437db8);\n  color: #FCF8E7;\n  font-weight: 900;\n  font-size: 40px;\n  padding:0 10px;\n  box-shadow: 0 1px 1px rgba(44, 42, 150, 0.486),\n  0 2px 2px rgba(0,0,0,0.15),\n  0 3px 3px rgba(0,0,0,0.15),\n  0 4px 4px rgba(0,0,0,0.15);\n}\n\n.toolbar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin: 0 16px;\n}\n\n.subtoolbar[_ngcontent-%COMP%]{\n  left:0;\n  position: sticky;\n  background-image: linear-gradient(#196ABB, #437db8);\n  display: flex;\n  margin-top: 60px;\n  height: 37px;\n  width: 100%;\n  min-width: 830px;\n  box-shadow: 0 1px 1px rgba(0,0,0,0.15),\n              0 2px 2px rgba(0,0,0,0.15),\n              0 3px 3px rgba(0,0,0,0.15),\n              0 5px 5px rgba(0,0,0,0.15);\n}\n\n.content[_ngcontent-%COMP%] {\n  display: flex;\n  margin: -70px auto 32px;\n  max-width: 960px;\n  flex-direction: column;\n  align-items: center;\n}\n\nsvg.material-icons[_ngcontent-%COMP%] {\n  height: 24px;\n  width: auto;\n}\n\nsvg.material-icons[_ngcontent-%COMP%]:not(:last-child) {\n  margin-right: 8px;\n}\n\na[_ngcontent-%COMP%], a[_ngcontent-%COMP%]:visited, a[_ngcontent-%COMP%]:hover {\n  color: #1976d2;\n  text-decoration: none;\n}\n\na[_ngcontent-%COMP%]:hover {\n  color: #125699;\n}\n\nfooter[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  display: flex;\n  align-items: right;\n  line-height: 50px;\n  color:#FCF8E7;\n  background-image: linear-gradient(#196ABB, #0b3866);\n}\n\n.pigeontracks[_ngcontent-%COMP%]{\n  background-image: url('track.png');\n  width:150px;\n  height: 35px;\n  padding: 0px 10px 0px -20px;\n}\n\nfooter[_ngcontent-%COMP%]   a.link[_ngcontent-%COMP%]{\n  color:#FCF8E7;\n  margin: 8px 0;\n  font-style: italic;\n}\n\n.navbar[_ngcontent-%COMP%]{\n  position:sticky;\n  min-width: 830px;\n  margin-top:-40px;\n  margin-bottom: 40px;\n  margin-left: 10px;\n}\n\na[role='button'][_ngcontent-%COMP%]{\n  color: #334953;\n  text-decoration: none;\n  cursor:pointer;\n}\n\nnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\npadding: 5px 30px;\ntext-decoration: none;\nmargin-top: 10px;\nmargin-right: 7px;\ndisplay: inline-block;\nbackground-color: #eee;\nborder-radius: 4px;\n}\n\nnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:visited, a[_ngcontent-%COMP%]:link{\ncolor: #334953;\n}\n\nnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\ncolor: #039be5;\nbackground-color: #cfd8dc;\n}\n\nnav[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\ncolor: #039be5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwwSkFBMEo7RUFDMUosZUFBZTtFQUNmLFdBQVc7RUFDWCxzQkFBc0I7RUFDdEIsbUNBQW1DO0VBQ25DLGtDQUFrQztBQUNwQzs7QUFFQTs7Ozs7O0VBTUUsYUFBYTtBQUNmOztBQUVBO0VBQ0UsU0FBUztBQUNYOztBQUVBO0VBQ0UsT0FBTztBQUNUOztBQUVBO0VBQ0UsdUNBQStDO0VBQy9DLFVBQVU7RUFDVixZQUFZO0VBQ1osMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsY0FBYzs7QUFFaEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLE1BQU07RUFDTixPQUFPO0VBQ1AsUUFBUTtFQUNSLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixtREFBbUQ7RUFDbkQsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsY0FBYztFQUNkOzs7NEJBRzBCO0FBQzVCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLE1BQU07RUFDTixnQkFBZ0I7RUFDaEIsbURBQW1EO0VBQ25ELGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEI7Ozt3Q0FHc0M7QUFDeEM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTs7O0VBR0UsY0FBYztFQUNkLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsYUFBYTtFQUNiLG1EQUFtRDtBQUNyRDs7QUFFQTtFQUNFLGtDQUEwQztFQUMxQyxXQUFXO0VBQ1gsWUFBWTtFQUNaLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixhQUFhO0VBQ2Isa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxxQkFBcUI7RUFDckIsY0FBYztBQUNoQjs7QUFFQTtBQUNBLGlCQUFpQjtBQUNqQixxQkFBcUI7QUFDckIsZ0JBQWdCO0FBQ2hCLGlCQUFpQjtBQUNqQixxQkFBcUI7QUFDckIsc0JBQXNCO0FBQ3RCLGtCQUFrQjtBQUNsQjs7QUFDQTtBQUNBLGNBQWM7QUFDZDs7QUFDQTtBQUNBLGNBQWM7QUFDZCx5QkFBeUI7QUFDekI7O0FBQ0E7QUFDQSxjQUFjO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWYsIFwiQXBwbGUgQ29sb3IgRW1vamlcIiwgXCJTZWdvZSBVSSBFbW9qaVwiLCBcIlNlZ29lIFVJIFN5bWJvbFwiO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjMzMzO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbn1cblxuaDEsXG5oMixcbmgzLFxuaDQsXG5oNSxcbmg2IHtcbiAgbWFyZ2luOiA4cHggMDtcbn1cblxucCB7XG4gIG1hcmdpbjogMDtcbn1cblxuLnNwYWNlciB7XG4gIGZsZXg6IDE7XG59XG5cbi5waWdlb257XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi9hc3NldHMvcGlnZW9uQ3JvcC5wbmcpO1xuICB3aWR0aDo3NXB4O1xuICBoZWlnaHQ6IDM1cHg7XG4gIHBhZGRpbmc6IDBweCAxMHB4IDBweCAtMjBweDtcbn1cblxuLnN1YnRpdGxle1xuICBmb250LXNpemU6MjBweDtcblxufVxuXG4udG9vbGJhciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogNTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgaGVpZ2h0OiA2MHB4O1xuICBtaW4td2lkdGg6IDgzMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoIzE5NkFCQiwgIzQzN2RiOCk7XG4gIGNvbG9yOiAjRkNGOEU3O1xuICBmb250LXdlaWdodDogOTAwO1xuICBmb250LXNpemU6IDQwcHg7XG4gIHBhZGRpbmc6MCAxMHB4O1xuICBib3gtc2hhZG93OiAwIDFweCAxcHggcmdiYSg0NCwgNDIsIDE1MCwgMC40ODYpLFxuICAwIDJweCAycHggcmdiYSgwLDAsMCwwLjE1KSxcbiAgMCAzcHggM3B4IHJnYmEoMCwwLDAsMC4xNSksXG4gIDAgNHB4IDRweCByZ2JhKDAsMCwwLDAuMTUpO1xufVxuXG4udG9vbGJhciBpbWcge1xuICBtYXJnaW46IDAgMTZweDtcbn1cblxuLnN1YnRvb2xiYXJ7XG4gIGxlZnQ6MDtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KCMxOTZBQkIsICM0MzdkYjgpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW4tdG9wOiA2MHB4O1xuICBoZWlnaHQ6IDM3cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBtaW4td2lkdGg6IDgzMHB4O1xuICBib3gtc2hhZG93OiAwIDFweCAxcHggcmdiYSgwLDAsMCwwLjE1KSxcbiAgICAgICAgICAgICAgMCAycHggMnB4IHJnYmEoMCwwLDAsMC4xNSksXG4gICAgICAgICAgICAgIDAgM3B4IDNweCByZ2JhKDAsMCwwLDAuMTUpLFxuICAgICAgICAgICAgICAwIDVweCA1cHggcmdiYSgwLDAsMCwwLjE1KTtcbn1cblxuLmNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW46IC03MHB4IGF1dG8gMzJweDtcbiAgbWF4LXdpZHRoOiA5NjBweDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuc3ZnLm1hdGVyaWFsLWljb25zIHtcbiAgaGVpZ2h0OiAyNHB4O1xuICB3aWR0aDogYXV0bztcbn1cblxuc3ZnLm1hdGVyaWFsLWljb25zOm5vdCg6bGFzdC1jaGlsZCkge1xuICBtYXJnaW4tcmlnaHQ6IDhweDtcbn1cblxuYSxcbmE6dmlzaXRlZCxcbmE6aG92ZXIge1xuICBjb2xvcjogIzE5NzZkMjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG5hOmhvdmVyIHtcbiAgY29sb3I6ICMxMjU2OTk7XG59XG5cbmZvb3RlciB7XG4gIG1hcmdpbi10b3A6IDhweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IHJpZ2h0O1xuICBsaW5lLWhlaWdodDogNTBweDtcbiAgY29sb3I6I0ZDRjhFNztcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KCMxOTZBQkIsICMwYjM4NjYpO1xufVxuXG4ucGlnZW9udHJhY2tze1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vYXNzZXRzL3RyYWNrLnBuZyk7XG4gIHdpZHRoOjE1MHB4O1xuICBoZWlnaHQ6IDM1cHg7XG4gIHBhZGRpbmc6IDBweCAxMHB4IDBweCAtMjBweDtcbn1cblxuZm9vdGVyIGEubGlua3tcbiAgY29sb3I6I0ZDRjhFNztcbiAgbWFyZ2luOiA4cHggMDtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuXG4ubmF2YmFye1xuICBwb3NpdGlvbjpzdGlja3k7XG4gIG1pbi13aWR0aDogODMwcHg7XG4gIG1hcmdpbi10b3A6LTQwcHg7XG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuXG5hW3JvbGU9J2J1dHRvbidde1xuICBjb2xvcjogIzMzNDk1MztcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjdXJzb3I6cG9pbnRlcjtcbn1cblxubmF2IGEge1xucGFkZGluZzogNXB4IDMwcHg7XG50ZXh0LWRlY29yYXRpb246IG5vbmU7XG5tYXJnaW4tdG9wOiAxMHB4O1xubWFyZ2luLXJpZ2h0OiA3cHg7XG5kaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5iYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xuYm9yZGVyLXJhZGl1czogNHB4O1xufVxubmF2IGE6dmlzaXRlZCwgYTpsaW5re1xuY29sb3I6ICMzMzQ5NTM7XG59XG5uYXYgYTpob3ZlciB7XG5jb2xvcjogIzAzOWJlNTtcbmJhY2tncm91bmQtY29sb3I6ICNjZmQ4ZGM7XG59XG5uYXYgYS5hY3RpdmUge1xuY29sb3I6ICMwMzliZTU7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return [{ type: _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "W6KJ":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _profile_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../profile.service */ "oWCI");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../auth.service */ "ccyI");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");










function ProfileComponent_button_8_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProfileComponent_button_8_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r1.delete(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("hidden", ctx_r0.isReadOnly);
} }
class ProfileComponent {
    constructor(location, domSanitizer, profileService, http, authService, router) {
        this.location = location;
        this.domSanitizer = domSanitizer;
        this.profileService = profileService;
        this.http = http;
        this.authService = authService;
        this.router = router;
        this.firstName = '';
        this.lastName = '';
        this.userName = '';
        this.base64Image = " ";
        this.profile = {};
        this.loggedInUserName = '';
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.authService.isLoggedOut()) {
                this.router.navigate(['/login']);
            }
            this.loggedInUserName = sessionStorage.getItem("username");
            this.getProfile();
        });
    }
    onSelectFile(event) {
        if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();
            reader.readAsDataURL(event.target.files[0]);
            reader.onload = (event) => {
                this.base64Image = event.target.result;
            };
        }
    }
    delete() {
        this.base64Image = null;
    }
    onSave() {
        this.postProfile();
        this.isReadOnly = true;
    }
    goBack() {
        this.location.back();
    }
    postProfile() {
        this.profileService.postProfile({
            firstName: this.firstName,
            lastName: this.lastName,
            userName: this.loggedInUserName,
            profileImageData: this.base64Image
        }).subscribe(profile => this.profile = profile);
    }
    getProfile() {
        this.profileService.getProfile(this.loggedInUserName)
            .subscribe(profile => {
            this.firstName = profile.firstName;
            this.lastName = profile.lastName;
            this.base64Image = profile.profileImageData;
        });
        if (this.profile.firstName == "") {
            this.isReadOnly = false;
        }
    }
}
ProfileComponent.ɵfac = function ProfileComponent_Factory(t) { return new (t || ProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_profile_service__WEBPACK_IMPORTED_MODULE_4__["ProfileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"])); };
ProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ProfileComponent, selectors: [["app-profile"]], inputs: { model: "model" }, decls: 24, vars: 8, consts: [[1, "profile"], ["for", "fileInput", 1, "hoverable"], [3, "src"], [1, "hover-text"], [1, "background"], ["id", "fileInput", "type", "file", 3, "change"], [3, "hidden", "click", 4, "ngIf"], [1, "container"], [1, "column"], [1, "x12"], ["type", "text", 1, "form-control", 3, "readonly", "ngModel", "ngModelChange"], [1, "btn", "btn-primary", 3, "disabled", "hidden", "click"], [3, "click"], [3, "hidden", "click"]], template: function ProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Choose file");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function ProfileComponent_Template_input_change_7_listener($event) { return ctx.onSelectFile($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, ProfileComponent_button_8_Template, 2, 1, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "First Name:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ProfileComponent_Template_input_ngModelChange_14_listener($event) { return ctx.firstName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Last Name:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ProfileComponent_Template_input_ngModelChange_18_listener($event) { return ctx.lastName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProfileComponent_Template_button_click_20_listener() { return ctx.onSave(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Save Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProfileComponent_Template_button_click_22_listener() { return ctx.goBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "go back");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx.base64Image ? ctx.base64Image : "https://www.w3schools.com/howto/img_avatar.png", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.base64Image);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("readonly", ctx.isReadOnly);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.firstName);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("readonly", ctx.isReadOnly);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.lastName);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("hidden", ctx.isReadOnly);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.firstName === "" || ctx.lastName === "");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"]], styles: [".profile[_ngcontent-%COMP%]{\n  margin-top:60px;\n}\n\np[_ngcontent-%COMP%] {\n  font-family: Lato;\n}\n\nimg[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  border-radius: 50%;\n}\n\n.hoverable[_ngcontent-%COMP%]{\n  position: relative;\n  display: block;\n  cursor: pointer;\n  height: 200px;\n  width: 200px;\n  border: 5px solid #000;\n  border-radius: 50%;\n}\n\n.hoverable[_ngcontent-%COMP%]   .hover-text[_ngcontent-%COMP%]{\n  position: absolute;\n  display: none;\n  top: 50%;\n  left:  50%;\n  transform: translate(-50%,-50%);\n  z-index: 2;\n}\n\n.hoverable[_ngcontent-%COMP%]   .background[_ngcontent-%COMP%]{\n  position: absolute;\n  display: none;\n  top: 0;\n  left:  0;\n  bottom: 0;\n  right: 0;\n  background-color:rgba(255, 255, 255, 0.5);\n  pointer-events: none;\n  border-radius: 50%;\n  z-index: 1;\n}\n\n.hoverable[_ngcontent-%COMP%]:hover   .hover-text[_ngcontent-%COMP%]{\n  display: block;\n}\n\n.hoverable[_ngcontent-%COMP%]:hover   .background[_ngcontent-%COMP%]{\n  display: block;\n}\n\n#fileInput[_ngcontent-%COMP%]{\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxrQkFBa0I7QUFDcEI7O0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGVBQWU7RUFDZixhQUFhO0VBQ2IsWUFBWTtFQUNaLHNCQUFzQjtFQUN0QixrQkFBa0I7QUFDcEI7O0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLFFBQVE7RUFDUixVQUFVO0VBQ1YsK0JBQStCO0VBQy9CLFVBQVU7QUFDWjs7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsTUFBTTtFQUNOLFFBQVE7RUFDUixTQUFTO0VBQ1QsUUFBUTtFQUNSLHlDQUF5QztFQUN6QyxvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLFVBQVU7QUFDWjs7QUFDQTtFQUNFLGNBQWM7QUFDaEI7O0FBQ0E7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsYUFBYTtBQUNmIiwiZmlsZSI6InNyYy9hcHAvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZmlsZXtcbiAgbWFyZ2luLXRvcDo2MHB4O1xufVxuXG5wIHtcbiAgZm9udC1mYW1pbHk6IExhdG87XG59XG5cbmltZyB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cbi5ob3ZlcmFibGV7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgd2lkdGg6IDIwMHB4O1xuICBib3JkZXI6IDVweCBzb2xpZCAjMDAwO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG4uaG92ZXJhYmxlIC5ob3Zlci10ZXh0e1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiAgNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpO1xuICB6LWluZGV4OiAyO1xufVxuLmhvdmVyYWJsZSAuYmFja2dyb3VuZHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBkaXNwbGF5OiBub25lO1xuICB0b3A6IDA7XG4gIGxlZnQ6ICAwO1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgei1pbmRleDogMTtcbn1cbi5ob3ZlcmFibGU6aG92ZXIgLmhvdmVyLXRleHR7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLmhvdmVyYWJsZTpob3ZlciAuYmFja2dyb3VuZHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbiNmaWxlSW5wdXR7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-profile',
                inputs: ['model'],
                templateUrl: './profile.component.html',
                styleUrls: ['./profile.component.css']
            }]
    }], function () { return [{ type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"] }, { type: _profile_service__WEBPACK_IMPORTED_MODULE_4__["ProfileService"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] }, { type: _auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }]; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _posts_posts_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./posts/posts.component */ "JEYT");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./profile/profile.component */ "W6KJ");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _markdown_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./markdown.pipe */ "GZck");
/* harmony import */ var _new_post_new_post_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./new-post/new-post.component */ "nEq3");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./login/login.component */ "vtpD");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./register/register.component */ "1W4x");
/* harmony import */ var _tags_tags_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./tags/tags.component */ "aJX1");
/* harmony import */ var _tag_page_tag_page_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./tag-page/tag-page.component */ "MOh7");

















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _posts_posts_component__WEBPACK_IMPORTED_MODULE_5__["PostsComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
        _profile_profile_component__WEBPACK_IMPORTED_MODULE_7__["ProfileComponent"],
        _markdown_pipe__WEBPACK_IMPORTED_MODULE_9__["MarkdownPipe"],
        _new_post_new_post_component__WEBPACK_IMPORTED_MODULE_10__["NewPostComponent"],
        _login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"],
        _register_register_component__WEBPACK_IMPORTED_MODULE_12__["RegisterComponent"],
        _tags_tags_component__WEBPACK_IMPORTED_MODULE_13__["TagsComponent"],
        _tag_page_tag_page_component__WEBPACK_IMPORTED_MODULE_14__["TagPageComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _posts_posts_component__WEBPACK_IMPORTED_MODULE_5__["PostsComponent"],
                    _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                    _profile_profile_component__WEBPACK_IMPORTED_MODULE_7__["ProfileComponent"],
                    _markdown_pipe__WEBPACK_IMPORTED_MODULE_9__["MarkdownPipe"],
                    _new_post_new_post_component__WEBPACK_IMPORTED_MODULE_10__["NewPostComponent"],
                    _login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"],
                    _register_register_component__WEBPACK_IMPORTED_MODULE_12__["RegisterComponent"],
                    _tags_tags_component__WEBPACK_IMPORTED_MODULE_13__["TagsComponent"],
                    _tag_page_tag_page_component__WEBPACK_IMPORTED_MODULE_14__["TagPageComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "aJX1":
/*!****************************************!*\
  !*** ./src/app/tags/tags.component.ts ***!
  \****************************************/
/*! exports provided: TagsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagsComponent", function() { return TagsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _tags_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tags.service */ "ffDJ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





function TagsComponent_li_3_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TagsComponent_li_3_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const tag_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.onSelect(tag_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tag_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("selected", tag_r1 === ctx_r0.selectedTag);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", tag_r1, " ");
} }
class TagsComponent {
    constructor(tagsService, router) {
        this.tagsService = tagsService;
        this.router = router;
        this.base64Image = '';
    }
    ngOnInit() {
        this.getPopularTags();
    }
    getPopularTags() {
        this.tagsService.getPopularTags().subscribe(tag => {
            this.tags = tag;
        });
    }
    onSelect(tag) {
        this.selectedTag = tag;
        this.tagsService.getByTagName(tag).subscribe(post => {
            this.postsbyTag = post;
            this.tagsService.sendPostToTagsPage(this.postsbyTag);
        });
        this.router.navigate(['/tag-page']);
    }
}
TagsComponent.ɵfac = function TagsComponent_Factory(t) { return new (t || TagsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_tags_service__WEBPACK_IMPORTED_MODULE_1__["TagsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
TagsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TagsComponent, selectors: [["app-tags"]], decls: 4, vars: 1, consts: [[1, "tags"], [3, "selected", "click", 4, "ngFor", "ngForOf"], [3, "click"]], template: function TagsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Tags");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TagsComponent_li_3_Template, 2, 3, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.tags);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], styles: ["h2[_ngcontent-%COMP%]{\n  margin-top:40px;\n  text-align: left;\n  margin-left: -35px;\n}\n.tags[_ngcontent-%COMP%] {\n  list-style-type: none;\n  padding: 0;\n  width: 15em;\n  float: left;\n  \n  margin-left: -80px;\n  text-align: center;\n  margin-top:-10px\n}\n.tags[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{\n  padding: 0%;\n  margin-left: -80px;\n}\n.tags[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  cursor: pointer;\n  position: relative;\n  left: 0;\n  background-color: #EEE;\n  margin: .5em;\n  padding: .5em 0;\n  height: 1.6em;\n  border-radius: 4px;\n  margin-right: 80px;\n\n}\n.tags[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n  color: #607D8B;\n  background-color: #DDD;\n  left: .1em;\n}\n.tags[_ngcontent-%COMP%]   li.selected[_ngcontent-%COMP%] {\n  background-color: #CFD8DC;\n  color: white;\n}\n.tags[_ngcontent-%COMP%]   li.selected[_ngcontent-%COMP%]:hover {\n  background-color: #BBD8DC;\n  color: white;\n}\n.tags[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: small;\n  color: white;\n  padding: 0.4em 0.4em 0 0.4em;\n  background-color:#405061;\n  line-height: 1em;\n  position: relative;\n  left: -1px;\n  top: -4px;\n  height: 1.8em;\n  margin-right: .8em;\n  border-radius: 4px 0 0 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFncy90YWdzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UscUJBQXFCO0VBQ3JCLFVBQVU7RUFDVixXQUFXO0VBQ1gsV0FBVztFQUNYLHdCQUF3QjtFQUN4QixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCO0FBQ0Y7QUFDQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsT0FBTztFQUNQLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osZUFBZTtFQUNmLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsa0JBQWtCOztBQUVwQjtBQUNBO0VBQ0UsY0FBYztFQUNkLHNCQUFzQjtFQUN0QixVQUFVO0FBQ1o7QUFDQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0FBQ2Q7QUFDQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0FBQ2Q7QUFDQTtFQUNFLHFCQUFxQjtFQUNyQixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLDRCQUE0QjtFQUM1Qix3QkFBd0I7RUFDeEIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsU0FBUztFQUNULGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsMEJBQTBCO0FBQzVCIiwiZmlsZSI6InNyYy9hcHAvdGFncy90YWdzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMntcbiAgbWFyZ2luLXRvcDo0MHB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBtYXJnaW4tbGVmdDogLTM1cHg7XG59XG4udGFncyB7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgcGFkZGluZzogMDtcbiAgd2lkdGg6IDE1ZW07XG4gIGZsb2F0OiBsZWZ0O1xuICAvKiBtYXJnaW4tcmlnaHQ6IDIwcHg7ICovXG4gIG1hcmdpbi1sZWZ0OiAtODBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOi0xMHB4XG59XG4udGFncyB1bHtcbiAgcGFkZGluZzogMCU7XG4gIG1hcmdpbi1sZWZ0OiAtODBweDtcbn1cbi50YWdzIGxpIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNFRUU7XG4gIG1hcmdpbjogLjVlbTtcbiAgcGFkZGluZzogLjVlbSAwO1xuICBoZWlnaHQ6IDEuNmVtO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIG1hcmdpbi1yaWdodDogODBweDtcblxufVxuLnRhZ3MgbGk6aG92ZXIge1xuICBjb2xvcjogIzYwN0Q4QjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0RERDtcbiAgbGVmdDogLjFlbTtcbn1cbi50YWdzIGxpLnNlbGVjdGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0NGRDhEQztcbiAgY29sb3I6IHdoaXRlO1xufVxuLnRhZ3MgbGkuc2VsZWN0ZWQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQkJEOERDO1xuICBjb2xvcjogd2hpdGU7XG59XG4udGFncyAuYmFkZ2Uge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogc21hbGw7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMC40ZW0gMC40ZW0gMCAwLjRlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjojNDA1MDYxO1xuICBsaW5lLWhlaWdodDogMWVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IC0xcHg7XG4gIHRvcDogLTRweDtcbiAgaGVpZ2h0OiAxLjhlbTtcbiAgbWFyZ2luLXJpZ2h0OiAuOGVtO1xuICBib3JkZXItcmFkaXVzOiA0cHggMCAwIDRweDtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TagsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-tags',
                templateUrl: './tags.component.html',
                styleUrls: ['./tags.component.css']
            }]
    }], function () { return [{ type: _tags_service__WEBPACK_IMPORTED_MODULE_1__["TagsService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "ccyI":
/*!*********************************!*\
  !*** ./src/app/auth.service.ts ***!
  \*********************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class AuthService {
    constructor(http) {
        this.http = http;
    }
    login(username, password) {
        sessionStorage.setItem('username', username);
        return this.http.post('http://gjblog-env.eba-gzw7n3uy.us-east-2.elasticbeanstalk.com/blog/authenticate', { 'username': username, 'password': password })
            .subscribe(res => this.setSession(res)), (err) => {
            console.error(err);
        };
    }
    setSession(authResult) {
        const expiresAt = moment__WEBPACK_IMPORTED_MODULE_1__().add(1740, 'second');
        sessionStorage.setItem('id_token', JSON.parse(JSON.stringify(authResult)).jwt);
        sessionStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()));
    }
    logout() {
        sessionStorage.removeItem("id_token");
        sessionStorage.removeItem("expires_at");
        sessionStorage.removeItem("username");
    }
    isLoggedIn() {
        return (moment__WEBPACK_IMPORTED_MODULE_1__().isBefore(this.getExpiration()) && (sessionStorage.getItem('id_token') != null));
    }
    isLoggedOut() {
        return !this.isLoggedIn();
    }
    getExpiration() {
        const expiration = sessionStorage.getItem("expires_at");
        const expiresAt = JSON.parse(expiration);
        return moment__WEBPACK_IMPORTED_MODULE_1__(expiresAt);
    }
    createAuthProfile(username, password) {
        this.http.post('http://gjblog-env.eba-gzw7n3uy.us-east-2.elasticbeanstalk.com/blog/register', { 'username': username, 'password': password })
            .subscribe(res => this.setSession(res)), (err) => {
            console.error(err);
        };
        return this.login(username, password);
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "ffDJ":
/*!*********************************!*\
  !*** ./src/app/tags.service.ts ***!
  \*********************************/
/*! exports provided: TagsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagsService", function() { return TagsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");






class TagsService {
    constructor(http) {
        this.http = http;
        this.localBlogUrl = 'http://gjblog-env.eba-gzw7n3uy.us-east-2.elasticbeanstalk.com/blog';
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        // Http Options
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
    }
    getPopularTags() {
        return this.http.get(this.localBlogUrl + '/popular-tags', this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
    getByTagName(tag) {
        return this.http.get(`${this.localBlogUrl}/tag?tag=${tag}`, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
    // Error handling
    handleError(error) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            // Get client-side error
            errorMessage = error.error.message;
        }
        else {
            // Get server-side error
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        console.log(errorMessage);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(errorMessage);
    }
    sendData(data) {
        this.change.emit(data);
    }
    sendPostToTagsPage(postsbyTag) {
        this.change.emit(postsbyTag);
    }
}
TagsService.ɵfac = function TagsService_Factory(t) { return new (t || TagsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
TagsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TagsService, factory: TagsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TagsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, { change: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "fhD/":
/*!*********************************!*\
  !*** ./src/app/post.service.ts ***!
  \*********************************/
/*! exports provided: PostService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostService", function() { return PostService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");





class PostService {
    constructor(http) {
        this.http = http;
        this.blogUrl = 'http://gjblog-env.eba-gzw7n3uy.us-east-2.elasticbeanstalk.com/blog/all';
    }
    getPosts() {
        return this.http.get(this.blogUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError('getPosts', [])));
    }
    handleError(operation = 'operation', result) {
        return (error) => {
            console.error(error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result);
        };
    }
}
PostService.ɵfac = function PostService_Factory(t) { return new (t || PostService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
PostService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PostService, factory: PostService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PostService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "nEq3":
/*!************************************************!*\
  !*** ./src/app/new-post/new-post.component.ts ***!
  \************************************************/
/*! exports provided: NewPostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewPostComponent", function() { return NewPostComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../auth.service */ "ccyI");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");










class NewPostComponent {
    constructor(document, http, router, _DomSanitizationService, authService) {
        this.http = http;
        this.router = router;
        this._DomSanitizationService = _DomSanitizationService;
        this.authService = authService;
        this.postContent = {
            text: '',
            postContentId: '',
            imageKey: '',
            imageData: '',
        };
        this.post = { userName: '',
            post_Id: '',
            title: '',
            tag: '',
            postContent: this.postContent
        };
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
        });
    }
    onClickSubmit() {
        if (this.authService.isLoggedIn()) {
            const accessToken = sessionStorage.getItem("id_token");
            this.http.post("http://gjblog-env.eba-gzw7n3uy.us-east-2.elasticbeanstalk.com/blog/authenticatedNew", this.post, {
                headers: { Authorization: 'Bearer ' + accessToken }
            }).subscribe((data) => {
                this.replyPost = data;
            }, (err) => {
                console.error(err);
            });
            this.router.navigate(['/home']);
        }
        else {
            this.http.post("http://gjblog-env.eba-gzw7n3uy.us-east-2.elasticbeanstalk.com/new", this.post).subscribe((data) => {
                this.replyPost = data;
            }, (err) => {
                console.error(err);
            });
            this.router.navigate(['/home']);
        }
    }
    onFileChanged(event) {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            const b64image = reader.result;
            if (typeof b64image === 'string') {
                this.post.postContent.imageData = b64image.slice(23);
            }
            else {
                this.post.postContent.imageData = b64image.toString().slice(23);
            }
        };
    }
}
NewPostComponent.ɵfac = function NewPostComponent_Factory(t) { return new (t || NewPostComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"])); };
NewPostComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NewPostComponent, selectors: [["app-new-post"]], decls: 22, vars: 4, consts: [[1, "newpost"], ["name", "title", "type", "text", "id", "title", 3, "ngModel", "ngModelChange"], ["name", "userName", "type", "text", "id", "postUsername", 3, "ngModel", "ngModelChange"], ["name", "tag", "type", "text", "id", "postTag", 3, "ngModel", "ngModelChange"], ["name", "text", "type", "text", "id", "postText", 3, "ngModel", "ngModelChange"], ["type", "file", "accept", "image/*", "name", "image", "id", "image", 3, "change"], ["imageInput", ""], [3, "click"]], template: function NewPostComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Input Your New Post Information Below");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Title:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function NewPostComponent_Template_input_ngModelChange_6_listener($event) { return ctx.post.title = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Username:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function NewPostComponent_Template_input_ngModelChange_9_listener($event) { return ctx.post.userName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Tag:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function NewPostComponent_Template_input_ngModelChange_12_listener($event) { return ctx.post.tag = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Post Content (Markdown or Text):");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "textarea", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function NewPostComponent_Template_textarea_ngModelChange_15_listener($event) { return ctx.post.postContent.text = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Image:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "input", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function NewPostComponent_Template_input_change_18_listener($event) { return ctx.onFileChanged($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NewPostComponent_Template_button_click_20_listener() { return ctx.onClickSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Submit New Post");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.post.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.post.userName);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.post.tag);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.post.postContent.text);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"]], styles: [".newpost[_ngcontent-%COMP%]{\n  margin-top:60px;\n}\ninput[type=text ][_ngcontent-%COMP%]{\n  width: 100%;\n  padding: 12px 20px;\n  margin: 8px 0;\n  box-sizing: border-box;\n  border-radius: 4px;\n}\ntextarea[_ngcontent-%COMP%]{\n  width: 100%;\n  height: 200px;\n  padding: 12px 20px;\n  margin: 8px 0;\n  box-sizing: border-box;\n  border-radius: 4px;\n  resize: none;\n}\ninput[type=text][_ngcontent-%COMP%]:focus {\n  border: .75px solid #555;\n}\ntextarea[_ngcontent-%COMP%]:focus {\n  border: .75px solid #555;\n}\nbutton[_ngcontent-%COMP%] {\n  \n  border: none;\n  \n  padding: 8px 16px;\n  text-decoration: none;\n  margin: 4px 2px;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmV3LXBvc3QvbmV3LXBvc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7QUFDakI7QUFDQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLFlBQVk7QUFDZDtBQUNBO0VBQ0Usd0JBQXdCO0FBQzFCO0FBQ0E7RUFDRSx3QkFBd0I7QUFDMUI7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixxQkFBcUI7RUFDckIsZUFBZTtFQUNmLGVBQWU7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9uZXctcG9zdC9uZXctcG9zdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5ld3Bvc3R7XG4gIG1hcmdpbi10b3A6NjBweDtcbn1cbmlucHV0W3R5cGU9dGV4dCBde1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMTJweCAyMHB4O1xuICBtYXJnaW46IDhweCAwO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG50ZXh0YXJlYXtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjAwcHg7XG4gIHBhZGRpbmc6IDEycHggMjBweDtcbiAgbWFyZ2luOiA4cHggMDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICByZXNpemU6IG5vbmU7XG59XG5pbnB1dFt0eXBlPXRleHRdOmZvY3VzIHtcbiAgYm9yZGVyOiAuNzVweCBzb2xpZCAjNTU1O1xufVxudGV4dGFyZWE6Zm9jdXMge1xuICBib3JkZXI6IC43NXB4IHNvbGlkICM1NTU7XG59XG5cbmJ1dHRvbiB7XG4gIC8qYmFja2dyb3VuZC1jb2xvcjogIzRDQUY1MDsqL1xuICBib3JkZXI6IG5vbmU7XG4gIC8qY29sb3I6IHdoaXRlOyovXG4gIHBhZGRpbmc6IDhweCAxNnB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIG1hcmdpbjogNHB4IDJweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NewPostComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-new-post',
                templateUrl: './new-post.component.html',
                styleUrls: ['./new-post.component.css']
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]]
            }] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"] }, { type: _auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "oWCI":
/*!************************************!*\
  !*** ./src/app/profile.service.ts ***!
  \************************************/
/*! exports provided: ProfileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileService", function() { return ProfileService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");






class ProfileService {
    constructor(http) {
        this.http = http;
        this.blogUrl = 'http://gjblog-env.eba-gzw7n3uy.us-east-2.elasticbeanstalk.com/blog';
    }
    postProfile(profile) {
        return this.http.post(this.blogUrl + '/profile', JSON.stringify(profile), { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json', Authorization: 'Bearer ' + sessionStorage.getItem('id_token') }) })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
    getProfile(username) {
        return this.http.get(this.blogUrl + '/profile/' + username, { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json', Authorization: 'Bearer ' + sessionStorage.getItem('id_token') }) })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
    // Error handling
    handleError(error) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            // Get client-side error
            errorMessage = error.error.message;
        }
        else {
            // Get server-side error
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        console.log(errorMessage);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(errorMessage);
    }
}
ProfileService.ɵfac = function ProfileService_Factory(t) { return new (t || ProfileService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
ProfileService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ProfileService, factory: ProfileService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile/profile.component */ "W6KJ");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _new_post_new_post_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./new-post/new-post.component */ "nEq3");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/login.component */ "vtpD");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./register/register.component */ "1W4x");
/* harmony import */ var _tag_page_tag_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tag-page/tag-page.component */ "MOh7");











const routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'profile', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_3__["ProfileComponent"] },
    { path: 'newpost', component: _new_post_new_post_component__WEBPACK_IMPORTED_MODULE_5__["NewPostComponent"] },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"] },
    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_7__["RegisterComponent"] },
    { path: 'tag-page', component: _tag_page_tag_page_component__WEBPACK_IMPORTED_MODULE_8__["TagPageComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)
        ], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)
                ],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "vtpD":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth.service */ "ccyI");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");








function LoginComponent_div_14_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Username is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoginComponent_div_14_div_1_Template, 2, 0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.userName.errors.required);
} }
function LoginComponent_div_15_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Password is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoginComponent_div_15_div_1_Template, 2, 0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.password.errors.required);
} }
class LoginComponent {
    constructor(formBuilder, http, router, authService) {
        this.formBuilder = formBuilder;
        this.http = http;
        this.router = router;
        this.authService = authService;
    }
    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            userName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    }
    onClickSubmit() {
        if (this.loginForm.valid) {
            this.authService.login(this.loginForm.value.userName, this.loginForm.value.password);
            const idToken = sessionStorage.getItem("id_token");
            this.router.navigate(['/home']);
        }
    }
    get userName() {
        return this.loginForm.get('userName');
    }
    get password() {
        return this.loginForm.get('password');
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 16, vars: 3, consts: [[1, "login"], [3, "formGroup", "ngSubmit"], ["type", "text", "formControlName", "userName", "required", ""], ["type", "password", "formControlName", "password", "required", ""], ["type", "submit", 1, "button"], ["class", "alert alert-danger", 4, "ngIf"], [1, "alert", "alert-danger"], [4, "ngIf"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Input Your Login Information Below");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_3_listener() { return ctx.onClickSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " UserName: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Password: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, LoginComponent_div_14_Template, 2, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, LoginComponent_div_15_Template, 2, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.loginForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userName.invalid && (ctx.userName.dirty || ctx.userName.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.password.invalid && (ctx.password.dirty || ctx.password.touched));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], styles: [".login[_ngcontent-%COMP%]{\n  margin-top: 60px;\n}\ninput[_ngcontent-%COMP%]{\n  width: 100%;\n  padding: 12px 20px;\n  margin: 8px 0;\n  box-sizing: border-box;\n  border-radius: 4px;\n}\ninput[type=text][_ngcontent-%COMP%]:focus {\n  border: .75px solid #555;\n}\nbutton[_ngcontent-%COMP%] {\n  border: none;\n  padding: 8px 16px;\n  text-decoration: none;\n  margin: 4px 2px;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0Usd0JBQXdCO0FBQzFCO0FBRUE7RUFDRSxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsZUFBZTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9naW57XG4gIG1hcmdpbi10b3A6IDYwcHg7XG59XG5pbnB1dHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDEycHggMjBweDtcbiAgbWFyZ2luOiA4cHggMDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuaW5wdXRbdHlwZT10ZXh0XTpmb2N1cyB7XG4gIGJvcmRlcjogLjc1cHggc29saWQgIzU1NTtcbn1cblxuYnV0dG9uIHtcbiAgYm9yZGVyOiBub25lO1xuICBwYWRkaW5nOiA4cHggMTZweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBtYXJnaW46IDRweCAycHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.css']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map