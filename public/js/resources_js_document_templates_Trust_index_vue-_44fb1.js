"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_document_templates_Trust_index_vue-_44fb1"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/document_templates/Trust/Beneficiaries.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/document_templates/Trust/Beneficiaries.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    beneficiaries: {
      type: Array,
      "default": function _default() {
        return [];
      }
    }
  },
  data: function data() {
    return {
      newBeneficiary: {
        name: '',
        units: 0
      },
      rules: {
        name: [function (value) {
          return !!value || 'Required.';
        }],
        units: [function (value) {
          return !!value || 'Required.';
        }, function (value) {
          return !!value || 'Can not be 0';
        }]
      },
      errors: {
        name: null,
        units: null
      }
    };
  },
  computed: {
    totalUnits: function totalUnits() {
      // convert units to a number and add all units up
      return this.beneficiaries.reduce(function (total, item) {
        return total + Number(item.units);
      }, 0);
    },
    totalUnitsLeft: function totalUnitsLeft() {
      return 100 - this.totalUnits;
    },
    hasUnits: function hasUnits() {
      return this.totalUnitsLeft > 0;
    }
  },
  methods: {
    add: function add() {
      if (this.checkForErrors()) {
        return;
      }

      this.$emit('add', this.newBeneficiary);
      this.newBeneficiary = {
        name: '',
        units: 0
      };
      this.checkForErrors();
    },
    remove: function remove(index) {
      this.$emit('remove', index);
    },
    update: function update() {
      this.$emit('update', this.beneficiaries);
    },
    checkForErrors: function checkForErrors() {
      var _this = this;

      var hasError = false;
      Object.keys(this.rules).forEach(function (key) {
        var rules = _this.rules[key];
        var value = _this.newBeneficiary[key];
        rules.forEach(function (rule) {
          var error = rule(value);

          if (typeof error === 'string') {
            _this.errors[key] = error;
            hasError = true;
          } else {
            _this.errors[key] = null;
          }
        });
      });
      return hasError;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/document_templates/Trust/index.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/document_templates/Trust/index.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _pages_Admin_ClientProject_Types_Trust_MeetingMinutes_index_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../pages/Admin/ClientProject/Types/Trust/MeetingMinutes/index.vue */ "./resources/js/pages/Admin/ClientProject/Types/Trust/MeetingMinutes/index.vue");
/* harmony import */ var _pages_Admin_ClientProject_Types_Trust_Documents_index_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../pages/Admin/ClientProject/Types/Trust/Documents/index.vue */ "./resources/js/pages/Admin/ClientProject/Types/Trust/Documents/index.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: ['currentDocument'],
  data: function data() {
    return {
      tab: 'documents'
    };
  },
  components: {
    Documents: _pages_Admin_ClientProject_Types_Trust_Documents_index_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    MeetingMinutes: _pages_Admin_ClientProject_Types_Trust_MeetingMinutes_index_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Admin/ClientProject/Types/Trust/Documents/Wizard.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Admin/ClientProject/Types/Trust/Documents/Wizard.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _document_templates_Trust_Beneficiaries_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../document_templates/Trust/Beneficiaries.vue */ "./resources/js/document_templates/Trust/Beneficiaries.vue");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    var _this$project;

    var user = this.$page.props.auth.user.data;
    var documentData = (_this$project = this.project) === null || _this$project === void 0 ? void 0 : _this$project.document_data;
    return {
      currentStep: 1,
      MenuDocumentCreated: '',
      form: this.$inertia.form({
        trust_name: (documentData === null || documentData === void 0 ? void 0 : documentData.trust_name) || this.project.name,
        trustees: (documentData === null || documentData === void 0 ? void 0 : documentData.trustees) || {
          first: ["".concat(this.client.first_name, " ").concat(this.client.last_name)],
          second: []
        },
        settlor: (documentData === null || documentData === void 0 ? void 0 : documentData.settlor) || "".concat(user.first_name, " ").concat(user.last_name),
        document_created_at: (documentData === null || documentData === void 0 ? void 0 : documentData.document_created_at) || this.moment().format('YYYY-MM-DD'),
        mailing_address: (documentData === null || documentData === void 0 ? void 0 : documentData.mailing_address) || {
          address: this.client.address,
          apt: '',
          city: this.client.city,
          state: this.client.state,
          zip: this.client.zip,
          country: this.client.country
        },
        domicile_address: (documentData === null || documentData === void 0 ? void 0 : documentData.domicile_address) || {
          address: '7512 Dr. Phillips Blvd.',
          apt: 'Suite #50-185',
          city: 'Orlando',
          state: 'Florida',
          zip: '32819',
          country: 'USA'
        },
        settlor_gift_type: (documentData === null || documentData === void 0 ? void 0 : documentData.settlor_gift_type) || 'CASH',
        settlor_gift: (documentData === null || documentData === void 0 ? void 0 : documentData.settlor_gift) || '100',
        term_of_trust: (documentData === null || documentData === void 0 ? void 0 : documentData.term_of_trust) || '99',
        beneficiaries: (documentData === null || documentData === void 0 ? void 0 : documentData.beneficiaries) || []
      })
    };
  },
  methods: {
    moment: (moment__WEBPACK_IMPORTED_MODULE_0___default()),
    onAddBeneficiary: function onAddBeneficiary(beneficiary) {
      this.form.beneficiaries.push(beneficiary);
      this.updateProject();
    },
    onDeleteBeneficiary: function onDeleteBeneficiary(beneficiaryIndex) {
      this.form.beneficiaries.splice(beneficiaryIndex, 1);
      this.updateProject();
    },
    onUpdateBeneficiary: function onUpdateBeneficiary(beneficiaries, index) {
      this.form.beneficiaries = beneficiaries;
      this.updateProject();
    },
    updateProject: function updateProject() {
      var _this = this;

      console.log('updateProject');
      axios__WEBPACK_IMPORTED_MODULE_1___default().post("/admin/projects/".concat(this.project.id), {
        _method: 'PUT',
        name: this.form.trust_name,
        document_data: this.form.data()
      }, {
        params: {
          resetOnSuccess: false
        }
      }) // eslint-disable-next-line promise/always-return
      .then(function (result) {
        _this.$emit('updateProject', JSON.parse(result.config.data));
      });
    },
    onEnter: function onEnter() {
      console.log('save onEnter');
      this.updateProject();
    },
    nextStep: function nextStep() {
      var steps = this.$el.querySelectorAll('.v-stepper__step').length;
      this.currentStep = this.currentStep === steps ? 1 : Number(this.currentStep) + 1;

      if (this.currentStep <= steps) {
        this.updateProject();
      } else {
        this.updateForm();
      }
    },
    updateForm: function updateForm() {
      var _this2 = this;

      this.form.transform(function (data) {
        return {
          name: _this2.form.trust_name,
          document_data: _objectSpread({}, data)
        };
      }).put("/admin/projects/".concat(this.project.id), {
        preserveScroll: true,
        onSuccess: function onSuccess(e) {
          console.log('updateForm onSuccess', e);
        }
      }, {
        resetOnSuccess: false
      });
    }
  },
  components: {
    Beneficiaries: _document_templates_Trust_Beneficiaries_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Admin/ClientProject/Types/Trust/Documents/index.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Admin/ClientProject/Types/Trust/Documents/index.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_DocumentViewer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/DocumentViewer */ "./resources/js/components/DocumentViewer.vue");
