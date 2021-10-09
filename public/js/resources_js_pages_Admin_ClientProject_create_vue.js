"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_Admin_ClientProject_create_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Admin/ClientProject/create.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Admin/ClientProject/create.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../helper */ "./resources/js/helper.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    value: {
      type: Boolean
    },
    client: {
      type: Object,
      required: true
    }
  },
  data: function data() {
    return {
      form: this.$inertia.form({
        client: this.client,
        name: '',
        type: ''
      })
    };
  },
  computed: {
    projectTypes: function projectTypes() {
      return [{
        text: 'Trust',
        value: 'Trust'
      }, {
        text: 'Declaration of Status',
        value: 'DeclarationOfStatus'
      }];
    },
    show: {
      get: function get() {
        return this.value;
      },
      set: function set(value) {
        this.$emit('input', value);
      }
    },
    title: function title() {
      return this.form.title;
    }
  },
  methods: {
    submit: function submit() {
      var _this = this;

      this.form.post(route('admin.client.project.store', {
        client: this.client
      }), {
        onSuccess: function onSuccess(data) {
          _this.form.reset();

          _this.show = false;
        },
        onFinish: function onFinish() {}
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/helper.js":
/*!********************************!*\
  !*** ./resources/js/helper.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "toTitleCase": () => (/* binding */ toTitleCase),
/* harmony export */   "toKebabCase": () => (/* binding */ toKebabCase),
/* harmony export */   "score": () => (/* binding */ score),
/* harmony export */   "toPascalCase": () => (/* binding */ toPascalCase),
/* harmony export */   "pascelToTitleCase": () => (/* binding */ pascelToTitleCase),
/* harmony export */   "numberToEnglish": () => (/* binding */ numberToEnglish)
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
var numberToEnglish = function numberToEnglish(n) {
  var customJoinCharacter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ' ';
  var string = n.toString();
  var units;
  var tens;
  var scales;
  var start;
  var end;
  var chunks;
  var chunksLen;
  var chunk;
  var ints;
  var i;
  var word;
  var words;
  var and = customJoinCharacter || 'and';
  /* Is number zero? */

  if (parseInt(string) === 0) {
    return 'zero';
  }
  /* Array of units as words */


  units = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  /* Array of tens as words */

  tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  /* Array of scales as words */

  scales = ['', 'thousand', 'million', 'billion', 'trillion', 'quadrillion', 'quintillion', 'sextillion', 'septillion', 'octillion', 'nonillion', 'decillion', 'undecillion', 'duodecillion', 'tredecillion', 'quatttuor-decillion', 'quindecillion', 'sexdecillion', 'septen-decillion', 'octodecillion', 'novemdecillion', 'vigintillion', 'centillion'];
  /* Split user arguemnt into 3 digit chunks from right to left */

  start = string.length;
  chunks = [];

  while (start > 0) {
    end = start;
    chunks.push(string.slice(start = Math.max(0, start - 3), end));
  }
  /* Check if function has enough scale words to be able to stringify the user argument */


  chunksLen = chunks.length;

  if (chunksLen > scales.length) {
    return '';
  }
  /* Stringify each integer in each chunk */


  words = [];

  for (i = 0; i < chunksLen; i++) {
    chunk = parseInt(chunks[i]);

    if (chunk) {
      /* Split chunk into array of individual integers */
      ints = chunks[i].split('').reverse().map(parseFloat);
      /* If tens integer is 1, i.e. 10, then add 10 to units integer */

      if (ints[1] === 1) {
        ints[0] += 10;
      }
      /* Add scale word if chunk is not zero and array item exists */


      if (word = scales[i]) {
        words.push(word);
      }
      /* Add unit word if array item exists */


      if (word = units[ints[0]]) {
        words.push(word);
      }
      /* Add tens word if array item exists */


      if (word = tens[ints[1]]) {
        words.push(word);
      }
      /* Add 'and' string after units or tens integer if: */


      if (ints[0] || ints[1]) {
        /* Chunk has a hundreds integer or chunk is the first of multiple chunks */
        if (ints[2] || !i && chunksLen) {
          words.push(and);
        }
      }
      /* Add hundreds word if array item exists */


      if (word = units[ints[2]]) {
        words.push("".concat(word, " hundred"));
      }
    }
  }

  return words.reverse().join(' ');
};

/***/ }),

/***/ "./resources/js/pages/Admin/ClientProject/create.vue":
/*!***********************************************************!*\
  !*** ./resources/js/pages/Admin/ClientProject/create.vue ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _create_vue_vue_type_template_id_8b18c3f4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create.vue?vue&type=template&id=8b18c3f4& */ "./resources/js/pages/Admin/ClientProject/create.vue?vue&type=template&id=8b18c3f4&");
/* harmony import */ var _create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create.vue?vue&type=script&lang=js& */ "./resources/js/pages/Admin/ClientProject/create.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _create_vue_vue_type_template_id_8b18c3f4___WEBPACK_IMPORTED_MODULE_0__.render,
  _create_vue_vue_type_template_id_8b18c3f4___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Admin/ClientProject/create.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Admin/ClientProject/create.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/pages/Admin/ClientProject/create.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./create.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Admin/ClientProject/create.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/Admin/ClientProject/create.vue?vue&type=template&id=8b18c3f4&":
/*!******************************************************************************************!*\
  !*** ./resources/js/pages/Admin/ClientProject/create.vue?vue&type=template&id=8b18c3f4& ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_template_id_8b18c3f4___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_template_id_8b18c3f4___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_template_id_8b18c3f4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./create.vue?vue&type=template&id=8b18c3f4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Admin/ClientProject/create.vue?vue&type=template&id=8b18c3f4&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Admin/ClientProject/create.vue?vue&type=template&id=8b18c3f4&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Admin/ClientProject/create.vue?vue&type=template&id=8b18c3f4& ***!
  \*********************************************************************************************************************************************************************************************************************************/
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
    "v-dialog",
    {
      staticClass: "pa-3",
      attrs: { "max-width": "500px" },
      model: {
        value: _vm.show,
        callback: function($$v) {
          _vm.show = $$v
        },
        expression: "show"
      }
    },
    [
      _c(
        "v-card",
        [
          _c("v-card-title", [_vm._v("Add Project")]),
          _vm._v(" "),
          _c(
            "form",
            {
              on: {
                submit: function($event) {
                  $event.preventDefault()
                  return _vm.submit.apply(null, arguments)
                }
              }
            },
            [
              _c(
                "v-card-text",
                [
                  _c("v-text-field", {
                    attrs: {
                      "error-messages": _vm.form.errors.name,
                      label: "Name",
                      placeholder: "ABC Trust",
                      required: ""
                    },
                    model: {
                      value: _vm.form.name,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "name", $$v)
                      },
                      expression: "form.name"
                    }
                  }),
                  _vm._v(" "),
                  _c("v-select", {
                    attrs: {
                      "error-messages": _vm.form.errors.type,
                      label: "Project Type",
                      required: "",
                      items: _vm.projectTypes
                    },
                    model: {
                      value: _vm.form.type,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "type", $$v)
                      },
                      expression: "form.type"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-card-actions",
                [
                  _c(
                    "v-btn",
                    {
                      attrs: { color: "primary", text: "" },
                      on: {
                        click: function($event) {
                          $event.stopPropagation()
                          _vm.show = false
                        }
                      }
                    },
                    [_vm._v("Close")]
                  ),
                  _vm._v(" "),
                  _c("v-spacer"),
                  _vm._v(" "),
                  _c("v-btn", { attrs: { type: "submit", color: "primary" } }, [
                    _vm._v("Create")
                  ])
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
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);