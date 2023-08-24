(self["webpackChunkdevice"] = self["webpackChunkdevice"] || []).push([["main"],{

/***/ 6401:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core */ 9076);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 7947);




class AppComponent {
  constructor(preloader, settings) {
    this.preloader = preloader;
    this.settings = settings;
  }
  ngOnInit() {
    this.settings.setDirection();
    // this.settings.setTheme();
  }

  ngAfterViewInit() {
    this.preloader.hide();
  }
}
AppComponent.ɵfac = function AppComponent_Factory(t) {
  return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core__WEBPACK_IMPORTED_MODULE_0__.PreloaderService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core__WEBPACK_IMPORTED_MODULE_0__.SettingsService));
};
AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: AppComponent,
  selectors: [["app-root"]],
  decls: 1,
  vars: 0,
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "router-outlet");
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet],
  encapsulation: 2
});

/***/ }),

/***/ 8629:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule),
/* harmony export */   TranslateHttpLoaderFactory: () => (/* binding */ TranslateHttpLoaderFactory)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 6401);
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/core.module */ 8081);
/* harmony import */ var _theme_theme_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @theme/theme.module */ 5379);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/shared.module */ 6208);
/* harmony import */ var _routes_routes_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./routes/routes.module */ 6860);
/* harmony import */ var _formly_config_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./formly-config.module */ 1563);
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-permissions */ 7439);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-toastr */ 7548);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ngx-translate/core */ 5939);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/http-loader */ 614);
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @env/environment */ 553);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @core */ 9076);
/* harmony import */ var _core_authentication_login_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @core/authentication/login.service */ 9779);
/* harmony import */ var _fake_login_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./fake-login.service */ 5513);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/platform-browser/animations */ 4987);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 1699);























// Required for AOT compilation
function TranslateHttpLoaderFactory(http) {
  return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_10__.TranslateHttpLoader(http, './assets/i18n/', '.json');
}
class AppModule {}
AppModule.ɵfac = function AppModule_Factory(t) {
  return new (t || AppModule)();
};
AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({
  type: AppModule,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent]
});
AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({
  providers: [{
    provide: _core__WEBPACK_IMPORTED_MODULE_7__.BASE_URL,
    useValue: _env_environment__WEBPACK_IMPORTED_MODULE_6__.environment.baseUrl
  }, {
    provide: _core_authentication_login_service__WEBPACK_IMPORTED_MODULE_8__.LoginService,
    useClass: _fake_login_service__WEBPACK_IMPORTED_MODULE_9__.FakeLoginService
  }, _core__WEBPACK_IMPORTED_MODULE_7__.httpInterceptorProviders, _core__WEBPACK_IMPORTED_MODULE_7__.appInitializerProviders],
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__.BrowserModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.ReactiveFormsModule, _core_core_module__WEBPACK_IMPORTED_MODULE_1__.CoreModule, _theme_theme_module__WEBPACK_IMPORTED_MODULE_2__.ThemeModule, _routes_routes_module__WEBPACK_IMPORTED_MODULE_4__.RoutesModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule, _formly_config_module__WEBPACK_IMPORTED_MODULE_5__.FormlyConfigModule.forRoot(), ngx_permissions__WEBPACK_IMPORTED_MODULE_15__.NgxPermissionsModule.forRoot(), ngx_toastr__WEBPACK_IMPORTED_MODULE_16__.ToastrModule.forRoot(), _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__.TranslateModule.forRoot({
    loader: {
      provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__.TranslateLoader,
      useFactory: TranslateHttpLoaderFactory,
      deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HttpClient]
    },
    defaultLanguage: 'en-US'
  }), _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__.BrowserAnimationsModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__.BrowserModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.ReactiveFormsModule, _core_core_module__WEBPACK_IMPORTED_MODULE_1__.CoreModule, _theme_theme_module__WEBPACK_IMPORTED_MODULE_2__.ThemeModule, _routes_routes_module__WEBPACK_IMPORTED_MODULE_4__.RoutesModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule, _formly_config_module__WEBPACK_IMPORTED_MODULE_5__.FormlyConfigModule, ngx_permissions__WEBPACK_IMPORTED_MODULE_15__.NgxPermissionsModule, ngx_toastr__WEBPACK_IMPORTED_MODULE_16__.ToastrModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__.TranslateModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__.BrowserAnimationsModule]
  });
})();

/***/ }),

/***/ 5486:
/*!***************************************************!*\
  !*** ./src/app/core/authentication/auth.guard.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   authGuard: () => (/* binding */ authGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.service */ 1373);



const authGuard = (route, state) => {
  const auth = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService);
  const router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router);
  return auth.check() ? true : router.parseUrl('/auth/login');
};

/***/ }),

/***/ 1373:
/*!*****************************************************!*\
  !*** ./src/app/core/authentication/auth.service.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthService: () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 8071);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 7835);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 4980);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 3799);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 1891);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 5584);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 3738);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 9736);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 2389);
/* harmony import */ var _token_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./token.service */ 8766);
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.service */ 9779);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers */ 6372);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 1699);








class AuthService {
  constructor(loginService, tokenService) {
    this.loginService = loginService;
    this.tokenService = tokenService;
    this.user$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject({});
    this.change$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.merge)(this.tokenService.change(), this.tokenService.refresh().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)(() => this.refresh()))).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)(() => this.assignUser()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.share)());
  }
  init() {
    return new Promise(resolve => this.change$.subscribe(() => resolve()));
  }
  change() {
    return this.change$;
  }
  check() {
    return this.tokenService.valid();
  }
  login(username, password, rememberMe = false) {
    return this.loginService.login(username, password, rememberMe).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.tap)(token => this.tokenService.set(token)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(() => this.check()));
  }
  refresh() {
    return this.loginService.refresh((0,_helpers__WEBPACK_IMPORTED_MODULE_2__.filterObject)({
      refresh_token: this.tokenService.getRefreshToken()
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.of)(undefined)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.tap)(token => this.tokenService.set(token)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(() => this.check()));
  }
  logout() {
    return this.loginService.logout().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.tap)(() => this.tokenService.clear()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(() => !this.check()));
  }
  user() {
    return this.user$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.share)());
  }
  menu() {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.iif)(() => this.check(), this.loginService.menu(), (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.of)([]));
  }
  assignUser() {
    if (!this.check()) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.of)({}).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.tap)(user => this.user$.next(user)));
    }
    if (!(0,_helpers__WEBPACK_IMPORTED_MODULE_2__.isEmptyObject)(this.user$.getValue())) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.of)(this.user$.getValue());
    }
    return this.loginService.me().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.tap)(user => this.user$.next(user)));
  }
}
AuthService.ɵfac = function AuthService_Factory(t) {
  return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵinject"](_login_service__WEBPACK_IMPORTED_MODULE_1__.LoginService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵinject"](_token_service__WEBPACK_IMPORTED_MODULE_0__.TokenService));
};
AuthService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjectable"]({
  token: AuthService,
  factory: AuthService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 6372:
/*!************************************************!*\
  !*** ./src/app/core/authentication/helpers.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Base64: () => (/* binding */ Base64),
/* harmony export */   base64: () => (/* binding */ base64),
/* harmony export */   capitalize: () => (/* binding */ capitalize),
/* harmony export */   currentTimestamp: () => (/* binding */ currentTimestamp),
/* harmony export */   filterObject: () => (/* binding */ filterObject),
/* harmony export */   isEmptyObject: () => (/* binding */ isEmptyObject),
/* harmony export */   pack: () => (/* binding */ pack),
/* harmony export */   timeLeft: () => (/* binding */ timeLeft),
/* harmony export */   unpack: () => (/* binding */ unpack)
/* harmony export */ });
/* harmony import */ var base64_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! base64-js */ 3663);

class Base64 {
  static encode(plainText) {
    return (0,base64_js__WEBPACK_IMPORTED_MODULE_0__.fromByteArray)(pack(plainText)).replace(/[+/=]/g, m => {
      return {
        '+': '-',
        '/': '_',
        '=': ''
      }[m];
    });
  }
  static decode(b64) {
    b64 = b64.replace(/[-_]/g, m => {
      return {
        '-': '+',
        '_': '/'
      }[m];
    });
    while (b64.length % 4) {
      b64 += '=';
    }
    return unpack((0,base64_js__WEBPACK_IMPORTED_MODULE_0__.toByteArray)(b64));
  }
}
function pack(str) {
  const bytes = [];
  for (let i = 0; i < str.length; i++) {
    bytes.push(...[str.charCodeAt(i)]);
  }
  return bytes;
}
function unpack(byteArray) {
  return String.fromCharCode(...byteArray);
}
const base64 = {
  encode: Base64.encode,
  decode: Base64.decode
};
function capitalize(text) {
  return text.substring(0, 1).toUpperCase() + text.substring(1, text.length).toLowerCase();
}
function currentTimestamp() {
  return Math.ceil(new Date().getTime() / 1000);
}
function timeLeft(expiredAt) {
  return Math.max(0, expiredAt - currentTimestamp());
}
function filterObject(obj) {
  return Object.fromEntries(Object.entries(obj).filter(([, value]) => value !== undefined && value !== null));
}
function isEmptyObject(obj) {
  return Object.keys(obj).length === 0;
}

/***/ }),

/***/ 3870:
/*!**********************************************!*\
  !*** ./src/app/core/authentication/index.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthService: () => (/* reexport safe */ _auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService),
/* harmony export */   Base64: () => (/* reexport safe */ _helpers__WEBPACK_IMPORTED_MODULE_8__.Base64),
/* harmony export */   BaseToken: () => (/* reexport safe */ _token__WEBPACK_IMPORTED_MODULE_5__.BaseToken),
/* harmony export */   JwtToken: () => (/* reexport safe */ _token__WEBPACK_IMPORTED_MODULE_5__.JwtToken),
/* harmony export */   LoginService: () => (/* reexport safe */ _login_service__WEBPACK_IMPORTED_MODULE_6__.LoginService),
/* harmony export */   SimpleToken: () => (/* reexport safe */ _token__WEBPACK_IMPORTED_MODULE_5__.SimpleToken),
/* harmony export */   TokenFactory: () => (/* reexport safe */ _token_factory_service__WEBPACK_IMPORTED_MODULE_3__.TokenFactory),
/* harmony export */   TokenService: () => (/* reexport safe */ _token_service__WEBPACK_IMPORTED_MODULE_4__.TokenService),
/* harmony export */   admin: () => (/* reexport safe */ _user__WEBPACK_IMPORTED_MODULE_7__.admin),
/* harmony export */   authGuard: () => (/* reexport safe */ _auth_guard__WEBPACK_IMPORTED_MODULE_1__.authGuard),
/* harmony export */   base64: () => (/* reexport safe */ _helpers__WEBPACK_IMPORTED_MODULE_8__.base64),
/* harmony export */   capitalize: () => (/* reexport safe */ _helpers__WEBPACK_IMPORTED_MODULE_8__.capitalize),
/* harmony export */   currentTimestamp: () => (/* reexport safe */ _helpers__WEBPACK_IMPORTED_MODULE_8__.currentTimestamp),
/* harmony export */   filterObject: () => (/* reexport safe */ _helpers__WEBPACK_IMPORTED_MODULE_8__.filterObject),
/* harmony export */   guest: () => (/* reexport safe */ _user__WEBPACK_IMPORTED_MODULE_7__.guest),
/* harmony export */   isEmptyObject: () => (/* reexport safe */ _helpers__WEBPACK_IMPORTED_MODULE_8__.isEmptyObject),
/* harmony export */   pack: () => (/* reexport safe */ _helpers__WEBPACK_IMPORTED_MODULE_8__.pack),
/* harmony export */   timeLeft: () => (/* reexport safe */ _helpers__WEBPACK_IMPORTED_MODULE_8__.timeLeft),
/* harmony export */   unpack: () => (/* reexport safe */ _helpers__WEBPACK_IMPORTED_MODULE_8__.unpack)
/* harmony export */ });
/* harmony import */ var _interface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interface */ 5446);
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.guard */ 5486);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ 1373);
/* harmony import */ var _token_factory_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./token-factory.service */ 9433);
/* harmony import */ var _token_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./token.service */ 8766);
/* harmony import */ var _token__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./token */ 7213);
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.service */ 9779);
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user */ 7737);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./helpers */ 6372);










/***/ }),

/***/ 5446:
/*!**************************************************!*\
  !*** ./src/app/core/authentication/interface.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 9779:
/*!******************************************************!*\
  !*** ./src/app/core/authentication/login.service.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginService: () => (/* binding */ LoginService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ 9736);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 4860);




class LoginService {
  constructor(http) {
    this.http = http;
  }
  login(username, password, rememberMe = false) {
    return this.http.post('/auth/login', {
      username,
      password,
      rememberMe
    });
  }
  refresh(params) {
    return this.http.post('/auth/refresh', params);
  }
  logout() {
    return this.http.post('/auth/logout', {});
  }
  me() {
    return this.http.get('/me');
  }
  menu() {
    return this.http.get('/me/menu').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.map)(res => res.menu));
  }
}
LoginService.ɵfac = function LoginService_Factory(t) {
  return new (t || LoginService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
};
LoginService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: LoginService,
  factory: LoginService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 9433:
/*!**************************************************************!*\
  !*** ./src/app/core/authentication/token-factory.service.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TokenFactory: () => (/* binding */ TokenFactory)
/* harmony export */ });
/* harmony import */ var _token__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./token */ 7213);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);


class TokenFactory {
  create(attributes) {
    if (!attributes.access_token) {
      return undefined;
    }
    if (_token__WEBPACK_IMPORTED_MODULE_0__.JwtToken.is(attributes.access_token)) {
      return new _token__WEBPACK_IMPORTED_MODULE_0__.JwtToken(attributes);
    }
    return new _token__WEBPACK_IMPORTED_MODULE_0__.SimpleToken(attributes);
  }
}
TokenFactory.ɵfac = function TokenFactory_Factory(t) {
  return new (t || TokenFactory)();
};
TokenFactory.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: TokenFactory,
  factory: TokenFactory.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 8766:
/*!******************************************************!*\
  !*** ./src/app/core/authentication/token.service.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TokenService: () => (/* binding */ TokenService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 8071);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 2513);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 9378);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 5584);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared */ 5629);
/* harmony import */ var _token_factory_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./token-factory.service */ 9433);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers */ 6372);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 1699);








class TokenService {
  constructor(store, factory) {
    this.store = store;
    this.factory = factory;
    this.key = 'ng-matero-token';
    this.change$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject(undefined);
    this.refresh$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
  }
  get token() {
    if (!this._token) {
      this._token = this.factory.create(this.store.get(this.key));
    }
    return this._token;
  }
  change() {
    return this.change$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.share)());
  }
  refresh() {
    this.buildRefresh();
    return this.refresh$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.share)());
  }
  set(token) {
    this.save(token);
    return this;
  }
  clear() {
    this.save();
  }
  valid() {
    return this.token?.valid() ?? false;
  }
  getBearerToken() {
    return this.token?.getBearerToken() ?? '';
  }
  getRefreshToken() {
    return this.token?.refresh_token;
  }
  ngOnDestroy() {
    this.clearRefresh();
  }
  save(token) {
    this._token = undefined;
    if (!token) {
      this.store.remove(this.key);
    } else {
      const value = Object.assign({
        access_token: '',
        token_type: 'Bearer'
      }, token, {
        exp: token.expires_in ? (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.currentTimestamp)() + token.expires_in : null
      });
      this.store.set(this.key, (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.filterObject)(value));
    }
    this.change$.next(this.token);
    this.buildRefresh();
  }
  buildRefresh() {
    this.clearRefresh();
    if (this.token?.needRefresh()) {
      this.timer$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.timer)(this.token.getRefreshTime() * 1000).subscribe(() => {
        this.refresh$.next(this.token);
      });
    }
  }
  clearRefresh() {
    if (this.timer$ && !this.timer$.closed) {
      this.timer$.unsubscribe();
    }
  }
}
TokenService.ɵfac = function TokenService_Factory(t) {
  return new (t || TokenService)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_shared__WEBPACK_IMPORTED_MODULE_0__.LocalStorageService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_token_factory_service__WEBPACK_IMPORTED_MODULE_1__.TokenFactory));
};
TokenService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({
  token: TokenService,
  factory: TokenService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 7213:
/*!**********************************************!*\
  !*** ./src/app/core/authentication/token.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BaseToken: () => (/* binding */ BaseToken),
/* harmony export */   JwtToken: () => (/* binding */ JwtToken),
/* harmony export */   SimpleToken: () => (/* binding */ SimpleToken)
/* harmony export */ });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ 6372);

class BaseToken {
  constructor(attributes) {
    this.attributes = attributes;
  }
  get access_token() {
    return this.attributes.access_token;
  }
  get refresh_token() {
    return this.attributes.refresh_token;
  }
  get token_type() {
    return this.attributes.token_type ?? 'bearer';
  }
  get exp() {
    return this.attributes.exp;
  }
  valid() {
    return this.hasAccessToken() && !this.isExpired();
  }
  getBearerToken() {
    return this.access_token ? [(0,_helpers__WEBPACK_IMPORTED_MODULE_0__.capitalize)(this.token_type), this.access_token].join(' ').trim() : '';
  }
  needRefresh() {
    return this.exp !== undefined && this.exp >= 0;
  }
  getRefreshTime() {
    return (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.timeLeft)((this.exp ?? 0) - 5);
  }
  hasAccessToken() {
    return !!this.access_token;
  }
  isExpired() {
    return this.exp !== undefined && this.exp - (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.currentTimestamp)() <= 0;
  }
}
class SimpleToken extends BaseToken {}
class JwtToken extends SimpleToken {
  static is(accessToken) {
    try {
      const [_header] = accessToken.split('.');
      const header = JSON.parse(_helpers__WEBPACK_IMPORTED_MODULE_0__.base64.decode(_header));
      return header.typ.toUpperCase().includes('JWT');
    } catch (e) {
      return false;
    }
  }
  get exp() {
    return this.payload?.exp;
  }
  get payload() {
    if (!this.access_token) {
      return {};
    }
    if (this._payload) {
      return this._payload;
    }
    const [, payload] = this.access_token.split('.');
    const data = JSON.parse(_helpers__WEBPACK_IMPORTED_MODULE_0__.base64.decode(payload));
    if (!data.exp) {
      data.exp = this.attributes.exp;
    }
    return this._payload = data;
  }
}

/***/ }),

/***/ 7737:
/*!*********************************************!*\
  !*** ./src/app/core/authentication/user.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   admin: () => (/* binding */ admin),
/* harmony export */   guest: () => (/* binding */ guest)
/* harmony export */ });
const admin = {
  id: 1,
  name: 'Zongbin',
  email: 'nzb329@163.com',
  avatar: './assets/images/avatar.jpg',
  permissions: 'admin'
};
const guest = {
  name: 'unknown',
  email: 'unknown',
  avatar: './assets/images/avatar-default.jpg'
};

/***/ }),

/***/ 963:
/*!************************************************!*\
  !*** ./src/app/core/bootstrap/menu.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MenuService: () => (/* binding */ MenuService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 8071);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 5584);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);



class MenuService {
  constructor() {
    this.menu$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject([]);
  }
  /** Get all the menu data. */
  getAll() {
    return this.menu$.asObservable();
  }
  /** Observe the change of menu data. */
  change() {
    return this.menu$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.share)());
  }
  /** Initialize the menu data. */
  set(menu) {
    this.menu$.next(menu);
    return this.menu$.asObservable();
  }
  /** Add one item to the menu data. */
  add(menu) {
    const tmpMenu = this.menu$.value;
    tmpMenu.push(menu);
    this.menu$.next(tmpMenu);
  }
  /** Reset the menu data. */
  reset() {
    this.menu$.next([]);
  }
  /** Delete empty values and rebuild route. */
  buildRoute(routeArr) {
    let route = '';
    routeArr.forEach(item => {
      if (item && item.trim()) {
        route += '/' + item.replace(/^\/+|\/+$/g, '');
      }
    });
    return route;
  }
  /** Get the menu item name based on current route. */
  getItemName(routeArr) {
    return this.getLevel(routeArr)[routeArr.length - 1];
  }
  // Whether is a leaf menu
  isLeafItem(item) {
    const cond0 = item.route === undefined;
    const cond1 = item.children === undefined;
    const cond2 = !cond1 && item.children?.length === 0;
    return cond0 || cond1 || cond2;
  }
  // Deep clone object could be jsonized
  deepClone(obj) {
    return JSON.parse(JSON.stringify(obj));
  }
  // Whether two objects could be jsonized equal
  isJsonObjEqual(obj0, obj1) {
    return JSON.stringify(obj0) === JSON.stringify(obj1);
  }
  // Whether routeArr equals realRouteArr (after remove empty route element)
  isRouteEqual(routeArr, realRouteArr) {
    realRouteArr = this.deepClone(realRouteArr);
    realRouteArr = realRouteArr.filter(r => r !== '');
    return this.isJsonObjEqual(routeArr, realRouteArr);
  }
  /** Get the menu level. */
  getLevel(routeArr) {
    let tmpArr = [];
    this.menu$.value.forEach(item => {
      // Breadth-first traverse
      let unhandledLayer = [{
        item,
        parentNamePathList: [],
        realRouteArr: []
      }];
      while (unhandledLayer.length > 0) {
        let nextUnhandledLayer = [];
        for (const ele of unhandledLayer) {
          const eachItem = ele.item;
          const currentNamePathList = this.deepClone(ele.parentNamePathList).concat(eachItem.name);
          const currentRealRouteArr = this.deepClone(ele.realRouteArr).concat(eachItem.route);
          // Compare the full Array for expandable
          if (this.isRouteEqual(routeArr, currentRealRouteArr)) {
            tmpArr = currentNamePathList;
            break;
          }
          if (!this.isLeafItem(eachItem)) {
            const wrappedChildren = eachItem.children?.map(child => ({
              item: child,
              parentNamePathList: currentNamePathList,
              realRouteArr: currentRealRouteArr
            }));
            nextUnhandledLayer = nextUnhandledLayer.concat(wrappedChildren);
          }
        }
        unhandledLayer = nextUnhandledLayer;
      }
    });
    return tmpArr;
  }
  /** Add namespace for translation. */
  addNamespace(menu, namespace) {
    menu.forEach(menuItem => {
      menuItem.name = `${namespace}.${menuItem.name}`;
      if (menuItem.children && menuItem.children.length > 0) {
        this.addNamespace(menuItem.children, menuItem.name);
      }
    });
  }
}
MenuService.ɵfac = function MenuService_Factory(t) {
  return new (t || MenuService)();
};
MenuService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: MenuService,
  factory: MenuService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 8140:
/*!*****************************************************!*\
  !*** ./src/app/core/bootstrap/preloader.service.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PreloaderService: () => (/* binding */ PreloaderService)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);


class PreloaderService {
  constructor(document) {
    this.document = document;
    this.selector = 'globalLoader';
  }
  getElement() {
    return this.document.getElementById(this.selector);
  }
  hide() {
    const el = this.getElement();
    if (el) {
      el.addEventListener('transitionend', () => {
        el.className = 'global-loader-hidden';
      });
      if (!el.classList.contains('global-loader-hidden')) {
        el.className += ' global-loader-fade-out';
      }
    }
  }
}
PreloaderService.ɵfac = function PreloaderService_Factory(t) {
  return new (t || PreloaderService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT));
};
PreloaderService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: PreloaderService,
  factory: PreloaderService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 3850:
/*!***************************************************!*\
  !*** ./src/app/core/bootstrap/sanctum.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SANCTUM_PREFIX: () => (/* binding */ SANCTUM_PREFIX),
/* harmony export */   SanctumService: () => (/* binding */ SanctumService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _interceptors_base_url_interceptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../interceptors/base-url-interceptor */ 1841);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 4860);





const SANCTUM_PREFIX = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.InjectionToken('SANCTUM_PREFIX');
class SanctumService {
  constructor(http, baseUrl, prefix) {
    this.http = http;
    this.baseUrl = baseUrl;
    this.prefix = prefix;
  }
  load() {
    return new Promise(resolve => this.toObservable().subscribe(resolve));
  }
  toObservable() {
    return this.http.get(this.getUrl());
  }
  getUrl() {
    const prefix = this.prefix || 'sanctum';
    const path = `/${prefix.replace(/^\/|\/$/g, '')}/csrf-cookie`;
    if (!this.baseUrl) {
      return path;
    }
    const url = new URL(this.baseUrl);
    return url.origin + path;
  }
}
SanctumService.ɵfac = function SanctumService_Factory(t) {
  return new (t || SanctumService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_interceptors_base_url_interceptor__WEBPACK_IMPORTED_MODULE_0__.BASE_URL, 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](SANCTUM_PREFIX, 8));
};
SanctumService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: SanctumService,
  factory: SanctumService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 208:
/*!****************************************************!*\
  !*** ./src/app/core/bootstrap/settings.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SettingsService: () => (/* binding */ SettingsService)
/* harmony export */ });
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared */ 5629);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 8071);
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../settings */ 1122);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/bidi */ 4565);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/layout */ 9743);









class SettingsService {
  get notify() {
    return this.notify$.asObservable();
  }
  constructor(store, mediaMatcher, document, dir) {
    this.store = store;
    this.mediaMatcher = mediaMatcher;
    this.document = document;
    this.dir = dir;
    this.key = 'ng-matero-settings';
    this.notify$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject({});
    const storedOptions = this.store.get(this.key);
    this.options = Object.assign(_settings__WEBPACK_IMPORTED_MODULE_1__.defaults, storedOptions);
    // Check whether the browser support `prefers-color-scheme`
    if (this.options.theme === 'auto' && this.mediaMatcher.matchMedia('(prefers-color-scheme)').media !== 'not all') {
      const isSystemDark = this.mediaMatcher.matchMedia('(prefers-color-scheme: dark)').matches;
      // Set theme to dark if `prefers-color-scheme` is dark. Otherwise, set it to light.
      this.options.theme = isSystemDark ? 'dark' : 'light';
    }
    this.htmlElement = this.document.querySelector('html');
  }
  getOptions() {
    return this.options;
  }
  setOptions(options) {
    this.options = Object.assign(_settings__WEBPACK_IMPORTED_MODULE_1__.defaults, options);
    this.store.set(this.key, this.options);
    this.notify$.next(this.options);
  }
  reset() {
    this.store.remove(this.key);
  }
  getLanguage() {
    return this.options.language;
  }
  setLanguage(lang) {
    this.options.language = lang;
    this.store.set(this.key, this.options);
    this.notify$.next(this.options);
  }
  setDirection() {
    this.dir.value = this.options.dir;
    this.htmlElement.dir = this.dir.value;
  }
  setTheme() {
    if (this.options.theme === 'dark') {
      this.htmlElement.classList.add('theme-dark');
    } else {
      this.htmlElement.classList.remove('theme-dark');
    }
  }
}
SettingsService.ɵfac = function SettingsService_Factory(t) {
  return new (t || SettingsService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_shared__WEBPACK_IMPORTED_MODULE_0__.LocalStorageService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__.MediaMatcher), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__.Directionality));
};
SettingsService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: SettingsService,
  factory: SettingsService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 9619:
/*!***************************************************!*\
  !*** ./src/app/core/bootstrap/startup.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StartupService: () => (/* binding */ StartupService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 3738);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 1891);
/* harmony import */ var _core_authentication__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/authentication */ 3870);
/* harmony import */ var _menu_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.service */ 963);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-permissions */ 7439);








class StartupService {
  constructor(authService, menuService, permissonsService, rolesService) {
    this.authService = authService;
    this.menuService = menuService;
    this.permissonsService = permissonsService;
    this.rolesService = rolesService;
  }
  /**
   * Load the application only after get the menu or other essential informations
   * such as permissions and roles.
   */
  load() {
    return new Promise((resolve, reject) => {
      this.authService.change().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.tap)(user => this.setPermissions(user)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.switchMap)(() => this.authService.menu()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.tap)(menu => this.setMenu(menu))).subscribe(() => resolve(), () => resolve());
    });
  }
  setMenu(menu) {
    this.menuService.addNamespace(menu, 'menu');
    this.menuService.set(menu);
  }
  setPermissions(user) {
    // In a real app, you should get permissions and roles from the user information.
    const permissions = ['canAdd', 'canDelete', 'canEdit', 'canRead'];
    this.permissonsService.loadPermissions(permissions);
    this.rolesService.flushRoles();
    this.rolesService.addRoles({
      ADMIN: permissions
    });
    // Tips: Alternatively you can add permissions with role at the same time.
    // this.rolesService.addRolesWithPermissions({ ADMIN: permissions });
  }
}

StartupService.ɵfac = function StartupService_Factory(t) {
  return new (t || StartupService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_core_authentication__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_menu_service__WEBPACK_IMPORTED_MODULE_1__.MenuService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](ngx_permissions__WEBPACK_IMPORTED_MODULE_5__.NgxPermissionsService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](ngx_permissions__WEBPACK_IMPORTED_MODULE_5__.NgxRolesService));
};
StartupService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
  token: StartupService,
  factory: StartupService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 6638:
/*!**********************************************************!*\
  !*** ./src/app/core/bootstrap/translate-lang.service.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TranslateLangService: () => (/* binding */ TranslateLangService)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _settings_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings.service */ 208);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ 5939);







class TranslateLangService {
  constructor(injector, translate, settings) {
    this.injector = injector;
    this.translate = translate;
    this.settings = settings;
  }
  load() {
    return new Promise(resolve => {
      const locationInitialized = this.injector.get(_angular_common__WEBPACK_IMPORTED_MODULE_1__.LOCATION_INITIALIZED, Promise.resolve());
      locationInitialized.then(() => {
        const browserLang = navigator.language;
        const defaultLang = browserLang.match(/en-US|zh-CN|zh-TW/) ? browserLang : 'en-US';
        this.settings.setLanguage(defaultLang);
        this.translate.setDefaultLang(defaultLang);
        this.translate.use(defaultLang).subscribe(() => console.log(`Successfully initialized '${defaultLang}' language.'`), () => console.error(`Problem with '${defaultLang}' language initialization.'`), () => resolve());
      });
    });
  }
}
TranslateLangService.ɵfac = function TranslateLangService_Factory(t) {
  return new (t || TranslateLangService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injector), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_settings_service__WEBPACK_IMPORTED_MODULE_0__.SettingsService));
};
TranslateLangService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: TranslateLangService,
  factory: TranslateLangService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 8081:
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CoreModule: () => (/* binding */ CoreModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _module_import_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module-import-guard */ 8157);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);



class CoreModule {
  constructor(parentModule) {
    (0,_module_import_guard__WEBPACK_IMPORTED_MODULE_0__.throwIfAlreadyLoaded)(parentModule, 'CoreModule');
  }
}
CoreModule.ɵfac = function CoreModule_Factory(t) {
  return new (t || CoreModule)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](CoreModule, 12));
};
CoreModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: CoreModule
});
CoreModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](CoreModule, {
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule]
  });
})();

/***/ }),

/***/ 9076:
/*!*******************************!*\
  !*** ./src/app/core/index.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthService: () => (/* reexport safe */ _authentication__WEBPACK_IMPORTED_MODULE_9__.AuthService),
/* harmony export */   BASE_URL: () => (/* reexport safe */ _interceptors__WEBPACK_IMPORTED_MODULE_8__.BASE_URL),
/* harmony export */   Base64: () => (/* reexport safe */ _authentication__WEBPACK_IMPORTED_MODULE_9__.Base64),
/* harmony export */   BaseToken: () => (/* reexport safe */ _authentication__WEBPACK_IMPORTED_MODULE_9__.BaseToken),
/* harmony export */   BaseUrlInterceptor: () => (/* reexport safe */ _interceptors__WEBPACK_IMPORTED_MODULE_8__.BaseUrlInterceptor),
/* harmony export */   DefaultInterceptor: () => (/* reexport safe */ _interceptors__WEBPACK_IMPORTED_MODULE_8__.DefaultInterceptor),
/* harmony export */   ErrorInterceptor: () => (/* reexport safe */ _interceptors__WEBPACK_IMPORTED_MODULE_8__.ErrorInterceptor),
/* harmony export */   JwtToken: () => (/* reexport safe */ _authentication__WEBPACK_IMPORTED_MODULE_9__.JwtToken),
/* harmony export */   LoggingInterceptor: () => (/* reexport safe */ _interceptors__WEBPACK_IMPORTED_MODULE_8__.LoggingInterceptor),
/* harmony export */   LoginService: () => (/* reexport safe */ _authentication__WEBPACK_IMPORTED_MODULE_9__.LoginService),
/* harmony export */   MenuService: () => (/* reexport safe */ _bootstrap_menu_service__WEBPACK_IMPORTED_MODULE_2__.MenuService),
/* harmony export */   NoopInterceptor: () => (/* reexport safe */ _interceptors__WEBPACK_IMPORTED_MODULE_8__.NoopInterceptor),
/* harmony export */   PreloaderService: () => (/* reexport safe */ _bootstrap_preloader_service__WEBPACK_IMPORTED_MODULE_5__.PreloaderService),
/* harmony export */   SANCTUM_PREFIX: () => (/* reexport safe */ _bootstrap_sanctum_service__WEBPACK_IMPORTED_MODULE_7__.SANCTUM_PREFIX),
/* harmony export */   STATUS: () => (/* reexport safe */ _interceptors__WEBPACK_IMPORTED_MODULE_8__.STATUS),
/* harmony export */   SanctumService: () => (/* reexport safe */ _bootstrap_sanctum_service__WEBPACK_IMPORTED_MODULE_7__.SanctumService),
/* harmony export */   SettingsInterceptor: () => (/* reexport safe */ _interceptors__WEBPACK_IMPORTED_MODULE_8__.SettingsInterceptor),
/* harmony export */   SettingsService: () => (/* reexport safe */ _bootstrap_settings_service__WEBPACK_IMPORTED_MODULE_3__.SettingsService),
/* harmony export */   SimpleToken: () => (/* reexport safe */ _authentication__WEBPACK_IMPORTED_MODULE_9__.SimpleToken),
/* harmony export */   StartupService: () => (/* reexport safe */ _bootstrap_startup_service__WEBPACK_IMPORTED_MODULE_4__.StartupService),
/* harmony export */   StartupServiceFactory: () => (/* reexport safe */ _initializers__WEBPACK_IMPORTED_MODULE_1__.StartupServiceFactory),
/* harmony export */   TokenFactory: () => (/* reexport safe */ _authentication__WEBPACK_IMPORTED_MODULE_9__.TokenFactory),
/* harmony export */   TokenInterceptor: () => (/* reexport safe */ _interceptors__WEBPACK_IMPORTED_MODULE_8__.TokenInterceptor),
/* harmony export */   TokenService: () => (/* reexport safe */ _authentication__WEBPACK_IMPORTED_MODULE_9__.TokenService),
/* harmony export */   TranslateLangService: () => (/* reexport safe */ _bootstrap_translate_lang_service__WEBPACK_IMPORTED_MODULE_6__.TranslateLangService),
/* harmony export */   TranslateLangServiceFactory: () => (/* reexport safe */ _initializers__WEBPACK_IMPORTED_MODULE_1__.TranslateLangServiceFactory),
/* harmony export */   admin: () => (/* reexport safe */ _authentication__WEBPACK_IMPORTED_MODULE_9__.admin),
/* harmony export */   appInitializerProviders: () => (/* reexport safe */ _initializers__WEBPACK_IMPORTED_MODULE_1__.appInitializerProviders),
/* harmony export */   authGuard: () => (/* reexport safe */ _authentication__WEBPACK_IMPORTED_MODULE_9__.authGuard),
/* harmony export */   base64: () => (/* reexport safe */ _authentication__WEBPACK_IMPORTED_MODULE_9__.base64),
/* harmony export */   capitalize: () => (/* reexport safe */ _authentication__WEBPACK_IMPORTED_MODULE_9__.capitalize),
/* harmony export */   currentTimestamp: () => (/* reexport safe */ _authentication__WEBPACK_IMPORTED_MODULE_9__.currentTimestamp),
/* harmony export */   defaults: () => (/* reexport safe */ _settings__WEBPACK_IMPORTED_MODULE_0__.defaults),
/* harmony export */   filterObject: () => (/* reexport safe */ _authentication__WEBPACK_IMPORTED_MODULE_9__.filterObject),
/* harmony export */   guest: () => (/* reexport safe */ _authentication__WEBPACK_IMPORTED_MODULE_9__.guest),
/* harmony export */   httpInterceptorProviders: () => (/* reexport safe */ _interceptors__WEBPACK_IMPORTED_MODULE_8__.httpInterceptorProviders),
/* harmony export */   isEmptyObject: () => (/* reexport safe */ _authentication__WEBPACK_IMPORTED_MODULE_9__.isEmptyObject),
/* harmony export */   pack: () => (/* reexport safe */ _authentication__WEBPACK_IMPORTED_MODULE_9__.pack),
/* harmony export */   timeLeft: () => (/* reexport safe */ _authentication__WEBPACK_IMPORTED_MODULE_9__.timeLeft),
/* harmony export */   unpack: () => (/* reexport safe */ _authentication__WEBPACK_IMPORTED_MODULE_9__.unpack)
/* harmony export */ });
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings */ 1122);
/* harmony import */ var _initializers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./initializers */ 1884);
/* harmony import */ var _bootstrap_menu_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bootstrap/menu.service */ 963);
/* harmony import */ var _bootstrap_settings_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bootstrap/settings.service */ 208);
/* harmony import */ var _bootstrap_startup_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./bootstrap/startup.service */ 9619);
/* harmony import */ var _bootstrap_preloader_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bootstrap/preloader.service */ 8140);
/* harmony import */ var _bootstrap_translate_lang_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bootstrap/translate-lang.service */ 6638);
/* harmony import */ var _bootstrap_sanctum_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./bootstrap/sanctum.service */ 3850);
/* harmony import */ var _interceptors__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./interceptors */ 6031);
/* harmony import */ var _authentication__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./authentication */ 3870);


// Bootstrap






// Interceptors

// Authentication


/***/ }),

/***/ 1884:
/*!**************************************!*\
  !*** ./src/app/core/initializers.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StartupServiceFactory: () => (/* binding */ StartupServiceFactory),
/* harmony export */   TranslateLangServiceFactory: () => (/* binding */ TranslateLangServiceFactory),
/* harmony export */   appInitializerProviders: () => (/* binding */ appInitializerProviders)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _bootstrap_translate_lang_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bootstrap/translate-lang.service */ 6638);
/* harmony import */ var _bootstrap_startup_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bootstrap/startup.service */ 9619);

// import { SanctumService } from './bootstrap/sanctum.service';
// export function SanctumServiceFactory(sanctumService: SanctumService) {
//   return () => sanctumService.load();
// }

function TranslateLangServiceFactory(translateLangService) {
  return () => translateLangService.load();
}

function StartupServiceFactory(startupService) {
  return () => startupService.load();
}
const appInitializerProviders = [
// {
//   provide: APP_INITIALIZER,
//   useFactory: SanctumServiceFactory,
//   deps: [SanctumService],
//   multi: true,
// },
{
  provide: _angular_core__WEBPACK_IMPORTED_MODULE_2__.APP_INITIALIZER,
  useFactory: TranslateLangServiceFactory,
  deps: [_bootstrap_translate_lang_service__WEBPACK_IMPORTED_MODULE_0__.TranslateLangService],
  multi: true
}, {
  provide: _angular_core__WEBPACK_IMPORTED_MODULE_2__.APP_INITIALIZER,
  useFactory: StartupServiceFactory,
  deps: [_bootstrap_startup_service__WEBPACK_IMPORTED_MODULE_1__.StartupService],
  multi: true
}];

/***/ }),

/***/ 1841:
/*!***********************************************************!*\
  !*** ./src/app/core/interceptors/base-url-interceptor.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BASE_URL: () => (/* binding */ BASE_URL),
/* harmony export */   BaseUrlInterceptor: () => (/* binding */ BaseUrlInterceptor)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);



const BASE_URL = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('BASE_URL');
class BaseUrlInterceptor {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
    this.hasScheme = url => this.baseUrl && new RegExp('^http(s)?://', 'i').test(url);
  }
  intercept(request, next) {
    return this.hasScheme(request.url) === false ? next.handle(request.clone({
      url: this.prependBaseUrl(request.url)
    })) : next.handle(request);
  }
  prependBaseUrl(url) {
    return [this.baseUrl?.replace(/\/$/g, ''), url.replace(/^\.?\//, '')].filter(val => val).join('/');
  }
}
BaseUrlInterceptor.ɵfac = function BaseUrlInterceptor_Factory(t) {
  return new (t || BaseUrlInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](BASE_URL, 8));
};
BaseUrlInterceptor.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: BaseUrlInterceptor,
  factory: BaseUrlInterceptor.ɵfac
});

/***/ }),

/***/ 6962:
/*!**********************************************************!*\
  !*** ./src/app/core/interceptors/default-interceptor.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DefaultInterceptor: () => (/* binding */ DefaultInterceptor)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 3252);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 4980);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ 2607);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ 7548);






class DefaultInterceptor {
  constructor(toast) {
    this.toast = toast;
  }
  intercept(req, next) {
    if (!req.url.includes('/api/')) {
      return next.handle(req);
    }
    return next.handle(req).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.mergeMap)(event => this.handleOkReq(event)));
  }
  handleOkReq(event) {
    if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpResponse) {
      const body = event.body;
      // failure: { code: **, msg: 'failure' }
      // success: { code: 0,  msg: 'success', data: {} }
      if (body && 'code' in body && body.code !== 0) {
        if (body.msg) {
          this.toast.error(body.msg);
        }
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.throwError)(() => []);
      }
    }
    // Pass down event if everything is OK
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(event);
  }
}
DefaultInterceptor.ɵfac = function DefaultInterceptor_Factory(t) {
  return new (t || DefaultInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_5__.ToastrService));
};
DefaultInterceptor.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
  token: DefaultInterceptor,
  factory: DefaultInterceptor.ɵfac
});

/***/ }),

/***/ 6338:
/*!********************************************************!*\
  !*** ./src/app/core/interceptors/error-interceptor.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ErrorInterceptor: () => (/* binding */ ErrorInterceptor),
/* harmony export */   STATUS: () => (/* binding */ STATUS)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 3252);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ 2389);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ 7548);








var STATUS;
(function (STATUS) {
  STATUS[STATUS["UNAUTHORIZED"] = 401] = "UNAUTHORIZED";
  STATUS[STATUS["FORBIDDEN"] = 403] = "FORBIDDEN";
  STATUS[STATUS["NOT_FOUND"] = 404] = "NOT_FOUND";
  STATUS[STATUS["INTERNAL_SERVER_ERROR"] = 500] = "INTERNAL_SERVER_ERROR";
})(STATUS || (STATUS = {}));
class ErrorInterceptor {
  constructor(router, toast) {
    this.router = router;
    this.toast = toast;
    this.errorPages = [STATUS.FORBIDDEN, STATUS.NOT_FOUND, STATUS.INTERNAL_SERVER_ERROR];
    this.getMessage = error => {
      if (error.error?.message) {
        return error.error.message;
      }
      if (error.error?.msg) {
        return error.error.msg;
      }
      return `${error.status} ${error.statusText}`;
    };
  }
  intercept(request, next) {
    return next.handle(request).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.catchError)(error => this.handleError(error)));
  }
  handleError(error) {
    if (this.errorPages.includes(error.status)) {
      this.router.navigateByUrl(`/${error.status}`, {
        skipLocationChange: true
      });
    } else {
      console.error('ERROR', error);
      this.toast.error(this.getMessage(error));
      if (error.status === STATUS.UNAUTHORIZED) {
        this.router.navigateByUrl('/auth/login');
      }
    }
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.throwError)(() => error);
  }
}
ErrorInterceptor.ɵfac = function ErrorInterceptor_Factory(t) {
  return new (t || ErrorInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__.ToastrService));
};
ErrorInterceptor.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: ErrorInterceptor,
  factory: ErrorInterceptor.ɵfac
});

/***/ }),

/***/ 6031:
/*!********************************************!*\
  !*** ./src/app/core/interceptors/index.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BASE_URL: () => (/* reexport safe */ _base_url_interceptor__WEBPACK_IMPORTED_MODULE_1__.BASE_URL),
/* harmony export */   BaseUrlInterceptor: () => (/* reexport safe */ _base_url_interceptor__WEBPACK_IMPORTED_MODULE_1__.BaseUrlInterceptor),
/* harmony export */   DefaultInterceptor: () => (/* reexport safe */ _default_interceptor__WEBPACK_IMPORTED_MODULE_4__.DefaultInterceptor),
/* harmony export */   ErrorInterceptor: () => (/* reexport safe */ _error_interceptor__WEBPACK_IMPORTED_MODULE_5__.ErrorInterceptor),
/* harmony export */   LoggingInterceptor: () => (/* reexport safe */ _logging_interceptor__WEBPACK_IMPORTED_MODULE_6__.LoggingInterceptor),
/* harmony export */   NoopInterceptor: () => (/* reexport safe */ _noop_interceptor__WEBPACK_IMPORTED_MODULE_0__.NoopInterceptor),
/* harmony export */   STATUS: () => (/* reexport safe */ _error_interceptor__WEBPACK_IMPORTED_MODULE_5__.STATUS),
/* harmony export */   SettingsInterceptor: () => (/* reexport safe */ _settings_interceptor__WEBPACK_IMPORTED_MODULE_2__.SettingsInterceptor),
/* harmony export */   TokenInterceptor: () => (/* reexport safe */ _token_interceptor__WEBPACK_IMPORTED_MODULE_3__.TokenInterceptor),
/* harmony export */   httpInterceptorProviders: () => (/* binding */ httpInterceptorProviders)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var _noop_interceptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./noop-interceptor */ 9957);
/* harmony import */ var _base_url_interceptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base-url-interceptor */ 1841);
/* harmony import */ var _settings_interceptor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./settings-interceptor */ 3128);
/* harmony import */ var _token_interceptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./token-interceptor */ 9170);
/* harmony import */ var _default_interceptor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./default-interceptor */ 6962);
/* harmony import */ var _error_interceptor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./error-interceptor */ 6338);
/* harmony import */ var _logging_interceptor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./logging-interceptor */ 3182);


// import { SanctumInterceptor } from './sanctum-interceptor';







// export * from './sanctum-interceptor';






/** Http interceptor providers in outside-in order */
const httpInterceptorProviders = [{
  provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HTTP_INTERCEPTORS,
  useClass: _noop_interceptor__WEBPACK_IMPORTED_MODULE_0__.NoopInterceptor,
  multi: true
},
// { provide: HTTP_INTERCEPTORS, useClass: SanctumInterceptor, multi: true },
{
  provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HTTP_INTERCEPTORS,
  useClass: _base_url_interceptor__WEBPACK_IMPORTED_MODULE_1__.BaseUrlInterceptor,
  multi: true
}, {
  provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HTTP_INTERCEPTORS,
  useClass: _settings_interceptor__WEBPACK_IMPORTED_MODULE_2__.SettingsInterceptor,
  multi: true
}, {
  provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HTTP_INTERCEPTORS,
  useClass: _token_interceptor__WEBPACK_IMPORTED_MODULE_3__.TokenInterceptor,
  multi: true
}, {
  provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HTTP_INTERCEPTORS,
  useClass: _default_interceptor__WEBPACK_IMPORTED_MODULE_4__.DefaultInterceptor,
  multi: true
}, {
  provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HTTP_INTERCEPTORS,
  useClass: _error_interceptor__WEBPACK_IMPORTED_MODULE_5__.ErrorInterceptor,
  multi: true
}, {
  provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HTTP_INTERCEPTORS,
  useClass: _logging_interceptor__WEBPACK_IMPORTED_MODULE_6__.LoggingInterceptor,
  multi: true
}];

/***/ }),

/***/ 3182:
/*!**********************************************************!*\
  !*** ./src/app/core/interceptors/logging-interceptor.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoggingInterceptor: () => (/* binding */ LoggingInterceptor)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 3738);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 7474);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared */ 5629);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);





class LoggingInterceptor {
  constructor(messenger) {
    this.messenger = messenger;
  }
  intercept(req, next) {
    const started = Date.now();
    let ok;
    // extend server response observable with logging
    return next.handle(req).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.tap)({
      // Succeeds when there is a response; ignore other events
      next: event => ok = event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpResponse ? 'succeeded' : '',
      // Operation failed; error is an HttpErrorResponse
      error: error => ok = 'failed'
    }),
    // Log when response observable either completes or errors
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.finalize)(() => {
      const elapsed = Date.now() - started;
      const msg = `${req.method} "${req.urlWithParams}" ${ok} in ${elapsed} ms.`;
      this.messenger.add(msg);
    }));
  }
}
LoggingInterceptor.ɵfac = function LoggingInterceptor_Factory(t) {
  return new (t || LoggingInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_shared__WEBPACK_IMPORTED_MODULE_0__.MessageService));
};
LoggingInterceptor.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
  token: LoggingInterceptor,
  factory: LoggingInterceptor.ɵfac
});

/***/ }),

/***/ 9957:
/*!*******************************************************!*\
  !*** ./src/app/core/interceptors/noop-interceptor.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NoopInterceptor: () => (/* binding */ NoopInterceptor)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);


class NoopInterceptor {
  intercept(req, next) {
    return next.handle(req);
  }
}
NoopInterceptor.ɵfac = function NoopInterceptor_Factory(t) {
  return new (t || NoopInterceptor)();
};
NoopInterceptor.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: NoopInterceptor,
  factory: NoopInterceptor.ɵfac
});

/***/ }),

/***/ 3128:
/*!***********************************************************!*\
  !*** ./src/app/core/interceptors/settings-interceptor.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SettingsInterceptor: () => (/* binding */ SettingsInterceptor)
/* harmony export */ });
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core */ 9076);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);




class SettingsInterceptor {
  constructor(settings) {
    this.settings = settings;
  }
  intercept(request, next) {
    return next.handle(request.clone({
      headers: request.headers.append('Accept-Language', this.settings.getLanguage())
    }));
  }
}
SettingsInterceptor.ɵfac = function SettingsInterceptor_Factory(t) {
  return new (t || SettingsInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_core__WEBPACK_IMPORTED_MODULE_0__.SettingsService));
};
SettingsInterceptor.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: SettingsInterceptor,
  factory: SettingsInterceptor.ɵfac
});

/***/ }),

/***/ 9170:
/*!********************************************************!*\
  !*** ./src/app/core/interceptors/token-interceptor.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TokenInterceptor: () => (/* binding */ TokenInterceptor)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 3252);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 2389);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 3738);
/* harmony import */ var _core_authentication__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/authentication */ 3870);
/* harmony import */ var _base_url_interceptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base-url-interceptor */ 1841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 7947);









class TokenInterceptor {
  constructor(tokenService, router, baseUrl) {
    this.tokenService = tokenService;
    this.router = router;
    this.baseUrl = baseUrl;
    this.hasHttpScheme = url => new RegExp('^http(s)?://', 'i').test(url);
  }
  intercept(request, next) {
    const handler = () => {
      if (request.url.includes('/auth/logout')) {
        this.router.navigateByUrl('/auth/login');
      }
      if (this.router.url.includes('/auth/login')) {
        this.router.navigateByUrl('/dashboard');
      }
    };
    if (this.tokenService.valid() && this.shouldAppendToken(request.url)) {
      return next.handle(request.clone({
        headers: request.headers.append('Authorization', this.tokenService.getBearerToken()),
        withCredentials: true
      })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(error => {
        if (error.status === 401) {
          this.tokenService.clear();
        }
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(() => error);
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(() => handler()));
    }
    return next.handle(request).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(() => handler()));
  }
  shouldAppendToken(url) {
    return !this.hasHttpScheme(url) || this.includeBaseUrl(url);
  }
  includeBaseUrl(url) {
    if (!this.baseUrl) {
      return false;
    }
    const baseUrl = this.baseUrl.replace(/\/$/, '');
    return new RegExp(`^${baseUrl}`, 'i').test(url);
  }
}
TokenInterceptor.ɵfac = function TokenInterceptor_Factory(t) {
  return new (t || TokenInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_core_authentication__WEBPACK_IMPORTED_MODULE_0__.TokenService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_base_url_interceptor__WEBPACK_IMPORTED_MODULE_1__.BASE_URL, 8));
};
TokenInterceptor.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
  token: TokenInterceptor,
  factory: TokenInterceptor.ɵfac
});

/***/ }),

/***/ 8157:
/*!*********************************************!*\
  !*** ./src/app/core/module-import-guard.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   throwIfAlreadyLoaded: () => (/* binding */ throwIfAlreadyLoaded)
/* harmony export */ });
function throwIfAlreadyLoaded(parentModule, moduleName) {
  if (parentModule) {
    throw new Error(`${moduleName} has already been loaded. Import Core modules in the AppModule only.`);
  }
}

/***/ }),

/***/ 1122:
/*!**********************************!*\
  !*** ./src/app/core/settings.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaults: () => (/* binding */ defaults)
/* harmony export */ });
const defaults = {
  navPos: 'side',
  theme: 'auto',
  dir: 'ltr',
  showHeader: true,
  headerPos: 'fixed',
  showUserPanel: true,
  sidenavOpened: true,
  sidenavCollapsed: false,
  language: 'en-US'
};

/***/ }),

/***/ 5513:
/*!***************************************!*\
  !*** ./src/app/fake-login.service.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FakeLoginService: () => (/* binding */ FakeLoginService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 4980);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core */ 9076);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 9736);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);




/**
 * You should delete this file in the real APP.
 */
class FakeLoginService extends _core__WEBPACK_IMPORTED_MODULE_0__.LoginService {
  constructor() {
    super(...arguments);
    this.token = {
      access_token: 'MW56YjMyOUAxNjMuY29tWm9uZ2Jpbg==',
      token_type: 'bearer'
    };
  }
  login() {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(this.token);
  }
  refresh() {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(this.token);
  }
  logout() {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)({});
  }
  me() {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(_core__WEBPACK_IMPORTED_MODULE_0__.admin);
  }
  menu() {
    return this.http.get('assets/data/menu.json?_t=' + Date.now()).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(res => res.menu));
  }
}
FakeLoginService.ɵfac = /*@__PURE__*/function () {
  let ɵFakeLoginService_BaseFactory;
  return function FakeLoginService_Factory(t) {
    return (ɵFakeLoginService_BaseFactory || (ɵFakeLoginService_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetInheritedFactory"](FakeLoginService)))(t || FakeLoginService);
  };
}();
FakeLoginService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: FakeLoginService,
  factory: FakeLoginService.ɵfac
});

/***/ }),

/***/ 1563:
/*!*****************************************!*\
  !*** ./src/app/formly-config.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FormlyConfigModule: () => (/* binding */ FormlyConfigModule)
/* harmony export */ });
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared/shared.module */ 6208);
/* harmony import */ var _ngx_formly_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-formly/core */ 8399);
/* harmony import */ var _formly_templates__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./formly-templates */ 705);
/* harmony import */ var _formly_wrappers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./formly-wrappers */ 8767);
/* harmony import */ var _formly_validations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./formly-validations */ 7139);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1699);








/**
 * Formly global configuration
 */
const formlyModuleProviders = _ngx_formly_core__WEBPACK_IMPORTED_MODULE_4__.FormlyModule.forRoot({
  types: [{
    name: 'combobox',
    component: _formly_templates__WEBPACK_IMPORTED_MODULE_1__.FormlyFieldComboboxComponent,
    wrappers: ['form-field']
  }],
  wrappers: [{
    name: 'card',
    component: _formly_wrappers__WEBPACK_IMPORTED_MODULE_2__.FormlyWrapperCardComponent
  }, {
    name: 'div',
    component: _formly_wrappers__WEBPACK_IMPORTED_MODULE_2__.FormlyWrapperDivComponent
  }],
  validationMessages: []
}).providers;
class FormlyConfigModule {
  constructor(formlyValidations) {
    formlyValidations.init();
  }
  static forRoot() {
    return {
      ngModule: FormlyConfigModule,
      providers: [formlyModuleProviders]
    };
  }
}
FormlyConfigModule.ɵfac = function FormlyConfigModule_Factory(t) {
  return new (t || FormlyConfigModule)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_formly_validations__WEBPACK_IMPORTED_MODULE_3__.FormlyValidations));
};
FormlyConfigModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
  type: FormlyConfigModule
});
FormlyConfigModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
  providers: [_formly_validations__WEBPACK_IMPORTED_MODULE_3__.FormlyValidations],
  imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](FormlyConfigModule, {
    declarations: [_formly_templates__WEBPACK_IMPORTED_MODULE_1__.FormlyFieldComboboxComponent, _formly_wrappers__WEBPACK_IMPORTED_MODULE_2__.FormlyWrapperCardComponent, _formly_wrappers__WEBPACK_IMPORTED_MODULE_2__.FormlyWrapperDivComponent],
    imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule]
  });
})();

/***/ }),

/***/ 705:
/*!*************************************!*\
  !*** ./src/app/formly-templates.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FormlyFieldComboboxComponent: () => (/* binding */ FormlyFieldComboboxComponent)
/* harmony export */ });
/* harmony import */ var _ngx_formly_material_form_field__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-formly/material/form-field */ 6456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _ng_matero_extensions_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-matero/extensions/select */ 218);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _shared_pipes_to_observable_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared/pipes/to-observable.pipe */ 6124);







const _c0 = ["select"];
/**
 * This is just an example.
 */
class FormlyFieldComboboxComponent extends _ngx_formly_material_form_field__WEBPACK_IMPORTED_MODULE_1__.FieldType {
  get bindLabel() {
    return typeof this.props.labelProp === 'string' ? this.props.labelProp : '';
  }
  get bindValue() {
    return typeof this.props.valueProp === 'string' ? this.props.valueProp : undefined;
  }
  // The original `onContainerClick` has been covered up in FieldType, so we should redefine it.
  onContainerClick(event) {
    const target = event.target;
    if (/mat-form-field|mtx-select/g.test(target.parentElement?.classList[0] || '')) {
      this.select.focus();
      this.select.open();
    }
  }
}
FormlyFieldComboboxComponent.ɵfac = /*@__PURE__*/function () {
  let ɵFormlyFieldComboboxComponent_BaseFactory;
  return function FormlyFieldComboboxComponent_Factory(t) {
    return (ɵFormlyFieldComboboxComponent_BaseFactory || (ɵFormlyFieldComboboxComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](FormlyFieldComboboxComponent)))(t || FormlyFieldComboboxComponent);
  };
}();
FormlyFieldComboboxComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: FormlyFieldComboboxComponent,
  selectors: [["formly-field-combobox"]],
  viewQuery: function FormlyFieldComboboxComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 7);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.select = _t.first);
    }
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]],
  decls: 4,
  vars: 13,
  consts: [[3, "formControl", "items", "bindLabel", "bindValue", "multiple", "placeholder", "required", "closeOnSelect", "compareWith"], ["select", ""]],
  template: function FormlyFieldComboboxComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "mtx-select", 0, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "toObservable");
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx.formControl)("items", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 9, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 11, ctx.props.options)))("bindLabel", ctx.bindLabel)("bindValue", ctx.bindValue)("multiple", ctx.props.multiple)("placeholder", ctx.props.placeholder)("required", ctx.props.required)("closeOnSelect", !ctx.props.multiple)("compareWith", ctx.props.compareWith);
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlDirective, _ng_matero_extensions_select__WEBPACK_IMPORTED_MODULE_4__.MtxSelect, _angular_common__WEBPACK_IMPORTED_MODULE_5__.AsyncPipe, _shared_pipes_to_observable_pipe__WEBPACK_IMPORTED_MODULE_0__.ToObservablePipe],
  encapsulation: 2,
  changeDetection: 0
});

/***/ }),

/***/ 7139:
/*!***************************************!*\
  !*** ./src/app/formly-validations.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FormlyValidations: () => (/* binding */ FormlyValidations)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ 5939);
/* harmony import */ var _ngx_formly_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-formly/core */ 8399);





class FormlyValidations {
  constructor(translate, formlyConfig) {
    this.translate = translate;
    this.formlyConfig = formlyConfig;
  }
  init() {
    // message without params
    this.formlyConfig.addValidatorMessage('required', (_err, _field) => this.translate.stream('validations.required'));
    // message with params
    this.formlyConfig.addValidatorMessage('minLength', (err, field) => this.minLengthValidationMessage(err, field, this.translate));
    this.formlyConfig.addValidatorMessage('maxLength', (err, field) => this.maxLengthValidationMessage(err, field, this.translate));
    this.formlyConfig.addValidatorMessage('min', (err, field) => this.minValidationMessage(err, field, this.translate));
    this.formlyConfig.addValidatorMessage('max', (err, field) => this.maxValidationMessage(err, field, this.translate));
  }
  minLengthValidationMessage(err, field, translate) {
    return translate.stream('validations.minlength', {
      number: field.props?.minLength
    });
  }
  maxLengthValidationMessage(err, field, translate) {
    return translate.stream('validations.maxlength', {
      number: field.props?.maxLength
    });
  }
  minValidationMessage(err, field, translate) {
    return translate.stream('validations.min', {
      number: field.props?.min
    });
  }
  maxValidationMessage(err, field, translate) {
    return translate.stream('validations.max', {
      number: field.props?.max
    });
  }
}
FormlyValidations.ɵfac = function FormlyValidations_Factory(t) {
  return new (t || FormlyValidations)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngx_formly_core__WEBPACK_IMPORTED_MODULE_2__.FormlyConfig));
};
FormlyValidations.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: FormlyValidations,
  factory: FormlyValidations.ɵfac
});

/***/ }),

/***/ 8767:
/*!************************************!*\
  !*** ./src/app/formly-wrappers.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FormlyWrapperCardComponent: () => (/* binding */ FormlyWrapperCardComponent),
/* harmony export */   FormlyWrapperDivComponent: () => (/* binding */ FormlyWrapperDivComponent)
/* harmony export */ });
/* harmony import */ var _ngx_formly_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngx-formly/core */ 8399);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);


/**
 * This is just an example.
 */
class FormlyWrapperCardComponent extends _ngx_formly_core__WEBPACK_IMPORTED_MODULE_0__.FieldWrapper {}
FormlyWrapperCardComponent.ɵfac = /*@__PURE__*/function () {
  let ɵFormlyWrapperCardComponent_BaseFactory;
  return function FormlyWrapperCardComponent_Factory(t) {
    return (ɵFormlyWrapperCardComponent_BaseFactory || (ɵFormlyWrapperCardComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](FormlyWrapperCardComponent)))(t || FormlyWrapperCardComponent);
  };
}();
FormlyWrapperCardComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: FormlyWrapperCardComponent,
  selectors: [["formly-wrapper-card"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
  decls: 8,
  vars: 1,
  consts: [[1, "card"], [1, "card-header"], [1, "card-body"], ["fieldComponent", ""]],
  template: function FormlyWrapperCardComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "h3", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Its time to party");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h3", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](6, null, 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.props.label);
    }
  },
  encapsulation: 2
});
class FormlyWrapperDivComponent extends _ngx_formly_core__WEBPACK_IMPORTED_MODULE_0__.FieldWrapper {}
FormlyWrapperDivComponent.ɵfac = /*@__PURE__*/function () {
  let ɵFormlyWrapperDivComponent_BaseFactory;
  return function FormlyWrapperDivComponent_Factory(t) {
    return (ɵFormlyWrapperDivComponent_BaseFactory || (ɵFormlyWrapperDivComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](FormlyWrapperDivComponent)))(t || FormlyWrapperDivComponent);
  };
}();
FormlyWrapperDivComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: FormlyWrapperDivComponent,
  selectors: [["formly-wrapper-div"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
  decls: 3,
  vars: 0,
  consts: [["fieldComponent", ""]],
  template: function FormlyWrapperDivComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](1, null, 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
  },
  encapsulation: 2
});

/***/ }),

/***/ 4566:
/*!***********************************************!*\
  !*** ./src/app/material-extensions.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MaterialExtensionsModule: () => (/* binding */ MaterialExtensionsModule)
/* harmony export */ });
/* harmony import */ var _ng_matero_extensions_alert__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-matero/extensions/alert */ 5100);
/* harmony import */ var _ng_matero_extensions_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-matero/extensions/button */ 9326);
/* harmony import */ var _ng_matero_extensions_checkbox_group__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-matero/extensions/checkbox-group */ 5093);
/* harmony import */ var _ng_matero_extensions_colorpicker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-matero/extensions/colorpicker */ 3326);
/* harmony import */ var _ng_matero_extensions_datetimepicker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-matero/extensions/datetimepicker */ 9226);
/* harmony import */ var _ng_matero_extensions_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-matero/extensions/dialog */ 803);
/* harmony import */ var _ng_matero_extensions_drawer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-matero/extensions/drawer */ 5039);
/* harmony import */ var _ng_matero_extensions_grid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-matero/extensions/grid */ 4408);
/* harmony import */ var _ng_matero_extensions_loader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-matero/extensions/loader */ 7303);
/* harmony import */ var _ng_matero_extensions_popover__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-matero/extensions/popover */ 6062);
/* harmony import */ var _ng_matero_extensions_progress__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ng-matero/extensions/progress */ 9501);
/* harmony import */ var _ng_matero_extensions_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ng-matero/extensions/select */ 218);
/* harmony import */ var _ng_matero_extensions_slider__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ng-matero/extensions/slider */ 7698);
/* harmony import */ var _ng_matero_extensions_split__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ng-matero/extensions/split */ 2640);
/* harmony import */ var _ng_matero_extensions_tooltip__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ng-matero/extensions/tooltip */ 3053);
/* harmony import */ var _ng_matero_extensions_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-matero/extensions/core */ 9272);
/* harmony import */ var _ng_matero_extensions_moment_adapter__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ng-matero/extensions-moment-adapter */ 9569);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);


















class MaterialExtensionsModule {}
MaterialExtensionsModule.ɵfac = function MaterialExtensionsModule_Factory(t) {
  return new (t || MaterialExtensionsModule)();
};
MaterialExtensionsModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: MaterialExtensionsModule
});
MaterialExtensionsModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  providers: [{
    provide: _ng_matero_extensions_core__WEBPACK_IMPORTED_MODULE_1__.MTX_DATETIME_FORMATS,
    useValue: {
      parse: {
        dateInput: 'YYYY-MM-DD',
        yearInput: 'YYYY',
        monthInput: 'MMMM',
        datetimeInput: 'YYYY-MM-DD HH:mm',
        timeInput: 'HH:mm'
      },
      display: {
        dateInput: 'YYYY-MM-DD',
        yearInput: 'YYYY',
        monthInput: 'MMMM',
        datetimeInput: 'YYYY-MM-DD HH:mm',
        timeInput: 'HH:mm',
        monthYearLabel: 'YYYY MMMM',
        dateA11yLabel: 'LL',
        monthYearA11yLabel: 'MMMM YYYY',
        popupHeaderDateLabel: 'MMM DD, ddd'
      }
    }
  }],
  imports: [_ng_matero_extensions_alert__WEBPACK_IMPORTED_MODULE_2__.MtxAlertModule, _ng_matero_extensions_button__WEBPACK_IMPORTED_MODULE_3__.MtxButtonModule, _ng_matero_extensions_checkbox_group__WEBPACK_IMPORTED_MODULE_4__.MtxCheckboxGroupModule, _ng_matero_extensions_colorpicker__WEBPACK_IMPORTED_MODULE_5__.MtxColorpickerModule, _ng_matero_extensions_datetimepicker__WEBPACK_IMPORTED_MODULE_6__.MtxDatetimepickerModule, _ng_matero_extensions_dialog__WEBPACK_IMPORTED_MODULE_7__.MtxDialogModule, _ng_matero_extensions_drawer__WEBPACK_IMPORTED_MODULE_8__.MtxDrawerModule, _ng_matero_extensions_grid__WEBPACK_IMPORTED_MODULE_9__.MtxGridModule, _ng_matero_extensions_loader__WEBPACK_IMPORTED_MODULE_10__.MtxLoaderModule, _ng_matero_extensions_popover__WEBPACK_IMPORTED_MODULE_11__.MtxPopoverModule, _ng_matero_extensions_progress__WEBPACK_IMPORTED_MODULE_12__.MtxProgressModule, _ng_matero_extensions_select__WEBPACK_IMPORTED_MODULE_13__.MtxSelectModule, _ng_matero_extensions_slider__WEBPACK_IMPORTED_MODULE_14__.MtxSliderModule, _ng_matero_extensions_split__WEBPACK_IMPORTED_MODULE_15__.MtxSplitModule, _ng_matero_extensions_tooltip__WEBPACK_IMPORTED_MODULE_16__.MtxTooltipModule, _ng_matero_extensions_moment_adapter__WEBPACK_IMPORTED_MODULE_17__.MtxMomentDatetimeModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MaterialExtensionsModule, {
    exports: [_ng_matero_extensions_alert__WEBPACK_IMPORTED_MODULE_2__.MtxAlertModule, _ng_matero_extensions_button__WEBPACK_IMPORTED_MODULE_3__.MtxButtonModule, _ng_matero_extensions_checkbox_group__WEBPACK_IMPORTED_MODULE_4__.MtxCheckboxGroupModule, _ng_matero_extensions_colorpicker__WEBPACK_IMPORTED_MODULE_5__.MtxColorpickerModule, _ng_matero_extensions_datetimepicker__WEBPACK_IMPORTED_MODULE_6__.MtxDatetimepickerModule, _ng_matero_extensions_dialog__WEBPACK_IMPORTED_MODULE_7__.MtxDialogModule, _ng_matero_extensions_drawer__WEBPACK_IMPORTED_MODULE_8__.MtxDrawerModule, _ng_matero_extensions_grid__WEBPACK_IMPORTED_MODULE_9__.MtxGridModule, _ng_matero_extensions_loader__WEBPACK_IMPORTED_MODULE_10__.MtxLoaderModule, _ng_matero_extensions_popover__WEBPACK_IMPORTED_MODULE_11__.MtxPopoverModule, _ng_matero_extensions_progress__WEBPACK_IMPORTED_MODULE_12__.MtxProgressModule, _ng_matero_extensions_select__WEBPACK_IMPORTED_MODULE_13__.MtxSelectModule, _ng_matero_extensions_slider__WEBPACK_IMPORTED_MODULE_14__.MtxSliderModule, _ng_matero_extensions_split__WEBPACK_IMPORTED_MODULE_15__.MtxSplitModule, _ng_matero_extensions_tooltip__WEBPACK_IMPORTED_MODULE_16__.MtxTooltipModule, _ng_matero_extensions_moment_adapter__WEBPACK_IMPORTED_MODULE_17__.MtxMomentDatetimeModule]
  });
})();

/***/ }),

/***/ 9099:
/*!************************************!*\
  !*** ./src/app/material.module.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MaterialModule: () => (/* binding */ MaterialModule)
/* harmony export */ });
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/autocomplete */ 9892);
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/badge */ 5392);
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/bottom-sheet */ 8740);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 895);
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button-toggle */ 727);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/card */ 8497);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/checkbox */ 6658);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/chips */ 1757);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/core */ 5309);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/datepicker */ 2226);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ 7401);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/divider */ 9400);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/expansion */ 8060);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/form-field */ 1333);
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/grid-list */ 647);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/icon */ 6515);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/input */ 26);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/list */ 3228);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/menu */ 8128);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/paginator */ 9687);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/progress-bar */ 8173);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/progress-spinner */ 3910);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/radio */ 2106);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/select */ 6355);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/sidenav */ 1465);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/slide-toggle */ 9293);
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/slider */ 549);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/snack-bar */ 9409);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/sort */ 7963);
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/stepper */ 6272);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/table */ 6798);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/tabs */ 989);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/toolbar */ 2484);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/tooltip */ 702);
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/tree */ 7321);
/* harmony import */ var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material-moment-adapter */ 3392);
/* harmony import */ var _shared_services_paginator_i18n_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/services/paginator-i18n.service */ 827);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);






































class MaterialModule {}
MaterialModule.ɵfac = function MaterialModule_Factory(t) {
  return new (t || MaterialModule)();
};
MaterialModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: MaterialModule
});
MaterialModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  providers: [{
    provide: _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__.MatPaginatorIntl,
    deps: [_shared_services_paginator_i18n_service__WEBPACK_IMPORTED_MODULE_0__.PaginatorI18nService],
    useFactory: paginatorI18nSrv => paginatorI18nSrv.getPaginatorIntl()
  }, {
    provide: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MAT_DIALOG_DEFAULT_OPTIONS,
    useValue: {
      ...new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogConfig()
    }
  }, {
    provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_4__.MAT_DATE_LOCALE,
    useFactory: () => navigator.language // <= This will be overrided by runtime setting
  }, {
    provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_4__.MAT_DATE_FORMATS,
    useValue: {
      parse: {
        dateInput: 'YYYY-MM-DD'
      },
      display: {
        dateInput: 'YYYY-MM-DD',
        monthYearLabel: 'YYYY MMM',
        dateA11yLabel: 'LL',
        monthYearA11yLabel: 'YYYY MMM'
      }
    }
  }],
  imports: [_angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_5__.MatAutocompleteModule, _angular_material_badge__WEBPACK_IMPORTED_MODULE_6__.MatBadgeModule, _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_7__.MatBottomSheetModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButtonModule, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_9__.MatButtonToggleModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCardModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_11__.MatCheckboxModule, _angular_material_chips__WEBPACK_IMPORTED_MODULE_12__.MatChipsModule, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_13__.MatStepperModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_14__.MatDatepickerModule, _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_15__.MatMomentDateModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_16__.MatDividerModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_17__.MatExpansionModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__.MatFormFieldModule, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_19__.MatGridListModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__.MatIconModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_21__.MatInputModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_22__.MatListModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_23__.MatMenuModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__.MatPaginatorModule, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_24__.MatProgressBarModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_25__.MatProgressSpinnerModule, _angular_material_radio__WEBPACK_IMPORTED_MODULE_26__.MatRadioModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_4__.MatRippleModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_27__.MatSelectModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_28__.MatSidenavModule, _angular_material_slider__WEBPACK_IMPORTED_MODULE_29__.MatSliderModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_30__.MatSlideToggleModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_31__.MatSnackBarModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_32__.MatSortModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_33__.MatTableModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_34__.MatTabsModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_35__.MatToolbarModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_36__.MatTooltipModule, _angular_material_tree__WEBPACK_IMPORTED_MODULE_37__.MatTreeModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](MaterialModule, {
    exports: [_angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_5__.MatAutocompleteModule, _angular_material_badge__WEBPACK_IMPORTED_MODULE_6__.MatBadgeModule, _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_7__.MatBottomSheetModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButtonModule, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_9__.MatButtonToggleModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCardModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_11__.MatCheckboxModule, _angular_material_chips__WEBPACK_IMPORTED_MODULE_12__.MatChipsModule, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_13__.MatStepperModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_14__.MatDatepickerModule, _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_15__.MatMomentDateModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_16__.MatDividerModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_17__.MatExpansionModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__.MatFormFieldModule, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_19__.MatGridListModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__.MatIconModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_21__.MatInputModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_22__.MatListModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_23__.MatMenuModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__.MatPaginatorModule, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_24__.MatProgressBarModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_25__.MatProgressSpinnerModule, _angular_material_radio__WEBPACK_IMPORTED_MODULE_26__.MatRadioModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_4__.MatRippleModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_27__.MatSelectModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_28__.MatSidenavModule, _angular_material_slider__WEBPACK_IMPORTED_MODULE_29__.MatSliderModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_30__.MatSlideToggleModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_31__.MatSnackBarModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_32__.MatSortModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_33__.MatTableModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_34__.MatTabsModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_35__.MatToolbarModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_36__.MatTooltipModule, _angular_material_tree__WEBPACK_IMPORTED_MODULE_37__.MatTreeModule]
  });
})();

/***/ }),

/***/ 5377:
/*!*********************************************************!*\
  !*** ./src/app/routes/dashboard/dashboard.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DashboardComponent: () => (/* binding */ DashboardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/components/page-header/page-header.component */ 6970);



class DashboardComponent {
  constructor(cdr) {
    this.cdr = cdr;
  }
  ngOnInit() {}
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) {
  return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef));
};
DashboardComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: DashboardComponent,
  selectors: [["app-dashboard"]],
  decls: 1,
  vars: 0,
  template: function DashboardComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "page-header");
    }
  },
  dependencies: [_shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_0__.PageHeaderComponent],
  styles: ["/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYXNoYm9hcmQuY29tcG9uZW50LnNjc3MifQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcm91dGVzL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLHdLQUF3SyIsInNvdXJjZVJvb3QiOiIifQ== */"],
  changeDetection: 0
});

/***/ }),

/***/ 7099:
/*!*********************************************************!*\
  !*** ./src/app/routes/device/service/device.service.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DeviceService: () => (/* binding */ DeviceService)
/* harmony export */ });
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @env/environment */ 553);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 4860);




const urlApi = 'http://localhost:3000/api/v1';
class DeviceService {
  constructor(http) {
    this.http = http;
  }
  getDevice(page, size) {
    return this.http.get(`${urlApi}/devices?page=${page}&limit=${size}`, {
      observe: 'response'
    });
  }
  getDetailIdDevice(id) {
    return this.http.get(`${urlApi}/device/${id}`, {
      observe: 'response'
    });
  }
  addDevice(body) {
    return this.http.post(`${urlApi}/new-device`, body);
  }
  updateDevice(id, body) {
    return this.http.patch(`${urlApi}/update-device/${id}`, body);
  }
  addHandOverStaff(id, body) {
    return this.http.post(`${urlApi}/hand-over/${id}`, body);
  }
  deleteDevice(id) {
    return this.http.delete(`${urlApi}/delete/${id}`);
  }
  getUser() {
    return this.http.get('user/role-user');
  }
  getUrlImage(url) {
    return _env_environment__WEBPACK_IMPORTED_MODULE_0__.environment.imgUrl + url;
  }
}
DeviceService.ɵfac = function DeviceService_Factory(t) {
  return new (t || DeviceService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
};
DeviceService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: DeviceService,
  factory: DeviceService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 6990:
/*!*************************************************!*\
  !*** ./src/app/routes/routes-routing.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RoutesRoutingModule: () => (/* binding */ RoutesRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @env/environment */ 553);
/* harmony import */ var _theme_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../theme/admin-layout/admin-layout.component */ 894);
/* harmony import */ var _theme_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../theme/auth-layout/auth-layout.component */ 8095);
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard/dashboard.component */ 5377);
/* harmony import */ var _sessions_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sessions/login/login.component */ 3771);
/* harmony import */ var _sessions_register_register_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sessions/register/register.component */ 3857);
/* harmony import */ var _sessions_403_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sessions/403.component */ 2429);
/* harmony import */ var _sessions_404_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sessions/404.component */ 6682);
/* harmony import */ var _sessions_500_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sessions/500.component */ 4689);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @core */ 9076);
/* harmony import */ var _view_qr_code_device_manager_view_qr_code_device_manager_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./view-qr-code-device-manager/view-qr-code-device-manager.component */ 3464);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 1699);














const routes = [{
  path: '',
  component: _theme_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_1__.AdminLayoutComponent,
  canActivate: [_core__WEBPACK_IMPORTED_MODULE_9__.authGuard],
  canActivateChild: [_core__WEBPACK_IMPORTED_MODULE_9__.authGuard],
  children: [{
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  }, {
    path: 'dashboard',
    component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__.DashboardComponent
  }, {
    path: '403',
    component: _sessions_403_component__WEBPACK_IMPORTED_MODULE_6__.Error403Component
  }, {
    path: '404',
    component: _sessions_404_component__WEBPACK_IMPORTED_MODULE_7__.Error404Component
  }, {
    path: '500',
    component: _sessions_500_component__WEBPACK_IMPORTED_MODULE_8__.Error500Component
  }, {
    path: 'device',
    loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_routes_device_device_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./device/device.module */ 3603)).then(m => m.DeviceModule)
  }]
}, {
  path: 'auth',
  component: _theme_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_2__.AuthLayoutComponent,
  children: [{
    path: 'login',
    component: _sessions_login_login_component__WEBPACK_IMPORTED_MODULE_4__.LoginComponent
  }, {
    path: 'register',
    component: _sessions_register_register_component__WEBPACK_IMPORTED_MODULE_5__.RegisterComponent
  }]
}, {
  path: 'view-detail',
  component: _theme_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_2__.AuthLayoutComponent,
  children: [{
    path: ':id',
    component: _view_qr_code_device_manager_view_qr_code_device_manager_component__WEBPACK_IMPORTED_MODULE_10__.ViewQrCodeDeviceManagerComponent
  }]
}, {
  path: '**',
  redirectTo: 'dashboard'
}];
class RoutesRoutingModule {}
RoutesRoutingModule.ɵfac = function RoutesRoutingModule_Factory(t) {
  return new (t || RoutesRoutingModule)();
};
RoutesRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({
  type: RoutesRoutingModule
});
RoutesRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule.forRoot(routes, {
    useHash: _env_environment__WEBPACK_IMPORTED_MODULE_0__.environment.useHash
  }), _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](RoutesRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule]
  });
})();

/***/ }),

/***/ 6860:
/*!*****************************************!*\
  !*** ./src/app/routes/routes.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RoutesModule: () => (/* binding */ RoutesModule)
/* harmony export */ });
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/shared.module */ 6208);
/* harmony import */ var _routes_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./routes-routing.module */ 6990);
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard/dashboard.component */ 5377);
/* harmony import */ var _sessions_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sessions/login/login.component */ 3771);
/* harmony import */ var _sessions_register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sessions/register/register.component */ 3857);
/* harmony import */ var _sessions_403_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sessions/403.component */ 2429);
/* harmony import */ var _sessions_404_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sessions/404.component */ 6682);
/* harmony import */ var _sessions_500_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sessions/500.component */ 4689);
/* harmony import */ var _view_qr_code_device_manager_view_qr_code_device_manager_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./view-qr-code-device-manager/view-qr-code-device-manager.component */ 3464);
/* harmony import */ var ng_gallery_lightbox__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-gallery/lightbox */ 848);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 1699);











const COMPONENTS = [_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__.DashboardComponent, _sessions_login_login_component__WEBPACK_IMPORTED_MODULE_3__.LoginComponent, _sessions_register_register_component__WEBPACK_IMPORTED_MODULE_4__.RegisterComponent, _sessions_403_component__WEBPACK_IMPORTED_MODULE_5__.Error403Component, _sessions_404_component__WEBPACK_IMPORTED_MODULE_6__.Error404Component, _sessions_500_component__WEBPACK_IMPORTED_MODULE_7__.Error500Component];
const COMPONENTS_DYNAMIC = [];
class RoutesModule {}
RoutesModule.ɵfac = function RoutesModule_Factory(t) {
  return new (t || RoutesModule)();
};
RoutesModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({
  type: RoutesModule
});
RoutesModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({
  imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _routes_routing_module__WEBPACK_IMPORTED_MODULE_1__.RoutesRoutingModule, ng_gallery_lightbox__WEBPACK_IMPORTED_MODULE_10__.LightboxModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](RoutesModule, {
    declarations: [_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__.DashboardComponent, _sessions_login_login_component__WEBPACK_IMPORTED_MODULE_3__.LoginComponent, _sessions_register_register_component__WEBPACK_IMPORTED_MODULE_4__.RegisterComponent, _sessions_403_component__WEBPACK_IMPORTED_MODULE_5__.Error403Component, _sessions_404_component__WEBPACK_IMPORTED_MODULE_6__.Error404Component, _sessions_500_component__WEBPACK_IMPORTED_MODULE_7__.Error500Component, _view_qr_code_device_manager_view_qr_code_device_manager_component__WEBPACK_IMPORTED_MODULE_8__.ViewQrCodeDeviceManagerComponent],
    imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _routes_routing_module__WEBPACK_IMPORTED_MODULE_1__.RoutesRoutingModule, ng_gallery_lightbox__WEBPACK_IMPORTED_MODULE_10__.LightboxModule]
  });
})();

/***/ }),

/***/ 2429:
/*!**************************************************!*\
  !*** ./src/app/routes/sessions/403.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Error403Component: () => (/* binding */ Error403Component)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _shared_components_error_code_error_code_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/components/error-code/error-code.component */ 3688);


class Error403Component {}
Error403Component.ɵfac = function Error403Component_Factory(t) {
  return new (t || Error403Component)();
};
Error403Component.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: Error403Component,
  selectors: [["app-error-403"]],
  decls: 1,
  vars: 2,
  consts: [["code", "403", 3, "title", "message"]],
  template: function Error403Component_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "error-code", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("title", "Permission denied!")("message", "You do not have permission to access the requested data.");
    }
  },
  dependencies: [_shared_components_error_code_error_code_component__WEBPACK_IMPORTED_MODULE_0__.ErrorCodeComponent],
  encapsulation: 2
});

/***/ }),

/***/ 6682:
/*!**************************************************!*\
  !*** ./src/app/routes/sessions/404.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Error404Component: () => (/* binding */ Error404Component)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _shared_components_error_code_error_code_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/components/error-code/error-code.component */ 3688);


class Error404Component {}
Error404Component.ɵfac = function Error404Component_Factory(t) {
  return new (t || Error404Component)();
};
Error404Component.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: Error404Component,
  selectors: [["app-error-404"]],
  decls: 1,
  vars: 2,
  consts: [["code", "404", 3, "title", "message"]],
  template: function Error404Component_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "error-code", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("title", "Page not found!")("message", "This is not the web page you are looking for.");
    }
  },
  dependencies: [_shared_components_error_code_error_code_component__WEBPACK_IMPORTED_MODULE_0__.ErrorCodeComponent],
  encapsulation: 2
});

/***/ }),

/***/ 4689:
/*!**************************************************!*\
  !*** ./src/app/routes/sessions/500.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Error500Component: () => (/* binding */ Error500Component)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _shared_components_error_code_error_code_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/components/error-code/error-code.component */ 3688);


class Error500Component {}
Error500Component.ɵfac = function Error500Component_Factory(t) {
  return new (t || Error500Component)();
};
Error500Component.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: Error500Component,
  selectors: [["app-error-500"]],
  decls: 1,
  vars: 2,
  consts: [["code", "500", 3, "title", "message"]],
  template: function Error500Component_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "error-code", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("title", "Server went wrong!")("message", "Just kidding, looks like we have an internal issue, please try refreshing.");
    }
  },
  dependencies: [_shared_components_error_code_error_code_component__WEBPACK_IMPORTED_MODULE_0__.ErrorCodeComponent],
  encapsulation: 2
});

/***/ }),

/***/ 3771:
/*!**********************************************************!*\
  !*** ./src/app/routes/sessions/login/login.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginComponent: () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 4520);
/* harmony import */ var _core_authentication__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/authentication */ 3870);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ 895);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ 8497);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/checkbox */ 6658);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ 1333);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ 26);
/* harmony import */ var _ng_matero_extensions_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-matero/extensions/button */ 9326);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ 5939);
















function LoginComponent_mat_error_13_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "ng-matero");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "please_enter"), " ");
  }
}
function LoginComponent_mat_error_13_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r3.username.errors == null ? null : ctx_r3.username.errors.remote);
  }
}
function LoginComponent_mat_error_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, LoginComponent_mat_error_13_span_1_Template, 5, 3, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, LoginComponent_mat_error_13_span_2_Template, 2, 1, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.username.errors == null ? null : ctx_r0.username.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.username.errors == null ? null : ctx_r0.username.errors.remote);
  }
}
function LoginComponent_mat_error_19_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "ng-matero");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "please_enter"), " ");
  }
}
function LoginComponent_mat_error_19_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r5.password.errors == null ? null : ctx_r5.password.errors.remote);
  }
}
function LoginComponent_mat_error_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, LoginComponent_mat_error_19_span_1_Template, 5, 3, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, LoginComponent_mat_error_19_span_2_Template, 2, 1, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.password.errors == null ? null : ctx_r1.password.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.password.errors == null ? null : ctx_r1.password.errors.remote);
  }
}
class LoginComponent {
  constructor(fb, router, auth) {
    this.fb = fb;
    this.router = router;
    this.auth = auth;
    this.isSubmitting = false;
    this.loginForm = this.fb.nonNullable.group({
      username: ['ng-matero', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
      password: ['ng-matero', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
      rememberMe: [false]
    });
  }
  get username() {
    return this.loginForm.get('username');
  }
  get password() {
    return this.loginForm.get('password');
  }
  get rememberMe() {
    return this.loginForm.get('rememberMe');
  }
  login() {
    this.isSubmitting = true;
    this.auth.login(this.username.value, this.password.value, this.rememberMe.value).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(authenticated => authenticated)).subscribe(() => this.router.navigateByUrl('/'), errorRes => {
      if (errorRes.status === 422) {
        const form = this.loginForm;
        const errors = errorRes.error.errors;
        Object.keys(errors).forEach(key => {
          form.get(key === 'email' ? 'username' : key)?.setErrors({
            remote: errors[key][0]
          });
        });
      }
      this.isSubmitting = false;
    });
  }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) {
  return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_authentication__WEBPACK_IMPORTED_MODULE_0__.AuthService));
};
LoginComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: LoginComponent,
  selectors: [["app-login"]],
  decls: 32,
  vars: 26,
  consts: [[1, "d-flex", "w-full", "h-full"], [1, "m-auto", 2, "max-width", "380px"], [1, "m-b-24"], [1, "form-field-full", 3, "formGroup"], ["appearance", "outline"], ["matInput", "", "placeholder", "ng-matero", "formControlName", "username", "required", ""], [4, "ngIf"], ["matInput", "", "placeholder", "ng-matero", "type", "password", "formControlName", "password", "required", ""], ["formControlName", "rememberMe"], ["mat-raised-button", "", "color", "primary", 1, "w-full", "m-y-16", 3, "disabled", "loading", "click"], ["routerLink", "/auth/register"]],
  template: function LoginComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "mat-card", 1)(2, "mat-card-header", 2)(3, "mat-card-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-card-content")(7, "form", 3)(8, "mat-form-field", 4)(9, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](11, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "input", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, LoginComponent_mat_error_13_Template, 3, 2, "mat-error", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "mat-form-field", 4)(15, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](17, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "input", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, LoginComponent_mat_error_19_Template, 3, 2, "mat-error", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "mat-checkbox", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](22, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "button", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_23_listener() {
        return ctx.login();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](25, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](28, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "a", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](31, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 12, "login_title"), "!");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.loginForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](11, 14, "username"), ": ng-matero");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.username.invalid);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](17, 16, "password"), ": ng-matero");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.password.invalid);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](22, 18, "remember_me"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !!ctx.loginForm.invalid)("loading", ctx.isSubmitting);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](25, 20, "login"));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](28, 22, "have_no_account"), "? ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](31, 24, "create_one_account"));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButton, _angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCardTitle, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__.MatCheckbox, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatError, _angular_material_input__WEBPACK_IMPORTED_MODULE_10__.MatInput, _ng_matero_extensions_button__WEBPACK_IMPORTED_MODULE_11__.MatButtonLoading, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslatePipe],
  styles: ["/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuc2NzcyJ9 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcm91dGVzL3Nlc3Npb25zL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxnS0FBZ0siLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 3857:
/*!****************************************************************!*\
  !*** ./src/app/routes/sessions/register/register.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RegisterComponent: () => (/* binding */ RegisterComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ 895);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ 8497);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/checkbox */ 6658);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ 1333);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ 26);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 5939);











function RegisterComponent_mat_error_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error")(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, "validations.required"));
  }
}
function RegisterComponent_mat_error_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error")(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, "validations.required"));
  }
}
function RegisterComponent_mat_error_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error")(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, "validations.required"));
  }
}
const _c0 = function (a0) {
  return {
    value: a0
  };
};
function RegisterComponent_mat_error_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("translateParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 2, "login.password")));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]("validations.inconsistent");
  }
}
class RegisterComponent {
  constructor(fb) {
    this.fb = fb;
    this.registerForm = this.fb.nonNullable.group({
      username: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required]],
      password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required]],
      confirmPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required]]
    }, {
      validators: [this.matchValidator('password', 'confirmPassword')]
    });
  }
  matchValidator(source, target) {
    return control => {
      const sourceControl = control.get(source);
      const targetControl = control.get(target);
      if (targetControl.errors && !targetControl.errors.mismatch) {
        return null;
      }
      if (sourceControl.value !== targetControl.value) {
        targetControl.setErrors({
          mismatch: true
        });
        return {
          mismatch: true
        };
      } else {
        targetControl.setErrors(null);
        return null;
      }
    };
  }
}
RegisterComponent.ɵfac = function RegisterComponent_Factory(t) {
  return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormBuilder));
};
RegisterComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: RegisterComponent,
  selectors: [["app-register"]],
  decls: 42,
  vars: 32,
  consts: [[1, "d-flex", "w-full", "h-full"], [1, "m-auto", 2, "max-width", "380px"], [1, "m-b-24"], [1, "form-field-full", 3, "formGroup"], ["appearance", "outline"], ["matInput", "", "formControlName", "username", "required", ""], [4, "ngIf"], ["matInput", "", "type", "password", "formControlName", "password", "required", ""], ["matInput", "", "type", "password", "formControlName", "confirmPassword", "required", ""], ["translate", "", 3, "translateParams", 4, "ngIf"], ["mat-raised-button", "", "color", "primary", 1, "w-full", "m-y-16"], ["routerLink", "/auth/login"], ["translate", "", 3, "translateParams"]],
  template: function RegisterComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "mat-card", 1)(2, "mat-card-header", 2)(3, "mat-card-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-card-content")(10, "form", 3)(11, "mat-form-field", 4)(12, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, RegisterComponent_mat_error_16_Template, 4, 3, "mat-error", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-form-field", 4)(18, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](20, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, RegisterComponent_mat_error_22_Template, 4, 3, "mat-error", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-form-field", 4)(24, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](26, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "input", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, RegisterComponent_mat_error_28_Template, 4, 3, "mat-error", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, RegisterComponent_mat_error_29_Template, 4, 6, "mat-error", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-checkbox");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](32, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "button", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](35, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](38, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "a", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](41, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
    }
    if (rf & 2) {
      let tmp_4_0;
      let tmp_6_0;
      let tmp_8_0;
      let tmp_9_0;
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 14, "register_welcome"), ", ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 16, "register_title"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.registerForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 18, "username"));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (tmp_4_0 = ctx.registerForm.get("username")) == null ? null : tmp_4_0.invalid);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](20, 20, "password"));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (tmp_6_0 = ctx.registerForm.get("password")) == null ? null : tmp_6_0.invalid);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](26, 22, "confirm_password"));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (tmp_8_0 = ctx.registerForm.get("confirmPassword")) == null ? null : tmp_8_0.hasError("required"));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (tmp_9_0 = ctx.registerForm.get("confirmPassword")) == null ? null : tmp_9_0.hasError("mismatch"));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](32, 24, "read_and_agree"));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](35, 26, "register"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](38, 28, "have_an_account"), "? ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](41, 30, "login"));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButton, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardTitle, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__.MatCheckbox, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatError, _angular_material_input__WEBPACK_IMPORTED_MODULE_8__.MatInput, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateDirective, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslatePipe],
  styles: ["/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWdpc3Rlci5jb21wb25lbnQuc2NzcyJ9 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcm91dGVzL3Nlc3Npb25zL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxvS0FBb0siLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 3464:
/*!*********************************************************************************************!*\
  !*** ./src/app/routes/view-qr-code-device-manager/view-qr-code-device-manager.component.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ViewQrCodeDeviceManagerComponent: () => (/* binding */ ViewQrCodeDeviceManagerComponent)
/* harmony export */ });
/* harmony import */ var ng_gallery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-gallery */ 7098);
/* harmony import */ var _device_service_device_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../device/service/device.service */ 7099);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var ng_gallery_lightbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-gallery/lightbox */ 848);









function ViewQrCodeDeviceManagerComponent_div_85_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("lightbox", i_r2)("gallery", ctx_r0.galleryId);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", item_r1.data == null ? null : item_r1.data.src, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("alt", "img" + i_r2);
  }
}
const data = [{
  srcUrl: 'https://preview.ibb.co/jrsA6R/img12.jpg',
  previewUrl: 'https://preview.ibb.co/jrsA6R/img12.jpg'
}, {
  srcUrl: 'https://preview.ibb.co/kPE1D6/clouds.jpg',
  previewUrl: 'https://preview.ibb.co/kPE1D6/clouds.jpg'
}, {
  srcUrl: 'https://preview.ibb.co/mwsA6R/img7.jpg',
  previewUrl: 'https://preview.ibb.co/mwsA6R/img7.jpg'
}, {
  srcUrl: 'https://preview.ibb.co/kZGsLm/img8.jpg',
  previewUrl: 'https://preview.ibb.co/kZGsLm/img8.jpg'
}];
class ViewQrCodeDeviceManagerComponent {
  constructor(gallery, deviceService, routerActive) {
    this.gallery = gallery;
    this.deviceService = deviceService;
    this.routerActive = routerActive;
    this.imageData = data;
    this.galleryId = 'myLightbox';
    this.items = [];
  }
  ngOnInit() {
    this.getParams();
    this.items = this.imageData.map(item => new ng_gallery__WEBPACK_IMPORTED_MODULE_2__.ImageItem({
      src: item.srcUrl,
      thumb: item.previewUrl
    }));
    const galleryRef = this.gallery.ref(this.galleryId);
    galleryRef.load(this.items);
  }
  getParams() {
    this.routerActive.params.subscribe(param => {
      this.getDetailDevice(param.id);
    });
  }
  getDetailDevice(id) {
    // console.log(id);
    this.deviceService.getDetailIdDevice(id).subscribe(res => {
      this.element = res.body.response;
      console.log(this.element);
    });
  }
}
ViewQrCodeDeviceManagerComponent.ɵfac = function ViewQrCodeDeviceManagerComponent_Factory(t) {
  return new (t || ViewQrCodeDeviceManagerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ng_gallery__WEBPACK_IMPORTED_MODULE_2__.Gallery), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_device_service_device_service__WEBPACK_IMPORTED_MODULE_0__.DeviceService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute));
};
ViewQrCodeDeviceManagerComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: ViewQrCodeDeviceManagerComponent,
  selectors: [["app-view-qr-code-device-manager"]],
  decls: 86,
  vars: 16,
  consts: [[1, "w-full", "py-4", "lg:px-6", "xs:px-2", "flex", "justify-center", "text-white"], [1, "xl:w-[80%]", "xs:w-full", "lg:px-5", "xs:px-2", "flex", "flex-col", "space-y-10"], [1, "w-full", "flex", "items-center", "xs:space-x-2", "lg:pb-5", "xs:pb-3", "border-b"], [1, "lg:w-[30%]"], ["src", "assets/images/avatar.jpg", "alt", "image-user", 1, "lg:w-1/2", "xs:w-full", "rounded-full"], [1, "w-[70%]"], [1, "flex", "flex-col"], [1, "flex", "space-x-3"], [1, "font-semibold"], [1, ""], [1, "grid", "xl:grid-cols-12", "grid-cols-12", "gap-x-3", "gap-y-5"], [1, "lg:col-span-4", "xs:col-span-6"], [1, "col-span-12"], [1, "grid", "grid-cols-12", "gap-y-3"], [1, "lg:col-span-3", "xs:col-span-6", "font-semibold"], [1, "w-full", "col-span-12", "flex", "lg:flex-nowrap", "xs:flex-wrap"], ["class", "w-1/2 h-1/2", 3, "lightbox", "gallery", 4, "ngFor", "ngForOf"], [1, "w-1/2", "h-1/2", 3, "lightbox", "gallery"], [1, "w-full", "h-full", "object-cover", 3, "src", "alt"]],
  template: function ViewQrCodeDeviceManagerComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5)(6, "div", 6)(7, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 7)(10, "span", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Email:");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 7)(15, "span", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "SDT:");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "span", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 10)(20, "div", 11)(21, "div", 6)(22, "span", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "T\u00EAn thi\u1EBFt b\u1ECB");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 11)(27, "div", 6)(28, "span", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "M\u00E3 serial");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 11)(33, "div", 6)(34, "span", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Lo\u1EA1i thi\u1EBFt b\u1ECB");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 11)(39, "div", 6)(40, "span", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "Ng\u00E0y nh\u1EADp thi\u1EBFt b\u1ECB");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](44, "date");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 11)(46, "div", 6)(47, "span", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "Ng\u01B0\u1EDDi b\u00E0n giao thi\u1EBFt b\u1ECB");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 11)(52, "div", 6)(53, "span", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "Ng\u00E0y b\u00E0n giao");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "div", 11)(58, "div", 6)(59, "span", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, "T\u00ECnh tr\u1EA1ng m\u00E1y");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "div", 11)(64, "div", 6)(65, "span", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](66, "V\u1ECB tr\u00ED l\u00E0m vi\u1EC7c");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "div", 11)(70, "div", 6)(71, "span", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](72, "N\u01A1i l\u00E0m vi\u1EC7c");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](74);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "div", 12)(76, "div", 6)(77, "span", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](78, "Th\u00F4ng tin ghi ch\u00FA");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](80);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "div", 13)(82, "h3", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](83, "Th\u00F4ng tin h\u00ECnh \u1EA3nh");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](85, ViewQrCodeDeviceManagerComponent_div_85_Template, 2, 4, "div", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.element == null ? null : ctx.element.allotment == null ? null : ctx.element.allotment.receiver);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.element == null ? null : ctx.element.allotment == null ? null : ctx.element.allotment.email);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.element == null ? null : ctx.element.allotment == null ? null : ctx.element.allotment.hotline);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.element == null ? null : ctx.element.name);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.element == null ? null : ctx.element.serial);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.element == null ? null : ctx.element.type);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](44, 14, ctx.element == null ? null : ctx.element.purchase_date));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.element == null ? null : ctx.element.allotment == null ? null : ctx.element.allotment.handoverPerson);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.element == null ? null : ctx.element.allotment == null ? null : ctx.element.allotment.date);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.element == null ? null : ctx.element.allotment == null ? null : ctx.element.allotment.machine_status);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.element == null ? null : ctx.element.allotment == null ? null : ctx.element.allotment.positon);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"]((ctx.element == null ? null : ctx.element.allotment == null ? null : ctx.element.allotment.onsite) === 0 ? "T\u1EA1i c\u00F4ng ty" : "B\u00EAn kh\u00E1ch h\u00E0ng");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.element == null ? null : ctx.element.note);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.items);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, ng_gallery_lightbox__WEBPACK_IMPORTED_MODULE_5__.LightboxDirective, _angular_common__WEBPACK_IMPORTED_MODULE_4__.DatePipe],
  styles: ["/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2aWV3LXFyLWNvZGUtZGV2aWNlLW1hbmFnZXIuY29tcG9uZW50LnNjc3MifQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcm91dGVzL3ZpZXctcXItY29kZS1kZXZpY2UtbWFuYWdlci92aWV3LXFyLWNvZGUtZGV2aWNlLW1hbmFnZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLGdNQUFnTSIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 4414:
/*!**********************************************************************!*\
  !*** ./src/app/shared/components/breadcrumb/breadcrumb.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BreadcrumbComponent: () => (/* binding */ BreadcrumbComponent)
/* harmony export */ });
/* harmony import */ var _core_bootstrap_menu_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/bootstrap/menu.service */ 963);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ 6515);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 5939);








function BreadcrumbComponent_li_2_a_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const navLink_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](navLink_r1);
  }
}
function BreadcrumbComponent_li_2_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-icon", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "chevron_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const navLink_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 1, navLink_r1));
  }
}
function BreadcrumbComponent_li_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, BreadcrumbComponent_li_2_a_1_Template, 2, 1, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, BreadcrumbComponent_li_2_ng_container_2_Template, 6, 3, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const isFirst_r2 = ctx.first;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", isFirst_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !isFirst_r2);
  }
}
class BreadcrumbComponent {
  constructor(router, menu) {
    this.router = router;
    this.menu = menu;
    this.nav = [];
  }
  ngOnInit() {
    this.nav = Array.isArray(this.nav) ? this.nav : [];
    if (this.nav.length === 0) {
      this.genBreadcrumb();
    }
  }
  trackByNavlink(index, navLink) {
    return navLink;
  }
  genBreadcrumb() {
    const routes = this.router.url.slice(1).split('/');
    this.nav = this.menu.getLevel(routes);
    this.nav.unshift('home');
  }
}
BreadcrumbComponent.ɵfac = function BreadcrumbComponent_Factory(t) {
  return new (t || BreadcrumbComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_bootstrap_menu_service__WEBPACK_IMPORTED_MODULE_0__.MenuService));
};
BreadcrumbComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: BreadcrumbComponent,
  selectors: [["breadcrumb"]],
  inputs: {
    nav: "nav"
  },
  decls: 3,
  vars: 2,
  consts: [["aria-label", "breadcrumb"], [1, "matero-breadcrumb"], ["class", "matero-breadcrumb-item", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "matero-breadcrumb-item"], ["href", "#", "class", "link", 4, "ngIf"], [4, "ngIf"], ["href", "#", 1, "link"], [1, "chevron"]],
  template: function BreadcrumbComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nav", 0)(1, "ol", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, BreadcrumbComponent_li_2_Template, 3, 2, "li", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.nav)("ngForTrackBy", ctx.trackByNavlink);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIcon, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslatePipe],
  styles: [".matero-breadcrumb {\n  display: flex;\n  flex-wrap: wrap;\n  padding: 0;\n  margin-bottom: 1rem;\n  font-size: 0.875rem;\n  list-style: none;\n}\n\n.matero-breadcrumb-item {\n  line-height: 18px;\n  text-transform: capitalize;\n}\n.matero-breadcrumb-item > * {\n  vertical-align: middle;\n}\n.matero-breadcrumb-item > a.link {\n  color: currentColor;\n}\n.matero-breadcrumb-item > a.link:hover {\n  color: currentColor;\n  text-decoration: underline;\n}\n.matero-breadcrumb-item > .chevron {\n  width: 18px;\n  height: 18px;\n  font-size: 18px;\n  -webkit-user-select: none;\n          user-select: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJyZWFkY3J1bWIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLGlCQUFBO0VBQ0EsMEJBQUE7QUFDRjtBQUNFO0VBQ0Usc0JBQUE7QUFDSjtBQUVFO0VBQ0UsbUJBQUE7QUFBSjtBQUVJO0VBQ0UsbUJBQUE7RUFDQSwwQkFBQTtBQUFOO0FBSUU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtVQUFBLGlCQUFBO0FBRkoiLCJmaWxlIjoiYnJlYWRjcnVtYi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXRlcm8tYnJlYWRjcnVtYiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgcGFkZGluZzogMDtcclxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gIGZvbnQtc2l6ZTogLjg3NXJlbTtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG59XHJcblxyXG4ubWF0ZXJvLWJyZWFkY3J1bWItaXRlbSB7XHJcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcblxyXG4gID4gKiB7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gIH1cclxuXHJcbiAgPiBhLmxpbmsge1xyXG4gICAgY29sb3I6IGN1cnJlbnRDb2xvcjtcclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgY29sb3I6IGN1cnJlbnRDb2xvcjtcclxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICA+IC5jaGV2cm9uIHtcclxuICAgIHdpZHRoOiAxOHB4O1xyXG4gICAgaGVpZ2h0OiAxOHB4O1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgfVxyXG59XHJcbiJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvYnJlYWRjcnVtYi9icmVhZGNydW1iLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQkFBQTtFQUNBLDBCQUFBO0FBQ0Y7QUFDRTtFQUNFLHNCQUFBO0FBQ0o7QUFFRTtFQUNFLG1CQUFBO0FBQUo7QUFFSTtFQUNFLG1CQUFBO0VBQ0EsMEJBQUE7QUFBTjtBQUlFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7VUFBQSxpQkFBQTtBQUZKO0FBRUEsb3pDQUFvekMiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0ZXJvLWJyZWFkY3J1bWIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICBmb250LXNpemU6IC44NzVyZW07XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxufVxyXG5cclxuLm1hdGVyby1icmVhZGNydW1iLWl0ZW0ge1xyXG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG5cclxuICA+ICoge1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICB9XHJcblxyXG4gID4gYS5saW5rIHtcclxuICAgIGNvbG9yOiBjdXJyZW50Q29sb3I7XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGNvbG9yOiBjdXJyZW50Q29sb3I7XHJcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgPiAuY2hldnJvbiB7XHJcbiAgICB3aWR0aDogMThweDtcclxuICAgIGhlaWdodDogMThweDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"],
  encapsulation: 2
});

/***/ }),

/***/ 1682:
/*!******************************************************************************!*\
  !*** ./src/app/shared/components/comfirm-dialog/comfirm-dialog.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ComfirmDialogComponent: () => (/* binding */ ComfirmDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ 7401);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ 895);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ 6515);






function ComfirmDialogComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "B\u1EA1n c\u00F3 ch\u1EAFc mu\u1ED1n x\u00F3a thi\u1EBFt b\u1ECB n\u00E0y");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
}
class ComfirmDialogComponent {
  constructor(data, dialogRef) {
    this.data = data;
    this.dialogRef = dialogRef;
  }
  ngOnInit() {
    console.log(this.data);
  }
  onConfirm() {
    if (this.data.action === 'delete') {
      this.dialogRef.close('delete');
    }
  }
  onCancel() {
    this.dialogRef.close();
  }
}
ComfirmDialogComponent.ɵfac = function ComfirmDialogComponent_Factory(t) {
  return new (t || ComfirmDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogRef));
};
ComfirmDialogComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: ComfirmDialogComponent,
  selectors: [["app-comfirm-dialog"]],
  decls: 14,
  vars: 2,
  consts: [[1, "w-full", "bg-white", "px-6", "py-3"], [1, "w-full", "flex", "items-center", "justify-between", "border-b-2", "py-3"], [1, "text-2xl", "font-medium"], ["mat-icon-button", "", 3, "click"], [1, "mt-3"], ["class", "mb-6", 4, "ngIf"], [1, "my-1", "w-full", "flex", "items-center", "justify-end", "space-x-4"], ["mat-raised-button", "", 3, "click"], [1, "mb-6"]],
  template: function ComfirmDialogComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h3", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ComfirmDialogComponent_Template_button_click_4_listener() {
        return ctx.dialogRef.close();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "close");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ComfirmDialogComponent_div_8_Template, 3, 0, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6)(10, "button", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ComfirmDialogComponent_Template_button_click_10_listener() {
        return ctx.onConfirm();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Confirm");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ComfirmDialogComponent_Template_button_click_12_listener() {
        return ctx.dialogRef.close();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Cancel");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.title);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.action === "delete");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatIconButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIcon],
  styles: ["/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb21maXJtLWRpYWxvZy5jb21wb25lbnQuc2NzcyJ9 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvY29tZmlybS1kaWFsb2cvY29tZmlybS1kaWFsb2cuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLDRLQUE0SyIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 3688:
/*!**********************************************************************!*\
  !*** ./src/app/shared/components/error-code/error-code.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ErrorCodeComponent: () => (/* binding */ ErrorCodeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ 895);




function ErrorCodeComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.title);
  }
}
function ErrorCodeComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.message);
  }
}
class ErrorCodeComponent {
  constructor() {
    this.code = '';
    this.title = '';
    this.message = '';
  }
}
ErrorCodeComponent.ɵfac = function ErrorCodeComponent_Factory(t) {
  return new (t || ErrorCodeComponent)();
};
ErrorCodeComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: ErrorCodeComponent,
  selectors: [["error-code"]],
  inputs: {
    code: "code",
    title: "title",
    message: "message"
  },
  decls: 8,
  vars: 3,
  consts: [[1, "matero-error-wrap"], [1, "matero-error-code"], ["class", "matero-error-title", 4, "ngIf"], ["class", "matero-error-message", 4, "ngIf"], ["mat-raised-button", "", "color", "primary", "routerLink", "/"], [1, "matero-error-title"], [1, "matero-error-message"]],
  template: function ErrorCodeComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ErrorCodeComponent_div_3_Template, 2, 1, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ErrorCodeComponent_div_4_Template, 2, 1, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div")(6, "a", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Back to Home");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.code);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.title);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.message);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatAnchor],
  styles: [".matero-error-wrap {\n  text-align: center;\n}\n\n.matero-error-code {\n  padding: 20px 0;\n  font-size: 150px;\n  text-shadow: 2.1213203436px 2.1213203436px 0 rgba(0, 0, 0, 0.028575), 4.2426406871px 4.2426406871px 0 rgba(0, 0, 0, 0.02715), 6.3639610307px 6.3639610307px 0 rgba(0, 0, 0, 0.025725), 8.4852813742px 8.4852813742px 0 rgba(0, 0, 0, 0.0243), 10.6066017178px 10.6066017178px 0 rgba(0, 0, 0, 0.022875), 12.7279220614px 12.7279220614px 0 rgba(0, 0, 0, 0.02145), 14.8492424049px 14.8492424049px 0 rgba(0, 0, 0, 0.020025), 16.9705627485px 16.9705627485px 0 rgba(0, 0, 0, 0.0186), 19.091883092px 19.091883092px 0 rgba(0, 0, 0, 0.017175), 21.2132034356px 21.2132034356px 0 rgba(0, 0, 0, 0.01575), 23.3345237792px 23.3345237792px 0 rgba(0, 0, 0, 0.014325), 25.4558441227px 25.4558441227px 0 rgba(0, 0, 0, 0.0129), 27.5771644663px 27.5771644663px 0 rgba(0, 0, 0, 0.011475), 29.6984848098px 29.6984848098px 0 rgba(0, 0, 0, 0.01005), 31.8198051534px 31.8198051534px 0 rgba(0, 0, 0, 0.008625), 33.941125497px 33.941125497px 0 rgba(0, 0, 0, 0.0072), 36.0624458405px 36.0624458405px 0 rgba(0, 0, 0, 0.005775), 38.1837661841px 38.1837661841px 0 rgba(0, 0, 0, 0.00435), 40.3050865276px 40.3050865276px 0 rgba(0, 0, 0, 0.002925), 42.4264068712px 42.4264068712px 0 rgba(0, 0, 0, 0.0015);\n}\n\n.matero-error-title {\n  margin: 0 0 16px;\n  font-size: 20px;\n  font-weight: 500;\n  line-height: 32px;\n}\n\n.matero-error-message {\n  margin: 0 0 16px;\n  font-size: 16px;\n  font-weight: 400;\n  line-height: 28px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVycm9yLWNvZGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxrQkFBQTtBQURGOztBQUlBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsNG9DQUNFO0FBRko7O0FBV0E7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBUkY7O0FBV0E7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBUkYiLCJmaWxlIjoiZXJyb3ItY29kZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkB1c2UgJ2xvbmctc2hhZG93JztcclxuXHJcbi5tYXRlcm8tZXJyb3Itd3JhcCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ubWF0ZXJvLWVycm9yLWNvZGUge1xyXG4gIHBhZGRpbmc6IDIwcHggMDtcclxuICBmb250LXNpemU6IDE1MHB4O1xyXG4gIHRleHQtc2hhZG93OlxyXG4gICAgbG9uZy1zaGFkb3cubG9uZy1zaGFkb3coXHJcbiAgICAgICRkaXJlY3Rpb246IDQ1ZGVnLFxyXG4gICAgICAkbGVuZ3RoOiA2MHB4LFxyXG4gICAgICAkY29sb3I6IHJnYmEoMCwgMCwgMCwgLjAzKSxcclxuICAgICAgJGZhZGU6IHJnYmEoMCwgMCwgMCwgLjAwMTUpLFxyXG4gICAgICAkc2hhZG93LWNvdW50OiAyMFxyXG4gICAgKTtcclxufVxyXG5cclxuLm1hdGVyby1lcnJvci10aXRsZSB7XHJcbiAgbWFyZ2luOiAwIDAgMTZweDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBsaW5lLWhlaWdodDogMzJweDtcclxufVxyXG5cclxuLm1hdGVyby1lcnJvci1tZXNzYWdlIHtcclxuICBtYXJnaW46IDAgMCAxNnB4O1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGxpbmUtaGVpZ2h0OiAyOHB4O1xyXG59XHJcbiJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZXJyb3ItY29kZS9lcnJvci1jb2RlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0Usa0JBQUE7QUFERjs7QUFJQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLDRvQ0FDRTtBQUZKOztBQVdBO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQVJGOztBQVdBO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQVJGO0FBQ0Esb3hDQUFveEMiLCJzb3VyY2VzQ29udGVudCI6WyJAdXNlICdsb25nLXNoYWRvdyc7XHJcblxyXG4ubWF0ZXJvLWVycm9yLXdyYXAge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLm1hdGVyby1lcnJvci1jb2RlIHtcclxuICBwYWRkaW5nOiAyMHB4IDA7XHJcbiAgZm9udC1zaXplOiAxNTBweDtcclxuICB0ZXh0LXNoYWRvdzpcclxuICAgIGxvbmctc2hhZG93Lmxvbmctc2hhZG93KFxyXG4gICAgICAkZGlyZWN0aW9uOiA0NWRlZyxcclxuICAgICAgJGxlbmd0aDogNjBweCxcclxuICAgICAgJGNvbG9yOiByZ2JhKDAsIDAsIDAsIC4wMyksXHJcbiAgICAgICRmYWRlOiByZ2JhKDAsIDAsIDAsIC4wMDE1KSxcclxuICAgICAgJHNoYWRvdy1jb3VudDogMjBcclxuICAgICk7XHJcbn1cclxuXHJcbi5tYXRlcm8tZXJyb3ItdGl0bGUge1xyXG4gIG1hcmdpbjogMCAwIDE2cHg7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgbGluZS1oZWlnaHQ6IDMycHg7XHJcbn1cclxuXHJcbi5tYXRlcm8tZXJyb3ItbWVzc2FnZSB7XHJcbiAgbWFyZ2luOiAwIDAgMTZweDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBsaW5lLWhlaWdodDogMjhweDtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"],
  encapsulation: 2
});

/***/ }),

/***/ 6970:
/*!************************************************************************!*\
  !*** ./src/app/shared/components/page-header/page-header.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PageHeaderComponent: () => (/* binding */ PageHeaderComponent)
/* harmony export */ });
/* harmony import */ var _core_bootstrap_menu_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/bootstrap/menu.service */ 963);
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/coercion */ 5998);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../breadcrumb/breadcrumb.component */ 4414);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 5939);









function PageHeaderComponent_breadcrumb_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "breadcrumb", 3);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nav", ctx_r0.nav);
  }
}
class PageHeaderComponent {
  get hideBreadcrumb() {
    return this._hideBreadCrumb;
  }
  set hideBreadcrumb(value) {
    this._hideBreadCrumb = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceBooleanProperty)(value);
  }
  constructor(router, menu) {
    this.router = router;
    this.menu = menu;
    this.class = 'matero-page-header';
    this.title = '';
    this.subtitle = '';
    this.nav = [];
    this._hideBreadCrumb = false;
  }
  ngOnInit() {
    this.nav = Array.isArray(this.nav) ? this.nav : [];
    if (this.nav.length === 0) {
      this.genBreadcrumb();
    }
    this.title = this.title || this.nav[this.nav.length - 1];
  }
  genBreadcrumb() {
    const routes = this.router.url.slice(1).split('/');
    this.nav = this.menu.getLevel(routes);
    this.nav.unshift('home');
  }
}
PageHeaderComponent.ɵfac = function PageHeaderComponent_Factory(t) {
  return new (t || PageHeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_core_bootstrap_menu_service__WEBPACK_IMPORTED_MODULE_0__.MenuService));
};
PageHeaderComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: PageHeaderComponent,
  selectors: [["page-header"]],
  hostVars: 2,
  hostBindings: function PageHeaderComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](ctx.class);
    }
  },
  inputs: {
    title: "title",
    subtitle: "subtitle",
    nav: "nav",
    hideBreadcrumb: "hideBreadcrumb"
  },
  decls: 7,
  vars: 5,
  consts: [[1, "matero-page-header-inner"], [1, "matero-page-title"], [3, "nav", 4, "ngIf"], [3, "nav"]],
  template: function PageHeaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "h1", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "small");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, PageHeaderComponent_breadcrumb_6_Template, 1, 1, "breadcrumb", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 3, ctx.title), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.subtitle);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.hideBreadcrumb);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__.BreadcrumbComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslatePipe],
  styles: [".matero-page-header {\n  display: block;\n  padding: 16px;\n  margin: -16px -16px 16px;\n  color: #fff;\n  background-color: #3f51b5;\n}\n.matero-page-header .matero-breadcrumb {\n  margin-top: 8px;\n  margin-bottom: 0;\n}\n\n.matero-page-title {\n  margin: 0;\n  font-size: 24px;\n  font-weight: 400;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2UtaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLGFBQUE7RUFDQSx3QkFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtBQUNGO0FBQ0U7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFHQTtFQUNFLFNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFBRiIsImZpbGUiOiJwYWdlLWhlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXRlcm8tcGFnZS1oZWFkZXIge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHBhZGRpbmc6IDE2cHg7XHJcbiAgbWFyZ2luOiAtMTZweCAtMTZweCAxNnB4O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzZjUxYjU7XHJcblxyXG4gIC5tYXRlcm8tYnJlYWRjcnVtYiB7XHJcbiAgICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gIH1cclxufVxyXG5cclxuLm1hdGVyby1wYWdlLXRpdGxlIHtcclxuICBtYXJnaW46IDA7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbn1cclxuIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvcGFnZS1oZWFkZXIvcGFnZS1oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0VBQ0EsYUFBQTtFQUNBLHdCQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0FBQ0Y7QUFDRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUdBO0VBQ0UsU0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUFGO0FBQ0EsdzFCQUF3MUIiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0ZXJvLXBhZ2UtaGVhZGVyIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBwYWRkaW5nOiAxNnB4O1xyXG4gIG1hcmdpbjogLTE2cHggLTE2cHggMTZweDtcclxuICBjb2xvcjogI2ZmZjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2Y1MWI1O1xyXG5cclxuICAubWF0ZXJvLWJyZWFkY3J1bWIge1xyXG4gICAgbWFyZ2luLXRvcDogOHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICB9XHJcbn1cclxuXHJcbi5tYXRlcm8tcGFnZS10aXRsZSB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"],
  encapsulation: 2
});

/***/ }),

/***/ 5537:
/*!****************************************************************!*\
  !*** ./src/app/shared/directives/disable-control.directive.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DisableControlDirective: () => (/* binding */ DisableControlDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 8849);



class DisableControlDirective {
  constructor(ngControl) {
    this.ngControl = ngControl;
    this.disableControl = false;
  }
  ngOnChanges() {
    if (this.disableControl) {
      this.ngControl?.control?.disable({
        emitEvent: false
      });
    } else {
      this.ngControl?.control?.enable({
        emitEvent: false
      });
    }
  }
}
DisableControlDirective.ɵfac = function DisableControlDirective_Factory(t) {
  return new (t || DisableControlDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControl, 8));
};
DisableControlDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: DisableControlDirective,
  selectors: [["", "disableControl", ""]],
  inputs: {
    disableControl: "disableControl"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
});

/***/ }),

/***/ 5629:
/*!*********************************!*\
  !*** ./src/app/shared/index.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppDirectionality: () => (/* reexport safe */ _services__WEBPACK_IMPORTED_MODULE_1__.AppDirectionality),
/* harmony export */   LocalStorageService: () => (/* reexport safe */ _services__WEBPACK_IMPORTED_MODULE_1__.LocalStorageService),
/* harmony export */   MAT_COLORS: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_2__.MAT_COLORS),
/* harmony export */   MAT_ICONS: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_2__.MAT_ICONS),
/* harmony export */   MemoryStorageService: () => (/* reexport safe */ _services__WEBPACK_IMPORTED_MODULE_1__.MemoryStorageService),
/* harmony export */   MessageService: () => (/* reexport safe */ _services__WEBPACK_IMPORTED_MODULE_1__.MessageService),
/* harmony export */   PaginatorI18nService: () => (/* reexport safe */ _services__WEBPACK_IMPORTED_MODULE_1__.PaginatorI18nService),
/* harmony export */   SharedModule: () => (/* reexport safe */ _shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule)
/* harmony export */ });
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared.module */ 6208);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services */ 7175);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ 3394);
/* harmony import */ var _interfaces__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./interfaces */ 873);
// Module

// Services

// Utils

// Interfaces


/***/ }),

/***/ 873:
/*!********************************************!*\
  !*** ./src/app/shared/interfaces/index.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 8623:
/*!***********************************************!*\
  !*** ./src/app/shared/pipes/safe-url.pipe.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SafeUrlPipe: () => (/* binding */ SafeUrlPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 6480);



class SafeUrlPipe {
  constructor(sanitizer) {
    this.sanitizer = sanitizer;
  }
  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
SafeUrlPipe.ɵfac = function SafeUrlPipe_Factory(t) {
  return new (t || SafeUrlPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.DomSanitizer, 16));
};
SafeUrlPipe.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
  name: "safeUrl",
  type: SafeUrlPipe,
  pure: true
});

/***/ }),

/***/ 6124:
/*!****************************************************!*\
  !*** ./src/app/shared/pipes/to-observable.pipe.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ToObservablePipe: () => (/* binding */ ToObservablePipe)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 2568);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 4980);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);


class ToObservablePipe {
  transform(value) {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.isObservable)(value) ? value : (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(value);
  }
}
ToObservablePipe.ɵfac = function ToObservablePipe_Factory(t) {
  return new (t || ToObservablePipe)();
};
ToObservablePipe.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefinePipe"]({
  name: "toObservable",
  type: ToObservablePipe,
  pure: true
});

/***/ }),

/***/ 5135:
/*!***********************************************************!*\
  !*** ./src/app/shared/services/directionality.service.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppDirectionality: () => (/* binding */ AppDirectionality)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);



class AppDirectionality {
  constructor() {
    this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this._value = 'ltr';
  }
  get value() {
    return this._value;
  }
  set value(value) {
    this._value = value;
    this.change.next(value);
  }
  ngOnDestroy() {
    this.change.complete();
  }
}
AppDirectionality.ɵfac = function AppDirectionality_Factory(t) {
  return new (t || AppDirectionality)();
};
AppDirectionality.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: AppDirectionality,
  factory: AppDirectionality.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 7175:
/*!******************************************!*\
  !*** ./src/app/shared/services/index.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppDirectionality: () => (/* reexport safe */ _directionality_service__WEBPACK_IMPORTED_MODULE_0__.AppDirectionality),
/* harmony export */   LocalStorageService: () => (/* reexport safe */ _storage_service__WEBPACK_IMPORTED_MODULE_2__.LocalStorageService),
/* harmony export */   MemoryStorageService: () => (/* reexport safe */ _storage_service__WEBPACK_IMPORTED_MODULE_2__.MemoryStorageService),
/* harmony export */   MessageService: () => (/* reexport safe */ _message_service__WEBPACK_IMPORTED_MODULE_1__.MessageService),
/* harmony export */   PaginatorI18nService: () => (/* reexport safe */ _paginator_i18n_service__WEBPACK_IMPORTED_MODULE_3__.PaginatorI18nService)
/* harmony export */ });
/* harmony import */ var _directionality_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./directionality.service */ 5135);
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./message.service */ 3354);
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storage.service */ 2483);
/* harmony import */ var _paginator_i18n_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./paginator-i18n.service */ 827);





/***/ }),

/***/ 3354:
/*!****************************************************!*\
  !*** ./src/app/shared/services/message.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MessageService: () => (/* binding */ MessageService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class MessageService {
  constructor() {
    this.messages = [];
  }
  add(message) {
    this.messages.push(message);
  }
  clear() {
    this.messages = [];
  }
}
MessageService.ɵfac = function MessageService_Factory(t) {
  return new (t || MessageService)();
};
MessageService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: MessageService,
  factory: MessageService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 827:
/*!***********************************************************!*\
  !*** ./src/app/shared/services/paginator-i18n.service.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PaginatorI18nService: () => (/* binding */ PaginatorI18nService)
/* harmony export */ });
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/paginator */ 9687);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 5939);




class PaginatorI18nService {
  constructor(translate) {
    this.translate = translate;
    this.paginatorIntl = new _angular_material_paginator__WEBPACK_IMPORTED_MODULE_0__.MatPaginatorIntl();
    this.translate.onLangChange.subscribe(event => this.getPaginatorIntl());
  }
  getPaginatorIntl() {
    this.paginatorIntl.itemsPerPageLabel = this.translate.instant('paginator.items_per_page_label');
    this.paginatorIntl.previousPageLabel = this.translate.instant('paginator.previous_page_label');
    this.paginatorIntl.nextPageLabel = this.translate.instant('paginator.next_page_label');
    this.paginatorIntl.firstPageLabel = this.translate.instant('paginator.first_page_label');
    this.paginatorIntl.lastPageLabel = this.translate.instant('paginator.last_page_label');
    this.paginatorIntl.getRangeLabel = this.getRangeLabel.bind(this);
    this.paginatorIntl.changes.next();
    return this.paginatorIntl;
  }
  getRangeLabel(page, pageSize, length) {
    if (length === 0 || pageSize === 0) {
      return this.translate.instant('paginator.range_page_label_1', {
        length
      });
    }
    length = Math.max(length, 0);
    const startIndex = page * pageSize;
    // If the start index exceeds the list length, do not try and fix the end index to the end.
    const endIndex = startIndex < length ? Math.min(startIndex + pageSize, length) : startIndex + pageSize;
    return this.translate.instant('paginator.range_page_label_2', {
      startIndex: startIndex + 1,
      endIndex,
      length
    });
  }
}
PaginatorI18nService.ɵfac = function PaginatorI18nService_Factory(t) {
  return new (t || PaginatorI18nService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslateService));
};
PaginatorI18nService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: PaginatorI18nService,
  factory: PaginatorI18nService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 2483:
/*!****************************************************!*\
  !*** ./src/app/shared/services/storage.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LocalStorageService: () => (/* binding */ LocalStorageService),
/* harmony export */   MemoryStorageService: () => (/* binding */ MemoryStorageService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class LocalStorageService {
  get(key) {
    return JSON.parse(localStorage.getItem(key) || '{}') || {};
  }
  set(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  }
  has(key) {
    return !!localStorage.getItem(key);
  }
  remove(key) {
    localStorage.removeItem(key);
  }
  clear() {
    localStorage.clear();
  }
}
LocalStorageService.ɵfac = function LocalStorageService_Factory(t) {
  return new (t || LocalStorageService)();
};
LocalStorageService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: LocalStorageService,
  factory: LocalStorageService.ɵfac,
  providedIn: 'root'
});
class MemoryStorageService {
  constructor() {
    this.store = {};
  }
  get(key) {
    return JSON.parse(this.store[key] || '{}') || {};
  }
  set(key, value) {
    this.store[key] = JSON.stringify(value);
    return true;
  }
  has(key) {
    return !!this.store[key];
  }
  remove(key) {
    delete this.store[key];
  }
  clear() {
    this.store = {};
  }
}

/***/ }),

/***/ 6208:
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SharedModule: () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../material.module */ 9099);
/* harmony import */ var _material_extensions_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../material-extensions.module */ 4566);
/* harmony import */ var _ngx_formly_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-formly/core */ 8399);
/* harmony import */ var _ngx_formly_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-formly/material */ 1792);
/* harmony import */ var ngx_progressbar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-progressbar */ 467);
/* harmony import */ var ngx_progressbar_http__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-progressbar/http */ 5874);
/* harmony import */ var ngx_progressbar_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-progressbar/router */ 9350);
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-permissions */ 7439);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-toastr */ 7548);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ngx-translate/core */ 5939);
/* harmony import */ var _components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/breadcrumb/breadcrumb.component */ 4414);
/* harmony import */ var _components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/page-header/page-header.component */ 6970);
/* harmony import */ var _components_error_code_error_code_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/error-code/error-code.component */ 3688);
/* harmony import */ var _directives_disable_control_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./directives/disable-control.directive */ 5537);
/* harmony import */ var _pipes_safe_url_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pipes/safe-url.pipe */ 8623);
/* harmony import */ var _pipes_to_observable_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pipes/to-observable.pipe */ 6124);
/* harmony import */ var _components_comfirm_dialog_comfirm_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/comfirm-dialog/comfirm-dialog.component */ 1682);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/core */ 1699);





















const MODULES = [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule, _material_module__WEBPACK_IMPORTED_MODULE_0__.MaterialModule, _material_extensions_module__WEBPACK_IMPORTED_MODULE_1__.MaterialExtensionsModule, _ngx_formly_core__WEBPACK_IMPORTED_MODULE_12__.FormlyModule, _ngx_formly_material__WEBPACK_IMPORTED_MODULE_13__.FormlyMaterialModule, ngx_progressbar__WEBPACK_IMPORTED_MODULE_14__.NgProgressModule, ngx_progressbar_router__WEBPACK_IMPORTED_MODULE_15__.NgProgressRouterModule, ngx_progressbar_http__WEBPACK_IMPORTED_MODULE_16__.NgProgressHttpModule, ngx_permissions__WEBPACK_IMPORTED_MODULE_17__.NgxPermissionsModule, ngx_toastr__WEBPACK_IMPORTED_MODULE_18__.ToastrModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__.TranslateModule];
const COMPONENTS = [_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_2__.BreadcrumbComponent, _components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_3__.PageHeaderComponent, _components_error_code_error_code_component__WEBPACK_IMPORTED_MODULE_4__.ErrorCodeComponent];
const COMPONENTS_DYNAMIC = [];
const DIRECTIVES = [_directives_disable_control_directive__WEBPACK_IMPORTED_MODULE_5__.DisableControlDirective];
const PIPES = [_pipes_safe_url_pipe__WEBPACK_IMPORTED_MODULE_6__.SafeUrlPipe, _pipes_to_observable_pipe__WEBPACK_IMPORTED_MODULE_7__.ToObservablePipe];
class SharedModule {}
SharedModule.ɵfac = function SharedModule_Factory(t) {
  return new (t || SharedModule)();
};
SharedModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdefineNgModule"]({
  type: SharedModule
});
SharedModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdefineInjector"]({
  imports: [MODULES, _angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule, _material_module__WEBPACK_IMPORTED_MODULE_0__.MaterialModule, _material_extensions_module__WEBPACK_IMPORTED_MODULE_1__.MaterialExtensionsModule, _ngx_formly_core__WEBPACK_IMPORTED_MODULE_12__.FormlyModule, _ngx_formly_material__WEBPACK_IMPORTED_MODULE_13__.FormlyMaterialModule, ngx_progressbar__WEBPACK_IMPORTED_MODULE_14__.NgProgressModule, ngx_progressbar_router__WEBPACK_IMPORTED_MODULE_15__.NgProgressRouterModule, ngx_progressbar_http__WEBPACK_IMPORTED_MODULE_16__.NgProgressHttpModule, ngx_permissions__WEBPACK_IMPORTED_MODULE_17__.NgxPermissionsModule, ngx_toastr__WEBPACK_IMPORTED_MODULE_18__.ToastrModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__.TranslateModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵsetNgModuleScope"](SharedModule, {
    declarations: [_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_2__.BreadcrumbComponent, _components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_3__.PageHeaderComponent, _components_error_code_error_code_component__WEBPACK_IMPORTED_MODULE_4__.ErrorCodeComponent, _directives_disable_control_directive__WEBPACK_IMPORTED_MODULE_5__.DisableControlDirective, _pipes_safe_url_pipe__WEBPACK_IMPORTED_MODULE_6__.SafeUrlPipe, _pipes_to_observable_pipe__WEBPACK_IMPORTED_MODULE_7__.ToObservablePipe, _components_comfirm_dialog_comfirm_dialog_component__WEBPACK_IMPORTED_MODULE_8__.ComfirmDialogComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule, _material_module__WEBPACK_IMPORTED_MODULE_0__.MaterialModule, _material_extensions_module__WEBPACK_IMPORTED_MODULE_1__.MaterialExtensionsModule, _ngx_formly_core__WEBPACK_IMPORTED_MODULE_12__.FormlyModule, _ngx_formly_material__WEBPACK_IMPORTED_MODULE_13__.FormlyMaterialModule, ngx_progressbar__WEBPACK_IMPORTED_MODULE_14__.NgProgressModule, ngx_progressbar_router__WEBPACK_IMPORTED_MODULE_15__.NgProgressRouterModule, ngx_progressbar_http__WEBPACK_IMPORTED_MODULE_16__.NgProgressHttpModule, ngx_permissions__WEBPACK_IMPORTED_MODULE_17__.NgxPermissionsModule, ngx_toastr__WEBPACK_IMPORTED_MODULE_18__.ToastrModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__.TranslateModule],
    exports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule, _material_module__WEBPACK_IMPORTED_MODULE_0__.MaterialModule, _material_extensions_module__WEBPACK_IMPORTED_MODULE_1__.MaterialExtensionsModule, _ngx_formly_core__WEBPACK_IMPORTED_MODULE_12__.FormlyModule, _ngx_formly_material__WEBPACK_IMPORTED_MODULE_13__.FormlyMaterialModule, ngx_progressbar__WEBPACK_IMPORTED_MODULE_14__.NgProgressModule, ngx_progressbar_router__WEBPACK_IMPORTED_MODULE_15__.NgProgressRouterModule, ngx_progressbar_http__WEBPACK_IMPORTED_MODULE_16__.NgProgressHttpModule, ngx_permissions__WEBPACK_IMPORTED_MODULE_17__.NgxPermissionsModule, ngx_toastr__WEBPACK_IMPORTED_MODULE_18__.ToastrModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__.TranslateModule, _components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_2__.BreadcrumbComponent, _components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_3__.PageHeaderComponent, _components_error_code_error_code_component__WEBPACK_IMPORTED_MODULE_4__.ErrorCodeComponent, _directives_disable_control_directive__WEBPACK_IMPORTED_MODULE_5__.DisableControlDirective, _pipes_safe_url_pipe__WEBPACK_IMPORTED_MODULE_6__.SafeUrlPipe, _pipes_to_observable_pipe__WEBPACK_IMPORTED_MODULE_7__.ToObservablePipe]
  });
})();

/***/ }),

/***/ 2748:
/*!****************************************!*\
  !*** ./src/app/shared/utils/colors.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MAT_COLORS: () => (/* binding */ MAT_COLORS)
/* harmony export */ });
const MAT_COLORS = {
  'red': {
    50: '#FFEBEE',
    100: '#FFCDD2',
    200: '#EF9A9A',
    300: '#E57373',
    400: '#EF5350',
    500: '#F44336',
    600: '#E53935',
    700: '#D32F2F',
    800: '#C62828',
    900: '#B71C1C',
    A100: '#FF8A80',
    A200: '#FF5252',
    A400: '#FF1744',
    A700: '#D50000',
    contrast: {
      50: 'dark',
      100: 'dark',
      200: 'dark',
      300: 'dark',
      400: 'light',
      500: 'light',
      600: 'light',
      700: 'light',
      800: 'light',
      900: 'light',
      A100: 'dark',
      A200: 'light',
      A400: 'light',
      A700: 'light'
    }
  },
  'pink': {
    50: '#FCE4EC',
    100: '#F8BBD0',
    200: '#F48FB1',
    300: '#F06292',
    400: '#EC407A',
    500: '#E91E63',
    600: '#D81B60',
    700: '#C2185B',
    800: '#AD1457',
    900: '#880E4F',
    A100: '#FF80AB',
    A200: '#FF4081',
    A400: '#F50057',
    A700: '#C51162',
    contrast: {
      50: 'dark',
      100: 'dark',
      200: 'dark',
      300: 'dark',
      400: 'light',
      500: 'light',
      600: 'light',
      700: 'light',
      800: 'light',
      900: 'light',
      A100: 'dark',
      A200: 'light',
      A400: 'light',
      A700: 'light'
    }
  },
  'purple': {
    50: '#F3E5F5',
    100: '#E1BEE7',
    200: '#CE93D8',
    300: '#BA68C8',
    400: '#AB47BC',
    500: '#9C27B0',
    600: '#8E24AA',
    700: '#7B1FA2',
    800: '#6A1B9A',
    900: '#4A148C',
    A100: '#EA80FC',
    A200: '#E040FB',
    A400: '#D500F9',
    A700: '#AA00FF',
    contrast: {
      50: 'dark',
      100: 'dark',
      200: 'dark',
      300: 'light',
      400: 'light',
      500: 'light',
      600: 'light',
      700: 'light',
      800: 'light',
      900: 'light',
      A100: 'dark',
      A200: 'light',
      A400: 'light',
      A700: 'light'
    }
  },
  'deep-purple': {
    50: '#EDE7F6',
    100: '#D1C4E9',
    200: '#B39DDB',
    300: '#9575CD',
    400: '#7E57C2',
    500: '#673AB7',
    600: '#5E35B1',
    700: '#512DA8',
    800: '#4527A0',
    900: '#311B92',
    A100: '#B388FF',
    A200: '#7C4DFF',
    A400: '#651FFF',
    A700: '#6200EA',
    contrast: {
      50: 'dark',
      100: 'dark',
      200: 'dark',
      300: 'light',
      400: 'light',
      500: 'light',
      600: 'light',
      700: 'light',
      800: 'light',
      900: 'light',
      A100: 'dark',
      A200: 'light',
      A400: 'light',
      A700: 'light'
    }
  },
  'indigo': {
    50: '#E8EAF6',
    100: '#C5CAE9',
    200: '#9FA8DA',
    300: '#7986CB',
    400: '#5C6BC0',
    500: '#3F51B5',
    600: '#3949AB',
    700: '#303F9F',
    800: '#283593',
    900: '#1A237E',
    A100: '#8C9EFF',
    A200: '#536DFE',
    A400: '#3D5AFE',
    A700: '#304FFE',
    contrast: {
      50: 'dark',
      100: 'dark',
      200: 'dark',
      300: 'light',
      400: 'light',
      500: 'light',
      600: 'light',
      700: 'light',
      800: 'light',
      900: 'light',
      A100: 'dark',
      A200: 'light',
      A400: 'light',
      A700: 'light'
    }
  },
  'blue': {
    50: '#E3F2FD',
    100: '#BBDEFB',
    200: '#90CAF9',
    300: '#64B5F6',
    400: '#42A5F5',
    500: '#2196F3',
    600: '#1E88E5',
    700: '#1976D2',
    800: '#1565C0',
    900: '#0D47A1',
    A100: '#82B1FF',
    A200: '#448AFF',
    A400: '#2979FF',
    A700: '#2962FF',
    contrast: {
      50: 'dark',
      100: 'dark',
      200: 'dark',
      300: 'dark',
      400: 'dark',
      500: 'dark',
      600: 'light',
      700: 'light',
      800: 'light',
      900: 'light',
      A100: 'dark',
      A200: 'light',
      A400: 'light',
      A700: 'light'
    }
  },
  'light-blue': {
    50: '#E1F5FE',
    100: '#B3E5FC',
    200: '#81D4FA',
    300: '#4FC3F7',
    400: '#29B6F6',
    500: '#03A9F4',
    600: '#039BE5',
    700: '#0288D1',
    800: '#0277BD',
    900: '#01579B',
    A100: '#80D8FF',
    A200: '#40C4FF',
    A400: '#00B0FF',
    A700: '#0091EA',
    contrast: {
      50: 'dark',
      100: 'dark',
      200: 'dark',
      300: 'dark',
      400: 'dark',
      500: 'dark',
      600: 'dark',
      700: 'light',
      800: 'light',
      900: 'light',
      A100: 'dark',
      A200: 'dark',
      A400: 'dark',
      A700: 'light'
    }
  },
  'cyan': {
    50: '#E0F7FA',
    100: '#B2EBF2',
    200: '#80DEEA',
    300: '#4DD0E1',
    400: '#26C6DA',
    500: '#00BCD4',
    600: '#00ACC1',
    700: '#0097A7',
    800: '#00838F',
    900: '#006064',
    A100: '#84FFFF',
    A200: '#18FFFF',
    A400: '#00E5FF',
    A700: '#00B8D4',
    contrast: {
      50: 'dark',
      100: 'dark',
      200: 'dark',
      300: 'dark',
      400: 'dark',
      500: 'dark',
      600: 'dark',
      700: 'light',
      800: 'light',
      900: 'light',
      A100: 'dark',
      A200: 'dark',
      A400: 'dark',
      A700: 'dark'
    }
  },
  'teal': {
    50: '#E0F2F1',
    100: '#B2DFDB',
    200: '#80CBC4',
    300: '#4DB6AC',
    400: '#26A69A',
    500: '#009688',
    600: '#00897B',
    700: '#00796B',
    800: '#00695C',
    900: '#004D40',
    A100: '#A7FFEB',
    A200: '#64FFDA',
    A400: '#1DE9B6',
    A700: '#00BFA5',
    contrast: {
      50: 'dark',
      100: 'dark',
      200: 'dark',
      300: 'dark',
      400: 'dark',
      500: 'light',
      600: 'light',
      700: 'light',
      800: 'light',
      900: 'light',
      A100: 'dark',
      A200: 'dark',
      A400: 'dark',
      A700: 'dark'
    }
  },
  'green': {
    50: '#E8F5E9',
    100: '#C8E6C9',
    200: '#A5D6A7',
    300: '#81C784',
    400: '#66BB6A',
    500: '#4CAF50',
    600: '#43A047',
    700: '#388E3C',
    800: '#2E7D32',
    900: '#1B5E20',
    A100: '#B9F6CA',
    A200: '#69F0AE',
    A400: '#00E676',
    A700: '#00C853',
    contrast: {
      50: 'dark',
      100: 'dark',
      200: 'dark',
      300: 'dark',
      400: 'dark',
      500: 'dark',
      600: 'light',
      700: 'light',
      800: 'light',
      900: 'light',
      A100: 'dark',
      A200: 'dark',
      A400: 'dark',
      A700: 'dark'
    }
  },
  'light-green': {
    50: '#F1F8E9',
    100: '#DCEDC8',
    200: '#C5E1A5',
    300: '#AED581',
    400: '#9CCC65',
    500: '#8BC34A',
    600: '#7CB342',
    700: '#689F38',
    800: '#558B2F',
    900: '#33691E',
    A100: '#CCFF90',
    A200: '#B2FF59',
    A400: '#76FF03',
    A700: '#64DD17',
    contrast: {
      50: 'dark',
      100: 'dark',
      200: 'dark',
      300: 'dark',
      400: 'dark',
      500: 'dark',
      600: 'dark',
      700: 'dark',
      800: 'light',
      900: 'light',
      A100: 'dark',
      A200: 'dark',
      A400: 'dark',
      A700: 'dark'
    }
  },
  'lime': {
    50: '#F9FBE7',
    100: '#F0F4C3',
    200: '#E6EE9C',
    300: '#DCE775',
    400: '#D4E157',
    500: '#CDDC39',
    600: '#C0CA33',
    700: '#AFB42B',
    800: '#9E9D24',
    900: '#827717',
    A100: '#F4FF81',
    A200: '#EEFF41',
    A400: '#C6FF00',
    A700: '#AEEA00',
    contrast: {
      50: 'dark',
      100: 'dark',
      200: 'dark',
      300: 'dark',
      400: 'dark',
      500: 'dark',
      600: 'dark',
      700: 'dark',
      800: 'dark',
      900: 'light',
      A100: 'dark',
      A200: 'dark',
      A400: 'dark',
      A700: 'dark'
    }
  },
  'yellow': {
    50: '#FFFDE7',
    100: '#FFF9C4',
    200: '#FFF59D',
    300: '#FFF176',
    400: '#FFEE58',
    500: '#FFEB3B',
    600: '#FDD835',
    700: '#FBC02D',
    800: '#F9A825',
    900: '#F57F17',
    A100: '#FFFF8D',
    A200: '#FFFF00',
    A400: '#FFEA00',
    A700: '#FFD600',
    contrast: {
      50: 'dark',
      100: 'dark',
      200: 'dark',
      300: 'dark',
      400: 'dark',
      500: 'dark',
      600: 'dark',
      700: 'dark',
      800: 'dark',
      900: 'dark',
      A100: 'dark',
      A200: 'dark',
      A400: 'dark',
      A700: 'dark'
    }
  },
  'amber': {
    50: '#FFF8E1',
    100: '#FFECB3',
    200: '#FFE082',
    300: '#FFD54F',
    400: '#FFCA28',
    500: '#FFC107',
    600: '#FFB300',
    700: '#FFA000',
    800: '#FF8F00',
    900: '#FF6F00',
    A100: '#FFE57F',
    A200: '#FFD740',
    A400: '#FFC400',
    A700: '#FFAB00',
    contrast: {
      50: 'dark',
      100: 'dark',
      200: 'dark',
      300: 'dark',
      400: 'dark',
      500: 'dark',
      600: 'dark',
      700: 'dark',
      800: 'dark',
      900: 'dark',
      A100: 'dark',
      A200: 'dark',
      A400: 'dark',
      A700: 'dark'
    }
  },
  'orange': {
    50: '#FFF3E0',
    100: '#FFE0B2',
    200: '#FFCC80',
    300: '#FFB74D',
    400: '#FFA726',
    500: '#FF9800',
    600: '#FB8C00',
    700: '#F57C00',
    800: '#EF6C00',
    900: '#E65100',
    A100: '#FFD180',
    A200: '#FFAB40',
    A400: '#FF9100',
    A700: '#FF6D00',
    contrast: {
      50: 'dark',
      100: 'dark',
      200: 'dark',
      300: 'dark',
      400: 'dark',
      500: 'dark',
      600: 'dark',
      700: 'dark',
      800: 'dark',
      900: 'light',
      A100: 'dark',
      A200: 'dark',
      A400: 'dark',
      A700: 'dark'
    }
  },
  'deep-orange': {
    50: '#FBE9E7',
    100: '#FFCCBC',
    200: '#FFAB91',
    300: '#FF8A65',
    400: '#FF7043',
    500: '#FF5722',
    600: '#F4511E',
    700: '#E64A19',
    800: '#D84315',
    900: '#BF360C',
    A100: '#FF9E80',
    A200: '#FF6E40',
    A400: '#FF3D00',
    A700: '#DD2C00',
    contrast: {
      50: 'dark',
      100: 'dark',
      200: 'dark',
      300: 'dark',
      400: 'dark',
      500: 'dark',
      600: 'dark',
      700: 'dark',
      800: 'dark',
      900: 'light',
      A100: 'dark',
      A200: 'dark',
      A400: 'dark',
      A700: 'dark'
    }
  },
  'brown': {
    50: '#EFEBE9',
    100: '#D7CCC8',
    200: '#BCAAA4',
    300: '#A1887F',
    400: '#8D6E63',
    500: '#795548',
    600: '#6D4C41',
    700: '#5D4037',
    800: '#4E342E',
    900: '#3E2723',
    A100: '#D7CCC8',
    A200: '#BCAAA4',
    A400: '#8D6E63',
    A700: '#5D4037',
    contrast: {
      50: 'dark',
      100: 'dark',
      200: 'dark',
      300: 'light',
      400: 'light',
      500: 'light',
      600: 'light',
      700: 'light',
      800: 'light',
      900: 'light',
      A100: 'dark',
      A200: 'dark',
      A400: 'light',
      A700: 'light'
    }
  },
  'gray': {
    50: '#FAFAFA',
    100: '#F5F5F5',
    200: '#EEEEEE',
    300: '#E0E0E0',
    400: '#BDBDBD',
    500: '#9E9E9E',
    600: '#757575',
    700: '#616161',
    800: '#424242',
    900: '#212121',
    A100: '#FFFFFF',
    A200: ' #EEEEEE',
    A400: '#BDBDBD',
    A700: '#616161',
    contrast: {
      50: 'dark',
      100: 'dark',
      200: 'dark',
      300: 'dark',
      400: 'dark',
      500: 'dark',
      600: 'light',
      700: 'light',
      800: 'light',
      900: 'light',
      A100: 'dark',
      A200: 'dark',
      A400: 'dark',
      A700: 'light'
    }
  },
  'blue-gray': {
    50: '#ECEFF1',
    100: '#CFD8DC',
    200: '#B0BEC5',
    300: '#90A4AE',
    400: '#78909C',
    500: '#607D8B',
    600: '#546E7A',
    700: '#455A64',
    800: '#37474F',
    900: '#263238',
    A100: '#CFD8DC',
    A200: '#B0BEC5',
    A400: '#78909C',
    A700: '#455A64',
    contrast: {
      50: 'dark',
      100: 'dark',
      200: 'dark',
      300: 'dark',
      400: 'light',
      500: 'light',
      600: 'light',
      700: 'light',
      800: 'light',
      900: 'light',
      A100: 'dark',
      A200: 'dark',
      A400: 'light',
      A700: 'light'
    }
  }
};

/***/ }),

/***/ 9695:
/*!***************************************!*\
  !*** ./src/app/shared/utils/icons.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MAT_ICONS: () => (/* binding */ MAT_ICONS)
/* harmony export */ });
const MAT_ICONS = {
  action: ['3d_rotation', 'accessibility', 'accessibility_new', 'accessible', 'accessible_forward', 'account_balance', 'account_balance_wallet', 'account_box', 'account_circle', 'add_shopping_cart', 'alarm', 'alarm_add', 'alarm_off', 'alarm_on', 'all_inbox', 'all_out', 'android', 'announcement', 'arrow_right_alt', 'aspect_ratio', 'assessment', 'assignment', 'assignment_ind', 'assignment_late', 'assignment_return', 'assignment_returned', 'assignment_turned_in', 'autorenew', 'backup', 'book', 'bookmark', 'bookmark_border', 'bookmarks', 'bug_report', 'build', 'cached', 'calendar_today', 'calendar_view_day', 'camera_enhance', 'card_giftcard', 'card_membership', 'card_travel', 'change_history', 'check_circle', 'check_circle_outline', 'chrome_reader_mode', 'class', 'code', 'commute', 'compare_arrows', 'contact_support', 'copyright', 'credit_card', 'dashboard', 'date_range', 'delete', 'delete_forever', 'delete_outline', 'description', 'dns', 'done', 'done_all', 'done_outline', 'donut_large', 'donut_small', 'drag_indicator', 'eject', 'euro_symbol', 'event', 'event_seat', 'exit_to_app', 'explore', 'explore_off', 'extension', 'face', 'favorite', 'favorite_border', 'feedback', 'find_in_page', 'find_replace', 'fingerprint', 'flight_land', 'flight_takeoff', 'flip_to_back', 'flip_to_front', 'g_translate', 'gavel', 'get_app', 'gif', 'grade', 'group_work', 'help', 'help_outline', 'highlight_off', 'history', 'home', 'horizontal_split', 'hourglass_empty', 'hourglass_full', 'http', 'https', 'important_devices', 'info', 'input', 'invert_colors', 'label', 'label_important', 'label_off', 'language', 'launch', 'line_style', 'line_weight', 'list', 'lock', 'lock_open', 'loyalty', 'markunread_mailbox', 'maximize', 'minimize', 'motorcycle', 'note_add', 'offline_bolt', 'offline_pin', 'opacity', 'open_in_browser', 'open_in_new', 'open_with', 'pageview', 'pan_tool', 'payment', 'perm_camera_mic', 'perm_contact_calendar', 'perm_data_setting', 'perm_device_information', 'perm_identity', 'perm_media', 'perm_phone_msg', 'perm_scan_wifi', 'pets', 'picture_in_picture', 'picture_in_picture_alt', 'play_for_work', 'polymer', 'power_settings_new', 'pregnant_woman', 'print', 'query_builder', 'question_answer', 'receipt', 'record_voice_over', 'redeem', 'remove_shopping_cart', 'reorder', 'report_problem', 'restore', 'restore_from_trash', 'restore_page', 'room', 'rounded_corner', 'rowing', 'schedule', 'search', 'settings', 'settings_applications', 'settings_backup_restore', 'settings_bluetooth', 'settings_brightness', 'settings_cell', 'settings_ethernet', 'settings_input_antenna', 'settings_input_component', 'settings_input_composite', 'settings_input_hdmi', 'settings_input_svideo', 'settings_overscan', 'settings_phone', 'settings_power', 'settings_remote', 'settings_voice', 'shop', 'shop_two', 'shopping_basket', 'shopping_cart', 'speaker_notes', 'speaker_notes_off', 'spellcheck', 'star_rate', 'stars', 'store', 'subject', 'supervised_user_circle', 'supervisor_account', 'swap_horiz', 'swap_horizontal_circle', 'swap_vert', 'swap_vertical_circle', 'tab', 'tab_unselected', 'text_rotate_up', 'text_rotate_vertical', 'text_rotation_down', 'text_rotation_none', 'theaters', 'thumb_down', 'thumb_up', 'thumbs_up_down', 'timeline', 'toc', 'today', 'toll', 'touch_app', 'track_changes', 'translate', 'trending_down', 'trending_flat', 'trending_up', 'turned_in', 'turned_in_not', 'update', 'verified_user', 'vertical_split', 'view_agenda', 'view_array', 'view_carousel', 'view_column', 'view_day', 'view_headline', 'view_list', 'view_module', 'view_quilt', 'view_stream', 'view_week', 'visibility', 'visibility_off', 'voice_over_off', 'watch_later', 'work', 'work_off', 'work_outline', 'youtube_searched_for', 'zoom_in', 'zoom_out'],
  alert: ['add_alert', 'error', 'error_outline', 'notification_important', 'warning'],
  av: ['4k', 'add_to_queue', 'airplay', 'album', 'art_track', 'av_timer', 'branding_watermark', 'call_to_action', 'closed_caption', 'control_camera', 'equalizer', 'explicit', 'fast_forward', 'fast_rewind', 'featured_play_list', 'featured_video', 'fiber_dvr', 'fiber_manual_record', 'fiber_new', 'fiber_pin', 'fiber_smart_record', 'forward_10', 'forward_30', 'forward_5', 'games', 'hd', 'hearing', 'high_quality', 'library_add', 'library_books', 'library_music', 'loop', 'mic', 'mic_none', 'mic_off', 'missed_video_call', 'movie', 'music_video', 'new_releases', 'not_interested', 'note', 'pause', 'pause_circle_filled', 'pause_circle_outline', 'play_arrow', 'play_circle_filled', 'play_circle_filled_white', 'play_circle_outline', 'playlist_add', 'playlist_add_check', 'playlist_play', 'queue', 'queue_music', 'queue_play_next', 'radio', 'recent_actors', 'remove_from_queue', 'repeat', 'repeat_one', 'replay', 'replay_10', 'replay_30', 'replay_5', 'shuffle', 'skip_next', 'skip_previous', 'slow_motion_video', 'snooze', 'sort_by_alpha', 'stop', 'subscriptions', 'subtitles', 'surround_sound', 'video_call', 'video_label', 'video_library', 'videocam', 'videocam_off', 'volume_down', 'volume_mute', 'volume_off', 'volume_up', 'web', 'web_asset'],
  communication: ['alternate_email', 'business', 'call', 'call_end', 'call_made', 'call_merge', 'call_missed', 'call_missed_outgoing', 'call_received', 'call_split', 'cancel_presentation', 'cell_wifi', 'chat', 'chat_bubble', 'chat_bubble_outline', 'clear_all', 'comment', 'contact_mail', 'contact_phone', 'contacts', 'desktop_access_disabled', 'dialer_sip', 'dialpad', 'domain_disabled', 'duo', 'email', 'forum', 'import_contacts', 'import_export', 'invert_colors_off', 'list_alt', 'live_help', 'location_off', 'location_on', 'mail_outline', 'message', 'mobile_screen_share', 'no_sim', 'pause_presentation', 'person_add_disabled', 'phone', 'phonelink_erase', 'phonelink_lock', 'phonelink_ring', 'phonelink_setup', 'portable_wifi_off', 'present_to_all', 'print_disabled', 'ring_volume', 'rss_feed', 'screen_share', 'sentiment_satisfied_alt', 'speaker_phone', 'stay_current_landscape', 'stay_current_portrait', 'stay_primary_landscape', 'stay_primary_portrait', 'stop_screen_share', 'swap_calls', 'textsms', 'unsubscribe', 'voicemail', 'vpn_key'],
  content: ['add', 'add_box', 'add_circle', 'add_circle_outline', 'archive', 'backspace', 'ballot', 'block', 'clear', 'create', 'delete_sweep', 'drafts', 'file_copy', 'filter_list', 'flag', 'font_download', 'forward', 'gesture', 'how_to_reg', 'how_to_vote', 'inbox', 'link', 'link_off', 'low_priority', 'mail', 'markunread', 'move_to_inbox', 'next_week', 'outlined_flag', 'redo', 'remove', 'remove_circle', 'remove_circle_outline', 'reply', 'reply_all', 'report', 'report_off', 'save', 'save_alt', 'select_all', 'send', 'sort', 'text_format', 'unarchive', 'undo', 'waves', 'weekend', 'where_to_vote'],
  device: ['access_alarm', 'access_alarms', 'access_time', 'add_alarm', 'add_to_home_screen', 'airplanemode_active', 'airplanemode_inactive',
  // 'battery_20',
  // 'battery_30',
  // 'battery_50',
  // 'battery_60',
  // 'battery_80',
  // 'battery_90',
  'battery_alert',
  // 'battery_charging_20',
  // 'battery_charging_30',
  // 'battery_charging_50',
  // 'battery_charging_60',
  // 'battery_charging_80',
  // 'battery_charging_90',
  'battery_charging_full', 'battery_full', 'battery_std', 'battery_unknown', 'bluetooth', 'bluetooth_connected', 'bluetooth_disabled', 'bluetooth_searching', 'brightness_auto', 'brightness_high', 'brightness_low', 'brightness_medium', 'data_usage', 'developer_mode', 'devices', 'dvr', 'gps_fixed', 'gps_not_fixed', 'gps_off', 'graphic_eq', 'location_disabled', 'location_searching', 'mobile_friendly', 'mobile_off',
  // 'network_cell',
  // 'network_wifi',
  'nfc', 'screen_lock_landscape', 'screen_lock_portrait', 'screen_lock_rotation', 'screen_rotation', 'sd_storage', 'settings_system_daydream',
  // 'signal_cellular_0_bar',
  // 'signal_cellular_1_bar',
  // 'signal_cellular_2_bar',
  // 'signal_cellular_3_bar',
  // 'signal_cellular_4_bar',
  'signal_cellular_alt',
  // 'signal_cellular_connected_no_internet_0_bar',
  // 'signal_cellular_connected_no_internet_1_bar',
  // 'signal_cellular_connected_no_internet_2_bar',
  // 'signal_cellular_connected_no_internet_3_bar',
  'signal_cellular_connected_no_internet_4_bar', 'signal_cellular_no_sim', 'signal_cellular_null', 'signal_cellular_off',
  // 'signal_wifi_0_bar',
  // 'signal_wifi_1_bar',
  // 'signal_wifi_1_bar_lock',
  // 'signal_wifi_2_bar',
  // 'signal_wifi_2_bar_lock',
  // 'signal_wifi_3_bar',
  // 'signal_wifi_3_bar_lock',
  'signal_wifi_4_bar', 'signal_wifi_4_bar_lock', 'signal_wifi_off', 'storage', 'usb', 'wallpaper', 'widgets', 'wifi_lock', 'wifi_tethering'],
  editor: ['add_comment', 'attach_file', 'attach_money', 'bar_chart', 'border_all', 'border_bottom', 'border_clear', 'border_color', 'border_horizontal', 'border_inner', 'border_left', 'border_outer', 'border_right', 'border_style', 'border_top', 'border_vertical', 'bubble_chart', 'drag_handle', 'format_align_center', 'format_align_justify', 'format_align_left', 'format_align_right', 'format_bold', 'format_clear', 'format_color_fill', 'format_color_reset', 'format_color_text', 'format_indent_decrease', 'format_indent_increase', 'format_italic', 'format_line_spacing', 'format_list_bulleted', 'format_list_numbered', 'format_list_numbered_rtl', 'format_paint', 'format_quote', 'format_shapes', 'format_size', 'format_strikethrough', 'format_textdirection_l_to_r', 'format_textdirection_r_to_l', 'format_underlined', 'functions', 'highlight', 'insert_chart', 'insert_chart_outlined', 'insert_comment', 'insert_drive_file', 'insert_emoticon', 'insert_invitation', 'insert_link', 'insert_photo', 'linear_scale', 'merge_type', 'mode_comment', 'monetization_on', 'money_off', 'multiline_chart', 'notes', 'pie_chart', 'publish', 'scatter_plot', 'score', 'short_text', 'show_chart', 'space_bar', 'strikethrough_s', 'table_chart', 'text_fields', 'title', 'vertical_align_bottom', 'vertical_align_center', 'vertical_align_top', 'wrap_text'],
  file: ['attachment', 'cloud', 'cloud_circle', 'cloud_done', 'cloud_download', 'cloud_off', 'cloud_queue', 'cloud_upload', 'create_new_folder', 'folder', 'folder_open', 'folder_shared'],
  hardware: ['cast', 'cast_connected', 'cast_for_education', 'computer', 'desktop_mac', 'desktop_windows', 'developer_board', 'device_hub', 'device_unknown', 'devices_other', 'dock', 'gamepad', 'headset', 'headset_mic', 'keyboard', 'keyboard_arrow_down', 'keyboard_arrow_left', 'keyboard_arrow_right', 'keyboard_arrow_up', 'keyboard_backspace', 'keyboard_capslock', 'keyboard_hide', 'keyboard_return', 'keyboard_tab', 'keyboard_voice', 'laptop', 'laptop_chromebook', 'laptop_mac', 'laptop_windows', 'memory', 'mouse', 'phone_android', 'phone_iphone', 'phonelink', 'phonelink_off', 'power_input', 'router', 'scanner', 'security', 'sim_card', 'smartphone', 'speaker', 'speaker_group', 'tablet', 'tablet_android', 'tablet_mac', 'toys', 'tv', 'videogame_asset', 'watch'],
  image: ['add_a_photo', 'add_photo_alternate', 'add_to_photos', 'adjust', 'assistant', 'assistant_photo', 'audiotrack', 'blur_circular', 'blur_linear', 'blur_off', 'blur_on', 'brightness_1', 'brightness_2', 'brightness_3', 'brightness_4', 'brightness_5', 'brightness_6', 'brightness_7', 'broken_image', 'brush', 'burst_mode', 'camera', 'camera_alt', 'camera_front', 'camera_rear', 'camera_roll', 'center_focus_strong', 'center_focus_weak', 'collections', 'collections_bookmark', 'color_lens', 'colorize', 'compare', 'control_point', 'control_point_duplicate', 'crop', 'crop_16_9', 'crop_3_2', 'crop_5_4', 'crop_7_5', 'crop_din', 'crop_free', 'crop_landscape', 'crop_original', 'crop_portrait', 'crop_rotate', 'crop_square', 'dehaze', 'details', 'edit', 'exposure', 'exposure_neg_1', 'exposure_neg_2', 'exposure_plus_1', 'exposure_plus_2', 'exposure_zero', 'filter', 'filter_1', 'filter_2', 'filter_3', 'filter_4', 'filter_5', 'filter_6', 'filter_7', 'filter_8', 'filter_9', 'filter_9_plus', 'filter_b_and_w', 'filter_center_focus', 'filter_drama', 'filter_frames', 'filter_hdr', 'filter_none', 'filter_tilt_shift', 'filter_vintage', 'flare', 'flash_auto', 'flash_off', 'flash_on', 'flip', 'gradient', 'grain', 'grid_off', 'grid_on', 'hdr_off', 'hdr_on', 'hdr_strong', 'hdr_weak', 'healing', 'image', 'image_aspect_ratio', 'image_search', 'iso', 'landscape', 'leak_add', 'leak_remove', 'lens', 'linked_camera', 'looks', 'looks_3', 'looks_4', 'looks_5', 'looks_6', 'looks_one', 'looks_two', 'loupe', 'monochrome_photos', 'movie_creation', 'movie_filter', 'music_note', 'music_off', 'nature', 'nature_people', 'navigate_before', 'navigate_next', 'palette', 'panorama', 'panorama_fish_eye', 'panorama_horizontal', 'panorama_vertical', 'panorama_wide_angle', 'photo', 'photo_album', 'photo_camera', 'photo_filter', 'photo_library', 'photo_size_select_actual', 'photo_size_select_large', 'photo_size_select_small', 'picture_as_pdf', 'portrait', 'remove_red_eye', 'rotate_90_degrees_ccw', 'rotate_left', 'rotate_right', 'shutter_speed', 'slideshow', 'straighten', 'style', 'switch_camera', 'switch_video', 'tag_faces', 'texture', 'timelapse', 'timer', 'timer_10', 'timer_3', 'timer_off', 'tonality', 'transform', 'tune', 'view_comfy', 'view_compact', 'vignette', 'wb_auto', 'wb_cloudy', 'wb_incandescent', 'wb_iridescent', 'wb_sunny'],
  maps: ['360', 'add_location', 'atm', 'beenhere', 'category', 'compass_calibration', 'departure_board', 'directions', 'directions_bike', 'directions_boat', 'directions_bus', 'directions_car', 'directions_railway', 'directions_run', 'directions_subway', 'directions_transit', 'directions_walk', 'edit_attributes', 'edit_location', 'ev_station', 'fastfood', 'flight', 'hotel', 'layers', 'layers_clear', 'local_activity', 'local_airport', 'local_atm', 'local_bar', 'local_cafe', 'local_car_wash', 'local_convenience_store', 'local_dining', 'local_drink', 'local_florist', 'local_gas_station', 'local_grocery_store', 'local_hospital', 'local_hotel', 'local_laundry_service', 'local_library', 'local_mall', 'local_movies', 'local_offer', 'local_parking', 'local_pharmacy', 'local_phone', 'local_pizza', 'local_play', 'local_post_office', 'local_printshop', 'local_see', 'local_shipping', 'local_taxi', 'map', 'money', 'my_location', 'navigation', 'near_me', 'not_listed_location', 'person_pin', 'person_pin_circle', 'pin_drop', 'place', 'rate_review', 'restaurant', 'restaurant_menu', 'satellite', 'store_mall_directory', 'streetview', 'subway', 'terrain', 'traffic', 'train', 'tram', 'transfer_within_a_station', 'transit_enterexit', 'trip_origin', 'zoom_out_map'],
  navigation: ['apps', 'arrow_back', 'arrow_back_ios', 'arrow_downward', 'arrow_drop_down', 'arrow_drop_down_circle', 'arrow_drop_up', 'arrow_forward', 'arrow_forward_ios', 'arrow_left', 'arrow_right', 'arrow_upward', 'cancel', 'check', 'chevron_left', 'chevron_right', 'close', 'expand_less', 'expand_more', 'first_page', 'fullscreen', 'fullscreen_exit', 'last_page', 'menu', 'more_horiz', 'more_vert', 'refresh', 'subdirectory_arrow_left', 'subdirectory_arrow_right', 'unfold_less', 'unfold_more'],
  notification: ['adb', 'airline_seat_flat', 'airline_seat_flat_angled', 'airline_seat_individual_suite', 'airline_seat_legroom_extra', 'airline_seat_legroom_normal', 'airline_seat_legroom_reduced', 'airline_seat_recline_extra', 'airline_seat_recline_normal', 'bluetooth_audio', 'confirmation_number', 'disc_full', 'drive_eta', 'enhanced_encryption', 'event_available', 'event_busy', 'event_note', 'folder_special', 'live_tv', 'mms', 'more', 'network_check', 'network_locked', 'no_encryption', 'ondemand_video', 'personal_video', 'phone_bluetooth_speaker', 'phone_callback', 'phone_forwarded', 'phone_in_talk', 'phone_locked', 'phone_missed', 'phone_paused', 'power', 'power_off', 'priority_high', 'sd_card', 'sms', 'sms_failed', 'sync', 'sync_disabled', 'sync_problem', 'system_update', 'tap_and_play', 'time_to_leave', 'tv_off', 'vibration', 'voice_chat', 'vpn_lock', 'wc', 'wifi', 'wifi_off'],
  places: ['ac_unit', 'airport_shuttle', 'all_inclusive', 'beach_access', 'business_center', 'casino', 'child_care', 'child_friendly', 'fitness_center', 'free_breakfast', 'golf_course', 'hot_tub', 'kitchen', 'meeting_room', 'no_meeting_room', 'pool', 'room_service', 'rv_hookup', 'smoke_free', 'smoking_rooms', 'spa'],
  social: ['cake', 'domain', 'group', 'group_add', 'location_city', 'mood', 'mood_bad', 'notifications', 'notifications_active', 'notifications_none', 'notifications_off', 'notifications_paused', 'pages', 'party_mode', 'people', 'people_outline', 'person', 'person_add', 'person_outline', 'plus_one', 'poll', 'public', 'school', 'sentiment_dissatisfied', 'sentiment_satisfied', 'sentiment_very_dissatisfied', 'sentiment_very_satisfied', 'share', 'thumb_down_alt', 'thumb_up_alt', 'whatshot'],
  toggle: ['check_box', 'check_box_outline_blank', 'indeterminate_check_box', 'radio_button_checked', 'radio_button_unchecked', 'star', 'star_border', 'star_half', 'toggle_off', 'toggle_on']
};

/***/ }),

/***/ 3394:
/*!***************************************!*\
  !*** ./src/app/shared/utils/index.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MAT_COLORS: () => (/* reexport safe */ _colors__WEBPACK_IMPORTED_MODULE_0__.MAT_COLORS),
/* harmony export */   MAT_ICONS: () => (/* reexport safe */ _icons__WEBPACK_IMPORTED_MODULE_1__.MAT_ICONS)
/* harmony export */ });
/* harmony import */ var _colors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./colors */ 2748);
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icons */ 9695);



/***/ }),

/***/ 894:
/*!**************************************************************!*\
  !*** ./src/app/theme/admin-layout/admin-layout.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdminLayoutComponent: () => (/* binding */ AdminLayoutComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 1523);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 4520);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core */ 9076);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/layout */ 9743);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/cdk/bidi */ 4565);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/sidenav */ 1465);
/* harmony import */ var ngx_progressbar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-progressbar */ 467);
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sidebar/sidebar.component */ 7428);
/* harmony import */ var _sidebar_notice_sidebar_notice_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sidebar-notice/sidebar-notice.component */ 9235);
/* harmony import */ var _topmenu_topmenu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../topmenu/topmenu.component */ 2931);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../header/header.component */ 6167);


















const _c0 = ["sidenav"];
const _c1 = ["content"];
function AdminLayoutComponent_app_header_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "app-header", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("toggleSidenav", function AdminLayoutComponent_app_header_2_Template_app_header_toggleSidenav_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](5);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](_r1.toggle());
    })("toggleSidenavNotice", function AdminLayoutComponent_app_header_2_Template_app_header_toggleSidenavNotice_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](8);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](_r2.toggle());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("showBranding", true);
  }
}
function AdminLayoutComponent_app_header_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "app-header", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("toggleSidenav", function AdminLayoutComponent_app_header_12_Template_app_header_toggleSidenav_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](5);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](_r1.toggle());
    })("toggleSidenavNotice", function AdminLayoutComponent_app_header_12_Template_app_header_toggleSidenavNotice_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](8);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](_r2.toggle());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("showToggle", !ctx_r4.options.sidenavCollapsed && ctx_r4.options.navPos !== "top")("showBranding", ctx_r4.options.navPos === "top");
  }
}
function AdminLayoutComponent_app_topmenu_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "app-topmenu");
  }
}
const _c2 = function (a0, a1, a2, a3, a4, a5) {
  return {
    "matero-sidenav-collapsed": a0,
    "matero-navbar-side": a1,
    "matero-navbar-top": a2,
    "matero-header-above": a3,
    "matero-header-fixed": a4,
    "matero-header-white": a5
  };
};
const MOBILE_MEDIAQUERY = 'screen and (max-width: 599px)';
const TABLET_MEDIAQUERY = 'screen and (min-width: 600px) and (max-width: 959px)';
const MONITOR_MEDIAQUERY = 'screen and (min-width: 960px)';
class AdminLayoutComponent {
  get isOver() {
    return this.isMobileScreen;
  }
  get contentWidthFix() {
    return this.isContentWidthFixed && this.options.navPos === 'side' && this.options.sidenavOpened && !this.isOver;
  }
  get collapsedWidthFix() {
    return this.isCollapsedWidthFixed && (this.options.navPos === 'top' || this.options.sidenavOpened && this.isOver);
  }
  constructor(router, breakpointObserver, settings) {
    this.router = router;
    this.breakpointObserver = breakpointObserver;
    this.settings = settings;
    this.options = this.settings.getOptions();
    this.layoutChangesSubscription = rxjs__WEBPACK_IMPORTED_MODULE_6__.Subscription.EMPTY;
    this.isMobileScreen = false;
    this.isContentWidthFixed = true;
    this.isCollapsedWidthFixed = false;
    this.layoutChangesSubscription = this.breakpointObserver.observe([MOBILE_MEDIAQUERY, TABLET_MEDIAQUERY, MONITOR_MEDIAQUERY]).subscribe(state => {
      // SidenavOpened must be reset true when layout changes
      this.options.sidenavOpened = true;
      this.isMobileScreen = state.breakpoints[MOBILE_MEDIAQUERY];
      this.options.sidenavCollapsed = state.breakpoints[TABLET_MEDIAQUERY];
      this.isContentWidthFixed = state.breakpoints[MONITOR_MEDIAQUERY];
    });
    this.router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.filter)(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_8__.NavigationEnd)).subscribe(e => {
      if (this.isOver) {
        this.sidenav.close();
      }
      this.content.scrollTo({
        top: 0
      });
    });
  }
  ngOnDestroy() {
    this.layoutChangesSubscription.unsubscribe();
  }
  toggleCollapsed() {
    this.isContentWidthFixed = false;
    this.options.sidenavCollapsed = !this.options.sidenavCollapsed;
    this.resetCollapsedState();
  }
  // TODO: Trigger when transition end
  resetCollapsedState(timer = 400) {
    setTimeout(() => this.settings.setOptions(this.options), timer);
  }
  onSidenavClosedStart() {
    this.isContentWidthFixed = false;
  }
  onSidenavOpenedChange(isOpened) {
    this.isCollapsedWidthFixed = !this.isOver;
    this.options.sidenavOpened = isOpened;
    this.settings.setOptions(this.options);
  }
  updateOptions(options) {
    this.options = options;
    this.settings.setOptions(options);
    this.settings.setDirection();
    this.settings.setTheme();
  }
}
AdminLayoutComponent.ɵfac = function AdminLayoutComponent_Factory(t) {
  return new (t || AdminLayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_9__.BreakpointObserver), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_core__WEBPACK_IMPORTED_MODULE_0__.SettingsService));
};
AdminLayoutComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: AdminLayoutComponent,
  selectors: [["app-admin-layout"]],
  viewQuery: function AdminLayoutComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c1, 7);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.sidenav = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.content = _t.first);
    }
  },
  hostVars: 4,
  hostBindings: function AdminLayoutComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("matero-content-width-fix", ctx.contentWidthFix)("matero-sidenav-collapsed-fix", ctx.collapsedWidthFix);
    }
  },
  decls: 16,
  vars: 18,
  consts: [[1, "matero-container-wrap", 3, "ngClass", "dir"], [3, "showBranding", "toggleSidenav", "toggleSidenavNotice", 4, "ngIf"], ["autosize", "", "autoFocus", "", 1, "matero-container"], [1, "matero-sidenav", 3, "mode", "opened", "openedChange", "closedStart"], ["sidenav", ""], [3, "showToggle", "showUser", "showHeader", "toggleChecked", "toggleCollapsed"], ["position", "end", "mode", "over"], ["sidenavNotice", ""], [1, "matero-content-wrap"], ["content", ""], [3, "showToggle", "showBranding", "toggleSidenav", "toggleSidenavNotice", 4, "ngIf"], [4, "ngIf"], [1, "matero-content"], [3, "showBranding", "toggleSidenav", "toggleSidenavNotice"], [3, "showToggle", "showBranding", "toggleSidenav", "toggleSidenavNotice"]],
  template: function AdminLayoutComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "ng-progress");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, AdminLayoutComponent_app_header_2_Template, 1, 1, "app-header", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "mat-sidenav-container", 2)(4, "mat-sidenav", 3, 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("openedChange", function AdminLayoutComponent_Template_mat_sidenav_openedChange_4_listener($event) {
        return ctx.onSidenavOpenedChange($event);
      })("closedStart", function AdminLayoutComponent_Template_mat_sidenav_closedStart_4_listener() {
        return ctx.onSidenavClosedStart();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "app-sidebar", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("toggleCollapsed", function AdminLayoutComponent_Template_app_sidebar_toggleCollapsed_6_listener() {
        return ctx.toggleCollapsed();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "mat-sidenav", 6, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](9, "app-sidebar-notice");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "mat-sidenav-content", 8, 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](12, AdminLayoutComponent_app_header_12_Template, 1, 2, "app-header", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](13, AdminLayoutComponent_app_topmenu_13_Template, 1, 0, "app-topmenu", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](15, "router-outlet");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction6"](11, _c2, ctx.options.sidenavCollapsed && ctx.options.navPos !== "top", ctx.options.navPos === "side", ctx.options.navPos === "top", ctx.options.headerPos === "above", ctx.options.headerPos === "fixed", ctx.options.theme !== "dark"))("dir", ctx.options.dir);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.options.showHeader && ctx.options.headerPos === "above");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("mode", ctx.isOver ? "over" : "side")("opened", ctx.options.navPos === "side" && ctx.options.sidenavOpened && !ctx.isOver);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("showToggle", !ctx.isOver)("showUser", !!ctx.options.showUserPanel)("showHeader", ctx.options.headerPos !== "above")("toggleChecked", !!ctx.options.sidenavCollapsed);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.options.showHeader && ctx.options.headerPos !== "above");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.options.navPos === "top");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterOutlet, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_11__.Dir, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__.MatSidenav, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__.MatSidenavContainer, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__.MatSidenavContent, ngx_progressbar__WEBPACK_IMPORTED_MODULE_13__.NgProgressComponent, _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_1__.SidebarComponent, _sidebar_notice_sidebar_notice_component__WEBPACK_IMPORTED_MODULE_2__.SidebarNoticeComponent, _topmenu_topmenu_component__WEBPACK_IMPORTED_MODULE_3__.TopmenuComponent, _header_header_component__WEBPACK_IMPORTED_MODULE_4__.HeaderComponent],
  styles: [".matero-container-wrap,\n.matero-container {\n  height: 100%;\n}\n\n.matero-content {\n  position: relative;\n  padding: 16px;\n}\n\n.matero-sidenav {\n  position: absolute;\n  overflow-x: hidden;\n  transition: width 400ms cubic-bezier(0.25, 0.8, 0.25, 1);\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n}\n.matero-sidenav.mat-drawer-side {\n  border-width: 0;\n}\n[dir=rtl] .matero-sidenav.mat-drawer-side {\n  border-width: 0;\n}\n\n.matero-header-above .matero-container {\n  height: calc(100% - 64px) !important;\n}\n.matero-header-above .matero-sidebar-main {\n  height: 100% !important;\n}\n\n.matero-sidenav-collapsed .matero-sidenav,\n.matero-sidenav-collapsed-fix .matero-sidenav {\n  width: 50px;\n}\n.matero-sidenav-collapsed .matero-sidenav .menu-name,\n.matero-sidenav-collapsed .matero-sidenav .menu-label,\n.matero-sidenav-collapsed .matero-sidenav .menu-badge,\n.matero-sidenav-collapsed .matero-sidenav .menu-caret,\n.matero-sidenav-collapsed .matero-sidenav .matero-user-panel-name,\n.matero-sidenav-collapsed .matero-sidenav .matero-user-panel-email,\n.matero-sidenav-collapsed .matero-sidenav .matero-user-panel-icons,\n.matero-sidenav-collapsed-fix .matero-sidenav .menu-name,\n.matero-sidenav-collapsed-fix .matero-sidenav .menu-label,\n.matero-sidenav-collapsed-fix .matero-sidenav .menu-badge,\n.matero-sidenav-collapsed-fix .matero-sidenav .menu-caret,\n.matero-sidenav-collapsed-fix .matero-sidenav .matero-user-panel-name,\n.matero-sidenav-collapsed-fix .matero-sidenav .matero-user-panel-email,\n.matero-sidenav-collapsed-fix .matero-sidenav .matero-user-panel-icons {\n  opacity: 0;\n}\n.matero-sidenav-collapsed .matero-sidenav .matero-user-panel-avatar,\n.matero-sidenav-collapsed-fix .matero-sidenav .matero-user-panel-avatar {\n  transform: scale(0.5);\n}\n.matero-sidenav-collapsed .matero-sidenav:hover,\n.matero-sidenav-collapsed-fix .matero-sidenav:hover {\n  width: 240px;\n}\n.matero-sidenav-collapsed .matero-sidenav:hover .menu-name,\n.matero-sidenav-collapsed .matero-sidenav:hover .menu-label,\n.matero-sidenav-collapsed .matero-sidenav:hover .menu-badge,\n.matero-sidenav-collapsed .matero-sidenav:hover .menu-caret,\n.matero-sidenav-collapsed .matero-sidenav:hover .matero-user-panel-name,\n.matero-sidenav-collapsed .matero-sidenav:hover .matero-user-panel-email,\n.matero-sidenav-collapsed .matero-sidenav:hover .matero-user-panel-icons,\n.matero-sidenav-collapsed-fix .matero-sidenav:hover .menu-name,\n.matero-sidenav-collapsed-fix .matero-sidenav:hover .menu-label,\n.matero-sidenav-collapsed-fix .matero-sidenav:hover .menu-badge,\n.matero-sidenav-collapsed-fix .matero-sidenav:hover .menu-caret,\n.matero-sidenav-collapsed-fix .matero-sidenav:hover .matero-user-panel-name,\n.matero-sidenav-collapsed-fix .matero-sidenav:hover .matero-user-panel-email,\n.matero-sidenav-collapsed-fix .matero-sidenav:hover .matero-user-panel-icons {\n  opacity: 1;\n}\n.matero-sidenav-collapsed .matero-sidenav:hover .matero-user-panel-avatar,\n.matero-sidenav-collapsed-fix .matero-sidenav:hover .matero-user-panel-avatar {\n  transform: scale(1);\n}\n\n.matero-sidenav-collapsed .matero-content-wrap {\n  margin-left: 50px !important;\n}\n[dir=rtl] .matero-sidenav-collapsed .matero-content-wrap {\n  margin-right: 50px !important;\n  margin-left: auto !important;\n}\n.matero-sidenav-collapsed[dir=rtl] .matero-content-wrap {\n  margin-right: 50px !important;\n  margin-left: auto !important;\n}\n\n.matero-navbar-top .matero-topmenu {\n  top: 0;\n}\n.matero-navbar-top .matero-branding {\n  margin-left: 16px;\n}\n[dir=rtl] .matero-navbar-top .matero-branding {\n  margin-right: 16px;\n  margin-left: auto;\n}\n\n.matero-header-fixed .matero-header {\n  position: sticky;\n  top: 0;\n  display: block;\n}\n.matero-header-fixed .matero-topmenu {\n  top: 64px;\n}\n@media (max-width: 599px) {\n  .matero-header-fixed .matero-topmenu {\n    top: 56px;\n  }\n}\n.matero-header-fixed.matero-navbar-side .matero-toolbar {\n  border-bottom: unset;\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n}\n\n.matero-content-width-fix .matero-content-wrap {\n  margin-left: 240px !important;\n}\n[dir=rtl] .matero-content-width-fix .matero-content-wrap {\n  margin-right: 240px !important;\n  margin-left: auto !important;\n}\n\n.matero-header-white .matero-toolbar,\n.matero-header-white .matero-topmenu {\n  background-color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkbWluLWxheW91dC5jb21wb25lbnQuc2NzcyIsIi4uXFxzdHlsZVxcX3ZhcmlhYmxlcy5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXG5vZGVfbW9kdWxlc1xcQG1hdGVyaWFsXFx0aGVtZVxcX2Nzcy5zY3NzIiwiLi5cXHN0eWxlXFxfYnJlYWtwb2ludHMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLQTs7RUFFRSxZQUFBO0FBSkY7O0FBT0E7RUFDRSxrQkFBQTtFQUNBLGFDVE87QURLVDs7QUFPQTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSx3REFBQTtFRTRERSx5SEFBQTtBRi9ESjtBQU9FO0VBQ0UsZUFBQTtBQUxKO0FBT0k7RUFDRSxlQUFBO0FBTE47O0FBWUU7RUFDRSxvQ0FBQTtBQVRKO0FBWUU7RUFDRSx1QkFBQTtBQVZKOztBQWlCRTs7RUFDRSxXQ3ZDc0I7QUQwQjFCO0FBZUk7Ozs7Ozs7Ozs7Ozs7O0VBT0UsVUFBQTtBQU5OO0FBU0k7O0VBQ0UscUJBQUE7QUFOTjtBQVNJOztFQUNFLFlDekRVO0FEbURoQjtBQVFNOzs7Ozs7Ozs7Ozs7OztFQU9FLFVBQUE7QUFDUjtBQUVNOztFQUNFLG1CQUFBO0FBQ1I7O0FBT0U7RUFDRSw0QkFBQTtBQUpKO0FBTUk7RUFDRSw2QkFBQTtFQUNBLDRCQUFBO0FBSk47QUFRRTtFQUNFLDZCQUFBO0VBQ0EsNEJBQUE7QUFOSjs7QUFZRTtFQUNFLE1BQUE7QUFUSjtBQVlFO0VBQ0UsaUJBQUE7QUFWSjtBQVlJO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtBQVZOOztBQWlCRTtFQUNFLGdCQUFBO0VBQ0EsTUFBQTtFQUdBLGNBQUE7QUFoQko7QUFtQkU7RUFDRSxTQ25IcUI7QURrR3pCO0FHakZJO0VIcUdFO0lBQ0UsU0N0SGdCO0VEcUd0QjtBQUNGO0FBc0JJO0VBQ0Usb0JBQUE7RUUzREYseUhBQUE7QUZ3Q0o7O0FBNEJFO0VBQ0UsNkJBQUE7QUF6Qko7QUEyQkk7RUFDRSw4QkFBQTtFQUNBLDRCQUFBO0FBekJOOztBQWdDRTs7RUFFRSx1QkFBQTtBQTdCSiIsImZpbGUiOiJhZG1pbi1sYXlvdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAdXNlICdAYW5ndWxhci9tYXRlcmlhbCcgYXMgbWF0O1xyXG5AdXNlICcuLi9zdHlsZS92YXJpYWJsZXMnO1xyXG5AdXNlICcuLi9zdHlsZS90cmFuc2l0aW9ucyc7XHJcbkB1c2UgJy4uL3N0eWxlL2JyZWFrcG9pbnRzJztcclxuXHJcbi5tYXRlcm8tY29udGFpbmVyLXdyYXAsXHJcbi5tYXRlcm8tY29udGFpbmVyIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5tYXRlcm8tY29udGVudCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHBhZGRpbmc6IHZhcmlhYmxlcy4kZ3V0dGVyO1xyXG59XHJcblxyXG4ubWF0ZXJvLXNpZGVuYXYge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNpdGlvbnMuc3dpZnQtZWFzZS1vdXQod2lkdGgpOyAvLyBPbmx5IHNldCB3aWR0aCBwcm9wZXJ0eVxyXG5cclxuICBAaW5jbHVkZSBtYXQuZWxldmF0aW9uKDIpO1xyXG5cclxuICAmLm1hdC1kcmF3ZXItc2lkZSB7XHJcbiAgICBib3JkZXItd2lkdGg6IDA7XHJcblxyXG4gICAgW2Rpcj0ncnRsJ10gJiB7XHJcbiAgICAgIGJvcmRlci13aWR0aDogMDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vIExheW91dCBjb250cm9sXHJcbi5tYXRlcm8taGVhZGVyLWFib3ZlIHtcclxuICAubWF0ZXJvLWNvbnRhaW5lciB7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtICN7dmFyaWFibGVzLiR0b29sYmFyLWhlaWdodC1kZXNrdG9wfSkgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5tYXRlcm8tc2lkZWJhci1tYWluIHtcclxuICAgIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuLy8gTGF5b3V0IGNvbnRyb2xcclxuLm1hdGVyby1zaWRlbmF2LWNvbGxhcHNlZCxcclxuLm1hdGVyby1zaWRlbmF2LWNvbGxhcHNlZC1maXgge1xyXG4gIC5tYXRlcm8tc2lkZW5hdiB7XHJcbiAgICB3aWR0aDogdmFyaWFibGVzLiRzaWRlbmF2LWNvbGxhcHNlZC13aWR0aDtcclxuXHJcbiAgICAubWVudS1uYW1lLFxyXG4gICAgLm1lbnUtbGFiZWwsXHJcbiAgICAubWVudS1iYWRnZSxcclxuICAgIC5tZW51LWNhcmV0LFxyXG4gICAgLm1hdGVyby11c2VyLXBhbmVsLW5hbWUsXHJcbiAgICAubWF0ZXJvLXVzZXItcGFuZWwtZW1haWwsXHJcbiAgICAubWF0ZXJvLXVzZXItcGFuZWwtaWNvbnMge1xyXG4gICAgICBvcGFjaXR5OiAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5tYXRlcm8tdXNlci1wYW5lbC1hdmF0YXIge1xyXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKC41KTtcclxuICAgIH1cclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgd2lkdGg6IHZhcmlhYmxlcy4kc2lkZW5hdi13aWR0aDtcclxuXHJcbiAgICAgIC5tZW51LW5hbWUsXHJcbiAgICAgIC5tZW51LWxhYmVsLFxyXG4gICAgICAubWVudS1iYWRnZSxcclxuICAgICAgLm1lbnUtY2FyZXQsXHJcbiAgICAgIC5tYXRlcm8tdXNlci1wYW5lbC1uYW1lLFxyXG4gICAgICAubWF0ZXJvLXVzZXItcGFuZWwtZW1haWwsXHJcbiAgICAgIC5tYXRlcm8tdXNlci1wYW5lbC1pY29ucyB7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLm1hdGVyby11c2VyLXBhbmVsLWF2YXRhciB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLy8gTGF5b3V0IGNvbnRyb2xcclxuLm1hdGVyby1zaWRlbmF2LWNvbGxhcHNlZCB7XHJcbiAgLm1hdGVyby1jb250ZW50LXdyYXAge1xyXG4gICAgbWFyZ2luLWxlZnQ6IHZhcmlhYmxlcy4kc2lkZW5hdi1jb2xsYXBzZWQtd2lkdGggIWltcG9ydGFudDtcclxuXHJcbiAgICBbZGlyPSdydGwnXSAmIHtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiB2YXJpYWJsZXMuJHNpZGVuYXYtY29sbGFwc2VkLXdpZHRoICFpbXBvcnRhbnQ7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmW2Rpcj0ncnRsJ10gLm1hdGVyby1jb250ZW50LXdyYXAge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiB2YXJpYWJsZXMuJHNpZGVuYXYtY29sbGFwc2VkLXdpZHRoICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0byAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuLy8gTGF5b3V0IGNvbnRyb2xcclxuLm1hdGVyby1uYXZiYXItdG9wIHtcclxuICAubWF0ZXJvLXRvcG1lbnUge1xyXG4gICAgdG9wOiAwO1xyXG4gIH1cclxuXHJcbiAgLm1hdGVyby1icmFuZGluZyB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTZweDtcclxuXHJcbiAgICBbZGlyPSdydGwnXSAmIHtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xyXG4gICAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vIExheW91dCBjb250cm9sXHJcbi5tYXRlcm8taGVhZGVyLWZpeGVkIHtcclxuICAubWF0ZXJvLWhlYWRlciB7XHJcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gICAgdG9wOiAwO1xyXG4gICAgLy8gRml4IGhlYWRlcidzIHBvc2l0aW9uaW5nIHByb2JsZW0gb24gRmlyZWZveFxyXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL25nLW1hdGVyby9uZy1tYXRlcm8vaXNzdWVzLzUyMlxyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG5cclxuICAubWF0ZXJvLXRvcG1lbnUge1xyXG4gICAgdG9wOiB2YXJpYWJsZXMuJHRvcG1lbnUtc3RpY2t5LXBvc2l0aW9uLWRlc2t0b3A7XHJcblxyXG4gICAgQGluY2x1ZGUgYnJlYWtwb2ludHMuYnAtbHQoc21hbGwpIHtcclxuICAgICAgJiB7XHJcbiAgICAgICAgdG9wOiB2YXJpYWJsZXMuJHRvcG1lbnUtc3RpY2t5LXBvc2l0aW9uLW1vYmlsZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJi5tYXRlcm8tbmF2YmFyLXNpZGUge1xyXG4gICAgLm1hdGVyby10b29sYmFyIHtcclxuICAgICAgYm9yZGVyLWJvdHRvbTogdW5zZXQ7XHJcblxyXG4gICAgICBAaW5jbHVkZSBtYXQuZWxldmF0aW9uKDIpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLy8gRml4IHRoZSBpbml0IGNvbnRlbnQgd2lkdGhcclxuLm1hdGVyby1jb250ZW50LXdpZHRoLWZpeCB7XHJcbiAgLm1hdGVyby1jb250ZW50LXdyYXAge1xyXG4gICAgbWFyZ2luLWxlZnQ6IHZhcmlhYmxlcy4kc2lkZW5hdi13aWR0aCAhaW1wb3J0YW50O1xyXG5cclxuICAgIFtkaXI9J3J0bCddICYge1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IHZhcmlhYmxlcy4kc2lkZW5hdi13aWR0aCAhaW1wb3J0YW50O1xyXG4gICAgICBtYXJnaW4tbGVmdDogYXV0byAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLy8gQ29sb3JmdWxcclxuLm1hdGVyby1oZWFkZXItd2hpdGUge1xyXG4gIC5tYXRlcm8tdG9vbGJhcixcclxuICAubWF0ZXJvLXRvcG1lbnUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgfVxyXG59XHJcbiIsIkB1c2UgJ0Bhbmd1bGFyL21hdGVyaWFsJyBhcyBtYXQ7XHJcblxyXG4vLyBMYXlvdXRcclxuJGd1dHRlcjogMTZweCAhZGVmYXVsdDtcclxuXHJcbi8vIFNpZGVuYXZcclxuJHNpZGVuYXYtd2lkdGg6IDI0MHB4ICFkZWZhdWx0O1xyXG4kc2lkZW5hdi1jb2xsYXBzZWQtd2lkdGg6IDUwcHggIWRlZmF1bHQ7XHJcbiRzaWRlbmF2LXdpZHRoLW1vYmlsZTogMjgwcHggIWRlZmF1bHQ7XHJcblxyXG4vLyBUb29sYmFyXHJcbiR0b29sYmFyLWhlaWdodC1kZXNrdG9wOiA2NHB4ICFkZWZhdWx0O1xyXG4kdG9vbGJhci1oZWlnaHQtbW9iaWxlOiA1NnB4ICFkZWZhdWx0O1xyXG5cclxuLy8gVG9wbWVudVxyXG4kdG9wbWVudS1zdGlja3ktcG9zaXRpb24tZGVza3RvcDogJHRvb2xiYXItaGVpZ2h0LWRlc2t0b3AgIWRlZmF1bHQ7XHJcbiR0b3BtZW51LXN0aWNreS1wb3NpdGlvbi1tb2JpbGU6ICR0b29sYmFyLWhlaWdodC1tb2JpbGUgIWRlZmF1bHQ7XHJcblxyXG4vLyBUeXBvZ3JhcGh5XHJcbiRmb250LWZhbWlseS1zYW5zLXNlcmlmOiAnUm9ib3RvJywgJ0hlbHZldGljYSBOZXVlIExpZ2h0JywgJ0hlbHZldGljYSBOZXVlJywgSGVsdmV0aWNhLCBBcmlhbCxcclxuICAnTHVjaWRhIEdyYW5kZScsIHNhbnMtc2VyaWYgIWRlZmF1bHQ7XHJcbiRmb250LWZhbWlseS1tb25vc3BhY2U6ICdSb2JvdG8gTW9ubycsIG1vbm9zcGFjZSAhZGVmYXVsdDtcclxuJGZvbnQtZmFtaWx5LWJhc2U6ICRmb250LWZhbWlseS1zYW5zLXNlcmlmICFkZWZhdWx0O1xyXG5cclxuLy8gQnJlYWtwb2ludHNcclxuLy9cclxuLy8gRGVmaW5lIHRoZSBtaW5pbXVtIGRpbWVuc2lvbnMgYXQgd2hpY2ggeW91ciBsYXlvdXQgd2lsbCBjaGFuZ2UsXHJcbi8vIGFkYXB0aW5nIHRvIGRpZmZlcmVudCBzY3JlZW4gc2l6ZXMsIGZvciB1c2UgaW4gbWVkaWEgcXVlcmllcy5cclxuJGJyZWFrcG9pbnRzOiAoXHJcbiAgeHNtYWxsOiAwLFxyXG4gIHNtYWxsOiAgNjAwcHgsXHJcbiAgbWVkaXVtOiA5NjBweCxcclxuICBsYXJnZTogIDEyODBweCxcclxuICB4bGFyZ2U6IDE5MjBweFxyXG4pICFkZWZhdWx0O1xyXG5cclxuLy8gTWF0ZXJpYWwgY29sb3JzXHJcbiRtYXQtY29sb3JzOiAoXHJcbiAgcmVkOiBtYXQuJHJlZC1wYWxldHRlLFxyXG4gIHBpbms6IG1hdC4kcGluay1wYWxldHRlLFxyXG4gIHB1cnBsZTogbWF0LiRwdXJwbGUtcGFsZXR0ZSxcclxuICBkZWVwLXB1cnBsZTogbWF0LiRkZWVwLXB1cnBsZS1wYWxldHRlLFxyXG4gIGluZGlnbzogbWF0LiRpbmRpZ28tcGFsZXR0ZSxcclxuICBibHVlOiBtYXQuJGJsdWUtcGFsZXR0ZSxcclxuICBsaWdodC1ibHVlOiBtYXQuJGxpZ2h0LWJsdWUtcGFsZXR0ZSxcclxuICBjeWFuOiBtYXQuJGN5YW4tcGFsZXR0ZSxcclxuICB0ZWFsOiBtYXQuJHRlYWwtcGFsZXR0ZSxcclxuICBncmVlbjogbWF0LiRncmVlbi1wYWxldHRlLFxyXG4gIGxpZ2h0LWdyZWVuOiBtYXQuJGxpZ2h0LWdyZWVuLXBhbGV0dGUsXHJcbiAgbGltZTogbWF0LiRsaW1lLXBhbGV0dGUsXHJcbiAgeWVsbG93OiBtYXQuJHllbGxvdy1wYWxldHRlLFxyXG4gIGFtYmVyOiBtYXQuJGFtYmVyLXBhbGV0dGUsXHJcbiAgb3JhbmdlOiBtYXQuJG9yYW5nZS1wYWxldHRlLFxyXG4gIGRlZXAtb3JhbmdlOiBtYXQuJGRlZXAtb3JhbmdlLXBhbGV0dGUsXHJcbiAgYnJvd246IG1hdC4kYnJvd24tcGFsZXR0ZSxcclxuICBncmF5OiBtYXQuJGdyYXktcGFsZXR0ZSxcclxuICBibHVlLWdyYXk6IG1hdC4kYmx1ZS1ncmF5LXBhbGV0dGUsXHJcbiAgd2hpdGU6IHdoaXRlLFxyXG4gIGJsYWNrOiBibGFjayxcclxuICBsaWdodDogd2hpdGUsXHJcbiAgZGFyazogcmdiYShibGFjaywgLjg3KSxcclxuKSAhZGVmYXVsdDtcclxuXHJcbi8vIFRoZSBtYXRlcmlhbCBkZWZhdWx0IGFuaW1hdGlvbiBjdXJ2ZXNcclxuJHN3aWZ0LWVhc2Utb3V0LWR1cmF0aW9uOiA0MDBtcyAhZGVmYXVsdDtcclxuJHN3aWZ0LWVhc2Utb3V0LXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKC4yNSwgLjgsIC4yNSwgMSkgIWRlZmF1bHQ7XHJcbiIsIi8vXG4vLyBDb3B5cmlnaHQgMjAyMCBHb29nbGUgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG4vL1xuXG5AdXNlICdzYXNzOmxpc3QnO1xuQHVzZSAnc2FzczptYXAnO1xuQHVzZSAnc2FzczptZXRhJztcbkB1c2UgJy4vZ3NzJztcblxuLy8vIFdoZW4gdHJ1ZSwgYWRkIGFuIGFkZGl0aW9uYWwgcHJvcGVydHkvdmFsdWUgZGVjbGFyYXRpb24gYmVmb3JlIGRlY2xhcmF0aW9uc1xuLy8vIHRoYXQgdXNlIGFkdmFuY2VkIGZlYXR1cmVzIHN1Y2ggYXMgY3VzdG9tIHByb3BlcnRpZXMgb3IgQ1NTIGZ1bmN0aW9ucy4gVGhpc1xuLy8vIGFkZHMgZmFsbGJhY2sgc3VwcG9ydCBmb3Igb2xkZXIgYnJvd3NlcnMgc3VjaCBhcyBJRTExIHRoYXQgZG8gbm90IHN1cHBvcnRcbi8vLyB0aGVzZSBmZWF0dXJlcyBhdCB0aGUgY29zdCBvZiBhZGRpdGlvbmFsIENTUy4gU2V0IHRoaXMgdmFyaWFibGUgdG8gZmFsc2UgdG9cbi8vLyBkaXNhYmxlIGdlbmVyYXRpbmcgZmFsbGJhY2sgZGVjbGFyYXRpb25zLlxuJGVuYWJsZS1mYWxsYmFjay1kZWNsYXJhdGlvbnM6IHRydWUgIWRlZmF1bHQ7XG5cbi8vLyBXcml0ZXMgYSBDU1MgcHJvcGVydHkvdmFsdWUgZGVjbGFyYXRpb24uIFRoaXMgbWl4aW4gaXMgdXNlZCB0aHJvdWdob3V0IHRoZVxuLy8vIHRoZW1lIHBhY2thZ2UgZm9yIGNvbnNpc3RlbmN5IGZvciBkeW5hbWljYWxseSBzZXR0aW5nIENTUyBwcm9wZXJ0eSB2YWx1ZXMuXG4vLy9cbi8vLyBUaGlzIG1peGluIG1heSBvcHRpb25hbGx5IHRha2UgYSBmYWxsYmFjayB2YWx1ZS4gRm9yIGFkdmFuY2VkIGZlYXR1cmVzIHN1Y2hcbi8vLyBhcyBjdXN0b20gcHJvcGVydGllcyBvciBDU1MgZnVuY3Rpb25zIGxpa2UgbWluIGFuZCBtYXgsIGEgZmFsbGJhY2sgdmFsdWUgaXNcbi8vLyByZWNvbW1lbmRlZCB0byBzdXBwb3J0IG9sZGVyIGJyb3dzZXJzLlxuLy8vXG4vLy8gQHBhcmFtIHtTdHJpbmd9ICRwcm9wZXJ0eSAtIFRoZSBDU1MgcHJvcGVydHkgb2YgdGhlIGRlY2xhcmF0aW9uLlxuLy8vIEBwYXJhbSB7Kn0gJHZhbHVlIC0gVGhlIHZhbHVlIG9mIHRoZSBDU1MgZGVjbGFyYXRpb24uIFRoZSB2YWx1ZSBzaG91bGQgYmVcbi8vLyAgICAgcmVzb2x2ZWQgYnkgb3RoZXIgdGhlbWUgZnVuY3Rpb25zIGZpcnN0IChpLmUuIGN1c3RvbSBwcm9wZXJ0eSBNYXBzIGFuZFxuLy8vICAgICBNYXRlcmlhbCB0aGVtZSBrZXlzIGFyZSBub3Qgc3VwcG9ydGVkIGluIHRoaXMgbWl4aW4pLiBJZiB0aGUgdmFsdWUgaXNcbi8vLyAgICAgbnVsbCwgbm8gZGVjbGFyYXRpb25zIHdpbGwgYmUgZW1pdHRlZC5cbi8vLyBAcGFyYW0geyp9ICRmYWxsYmFjayAtIEFuIG9wdGlvbmFsIGZhbGxiYWNrIHZhbHVlIGZvciBvbGRlciBicm93c2Vycy4gSWZcbi8vLyAgICAgcHJvdmlkZWQsIGEgc2Vjb25kIHByb3BlcnR5L3ZhbHVlIGRlY2xhcmF0aW9uIHdpbGwgYmUgYWRkZWQgYmVmb3JlIHRoZVxuLy8vICAgICBtYWluIHByb3BlcnR5L3ZhbHVlIGRlY2xhcmF0aW9uLlxuLy8vIEBwYXJhbSB7TWFwfSAkZ3NzIC0gQW4gb3B0aW9uYWwgTWFwIG9mIEdTUyBhbm5vdGF0aW9ucyB0byBhZGQuXG4vLy8gQHBhcmFtIHtCb29sfSAkaW1wb3J0YW50IC0gSWYgdHJ1ZSwgYWRkIGAhaW1wb3J0YW50YCB0byB0aGUgZGVjbGFyYXRpb24uXG5AbWl4aW4gZGVjbGFyYXRpb24oXG4gICRwcm9wZXJ0eSxcbiAgJHZhbHVlLFxuICAkZmFsbGJhY2stdmFsdWU6IG51bGwsXG4gICRnc3M6ICgpLFxuICAkaW1wb3J0YW50OiBmYWxzZVxuKSB7XG4gIC8vIE5vcm1hbGx5IHNldHRpbmcgYSBudWxsIHZhbHVlIHRvIGEgcHJvcGVydHkgd2lsbCBub3QgZW1pdCBDU1MsIHNvIG1peGluc1xuICAvLyB3b3VsZG4ndCBuZWVkIHRvIGNoZWNrIHRoaXMuIEhvd2V2ZXIsIFNhc3Mgd2lsbCB0aHJvdyBhbiBlcnJvciBpZiB0aGVcbiAgLy8gaW50ZXJwb2xhdGVkIHByb3BlcnR5IGlzIGEgY3VzdG9tIHByb3BlcnR5LlxuICBAaWYgJHZhbHVlICE9IG51bGwge1xuICAgICRpbXBvcnRhbnQtcnVsZTogaWYoJGltcG9ydGFudCwgJyAhaW1wb3J0YW50JywgJycpO1xuXG4gICAgQGlmICRmYWxsYmFjay12YWx1ZSBhbmQgJGVuYWJsZS1mYWxsYmFjay1kZWNsYXJhdGlvbnMge1xuICAgICAgQGluY2x1ZGUgZ3NzLmFubm90YXRlKCRnc3MpO1xuICAgICAgI3skcHJvcGVydHl9OiAjeyRmYWxsYmFjay12YWx1ZX0gI3skaW1wb3J0YW50LXJ1bGV9O1xuXG4gICAgICAvLyBBZGQgQGFsdGVybmF0ZSB0byBhbm5vdGF0aW9ucy5cbiAgICAgICRnc3M6IG1hcC5tZXJnZShcbiAgICAgICAgJGdzcyxcbiAgICAgICAgKFxuICAgICAgICAgIGFsdGVybmF0ZTogdHJ1ZSxcbiAgICAgICAgKVxuICAgICAgKTtcbiAgICB9XG5cbiAgICBAaW5jbHVkZSBnc3MuYW5ub3RhdGUoJGdzcyk7XG4gICAgI3skcHJvcGVydHl9OiAjeyR2YWx1ZX0jeyRpbXBvcnRhbnQtcnVsZX07XG4gIH1cbn1cblxuLy8vIFVucGFja3Mgc2hvcnRoYW5kIHZhbHVlcyBmb3IgQ1NTIHByb3BlcnRpZXMgKGkuZS4gbGlzdHMgb2YgMS0zIHZhbHVlcykuXG4vLy8gSWYgYSBsaXN0IG9mIDQgdmFsdWVzIGlzIGdpdmVuLCBpdCBpcyByZXR1cm5lZCBhcy1pcy5cbi8vL1xuLy8vIEV4YW1wbGVzOlxuLy8vXG4vLy8gdW5wYWNrLXZhbHVlKDRweCkgPT4gNHB4IDRweCA0cHggNHB4XG4vLy8gdW5wYWNrLXZhbHVlKDRweCAycHgpID0+IDRweCAycHggNHB4IDJweFxuLy8vIHVucGFjay12YWx1ZSg0cHggMnB4IDJweCkgPT4gNHB4IDJweCAycHggMnB4XG4vLy8gdW5wYWNrLXZhbHVlKDRweCAycHggMCAycHgpID0+IDRweCAycHggMCAycHhcbi8vL1xuLy8vIEBwYXJhbSB7TnVtYmVyIHwgTWFwIHwgTGlzdH0gJHZhbHVlIC0gTGlzdCBvZiAxIHRvIDQgdmFsdWUgbnVtYmVycy5cbi8vLyBAcmV0dXJuIHtMaXN0fSBhIExpc3Qgb2YgNCB2YWx1ZSBudW1iZXJzLlxuQGZ1bmN0aW9uIHVucGFjay12YWx1ZSgkdmFsdWUpIHtcbiAgQGlmIG1ldGEudHlwZS1vZigkdmFsdWUpID09ICdtYXAnIG9yIGxpc3QubGVuZ3RoKCR2YWx1ZSkgPT0gMSB7XG4gICAgQHJldHVybiAkdmFsdWUgJHZhbHVlICR2YWx1ZSAkdmFsdWU7XG4gIH0gQGVsc2UgaWYgbGlzdC5sZW5ndGgoJHZhbHVlKSA9PSA0IHtcbiAgICBAcmV0dXJuICR2YWx1ZTtcbiAgfSBAZWxzZSBpZiBsaXN0Lmxlbmd0aCgkdmFsdWUpID09IDMge1xuICAgIEByZXR1cm4gbGlzdC5udGgoJHZhbHVlLCAxKSBsaXN0Lm50aCgkdmFsdWUsIDIpIGxpc3QubnRoKCR2YWx1ZSwgMylcbiAgICAgIGxpc3QubnRoKCR2YWx1ZSwgMik7XG4gIH0gQGVsc2UgaWYgbGlzdC5sZW5ndGgoJHZhbHVlKSA9PSAyIHtcbiAgICBAcmV0dXJuIGxpc3QubnRoKCR2YWx1ZSwgMSkgbGlzdC5udGgoJHZhbHVlLCAyKSBsaXN0Lm50aCgkdmFsdWUsIDEpXG4gICAgICBsaXN0Lm50aCgkdmFsdWUsIDIpO1xuICB9XG5cbiAgQGVycm9yIFwiSW52YWxpZCBDU1MgcHJvcGVydHkgdmFsdWU6ICcjeyR2YWx1ZX0nIGlzIG1vcmUgdGhhbiA0IHZhbHVlc1wiO1xufVxuIiwiQHVzZSAnc2FzczptYXAnO1xyXG5AdXNlICd2YXJpYWJsZXMnO1xyXG5cclxuQGZ1bmN0aW9uIGJwKCRuYW1lLCAkYnJlYWtwb2ludHM6IHZhcmlhYmxlcy4kYnJlYWtwb2ludHMpIHtcclxuICAkbWluOiBtYXAuZ2V0KCRicmVha3BvaW50cywgJG5hbWUpO1xyXG5cclxuICBAcmV0dXJuICRtaW47XHJcbn1cclxuXHJcbi8vIE1lZGlhIG9mIGF0IGxlYXN0IHRoZSBtaW5pbXVtIGJyZWFrcG9pbnQgd2lkdGguXHJcbkBtaXhpbiBicC1ndCgkbmFtZSwgJGJyZWFrcG9pbnRzOiB2YXJpYWJsZXMuJGJyZWFrcG9pbnRzKSB7XHJcbiAgJG1pbjogYnAoJG5hbWUsICRicmVha3BvaW50cyk7XHJcblxyXG4gIEBpZiAkbWluIHtcclxuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkbWluKSB7XHJcbiAgICAgIEBjb250ZW50O1xyXG4gICAgfVxyXG4gIH1cclxuICBAZWxzZSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcbi8vIE1lZGlhIG9mIGF0IG1vc3QgdGhlIG1heGltdW0gYnJlYWtwb2ludCB3aWR0aC5cclxuQG1peGluIGJwLWx0KCRuYW1lLCAkYnJlYWtwb2ludHM6IHZhcmlhYmxlcy4kYnJlYWtwb2ludHMpIHtcclxuICAkbWF4OiBicCgkbmFtZSwgJGJyZWFrcG9pbnRzKSAtIDFweDtcclxuXHJcbiAgQGlmICRtYXgge1xyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6ICRtYXgpIHtcclxuICAgICAgQGNvbnRlbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG4gIEBlbHNlIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG4iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdGhlbWUvYWRtaW4tbGF5b3V0L2FkbWluLWxheW91dC5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hcHAvdGhlbWUvc3R5bGUvX3ZhcmlhYmxlcy5zY3NzIiwid2VicGFjazovLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC90aGVtZS9fY3NzLnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvYXBwL3RoZW1lL3N0eWxlL19icmVha3BvaW50cy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtBOztFQUVFLFlBQUE7QUFKRjs7QUFPQTtFQUNFLGtCQUFBO0VBQ0EsYUNUTztBREtUOztBQU9BO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHdEQUFBO0VFNERFLHlIQUFBO0FGL0RKO0FBT0U7RUFDRSxlQUFBO0FBTEo7QUFPSTtFQUNFLGVBQUE7QUFMTjs7QUFZRTtFQUNFLG9DQUFBO0FBVEo7QUFZRTtFQUNFLHVCQUFBO0FBVko7O0FBaUJFOztFQUNFLFdDdkNzQjtBRDBCMUI7QUFlSTs7Ozs7Ozs7Ozs7Ozs7RUFPRSxVQUFBO0FBTk47QUFTSTs7RUFDRSxxQkFBQTtBQU5OO0FBU0k7O0VBQ0UsWUN6RFU7QURtRGhCO0FBUU07Ozs7Ozs7Ozs7Ozs7O0VBT0UsVUFBQTtBQUNSO0FBRU07O0VBQ0UsbUJBQUE7QUFDUjs7QUFPRTtFQUNFLDRCQUFBO0FBSko7QUFNSTtFQUNFLDZCQUFBO0VBQ0EsNEJBQUE7QUFKTjtBQVFFO0VBQ0UsNkJBQUE7RUFDQSw0QkFBQTtBQU5KOztBQVlFO0VBQ0UsTUFBQTtBQVRKO0FBWUU7RUFDRSxpQkFBQTtBQVZKO0FBWUk7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0FBVk47O0FBaUJFO0VBQ0UsZ0JBQUE7RUFDQSxNQUFBO0VBR0EsY0FBQTtBQWhCSjtBQW1CRTtFQUNFLFNDbkhxQjtBRGtHekI7QUdqRkk7RUhxR0U7SUFDRSxTQ3RIZ0I7RURxR3RCO0FBQ0Y7QUFzQkk7RUFDRSxvQkFBQTtFRTNERix5SEFBQTtBRndDSjs7QUE0QkU7RUFDRSw2QkFBQTtBQXpCSjtBQTJCSTtFQUNFLDhCQUFBO0VBQ0EsNEJBQUE7QUF6Qk47O0FBZ0NFOztFQUVFLHVCQUFBO0FBN0JKO0FBQ0EsbzllQUFvOWUiLCJzb3VyY2VzQ29udGVudCI6WyJAdXNlICdAYW5ndWxhci9tYXRlcmlhbCcgYXMgbWF0O1xyXG5AdXNlICcuLi9zdHlsZS92YXJpYWJsZXMnO1xyXG5AdXNlICcuLi9zdHlsZS90cmFuc2l0aW9ucyc7XHJcbkB1c2UgJy4uL3N0eWxlL2JyZWFrcG9pbnRzJztcclxuXHJcbi5tYXRlcm8tY29udGFpbmVyLXdyYXAsXHJcbi5tYXRlcm8tY29udGFpbmVyIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5tYXRlcm8tY29udGVudCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHBhZGRpbmc6IHZhcmlhYmxlcy4kZ3V0dGVyO1xyXG59XHJcblxyXG4ubWF0ZXJvLXNpZGVuYXYge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNpdGlvbnMuc3dpZnQtZWFzZS1vdXQod2lkdGgpOyAvLyBPbmx5IHNldCB3aWR0aCBwcm9wZXJ0eVxyXG5cclxuICBAaW5jbHVkZSBtYXQuZWxldmF0aW9uKDIpO1xyXG5cclxuICAmLm1hdC1kcmF3ZXItc2lkZSB7XHJcbiAgICBib3JkZXItd2lkdGg6IDA7XHJcblxyXG4gICAgW2Rpcj0ncnRsJ10gJiB7XHJcbiAgICAgIGJvcmRlci13aWR0aDogMDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vIExheW91dCBjb250cm9sXHJcbi5tYXRlcm8taGVhZGVyLWFib3ZlIHtcclxuICAubWF0ZXJvLWNvbnRhaW5lciB7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtICN7dmFyaWFibGVzLiR0b29sYmFyLWhlaWdodC1kZXNrdG9wfSkgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5tYXRlcm8tc2lkZWJhci1tYWluIHtcclxuICAgIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuLy8gTGF5b3V0IGNvbnRyb2xcclxuLm1hdGVyby1zaWRlbmF2LWNvbGxhcHNlZCxcclxuLm1hdGVyby1zaWRlbmF2LWNvbGxhcHNlZC1maXgge1xyXG4gIC5tYXRlcm8tc2lkZW5hdiB7XHJcbiAgICB3aWR0aDogdmFyaWFibGVzLiRzaWRlbmF2LWNvbGxhcHNlZC13aWR0aDtcclxuXHJcbiAgICAubWVudS1uYW1lLFxyXG4gICAgLm1lbnUtbGFiZWwsXHJcbiAgICAubWVudS1iYWRnZSxcclxuICAgIC5tZW51LWNhcmV0LFxyXG4gICAgLm1hdGVyby11c2VyLXBhbmVsLW5hbWUsXHJcbiAgICAubWF0ZXJvLXVzZXItcGFuZWwtZW1haWwsXHJcbiAgICAubWF0ZXJvLXVzZXItcGFuZWwtaWNvbnMge1xyXG4gICAgICBvcGFjaXR5OiAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5tYXRlcm8tdXNlci1wYW5lbC1hdmF0YXIge1xyXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKC41KTtcclxuICAgIH1cclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgd2lkdGg6IHZhcmlhYmxlcy4kc2lkZW5hdi13aWR0aDtcclxuXHJcbiAgICAgIC5tZW51LW5hbWUsXHJcbiAgICAgIC5tZW51LWxhYmVsLFxyXG4gICAgICAubWVudS1iYWRnZSxcclxuICAgICAgLm1lbnUtY2FyZXQsXHJcbiAgICAgIC5tYXRlcm8tdXNlci1wYW5lbC1uYW1lLFxyXG4gICAgICAubWF0ZXJvLXVzZXItcGFuZWwtZW1haWwsXHJcbiAgICAgIC5tYXRlcm8tdXNlci1wYW5lbC1pY29ucyB7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLm1hdGVyby11c2VyLXBhbmVsLWF2YXRhciB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLy8gTGF5b3V0IGNvbnRyb2xcclxuLm1hdGVyby1zaWRlbmF2LWNvbGxhcHNlZCB7XHJcbiAgLm1hdGVyby1jb250ZW50LXdyYXAge1xyXG4gICAgbWFyZ2luLWxlZnQ6IHZhcmlhYmxlcy4kc2lkZW5hdi1jb2xsYXBzZWQtd2lkdGggIWltcG9ydGFudDtcclxuXHJcbiAgICBbZGlyPSdydGwnXSAmIHtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiB2YXJpYWJsZXMuJHNpZGVuYXYtY29sbGFwc2VkLXdpZHRoICFpbXBvcnRhbnQ7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmW2Rpcj0ncnRsJ10gLm1hdGVyby1jb250ZW50LXdyYXAge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiB2YXJpYWJsZXMuJHNpZGVuYXYtY29sbGFwc2VkLXdpZHRoICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0byAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuLy8gTGF5b3V0IGNvbnRyb2xcclxuLm1hdGVyby1uYXZiYXItdG9wIHtcclxuICAubWF0ZXJvLXRvcG1lbnUge1xyXG4gICAgdG9wOiAwO1xyXG4gIH1cclxuXHJcbiAgLm1hdGVyby1icmFuZGluZyB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTZweDtcclxuXHJcbiAgICBbZGlyPSdydGwnXSAmIHtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xyXG4gICAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vIExheW91dCBjb250cm9sXHJcbi5tYXRlcm8taGVhZGVyLWZpeGVkIHtcclxuICAubWF0ZXJvLWhlYWRlciB7XHJcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gICAgdG9wOiAwO1xyXG4gICAgLy8gRml4IGhlYWRlcidzIHBvc2l0aW9uaW5nIHByb2JsZW0gb24gRmlyZWZveFxyXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL25nLW1hdGVyby9uZy1tYXRlcm8vaXNzdWVzLzUyMlxyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG5cclxuICAubWF0ZXJvLXRvcG1lbnUge1xyXG4gICAgdG9wOiB2YXJpYWJsZXMuJHRvcG1lbnUtc3RpY2t5LXBvc2l0aW9uLWRlc2t0b3A7XHJcblxyXG4gICAgQGluY2x1ZGUgYnJlYWtwb2ludHMuYnAtbHQoc21hbGwpIHtcclxuICAgICAgJiB7XHJcbiAgICAgICAgdG9wOiB2YXJpYWJsZXMuJHRvcG1lbnUtc3RpY2t5LXBvc2l0aW9uLW1vYmlsZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJi5tYXRlcm8tbmF2YmFyLXNpZGUge1xyXG4gICAgLm1hdGVyby10b29sYmFyIHtcclxuICAgICAgYm9yZGVyLWJvdHRvbTogdW5zZXQ7XHJcblxyXG4gICAgICBAaW5jbHVkZSBtYXQuZWxldmF0aW9uKDIpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLy8gRml4IHRoZSBpbml0IGNvbnRlbnQgd2lkdGhcclxuLm1hdGVyby1jb250ZW50LXdpZHRoLWZpeCB7XHJcbiAgLm1hdGVyby1jb250ZW50LXdyYXAge1xyXG4gICAgbWFyZ2luLWxlZnQ6IHZhcmlhYmxlcy4kc2lkZW5hdi13aWR0aCAhaW1wb3J0YW50O1xyXG5cclxuICAgIFtkaXI9J3J0bCddICYge1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IHZhcmlhYmxlcy4kc2lkZW5hdi13aWR0aCAhaW1wb3J0YW50O1xyXG4gICAgICBtYXJnaW4tbGVmdDogYXV0byAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLy8gQ29sb3JmdWxcclxuLm1hdGVyby1oZWFkZXItd2hpdGUge1xyXG4gIC5tYXRlcm8tdG9vbGJhcixcclxuICAubWF0ZXJvLXRvcG1lbnUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgfVxyXG59XHJcbiIsIkB1c2UgJ0Bhbmd1bGFyL21hdGVyaWFsJyBhcyBtYXQ7XHJcblxyXG4vLyBMYXlvdXRcclxuJGd1dHRlcjogMTZweCAhZGVmYXVsdDtcclxuXHJcbi8vIFNpZGVuYXZcclxuJHNpZGVuYXYtd2lkdGg6IDI0MHB4ICFkZWZhdWx0O1xyXG4kc2lkZW5hdi1jb2xsYXBzZWQtd2lkdGg6IDUwcHggIWRlZmF1bHQ7XHJcbiRzaWRlbmF2LXdpZHRoLW1vYmlsZTogMjgwcHggIWRlZmF1bHQ7XHJcblxyXG4vLyBUb29sYmFyXHJcbiR0b29sYmFyLWhlaWdodC1kZXNrdG9wOiA2NHB4ICFkZWZhdWx0O1xyXG4kdG9vbGJhci1oZWlnaHQtbW9iaWxlOiA1NnB4ICFkZWZhdWx0O1xyXG5cclxuLy8gVG9wbWVudVxyXG4kdG9wbWVudS1zdGlja3ktcG9zaXRpb24tZGVza3RvcDogJHRvb2xiYXItaGVpZ2h0LWRlc2t0b3AgIWRlZmF1bHQ7XHJcbiR0b3BtZW51LXN0aWNreS1wb3NpdGlvbi1tb2JpbGU6ICR0b29sYmFyLWhlaWdodC1tb2JpbGUgIWRlZmF1bHQ7XHJcblxyXG4vLyBUeXBvZ3JhcGh5XHJcbiRmb250LWZhbWlseS1zYW5zLXNlcmlmOiAnUm9ib3RvJywgJ0hlbHZldGljYSBOZXVlIExpZ2h0JywgJ0hlbHZldGljYSBOZXVlJywgSGVsdmV0aWNhLCBBcmlhbCxcclxuICAnTHVjaWRhIEdyYW5kZScsIHNhbnMtc2VyaWYgIWRlZmF1bHQ7XHJcbiRmb250LWZhbWlseS1tb25vc3BhY2U6ICdSb2JvdG8gTW9ubycsIG1vbm9zcGFjZSAhZGVmYXVsdDtcclxuJGZvbnQtZmFtaWx5LWJhc2U6ICRmb250LWZhbWlseS1zYW5zLXNlcmlmICFkZWZhdWx0O1xyXG5cclxuLy8gQnJlYWtwb2ludHNcclxuLy9cclxuLy8gRGVmaW5lIHRoZSBtaW5pbXVtIGRpbWVuc2lvbnMgYXQgd2hpY2ggeW91ciBsYXlvdXQgd2lsbCBjaGFuZ2UsXHJcbi8vIGFkYXB0aW5nIHRvIGRpZmZlcmVudCBzY3JlZW4gc2l6ZXMsIGZvciB1c2UgaW4gbWVkaWEgcXVlcmllcy5cclxuJGJyZWFrcG9pbnRzOiAoXHJcbiAgeHNtYWxsOiAwLFxyXG4gIHNtYWxsOiAgNjAwcHgsXHJcbiAgbWVkaXVtOiA5NjBweCxcclxuICBsYXJnZTogIDEyODBweCxcclxuICB4bGFyZ2U6IDE5MjBweFxyXG4pICFkZWZhdWx0O1xyXG5cclxuLy8gTWF0ZXJpYWwgY29sb3JzXHJcbiRtYXQtY29sb3JzOiAoXHJcbiAgcmVkOiBtYXQuJHJlZC1wYWxldHRlLFxyXG4gIHBpbms6IG1hdC4kcGluay1wYWxldHRlLFxyXG4gIHB1cnBsZTogbWF0LiRwdXJwbGUtcGFsZXR0ZSxcclxuICBkZWVwLXB1cnBsZTogbWF0LiRkZWVwLXB1cnBsZS1wYWxldHRlLFxyXG4gIGluZGlnbzogbWF0LiRpbmRpZ28tcGFsZXR0ZSxcclxuICBibHVlOiBtYXQuJGJsdWUtcGFsZXR0ZSxcclxuICBsaWdodC1ibHVlOiBtYXQuJGxpZ2h0LWJsdWUtcGFsZXR0ZSxcclxuICBjeWFuOiBtYXQuJGN5YW4tcGFsZXR0ZSxcclxuICB0ZWFsOiBtYXQuJHRlYWwtcGFsZXR0ZSxcclxuICBncmVlbjogbWF0LiRncmVlbi1wYWxldHRlLFxyXG4gIGxpZ2h0LWdyZWVuOiBtYXQuJGxpZ2h0LWdyZWVuLXBhbGV0dGUsXHJcbiAgbGltZTogbWF0LiRsaW1lLXBhbGV0dGUsXHJcbiAgeWVsbG93OiBtYXQuJHllbGxvdy1wYWxldHRlLFxyXG4gIGFtYmVyOiBtYXQuJGFtYmVyLXBhbGV0dGUsXHJcbiAgb3JhbmdlOiBtYXQuJG9yYW5nZS1wYWxldHRlLFxyXG4gIGRlZXAtb3JhbmdlOiBtYXQuJGRlZXAtb3JhbmdlLXBhbGV0dGUsXHJcbiAgYnJvd246IG1hdC4kYnJvd24tcGFsZXR0ZSxcclxuICBncmF5OiBtYXQuJGdyYXktcGFsZXR0ZSxcclxuICBibHVlLWdyYXk6IG1hdC4kYmx1ZS1ncmF5LXBhbGV0dGUsXHJcbiAgd2hpdGU6IHdoaXRlLFxyXG4gIGJsYWNrOiBibGFjayxcclxuICBsaWdodDogd2hpdGUsXHJcbiAgZGFyazogcmdiYShibGFjaywgLjg3KSxcclxuKSAhZGVmYXVsdDtcclxuXHJcbi8vIFRoZSBtYXRlcmlhbCBkZWZhdWx0IGFuaW1hdGlvbiBjdXJ2ZXNcclxuJHN3aWZ0LWVhc2Utb3V0LWR1cmF0aW9uOiA0MDBtcyAhZGVmYXVsdDtcclxuJHN3aWZ0LWVhc2Utb3V0LXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKC4yNSwgLjgsIC4yNSwgMSkgIWRlZmF1bHQ7XHJcbiIsIi8vXG4vLyBDb3B5cmlnaHQgMjAyMCBHb29nbGUgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG4vL1xuXG5AdXNlICdzYXNzOmxpc3QnO1xuQHVzZSAnc2FzczptYXAnO1xuQHVzZSAnc2FzczptZXRhJztcbkB1c2UgJy4vZ3NzJztcblxuLy8vIFdoZW4gdHJ1ZSwgYWRkIGFuIGFkZGl0aW9uYWwgcHJvcGVydHkvdmFsdWUgZGVjbGFyYXRpb24gYmVmb3JlIGRlY2xhcmF0aW9uc1xuLy8vIHRoYXQgdXNlIGFkdmFuY2VkIGZlYXR1cmVzIHN1Y2ggYXMgY3VzdG9tIHByb3BlcnRpZXMgb3IgQ1NTIGZ1bmN0aW9ucy4gVGhpc1xuLy8vIGFkZHMgZmFsbGJhY2sgc3VwcG9ydCBmb3Igb2xkZXIgYnJvd3NlcnMgc3VjaCBhcyBJRTExIHRoYXQgZG8gbm90IHN1cHBvcnRcbi8vLyB0aGVzZSBmZWF0dXJlcyBhdCB0aGUgY29zdCBvZiBhZGRpdGlvbmFsIENTUy4gU2V0IHRoaXMgdmFyaWFibGUgdG8gZmFsc2UgdG9cbi8vLyBkaXNhYmxlIGdlbmVyYXRpbmcgZmFsbGJhY2sgZGVjbGFyYXRpb25zLlxuJGVuYWJsZS1mYWxsYmFjay1kZWNsYXJhdGlvbnM6IHRydWUgIWRlZmF1bHQ7XG5cbi8vLyBXcml0ZXMgYSBDU1MgcHJvcGVydHkvdmFsdWUgZGVjbGFyYXRpb24uIFRoaXMgbWl4aW4gaXMgdXNlZCB0aHJvdWdob3V0IHRoZVxuLy8vIHRoZW1lIHBhY2thZ2UgZm9yIGNvbnNpc3RlbmN5IGZvciBkeW5hbWljYWxseSBzZXR0aW5nIENTUyBwcm9wZXJ0eSB2YWx1ZXMuXG4vLy9cbi8vLyBUaGlzIG1peGluIG1heSBvcHRpb25hbGx5IHRha2UgYSBmYWxsYmFjayB2YWx1ZS4gRm9yIGFkdmFuY2VkIGZlYXR1cmVzIHN1Y2hcbi8vLyBhcyBjdXN0b20gcHJvcGVydGllcyBvciBDU1MgZnVuY3Rpb25zIGxpa2UgbWluIGFuZCBtYXgsIGEgZmFsbGJhY2sgdmFsdWUgaXNcbi8vLyByZWNvbW1lbmRlZCB0byBzdXBwb3J0IG9sZGVyIGJyb3dzZXJzLlxuLy8vXG4vLy8gQHBhcmFtIHtTdHJpbmd9ICRwcm9wZXJ0eSAtIFRoZSBDU1MgcHJvcGVydHkgb2YgdGhlIGRlY2xhcmF0aW9uLlxuLy8vIEBwYXJhbSB7Kn0gJHZhbHVlIC0gVGhlIHZhbHVlIG9mIHRoZSBDU1MgZGVjbGFyYXRpb24uIFRoZSB2YWx1ZSBzaG91bGQgYmVcbi8vLyAgICAgcmVzb2x2ZWQgYnkgb3RoZXIgdGhlbWUgZnVuY3Rpb25zIGZpcnN0IChpLmUuIGN1c3RvbSBwcm9wZXJ0eSBNYXBzIGFuZFxuLy8vICAgICBNYXRlcmlhbCB0aGVtZSBrZXlzIGFyZSBub3Qgc3VwcG9ydGVkIGluIHRoaXMgbWl4aW4pLiBJZiB0aGUgdmFsdWUgaXNcbi8vLyAgICAgbnVsbCwgbm8gZGVjbGFyYXRpb25zIHdpbGwgYmUgZW1pdHRlZC5cbi8vLyBAcGFyYW0geyp9ICRmYWxsYmFjayAtIEFuIG9wdGlvbmFsIGZhbGxiYWNrIHZhbHVlIGZvciBvbGRlciBicm93c2Vycy4gSWZcbi8vLyAgICAgcHJvdmlkZWQsIGEgc2Vjb25kIHByb3BlcnR5L3ZhbHVlIGRlY2xhcmF0aW9uIHdpbGwgYmUgYWRkZWQgYmVmb3JlIHRoZVxuLy8vICAgICBtYWluIHByb3BlcnR5L3ZhbHVlIGRlY2xhcmF0aW9uLlxuLy8vIEBwYXJhbSB7TWFwfSAkZ3NzIC0gQW4gb3B0aW9uYWwgTWFwIG9mIEdTUyBhbm5vdGF0aW9ucyB0byBhZGQuXG4vLy8gQHBhcmFtIHtCb29sfSAkaW1wb3J0YW50IC0gSWYgdHJ1ZSwgYWRkIGAhaW1wb3J0YW50YCB0byB0aGUgZGVjbGFyYXRpb24uXG5AbWl4aW4gZGVjbGFyYXRpb24oXG4gICRwcm9wZXJ0eSxcbiAgJHZhbHVlLFxuICAkZmFsbGJhY2stdmFsdWU6IG51bGwsXG4gICRnc3M6ICgpLFxuICAkaW1wb3J0YW50OiBmYWxzZVxuKSB7XG4gIC8vIE5vcm1hbGx5IHNldHRpbmcgYSBudWxsIHZhbHVlIHRvIGEgcHJvcGVydHkgd2lsbCBub3QgZW1pdCBDU1MsIHNvIG1peGluc1xuICAvLyB3b3VsZG4ndCBuZWVkIHRvIGNoZWNrIHRoaXMuIEhvd2V2ZXIsIFNhc3Mgd2lsbCB0aHJvdyBhbiBlcnJvciBpZiB0aGVcbiAgLy8gaW50ZXJwb2xhdGVkIHByb3BlcnR5IGlzIGEgY3VzdG9tIHByb3BlcnR5LlxuICBAaWYgJHZhbHVlICE9IG51bGwge1xuICAgICRpbXBvcnRhbnQtcnVsZTogaWYoJGltcG9ydGFudCwgJyAhaW1wb3J0YW50JywgJycpO1xuXG4gICAgQGlmICRmYWxsYmFjay12YWx1ZSBhbmQgJGVuYWJsZS1mYWxsYmFjay1kZWNsYXJhdGlvbnMge1xuICAgICAgQGluY2x1ZGUgZ3NzLmFubm90YXRlKCRnc3MpO1xuICAgICAgI3skcHJvcGVydHl9OiAjeyRmYWxsYmFjay12YWx1ZX0gI3skaW1wb3J0YW50LXJ1bGV9O1xuXG4gICAgICAvLyBBZGQgQGFsdGVybmF0ZSB0byBhbm5vdGF0aW9ucy5cbiAgICAgICRnc3M6IG1hcC5tZXJnZShcbiAgICAgICAgJGdzcyxcbiAgICAgICAgKFxuICAgICAgICAgIGFsdGVybmF0ZTogdHJ1ZSxcbiAgICAgICAgKVxuICAgICAgKTtcbiAgICB9XG5cbiAgICBAaW5jbHVkZSBnc3MuYW5ub3RhdGUoJGdzcyk7XG4gICAgI3skcHJvcGVydHl9OiAjeyR2YWx1ZX0jeyRpbXBvcnRhbnQtcnVsZX07XG4gIH1cbn1cblxuLy8vIFVucGFja3Mgc2hvcnRoYW5kIHZhbHVlcyBmb3IgQ1NTIHByb3BlcnRpZXMgKGkuZS4gbGlzdHMgb2YgMS0zIHZhbHVlcykuXG4vLy8gSWYgYSBsaXN0IG9mIDQgdmFsdWVzIGlzIGdpdmVuLCBpdCBpcyByZXR1cm5lZCBhcy1pcy5cbi8vL1xuLy8vIEV4YW1wbGVzOlxuLy8vXG4vLy8gdW5wYWNrLXZhbHVlKDRweCkgPT4gNHB4IDRweCA0cHggNHB4XG4vLy8gdW5wYWNrLXZhbHVlKDRweCAycHgpID0+IDRweCAycHggNHB4IDJweFxuLy8vIHVucGFjay12YWx1ZSg0cHggMnB4IDJweCkgPT4gNHB4IDJweCAycHggMnB4XG4vLy8gdW5wYWNrLXZhbHVlKDRweCAycHggMCAycHgpID0+IDRweCAycHggMCAycHhcbi8vL1xuLy8vIEBwYXJhbSB7TnVtYmVyIHwgTWFwIHwgTGlzdH0gJHZhbHVlIC0gTGlzdCBvZiAxIHRvIDQgdmFsdWUgbnVtYmVycy5cbi8vLyBAcmV0dXJuIHtMaXN0fSBhIExpc3Qgb2YgNCB2YWx1ZSBudW1iZXJzLlxuQGZ1bmN0aW9uIHVucGFjay12YWx1ZSgkdmFsdWUpIHtcbiAgQGlmIG1ldGEudHlwZS1vZigkdmFsdWUpID09ICdtYXAnIG9yIGxpc3QubGVuZ3RoKCR2YWx1ZSkgPT0gMSB7XG4gICAgQHJldHVybiAkdmFsdWUgJHZhbHVlICR2YWx1ZSAkdmFsdWU7XG4gIH0gQGVsc2UgaWYgbGlzdC5sZW5ndGgoJHZhbHVlKSA9PSA0IHtcbiAgICBAcmV0dXJuICR2YWx1ZTtcbiAgfSBAZWxzZSBpZiBsaXN0Lmxlbmd0aCgkdmFsdWUpID09IDMge1xuICAgIEByZXR1cm4gbGlzdC5udGgoJHZhbHVlLCAxKSBsaXN0Lm50aCgkdmFsdWUsIDIpIGxpc3QubnRoKCR2YWx1ZSwgMylcbiAgICAgIGxpc3QubnRoKCR2YWx1ZSwgMik7XG4gIH0gQGVsc2UgaWYgbGlzdC5sZW5ndGgoJHZhbHVlKSA9PSAyIHtcbiAgICBAcmV0dXJuIGxpc3QubnRoKCR2YWx1ZSwgMSkgbGlzdC5udGgoJHZhbHVlLCAyKSBsaXN0Lm50aCgkdmFsdWUsIDEpXG4gICAgICBsaXN0Lm50aCgkdmFsdWUsIDIpO1xuICB9XG5cbiAgQGVycm9yIFwiSW52YWxpZCBDU1MgcHJvcGVydHkgdmFsdWU6ICcjeyR2YWx1ZX0nIGlzIG1vcmUgdGhhbiA0IHZhbHVlc1wiO1xufVxuIiwiQHVzZSAnc2FzczptYXAnO1xyXG5AdXNlICd2YXJpYWJsZXMnO1xyXG5cclxuQGZ1bmN0aW9uIGJwKCRuYW1lLCAkYnJlYWtwb2ludHM6IHZhcmlhYmxlcy4kYnJlYWtwb2ludHMpIHtcclxuICAkbWluOiBtYXAuZ2V0KCRicmVha3BvaW50cywgJG5hbWUpO1xyXG5cclxuICBAcmV0dXJuICRtaW47XHJcbn1cclxuXHJcbi8vIE1lZGlhIG9mIGF0IGxlYXN0IHRoZSBtaW5pbXVtIGJyZWFrcG9pbnQgd2lkdGguXHJcbkBtaXhpbiBicC1ndCgkbmFtZSwgJGJyZWFrcG9pbnRzOiB2YXJpYWJsZXMuJGJyZWFrcG9pbnRzKSB7XHJcbiAgJG1pbjogYnAoJG5hbWUsICRicmVha3BvaW50cyk7XHJcblxyXG4gIEBpZiAkbWluIHtcclxuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkbWluKSB7XHJcbiAgICAgIEBjb250ZW50O1xyXG4gICAgfVxyXG4gIH1cclxuICBAZWxzZSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcbi8vIE1lZGlhIG9mIGF0IG1vc3QgdGhlIG1heGltdW0gYnJlYWtwb2ludCB3aWR0aC5cclxuQG1peGluIGJwLWx0KCRuYW1lLCAkYnJlYWtwb2ludHM6IHZhcmlhYmxlcy4kYnJlYWtwb2ludHMpIHtcclxuICAkbWF4OiBicCgkbmFtZSwgJGJyZWFrcG9pbnRzKSAtIDFweDtcclxuXHJcbiAgQGlmICRtYXgge1xyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6ICRtYXgpIHtcclxuICAgICAgQGNvbnRlbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG4gIEBlbHNlIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"],
  encapsulation: 2
});

/***/ }),

/***/ 8095:
/*!************************************************************!*\
  !*** ./src/app/theme/auth-layout/auth-layout.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthLayoutComponent: () => (/* binding */ AuthLayoutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 7947);


class AuthLayoutComponent {}
AuthLayoutComponent.ɵfac = function AuthLayoutComponent_Factory(t) {
  return new (t || AuthLayoutComponent)();
};
AuthLayoutComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: AuthLayoutComponent,
  selectors: [["app-auth-layout"]],
  decls: 2,
  vars: 0,
  consts: [[1, "matero-auth-container"]],
  template: function AuthLayoutComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet],
  styles: [".matero-auth-container {\n  position: relative;\n  display: flex;\n  justify-content: center;\n  min-height: 100%;\n  padding: 16px;\n  background-color: #212121;\n  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.05) 25%, transparent 25%, transparent 75%, rgba(255, 255, 255, 0.05) 75%, rgba(255, 255, 255, 0.05)), linear-gradient(-45deg, rgba(255, 255, 255, 0.05) 25%, transparent 25%, transparent 75%, rgba(255, 255, 255, 0.05) 75%, rgba(255, 255, 255, 0.05));\n  background-size: 60px 60px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dGgtbGF5b3V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLHVUQUNFO0VBZ0JGLDBCQUFBO0FBZkYiLCJmaWxlIjoiYXV0aC1sYXlvdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0ZXJvLWF1dGgtY29udGFpbmVyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gIHBhZGRpbmc6IDE2cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIxMjEyMTtcclxuICBiYWNrZ3JvdW5kLWltYWdlOlxyXG4gICAgbGluZWFyLWdyYWRpZW50KFxyXG4gICAgICA0NWRlZyxcclxuICAgICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAuMDUpIDI1JSxcclxuICAgICAgdHJhbnNwYXJlbnQgMjUlLFxyXG4gICAgICB0cmFuc3BhcmVudCA3NSUsXHJcbiAgICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgLjA1KSA3NSUsXHJcbiAgICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgLjA1KVxyXG4gICAgKSxcclxuICAgIGxpbmVhci1ncmFkaWVudChcclxuICAgICAgLTQ1ZGVnLFxyXG4gICAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIC4wNSkgMjUlLFxyXG4gICAgICB0cmFuc3BhcmVudCAyNSUsXHJcbiAgICAgIHRyYW5zcGFyZW50IDc1JSxcclxuICAgICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAuMDUpIDc1JSxcclxuICAgICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAuMDUpXHJcbiAgICApO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogNjBweCA2MHB4O1xyXG59XHJcbiJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdGhlbWUvYXV0aC1sYXlvdXQvYXV0aC1sYXlvdXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsdVRBQ0U7RUFnQkYsMEJBQUE7QUFmRjtBQUNBLHd1Q0FBd3VDIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdGVyby1hdXRoLWNvbnRhaW5lciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgbWluLWhlaWdodDogMTAwJTtcclxuICBwYWRkaW5nOiAxNnB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTIxMjE7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTpcclxuICAgIGxpbmVhci1ncmFkaWVudChcclxuICAgICAgNDVkZWcsXHJcbiAgICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgLjA1KSAyNSUsXHJcbiAgICAgIHRyYW5zcGFyZW50IDI1JSxcclxuICAgICAgdHJhbnNwYXJlbnQgNzUlLFxyXG4gICAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIC4wNSkgNzUlLFxyXG4gICAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIC4wNSlcclxuICAgICksXHJcbiAgICBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICAgIC00NWRlZyxcclxuICAgICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAuMDUpIDI1JSxcclxuICAgICAgdHJhbnNwYXJlbnQgMjUlLFxyXG4gICAgICB0cmFuc3BhcmVudCA3NSUsXHJcbiAgICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgLjA1KSA3NSUsXHJcbiAgICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgLjA1KVxyXG4gICAgKTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IDYwcHggNjBweDtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"],
  encapsulation: 2
});

/***/ }),

/***/ 6167:
/*!**************************************************!*\
  !*** ./src/app/theme/header/header.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HeaderComponent: () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var screenfull__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! screenfull */ 6651);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ 895);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ 6515);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/toolbar */ 2484);
/* harmony import */ var _widgets_branding_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../widgets/branding.component */ 194);
/* harmony import */ var _widgets_notification_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../widgets/notification.component */ 8027);
/* harmony import */ var _widgets_translate_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../widgets/translate.component */ 6857);
/* harmony import */ var _widgets_user_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../widgets/user.component */ 9971);











function HeaderComponent_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function HeaderComponent_button_1_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r3);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r2.toggleSidenav.emit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "menu");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function HeaderComponent_app_branding_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "app-branding");
  }
}
class HeaderComponent {
  constructor() {
    this.class = 'matero-header';
    this.showToggle = true;
    this.showBranding = false;
    this.toggleSidenav = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
    this.toggleSidenavNotice = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
  }
  toggleFullscreen() {
    if (screenfull__WEBPACK_IMPORTED_MODULE_0__["default"].isEnabled) {
      screenfull__WEBPACK_IMPORTED_MODULE_0__["default"].toggle();
    }
  }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
  return new (t || HeaderComponent)();
};
HeaderComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: HeaderComponent,
  selectors: [["app-header"]],
  hostVars: 2,
  hostBindings: function HeaderComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMap"](ctx.class);
    }
  },
  inputs: {
    showToggle: "showToggle",
    showBranding: "showBranding"
  },
  outputs: {
    toggleSidenav: "toggleSidenav",
    toggleSidenavNotice: "toggleSidenavNotice"
  },
  decls: 16,
  vars: 2,
  consts: [[1, "matero-toolbar"], ["mat-icon-button", "", 3, "click", 4, "ngIf"], [4, "ngIf"], [1, "flex-fill"], ["mat-icon-button", ""], ["mat-icon-button", "", 3, "click"]],
  template: function HeaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-toolbar", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, HeaderComponent_button_1_Template, 3, 0, "button", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, HeaderComponent_app_branding_2_Template, 1, 0, "app-branding", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "span", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "button", 4)(5, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "search");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_7_listener() {
        return ctx.toggleFullscreen();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "fullscreen");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](10, "app-notification")(11, "app-translate")(12, "app-user");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_13_listener() {
        return ctx.toggleSidenavNotice.emit();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15, "list");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.showToggle);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.showBranding);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatIconButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIcon, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__.MatToolbar, _widgets_branding_component__WEBPACK_IMPORTED_MODULE_1__.BrandingComponent, _widgets_notification_component__WEBPACK_IMPORTED_MODULE_2__.NotificationComponent, _widgets_translate_component__WEBPACK_IMPORTED_MODULE_3__.TranslateComponent, _widgets_user_component__WEBPACK_IMPORTED_MODULE_4__.UserComponent],
  styles: [".matero-header {\n  position: relative;\n  z-index: 200;\n}\n.matero-header .matero-toolbar {\n  padding: 0 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtBQUNGO0FBQ0U7RUFDRSxjQUFBO0FBQ0oiLCJmaWxlIjoiaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdGVyby1oZWFkZXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB6LWluZGV4OiAyMDA7XHJcblxyXG4gIC5tYXRlcm8tdG9vbGJhciB7XHJcbiAgICBwYWRkaW5nOiAwIDhweDtcclxuICB9XHJcbn1cclxuIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdGhlbWUvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtBQUNGO0FBQ0U7RUFDRSxjQUFBO0FBQ0o7QUFDQSx3Y0FBd2MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0ZXJvLWhlYWRlciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHotaW5kZXg6IDIwMDtcclxuXHJcbiAgLm1hdGVyby10b29sYmFyIHtcclxuICAgIHBhZGRpbmc6IDAgOHB4O1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"],
  encapsulation: 2,
  changeDetection: 0
});

/***/ }),

/***/ 9235:
/*!******************************************************************!*\
  !*** ./src/app/theme/sidebar-notice/sidebar-notice.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SidebarNoticeComponent: () => (/* binding */ SidebarNoticeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/tabs */ 989);


class SidebarNoticeComponent {}
SidebarNoticeComponent.ɵfac = function SidebarNoticeComponent_Factory(t) {
  return new (t || SidebarNoticeComponent)();
};
SidebarNoticeComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: SidebarNoticeComponent,
  selectors: [["app-sidebar-notice"]],
  decls: 5,
  vars: 0,
  consts: [["label", "Today"], ["label", "Notifications"]],
  template: function SidebarNoticeComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-tab-group")(1, "mat-tab", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Content 1 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-tab", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Content 2 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    }
  },
  dependencies: [_angular_material_tabs__WEBPACK_IMPORTED_MODULE_1__.MatTab, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_1__.MatTabGroup],
  styles: ["[_nghost-%COMP%]     .mat-mdc-tab {\n  min-width: 160px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZGViYXItbm90aWNlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsZ0JBQUE7QUFBSiIsImZpbGUiOiJzaWRlYmFyLW5vdGljZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IDo6bmctZGVlcCB7XHJcbiAgLm1hdC1tZGMtdGFiIHtcclxuICAgIG1pbi13aWR0aDogMTYwcHg7XHJcbiAgfVxyXG59XHJcbiJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdGhlbWUvc2lkZWJhci1ub3RpY2Uvc2lkZWJhci1ub3RpY2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxnQkFBQTtBQUFKO0FBQ0Esd1hBQXdYIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3QgOjpuZy1kZWVwIHtcclxuICAubWF0LW1kYy10YWIge1xyXG4gICAgbWluLXdpZHRoOiAxNjBweDtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 7428:
/*!****************************************************!*\
  !*** ./src/app/theme/sidebar/sidebar.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SidebarComponent: () => (/* binding */ SidebarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/slide-toggle */ 9293);
/* harmony import */ var _user_panel_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-panel.component */ 1170);
/* harmony import */ var _sidemenu_sidemenu_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sidemenu/sidemenu.component */ 8015);
/* harmony import */ var _widgets_branding_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../widgets/branding.component */ 194);







function SidebarComponent_div_0_mat_slide_toggle_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-slide-toggle", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function SidebarComponent_div_0_mat_slide_toggle_2_Template_mat_slide_toggle_change_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r3.toggleCollapsed.emit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("checked", ctx_r2.toggleChecked);
  }
}
function SidebarComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "app-branding");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, SidebarComponent_div_0_mat_slide_toggle_2_Template, 1, 1, "mat-slide-toggle", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.showToggle);
  }
}
function SidebarComponent_app_user_panel_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-user-panel");
  }
}
class SidebarComponent {
  constructor() {
    this.showToggle = true;
    this.showUser = true;
    this.showHeader = true;
    this.toggleChecked = false;
    this.toggleCollapsed = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
  }
}
SidebarComponent.ɵfac = function SidebarComponent_Factory(t) {
  return new (t || SidebarComponent)();
};
SidebarComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: SidebarComponent,
  selectors: [["app-sidebar"]],
  inputs: {
    showToggle: "showToggle",
    showUser: "showUser",
    showHeader: "showHeader",
    toggleChecked: "toggleChecked"
  },
  outputs: {
    toggleCollapsed: "toggleCollapsed"
  },
  decls: 4,
  vars: 3,
  consts: [["class", "matero-sidebar-header", 4, "ngIf"], [1, "matero-sidebar-main", "scrollbar-none"], [4, "ngIf"], [3, "ripple"], [1, "matero-sidebar-header"], [3, "checked", "change", 4, "ngIf"], [3, "checked", "change"]],
  template: function SidebarComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, SidebarComponent_div_0_Template, 3, 1, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, SidebarComponent_app_user_panel_2_Template, 1, 0, "app-user-panel", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "app-sidemenu", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showHeader);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showUser);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ripple", ctx.showToggle);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_5__.MatSlideToggle, _user_panel_component__WEBPACK_IMPORTED_MODULE_0__.UserPanelComponent, _sidemenu_sidemenu_component__WEBPACK_IMPORTED_MODULE_1__.SidemenuComponent, _widgets_branding_component__WEBPACK_IMPORTED_MODULE_2__.BrandingComponent],
  styles: [".matero-sidebar-header {\n  position: relative;\n  top: 0;\n  left: 0;\n  z-index: 1;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: 64px;\n  padding: 0 8px;\n  overflow: hidden;\n}\n@media (max-width: 599px) {\n  .matero-sidebar-header {\n    height: 56px;\n  }\n}\n.matero-header-white .matero-sidebar-header {\n  background-color: white;\n}\n\n.matero-sidebar-main {\n  height: calc(100% - 64px);\n  overflow: auto;\n}\n@media (max-width: 599px) {\n  .matero-sidebar-main {\n    height: calc(100% - 56px);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZGViYXIuY29tcG9uZW50LnNjc3MiLCIuLlxcc3R5bGVcXF9icmVha3BvaW50cy5zY3NzIiwiLi5cXHN0eWxlXFxfdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQUZGO0FDaUJJO0VEWkE7SUFDRSxZRUxrQjtFRkd0QjtBQUNGO0FBTUU7RUFDRSx1QkFBQTtBQUpKOztBQVFBO0VBQ0UseUJBQUE7RUFDQSxjQUFBO0FBTEY7QUNJSTtFRElBO0lBQ0UseUJBQUE7RUFMSjtBQUNGIiwiZmlsZSI6InNpZGViYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAdXNlICcuLi9zdHlsZS92YXJpYWJsZXMnO1xyXG5AdXNlICcuLi9zdHlsZS9icmVha3BvaW50cyc7XHJcblxyXG4ubWF0ZXJvLXNpZGViYXItaGVhZGVyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgei1pbmRleDogMTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGhlaWdodDogdmFyaWFibGVzLiR0b29sYmFyLWhlaWdodC1kZXNrdG9wO1xyXG4gIHBhZGRpbmc6IDAgOHB4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcblxyXG4gIEBpbmNsdWRlIGJyZWFrcG9pbnRzLmJwLWx0KHNtYWxsKSB7XHJcbiAgICAmIHtcclxuICAgICAgaGVpZ2h0OiB2YXJpYWJsZXMuJHRvb2xiYXItaGVpZ2h0LW1vYmlsZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIENvbG9yZnVsXHJcbiAgLm1hdGVyby1oZWFkZXItd2hpdGUgJiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICB9XHJcbn1cclxuXHJcbi5tYXRlcm8tc2lkZWJhci1tYWluIHtcclxuICBoZWlnaHQ6IGNhbGMoMTAwJSAtICN7dmFyaWFibGVzLiR0b29sYmFyLWhlaWdodC1kZXNrdG9wfSk7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcblxyXG4gIEBpbmNsdWRlIGJyZWFrcG9pbnRzLmJwLWx0KHNtYWxsKSB7XHJcbiAgICAmIHtcclxuICAgICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAje3ZhcmlhYmxlcy4kdG9vbGJhci1oZWlnaHQtbW9iaWxlfSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIkB1c2UgJ3Nhc3M6bWFwJztcclxuQHVzZSAndmFyaWFibGVzJztcclxuXHJcbkBmdW5jdGlvbiBicCgkbmFtZSwgJGJyZWFrcG9pbnRzOiB2YXJpYWJsZXMuJGJyZWFrcG9pbnRzKSB7XHJcbiAgJG1pbjogbWFwLmdldCgkYnJlYWtwb2ludHMsICRuYW1lKTtcclxuXHJcbiAgQHJldHVybiAkbWluO1xyXG59XHJcblxyXG4vLyBNZWRpYSBvZiBhdCBsZWFzdCB0aGUgbWluaW11bSBicmVha3BvaW50IHdpZHRoLlxyXG5AbWl4aW4gYnAtZ3QoJG5hbWUsICRicmVha3BvaW50czogdmFyaWFibGVzLiRicmVha3BvaW50cykge1xyXG4gICRtaW46IGJwKCRuYW1lLCAkYnJlYWtwb2ludHMpO1xyXG5cclxuICBAaWYgJG1pbiB7XHJcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogJG1pbikge1xyXG4gICAgICBAY29udGVudDtcclxuICAgIH1cclxuICB9XHJcbiAgQGVsc2Uge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBNZWRpYSBvZiBhdCBtb3N0IHRoZSBtYXhpbXVtIGJyZWFrcG9pbnQgd2lkdGguXHJcbkBtaXhpbiBicC1sdCgkbmFtZSwgJGJyZWFrcG9pbnRzOiB2YXJpYWJsZXMuJGJyZWFrcG9pbnRzKSB7XHJcbiAgJG1heDogYnAoJG5hbWUsICRicmVha3BvaW50cykgLSAxcHg7XHJcblxyXG4gIEBpZiAkbWF4IHtcclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkbWF4KSB7XHJcbiAgICAgIEBjb250ZW50O1xyXG4gICAgfVxyXG4gIH1cclxuICBAZWxzZSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuIiwiQHVzZSAnQGFuZ3VsYXIvbWF0ZXJpYWwnIGFzIG1hdDtcclxuXHJcbi8vIExheW91dFxyXG4kZ3V0dGVyOiAxNnB4ICFkZWZhdWx0O1xyXG5cclxuLy8gU2lkZW5hdlxyXG4kc2lkZW5hdi13aWR0aDogMjQwcHggIWRlZmF1bHQ7XHJcbiRzaWRlbmF2LWNvbGxhcHNlZC13aWR0aDogNTBweCAhZGVmYXVsdDtcclxuJHNpZGVuYXYtd2lkdGgtbW9iaWxlOiAyODBweCAhZGVmYXVsdDtcclxuXHJcbi8vIFRvb2xiYXJcclxuJHRvb2xiYXItaGVpZ2h0LWRlc2t0b3A6IDY0cHggIWRlZmF1bHQ7XHJcbiR0b29sYmFyLWhlaWdodC1tb2JpbGU6IDU2cHggIWRlZmF1bHQ7XHJcblxyXG4vLyBUb3BtZW51XHJcbiR0b3BtZW51LXN0aWNreS1wb3NpdGlvbi1kZXNrdG9wOiAkdG9vbGJhci1oZWlnaHQtZGVza3RvcCAhZGVmYXVsdDtcclxuJHRvcG1lbnUtc3RpY2t5LXBvc2l0aW9uLW1vYmlsZTogJHRvb2xiYXItaGVpZ2h0LW1vYmlsZSAhZGVmYXVsdDtcclxuXHJcbi8vIFR5cG9ncmFwaHlcclxuJGZvbnQtZmFtaWx5LXNhbnMtc2VyaWY6ICdSb2JvdG8nLCAnSGVsdmV0aWNhIE5ldWUgTGlnaHQnLCAnSGVsdmV0aWNhIE5ldWUnLCBIZWx2ZXRpY2EsIEFyaWFsLFxyXG4gICdMdWNpZGEgR3JhbmRlJywgc2Fucy1zZXJpZiAhZGVmYXVsdDtcclxuJGZvbnQtZmFtaWx5LW1vbm9zcGFjZTogJ1JvYm90byBNb25vJywgbW9ub3NwYWNlICFkZWZhdWx0O1xyXG4kZm9udC1mYW1pbHktYmFzZTogJGZvbnQtZmFtaWx5LXNhbnMtc2VyaWYgIWRlZmF1bHQ7XHJcblxyXG4vLyBCcmVha3BvaW50c1xyXG4vL1xyXG4vLyBEZWZpbmUgdGhlIG1pbmltdW0gZGltZW5zaW9ucyBhdCB3aGljaCB5b3VyIGxheW91dCB3aWxsIGNoYW5nZSxcclxuLy8gYWRhcHRpbmcgdG8gZGlmZmVyZW50IHNjcmVlbiBzaXplcywgZm9yIHVzZSBpbiBtZWRpYSBxdWVyaWVzLlxyXG4kYnJlYWtwb2ludHM6IChcclxuICB4c21hbGw6IDAsXHJcbiAgc21hbGw6ICA2MDBweCxcclxuICBtZWRpdW06IDk2MHB4LFxyXG4gIGxhcmdlOiAgMTI4MHB4LFxyXG4gIHhsYXJnZTogMTkyMHB4XHJcbikgIWRlZmF1bHQ7XHJcblxyXG4vLyBNYXRlcmlhbCBjb2xvcnNcclxuJG1hdC1jb2xvcnM6IChcclxuICByZWQ6IG1hdC4kcmVkLXBhbGV0dGUsXHJcbiAgcGluazogbWF0LiRwaW5rLXBhbGV0dGUsXHJcbiAgcHVycGxlOiBtYXQuJHB1cnBsZS1wYWxldHRlLFxyXG4gIGRlZXAtcHVycGxlOiBtYXQuJGRlZXAtcHVycGxlLXBhbGV0dGUsXHJcbiAgaW5kaWdvOiBtYXQuJGluZGlnby1wYWxldHRlLFxyXG4gIGJsdWU6IG1hdC4kYmx1ZS1wYWxldHRlLFxyXG4gIGxpZ2h0LWJsdWU6IG1hdC4kbGlnaHQtYmx1ZS1wYWxldHRlLFxyXG4gIGN5YW46IG1hdC4kY3lhbi1wYWxldHRlLFxyXG4gIHRlYWw6IG1hdC4kdGVhbC1wYWxldHRlLFxyXG4gIGdyZWVuOiBtYXQuJGdyZWVuLXBhbGV0dGUsXHJcbiAgbGlnaHQtZ3JlZW46IG1hdC4kbGlnaHQtZ3JlZW4tcGFsZXR0ZSxcclxuICBsaW1lOiBtYXQuJGxpbWUtcGFsZXR0ZSxcclxuICB5ZWxsb3c6IG1hdC4keWVsbG93LXBhbGV0dGUsXHJcbiAgYW1iZXI6IG1hdC4kYW1iZXItcGFsZXR0ZSxcclxuICBvcmFuZ2U6IG1hdC4kb3JhbmdlLXBhbGV0dGUsXHJcbiAgZGVlcC1vcmFuZ2U6IG1hdC4kZGVlcC1vcmFuZ2UtcGFsZXR0ZSxcclxuICBicm93bjogbWF0LiRicm93bi1wYWxldHRlLFxyXG4gIGdyYXk6IG1hdC4kZ3JheS1wYWxldHRlLFxyXG4gIGJsdWUtZ3JheTogbWF0LiRibHVlLWdyYXktcGFsZXR0ZSxcclxuICB3aGl0ZTogd2hpdGUsXHJcbiAgYmxhY2s6IGJsYWNrLFxyXG4gIGxpZ2h0OiB3aGl0ZSxcclxuICBkYXJrOiByZ2JhKGJsYWNrLCAuODcpLFxyXG4pICFkZWZhdWx0O1xyXG5cclxuLy8gVGhlIG1hdGVyaWFsIGRlZmF1bHQgYW5pbWF0aW9uIGN1cnZlc1xyXG4kc3dpZnQtZWFzZS1vdXQtZHVyYXRpb246IDQwMG1zICFkZWZhdWx0O1xyXG4kc3dpZnQtZWFzZS1vdXQtdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoLjI1LCAuOCwgLjI1LCAxKSAhZGVmYXVsdDtcclxuIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdGhlbWUvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vc3JjL2FwcC90aGVtZS9zdHlsZS9fYnJlYWtwb2ludHMuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hcHAvdGhlbWUvc3R5bGUvX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFGRjtBQ2lCSTtFRFpBO0lBQ0UsWUVMa0I7RUZHdEI7QUFDRjtBQU1FO0VBQ0UsdUJBQUE7QUFKSjs7QUFRQTtFQUNFLHlCQUFBO0VBQ0EsY0FBQTtBQUxGO0FDSUk7RURJQTtJQUNFLHlCQUFBO0VBTEo7QUFDRjtBQUNBLHd5S0FBd3lLIiwic291cmNlc0NvbnRlbnQiOlsiQHVzZSAnLi4vc3R5bGUvdmFyaWFibGVzJztcclxuQHVzZSAnLi4vc3R5bGUvYnJlYWtwb2ludHMnO1xyXG5cclxuLm1hdGVyby1zaWRlYmFyLWhlYWRlciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBoZWlnaHQ6IHZhcmlhYmxlcy4kdG9vbGJhci1oZWlnaHQtZGVza3RvcDtcclxuICBwYWRkaW5nOiAwIDhweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG5cclxuICBAaW5jbHVkZSBicmVha3BvaW50cy5icC1sdChzbWFsbCkge1xyXG4gICAgJiB7XHJcbiAgICAgIGhlaWdodDogdmFyaWFibGVzLiR0b29sYmFyLWhlaWdodC1tb2JpbGU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBDb2xvcmZ1bFxyXG4gIC5tYXRlcm8taGVhZGVyLXdoaXRlICYge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgfVxyXG59XHJcblxyXG4ubWF0ZXJvLXNpZGViYXItbWFpbiB7XHJcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAje3ZhcmlhYmxlcy4kdG9vbGJhci1oZWlnaHQtZGVza3RvcH0pO1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG5cclxuICBAaW5jbHVkZSBicmVha3BvaW50cy5icC1sdChzbWFsbCkge1xyXG4gICAgJiB7XHJcbiAgICAgIGhlaWdodDogY2FsYygxMDAlIC0gI3t2YXJpYWJsZXMuJHRvb2xiYXItaGVpZ2h0LW1vYmlsZX0pO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJAdXNlICdzYXNzOm1hcCc7XHJcbkB1c2UgJ3ZhcmlhYmxlcyc7XHJcblxyXG5AZnVuY3Rpb24gYnAoJG5hbWUsICRicmVha3BvaW50czogdmFyaWFibGVzLiRicmVha3BvaW50cykge1xyXG4gICRtaW46IG1hcC5nZXQoJGJyZWFrcG9pbnRzLCAkbmFtZSk7XHJcblxyXG4gIEByZXR1cm4gJG1pbjtcclxufVxyXG5cclxuLy8gTWVkaWEgb2YgYXQgbGVhc3QgdGhlIG1pbmltdW0gYnJlYWtwb2ludCB3aWR0aC5cclxuQG1peGluIGJwLWd0KCRuYW1lLCAkYnJlYWtwb2ludHM6IHZhcmlhYmxlcy4kYnJlYWtwb2ludHMpIHtcclxuICAkbWluOiBicCgkbmFtZSwgJGJyZWFrcG9pbnRzKTtcclxuXHJcbiAgQGlmICRtaW4ge1xyXG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICRtaW4pIHtcclxuICAgICAgQGNvbnRlbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG4gIEBlbHNlIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5cclxuLy8gTWVkaWEgb2YgYXQgbW9zdCB0aGUgbWF4aW11bSBicmVha3BvaW50IHdpZHRoLlxyXG5AbWl4aW4gYnAtbHQoJG5hbWUsICRicmVha3BvaW50czogdmFyaWFibGVzLiRicmVha3BvaW50cykge1xyXG4gICRtYXg6IGJwKCRuYW1lLCAkYnJlYWtwb2ludHMpIC0gMXB4O1xyXG5cclxuICBAaWYgJG1heCB7XHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogJG1heCkge1xyXG4gICAgICBAY29udGVudDtcclxuICAgIH1cclxuICB9XHJcbiAgQGVsc2Uge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcbiIsIkB1c2UgJ0Bhbmd1bGFyL21hdGVyaWFsJyBhcyBtYXQ7XHJcblxyXG4vLyBMYXlvdXRcclxuJGd1dHRlcjogMTZweCAhZGVmYXVsdDtcclxuXHJcbi8vIFNpZGVuYXZcclxuJHNpZGVuYXYtd2lkdGg6IDI0MHB4ICFkZWZhdWx0O1xyXG4kc2lkZW5hdi1jb2xsYXBzZWQtd2lkdGg6IDUwcHggIWRlZmF1bHQ7XHJcbiRzaWRlbmF2LXdpZHRoLW1vYmlsZTogMjgwcHggIWRlZmF1bHQ7XHJcblxyXG4vLyBUb29sYmFyXHJcbiR0b29sYmFyLWhlaWdodC1kZXNrdG9wOiA2NHB4ICFkZWZhdWx0O1xyXG4kdG9vbGJhci1oZWlnaHQtbW9iaWxlOiA1NnB4ICFkZWZhdWx0O1xyXG5cclxuLy8gVG9wbWVudVxyXG4kdG9wbWVudS1zdGlja3ktcG9zaXRpb24tZGVza3RvcDogJHRvb2xiYXItaGVpZ2h0LWRlc2t0b3AgIWRlZmF1bHQ7XHJcbiR0b3BtZW51LXN0aWNreS1wb3NpdGlvbi1tb2JpbGU6ICR0b29sYmFyLWhlaWdodC1tb2JpbGUgIWRlZmF1bHQ7XHJcblxyXG4vLyBUeXBvZ3JhcGh5XHJcbiRmb250LWZhbWlseS1zYW5zLXNlcmlmOiAnUm9ib3RvJywgJ0hlbHZldGljYSBOZXVlIExpZ2h0JywgJ0hlbHZldGljYSBOZXVlJywgSGVsdmV0aWNhLCBBcmlhbCxcclxuICAnTHVjaWRhIEdyYW5kZScsIHNhbnMtc2VyaWYgIWRlZmF1bHQ7XHJcbiRmb250LWZhbWlseS1tb25vc3BhY2U6ICdSb2JvdG8gTW9ubycsIG1vbm9zcGFjZSAhZGVmYXVsdDtcclxuJGZvbnQtZmFtaWx5LWJhc2U6ICRmb250LWZhbWlseS1zYW5zLXNlcmlmICFkZWZhdWx0O1xyXG5cclxuLy8gQnJlYWtwb2ludHNcclxuLy9cclxuLy8gRGVmaW5lIHRoZSBtaW5pbXVtIGRpbWVuc2lvbnMgYXQgd2hpY2ggeW91ciBsYXlvdXQgd2lsbCBjaGFuZ2UsXHJcbi8vIGFkYXB0aW5nIHRvIGRpZmZlcmVudCBzY3JlZW4gc2l6ZXMsIGZvciB1c2UgaW4gbWVkaWEgcXVlcmllcy5cclxuJGJyZWFrcG9pbnRzOiAoXHJcbiAgeHNtYWxsOiAwLFxyXG4gIHNtYWxsOiAgNjAwcHgsXHJcbiAgbWVkaXVtOiA5NjBweCxcclxuICBsYXJnZTogIDEyODBweCxcclxuICB4bGFyZ2U6IDE5MjBweFxyXG4pICFkZWZhdWx0O1xyXG5cclxuLy8gTWF0ZXJpYWwgY29sb3JzXHJcbiRtYXQtY29sb3JzOiAoXHJcbiAgcmVkOiBtYXQuJHJlZC1wYWxldHRlLFxyXG4gIHBpbms6IG1hdC4kcGluay1wYWxldHRlLFxyXG4gIHB1cnBsZTogbWF0LiRwdXJwbGUtcGFsZXR0ZSxcclxuICBkZWVwLXB1cnBsZTogbWF0LiRkZWVwLXB1cnBsZS1wYWxldHRlLFxyXG4gIGluZGlnbzogbWF0LiRpbmRpZ28tcGFsZXR0ZSxcclxuICBibHVlOiBtYXQuJGJsdWUtcGFsZXR0ZSxcclxuICBsaWdodC1ibHVlOiBtYXQuJGxpZ2h0LWJsdWUtcGFsZXR0ZSxcclxuICBjeWFuOiBtYXQuJGN5YW4tcGFsZXR0ZSxcclxuICB0ZWFsOiBtYXQuJHRlYWwtcGFsZXR0ZSxcclxuICBncmVlbjogbWF0LiRncmVlbi1wYWxldHRlLFxyXG4gIGxpZ2h0LWdyZWVuOiBtYXQuJGxpZ2h0LWdyZWVuLXBhbGV0dGUsXHJcbiAgbGltZTogbWF0LiRsaW1lLXBhbGV0dGUsXHJcbiAgeWVsbG93OiBtYXQuJHllbGxvdy1wYWxldHRlLFxyXG4gIGFtYmVyOiBtYXQuJGFtYmVyLXBhbGV0dGUsXHJcbiAgb3JhbmdlOiBtYXQuJG9yYW5nZS1wYWxldHRlLFxyXG4gIGRlZXAtb3JhbmdlOiBtYXQuJGRlZXAtb3JhbmdlLXBhbGV0dGUsXHJcbiAgYnJvd246IG1hdC4kYnJvd24tcGFsZXR0ZSxcclxuICBncmF5OiBtYXQuJGdyYXktcGFsZXR0ZSxcclxuICBibHVlLWdyYXk6IG1hdC4kYmx1ZS1ncmF5LXBhbGV0dGUsXHJcbiAgd2hpdGU6IHdoaXRlLFxyXG4gIGJsYWNrOiBibGFjayxcclxuICBsaWdodDogd2hpdGUsXHJcbiAgZGFyazogcmdiYShibGFjaywgLjg3KSxcclxuKSAhZGVmYXVsdDtcclxuXHJcbi8vIFRoZSBtYXRlcmlhbCBkZWZhdWx0IGFuaW1hdGlvbiBjdXJ2ZXNcclxuJHN3aWZ0LWVhc2Utb3V0LWR1cmF0aW9uOiA0MDBtcyAhZGVmYXVsdDtcclxuJHN3aWZ0LWVhc2Utb3V0LXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKC4yNSwgLjgsIC4yNSwgMSkgIWRlZmF1bHQ7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"],
  encapsulation: 2
});

/***/ }),

/***/ 1170:
/*!*******************************************************!*\
  !*** ./src/app/theme/sidebar/user-panel.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UserPanelComponent: () => (/* binding */ UserPanelComponent)
/* harmony export */ });
/* harmony import */ var _core_authentication__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/authentication */ 3870);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ 895);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ 6515);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/tooltip */ 702);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 5939);









class UserPanelComponent {
  constructor(router, auth) {
    this.router = router;
    this.auth = auth;
  }
  ngOnInit() {
    this.auth.user().subscribe(user => this.user = user);
  }
  logout() {
    this.auth.logout().subscribe(() => this.router.navigateByUrl('/auth/login'));
  }
}
UserPanelComponent.ɵfac = function UserPanelComponent_Factory(t) {
  return new (t || UserPanelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_authentication__WEBPACK_IMPORTED_MODULE_0__.AuthService));
};
UserPanelComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: UserPanelComponent,
  selectors: [["app-user-panel"]],
  decls: 19,
  vars: 12,
  consts: [[1, "matero-user-panel"], ["alt", "avatar", "width", "64", 1, "matero-user-panel-avatar", 3, "src"], [1, "matero-user-panel-name"], [1, "matero-user-panel-email"], [1, "matero-user-panel-icons"], ["mat-icon-button", "", "routerLink", "/profile/overview", 3, "matTooltip"], [1, "icon-18"], ["mat-icon-button", "", "routerLink", "/profile/settings", 3, "matTooltip"], ["mat-icon-button", "", 3, "matTooltip", "click"]],
  template: function UserPanelComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h4", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h5", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4)(7, "button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mat-icon", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "account_circle");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](12, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "mat-icon", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "edit");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "button", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UserPanelComponent_Template_button_click_15_listener() {
        return ctx.logout();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](16, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "mat-icon", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "exit_to_app");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx.user.avatar, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.user.name);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.user.email);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("matTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](8, 6, "profile"));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("matTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](12, 8, "edit_profile"));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("matTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](16, 10, "logout"));
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatIconButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIcon, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_5__.MatTooltip, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslatePipe],
  styles: [".matero-user-panel {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 12px 0;\n}\n\n.matero-user-panel-avatar {\n  width: 64px;\n  height: 64px;\n  margin-bottom: 8px;\n  border-radius: 50rem;\n  transition: transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n\n.matero-user-panel-name,\n.matero-user-panel-email {\n  margin-top: 0;\n  margin-bottom: 4px;\n  font-weight: normal;\n}\n\n.matero-user-panel-name,\n.matero-user-panel-email,\n.matero-user-panel-icons {\n  opacity: 1;\n  transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n\n.matero-user-panel-icons {\n  white-space: nowrap;\n}\n.matero-user-panel-icons .mat-mdc-button-base,\n.matero-user-panel-icons .mat-mdc-button-touch-target {\n  width: 32px;\n  height: 32px;\n}\n.matero-user-panel-icons .mat-mdc-button-base {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXItcGFuZWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFERjs7QUFLQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLDREQUFBO0FBRkY7O0FBS0E7O0VBRUUsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFGRjs7QUFLQTs7O0VBR0UsVUFBQTtFQUNBLDBEQUFBO0FBRkY7O0FBS0E7RUFDRSxtQkFBQTtBQUZGO0FBSUU7O0VBRUUsV0FBQTtFQUNBLFlBQUE7QUFGSjtBQUtFO0VBQ0Usb0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsVUFBQTtBQUhKIiwiZmlsZSI6InVzZXItcGFuZWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAdXNlICcuLi9zdHlsZS90cmFuc2l0aW9ucyc7XHJcblxyXG4ubWF0ZXJvLXVzZXItcGFuZWwge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDEycHggMDtcclxufVxyXG5cclxuLy8gU2V0IGRlZmF1bHQgd2lkdGggYW5kIGhlaWdodCBjYW4gYXZvaWQgZmxhc2hpbmcgYmVmb3JlIGF2YXRhciBpbWFnZSBsb2FkZWQuXHJcbi5tYXRlcm8tdXNlci1wYW5lbC1hdmF0YXIge1xyXG4gIHdpZHRoOiA2NHB4O1xyXG4gIGhlaWdodDogNjRweDtcclxuICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTByZW07XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNpdGlvbnMuc3dpZnQtZWFzZS1vdXQodHJhbnNmb3JtKTtcclxufVxyXG5cclxuLm1hdGVyby11c2VyLXBhbmVsLW5hbWUsXHJcbi5tYXRlcm8tdXNlci1wYW5lbC1lbWFpbCB7XHJcbiAgbWFyZ2luLXRvcDogMDtcclxuICBtYXJnaW4tYm90dG9tOiA0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxufVxyXG5cclxuLm1hdGVyby11c2VyLXBhbmVsLW5hbWUsXHJcbi5tYXRlcm8tdXNlci1wYW5lbC1lbWFpbCxcclxuLm1hdGVyby11c2VyLXBhbmVsLWljb25zIHtcclxuICBvcGFjaXR5OiAxO1xyXG4gIHRyYW5zaXRpb246IHRyYW5zaXRpb25zLnN3aWZ0LWVhc2Utb3V0KG9wYWNpdHkpO1xyXG59XHJcblxyXG4ubWF0ZXJvLXVzZXItcGFuZWwtaWNvbnMge1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcblxyXG4gIC5tYXQtbWRjLWJ1dHRvbi1iYXNlLFxyXG4gIC5tYXQtbWRjLWJ1dHRvbi10b3VjaC10YXJnZXQge1xyXG4gICAgd2lkdGg6IDMycHg7XHJcbiAgICBoZWlnaHQ6IDMycHg7XHJcbiAgfVxyXG5cclxuICAubWF0LW1kYy1idXR0b24tYmFzZSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgfVxyXG59XHJcbiJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdGhlbWUvc2lkZWJhci91c2VyLXBhbmVsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBREY7O0FBS0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSw0REFBQTtBQUZGOztBQUtBOztFQUVFLGFBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBRkY7O0FBS0E7OztFQUdFLFVBQUE7RUFDQSwwREFBQTtBQUZGOztBQUtBO0VBQ0UsbUJBQUE7QUFGRjtBQUlFOztFQUVFLFdBQUE7RUFDQSxZQUFBO0FBRko7QUFLRTtFQUNFLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFVBQUE7QUFISjtBQUNBLGdnRUFBZ2dFIiwic291cmNlc0NvbnRlbnQiOlsiQHVzZSAnLi4vc3R5bGUvdHJhbnNpdGlvbnMnO1xyXG5cclxuLm1hdGVyby11c2VyLXBhbmVsIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwYWRkaW5nOiAxMnB4IDA7XHJcbn1cclxuXHJcbi8vIFNldCBkZWZhdWx0IHdpZHRoIGFuZCBoZWlnaHQgY2FuIGF2b2lkIGZsYXNoaW5nIGJlZm9yZSBhdmF0YXIgaW1hZ2UgbG9hZGVkLlxyXG4ubWF0ZXJvLXVzZXItcGFuZWwtYXZhdGFyIHtcclxuICB3aWR0aDogNjRweDtcclxuICBoZWlnaHQ6IDY0cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwcmVtO1xyXG4gIHRyYW5zaXRpb246IHRyYW5zaXRpb25zLnN3aWZ0LWVhc2Utb3V0KHRyYW5zZm9ybSk7XHJcbn1cclxuXHJcbi5tYXRlcm8tdXNlci1wYW5lbC1uYW1lLFxyXG4ubWF0ZXJvLXVzZXItcGFuZWwtZW1haWwge1xyXG4gIG1hcmdpbi10b3A6IDA7XHJcbiAgbWFyZ2luLWJvdHRvbTogNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbn1cclxuXHJcbi5tYXRlcm8tdXNlci1wYW5lbC1uYW1lLFxyXG4ubWF0ZXJvLXVzZXItcGFuZWwtZW1haWwsXHJcbi5tYXRlcm8tdXNlci1wYW5lbC1pY29ucyB7XHJcbiAgb3BhY2l0eTogMTtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2l0aW9ucy5zd2lmdC1lYXNlLW91dChvcGFjaXR5KTtcclxufVxyXG5cclxuLm1hdGVyby11c2VyLXBhbmVsLWljb25zIHtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG5cclxuICAubWF0LW1kYy1idXR0b24tYmFzZSxcclxuICAubWF0LW1kYy1idXR0b24tdG91Y2gtdGFyZ2V0IHtcclxuICAgIHdpZHRoOiAzMnB4O1xyXG4gICAgaGVpZ2h0OiAzMnB4O1xyXG4gIH1cclxuXHJcbiAgLm1hdC1tZGMtYnV0dG9uLWJhc2Uge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"],
  encapsulation: 2
});

/***/ }),

/***/ 8465:
/*!****************************************************************!*\
  !*** ./src/app/theme/sidemenu/nav-accordion-item.directive.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NavAccordionItemDirective: () => (/* binding */ NavAccordionItemDirective)
/* harmony export */ });
/* harmony import */ var _nav_accordion_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nav-accordion.directive */ 4237);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);



class NavAccordionItemDirective {
  get expanded() {
    return this.isExpanded;
  }
  set expanded(value) {
    // Only sub menu can be expanded
    this.isExpanded = this.type === 'sub' && value;
    if (value) {
      this.nav.closeOtherLinks(this);
    }
  }
  constructor(nav) {
    this.isExpanded = false;
    this.route = '';
    this.type = 'link';
    this.nav = nav;
  }
  ngOnInit() {
    this.nav.addLink(this);
  }
  ngOnDestroy() {
    this.nav.removeLink(this);
  }
  toggle() {
    this.expanded = !this.expanded;
  }
}
NavAccordionItemDirective.ɵfac = function NavAccordionItemDirective_Factory(t) {
  return new (t || NavAccordionItemDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nav_accordion_directive__WEBPACK_IMPORTED_MODULE_0__.NavAccordionDirective));
};
NavAccordionItemDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
  type: NavAccordionItemDirective,
  selectors: [["", "navAccordionItem", ""]],
  hostVars: 2,
  hostBindings: function NavAccordionItemDirective_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("expanded", ctx.expanded);
    }
  },
  inputs: {
    route: "route",
    type: "type",
    expanded: "expanded"
  }
});

/***/ }),

/***/ 7427:
/*!******************************************************************!*\
  !*** ./src/app/theme/sidemenu/nav-accordion-toggle.directive.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NavAccordionToggleDirective: () => (/* binding */ NavAccordionToggleDirective)
/* harmony export */ });
/* harmony import */ var _nav_accordion_item_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nav-accordion-item.directive */ 8465);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);



class NavAccordionToggleDirective {
  constructor(navLink) {
    this.navLink = navLink;
  }
  onClick() {
    this.navLink.toggle();
  }
}
NavAccordionToggleDirective.ɵfac = function NavAccordionToggleDirective_Factory(t) {
  return new (t || NavAccordionToggleDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nav_accordion_item_directive__WEBPACK_IMPORTED_MODULE_0__.NavAccordionItemDirective));
};
NavAccordionToggleDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
  type: NavAccordionToggleDirective,
  selectors: [["", "navAccordionToggle", ""]],
  hostBindings: function NavAccordionToggleDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavAccordionToggleDirective_click_HostBindingHandler($event) {
        return ctx.onClick($event);
      });
    }
  }
});

/***/ }),

/***/ 4237:
/*!***********************************************************!*\
  !*** ./src/app/theme/sidemenu/nav-accordion.directive.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NavAccordionDirective: () => (/* binding */ NavAccordionDirective)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core */ 9076);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 4520);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);






class NavAccordionDirective {
  constructor(router, menu) {
    this.router = router;
    this.menu = menu;
    this.navLinks = [];
    this.router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.filter)(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__.NavigationEnd)).subscribe(() => this.checkOpenLinks());
    // Fix opening status for async menu data
    this.menu.change().subscribe(() => {
      setTimeout(() => this.checkOpenLinks());
    });
  }
  addLink(link) {
    this.navLinks.push(link);
  }
  removeLink(link) {
    const index = this.navLinks.indexOf(link);
    if (index !== -1) {
      this.navLinks.splice(index, 1);
    }
  }
  closeOtherLinks(openLink) {
    this.navLinks.forEach(link => {
      if (link !== openLink) {
        link.expanded = false;
      }
    });
  }
  checkOpenLinks() {
    this.navLinks.forEach(link => {
      if (link.route) {
        if (this.router.url.split('/').includes(link.route)) {
          link.expanded = true;
          this.closeOtherLinks(link);
        }
      }
    });
  }
}
NavAccordionDirective.ɵfac = function NavAccordionDirective_Factory(t) {
  return new (t || NavAccordionDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core__WEBPACK_IMPORTED_MODULE_0__.MenuService));
};
NavAccordionDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
  type: NavAccordionDirective,
  selectors: [["", "navAccordion", ""]]
});

/***/ }),

/***/ 8015:
/*!******************************************************!*\
  !*** ./src/app/theme/sidemenu/sidemenu.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SidemenuComponent: () => (/* binding */ SidemenuComponent)
/* harmony export */ });
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core */ 9076);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ 6515);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/core */ 5309);
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-permissions */ 7439);
/* harmony import */ var _nav_accordion_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nav-accordion.directive */ 4237);
/* harmony import */ var _nav_accordion_item_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nav-accordion-item.directive */ 8465);
/* harmony import */ var _nav_accordion_toggle_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nav-accordion-toggle.directive */ 7427);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ 5939);












const _c0 = function (a0) {
  return [a0];
};
const _c1 = function (a0, a1) {
  return {
    item: a0,
    level: a1
  };
};
function SidemenuComponent_ng_template_2_ng_container_1_ng_template_1_a_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainer"](1, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const menuItem_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    const parentRoute_r5 = ctx_r15.parentRoute;
    const level_r6 = ctx_r15.level;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", ctx_r10.buildRoute(parentRoute_r5.concat(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](4, _c0, menuItem_r8.route))))("matRippleDisabled", !ctx_r10.ripple);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngTemplateOutlet", _r2)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](6, _c1, menuItem_r8, level_r6));
  }
}
function SidemenuComponent_ng_template_2_ng_container_1_ng_template_1_a_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainer"](1, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const menuItem_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
    const level_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().level;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("href", menuItem_r8.route, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"])("matRippleDisabled", !ctx_r11.ripple);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngTemplateOutlet", _r2)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](4, _c1, menuItem_r8, level_r6));
  }
}
function SidemenuComponent_ng_template_2_ng_container_1_ng_template_1_a_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainer"](1, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const menuItem_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
    const level_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().level;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("href", menuItem_r8.route, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"])("matRippleDisabled", !ctx_r12.ripple);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngTemplateOutlet", _r2)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](4, _c1, menuItem_r8, level_r6));
  }
}
function SidemenuComponent_ng_template_2_ng_container_1_ng_template_1_button_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainer"](1, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const menuItem_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
    const level_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().level;
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matRippleDisabled", !ctx_r13.ripple);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngTemplateOutlet", _r2)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](3, _c1, menuItem_r8, level_r6));
  }
}
const _c2 = function (a0, a1, a2) {
  return {
    menuList: a0,
    parentRoute: a1,
    level: a2
  };
};
function SidemenuComponent_ng_template_2_ng_container_1_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, SidemenuComponent_ng_template_2_ng_container_1_ng_template_1_a_1_Template, 2, 9, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, SidemenuComponent_ng_template_2_ng_container_1_ng_template_1_a_2_Template, 2, 7, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, SidemenuComponent_ng_template_2_ng_container_1_ng_template_1_a_3_Template, 2, 7, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, SidemenuComponent_ng_template_2_ng_container_1_ng_template_1_button_4_Template, 2, 6, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainer"](5, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const menuItem_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    const parentRoute_r5 = ctx_r23.parentRoute;
    const level_r6 = ctx_r23.level;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("route", menuItem_r8.route)("type", menuItem_r8.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", menuItem_r8.type === "link");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", menuItem_r8.type === "extLink");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", menuItem_r8.type === "extTabLink");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", menuItem_r8.type === "sub");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngTemplateOutlet", _r0)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction3"](10, _c2, menuItem_r8.children, parentRoute_r5.concat(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](8, _c0, menuItem_r8.route)), level_r6 + 1));
  }
}
function SidemenuComponent_ng_template_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, SidemenuComponent_ng_template_2_ng_container_1_ng_template_1_Template, 6, 14, "ng-template", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const menuItem_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngxPermissionsOnly", menuItem_r8.permissions == null ? null : menuItem_r8.permissions.only)("ngxPermissionsExcept", menuItem_r8.permissions == null ? null : menuItem_r8.permissions.except);
  }
}
function SidemenuComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ul", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, SidemenuComponent_ng_template_2_ng_container_1_Template, 2, 2, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const menuList_r4 = ctx.menuList;
    const level_r6 = ctx.level;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMapInterpolate1"]("matero-sidemenu level-", level_r6, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("submenu", level_r6 > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", menuList_r4);
  }
}
function SidemenuComponent_ng_template_4_mat_icon_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-icon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().item;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r24.icon);
  }
}
function SidemenuComponent_ng_template_4_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().item;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMapInterpolate1"]("menu-label bg-", item_r24.label.color, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r24.label.value);
  }
}
function SidemenuComponent_ng_template_4_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().item;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMapInterpolate1"]("menu-badge bg-", item_r24.badge.color, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r24.badge.value);
  }
}
function SidemenuComponent_ng_template_4_mat_icon_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-icon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().item;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", item_r24.type === "sub" ? "arrow_drop_down" : "launch", " ");
  }
}
function SidemenuComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, SidemenuComponent_ng_template_4_mat_icon_0_Template, 2, 1, "mat-icon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, SidemenuComponent_ng_template_4_span_4_Template, 2, 4, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, SidemenuComponent_ng_template_4_span_5_Template, 2, 4, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, SidemenuComponent_ng_template_4_mat_icon_6_Template, 2, 1, "mat-icon", 18);
  }
  if (rf & 2) {
    const item_r24 = ctx.item;
    const level_r25 = ctx.level;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", level_r25 === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 5, item_r24.name));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", item_r24.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", item_r24.badge);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", item_r24.type !== "link");
  }
}
const _c3 = function () {
  return [];
};
const _c4 = function (a0, a1) {
  return {
    menuList: a0,
    parentRoute: a1,
    level: 0
  };
};
class SidemenuComponent {
  constructor(menu) {
    this.menu = menu;
    // Note: Ripple effect make page flashing on mobile
    this.ripple = false;
    this.menu$ = this.menu.getAll();
    this.buildRoute = this.menu.buildRoute;
  }
}
SidemenuComponent.ɵfac = function SidemenuComponent_Factory(t) {
  return new (t || SidemenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core__WEBPACK_IMPORTED_MODULE_0__.MenuService));
};
SidemenuComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: SidemenuComponent,
  selectors: [["app-sidemenu"]],
  inputs: {
    ripple: "ripple"
  },
  decls: 6,
  vars: 8,
  consts: [[3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["menuListTpl", ""], ["linkTypeTpl", ""], ["navAccordion", ""], [4, "ngFor", "ngForOf"], [3, "ngxPermissionsOnly", "ngxPermissionsExcept"], ["navAccordionItem", "", "routerLinkActive", "active", 1, "menu-item", 3, "route", "type"], ["class", "menu-heading", "matRipple", "", 3, "routerLink", "matRippleDisabled", 4, "ngIf"], ["class", "menu-heading", "matRipple", "", 3, "href", "matRippleDisabled", 4, "ngIf"], ["class", "menu-heading", "target", "_blank", "matRipple", "", 3, "href", "matRippleDisabled", 4, "ngIf"], ["navAccordionToggle", "", "class", "menu-heading menu-toggle", "matRipple", "", 3, "matRippleDisabled", 4, "ngIf"], ["matRipple", "", 1, "menu-heading", 3, "routerLink", "matRippleDisabled"], ["matRipple", "", 1, "menu-heading", 3, "href", "matRippleDisabled"], ["target", "_blank", "matRipple", "", 1, "menu-heading", 3, "href", "matRippleDisabled"], ["navAccordionToggle", "", "matRipple", "", 1, "menu-heading", "menu-toggle", 3, "matRippleDisabled"], ["class", "menu-icon", 4, "ngIf"], [1, "menu-name"], [3, "class", 4, "ngIf"], ["class", "menu-caret", 4, "ngIf"], [1, "menu-icon"], [1, "menu-caret"]],
  template: function SidemenuComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainer"](0, 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](1, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, SidemenuComponent_ng_template_2_Template, 2, 6, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, SidemenuComponent_ng_template_4_Template, 7, 7, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
    }
    if (rf & 2) {
      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngTemplateOutlet", _r0)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](5, _c4, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](1, 2, ctx.menu$), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](4, _c3)));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgTemplateOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLinkActive, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIcon, _angular_material_core__WEBPACK_IMPORTED_MODULE_8__.MatRipple, ngx_permissions__WEBPACK_IMPORTED_MODULE_9__.NgxPermissionsDirective, _nav_accordion_directive__WEBPACK_IMPORTED_MODULE_1__.NavAccordionDirective, _nav_accordion_item_directive__WEBPACK_IMPORTED_MODULE_2__.NavAccordionItemDirective, _nav_accordion_toggle_directive__WEBPACK_IMPORTED_MODULE_3__.NavAccordionToggleDirective, _angular_common__WEBPACK_IMPORTED_MODULE_5__.AsyncPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslatePipe],
  styles: [".matero-sidemenu {\n  width: 240px;\n  padding: 0;\n  margin: 0;\n  list-style: none;\n}\n.matero-sidemenu .menu-item {\n  display: block;\n  height: auto;\n  padding: 0;\n}\n.matero-sidemenu .menu-item.expanded > .submenu {\n  max-height: 2000px;\n  visibility: visible;\n}\n.matero-sidemenu .menu-item.expanded > .menu-toggle > .menu-caret {\n  transform: rotate(-180deg);\n}\n.matero-sidemenu.submenu {\n  max-height: 0;\n  padding-top: 0;\n  overflow: hidden;\n  visibility: hidden;\n  transition: max-height 225ms cubic-bezier(0.4, 0, 0.2, 1), visibility 225ms cubic-bezier(0.4, 0, 0.2, 1);\n  transform: translateZ(0) !important;\n}\n.matero-sidemenu .menu-heading {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  width: 100%;\n  padding: 12px 16px;\n  font-size: inherit;\n  text-decoration: none;\n  cursor: pointer;\n  background-color: transparent;\n  border: none;\n  outline: none;\n}\n.matero-sidemenu .mat-icon.menu-icon {\n  width: 18px;\n  height: 18px;\n  margin-right: 16px;\n  font-size: 18px;\n  line-height: 18px;\n}\n[dir=rtl] .matero-sidemenu .mat-icon.menu-icon {\n  margin-right: auto;\n  margin-left: 16px;\n}\n.matero-sidemenu .mat-icon.menu-caret {\n  display: block;\n  text-align: center;\n  transition: transform 225ms cubic-bezier(0.4, 0, 0.2, 1);\n}\n.matero-sidemenu .menu-name {\n  flex: 1;\n  text-align: initial;\n}\n.matero-sidemenu .menu-name,\n.matero-sidemenu .menu-label,\n.matero-sidemenu .menu-badge {\n  transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n.matero-sidemenu .menu-label,\n.matero-sidemenu .menu-badge {\n  display: inline-block;\n  min-width: 18px;\n  padding: 0.35em 0.65em;\n  font-size: 0.75em;\n  font-weight: 700;\n  line-height: 1;\n  color: #fff;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: baseline;\n  background-color: #757575;\n  border-radius: 4px;\n}\n.matero-sidemenu .menu-badge {\n  border-radius: 50rem;\n}\n.matero-sidemenu.level-1 > li > .menu-heading {\n  padding-left: 50px;\n}\n[dir=rtl] .matero-sidemenu.level-1 > li > .menu-heading {\n  padding-right: 50px;\n  padding-left: 16px;\n}\n.matero-sidemenu.level-2 > li > .menu-heading {\n  padding-left: 64px;\n}\n[dir=rtl] .matero-sidemenu.level-2 > li > .menu-heading {\n  padding-right: 64px;\n  padding-left: 16px;\n}\n.matero-sidemenu.level-2 [class^=level-] > li > .menu-heading {\n  padding-left: 80px;\n}\n[dir=rtl] .matero-sidemenu.level-2 [class^=level-] > li > .menu-heading {\n  padding-right: 80px;\n  padding-left: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZGVtZW51LmNvbXBvbmVudC5zY3NzIiwiLi5cXHN0eWxlXFxfdmFyaWFibGVzLnNjc3MiLCIuLlxcc3R5bGVcXF9iYWRnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VBQ0UsWUNDYztFREFkLFVBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7QUFIRjtBQUtFO0VBQ0UsY0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FBSEo7QUFNTTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7QUFKUjtBQU9NO0VBQ0UsMEJBQUE7QUFMUjtBQVVFO0VBQ0UsYUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esd0dBQUE7RUFDQSxtQ0FBQTtBQVJKO0FBV0U7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsNkJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQVRKO0FBWUU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBVko7QUFZSTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7QUFWTjtBQWNFO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0Esd0RBQUE7QUFaSjtBQWVFO0VBQ0UsT0FBQTtFQUNBLG1CQUFBO0FBYko7QUFnQkU7OztFQUdFLDBEQUFBO0FBZEo7QUFpQkU7O0VFL0VBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHdCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBRmtFRjtBQU9FO0VBQ0Usb0JBQUE7QUFMSjtBQVFFO0VBQ0Usa0JBQUE7QUFOSjtBQVFJO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtBQU5OO0FBVUU7RUFDRSxrQkFBQTtBQVJKO0FBVUk7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0FBUk47QUFZRTtFQUNFLGtCQUFBO0FBVko7QUFZSTtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7QUFWTiIsImZpbGUiOiJzaWRlbWVudS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkB1c2UgJy4uL3N0eWxlL3ZhcmlhYmxlcyc7XHJcbkB1c2UgJy4uL3N0eWxlL3RyYW5zaXRpb25zJztcclxuQHVzZSAnLi4vc3R5bGUvYmFkZ2UnO1xyXG5cclxuLm1hdGVyby1zaWRlbWVudSB7XHJcbiAgd2lkdGg6IHZhcmlhYmxlcy4kc2lkZW5hdi13aWR0aDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIG1hcmdpbjogMDtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG5cclxuICAubWVudS1pdGVtIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgcGFkZGluZzogMDtcclxuXHJcbiAgICAmLmV4cGFuZGVkIHtcclxuICAgICAgPiAuc3VibWVudSB7XHJcbiAgICAgICAgbWF4LWhlaWdodDogMjAwMHB4O1xyXG4gICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgID4gLm1lbnUtdG9nZ2xlID4gLm1lbnUtY2FyZXQge1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC0xODBkZWcpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmLnN1Ym1lbnUge1xyXG4gICAgbWF4LWhlaWdodDogMDtcclxuICAgIHBhZGRpbmctdG9wOiAwO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgIHRyYW5zaXRpb246IHRyYW5zaXRpb25zLmZhc3Qtb3V0LXNsb3cobWF4LWhlaWdodCksIHRyYW5zaXRpb25zLmZhc3Qtb3V0LXNsb3codmlzaWJpbGl0eSk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCkgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5tZW51LWhlYWRpbmcge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAxMnB4IDE2cHg7XHJcbiAgICBmb250LXNpemU6IGluaGVyaXQ7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAubWF0LWljb24ubWVudS1pY29uIHtcclxuICAgIHdpZHRoOiAxOHB4O1xyXG4gICAgaGVpZ2h0OiAxOHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcblxyXG4gICAgW2Rpcj0ncnRsJ10gJiB7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgICAgbWFyZ2luLWxlZnQ6IDE2cHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAubWF0LWljb24ubWVudS1jYXJldCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHRyYW5zaXRpb246IHRyYW5zaXRpb25zLmZhc3Qtb3V0LXNsb3codHJhbnNmb3JtKTtcclxuICB9XHJcblxyXG4gIC5tZW51LW5hbWUge1xyXG4gICAgZmxleDogMTtcclxuICAgIHRleHQtYWxpZ246IGluaXRpYWw7XHJcbiAgfVxyXG5cclxuICAubWVudS1uYW1lLFxyXG4gIC5tZW51LWxhYmVsLFxyXG4gIC5tZW51LWJhZGdlIHtcclxuICAgIHRyYW5zaXRpb246IHRyYW5zaXRpb25zLnN3aWZ0LWVhc2Utb3V0KG9wYWNpdHkpO1xyXG4gIH1cclxuXHJcbiAgLm1lbnUtbGFiZWwsXHJcbiAgLm1lbnUtYmFkZ2Uge1xyXG4gICAgQGluY2x1ZGUgYmFkZ2UuYmFkZ2UoKTtcclxuICB9XHJcblxyXG4gIC5tZW51LWJhZGdlIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwcmVtO1xyXG4gIH1cclxuXHJcbiAgJi5sZXZlbC0xID4gbGkgPiAubWVudS1oZWFkaW5nIHtcclxuICAgIHBhZGRpbmctbGVmdDogNTBweDtcclxuXHJcbiAgICBbZGlyPSdydGwnXSAmIHtcclxuICAgICAgcGFkZGluZy1yaWdodDogNTBweDtcclxuICAgICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJi5sZXZlbC0yID4gbGkgPiAubWVudS1oZWFkaW5nIHtcclxuICAgIHBhZGRpbmctbGVmdDogNjRweDtcclxuXHJcbiAgICBbZGlyPSdydGwnXSAmIHtcclxuICAgICAgcGFkZGluZy1yaWdodDogNjRweDtcclxuICAgICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJi5sZXZlbC0yIFtjbGFzc149J2xldmVsLSddID4gbGkgPiAubWVudS1oZWFkaW5nIHtcclxuICAgIHBhZGRpbmctbGVmdDogODBweDtcclxuXHJcbiAgICBbZGlyPSdydGwnXSAmIHtcclxuICAgICAgcGFkZGluZy1yaWdodDogODBweDtcclxuICAgICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJAdXNlICdAYW5ndWxhci9tYXRlcmlhbCcgYXMgbWF0O1xyXG5cclxuLy8gTGF5b3V0XHJcbiRndXR0ZXI6IDE2cHggIWRlZmF1bHQ7XHJcblxyXG4vLyBTaWRlbmF2XHJcbiRzaWRlbmF2LXdpZHRoOiAyNDBweCAhZGVmYXVsdDtcclxuJHNpZGVuYXYtY29sbGFwc2VkLXdpZHRoOiA1MHB4ICFkZWZhdWx0O1xyXG4kc2lkZW5hdi13aWR0aC1tb2JpbGU6IDI4MHB4ICFkZWZhdWx0O1xyXG5cclxuLy8gVG9vbGJhclxyXG4kdG9vbGJhci1oZWlnaHQtZGVza3RvcDogNjRweCAhZGVmYXVsdDtcclxuJHRvb2xiYXItaGVpZ2h0LW1vYmlsZTogNTZweCAhZGVmYXVsdDtcclxuXHJcbi8vIFRvcG1lbnVcclxuJHRvcG1lbnUtc3RpY2t5LXBvc2l0aW9uLWRlc2t0b3A6ICR0b29sYmFyLWhlaWdodC1kZXNrdG9wICFkZWZhdWx0O1xyXG4kdG9wbWVudS1zdGlja3ktcG9zaXRpb24tbW9iaWxlOiAkdG9vbGJhci1oZWlnaHQtbW9iaWxlICFkZWZhdWx0O1xyXG5cclxuLy8gVHlwb2dyYXBoeVxyXG4kZm9udC1mYW1pbHktc2Fucy1zZXJpZjogJ1JvYm90bycsICdIZWx2ZXRpY2EgTmV1ZSBMaWdodCcsICdIZWx2ZXRpY2EgTmV1ZScsIEhlbHZldGljYSwgQXJpYWwsXHJcbiAgJ0x1Y2lkYSBHcmFuZGUnLCBzYW5zLXNlcmlmICFkZWZhdWx0O1xyXG4kZm9udC1mYW1pbHktbW9ub3NwYWNlOiAnUm9ib3RvIE1vbm8nLCBtb25vc3BhY2UgIWRlZmF1bHQ7XHJcbiRmb250LWZhbWlseS1iYXNlOiAkZm9udC1mYW1pbHktc2Fucy1zZXJpZiAhZGVmYXVsdDtcclxuXHJcbi8vIEJyZWFrcG9pbnRzXHJcbi8vXHJcbi8vIERlZmluZSB0aGUgbWluaW11bSBkaW1lbnNpb25zIGF0IHdoaWNoIHlvdXIgbGF5b3V0IHdpbGwgY2hhbmdlLFxyXG4vLyBhZGFwdGluZyB0byBkaWZmZXJlbnQgc2NyZWVuIHNpemVzLCBmb3IgdXNlIGluIG1lZGlhIHF1ZXJpZXMuXHJcbiRicmVha3BvaW50czogKFxyXG4gIHhzbWFsbDogMCxcclxuICBzbWFsbDogIDYwMHB4LFxyXG4gIG1lZGl1bTogOTYwcHgsXHJcbiAgbGFyZ2U6ICAxMjgwcHgsXHJcbiAgeGxhcmdlOiAxOTIwcHhcclxuKSAhZGVmYXVsdDtcclxuXHJcbi8vIE1hdGVyaWFsIGNvbG9yc1xyXG4kbWF0LWNvbG9yczogKFxyXG4gIHJlZDogbWF0LiRyZWQtcGFsZXR0ZSxcclxuICBwaW5rOiBtYXQuJHBpbmstcGFsZXR0ZSxcclxuICBwdXJwbGU6IG1hdC4kcHVycGxlLXBhbGV0dGUsXHJcbiAgZGVlcC1wdXJwbGU6IG1hdC4kZGVlcC1wdXJwbGUtcGFsZXR0ZSxcclxuICBpbmRpZ286IG1hdC4kaW5kaWdvLXBhbGV0dGUsXHJcbiAgYmx1ZTogbWF0LiRibHVlLXBhbGV0dGUsXHJcbiAgbGlnaHQtYmx1ZTogbWF0LiRsaWdodC1ibHVlLXBhbGV0dGUsXHJcbiAgY3lhbjogbWF0LiRjeWFuLXBhbGV0dGUsXHJcbiAgdGVhbDogbWF0LiR0ZWFsLXBhbGV0dGUsXHJcbiAgZ3JlZW46IG1hdC4kZ3JlZW4tcGFsZXR0ZSxcclxuICBsaWdodC1ncmVlbjogbWF0LiRsaWdodC1ncmVlbi1wYWxldHRlLFxyXG4gIGxpbWU6IG1hdC4kbGltZS1wYWxldHRlLFxyXG4gIHllbGxvdzogbWF0LiR5ZWxsb3ctcGFsZXR0ZSxcclxuICBhbWJlcjogbWF0LiRhbWJlci1wYWxldHRlLFxyXG4gIG9yYW5nZTogbWF0LiRvcmFuZ2UtcGFsZXR0ZSxcclxuICBkZWVwLW9yYW5nZTogbWF0LiRkZWVwLW9yYW5nZS1wYWxldHRlLFxyXG4gIGJyb3duOiBtYXQuJGJyb3duLXBhbGV0dGUsXHJcbiAgZ3JheTogbWF0LiRncmF5LXBhbGV0dGUsXHJcbiAgYmx1ZS1ncmF5OiBtYXQuJGJsdWUtZ3JheS1wYWxldHRlLFxyXG4gIHdoaXRlOiB3aGl0ZSxcclxuICBibGFjazogYmxhY2ssXHJcbiAgbGlnaHQ6IHdoaXRlLFxyXG4gIGRhcms6IHJnYmEoYmxhY2ssIC44NyksXHJcbikgIWRlZmF1bHQ7XHJcblxyXG4vLyBUaGUgbWF0ZXJpYWwgZGVmYXVsdCBhbmltYXRpb24gY3VydmVzXHJcbiRzd2lmdC1lYXNlLW91dC1kdXJhdGlvbjogNDAwbXMgIWRlZmF1bHQ7XHJcbiRzd2lmdC1lYXNlLW91dC10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllciguMjUsIC44LCAuMjUsIDEpICFkZWZhdWx0O1xyXG4iLCJAbWl4aW4gYmFkZ2UoKSB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIG1pbi13aWR0aDogMThweDtcclxuICBwYWRkaW5nOiAuMzVlbSAuNjVlbTtcclxuICBmb250LXNpemU6IC43NWVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM3NTc1NzU7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcbiJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdGhlbWUvc2lkZW1lbnUvc2lkZW1lbnUuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvYXBwL3RoZW1lL3N0eWxlL192YXJpYWJsZXMuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hcHAvdGhlbWUvc3R5bGUvX2JhZGdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUE7RUFDRSxZQ0NjO0VEQWQsVUFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtBQUhGO0FBS0U7RUFDRSxjQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7QUFISjtBQU1NO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtBQUpSO0FBT007RUFDRSwwQkFBQTtBQUxSO0FBVUU7RUFDRSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSx3R0FBQTtFQUNBLG1DQUFBO0FBUko7QUFXRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSw2QkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FBVEo7QUFZRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFWSjtBQVlJO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtBQVZOO0FBY0U7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSx3REFBQTtBQVpKO0FBZUU7RUFDRSxPQUFBO0VBQ0EsbUJBQUE7QUFiSjtBQWdCRTs7O0VBR0UsMERBQUE7QUFkSjtBQWlCRTs7RUUvRUEscUJBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esd0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FGa0VGO0FBT0U7RUFDRSxvQkFBQTtBQUxKO0FBUUU7RUFDRSxrQkFBQTtBQU5KO0FBUUk7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0FBTk47QUFVRTtFQUNFLGtCQUFBO0FBUko7QUFVSTtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7QUFSTjtBQVlFO0VBQ0Usa0JBQUE7QUFWSjtBQVlJO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtBQVZOO0FBQ0Esb2tQQUFva1AiLCJzb3VyY2VzQ29udGVudCI6WyJAdXNlICcuLi9zdHlsZS92YXJpYWJsZXMnO1xyXG5AdXNlICcuLi9zdHlsZS90cmFuc2l0aW9ucyc7XHJcbkB1c2UgJy4uL3N0eWxlL2JhZGdlJztcclxuXHJcbi5tYXRlcm8tc2lkZW1lbnUge1xyXG4gIHdpZHRoOiB2YXJpYWJsZXMuJHNpZGVuYXYtd2lkdGg7XHJcbiAgcGFkZGluZzogMDtcclxuICBtYXJnaW46IDA7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxuXHJcbiAgLm1lbnUtaXRlbSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIHBhZGRpbmc6IDA7XHJcblxyXG4gICAgJi5leHBhbmRlZCB7XHJcbiAgICAgID4gLnN1Ym1lbnUge1xyXG4gICAgICAgIG1heC1oZWlnaHQ6IDIwMDBweDtcclxuICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICA+IC5tZW51LXRvZ2dsZSA+IC5tZW51LWNhcmV0IHtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTgwZGVnKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJi5zdWJtZW51IHtcclxuICAgIG1heC1oZWlnaHQ6IDA7XHJcbiAgICBwYWRkaW5nLXRvcDogMDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2l0aW9ucy5mYXN0LW91dC1zbG93KG1heC1oZWlnaHQpLCB0cmFuc2l0aW9ucy5mYXN0LW91dC1zbG93KHZpc2liaWxpdHkpO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAubWVudS1oZWFkaW5nIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMTJweCAxNnB4O1xyXG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gIH1cclxuXHJcbiAgLm1hdC1pY29uLm1lbnUtaWNvbiB7XHJcbiAgICB3aWR0aDogMThweDtcclxuICAgIGhlaWdodDogMThweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTZweDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG5cclxuICAgIFtkaXI9J3J0bCddICYge1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAxNnB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLm1hdC1pY29uLm1lbnUtY2FyZXQge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2l0aW9ucy5mYXN0LW91dC1zbG93KHRyYW5zZm9ybSk7XHJcbiAgfVxyXG5cclxuICAubWVudS1uYW1lIHtcclxuICAgIGZsZXg6IDE7XHJcbiAgICB0ZXh0LWFsaWduOiBpbml0aWFsO1xyXG4gIH1cclxuXHJcbiAgLm1lbnUtbmFtZSxcclxuICAubWVudS1sYWJlbCxcclxuICAubWVudS1iYWRnZSB7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2l0aW9ucy5zd2lmdC1lYXNlLW91dChvcGFjaXR5KTtcclxuICB9XHJcblxyXG4gIC5tZW51LWxhYmVsLFxyXG4gIC5tZW51LWJhZGdlIHtcclxuICAgIEBpbmNsdWRlIGJhZGdlLmJhZGdlKCk7XHJcbiAgfVxyXG5cclxuICAubWVudS1iYWRnZSB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MHJlbTtcclxuICB9XHJcblxyXG4gICYubGV2ZWwtMSA+IGxpID4gLm1lbnUtaGVhZGluZyB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDUwcHg7XHJcblxyXG4gICAgW2Rpcj0ncnRsJ10gJiB7XHJcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDUwcHg7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogMTZweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICYubGV2ZWwtMiA+IGxpID4gLm1lbnUtaGVhZGluZyB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDY0cHg7XHJcblxyXG4gICAgW2Rpcj0ncnRsJ10gJiB7XHJcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDY0cHg7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogMTZweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICYubGV2ZWwtMiBbY2xhc3NePSdsZXZlbC0nXSA+IGxpID4gLm1lbnUtaGVhZGluZyB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDgwcHg7XHJcblxyXG4gICAgW2Rpcj0ncnRsJ10gJiB7XHJcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDgwcHg7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogMTZweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiQHVzZSAnQGFuZ3VsYXIvbWF0ZXJpYWwnIGFzIG1hdDtcclxuXHJcbi8vIExheW91dFxyXG4kZ3V0dGVyOiAxNnB4ICFkZWZhdWx0O1xyXG5cclxuLy8gU2lkZW5hdlxyXG4kc2lkZW5hdi13aWR0aDogMjQwcHggIWRlZmF1bHQ7XHJcbiRzaWRlbmF2LWNvbGxhcHNlZC13aWR0aDogNTBweCAhZGVmYXVsdDtcclxuJHNpZGVuYXYtd2lkdGgtbW9iaWxlOiAyODBweCAhZGVmYXVsdDtcclxuXHJcbi8vIFRvb2xiYXJcclxuJHRvb2xiYXItaGVpZ2h0LWRlc2t0b3A6IDY0cHggIWRlZmF1bHQ7XHJcbiR0b29sYmFyLWhlaWdodC1tb2JpbGU6IDU2cHggIWRlZmF1bHQ7XHJcblxyXG4vLyBUb3BtZW51XHJcbiR0b3BtZW51LXN0aWNreS1wb3NpdGlvbi1kZXNrdG9wOiAkdG9vbGJhci1oZWlnaHQtZGVza3RvcCAhZGVmYXVsdDtcclxuJHRvcG1lbnUtc3RpY2t5LXBvc2l0aW9uLW1vYmlsZTogJHRvb2xiYXItaGVpZ2h0LW1vYmlsZSAhZGVmYXVsdDtcclxuXHJcbi8vIFR5cG9ncmFwaHlcclxuJGZvbnQtZmFtaWx5LXNhbnMtc2VyaWY6ICdSb2JvdG8nLCAnSGVsdmV0aWNhIE5ldWUgTGlnaHQnLCAnSGVsdmV0aWNhIE5ldWUnLCBIZWx2ZXRpY2EsIEFyaWFsLFxyXG4gICdMdWNpZGEgR3JhbmRlJywgc2Fucy1zZXJpZiAhZGVmYXVsdDtcclxuJGZvbnQtZmFtaWx5LW1vbm9zcGFjZTogJ1JvYm90byBNb25vJywgbW9ub3NwYWNlICFkZWZhdWx0O1xyXG4kZm9udC1mYW1pbHktYmFzZTogJGZvbnQtZmFtaWx5LXNhbnMtc2VyaWYgIWRlZmF1bHQ7XHJcblxyXG4vLyBCcmVha3BvaW50c1xyXG4vL1xyXG4vLyBEZWZpbmUgdGhlIG1pbmltdW0gZGltZW5zaW9ucyBhdCB3aGljaCB5b3VyIGxheW91dCB3aWxsIGNoYW5nZSxcclxuLy8gYWRhcHRpbmcgdG8gZGlmZmVyZW50IHNjcmVlbiBzaXplcywgZm9yIHVzZSBpbiBtZWRpYSBxdWVyaWVzLlxyXG4kYnJlYWtwb2ludHM6IChcclxuICB4c21hbGw6IDAsXHJcbiAgc21hbGw6ICA2MDBweCxcclxuICBtZWRpdW06IDk2MHB4LFxyXG4gIGxhcmdlOiAgMTI4MHB4LFxyXG4gIHhsYXJnZTogMTkyMHB4XHJcbikgIWRlZmF1bHQ7XHJcblxyXG4vLyBNYXRlcmlhbCBjb2xvcnNcclxuJG1hdC1jb2xvcnM6IChcclxuICByZWQ6IG1hdC4kcmVkLXBhbGV0dGUsXHJcbiAgcGluazogbWF0LiRwaW5rLXBhbGV0dGUsXHJcbiAgcHVycGxlOiBtYXQuJHB1cnBsZS1wYWxldHRlLFxyXG4gIGRlZXAtcHVycGxlOiBtYXQuJGRlZXAtcHVycGxlLXBhbGV0dGUsXHJcbiAgaW5kaWdvOiBtYXQuJGluZGlnby1wYWxldHRlLFxyXG4gIGJsdWU6IG1hdC4kYmx1ZS1wYWxldHRlLFxyXG4gIGxpZ2h0LWJsdWU6IG1hdC4kbGlnaHQtYmx1ZS1wYWxldHRlLFxyXG4gIGN5YW46IG1hdC4kY3lhbi1wYWxldHRlLFxyXG4gIHRlYWw6IG1hdC4kdGVhbC1wYWxldHRlLFxyXG4gIGdyZWVuOiBtYXQuJGdyZWVuLXBhbGV0dGUsXHJcbiAgbGlnaHQtZ3JlZW46IG1hdC4kbGlnaHQtZ3JlZW4tcGFsZXR0ZSxcclxuICBsaW1lOiBtYXQuJGxpbWUtcGFsZXR0ZSxcclxuICB5ZWxsb3c6IG1hdC4keWVsbG93LXBhbGV0dGUsXHJcbiAgYW1iZXI6IG1hdC4kYW1iZXItcGFsZXR0ZSxcclxuICBvcmFuZ2U6IG1hdC4kb3JhbmdlLXBhbGV0dGUsXHJcbiAgZGVlcC1vcmFuZ2U6IG1hdC4kZGVlcC1vcmFuZ2UtcGFsZXR0ZSxcclxuICBicm93bjogbWF0LiRicm93bi1wYWxldHRlLFxyXG4gIGdyYXk6IG1hdC4kZ3JheS1wYWxldHRlLFxyXG4gIGJsdWUtZ3JheTogbWF0LiRibHVlLWdyYXktcGFsZXR0ZSxcclxuICB3aGl0ZTogd2hpdGUsXHJcbiAgYmxhY2s6IGJsYWNrLFxyXG4gIGxpZ2h0OiB3aGl0ZSxcclxuICBkYXJrOiByZ2JhKGJsYWNrLCAuODcpLFxyXG4pICFkZWZhdWx0O1xyXG5cclxuLy8gVGhlIG1hdGVyaWFsIGRlZmF1bHQgYW5pbWF0aW9uIGN1cnZlc1xyXG4kc3dpZnQtZWFzZS1vdXQtZHVyYXRpb246IDQwMG1zICFkZWZhdWx0O1xyXG4kc3dpZnQtZWFzZS1vdXQtdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoLjI1LCAuOCwgLjI1LCAxKSAhZGVmYXVsdDtcclxuIiwiQG1peGluIGJhZGdlKCkge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBtaW4td2lkdGg6IDE4cHg7XHJcbiAgcGFkZGluZzogLjM1ZW0gLjY1ZW07XHJcbiAgZm9udC1zaXplOiAuNzVlbTtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGxpbmUtaGVpZ2h0OiAxO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzU3NTc1O1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"],
  encapsulation: 2
});

/***/ }),

/***/ 5379:
/*!***************************************!*\
  !*** ./src/app/theme/theme.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ThemeModule: () => (/* binding */ ThemeModule)
/* harmony export */ });
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/shared.module */ 6208);
/* harmony import */ var _admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin-layout/admin-layout.component */ 894);
/* harmony import */ var _auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth-layout/auth-layout.component */ 8095);
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sidebar/sidebar.component */ 7428);
/* harmony import */ var _sidebar_user_panel_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sidebar/user-panel.component */ 1170);
/* harmony import */ var _sidemenu_sidemenu_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sidemenu/sidemenu.component */ 8015);
/* harmony import */ var _sidemenu_nav_accordion_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sidemenu/nav-accordion.directive */ 4237);
/* harmony import */ var _sidemenu_nav_accordion_item_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sidemenu/nav-accordion-item.directive */ 8465);
/* harmony import */ var _sidemenu_nav_accordion_toggle_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sidemenu/nav-accordion-toggle.directive */ 7427);
/* harmony import */ var _sidebar_notice_sidebar_notice_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./sidebar-notice/sidebar-notice.component */ 9235);
/* harmony import */ var _topmenu_topmenu_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./topmenu/topmenu.component */ 2931);
/* harmony import */ var _topmenu_topmenu_panel_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./topmenu/topmenu-panel.component */ 7867);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./header/header.component */ 6167);
/* harmony import */ var _widgets_branding_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./widgets/branding.component */ 194);
/* harmony import */ var _widgets_notification_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./widgets/notification.component */ 8027);
/* harmony import */ var _widgets_translate_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./widgets/translate.component */ 6857);
/* harmony import */ var _widgets_user_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./widgets/user.component */ 9971);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/button */ 895);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/icon */ 6515);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/menu */ 8128);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/tabs */ 989);
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ngx-permissions */ 7439);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @ngx-translate/core */ 5939);


























class ThemeModule {}
ThemeModule.ɵfac = function ThemeModule_Factory(t) {
  return new (t || ThemeModule)();
};
ThemeModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineNgModule"]({
  type: ThemeModule
});
ThemeModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineInjector"]({
  imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵsetNgModuleScope"](ThemeModule, {
    declarations: [_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_1__.AdminLayoutComponent, _auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_2__.AuthLayoutComponent, _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__.SidebarComponent, _sidebar_user_panel_component__WEBPACK_IMPORTED_MODULE_4__.UserPanelComponent, _sidemenu_sidemenu_component__WEBPACK_IMPORTED_MODULE_5__.SidemenuComponent, _sidemenu_nav_accordion_directive__WEBPACK_IMPORTED_MODULE_6__.NavAccordionDirective, _sidemenu_nav_accordion_item_directive__WEBPACK_IMPORTED_MODULE_7__.NavAccordionItemDirective, _sidemenu_nav_accordion_toggle_directive__WEBPACK_IMPORTED_MODULE_8__.NavAccordionToggleDirective, _sidebar_notice_sidebar_notice_component__WEBPACK_IMPORTED_MODULE_9__.SidebarNoticeComponent, _topmenu_topmenu_component__WEBPACK_IMPORTED_MODULE_10__.TopmenuComponent, _topmenu_topmenu_panel_component__WEBPACK_IMPORTED_MODULE_11__.TopmenuPanelComponent, _header_header_component__WEBPACK_IMPORTED_MODULE_12__.HeaderComponent, _widgets_branding_component__WEBPACK_IMPORTED_MODULE_13__.BrandingComponent, _widgets_notification_component__WEBPACK_IMPORTED_MODULE_14__.NotificationComponent, _widgets_translate_component__WEBPACK_IMPORTED_MODULE_15__.TranslateComponent, _widgets_user_component__WEBPACK_IMPORTED_MODULE_16__.UserComponent],
    imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule]
  });
})();
_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵsetComponentScope"](_topmenu_topmenu_component__WEBPACK_IMPORTED_MODULE_10__.TopmenuComponent, [_angular_common__WEBPACK_IMPORTED_MODULE_18__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_18__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_18__.NgTemplateOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_19__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_19__.RouterLinkActive, _angular_material_button__WEBPACK_IMPORTED_MODULE_20__.MatAnchor, _angular_material_button__WEBPACK_IMPORTED_MODULE_20__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__.MatIcon, _angular_material_menu__WEBPACK_IMPORTED_MODULE_22__.MatMenuTrigger, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_23__.MatTabNav, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_23__.MatTabNavPanel, ngx_permissions__WEBPACK_IMPORTED_MODULE_24__.NgxPermissionsDirective, _topmenu_topmenu_panel_component__WEBPACK_IMPORTED_MODULE_11__.TopmenuPanelComponent], [_angular_common__WEBPACK_IMPORTED_MODULE_18__.AsyncPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_25__.TranslatePipe]);

/***/ }),

/***/ 7867:
/*!**********************************************************!*\
  !*** ./src/app/theme/topmenu/topmenu-panel.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TopmenuPanelComponent: () => (/* binding */ TopmenuPanelComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/menu */ 8128);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core */ 9076);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 1523);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 4520);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ 6515);
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-permissions */ 7439);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 5939);














const _c0 = function (a0) {
  return [a0];
};
function TopmenuPanelComponent_ng_container_1_ng_template_1_a_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 7, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TopmenuPanelComponent_ng_container_1_ng_template_1_a_0_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10);
      const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](1);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r9.onRouterLinkClick(_r8));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](1);
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", _r8.isActive);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", ctx_r4.buildRoute(ctx_r4.parentRoute.concat(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](6, _c0, item_r1.route))));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 4, item_r1.name), " ");
  }
}
function TopmenuPanelComponent_ng_container_1_ng_template_1_a_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 9)(1, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "launch");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", item_r1.route, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 2, item_r1.name));
  }
}
function TopmenuPanelComponent_ng_container_1_ng_template_1_a_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 11)(1, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "launch");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", item_r1.route, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 2, item_r1.name));
  }
}
function TopmenuPanelComponent_ng_container_1_ng_template_1_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "app-topmenu-panel", 13, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("routeChange", function TopmenuPanelComponent_ng_container_1_ng_template_1_button_3_Template_app_topmenu_panel_routeChange_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r17);
      const index_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).index;
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r15.onRouteChange($event, index_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](4);
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    const index_r2 = ctx_r18.index;
    const item_r1 = ctx_r18.$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", ctx_r7.menuStates[index_r2].active);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matMenuTriggerFor", _r14.menuPanel);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 7, item_r1.name), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("items", item_r1.children)("parentRoute", ctx_r7.parentRoute.concat(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](9, _c0, item_r1.route)))("level", ctx_r7.level + 1);
  }
}
function TopmenuPanelComponent_ng_container_1_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, TopmenuPanelComponent_ng_container_1_ng_template_1_a_0_Template, 4, 8, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TopmenuPanelComponent_ng_container_1_ng_template_1_a_1_Template, 6, 4, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, TopmenuPanelComponent_ng_container_1_ng_template_1_a_2_Template, 6, 4, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, TopmenuPanelComponent_ng_container_1_ng_template_1_button_3_Template, 5, 11, "button", 6);
  }
  if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r1.type === "link");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r1.type === "extLink");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r1.type === "extTabLink");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r1.type === "sub");
  }
}
function TopmenuPanelComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TopmenuPanelComponent_ng_container_1_ng_template_1_Template, 4, 4, "ng-template", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngxPermissionsOnly", item_r1.permissions == null ? null : item_r1.permissions.only)("ngxPermissionsExcept", item_r1.permissions == null ? null : item_r1.permissions.except);
  }
}
class TopmenuPanelComponent {
  constructor(menu, router) {
    this.menu = menu;
    this.router = router;
    this.items = [];
    this.parentRoute = [];
    this.level = 1;
    this.routeChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.menuStates = [];
    this.buildRoute = this.menu.buildRoute;
    this.routerSubscription = rxjs__WEBPACK_IMPORTED_MODULE_2__.Subscription.EMPTY;
  }
  ngOnInit() {
    this.items.forEach(item => {
      this.menuStates.push({
        active: this.checkRoute(item),
        route: item.route
      });
    });
  }
  ngOnDestroy() {
    this.routerSubscription.unsubscribe();
  }
  checkRoute(item) {
    if (!item.route) {
      return this.checkChildRoute(item.children);
    } else {
      return this.router.url.split('/').includes(item.route);
    }
  }
  checkChildRoute(menuItems = []) {
    return menuItems.some(child => {
      if (this.router.url.split('/').includes(child.route)) {
        return true;
      }
      if (!child.route && child.children) {
        this.checkChildRoute(child.children);
      }
      return false;
    });
  }
  onRouterLinkClick(rla) {
    this.routeChange.emit(rla);
  }
  onRouteChange(rla, index) {
    this.routeChange.emit(rla);
    this.routerSubscription.unsubscribe();
    this.routerSubscription = this.router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__.NavigationEnd)).subscribe(e => {
      this.menuStates.forEach(item => item.active = false);
      setTimeout(() => this.menuStates[index].active = rla.isActive);
    });
  }
}
TopmenuPanelComponent.ɵfac = function TopmenuPanelComponent_Factory(t) {
  return new (t || TopmenuPanelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core__WEBPACK_IMPORTED_MODULE_0__.MenuService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router));
};
TopmenuPanelComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: TopmenuPanelComponent,
  selectors: [["app-topmenu-panel"]],
  viewQuery: function TopmenuPanelComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_angular_material_menu__WEBPACK_IMPORTED_MODULE_5__.MatMenu, 7);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.menuPanel = _t.first);
    }
  },
  inputs: {
    items: "items",
    parentRoute: "parentRoute",
    level: "level"
  },
  outputs: {
    routeChange: "routeChange"
  },
  decls: 2,
  vars: 1,
  consts: [[1, "matero-topmenu-panel"], [4, "ngFor", "ngForOf"], [3, "ngxPermissionsOnly", "ngxPermissionsExcept"], ["mat-menu-item", "", "routerLinkActive", "", 3, "routerLink", "active", "click", 4, "ngIf"], ["mat-menu-item", "", 3, "href", 4, "ngIf"], ["mat-menu-item", "", "target", "_blank", 3, "href", 4, "ngIf"], ["mat-menu-item", "", "routerLinkActive", "active", 3, "matMenuTriggerFor", "active", 4, "ngIf"], ["mat-menu-item", "", "routerLinkActive", "", 3, "routerLink", "click"], ["rla", "routerLinkActive"], ["mat-menu-item", "", 3, "href"], [1, "menu-name"], ["mat-menu-item", "", "target", "_blank", 3, "href"], ["mat-menu-item", "", "routerLinkActive", "active", 3, "matMenuTriggerFor"], [3, "items", "parentRoute", "level", "routeChange"], ["submenu", ""]],
  template: function TopmenuPanelComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-menu", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TopmenuPanelComponent_ng_container_1_Template, 2, 2, "ng-container", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.items);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkActive, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIcon, _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__.MatMenuItem, _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__.MatMenuTrigger, ngx_permissions__WEBPACK_IMPORTED_MODULE_8__.NgxPermissionsDirective, TopmenuPanelComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslatePipe],
  encapsulation: 2
});

/***/ }),

/***/ 2931:
/*!****************************************************!*\
  !*** ./src/app/theme/topmenu/topmenu.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TopmenuComponent: () => (/* binding */ TopmenuComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core */ 9076);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 1523);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 4520);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);







const _c0 = function (a0) {
  return [a0];
};
const _c1 = function (a0) {
  return {
    item: a0
  };
};
function TopmenuComponent_ng_container_1_ng_template_1_a_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](1, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const menuItem_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", ctx_r7.buildRoute(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](3, _c0, menuItem_r4.route)));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", _r2)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](5, _c1, menuItem_r4));
  }
}
function TopmenuComponent_ng_container_1_ng_template_1_a_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](1, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const menuItem_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", menuItem_r4.route, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", _r2)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](3, _c1, menuItem_r4));
  }
}
function TopmenuComponent_ng_container_1_ng_template_1_a_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](1, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const menuItem_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", menuItem_r4.route, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", _r2)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](3, _c1, menuItem_r4));
  }
}
function TopmenuComponent_ng_container_1_ng_template_1_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](1, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "app-topmenu-panel", 14, 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("routeChange", function TopmenuComponent_ng_container_1_ng_template_1_button_3_Template_app_topmenu_panel_routeChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r17);
      const index_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).index;
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r15.onRouteChange($event, index_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](3);
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    const index_r5 = ctx_r18.index;
    const menuItem_r4 = ctx_r18.$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", ctx_r10.menuStates[index_r5].active);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matMenuTriggerFor", _r14.menuPanel);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", _r2)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](8, _c1, menuItem_r4));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("items", menuItem_r4.children)("parentRoute", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](10, _c0, menuItem_r4.route))("level", 1);
  }
}
function TopmenuComponent_ng_container_1_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, TopmenuComponent_ng_container_1_ng_template_1_a_0_Template, 2, 7, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TopmenuComponent_ng_container_1_ng_template_1_a_1_Template, 2, 5, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, TopmenuComponent_ng_container_1_ng_template_1_a_2_Template, 2, 5, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, TopmenuComponent_ng_container_1_ng_template_1_button_3_Template, 4, 12, "button", 8);
  }
  if (rf & 2) {
    const menuItem_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", menuItem_r4.type === "link");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", menuItem_r4.type === "extLink");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", menuItem_r4.type === "extTabLink");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", menuItem_r4.type === "sub");
  }
}
function TopmenuComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TopmenuComponent_ng_container_1_ng_template_1_Template, 4, 4, "ng-template", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const menuItem_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngxPermissionsOnly", menuItem_r4.permissions == null ? null : menuItem_r4.permissions.only)("ngxPermissionsExcept", menuItem_r4.permissions == null ? null : menuItem_r4.permissions.except);
  }
}
function TopmenuComponent_ng_template_5_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().item;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("menu-label bg-", item_r20.label.color, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r20.label.value);
  }
}
function TopmenuComponent_ng_template_5_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().item;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("menu-badge bg-", item_r20.badge.color, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r20.badge.value);
  }
}
function TopmenuComponent_ng_template_5_mat_icon_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-icon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().item;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r20.type === "sub" ? "arrow_drop_down" : "launch", " ");
  }
}
function TopmenuComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, TopmenuComponent_ng_template_5_span_5_Template, 2, 4, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, TopmenuComponent_ng_template_5_span_6_Template, 2, 4, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, TopmenuComponent_ng_template_5_mat_icon_7_Template, 2, 1, "mat-icon", 19);
  }
  if (rf & 2) {
    const item_r20 = ctx.item;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r20.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 5, item_r20.name));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r20.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r20.badge);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r20.type !== "link");
  }
}
class TopmenuComponent {
  constructor(menu, router) {
    this.menu = menu;
    this.router = router;
    this.class = 'matero-topmenu';
    this.menu$ = this.menu.getAll();
    this.buildRoute = this.menu.buildRoute;
    this.menuList = [];
    this.menuStates = [];
    this.menuSubscription = rxjs__WEBPACK_IMPORTED_MODULE_2__.Subscription.EMPTY;
    this.routerSubscription = rxjs__WEBPACK_IMPORTED_MODULE_2__.Subscription.EMPTY;
    this.menuSubscription = this.menu$.subscribe(res => {
      this.menuList = res;
      this.menuList.forEach(item => {
        this.menuStates.push({
          active: this.router.url.split('/').includes(item.route),
          route: item.route
        });
      });
    });
  }
  ngOnDestroy() {
    this.menuSubscription.unsubscribe();
    this.routerSubscription.unsubscribe();
  }
  onRouteChange(rla, index) {
    this.routerSubscription.unsubscribe();
    this.routerSubscription = this.router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__.NavigationEnd)).subscribe(e => {
      this.menuStates.forEach(item => item.active = false);
      setTimeout(() => this.menuStates[index].active = rla.isActive);
    });
  }
}
TopmenuComponent.ɵfac = function TopmenuComponent_Factory(t) {
  return new (t || TopmenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core__WEBPACK_IMPORTED_MODULE_0__.MenuService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router));
};
TopmenuComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: TopmenuComponent,
  selectors: [["app-topmenu"]],
  hostVars: 2,
  hostBindings: function TopmenuComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx.class);
    }
  },
  decls: 7,
  vars: 4,
  consts: [["mat-tab-nav-bar", "", 3, "tabPanel"], [4, "ngFor", "ngForOf"], ["tabPanel", ""], ["linkTypeTpl", ""], [3, "ngxPermissionsOnly", "ngxPermissionsExcept"], ["mat-button", "", "routerLinkActive", "active", 3, "routerLink", 4, "ngIf"], ["mat-button", "", 3, "href", 4, "ngIf"], ["mat-button", "", "target", "_blank", 3, "href", 4, "ngIf"], ["mat-button", "", "routerLinkActive", "active", 3, "matMenuTriggerFor", "active", 4, "ngIf"], ["mat-button", "", "routerLinkActive", "active", 3, "routerLink"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["mat-button", "", 3, "href"], ["mat-button", "", "target", "_blank", 3, "href"], ["mat-button", "", "routerLinkActive", "active", 3, "matMenuTriggerFor"], [3, "items", "parentRoute", "level", "routeChange"], ["submenu", ""], [1, "menu-icon"], [1, "menu-name"], [3, "class", 4, "ngIf"], ["class", "menu-caret", 4, "ngIf"], [1, "menu-caret"]],
  template: function TopmenuComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nav", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TopmenuComponent_ng_container_1_Template, 2, 2, "ng-container", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "mat-tab-nav-panel", null, 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, TopmenuComponent_ng_template_5_Template, 8, 7, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    }
    if (rf & 2) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("tabPanel", _r1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 2, ctx.menu$));
    }
  },
  styles: [".matero-topmenu {\n  position: sticky;\n  z-index: 200;\n  display: block;\n  padding: 8px;\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n}\n.matero-topmenu .mat-mdc-button-base {\n  padding: 0 16px;\n  white-space: nowrap;\n}\n.matero-topmenu .menu-icon,\n.matero-topmenu .menu-caret,\n.matero-topmenu .menu-name {\n  vertical-align: middle;\n}\n.matero-topmenu .mat-icon.menu-icon {\n  width: 18px;\n  height: 18px;\n  margin-right: 8px;\n  font-size: 18px;\n  line-height: 18px;\n}\n[dir=rtl] .matero-topmenu .mat-icon.menu-icon {\n  margin-right: auto;\n  margin-left: 8px;\n}\n.matero-topmenu .mat-icon.menu-caret {\n  margin-right: -8px;\n}\n[dir=rtl] .matero-topmenu .mat-icon.menu-caret {\n  margin-right: auto;\n  margin-left: -8px;\n}\n.matero-topmenu .menu-label,\n.matero-topmenu .menu-badge {\n  display: inline-block;\n  min-width: 18px;\n  padding: 0.35em 0.65em;\n  font-size: 0.75em;\n  font-weight: 700;\n  line-height: 1;\n  color: #fff;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: baseline;\n  background-color: #757575;\n  border-radius: 4px;\n  margin-left: 8px;\n  font-size: 12px;\n}\n[dir=rtl] .matero-topmenu .menu-label,\n[dir=rtl] .matero-topmenu .menu-badge {\n  margin-right: 8px;\n  margin-left: auto;\n}\n.matero-topmenu .menu-badge {\n  border-radius: 50rem;\n}\n.matero-topmenu .mat-tab-nav-bar,\n.matero-topmenu .mat-tab-header {\n  border-bottom: none;\n}\n\n.matero-topmenu-panel .mat-menu-item .menu-name {\n  margin-right: 8px;\n  vertical-align: middle;\n}\n[dir=rtl] .matero-topmenu-panel .mat-menu-item .menu-name {\n  margin-right: auto;\n  margin-left: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvcG1lbnUuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcbm9kZV9tb2R1bGVzXFxAbWF0ZXJpYWxcXHRoZW1lXFxfY3NzLnNjc3MiLCIuLlxcc3R5bGVcXF9iYWRnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUN1RUUseUhBQUE7QUR4RUo7QUFLRTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtBQUhKO0FBTUU7OztFQUdFLHNCQUFBO0FBSko7QUFPRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFMSjtBQU9JO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtBQUxOO0FBU0U7RUFDRSxrQkFBQTtBQVBKO0FBU0k7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0FBUE47QUFXRTs7RUUzQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esd0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VGb0NFLGdCQUFBO0VBQ0EsZUFBQTtBQUNKO0FBQ0k7O0VBQ0UsaUJBQUE7RUFDQSxpQkFBQTtBQUVOO0FBRUU7RUFDRSxvQkFBQTtBQUFKO0FBR0U7O0VBRUUsbUJBQUE7QUFESjs7QUFPSTtFQUNFLGlCQUFBO0VBQ0Esc0JBQUE7QUFKTjtBQU1NO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtBQUpSIiwiZmlsZSI6InRvcG1lbnUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAdXNlICdAYW5ndWxhci9tYXRlcmlhbCcgYXMgbWF0O1xyXG5AdXNlICcuLi9zdHlsZS9iYWRnZSc7XHJcblxyXG4ubWF0ZXJvLXRvcG1lbnUge1xyXG4gIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgei1pbmRleDogMjAwO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHBhZGRpbmc6IDhweDtcclxuXHJcbiAgQGluY2x1ZGUgbWF0LmVsZXZhdGlvbigyKTtcclxuXHJcbiAgLm1hdC1tZGMtYnV0dG9uLWJhc2Uge1xyXG4gICAgcGFkZGluZzogMCAxNnB4O1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICB9XHJcblxyXG4gIC5tZW51LWljb24sXHJcbiAgLm1lbnUtY2FyZXQsXHJcbiAgLm1lbnUtbmFtZSB7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gIH1cclxuXHJcbiAgLm1hdC1pY29uLm1lbnUtaWNvbiB7XHJcbiAgICB3aWR0aDogMThweDtcclxuICAgIGhlaWdodDogMThweDtcclxuICAgIG1hcmdpbi1yaWdodDogOHB4O1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcblxyXG4gICAgW2Rpcj0ncnRsJ10gJiB7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgICAgbWFyZ2luLWxlZnQ6IDhweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5tYXQtaWNvbi5tZW51LWNhcmV0IHtcclxuICAgIG1hcmdpbi1yaWdodDogLThweDtcclxuXHJcbiAgICBbZGlyPSdydGwnXSAmIHtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgICBtYXJnaW4tbGVmdDogLThweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5tZW51LWxhYmVsLFxyXG4gIC5tZW51LWJhZGdlIHtcclxuICAgIEBpbmNsdWRlIGJhZGdlLmJhZGdlKCk7XHJcblxyXG4gICAgbWFyZ2luLWxlZnQ6IDhweDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuXHJcbiAgICBbZGlyPSdydGwnXSAmIHtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLm1lbnUtYmFkZ2Uge1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTByZW07XHJcbiAgfVxyXG5cclxuICAubWF0LXRhYi1uYXYtYmFyLFxyXG4gIC5tYXQtdGFiLWhlYWRlciB7XHJcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xyXG4gIH1cclxufVxyXG5cclxuLm1hdGVyby10b3BtZW51LXBhbmVsIHtcclxuICAubWF0LW1lbnUtaXRlbSB7XHJcbiAgICAubWVudS1uYW1lIHtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbiAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcblxyXG4gICAgICBbZGlyPSdydGwnXSAmIHtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDhweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIvL1xuLy8gQ29weXJpZ2h0IDIwMjAgR29vZ2xlIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuLy9cblxuQHVzZSAnc2FzczpsaXN0JztcbkB1c2UgJ3Nhc3M6bWFwJztcbkB1c2UgJ3Nhc3M6bWV0YSc7XG5AdXNlICcuL2dzcyc7XG5cbi8vLyBXaGVuIHRydWUsIGFkZCBhbiBhZGRpdGlvbmFsIHByb3BlcnR5L3ZhbHVlIGRlY2xhcmF0aW9uIGJlZm9yZSBkZWNsYXJhdGlvbnNcbi8vLyB0aGF0IHVzZSBhZHZhbmNlZCBmZWF0dXJlcyBzdWNoIGFzIGN1c3RvbSBwcm9wZXJ0aWVzIG9yIENTUyBmdW5jdGlvbnMuIFRoaXNcbi8vLyBhZGRzIGZhbGxiYWNrIHN1cHBvcnQgZm9yIG9sZGVyIGJyb3dzZXJzIHN1Y2ggYXMgSUUxMSB0aGF0IGRvIG5vdCBzdXBwb3J0XG4vLy8gdGhlc2UgZmVhdHVyZXMgYXQgdGhlIGNvc3Qgb2YgYWRkaXRpb25hbCBDU1MuIFNldCB0aGlzIHZhcmlhYmxlIHRvIGZhbHNlIHRvXG4vLy8gZGlzYWJsZSBnZW5lcmF0aW5nIGZhbGxiYWNrIGRlY2xhcmF0aW9ucy5cbiRlbmFibGUtZmFsbGJhY2stZGVjbGFyYXRpb25zOiB0cnVlICFkZWZhdWx0O1xuXG4vLy8gV3JpdGVzIGEgQ1NTIHByb3BlcnR5L3ZhbHVlIGRlY2xhcmF0aW9uLiBUaGlzIG1peGluIGlzIHVzZWQgdGhyb3VnaG91dCB0aGVcbi8vLyB0aGVtZSBwYWNrYWdlIGZvciBjb25zaXN0ZW5jeSBmb3IgZHluYW1pY2FsbHkgc2V0dGluZyBDU1MgcHJvcGVydHkgdmFsdWVzLlxuLy8vXG4vLy8gVGhpcyBtaXhpbiBtYXkgb3B0aW9uYWxseSB0YWtlIGEgZmFsbGJhY2sgdmFsdWUuIEZvciBhZHZhbmNlZCBmZWF0dXJlcyBzdWNoXG4vLy8gYXMgY3VzdG9tIHByb3BlcnRpZXMgb3IgQ1NTIGZ1bmN0aW9ucyBsaWtlIG1pbiBhbmQgbWF4LCBhIGZhbGxiYWNrIHZhbHVlIGlzXG4vLy8gcmVjb21tZW5kZWQgdG8gc3VwcG9ydCBvbGRlciBicm93c2Vycy5cbi8vL1xuLy8vIEBwYXJhbSB7U3RyaW5nfSAkcHJvcGVydHkgLSBUaGUgQ1NTIHByb3BlcnR5IG9mIHRoZSBkZWNsYXJhdGlvbi5cbi8vLyBAcGFyYW0geyp9ICR2YWx1ZSAtIFRoZSB2YWx1ZSBvZiB0aGUgQ1NTIGRlY2xhcmF0aW9uLiBUaGUgdmFsdWUgc2hvdWxkIGJlXG4vLy8gICAgIHJlc29sdmVkIGJ5IG90aGVyIHRoZW1lIGZ1bmN0aW9ucyBmaXJzdCAoaS5lLiBjdXN0b20gcHJvcGVydHkgTWFwcyBhbmRcbi8vLyAgICAgTWF0ZXJpYWwgdGhlbWUga2V5cyBhcmUgbm90IHN1cHBvcnRlZCBpbiB0aGlzIG1peGluKS4gSWYgdGhlIHZhbHVlIGlzXG4vLy8gICAgIG51bGwsIG5vIGRlY2xhcmF0aW9ucyB3aWxsIGJlIGVtaXR0ZWQuXG4vLy8gQHBhcmFtIHsqfSAkZmFsbGJhY2sgLSBBbiBvcHRpb25hbCBmYWxsYmFjayB2YWx1ZSBmb3Igb2xkZXIgYnJvd3NlcnMuIElmXG4vLy8gICAgIHByb3ZpZGVkLCBhIHNlY29uZCBwcm9wZXJ0eS92YWx1ZSBkZWNsYXJhdGlvbiB3aWxsIGJlIGFkZGVkIGJlZm9yZSB0aGVcbi8vLyAgICAgbWFpbiBwcm9wZXJ0eS92YWx1ZSBkZWNsYXJhdGlvbi5cbi8vLyBAcGFyYW0ge01hcH0gJGdzcyAtIEFuIG9wdGlvbmFsIE1hcCBvZiBHU1MgYW5ub3RhdGlvbnMgdG8gYWRkLlxuLy8vIEBwYXJhbSB7Qm9vbH0gJGltcG9ydGFudCAtIElmIHRydWUsIGFkZCBgIWltcG9ydGFudGAgdG8gdGhlIGRlY2xhcmF0aW9uLlxuQG1peGluIGRlY2xhcmF0aW9uKFxuICAkcHJvcGVydHksXG4gICR2YWx1ZSxcbiAgJGZhbGxiYWNrLXZhbHVlOiBudWxsLFxuICAkZ3NzOiAoKSxcbiAgJGltcG9ydGFudDogZmFsc2Vcbikge1xuICAvLyBOb3JtYWxseSBzZXR0aW5nIGEgbnVsbCB2YWx1ZSB0byBhIHByb3BlcnR5IHdpbGwgbm90IGVtaXQgQ1NTLCBzbyBtaXhpbnNcbiAgLy8gd291bGRuJ3QgbmVlZCB0byBjaGVjayB0aGlzLiBIb3dldmVyLCBTYXNzIHdpbGwgdGhyb3cgYW4gZXJyb3IgaWYgdGhlXG4gIC8vIGludGVycG9sYXRlZCBwcm9wZXJ0eSBpcyBhIGN1c3RvbSBwcm9wZXJ0eS5cbiAgQGlmICR2YWx1ZSAhPSBudWxsIHtcbiAgICAkaW1wb3J0YW50LXJ1bGU6IGlmKCRpbXBvcnRhbnQsICcgIWltcG9ydGFudCcsICcnKTtcblxuICAgIEBpZiAkZmFsbGJhY2stdmFsdWUgYW5kICRlbmFibGUtZmFsbGJhY2stZGVjbGFyYXRpb25zIHtcbiAgICAgIEBpbmNsdWRlIGdzcy5hbm5vdGF0ZSgkZ3NzKTtcbiAgICAgICN7JHByb3BlcnR5fTogI3skZmFsbGJhY2stdmFsdWV9ICN7JGltcG9ydGFudC1ydWxlfTtcblxuICAgICAgLy8gQWRkIEBhbHRlcm5hdGUgdG8gYW5ub3RhdGlvbnMuXG4gICAgICAkZ3NzOiBtYXAubWVyZ2UoXG4gICAgICAgICRnc3MsXG4gICAgICAgIChcbiAgICAgICAgICBhbHRlcm5hdGU6IHRydWUsXG4gICAgICAgIClcbiAgICAgICk7XG4gICAgfVxuXG4gICAgQGluY2x1ZGUgZ3NzLmFubm90YXRlKCRnc3MpO1xuICAgICN7JHByb3BlcnR5fTogI3skdmFsdWV9I3skaW1wb3J0YW50LXJ1bGV9O1xuICB9XG59XG5cbi8vLyBVbnBhY2tzIHNob3J0aGFuZCB2YWx1ZXMgZm9yIENTUyBwcm9wZXJ0aWVzIChpLmUuIGxpc3RzIG9mIDEtMyB2YWx1ZXMpLlxuLy8vIElmIGEgbGlzdCBvZiA0IHZhbHVlcyBpcyBnaXZlbiwgaXQgaXMgcmV0dXJuZWQgYXMtaXMuXG4vLy9cbi8vLyBFeGFtcGxlczpcbi8vL1xuLy8vIHVucGFjay12YWx1ZSg0cHgpID0+IDRweCA0cHggNHB4IDRweFxuLy8vIHVucGFjay12YWx1ZSg0cHggMnB4KSA9PiA0cHggMnB4IDRweCAycHhcbi8vLyB1bnBhY2stdmFsdWUoNHB4IDJweCAycHgpID0+IDRweCAycHggMnB4IDJweFxuLy8vIHVucGFjay12YWx1ZSg0cHggMnB4IDAgMnB4KSA9PiA0cHggMnB4IDAgMnB4XG4vLy9cbi8vLyBAcGFyYW0ge051bWJlciB8IE1hcCB8IExpc3R9ICR2YWx1ZSAtIExpc3Qgb2YgMSB0byA0IHZhbHVlIG51bWJlcnMuXG4vLy8gQHJldHVybiB7TGlzdH0gYSBMaXN0IG9mIDQgdmFsdWUgbnVtYmVycy5cbkBmdW5jdGlvbiB1bnBhY2stdmFsdWUoJHZhbHVlKSB7XG4gIEBpZiBtZXRhLnR5cGUtb2YoJHZhbHVlKSA9PSAnbWFwJyBvciBsaXN0Lmxlbmd0aCgkdmFsdWUpID09IDEge1xuICAgIEByZXR1cm4gJHZhbHVlICR2YWx1ZSAkdmFsdWUgJHZhbHVlO1xuICB9IEBlbHNlIGlmIGxpc3QubGVuZ3RoKCR2YWx1ZSkgPT0gNCB7XG4gICAgQHJldHVybiAkdmFsdWU7XG4gIH0gQGVsc2UgaWYgbGlzdC5sZW5ndGgoJHZhbHVlKSA9PSAzIHtcbiAgICBAcmV0dXJuIGxpc3QubnRoKCR2YWx1ZSwgMSkgbGlzdC5udGgoJHZhbHVlLCAyKSBsaXN0Lm50aCgkdmFsdWUsIDMpXG4gICAgICBsaXN0Lm50aCgkdmFsdWUsIDIpO1xuICB9IEBlbHNlIGlmIGxpc3QubGVuZ3RoKCR2YWx1ZSkgPT0gMiB7XG4gICAgQHJldHVybiBsaXN0Lm50aCgkdmFsdWUsIDEpIGxpc3QubnRoKCR2YWx1ZSwgMikgbGlzdC5udGgoJHZhbHVlLCAxKVxuICAgICAgbGlzdC5udGgoJHZhbHVlLCAyKTtcbiAgfVxuXG4gIEBlcnJvciBcIkludmFsaWQgQ1NTIHByb3BlcnR5IHZhbHVlOiAnI3skdmFsdWV9JyBpcyBtb3JlIHRoYW4gNCB2YWx1ZXNcIjtcbn1cbiIsIkBtaXhpbiBiYWRnZSgpIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgbWluLXdpZHRoOiAxOHB4O1xyXG4gIHBhZGRpbmc6IC4zNWVtIC42NWVtO1xyXG4gIGZvbnQtc2l6ZTogLjc1ZW07XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBsaW5lLWhlaWdodDogMTtcclxuICBjb2xvcjogI2ZmZjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzc1NzU3NTtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdGhlbWUvdG9wbWVudS90b3BtZW51LmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC90aGVtZS9fY3NzLnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvYXBwL3RoZW1lL3N0eWxlL19iYWRnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUN1RUUseUhBQUE7QUR4RUo7QUFLRTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtBQUhKO0FBTUU7OztFQUdFLHNCQUFBO0FBSko7QUFPRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFMSjtBQU9JO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtBQUxOO0FBU0U7RUFDRSxrQkFBQTtBQVBKO0FBU0k7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0FBUE47QUFXRTs7RUUzQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esd0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VGb0NFLGdCQUFBO0VBQ0EsZUFBQTtBQUNKO0FBQ0k7O0VBQ0UsaUJBQUE7RUFDQSxpQkFBQTtBQUVOO0FBRUU7RUFDRSxvQkFBQTtBQUFKO0FBR0U7O0VBRUUsbUJBQUE7QUFESjs7QUFPSTtFQUNFLGlCQUFBO0VBQ0Esc0JBQUE7QUFKTjtBQU1NO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtBQUpSO0FBQ0Esd3lTQUF3eVMiLCJzb3VyY2VzQ29udGVudCI6WyJAdXNlICdAYW5ndWxhci9tYXRlcmlhbCcgYXMgbWF0O1xyXG5AdXNlICcuLi9zdHlsZS9iYWRnZSc7XHJcblxyXG4ubWF0ZXJvLXRvcG1lbnUge1xyXG4gIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgei1pbmRleDogMjAwO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHBhZGRpbmc6IDhweDtcclxuXHJcbiAgQGluY2x1ZGUgbWF0LmVsZXZhdGlvbigyKTtcclxuXHJcbiAgLm1hdC1tZGMtYnV0dG9uLWJhc2Uge1xyXG4gICAgcGFkZGluZzogMCAxNnB4O1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICB9XHJcblxyXG4gIC5tZW51LWljb24sXHJcbiAgLm1lbnUtY2FyZXQsXHJcbiAgLm1lbnUtbmFtZSB7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gIH1cclxuXHJcbiAgLm1hdC1pY29uLm1lbnUtaWNvbiB7XHJcbiAgICB3aWR0aDogMThweDtcclxuICAgIGhlaWdodDogMThweDtcclxuICAgIG1hcmdpbi1yaWdodDogOHB4O1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcblxyXG4gICAgW2Rpcj0ncnRsJ10gJiB7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgICAgbWFyZ2luLWxlZnQ6IDhweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5tYXQtaWNvbi5tZW51LWNhcmV0IHtcclxuICAgIG1hcmdpbi1yaWdodDogLThweDtcclxuXHJcbiAgICBbZGlyPSdydGwnXSAmIHtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgICBtYXJnaW4tbGVmdDogLThweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5tZW51LWxhYmVsLFxyXG4gIC5tZW51LWJhZGdlIHtcclxuICAgIEBpbmNsdWRlIGJhZGdlLmJhZGdlKCk7XHJcblxyXG4gICAgbWFyZ2luLWxlZnQ6IDhweDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuXHJcbiAgICBbZGlyPSdydGwnXSAmIHtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLm1lbnUtYmFkZ2Uge1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTByZW07XHJcbiAgfVxyXG5cclxuICAubWF0LXRhYi1uYXYtYmFyLFxyXG4gIC5tYXQtdGFiLWhlYWRlciB7XHJcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xyXG4gIH1cclxufVxyXG5cclxuLm1hdGVyby10b3BtZW51LXBhbmVsIHtcclxuICAubWF0LW1lbnUtaXRlbSB7XHJcbiAgICAubWVudS1uYW1lIHtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbiAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcblxyXG4gICAgICBbZGlyPSdydGwnXSAmIHtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDhweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIvL1xuLy8gQ29weXJpZ2h0IDIwMjAgR29vZ2xlIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuLy9cblxuQHVzZSAnc2FzczpsaXN0JztcbkB1c2UgJ3Nhc3M6bWFwJztcbkB1c2UgJ3Nhc3M6bWV0YSc7XG5AdXNlICcuL2dzcyc7XG5cbi8vLyBXaGVuIHRydWUsIGFkZCBhbiBhZGRpdGlvbmFsIHByb3BlcnR5L3ZhbHVlIGRlY2xhcmF0aW9uIGJlZm9yZSBkZWNsYXJhdGlvbnNcbi8vLyB0aGF0IHVzZSBhZHZhbmNlZCBmZWF0dXJlcyBzdWNoIGFzIGN1c3RvbSBwcm9wZXJ0aWVzIG9yIENTUyBmdW5jdGlvbnMuIFRoaXNcbi8vLyBhZGRzIGZhbGxiYWNrIHN1cHBvcnQgZm9yIG9sZGVyIGJyb3dzZXJzIHN1Y2ggYXMgSUUxMSB0aGF0IGRvIG5vdCBzdXBwb3J0XG4vLy8gdGhlc2UgZmVhdHVyZXMgYXQgdGhlIGNvc3Qgb2YgYWRkaXRpb25hbCBDU1MuIFNldCB0aGlzIHZhcmlhYmxlIHRvIGZhbHNlIHRvXG4vLy8gZGlzYWJsZSBnZW5lcmF0aW5nIGZhbGxiYWNrIGRlY2xhcmF0aW9ucy5cbiRlbmFibGUtZmFsbGJhY2stZGVjbGFyYXRpb25zOiB0cnVlICFkZWZhdWx0O1xuXG4vLy8gV3JpdGVzIGEgQ1NTIHByb3BlcnR5L3ZhbHVlIGRlY2xhcmF0aW9uLiBUaGlzIG1peGluIGlzIHVzZWQgdGhyb3VnaG91dCB0aGVcbi8vLyB0aGVtZSBwYWNrYWdlIGZvciBjb25zaXN0ZW5jeSBmb3IgZHluYW1pY2FsbHkgc2V0dGluZyBDU1MgcHJvcGVydHkgdmFsdWVzLlxuLy8vXG4vLy8gVGhpcyBtaXhpbiBtYXkgb3B0aW9uYWxseSB0YWtlIGEgZmFsbGJhY2sgdmFsdWUuIEZvciBhZHZhbmNlZCBmZWF0dXJlcyBzdWNoXG4vLy8gYXMgY3VzdG9tIHByb3BlcnRpZXMgb3IgQ1NTIGZ1bmN0aW9ucyBsaWtlIG1pbiBhbmQgbWF4LCBhIGZhbGxiYWNrIHZhbHVlIGlzXG4vLy8gcmVjb21tZW5kZWQgdG8gc3VwcG9ydCBvbGRlciBicm93c2Vycy5cbi8vL1xuLy8vIEBwYXJhbSB7U3RyaW5nfSAkcHJvcGVydHkgLSBUaGUgQ1NTIHByb3BlcnR5IG9mIHRoZSBkZWNsYXJhdGlvbi5cbi8vLyBAcGFyYW0geyp9ICR2YWx1ZSAtIFRoZSB2YWx1ZSBvZiB0aGUgQ1NTIGRlY2xhcmF0aW9uLiBUaGUgdmFsdWUgc2hvdWxkIGJlXG4vLy8gICAgIHJlc29sdmVkIGJ5IG90aGVyIHRoZW1lIGZ1bmN0aW9ucyBmaXJzdCAoaS5lLiBjdXN0b20gcHJvcGVydHkgTWFwcyBhbmRcbi8vLyAgICAgTWF0ZXJpYWwgdGhlbWUga2V5cyBhcmUgbm90IHN1cHBvcnRlZCBpbiB0aGlzIG1peGluKS4gSWYgdGhlIHZhbHVlIGlzXG4vLy8gICAgIG51bGwsIG5vIGRlY2xhcmF0aW9ucyB3aWxsIGJlIGVtaXR0ZWQuXG4vLy8gQHBhcmFtIHsqfSAkZmFsbGJhY2sgLSBBbiBvcHRpb25hbCBmYWxsYmFjayB2YWx1ZSBmb3Igb2xkZXIgYnJvd3NlcnMuIElmXG4vLy8gICAgIHByb3ZpZGVkLCBhIHNlY29uZCBwcm9wZXJ0eS92YWx1ZSBkZWNsYXJhdGlvbiB3aWxsIGJlIGFkZGVkIGJlZm9yZSB0aGVcbi8vLyAgICAgbWFpbiBwcm9wZXJ0eS92YWx1ZSBkZWNsYXJhdGlvbi5cbi8vLyBAcGFyYW0ge01hcH0gJGdzcyAtIEFuIG9wdGlvbmFsIE1hcCBvZiBHU1MgYW5ub3RhdGlvbnMgdG8gYWRkLlxuLy8vIEBwYXJhbSB7Qm9vbH0gJGltcG9ydGFudCAtIElmIHRydWUsIGFkZCBgIWltcG9ydGFudGAgdG8gdGhlIGRlY2xhcmF0aW9uLlxuQG1peGluIGRlY2xhcmF0aW9uKFxuICAkcHJvcGVydHksXG4gICR2YWx1ZSxcbiAgJGZhbGxiYWNrLXZhbHVlOiBudWxsLFxuICAkZ3NzOiAoKSxcbiAgJGltcG9ydGFudDogZmFsc2Vcbikge1xuICAvLyBOb3JtYWxseSBzZXR0aW5nIGEgbnVsbCB2YWx1ZSB0byBhIHByb3BlcnR5IHdpbGwgbm90IGVtaXQgQ1NTLCBzbyBtaXhpbnNcbiAgLy8gd291bGRuJ3QgbmVlZCB0byBjaGVjayB0aGlzLiBIb3dldmVyLCBTYXNzIHdpbGwgdGhyb3cgYW4gZXJyb3IgaWYgdGhlXG4gIC8vIGludGVycG9sYXRlZCBwcm9wZXJ0eSBpcyBhIGN1c3RvbSBwcm9wZXJ0eS5cbiAgQGlmICR2YWx1ZSAhPSBudWxsIHtcbiAgICAkaW1wb3J0YW50LXJ1bGU6IGlmKCRpbXBvcnRhbnQsICcgIWltcG9ydGFudCcsICcnKTtcblxuICAgIEBpZiAkZmFsbGJhY2stdmFsdWUgYW5kICRlbmFibGUtZmFsbGJhY2stZGVjbGFyYXRpb25zIHtcbiAgICAgIEBpbmNsdWRlIGdzcy5hbm5vdGF0ZSgkZ3NzKTtcbiAgICAgICN7JHByb3BlcnR5fTogI3skZmFsbGJhY2stdmFsdWV9ICN7JGltcG9ydGFudC1ydWxlfTtcblxuICAgICAgLy8gQWRkIEBhbHRlcm5hdGUgdG8gYW5ub3RhdGlvbnMuXG4gICAgICAkZ3NzOiBtYXAubWVyZ2UoXG4gICAgICAgICRnc3MsXG4gICAgICAgIChcbiAgICAgICAgICBhbHRlcm5hdGU6IHRydWUsXG4gICAgICAgIClcbiAgICAgICk7XG4gICAgfVxuXG4gICAgQGluY2x1ZGUgZ3NzLmFubm90YXRlKCRnc3MpO1xuICAgICN7JHByb3BlcnR5fTogI3skdmFsdWV9I3skaW1wb3J0YW50LXJ1bGV9O1xuICB9XG59XG5cbi8vLyBVbnBhY2tzIHNob3J0aGFuZCB2YWx1ZXMgZm9yIENTUyBwcm9wZXJ0aWVzIChpLmUuIGxpc3RzIG9mIDEtMyB2YWx1ZXMpLlxuLy8vIElmIGEgbGlzdCBvZiA0IHZhbHVlcyBpcyBnaXZlbiwgaXQgaXMgcmV0dXJuZWQgYXMtaXMuXG4vLy9cbi8vLyBFeGFtcGxlczpcbi8vL1xuLy8vIHVucGFjay12YWx1ZSg0cHgpID0+IDRweCA0cHggNHB4IDRweFxuLy8vIHVucGFjay12YWx1ZSg0cHggMnB4KSA9PiA0cHggMnB4IDRweCAycHhcbi8vLyB1bnBhY2stdmFsdWUoNHB4IDJweCAycHgpID0+IDRweCAycHggMnB4IDJweFxuLy8vIHVucGFjay12YWx1ZSg0cHggMnB4IDAgMnB4KSA9PiA0cHggMnB4IDAgMnB4XG4vLy9cbi8vLyBAcGFyYW0ge051bWJlciB8IE1hcCB8IExpc3R9ICR2YWx1ZSAtIExpc3Qgb2YgMSB0byA0IHZhbHVlIG51bWJlcnMuXG4vLy8gQHJldHVybiB7TGlzdH0gYSBMaXN0IG9mIDQgdmFsdWUgbnVtYmVycy5cbkBmdW5jdGlvbiB1bnBhY2stdmFsdWUoJHZhbHVlKSB7XG4gIEBpZiBtZXRhLnR5cGUtb2YoJHZhbHVlKSA9PSAnbWFwJyBvciBsaXN0Lmxlbmd0aCgkdmFsdWUpID09IDEge1xuICAgIEByZXR1cm4gJHZhbHVlICR2YWx1ZSAkdmFsdWUgJHZhbHVlO1xuICB9IEBlbHNlIGlmIGxpc3QubGVuZ3RoKCR2YWx1ZSkgPT0gNCB7XG4gICAgQHJldHVybiAkdmFsdWU7XG4gIH0gQGVsc2UgaWYgbGlzdC5sZW5ndGgoJHZhbHVlKSA9PSAzIHtcbiAgICBAcmV0dXJuIGxpc3QubnRoKCR2YWx1ZSwgMSkgbGlzdC5udGgoJHZhbHVlLCAyKSBsaXN0Lm50aCgkdmFsdWUsIDMpXG4gICAgICBsaXN0Lm50aCgkdmFsdWUsIDIpO1xuICB9IEBlbHNlIGlmIGxpc3QubGVuZ3RoKCR2YWx1ZSkgPT0gMiB7XG4gICAgQHJldHVybiBsaXN0Lm50aCgkdmFsdWUsIDEpIGxpc3QubnRoKCR2YWx1ZSwgMikgbGlzdC5udGgoJHZhbHVlLCAxKVxuICAgICAgbGlzdC5udGgoJHZhbHVlLCAyKTtcbiAgfVxuXG4gIEBlcnJvciBcIkludmFsaWQgQ1NTIHByb3BlcnR5IHZhbHVlOiAnI3skdmFsdWV9JyBpcyBtb3JlIHRoYW4gNCB2YWx1ZXNcIjtcbn1cbiIsIkBtaXhpbiBiYWRnZSgpIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgbWluLXdpZHRoOiAxOHB4O1xyXG4gIHBhZGRpbmc6IC4zNWVtIC42NWVtO1xyXG4gIGZvbnQtc2l6ZTogLjc1ZW07XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBsaW5lLWhlaWdodDogMTtcclxuICBjb2xvcjogI2ZmZjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzc1NzU3NTtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"],
  encapsulation: 2
});

/***/ }),

/***/ 194:
/*!*****************************************************!*\
  !*** ./src/app/theme/widgets/branding.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BrandingComponent: () => (/* binding */ BrandingComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class BrandingComponent {}
BrandingComponent.ɵfac = function BrandingComponent_Factory(t) {
  return new (t || BrandingComponent)();
};
BrandingComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: BrandingComponent,
  selectors: [["app-branding"]],
  decls: 4,
  vars: 0,
  consts: [["href", "/", 1, "d-inline-block", "text-nowrap", "r-full", "text-reset"], ["src", "./assets/images/matero.png", "alt", "logo", 1, "brand-logo", "align-middle", "m-2"], [1, "align-middle", "f-s-16", "f-w-500", "m-x-8"]],
  template: function BrandingComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "MATERO");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    }
  },
  styles: [".brand-logo[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJyYW5kaW5nLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDTTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBQVIiLCJmaWxlIjoiYnJhbmRpbmcuY29tcG9uZW50LnRzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICAuYnJhbmQtbG9nbyB7XG4gICAgICAgIHdpZHRoOiAzMHB4O1xuICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICB9XG4gICAgIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdGhlbWUvd2lkZ2V0cy9icmFuZGluZy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ007RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQUFSO0FBQ0EsZ1hBQWdYIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICAuYnJhbmQtbG9nbyB7XG4gICAgICAgIHdpZHRoOiAzMHB4O1xuICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICB9XG4gICAgIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 8027:
/*!*********************************************************!*\
  !*** ./src/app/theme/widgets/notification.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NotificationComponent: () => (/* binding */ NotificationComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/badge */ 5392);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ 895);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ 6515);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/list */ 3228);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/menu */ 8128);







function NotificationComponent_mat_list_item_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-list-item")(1, "mat-icon", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "info");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const message_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](message_r2);
  }
}
class NotificationComponent {
  constructor() {
    this.messages = ['Server Error Reports', 'Server Error Reports', 'Server Error Reports'];
  }
}
NotificationComponent.ɵfac = function NotificationComponent_Factory(t) {
  return new (t || NotificationComponent)();
};
NotificationComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: NotificationComponent,
  selectors: [["app-notification"]],
  decls: 7,
  vars: 2,
  consts: [["mat-icon-button", "", 3, "matMenuTriggerFor"], ["matBadge", "5", "matBadgeColor", "warn"], ["menu", "matMenu"], [4, "ngFor", "ngForOf"], ["matListItemIcon", "", 1, "m-x-16"], ["matListItemTitle", "", "href", "#"]],
  template: function NotificationComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0)(1, "mat-icon", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "notifications");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-menu", null, 2)(5, "mat-nav-list");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, NotificationComponent_mat_list_item_6_Template, 5, 1, "mat-list-item", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.messages);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_material_badge__WEBPACK_IMPORTED_MODULE_2__.MatBadge, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatIconButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIcon, _angular_material_list__WEBPACK_IMPORTED_MODULE_5__.MatNavList, _angular_material_list__WEBPACK_IMPORTED_MODULE_5__.MatListItem, _angular_material_list__WEBPACK_IMPORTED_MODULE_5__.MatListItemIcon, _angular_material_list__WEBPACK_IMPORTED_MODULE_5__.MatListItemTitle, _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__.MatMenuTrigger],
  encapsulation: 2
});

/***/ }),

/***/ 6857:
/*!******************************************************!*\
  !*** ./src/app/theme/widgets/translate.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TranslateComponent: () => (/* binding */ TranslateComponent)
/* harmony export */ });
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core */ 9076);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 5939);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ 895);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ 6515);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/menu */ 8128);









function TranslateComponent_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TranslateComponent_button_5_Template_button_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);
      const lang_r2 = restoredCtx.$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r3.useLanguage(lang_r2.key));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const lang_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](lang_r2.value);
  }
}
class TranslateComponent {
  constructor(translate, settings) {
    this.translate = translate;
    this.settings = settings;
    this.langs = {
      'en-US': 'English',
      'zh-CN': '中文简体',
      'zh-TW': '中文繁体'
    };
    translate.addLangs(['en-US', 'zh-CN', 'zh-TW']);
  }
  useLanguage(language) {
    this.translate.use(language);
    this.settings.setLanguage(language);
  }
}
TranslateComponent.ɵfac = function TranslateComponent_Factory(t) {
  return new (t || TranslateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core__WEBPACK_IMPORTED_MODULE_0__.SettingsService));
};
TranslateComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: TranslateComponent,
  selectors: [["app-translate"]],
  decls: 7,
  vars: 4,
  consts: [["mat-icon-button", "", 3, "matMenuTriggerFor"], ["menu", "matMenu"], ["mat-menu-item", "", 3, "click", 4, "ngFor", "ngForOf"], ["mat-menu-item", "", 3, "click"]],
  template: function TranslateComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 0)(1, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-menu", null, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, TranslateComponent_button_5_Template, 3, 1, "button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "keyvalue");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matMenuTriggerFor", _r0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 2, ctx.langs));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatIconButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIcon, _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__.MatMenuItem, _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__.MatMenuTrigger, _angular_common__WEBPACK_IMPORTED_MODULE_3__.KeyValuePipe],
  encapsulation: 2
});

/***/ }),

/***/ 9971:
/*!*************************************************!*\
  !*** ./src/app/theme/widgets/user.component.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UserComponent: () => (/* binding */ UserComponent)
/* harmony export */ });
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core */ 9076);
/* harmony import */ var _core_authentication__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/authentication */ 3870);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 3738);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 655);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ 895);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ 6515);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/menu */ 8128);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 5939);













class UserComponent {
  constructor(router, auth, cdr, settings) {
    this.router = router;
    this.auth = auth;
    this.cdr = cdr;
    this.settings = settings;
  }
  ngOnInit() {
    this.auth.user().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.tap)(user => this.user = user), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.debounceTime)(10)).subscribe(() => this.cdr.detectChanges());
  }
  logout() {
    this.auth.logout().subscribe(() => this.router.navigateByUrl('/auth/login'));
  }
  restore() {
    this.settings.reset();
    window.location.reload();
  }
}
UserComponent.ɵfac = function UserComponent_Factory(t) {
  return new (t || UserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core_authentication__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core__WEBPACK_IMPORTED_MODULE_0__.SettingsService));
};
UserComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: UserComponent,
  selectors: [["app-user"]],
  decls: 30,
  vars: 15,
  consts: [["mat-button", "", 1, "r-full", 3, "matMenuTriggerFor"], ["matButtonIcon", "", "width", "24", "alt", "avatar", 1, "avatar", "r-full", 3, "src"], [1, "m-x-8"], ["menu", "matMenu"], ["routerLink", "/profile/overview", "mat-menu-item", ""], ["routerLink", "/profile/settings", "mat-menu-item", ""], ["mat-menu-item", "", 3, "click"]],
  template: function UserComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "img", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "span", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "mat-menu", null, 3)(6, "button", 4)(7, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "account_circle");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](11, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "button", 5)(13, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "edit");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](17, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function UserComponent_Template_button_click_18_listener() {
        return ctx.restore();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, "restore");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](23, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function UserComponent_Template_button_click_24_listener() {
        return ctx.logout();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26, "exit_to_app");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](29, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matMenuTriggerFor", _r0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", ctx.user.avatar, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.user.name);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](11, 7, "profile"));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](17, 9, "edit_profile"));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](23, 11, "restore_defaults"));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](29, 13, "logout"));
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIcon, _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__.MatMenuItem, _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__.MatMenuTrigger, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslatePipe],
  styles: [".avatar[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNNO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFBUiIsImZpbGUiOiJ1c2VyLmNvbXBvbmVudC50cyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgLmF2YXRhciB7XG4gICAgICAgIHdpZHRoOiAyNHB4O1xuICAgICAgICBoZWlnaHQ6IDI0cHg7XG4gICAgICB9XG4gICAgIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdGhlbWUvd2lkZ2V0cy91c2VyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDTTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBQVI7QUFDQSxnV0FBZ1ciLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgIC5hdmF0YXIge1xuICAgICAgICB3aWR0aDogMjRweDtcbiAgICAgICAgaGVpZ2h0OiAyNHB4O1xuICAgICAgfVxuICAgICJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 553:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
  production: false,
  baseUrl: '',
  imgUrl: 'http://localhost:3000/img/',
  useHash: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

/***/ }),

/***/ 4913:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 8629);


_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ }),

/***/ 6700:
/*!***************************************************!*\
  !*** ./node_modules/moment/locale/ sync ^\.\/.*$ ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./af": 5528,
	"./af.js": 5528,
	"./ar": 1036,
	"./ar-dz": 7579,
	"./ar-dz.js": 7579,
	"./ar-kw": 9588,
	"./ar-kw.js": 9588,
	"./ar-ly": 6519,
	"./ar-ly.js": 6519,
	"./ar-ma": 3258,
	"./ar-ma.js": 3258,
	"./ar-sa": 4085,
	"./ar-sa.js": 4085,
	"./ar-tn": 287,
	"./ar-tn.js": 287,
	"./ar.js": 1036,
	"./az": 9757,
	"./az.js": 9757,
	"./be": 9620,
	"./be.js": 9620,
	"./bg": 1139,
	"./bg.js": 1139,
	"./bm": 4042,
	"./bm.js": 4042,
	"./bn": 9641,
	"./bn-bd": 9126,
	"./bn-bd.js": 9126,
	"./bn.js": 9641,
	"./bo": 494,
	"./bo.js": 494,
	"./br": 934,
	"./br.js": 934,
	"./bs": 6274,
	"./bs.js": 6274,
	"./ca": 5831,
	"./ca.js": 5831,
	"./cs": 2354,
	"./cs.js": 2354,
	"./cv": 9692,
	"./cv.js": 9692,
	"./cy": 8774,
	"./cy.js": 8774,
	"./da": 584,
	"./da.js": 584,
	"./de": 1557,
	"./de-at": 4954,
	"./de-at.js": 4954,
	"./de-ch": 1881,
	"./de-ch.js": 1881,
	"./de.js": 1557,
	"./dv": 6475,
	"./dv.js": 6475,
	"./el": 8877,
	"./el.js": 8877,
	"./en-au": 454,
	"./en-au.js": 454,
	"./en-ca": 7356,
	"./en-ca.js": 7356,
	"./en-gb": 456,
	"./en-gb.js": 456,
	"./en-ie": 8789,
	"./en-ie.js": 8789,
	"./en-il": 5471,
	"./en-il.js": 5471,
	"./en-in": 9664,
	"./en-in.js": 9664,
	"./en-nz": 7672,
	"./en-nz.js": 7672,
	"./en-sg": 805,
	"./en-sg.js": 805,
	"./eo": 7390,
	"./eo.js": 7390,
	"./es": 1564,
	"./es-do": 1473,
	"./es-do.js": 1473,
	"./es-mx": 2089,
	"./es-mx.js": 2089,
	"./es-us": 4156,
	"./es-us.js": 4156,
	"./es.js": 1564,
	"./et": 6513,
	"./et.js": 6513,
	"./eu": 7856,
	"./eu.js": 7856,
	"./fa": 2378,
	"./fa.js": 2378,
	"./fi": 2687,
	"./fi.js": 2687,
	"./fil": 32,
	"./fil.js": 32,
	"./fo": 6845,
	"./fo.js": 6845,
	"./fr": 8875,
	"./fr-ca": 6425,
	"./fr-ca.js": 6425,
	"./fr-ch": 1746,
	"./fr-ch.js": 1746,
	"./fr.js": 8875,
	"./fy": 7037,
	"./fy.js": 7037,
	"./ga": 1217,
	"./ga.js": 1217,
	"./gd": 7010,
	"./gd.js": 7010,
	"./gl": 1931,
	"./gl.js": 1931,
	"./gom-deva": 4488,
	"./gom-deva.js": 4488,
	"./gom-latn": 8032,
	"./gom-latn.js": 8032,
	"./gu": 4984,
	"./gu.js": 4984,
	"./he": 9090,
	"./he.js": 9090,
	"./hi": 2085,
	"./hi.js": 2085,
	"./hr": 8787,
	"./hr.js": 8787,
	"./hu": 2901,
	"./hu.js": 2901,
	"./hy-am": 9819,
	"./hy-am.js": 9819,
	"./id": 4074,
	"./id.js": 4074,
	"./is": 715,
	"./is.js": 715,
	"./it": 3838,
	"./it-ch": 7040,
	"./it-ch.js": 7040,
	"./it.js": 3838,
	"./ja": 3180,
	"./ja.js": 3180,
	"./jv": 4346,
	"./jv.js": 4346,
	"./ka": 5538,
	"./ka.js": 5538,
	"./kk": 9772,
	"./kk.js": 9772,
	"./km": 7905,
	"./km.js": 7905,
	"./kn": 9125,
	"./kn.js": 9125,
	"./ko": 9140,
	"./ko.js": 9140,
	"./ku": 6780,
	"./ku.js": 6780,
	"./ky": 3768,
	"./ky.js": 3768,
	"./lb": 4016,
	"./lb.js": 4016,
	"./lo": 3169,
	"./lo.js": 3169,
	"./lt": 2353,
	"./lt.js": 2353,
	"./lv": 3243,
	"./lv.js": 3243,
	"./me": 2338,
	"./me.js": 2338,
	"./mi": 5555,
	"./mi.js": 5555,
	"./mk": 5794,
	"./mk.js": 5794,
	"./ml": 3151,
	"./ml.js": 3151,
	"./mn": 6458,
	"./mn.js": 6458,
	"./mr": 9165,
	"./mr.js": 9165,
	"./ms": 8680,
	"./ms-my": 7477,
	"./ms-my.js": 7477,
	"./ms.js": 8680,
	"./mt": 9684,
	"./mt.js": 9684,
	"./my": 285,
	"./my.js": 285,
	"./nb": 5922,
	"./nb.js": 5922,
	"./ne": 9040,
	"./ne.js": 9040,
	"./nl": 5066,
	"./nl-be": 4460,
	"./nl-be.js": 4460,
	"./nl.js": 5066,
	"./nn": 3693,
	"./nn.js": 3693,
	"./oc-lnc": 8676,
	"./oc-lnc.js": 8676,
	"./pa-in": 2341,
	"./pa-in.js": 2341,
	"./pl": 7416,
	"./pl.js": 7416,
	"./pt": 4344,
	"./pt-br": 113,
	"./pt-br.js": 113,
	"./pt.js": 4344,
	"./ro": 2643,
	"./ro.js": 2643,
	"./ru": 1305,
	"./ru.js": 1305,
	"./sd": 6095,
	"./sd.js": 6095,
	"./se": 4486,
	"./se.js": 4486,
	"./si": 8742,
	"./si.js": 8742,
	"./sk": 6722,
	"./sk.js": 6722,
	"./sl": 3345,
	"./sl.js": 3345,
	"./sq": 2416,
	"./sq.js": 2416,
	"./sr": 9450,
	"./sr-cyrl": 501,
	"./sr-cyrl.js": 501,
	"./sr.js": 9450,
	"./ss": 2222,
	"./ss.js": 2222,
	"./sv": 9454,
	"./sv.js": 9454,
	"./sw": 9638,
	"./sw.js": 9638,
	"./ta": 6494,
	"./ta.js": 6494,
	"./te": 4435,
	"./te.js": 4435,
	"./tet": 5003,
	"./tet.js": 5003,
	"./tg": 3706,
	"./tg.js": 3706,
	"./th": 6025,
	"./th.js": 6025,
	"./tk": 9780,
	"./tk.js": 9780,
	"./tl-ph": 2068,
	"./tl-ph.js": 2068,
	"./tlh": 9167,
	"./tlh.js": 9167,
	"./tr": 2494,
	"./tr.js": 2494,
	"./tzl": 8707,
	"./tzl.js": 8707,
	"./tzm": 1296,
	"./tzm-latn": 4532,
	"./tzm-latn.js": 4532,
	"./tzm.js": 1296,
	"./ug-cn": 2086,
	"./ug-cn.js": 2086,
	"./uk": 5069,
	"./uk.js": 5069,
	"./ur": 9304,
	"./ur.js": 9304,
	"./uz": 5115,
	"./uz-latn": 7609,
	"./uz-latn.js": 7609,
	"./uz.js": 5115,
	"./vi": 4802,
	"./vi.js": 4802,
	"./x-pseudo": 5605,
	"./x-pseudo.js": 5605,
	"./yo": 8456,
	"./yo.js": 8456,
	"./zh-cn": 3272,
	"./zh-cn.js": 3272,
	"./zh-hk": 9402,
	"./zh-hk.js": 9402,
	"./zh-mo": 8101,
	"./zh-mo.js": 8101,
	"./zh-tw": 262,
	"./zh-tw.js": 262
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
webpackContext.id = 6700;

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4913)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map