"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_document_templates_Trust_Documents_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/DocumentViewer.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/DocumentViewer.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_document_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-document-editor */ "./node_modules/vue-document-editor/src/DocumentEditor/DocumentEditor.vue");
//
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
  name: 'DocumentViewer',
  props: ['content'],
  data: function data() {
    return {
      zoom: 1.0,
      zoom_min: 0.10,
      zoom_max: 2.0,
      display: 'grid',
      // ["grid", "vertical", "horizontal"]
      mounted: false,
      // will be true after this component is mounted
      undo_count: -1,
      // contains the number of times user can undo (= current position in content_history)
      content_history: [] // contains the content states for undo/redo operations

    };
  },
  methods: {
    onUpdateProject: function onUpdateProject() {
      console.log('onUpdateProject');
      this.$el.querySelector('.page').style.height = 'auto';
      this.$el.querySelector('.page').style.top = '0';
    },
    updatePageHeight: function updatePageHeight() {
      var _this = this;

      this.$nextTick(function (e) {
        _this.onUpdateProject();
      });
    }
  },
  watch: {
    content: {
      immediate: true,
      handler: function handler(newContent) {
        var _this2 = this;

        this.$nextTick(function (e) {
          _this2.onUpdateProject();
        });
      }
    }
  },
  created: function created() {
    var _this3 = this;

    this.updatePageHeight();
    console.log('created'); // Initialize gesture flags

    var startZoomGesture = false;
    var startDistTouch = false;
    var startZoomTouch = false; // Manage ctrl+scroll zoom (or trackpad pinch)

    window.addEventListener('wheel', function (e) {
      if (e.ctrlKey) {
        e.preventDefault();
        _this3.zoom = Math.min(Math.max(_this3.zoom - e.deltaY * 0.01, _this3.zoom_min), _this3.zoom_max);
      }
    }, {
      passive: false
    }); // Manage trackpad pinch on Safari

    window.addEventListener('gesturestart', function (e) {
      e.preventDefault();
      startZoomGesture = _this3.zoom;
    });
    window.addEventListener('gesturechange', function (e) {
      e.preventDefault();

      if (!startZoomTouch) {
        _this3.zoom = Math.min(Math.max(startZoomGesture * e.scale, _this3.zoom_min), _this3.zoom_max);
      }
    });
    window.addEventListener('gestureend', function () {
      startZoomGesture = false;
    }); // Manage pinch to zoom for touch devices

    window.addEventListener('touchstart', function (e) {
      if (e.touches.length === 2) {
        e.preventDefault();
        startDistTouch = Math.hypot(e.touches[0].pageX - e.touches[1].pageX, e.touches[0].pageY - e.touches[1].pageY);
        startZoomTouch = _this3.zoom;
      }
    }, {
      passive: false
    });
    window.addEventListener('touchmove', function (e) {
      if (startDistTouch && startZoomTouch) {
        e.preventDefault();
        var zoom = startZoomTouch * Math.hypot(e.touches[0].pageX - e.touches[1].pageX, e.touches[0].pageY - e.touches[1].pageY) / startDistTouch;
        _this3.zoom = Math.min(Math.max(zoom, _this3.zoom_min), _this3.zoom_max);
      }
    }, {
      passive: false
    });
    window.addEventListener('touchend', function () {
      startDistTouch = false;
      startZoomTouch = false;
    }, {
      passive: false
    });
  },
  mounted: function mounted() {
    this.mounted = true;
  },
  components: {
    VueDocumentEditor: vue_document_editor__WEBPACK_IMPORTED_MODULE_0__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/document_templates/Trust/Documents.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/document_templates/Trust/Documents.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_DocumentViewer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/DocumentViewer */ "./resources/js/components/DocumentViewer.vue");
//
//
//
//
//
//
//
//
//
//
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
  name: 'Documents',
  components: {
    DocumentViewer: _components_DocumentViewer__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  props: {
    content: {}
  }
});

