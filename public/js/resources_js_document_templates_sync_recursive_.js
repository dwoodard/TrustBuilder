(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_document_templates_sync_recursive_"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/document_templates/DeclarationOfTrust/Wizard.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/document_templates/DeclarationOfTrust/Wizard.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    var _this$project, _this$project$documen, _this$project2, _this$project2$docume, _this$project3, _this$project3$docume, _this$project4, _this$project4$docume;

    return {
      currentStep: 1,
      MenuDocumentCreated: '',
      form: this.$inertia.form({
        trust_name: ((_this$project = this.project) === null || _this$project === void 0 ? void 0 : (_this$project$documen = _this$project.document_data) === null || _this$project$documen === void 0 ? void 0 : _this$project$documen.trust_name) || this.project.name,
        first_trustee: ((_this$project2 = this.project) === null || _this$project2 === void 0 ? void 0 : (_this$project2$docume = _this$project2.document_data) === null || _this$project2$docume === void 0 ? void 0 : _this$project2$docume.first_trustee) || "".concat(this.client.first_name, " ").concat(this.client.last_name),
        settlor: (_this$project3 = this.project) === null || _this$project3 === void 0 ? void 0 : (_this$project3$docume = _this$project3.document_data) === null || _this$project3$docume === void 0 ? void 0 : _this$project3$docume.settlor,
        document_created_at: ((_this$project4 = this.project) === null || _this$project4 === void 0 ? void 0 : (_this$project4$docume = _this$project4.document_data) === null || _this$project4$docume === void 0 ? void 0 : _this$project4$docume.document_created_at) || this.moment().format('YYYY-MM-DD')
      }) // document_data: {
      //   trust_name: null,
      //   first_trustee: null,
      //   mail_address: {
      //     address: null,
      //     city: null,
      //     state: null,
      //     zip: null,
      //     county: null
      //   },
      //   meeting_date: null,
      //   settlor: null,
      //   settlor_gift: null,
      //   term_of_trust: null,
      //   secondary_trustees: [
      //     'John Doe'
      //   ]
      // }

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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/document_templates/ScheduleA/Wizard.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/document_templates/ScheduleA/Wizard.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/document_templates/ScheduleB/Wizard.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/document_templates/ScheduleB/Wizard.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/document_templates/TrustIndenture/Wizard.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/document_templates/TrustIndenture/Wizard.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ "./resources/js/document_templates/DeclarationOfTrust/Wizard.vue":
/*!***********************************************************************!*\
  !*** ./resources/js/document_templates/DeclarationOfTrust/Wizard.vue ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Wizard_vue_vue_type_template_id_7cbd19d2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Wizard.vue?vue&type=template&id=7cbd19d2& */ "./resources/js/document_templates/DeclarationOfTrust/Wizard.vue?vue&type=template&id=7cbd19d2&");
/* harmony import */ var _Wizard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Wizard.vue?vue&type=script&lang=js& */ "./resources/js/document_templates/DeclarationOfTrust/Wizard.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Wizard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Wizard_vue_vue_type_template_id_7cbd19d2___WEBPACK_IMPORTED_MODULE_0__.render,
  _Wizard_vue_vue_type_template_id_7cbd19d2___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/document_templates/DeclarationOfTrust/Wizard.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/document_templates/ScheduleA/Wizard.vue":
/*!**************************************************************!*\
  !*** ./resources/js/document_templates/ScheduleA/Wizard.vue ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Wizard_vue_vue_type_template_id_303aa27c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Wizard.vue?vue&type=template&id=303aa27c& */ "./resources/js/document_templates/ScheduleA/Wizard.vue?vue&type=template&id=303aa27c&");
/* harmony import */ var _Wizard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Wizard.vue?vue&type=script&lang=js& */ "./resources/js/document_templates/ScheduleA/Wizard.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Wizard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Wizard_vue_vue_type_template_id_303aa27c___WEBPACK_IMPORTED_MODULE_0__.render,
  _Wizard_vue_vue_type_template_id_303aa27c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/document_templates/ScheduleA/Wizard.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/document_templates/ScheduleB/Wizard.vue":
