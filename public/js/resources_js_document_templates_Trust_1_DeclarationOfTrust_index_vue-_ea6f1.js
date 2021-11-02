(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_document_templates_Trust_1_DeclarationOfTrust_index_vue-_ea6f1"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/document_templates/Trust/1_DeclarationOfTrust/index.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/document_templates/Trust/1_DeclarationOfTrust/index.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuetify_dist_vuetify_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuetify/dist/vuetify.css */ "./node_modules/vuetify/dist/vuetify.css");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      var _this$project2, _this$project2$projec, _this$project2$projec2, _this$project2$projec3, _this$client, _this$client2;

      return ((_this$project2 = this.project) === null || _this$project2 === void 0 ? void 0 : (_this$project2$projec = _this$project2.project_data) === null || _this$project2$projec === void 0 ? void 0 : (_this$project2$projec2 = _this$project2$projec.trust) === null || _this$project2$projec2 === void 0 ? void 0 : (_this$project2$projec3 = _this$project2$projec2.trustees) === null || _this$project2$projec3 === void 0 ? void 0 : _this$project2$projec3.first[0]) || "".concat(this === null || this === void 0 ? void 0 : (_this$client = this.client) === null || _this$client === void 0 ? void 0 : _this$client.first_name, " ").concat(this === null || this === void 0 ? void 0 : (_this$client2 = this.client) === null || _this$client2 === void 0 ? void 0 : _this$client2.last_name);
    },
    trust_name: function trust_name() {
      var _this$project3, _this$project3$projec;

      return (_this$project3 = this.project) === null || _this$project3 === void 0 ? void 0 : (_this$project3$projec = _this$project3.project_data) === null || _this$project3$projec === void 0 ? void 0 : _this$project3$projec.name;
    },
    settlor: function settlor() {
      var _this$project4, _this$project4$projec, _this$project4$projec2;

      return (_this$project4 = this.project) === null || _this$project4 === void 0 ? void 0 : (_this$project4$projec = _this$project4.project_data) === null || _this$project4$projec === void 0 ? void 0 : (_this$project4$projec2 = _this$project4$projec.trust) === null || _this$project4$projec2 === void 0 ? void 0 : _this$project4$projec2.settlor;
    },
    domicile_address: function domicile_address() {
      var _this$project5, _this$project5$projec, _this$project5$projec2;

      return ((_this$project5 = this.project) === null || _this$project5 === void 0 ? void 0 : (_this$project5$projec = _this$project5.project_data) === null || _this$project5$projec === void 0 ? void 0 : (_this$project5$projec2 = _this$project5$projec.trust) === null || _this$project5$projec2 === void 0 ? void 0 : _this$project5$projec2.domicile_address) || {};
    },
    term_of_trust: function term_of_trust() {
      var _this$project6, _this$project6$projec, _this$project6$projec2;

      return ((_this$project6 = this.project) === null || _this$project6 === void 0 ? void 0 : (_this$project6$projec = _this$project6.project_data) === null || _this$project6$projec === void 0 ? void 0 : (_this$project6$projec2 = _this$project6$projec.trust) === null || _this$project6$projec2 === void 0 ? void 0 : _this$project6$projec2.term_of_trust) || 99;
    }
  },
  methods: {
    moment: (moment__WEBPACK_IMPORTED_MODULE_1___default()),
    toWords: converter.toWords
  },
  mounted: function mounted() {}
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

/***/ "./resources/js/document_templates/Trust/1_DeclarationOfTrust/index.vue":
/*!******************************************************************************!*\
  !*** ./resources/js/document_templates/Trust/1_DeclarationOfTrust/index.vue ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_vue_vue_type_template_id_3699110a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=3699110a&scoped=true& */ "./resources/js/document_templates/Trust/1_DeclarationOfTrust/index.vue?vue&type=template&id=3699110a&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/document_templates/Trust/1_DeclarationOfTrust/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_3699110a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _index_vue_vue_type_template_id_3699110a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "3699110a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/document_templates/Trust/1_DeclarationOfTrust/index.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/document_templates/Trust/1_DeclarationOfTrust/index.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/document_templates/Trust/1_DeclarationOfTrust/index.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/document_templates/Trust/1_DeclarationOfTrust/index.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/document_templates/Trust/1_DeclarationOfTrust/index.vue?vue&type=template&id=3699110a&scoped=true&":