/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-document-editor/src/DocumentEditor/DocumentEditor.vue?vue&type=style&index=1&id=448921d6&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-document-editor/src/DocumentEditor/DocumentEditor.vue?vue&type=style&index=1&id=448921d6&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "[data-v-448921d6].editor {\n  display: block;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  cursor: default;\n}\n[data-v-448921d6].editor ::-webkit-scrollbar {\n  width: 16px;\n  height: 16px;\n}\n[data-v-448921d6].editor ::-webkit-scrollbar-track,[data-v-448921d6].editor ::-webkit-scrollbar-corner {\n  display: none;\n}\n[data-v-448921d6].editor ::-webkit-scrollbar-thumb {\n  background-color: rgba(0, 0, 0, 0.5);\n  border: 5px solid transparent;\n  border-radius: 16px;\n  background-clip: content-box;\n}\n[data-v-448921d6].editor ::-webkit-scrollbar-thumb:hover {\n  background-color: rgba(0, 0, 0, 0.8);\n}\n[data-v-448921d6].editor.hide_children > * {\n  display: none;\n}\n[data-v-448921d6].editor > .content {\n  position: relative;\n  outline: none;\n  margin: 0;\n  padding: 0;\n  min-width: 100%;\n  pointer-events: none;\n}\n[data-v-448921d6].editor > .content > .page {\n  position: absolute;\n  box-sizing: border-box;\n  left: 50%;\n  transform-origin: center top;\n  background: var(--page-background, white);\n  box-shadow: var(--page-box-shadow, 0 1px 3px 1px rgba(60, 64, 67, 0.15));\n  border: var(--page-border);\n  border-radius: var(--page-border-radius);\n  transition: left .3s, top .3s;\n  overflow: hidden;\n  pointer-events: all;\n}\n[data-v-448921d6].editor > .content[contenteditable=true],[data-v-448921d6].editor > .content *[contenteditable=true] {\n  cursor: text;\n}\n[data-v-448921d6].editor > .content *[contenteditable=false] {\n  cursor: default;\n}\n[data-v-448921d6].editor > .overlays {\n  position: relative;\n  margin: 0;\n  padding: 0;\n  min-width: 100%;\n  pointer-events: none;\n}\n[data-v-448921d6].editor > .overlays > .overlay {\n  position: absolute;\n  box-sizing: border-box;\n  left: 50%;\n  transform-origin: center top;\n  transition: left .3s, top .3s;\n  overflow: hidden;\n  z-index: 1;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-document-editor/src/DocumentEditor/DocumentEditor.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-document-editor/src/DocumentEditor/DocumentEditor.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\nbody {\n  /* Enable printing of background colors */\n  -webkit-print-color-adjust: exact;\n  color-adjust: exact;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-document-editor/src/DocumentEditor/DocumentEditor.vue?vue&type=style&index=1&id=448921d6&lang=scss&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-document-editor/src/DocumentEditor/DocumentEditor.vue?vue&type=style&index=1&id=448921d6&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_vue_loader_lib_index_js_vue_loader_options_DocumentEditor_vue_vue_type_style_index_1_id_448921d6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!../../../vue-loader/lib/loaders/stylePostLoader.js!../../../postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!../../../sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!../../../vue-loader/lib/index.js??vue-loader-options!./DocumentEditor.vue?vue&type=style&index=1&id=448921d6&lang=scss&scoped=true& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-document-editor/src/DocumentEditor/DocumentEditor.vue?vue&type=style&index=1&id=448921d6&lang=scss&scoped=true&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_vue_loader_lib_index_js_vue_loader_options_DocumentEditor_vue_vue_type_style_index_1_id_448921d6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_vue_loader_lib_index_js_vue_loader_options_DocumentEditor_vue_vue_type_style_index_1_id_448921d6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-document-editor/src/DocumentEditor/DocumentEditor.vue?vue&type=style&index=0&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-document-editor/src/DocumentEditor/DocumentEditor.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_vue_loader_lib_index_js_vue_loader_options_DocumentEditor_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../vue-loader/lib/loaders/stylePostLoader.js!../../../postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../vue-loader/lib/index.js??vue-loader-options!./DocumentEditor.vue?vue&type=style&index=0&lang=css& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-document-editor/src/DocumentEditor/DocumentEditor.vue?vue&type=style&index=0&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_vue_loader_lib_index_js_vue_loader_options_DocumentEditor_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_vue_loader_lib_index_js_vue_loader_options_DocumentEditor_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/vue-document-editor/src/DocumentEditor/imports/page-transition-mgmt.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/vue-document-editor/src/DocumentEditor/imports/page-transition-mgmt.js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "move_children_forward_recursively": () => (/* binding */ move_children_forward_recursively),
/* harmony export */   "move_children_backwards_with_merging": () => (/* binding */ move_children_backwards_with_merging)
/* harmony export */ });

/**
 * Utility function that acts like an Array.filter on childNodes of "container"
 * @param {HTMLElement} container 
 * @param {string} s_tag 
 */
function find_sub_child_sibling_node (container, s_tag){
  if(!container || !s_tag) return false;
  const child_nodes = container.childNodes;
  for(let i = 0; i < child_nodes.length; i++) {
    if(child_nodes[i].s_tag == s_tag) return child_nodes[i];
  }
  return false;
}


/**
 * This function moves every sub-child of argument "child" to the start of the "child_sibling"
 * argument, beginning from the last child, with word splitting and format preserving.
 * Typically, "child" is the current page which content overflows, and "child_sibling" is the 
 * next page.
 * @param {HTMLElement} child Element to take children from (current page)
 * @param {HTMLElement} child_sibling Element to copy children to (next page)
 * @param {Function} stop_condition Check function that returns a boolean if content doesn't overflow anymore
 * @param {Boolean} not_first_child Should be unset. Used internally to let at least one child in the page
 */
