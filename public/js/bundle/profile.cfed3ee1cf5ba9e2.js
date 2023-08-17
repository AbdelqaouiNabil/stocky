"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["profile"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/profile.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/profile.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nprogress */ "./node_modules/nprogress/nprogress.js");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: "Profile"
  },
  data: function data() {
    return {
      data: new FormData(),
      avatar: "",
      username: "",
      isLoading: true,
      user: {
        id: "",
        firstname: "",
        lastname: "",
        username: "",
        NewPassword: null,
        email: "",
        phone: "",
        avatar: ""
      }
    };
  },
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_2__.mapGetters)(["currentUser"])),
  methods: {
    //------------- Submit Update Profile
    Submit_Profile: function Submit_Profile() {
      var _this = this;

      this.$refs.Update_Profile.validate().then(function (success) {
        if (!success) {
          _this.makeToast("danger", _this.$t("Please_fill_the_form_correctly"), _this.$t("Failed"));
        } else {
          _this.Update_Profile();
        }
      });
    },
    //------ Toast
    makeToast: function makeToast(variant, msg, title) {
      this.$root.$bvToast.toast(msg, {
        title: title,
        variant: variant,
        solid: true
      });
    },
    //------ Validation State fields
    getValidationState: function getValidationState(_ref) {
      var dirty = _ref.dirty,
          validated = _ref.validated,
          _ref$valid = _ref.valid,
          valid = _ref$valid === void 0 ? null : _ref$valid;
      return dirty || validated ? valid : null;
    },
    //------------------ Get Profile Info ----------------------\\
    Get_Profile_Info: function Get_Profile_Info() {
      var _this2 = this;

      axios.get("Get_user_profile").then(function (response) {
        _this2.user = response.data.user;
        _this2.avatar = _this2.currentUser.avatar;
        _this2.username = _this2.currentUser.username;
        _this2.isLoading = false;
      })["catch"](function (response) {
        _this2.isLoading = false;
      });
    },
    //------------------------------ Event Upload Avatar -------------------------------\\
    onFileSelected: function onFileSelected(e) {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        var _yield$_this3$$refs$A, valid;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _this3.$refs.Avatar.validate(e);

              case 2:
                _yield$_this3$$refs$A = _context.sent;
                valid = _yield$_this3$$refs$A.valid;

                if (valid) {
                  _this3.user.avatar = e.target.files[0];
                } else {
                  _this3.user.avatar = "";
                }

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    //------------------ Update Profile ----------------------\\
    Update_Profile: function Update_Profile() {
      var _this4 = this;

      // Start the progress bar.
      nprogress__WEBPACK_IMPORTED_MODULE_1___default().start();
      nprogress__WEBPACK_IMPORTED_MODULE_1___default().set(0.1);
      var self = this;
      self.data.append("firstname", self.user.firstname);
      self.data.append("lastname", self.user.lastname);
      self.data.append("username", self.user.username);
      self.data.append("email", self.user.email);
      self.data.append("NewPassword", self.user.NewPassword);
      self.data.append("phone", self.user.phone);
      self.data.append("avatar", self.user.avatar);
      self.data.append("_method", "put");
      axios.post("update_user_profile/" + self.user.id, self.data).then(function (response) {
        _this4.makeToast("success", _this4.$t("Update.TitleProfile"), _this4.$t("Success"));

        nprogress__WEBPACK_IMPORTED_MODULE_1___default().done(), 500;
        setTimeout(function () {
          _this4.Get_Profile_Info();
        }, 500);
      })["catch"](function (error) {
        nprogress__WEBPACK_IMPORTED_MODULE_1___default().done(), 500;
      });
    }
  },
  // END METHODS
  //----------------------------- Created function-------------------
  created: function created() {
    this.Get_Profile_Info();
  }
});

/***/ }),

/***/ "./resources/src/views/app/pages/profile.vue":
/*!***************************************************!*\
  !*** ./resources/src/views/app/pages/profile.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _profile_vue_vue_type_template_id_04411848___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile.vue?vue&type=template&id=04411848& */ "./resources/src/views/app/pages/profile.vue?vue&type=template&id=04411848&");
/* harmony import */ var _profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile.vue?vue&type=script&lang=js& */ "./resources/src/views/app/pages/profile.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _profile_vue_vue_type_template_id_04411848___WEBPACK_IMPORTED_MODULE_0__.render,
  _profile_vue_vue_type_template_id_04411848___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/src/views/app/pages/profile.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/src/views/app/pages/profile.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/src/views/app/pages/profile.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./profile.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/profile.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/src/views/app/pages/profile.vue?vue&type=template&id=04411848&":
