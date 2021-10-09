"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_document_templates_Trust_Beneficiaries_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/document_templates/Trust/Beneficiaries.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/document_templates/Trust/Beneficiaries.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    beneficiaries: {
      type: Array,
      "default": function _default() {
        return [];
      }
    }
  },
  data: function data() {
    return {
      newBeneficiary: {
        name: '',
        units: 0
      },
      rules: {
        name: [function (value) {
          return !!value || 'Required.';
        }],
        units: [// (value) => !!value || 'Required.',
          // (value) => value < 100 || 'Can not be over 100'
        ]
      },
      errors: {
        name: null,
        units: null
      }
    };
  },
  computed: {
    totalUnits: function totalUnits() {
      // convert units to a number and add all units up
      return this.beneficiaries.reduce(function (total, item) {
        return total + Number(item.units);
      }, 0);
    },
    totalUnitsLeft: function totalUnitsLeft() {
      return 100 - this.totalUnits;
    },
    hasUnits: function hasUnits() {
      return this.totalUnitsLeft > 0;
    }
  },
  methods: {
    add: function add() {
      if (this.checkForErrors()) {
        return;
      }

      this.$emit('add', this.newBeneficiary);
      this.newBeneficiary = {
        name: '',
        units: 0
      };
      this.checkForErrors();
    },
    remove: function remove(index) {
      this.$emit('remove', index);
    },
    update: function update(event, index) {
      this.beneficiaries[index].name = event;
      this.$emit('update', this.beneficiaries);
    },
    checkForErrors: function checkForErrors() {
      var _this = this;

      var hasError = false;
      Object.keys(this.rules).forEach(function (key) {
        var rules = _this.rules[key];
        var value = _this.newBeneficiary[key];
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

/***/ "./resources/js/document_templates/Trust/Beneficiaries.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/document_templates/Trust/Beneficiaries.vue ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Beneficiaries_vue_vue_type_template_id_66521590___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Beneficiaries.vue?vue&type=template&id=66521590& */ "./resources/js/document_templates/Trust/Beneficiaries.vue?vue&type=template&id=66521590&");
/* harmony import */ var _Beneficiaries_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Beneficiaries.vue?vue&type=script&lang=js& */ "./resources/js/document_templates/Trust/Beneficiaries.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Beneficiaries_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Beneficiaries_vue_vue_type_template_id_66521590___WEBPACK_IMPORTED_MODULE_0__.render,
  _Beneficiaries_vue_vue_type_template_id_66521590___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/document_templates/Trust/Beneficiaries.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/document_templates/Trust/Beneficiaries.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/js/document_templates/Trust/Beneficiaries.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Beneficiaries_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Beneficiaries.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/document_templates/Trust/Beneficiaries.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Beneficiaries_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/document_templates/Trust/Beneficiaries.vue?vue&type=template&id=66521590&":
/*!************************************************************************************************!*\
  !*** ./resources/js/document_templates/Trust/Beneficiaries.vue?vue&type=template&id=66521590& ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Beneficiaries_vue_vue_type_template_id_66521590___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Beneficiaries_vue_vue_type_template_id_66521590___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Beneficiaries_vue_vue_type_template_id_66521590___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Beneficiaries.vue?vue&type=template&id=66521590& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/document_templates/Trust/Beneficiaries.vue?vue&type=template&id=66521590&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/document_templates/Trust/Beneficiaries.vue?vue&type=template&id=66521590&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/document_templates/Trust/Beneficiaries.vue?vue&type=template&id=66521590& ***!
  \***************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "mt-4 mb-10", attrs: { outlined: "" } },
    [
      _c("v-card-title", [_vm._v("Beneficiaries ")]),
      _vm._v(" "),
      _vm.hasUnits
        ? _c("v-card-subtitle", [
            _vm._v(
              "\n    Units Left " +
                _vm._s(_vm.totalUnitsLeft - _vm.newBeneficiary.units) +
                "\n  "
            )
          ])
        : _vm._e(),
      _vm._v(" "),
      _c(
        "v-card-text",
        [
          _c(
            "v-row",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.hasUnits,
                  expression: "hasUnits"
                }
              ]
            },
            [
              _c(
                "v-col",
                { attrs: { cols: "12", sm: "6" } },
                [
                  _c("v-text-field", {
                    attrs: {
                      rules: _vm.rules.name,
                      "error-messages": _vm.errors.name,
                      label: "Beneficiary Name",
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
                      value: _vm.newBeneficiary.name,
                      callback: function($$v) {
                        _vm.$set(_vm.newBeneficiary, "name", $$v)
                      },
                      expression: "newBeneficiary.name"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-col",
                { attrs: { cols: "12", sm: "6" } },
                [
                  _c("v-text-field", {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: !!_vm.newBeneficiary.name,
                        expression: "!!newBeneficiary.name"
                      }
                    ],
                    attrs: {
                      "error-messages": _vm.errors.units,
                      label: "Units",
                      type: "number"
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
                      value: _vm.newBeneficiary.units,
                      callback: function($$v) {
                        _vm.$set(_vm.newBeneficiary, "units", $$v)
                      },
                      expression: "newBeneficiary.units"
                    }
                  }),
                  _vm._v(" "),
                  _c("v-slider", {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: !!_vm.newBeneficiary.name,
                        expression: "!!newBeneficiary.name"
                      }
                    ],
                    attrs: {
                      min: "0",
                      disabled: !_vm.hasUnits,
                      max: _vm.totalUnitsLeft,
                      hint:
                        _vm.newBeneficiary.name +
                        " will receive " +
                        _vm.newBeneficiary.units +
                        " Units",
                      "persistent-hint": ""
                    },
                    model: {
                      value: _vm.newBeneficiary.units,
                      callback: function($$v) {
                        _vm.$set(_vm.newBeneficiary, "units", $$v)
                      },
                      expression: "newBeneficiary.units"
                    }
                  })
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _vm.hasUnits
            ? _c(
                "v-row",
                [
                  _c(
                    "v-col",
                    { attrs: { cols: "12", sm: "6", offset: "6" } },
                    [
                      _c(
                        "v-btn",
                        { attrs: { color: "primary" }, on: { click: _vm.add } },
                        [_vm._v("Add Beneficiary")]
                      )
                    ],
                    1
                  )
                ],
                1
              )
            : _vm._e(),
          _vm._v(" "),
          _c(
            "v-list",
            _vm._l(_vm.beneficiaries, function(item, index) {
              return _c(
                "v-list-item",
                { key: index, staticClass: "grey lighten-5 " },
                [
                  _c("v-text-field", {
                    attrs: { outlined: "", "single-line": "" },
                    on: {
                      change: function($event) {
                        return _vm.update($event, index)
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
                  _c("v-text-field", {
                    attrs: {
                      type: "number",
                      min: "0",
                      max: _vm.totalUnitsLeft,
                      label: item.units + " Units"
                    },
                    model: {
                      value: item.units,
                      callback: function($$v) {
                        _vm.$set(item, "units", $$v)
                      },
                      expression: "item.units"
                    }
                  }),
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
          ),
          _vm._v(" "),
          _c("hr"),
          _vm._v(" "),
          _c("div", { staticClass: " " }, [
            _vm._v("\n      " + _vm._s(_vm.$props) + "\n      "),
            _c("br"),
            _vm._v(
              "\n      " +
                _vm._s(_vm.totalUnits) +
                " " +
                _vm._s(_vm.totalUnitsLeft) +
                "\n    "
            )
          ]),
          _vm._v(" "),
          _c("v-card-text")
        ],
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