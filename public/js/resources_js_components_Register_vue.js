"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Register_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Register.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Register.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
  data: function data() {
    return {
      hidepassword: true,
      form: this.$inertia.form({
        username: '',
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
        zip: '',
        remember: false,
        terms: false
      })
    };
  },
  methods: {
    submit: function submit() {
      var _this = this;

      this.form.name = this.form.username;
      this.form.post(this.route('register'), {
        onSuccess: function onSuccess(data) {},
        onFinish: function onFinish() {
          return _this.form.reset('password', 'password_confirmation');
        }
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/components/Register.vue":
/*!**********************************************!*\
  !*** ./resources/js/components/Register.vue ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Register_vue_vue_type_template_id_97358ae4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Register.vue?vue&type=template&id=97358ae4&scoped=true& */ "./resources/js/components/Register.vue?vue&type=template&id=97358ae4&scoped=true&");
/* harmony import */ var _Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Register.vue?vue&type=script&lang=js& */ "./resources/js/components/Register.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Register_vue_vue_type_template_id_97358ae4_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Register_vue_vue_type_template_id_97358ae4_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "97358ae4",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Register.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Register.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/components/Register.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Register.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Register.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Register.vue?vue&type=template&id=97358ae4&scoped=true&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/Register.vue?vue&type=template&id=97358ae4&scoped=true& ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_97358ae4_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_97358ae4_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_97358ae4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Register.vue?vue&type=template&id=97358ae4&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Register.vue?vue&type=template&id=97358ae4&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Register.vue?vue&type=template&id=97358ae4&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Register.vue?vue&type=template&id=97358ae4&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-card",
    [
      _c("v-card-title", [_vm._v("Register")]),
      _vm._v(" "),
      _c("v-card-text", [
        _c(
          "form",
          {
            on: {
              submit: function($event) {
                $event.preventDefault()
                return _vm.submit.apply(null, arguments)
              }
            }
          },
          [
            _c("v-text-field", {
              attrs: {
                "error-messages": _vm.form.errors.username,
                label: "Username",
                required: "",
                autofocus: "",
                autocomplete: "username"
              },
              model: {
                value: _vm.form.username,
                callback: function($$v) {
                  _vm.$set(_vm.form, "username", $$v)
                },
                expression: "form.username"
              }
            }),
            _vm._v(" "),
            _c("v-text-field", {
              attrs: {
                type: "email",
                "error-messages": _vm.form.errors.email,
                label: "email",
                required: "",
                autocomplete: "email"
              },
              model: {
                value: _vm.form.email,
                callback: function($$v) {
                  _vm.$set(_vm.form, "email", $$v)
                },
                expression: "form.email"
              }
            }),
            _vm._v(" "),
            _c("v-text-field", {
              attrs: {
                "error-messages": _vm.form.errors.password,
                label: "password",
                required: "",
                autocomplete: "password",
                "append-icon": _vm.hidepassword ? "mdi-eye" : "mdi-eye-off",
                type: _vm.hidepassword ? "password" : "text"
              },
              on: {
                "click:append": function() {
                  return (_vm.hidepassword = !_vm.hidepassword)
                }
              },
              model: {
                value: _vm.form.password,
                callback: function($$v) {
                  _vm.$set(_vm.form, "password", $$v)
                },
                expression: "form.password"
              }
            }),
            _vm._v(" "),
            _c("v-text-field", {
              attrs: {
                "error-messages": _vm.form.errors.password_confirmation,
                "append-icon":
                  _vm.form.password === _vm.form.password_confirmation
                    ? "mdi-check-circle"
                    : "mdi-alert-circle-outline",
                label: "Confirm Password",
                type: _vm.hidepassword ? "password" : "text",
                required: "",
                autocomplete: "new-password"
              },
              model: {
                value: _vm.form.password_confirmation,
                callback: function($$v) {
                  _vm.$set(_vm.form, "password_confirmation", $$v)
                },
                expression: "form.password_confirmation"
              }
            }),
            _vm._v(" "),
            _c("v-text-field", {
              directives: [
                {
                  name: "mask",
                  rawName: "v-mask",
                  value: "#####",
                  expression: "'#####'"
                }
              ],
              staticStyle: { "-webkit-appearance": "none", margin: "0" },
              attrs: {
                type: "number",
                "error-messages": _vm.form.errors.zip,
                label: "Zip",
                required: ""
              },
              model: {
                value: _vm.form.zip,
                callback: function($$v) {
                  _vm.$set(_vm.form, "zip", $$v)
                },
                expression: "form.zip"
              }
            }),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "flex items-center" },
              [
                _c("v-checkbox", {
                  attrs: { required: "" },
                  scopedSlots: _vm._u([
                    {
                      key: "label",
                      fn: function() {
                        return [
                          _c("div", { staticClass: "ml-2" }, [
                            _vm._v("\n              I agree to the "),
                            _c(
                              "a",
                              {
                                staticClass:
                                  "underline text-sm text-gray-600 hover:text-gray-900",
                                attrs: {
                                  target: "_blank",
                                  href: _vm.route("terms.show")
                                }
                              },
                              [_vm._v("Terms of Service")]
                            ),
                            _vm._v(" and\n              "),
                            _c(
                              "a",
                              {
                                staticClass:
                                  "underline text-sm text-gray-600 hover:text-gray-900",
                                attrs: {
                                  target: "_blank",
                                  href: _vm.route("policy.show")
                                }
                              },
                              [_vm._v("Privacy Policy")]
                            )
                          ])
                        ]
                      },
                      proxy: true
                    }
                  ]),
                  model: {
                    value: _vm.form.terms,
                    callback: function($$v) {
                      _vm.$set(_vm.form, "terms", $$v)
                    },
                    expression: "form.terms"
                  }
                })
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "flex items-center justify-between mt-4" },
              [
                _c(
                  "div",
                  [
                    _c("v-btn", { attrs: { type: "submit" } }, [
                      _vm._v("Register")
                    ])
                  ],
                  1
                )
              ]
            )
          ],
          1
        )
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);