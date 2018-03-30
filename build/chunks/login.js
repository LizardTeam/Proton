require("source-map-support").install();
exports.ids = ["login"];
exports.modules = {

/***/ "./node_modules/css-loader/index.js??ref--5-rules-2!./node_modules/postcss-loader/lib/index.js??ref--5-rules-3!./src/routes/login/Login.css":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("./node_modules/css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: 'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1000px;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n}\nbody {\n  font-family: Roboto,-apple-system,system-ui,BlinkMacSystemFont,Segoe UI,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,Arial,sans-serif;\n  line-height: 1.5;\n  font-size: 14px;\n  padding: 0;\n  margin: 0;\n}\n.Login-heading-1p_R7 {\n  font-weight: 7;\n}\n.Login-subheading-3wCKn {\n  font-weight: 3;\n}\nh1,h2,h3,h4,h5,h6{\n  font-weight: 3;\n\n}\n.Login-root-3Vk6J {\n  padding:0;\n}\n.Login-container-2IZbL {\n  margin: 0 auto;\n  padding: 0;\n  width: 100%;\n  height: 100vh;\n  display: -ms-flexbox;\n  display: flex;\n}\n.Login-lead-25ZSA {\n  font-size: 1.25em;\n}\n.Login-wrapper-2hE0R {\n  width:100%;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: justify;\n      justify-content: space-between;\n}\n.Login-formGroup-uHfQ- {\n   margin-bottom: 15px;\n}\n.Login-label-Mf2-c {\n  display: block;\n  font-weight: 300;\n  color: #343a40;\n  margin-bottom: 0.5em;\n}\n.Login-input-HfRjv {\n  display: block;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  margin: 5px 0 0;\n  padding: 10px 16px;\n  width: 100%;\n  height: 46px;\n  color: #495057;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid #ced4da;\n  border-radius: 0.25em;\n  font-size: 18px;\n  line-height: 1.3333333;\n  -webkit-transition: border-color ease-in-out 0.15s, -webkit-box-shadow ease-in-out 0.15s;\n  transition: border-color ease-in-out 0.15s, -webkit-box-shadow ease-in-out 0.15s;\n  -o-transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;\n  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;\n  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s, -webkit-box-shadow ease-in-out 0.15s;\n  font: 400 13.3333px Arial;\n\n}\n.Login-input-HfRjv:focus {\n  color: #495057;\n  background-color: #fff;\n  border-color: #9acffa;\n  outline: none;\n  -webkit-box-shadow: 0 0 0 0.2rem rgba(33,150,243,0.25);\n  box-shadow: 0 0 0 0.2rem rgba(33,150,243,0.25);\n}\n.Login-button-2JhAE {\n  display: block;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  margin: 0;\n  padding: 10px 16px;\n  width: 100%;\n  outline: 0;\n  border: 1px solid #373277;\n  border-radius: 0;\n  background: #373277;\n  color: #fff;\n  text-align: center;\n  text-decoration: none;\n  font-size: 18px;\n  line-height: 1.3333333;\n  cursor: pointer;\n}\n.Login-button-2JhAE:hover {\n  background: rgba(54, 50, 119, 0.8);\n}\n.Login-button-2JhAE:focus {\n  border-color: #0074c2;\n  -webkit-box-shadow: 0 0 8px rgba(0, 116, 194, 0.6);\n          box-shadow: 0 0 8px rgba(0, 116, 194, 0.6);\n}\n.Login-facebook-QGMxt {\n  border-color: #3b5998;\n  background: #3b5998;\n}\n.Login-facebook-QGMxt:hover {\n  background: #2d4373;\n}\n.Login-microsoft-BQbKQ {\n  font-weight: 3;\n  border:1px solid #ffb900;\n  background: #ffb900;\n}\n.Login-microsoft-BQbKQ:hover {\n  background: #e5a800;\n}\n.Login-google-17cIx {\n  border-color: #dd4b39;\n  background: #dd4b39;\n}\n.Login-google-17cIx:hover {\n  background: #c23321;\n}\n.Login-twitter-21gEV {\n  border-color: #55acee;\n  background: #55acee;\n}\n.Login-twitter-21gEV:hover {\n  background: #2795e9;\n}\n.Login-icon-2Dc1q {\n  display: inline-block;\n  margin: 5px;\n  width: 20px;\n  height: 20px;\n  vertical-align: middle;\n  fill: currentColor;\n}\n.Login-lineThrough-2wlls {\n  position: relative;\n  z-index: 1;\n  display: block;\n  margin-bottom: 15px;\n  width: 100%;\n  color: #757575;\n  text-align: center;\n  font-size: 80%;\n}\n.Login-lineThrough-2wlls::before {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  z-index: -1;\n  margin-top: -5px;\n  margin-left: -20px;\n  width: 40px;\n  height: 10px;\n  background-color: #fff;\n  content: '';\n}\n.Login-lineThrough-2wlls::after {\n  position: absolute;\n  top: 49%;\n  z-index: -2;\n  display: block;\n  width: 100%;\n  border-bottom: 1px solid #ddd;\n  content: '';\n}\n.Login-loginBlock--yXao {\n  padding: 60px 40px;\n  min-width: 300px;\n  margin-left: auto;\n}\n.Login-promo-2HSxJ {\n  width: 100%;\n  background-image: url(" + escape(__webpack_require__("./src/routes/login/bg.jpg")) + ");\n  background-repeat: none;\n  background-position: center;\n  background-size: cover;\n  position: relative;\n}\n.Login-promoText-G4V4m {\n  color:white;\n  font-weight: 400;\n  font-size: 3.3em;\n  text-align: center;\n  margin:0 auto;\n  margin-top:10%;\n}\n.Login-logo-BBzbG {\n  width: 120px;\n  height: 120px;\n  background: #fff;\n  border-radius: 50%;\n  border: 3px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%,-50%);\n      -ms-transform: translate(-50%,-50%);\n          transform: translate(-50%,-50%);\n}\n.Login-logo-BBzbG svg {\n  margin: 50%;\n  -webkit-transform: translate(-50%,-50%);\n      -ms-transform: translate(-50%,-50%);\n          transform: translate(-50%,-50%);\n}\n", "", {"version":3,"sources":["/Users/rostyslav/Downloads/Proton/src/routes/login/Login.css"],"names":[],"mappings":"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","file":"Login.css","sourcesContent":["/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: 'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1000px;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n}\nbody {\n  font-family: Roboto,-apple-system,system-ui,BlinkMacSystemFont,Segoe UI,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,Arial,sans-serif;\n  line-height: 1.5;\n  font-size: 14px;\n  padding: 0;\n  margin: 0;\n}\n.heading {\n  font-weight: 7;\n}\n.subheading {\n  font-weight: 3;\n}\nh1,h2,h3,h4,h5,h6{\n  font-weight: 3;\n\n}\n.root {\n  padding:0;\n}\n.container {\n  margin: 0 auto;\n  padding: 0;\n  width: 100%;\n  height: 100vh;\n  display: -ms-flexbox;\n  display: flex;\n}\n.lead {\n  font-size: 1.25em;\n}\n.wrapper {\n  width:100%;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: justify;\n      justify-content: space-between;\n}\n.formGroup {\n   margin-bottom: 15px;\n}\n.label {\n  display: block;\n  font-weight: 300;\n  color: #343a40;\n  margin-bottom: 0.5em;\n}\n.input {\n  display: block;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  margin: 5px 0 0;\n  padding: 10px 16px;\n  width: 100%;\n  height: 46px;\n  color: #495057;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid #ced4da;\n  border-radius: 0.25em;\n  font-size: 18px;\n  line-height: 1.3333333;\n  -webkit-transition: border-color ease-in-out 0.15s, -webkit-box-shadow ease-in-out 0.15s;\n  transition: border-color ease-in-out 0.15s, -webkit-box-shadow ease-in-out 0.15s;\n  -o-transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;\n  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;\n  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s, -webkit-box-shadow ease-in-out 0.15s;\n  font: 400 13.3333px Arial;\n\n}\n.input:focus {\n  color: #495057;\n  background-color: #fff;\n  border-color: #9acffa;\n  outline: none;\n  -webkit-box-shadow: 0 0 0 0.2rem rgba(33,150,243,0.25);\n  box-shadow: 0 0 0 0.2rem rgba(33,150,243,0.25);\n}\n.button {\n  display: block;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  margin: 0;\n  padding: 10px 16px;\n  width: 100%;\n  outline: 0;\n  border: 1px solid #373277;\n  border-radius: 0;\n  background: #373277;\n  color: #fff;\n  text-align: center;\n  text-decoration: none;\n  font-size: 18px;\n  line-height: 1.3333333;\n  cursor: pointer;\n}\n.button:hover {\n  background: rgba(54, 50, 119, 0.8);\n}\n.button:focus {\n  border-color: #0074c2;\n  -webkit-box-shadow: 0 0 8px rgba(0, 116, 194, 0.6);\n          box-shadow: 0 0 8px rgba(0, 116, 194, 0.6);\n}\n.facebook {\n  border-color: #3b5998;\n  background: #3b5998;\n  composes: button;\n}\n.facebook:hover {\n  background: #2d4373;\n}\n.microsoft {\n  font-weight: 3;\n  border:1px solid #ffb900;\n  background: #ffb900;\n  composes: button;\n}\n.microsoft:hover {\n  background: #e5a800;\n}\n.google {\n  border-color: #dd4b39;\n  background: #dd4b39;\n  composes: button;\n}\n.google:hover {\n  background: #c23321;\n}\n.twitter {\n  border-color: #55acee;\n  background: #55acee;\n  composes: button;\n}\n.twitter:hover {\n  background: #2795e9;\n}\n.icon {\n  display: inline-block;\n  margin: 5px;\n  width: 20px;\n  height: 20px;\n  vertical-align: middle;\n  fill: currentColor;\n}\n.lineThrough {\n  position: relative;\n  z-index: 1;\n  display: block;\n  margin-bottom: 15px;\n  width: 100%;\n  color: #757575;\n  text-align: center;\n  font-size: 80%;\n}\n.lineThrough::before {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  z-index: -1;\n  margin-top: -5px;\n  margin-left: -20px;\n  width: 40px;\n  height: 10px;\n  background-color: #fff;\n  content: '';\n}\n.lineThrough::after {\n  position: absolute;\n  top: 49%;\n  z-index: -2;\n  display: block;\n  width: 100%;\n  border-bottom: 1px solid #ddd;\n  content: '';\n}\n.loginBlock {\n  padding: 60px 40px;\n  min-width: 300px;\n  margin-left: auto;\n}\n.promo {\n  width: 100%;\n  background-image: url('./bg.jpg');\n  background-repeat: none;\n  background-position: center;\n  background-size: cover;\n  position: relative;\n}\n.promoText {\n  color:white;\n  font-weight: 400;\n  font-size: 3.3em;\n  text-align: center;\n  margin:0 auto;\n  margin-top:10%;\n}\n.logo {\n  width: 120px;\n  height: 120px;\n  background: #fff;\n  border-radius: 50%;\n  border: 3px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%,-50%);\n      -ms-transform: translate(-50%,-50%);\n          transform: translate(-50%,-50%);\n}\n.logo svg {\n  margin: 50%;\n  -webkit-transform: translate(-50%,-50%);\n      -ms-transform: translate(-50%,-50%);\n          transform: translate(-50%,-50%);\n}\n"],"sourceRoot":""}]);