function move_children_forward_recursively (child, child_sibling, stop_condition, not_first_child) {

  // if the child still has nodes and the current page still overflows
  while(child.childNodes.length && !stop_condition()){

    // check if page has only one child tree left
    not_first_child = not_first_child || (child.childNodes.length != 1);

    // select the last sub-child
    const sub_child = child.lastChild;

    // if it is a text node, move its content to next page word(/space) by word
    if(sub_child.nodeType == Node.TEXT_NODE){
      const sub_child_hashes = sub_child.textContent.match(/(\s|\S+)/g);
      const sub_child_continuation = document.createTextNode('');
      child_sibling.prepend(sub_child_continuation);
      const l = sub_child_hashes ? sub_child_hashes.length : 0;
      for(let i = 0; i < l; i++) {
        if(i == l - 1 && !not_first_child) return; // never remove the first word of the page
        sub_child.textContent = sub_child_hashes.slice(0, l - i - 1).join('');
        sub_child_continuation.textContent = sub_child_hashes.slice(l - i - 1, l).join('');
        if(stop_condition()) return;
      }
    }

    // if it is a node with no content (e.g. <img>), or a header title (e.g. <h1>) we simply move it
    else if(!sub_child.childNodes.length || sub_child.tagName.match(/h\d/i)) {
      // just prevent moving the last child of the page
      if(!not_first_child){
        console.log("Move-forward: first child reached with no stop condition. Aborting");
        return;
      }
      child_sibling.prepend(sub_child);
    }

    // for every other node that is not text and not the first child, clone it recursively to next page
    else {
      // check if sub child has already been cloned before
      let sub_child_sibling = find_sub_child_sibling_node(child_sibling, sub_child.s_tag);
      
      // if not, create it and watermark the relationship with a random tag
      if(!sub_child_sibling) {
        if(!sub_child.s_tag) {
          const new_random_tag = Math.random().toString(36).slice(2, 8);
          sub_child.s_tag = new_random_tag;
        }
        sub_child_sibling = sub_child.cloneNode(false);
        sub_child_sibling.s_tag = sub_child.s_tag;
        child_sibling.prepend(sub_child_sibling);
      }
      
      // then move/clone its children and sub-children recursively
      move_children_forward_recursively(sub_child, sub_child_sibling, stop_condition, not_first_child);
      sub_child_sibling.normalize(); // merge consecutive text nodes
    }

    // if sub_child was a container that was cloned and is now empty, we clean it
    if(child.contains(sub_child)){
      if(sub_child.childNodes.length == 0 || sub_child.innerHTML == "") child.removeChild(sub_child);
      else if(!stop_condition()) {
        // the only case when it can be non empty should be when stop_condition is now true
        console.log("sub_child:", sub_child, "that is in child:", child);
        throw Error("Document editor is trying to remove a non-empty sub-child. This "
      + "is a bug and should not happen. Please report a repeatable set of actions that "
      + "leaded to this error to https://github.com/motla/vue-document-editor/issues/new");
      }
    }
  }
}



/**
 * This function moves the first element from "next_page_html_div" to the end of "page_html_div", with
 * merging sibling tags previously watermarked by "move_children_forward_recursively", if any.
 * @param {HTMLElement} page_html_div Current page element
 * @param {HTMLElement} next_page_html_div Next page element
 * @param {Function} stop_condition Check function that returns a boolean if content overflows
 */
function move_children_backwards_with_merging (page_html_div, next_page_html_div, stop_condition) {

  // loop until content is overflowing
  while(!stop_condition()){

    // find first child of next page
    const first_child = next_page_html_div.firstChild;

    // merge it at the end of the current page
    var merge_recursively = (container, elt) => {
      // check if child had been splitted (= has a sibling on previous page)
      const elt_sibling = find_sub_child_sibling_node(container, elt.s_tag);
      if(elt_sibling && elt.childNodes.length) {
        // then dig for deeper children, in case of
        merge_recursively(elt_sibling, elt.firstChild);
      }
      // else move the child inside the right container at current page
      else {
        container.append(elt);
        container.normalize();
      }
    }
    merge_recursively(page_html_div, first_child);
  }
}



/***/ }),

/***/ "./node_modules/vue-document-editor/src/DocumentEditor/DocumentEditor.vue":
/*!********************************************************************************!*\
  !*** ./node_modules/vue-document-editor/src/DocumentEditor/DocumentEditor.vue ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DocumentEditor_vue_vue_type_template_id_448921d6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DocumentEditor.vue?vue&type=template&id=448921d6&scoped=true& */ "./node_modules/vue-document-editor/src/DocumentEditor/DocumentEditor.vue?vue&type=template&id=448921d6&scoped=true&");
/* harmony import */ var _DocumentEditor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DocumentEditor.vue?vue&type=script&lang=js& */ "./node_modules/vue-document-editor/src/DocumentEditor/DocumentEditor.vue?vue&type=script&lang=js&");
/* harmony import */ var _DocumentEditor_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DocumentEditor.vue?vue&type=style&index=0&lang=css& */ "./node_modules/vue-document-editor/src/DocumentEditor/DocumentEditor.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _DocumentEditor_vue_vue_type_style_index_1_id_448921d6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DocumentEditor.vue?vue&type=style&index=1&id=448921d6&lang=scss&scoped=true& */ "./node_modules/vue-document-editor/src/DocumentEditor/DocumentEditor.vue?vue&type=style&index=1&id=448921d6&lang=scss&scoped=true&");
/* harmony import */ var _vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;



/* normalize component */