/* harmony import */ var _Wizard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Wizard */ "./resources/js/pages/Admin/ClientProject/Types/Trust/Documents/Wizard.vue");
//
//
//
//
//
//
//
//
//
//
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
  props: ['currentDocument'],
  computed: {
    content: function content() {
      console.log(this.currentDocument);
      return [{
        // template: () => import(`@/document_templates/${this.$page.props.project.type}/${this.currentDocument}`),
        props: {
          client: this.$page.props.client,
          project: this.$page.props.project
        }
      }];
    }
  },
  components: {
    Wizard: _Wizard__WEBPACK_IMPORTED_MODULE_1__["default"],
    DocumentViewer: _components_DocumentViewer__WEBPACK_IMPORTED_MODULE_0__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Admin/ClientProject/Types/Trust/MeetingMinutes/Wizard.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Admin/ClientProject/Types/Trust/MeetingMinutes/Wizard.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  model: {
    prop: 'meeting_minute',
    event: 'change'
  },
  props: ['meeting_minute'],
  data: function data() {
    return {};
  },
  methods: {
    change: function change(meetingMinute) {
      this.$emit('change', meetingMinute);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Admin/ClientProject/Types/Trust/MeetingMinutes/index.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Admin/ClientProject/Types/Trust/MeetingMinutes/index.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_DocumentViewer_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/DocumentViewer.vue */ "./resources/js/components/DocumentViewer.vue");
/* harmony import */ var _Wizard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Wizard */ "./resources/js/pages/Admin/ClientProject/Types/Trust/MeetingMinutes/Wizard.vue");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  data: function data() {
    var _this$$page$props$pro, _this$$page$props$pro2;

    return {
      menu_date: false,
      dialog: false,
      selectedMinute: ((_this$$page$props$pro = this.$page.props.project.document_data) === null || _this$$page$props$pro === void 0 ? void 0 : (_this$$page$props$pro2 = _this$$page$props$pro.meeting_minutes) === null || _this$$page$props$pro2 === void 0 ? void 0 : _this$$page$props$pro2[0]) || null,
      form: this.$inertia.form({
        meeting_number: '',
        resolution: false,
        date: moment__WEBPACK_IMPORTED_MODULE_0___default()().format('YYYY-MM-DD hh:mm'),
        minutes: [{
          minute_number: 1,
          minute_type: '',
          minute_title: '',
          minute_content: '',
          minute_attachment: ''
        }],
        subject: '',
        type: '',
        matters_resolved: [],
        officers_present: [],
        closing_statement: ''
      })
    };
  },
  computed: {
    content: function content() {
      return [{
        template: function template() {
          return __webpack_require__.e(/*! import() */ "resources_js_document_templates_Trust_MeetingMinute_vue-_ae501").then(__webpack_require__.bind(__webpack_require__, /*! @/document_templates/Trust/MeetingMinute.vue */ "./resources/js/document_templates/Trust/MeetingMinute.vue"));
        },
        props: {
          client: this.$page.props.client,
          project: this.$page.props.project,
          minute: this.selectedMinute
        }
      }];
    },
    meetingMinutes: function meetingMinutes() {
      return this.$page.props.project.document_data.meeting_minutes || [];
    },
    nextNumber: function nextNumber() {
      // if no length start at 3 or add 1
      if (this.meetingMinutes.length === 0) {
        return 3;
      }

      return this.meetingMinutes[this.meetingMinutes.length - 1].meeting_number + 1;
    }
  },
  methods: {
    setSelectedMinute: function setSelectedMinute(minute) {
      var _this = this;

      this.selectedMinute = this.meetingMinutes.find(function (minute) {
        return minute.meeting_number === _this.selectedMinute.meeting_number;
      });
    },
    addMinute: function addMinute() {
      var _this2 = this;

      this.dialog = false;
      this.form.transform(function (data) {
        return _objectSpread(_objectSpread({}, data), {}, {
          meeting_number: _this2.nextNumber
        });
      }).post("/admin/client/".concat(this.$page.props.client.id, "/project/").concat(this.$page.props.project.id, "/document_data/meeting_minutes"));
    }
  },
  components: {
    Wizard: _Wizard__WEBPACK_IMPORTED_MODULE_2__["default"],
    DocumentViewer: _components_DocumentViewer_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  }
});

