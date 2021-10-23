(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_document_templates_Trust_2_TrustIndenture_index_vue-_da8b1"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/document_templates/Trust/2_TrustIndenture/index.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/document_templates/Trust/2_TrustIndenture/index.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    trust_name: function trust_name() {
      var _this$project3, _this$project3$docume, _this$project4;

      return ((_this$project3 = this.project) === null || _this$project3 === void 0 ? void 0 : (_this$project3$docume = _this$project3.document_data) === null || _this$project3$docume === void 0 ? void 0 : _this$project3$docume.trust_name) || (this === null || this === void 0 ? void 0 : (_this$project4 = this.project) === null || _this$project4 === void 0 ? void 0 : _this$project4.name);
    },
    settlor: function settlor() {
      var _this$project5, _this$project5$docume;

      return (_this$project5 = this.project) === null || _this$project5 === void 0 ? void 0 : (_this$project5$docume = _this$project5.document_data) === null || _this$project5$docume === void 0 ? void 0 : _this$project5$docume.settlor;
    },
    term_of_trust: function term_of_trust() {
      var _this$project6, _this$project6$docume;

      return (_this$project6 = this.project) === null || _this$project6 === void 0 ? void 0 : (_this$project6$docume = _this$project6.document_data) === null || _this$project6$docume === void 0 ? void 0 : _this$project6$docume.term_of_trust;
    }
  },
  methods: {
    moment: (moment__WEBPACK_IMPORTED_MODULE_0___default()),
    toWords: converter.toWords
  }
});

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

/***/ "./resources/js/document_templates/Trust/2_TrustIndenture/index.vue":
/*!**************************************************************************!*\
  !*** ./resources/js/document_templates/Trust/2_TrustIndenture/index.vue ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_vue_vue_type_template_id_1f6cb4b7_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=1f6cb4b7&scoped=true& */ "./resources/js/document_templates/Trust/2_TrustIndenture/index.vue?vue&type=template&id=1f6cb4b7&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/document_templates/Trust/2_TrustIndenture/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_1f6cb4b7_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _index_vue_vue_type_template_id_1f6cb4b7_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "1f6cb4b7",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/document_templates/Trust/2_TrustIndenture/index.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/document_templates/Trust/2_TrustIndenture/index.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/document_templates/Trust/2_TrustIndenture/index.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/document_templates/Trust/2_TrustIndenture/index.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/document_templates/Trust/2_TrustIndenture/index.vue?vue&type=template&id=1f6cb4b7&scoped=true&":