var component = (0,_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__["default"])(
  _DocumentEditor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DocumentEditor_vue_vue_type_template_id_448921d6_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _DocumentEditor_vue_vue_type_template_id_448921d6_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "448921d6",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "node_modules/vue-document-editor/src/DocumentEditor/DocumentEditor.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-document-editor/src/DocumentEditor/DocumentEditor.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-document-editor/src/DocumentEditor/DocumentEditor.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _imports_page_transition_mgmt_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./imports/page-transition-mgmt.js */ "./node_modules/vue-document-editor/src/DocumentEditor/imports/page-transition-mgmt.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    // This contains the initial content of the document that can be synced
    // It must be an Array: each array item is a new set of pages containing the
    // item (string or component). You can see that as predefined page breaks.
    // See the Demo.vue file for a good usage example.
    content: {
      type: Array,
      required: true
    },

    // Display mode of the pages
    display: {
      type: String,
      default: "grid" // ["grid", "horizontal", "vertical"]
    },

    // Sets whether document text can be modified
    editable: {
      type: Boolean,
      default: true
    },

    // Overlay function returning page headers and footers in HTML
    overlay: Function,

    // Pages format in mm (should be an array containing [width, height])
    page_format_mm: {
      type: Array,
      default: () => [210, 297]
    },

    // Page margins in CSS
    page_margins: {
      type: String,
      default: "10mm 15mm"
    },

    // Display zoom. Only acts on the screen display
    zoom: {
      type: Number,
      default: 1.0
    }
  },

  data () {
    return {
      pages: [], // contains {uuid, content_idx, prev_html, template, props} for each pages of the document
      pages_height: 0, // real measured page height in px (corresponding to page_format_mm[1])
      editor_width: 0, // real measured with of an empty editor <div> in px
      prevent_next_content_update_from_parent: false, // workaround for infinite update loop
      current_text_style: false, // contains the style at caret position
    }
  },

  mounted () {
    this.update_editor_width();
    this.update_css_media_style();
    this.reset_content();
    window.addEventListener("resize", this.update_editor_width);
    window.addEventListener("click", this.process_current_text_style);
    window.addEventListener("beforeprint", this.before_print);
    window.addEventListener("afterprint", this.after_print);
  },

  beforeDestroy () {
    window.removeEventListener("resize", this.update_editor_width);
    window.removeEventListener("click", this.process_current_text_style);
    window.removeEventListener("beforeprint", this.before_print);
    window.removeEventListener("afterprint", this.after_print);
  },

  computed: {
    css_media_style () { // creates a CSS <style> and returns it
      const style = document.createElement("style");
      document.head.appendChild(style);
      return style;
    }
  },


  methods: {
    // Computes a random 5-char UUID
    new_uuid: () => Math.random().toString(36).slice(-5),

    // Resets all content from the content property
    async reset_content () {
      // If provided content is empty, initialize it first and exit
      if(!this.content.length) { this.$emit("update:content", [""]); return; }

      // Delete all pages and set one new page per content item
      this.pages = this.content.length ? this.content.map((content, content_idx) => ({
        uuid: this.new_uuid(),
        content_idx,
        template: content.template,
        props: content.props
      })) : [{ uuid: this.new_uuid(), content_idx: 0 }]; // if content is empty

      // Get page height from first empty page
      await this.$nextTick(); // wait for DOM update
      const first_page_elt = this.$refs[this.pages[0].uuid][0];
      if(!this.$refs.content.contains(first_page_elt)) this.$refs.content.appendChild(first_page_elt); // restore page in DOM in case it was removed
      this.pages_height = first_page_elt.clientHeight + 1; // allow one pixel precision

      // Initialize text pages
      for(const page of this.pages) {
        const page_elt = this.$refs[page.uuid][0];

        // set raw HTML content
        if(!this.content[page.content_idx]) page_elt.innerHTML = "<div><br></div>";
        else if(typeof this.content[page.content_idx] == "string") page_elt.innerHTML = "<div>"+this.content[page.content_idx]+"</div>";
        // (else content is a component that is set in Vue.js <template>)

        // restore page in DOM in case it was removed
        if(!this.$refs.content.contains(page_elt)) this.$refs.content.appendChild(page_elt);
      }

      // Spread content over several pages if it overflows
      await this.fit_content_over_pages();

      // Remove the text cursor from the content, if any (its position is lost anyway)
      this.$refs.content.blur();
    },

    // Spreads the HTML content over several pages until it fits
    async fit_content_over_pages () {
      // Data variable this.pages_height must have been set before calling this function
      if(!this.pages_height) return;

      // Check that pages were not deleted from the DOM (start from the end)
      for(let page_idx = this.pages.length - 1; page_idx >= 0; page_idx--) {
        const page = this.pages[page_idx];
        const page_elt = this.$refs[page.uuid] && this.$refs[page.uuid][0];

        // if user deleted the page from the DOM, then remove it from this.pages array
        if(!page_elt || !document.body.contains(page_elt)) this.pages.splice(page_idx, 1);
      }

      // If all the document was wiped out, start a new empty document
      if(!this.pages.length){
        this.reset_content();
        return;
      }

      // Save current selection by inserting empty HTML elements at the start and the end of it
      const selection = window.getSelection();
      const start_marker = document.createElement("null");
      const end_marker = document.createElement("null");
      if(selection.rangeCount) {
        const range = selection.getRangeAt(0);
        range.insertNode(start_marker);
        range.collapse(false);
        range.insertNode(end_marker);
      }

      // Browse every remaining page
      let prev_page_modified_flag = false;
      for(let page_idx = 0; page_idx < this.pages.length; page_idx++) { // page length can grow inside this loop
        const page = this.pages[page_idx];
        const page_elt = this.$refs[page.uuid][0];
        let next_page = this.pages[page_idx + 1];
        let next_page_elt = next_page ? this.$refs[next_page.uuid][0] : null;

        // check if this page, the next page, or any previous page content has been modified by the user (don't apply to template pages)
        if(!page.template && (prev_page_modified_flag || page_elt.innerHTML != page.prev_innerHTML
          || (next_page_elt && !next_page.template && next_page_elt.innerHTML != next_page.prev_innerHTML))){
          prev_page_modified_flag = true;

          // BACKWARD-PROPAGATION
          // check if content doesn't overflow, and that next page exists and has the same content_idx
          if(page_elt.clientHeight <= this.pages_height && next_page && next_page.content_idx == page.content_idx) {

            // try to append every node from the next page until it doesn't fit
            (0,_imports_page_transition_mgmt_js__WEBPACK_IMPORTED_MODULE_0__.move_children_backwards_with_merging)(page_elt, next_page_elt, () => !next_page_elt.childNodes.length || (page_elt.clientHeight > this.pages_height));

            // remove next page if it is empty
            if(!next_page_elt.childNodes.length) this.pages.splice(page_idx + 1, 1);
          }

          // FORWARD-PROPAGATION
          // check if content overflows
          if(page_elt.clientHeight > this.pages_height) {

            // if there is no next page for the same content, create it
            if(!next_page || next_page.content_idx != page.content_idx) {
              next_page = { uuid: this.new_uuid(), content_idx: page.content_idx };
              this.pages.splice(page_idx + 1, 0, next_page);
              await this.$nextTick(); // wait for DOM update
              next_page_elt = this.$refs[next_page.uuid][0];
            }

            // move the content step by step to the next page, until it fits
            (0,_imports_page_transition_mgmt_js__WEBPACK_IMPORTED_MODULE_0__.move_children_forward_recursively)(page_elt, next_page_elt, () => (page_elt.clientHeight <= this.pages_height));
          }
        }
      }


      // Restore selection and remove empty elements
      if(document.body.contains(start_marker)){
        const range = document.createRange();
        range.setStart(start_marker, 0);
        if(document.body.contains(end_marker)) range.setEnd(end_marker, 0);
        selection.removeAllRanges();
        selection.addRange(range);
      }
      if(start_marker.parentElement) start_marker.parentElement.removeChild(start_marker);
      if(end_marker.parentElement) end_marker.parentElement.removeChild(end_marker);

      // Normalize and store current page HTML content
      for(const page of this.pages) {
        const page_elt = this.$refs[page.uuid][0];
        page_elt.normalize(); // normalize HTML (merge text nodes)
        page.prev_innerHTML = page_elt.innerHTML; // store current pages innerHTML for next call
      }
    },

    // Input event
    async input (e) {
      if(!e) return; // check that event is set
      await this.fit_content_over_pages(); // fit content according to modifications
      this.emit_new_content(); // emit content modification
      if(e.inputType != "insertText") this.process_current_text_style(); // update current style if it has changed
    },

    // Emit content change to parent
    emit_new_content () {
      let removed_pages_flag = false; // flag to call reset_content if some pages were removed by the user

      // process the new content
      const new_content = this.content.map((item, content_idx) => {
        // select pages that correspond to this content item (represented by its index in the array)
        const pages = this.pages.filter(page => (page.content_idx == content_idx));

        // if there are no pages representing this content (because deleted by the user), mark item as false to remove it
        if(!pages.length) {
          removed_pages_flag = true;
          return false;
        }

        // if item is a string, concatenate each page content and set that
        else if(typeof item == "string") {
          return pages.map(page => {
            // remove any useless <div> surrounding the content
            let elt = this.$refs[page.uuid][0];
            while(elt.children.length == 1 && elt.firstChild.tagName && elt.firstChild.tagName.toLowerCase() == "div" && !elt.firstChild.getAttribute("style")) {
              elt = elt.firstChild;
            }
            return elt.innerHTML;
          }).join('') || false;
        }

        // if item is a component, just clone the item
        else return { template: item.template, props: { ...item.props }};
      }).filter(item => (item != false)); // remove empty items

      // avoid calling reset_content after the parent content is updated (infinite loop)
      if(!removed_pages_flag) this.prevent_next_content_update_from_parent = true;

      // send event to parent to update the synced content
      this.$emit("update:content", new_content);
    },

    // Sets current_text_style with CSS style at caret position
    process_current_text_style () {
      let style = false;
      const sel = window.getSelection();
      if(sel.focusNode) {
        const element = sel.focusNode.tagName ? sel.focusNode : sel.focusNode.parentElement;
        if(element && element.isContentEditable) {
          style = window.getComputedStyle(element);

          // compute additional properties
          style.textDecorationStack = []; // array of text-decoration strings from parent elements
          style.headerLevel = 0;
          style.isList = false;
          let parent = element;
          while(parent){
            const parent_style = window.getComputedStyle(parent);
            // stack CSS text-decoration as it is not overridden by children
            style.textDecorationStack.push(parent_style.textDecoration);
            // check if one parent is a list-item
            if(parent_style.display == "list-item") style.isList = true;
            // get first header level, if any
            if(!style.headerLevel){
              for(let i = 1; i <= 6; i++){
                if(parent.tagName.toUpperCase() == "H"+i) {
                  style.headerLevel = i;
                  break;
                }
              }
            }
            parent = parent.parentElement;
          }
        }
      }
      this.current_text_style = style;
    },

    // Process the specific style (position and size) of each page <div> and content <div>
    page_style (page_idx, allow_overflow) {
      const px_in_mm = 0.2645833333333;
      const page_width = this.page_format_mm[0] / px_in_mm;
      const page_spacing_mm = 10;
      const page_with_plus_spacing = (page_spacing_mm + this.page_format_mm[0]) * this.zoom / px_in_mm;
      const view_padding = 20;
      const inner_width = this.editor_width - 2 * view_padding;
      let nb_pages_x = 1, page_column, x_pos, x_ofx, left_px, top_mm, bkg_width_mm, bkg_height_mm;
      if(this.display == "horizontal") {
        if(inner_width > (this.pages.length * page_with_plus_spacing)){
          nb_pages_x = Math.floor(inner_width / page_with_plus_spacing);
          left_px = inner_width / (nb_pages_x * 2) * (1 + page_idx * 2) - page_width / 2;
        } else {
          nb_pages_x = this.pages.length;
          left_px = page_with_plus_spacing * page_idx + page_width / 2 * (this.zoom - 1);
        }
        top_mm = 0;
        bkg_width_mm = this.zoom * (this.page_format_mm[0] * nb_pages_x + (nb_pages_x - 1) * page_spacing_mm);
        bkg_height_mm = this.page_format_mm[1] * this.zoom;
      } else { // "grid", vertical
        nb_pages_x = Math.floor(inner_width / page_with_plus_spacing);
        if(nb_pages_x < 1 || this.display == "vertical") nb_pages_x = 1;
        page_column = (page_idx % nb_pages_x);
        x_pos = inner_width / (nb_pages_x * 2) * (1 + page_column * 2) - page_width / 2;
        x_ofx = Math.max(0, (page_width * this.zoom - inner_width) / 2);
        left_px = x_pos + x_ofx;
        top_mm = ((this.page_format_mm[1] + page_spacing_mm) * this.zoom) * Math.floor(page_idx / nb_pages_x);
        const nb_pages_y = Math.ceil(this.pages.length / nb_pages_x);
        bkg_width_mm = this.zoom * (this.page_format_mm[0] * nb_pages_x + (nb_pages_x - 1) * page_spacing_mm);
        bkg_height_mm = this.zoom * (this.page_format_mm[1] * nb_pages_y + (nb_pages_y - 1) * page_spacing_mm);
      }
      if(page_idx >= 0) {
        const style = {
          position: "absolute",
          left: "calc("+ left_px +"px + "+ view_padding +"px)",
          top: "calc("+ top_mm +"mm + "+ view_padding +"px)",
          width: this.page_format_mm[0]+"mm",
          // "height" is set below
          padding: this.page_margins,
          transform: "scale("+ this.zoom +")"
        }
        style[allow_overflow ? "minHeight" : "height"] = this.page_format_mm[1]+"mm";
        return style;
      } else {
        // Content/background <div> is sized so it lets a margin around pages when scrolling at the end
        return { width: "calc("+ bkg_width_mm +"mm + "+ (2*view_padding) +"px)", height: "calc("+ bkg_height_mm +"mm + "+ (2*view_padding) +"px)" };
      }
    },

    // Get and store empty editor <div> width
    update_editor_width () {
      this.$refs.editor.classList.add("hide_children");
      this.editor_width = this.$refs.editor.clientWidth;
      this.$refs.editor.classList.remove("hide_children");
    },
    update_css_media_style () {
      this.css_media_style.innerHTML = "@media print { @page { size: "+this.page_format_mm[0]+"mm "+this.page_format_mm[1]+"mm; margin: 0 !important; } }";
    },

    // Prepare content before opening the native print box
    before_print () {
      // store the current body aside
      this._page_body = document.body;

      // create a new body for the print and overwrite CSS
      const print_body = document.createElement("body");
      print_body.style.margin = "0";
      print_body.style.padding = "0";
      print_body.style.background = "white";

      // clone each page to the print body
      for(const [page_idx, page] of this.pages.entries()){
        const page_elt = this.$refs[page.uuid][0];
        const page_clone = page_elt.cloneNode(true);
        page_clone.style = ""; // reset page style for the clone
        page_clone.style.position = "relative";
        page_clone.style.padding = this.page_margins;
        page_clone.style.breakBefore = page_idx ? "page" : "auto";

        // add overlays if any
        const overlay_elts = this.$refs[page.uuid+'-overlay'];
        if(overlay_elts && overlay_elts[0]){
          const overlay_clone = overlay_elts[0].cloneNode(true);
          overlay_clone.style.position = "absolute";
          overlay_clone.style.left = "0";
          overlay_clone.style.top = "0";
          overlay_clone.style.transform = "none";
          overlay_clone.style.padding = "0";
          overlay_clone.style.overflow = "hidden";
          page_clone.prepend(overlay_clone);
        }

        print_body.append(page_clone);
      }

      // replace current body by the print body
      document.body = print_body;
    },

    // Restore content after closing the native print box
    after_print () {
      document.body = this._page_body;
      this.update_editor_width();
    }
  },

  // Watch for changes and adapt content accordingly
  watch: {
    page_format_mm: {
      async handler () {
        this.update_css_media_style();
        await this.reset_content();
      }
    },
    page_margins: {
      async handler () {
        await this.reset_content();
      }
    },
    content: {
      async handler () {
        // prevent infinite loop as reset_content triggers a content update and it's async
        if(this.prevent_next_content_update_from_parent) {
          this.prevent_next_content_update_from_parent = false;
        } else await this.reset_content();
      }
    }
  }

});