/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Admin/ClientProject/Types/Trust/MeetingMinutes/index.vue?vue&type=style&index=0&id=123322be&scoped=true&lang=scss&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Admin/ClientProject/Types/Trust/MeetingMinutes/index.vue?vue&type=style&index=0&id=123322be&scoped=true&lang=scss& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".v-toolbar__content[data-v-123322be] {\n  display: flex;\n  align-items: center;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Admin/ClientProject/Types/Trust/Documents/Wizard.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Admin/ClientProject/Types/Trust/Documents/Wizard.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.v-stepper--alt-labels .v-stepper__step{\n  flex-basis: auto\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Admin/ClientProject/Types/Trust/MeetingMinutes/index.vue?vue&type=style&index=0&id=123322be&scoped=true&lang=scss&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Admin/ClientProject/Types/Trust/MeetingMinutes/index.vue?vue&type=style&index=0&id=123322be&scoped=true&lang=scss& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_123322be_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!../../../../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=style&index=0&id=123322be&scoped=true&lang=scss& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Admin/ClientProject/Types/Trust/MeetingMinutes/index.vue?vue&type=style&index=0&id=123322be&scoped=true&lang=scss&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_123322be_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_123322be_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Admin/ClientProject/Types/Trust/Documents/Wizard.vue?vue&type=style&index=0&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Admin/ClientProject/Types/Trust/Documents/Wizard.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Wizard_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Wizard.vue?vue&type=style&index=0&lang=css& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Admin/ClientProject/Types/Trust/Documents/Wizard.vue?vue&type=style&index=0&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Wizard_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Wizard_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/document_templates/Trust/Beneficiaries.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/document_templates/Trust/Beneficiaries.vue ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Beneficiaries_vue_vue_type_template_id_66521590___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Beneficiaries.vue?vue&type=template&id=66521590& */ "./resources/js/document_templates/Trust/Beneficiaries.vue?vue&type=template&id=66521590&");
/* harmony import */ var _Beneficiaries_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Beneficiaries.vue?vue&type=script&lang=js& */ "./resources/js/document_templates/Trust/Beneficiaries.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Beneficiaries_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Beneficiaries_vue_vue_type_template_id_66521590___WEBPACK_IMPORTED_MODULE_0__.render,
  _Beneficiaries_vue_vue_type_template_id_66521590___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/document_templates/Trust/Beneficiaries.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/document_templates/Trust/index.vue":
/*!*********************************************************!*\
  !*** ./resources/js/document_templates/Trust/index.vue ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_vue_vue_type_template_id_63ec61bf___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=63ec61bf& */ "./resources/js/document_templates/Trust/index.vue?vue&type=template&id=63ec61bf&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/document_templates/Trust/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_63ec61bf___WEBPACK_IMPORTED_MODULE_0__.render,
  _index_vue_vue_type_template_id_63ec61bf___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/document_templates/Trust/index.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Admin/ClientProject/Types/Trust/Documents/Wizard.vue":
/*!*********************************************************************************!*\
  !*** ./resources/js/pages/Admin/ClientProject/Types/Trust/Documents/Wizard.vue ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Wizard_vue_vue_type_template_id_5ae17059___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Wizard.vue?vue&type=template&id=5ae17059& */ "./resources/js/pages/Admin/ClientProject/Types/Trust/Documents/Wizard.vue?vue&type=template&id=5ae17059&");
/* harmony import */ var _Wizard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Wizard.vue?vue&type=script&lang=js& */ "./resources/js/pages/Admin/ClientProject/Types/Trust/Documents/Wizard.vue?vue&type=script&lang=js&");
/* harmony import */ var _Wizard_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Wizard.vue?vue&type=style&index=0&lang=css& */ "./resources/js/pages/Admin/ClientProject/Types/Trust/Documents/Wizard.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Wizard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Wizard_vue_vue_type_template_id_5ae17059___WEBPACK_IMPORTED_MODULE_0__.render,
  _Wizard_vue_vue_type_template_id_5ae17059___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Admin/ClientProject/Types/Trust/Documents/Wizard.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Admin/ClientProject/Types/Trust/Documents/index.vue":
/*!********************************************************************************!*\
  !*** ./resources/js/pages/Admin/ClientProject/Types/Trust/Documents/index.vue ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_vue_vue_type_template_id_1373c9f4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=1373c9f4& */ "./resources/js/pages/Admin/ClientProject/Types/Trust/Documents/index.vue?vue&type=template&id=1373c9f4&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/pages/Admin/ClientProject/Types/Trust/Documents/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_1373c9f4___WEBPACK_IMPORTED_MODULE_0__.render,
  _index_vue_vue_type_template_id_1373c9f4___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Admin/ClientProject/Types/Trust/Documents/index.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Admin/ClientProject/Types/Trust/MeetingMinutes/Wizard.vue":
/*!**************************************************************************************!*\
  !*** ./resources/js/pages/Admin/ClientProject/Types/Trust/MeetingMinutes/Wizard.vue ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Wizard_vue_vue_type_template_id_340d30cf_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Wizard.vue?vue&type=template&id=340d30cf&scoped=true& */ "./resources/js/pages/Admin/ClientProject/Types/Trust/MeetingMinutes/Wizard.vue?vue&type=template&id=340d30cf&scoped=true&");
/* harmony import */ var _Wizard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Wizard.vue?vue&type=script&lang=js& */ "./resources/js/pages/Admin/ClientProject/Types/Trust/MeetingMinutes/Wizard.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Wizard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Wizard_vue_vue_type_template_id_340d30cf_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Wizard_vue_vue_type_template_id_340d30cf_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "340d30cf",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Admin/ClientProject/Types/Trust/MeetingMinutes/Wizard.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Admin/ClientProject/Types/Trust/MeetingMinutes/index.vue":
/*!*************************************************************************************!*\
  !*** ./resources/js/pages/Admin/ClientProject/Types/Trust/MeetingMinutes/index.vue ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_vue_vue_type_template_id_123322be_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=123322be&scoped=true& */ "./resources/js/pages/Admin/ClientProject/Types/Trust/MeetingMinutes/index.vue?vue&type=template&id=123322be&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/pages/Admin/ClientProject/Types/Trust/MeetingMinutes/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _index_vue_vue_type_style_index_0_id_123322be_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&id=123322be&scoped=true&lang=scss& */ "./resources/js/pages/Admin/ClientProject/Types/Trust/MeetingMinutes/index.vue?vue&type=style&index=0&id=123322be&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_123322be_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _index_vue_vue_type_template_id_123322be_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "123322be",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Admin/ClientProject/Types/Trust/MeetingMinutes/index.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/document_templates/Trust/Beneficiaries.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/js/document_templates/Trust/Beneficiaries.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Beneficiaries_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Beneficiaries.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/document_templates/Trust/Beneficiaries.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Beneficiaries_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/document_templates/Trust/index.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/document_templates/Trust/index.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/document_templates/Trust/index.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/Admin/ClientProject/Types/Trust/Documents/Wizard.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/pages/Admin/ClientProject/Types/Trust/Documents/Wizard.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Wizard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Wizard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Admin/ClientProject/Types/Trust/Documents/Wizard.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Wizard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/Admin/ClientProject/Types/Trust/Documents/index.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/pages/Admin/ClientProject/Types/Trust/Documents/index.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Admin/ClientProject/Types/Trust/Documents/index.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/Admin/ClientProject/Types/Trust/MeetingMinutes/Wizard.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/pages/Admin/ClientProject/Types/Trust/MeetingMinutes/Wizard.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Wizard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Wizard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Admin/ClientProject/Types/Trust/MeetingMinutes/Wizard.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Wizard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/Admin/ClientProject/Types/Trust/MeetingMinutes/index.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/pages/Admin/ClientProject/Types/Trust/MeetingMinutes/index.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Admin/ClientProject/Types/Trust/MeetingMinutes/index.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/Admin/ClientProject/Types/Trust/MeetingMinutes/index.vue?vue&type=style&index=0&id=123322be&scoped=true&lang=scss&":
