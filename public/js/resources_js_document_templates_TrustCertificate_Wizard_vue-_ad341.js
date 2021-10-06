"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_document_templates_TrustCertificate_Wizard_vue-_ad341"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/document_templates/TrustCertificate/Wizard.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/document_templates/TrustCertificate/Wizard.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
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
  props: ['project', 'client'],
  data: function data() {
    var _this$project, _this$project$documen, _this$project2, _this$project2$docume, _this$project3, _this$project3$docume;

    return {
      currentStep: 1,
      menu1: '',
      form: this.$inertia.form({
        trust_name: ((_this$project = this.project) === null || _this$project === void 0 ? void 0 : (_this$project$documen = _this$project.document_data) === null || _this$project$documen === void 0 ? void 0 : _this$project$documen.trust_name) || this.project.name,
        first_trustee: ((_this$project2 = this.project) === null || _this$project2 === void 0 ? void 0 : (_this$project2$docume = _this$project2.document_data) === null || _this$project2$docume === void 0 ? void 0 : _this$project2$docume.first_trustee) || "".concat(this.client.first_name, " ").concat(this.client.last_name),
        settlor: (_this$project3 = this.project) === null || _this$project3 === void 0 ? void 0 : (_this$project3$docume = _this$project3.document_data) === null || _this$project3$docume === void 0 ? void 0 : _this$project3$docume.settlor
      })
    };
  },
  methods: {
    moment: (moment__WEBPACK_IMPORTED_MODULE_0___default()),
    updateProject: function updateProject() {
      this.form.put(route('admin.projects.update', {
        project: this.project.id,
        document_data: this.form.data()
      }));
      this.$emit('updateProject');
    },
    onClick: function onClick() {
      var steps = this.$el.querySelectorAll('.v-stepper__step').length;
      this.currentStep = this.currentStep === steps ? 1 : this.currentStep + 1;
      this.updateProject();
    }
  }
});

/***/ }),

/***/ "./resources/js/document_templates/TrustCertificate/Wizard.vue":
/*!*********************************************************************!*\
  !*** ./resources/js/document_templates/TrustCertificate/Wizard.vue ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Wizard_vue_vue_type_template_id_4da81a42___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Wizard.vue?vue&type=template&id=4da81a42& */ "./resources/js/document_templates/TrustCertificate/Wizard.vue?vue&type=template&id=4da81a42&");
/* harmony import */ var _Wizard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Wizard.vue?vue&type=script&lang=js& */ "./resources/js/document_templates/TrustCertificate/Wizard.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Wizard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Wizard_vue_vue_type_template_id_4da81a42___WEBPACK_IMPORTED_MODULE_0__.render,
  _Wizard_vue_vue_type_template_id_4da81a42___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/document_templates/TrustCertificate/Wizard.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/document_templates/TrustCertificate/Wizard.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/document_templates/TrustCertificate/Wizard.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Wizard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Wizard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/document_templates/TrustCertificate/Wizard.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Wizard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/document_templates/TrustCertificate/Wizard.vue?vue&type=template&id=4da81a42&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/document_templates/TrustCertificate/Wizard.vue?vue&type=template&id=4da81a42& ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Wizard_vue_vue_type_template_id_4da81a42___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Wizard_vue_vue_type_template_id_4da81a42___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Wizard_vue_vue_type_template_id_4da81a42___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Wizard.vue?vue&type=template&id=4da81a42& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/document_templates/TrustCertificate/Wizard.vue?vue&type=template&id=4da81a42&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/document_templates/TrustCertificate/Wizard.vue?vue&type=template&id=4da81a42&":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/document_templates/TrustCertificate/Wizard.vue?vue&type=template&id=4da81a42& ***!
  \*******************************************************************************************************************************************************************************************************************************************/
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
    "div",
    [
      [
        _c(
          "v-stepper",
          {
            attrs: { "alt-labels": "" },
            model: {
              value: _vm.currentStep,
              callback: function($$v) {
                _vm.currentStep = $$v
              },
              expression: "currentStep"
            }
          },
          [
            _c(
              "v-stepper-header",
              [
                _c(
                  "v-stepper-step",
                  {
                    attrs: {
                      editable: "",
                      complete: _vm.currentStep > 1,
                      step: "1"
                    }
                  },
                  [_vm._v("\n          Client Info\n        ")]
                ),
                _vm._v(" "),
                _c("v-divider")
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "v-stepper-items",
              [
                _c(
                  "v-stepper-content",
                  { attrs: { step: "1" } },
                  [
                    _c(
                      "v-card",
                      {
                        staticClass: "mb-12",
                        attrs: { color: "grey lighten-5" }
                      },
                      [
                        _c(
                          "v-flex",
                          { attrs: { "md-6": "" } },
                          [
                            _c("v-text-field", {
                              attrs: { label: "Trust Name" },
                              on: {
                                blur: _vm.updateProject,
                                keydown: function($event) {
                                  if (
                                    !$event.type.indexOf("key") &&
                                    _vm._k(
                                      $event.keyCode,
                                      "enter",
                                      13,
                                      $event.key,
                                      "Enter"
                                    )
                                  ) {
                                    return null
                                  }
                                  return _vm.updateProject.apply(
                                    null,
                                    arguments
                                  )
                                }
                              },
                              model: {
                                value: _vm.form.trust_name,
                                callback: function($$v) {
                                  _vm.$set(_vm.form, "trust_name", $$v)
                                },
                                expression: "form.trust_name"
                              }
                            }),
                            _vm._v(" "),
                            _c("v-text-field", {
                              attrs: { label: "First Trustee" },
                              on: {
                                blur: _vm.updateProject,
                                keydown: function($event) {
                                  if (
                                    !$event.type.indexOf("key") &&
                                    _vm._k(
                                      $event.keyCode,
                                      "enter",
                                      13,
                                      $event.key,
                                      "Enter"
                                    )
                                  ) {
                                    return null
                                  }
                                  return _vm.updateProject.apply(
                                    null,
                                    arguments
                                  )
                                }
                              },
                              model: {
                                value: _vm.form.first_trustee,
                                callback: function($$v) {
                                  _vm.$set(_vm.form, "first_trustee", $$v)
                                },
                                expression: "form.first_trustee"
                              }
                            }),
                            _vm._v(" "),
                            _c("v-text-field", {
                              attrs: { label: "Settlor" },
                              on: {
                                blur: _vm.updateProject,
                                keydown: function($event) {
                                  if (
                                    !$event.type.indexOf("key") &&
                                    _vm._k(
                                      $event.keyCode,
                                      "enter",
                                      13,
                                      $event.key,
                                      "Enter"
                                    )
                                  ) {
                                    return null
                                  }
                                  return _vm.updateProject.apply(
                                    null,
                                    arguments
                                  )
                                }
                              },
                              model: {
                                value: _vm.form.settlor,
                                callback: function($$v) {
                                  _vm.$set(_vm.form, "settlor", $$v)
                                },
                                expression: "form.settlor"
                              }
                            })
                          ],
                          1
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "v-btn",
                      {
                        attrs: { color: "primary" },
                        on: { click: _vm.onClick }
                      },
                      [_vm._v("\n            Continue\n          ")]
                    )
                  ],
                  1
                )
              ],
              1
            )
          ],
          1
        )
      ]
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);