/***/ }),

/***/ "./resources/js/components/DocumentViewer.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/DocumentViewer.vue ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DocumentViewer_vue_vue_type_template_id_676c8bb8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DocumentViewer.vue?vue&type=template&id=676c8bb8& */ "./resources/js/components/DocumentViewer.vue?vue&type=template&id=676c8bb8&");
/* harmony import */ var _DocumentViewer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DocumentViewer.vue?vue&type=script&lang=js& */ "./resources/js/components/DocumentViewer.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DocumentViewer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DocumentViewer_vue_vue_type_template_id_676c8bb8___WEBPACK_IMPORTED_MODULE_0__.render,
  _DocumentViewer_vue_vue_type_template_id_676c8bb8___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/DocumentViewer.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/document_templates/Trust/Documents.vue":
/*!*************************************************************!*\
  !*** ./resources/js/document_templates/Trust/Documents.vue ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Documents_vue_vue_type_template_id_7830a605___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Documents.vue?vue&type=template&id=7830a605& */ "./resources/js/document_templates/Trust/Documents.vue?vue&type=template&id=7830a605&");
/* harmony import */ var _Documents_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Documents.vue?vue&type=script&lang=js& */ "./resources/js/document_templates/Trust/Documents.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Documents_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Documents_vue_vue_type_template_id_7830a605___WEBPACK_IMPORTED_MODULE_0__.render,
  _Documents_vue_vue_type_template_id_7830a605___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/document_templates/Trust/Documents.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/DocumentViewer.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/DocumentViewer.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DocumentViewer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DocumentViewer.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/DocumentViewer.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DocumentViewer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/document_templates/Trust/Documents.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/document_templates/Trust/Documents.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Documents_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Documents.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/document_templates/Trust/Documents.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Documents_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./node_modules/vue-document-editor/src/DocumentEditor/DocumentEditor.vue?vue&type=style&index=1&id=448921d6&lang=scss&scoped=true&":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/vue-document-editor/src/DocumentEditor/DocumentEditor.vue?vue&type=style&index=1&id=448921d6&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_loader_dist_cjs_js_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_vue_loader_lib_index_js_vue_loader_options_DocumentEditor_vue_vue_type_style_index_1_id_448921d6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../style-loader/dist/cjs.js!../../../laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!../../../vue-loader/lib/loaders/stylePostLoader.js!../../../postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!../../../sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!../../../vue-loader/lib/index.js??vue-loader-options!./DocumentEditor.vue?vue&type=style&index=1&id=448921d6&lang=scss&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-document-editor/src/DocumentEditor/DocumentEditor.vue?vue&type=style&index=1&id=448921d6&lang=scss&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-document-editor/src/DocumentEditor/DocumentEditor.vue?vue&type=style&index=0&lang=css&":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/vue-document-editor/src/DocumentEditor/DocumentEditor.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_loader_dist_cjs_js_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_vue_loader_lib_index_js_vue_loader_options_DocumentEditor_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../style-loader/dist/cjs.js!../../../laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../vue-loader/lib/loaders/stylePostLoader.js!../../../postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../vue-loader/lib/index.js??vue-loader-options!./DocumentEditor.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-document-editor/src/DocumentEditor/DocumentEditor.vue?vue&type=style&index=0&lang=css&");


