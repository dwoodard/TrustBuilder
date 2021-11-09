(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_document_templates_Trust_5_TrustCertificate_index_vue-_35061"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/document_templates/Trust/5_TrustCertificate/index.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/document_templates/Trust/5_TrustCertificate/index.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../helper */ "./resources/js/helper.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



var converter = __webpack_require__(/*! number-to-words-en */ "./node_modules/number-to-words-en/numberToWords.min.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    client: {
      type: Object,
      required: true
    },
    project: {
      type: Object,
      required: true
    }
  },
  computed: {
    document_created_at: function document_created_at() {
      var _this$project, _this$project$project, _this$project$project2;

      return ((_this$project = this.project) === null || _this$project === void 0 ? void 0 : (_this$project$project = _this$project.project_data) === null || _this$project$project === void 0 ? void 0 : (_this$project$project2 = _this$project$project.trust) === null || _this$project$project2 === void 0 ? void 0 : _this$project$project2.document_created_at) || new Date();
    },
    first_trustee: function first_trustee() {
      var _this$project2, _this$project2$projec, _this$project2$projec2, _this$client, _this$client2;

      return ((_this$project2 = this.project) === null || _this$project2 === void 0 ? void 0 : (_this$project2$projec = _this$project2.project_data) === null || _this$project2$projec === void 0 ? void 0 : (_this$project2$projec2 = _this$project2$projec.trust) === null || _this$project2$projec2 === void 0 ? void 0 : _this$project2$projec2.trustees.first[0]) || "".concat(this === null || this === void 0 ? void 0 : (_this$client = this.client) === null || _this$client === void 0 ? void 0 : _this$client.first_name, " ").concat(this === null || this === void 0 ? void 0 : (_this$client2 = this.client) === null || _this$client2 === void 0 ? void 0 : _this$client2.last_name);
    },
    trust_name: function trust_name() {
      var _this$project3, _this$project3$projec;

      return (_this$project3 = this.project) === null || _this$project3 === void 0 ? void 0 : (_this$project3$projec = _this$project3.project_data) === null || _this$project3$projec === void 0 ? void 0 : _this$project3$projec.name;
    },
    settlor: function settlor() {
      var _this$project4, _this$project4$projec, _this$project4$projec2;

      return (_this$project4 = this.project) === null || _this$project4 === void 0 ? void 0 : (_this$project4$projec = _this$project4.project_data) === null || _this$project4$projec === void 0 ? void 0 : (_this$project4$projec2 = _this$project4$projec.trust) === null || _this$project4$projec2 === void 0 ? void 0 : _this$project4$projec2.settlor;
    },
    beneficiaries: function beneficiaries() {
      var _this$project5, _this$project5$projec, _this$project5$projec2;

      return ((_this$project5 = this.project) === null || _this$project5 === void 0 ? void 0 : (_this$project5$projec = _this$project5.project_data) === null || _this$project5$projec === void 0 ? void 0 : (_this$project5$projec2 = _this$project5$projec.trust) === null || _this$project5$projec2 === void 0 ? void 0 : _this$project5$projec2.beneficiaries) || [];
    }
  },
  methods: {
    moment: (moment__WEBPACK_IMPORTED_MODULE_0___default()),
    toWords: converter.toWords,
    toTitleCase: _helper__WEBPACK_IMPORTED_MODULE_1__.toTitleCase
  }
});

/***/ }),

/***/ "./resources/js/helper.js":
/*!********************************!*\
  !*** ./resources/js/helper.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "toTitleCase": () => (/* binding */ toTitleCase),