/*!**************************************************************!*\
  !*** ./resources/js/document_templates/ScheduleB/Wizard.vue ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Wizard_vue_vue_type_template_id_37ec47db___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Wizard.vue?vue&type=template&id=37ec47db& */ "./resources/js/document_templates/ScheduleB/Wizard.vue?vue&type=template&id=37ec47db&");
/* harmony import */ var _Wizard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Wizard.vue?vue&type=script&lang=js& */ "./resources/js/document_templates/ScheduleB/Wizard.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Wizard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Wizard_vue_vue_type_template_id_37ec47db___WEBPACK_IMPORTED_MODULE_0__.render,
  _Wizard_vue_vue_type_template_id_37ec47db___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/document_templates/ScheduleB/Wizard.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/document_templates/TrustIndenture/Wizard.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/document_templates/TrustIndenture/Wizard.vue ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Wizard_vue_vue_type_template_id_1088471a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Wizard.vue?vue&type=template&id=1088471a& */ "./resources/js/document_templates/TrustIndenture/Wizard.vue?vue&type=template&id=1088471a&");
/* harmony import */ var _Wizard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Wizard.vue?vue&type=script&lang=js& */ "./resources/js/document_templates/TrustIndenture/Wizard.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Wizard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Wizard_vue_vue_type_template_id_1088471a___WEBPACK_IMPORTED_MODULE_0__.render,
  _Wizard_vue_vue_type_template_id_1088471a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/document_templates/TrustIndenture/Wizard.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/document_templates/DeclarationOfTrust/Wizard.vue?vue&type=script&lang=js&":
/*!************************************************************************************************!*\
  !*** ./resources/js/document_templates/DeclarationOfTrust/Wizard.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Wizard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Wizard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/document_templates/DeclarationOfTrust/Wizard.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Wizard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/document_templates/ScheduleA/Wizard.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/document_templates/ScheduleA/Wizard.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Wizard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Wizard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/document_templates/ScheduleA/Wizard.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Wizard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/document_templates/ScheduleB/Wizard.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/document_templates/ScheduleB/Wizard.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Wizard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Wizard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/document_templates/ScheduleB/Wizard.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Wizard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/document_templates/TrustIndenture/Wizard.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/js/document_templates/TrustIndenture/Wizard.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Wizard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Wizard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/document_templates/TrustIndenture/Wizard.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Wizard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/document_templates/DeclarationOfTrust/Wizard.vue?vue&type=template&id=7cbd19d2&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/document_templates/DeclarationOfTrust/Wizard.vue?vue&type=template&id=7cbd19d2& ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Wizard_vue_vue_type_template_id_7cbd19d2___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Wizard_vue_vue_type_template_id_7cbd19d2___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Wizard_vue_vue_type_template_id_7cbd19d2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Wizard.vue?vue&type=template&id=7cbd19d2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/document_templates/DeclarationOfTrust/Wizard.vue?vue&type=template&id=7cbd19d2&");


/***/ }),

/***/ "./resources/js/document_templates/ScheduleA/Wizard.vue?vue&type=template&id=303aa27c&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/document_templates/ScheduleA/Wizard.vue?vue&type=template&id=303aa27c& ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Wizard_vue_vue_type_template_id_303aa27c___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Wizard_vue_vue_type_template_id_303aa27c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Wizard_vue_vue_type_template_id_303aa27c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Wizard.vue?vue&type=template&id=303aa27c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/document_templates/ScheduleA/Wizard.vue?vue&type=template&id=303aa27c&");


/***/ }),

/***/ "./resources/js/document_templates/ScheduleB/Wizard.vue?vue&type=template&id=37ec47db&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/document_templates/ScheduleB/Wizard.vue?vue&type=template&id=37ec47db& ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Wizard_vue_vue_type_template_id_37ec47db___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Wizard_vue_vue_type_template_id_37ec47db___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Wizard_vue_vue_type_template_id_37ec47db___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Wizard.vue?vue&type=template&id=37ec47db& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/document_templates/ScheduleB/Wizard.vue?vue&type=template&id=37ec47db&");