/*!*************************************************************************************************************************!*\
  !*** ./resources/js/document_templates/Trust/1_DeclarationOfTrust/index.vue?vue&type=template&id=3699110a&scoped=true& ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_3699110a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_3699110a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_3699110a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=template&id=3699110a&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/document_templates/Trust/1_DeclarationOfTrust/index.vue?vue&type=template&id=3699110a&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/document_templates/Trust/1_DeclarationOfTrust/index.vue?vue&type=template&id=3699110a&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/document_templates/Trust/1_DeclarationOfTrust/index.vue?vue&type=template&id=3699110a&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "document-template" }, [
    _c("div", [
      _c("p", { staticClass: "text-right text-pre" }, [
        _vm._v("\n      Domicile Address:\n      ATTN: "),
        _c("span", { staticClass: "preview-field" }, [
          _vm._v(_vm._s(_vm.first_trustee))
        ]),
        _vm._v(", Trustee\n      "),
        _c("span", { staticClass: "preview-field" }, [
          _vm._v(
            _vm._s(_vm.trust_name) +
              "\n        " +
              _vm._s(_vm.domicile_address.address) +
              " " +
              _vm._s(_vm.domicile_address.apt) +
              "\n        " +
              _vm._s(_vm.domicile_address.city) +
              ", " +
              _vm._s(_vm.domicile_address.state) +
              ", " +
              _vm._s(_vm.domicile_address.country) +
              "\n      "
          )
        ])
      ]),
      _vm._v(" "),
      _c("p", { staticClass: "text-h4 pa-3 text-center" }, [
        _vm._v("\n      DECLARATION OF TRUST\n    ")
      ]),
      _vm._v(" "),
      _c("p", { staticClass: "text-center text-pre" }, [
        _vm._v(
          "\n      A Private Contractual Agreement\n      Establishing An Artificial Entity Operating Under The Name:\n    "
        )
      ]),
      _vm._v(" "),
      _c("p", { staticClass: "text-center text-h3" }, [
        _c("span", { staticClass: "preview-field" }, [
          _vm._v(_vm._s(_vm.trust_name))
        ])
      ]),
      _vm._v(" "),
      _vm._m(0),
      _vm._v(" "),
      _vm._m(1),
      _vm._v(" "),
      _c("p", { staticClass: "text-center" }, [
        _vm._v("On This Date: "),
        _c("span", { staticClass: "preview-field" }, [
          _vm._v(
            _vm._s(_vm.moment(_vm.document_created_at).format("D MMMM YYYY"))
          )
        ])
      ]),
      _vm._v(" "),
      _vm._m(2),
      _vm._v(" "),
      _vm._m(3),
      _vm._v(" "),
      _c("p", [
        _vm._v(
          "Although multiple copies of this Trust Document may exist, the only true version is the one held by the FIRST TRUSTEE. Any other version is merely a copy thereof and should not be legally relied upon for validity. The Board of Trustees will not be held responsible for any errors or misunderstandings in the translation of this document into any foreign language. If anyone has any questions as to the interpretation or intention of this document, please refer to the FIRST TRUSTEE."
        )
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "break-after" }),
    _vm._v(" "),
    _c("div", [
      _c("p", { staticClass: "text-center" }, [_vm._v("DECLARATION OF TRUST")]),
      _vm._v(" "),
      _c("p", [
        _vm._v(
          "\n      This Declaration of Trust Agreement, Conveyance and Acceptance is created and entered into this\n      "
        ),
        _c("span", { staticClass: "preview-field" }, [
          _vm._v(
            _vm._s(
              _vm
                .moment(_vm.document_created_at)
                .format("Do [day of] MMMM [A.D.], YYYY")
            )
          )
        ]),
        _vm._v(", between "),
        _c("span", { staticClass: "preview-field" }, [
          _c("b", [_vm._v(_vm._s(_vm.settlor))])
        ]),
        _vm._v(", hereinafter called the SETTLOR and\n      "),
        _c("span", { staticClass: "preview-field" }, [
          _c("b", [_vm._v(_vm._s(_vm.first_trustee))])
        ]),
        _vm._v(
          ", hereinafter called the TRUSTEE, and also known as the FIRST TRUSTEE, for the sole benefit of one or more BENEFICIARIES, who shall be named in the Trust Indenture Schedule B & Meeting Minute No. 2.\n    "
        )
      ]),
      _vm._v(" "),
      _vm._m(4),
      _vm._v(" "),
      _c("p", { staticClass: "text-h6 text-center" }, [
        _c("span", { staticClass: "preview-field" }, [
          _vm._v(_vm._s(_vm.trust_name))
        ])
      ]),
      _vm._v(" "),
      _c("p", [
        _vm._v(
          "\n      The entity, being domiciled in the jurisdiction of the Republic of Florida, pursuant to Florida Statute 609.01, within the united States of America, shall be managed by the BOARD acting in a fiduciary capacity for the use and benefit of the BENEFICIARY.\n    "
        )
      ]),
      _vm._v(" "),
      _c("p", [
        _vm._v(
          "\n      This artificial entity hereby stands on its own, holds any and all of its assets in its own name and unlike a corporation, is not owned by another person or entity. It survives on its own, being fully accountable on its own accord. However, a natural living, breathing person must directly or indirectly sign on behalf of this entity in a fiduciary capacity as Trustee.\n    "
        )
      ]),
      _vm._v(" "),
      _c("p", [
        _vm._v(
          "\n      The moment the SETTLOR funds the Trust by contributing its first assets via the control of the Trustee, it breathes artificial life into the entity so that it may stand and act on its own, in its own name, solely responsible for its own actions as would a natural living, breathing person.\n    "
        )
      ]),
      _vm._v(" "),
      _c("p", [
        _vm._v(
          "\n      Nothing contained herein shall be construed as intent to evade or contravene any law, nor to delegate any special power belonging exclusively to company law or a corporation.\n    "
        )
      ]),
      _vm._v(" "),
      _c("p", [
        _vm._v(
          "\n      This Declaration of Trust shall describe only the highlights of the roles and responsibilities of the two parties herein and the terms and conditions set out for the maintenance of the Trust. Only this Declaration of Trust may be made available to third parties at the sole discretion of the Board. The full set of operating instructions shall be detailed in the Trust Indenture and is privy only to the two parties to this private contract or as otherwise deemed prudent by the Board.\n    "
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "grey lighten-2 pa-2 text-center" }, [
        _vm._v("\n      TERM & INTENT OF TRUST\n    ")
      ]),
      _vm._v(" "),
      _c("ul", [
        _c("li", [
          _vm._v("1. The Trust shall exist for a term of "),
          _c("span", { staticClass: "preview-field" }, [
            _vm._v(
              _vm._s(_vm.toWords(_vm.term_of_trust)) +
                " (" +
                _vm._s(_vm.term_of_trust) +
                ")"
            )
          ]),
          _vm._v(
            " years from the date of inception (effective date of this Agreement) and the BOARD may, at any time before the Trust's expiration, extend its term."
          )
        ]),
        _vm._v(" "),
        _c("li", [
          _vm._v(
            "2. The organizational purpose of the TRUST is to sustain and improve the TRUST proactively through any means or business so that the BENEFICIARY may possess the things of life sufficient to provide for growth, health, protection, education, refinement, pro-creation, recreation, welfare, expansion, preservation and continuation and not simply an arrangement to protect and conserve the property for the BENEFICIARY."
          )
        ])
      ])
    ]),
    _vm._v(" "),
    _c(
      "div",
      [
        _c("div", { staticClass: "grey lighten-2 ma-2 pa-2 text-center" }, [
          _vm._v("\n      SETTLOR'S PROVISIONS & RESPONSIBILITIES\n    ")
        ]),
        _vm._v(" "),
        _vm._m(5),
        _vm._v(" "),
        _c("div", { staticClass: "grey lighten-2 ma-2 pa-2 text-center" }, [
          _vm._v("\n      TRUSTEE'S PROVISIONS & RESPONSIBILITIES\n    ")
        ]),
        _vm._v(" "),
        _vm._m(6),
        _vm._v(" "),
        _c("div", { staticClass: "grey lighten-2 ma-2 pa-2 text-center" }, [
          _vm._v(
            "\n      ADDITIONAL TRUSTEES, MANAGERS, OFFICERS & CONTRACTORS\n    "
          )
        ]),
        _vm._v(" "),
        _vm._m(7),
        _vm._v(" "),
        _c("div", { staticClass: "grey lighten-2 ma-2 pa-2 text-center" }, [
          _vm._v("\n      DAILY BUSINESS ACTIVITIES\n    ")
        ]),
        _vm._v(" "),
        _vm._m(8),
        _vm._v(" "),
        _c("div", { staticClass: "grey lighten-2 ma-2 pa-2 text-center" }, [
          _vm._v(
            "\n      CERTIFICATES OF BENEFICIAL OWNERSHIP OF TRUST ASSETS\n    "
          )
        ]),
        _vm._v(" "),
        _vm._m(9),
        _vm._v(" "),
        _c("div", { staticClass: "grey lighten-2 ma-2 pa-2 text-center" }, [
          _vm._v(
            "\n      TRANSFER OF CERTIFICATES UPON DEATH OF BENEFICIARY\n    "
          )
        ]),
        _vm._v(" "),
        _vm._m(10),
        _vm._v(" "),
        _c("div", { staticClass: "grey lighten-2 ma-2 pa-2 text-center" }, [
          _vm._v("\n      DISTRIBUTION OF TRUST ASSETS\n    ")
        ]),
        _vm._v(" "),
        _vm._m(11),
        _vm._v(" "),
        _c("div", { staticClass: "grey lighten-2 ma-2 pa-2 text-center" }, [
          _vm._v(
            "\n      JURISDICTION, DOMICILE ADDRESS & MAILING ADDRESS\n    "
          )
        ]),
        _vm._v(" "),
        _vm._m(12),
        _vm._v(" "),
        _c("div", { staticClass: "grey lighten-2 ma-2 pa-2 text-center" }, [
          _vm._v("\n      TERMINATION OF TRUST\n    ")
        ]),
        _vm._v(" "),
        _vm._m(13),
        _vm._v(" "),
        _c("div", { staticClass: "grey lighten-2 ma-2 pa-2 text-center" }, [
          _vm._v("\n      PRIVACY STRICTLY ENFORCED\n    ")
        ]),
        _vm._v(" "),
        _vm._m(14),
        _vm._v(" "),
        _c("div", { staticClass: "grey lighten-2 ma-2 pa-2 text-center" }, [
          _vm._v("\n      MISCELLANEOUS\n    ")
        ]),
        _vm._v(" "),
        _vm._m(15),
        _vm._v(" "),
        _c("div", { staticClass: "grey lighten-2 ma-2 pa-2 text-center" }, [
          _vm._v("\n      ACCEPTANCE BY PARTIES\n    ")
        ]),
        _vm._v(" "),
        _vm._m(16),
        _vm._v(" "),
        _c("div", { staticClass: "break-after" }),
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
                    _vm._v("\n            NOTARY Public, Weber County "),
                    _c("br"),
                    _vm._v("\n            State of Utah\n          ")
                  ])
                ]),
                _vm._v(" "),
                _c("v-col", { staticClass: "sm-6" }, [
                  _c("div", [
                    _vm._v("\n            NOTARY Public, Weber County "),
                    _c("br"),
                    _vm._v("\n            State of Utah\n          ")
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
                    _vm._v("\n            Notary Stamp / Seal:\n          ")
                  ])
                ]),
                _vm._v(" "),
                _c("v-col", [
                  _c("div", [
                    _vm._v("\n            Notary Stamp / Seal:\n          ")
                  ])
                ])
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
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", { staticClass: "text-center text-pre" }, [
      _vm._v("\n      Is Hereby Constructed As A\n      "),
      _c("span", { staticClass: "text-h6" }, [
        _vm._v("PURE TRUST ORGANIZATION")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", { staticClass: "text-center text-pre" }, [
      _vm._v("\n      Otherwise Known As An\n      "),
      _c("span", { staticClass: "text-h6" }, [
        _vm._v("IRREVOCABLE DECLARATION OF TRUST")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", { staticClass: "text-center" }, [
      _c("b", [
        _vm._v("THIS DOCUMENT IS CREATED UNDER COMMON LAW RIGHT OF CONTRACT")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", [
      _vm._v(
        "\n      It is expressly declared that a contractual agreement is hereby established between two parties for the benefit of a third party. This type of entity, created under Common Law Right of Contract, is known by several names, including a\n      "
      ),
      _c("b", [_vm._v("Pure Trust Organization")]),
      _vm._v(", an "),
      _c("b", [_vm._v("Irrevocable Declaration of Trust")]),
      _vm._v(" and an\n      "),
      _c("b", [_vm._v("Unincorporated Business Trust Organization")]),
      _vm._v(
        ", hereafter referred to as TRUST. This is not to be misconstrued as a living trust, a partnership, a company, a corporation, a joint venture, a limited partnership, a limited liability company or any other type of statutory entity established by privilege with a federal, state, county or municipal authority.\n    "
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", [
      _vm._v(
        "The TRUST is authorized to exist and function through its Board of Trustees, hereafter BOARD, who are one or more legal persons holding fee simple title, not differentiating between legal and equitable, not as individuals, but collectively as the BOARD who shall operate the TRUST as a "
      ),
      _c("b", [_vm._v("PURE TRUST ORGANIZATION")]),
      _vm._v(" under the artificial entity name of:")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("ul", [
      _c("li", [
        _vm._v(
          "3. As consideration, the SETTLOR hereby irrevocably assigns and/or conveys as an absolute gift to the BOARD, in trust, certain properties and/or assets to be held in the name and ownership of the Trust and not by any TRUSTEE, the nature, identity and description of which are presently known to both the SETTLOR and the BOARD, and which shall be further identified and described in the Trust Indenture in which the BENEFICIARY(ies) shall NOT have a vested interest, until termination of the TRUST and final distribution of accumulated assets or any early distribution thereof by the BOARD at their sole discretion at any time during the term of the TRUST."
        )
      ]),
      _vm._v(" "),
      _c("li", [
        _vm._v(
          "4. The SETTLOR agrees and covenants that he shall have no further role to administer or make decisions as to the management of the TRUST after the effective date of the TRUST. He also affirms that he has no authority to change any portion of the Trust documents in any manner, nor shall he reserve or retain any dominion or control over the principal or income of the TRUST. Nothing in this paragraph shall be construed as conferring power upon the SETTLOR to reacquire Trust Corpus, or any part thereof by substituting other property of an equivalent value. The moment the SETTLOR signs this private contract, his duties and responsibilities related to the TRUST are completed."
        )
      ]),
      _vm._v(" "),
      _c("li", [
        _vm._v(
          "5. If the SETTLOR performs any role for the TRUST after his/her signing, it can only be in an arm's length relationship via an independent contractor relationship and have nothing to do with direct management functions of the TRUST. If the contracted functions involve any portion of TRUST assets, they must be free of sole discretion over ownership, control or disposition of those assets."
        )
      ]),
      _vm._v(" "),
      _c("li", [
        _vm._v(
          "6. The SETTLOR may, at any time in the future, assign and/or convey additional assets to the TRUST as additional consideration. Additionally, any outside party, including the BOARD or BENEFICIARY, may convey assets to the TRUST by gift, will, exchange, bill of sale, quit claim or by deed, with the consent of the BOARD, to be held for the benefit of the BENEFICIARY with the intent of eventually being distributed to the BENEFICIARY. The title to any assets accepted by the BOARD shall be held in a fiduciary capacity in the name of the TRUST and can only be claimed by the BENEFICIARY to have beneficial, not vested, ownership in those assets."
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
          "7. Because the FIRST TRUSTEE may be just one person on the BOARD, in such instance, the words FIRST TRUSTEE or TRUSTEE can also be referred to hereafter as the BOARD. The FIRST TRUSTEE alone is always considered the BOARD but if other titled officers are also on the BOARD, the BOARD does not always only mean the FIRST TRUSTEE."
        )
      ]),
      _vm._v(" "),
      _c("li", [
        _vm._v(
          "\n        8. The BOARD accepts said conveyed assets into the name and ownership of the Trust and not any TRUSTEE's name and the BOARD presents its own consideration for the Trust Agreement. The BOARD presents its expertise and knowledge in business and/or as a Trust Manager and shall administer the SETTLOR's wishes in establishing the artificial entity and maintaining it for the sole benefit of the BENEFICIARY who is listed in "
        ),
        _c("b", [_vm._v("Schedule B")]),
        _vm._v(" of the Trust Indenture & in "),
        _c("b", [_vm._v("Meeting Minute Number 2")]),
        _vm._v(".\n      ")
      ]),
      _vm._v(" "),
      _c("li", [
        _vm._v(
          "9. The BOARD is authorized to deal with the SETTLOR \"at arm's length,” to purchase property or to sell property, but always at fair market value and for adequate and full consideration."
        )
      ]),
      _vm._v(" "),
      _c("li", [
        _vm._v(
          "10. The BOARD shall, as it deems proper and necessary, provide for operating funds through any type of borrowing, hypothecation, monetization either unsecured or directly or indirectly secured, which shall constitute the operating funds of the TRUST. The BOARD may authorize liquidation of assets for the purpose of adding to said operating funds."
        )
      ]),
      _vm._v(" "),
      _c("li", [
        _vm._v(
          "11. The BOARD shall have all the powers necessary to operate, manage and control the TRUST for the benefit of the BENEFICIARY and shall take any action which it deems necessary and proper to carry out such purposes, provided however, that the BOARD shall not possess any power or take any action contrary to law or inconsistent with the provisions of the Declaration of Trust."
        )
      ]),
      _vm._v(" "),
      _c("li", [
        _vm._v(
          "12. The BOARD shall receive reasonable compensation for their services performed. Any BOARD member may hold two or more offices simultaneously within the TRUST and be deserving of such reasonable compensation for all services rendered at the discretion of the BOARD. However, all BOARD members, Trust Manager(s), other titled officers and executives shall have the right to waive any compensation for their services."
        )
      ]),
      _vm._v(" "),
      _c("li", [
        _vm._v(
          "13. No member of the BOARD shall possess or exercise a power of administration in a nonfiduciary capacity, nor a power exercisable solely by himself to vest the corpus or the income therefrom in himself, or any other power, the possession or exercise of which would cause the income of the Trust to be taxed to any member of the BOARD or to the SETTLOR"
        )
      ]),
      _vm._v(" "),
      _c("li", [
        _vm._v(
          "14. The BOARD shall, in their fiduciary capacity for the TRUST and not as individuals, assume or incur only such liability as shall attach to the Trust assets. This liability shall not in any manner jeopardize their individual or personal holdings and for any losses they should suffer for any reason through rendering services as the BOARD, they shall be reimbursed from the TRUST assets to the same extent as would non-interested persons, except for any loss sustained by reason of breach of their fiduciary duty."
        )
      ]),
      _vm._v(" "),
      _c("li", [
        _vm._v(
          "15. The BOARD may assign additional members to this TRUST as they deem necessary and prudent and they may increase or decrease the number of BOARD members as appropriate to the affairs of the TRUST. Said additional members may be necessary for the administration of various tasks associated with this TRUST and not necessarily for additional management decisions unless noted to the contrary in a separate Meeting Minute at the time said additional members are assigned. The appointment term for an additional member is controlled to one (1) year increments and can be withdrawn at any time by the FIRST TRUSTEE in a future Meeting Minute. An annual appointment renewal may only be authorized by the FIRST TRUSTEE within thirty (30) days or less prior to expiration of said member's appointment."
        )
      ]),
      _vm._v(" "),
      _c("li", [
        _vm._v(
          "16. Any additional TRUSTEES shall be referred to as SECONDARY TRUSTEES. Unless further clarified at the time of their appointment, the FIRST TRUSTEE shall, from time-to-time, designate specific tasks, roles, duties and/or authorities for which the SECONDARY TRUSTEE shall be consulted or kept apprised"
        )
      ]),
      _vm._v(" "),
      _c("li", [
        _vm._v(
          "17. All decisions for the management of this TRUST need not be unanimous if more than one TRUSTEE is on the BOARD unless noted to the contrary in this TRUST INDENTURE or in a subsequent Meeting Minute. The FIRST TRUSTEE's decision shall always take priority over any other title if there is dissent. Only a FIRST TRUSTEE can make a decision with their sole signature unless that specific authority is additionally passed down to another title / person on the BOARD in writing (Meeting Minute, Trust Resolution or otherwise)."
        )
      ]),
      _vm._v(" "),
      _c("li", [
        _vm._v(
          "18. Even if there are other currently active Board members, the First Trustee, or equivalent, shall always retain the sole authority, at his/her sole discretion, to amend this Declaration of Trust and/or its corresponding Trust Indenture in any reasonable manner in order to carry out the intended functions of the Board. Said functions can include, but are not limited to, clarifying or rectifying any situation or circumstance of the past, present or future that has not already been addressed therein."
        )
      ]),
      _vm._v(" "),
      _c("li", [
        _vm._v(
          "19. Any BOARD member shall abstain from voting if benefiting personally or in any other manner from the transaction."
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
          "20. The BOARD may employ, hire or contract with, and pay from the TRUST assets, reasonable compensation to any officer, assistant, aide, contractor, subcontractor, agent, clerk, manager, TRUSTEE, attorney, barrister, solicitor, accountant, broker, investment, tax or other advisor as the BOARD deems necessary and prudent for the expedient and proper function of the TRUST."
        )
      ]),
      _vm._v(" "),
      _c("li", [
        _vm._v(
          "21. The BOARD shall, at its discretion, appoint one or more of its TRUSTEES, or qualified non Trustees, to the position of Trust Manager(s). Said appointment will also require an appropriate Independent Contractor Agreement to be on file for said title to become effective. Unless otherwise noted, the Trust Manager(s) shall have full authority to manage the TRUST including, but not limited to, the routine day-to-day operations, subject, at all times, to the scrutiny of the BOARD. If no Trust Manager is appointed, the FIRST TRUSTEE shall retain all management duties."
        )
      ]),
      _vm._v(" "),
      _c("li", [
        _vm._v(
          "22. No TRUSTEE, Trust Manager(s), or other titled officer, currently employed, hired or under contract with the TRUST, shall ever be held liable for any action or default of any TRUSTEE, Trust Manager, other titled officer, or any other person in connection with the administration and management of this TRUST unless caused by the individual's own gross negligence or by commission of a willful act of breach of trust."
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
          "23. The BOARD shall open, maintain or close any bank accounts as necessary to receive, hold or transfer any funds for the use and benefit of the BENEFICIARY."
        )
      ]),
      _vm._v(" "),
      _c("li", [
        _vm._v(
          "24. The BOARD may purchase, sell, invest, reinvest, lease, rent, mortgage, insure, repair or improve, at the BOARD's sole discretion any personal, intangible or real property for the use and benefit of the BENEFICIARY."
        )
      ]),
      _vm._v(" "),
      _c("li", [
        _vm._v(
          "25. The BOARD may sell, liquidate or continue to operate, at the BOARD's sole discretion, any corporation, partnership, limited liability company, any partial interest therein or other business interest, which may be received, acquired, purchased, traded or initiated by the TRUST."
        )
      ]),
      _vm._v(" "),
      _c("li", [
        _vm._v(
          "26. The BOARD may enforce any and all mortgages, pledges and deeds of Trust held by the TRUST and may borrow funds for any TRUST purpose, encumber, lien, hypothecate, pledge or the equivalent, any TRUST assets at the sole discretion of the BOARD."
        )
      ]),
      _vm._v(" "),
      _c("li", [
        _vm._v(
          "27. The BOARD may also designate third parties to hold funds or title to TRUST property in another name for specific purposes necessary to the use and operation of the TRUST."
        )
      ]),
      _vm._v(" "),
      _c("li", [
        _vm._v(
          "28. The BOARD shall initiate or defend, at the BOARD's sole discretion, any litigation affecting the Trust. The BOARD may also submit to arbitration, compromise, release or otherwise adjust, with or without compensation, any and all claims affecting the TRUST."
        )
      ]),
      _vm._v(" "),
      _c("li", [
        _vm._v(
          "29. The BOARD shall pay all property taxes, assessments, charges, debts, bills and obligations arising out of the maintenance, operation and administration of the TRUST."
        )
      ]),
      _vm._v(" "),
      _c("li", [
        _vm._v(
          "30. The BOARD is further authorized to pay expenses of TRUSTEES, other titled officers, executives, managers and like persons, incurred while they are on TRUST business. The BOARD is further authorized to create expense accounts for each TRUSTEE, other titled officers, executives, managers and like persons, at the discretion of the BOARD, by appropriate Meeting Minute and authorized and Notarized Board Resolution(s): this expense account can cover, any and all, personal expenses to include but not limited to; mortgages, utilities, food, travel, entertainment, etc."
        )
      ]),
      _vm._v(" "),
      _c("li", [
        _vm._v(
          "31. Notice shall be given, when appropriate, to all persons or legal entities doing business with, extending credit to, contracting with, or having a claim against the TRUST, that the BOARD is not personally liable when dealing with TRUST property or matters, and such persons must look only to the assets of the TRUST for payment of, or for settlement of any debt, tort, damage, judgment or decree, or for any indebtedness which shall become payable thereunder."
        )
      ]),
      _vm._v(" "),
      _c("li", [
        _vm._v(
          "32. Anyone lending or paying money to the BOARD must be put on notice that they shall not be obliged to see the application of funds thereof."
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
          "33. Each BENEFICIARY shall be assigned a number of Units of Beneficial Ownership (hereafter UNITS) between one (1) and one hundred (100), of which the sum total of all UNITS shall equal one hundred (100). Said number shall similarly represent the percentage of all TRUST assets to which said BENEFICIARY may claim beneficial ownership. Each UNIT shall represent one percent (1%) of all TRUST assets. There shall never be more or less than 100 UNITS available to the BENEFICIARY(ies)."
        )
      ]),
      _vm._v(" "),
      _c("li", [
        _vm._v(
          "34. A Certificate of Beneficial Ownership (hereafter CERTIFICATE) shall be issued to each BENEFICIARY stating the number of UNITS said BENEFICIARY is entitled to claim. If said BENEFICIARY is a minor or an adult of questionable mental stability, said CERTIFICATE may be held by the BOARD or entrusted with the BENEFICIARY's parent or legal guardian as the situation may apply, at the discretion of the BOARD."
        )
      ]),
      _vm._v(" "),
      _c("li", [
        _vm._v(
          "35. The dispersion of a CERTIFICATE to a BENEFICIARY or their representative shall be recorded in the official record of the TRUST."
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
          "36. A Replacement BENEFICIARY shall retain only those rights previously held by a predecessor BENEFICIARY. "
        )
      ]),
      _vm._v(" "),
      _c("li", [
        _vm._v(
          "37. The holding of a CERTIFICATE does not entitle the BENEFICIARY or a HOLDER to any management power or rights. Nor shall the death of a BENEFICIARY, or transfer by a BENEFICIARY or a HOLDER, entitle his heirs, legal representatives, or transferees to demand any division of the property of the TRUST, any special accounting thereof, or entitlement to any special rights whatsoever."
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
          "38. The proportionate share of distributed assets to which each BENEFICIARY has a beneficial interest is not discretionary, but is determined solely by the number of UNITS stated on the CERTIFICATE held on their behalf."
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
          "39. This Agreement and TRUST created hereby shall be administered, managed, governed, interpreted and regulated in all respects according to applicable Common Law in the Republic of Florida under the Constitution of the united States of America."
        )
      ]),
      _vm._v(" "),
      _c("li", [
        _vm._v(
          "40. The TRUST shall have its original domicile address located in the city of Orlando, Republic of Florida, in the united States of America."
        )
      ]),
      _vm._v(" "),
      _c("li", [
        _vm._v(
          "41. The domicile, and thereby the controlling interpretational laws under which the TRUST shall be administered, managed, governed, interpreted and regulated, may be changed to any other state or Nation as shall be deemed prudent, wise, necessary or appropriate at any time by the BOARD."
        )
      ]),
      _vm._v(" "),
      _c("li", [
        _vm._v(
          "42. The domicile address and the mailing address do not have to be the same and either may be changed by appropriate Meeting Minute by the BOARD. Changing the mailing address does not automatically change the domicile address unless specifically stated in the appropriate Meeting Minute."
        )
      ]),
      _vm._v(" "),
      _c("li", [
        _vm._v(
          "43. The TRUST shall enjoy the benefits of the Uniform Commercial Code (only when and if applicable and/or allowable to remain under the jurisdiction of Common Law) per, but not limited to, the following citations: Section 28: 1-105, TERRITORIAL APPLICATION OF THIS SUBTITLE; PARTIES' POWER TO CHOOSE APPLICABLE LAW, and section 28:1-207, PERFORMANCE OR ACCEPTANCE UNDER RESERVATION OF RIGHTS."
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
          "44. Upon the eventual expiration of the term of the TRUST, the TRUST shall cease to exist and all remaining assets shall be immediately distributed to the BENEFICIARY(ies). In said event, the BOARD shall have the continuing authority to act to wind up the affairs of the TRUST, as is necessary, past the date of expiration. In the event that the Declaration of Trust was recorded, a Notice of Termination shall also be recorded and published as necessary."
        )
      ]),
      _vm._v(" "),
      _c("li", [
        _vm._v(
          "45. The BOARD shall pay all remaining obligations of the TRUST and distribute the remaining assets to the BENEFICIARY(ies) in direct proportion to the number of UNITS held on their CERTIFICATE. Upon receiving receipts for the distribution of the remaining assets to the BENEFICIARY(ies), the BOARD shall be automatically discharged hereunder, provided that their administration and distributions have been made in accordance with the terms and provisions of the TRUST. Otherwise, a court of competent jurisdiction may be called upon to review and correct any tort or error."
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
          "\n        46. It is imperative that no representative of the TRUST (TRUSTEE, Trust Manager, or other titled officer, etc.) disclose to any member of the general public, private business or counsel, any information pertaining to the BENEFICIARY. It is against the intention and wishes of the SETTLOR for anyone to disclose the identities of any and all BENEFICIARIES of the TRUST. Therefore, no non-officer shall be permitted to view any Meeting Minutes of the TRUST or the Declaration of Trust. TRUST Resolutions, however, may be exposed to their appropriate recipients per the discretion of the BOARD.\n      "
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
          "47. Any person shall be entitled to rely upon a COPY of the original DECLARATION OF TRUST and any instruments duly executed in accordance with the provisions thereof, to the same extent as the original document if such copy is approved by the BOARD for display."
        )
      ]),
      _vm._v(" "),
      _c("li", [
        _vm._v(
          "48. An approved Meeting Minute of the BOARD and appropriate distributed Resolution authorizing what it is they determine to do or have done shall be sufficient evidence that such an act is within their power to those doing business with the Trust."
        )
      ]),
      _vm._v(" "),
      _c("li", [
        _vm._v(
          "49. The BOARD shall have the power to amend the TRUST (via an appropriate Meeting Minute) to better carry out the purposes and intent thereof, or in order to conform to or comply with any law, rule, regulation or order of any government body, provided, however, that any such amendment may not be inconsistent with the basic TRUST purposes and intent, and not in derogation of the fiduciary obligations to the BENEFICIARY(ies). No amendment shall be revocable by the SETTLOR or by any other person or entity except for the BOARD."
        )
      ]),
      _vm._v(" "),
      _c("li", [
        _vm._v("50. This Declaration of Trust consists of "),
        _c("span", { staticClass: "preview-field" }, [_vm._v("ten (10)")]),
        _vm._v(" pages.")
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
          "51. The TRUSTEE, through co-execution of this agreement, signifies confirmation and acceptance of his fiduciary position as TRUSTEE, hereby establishing the BOARD and hereby accepting the terms, conditions and provisions of this Declaration of Trust and the Resolutions which are recorded in the Minutes of its meetings from time to time, which shall serve as the governing instruments of the BOARD. The signing and acknowledgement of appropriate TRUST Meeting Minutes by subsequently appointed SECONDARY TRUSTEES, if applicable, shall constitute their acceptance of this Declaration of Trust and related assets in the same manner as the BOARD and the assets and emoluments thereof shall immediately vest in the BOARD as fiduciary for the TRUST without further act or conveyance except as may be required by local law."
        )
      ]),
      _vm._v(" "),
      _c("li", [
        _vm._v(
          "52. The SETTLOR, through co-execution of this Declaration of Trust, signifies confirmation and acceptance of his settlement position to the TRUST by providing the initial asset to fund the TRUST and his Statement of Wishes Letter to the BOARD."
        )
      ]),
      _vm._v(" "),
      _c("div", { staticStyle: { "page-break-after": "always" } }),
      _vm._v(" "),
      _c("li", [
        _vm._v(
          "53. IN WITNESS WHEREOF, the parties hereto have hereunder set their hands and seals in acknowledgement and acceptance of, assent to and covenant to abide by all conditions herein imposed and expressed on or after the day first written above."
        )
      ])
    ])
  }
]
render._withStripped = true



/***/ })

}]);