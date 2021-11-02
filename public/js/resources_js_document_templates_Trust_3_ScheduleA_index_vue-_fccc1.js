(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_document_templates_Trust_3_ScheduleA_index_vue-_fccc1"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/document_templates/Trust/3_ScheduleA/index.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/document_templates/Trust/3_ScheduleA/index.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************/
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
    settlor_gift_type: function settlor_gift_type() {
      var _this$project5, _this$project5$projec, _this$project5$projec2;

      return (_this$project5 = this.project) === null || _this$project5 === void 0 ? void 0 : (_this$project5$projec = _this$project5.project_data) === null || _this$project5$projec === void 0 ? void 0 : (_this$project5$projec2 = _this$project5$projec.trust) === null || _this$project5$projec2 === void 0 ? void 0 : _this$project5$projec2.settlor_gift_type;
    },
    settlor_gift: function settlor_gift() {
      var _this$project6, _this$project6$projec, _this$project6$projec2;

      return (_this$project6 = this.project) === null || _this$project6 === void 0 ? void 0 : (_this$project6$projec = _this$project6.project_data) === null || _this$project6$projec === void 0 ? void 0 : (_this$project6$projec2 = _this$project6$projec.trust) === null || _this$project6$projec2 === void 0 ? void 0 : _this$project6$projec2.settlor_gift;
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

/***/ "./resources/js/document_templates/Trust/3_ScheduleA/index.vue":
/*!*********************************************************************!*\
  !*** ./resources/js/document_templates/Trust/3_ScheduleA/index.vue ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_vue_vue_type_template_id_2f4228ce_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=2f4228ce&scoped=true& */ "./resources/js/document_templates/Trust/3_ScheduleA/index.vue?vue&type=template&id=2f4228ce&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/document_templates/Trust/3_ScheduleA/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_2f4228ce_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _index_vue_vue_type_template_id_2f4228ce_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "2f4228ce",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/document_templates/Trust/3_ScheduleA/index.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/document_templates/Trust/3_ScheduleA/index.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/document_templates/Trust/3_ScheduleA/index.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/document_templates/Trust/3_ScheduleA/index.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/document_templates/Trust/3_ScheduleA/index.vue?vue&type=template&id=2f4228ce&scoped=true&":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/document_templates/Trust/3_ScheduleA/index.vue?vue&type=template&id=2f4228ce&scoped=true& ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2f4228ce_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2f4228ce_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2f4228ce_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=template&id=2f4228ce&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/document_templates/Trust/3_ScheduleA/index.vue?vue&type=template&id=2f4228ce&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/document_templates/Trust/3_ScheduleA/index.vue?vue&type=template&id=2f4228ce&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/document_templates/Trust/3_ScheduleA/index.vue?vue&type=template&id=2f4228ce&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************/
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
      _c("h1", [_vm._v("SCHEDULE A")]),
      _vm._v(" "),
      _c("h2", { staticClass: "mb-10" }, [_vm._v("SETTLEMENT OF ASSETS")]),
      _vm._v(" "),
      _c("p", [
        _vm._v(
          "Entered into this date by and between the SETTLOR and the FIRST TRUSTEE, of"
        )
      ]),
      _vm._v(" "),
      _c("h4", { staticClass: " text-center mb-5 preview-field" }, [
        _vm._v("\n    " + _vm._s(_vm.trust_name) + "\n  ")
      ]),
      _vm._v(" "),
      _c("p", [
        _vm._v(
          "in harmony with the Declaration of Trust, the SETTLOR hereby conveys to the BOARD the following described property as an absolute gift and the FIRST TRUSTEE hereby accepts said gift on behalf of the BOARD."
        )
      ]),
      _vm._v(" "),
      _c("p", [
        _vm._v(
          "This list of property is comprehensive and is the written description of those certain properties which were agreed upon and known to both the SETTLOR and the FIRST TRUSTEE at the time of the execution of the Declaration of Trust and includes all properties transferred and accepted, to wit:"
        )
      ]),
      _vm._v(" "),
      _c("p", [
        _c("b", { staticClass: "preview-field" }, [
          _vm._v(_vm._s(_vm.settlor_gift_type))
        ]),
        _vm._v(": "),
        _c("span", { staticClass: "preview-field" }, [
          _vm._v(
            _vm._s(_vm.toTitleCase(_vm.toWords(_vm.settlor_gift))) +
              " Dollars $(" +
              _vm._s(_vm.settlor_gift) +
              ")"
          )
        ])
      ]),
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
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);