/* harmony export */   "toKebabCase": () => (/* binding */ toKebabCase),
/* harmony export */   "score": () => (/* binding */ score),
/* harmony export */   "toPascalCase": () => (/* binding */ toPascalCase),
/* harmony export */   "pascalToTitleCase": () => (/* binding */ pascalToTitleCase)
/* harmony export */ });
var toTitleCase = function toTitleCase(str) {
  return str.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
};
var toKebabCase = function toKebabCase(str) {
  return str.replace(/([a-z])([A-Z])/g, '$1-$2').replace(/\s+/g, '-').toLowerCase();
};
var score = function score(a, b) {
  if (this === a) return 1;
  if (a === '') return 0;
  var c = 0;
  var d = a.length;
  var e = this;
  var f = e.length;
  var g;
  var h;
  var i = 1;
  var j;

  for (var k = 0, l, m, n, o, p, q; k < d; ++k) {
    n = a.charAt(k), o = e.indexOf(n.toLowerCase()), p = e.indexOf(n.toUpperCase()), q = Math.min(o, p), m = q > -1 ? q : Math.max(o, p);

    if (m === -1) {
      if (b) {
        i += 1 - b;
        continue;
      }

      return 0;
    }

    l = 0.1, e[m] === n && (l += 0.1), m === 0 ? (l += 0.6, k === 0 && (g = 1)) : e.charAt(m - 1) === ' ' && (l += 0.8), e = e.substring(m + 1, f), c += l;
  }

  h = c / d, j = (h * (d / f) + h) / 2, j /= i, g && j + 0.15 < 1 && (j += 0.15);
  return j;
};
var toPascalCase = function toPascalCase(str) {
  return str.replace(/[-_\s]+/g, ' ').split(' ').map(function (word) {
    return word[0].toUpperCase() + word.slice(1);
  }).join('');
};
var pascalToTitleCase = function pascalToTitleCase(str) {
  return str.replace(/([A-Z])/g, ' $1').replace(/^\s/, '');
};