// exports
exports.locals = {
	"heading": "Login-heading-1p_R7",
	"subheading": "Login-subheading-3wCKn",
	"root": "Login-root-3Vk6J",
	"container": "Login-container-2IZbL",
	"lead": "Login-lead-25ZSA",
	"wrapper": "Login-wrapper-2hE0R",
	"formGroup": "Login-formGroup-uHfQ-",
	"label": "Login-label-Mf2-c",
	"input": "Login-input-HfRjv",
	"button": "Login-button-2JhAE",
	"facebook": "Login-facebook-QGMxt Login-button-2JhAE",
	"microsoft": "Login-microsoft-BQbKQ Login-button-2JhAE",
	"google": "Login-google-17cIx Login-button-2JhAE",
	"twitter": "Login-twitter-21gEV Login-button-2JhAE",
	"icon": "Login-icon-2Dc1q",
	"lineThrough": "Login-lineThrough-2wlls",
	"loginBlock": "Login-loginBlock--yXao",
	"promo": "Login-promo-2HSxJ",
	"promoText": "Login-promoText-G4V4m",
	"logo": "Login-logo-BBzbG"
};

/***/ }),

/***/ "./node_modules/css-loader/lib/url/escape.js":
/***/ (function(module, exports) {

module.exports = function escape(url) {
    if (typeof url !== 'string') {
        return url
    }
    // If url is already wrapped in quotes, remove them
    if (/^['"].*['"]$/.test(url)) {
        url = url.slice(1, -1);
    }
    // Should url be wrapped?
    // See https://drafts.csswg.org/css-values-3/#urls
    if (/["'() \t\n]/.test(url)) {
        return '"' + url.replace(/"/g, '\\"').replace(/\n/g, '\\n') + '"'
    }

    return url
}


/***/ }),

/***/ "./src/routes/login/Login.css":
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__("./node_modules/css-loader/index.js??ref--5-rules-2!./node_modules/postcss-loader/lib/index.js??ref--5-rules-3!./src/routes/login/Login.css");
    var insertCss = __webpack_require__("./node_modules/isomorphic-style-loader/lib/insertCss.js");

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (module.hot && typeof window !== 'undefined' && window.document) {
      var removeCss = function() {};
      module.hot.accept("./node_modules/css-loader/index.js??ref--5-rules-2!./node_modules/postcss-loader/lib/index.js??ref--5-rules-3!./src/routes/login/Login.css", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { (function() {
        content = __webpack_require__("./node_modules/css-loader/index.js??ref--5-rules-2!./node_modules/postcss-loader/lib/index.js??ref--5-rules-3!./src/routes/login/Login.css");

        if (typeof content === 'string') {
          content = [[module.i, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),

/***/ "./src/routes/login/Login.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("isomorphic-style-loader/lib/withStyles");
/* harmony import */ var isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Login_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/routes/login/Login.css");
/* harmony import */ var _Login_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Login_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _bg_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/routes/login/bg.jpg");
/* harmony import */ var _bg_jpg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_bg_jpg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _microsoftLogin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/routes/login/microsoftLogin.js");
var _jsxFileName = "/Users/rostyslav/Downloads/Proton/src/routes/login/Login.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */







var Login =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Login, _React$Component);

  function Login() {
    _classCallCheck(this, Login);

    return _possibleConstructorReturn(this, (Login.__proto__ || Object.getPrototypeOf(Login)).apply(this, arguments));
  }

  _createClass(Login, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _Login_css__WEBPACK_IMPORTED_MODULE_3___default.a.root,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _Login_css__WEBPACK_IMPORTED_MODULE_3___default.a.container,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _Login_css__WEBPACK_IMPORTED_MODULE_3___default.a.promo,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: _Login_css__WEBPACK_IMPORTED_MODULE_3___default.a.promoText,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, "Welcome to [NAME]!"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _Login_css__WEBPACK_IMPORTED_MODULE_3___default.a.logo,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        id: "Capa_1",
        x: "0px",
        y: "0px",
        viewBox: "0 0 27.793 27.793",
        width: "90px",
        height: "90px",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
        id: "c1_ray",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("polygon", {
        points: "20.972,0 5.076,15.803 10.972,15.803 6.44,27.793 22.716,11.989 16.819,11.989   ",
        fill: "#7FC2E5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
        id: "Capa_1_29_",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _Login_css__WEBPACK_IMPORTED_MODULE_3___default.a.loginBlock,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, this.props.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
        method: "post",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _Login_css__WEBPACK_IMPORTED_MODULE_3___default.a.formGroup,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: _Login_css__WEBPACK_IMPORTED_MODULE_3___default.a.label,
        htmlFor: "usernameOrEmail",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, "Username or email address:", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        className: _Login_css__WEBPACK_IMPORTED_MODULE_3___default.a.input,
        id: "usernameOrEmail",
        type: "text",
        name: "usernameOrEmail",
        placeholder: "John Doe",
        autoFocus: true // eslint-disable-line jsx-a11y/no-autofocus
        ,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _Login_css__WEBPACK_IMPORTED_MODULE_3___default.a.formGroup,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: _Login_css__WEBPACK_IMPORTED_MODULE_3___default.a.label,
        htmlFor: "password",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, "Password:", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        className: _Login_css__WEBPACK_IMPORTED_MODULE_3___default.a.input,
        id: "password",
        type: "password",
        name: "password",
        placeholder: "Password",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _Login_css__WEBPACK_IMPORTED_MODULE_3___default.a.formGroup,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: _Login_css__WEBPACK_IMPORTED_MODULE_3___default.a.button,
        type: "submit",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, "Log in"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
        className: _Login_css__WEBPACK_IMPORTED_MODULE_3___default.a.lineThrough,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }, "OR"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _Login_css__WEBPACK_IMPORTED_MODULE_3___default.a.wrapper,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _Login_css__WEBPACK_IMPORTED_MODULE_3___default.a.formGroup,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: _Login_css__WEBPACK_IMPORTED_MODULE_3___default.a.facebook,
        href: "/login/facebook",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        className: _Login_css__WEBPACK_IMPORTED_MODULE_3___default.a.icon,
        width: "30",
        height: "30",
        viewBox: "0 0 30 30",
        xmlns: "http://www.w3.org/2000/svg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
        d: "M22 16l1-5h-5V7c0-1.544.784-2 3-2h2V0h-4c-4.072 0-7 2.435-7 7v4H7v5h5v14h6V16h4z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _Login_css__WEBPACK_IMPORTED_MODULE_3___default.a.formGroup,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_microsoftLogin__WEBPACK_IMPORTED_MODULE_5__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _Login_css__WEBPACK_IMPORTED_MODULE_3___default.a.formGroup,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: _Login_css__WEBPACK_IMPORTED_MODULE_3___default.a.google,
        href: "/login/google",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        className: _Login_css__WEBPACK_IMPORTED_MODULE_3___default.a.icon,
        width: "30",
        height: "30",
        viewBox: "0 0 30 30",
        xmlns: "http://www.w3.org/2000/svg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
        d: 'M30 13h-4V9h-2v4h-4v2h4v4h2v-4h4m-15 2s-2-1.15-2-2c0 0-.5-1.828 1-3 ' + '1.537-1.2 3-3.035 3-5 0-2.336-1.046-5-3-6h3l2.387-1H10C5.835 0 2 3.345 2 7c0 ' + '3.735 2.85 6.56 7.086 6.56.295 0 .58-.006.86-.025-.273.526-.47 1.12-.47 1.735 ' + '0 1.037.817 2.042 1.523 2.73H9c-5.16 0-9 2.593-9 6 0 3.355 4.87 6 10.03 6 5.882 ' + '0 9.97-3 9.97-7 0-2.69-2.545-4.264-5-6zm-4-4c-2.395 0-5.587-2.857-6-6C4.587 ' + '3.856 6.607.93 9 1c2.394.07 4.603 2.908 5.017 6.052C14.43 10.195 13 13 11 ' + '13zm-1 15c-3.566 0-7-1.29-7-4 0-2.658 3.434-5.038 7-5 .832.01 2 0 2 0 1 0 ' + '2.88.88 4 2 1 1 1 2.674 1 3 0 3-1.986 4-7 4z',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _Login_css__WEBPACK_IMPORTED_MODULE_3___default.a.formGroup,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: _Login_css__WEBPACK_IMPORTED_MODULE_3___default.a.twitter,
        href: "/login/twitter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        className: _Login_css__WEBPACK_IMPORTED_MODULE_3___default.a.icon,
        width: "30",
        height: "30",
        viewBox: "0 0 30 30",
        xmlns: "http://www.w3.org/2000/svg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
        d: 'M30 6.708c-1.105.49-2.756 1.143-4 1.292 1.273-.762 2.54-2.56 ' + '3-4-.97.577-2.087 1.355-3.227 1.773L25 5c-1.12-1.197-2.23-2-4-2-3.398 0-6 ' + '2.602-6 6 0 .4.047.7.11.956L15 10C9 10 5.034 8.724 2 5c-.53.908-1 1.872-1 ' + '3 0 2.136 1.348 3.894 3 5-1.01-.033-2.17-.542-3-1 0 2.98 4.186 6.432 7 7-1 ' + '1-4.623.074-5 0 .784 2.447 3.31 3.95 6 4-2.105 1.648-4.647 2.51-7.53 2.51-.5 ' + '0-.988-.03-1.47-.084C2.723 27.17 6.523 28 10 28c11.322 0 17-8.867 17-17 ' + '0-.268.008-.736 0-1 1.2-.868 2.172-2.058 3-3.292z',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        },
        __self: this
      }))))))));
    }
  }]);

  return Login;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

