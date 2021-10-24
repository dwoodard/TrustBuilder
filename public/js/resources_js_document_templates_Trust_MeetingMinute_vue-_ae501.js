"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_document_templates_Trust_MeetingMinute_vue-_ae501"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/document_templates/Trust/MeetingMinute.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/document_templates/Trust/MeetingMinute.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************/
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['minute', 'client', 'project'],
  computed: {
    document_created_at: function document_created_at() {
      return new Date();
    },
    trust_name: function trust_name() {
      var _this$project, _this$project$documen, _this$project2;

      return ((_this$project = this.project) === null || _this$project === void 0 ? void 0 : (_this$project$documen = _this$project.document_data) === null || _this$project$documen === void 0 ? void 0 : _this$project$documen.trust_name) || (this === null || this === void 0 ? void 0 : (_this$project2 = this.project) === null || _this$project2 === void 0 ? void 0 : _this$project2.name);
    },
    mailing_address: function mailing_address() {
      var _this$project3, _this$project3$docume;

      return (_this$project3 = this.project) === null || _this$project3 === void 0 ? void 0 : (_this$project3$docume = _this$project3.document_data) === null || _this$project3$docume === void 0 ? void 0 : _this$project3$docume.mailing_address;
    },
    meeting_number: function meeting_number() {
      var _this$minute;

      return ((_this$minute = this.minute) === null || _this$minute === void 0 ? void 0 : _this$minute.meeting_number.toString().padStart(3, '0')) || 0;
    }
  },
  methods: {
    moment: (moment__WEBPACK_IMPORTED_MODULE_0___default())
  }
});

/***/ }),

/***/ "./resources/js/document_templates/Trust/MeetingMinute.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/document_templates/Trust/MeetingMinute.vue ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _MeetingMinute_vue_vue_type_template_id_14af617c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MeetingMinute.vue?vue&type=template&id=14af617c&scoped=true& */ "./resources/js/document_templates/Trust/MeetingMinute.vue?vue&type=template&id=14af617c&scoped=true&");
/* harmony import */ var _MeetingMinute_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MeetingMinute.vue?vue&type=script&lang=js& */ "./resources/js/document_templates/Trust/MeetingMinute.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _MeetingMinute_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MeetingMinute_vue_vue_type_template_id_14af617c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _MeetingMinute_vue_vue_type_template_id_14af617c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "14af617c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/document_templates/Trust/MeetingMinute.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/document_templates/Trust/MeetingMinute.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/js/document_templates/Trust/MeetingMinute.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MeetingMinute_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MeetingMinute.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/document_templates/Trust/MeetingMinute.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MeetingMinute_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/document_templates/Trust/MeetingMinute.vue?vue&type=template&id=14af617c&scoped=true&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/document_templates/Trust/MeetingMinute.vue?vue&type=template&id=14af617c&scoped=true& ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MeetingMinute_vue_vue_type_template_id_14af617c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MeetingMinute_vue_vue_type_template_id_14af617c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MeetingMinute_vue_vue_type_template_id_14af617c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MeetingMinute.vue?vue&type=template&id=14af617c&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/document_templates/Trust/MeetingMinute.vue?vue&type=template&id=14af617c&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/document_templates/Trust/MeetingMinute.vue?vue&type=template&id=14af617c&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/document_templates/Trust/MeetingMinute.vue?vue&type=template&id=14af617c&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", [
    _c("p", [
      _vm._v("MINUTES OF MEETING # "),
      _c("b", [_vm._v(_vm._s(_vm.meeting_number))]),
      _vm._v(", BOARD OF TRUSTEES (hereafter BOARD)")
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "preview-field" }, [
      _c("b", [_vm._v(_vm._s(_vm.trust_name))]),
      _vm._v(" "),
      _c("br"),
      _vm._v("\n    " + _vm._s(_vm.mailing_address.address)),
      _c("br"),
      _vm._v(
        "\n    " +
          _vm._s(_vm.mailing_address.city) +
          " " +
          _vm._s(_vm.mailing_address.zip) +
          " "
      ),
      _c("br"),
      _vm._v(" "),
      _c("b", { staticClass: "preview-field" }, [
        _c("br"),
        _vm._v(
          "\n      " +
            _vm._s(_vm.moment(_vm.document_created_at).format("MMMM D, YYYY")) +
            "\n    "
        )
      ])
    ]),
    _vm._v(" "),
    _c("pre", [_vm._v(_vm._s(_vm.minute))]),
    _vm._v(" "),
    _c("pre", [_vm._v(_vm._s(_vm.project))])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);