/***/ }),

/***/ "./node_modules/vue-document-editor/src/DocumentEditor/DocumentEditor.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/vue-document-editor/src/DocumentEditor/DocumentEditor.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _vue_loader_lib_index_js_vue_loader_options_DocumentEditor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../vue-loader/lib/index.js??vue-loader-options!./DocumentEditor.vue?vue&type=script&lang=js& */ "./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-document-editor/src/DocumentEditor/DocumentEditor.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_vue_loader_lib_index_js_vue_loader_options_DocumentEditor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./node_modules/vue-document-editor/src/DocumentEditor/DocumentEditor.vue?vue&type=template&id=448921d6&scoped=true&":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/vue-document-editor/src/DocumentEditor/DocumentEditor.vue?vue&type=template&id=448921d6&scoped=true& ***!
  \***************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_DocumentEditor_vue_vue_type_template_id_448921d6_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_DocumentEditor_vue_vue_type_template_id_448921d6_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_DocumentEditor_vue_vue_type_template_id_448921d6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../vue-loader/lib/index.js??vue-loader-options!./DocumentEditor.vue?vue&type=template&id=448921d6&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-document-editor/src/DocumentEditor/DocumentEditor.vue?vue&type=template&id=448921d6&scoped=true&");


/***/ }),

/***/ "./resources/js/components/DocumentViewer.vue?vue&type=template&id=676c8bb8&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/DocumentViewer.vue?vue&type=template&id=676c8bb8& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DocumentViewer_vue_vue_type_template_id_676c8bb8___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DocumentViewer_vue_vue_type_template_id_676c8bb8___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DocumentViewer_vue_vue_type_template_id_676c8bb8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DocumentViewer.vue?vue&type=template&id=676c8bb8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/DocumentViewer.vue?vue&type=template&id=676c8bb8&");