/***/ }),

/***/ "./resources/js/document_templates/TrustIndenture/Wizard.vue?vue&type=template&id=1088471a&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/document_templates/TrustIndenture/Wizard.vue?vue&type=template&id=1088471a& ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Wizard_vue_vue_type_template_id_1088471a___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Wizard_vue_vue_type_template_id_1088471a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Wizard_vue_vue_type_template_id_1088471a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Wizard.vue?vue&type=template&id=1088471a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/document_templates/TrustIndenture/Wizard.vue?vue&type=template&id=1088471a&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/document_templates/DeclarationOfTrust/Wizard.vue?vue&type=template&id=7cbd19d2&":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/document_templates/DeclarationOfTrust/Wizard.vue?vue&type=template&id=7cbd19d2& ***!
  \*********************************************************************************************************************************************************************************************************************************************/
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
                _c("v-divider"),
                _vm._v(" "),
                _c(
                  "v-stepper-step",
                  {
                    attrs: {
                      editable: "",
                      complete: _vm.currentStep > 2,
                      rules: [
                        function() {
                          return true
                        }
                      ],
                      step: "2"
                    }
                  },
                  [_vm._v("\n          Trust Basic Info\n        ")]
                ),
                _vm._v(" "),
                _c("v-divider"),
                _vm._v(" "),
                _c(
                  "v-stepper-step",
                  {
                    attrs: {
                      editable: "",
                      complete: _vm.currentStep > 3,
                      step: "3"
                    }
                  },
                  [_vm._v("\n          Trustees\n        ")]
                ),
                _vm._v(" "),
                _c("v-divider"),
                _vm._v(" "),
                _c("v-stepper-step", { attrs: { step: "4", editable: "" } }, [
                  _vm._v("\n          Beneficiaries\n        ")
                ])
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
                ),
                _vm._v(" "),
                _c(
                  "v-stepper-content",
                  { attrs: { step: "2" } },
                  [
                    _c(
                      "v-card",
                      { staticClass: "mb-12" },
                      [
                        _c(
                          "v-menu",
                          {
                            attrs: {
                              label: "Document Created",
                              "close-on-content-click": false,
                              "max-width": "290"
                            },
                            scopedSlots: _vm._u([
                              {
                                key: "activator",
                                fn: function(ref) {
                                  var on = ref.on
                                  var attrs = ref.attrs
                                  return [
                                    _c(
                                      "v-text-field",
                                      _vm._g(
                                        _vm._b(
                                          {
                                            attrs: {
                                              value:
                                                _vm.form.document_created_at,
                                              clearable: "",
                                              readonly: ""
                                            },
                                            on: {
                                              click: function($event) {
                                                _vm.form.document_created_at = null
                                              }
                                            }
                                          },
                                          "v-text-field",
                                          attrs,
                                          false
                                        ),
                                        on
                                      )
                                    )
                                  ]
                                }
                              }
                            ]),
                            model: {
                              value: _vm.MenuDocumentCreated,
                              callback: function($$v) {
                                _vm.MenuDocumentCreated = $$v
                              },
                              expression: "MenuDocumentCreated"
                            }
                          },
                          [
                            _vm._v(" "),
                            _c("v-date-picker", {
                              attrs: { "show-adjacent-months": "" },
                              model: {
                                value: _vm.form.document_created_at,
                                callback: function($$v) {
                                  _vm.$set(_vm.form, "document_created_at", $$v)
                                },
                                expression: "form.document_created_at"
                              }
                            })
                          ],
                          1
                        ),
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
                              return _vm.updateProject.apply(null, arguments)
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
                ),
                _vm._v(" "),
                _c(
                  "v-stepper-content",
                  { attrs: { step: "3" } },
                  [
                    _c("v-card", { staticClass: "mb-12" }),
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
                ),
                _vm._v(" "),
                _c(
                  "v-stepper-content",
                  { attrs: { step: "4" } },
                  [
                    _c("v-card", { staticClass: "mb-12" }),
                    _vm._v(" "),
                    _c(
                      "v-btn",
                      {
                        attrs: { color: "primary" },
                        on: { click: _vm.onClick }
                      },
                      [_vm._v("\n            Done\n          ")]
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



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/document_templates/ScheduleA/Wizard.vue?vue&type=template&id=303aa27c&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/document_templates/ScheduleA/Wizard.vue?vue&type=template&id=303aa27c& ***!
  \************************************************************************************************************************************************************************************************************************************/
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



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/document_templates/ScheduleB/Wizard.vue?vue&type=template&id=37ec47db&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/document_templates/ScheduleB/Wizard.vue?vue&type=template&id=37ec47db& ***!
  \************************************************************************************************************************************************************************************************************************************/
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



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/document_templates/TrustIndenture/Wizard.vue?vue&type=template&id=1088471a&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/document_templates/TrustIndenture/Wizard.vue?vue&type=template&id=1088471a& ***!
  \*****************************************************************************************************************************************************************************************************************************************/
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



/***/ }),

/***/ "./resources/js/document_templates sync recursive ^\\.\\/.*$":
/*!********************************************************!*\
  !*** ./resources/js/document_templates/ sync ^\.\/.*$ ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./DeclarationOfTrust": "./resources/js/document_templates/DeclarationOfTrust/index.vue",
	"./DeclarationOfTrust/": "./resources/js/document_templates/DeclarationOfTrust/index.vue",
	"./DeclarationOfTrust/Wizard": "./resources/js/document_templates/DeclarationOfTrust/Wizard.vue",
	"./DeclarationOfTrust/Wizard.vue": "./resources/js/document_templates/DeclarationOfTrust/Wizard.vue",
	"./DeclarationOfTrust/index": "./resources/js/document_templates/DeclarationOfTrust/index.vue",
	"./DeclarationOfTrust/index.vue": "./resources/js/document_templates/DeclarationOfTrust/index.vue",
	"./ScheduleA": "./resources/js/document_templates/ScheduleA/index.vue",
	"./ScheduleA/": "./resources/js/document_templates/ScheduleA/index.vue",
	"./ScheduleA/Wizard": "./resources/js/document_templates/ScheduleA/Wizard.vue",
	"./ScheduleA/Wizard.vue": "./resources/js/document_templates/ScheduleA/Wizard.vue",
	"./ScheduleA/index": "./resources/js/document_templates/ScheduleA/index.vue",
	"./ScheduleA/index.vue": "./resources/js/document_templates/ScheduleA/index.vue",
	"./ScheduleB": "./resources/js/document_templates/ScheduleB/index.vue",
	"./ScheduleB/": "./resources/js/document_templates/ScheduleB/index.vue",
	"./ScheduleB/Wizard": "./resources/js/document_templates/ScheduleB/Wizard.vue",
	"./ScheduleB/Wizard.vue": "./resources/js/document_templates/ScheduleB/Wizard.vue",
	"./ScheduleB/index": "./resources/js/document_templates/ScheduleB/index.vue",
	"./ScheduleB/index.vue": "./resources/js/document_templates/ScheduleB/index.vue",
	"./TrustIndenture": "./resources/js/document_templates/TrustIndenture/index.vue",
	"./TrustIndenture/": "./resources/js/document_templates/TrustIndenture/index.vue",
	"./TrustIndenture/Wizard": "./resources/js/document_templates/TrustIndenture/Wizard.vue",
	"./TrustIndenture/Wizard.vue": "./resources/js/document_templates/TrustIndenture/Wizard.vue",
	"./TrustIndenture/index": "./resources/js/document_templates/TrustIndenture/index.vue",
	"./TrustIndenture/index.vue": "./resources/js/document_templates/TrustIndenture/index.vue"
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
webpackContext.id = "./resources/js/document_templates sync recursive ^\\.\\/.*$";

/***/ })

}]);