Object.defineProperty(Login, "propTypes", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
  }
});
/* harmony default export */ __webpack_exports__["default"] = (isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_2___default()(_Login_css__WEBPACK_IMPORTED_MODULE_3___default.a)(Login));

/***/ }),

/***/ "./src/routes/login/bg.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/routes/login/bg.jpg?b74643cb";

/***/ }),

/***/ "./src/routes/login/bg.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/routes/login/bg.jpg?b74643cb";

/***/ }),

/***/ "./src/routes/login/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/components/Layout/Layout.js");
/* harmony import */ var _Login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/routes/login/Login.js");
var _jsxFileName = "/Users/rostyslav/Downloads/Proton/src/routes/login/index.js";

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */



var title = 'Log in';

function action() {
  return {
    chunks: ['login'],
    title: title,
    component: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Login__WEBPACK_IMPORTED_MODULE_2__["default"], {
      title: title,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    })
  };
}

/* harmony default export */ __webpack_exports__["default"] = (action);

/***/ }),

/***/ "./src/routes/login/microsoftLogin.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_ms_login__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("react-ms-login");
/* harmony import */ var react_ms_login__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_ms_login__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Login_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/routes/login/Login.css");
/* harmony import */ var _Login_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Login_css__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/rostyslav/Downloads/Proton/src/routes/login/microsoftLogin.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var App =
/*#__PURE__*/
function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
  }

  _createClass(App, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "App",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_ms_login__WEBPACK_IMPORTED_MODULE_1___default.a, {
        clientId: "d3df4603-8e0b-4a6f-bfe2-06257845210f" // required: 'application id/client id' obtained from https://apps.dev.microsoft.com for your app
        ,
        redirectUri: "http://localhost:3000/afterlogin" // required: redirectUri registered in https://apps.dev.microsoft.com for your app
        ,
        scopes: ['user.read'] // optional: defaults to "user.read" full list is present https://developer.microsoft.com/en-us/graph/docs/concepts/permissions_reference
        ,
        responseType: "token" // optional: valid values are "token" for `Implicite OAuth flow` and "code" for `Authorization Code flow` defaults to "token"
        ,
        cssClass: _Login_css__WEBPACK_IMPORTED_MODULE_2___default.a.microsoft // optional: space separated class names which are applied on the html Button element
        ,
        btnContent: ButtonContent // optional: can be string or a valid react component which can be rendered inside html Button element
        ,
        handleLogin: function handleLogin(data) {
          return console.log(data);
        } // required: callback to receive token/code after successful login
        ,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        __self: this
      }));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var ButtonContent =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ButtonContent, _React$Component);

  function ButtonContent() {
    _classCallCheck(this, ButtonContent);

    return _possibleConstructorReturn(this, (ButtonContent.__proto__ || Object.getPrototypeOf(ButtonContent)).apply(this, arguments));
  }

  _createClass(ButtonContent, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        className: _Login_css__WEBPACK_IMPORTED_MODULE_2___default.a.icon,
        width: "20",
        height: "30",
        viewBox: "0 0 256 257",
        xmlns: "http://www.w3.org/2000/svg",
        preserveAspectRatio: "xMidYMid",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
        d: "M0 36.357L104.62 22.11l.045 100.914-104.57.595L0 36.358zm104.57 98.293l.08 101.002L.081 221.275l-.006-87.302 104.494.677zm12.682-114.405L255.968 0v121.74l-138.716 1.1V20.246zM256 135.6l-.033 121.191-138.716-19.578-.194-101.84L256 135.6z",
        fill: "#ffffff",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      })));
    }
  }]);

  return ButtonContent;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2h1bmtzL2xvZ2luLmpzIiwic291cmNlcyI6WyIvVXNlcnMvcm9zdHlzbGF2L0Rvd25sb2Fkcy9Qcm90b24vc3JjL3JvdXRlcy9sb2dpbi9Mb2dpbi5jc3MiLCIvVXNlcnMvcm9zdHlzbGF2L0Rvd25sb2Fkcy9Qcm90b24vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL3VybC9lc2NhcGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JvdXRlcy9sb2dpbi9Mb2dpbi5jc3M/YmY3NSIsIi9Vc2Vycy9yb3N0eXNsYXYvRG93bmxvYWRzL1Byb3Rvbi9zcmMvcm91dGVzL2xvZ2luL0xvZ2luLmpzIiwiL1VzZXJzL3Jvc3R5c2xhdi9Eb3dubG9hZHMvUHJvdG9uL3NyYy9yb3V0ZXMvbG9naW4vYmcuanBnIiwid2VicGFjazovLy8uL3NyYy9yb3V0ZXMvbG9naW4vYmcuanBnP2E3NTgiLCIvVXNlcnMvcm9zdHlzbGF2L0Rvd25sb2Fkcy9Qcm90b24vc3JjL3JvdXRlcy9sb2dpbi9pbmRleC5qcyIsIi9Vc2Vycy9yb3N0eXNsYXYvRG93bmxvYWRzL1Byb3Rvbi9zcmMvcm91dGVzL2xvZ2luL21pY3Jvc29mdExvZ2luLmpzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBlc2NhcGUgPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL3VybC9lc2NhcGUuanNcIik7XG5leHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHRydWUpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLyoqXFxuICogUmVhY3QgU3RhcnRlciBLaXQgKGh0dHBzOi8vd3d3LnJlYWN0c3RhcnRlcmtpdC5jb20vKVxcbiAqXFxuICogQ29weXJpZ2h0IMKpIDIwMTQtcHJlc2VudCBLcmlhc29mdCwgTExDLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxcbiAqXFxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXFxuICogTElDRU5TRS50eHQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cXG4gKi9cXG4vKipcXG4gKiBSZWFjdCBTdGFydGVyIEtpdCAoaHR0cHM6Ly93d3cucmVhY3RzdGFydGVya2l0LmNvbS8pXFxuICpcXG4gKiBDb3B5cmlnaHQgwqkgMjAxNC1wcmVzZW50IEtyaWFzb2Z0LCBMTEMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXFxuICpcXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcXG4gKiBMSUNFTlNFLnR4dCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxcbiAqL1xcbjpyb290IHtcXG4gIC8qXFxuICAgKiBUeXBvZ3JhcGh5XFxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4gIC0tZm9udC1mYW1pbHktYmFzZTogJ1NlZ29lIFVJJywgJ0hlbHZldGljYU5ldWUtTGlnaHQnLCBzYW5zLXNlcmlmO1xcblxcbiAgLypcXG4gICAqIExheW91dFxcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuICAtLW1heC1jb250ZW50LXdpZHRoOiAxMDAwcHg7XFxuXFxuICAvKlxcbiAgICogTWVkaWEgcXVlcmllcyBicmVha3BvaW50c1xcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuICAtLXNjcmVlbi14cy1taW46IDQ4MHB4OyAgLyogRXh0cmEgc21hbGwgc2NyZWVuIC8gcGhvbmUgKi9cXG4gIC0tc2NyZWVuLXNtLW1pbjogNzY4cHg7ICAvKiBTbWFsbCBzY3JlZW4gLyB0YWJsZXQgKi9cXG4gIC0tc2NyZWVuLW1kLW1pbjogOTkycHg7ICAvKiBNZWRpdW0gc2NyZWVuIC8gZGVza3RvcCAqL1xcbiAgLS1zY3JlZW4tbGctbWluOiAxMjAwcHg7IC8qIExhcmdlIHNjcmVlbiAvIHdpZGUgZGVza3RvcCAqL1xcbn1cXG5ib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sLWFwcGxlLXN5c3RlbSxzeXN0ZW0tdWksQmxpbmtNYWNTeXN0ZW1Gb250LFNlZ29lIFVJLE94eWdlbixVYnVudHUsQ2FudGFyZWxsLEZpcmEgU2FucyxEcm9pZCBTYW5zLEhlbHZldGljYSBOZXVlLEFyaWFsLHNhbnMtc2VyaWY7XFxuICBsaW5lLWhlaWdodDogMS41O1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG59XFxuLkxvZ2luLWhlYWRpbmctMXBfUjcge1xcbiAgZm9udC13ZWlnaHQ6IDc7XFxufVxcbi5Mb2dpbi1zdWJoZWFkaW5nLTN3Q0tuIHtcXG4gIGZvbnQtd2VpZ2h0OiAzO1xcbn1cXG5oMSxoMixoMyxoNCxoNSxoNntcXG4gIGZvbnQtd2VpZ2h0OiAzO1xcblxcbn1cXG4uTG9naW4tcm9vdC0zVms2SiB7XFxuICBwYWRkaW5nOjA7XFxufVxcbi5Mb2dpbi1jb250YWluZXItMklaYkwge1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBwYWRkaW5nOiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG4uTG9naW4tbGVhZC0yNVpTQSB7XFxuICBmb250LXNpemU6IDEuMjVlbTtcXG59XFxuLkxvZ2luLXdyYXBwZXItMmhFMFIge1xcbiAgd2lkdGg6MTAwJTtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC1tcy1mbGV4LXBhY2s6IGp1c3RpZnk7XFxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG4uTG9naW4tZm9ybUdyb3VwLXVIZlEtIHtcXG4gICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcbn1cXG4uTG9naW4tbGFiZWwtTWYyLWMge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBmb250LXdlaWdodDogMzAwO1xcbiAgY29sb3I6ICMzNDNhNDA7XFxuICBtYXJnaW4tYm90dG9tOiAwLjVlbTtcXG59XFxuLkxvZ2luLWlucHV0LUhmUmp2IHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgbWFyZ2luOiA1cHggMCAwO1xcbiAgcGFkZGluZzogMTBweCAxNnB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDQ2cHg7XFxuICBjb2xvcjogIzQ5NTA1NztcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2NlZDRkYTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuMjVlbTtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjMzMzMzMzM7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IGJvcmRlci1jb2xvciBlYXNlLWluLW91dCAwLjE1cywgLXdlYmtpdC1ib3gtc2hhZG93IGVhc2UtaW4tb3V0IDAuMTVzO1xcbiAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIGVhc2UtaW4tb3V0IDAuMTVzLCAtd2Via2l0LWJveC1zaGFkb3cgZWFzZS1pbi1vdXQgMC4xNXM7XFxuICAtby10cmFuc2l0aW9uOiBib3JkZXItY29sb3IgZWFzZS1pbi1vdXQgMC4xNXMsIGJveC1zaGFkb3cgZWFzZS1pbi1vdXQgMC4xNXM7XFxuICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgZWFzZS1pbi1vdXQgMC4xNXMsIGJveC1zaGFkb3cgZWFzZS1pbi1vdXQgMC4xNXM7XFxuICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgZWFzZS1pbi1vdXQgMC4xNXMsIGJveC1zaGFkb3cgZWFzZS1pbi1vdXQgMC4xNXMsIC13ZWJraXQtYm94LXNoYWRvdyBlYXNlLWluLW91dCAwLjE1cztcXG4gIGZvbnQ6IDQwMCAxMy4zMzMzcHggQXJpYWw7XFxuXFxufVxcbi5Mb2dpbi1pbnB1dC1IZlJqdjpmb2N1cyB7XFxuICBjb2xvcjogIzQ5NTA1NztcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBib3JkZXItY29sb3I6ICM5YWNmZmE7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMCAwLjJyZW0gcmdiYSgzMywxNTAsMjQzLDAuMjUpO1xcbiAgYm94LXNoYWRvdzogMCAwIDAgMC4ycmVtIHJnYmEoMzMsMTUwLDI0MywwLjI1KTtcXG59XFxuLkxvZ2luLWJ1dHRvbi0ySmhBRSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDEwcHggMTZweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgb3V0bGluZTogMDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMzNzMyNzc7XFxuICBib3JkZXItcmFkaXVzOiAwO1xcbiAgYmFja2dyb3VuZDogIzM3MzI3NztcXG4gIGNvbG9yOiAjZmZmO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgbGluZS1oZWlnaHQ6IDEuMzMzMzMzMztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLkxvZ2luLWJ1dHRvbi0ySmhBRTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDU0LCA1MCwgMTE5LCAwLjgpO1xcbn1cXG4uTG9naW4tYnV0dG9uLTJKaEFFOmZvY3VzIHtcXG4gIGJvcmRlci1jb2xvcjogIzAwNzRjMjtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDhweCByZ2JhKDAsIDExNiwgMTk0LCAwLjYpO1xcbiAgICAgICAgICBib3gtc2hhZG93OiAwIDAgOHB4IHJnYmEoMCwgMTE2LCAxOTQsIDAuNik7XFxufVxcbi5Mb2dpbi1mYWNlYm9vay1RR014dCB7XFxuICBib3JkZXItY29sb3I6ICMzYjU5OTg7XFxuICBiYWNrZ3JvdW5kOiAjM2I1OTk4O1xcbn1cXG4uTG9naW4tZmFjZWJvb2stUUdNeHQ6aG92ZXIge1xcbiAgYmFja2dyb3VuZDogIzJkNDM3MztcXG59XFxuLkxvZ2luLW1pY3Jvc29mdC1CUWJLUSB7XFxuICBmb250LXdlaWdodDogMztcXG4gIGJvcmRlcjoxcHggc29saWQgI2ZmYjkwMDtcXG4gIGJhY2tncm91bmQ6ICNmZmI5MDA7XFxufVxcbi5Mb2dpbi1taWNyb3NvZnQtQlFiS1E6aG92ZXIge1xcbiAgYmFja2dyb3VuZDogI2U1YTgwMDtcXG59XFxuLkxvZ2luLWdvb2dsZS0xN2NJeCB7XFxuICBib3JkZXItY29sb3I6ICNkZDRiMzk7XFxuICBiYWNrZ3JvdW5kOiAjZGQ0YjM5O1xcbn1cXG4uTG9naW4tZ29vZ2xlLTE3Y0l4OmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6ICNjMjMzMjE7XFxufVxcbi5Mb2dpbi10d2l0dGVyLTIxZ0VWIHtcXG4gIGJvcmRlci1jb2xvcjogIzU1YWNlZTtcXG4gIGJhY2tncm91bmQ6ICM1NWFjZWU7XFxufVxcbi5Mb2dpbi10d2l0dGVyLTIxZ0VWOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6ICMyNzk1ZTk7XFxufVxcbi5Mb2dpbi1pY29uLTJEYzFxIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIG1hcmdpbjogNXB4O1xcbiAgd2lkdGg6IDIwcHg7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgZmlsbDogY3VycmVudENvbG9yO1xcbn1cXG4uTG9naW4tbGluZVRocm91Z2gtMndsbHMge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgei1pbmRleDogMTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgY29sb3I6ICM3NTc1NzU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDgwJTtcXG59XFxuLkxvZ2luLWxpbmVUaHJvdWdoLTJ3bGxzOjpiZWZvcmUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxuICB6LWluZGV4OiAtMTtcXG4gIG1hcmdpbi10b3A6IC01cHg7XFxuICBtYXJnaW4tbGVmdDogLTIwcHg7XFxuICB3aWR0aDogNDBweDtcXG4gIGhlaWdodDogMTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBjb250ZW50OiAnJztcXG59XFxuLkxvZ2luLWxpbmVUaHJvdWdoLTJ3bGxzOjphZnRlciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDQ5JTtcXG4gIHotaW5kZXg6IC0yO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xcbiAgY29udGVudDogJyc7XFxufVxcbi5Mb2dpbi1sb2dpbkJsb2NrLS15WGFvIHtcXG4gIHBhZGRpbmc6IDYwcHggNDBweDtcXG4gIG1pbi13aWR0aDogMzAwcHg7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG59XFxuLkxvZ2luLXByb21vLTJIU3hKIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgZXNjYXBlKHJlcXVpcmUoXCIuL2JnLmpwZ1wiKSkgKyBcIik7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm9uZTtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5Mb2dpbi1wcm9tb1RleHQtRzRWNG0ge1xcbiAgY29sb3I6d2hpdGU7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgZm9udC1zaXplOiAzLjNlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbjowIGF1dG87XFxuICBtYXJnaW4tdG9wOjEwJTtcXG59XFxuLkxvZ2luLWxvZ28tQkJ6Ykcge1xcbiAgd2lkdGg6IDEyMHB4O1xcbiAgaGVpZ2h0OiAxMjBweDtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBib3JkZXI6IDNweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpO1xcbiAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpO1xcbn1cXG4uTG9naW4tbG9nby1CQnpiRyBzdmcge1xcbiAgbWFyZ2luOiA1MCU7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSk7XFxuICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSk7XFxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSk7XFxufVxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvVXNlcnMvcm9zdHlzbGF2L0Rvd25sb2Fkcy9Q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O0VBQ1osYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixZQUFZO0NBQ2I7QUFDRDtFQUNFLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1QsWUFBWTtFQUNaLGVBQWU7RUFDZixZQUFZO0VBQ1osOEJBQThCO0VBQzlCLFlBQVk7Q0FDYjtBQUNEO0VBQ0UsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixrQkFBa0I7Q0FDbkI7QUFDRDtFQUNFLFlBQVk7RUFDWixnREFBa0M7RUFDbEMsd0JBQXdCO0VBQ3hCLDRCQUE0QjtFQUM1Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0NBQ3BCO0FBQ0Q7RUFDRSxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsY0FBYztFQUNkLGVBQWU7Q0FDaEI7QUFDRDtFQUNFLGFBQWE7RUFDYixjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysd0NBQXdDO01BQ3BDLG9DQUFvQztVQUNoQyxnQ0FBZ0M7Q0FDekM7QUFDRDtFQUNFLFlBQVk7RUFDWix3Q0FBd0M7TUFDcEMsb0NBQW9DO1VBQ2hDLGdDQUFnQztDQUN6Q1wiLFwiZmlsZVwiOlwiTG9naW4uY3NzXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qKlxcbiAqIFJlYWN0IFN0YXJ0ZXIgS2l0IChodHRwczovL3d3dy5yZWFjdHN0YXJ0ZXJraXQuY29tLylcXG4gKlxcbiAqIENvcHlyaWdodCDCqSAyMDE0LXByZXNlbnQgS3JpYXNvZnQsIExMQy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cXG4gKlxcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxcbiAqIExJQ0VOU0UudHh0IGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXFxuICovXFxuLyoqXFxuICogUmVhY3QgU3RhcnRlciBLaXQgKGh0dHBzOi8vd3d3LnJlYWN0c3RhcnRlcmtpdC5jb20vKVxcbiAqXFxuICogQ29weXJpZ2h0IMKpIDIwMTQtcHJlc2VudCBLcmlhc29mdCwgTExDLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxcbiAqXFxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXFxuICogTElDRU5TRS50eHQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cXG4gKi9cXG46cm9vdCB7XFxuICAvKlxcbiAgICogVHlwb2dyYXBoeVxcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuICAtLWZvbnQtZmFtaWx5LWJhc2U6ICdTZWdvZSBVSScsICdIZWx2ZXRpY2FOZXVlLUxpZ2h0Jywgc2Fucy1zZXJpZjtcXG5cXG4gIC8qXFxuICAgKiBMYXlvdXRcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiAgLS1tYXgtY29udGVudC13aWR0aDogMTAwMHB4O1xcblxcbiAgLypcXG4gICAqIE1lZGlhIHF1ZXJpZXMgYnJlYWtwb2ludHNcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiAgLS1zY3JlZW4teHMtbWluOiA0ODBweDsgIC8qIEV4dHJhIHNtYWxsIHNjcmVlbiAvIHBob25lICovXFxuICAtLXNjcmVlbi1zbS1taW46IDc2OHB4OyAgLyogU21hbGwgc2NyZWVuIC8gdGFibGV0ICovXFxuICAtLXNjcmVlbi1tZC1taW46IDk5MnB4OyAgLyogTWVkaXVtIHNjcmVlbiAvIGRlc2t0b3AgKi9cXG4gIC0tc2NyZWVuLWxnLW1pbjogMTIwMHB4OyAvKiBMYXJnZSBzY3JlZW4gLyB3aWRlIGRlc2t0b3AgKi9cXG59XFxuYm9keSB7XFxuICBmb250LWZhbWlseTogUm9ib3RvLC1hcHBsZS1zeXN0ZW0sc3lzdGVtLXVpLEJsaW5rTWFjU3lzdGVtRm9udCxTZWdvZSBVSSxPeHlnZW4sVWJ1bnR1LENhbnRhcmVsbCxGaXJhIFNhbnMsRHJvaWQgU2FucyxIZWx2ZXRpY2EgTmV1ZSxBcmlhbCxzYW5zLXNlcmlmO1xcbiAgbGluZS1oZWlnaHQ6IDEuNTtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxufVxcbi5oZWFkaW5nIHtcXG4gIGZvbnQtd2VpZ2h0OiA3O1xcbn1cXG4uc3ViaGVhZGluZyB7XFxuICBmb250LXdlaWdodDogMztcXG59XFxuaDEsaDIsaDMsaDQsaDUsaDZ7XFxuICBmb250LXdlaWdodDogMztcXG5cXG59XFxuLnJvb3Qge1xcbiAgcGFkZGluZzowO1xcbn1cXG4uY29udGFpbmVyIHtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgcGFkZGluZzogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuLmxlYWQge1xcbiAgZm9udC1zaXplOiAxLjI1ZW07XFxufVxcbi53cmFwcGVyIHtcXG4gIHdpZHRoOjEwMCU7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtbXMtZmxleC1wYWNrOiBqdXN0aWZ5O1xcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuLmZvcm1Hcm91cCB7XFxuICAgbWFyZ2luLWJvdHRvbTogMTVweDtcXG59XFxuLmxhYmVsIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gIGNvbG9yOiAjMzQzYTQwO1xcbiAgbWFyZ2luLWJvdHRvbTogMC41ZW07XFxufVxcbi5pbnB1dCB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIG1hcmdpbjogNXB4IDAgMDtcXG4gIHBhZGRpbmc6IDEwcHggMTZweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA0NnB4O1xcbiAgY29sb3I6ICM0OTUwNTc7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjZWQ0ZGE7XFxuICBib3JkZXItcmFkaXVzOiAwLjI1ZW07XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBsaW5lLWhlaWdodDogMS4zMzMzMzMzO1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBib3JkZXItY29sb3IgZWFzZS1pbi1vdXQgMC4xNXMsIC13ZWJraXQtYm94LXNoYWRvdyBlYXNlLWluLW91dCAwLjE1cztcXG4gIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciBlYXNlLWluLW91dCAwLjE1cywgLXdlYmtpdC1ib3gtc2hhZG93IGVhc2UtaW4tb3V0IDAuMTVzO1xcbiAgLW8tdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIGVhc2UtaW4tb3V0IDAuMTVzLCBib3gtc2hhZG93IGVhc2UtaW4tb3V0IDAuMTVzO1xcbiAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIGVhc2UtaW4tb3V0IDAuMTVzLCBib3gtc2hhZG93IGVhc2UtaW4tb3V0IDAuMTVzO1xcbiAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIGVhc2UtaW4tb3V0IDAuMTVzLCBib3gtc2hhZG93IGVhc2UtaW4tb3V0IDAuMTVzLCAtd2Via2l0LWJveC1zaGFkb3cgZWFzZS1pbi1vdXQgMC4xNXM7XFxuICBmb250OiA0MDAgMTMuMzMzM3B4IEFyaWFsO1xcblxcbn1cXG4uaW5wdXQ6Zm9jdXMge1xcbiAgY29sb3I6ICM0OTUwNTc7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgYm9yZGVyLWNvbG9yOiAjOWFjZmZhO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDAgMC4ycmVtIHJnYmEoMzMsMTUwLDI0MywwLjI1KTtcXG4gIGJveC1zaGFkb3c6IDAgMCAwIDAuMnJlbSByZ2JhKDMzLDE1MCwyNDMsMC4yNSk7XFxufVxcbi5idXR0b24ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAxMHB4IDE2cHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIG91dGxpbmU6IDA7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjMzczMjc3O1xcbiAgYm9yZGVyLXJhZGl1czogMDtcXG4gIGJhY2tncm91bmQ6ICMzNzMyNzc7XFxuICBjb2xvcjogI2ZmZjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjMzMzMzMzM7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5idXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZDogcmdiYSg1NCwgNTAsIDExOSwgMC44KTtcXG59XFxuLmJ1dHRvbjpmb2N1cyB7XFxuICBib3JkZXItY29sb3I6ICMwMDc0YzI7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCA4cHggcmdiYSgwLCAxMTYsIDE5NCwgMC42KTtcXG4gICAgICAgICAgYm94LXNoYWRvdzogMCAwIDhweCByZ2JhKDAsIDExNiwgMTk0LCAwLjYpO1xcbn1cXG4uZmFjZWJvb2sge1xcbiAgYm9yZGVyLWNvbG9yOiAjM2I1OTk4O1xcbiAgYmFja2dyb3VuZDogIzNiNTk5ODtcXG4gIGNvbXBvc2VzOiBidXR0b247XFxufVxcbi5mYWNlYm9vazpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiAjMmQ0MzczO1xcbn1cXG4ubWljcm9zb2Z0IHtcXG4gIGZvbnQtd2VpZ2h0OiAzO1xcbiAgYm9yZGVyOjFweCBzb2xpZCAjZmZiOTAwO1xcbiAgYmFja2dyb3VuZDogI2ZmYjkwMDtcXG4gIGNvbXBvc2VzOiBidXR0b247XFxufVxcbi5taWNyb3NvZnQ6aG92ZXIge1xcbiAgYmFja2dyb3VuZDogI2U1YTgwMDtcXG59XFxuLmdvb2dsZSB7XFxuICBib3JkZXItY29sb3I6ICNkZDRiMzk7XFxuICBiYWNrZ3JvdW5kOiAjZGQ0YjM5O1xcbiAgY29tcG9zZXM6IGJ1dHRvbjtcXG59XFxuLmdvb2dsZTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiAjYzIzMzIxO1xcbn1cXG4udHdpdHRlciB7XFxuICBib3JkZXItY29sb3I6ICM1NWFjZWU7XFxuICBiYWNrZ3JvdW5kOiAjNTVhY2VlO1xcbiAgY29tcG9zZXM6IGJ1dHRvbjtcXG59XFxuLnR3aXR0ZXI6aG92ZXIge1xcbiAgYmFja2dyb3VuZDogIzI3OTVlOTtcXG59XFxuLmljb24ge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgbWFyZ2luOiA1cHg7XFxuICB3aWR0aDogMjBweDtcXG4gIGhlaWdodDogMjBweDtcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICBmaWxsOiBjdXJyZW50Q29sb3I7XFxufVxcbi5saW5lVGhyb3VnaCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB6LWluZGV4OiAxO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBjb2xvcjogIzc1NzU3NTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogODAlO1xcbn1cXG4ubGluZVRocm91Z2g6OmJlZm9yZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHotaW5kZXg6IC0xO1xcbiAgbWFyZ2luLXRvcDogLTVweDtcXG4gIG1hcmdpbi1sZWZ0OiAtMjBweDtcXG4gIHdpZHRoOiA0MHB4O1xcbiAgaGVpZ2h0OiAxMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIGNvbnRlbnQ6ICcnO1xcbn1cXG4ubGluZVRocm91Z2g6OmFmdGVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNDklO1xcbiAgei1pbmRleDogLTI7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XFxuICBjb250ZW50OiAnJztcXG59XFxuLmxvZ2luQmxvY2sge1xcbiAgcGFkZGluZzogNjBweCA0MHB4O1xcbiAgbWluLXdpZHRoOiAzMDBweDtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbn1cXG4ucHJvbW8ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4vYmcuanBnJyk7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm9uZTtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5wcm9tb1RleHQge1xcbiAgY29sb3I6d2hpdGU7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgZm9udC1zaXplOiAzLjNlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbjowIGF1dG87XFxuICBtYXJnaW4tdG9wOjEwJTtcXG59XFxuLmxvZ28ge1xcbiAgd2lkdGg6IDEyMHB4O1xcbiAgaGVpZ2h0OiAxMjBweDtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBib3JkZXI6IDNweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpO1xcbiAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpO1xcbn1cXG4ubG9nbyBzdmcge1xcbiAgbWFyZ2luOiA1MCU7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSk7XFxuICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSk7XFxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSk7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuXG4vLyBleHBvcnRzXG5leHBvcnRzLmxvY2FscyA9IHtcblx0XCJoZWFkaW5nXCI6IFwiTG9naW4taGVhZGluZy0xcF9SN1wiLFxuXHRcInN1YmhlYWRpbmdcIjogXCJMb2dpbi1zdWJoZWFkaW5nLTN3Q0tuXCIsXG5cdFwicm9vdFwiOiBcIkxvZ2luLXJvb3QtM1ZrNkpcIixcblx0XCJjb250YWluZXJcIjogXCJMb2dpbi1jb250YWluZXItMklaYkxcIixcblx0XCJsZWFkXCI6IFwiTG9naW4tbGVhZC0yNVpTQVwiLFxuXHRcIndyYXBwZXJcIjogXCJMb2dpbi13cmFwcGVyLTJoRTBSXCIsXG5cdFwiZm9ybUdyb3VwXCI6IFwiTG9naW4tZm9ybUdyb3VwLXVIZlEtXCIsXG5cdFwibGFiZWxcIjogXCJMb2dpbi1sYWJlbC1NZjItY1wiLFxuXHRcImlucHV0XCI6IFwiTG9naW4taW5wdXQtSGZSanZcIixcblx0XCJidXR0b25cIjogXCJMb2dpbi1idXR0b24tMkpoQUVcIixcblx0XCJmYWNlYm9va1wiOiBcIkxvZ2luLWZhY2Vib29rLVFHTXh0IExvZ2luLWJ1dHRvbi0ySmhBRVwiLFxuXHRcIm1pY3Jvc29mdFwiOiBcIkxvZ2luLW1pY3Jvc29mdC1CUWJLUSBMb2dpbi1idXR0b24tMkpoQUVcIixcblx0XCJnb29nbGVcIjogXCJMb2dpbi1nb29nbGUtMTdjSXggTG9naW4tYnV0dG9uLTJKaEFFXCIsXG5cdFwidHdpdHRlclwiOiBcIkxvZ2luLXR3aXR0ZXItMjFnRVYgTG9naW4tYnV0dG9uLTJKaEFFXCIsXG5cdFwiaWNvblwiOiBcIkxvZ2luLWljb24tMkRjMXFcIixcblx0XCJsaW5lVGhyb3VnaFwiOiBcIkxvZ2luLWxpbmVUaHJvdWdoLTJ3bGxzXCIsXG5cdFwibG9naW5CbG9ja1wiOiBcIkxvZ2luLWxvZ2luQmxvY2stLXlYYW9cIixcblx0XCJwcm9tb1wiOiBcIkxvZ2luLXByb21vLTJIU3hKXCIsXG5cdFwicHJvbW9UZXh0XCI6IFwiTG9naW4tcHJvbW9UZXh0LUc0VjRtXCIsXG5cdFwibG9nb1wiOiBcIkxvZ2luLWxvZ28tQkJ6YkdcIlxufTsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGVzY2FwZSh1cmwpIHtcbiAgICBpZiAodHlwZW9mIHVybCAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuIHVybFxuICAgIH1cbiAgICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICAgICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgICB9XG4gICAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAgIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gICAgaWYgKC9bXCInKCkgXFx0XFxuXS8udGVzdCh1cmwpKSB7XG4gICAgICAgIHJldHVybiAnXCInICsgdXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgJ1xcXFxuJykgKyAnXCInXG4gICAgfVxuXG4gICAgcmV0dXJuIHVybFxufVxuIiwiXG4gICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LXJ1bGVzLTIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS01LXJ1bGVzLTMhLi9Mb2dpbi5jc3NcIik7XG4gICAgdmFyIGluc2VydENzcyA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL2xpYi9pbnNlcnRDc3MuanNcIik7XG5cbiAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgfVxuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTtcbiAgICBtb2R1bGUuZXhwb3J0cy5fZ2V0Q29udGVudCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gY29udGVudDsgfTtcbiAgICBtb2R1bGUuZXhwb3J0cy5fZ2V0Q3NzID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb250ZW50LnRvU3RyaW5nKCk7IH07XG4gICAgbW9kdWxlLmV4cG9ydHMuX2luc2VydENzcyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHsgcmV0dXJuIGluc2VydENzcyhjb250ZW50LCBvcHRpb25zKSB9O1xuICAgIFxuICAgIC8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbiAgICAvLyBodHRwczovL3dlYnBhY2suZ2l0aHViLmlvL2RvY3MvaG90LW1vZHVsZS1yZXBsYWNlbWVudFxuICAgIC8vIE9ubHkgYWN0aXZhdGVkIGluIGJyb3dzZXIgY29udGV4dFxuICAgIGlmIChtb2R1bGUuaG90ICYmIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5kb2N1bWVudCkge1xuICAgICAgdmFyIHJlbW92ZUNzcyA9IGZ1bmN0aW9uKCkge307XG4gICAgICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNS1ydWxlcy0yIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNS1ydWxlcy0zIS4vTG9naW4uY3NzXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNS1ydWxlcy0yIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNS1ydWxlcy0zIS4vTG9naW4uY3NzXCIpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgIH1cblxuICAgICAgICByZW1vdmVDc3MgPSBpbnNlcnRDc3MoY29udGVudCwgeyByZXBsYWNlOiB0cnVlIH0pO1xuICAgICAgfSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHJlbW92ZUNzcygpOyB9KTtcbiAgICB9XG4gICIsIi8qKlxuICogUmVhY3QgU3RhcnRlciBLaXQgKGh0dHBzOi8vd3d3LnJlYWN0c3RhcnRlcmtpdC5jb20vKVxuICpcbiAqIENvcHlyaWdodCDCqSAyMDE0LXByZXNlbnQgS3JpYXNvZnQsIExMQy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UudHh0IGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgd2l0aFN0eWxlcyBmcm9tICdpc29tb3JwaGljLXN0eWxlLWxvYWRlci9saWIvd2l0aFN0eWxlcyc7XG5pbXBvcnQgcyBmcm9tICcuL0xvZ2luLmNzcyc7XG5pbXBvcnQgYmcgZnJvbSAnLi9iZy5qcGcnO1xuaW1wb3J0IEFwcCBmcm9tICcuL21pY3Jvc29mdExvZ2luJztcblxuY2xhc3MgTG9naW4gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17cy5yb290fT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3MuY29udGFpbmVyfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cy5wcm9tb30+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9e3MucHJvbW9UZXh0fT5cbiAgICAgICAgICAgICAgV2VsY29tZSB0byBbTkFNRV0hXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cy5sb2dvfT5cbjxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIGlkPVwiQ2FwYV8xXCIgeD1cIjBweFwiIHk9XCIwcHhcIiB2aWV3Qm94PVwiMCAwIDI3Ljc5MyAyNy43OTNcIiB3aWR0aD1cIjkwcHhcIiBoZWlnaHQ9XCI5MHB4XCI+XG48Zz5cbiAgPGcgaWQ9XCJjMV9yYXlcIj5cbiAgICA8cG9seWdvbiBwb2ludHM9XCIyMC45NzIsMCA1LjA3NiwxNS44MDMgMTAuOTcyLDE1LjgwMyA2LjQ0LDI3Ljc5MyAyMi43MTYsMTEuOTg5IDE2LjgxOSwxMS45ODkgICBcIlxuICAgIGZpbGw9XCIjN0ZDMkU1XCIvPlxuICA8L2c+XG4gIDxnIGlkPVwiQ2FwYV8xXzI5X1wiPlxuICA8L2c+XG4gIDwvZz5cbjwvc3ZnPlxuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cy5sb2dpbkJsb2NrfT5cbiAgICAgICAgICAgIDxoMT57dGhpcy5wcm9wcy50aXRsZX08L2gxPlxuICAgICAgICAgICAgey8qIDxwIGNsYXNzTmFtZT17cy5sZWFkfT5cbiAgICAgICAgICAgICAgTG9nIGluIHdpdGggeW91ciB1c2VybmFtZSBvciBjb21wYW55IGVtYWlsIGFkZHJlc3MuXG4gICAgICAgICAgICA8L3A+ICovfVxuICAgICAgICAgICAgPGZvcm0gbWV0aG9kPVwicG9zdFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cy5mb3JtR3JvdXB9PlxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9e3MubGFiZWx9IGh0bWxGb3I9XCJ1c2VybmFtZU9yRW1haWxcIj5cbiAgICAgICAgICAgICAgICAgIFVzZXJuYW1lIG9yIGVtYWlsIGFkZHJlc3M6XG4gICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzLmlucHV0fVxuICAgICAgICAgICAgICAgICAgICBpZD1cInVzZXJuYW1lT3JFbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cInVzZXJuYW1lT3JFbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiSm9obiBEb2VcIlxuICAgICAgICAgICAgICAgICAgICBhdXRvRm9jdXMgLy8gZXNsaW50LWRpc2FibGUtbGluZSBqc3gtYTExeS9uby1hdXRvZm9jdXNcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLmZvcm1Hcm91cH0+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT17cy5sYWJlbH0gaHRtbEZvcj1cInBhc3N3b3JkXCI+XG4gICAgICAgICAgICAgICAgICBQYXNzd29yZDpcbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3MuaW5wdXR9XG4gICAgICAgICAgICAgICAgICAgIGlkPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLmZvcm1Hcm91cH0+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3MuYnV0dG9ufSB0eXBlPVwic3VibWl0XCI+XG4gICAgICAgICAgICAgICAgICBMb2cgaW5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICA8c3Ryb25nIGNsYXNzTmFtZT17cy5saW5lVGhyb3VnaH0+T1I8L3N0cm9uZz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0ge3Mud3JhcHBlcn0+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLmZvcm1Hcm91cH0+XG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtzLmZhY2Vib29rfSBocmVmPVwiL2xvZ2luL2ZhY2Vib29rXCI+XG4gICAgICAgICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17cy5pY29ufVxuICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjMwXCJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMzBcIlxuICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDMwIDMwXCJcbiAgICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMjIgMTZsMS01aC01VjdjMC0xLjU0NC43ODQtMiAzLTJoMlYwaC00Yy00LjA3MiAwLTcgMi40MzUtNyA3djRIN3Y1aDV2MTRoNlYxNmg0elwiIC8+XG4gICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cy5mb3JtR3JvdXB9PlxuICAgICAgICAgICAgICAgIDxBcHAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLmZvcm1Hcm91cH0+XG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtzLmdvb2dsZX0gaHJlZj1cIi9sb2dpbi9nb29nbGVcIj5cbiAgICAgICAgICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzLmljb259XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMzBcIlxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIzMFwiXG4gICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMzAgMzBcIlxuICAgICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgICAgICBkPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICdNMzAgMTNoLTRWOWgtMnY0aC00djJoNHY0aDJ2LTRoNG0tMTUgMnMtMi0xLjE1LTItMmMwIDAtLjUtMS44MjggMS0zICcgK1xuICAgICAgICAgICAgICAgICAgICAgICAgJzEuNTM3LTEuMiAzLTMuMDM1IDMtNSAwLTIuMzM2LTEuMDQ2LTUtMy02aDNsMi4zODctMUgxMEM1LjgzNSAwIDIgMy4zNDUgMiA3YzAgJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAnMy43MzUgMi44NSA2LjU2IDcuMDg2IDYuNTYuMjk1IDAgLjU4LS4wMDYuODYtLjAyNS0uMjczLjUyNi0uNDcgMS4xMi0uNDcgMS43MzUgJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAnMCAxLjAzNy44MTcgMi4wNDIgMS41MjMgMi43M0g5Yy01LjE2IDAtOSAyLjU5My05IDYgMCAzLjM1NSA0Ljg3IDYgMTAuMDMgNiA1Ljg4MiAnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICcwIDkuOTctMyA5Ljk3LTcgMC0yLjY5LTIuNTQ1LTQuMjY0LTUtNnptLTQtNGMtMi4zOTUgMC01LjU4Ny0yLjg1Ny02LTZDNC41ODcgJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAnMy44NTYgNi42MDcuOTMgOSAxYzIuMzk0LjA3IDQuNjAzIDIuOTA4IDUuMDE3IDYuMDUyQzE0LjQzIDEwLjE5NSAxMyAxMyAxMSAnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICcxM3ptLTEgMTVjLTMuNTY2IDAtNy0xLjI5LTctNCAwLTIuNjU4IDMuNDM0LTUuMDM4IDctNSAuODMyLjAxIDIgMCAyIDAgMSAwICcgK1xuICAgICAgICAgICAgICAgICAgICAgICAgJzIuODguODggNCAyIDEgMSAxIDIuNjc0IDEgMyAwIDMtMS45ODYgNC03IDR6J1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLmZvcm1Hcm91cH0+XG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtzLnR3aXR0ZXJ9IGhyZWY9XCIvbG9naW4vdHdpdHRlclwiPlxuICAgICAgICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3MuaWNvbn1cbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIzMFwiXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjMwXCJcbiAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAzMCAzMFwiXG4gICAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgICAgIGQ9e1xuICAgICAgICAgICAgICAgICAgICAgICAgJ00zMCA2LjcwOGMtMS4xMDUuNDktMi43NTYgMS4xNDMtNCAxLjI5MiAxLjI3My0uNzYyIDIuNTQtMi41NiAnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICczLTQtLjk3LjU3Ny0yLjA4NyAxLjM1NS0zLjIyNyAxLjc3M0wyNSA1Yy0xLjEyLTEuMTk3LTIuMjMtMi00LTItMy4zOTggMC02ICcgK1xuICAgICAgICAgICAgICAgICAgICAgICAgJzIuNjAyLTYgNiAwIC40LjA0Ny43LjExLjk1NkwxNSAxMEM5IDEwIDUuMDM0IDguNzI0IDIgNWMtLjUzLjkwOC0xIDEuODcyLTEgJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAnMyAwIDIuMTM2IDEuMzQ4IDMuODk0IDMgNS0xLjAxLS4wMzMtMi4xNy0uNTQyLTMtMSAwIDIuOTggNC4xODYgNi40MzIgNyA3LTEgJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAnMS00LjYyMy4wNzQtNSAwIC43ODQgMi40NDcgMy4zMSAzLjk1IDYgNC0yLjEwNSAxLjY0OC00LjY0NyAyLjUxLTcuNTMgMi41MS0uNSAnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICcwLS45ODgtLjAzLTEuNDctLjA4NEMyLjcyMyAyNy4xNyA2LjUyMyAyOCAxMCAyOGMxMS4zMjIgMCAxNy04Ljg2NyAxNy0xNyAnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICcwLS4yNjguMDA4LS43MzYgMC0xIDEuMi0uODY4IDIuMTcyLTIuMDU4IDMtMy4yOTJ6J1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMocykoTG9naW4pO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3JjL3JvdXRlcy9sb2dpbi9iZy5qcGc/Yjc0NjQzY2JcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzcmMvcm91dGVzL2xvZ2luL2JnLmpwZz9iNzQ2NDNjYlwiOyIsIi8qKlxuICogUmVhY3QgU3RhcnRlciBLaXQgKGh0dHBzOi8vd3d3LnJlYWN0c3RhcnRlcmtpdC5jb20vKVxuICpcbiAqIENvcHlyaWdodCDCqSAyMDE0LXByZXNlbnQgS3JpYXNvZnQsIExMQy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UudHh0IGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9MYXlvdXQnO1xuaW1wb3J0IExvZ2luIGZyb20gJy4vTG9naW4nO1xuXG5jb25zdCB0aXRsZSA9ICdMb2cgaW4nO1xuXG5mdW5jdGlvbiBhY3Rpb24oKSB7XG4gIHJldHVybiB7XG4gICAgY2h1bmtzOiBbJ2xvZ2luJ10sXG4gICAgdGl0bGUsXG4gICAgY29tcG9uZW50OiA8TG9naW4gdGl0bGU9e3RpdGxlfSAvPixcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgYWN0aW9uO1xuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IFJlYWN0TG9naW5NUyBmcm9tICdyZWFjdC1tcy1sb2dpbic7XG5cbmltcG9ydCBzIGZyb20gJy4vTG9naW4uY3NzJztcblxuY2xhc3MgQXBwIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIkFwcFwiPlxuICAgICAgICA8UmVhY3RMb2dpbk1TXG5cbiAgICAgICAgICBjbGllbnRJZD1cImQzZGY0NjAzLThlMGItNGE2Zi1iZmUyLTA2MjU3ODQ1MjEwZlwiIC8vIHJlcXVpcmVkOiAnYXBwbGljYXRpb24gaWQvY2xpZW50IGlkJyBvYnRhaW5lZCBmcm9tIGh0dHBzOi8vYXBwcy5kZXYubWljcm9zb2Z0LmNvbSBmb3IgeW91ciBhcHBcbiAgICAgICAgICByZWRpcmVjdFVyaT1cImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hZnRlcmxvZ2luXCIgLy8gcmVxdWlyZWQ6IHJlZGlyZWN0VXJpIHJlZ2lzdGVyZWQgaW4gaHR0cHM6Ly9hcHBzLmRldi5taWNyb3NvZnQuY29tIGZvciB5b3VyIGFwcFxuICAgICAgICAgIHNjb3Blcz17Wyd1c2VyLnJlYWQnXX0gLy8gb3B0aW9uYWw6IGRlZmF1bHRzIHRvIFwidXNlci5yZWFkXCIgZnVsbCBsaXN0IGlzIHByZXNlbnQgaHR0cHM6Ly9kZXZlbG9wZXIubWljcm9zb2Z0LmNvbS9lbi11cy9ncmFwaC9kb2NzL2NvbmNlcHRzL3Blcm1pc3Npb25zX3JlZmVyZW5jZVxuICAgICAgICAgIHJlc3BvbnNlVHlwZT1cInRva2VuXCIgLy8gb3B0aW9uYWw6IHZhbGlkIHZhbHVlcyBhcmUgXCJ0b2tlblwiIGZvciBgSW1wbGljaXRlIE9BdXRoIGZsb3dgIGFuZCBcImNvZGVcIiBmb3IgYEF1dGhvcml6YXRpb24gQ29kZSBmbG93YCBkZWZhdWx0cyB0byBcInRva2VuXCJcbiAgICAgICAgICBjc3NDbGFzcz17cy5taWNyb3NvZnR9IC8vIG9wdGlvbmFsOiBzcGFjZSBzZXBhcmF0ZWQgY2xhc3MgbmFtZXMgd2hpY2ggYXJlIGFwcGxpZWQgb24gdGhlIGh0bWwgQnV0dG9uIGVsZW1lbnRcbiAgICAgICAgICBidG5Db250ZW50PXtCdXR0b25Db250ZW50fSAvLyBvcHRpb25hbDogY2FuIGJlIHN0cmluZyBvciBhIHZhbGlkIHJlYWN0IGNvbXBvbmVudCB3aGljaCBjYW4gYmUgcmVuZGVyZWQgaW5zaWRlIGh0bWwgQnV0dG9uIGVsZW1lbnRcbiAgICAgICAgICBoYW5kbGVMb2dpbj17ZGF0YSA9PiBjb25zb2xlLmxvZyhkYXRhKX0gLy8gcmVxdWlyZWQ6IGNhbGxiYWNrIHRvIHJlY2VpdmUgdG9rZW4vY29kZSBhZnRlciBzdWNjZXNzZnVsIGxvZ2luXG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmNsYXNzIEJ1dHRvbkNvbnRlbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxzcGFuPlxuICAgICAgICA8c3ZnXG4gICAgICAgICAgY2xhc3NOYW1lPXtzLmljb259XG4gICAgICAgICAgd2lkdGg9XCIyMFwiXG4gICAgICAgICAgaGVpZ2h0PVwiMzBcIlxuICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjU2IDI1N1wiXG4gICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgcHJlc2VydmVBc3BlY3RSYXRpbz1cInhNaWRZTWlkXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICBkPVwiTTAgMzYuMzU3TDEwNC42MiAyMi4xMWwuMDQ1IDEwMC45MTQtMTA0LjU3LjU5NUwwIDM2LjM1OHptMTA0LjU3IDk4LjI5M2wuMDggMTAxLjAwMkwuMDgxIDIyMS4yNzVsLS4wMDYtODcuMzAyIDEwNC40OTQuNjc3em0xMi42ODItMTE0LjQwNUwyNTUuOTY4IDB2MTIxLjc0bC0xMzguNzE2IDEuMVYyMC4yNDZ6TTI1NiAxMzUuNmwtLjAzMyAxMjEuMTkxLTEzOC43MTYtMTkuNTc4LS4xOTQtMTAxLjg0TDI1NiAxMzUuNnpcIlxuICAgICAgICAgICAgZmlsbD1cIiNmZmZmZmZcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvc3ZnPlxuICAgICAgPC9zcGFuPlxuICAgICk7XG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IEFwcDtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDOUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0JBOzs7Ozs7OztBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFPQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFVQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBU0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFPQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBZUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBbUJBOzs7O0FBdElBO0FBQ0E7QUFEQTs7OztBQUNBO0FBQ0E7QUFEQTs7QUF3SUE7Ozs7Ozs7QUN6SkE7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7O0FBU0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBS0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkJBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUZBO0FBR0E7QUFIQTtBQUlBO0FBSkE7QUFLQTtBQUxBO0FBTUE7QUFOQTtBQU9BO0FBUEE7QUFRQTtBQUFBO0FBQUE7QUFSQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVlBOzs7O0FBaEJBO0FBQ0E7QUFrQkE7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBU0E7QUFDQTtBQUZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU9BOzs7O0FBbkJBO0FBQ0E7QUFvQkE7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==