/*!**********************************************************************************!*\
  !*** ./resources/src/views/app/pages/profile.vue?vue&type=template&id=04411848& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_profile_vue_vue_type_template_id_04411848___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_profile_vue_vue_type_template_id_04411848___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_profile_vue_vue_type_template_id_04411848___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./profile.vue?vue&type=template&id=04411848& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/profile.vue?vue&type=template&id=04411848&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/profile.vue?vue&type=template&id=04411848&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/profile.vue?vue&type=template&id=04411848& ***!
  \*************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "main-content" },
    [
      _c("breadcumb", {
        attrs: { page: _vm.$t("profil"), folder: _vm.$t("Settings") },
      }),
      _vm._v(" "),
      _vm.isLoading
        ? _c("div", {
            staticClass: "loading_page spinner spinner-primary mr-3",
          })
        : _vm._e(),
      _vm._v(" "),
      !_vm.isLoading
        ? _c("div", { staticClass: "card user-profile o-hidden mb-30" }, [
            _c("div", { staticClass: "header-cover" }),
            _vm._v(" "),
            _c("div", { staticClass: "user-info" }, [
              _c("img", {
                staticClass: "profile-picture avatar-lg mb-2",
                attrs: { src: "/images/avatar/" + _vm.avatar, alt: "" },
              }),
              _vm._v(" "),
              _c("p", { staticClass: "m-0 text-24" }, [
                _vm._v(_vm._s(_vm.username)),
              ]),
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "card-body" },
              [
                _c(
                  "validation-observer",
                  { ref: "Update_Profile" },
                  [
                    _c(
                      "b-form",
                      {
                        attrs: { enctype: "multipart/form-data" },
                        on: {
                          submit: function ($event) {
                            $event.preventDefault()
                            return _vm.Submit_Profile.apply(null, arguments)
                          },
                        },
                      },
                      [
                        _c(
                          "b-row",
                          [
                            _c(
                              "b-col",
                              { attrs: { md: "6", sm: "12" } },
                              [
                                _c("validation-provider", {
                                  attrs: {
                                    name: "Firstname",
                                    rules: { required: true, min: 4, max: 20 },
                                  },
                                  scopedSlots: _vm._u(
                                    [
                                      {
                                        key: "default",
                                        fn: function (validationContext) {
                                          return [
                                            _c(
                                              "b-form-group",
                                              {
                                                attrs: {
                                                  label:
                                                    _vm.$t("Firstname") +
                                                    " " +
                                                    "*",
                                                },
                                              },
                                              [
                                                _c("b-form-input", {
                                                  attrs: {
                                                    state:
                                                      _vm.getValidationState(
                                                        validationContext
                                                      ),
                                                    "aria-describedby":
                                                      "Firstname-feedback",
                                                    label: "Firstname",
                                                  },
                                                  model: {
                                                    value: _vm.user.firstname,
                                                    callback: function ($$v) {
                                                      _vm.$set(
                                                        _vm.user,
                                                        "firstname",
                                                        $$v
                                                      )
                                                    },
                                                    expression:
                                                      "user.firstname",
                                                  },
                                                }),
                                                _vm._v(" "),
                                                _c(
                                                  "b-form-invalid-feedback",
                                                  {
                                                    attrs: {
                                                      id: "Firstname-feedback",
                                                    },
                                                  },
                                                  [
                                                    _vm._v(
                                                      _vm._s(
                                                        validationContext
                                                          .errors[0]
                                                      )
                                                    ),
                                                  ]
                                                ),
                                              ],
                                              1
                                            ),
                                          ]
                                        },
                                      },
                                    ],
                                    null,
                                    false,
                                    2648461320
                                  ),
                                }),
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "b-col",
                              { attrs: { md: "6", sm: "12" } },
                              [
                                _c("validation-provider", {
                                  attrs: {
                                    name: "lastname",
                                    rules: { required: true, min: 4, max: 20 },
                                  },
                                  scopedSlots: _vm._u(
                                    [
                                      {
                                        key: "default",
                                        fn: function (validationContext) {
                                          return [
                                            _c(
                                              "b-form-group",
                                              {
                                                attrs: {
                                                  label:
                                                    _vm.$t("lastname") +
                                                    " " +
                                                    "*",
                                                },
                                              },
                                              [
                                                _c("b-form-input", {
                                                  attrs: {
                                                    state:
                                                      _vm.getValidationState(
                                                        validationContext
                                                      ),
                                                    "aria-describedby":
                                                      "lastname-feedback",
                                                    label: "lastname",
                                                  },
                                                  model: {
                                                    value: _vm.user.lastname,
                                                    callback: function ($$v) {
                                                      _vm.$set(
                                                        _vm.user,
                                                        "lastname",
                                                        $$v
                                                      )
                                                    },
                                                    expression: "user.lastname",
                                                  },
                                                }),
                                                _vm._v(" "),
                                                _c(
                                                  "b-form-invalid-feedback",
                                                  {
                                                    attrs: {
                                                      id: "lastname-feedback",
                                                    },
                                                  },
                                                  [
                                                    _vm._v(
                                                      _vm._s(
                                                        validationContext
                                                          .errors[0]
                                                      )
                                                    ),
                                                  ]
                                                ),
                                              ],
                                              1
                                            ),
                                          ]
                                        },
                                      },
                                    ],
                                    null,
                                    false,
                                    3016559224
                                  ),
                                }),
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "b-col",
                              { attrs: { md: "6", sm: "12" } },
                              [
                                _c("validation-provider", {
                                  attrs: {
                                    name: "username",
                                    rules: { required: true, min: 4, max: 20 },
                                  },
                                  scopedSlots: _vm._u(
                                    [
                                      {
                                        key: "default",
                                        fn: function (validationContext) {
                                          return [
                                            _c(
                                              "b-form-group",
                                              {
                                                attrs: {
                                                  label:
                                                    _vm.$t("username") +
                                                    " " +
                                                    "*",
                                                },
                                              },
                                              [
                                                _c("b-form-input", {
                                                  attrs: {
                                                    state:
                                                      _vm.getValidationState(
                                                        validationContext
                                                      ),
                                                    "aria-describedby":
                                                      "username-feedback",
                                                    label: "username",
                                                  },
                                                  model: {
                                                    value: _vm.user.username,
                                                    callback: function ($$v) {
                                                      _vm.$set(
                                                        _vm.user,
                                                        "username",
                                                        $$v
                                                      )
                                                    },
                                                    expression: "user.username",
                                                  },
                                                }),
                                                _vm._v(" "),
                                                _c(
                                                  "b-form-invalid-feedback",
                                                  {
                                                    attrs: {
                                                      id: "username-feedback",
                                                    },
                                                  },
                                                  [
                                                    _vm._v(
                                                      _vm._s(
                                                        validationContext
                                                          .errors[0]
                                                      )
                                                    ),
                                                  ]
                                                ),
                                              ],
                                              1
                                            ),
                                          ]
                                        },
                                      },
                                    ],
                                    null,
                                    false,
                                    2089383363
                                  ),
                                }),
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "b-col",
                              { attrs: { md: "6", sm: "12" } },
                              [
                                _c("validation-provider", {
                                  attrs: {
                                    name: "Phone",
                                    rules: { required: true },
                                  },
                                  scopedSlots: _vm._u(
                                    [
                                      {
                                        key: "default",
                                        fn: function (validationContext) {
                                          return [
                                            _c(
                                              "b-form-group",
                                              {
                                                attrs: {
                                                  label:
                                                    _vm.$t("Phone") + " " + "*",
                                                },
                                              },
                                              [
                                                _c("b-form-input", {
                                                  attrs: {
                                                    state:
                                                      _vm.getValidationState(
                                                        validationContext
                                                      ),
                                                    "aria-describedby":
                                                      "Phone-feedback",
                                                    label: "Phone",
                                                  },
                                                  model: {
                                                    value: _vm.user.phone,
                                                    callback: function ($$v) {
                                                      _vm.$set(
                                                        _vm.user,
                                                        "phone",
                                                        $$v
                                                      )
                                                    },
                                                    expression: "user.phone",
                                                  },
                                                }),
                                                _vm._v(" "),
                                                _c(
                                                  "b-form-invalid-feedback",
                                                  {
                                                    attrs: {
                                                      id: "Phone-feedback",
                                                    },
                                                  },
                                                  [
                                                    _vm._v(
                                                      _vm._s(
                                                        validationContext
                                                          .errors[0]
                                                      )
                                                    ),
                                                  ]
                                                ),
                                              ],
                                              1
                                            ),
                                          ]
                                        },
                                      },
                                    ],
                                    null,
                                    false,
                                    2094202729
                                  ),
                                }),
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "b-col",
                              { attrs: { md: "6", sm: "12" } },
                              [
                                _c("validation-provider", {
                                  attrs: {
                                    name: "Email",
                                    rules: { required: true },
                                  },
                                  scopedSlots: _vm._u(
                                    [
                                      {
                                        key: "default",
                                        fn: function (validationContext) {
                                          return [
                                            _c(
                                              "b-form-group",
                                              {
                                                attrs: {
                                                  label:
                                                    _vm.$t("Email") + " " + "*",
                                                },
                                              },
                                              [
                                                _c("b-form-input", {
                                                  attrs: {
                                                    state:
                                                      _vm.getValidationState(
                                                        validationContext
                                                      ),
                                                    "aria-describedby":
                                                      "Email-feedback",
                                                    label: "Email",
                                                  },
                                                  model: {
                                                    value: _vm.user.email,
                                                    callback: function ($$v) {
                                                      _vm.$set(
                                                        _vm.user,
                                                        "email",
                                                        $$v
                                                      )
                                                    },
                                                    expression: "user.email",
                                                  },
                                                }),
                                                _vm._v(" "),
                                                _c(
                                                  "b-form-invalid-feedback",
                                                  {
                                                    attrs: {
                                                      id: "Email-feedback",
                                                    },
                                                  },
                                                  [
                                                    _vm._v(
                                                      _vm._s(
                                                        validationContext
                                                          .errors[0]
                                                      )
                                                    ),
                                                  ]
                                                ),
                                              ],
                                              1
                                            ),
                                          ]
                                        },
                                      },
                                    ],
                                    null,
                                    false,
                                    2639721465
                                  ),
                                }),
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "b-col",
                              { attrs: { md: "6", sm: "12" } },
                              [
                                _c("validation-provider", {
                                  ref: "Avatar",
                                  attrs: {
                                    name: "Avatar",
                                    rules: "mimes:image/*|size:200",
                                  },
                                  scopedSlots: _vm._u(
                                    [
                                      {
                                        key: "default",
                                        fn: function (ref) {
                                          var validate = ref.validate
                                          var valid = ref.valid
                                          var errors = ref.errors
                                          return _c(
                                            "b-form-group",
                                            {
                                              attrs: {
                                                label: _vm.$t("UserImage"),
                                              },
                                            },
                                            [
                                              _c("input", {
                                                class: {
                                                  "is-invalid": !!errors.length,
                                                },
                                                attrs: {
                                                  state: errors[0]
                                                    ? false
                                                    : valid
                                                    ? true
                                                    : null,
                                                  label: "Choose Avatar",
                                                  type: "file",
                                                },
                                                on: {
                                                  change: _vm.onFileSelected,
                                                },
                                              }),
                                              _vm._v(" "),
                                              _c(
                                                "b-form-invalid-feedback",
                                                {
                                                  attrs: {
                                                    id: "Avatar-feedback",
                                                  },
                                                },
                                                [_vm._v(_vm._s(errors[0]))]
                                              ),
                                            ],
                                            1
                                          )
                                        },
                                      },
                                    ],
                                    null,
                                    false,
                                    2117094513
                                  ),
                                }),
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "b-col",
                              { attrs: { md: "6" } },
                              [
                                _c("validation-provider", {
                                  attrs: {
                                    name: "New password",
                                    rules: { min: 6, max: 14 },
                                  },
                                  scopedSlots: _vm._u(
                                    [
                                      {
                                        key: "default",
                                        fn: function (validationContext) {
                                          return [
                                            _c(
                                              "b-form-group",
                                              {
                                                attrs: {
                                                  label: _vm.$t("Newpassword"),
                                                },
                                              },
                                              [
                                                _c("b-form-input", {
                                                  attrs: {
                                                    state:
                                                      _vm.getValidationState(
                                                        validationContext
                                                      ),
                                                    "aria-describedby":
                                                      "Nawpassword-feedback",
                                                    placeholder:
                                                      _vm.$t("LeaveBlank"),
                                                    label: "New password",
                                                  },
                                                  model: {
                                                    value: _vm.user.NewPassword,
                                                    callback: function ($$v) {
                                                      _vm.$set(
                                                        _vm.user,
                                                        "NewPassword",
                                                        $$v
                                                      )
                                                    },
                                                    expression:
                                                      "user.NewPassword",
                                                  },
                                                }),
                                                _vm._v(" "),
                                                _c(
                                                  "b-form-invalid-feedback",
                                                  {
                                                    attrs: {
                                                      id: "Nawpassword-feedback",
                                                    },
                                                  },
                                                  [
                                                    _vm._v(
                                                      _vm._s(
                                                        validationContext
                                                          .errors[0]
                                                      )
                                                    ),
                                                  ]
                                                ),
                                              ],
                                              1
                                            ),
                                          ]
                                        },
                                      },
                                    ],
                                    null,
                                    false,
                                    1010016937
                                  ),
                                }),
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "b-col",
                              { staticClass: "mt-3", attrs: { md: "12" } },
                              [
                                _c(
                                  "b-button",
                                  {
                                    attrs: {
                                      variant: "primary",
                                      type: "submit",
                                    },
                                  },
                                  [_vm._v(_vm._s(_vm.$t("submit")))]
                                ),
                              ],
                              1
                            ),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                  ],
                  1
                ),
              ],
              1
            ),
          ])
        : _vm._e(),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);