/*!***********************************************************************************************************************************************!*\
  !*** ./resources/js/pages/Admin/ClientProject/Types/Trust/MeetingMinutes/index.vue?vue&type=style&index=0&id=123322be&scoped=true&lang=scss& ***!
  \***********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_123322be_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!../../../../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=style&index=0&id=123322be&scoped=true&lang=scss& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Admin/ClientProject/Types/Trust/MeetingMinutes/index.vue?vue&type=style&index=0&id=123322be&scoped=true&lang=scss&");


/***/ }),

/***/ "./resources/js/pages/Admin/ClientProject/Types/Trust/Documents/Wizard.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************************************************************************!*\
  !*** ./resources/js/pages/Admin/ClientProject/Types/Trust/Documents/Wizard.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Wizard_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Wizard.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Admin/ClientProject/Types/Trust/Documents/Wizard.vue?vue&type=style&index=0&lang=css&");


/***/ }),

/***/ "./resources/js/document_templates/Trust/Beneficiaries.vue?vue&type=template&id=66521590&":
/*!************************************************************************************************!*\
  !*** ./resources/js/document_templates/Trust/Beneficiaries.vue?vue&type=template&id=66521590& ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Beneficiaries_vue_vue_type_template_id_66521590___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Beneficiaries_vue_vue_type_template_id_66521590___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Beneficiaries_vue_vue_type_template_id_66521590___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Beneficiaries.vue?vue&type=template&id=66521590& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/document_templates/Trust/Beneficiaries.vue?vue&type=template&id=66521590&");


/***/ }),

/***/ "./resources/js/document_templates/Trust/index.vue?vue&type=template&id=63ec61bf&":
/*!****************************************************************************************!*\
  !*** ./resources/js/document_templates/Trust/index.vue?vue&type=template&id=63ec61bf& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_63ec61bf___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_63ec61bf___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_63ec61bf___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=template&id=63ec61bf& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/document_templates/Trust/index.vue?vue&type=template&id=63ec61bf&");


/***/ }),

/***/ "./resources/js/pages/Admin/ClientProject/Types/Trust/Documents/Wizard.vue?vue&type=template&id=5ae17059&":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/pages/Admin/ClientProject/Types/Trust/Documents/Wizard.vue?vue&type=template&id=5ae17059& ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Wizard_vue_vue_type_template_id_5ae17059___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Wizard_vue_vue_type_template_id_5ae17059___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Wizard_vue_vue_type_template_id_5ae17059___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Wizard.vue?vue&type=template&id=5ae17059& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Admin/ClientProject/Types/Trust/Documents/Wizard.vue?vue&type=template&id=5ae17059&");


/***/ }),

/***/ "./resources/js/pages/Admin/ClientProject/Types/Trust/Documents/index.vue?vue&type=template&id=1373c9f4&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/pages/Admin/ClientProject/Types/Trust/Documents/index.vue?vue&type=template&id=1373c9f4& ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_1373c9f4___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_1373c9f4___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_1373c9f4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=template&id=1373c9f4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Admin/ClientProject/Types/Trust/Documents/index.vue?vue&type=template&id=1373c9f4&");


/***/ }),

/***/ "./resources/js/pages/Admin/ClientProject/Types/Trust/MeetingMinutes/Wizard.vue?vue&type=template&id=340d30cf&scoped=true&":
/*!*********************************************************************************************************************************!*\
  !*** ./resources/js/pages/Admin/ClientProject/Types/Trust/MeetingMinutes/Wizard.vue?vue&type=template&id=340d30cf&scoped=true& ***!
  \*********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Wizard_vue_vue_type_template_id_340d30cf_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Wizard_vue_vue_type_template_id_340d30cf_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Wizard_vue_vue_type_template_id_340d30cf_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Wizard.vue?vue&type=template&id=340d30cf&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Admin/ClientProject/Types/Trust/MeetingMinutes/Wizard.vue?vue&type=template&id=340d30cf&scoped=true&");


/***/ }),