/*!*********************************************************************************************************************!*\
  !*** ./resources/js/document_templates/Trust/2_TrustIndenture/index.vue?vue&type=template&id=1f6cb4b7&scoped=true& ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_1f6cb4b7_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_1f6cb4b7_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_1f6cb4b7_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=template&id=1f6cb4b7&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/document_templates/Trust/2_TrustIndenture/index.vue?vue&type=template&id=1f6cb4b7&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/document_templates/Trust/2_TrustIndenture/index.vue?vue&type=template&id=1f6cb4b7&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/document_templates/Trust/2_TrustIndenture/index.vue?vue&type=template&id=1f6cb4b7&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************/
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
      _c("p", { staticClass: "text-right text-pre" }, [
        _vm._v("\n    Domicile Address:\n    ATTN: "),
        _c("span", { staticClass: "preview-field" }, [
          _vm._v(_vm._s(_vm.first_trustee))
        ]),
        _vm._v(", Trustee\n    "),
        _c("span", { staticClass: "preview-field" }, [
          _vm._v(_vm._s(_vm.trust_name))
        ]),
        _vm._v(
          "\n    7512 Dr. Phillips Blvd. Suite #50-185\n    Orlando, Florida, USA\n  "
        )
      ]),
      _vm._v(" "),
      _c("p", { staticClass: "text-center text-h4 " }, [
        _vm._v("\n    TRUST INDENTURE\n  ")
      ]),
      _vm._v(" "),
      _c("p", { staticClass: "text-center ma-4" }, [
        _vm._v("\n    For The Irrevocable Declaration Of Trust Titled:\n  ")
      ]),
      _vm._v(" "),
      _c("p", { staticClass: "text-center text-h3" }, [
        _c("span", { staticClass: "preview-field" }, [
          _vm._v(_vm._s(_vm.trust_name))
        ])
      ]),
      _vm._v(" "),
      _c("p", { staticClass: "text-center" }, [
        _vm._v("\n    Dated: "),
        _c("b", { staticClass: "preview-field" }, [
          _vm._v(
            _vm._s(_vm.moment(_vm.document_created_at).format("D YYYY MMMM "))
          )
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticStyle: { "page-break-after": "always" } }),
      _vm._v(" "),
      _c("p", { staticClass: "text-center  " }, [
        _vm._v("\n    TRUST INDENTURE\n  ")
      ]),
      _vm._v(" "),
      _c("p", [
        _vm._v("\n    This "),
        _c("span", [_vm._v("TRUST INDENTURE")]),
        _vm._v(
          " Agreement, Conveyance and Acceptance is created and entered into this\n    "
        ),
        _c("b", { staticClass: "preview-field" }, [
          _vm._v(
            _vm._s(
              _vm
                .moment(_vm.document_created_at)
                .format("Do [day of] MMMM [A.D.], YYYY")
            )
          )
        ]),
        _vm._v(", between "),
        _c("b", { staticClass: "preview-field" }, [
          _vm._v(_vm._s(_vm.settlor))
        ]),
        _vm._v(", hereinafter called the SETTLOR and\n    "),
        _c("b", [_vm._v(_vm._s(_vm.first_trustee))]),
        _vm._v(
          ", hereinafter called the TRUSTEE and also known as the FIRST TRUSTEE, for the sole benefit of one or more BENEFICIARIES, who shall be named below in\n    "
        ),
        _c("b", [_vm._v("Schedule B")]),
        _vm._v(" & "),
        _c("b", [_vm._v("Meeting #001 Minute Number 2")]),
        _vm._v(", attached hereto.\n  ")
      ]),
      _vm._v(" "),
      _c("p", [
        _vm._v(
          "\n    This TRUST is authorized to exist and function through its Board of Trustees (hereafter BOARD), who are one or more legal persons holding fee simple title to assets, not differentiating between legal and equitable, not as individuals, but collectively as the BOARD who shall operate this TRUST as a PURE TRUST ORGANIZATION under the artificial entity name of:\n  "
        )
      ]),
      _vm._v(" "),
      _c("p", { staticClass: "text-center text-break" }, [
        _c("b", { staticClass: "preview-field" }, [
          _vm._v(_vm._s(_vm.trust_name))
        ])
      ]),
      _vm._v(" "),
      _c("p", [
        _vm._v(
          "This entity, being domiciled in the jurisdiction of the Republic of Florida, pursuant to Florida Statute 609.01, within the united States of America, shall be managed by the BOARD acting in a fiduciary capacity for the use and benefit of the BENEFICIARY."
        )
      ]),
      _vm._v(" "),
      _c("p", [
        _vm._v(
          "\n    This artificial entity hereby stands on its own, holds any and all of its assets in its own name and unlike a corporation, is not owned by another person or entity. It survives on its own, being fully accountable on its own accord. However, a natural living, breathing person must directly or indirectly sign on behalf of this entity in a fiduciary capacity as Trustee.\n  "
        )
      ]),
      _vm._v(" "),
      _c("p", [
        _vm._v(
          "\n    The moment the SETTLOR funds the Trust by contributing its first assets via the control of the Trustee, it breathes artificial life into the entity so that it may stand and act on its own, in its own name, solely responsible for its own actions as would a natural living, breathing person.\n  "
        )
      ]),
      _vm._v(" "),
      _c("p", [
        _vm._v(
          "\n    Nothing contained herein shall be construed as intent to evade or contravene any law, nor to delegate any special power belonging exclusively to company law or a corporation.\n  "
        )
      ]),
      _vm._v(" "),
      _c("p", [
        _vm._v(
          "\n    The roles and responsibilities of the two Parties herein and the terms and conditions set out for the maintenance of this artificial entity are described in this Trust Indenture and is privy only to the two parties to this private contract or as otherwise deemed prudent by the Board. A condensed version is written as the Declaration of Trust and would be readily available to be shown to third parties at the sole discretion of the Board.\n  "
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "grey lighten-2 pa-2 text-center" }, [
        _vm._v("\n    TERM & INTENT OF TRUST\n  ")
      ]),
      _vm._v(" "),
      _c("ul", [
        _c("li", [
          _vm._v("\n      1. The Trust shall exist for a term of "),
          _c("span", { staticClass: "preview-field" }, [
            _vm._v(
              _vm._s(_vm.toWords(_vm.term_of_trust)) +
                " (" +
                _vm._s(_vm.term_of_trust) +
                ")"
            )
          ]),
          _vm._v(
            "  years from the date of inception (effective date of this Agreement) and the BOARD may, at any time before the TRUST's expiration, extend its term via an appropriate Meeting Minute.\n    "
          )
        ]),
        _vm._v(" "),
        _c("li", [
          _vm._v(
            "\n      2. The organizational purpose of this TRUST is to sustain and improve this TRUST proactively through any means or business so that the BENEFICIARY may possess the things of life sufficient to provide for growth, health, protection, education, refinement, pro-creation, recreation, welfare, expansion, preservation and continuation and not simply an arrangement to protect and conserve the property for the BENEFICIARY.\n    "
          )
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "grey lighten-2 pa-2 text-center" }, [
        _vm._v("\n    SETTLOR'S PROVISIONS & RESPONSIBILITIES\n  ")
      ]),
      _vm._v(" "),
      _vm._m(0),
      _vm._v(" "),
      _c("div", { staticClass: "grey lighten-2 pa-2 text-center" }, [
        _vm._v("\n    TRUSTEE'S PROVISIONS & RESPONSIBILITIES\n  ")
      ]),
      _vm._v(" "),
      _vm._m(1),
      _vm._v(" "),
      _c("div", { staticClass: "grey lighten-2 pa-2 text-center" }, [
        _vm._v(
          "\n    ADDITIONAL TRUSTEES, MANAGERS, OFFICERS & CONTRACTORS\n  "
        )
      ]),
      _vm._v(" "),
      _vm._m(2),
      _vm._v(" "),
      _c("div", { staticClass: "grey lighten-2 pa-2 text-center" }, [
        _vm._v("\n    SUCCESSOR TRUSTEES\n  ")
      ]),
      _vm._v(" "),
      _vm._m(3),
      _vm._v(" "),
      _c("div", { staticClass: "grey lighten-2 pa-2 text-center" }, [
        _vm._v("\n    TRUSTEE REMOVAL FROM OFFICE & RESIGNATION\n  ")
      ]),
      _vm._v(" "),
      _vm._m(4),
      _vm._v(" "),
      _c("div", { staticClass: "grey lighten-2 pa-2 text-center" }, [
        _vm._v("\n    DAILY BUSINESS ACTIVITIES\n  ")
      ]),
      _vm._v(" "),
      _vm._m(5),
      _vm._v(" "),
      _c("div", { staticClass: "grey lighten-2 pa-2 text-center" }, [
        _vm._v("\n    CERTIFICATES OF BENEFICIAL OWNERSHIP OF TRUST ASSETS\n  ")
      ]),
      _vm._v(" "),
      _vm._m(6),
      _vm._v(" "),
      _c("div", { staticClass: "grey lighten-2 pa-2 text-center" }, [
        _vm._v("\n    TRANSFER OF CERTIFICATES OF BENEFICIAL OWNERSHIP\n  ")
      ]),
      _vm._v(" "),
      _vm._m(7),
      _vm._v(" "),
      _c("div", { staticClass: "grey lighten-2 pa-2 text-center" }, [
        _vm._v("\n    TRANSFER OF CERTIFICATES UPON DEATH OF BENEFICIARY\n  ")
      ]),
      _vm._v(" "),
      _vm._m(8),
      _vm._v(" "),
      _c("div", { staticClass: "grey lighten-2 pa-2 text-center" }, [
        _vm._v("\n    DISTRIBUTION OF TRUST ASSETS\n  ")
      ]),
      _vm._v(" "),
      _vm._m(9),
      _vm._v(" "),
      _c("div", { staticClass: "grey lighten-2 pa-2 text-center" }, [
        _vm._v("\n    COMMUNITY PROPERTY EXCLUSION\n  ")
      ]),
      _vm._v(" "),
      _vm._m(10),
      _vm._v(" "),
      _c("div", { staticClass: "grey lighten-2 pa-2 text-center" }, [
        _vm._v("\n    JURISDICTION, DOMICILE ADDRESS & MAILING ADDRESS\n  ")
      ]),
      _vm._v(" "),
      _vm._m(11),
      _vm._v(" "),
      _c("div", { staticClass: "grey lighten-2 pa-2 text-center" }, [
        _vm._v("\n    TERMINATION OF TRUST\n  ")
      ]),
      _vm._v(" "),
      _vm._m(12),
      _vm._v(" "),
      _c("div", { staticClass: "grey lighten-2 pa-2 text-center" }, [
        _vm._v("\n    PRIVACY STRICTLY ENFORCED\n  ")
      ]),
      _vm._v(" "),
      _vm._m(13),
      _vm._v(" "),
      _c("div", { staticClass: "grey lighten-2 pa-2 text-center" }, [
        _vm._v("\n    BOARD OF TRUSTEE MEETINGS\n  ")
      ]),
      _vm._v(" "),
      _vm._m(14),
      _vm._v(" "),
      _c("div", { staticClass: "grey lighten-2 pa-2 text-center " }, [
        _vm._v("\n    MISCELLANEOUS\n  ")
      ]),
      _vm._v(" "),
      _vm._m(15),
      _vm._v(" "),
      _c("div", { staticClass: "grey lighten-2 pa-2 text-center " }, [
        _vm._v("\n    ACCEPTANCE BY PARTIES\n  ")
      ]),
      _vm._v(" "),
      _vm._m(16),
      _vm._v(" "),
      _c(
        "v-container",
        [
          _c(
            "v-row",
            { staticClass: "sm-6" },
            [
              _c(
                "v-col",
                [
                  _c("v-text-field", {
                    attrs: {
                      filled: "",
                      "persistent-hint": "",
                      hint: "SETTLOR: " + _vm.settlor
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
                      hint: "FIRST TRUSTEE: " + _vm.first_trustee
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
              _c("v-col", { staticClass: "sm-6" }, [
                _c("div", [
                  _vm._v("\n          NOTARY Public, Weber County "),
                  _c("br"),
                  _vm._v("\n          State of Utah\n        ")
                ])
              ]),
              _vm._v(" "),
              _c("v-col", { staticClass: "sm-6" }, [
                _c("div", [
                  _vm._v("\n          NOTARY Public, Weber County "),
                  _c("br"),
                  _vm._v("\n          State of Utah\n        ")
                ])
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-row",
            { staticClass: "sm-6" },
            [
              _c(
                "v-col",
                [
                  _c("h4", { staticClass: "mb-5" }, [_vm._v("WITNESS:")]),
                  _vm._v(" "),
                  _c("v-text-field", {
                    attrs: {
                      filled: "",
                      "persistent-hint": "",
                      hint: "Notary Public PRINT NAME"
                    }
                  }),
                  _vm._v(" "),
                  _c("v-text-field", {
                    attrs: {
                      filled: "",
                      "persistent-hint": "",
                      hint: "Notary Public SIGNATURE:"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-col",
                [
                  _c("h4", { staticClass: "mb-5" }, [_vm._v("WITNESS:")]),
                  _vm._v(" "),
                  _c("v-text-field", {
                    attrs: {
                      filled: "",
                      "persistent-hint": "",
                      hint: "Notary Public PRINT NAME:"
                    }
                  }),
                  _vm._v(" "),
                  _c("v-text-field", {
                    attrs: {
                      filled: "",
                      "persistent-hint": "",
                      hint: "Notary Public SIGNATURE:"
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
            {
              staticClass: "sm-6",
              staticStyle: { height: "60mm", background: "#f1f1f1" }
            },
            [
              _c("v-col", [
                _c("div", [
                  _vm._v("\n          Notary Stamp / Seal:\n        ")
                ])
              ]),
              _vm._v(" "),
              _c("v-col", [
                _c("div", [
                  _vm._v("\n          Notary Stamp / Seal:\n        ")
                ])
              ])
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
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("ul", [
      _c("li", [
        _vm._v(
          "\n      3. As consideration, the SETTLOR hereby irrevocably assigns and/or conveys as an absolute gift to the BOARD, in trust, certain properties and/or assets to be held in the name and ownership of the TRUST and not by any TRUSTEE, the nature, identity and description of which are presently known to both the SETTLOR and the BOARD, and which shall be further identified and described in Schedule A, hereto attached, in which the BENEFICIARY shall NOT have a vested interest until termination of this TRUST and final distribution of accumulated assets or any early distribution thereof by the BOARD at their sole discretion at any time during the term of this TRUST.\n    "
        )
      ]),
      _vm._v(" "),
      _c("li", [
        _vm._v(
          "\n      4. The SETTLOR agrees and covenants that he shall have no further role to administer or to make decisions as to the management of this TRUST after the effective date of this TRUST. He also affirms that he has no authority to change this TRUST INDENTURE in any manner, nor shall he reserve or retain any dominion or control over the principal or income of this TRUST. Nothing in this paragraph shall be construed as conferring power upon the SETTLOR to reacquire Trust Corpus, or any part thereof by substituting other property of an equivalent value. The moment the SETTLOR signs this private contract, his/her duties and responsibilities related to the TRUST are completed.\n    "
        )
      ]),
      _vm._v(" "),
      _c("li", [
        _vm._v(
          "\n      5. If the SETTLOR performs any role for the TRUST after his/her signing, it can only be in an arm's length relationship via an independent contractor relationship and have nothing to do with direct management functions of the TRUST. If the contracted functions involve any portion of TRUST assets, they must be free of sole discretion over ownership, control or disposition of those assets.\n    "
        )
      ]),
      _vm._v(" "),
      _c("li", [
        _vm._v(
          "\n      6. The SETTLOR affirms and covenants that he shall not, and has not, engage(d) in any secret agreements or prearrangements of any type with the BOARD of this TRUST, that obligates them to act in any manner in their sole interest and not as fair, unbiased, and independent fiduciaries in the best interest of the BENEFICIARY.\n    "
        )
      ]),
      _vm._v(" "),
      _c("li", [
        _vm._v(
          "\n      7. Under no circumstances shall the SETTLOR have any participation interest in any investment made by the BOARD other than such legal interest as would a stranger to the TRUST have in the particular transaction. It is acceptable for the SETTLOR to make a similar or identical investment as the TRUST at the same time that the TRUST shall make its investment(s).\n    "
        )
      ]),
      _vm._v(" "),
      _c("li", [
        _vm._v(
          "\n      8. The SETTLOR may, at any time in the future, assign and/or convey additional assets to the TRUST as additional consideration. Additionally, any outside party, including the BOARD or BENEFICIARY may convey assets to the TRUST by gift, will, exchange, bill of sale, quit claim or by deed, with the consent of the BOARD, to be held for the benefit of the BENEFICIARY with the intent of eventually being distributed to the BENEFICIARY. The title to any assets accepted by the BOARD shall be held in a fiduciary capacity in the name of the TRUST and can only be claimed by the BENEFICIARY to have beneficial, not vested, ownership in those assets.\n    "
        )
      ]),
      _vm._v(" "),
      _c("li", [
        _vm._v(
          "\n      9. A letter from the SETTLOR (hereafter SETTLOR's Statement of Wishes) shall be drafted by the SETTLOR to establish and confirm beneficial ownership of TRUST assets.\n    "
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("ul", [
      _c("li", [
        _vm._v(
          "\n      10. Because the FIRST TRUSTEE may be just one person on the BOARD, in such instance, the words FIRST TRUSTEE or TRUSTEE can also be referred to hereafter as the BOARD. The FIRST TRUSTEE alone is always considered the BOARD but if other titled officers are also on the BOARD, the BOARD does not always only mean the FIRST TRUSTEE.\n    "
        )
      ]),
      _vm._v(" "),
      _c("li", [
        _vm._v(
          "\n      11. The BOARD accepts said conveyed assets into the name and ownership of the TRUST and not into any TRUSTEE's name and the BOARD presents its own consideration for the TRUST Agreement. The BOARD presents its expertise and knowledge in business and/or as a Trust Manager and shall administer the SETTLOR's wishes in establishing this artificial entity and maintain it for the sole benefit of the BENEFICIARY(IES) who is listed in Meeting #001 Minute Number 2 / Schedule B, hereto attached.\n    "
        )
      ]),
      _vm._v(" "),
      _c("li", [
        _vm._v(
          ' 12. The BOARD is authorized to deal with the SETTLOR "at arm\'s length," to purchase property or to sell property, but always at fair market value and for adequate and full consideration.  '
        )
      ]),
      _vm._v(" "),
      _c("li", [
        _vm._v(
          "\n      13. The BOARD shall, as it deems proper and necessary, provide for operating funds through any type of borrowing, hypothecation, monetization, either unsecured or directly or indirectly secured, which shall constitute the operating funds of this TRUST. The BOARD may authorize liquidation of assets for the purpose of adding to the operating funds.\n    "
        )
      ]),
      _vm._v(" "),
      _c("li", [
        _vm._v(
          "\n      14. The BOARD shall have all the powers necessary to operate, manage and control this TRUST for the benefit of the BENEFICIARY and shall take any action which it deems necessary and proper to carry out such purposes, provided however, that the BOARD shall not possess any power or take any action contrary to law or inconsistent with the provisions of this TRUST INDENTURE.\n    "
        )
      ]),
      _vm._v(" "),
      _c("li", [
        _vm._v(
          "\n      15. The BOARD shall have sole authority to determine what shall constitute principal of this TRUST, income therefrom, net income distributable under the terms of this TRUST INDENTURE to the BENEFICIARY and to determine which costs, taxes and other expenses shall be paid out of the TRUST assets. All such decisions  by the BOARD shall be conclusive.\n    "
        )
      ]),
      _vm._v(" "),
      _c("li", [
        _vm._v(
          "\n      16. The BOARD shall receive reasonable compensation for their services performed. Any BOARD member may hold two or more offices simultaneously within the TRUST and be deserving of such reasonable compensation for all services rendered at the discretion of the BOARD. However, all TRUSTEES, Trust Managers, other titled officers and executives shall have the right to waive any compensation for their services.\n    "
        )
      ]),
      _vm._v(" "),
      _c("li", [
        _vm._v(
          "\n      17. No bond for the faithful performance of duties shall be required of any BOARD member under this TRUST INDENTURE,  nor shall any bond be required of any subsequent members appointed to the BOARD, unless the BOARD, by appropriate Meeting Minute, requires such of any newly appointed BOARD member(s).\n    "
        )
      ]),
      _vm._v(" "),
      _c("li", [
        _vm._v(
          "\n      18. No member of the BOARD shall possess or exercise a power of administration in a nonfiduciary capacity, nor a power exercisable solely by himself to  vest the corpus or the income therefrom in himself, or any other power, the possession or exercise of which would cause the income of this TRUST to be taxed to any member of the BOARD or to the SETTLOR.\n    "
        )
      ]),
      _vm._v(" "),
      _c("li", [
        _vm._v(
          "\n      19. The BOARD shall, in their fiduciary capacity for this TRUST and not as individuals, assume or incur only such liability as shall attach to the TRUST assets. This liability shall not in any manner jeopardize their individual or personal holdings and for any losses they should suffer for any reason through rendering services as the BOARD, they shall be reimbursed from TRUST assets to the same extent as would non-interested persons, except for any loss sustained by reason of breach of their fiduciary duty.\n    "
        )
      ]),
      _vm._v(" "),
      _c("li", [
        _vm._v(
          "\n      20. The BOARD may assign additional members to this TRUST as they deem necessary and prudent and they may increase or decrease the number of BOARD members as appropriate to the affairs of the TRUST. Said additional members may be necessary for the administration of various tasks associated with this TRUST and not necessarily for additional management decisions unless noted to the contrary in a separate Meeting Minute at the time said additional members are assigned. The appointment term for an additional member is controlled to one (1) year increments and can be withdrawn at any time by the FIRST TRUSTEE in a future Meeting Minute. An Annual appointment renewal may only be authorized by the FIRST TRUSTEE within thirty (30) days or less prior to expiration of said member's appointment.\n    "
        )
      ]),
      _vm._v(" "),
      _c("li", [
        _vm._v(
          "\n      21. All additional TRUSTEES shall be referred to as SECONDARY TRUSTEES. Unless further clarified at the time of their appointment, the FIRST TRUSTEE shall from time-to-time designate specific tasks, roles, duties and/or authorities for which the SECONDARY TRUSTEE shall be consulted or kept apprised.\n    "
        )
      ]),
      _vm._v(" "),
      _c("li", [
        _vm._v(
          "\n      22. All decisions for the management of this TRUST need not be unanimous if more than on TRUSTEE is on the BOARD unless noted to the contrary in this TRUST INDENTURE or in a subsequent Meeting Minute. The FIRST TRUSTEE's decision shall always take priority over any other title if there is dissent. Only a FIRST TRUSTEE can make a decision with their sole signature unless that specific authority is additionally passed down to another title / person on the BOARD in writing (Meeting Minute, Trust Resolution or otherwise).\n    "
        )
      ]),
      _vm._v(" "),
      _c("li", [
        _vm._v(
          "\n      23. Even if there are other currently active Board members, the First Trustee, or equivalent, shall always retain the sole authority, at his/her sole discretion, to amend this Trust Indenture and/or its corresponding Declaration of Trust in any reasonable manner in order to carry out the intended functions of the Board. Said functions can include, but are not limited to, clarifying or rectifying any situation or circumstance of the past, present or future that has not already been addressed therein.\n    "
        )
      ]),
      _vm._v(" "),
      _c("li", [
        _vm._v(
          "\n      24. Any BOARD member shall abstain from voting if benefiting personally or in any other manner from the transaction.\n    "
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("ul", [
      _c("li", [
        _vm._v(
          "\n      25. The BOARD may employ, hire or contract with, and pay from these TRUST assets, reasonable compensation to any officer, assistant, aide, contractor, subcontractor, agent, clerk, manager, TRUSTEE, attorney, barrister, solicitor, accountant, broker, investment, tax or other advisor as the BOARD deems necessary and prudent for the expedient and proper function of this TRUST.\n    "
        )
      ]),
      _vm._v(" "),
      _c("li", [
        _vm._v(
          "\n      26. The BOARD may, at its discretion, appoint one or more of its TRUSTEES, or qualified non-Trustees, to the position of Trust Manager(s). Said appointment will also require an appropriate Independent Contractor Agreement to be on file for said title to become effective. Unless otherwise noted, the Trust Manager(s) shall have full authority to manage this TRUST including, but not limited to, the routine day-to-day operations, subject at all times, to the scrutiny of the BOARD. If no Trust Manager is appointed, the FIRST TRUSTEE shall retain all management duties.\n    "
        )
      ]),
      _vm._v(" "),
      _c("li", [
        _vm._v(
          "\n      27. No TRUSTEE, Trust Manager(s), or other titled officer, currently employed, hired or under contract with this TRUST, shall ever be held liable for any action or default of any TRUSTEE, Trust Manager, or other titled officer, or any other person in connection with the administration and management of this TRUST unless caused by the individual's own gross negligence or by commission of a willful act of breach of trust.\n    "
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("ul", [
      _c("li", [
        _vm._v(
          "\n      28. SUCCESSOR TRUSTEES must be named within the first ten (10) Trust Meeting Minutes by the BOARD and said list of preferences shall be strictly adhered to and can only be modified by a FIRST TRUSTEE.\n    "
        )
      ]),
      _vm._v(" "),
      _c("li", [
        _vm._v(
          "\n      29. A SUCCESSOR TRUSTEE may be appointed by a court of competent jurisdiction or by consensus of the remaining TRUSTEES and the Trust Manager(s), if any, and the BENEFICIARY(ies), if of legal age, if circumstances present themselves where there is no SUCCESSOR TRUSTEES capable of taking over upon the death, resignation, incapacitation or removal of any current TRUSTEE. It is at the discretion of the BOARD to replace any TRUSTEE, Trust Manager or other titled officer. Only a FIRST TRUSTEE must be replaced.\n    "
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("ul", [
      _c("li", [
        _vm._v(
          "\n      30. Any TRUSTEE, Trust Manager or titled officer shall have the discretionary power to resign from their duties with this TRUST by providing thirty (30) days written notice.\n    "
        )
      ]),
      _vm._v(" "),
      _c("li", [
        _vm._v(
          "\n      31. A SUCCESSOR TRUSTEE may be removed from office for (a) gross neglect of duty as determined by the unanimous vote of the other TRUSTEE(S), (b) by mandate of a court of competent jurisdiction when guilty of fraud, theft, malfeasance in office, or other sufficient legal cause, or (c) by FIRST TRUSTEE based solely on FIRST TRUSTEE's discretion.\n    "
        )
      ]),
      _vm._v(" "),
      _c("li", [
        _vm._v(
          "\n      32. In the event of death, resignation, incapacitation or removal from office of any SUCCESSOR TRUSTEE, the BOARD shall, by unanimous vote, either appoint a SUCCESSOR TRUSTEE or vote to reduce the number of TRUSTEES.\n    "
        )
      ]),
      _vm._v(" "),
      _c("li", [
        _vm._v(
          "\n      33. Changes of Trusteeship for any reason shall not dissolve, terminate or impede the day-to-day operations of this TRUST.\n    "
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("ul", [
      _c("li", [
        _vm._v(
          "\n      34. The BOARD shall open, maintain or close any bank accounts as necessary to receive, hold or transfer any funds for the use by the BOARD and for the benefit of the BENEFICIARY(IES).\n    "
        )
      ]),
      _vm._v(" "),
      _c("li", [
        _vm._v(
          "\n      35. The BOARD may purchase, sell, invest, reinvest, lease, rent, mortgage, insure, repair or improve, at the BOARD's sole discretion, any personal, intangible or real property for the use by the BOARD and for the benefit of the BENEFICIARY(IES).\n    "
        )
      ]),
      _vm._v(" "),
      _c("li", [
        _vm._v(
          "\n      36. The BOARD may sell, liquidate or continue to operate, at the BOARD's sole discretion, any corporation, partnership, limited liability company, any partial interest therein or other business interest, which may be received, acquired, purchased, traded or initiated by this TRUST.\n    "
        )
      ]),
      _vm._v(" "),
      _c("li", [
        _vm._v(
          "\n      37. The BOARD may enforce any and all mortgages, pledges and deeds of Trust held by this TRUST and may borrow funds for any TRUST purpose, encumber, lien, hypothecate, pledge or the equivalent, any TRUST assets at the sole discretion of the BOARD.\n    "
        )
      ]),
      _vm._v(" "),
      _c("li", [
        _vm._v(
          "\n      38. The BOARD may also designate third parties to hold funds or title to TRUST property in another name for specific purposes necessary to the use and operation of this TRUST.\n    "
        )
      ]),
      _vm._v(" "),
      _c("li", [
        _vm._v(
          "\n      39. The BOARD shall initiate or defend, at the BOARD's sole discretion, any litigation affecting this TRUST. The BOARD may also submit to arbitration, compromise, release or otherwise adjust, with or without compensation, any and all claims affecting this TRUST.\n    "
        )
      ]),
      _vm._v(" "),
      _c("li", [
        _vm._v(
          "\n      40. The BOARD shall pay all property taxes, assessments, charges, debts, bills and obligations arising out of the maintenance, operation and administration of this TRUST.\n    "
        )
      ]),
      _vm._v(" "),
      _c("li", [
        _vm._v(
          "\n      41. The BOARD is authorized to pay expenses of TRUSTEES, officers, executives, managers and like persons, incurred while they are on TRUST business. The BOARD is further authorized to create expense accounts for each TRUSTEE, other titled officers, executives, managers and like persons, at the discretion of the BOARD, by appropriate Meeting Minute and authorized and Notarized Board Resolution(s): this expense account can cover any and all personal expenses, to include but not limited to; mortgages, utilities, food, travel, entertainment, etc.\n    "
        )
      ]),
      _vm._v(" "),
      _c("li", [
        _vm._v(
          "\n      42. It is also expressly provided that the BOARD shall not possess or exercise any power, which would, by its possession or exercise, cause the income of this TRUST to be taxed to the SETTLOR or TRUSTEE under the Grantor-Trust provisions of the Internal Revenue Code in the United States.\n    "
        )
      ]),
      _vm._v(" "),
      _c("li", [
        _vm._v(
          "\n      43. Notice shall be given, when appropriate, to all persons or legal entities doing business with, extending credit to, contracting with, or having a claim against this TRUST, that the BOARD is not personally liable when dealing with TRUST property or matters, and such persons must look only to the assets of this TRUST for payment of, or for settlement of any debt, tort, damage, judgment or decree, or for any indebtedness which shall become payable thereunder.\n    "
        )
      ]),
      _vm._v(" "),
      _c("li", [
        _vm._v(
          "\n      44. Anyone lending or paying money to the BOARD must be put on notice that they shall not be obliged to see the application of funds thereof.\n    "
        )
      ]),
      _vm._v(" "),
      _c("li", [
        _vm._v(
          "\n      45. Any BOARD member is authorized to loan or advance funds to this TRUST for any purpose and such transaction, together with stated interest, shall be a first lien against this TRUST and shall be repaid therefrom, so long as any such transaction is recorded in the appropriate Meeting Minutes of this TRUST.\n    "
        )
      ]),
      _vm._v(" "),
      _c("li", [
        _vm._v(
          "\n      46. Any BOARD member is further authorized to deal with this TRUST in general business matters, provided that in all such transactions, the BOARD member retains therein their fiduciary obligation to this TRUST, foremost.\n    "
        )
      ]),
      _vm._v(" "),
      _c("li", [
        _vm._v(
          "\n      47. In any matter for which doing business under this TRUST name is not deemed to be legal, ethical, or without conflict, the BOARD is authorized to do business in the name of individual BOARD members with appropriate reference to their fiduciary capacity, provided that such does not affect the legality of either the business performed or this TRUST itself.\n    "
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("ul", [
      _c("li", [
        _vm._v(
          "\n      48. Each BENEFICIARY shall be assigned a number of Units of Beneficial Ownership (hereafter UNITS) between one (1) and one hundred (100), of which the sum total of all UNITS shall equal one hundred (100). Said number shall similarly represent the percentage of all TRUST assets to which said BENEFICIARY may claim beneficial ownership. Each UNIT shall represent one percent (1%) of all TRUST assets. There shall never be more or less than 100 UNITS available to the BENEFICIARY (ies).\n    "
        )
      ]),
      _vm._v(" "),
      _c("li", [
        _vm._v(
          "\n      49. A Certificate of Beneficial Ownership (hereafter CERTIFICATE) shall be issued to each BENEFICIARY stating the number of UNITS said BENEFICIARY is entitled to claim. If said BENEFICIARY is a minor or an adult of questionable mental stability, said CERTIFICATE may be held by the BOARD or entrusted with the BENEFICIARY's parent or legal guardian as the situation may apply, at the discretion of the BOARD.\n    "
        )
      ]),
      _vm._v(" "),
      _c("li", [
        _vm._v(
          "\n      50. The dispersion of a CERTIFICATE to a BENEFICIARY or their representative shall be recorded in the official record of the TRUST and the person/entity that physically holds said CERTIFICATE in their possession might also be referred to as the HOLDER\n    "
        )
      ]),
      _vm._v(" "),
      _c("li", [
        _vm._v(
          "\n      51. Said UNITS may be re-divided amongst the BENEFICIARIES at the sole discretion of the BOARD anytime beyond one (1) calendar month after the effective date of this TRUST agreement.\n    "
        )
      ]),
      _vm._v(" "),
      _c("li", [
        _vm._v(
          "\n      52. A BENEFICIARY may be added, removed or replaced, without just cause, at the sole discretion of the FIRST TRUSTEE, anytime beyond one (1) calendar month after the effective date of this TRUST agreement.\n    "
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("ul", [
      _c("li", [
        _vm._v(
          "53. In accordance with the purposes of this TRUST, the transfer of CERTIFICATES is strictly limited. The BENEFICIARY only has beneficial interest and not vested interest in TRUST assets."
        )
      ]),
      _vm._v(" "),
      _c("li", [
        _vm._v(
          "54. The lawful HOLDER of any CERTIFICATE (per Section 46 above), as recorded in the records of this TRUST, may transfer, exchange or give that CERTIFICATE to any other person(s) or entity, provided however, that such transfer is not effective unless and until it has been approved by unanimous consent of the BOARD by written and recorded Meeting Minute."
        )
      ]),
      _vm._v(" "),
      _c("li", [
        _vm._v(
          "55. A HOLDER may not receive compensation that could be construed as a sale for his transfer, exchange or gift of a CERTIFICATE to another person or entity."
        )
      ]),
      _vm._v(" "),
      _c("li", [
        _vm._v(
          "56. Approval of a legitimate transfer shall not be unreasonably withheld. However, in accordance with the stated purposes of this TRUST, approval of any transfer may be withheld if, in the opinion of the BOARD, the transfer is an attempt to use the CERTIFICATE as security for a loan of any nature, an attempt at hypothecation, pledge as collateral, lien or assignment of any nature or is otherwise an attempt of the HOLDER or BENEFICIARY to untimely anticipate or force a distributive share of TRUST assets prior to termination of the TRUST or in conflict with the intent of the TRUST."
        )
      ]),
      _vm._v(" "),
      _c("li", [
        _vm._v(
          "57. In any determination concerning the approval or disapproval of any contemplated transfer, the BOARD, in its discretion, may require a sworn statement from the HOLDER concerning the contemplated transfer and his intentions for same. Any determination of the BOARD concerning such approval shall be final."
        )
      ]),
      _vm._v(" "),
      _c("li", [
        _vm._v(
          "58. Any transfer will be effective only after the old CERTIFICATE is surrendered to the BOARD, the transfer is noted in the records of this TRUST and a new CERTIFICATE is dispersed to the new HOLDER."
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("ul", [
      _c("li", [
        _vm._v(
          "59. Any rights possessed by any BENEFICIARY or HOLDER, by reason of his holding a CERTIFICATE, terminate upon the BENEFICIARY'S death unless prior arrangements have been made with the BOARD."
        )
      ]),
      _vm._v(" "),
      _c("li", [
        _vm._v(
          "60. Any BENEFICIARY may file a request with the BOARD naming any person(s) or entity (ies) to whom he desires his CERTIFICATE be transferred upon his death with full rights being transferred to said new BENEFICIARY. Such requests shall be considered and approved in the same manner as other requests for transfer, and prompt notice shall be given to the BENEFICIARY of approval or disapproval and such approval will not be unreasonably withheld."
        )
      ]),
      _vm._v(" "),
      _c("li", [
        _vm._v(
          "61. If, upon the death of any BENEFICIARY, there is contained in the Meeting Minutes of this TRUST, an approved transfer-upon-death form, upon receipt of the proper notice of such death by the BOARD and surrender of the old CERTIFICATE, the BOARD shall note the transfer in the records of this TRUST and issue a new CERTIFICATE according to such approved transfer. If no such transfer-upon-death form exists or approved transfer appears in the Meeting Minutes, then the BOARD shall distribute the UNITS of said CERTIFICATE on a pro-rata basis among the remaining BENEFICIARY (ies)."
        )
      ]),
      _vm._v(" "),
      _c("li", [
        _vm._v(
          "62. A Replacement BENEFICIARY shall retain only those rights previously held by a predecessor BENEFICIARY."
        )
      ]),
      _vm._v(" "),
      _c("li", [
        _vm._v(
          "63. The holding of a CERTIFICATE does not entitle the BENEFICIARY or a HOLDER to any management power or rights. Nor shall the death of a BENEFICIARY or transfer by a BENEFICIARY or a HOLDER entitle his heirs, legal representatives, or transferees to demand any division of the property of the TRUST, any special accounting thereof, or entitlement to any special rights whatsoever."
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("ul", [
      _c("li", [
        _vm._v(
          "64. The proportionate share of distributed assets to which each BENEFICIARY has a beneficial interest is not discretionary, but is determined solely by the number of UNITS stated on the CERTIFICATE held on their behalf."
        )
      ]),
      _vm._v(" "),
      _c("li", [
        _vm._v(
          "65. The BOARD shall review at each annual meeting its current schedule of distribution of assets, if any, and adjust it if necessary, at the discretion"
        )
      ]),
      _vm._v(" "),
      _c("li", [
        _vm._v(
          "66. Any BENEFICIARY may apply to the BOARD for an advance towards future distributions of both income and principal. The BOARD may consider such applications based upon emergency circumstances relating to health, education or maintenance. The BOARD, in its sole discretion, may, at any time, distribute to such BENEFICIARY, any sum which the BOARD feels is consistent with the purposes and intent of this TRUST INDENTURE and the rights of any other BENEFICIARY."
        )
      ]),
      _vm._v(" "),
      _c("li", [
        _vm._v(
          "67. Any such distribution shall be charged to the account of such BENEFICIARY and deducted from any future distribution. Should future distributions be insufficient to cover any such advances, the balance of such advance shall be deducted from any share of TRUST assets to be distributed to such BENEFICIARY upon termination of this TRUST."
        )
      ]),
      _vm._v(" "),
      _c("li", [
        _vm._v(
          "68. Any decision of the BOARD to distribute or not to distribute, or as to the sum of any such advance, shall be final."
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("ul", [
      _c("li", [
        _vm._v(
          "69. No accumulation or distribution of TRUST assets or future benefit (hereafter BENEFIT) devolving on any BENEFICIARY under the TRUST terms shall form or constitute a portion of any communal or joint estate of such BENEFICIARY, but shall instead be and remain the sole, separate and exclusive property of such BENEFICIARY. Should such BENEFICIARY be married or marry in community of property, then the BENEFICIARY's rights to any BENEFIT shall be expressly excluded from the community. A prenuptial agreement between the BENEFICIARY and the soon-to-be spouse shall not be necessary to withhold the BENEFIT from said community. Such BENEFIT shall also be free from the interference, control or marital power of any spouse of such BENEFICIARY. "
        )
      ]),
      _vm._v(" "),
      _c("li", [
        _vm._v(
          '70. For the purposes of this Section, the term "benefit" shall include movable and immovable property and the provisions of this Section shall apply moreover not only to the benefit actually delving on such BENEFICIARY, but also to any and all benefits at any time thereafter directly or indirectly acquired by means of the proceeds thereof.'
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("ul", [
      _c("li", [
        _vm._v(
          "71. This TRUST INDENTURE Agreement and TRUST created hereby shall be administered, managed, governed, interpreted and regulated in all respects according to applicable Common Law in the Republic of Florida under the Constitution of the united States of America."
        )
      ]),
      _vm._v(" "),
      _c("li", [
        _vm._v(
          "72. The TRUST shall have its original domicile address located in the city of Orlando, Republic of Florida, in the united States of America."
        )
      ]),
      _vm._v(" "),
      _c("li", [
        _vm._v(
          "73. The domicile, and thereby the controlling interpretational laws under which this TRUST shall be administered, managed, governed, interpreted and regulated, may be changed to any other state or Nation as shall be deemed prudent, wise, necessary or appropriate at any time by the BOARD."
        )
      ]),
      _vm._v(" "),
      _c("li", [
        _vm._v(
          "74. The domicile address and the mailing address do not have to be the same and either may be changed by appropriate Meeting Minute by the BOARD. Changing the mailing address does not automatically change the domicile address unless specifically stated in the appropriate Meeting Minute."
        )
      ]),
      _vm._v(" "),
      _c("li", [
        _vm._v(
          "75. This TRUST shall enjoy the benefits of the Uniform Commercial Code (only when and if applicable and/or allowable to remain under the jurisdiction of Common Law) per, but not limited to, the following citations (or their updated equivalents): section 28: 1-105, TERRITORIAL APPLICATION OF THIS SUBTITLE; PARTIES' POWER TO CHOOSE APPLICABLE LAW, and section 28:1-207, PERFORMANCE OR ACCEPTANCE UNDER RESERVATION OF RIGHTS."
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("ul", [
      _c("li", [
        _vm._v(
          "76. Upon the eventual expiration of the term of this TRUST, this TRUST shall cease to exist and all remaining assets shall be immediately distributed to the BENEFICIARY(IES). In said event, the BOARD shall have the continuing authority to act to wind up the affairs of this TRUST, as is necessary, past the date of expiration. In the event that the Declaration of Trust was recorded, a Notice of Termination shall also be recorded and published as necessary or required."
        )
      ]),
      _vm._v(" "),
      _c("li", [
        _vm._v(
          "77. The BOARD shall pay all remaining obligations of this TRUST and distribute the remaining assets to the BENEFICIARY in direct proportion to the number of UNITS held on their CERTIFICATE. Upon receiving receipts for the distribution of the remaining assets to the BENEFICIARY, the BOARD shall be automatically discharged hereunder, provided that their administration and distributions have been made in accordance with the terms and provisions of this TRUST INDENTURE. Otherwise, a court of competent jurisdiction may be called upon to review and correct any tort or error."
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("ul", [
      _c("li", [
        _vm._v(
          "78. It is imperative that no representative of this TRUST (TRUSTEE, Trust Manager, or other titled officer, etc.) disclose to any member of the general public, private business or counsel, any information pertaining to the BENEFICIARY. It is against the intention and wishes of the SETTLOR for anyone to disclose the identities of any BENEFICIARY of this TRUST. Therefore, no non-officer shall be permitted to view any Meeting Minutes of this TRUST or this TRUST INDENTURE. TRUST Resolutions, however, may be presented to their intended recipients per the discretion of the BOARD."
        )
      ]),
      _vm._v(" "),
      _c("li", [
        _vm._v(
          "79. With the exception to Number 75, above, the BOARD reserves the right to show portions of the TRUST Agreement, this TRUST INDENTURE or Meeting Minutes to appropriate parties if deemed absolutely necessary for the maintenance and well being of the TRUST, especially if being coerced or threatened by authority or if under duress."
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("ul", [
      _c("li", [
        _vm._v(
          "80. The BOARD shall provide that an annual meeting be held on the tenth (10th) day of January of each year or the Monday following if said day falls on a weekend. The time shall be 9:30 am at a location to be announced by 28 DEC of the immediate prior year."
        )
      ]),
      _vm._v(" "),
      _c("li", [
        _vm._v(
          "81. Special meetings may be called by one or more TRUSTEE upon three (3) days notice, which may be waived by any or all TRUSTEE(s) and/or other titled officers."
        )
      ]),
      _vm._v(" "),
      _c("li", [
        _vm._v(
          "82. All meetings may be held anywhere in the world. Participation and voting at any meeting may be by way of telephone or other electronic process, as well as physical presence, so long as any such voting is followed with a written statement to the non present TRUSTEES, stating the particulars of such vote and a copy of any Meeting Minutes recorded."
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("ul", [
      _c("li", [
        _vm._v(
          "83. All pronouns, however stated herein, shall be deemed to refer to the masculine, feminine or neutral gender, singular or plural, as the identity of the PARTY, person(s) or legal entity(ies) may require."
        )
      ]),
      _vm._v(" "),
      _c("li", [
        _vm._v(
          "84. All numbered items are called Numbers. All groupings of Numbers within a bold header topic are collectively called a Section."
        )
      ]),
      _vm._v(" "),
      _c("li", [
        _vm._v(
          "85. In the event that any portion of this TRUST shall be held unlawful, invalid or otherwise inoperative, it is the intention of the SETTLOR that all of the other provisions herein shall continue to be in effect when possible, reasonable and legal."
        )
      ]),
      _vm._v(" "),
      _c("li", [
        _vm._v(
          "86. Any person shall be entitled to rely upon a COPY of the TRUST INDENTURE and any instruments duly executed in accordance with the provisions thereof, to the same extent as the original document if the BOARD approves such COPY."
        )
      ]),
      _vm._v(" "),
      _c("li", [
        _vm._v(
          "87. An approved Meeting Minute of the BOARD and distributed TRUST Resolution authorizing what it is they determine to do or have done shall be sufficient evidence that such an act is within their power to those doing business with this TRUST."
        )
      ]),
      _vm._v(" "),
      _c("li", [
        _vm._v(
          "88. The BOARD shall have the power to amend, modify or replace any portion of this TRUST INDENTURE (via an appropriate Meeting Minute) to better carry out the purposes and intentions thereof, or in order to conform to or comply with any law, rule, regulation or order of any government body, provided that any such amendment may not be inconsistent with the basic TRUST purposes and intentions, and not in derogation of the fiduciary obligations to the BENEFICIARY. No amendment shall be revocable by the SETTLOR or by any other person or entity except the BOARD."
        )
      ]),
      _vm._v(" "),
      _c("li", [
        _vm._v(
          "89. A majority of all the TRUSTEES shall constitute a quorum for conducting business at any meeting"
        )
      ]),
      _vm._v(" "),
      _c("li", [
        _vm._v("90. This Trust Indenture consists of thirteen (13) pages.")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("ul", [
      _c("li", [
        _vm._v(
          "91. The TRUSTEE, through co-execution of this agreement, signifies confirmation and acceptance of his fiduciary position as TRUSTEE, hereby establishing the BOARD and hereby accepts the terms, conditions and provisions of this TRUST INDENTURE and the Resolutions which are recorded in the Meeting Minutes from time to time, which shall serve as the governing instruments of the BOARD. The signing and acknowledgement of appropriate TRUST Meeting Minutes, if applicable, by subsequently appointed SUCCESSOR TRUSTEES shall constitute their acceptance of this TRUST INDENTURE and TRUST assets in the same manner as the BOARD and the assets and emoluments thereof shall immediately vest in the BOARD as fiduciary for the TRUST without further act or conveyance except as may be required by local law."
        )
      ]),
      _vm._v(" "),
      _c("li", [
        _vm._v(
          "92. The SETTLOR, through co-execution of this TRUST INDENTURE, signifies confirmation and acceptance of his settlement position to this TRUST by providing the initial asset to fund this TRUST and his Statement of Wishes Letter to the BOARD."
        )
      ]),
      _vm._v(" "),
      _c("li", [
        _vm._v(
          "93. IN WITNESS WHEREOF, the parties hereto have hereunder set their hands and seals in acknowledgement and acceptance of, assent to and covenant to abide by all conditions herein imposed and expressed on or after the day first written above."
        )
      ])
    ])
  }
]
render._withStripped = true



/***/ })

}]);