/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/document_templates/Trust/5_TrustCertificate/index.vue?vue&type=style&index=0&id=70d4396f&scoped=true&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/document_templates/Trust/5_TrustCertificate/index.vue?vue&type=style&index=0&id=70d4396f&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.trust_certificates[data-v-70d4396f] {\n}\n.trust_certificate[data-v-70d4396f] {\n  min-height: 100vh;\n  border: double 4px #333333;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/number-to-words-en/numberToWords.min.js":
/*!**************************************************************!*\
  !*** ./node_modules/number-to-words-en/numberToWords.min.js ***!
  \**************************************************************/
/***/ ((module, exports, __webpack_require__) => {

/*!
 * Number-To-Words util
 * @version v1.2.5
 * @link https://github.com/marlun78/number-to-words
 * @author Martin Eneqvist (https://github.com/marlun78)
 * @contributors Aleksey Pilyugin (https://github.com/pilyugin),Jeremiah Hall (https://github.com/jeremiahrhall),Adriano Melo (https://github.com/adrianomelo),dmrzn (https://github.com/dmrzn),Lowell Stewart (https://github.com/opendocx)
 * @license MIT
 */
!function(){"use strict";var e="object"==typeof self&&self.self===self&&self||"object"==typeof __webpack_require__.g&&__webpack_require__.g.global===__webpack_require__.g&&__webpack_require__.g||this,t=9007199254740991;function s(e){return!("number"!=typeof e||e!=e||e===1/0||e===-1/0)}function f(e){return"number"==typeof e&&Math.abs(e)<=t}var n=/(hundred|thousand|(m|b|tr|quadr)illion)$/,o=/teen$/,r=/y$/,i=/(zero|one|two|three|four|five|six|seven|eight|nine|ten|eleven|twelve)$/,a={zero:"zeroth",one:"first",two:"second",three:"third",four:"fourth",five:"fifth",six:"sixth",seven:"seventh",eight:"eighth",nine:"ninth",ten:"tenth",eleven:"eleventh",twelve:"twelfth"};function l(e){return n.test(e)||o.test(e)?e+"th":r.test(e)?e.replace(r,"ieth"):i.test(e)?e.replace(i,u):e}function u(e,t){return a[t]}var h=10,v=100,m=1e3,p=1e6,d=1e9,g=1e12,b=1e15,y=9007199254740992,c=["zero","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"],w=["zero","ten","twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"];function x(e,t){var n,o=!1;"object"==typeof t&&t?("string"!=typeof t.negativePrefix&&(t.negativePrefix="minus"),t.useCommas=Boolean(t.useCommas)):(o=t,t={useCommas:!0,negativePrefix:"minus"});var r=parseInt(e,10);if(!s(r))throw new TypeError("Not a finite number: "+e+" ("+typeof e+")");if(!f(r))throw new RangeError("Input is not a safe number; it’s either too large or too small.");return n=function e(t,n){var o,r,i,s=arguments[2],f=n.useCommas?",":"";if(0===t)return s?(i=s.join(" "),n.useCommas&&(i=i.replace(/,$/,"")),i):"zero";s||(s=[]);t<0&&(s.push(n.negativePrefix),t=Math.abs(t));t<20?(o=0,r=c[t]):t<v?(o=t%h,r=w[Math.floor(t/h)],o&&(r+="-"+c[o],o=0)):t<m?(o=t%v,r=e(Math.floor(t/v),n)+" hundred"):t<p?(o=t%m,r=e(Math.floor(t/m),n)+" thousand"+f):t<d?(o=t%p,r=e(Math.floor(t/p),n)+" million"+f):t<g?(o=t%d,r=e(Math.floor(t/d),n)+" billion"+f):t<b?(o=t%g,r=e(Math.floor(t/g),n)+" trillion"+f):t<=y&&(o=t%b,r=e(Math.floor(t/b),n)+" quadrillion"+f);s.push(r);return e(o,n,s)}(r,t),o?l(n):n}var M={toOrdinal:function(e){var t=parseInt(e,10);if(!s(t))throw new TypeError("Not a finite number: "+e+" ("+typeof e+")");if(!f(t))throw new RangeError("Input is not a safe number; it’s either too large or too small.");var n=String(t),o=Math.abs(t%100),r=11<=o&&o<=13,i=n.charAt(n.length-1);return n+(r?"th":"1"===i?"st":"2"===i?"nd":"3"===i?"rd":"th")},toWords:x,toWordsOrdinal:function(e,t){return l(x(e,t))}}; true?( true&&module.exports&&(exports=module.exports=M),exports.numberToWords=M):0}();

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/document_templates/Trust/5_TrustCertificate/index.vue?vue&type=style&index=0&id=70d4396f&scoped=true&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/document_templates/Trust/5_TrustCertificate/index.vue?vue&type=style&index=0&id=70d4396f&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_70d4396f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=style&index=0&id=70d4396f&scoped=true&lang=css& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/document_templates/Trust/5_TrustCertificate/index.vue?vue&type=style&index=0&id=70d4396f&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_70d4396f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_70d4396f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/document_templates/Trust/5_TrustCertificate/index.vue":
/*!****************************************************************************!*\
  !*** ./resources/js/document_templates/Trust/5_TrustCertificate/index.vue ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_vue_vue_type_template_id_70d4396f_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=70d4396f&scoped=true& */ "./resources/js/document_templates/Trust/5_TrustCertificate/index.vue?vue&type=template&id=70d4396f&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/document_templates/Trust/5_TrustCertificate/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _index_vue_vue_type_style_index_0_id_70d4396f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&id=70d4396f&scoped=true&lang=css& */ "./resources/js/document_templates/Trust/5_TrustCertificate/index.vue?vue&type=style&index=0&id=70d4396f&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_70d4396f_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _index_vue_vue_type_template_id_70d4396f_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "70d4396f",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/document_templates/Trust/5_TrustCertificate/index.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/document_templates/Trust/5_TrustCertificate/index.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/document_templates/Trust/5_TrustCertificate/index.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/document_templates/Trust/5_TrustCertificate/index.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/document_templates/Trust/5_TrustCertificate/index.vue?vue&type=style&index=0&id=70d4396f&scoped=true&lang=css&":
/*!*************************************************************************************************************************************!*\
  !*** ./resources/js/document_templates/Trust/5_TrustCertificate/index.vue?vue&type=style&index=0&id=70d4396f&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_70d4396f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=style&index=0&id=70d4396f&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/document_templates/Trust/5_TrustCertificate/index.vue?vue&type=style&index=0&id=70d4396f&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/document_templates/Trust/5_TrustCertificate/index.vue?vue&type=template&id=70d4396f&scoped=true&":
/*!***********************************************************************************************************************!*\
  !*** ./resources/js/document_templates/Trust/5_TrustCertificate/index.vue?vue&type=template&id=70d4396f&scoped=true& ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_70d4396f_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_70d4396f_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_70d4396f_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=template&id=70d4396f&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/document_templates/Trust/5_TrustCertificate/index.vue?vue&type=template&id=70d4396f&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/document_templates/Trust/5_TrustCertificate/index.vue?vue&type=template&id=70d4396f&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/document_templates/Trust/5_TrustCertificate/index.vue?vue&type=template&id=70d4396f&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "trust_certificates" },
    _vm._l(_vm.beneficiaries, function(beneficiary, index) {
      return _c(
        "div",
        { key: index, staticClass: "trust_certificate" },
        [
          _c(
            "v-container",
            [
              _c(
                "v-row",
                { staticClass: "mb-10" },
                [
                  _c("v-col", [
                    _c("div", { staticClass: "text-center" }, [
                      _c("h2", [
                        _vm._v(
                          "\n              " +
                            _vm._s((index + 1).toString().padStart(3, "0"))
                        ),
                        _c("br")
                      ]),
                      _vm._v("\n            Certificate Number\n          ")
                    ])
                  ]),
                  _vm._v(" "),
                  _c("v-col", [
                    _c("div", { staticClass: "text-center" }, [
                      _vm._v("REGISTERED CERTIFICATE")
                    ])
                  ]),
                  _vm._v(" "),
                  _c("v-col", [
                    _c("div", { staticClass: "text-center" }, [
                      _c("h2", [
                        _vm._v("\n              " + _vm._s(beneficiary.units)),
                        _c("br")
                      ]),
                      _vm._v("\n            Number of Units\n          ")
                    ])
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-row",
                { staticClass: "mb-10" },
                [
                  _c("v-col", [
                    _c(
                      "h1",
                      {
                        staticClass: "text-center",
                        staticStyle: {
                          "font-family": "serif",
                          "letter-spacing": "10px"
                        }
                      },
                      [
                        _vm._v("\n            TRUST CERTIFICATE "),
                        _c("br"),
                        _vm._v(" "),
                        _c("small", [_vm._v("OF")]),
                        _vm._v(" "),
                        _c("br"),
                        _vm._v("\n            BENEFICIAL OWNERSHIP\n          ")
                      ]
                    )
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-row",
                { staticClass: "mb-10" },
                [
                  _c("v-col", [
                    _c("div", { staticClass: "text-center" }, [
                      _c("h2", [
                        _vm._v(_vm._s(beneficiary.name) + " "),
                        _c("br"),
                        _vm._v(
                          " Owner of " +
                            _vm._s(beneficiary.units) +
                            " Units of Beneficial Ownership "
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "text-center" }, [_vm._v("in")]),
                      _vm._v(" "),
                      _c("h1", [_vm._v(_vm._s(_vm.trust_name))]),
                      _vm._v(
                        "\n            (A Pure Trust Organization)\n          "
                      )
                    ])
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-row",
                { staticClass: "mb-8" },
                [
                  _c("v-col", [
                    _c("p", [
                      _vm._v(
                        "\n            This is to certify that " +
                          _vm._s(beneficiary.name) +
                          " (BENEFICIARY) is the owner of " +
                          _vm._s(
                            _vm.toTitleCase(_vm.toWords(beneficiary.units))
                          ) +
                          " (" +
                          _vm._s(beneficiary.units) +
                          ") Units of Beneficial Ownership (beneficial interest, not vested interest) in the assets of the above name Trust. This Certificate and the referenced Units may be transferred, exchanged or gifted only in accordance with the guidelines described in the Trust Indenture.\n          "
                      )
                    ]),
                    _vm._v(" "),
                    _c("p", [
                      _vm._v(
                        "\n            The BENEFICIARY may not sell this Certificate or receive any compensation for the transfer, exchange or gift of this Certificate to another person or entity. This Certificate may not be hypothecated, pledged as collateral, liened, or assigned in an attempt that could be interpreted as a means to force an early distribution of assets from the Trust.\n          "
                      )
                    ]),
                    _vm._v(" "),
                    _c("p", [
                      _vm._v(
                        "\n            All rights represented herein expire upon BENEFICIARY's death unless a proper Transfer-Upon-Death form has been filled with the Board of Trustees prior to BENEFICIARY's death. The Holder of this Certificate has no rights unless said Holder is the BENEFICIARY named herein or their legal guardian.\n          "
                      )
                    ])
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-row",
                {},
                [
                  _c("v-col", [
                    _c("div", { staticClass: "text-center" }, [
                      _c(
                        "div",
                        { staticStyle: { "border-bottom": "1px solid black" } },
                        [
                          _vm._v(
                            _vm._s(
                              _vm
                                .moment(_vm.document_created_at)
                                .format("MMMM D, YYYY")
                            )
                          )
                        ]
                      ),
                      _vm._v("\n            Effective Date\n          ")
                    ])
                  ]),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    { attrs: { offset: "1" } },
                    [
                      _c("v-text-field", {
                        attrs: {
                          filled: "",
                          "persistent-hint": "",
                          hint: _vm.first_trustee + ", Trustee"
                        }
                      })
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c("div", { staticClass: "break-after" })
        ],
        1
      )
    }),
    0
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);