/***/ "./resources/js/pages/Admin/ClientProject/Types/Trust/MeetingMinutes/index.vue?vue&type=template&id=123322be&scoped=true&":
/*!********************************************************************************************************************************!*\
  !*** ./resources/js/pages/Admin/ClientProject/Types/Trust/MeetingMinutes/index.vue?vue&type=template&id=123322be&scoped=true& ***!
  \********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_123322be_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_123322be_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_123322be_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=template&id=123322be&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Admin/ClientProject/Types/Trust/MeetingMinutes/index.vue?vue&type=template&id=123322be&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/document_templates/Trust/Beneficiaries.vue?vue&type=template&id=66521590&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/document_templates/Trust/Beneficiaries.vue?vue&type=template&id=66521590& ***!
  \***************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "mt-4 mb-10", attrs: { outlined: "" } },
    [
      _c("v-card-title", [_vm._v("Beneficiaries ")]),
      _vm._v(" "),
      _vm.hasUnits
        ? _c("v-card-subtitle", [
            _vm._v(
              "\n    Units Left " +
                _vm._s(_vm.totalUnitsLeft - _vm.newBeneficiary.units) +
                "\n  "
            )
          ])
        : _vm._e(),
      _vm._v(" "),
      _c(
        "v-card-text",
        [
          _c(
            "v-row",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.hasUnits,
                  expression: "hasUnits"
                }
              ]
            },
            [
              _c(
                "v-col",
                { attrs: { cols: "12", sm: "6" } },
                [
                  _c("v-text-field", {
                    attrs: {
                      rules: _vm.rules.name,
                      "error-messages": _vm.errors.name,
                      label: "Beneficiary Name",
                      "append-icon-click": "add"
                    },
                    on: {
                      keyup: [
                        _vm.checkForErrors,
                        function($event) {
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
                          return _vm.add.apply(null, arguments)
                        }
                      ]
                    },
                    model: {
                      value: _vm.newBeneficiary.name,
                      callback: function($$v) {
                        _vm.$set(_vm.newBeneficiary, "name", $$v)
                      },
                      expression: "newBeneficiary.name"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-col",
                { attrs: { cols: "12", sm: "6" } },
                [
                  _c("v-text-field", {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: !!_vm.newBeneficiary.name,
                        expression: "!!newBeneficiary.name"
                      }
                    ],
                    attrs: {
                      "error-messages": _vm.errors.units,
                      label: "Units",
                      type: "number"
                    },
                    on: {
                      keyup: [
                        _vm.checkForErrors,
                        function($event) {
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
                          return _vm.add.apply(null, arguments)
                        }
                      ]
                    },
                    model: {
                      value: _vm.newBeneficiary.units,
                      callback: function($$v) {
                        _vm.$set(_vm.newBeneficiary, "units", $$v)
                      },
                      expression: "newBeneficiary.units"
                    }
                  }),
                  _vm._v(" "),
                  _c("v-slider", {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: !!_vm.newBeneficiary.name,
                        expression: "!!newBeneficiary.name"
                      }
                    ],
                    attrs: {
                      min: "0",
                      disabled: !_vm.hasUnits,
                      max: _vm.totalUnitsLeft,
                      hint:
                        _vm.newBeneficiary.name +
                        " will receive " +
                        _vm.newBeneficiary.units +
                        " Units",
                      "persistent-hint": ""
                    },
                    model: {
                      value: _vm.newBeneficiary.units,
                      callback: function($$v) {
                        _vm.$set(_vm.newBeneficiary, "units", $$v)
                      },
                      expression: "newBeneficiary.units"
                    }
                  })
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _vm.hasUnits
            ? _c(
                "v-row",
                [
                  _c(
                    "v-col",
                    { attrs: { cols: "12", sm: "6", offset: "6" } },
                    [
                      _c(
                        "v-btn",
                        { attrs: { color: "primary" }, on: { click: _vm.add } },
                        [_vm._v("Add Beneficiary")]
                      )
                    ],
                    1
                  )
                ],
                1
              )
            : _vm._e(),
          _vm._v(" "),
          _c(
            "v-list",
            _vm._l(_vm.beneficiaries, function(item, index) {
              return _c(
                "v-list-item",
                { key: index },
                [
                  _c("v-text-field", {
                    attrs: { outlined: "", "single-line": "" },
                    on: {
                      change: function($event) {
                        return _vm.update()
                      }
                    },
                    model: {
                      value: item.name,
                      callback: function($$v) {
                        _vm.$set(item, "name", $$v)
                      },
                      expression: "item.name"
                    }
                  }),
                  _vm._v(" "),
                  _c("v-spacer"),
                  _vm._v(" "),
                  _c("v-text-field", {
                    attrs: {
                      type: "number",
                      min: "0",
                      max: _vm.totalUnitsLeft,
                      label: item.units + " Units"
                    },
                    model: {
                      value: item.units,
                      callback: function($$v) {
                        _vm.$set(item, "units", $$v)
                      },
                      expression: "item.units"
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "v-icon",
                    {
                      attrs: { color: "danger" },
                      on: {
                        click: function($event) {
                          return _vm.remove(index)
                        }
                      }
                    },
                    [_vm._v("mdi-trash-can")]
                  )
                ],
                1
              )
            }),
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



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/document_templates/Trust/index.vue?vue&type=template&id=63ec61bf&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/document_templates/Trust/index.vue?vue&type=template&id=63ec61bf& ***!
  \*******************************************************************************************************************************************************************************************************************************/
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
    "div",
    { staticStyle: { "margin-top": "128px" } },
    [
      _c(
        "v-app-bar",
        { staticStyle: { "margin-top": "128px" }, attrs: { app: "" } },
        [
          _c(
            "v-tabs",
            {
              attrs: {
                "fixed-tabs": "",
                "background-color": "primary lighten-4"
              },
              model: {
                value: _vm.tab,
                callback: function($$v) {
                  _vm.tab = $$v
                },
                expression: "tab"
              }
            },
            [
              _c("v-tab", [_vm._v("\n        Documents\n      ")]),
              _vm._v(" "),
              _c("v-tab", [_vm._v("\n        Meeting Minutes\n      ")])
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-tabs-items",
        {
          model: {
            value: _vm.tab,
            callback: function($$v) {
              _vm.tab = $$v
            },
            expression: "tab"
          }
        },
        [
          _c(
            "v-tab-item",
            { attrs: { value: "documents" } },
            [
              _c("Documents", {
                attrs: { "current-document": _vm.currentDocument }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-tab-item",
            { attrs: { value: "meeting-minutes" } },
            [_c("MeetingMinutes")],
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



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Admin/ClientProject/Types/Trust/Documents/Wizard.vue?vue&type=template&id=5ae17059&":
/*!*******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Admin/ClientProject/Types/Trust/Documents/Wizard.vue?vue&type=template&id=5ae17059& ***!
  \*******************************************************************************************************************************************************************************************************************************************************/
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
    "div",
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
            "div",
            [
              _vm.form.isDirty
                ? _c("v-icon", { attrs: { color: "danger" } }, [
                    _vm._v("mdi-update")
                  ])
                : _c("v-icon", { attrs: { color: "green" } }, [
                    _vm._v("mdi-sticker-check")
                  ])
            ],
            1
          ),
          _vm._v(" "),
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
                [_c("small", [_vm._v("Client")])]
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
                        return !!_vm.form.trust_name
                      }
                    ],
                    step: "2"
                  }
                },
                [_c("small", [_vm._v("Trust")])]
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
                [_c("small", [_vm._v("Trustees")])]
              ),
              _vm._v(" "),
              _c("v-divider"),
              _vm._v(" "),
              _c("v-stepper-step", { attrs: { step: "4", editable: "" } }, [
                _c("small", [_vm._v("Beneficiary")])
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "form",
            {
              on: {
                keyup: function($event) {
                  if (
                    !$event.type.indexOf("key") &&
                    _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
                  ) {
                    return null
                  }
                  return _vm.onEnter.apply(null, arguments)
                }
              }
            },
            [
              _c(
                "v-stepper-items",
                [
                  _c(
                    "v-stepper-content",
                    { attrs: { step: "1" } },
                    [
                      _c(
                        "v-card",
                        { staticClass: "mb-12", attrs: { outlined: "" } },
                        [
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
                                        attrs: { label: "First Trustee" },
                                        model: {
                                          value: _vm.form.trustees.first[0],
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.form.trustees.first,
                                              0,
                                              $$v
                                            )
                                          },
                                          expression: "form.trustees.first[0]"
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
                                  _c(
                                    "v-col",
                                    [
                                      _c("v-text-field", {
                                        attrs: { label: "Mailing Address" },
                                        model: {
                                          value:
                                            _vm.form.mailing_address.address,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.form.mailing_address,
                                              "address",
                                              $$v
                                            )
                                          },
                                          expression:
                                            "form.mailing_address.address"
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
                                  _c(
                                    "v-col",
                                    [
                                      _c("v-text-field", {
                                        attrs: { label: "city" },
                                        model: {
                                          value: _vm.form.mailing_address.city,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.form.mailing_address,
                                              "city",
                                              $$v
                                            )
                                          },
                                          expression:
                                            "form.mailing_address.city"
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
                                        attrs: { label: "state" },
                                        model: {
                                          value: _vm.form.mailing_address.state,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.form.mailing_address,
                                              "state",
                                              $$v
                                            )
                                          },
                                          expression:
                                            "form.mailing_address.state"
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
                                        attrs: { label: "zip" },
                                        model: {
                                          value: _vm.form.mailing_address.zip,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.form.mailing_address,
                                              "zip",
                                              $$v
                                            )
                                          },
                                          expression: "form.mailing_address.zip"
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
                                        attrs: { label: "country" },
                                        model: {
                                          value:
                                            _vm.form.mailing_address.country,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.form.mailing_address,
                                              "country",
                                              $$v
                                            )
                                          },
                                          expression:
                                            "form.mailing_address.country"
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
                      ),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        {
                          attrs: { color: "primary" },
                          on: { click: _vm.nextStep }
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
                        { staticClass: "mb-12", attrs: { outlined: "" } },
                        [
                          _c("v-card-title", [
                            _vm._v("\n              Trust Info\n            ")
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
                                        attrs: { label: "Trust Name" },
                                        model: {
                                          value: _vm.form.trust_name,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.form,
                                              "trust_name",
                                              $$v
                                            )
                                          },
                                          expression: "form.trust_name"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
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
                                                              _vm.form
                                                                .document_created_at,
                                                            clearable: "",
                                                            readonly: ""
                                                          },
                                                          on: {
                                                            click: function(
                                                              $event
                                                            ) {
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
                                            attrs: {
                                              "show-adjacent-months": ""
                                            },
                                            model: {
                                              value:
                                                _vm.form.document_created_at,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.form,
                                                  "document_created_at",
                                                  $$v
                                                )
                                              },
                                              expression:
                                                "form.document_created_at"
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
                              _c(
                                "v-row",
                                [
                                  _c(
                                    "v-col",
                                    [
                                      _c("v-text-field", {
                                        attrs: { label: "Settlor" },
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
                                "v-row",
                                [
                                  _c(
                                    "v-col",
                                    [
                                      _c("v-text-field", {
                                        attrs: { label: "Settlor Gift Type" },
                                        model: {
                                          value: _vm.form.settlor_gift_type,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.form,
                                              "settlor_gift_type",
                                              $$v
                                            )
                                          },
                                          expression: "form.settlor_gift_type"
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
                                          type: "number",
                                          "prepend-icon": "mdi-currency-usd",
                                          label: "Settlor Gift"
                                        },
                                        model: {
                                          value: _vm.form.settlor_gift,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.form,
                                              "settlor_gift",
                                              $$v
                                            )
                                          },
                                          expression: "form.settlor_gift"
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
                                  _c(
                                    "v-col",
                                    [
                                      _c("v-text-field", {
                                        attrs: { label: "Term Of Trust" },
                                        model: {
                                          value: _vm.form.term_of_trust,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.form,
                                              "term_of_trust",
                                              $$v
                                            )
                                          },
                                          expression: "form.term_of_trust"
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
                          _c(
                            "v-container",
                            [
                              _c("h3", [_vm._v("Domicile Address")]),
                              _vm._v(" "),
                              _c(
                                "v-row",
                                [
                                  _c(
                                    "v-col",
                                    [
                                      _c("v-text-field", {
                                        attrs: { label: "address" },
                                        model: {
                                          value:
                                            _vm.form.domicile_address.address,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.form.domicile_address,
                                              "address",
                                              $$v
                                            )
                                          },
                                          expression:
                                            "form.domicile_address.address"
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
                                        attrs: { label: "apartment" },
                                        model: {
                                          value: _vm.form.domicile_address.apt,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.form.domicile_address,
                                              "apt",
                                              $$v
                                            )
                                          },
                                          expression:
                                            "form.domicile_address.apt"
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
                                  _c(
                                    "v-col",
                                    [
                                      _c("v-text-field", {
                                        attrs: { label: "city" },
                                        model: {
                                          value: _vm.form.domicile_address.city,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.form.domicile_address,
                                              "city",
                                              $$v
                                            )
                                          },
                                          expression:
                                            "form.domicile_address.city"
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
                                        attrs: { label: "state" },
                                        model: {
                                          value:
                                            _vm.form.domicile_address.state,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.form.domicile_address,
                                              "state",
                                              $$v
                                            )
                                          },
                                          expression:
                                            "form.domicile_address.state"
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
                                        attrs: { label: "zip" },
                                        model: {
                                          value: _vm.form.domicile_address.zip,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.form.domicile_address,
                                              "zip",
                                              $$v
                                            )
                                          },
                                          expression:
                                            "form.domicile_address.zip"
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
                                        attrs: { label: "country" },
                                        model: {
                                          value:
                                            _vm.form.domicile_address.country,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.form.domicile_address,
                                              "country",
                                              $$v
                                            )
                                          },
                                          expression:
                                            "form.domicile_address.country"
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
                      ),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        {
                          attrs: { color: "primary" },
                          on: { click: _vm.nextStep }
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
                      _c(
                        "v-card",
                        { staticClass: "mb-12", attrs: { outlined: "" } },
                        [
                          _c("v-card-title", [_vm._v("First Trustees")]),
                          _vm._v(" "),
                          _c(
                            "v-card-text",
                            [
                              _vm._l(_vm.form.trustees.first, function(
                                item,
                                index
                              ) {
                                return _c(
                                  "div",
                                  { key: index },
                                  [
                                    _c(
                                      "v-row",
                                      [
                                        _c(
                                          "v-col",
                                          { attrs: { sm: "9" } },
                                          [
                                            _c("v-text-field", {
                                              attrs: {
                                                dense: "",
                                                outlined: "",
                                                "single-line": ""
                                              },
                                              model: {
                                                value:
                                                  _vm.form.trustees.first[
                                                    index
                                                  ],
                                                callback: function($$v) {
                                                  _vm.$set(
                                                    _vm.form.trustees.first,
                                                    index,
                                                    $$v
                                                  )
                                                },
                                                expression:
                                                  "form.trustees.first[index]"
                                              }
                                            })
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "v-col",
                                          { attrs: { sm: "3" } },
                                          [
                                            index !== 0
                                              ? _c(
                                                  "v-icon",
                                                  {
                                                    on: {
                                                      click: function($event) {
                                                        return _vm.form.trustees.first.splice(
                                                          index,
                                                          1
                                                        )
                                                      }
                                                    }
                                                  },
                                                  [_vm._v("mdi-trash-can")]
                                                )
                                              : _vm._e()
                                          ],
                                          1
                                        )
                                      ],
                                      1
                                    )
                                  ],
                                  1
                                )
                              }),
                              _vm._v(" "),
                              _c(
                                "v-icon",
                                {
                                  on: {
                                    click: function($event) {
                                      return _vm.form.trustees.first.push("")
                                    }
                                  }
                                },
                                [_vm._v("mdi-plus")]
                              )
                            ],
                            2
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-card",
                        { staticClass: "mb-12", attrs: { outlined: "" } },
                        [
                          _c("v-card-title", [_vm._v("Second Trustees")]),
                          _vm._v(" "),
                          _c(
                            "v-card-text",
                            [
                              _vm._l(_vm.form.trustees.second, function(
                                item,
                                index
                              ) {
                                return _c(
                                  "v-row",
                                  { key: index },
                                  [
                                    _c(
                                      "v-col",
                                      [
                                        _c("v-text-field", {
                                          attrs: {
                                            outlined: "",
                                            "single-line": ""
                                          },
                                          model: {
                                            value:
                                              _vm.form.trustees.second[index],
                                            callback: function($$v) {
                                              _vm.$set(
                                                _vm.form.trustees.second,
                                                index,
                                                $$v
                                              )
                                            },
                                            expression:
                                              "form.trustees.second[index]"
                                          }
                                        })
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "v-col",
                                      [
                                        _c(
                                          "v-icon",
                                          {
                                            on: {
                                              click: function($event) {
                                                return _vm.form.trustees.second.splice(
                                                  index,
                                                  1
                                                )
                                              }
                                            }
                                          },
                                          [_vm._v("mdi-trash-can")]
                                        )
                                      ],
                                      1
                                    )
                                  ],
                                  1
                                )
                              }),
                              _vm._v(" "),
                              _c(
                                "v-icon",
                                {
                                  on: {
                                    click: function($event) {
                                      return _vm.form.trustees.second.push("")
                                    }
                                  }
                                },
                                [_vm._v("mdi-plus")]
                              )
                            ],
                            2
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        {
                          attrs: { color: "primary" },
                          on: { click: _vm.nextStep }
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
                      _c("Beneficiaries", {
                        attrs: { beneficiaries: _vm.form.beneficiaries },
                        on: {
                          add: _vm.onAddBeneficiary,
                          update: _vm.onUpdateBeneficiary,
                          remove: _vm.onDeleteBeneficiary
                        }
                      }),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        {
                          attrs: { color: "primary" },
                          on: { click: _vm.nextStep }
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
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Admin/ClientProject/Types/Trust/Documents/index.vue?vue&type=template&id=1373c9f4&":
/*!******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Admin/ClientProject/Types/Trust/Documents/index.vue?vue&type=template&id=1373c9f4& ***!
  \******************************************************************************************************************************************************************************************************************************************************/
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
                      _c("Wizard", {
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



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Admin/ClientProject/Types/Trust/MeetingMinutes/Wizard.vue?vue&type=template&id=340d30cf&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Admin/ClientProject/Types/Trust/MeetingMinutes/Wizard.vue?vue&type=template&id=340d30cf&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", [_vm._v("\n  " + _vm._s(_vm.meeting_minute) + "\n")])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Admin/ClientProject/Types/Trust/MeetingMinutes/index.vue?vue&type=template&id=123322be&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Admin/ClientProject/Types/Trust/MeetingMinutes/index.vue?vue&type=template&id=123322be&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************/
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
    "div",
    { attrs: { id: "meeting-minutes" } },
    [
      _c(
        "v-container",
        { attrs: { fluid: "" } },
        [
          _c(
            "v-row",
            [
              _c(
                "v-col",
                { attrs: { sm: "4" } },
                [
                  _c(
                    "v-container",
                    { attrs: { fluid: "" } },
                    [
                      _c(
                        "v-toolbar",
                        { attrs: { flat: "", color: "#f1f1f1" } },
                        [
                          _c("v-autocomplete", {
                            attrs: {
                              items: _vm.meetingMinutes,
                              "hide-details": "",
                              label: "Meeting Number",
                              "item-value": function(item) {
                                return item
                              },
                              "item-text": function(item) {
                                return item.meeting_number
                                  .toString()
                                  .padStart(3, "0")
                              }
                            },
                            on: { change: _vm.setSelectedMinute },
                            scopedSlots: _vm._u([
                              {
                                key: "label",
                                fn: function(ref) {
                                  var item = ref.item
                                  return [_c("span", [_vm._v("item")])]
                                }
                              }
                            ]),
                            model: {
                              value: _vm.selectedMinute,
                              callback: function($$v) {
                                _vm.selectedMinute = $$v
                              },
                              expression: "selectedMinute"
                            }
                          }),
                          _vm._v(" "),
                          _c("v-spacer"),
                          _vm._v(" "),
                          _c(
                            "v-dialog",
                            {
                              attrs: { "max-width": "500px" },
                              scopedSlots: _vm._u([
                                {
                                  key: "activator",
                                  fn: function(ref) {
                                    var on = ref.on
                                    var attrs = ref.attrs
                                    return [
                                      _c(
                                        "v-btn",
                                        _vm._g(
                                          _vm._b(
                                            { attrs: { icon: "" } },
                                            "v-btn",
                                            attrs,
                                            false
                                          ),
                                          on
                                        ),
                                        [_c("v-icon", [_vm._v("mdi-plus")])],
                                        1
                                      )
                                    ]
                                  }
                                }
                              ]),
                              model: {
                                value: _vm.dialog,
                                callback: function($$v) {
                                  _vm.dialog = $$v
                                },
                                expression: "dialog"
                              }
                            },
                            [
                              _vm._v(" "),
                              _c(
                                "v-card",
                                [
                                  _c("v-card-title", [_vm._v("Add Minute")]),
                                  _vm._v(" "),
                                  _c(
                                    "v-card-text",
                                    [
                                      _c("v-text-field", {
                                        attrs: {
                                          value: _vm.nextNumber,
                                          disabled: "",
                                          label: "Meeting Number",
                                          required: ""
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c(
                                        "v-menu",
                                        {
                                          ref: "menu",
                                          attrs: {
                                            "close-on-content-click": false,
                                            "return-value": _vm.form.date,
                                            transition: "scale-transition",
                                            "offset-y": "",
                                            "min-width": "auto"
                                          },
                                          on: {
                                            "update:returnValue": function(
                                              $event
                                            ) {
                                              return _vm.$set(
                                                _vm.form,
                                                "date",
                                                $event
                                              )
                                            },
                                            "update:return-value": function(
                                              $event
                                            ) {
                                              return _vm.$set(
                                                _vm.form,
                                                "date",
                                                $event
                                              )
                                            }
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
                                                            "prepend-icon":
                                                              "mdi-calendar",
                                                            readonly: ""
                                                          },
                                                          model: {
                                                            value:
                                                              _vm.form.date,
                                                            callback: function(
                                                              $$v
                                                            ) {
                                                              _vm.$set(
                                                                _vm.form,
                                                                "date",
                                                                $$v
                                                              )
                                                            },
                                                            expression:
                                                              "form.date"
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
                                            value: _vm.menu_date,
                                            callback: function($$v) {
                                              _vm.menu_date = $$v
                                            },
                                            expression: "menu_date"
                                          }
                                        },
                                        [
                                          _vm._v(" "),
                                          _c(
                                            "v-date-picker",
                                            {
                                              attrs: {
                                                "no-title": "",
                                                scrollable: ""
                                              },
                                              model: {
                                                value: _vm.form.date,
                                                callback: function($$v) {
                                                  _vm.$set(
                                                    _vm.form,
                                                    "date",
                                                    $$v
                                                  )
                                                },
                                                expression: "form.date"
                                              }
                                            },
                                            [
                                              _c("v-spacer"),
                                              _vm._v(" "),
                                              _c(
                                                "v-btn",
                                                {
                                                  attrs: {
                                                    text: "",
                                                    color: "primary"
                                                  },
                                                  on: {
                                                    click: function($event) {
                                                      _vm.menu_date = false
                                                    }
                                                  }
                                                },
                                                [
                                                  _vm._v(
                                                    "\n                        Cancel\n                      "
                                                  )
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "v-btn",
                                                {
                                                  attrs: {
                                                    text: "",
                                                    color: "primary"
                                                  },
                                                  on: {
                                                    click: function($event) {
                                                      return _vm.$refs.menu.save(
                                                        _vm.form.date
                                                      )
                                                    }
                                                  }
                                                },
                                                [
                                                  _vm._v(
                                                    "\n                        OK\n                      "
                                                  )
                                                ]
                                              )
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
                                  _c(
                                    "v-card-actions",
                                    [
                                      _c("v-spacer"),
                                      _vm._v(" "),
                                      _c(
                                        "v-btn",
                                        {
                                          attrs: { color: "blue", text: "" },
                                          on: {
                                            click: function($event) {
                                              _vm.dialog = false
                                            }
                                          }
                                        },
                                        [_vm._v("Cancel")]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-btn",
                                        {
                                          attrs: { color: "blue", text: "" },
                                          on: { click: _vm.addMinute }
                                        },
                                        [_vm._v("Add")]
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
                      ),
                      _vm._v(" "),
                      _c(
                        "v-sheet",
                        [
                          _c(
                            "v-card",
                            [
                              _c("v-subheader", [_vm._v("Meeting Minutes")]),
                              _vm._v(" "),
                              _c("v-card-text", [
                                _vm.selectedMinute
                                  ? _c(
                                      "div",
                                      [
                                        _c("Wizard", {
                                          attrs: {
                                            meeting_minute: _vm.selectedMinute
                                          }
                                        })
                                      ],
                                      1
                                    )
                                  : _vm._e()
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
              ),
              _vm._v(" "),
              _c(
                "v-col",
                { staticStyle: { overflow: "scroll" }, attrs: { sm: "8" } },
                [
                  _vm.selectedMinute
                    ? _c(
                        "div",
                        [
                          _c("DocumentViewer", {
                            attrs: { content: _vm.content }
                          })
                        ],
                        1
                      )
                    : _vm._e()
                ]
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