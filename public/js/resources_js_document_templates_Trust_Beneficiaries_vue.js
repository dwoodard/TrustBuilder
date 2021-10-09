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
    hasUnitsLeft: function hasUnitsLeft() {
      return this.totalUnitsLeft > 0;
    }
  },
  methods: {
    add: function add() {
      this.$emit('add', this.newBeneficiary);
      this.newBeneficiary = {
        name: '',
        units: 0
      };
    },
    remove: function remove(index) {
      this.$emit('remove', index);
    },
    update: function update() {
      this.$emit('update');
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
      _vm.hasUnitsLeft
        ? _c("v-card-subtitle", [
            _vm._v(
              "Units Left " +
                _vm._s(_vm.totalUnitsLeft - _vm.newBeneficiary.units)
            )
          ])
        : _vm._e(),
      _vm._v(" "),
      _c(
        "v-card-text",
        [
          _c(
            "div",
            { staticClass: "d-flex flex-row" },
            [
              _c("v-text-field", {
                attrs: {
                  rules: [
                    function() {
                      return !!_vm.newBeneficiary.name
                    }
                  ],
                  label: "Beneficiary Name",
                  "prepend-icon": "account_circle",
                  "append-icon-click": "add"
                },
                model: {
                  value: _vm.newBeneficiary.name,
                  callback: function($$v) {
                    _vm.$set(_vm.newBeneficiary, "name", $$v)
                  },
                  expression: "newBeneficiary.name"
                }
              }),
              _vm._v(" "),
              _c(
                "v-btn",
                { attrs: { color: "primary" }, on: { click: _vm.add } },
                [_vm._v("Add Beneficiary")]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            [
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
                  disabled: !_vm.hasUnitsLeft,
                  "prepend-icon": "mdi-percent",
                  max: _vm.totalUnitsLeft,
                  label: "Units",
                  hint: String(_vm.newBeneficiary.units + " units left "),
                  "persistent-hint": "",
                  "append-icon-click": "add"
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
          ),
          _vm._v(" "),
          _c(
            "v-list",
            _vm._l(_vm.beneficiaries, function(item, index) {
              return _c(
                "v-list-item",
                { key: index, staticClass: "grey lighten-5 " },
                [
                  _c(
                    "v-text-field",
                    {
                      attrs: {
                        outlined: "",
                        "single-line": "",
                        value: item.name
                      },
                      on: {
                        change: function($event) {
                          return _vm.update($event, index)
                        }
                      }
                    },
                    [
                      _c("v-spacer"),
                      _vm._v(" "),
                      _c("v-icon", { attrs: { color: "danger" } }, [
                        _vm._v("mdi-trash-can")
                      ])
                    ],
                    1
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