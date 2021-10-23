(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_document_templates_Trust_6_MeetingMinutes001_index_vue-_77721"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/document_templates/Trust/6_MeetingMinutes001/index.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/document_templates/Trust/6_MeetingMinutes001/index.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      var _this$project, _this$project$documen;

      return ((_this$project = this.project) === null || _this$project === void 0 ? void 0 : (_this$project$documen = _this$project.document_data) === null || _this$project$documen === void 0 ? void 0 : _this$project$documen.document_created_at) || new Date();
    },
    first_trustee: function first_trustee() {
      var _this$project2, _this$project2$docume, _this$project2$docume2, _this$client, _this$client2;

      return ((_this$project2 = this.project) === null || _this$project2 === void 0 ? void 0 : (_this$project2$docume = _this$project2.document_data) === null || _this$project2$docume === void 0 ? void 0 : (_this$project2$docume2 = _this$project2$docume.trustees) === null || _this$project2$docume2 === void 0 ? void 0 : _this$project2$docume2.first[0]) || "".concat(this === null || this === void 0 ? void 0 : (_this$client = this.client) === null || _this$client === void 0 ? void 0 : _this$client.first_name, " ").concat(this === null || this === void 0 ? void 0 : (_this$client2 = this.client) === null || _this$client2 === void 0 ? void 0 : _this$client2.last_name);
    },
    trustees: function trustees() {
      var _this$project3, _this$project3$docume;

      return (_this$project3 = this.project) === null || _this$project3 === void 0 ? void 0 : (_this$project3$docume = _this$project3.document_data) === null || _this$project3$docume === void 0 ? void 0 : _this$project3$docume.trustees;
    },
    second_trustee: function second_trustee() {
      var _this$project4, _this$project4$docume, _this$project4$docume2;

      return (_this$project4 = this.project) === null || _this$project4 === void 0 ? void 0 : (_this$project4$docume = _this$project4.document_data) === null || _this$project4$docume === void 0 ? void 0 : (_this$project4$docume2 = _this$project4$docume.trustees) === null || _this$project4$docume2 === void 0 ? void 0 : _this$project4$docume2.second[0];
    },
    mailing_address: function mailing_address() {
      var _this$project5, _this$project5$docume;

      return (_this$project5 = this.project) === null || _this$project5 === void 0 ? void 0 : (_this$project5$docume = _this$project5.document_data) === null || _this$project5$docume === void 0 ? void 0 : _this$project5$docume.mailing_address;
    },
    trust_name: function trust_name() {
      var _this$project6, _this$project6$docume, _this$project7;

      return ((_this$project6 = this.project) === null || _this$project6 === void 0 ? void 0 : (_this$project6$docume = _this$project6.document_data) === null || _this$project6$docume === void 0 ? void 0 : _this$project6$docume.trust_name) || (this === null || this === void 0 ? void 0 : (_this$project7 = this.project) === null || _this$project7 === void 0 ? void 0 : _this$project7.name);
    },
    settlor: function settlor() {
      var _this$project8, _this$project8$docume;

      return (_this$project8 = this.project) === null || _this$project8 === void 0 ? void 0 : (_this$project8$docume = _this$project8.document_data) === null || _this$project8$docume === void 0 ? void 0 : _this$project8$docume.settlor;
    },
    beneficiaries: function beneficiaries() {
      var _this$project9, _this$project9$docume;

      return ((_this$project9 = this.project) === null || _this$project9 === void 0 ? void 0 : (_this$project9$docume = _this$project9.document_data) === null || _this$project9$docume === void 0 ? void 0 : _this$project9$docume.beneficiaries) || [];
    }
  },
  methods: {
    moment: (moment__WEBPACK_IMPORTED_MODULE_0___default()),
    toWordsOrdinal: converter.toWordsOrdinal,
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
/* harmony export */   "pascelToTitleCase": () => (/* binding */ pascelToTitleCase)
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
var pascelToTitleCase = function pascelToTitleCase(str) {
  return str.replace(/([A-Z])/g, ' $1').replace(/^\s/, '');
};

/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/document_templates/Trust/6_MeetingMinutes001/index.vue?vue&type=style&index=0&id=bcd2ead8&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/document_templates/Trust/6_MeetingMinutes001/index.vue?vue&type=style&index=0&id=bcd2ead8&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.check[data-v-bcd2ead8]{\n  color:red\n}\n", ""]);
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

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/document_templates/Trust/6_MeetingMinutes001/index.vue?vue&type=style&index=0&id=bcd2ead8&scoped=true&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/document_templates/Trust/6_MeetingMinutes001/index.vue?vue&type=style&index=0&id=bcd2ead8&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_bcd2ead8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=style&index=0&id=bcd2ead8&scoped=true&lang=css& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/document_templates/Trust/6_MeetingMinutes001/index.vue?vue&type=style&index=0&id=bcd2ead8&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_bcd2ead8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_bcd2ead8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/document_templates/Trust/6_MeetingMinutes001/index.vue":
/*!*****************************************************************************!*\
  !*** ./resources/js/document_templates/Trust/6_MeetingMinutes001/index.vue ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_vue_vue_type_template_id_bcd2ead8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=bcd2ead8&scoped=true& */ "./resources/js/document_templates/Trust/6_MeetingMinutes001/index.vue?vue&type=template&id=bcd2ead8&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/document_templates/Trust/6_MeetingMinutes001/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _index_vue_vue_type_style_index_0_id_bcd2ead8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&id=bcd2ead8&scoped=true&lang=css& */ "./resources/js/document_templates/Trust/6_MeetingMinutes001/index.vue?vue&type=style&index=0&id=bcd2ead8&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_bcd2ead8_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _index_vue_vue_type_template_id_bcd2ead8_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "bcd2ead8",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/document_templates/Trust/6_MeetingMinutes001/index.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/document_templates/Trust/6_MeetingMinutes001/index.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/document_templates/Trust/6_MeetingMinutes001/index.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/document_templates/Trust/6_MeetingMinutes001/index.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/document_templates/Trust/6_MeetingMinutes001/index.vue?vue&type=style&index=0&id=bcd2ead8&scoped=true&lang=css&":
/*!**************************************************************************************************************************************!*\
  !*** ./resources/js/document_templates/Trust/6_MeetingMinutes001/index.vue?vue&type=style&index=0&id=bcd2ead8&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_bcd2ead8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=style&index=0&id=bcd2ead8&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/document_templates/Trust/6_MeetingMinutes001/index.vue?vue&type=style&index=0&id=bcd2ead8&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/document_templates/Trust/6_MeetingMinutes001/index.vue?vue&type=template&id=bcd2ead8&scoped=true&":
/*!************************************************************************************************************************!*\
  !*** ./resources/js/document_templates/Trust/6_MeetingMinutes001/index.vue?vue&type=template&id=bcd2ead8&scoped=true& ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_bcd2ead8_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_bcd2ead8_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_bcd2ead8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=template&id=bcd2ead8&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/document_templates/Trust/6_MeetingMinutes001/index.vue?vue&type=template&id=bcd2ead8&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/document_templates/Trust/6_MeetingMinutes001/index.vue?vue&type=template&id=bcd2ead8&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/document_templates/Trust/6_MeetingMinutes001/index.vue?vue&type=template&id=bcd2ead8&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "document-template" },
    [
      _vm._m(0),
      _vm._v(" "),
      _c("p", [
        _vm._v("\n    " + _vm._s(_vm.trust_name)),
        _c("br"),
        _vm._v("\n    7512 Dr. Phillips Blvd. Suite #50-185"),
        _c("br"),
        _vm._v("\n    Orlando, Florida, USA\n  ")
      ]),
      _vm._v(" "),
      _c("p", [
        _c("b", { staticClass: "preview-field" }, [
          _vm._v(
            _vm._s(_vm.moment(_vm.document_created_at).format("MMMM D, YYYY"))
          )
        ])
      ]),
      _vm._v(" "),
      _vm._m(1),
      _vm._v(" "),
      _c("p", [
        _vm._v("\n    FIRST TRUSTEE, "),
        _c("b", { staticClass: "preview-field" }, [
          _vm._v(_vm._s(_vm.first_trustee))
        ]),
        _vm._v(", also acting as the "),
        _c("b", [_vm._v("Meeting Secretary")]),
        _vm._v(", is qualified to make the following resolution(s):\n  ")
      ]),
      _vm._v(" "),
      _vm._m(2),
      _vm._v(" "),
      _vm._m(3),
      _vm._v(" "),
      _vm._m(4),
      _vm._v(" "),
      _c("div", { staticClass: "text-center mb-10" }, [
        _c(
          "ul",
          { staticStyle: { "list-style": "none" } },
          _vm._l(_vm.beneficiaries, function(beneficiary, index) {
            return _c("li", [
              _vm._v(
                "\n        CERTIFICATE " +
                  _vm._s((index + 1).toString().padStart(3, "0")) +
                  ": " +
                  _vm._s(beneficiary.name) +
                  " - " +
                  _vm._s(beneficiary.units) +
                  " UNITS\n      "
              )
            ])
          }),
          0
        )
      ]),
      _vm._v(" "),
      _c("p", [
        _vm._v(
          "\n    Said CERTIFICATES are now registered in the Records of the BOARD.\n  "
        )
      ]),
      _vm._v(" "),
      _vm._m(5),
      _vm._v(" "),
      _c("p", [
        _vm._v(
          '\n    "Any compulsory discovery by extorting the party\'s oath, or compelling the production of his private books and papers, to convict him of a crime or to forfeit his property, is contrary to the principles of a free government. It is abhorrent to the instincts of an Englishman; it is abhorrent to the instincts of an American. It may suit the purposes of despotic power, but it cannot be pure atmosphere of political liberty and personal freedom."\n  '
        )
      ]),
      _vm._v(" "),
      _vm._m(6),
      _vm._v(" "),
      _c("b", [_vm._v("MINUTE NO. 5")]),
      _vm._v(
        ": Special meetings called in accordance with the Declaration of Trust may be held at any time and/or any place in the best interest of the TRUST upon three (3) days notice, which may be waived by any or all TRUSTEE(s) and/or other titled officers.\n  Board of Trustees Meeting 001 - Page 1 of 3\n  "
      ),
      _c("p", [
        _c("b", [_vm._v("MINUTE NO. 6")]),
        _vm._v(": The BOARD hereby appoints a SECONDARY TRUSTEE, "),
        _c("b", { staticClass: "preview-field" }, [
          _vm._v(_vm._s(_vm.second_trustee))
        ]),
        _vm._v(", to this BOARD, effective immediately.\n  ")
      ]),
      _vm._v(" "),
      _c("p", [
        _vm._v(
          "\n    The FIRST TRUSTEE shall designate, from time-to-time, specific tasks, roles, duties and/or authorities for which the SECONDARY TRUSTEE shall be consulted and/or be kept apprised.\n  "
        )
      ]),
      _vm._v(" "),
      _c("p", [
        _vm._v(
          "\n    The FIRST TRUSTEE hereby waives the requirement to establish an Independent Contractor Agreement with the SECONDARY TRUSTEEs since the role has already been defined. However, the SECONDARY TRUSTEE shall act in all respects as an Independent Contractor with the Trust and hereby denies an employee / employer relationship with same.\n  "
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "break-before" }),
      _vm._v(" "),
      _c("b", [_vm._v("MINUTE NO. 7")]),
      _vm._v(
        ": It is in the best interest of the TRUST to continue operation in as smooth a manner as possible, even if any TRUSTEE is unable to continue their duties due to death, resignation, permanent incapacitation or removal from office. Should this happen, the BOARD hereby nominates the following named SUCCESSOR TRUSTEE(s) to immediately take the place of the following named TRUSTEE in the event that the BOARD desires to fill the vacancy so created, rather than to reduce the number of TRUSTEES on the BOARD:\n\n  "
      ),
      _c("div", { staticClass: "pa-10" }, [
        _c("table", { staticClass: "ma-auto" }, [
          _c(
            "tbody",
            _vm._l(_vm.trustees.first, function(trustee, index) {
              return _c("tr", [
                _c("td", { staticClass: "text-right" }, [
                  index > 0
                    ? _c("span", { staticClass: "mr-10" }, [
                        _vm._v(
                          " " +
                            _vm._s(_vm.toTitleCase(_vm.toWordsOrdinal(index))) +
                            " Choice"
                        )
                      ])
                    : _vm._e()
                ]),
                _vm._v(" "),
                _c("td", { staticClass: " text-right pr-10" }, [
                  index > 0 ? _c("span", [_vm._v("Successor")]) : _vm._e(),
                  _vm._v(" First Trustee:")
                ]),
                _vm._v(" "),
                _c("td", [
                  _c("b", { staticClass: "preview-field" }, [
                    _vm._v(_vm._s(trustee))
                  ])
                ])
              ])
            }),
            0
          )
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "pa-10" }, [
        _c("table", { staticClass: "ma-auto" }, [
          _c(
            "tbody",
            _vm._l(_vm.trustees.second, function(trustee, index) {
              return _c("tr", [
                _c("td", { staticClass: "text-right" }, [
                  index > 0
                    ? _c("span", { staticClass: "mr-10" }, [
                        _vm._v(
                          " " +
                            _vm._s(_vm.toTitleCase(_vm.toWordsOrdinal(index))) +
                            " Choice"
                        )
                      ])
                    : _vm._e()
                ]),
                _vm._v(" "),
                _c("td", { staticClass: " text-right pr-10" }, [
                  index > 0 ? _c("span", [_vm._v("Successor")]) : _vm._e(),
                  _vm._v(" Secondary Trustee:")
                ]),
                _vm._v(" "),
                _c("td", [
                  _c("b", { staticClass: "preview-field" }, [
                    _vm._v(_vm._s(trustee))
                  ])
                ])
              ])
            }),
            0
          )
        ])
      ]),
      _vm._v(" "),
      _c("p", [
        _vm._v(
          "\n    Should any choice for replacement TRUSTEE not be an adult (minimum 18 years old) at the time of request for appointment, the next choice shall be considered. This order of choices shall remain the preferred order of choices for subsequent appointments of a SUCCESSOR TRUSTEE for said positions listed above.\n  "
        )
      ]),
      _vm._v(" "),
      _c("p", [
        _vm._v(
          "\n    Any such death, resignation, permanent incapacitation or removal from office of any TRUSTEE or other titled officer shall be noted in the Meeting Minutes of the TRUST, along with the decision of the BOARD to either fill the vacancy so created or to reduce the number of TRUSTEES. Should the BOARD vote to fill such a vacancy, the SUCCESSOR TRUSTEE shall immediately be notified by Certified Mail of their conditional appointment to the BOARD as TRUSTEE. Acceptance of such appointment shall be by special meeting called for such purpose and with an appropriate Meeting Minute signed by the accepting TRUSTEE. Upon the appointment of any new TRUSTEE to the BOARD, the BOARD shall, in like manner, nominate a SUCCESSOR TRUSTEE for such new TRUSTEE.\n  "
        )
      ]),
      _vm._v(" "),
      _c("p", [
        _vm._v(
          "\n    The BOARD may, in its discretion, by appropriate Meeting Minute, allow for the pre-acceptance of the position of TRUSTEE by any SUCCESSOR TRUSTEE. The effect of any such pre-acceptance shall be to make the appointment of such SUCCESSOR TRUSTEE automatic upon receipt by such SUCCESSOR TRUSTEE of written notice of the death, resignation, permanent incapacitation or removal from office of the TRUSTEE they are named to succeed. No further action of the BOARD shall then be necessary to enable such TRUSTEE to exercise their authorized powers within this TRUST. However, an appropriate Meeting Minute shall be made reflecting that such action has taken place as soon thereafter as conveniently possible.\n  "
        )
      ]),
      _vm._v(" "),
      _vm._m(7),
      _vm._v(" "),
      _vm._m(8),
      _vm._v(" "),
      _vm._m(9),
      _vm._v(" "),
      _vm._m(10),
      _vm._v(" "),
      _c("p", { staticClass: "ml-10 preview-field" }, [
        _vm._v("\n    " + _vm._s(_vm.trust_name) + " "),
        _c("br"),
        _vm._v("\n    " + _vm._s(_vm.mailing_address.address)),
        _c("br"),
        _vm._v(
          "\n    " +
            _vm._s(_vm.mailing_address.city) +
            ", " +
            _vm._s(_vm.mailing_address.state) +
            " " +
            _vm._s(_vm.mailing_address.zip) +
            "\n  "
        )
      ]),
      _vm._v(" "),
      _c("p", [
        _vm._v(
          "\n    Changing the mailing address at this time does not automatically change the domicile address. The domicile address remains unchanged.\n  "
        )
      ]),
      _vm._v(" "),
      _vm._m(11),
      _vm._v(" "),
      _vm._m(12),
      _vm._v(" "),
      _vm._m(13),
      _vm._v(" "),
      _vm._m(14),
      _vm._v(" "),
      _c("p", [
        _vm._v(
          "\n    An official Resolution may be drafted for any appropriate Meeting Minute above and dispersed to the appropriate party to whom it applies.\n  "
        )
      ]),
      _vm._v(" "),
      _c("p", [
        _vm._v(
          "\n    There being no further business to come before this BOARD at this initial meeting, upon a motion duly made, seconded and carried, the meeting was adjourned.\n  "
        )
      ]),
      _vm._v(" "),
      _c(
        "v-container",
        [
          _c(
            "v-row",
            [
              _c(
                "v-col",
                [
                  _c("v-text-field", {
                    attrs: {
                      filled: "",
                      "persistent-hint": "",
                      hint: "By FIRST TRUSTEE: " + _vm.first_trustee
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-col",
                [
                  _c("v-text-field", {
                    attrs: {
                      filled: "",
                      "persistent-hint": "",
                      hint: "By MEETING SECRETARY: " + _vm.first_trustee
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
      )
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h3", [
      _vm._v("MINUTES OF MEETING # "),
      _c("b", [_vm._v("001")]),
      _vm._v(", BOARD OF TRUSTEES (hereafter BOARD)")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", [
      _vm._v(
        "\n    With all of the BOARD in attendance, the following Meeting Minutes were duly adopted and approved by unanimous consent as Minutes of the "
      ),
      _c("b", [_vm._v("First (1st) Meeting")]),
      _vm._v(" of the BOARD.\n  ")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", [
      _c("b", [_vm._v("MINUTE NO. 1:")]),
      _vm._v(
        " In accordance with the Declaration of Trust of the entity referenced above and executed on or before this date by and between the SETTLOR thereof and the FIRST TRUSTEE herein, the following property is hereby conveyed as an absolute gift unto the BOARD:\n  "
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", [
      _vm._v(
        "\n    The full list of described property is attached to the TRUST documents entitled SCHEDULE A, and signed by the SETTLOR and the FIRST TRUSTEE. Said "
      ),
      _c("b", [_vm._v("Schedule A")]),
      _vm._v(
        " is accepted and ratified as being the true and correct list of all properties conveyed to and held by the BOARD as of this date.\n  "
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", [
      _c("b", [_vm._v("MINUTE NO.2:")]),
      _vm._v(
        " In accordance with the Declaration of Trust of the entity referenced above and executed on or before this date by and between the SETTLOR thereof and the FIRST TRUSTEE herein, the BOARD acknowledges the written instructions of the SETTLOR concerning the issuance of the TRUST CERTIFICATES OF BENEFICIAL OWNERSHIP and acknowledges the issuance of one hundred (100) UNITS of beneficial ownership (per "
      ),
      _c("b", [_vm._v("Schedule B")]),
      _vm._v(
        ") in the following manner, according to the wishes of the SETTLOR, to wit:\n  "
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", [
      _c("b", [_vm._v("MINUTE NO. 3")]),
      _vm._v(
        ": According to the dictates of United States Supreme Court in the case Boyd v. U.S., 166 US 618 (1886) and the case of Silverthorn v. U.S., 251 385 (1920); The BOARD hereby declares all Meeting Minutes, schedules, letters, and attachments hereto of this TRUST to be private and inviolable and therefore are not to be loaned, read or disclosed to anyone at anytime, unless it is determined by unanimous consent of the BOARD that disclosure of a particular Meeting Minute would be in the best interest of the TRUST. The dictates alluded to above are as follows:\n  "
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", [
      _c("b", [_vm._v("MINUTE NO. 4")]),
      _vm._v(
        ": The BOARD declares the fiscal year of the TRUST to be the calendar year. The BOARD shall have the power to change such fiscal year by subsequent Meeting Minute if it is determined to be in the best interest of the TRUST to do so.\n  "
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", [
      _c("b", [_vm._v("MINUTE NO. 8")]),
      _vm._v(
        ": The BOARD shall reimburse any TRUSTEE or other applicable titled officer, as appropriate, for all necessary expenses incurred by such TRUSTEE for travel on business of the BOARD, as well as any expenses incurred by such TRUSTEE incidental to his service as TRUSTEE. TO receive repayment of such expense, the TRUSTEE must submit to the BOARD, written evidence of such expense, such as a written log of travel, gas receipts, meal receipts, lodging receipts, and the like. The BOARD may, in its discretion, prepay the expenses of such travel or work for the BOARD by the TRUSTEE. Such TRUSTEE shall account to the BOARD for the expenditure of such prepayment and reimburse the BOARD for any overpayment.\n  "
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", [
      _c("b", [_vm._v("MINUTE NO.9: ")]),
      _vm._v(
        "It being the intent of the SETTLOR hereto to preserve this TRUST, it shall be the policy of the BOARD not to employ the services of any individual, unless such can be done on an Independent Contractor and/or Contract Worker basis, to eliminate the added expense of Social Security Taxes, Unemployment Taxes, Workmen's Compensation Insurance, Withholding and the like.\n  "
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", [
      _c("b", [_vm._v("MINUTE NO. 10")]),
      _vm._v(
        ": All Meeting Minutes, Resolutions, Records or other Documents concerning this TRUST shall include the signature of the FIRST TRUSTEE. Meeting Minutes shall also include the signature of the Meeting Secretary.\n  "
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", [
      _c("b", [_vm._v("MINUTE NO. 11")]),
      _vm._v(
        ": As per the allowances in the Declaration of Trust, the BOARD hereby elects to change the Official TRUST Mailing Address to the following:\n  "
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", [
      _c("b", [_vm._v("MINUTE NO. 12")]),
      _vm._v(
        ": Unless otherwise changed in a future Meeting Minute by the BOARD, the FIRST TRUSTEE shall be the official Custodian of Records for this Trust. Any replacement FIRST TRUSTEE shall automatically assume the role of Custodian of Records also unless otherwise noted in a subsequent Meeting Minute.\n  "
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", [
      _c("b", [_vm._v("MINUTE NO. 13")]),
      _vm._v(
        ": Meeting Minutes need not be notarized but Trust Resolutions must be notarized by the FIRST TRUSTEE before disbursement or presentment.\n  "
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", [
      _c("b", [_vm._v("MINUTE NO. 14")]),
      _vm._v(
        ": Meeting Minute numbers need only be in sequence within a given Meeting and need not continue in succession to the next Meetings. Each Meeting shall start with Minute No. 01.\n  "
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", [
      _c("b", { staticClass: "text-decoration-underline" }, [_vm._v("CLOSE:")])
    ])
  }
]
render._withStripped = true



/***/ })

}]);