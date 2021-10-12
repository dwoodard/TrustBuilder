"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_document_templates_Trust_Trustees_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/document_templates/Trust/Trustees.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/document_templates/Trust/Trustees.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    trustees: {
      type: Object,
      "default": function _default() {}
    }
  },
  data: function data() {
    return {
      newFirstTrustee: {
        name: ''
      },
      newSecondTrustee: {
        name: ''
      },
      rules: {
        name: [function (value) {
          return !!value || 'Required.';
        }]
      },
      errors: {
        name: null
      }
    };
  },
  computed: {},
  methods: {
    add: function add() {
      if (this.checkForErrors()) {
        return;
      }

      this.$emit('addTrustee', this.newFirstTrustee);
      this.newFirstTrustee = {
        name: ''
      };
      this.checkForErrors();
    },
    remove: function remove(index) {
      this.$emit('removeTrustee', index);
    },
    update: function update() {
      this.$emit('updateTrustee', this.trustees);
    },
    // needs refactoring, duplicate from Beneficiary.vue
    checkForErrors: function checkForErrors() {
      var _this = this;

      var hasError = false;
      Object.keys(this.rules).forEach(function (key) {
        var rules = _this.rules[key];
        var value = _this.newFirstTrustee[key];
        rules.forEach(function (rule) {
          var error = rule(value);

          if (typeof error === 'string') {
            _this.errors[key] = error;
            hasError = true;
          } else {
            _this.errors[key] = null;
          }
        });
      });
      return hasError;
    }
  }
});

/***/ }),

/***/ "./resources/js/document_templates/Trust/Trustees.vue":
/*!************************************************************!*\
  !*** ./resources/js/document_templates/Trust/Trustees.vue ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Trustees_vue_vue_type_template_id_4f443f84___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Trustees.vue?vue&type=template&id=4f443f84& */ "./resources/js/document_templates/Trust/Trustees.vue?vue&type=template&id=4f443f84&");
/* harmony import */ var _Trustees_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Trustees.vue?vue&type=script&lang=js& */ "./resources/js/document_templates/Trust/Trustees.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Trustees_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Trustees_vue_vue_type_template_id_4f443f84___WEBPACK_IMPORTED_MODULE_0__.render,
  _Trustees_vue_vue_type_template_id_4f443f84___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/document_templates/Trust/Trustees.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/document_templates/Trust/Trustees.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/document_templates/Trust/Trustees.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Trustees_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Trustees.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/document_templates/Trust/Trustees.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Trustees_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/document_templates/Trust/Trustees.vue?vue&type=template&id=4f443f84&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/document_templates/Trust/Trustees.vue?vue&type=template&id=4f443f84& ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Trustees_vue_vue_type_template_id_4f443f84___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Trustees_vue_vue_type_template_id_4f443f84___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Trustees_vue_vue_type_template_id_4f443f84___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Trustees.vue?vue&type=template&id=4f443f84& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/document_templates/Trust/Trustees.vue?vue&type=template&id=4f443f84&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/document_templates/Trust/Trustees.vue?vue&type=template&id=4f443f84&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/document_templates/Trust/Trustees.vue?vue&type=template&id=4f443f84& ***!
  \**********************************************************************************************************************************************************************************************************************************/
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
    "v-container",
    [
      _c(
        "v-card",
        { staticClass: "mt-4 mb-10", attrs: { outlined: "" } },
        [
          _c("v-card-title", [_vm._v("First Trustees")]),
          _vm._v(" "),
          _c(
            "v-card-text",
            [
              _c(
                "v-row",
                [
                  _c(
                    "v-col",
                    [
                      _c("v-text-field", {
                        attrs: {
                          rules: _vm.rules.name,
                          "error-messages": _vm.errors.name,
                          label: "Trustee Name",
                          "prepend-icon": "account_circle",
                          "append-icon-click": "add"
                        },
                        on: {
                          keyup: [
                            _vm.checkForErrors,
                            function($event) {
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
                              return _vm.add.apply(null, arguments)
                            }
                          ]
                        },
                        model: {
                          value: _vm.newFirstTrustee.name,
                          callback: function($$v) {
                            _vm.$set(_vm.newFirstTrustee, "name", $$v)
                          },
                          expression: "newFirstTrustee.name"
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
                "v-row",
                [
                  _c(
                    "v-col",
                    { attrs: { cols: "12", sm: "6", offset: "6" } },
                    [
                      _c(
                        "v-btn",
                        { attrs: { color: "primary" }, on: { click: _vm.add } },
                        [_vm._v("Add Trustee")]
                      )
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-list",
                _vm._l(_vm.trustees, function(item, index) {
                  return _c(
                    "v-list-item",
                    { key: index },
                    [
                      _c("v-text-field", {
                        attrs: { outlined: "", "single-line": "" },
                        on: {
                          change: function($event) {
                            return _vm.update()
                          }
                        },
                        model: {
                          value: item.name,
                          callback: function($$v) {
                            _vm.$set(item, "name", $$v)
                          },
                          expression: "item.name"
                        }
                      }),
                      _vm._v(" "),
                      _c("v-spacer"),
                      _vm._v(" "),
                      _c(
                        "v-icon",
                        {
                          attrs: { color: "danger" },
                          on: {
                            click: function($event) {
                              return _vm.remove(index)
                            }
                          }
                        },
                        [_vm._v("mdi-trash-can")]
                      )
                    ],
                    1
                  )
                }),
                1
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-card",
        { attrs: { outlined: "" } },
        [_c("v-card-title", [_vm._v("Second Trustees")])],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);