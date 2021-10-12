(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_Admin_ClientProject_print_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layouts/Admin/DocumentTemplate.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layouts/Admin/DocumentTemplate.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {};
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Admin/ClientProject/print.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Admin/ClientProject/print.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _layouts_Admin_DocumentTemplate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../layouts/Admin/DocumentTemplate */ "./resources/js/layouts/Admin/DocumentTemplate.vue");
//
//
//
//
//
//
//
//
//
//
//
//


__webpack_require__(/*! ../../../../css/print.css */ "./resources/css/print.css");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  layout: _layouts_Admin_DocumentTemplate__WEBPACK_IMPORTED_MODULE_0__["default"],
  props: ['client', 'project', 'templates'],
  data: function data() {
    return {};
  },
  mounted: function mounted() {},
  computed: {
    dynamicComponents: function dynamicComponents() {
      var _this = this;

      return this.templates.map(function (template) {
        return function () {
          return __webpack_require__("./resources/js/document_templates lazy recursive ^\\.\\/.*$")("./".concat(_this.project.type, "/").concat(template));
        };
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./resources/css/print.css":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./resources/css/print.css ***!
  \******************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@media print {\n\n    .preview-field {\n        color: #000000;\n    }\n\n    .break-before {\n        clear: both;\n        page-break-after: always;\n    }\n\n    .break-after {\n        clear: both;\n        page-break-after: always;\n    }\n\n    @page {\n        size: 8.5in 11in;\n        margin: 1cm;\n    }\n\n\n}\n\n\n#trust_certificates {\n    margin: 0;\n    padding: 0;\n}\n\n\n\n\n@-moz-document url-prefix() {\n    @media print { {\n        display: block;\n    }\n        --wrap {\n            display: block;\n        }\n    }\n}\n\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./resources/css/print.css":
/*!*********************************!*\
  !*** ./resources/css/print.css ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_print_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./print.css */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./resources/css/print.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_print_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_print_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/layouts/Admin/DocumentTemplate.vue":
/*!*********************************************************!*\
  !*** ./resources/js/layouts/Admin/DocumentTemplate.vue ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DocumentTemplate_vue_vue_type_template_id_92999f0e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DocumentTemplate.vue?vue&type=template&id=92999f0e&scoped=true& */ "./resources/js/layouts/Admin/DocumentTemplate.vue?vue&type=template&id=92999f0e&scoped=true&");
/* harmony import */ var _DocumentTemplate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DocumentTemplate.vue?vue&type=script&lang=js& */ "./resources/js/layouts/Admin/DocumentTemplate.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DocumentTemplate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DocumentTemplate_vue_vue_type_template_id_92999f0e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _DocumentTemplate_vue_vue_type_template_id_92999f0e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "92999f0e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/layouts/Admin/DocumentTemplate.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Admin/ClientProject/print.vue":
/*!**********************************************************!*\
  !*** ./resources/js/pages/Admin/ClientProject/print.vue ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _print_vue_vue_type_template_id_6eeb4813_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./print.vue?vue&type=template&id=6eeb4813&scoped=true& */ "./resources/js/pages/Admin/ClientProject/print.vue?vue&type=template&id=6eeb4813&scoped=true&");
/* harmony import */ var _print_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./print.vue?vue&type=script&lang=js& */ "./resources/js/pages/Admin/ClientProject/print.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _print_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _print_vue_vue_type_template_id_6eeb4813_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _print_vue_vue_type_template_id_6eeb4813_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "6eeb4813",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Admin/ClientProject/print.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/layouts/Admin/DocumentTemplate.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/layouts/Admin/DocumentTemplate.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DocumentTemplate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DocumentTemplate.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layouts/Admin/DocumentTemplate.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DocumentTemplate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/Admin/ClientProject/print.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/pages/Admin/ClientProject/print.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_print_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./print.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Admin/ClientProject/print.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_print_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/layouts/Admin/DocumentTemplate.vue?vue&type=template&id=92999f0e&scoped=true&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/layouts/Admin/DocumentTemplate.vue?vue&type=template&id=92999f0e&scoped=true& ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DocumentTemplate_vue_vue_type_template_id_92999f0e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DocumentTemplate_vue_vue_type_template_id_92999f0e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DocumentTemplate_vue_vue_type_template_id_92999f0e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DocumentTemplate.vue?vue&type=template&id=92999f0e&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layouts/Admin/DocumentTemplate.vue?vue&type=template&id=92999f0e&scoped=true&");


/***/ }),

/***/ "./resources/js/pages/Admin/ClientProject/print.vue?vue&type=template&id=6eeb4813&scoped=true&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/pages/Admin/ClientProject/print.vue?vue&type=template&id=6eeb4813&scoped=true& ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_print_vue_vue_type_template_id_6eeb4813_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_print_vue_vue_type_template_id_6eeb4813_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_print_vue_vue_type_template_id_6eeb4813_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./print.vue?vue&type=template&id=6eeb4813&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Admin/ClientProject/print.vue?vue&type=template&id=6eeb4813&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layouts/Admin/DocumentTemplate.vue?vue&type=template&id=92999f0e&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layouts/Admin/DocumentTemplate.vue?vue&type=template&id=92999f0e&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
    "v-app",
    { staticClass: "print" },
    [_c("v-main", [_vm._t("default")], 2)],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Admin/ClientProject/print.vue?vue&type=template&id=6eeb4813&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Admin/ClientProject/print.vue?vue&type=template&id=6eeb4813&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
    _vm._l(_vm.dynamicComponents, function(template) {
      return _c(
        "div",
        [
          _c(template, {
            tag: "component",
            attrs: { project: _vm.project, client: _vm.client },
            on: {
              "update:project": function($event) {
                _vm.project = $event
              },
              "update:client": function($event) {
                _vm.client = $event
              }
            }
          }),
          _vm._v(" "),
          _c("div", { staticClass: "break-before" })
        ],
        1
      )
    }),
    0
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/document_templates lazy recursive ^\\.\\/.*$":
/*!*************************************************************************!*\
  !*** ./resources/js/document_templates/ lazy ^\.\/.*$ namespace object ***!
  \*************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./DeclarationOfStatus/Wizard": [
		"./resources/js/document_templates/DeclarationOfStatus/Wizard.vue",
		"resources_js_document_templates_DeclarationOfStatus_Wizard_vue"
	],
	"./DeclarationOfStatus/Wizard.vue": [
		"./resources/js/document_templates/DeclarationOfStatus/Wizard.vue",
		"resources_js_document_templates_DeclarationOfStatus_Wizard_vue"
	],
	"./Trust/1_DeclarationOfTrust": [
		"./resources/js/document_templates/Trust/1_DeclarationOfTrust/index.vue",
		"resources_js_document_templates_Trust_1_DeclarationOfTrust_index_vue"
	],
	"./Trust/1_DeclarationOfTrust/": [
		"./resources/js/document_templates/Trust/1_DeclarationOfTrust/index.vue",
		"resources_js_document_templates_Trust_1_DeclarationOfTrust_index_vue"
	],
	"./Trust/1_DeclarationOfTrust/index": [
		"./resources/js/document_templates/Trust/1_DeclarationOfTrust/index.vue",
		"resources_js_document_templates_Trust_1_DeclarationOfTrust_index_vue"
	],
	"./Trust/1_DeclarationOfTrust/index.vue": [
		"./resources/js/document_templates/Trust/1_DeclarationOfTrust/index.vue",
		"resources_js_document_templates_Trust_1_DeclarationOfTrust_index_vue"
	],
	"./Trust/2_TrustIndenture": [
		"./resources/js/document_templates/Trust/2_TrustIndenture/index.vue",
		"resources_js_document_templates_Trust_2_TrustIndenture_index_vue"
	],
	"./Trust/2_TrustIndenture/": [
		"./resources/js/document_templates/Trust/2_TrustIndenture/index.vue",
		"resources_js_document_templates_Trust_2_TrustIndenture_index_vue"
	],
	"./Trust/2_TrustIndenture/index": [
		"./resources/js/document_templates/Trust/2_TrustIndenture/index.vue",
		"resources_js_document_templates_Trust_2_TrustIndenture_index_vue"
	],
	"./Trust/2_TrustIndenture/index.vue": [
		"./resources/js/document_templates/Trust/2_TrustIndenture/index.vue",
		"resources_js_document_templates_Trust_2_TrustIndenture_index_vue"
	],
	"./Trust/3_ScheduleA": [
		"./resources/js/document_templates/Trust/3_ScheduleA/index.vue",
		"resources_js_document_templates_Trust_3_ScheduleA_index_vue"
	],
	"./Trust/3_ScheduleA/": [
		"./resources/js/document_templates/Trust/3_ScheduleA/index.vue",
		"resources_js_document_templates_Trust_3_ScheduleA_index_vue"
	],
	"./Trust/3_ScheduleA/index": [
		"./resources/js/document_templates/Trust/3_ScheduleA/index.vue",
		"resources_js_document_templates_Trust_3_ScheduleA_index_vue"
	],
	"./Trust/3_ScheduleA/index.vue": [
		"./resources/js/document_templates/Trust/3_ScheduleA/index.vue",
		"resources_js_document_templates_Trust_3_ScheduleA_index_vue"
	],
	"./Trust/4_ScheduleB": [
		"./resources/js/document_templates/Trust/4_ScheduleB/index.vue",
		"resources_js_document_templates_Trust_4_ScheduleB_index_vue"
	],
	"./Trust/4_ScheduleB/": [
		"./resources/js/document_templates/Trust/4_ScheduleB/index.vue",
		"resources_js_document_templates_Trust_4_ScheduleB_index_vue"
	],
	"./Trust/4_ScheduleB/index": [
		"./resources/js/document_templates/Trust/4_ScheduleB/index.vue",
		"resources_js_document_templates_Trust_4_ScheduleB_index_vue"
	],
	"./Trust/4_ScheduleB/index.vue": [
		"./resources/js/document_templates/Trust/4_ScheduleB/index.vue",
		"resources_js_document_templates_Trust_4_ScheduleB_index_vue"
	],
	"./Trust/5_TrustCertificate": [
		"./resources/js/document_templates/Trust/5_TrustCertificate/index.vue",
		"resources_js_document_templates_Trust_5_TrustCertificate_index_vue"
	],
	"./Trust/5_TrustCertificate/": [
		"./resources/js/document_templates/Trust/5_TrustCertificate/index.vue",
		"resources_js_document_templates_Trust_5_TrustCertificate_index_vue"
	],
	"./Trust/5_TrustCertificate/index": [
		"./resources/js/document_templates/Trust/5_TrustCertificate/index.vue",
		"resources_js_document_templates_Trust_5_TrustCertificate_index_vue"
	],
	"./Trust/5_TrustCertificate/index.vue": [
		"./resources/js/document_templates/Trust/5_TrustCertificate/index.vue",
		"resources_js_document_templates_Trust_5_TrustCertificate_index_vue"
	],
	"./Trust/6_MeetingMinutes001": [
		"./resources/js/document_templates/Trust/6_MeetingMinutes001/index.vue",
		"resources_js_document_templates_Trust_6_MeetingMinutes001_index_vue"
	],
	"./Trust/6_MeetingMinutes001/": [
		"./resources/js/document_templates/Trust/6_MeetingMinutes001/index.vue",
		"resources_js_document_templates_Trust_6_MeetingMinutes001_index_vue"
	],
	"./Trust/6_MeetingMinutes001/index": [
		"./resources/js/document_templates/Trust/6_MeetingMinutes001/index.vue",
		"resources_js_document_templates_Trust_6_MeetingMinutes001_index_vue"
	],
	"./Trust/6_MeetingMinutes001/index.vue": [
		"./resources/js/document_templates/Trust/6_MeetingMinutes001/index.vue",
		"resources_js_document_templates_Trust_6_MeetingMinutes001_index_vue"
	],
	"./Trust/7_MeetingMinutes002": [
		"./resources/js/document_templates/Trust/7_MeetingMinutes002/index.vue",
		"resources_js_document_templates_Trust_7_MeetingMinutes002_index_vue"
	],
	"./Trust/7_MeetingMinutes002/": [
		"./resources/js/document_templates/Trust/7_MeetingMinutes002/index.vue",
		"resources_js_document_templates_Trust_7_MeetingMinutes002_index_vue"
	],
	"./Trust/7_MeetingMinutes002/index": [
		"./resources/js/document_templates/Trust/7_MeetingMinutes002/index.vue",
		"resources_js_document_templates_Trust_7_MeetingMinutes002_index_vue"
	],
	"./Trust/7_MeetingMinutes002/index.vue": [
		"./resources/js/document_templates/Trust/7_MeetingMinutes002/index.vue",
		"resources_js_document_templates_Trust_7_MeetingMinutes002_index_vue"
	],
	"./Trust/8_BoardResolution": [
		"./resources/js/document_templates/Trust/8_BoardResolution/index.vue",
		"resources_js_document_templates_Trust_8_BoardResolution_index_vue"
	],
	"./Trust/8_BoardResolution/": [
		"./resources/js/document_templates/Trust/8_BoardResolution/index.vue",
		"resources_js_document_templates_Trust_8_BoardResolution_index_vue"
	],
	"./Trust/8_BoardResolution/index": [
		"./resources/js/document_templates/Trust/8_BoardResolution/index.vue",
		"resources_js_document_templates_Trust_8_BoardResolution_index_vue"
	],
	"./Trust/8_BoardResolution/index.vue": [
		"./resources/js/document_templates/Trust/8_BoardResolution/index.vue",
		"resources_js_document_templates_Trust_8_BoardResolution_index_vue"
	],
	"./Trust/Beneficiaries": [
		"./resources/js/document_templates/Trust/Beneficiaries.vue",
		"resources_js_document_templates_Trust_Beneficiaries_vue"
	],
	"./Trust/Beneficiaries.vue": [
		"./resources/js/document_templates/Trust/Beneficiaries.vue",
		"resources_js_document_templates_Trust_Beneficiaries_vue"
	],
	"./Trust/Wizard": [
		"./resources/js/document_templates/Trust/Wizard.vue",
		"resources_js_document_templates_Trust_Wizard_vue"
	],
	"./Trust/Wizard.vue": [
		"./resources/js/document_templates/Trust/Wizard.vue",
		"resources_js_document_templates_Trust_Wizard_vue"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = "./resources/js/document_templates lazy recursive ^\\.\\/.*$";
module.exports = webpackAsyncContext;

/***/ })

}]);