/***/ }),

/***/ "./resources/js/document_templates/Trust/Documents.vue?vue&type=template&id=7830a605&":
/*!********************************************************************************************!*\
  !*** ./resources/js/document_templates/Trust/Documents.vue?vue&type=template&id=7830a605& ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Documents_vue_vue_type_template_id_7830a605___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Documents_vue_vue_type_template_id_7830a605___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Documents_vue_vue_type_template_id_7830a605___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Documents.vue?vue&type=template&id=7830a605& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/document_templates/Trust/Documents.vue?vue&type=template&id=7830a605&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-document-editor/src/DocumentEditor/DocumentEditor.vue?vue&type=template&id=448921d6&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-document-editor/src/DocumentEditor/DocumentEditor.vue?vue&type=template&id=448921d6&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { ref: "editor", staticClass: "editor" }, [
    _vm.overlay
      ? _c(
          "div",
          { staticClass: "overlays" },
          _vm._l(_vm.pages, function(page, page_idx) {
            return _c("div", {
              key: page.uuid + "-overlay",
              ref: page.uuid + "-overlay",
              refInFor: true,
              staticClass: "overlay",
              style: _vm.page_style(page_idx, false),
              domProps: {
                innerHTML: _vm._s(_vm.overlay(page_idx + 1, _vm.pages.length))
              }
            })
          }),
          0
        )
      : _vm._e(),
    _vm._v(" "),
    _c(
      "div",
      {
        ref: "content",
        staticClass: "content",
        style: _vm.page_style(-1),
        attrs: { contenteditable: _vm.editable },
        on: { input: _vm.input, keyup: _vm.process_current_text_style }
      },
      _vm._l(_vm.pages, function(page, page_idx) {
        return _c(
          "div",
          {
            key: page.uuid,
            ref: page.uuid,
            refInFor: true,
            staticClass: "page",
            style: _vm.page_style(page_idx, page.template ? false : true),
            attrs: {
              "data-content-idx": page.content_idx,
              "data-page-idx": page_idx,
              contenteditable: _vm.editable && !page.template ? true : false
            }
          },
          [
            page.template
              ? _c(
                  page.template,
                  _vm._b(
                    { tag: "component" },
                    "component",
                    page.props,
                    false,
                    true
                  )
                )
              : _vm._e()
          ],
          1
        )
      }),
      0
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/DocumentViewer.vue?vue&type=template&id=676c8bb8&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/DocumentViewer.vue?vue&type=template&id=676c8bb8& ***!
  \**************************************************************************************************************************************************************************************************************************/
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
  return _vm.content
    ? _c("VueDocumentEditor", {
        ref: "editor",
        staticClass: "editor",
        attrs: {
          content: _vm.content,
          overlay: null,
          zoom: _vm.zoom,
          display: _vm.display
        },
        on: {
          "update:content": function($event) {
            _vm.content = $event
          }
        }
      })
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/document_templates/Trust/Documents.vue?vue&type=template&id=7830a605&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/document_templates/Trust/Documents.vue?vue&type=template&id=7830a605& ***!
  \***********************************************************************************************************************************************************************************************************************************/
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
    { attrs: { flat: "" } },
    [
      _c(
        "v-sheet",
        { staticClass: "warm", staticStyle: { position: "relative" } },
        [
          _c(
            "v-container",
            { attrs: { id: "document-container", fluid: "" } },
            [
              _c(
                "v-row",
                { attrs: { "no-gutters": "" } },
                [
                  _c(
                    "v-col",
                    { attrs: { cols: "12", sm: "12", md: "4" } },
                    [
                      _c(_vm.content[0].wizard, {
                        tag: "component",
                        attrs: {
                          project: _vm.$page.props.project,
                          client: _vm.$page.props.client,
                          templates: _vm.$page.props.templates
                        },
                        on: {
                          "update:project": function($event) {
                            return _vm.$set(_vm.$page.props, "project", $event)
                          },
                          "update:client": function($event) {
                            return _vm.$set(_vm.$page.props, "client", $event)
                          },
                          "update:templates": function($event) {
                            return _vm.$set(
                              _vm.$page.props,
                              "templates",
                              $event
                            )
                          }
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    {
                      staticStyle: { overflow: "scroll" },
                      attrs: { cols: "12", sm: "12", md: "8" }
                    },
                    [_c("DocumentViewer", { attrs: { content: _vm.content } })],
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
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);