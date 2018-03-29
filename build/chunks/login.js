require("source-map-support").install();
exports.ids = ["login"];
exports.modules = {

/***/ "./node_modules/css-loader/index.js??ref--5-rules-2!./node_modules/postcss-loader/lib/index.js??ref--5-rules-3!./src/routes/login/Login.css":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("./node_modules/css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: 'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1000px;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n}\nbody {\n  font-family: Roboto,-apple-system,system-ui,BlinkMacSystemFont,Segoe UI,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,Arial,sans-serif;\n  line-height: 1.5;\n  font-size: 14px;\n  padding: 0;\n  margin: 0;\n}\n.Login-heading-32nC6 {\n  font-weight: 7;\n}\n.Login-subheading-ocNuy {\n  font-weight: 3;\n}\nh1,h2,h3,h4,h5,h6{\n  font-weight: 3;\n\n}\n.Login-root-3w4yh {\n  padding:0;\n}\n.Login-container-3tEjn {\n  margin: 0 auto;\n  padding: 0;\n  width: 100%;\n  height: 100vh;\n  display: -ms-flexbox;\n  display: flex;\n}\n.Login-lead-24BLj {\n  font-size: 1.25em;\n}\n.Login-wrapper-2Aamh {\n  width:100%;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: justify;\n      justify-content: space-between;\n}\n.Login-formGroup-1FsFn {\n   margin-bottom: 15px;\n}\n.Login-label-2QXdt {\n  display: block;\n  font-weight: 300;\n  color: #343a40;\n  margin-bottom: 0.5em;\n}\n.Login-input-2uwlQ {\n  display: block;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  margin: 5px 0 0;\n  padding: 10px 16px;\n  width: 100%;\n  height: 46px;\n  color: #495057;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid #ced4da;\n  border-radius: 0.25em;\n  font-size: 18px;\n  line-height: 1.3333333;\n  -webkit-transition: border-color ease-in-out 0.15s, -webkit-box-shadow ease-in-out 0.15s;\n  transition: border-color ease-in-out 0.15s, -webkit-box-shadow ease-in-out 0.15s;\n  -o-transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;\n  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;\n  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s, -webkit-box-shadow ease-in-out 0.15s;\n  font: 400 13.3333px Arial;\n\n}\n.Login-input-2uwlQ:focus {\n  color: #495057;\n  background-color: #fff;\n  border-color: #9acffa;\n  outline: none;\n  -webkit-box-shadow: 0 0 0 0.2rem rgba(33,150,243,0.25);\n  box-shadow: 0 0 0 0.2rem rgba(33,150,243,0.25);\n}\n.Login-button-1ZNK2 {\n  display: block;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  margin: 0;\n  padding: 10px 16px;\n  width: 100%;\n  outline: 0;\n  border: 1px solid #373277;\n  border-radius: 0;\n  background: #373277;\n  color: #fff;\n  text-align: center;\n  text-decoration: none;\n  font-size: 18px;\n  line-height: 1.3333333;\n  cursor: pointer;\n}\n.Login-button-1ZNK2:hover {\n  background: rgba(54, 50, 119, 0.8);\n}\n.Login-button-1ZNK2:focus {\n  border-color: #0074c2;\n  -webkit-box-shadow: 0 0 8px rgba(0, 116, 194, 0.6);\n          box-shadow: 0 0 8px rgba(0, 116, 194, 0.6);\n}\n.Login-facebook-2FzS0 {\n  border-color: #3b5998;\n  background: #3b5998;\n}\n.Login-facebook-2FzS0:hover {\n  background: #2d4373;\n}\n.Login-microsoft-3e5mf {\n  font-weight: 3;\n  border:1px solid #ffb900;\n  background: #ffb900;\n}\n.Login-microsoft-3e5mf:hover {\n  background: #e5a800;\n}\n.Login-google-lsuqy {\n  border-color: #dd4b39;\n  background: #dd4b39;\n}\n.Login-google-lsuqy:hover {\n  background: #c23321;\n}\n.Login-twitter-3DDSi {\n  border-color: #55acee;\n  background: #55acee;\n}\n.Login-twitter-3DDSi:hover {\n  background: #2795e9;\n}\n.Login-icon-3VPzE {\n  display: inline-block;\n  margin: 5px;\n  width: 20px;\n  height: 20px;\n  vertical-align: middle;\n  fill: currentColor;\n}\n.Login-lineThrough-2-Nxk {\n  position: relative;\n  z-index: 1;\n  display: block;\n  margin-bottom: 15px;\n  width: 100%;\n  color: #757575;\n  text-align: center;\n  font-size: 80%;\n}\n.Login-lineThrough-2-Nxk::before {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  z-index: -1;\n  margin-top: -5px;\n  margin-left: -20px;\n  width: 40px;\n  height: 10px;\n  background-color: #fff;\n  content: '';\n}\n.Login-lineThrough-2-Nxk::after {\n  position: absolute;\n  top: 49%;\n  z-index: -2;\n  display: block;\n  width: 100%;\n  border-bottom: 1px solid #ddd;\n  content: '';\n}\n.Login-loginBlock-23nMp {\n  padding: 60px 40px;\n  min-width: 300px;\n  margin-left: auto;\n}\n.Login-promo-1oFL3 {\n  width: 100%;\n  background-image: url(" + escape(__webpack_require__("./src/routes/login/bg.jpg")) + ");\n  background-repeat: none;\n  background-position: center;\n  background-size: cover;\n  position: relative;\n}\n.Login-promoText-2d-xC {\n  color:white;\n  font-weight: 400;\n  font-size: 3.3em;\n  text-align: center;\n  margin:0 auto;\n  margin-top:10%;\n}\n.Login-logo-10rC3 {\n  width: 120px;\n  height: 120px;\n  background: #fff;\n  border-radius: 50%;\n  border: 3px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%,-50%);\n      -ms-transform: translate(-50%,-50%);\n          transform: translate(-50%,-50%);\n}\n.Login-logo-10rC3 svg {\n  margin: 50%;\n  -webkit-transform: translate(-50%,-50%);\n      -ms-transform: translate(-50%,-50%);\n          transform: translate(-50%,-50%);\n}\n", "", {"version":3,"sources":["D:/Мария/Documents/Courses/LizardSoft/Proton/src/routes/login/Login.css"],"names":[],"mappings":"AAAA;;;;;;;GAOG;AACH;;;;;;;GAOG;AACH;EACE;;gFAE8E;;EAE9E,kEAAkE;;EAElE;;gFAE8E;;EAE9E,4BAA4B;;EAE5B;;gFAE8E;;EAE9E,uBAAuB,EAAE,gCAAgC;EACzD,uBAAuB,EAAE,2BAA2B;EACpD,uBAAuB,EAAE,6BAA6B;EACtD,wBAAwB,CAAC,iCAAiC;CAC3D;AACD;EACE,qJAAqJ;EACrJ,iBAAiB;EACjB,gBAAgB;EAChB,WAAW;EACX,UAAU;CACX;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;;CAEhB;AACD;EACE,UAAU;CACX;AACD;EACE,eAAe;EACf,WAAW;EACX,YAAY;EACZ,cAAc;EACd,qBAAqB;EACrB,cAAc;CACf;AACD;EACE,kBAAkB;CACnB;AACD;EACE,WAAW;EACX,qBAAqB;EACrB,cAAc;EACd,uBAAuB;MACnB,+BAA+B;CACpC;AACD;GACG,oBAAoB;CACtB;AACD;EACE,eAAe;EACf,iBAAiB;EACjB,eAAe;EACf,qBAAqB;CACtB;AACD;EACE,eAAe;EACf,+BAA+B;UACvB,uBAAuB;EAC/B,gBAAgB;EAChB,mBAAmB;EACnB,YAAY;EACZ,aAAa;EACb,eAAe;EACf,uBAAuB;EACvB,6BAA6B;EAC7B,0BAA0B;EAC1B,sBAAsB;EACtB,gBAAgB;EAChB,uBAAuB;EACvB,yFAAyF;EACzF,iFAAiF;EACjF,4EAA4E;EAC5E,yEAAyE;EACzE,+GAA+G;EAC/G,0BAA0B;;CAE3B;AACD;EACE,eAAe;EACf,uBAAuB;EACvB,sBAAsB;EACtB,cAAc;EACd,uDAAuD;EACvD,+CAA+C;CAChD;AACD;EACE,eAAe;EACf,+BAA+B;UACvB,uBAAuB;EAC/B,UAAU;EACV,mBAAmB;EACnB,YAAY;EACZ,WAAW;EACX,0BAA0B;EAC1B,iBAAiB;EACjB,oBAAoB;EACpB,YAAY;EACZ,mBAAmB;EACnB,sBAAsB;EACtB,gBAAgB;EAChB,uBAAuB;EACvB,gBAAgB;CACjB;AACD;EACE,mCAAmC;CACpC;AACD;EACE,sBAAsB;EACtB,mDAAmD;UAC3C,2CAA2C;CACpD;AACD;EACE,sBAAsB;EACtB,oBAAoB;CAErB;AACD;EACE,oBAAoB;CACrB;AACD;EACE,eAAe;EACf,yBAAyB;EACzB,oBAAoB;CAErB;AACD;EACE,oBAAoB;CACrB;AACD;EACE,sBAAsB;EACtB,oBAAoB;CAErB;AACD;EACE,oBAAoB;CACrB;AACD;EACE,sBAAsB;EACtB,oBAAoB;CAErB;AACD;EACE,oBAAoB;CACrB;AACD;EACE,sBAAsB;EACtB,YAAY;EACZ,YAAY;EACZ,aAAa;EACb,uBAAuB;EACvB,mBAAmB;CACpB;AACD;EACE,mBAAmB;EACnB,WAAW;EACX,eAAe;EACf,oBAAoB;EACpB,YAAY;EACZ,eAAe;EACf,mBAAmB;EACnB,eAAe;CAChB;AACD;EACE,mBAAmB;EACnB,SAAS;EACT,UAAU;EACV,YAAY;EACZ,iBAAiB;EACjB,mBAAmB;EACnB,YAAY;EACZ,aAAa;EACb,uBAAuB;EACvB,YAAY;CACb;AACD;EACE,mBAAmB;EACnB,SAAS;EACT,YAAY;EACZ,eAAe;EACf,YAAY;EACZ,8BAA8B;EAC9B,YAAY;CACb;AACD;EACE,mBAAmB;EACnB,iBAAiB;EACjB,kBAAkB;CACnB;AACD;EACE,YAAY;EACZ,gDAAkC;EAClC,wBAAwB;EACxB,4BAA4B;EAC5B,uBAAuB;EACvB,mBAAmB;CACpB;AACD;EACE,YAAY;EACZ,iBAAiB;EACjB,iBAAiB;EACjB,mBAAmB;EACnB,cAAc;EACd,eAAe;CAChB;AACD;EACE,aAAa;EACb,cAAc;EACd,iBAAiB;EACjB,mBAAmB;EACnB,YAAY;EACZ,mBAAmB;EACnB,SAAS;EACT,UAAU;EACV,wCAAwC;MACpC,oCAAoC;UAChC,gCAAgC;CACzC;AACD;EACE,YAAY;EACZ,wCAAwC;MACpC,oCAAoC;UAChC,gCAAgC;CACzC","file":"Login.css","sourcesContent":["/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: 'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1000px;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n}\nbody {\n  font-family: Roboto,-apple-system,system-ui,BlinkMacSystemFont,Segoe UI,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,Arial,sans-serif;\n  line-height: 1.5;\n  font-size: 14px;\n  padding: 0;\n  margin: 0;\n}\n.heading {\n  font-weight: 7;\n}\n.subheading {\n  font-weight: 3;\n}\nh1,h2,h3,h4,h5,h6{\n  font-weight: 3;\n\n}\n.root {\n  padding:0;\n}\n.container {\n  margin: 0 auto;\n  padding: 0;\n  width: 100%;\n  height: 100vh;\n  display: -ms-flexbox;\n  display: flex;\n}\n.lead {\n  font-size: 1.25em;\n}\n.wrapper {\n  width:100%;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: justify;\n      justify-content: space-between;\n}\n.formGroup {\n   margin-bottom: 15px;\n}\n.label {\n  display: block;\n  font-weight: 300;\n  color: #343a40;\n  margin-bottom: 0.5em;\n}\n.input {\n  display: block;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  margin: 5px 0 0;\n  padding: 10px 16px;\n  width: 100%;\n  height: 46px;\n  color: #495057;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid #ced4da;\n  border-radius: 0.25em;\n  font-size: 18px;\n  line-height: 1.3333333;\n  -webkit-transition: border-color ease-in-out 0.15s, -webkit-box-shadow ease-in-out 0.15s;\n  transition: border-color ease-in-out 0.15s, -webkit-box-shadow ease-in-out 0.15s;\n  -o-transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;\n  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;\n  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s, -webkit-box-shadow ease-in-out 0.15s;\n  font: 400 13.3333px Arial;\n\n}\n.input:focus {\n  color: #495057;\n  background-color: #fff;\n  border-color: #9acffa;\n  outline: none;\n  -webkit-box-shadow: 0 0 0 0.2rem rgba(33,150,243,0.25);\n  box-shadow: 0 0 0 0.2rem rgba(33,150,243,0.25);\n}\n.button {\n  display: block;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  margin: 0;\n  padding: 10px 16px;\n  width: 100%;\n  outline: 0;\n  border: 1px solid #373277;\n  border-radius: 0;\n  background: #373277;\n  color: #fff;\n  text-align: center;\n  text-decoration: none;\n  font-size: 18px;\n  line-height: 1.3333333;\n  cursor: pointer;\n}\n.button:hover {\n  background: rgba(54, 50, 119, 0.8);\n}\n.button:focus {\n  border-color: #0074c2;\n  -webkit-box-shadow: 0 0 8px rgba(0, 116, 194, 0.6);\n          box-shadow: 0 0 8px rgba(0, 116, 194, 0.6);\n}\n.facebook {\n  border-color: #3b5998;\n  background: #3b5998;\n  composes: button;\n}\n.facebook:hover {\n  background: #2d4373;\n}\n.microsoft {\n  font-weight: 3;\n  border:1px solid #ffb900;\n  background: #ffb900;\n  composes: button;\n}\n.microsoft:hover {\n  background: #e5a800;\n}\n.google {\n  border-color: #dd4b39;\n  background: #dd4b39;\n  composes: button;\n}\n.google:hover {\n  background: #c23321;\n}\n.twitter {\n  border-color: #55acee;\n  background: #55acee;\n  composes: button;\n}\n.twitter:hover {\n  background: #2795e9;\n}\n.icon {\n  display: inline-block;\n  margin: 5px;\n  width: 20px;\n  height: 20px;\n  vertical-align: middle;\n  fill: currentColor;\n}\n.lineThrough {\n  position: relative;\n  z-index: 1;\n  display: block;\n  margin-bottom: 15px;\n  width: 100%;\n  color: #757575;\n  text-align: center;\n  font-size: 80%;\n}\n.lineThrough::before {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  z-index: -1;\n  margin-top: -5px;\n  margin-left: -20px;\n  width: 40px;\n  height: 10px;\n  background-color: #fff;\n  content: '';\n}\n.lineThrough::after {\n  position: absolute;\n  top: 49%;\n  z-index: -2;\n  display: block;\n  width: 100%;\n  border-bottom: 1px solid #ddd;\n  content: '';\n}\n.loginBlock {\n  padding: 60px 40px;\n  min-width: 300px;\n  margin-left: auto;\n}\n.promo {\n  width: 100%;\n  background-image: url('./bg.jpg');\n  background-repeat: none;\n  background-position: center;\n  background-size: cover;\n  position: relative;\n}\n.promoText {\n  color:white;\n  font-weight: 400;\n  font-size: 3.3em;\n  text-align: center;\n  margin:0 auto;\n  margin-top:10%;\n}\n.logo {\n  width: 120px;\n  height: 120px;\n  background: #fff;\n  border-radius: 50%;\n  border: 3px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%,-50%);\n      -ms-transform: translate(-50%,-50%);\n          transform: translate(-50%,-50%);\n}\n.logo svg {\n  margin: 50%;\n  -webkit-transform: translate(-50%,-50%);\n      -ms-transform: translate(-50%,-50%);\n          transform: translate(-50%,-50%);\n}\n"],"sourceRoot":""}]);

// exports
exports.locals = {
	"heading": "Login-heading-32nC6",
	"subheading": "Login-subheading-ocNuy",
	"root": "Login-root-3w4yh",
	"container": "Login-container-3tEjn",
	"lead": "Login-lead-24BLj",
	"wrapper": "Login-wrapper-2Aamh",
	"formGroup": "Login-formGroup-1FsFn",
	"label": "Login-label-2QXdt",
	"input": "Login-input-2uwlQ",
	"button": "Login-button-1ZNK2",
	"facebook": "Login-facebook-2FzS0 Login-button-1ZNK2",
	"microsoft": "Login-microsoft-3e5mf Login-button-1ZNK2",
	"google": "Login-google-lsuqy Login-button-1ZNK2",
	"twitter": "Login-twitter-3DDSi Login-button-1ZNK2",
	"icon": "Login-icon-3VPzE",
	"lineThrough": "Login-lineThrough-2-Nxk",
	"loginBlock": "Login-loginBlock-23nMp",
	"promo": "Login-promo-1oFL3",
	"promoText": "Login-promoText-2d-xC",
	"logo": "Login-logo-10rC3"
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
var _jsxFileName = "D:\\\u041C\u0430\u0440\u0438\u044F\\Documents\\Courses\\LizardSoft\\Proton\\src\\routes\\login\\Login.js";

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
var _jsxFileName = "D:\\\u041C\u0430\u0440\u0438\u044F\\Documents\\Courses\\LizardSoft\\Proton\\src\\routes\\login\\index.js";

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
var _jsxFileName = "D:\\\u041C\u0430\u0440\u0438\u044F\\Documents\\Courses\\LizardSoft\\Proton\\src\\routes\\login\\microsoftLogin.js";

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
        redirectUri: "http://localhost:3000/about" // required: redirectUri registered in https://apps.dev.microsoft.com for your app
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
          lineNumber: 28
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
          lineNumber: 29
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
        d: "M0 36.357L104.62 22.11l.045 100.914-104.57.595L0 36.358zm104.57 98.293l.08 101.002L.081 221.275l-.006-87.302 104.494.677zm12.682-114.405L255.968 0v121.74l-138.716 1.1V20.246zM256 135.6l-.033 121.191-138.716-19.578-.194-101.84L256 135.6z",
        fill: "#ffffff",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2h1bmtzL2xvZ2luLmpzIiwic291cmNlcyI6WyJEOi/QnNCw0YDQuNGPL0RvY3VtZW50cy9Db3Vyc2VzL0xpemFyZFNvZnQvUHJvdG9uL3NyYy9yb3V0ZXMvbG9naW4vTG9naW4uY3NzIiwiRDov0JzQsNGA0LjRjy9Eb2N1bWVudHMvQ291cnNlcy9MaXphcmRTb2Z0L1Byb3Rvbi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvdXJsL2VzY2FwZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcm91dGVzL2xvZ2luL0xvZ2luLmNzcz9iZjc1IiwiRDov0JzQsNGA0LjRjy9Eb2N1bWVudHMvQ291cnNlcy9MaXphcmRTb2Z0L1Byb3Rvbi9zcmMvcm91dGVzL2xvZ2luL0xvZ2luLmpzIiwiRDov0JzQsNGA0LjRjy9Eb2N1bWVudHMvQ291cnNlcy9MaXphcmRTb2Z0L1Byb3Rvbi9zcmMvcm91dGVzL2xvZ2luL2JnLmpwZyIsIndlYnBhY2s6Ly8vLi9zcmMvcm91dGVzL2xvZ2luL2JnLmpwZz9hNzU4IiwiRDov0JzQsNGA0LjRjy9Eb2N1bWVudHMvQ291cnNlcy9MaXphcmRTb2Z0L1Byb3Rvbi9zcmMvcm91dGVzL2xvZ2luL2luZGV4LmpzIiwiRDov0JzQsNGA0LjRjy9Eb2N1bWVudHMvQ291cnNlcy9MaXphcmRTb2Z0L1Byb3Rvbi9zcmMvcm91dGVzL2xvZ2luL21pY3Jvc29mdExvZ2luLmpzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBlc2NhcGUgPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL3VybC9lc2NhcGUuanNcIik7XG5leHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHRydWUpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLyoqXFxuICogUmVhY3QgU3RhcnRlciBLaXQgKGh0dHBzOi8vd3d3LnJlYWN0c3RhcnRlcmtpdC5jb20vKVxcbiAqXFxuICogQ29weXJpZ2h0IMKpIDIwMTQtcHJlc2VudCBLcmlhc29mdCwgTExDLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxcbiAqXFxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXFxuICogTElDRU5TRS50eHQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cXG4gKi9cXG4vKipcXG4gKiBSZWFjdCBTdGFydGVyIEtpdCAoaHR0cHM6Ly93d3cucmVhY3RzdGFydGVya2l0LmNvbS8pXFxuICpcXG4gKiBDb3B5cmlnaHQgwqkgMjAxNC1wcmVzZW50IEtyaWFzb2Z0LCBMTEMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXFxuICpcXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcXG4gKiBMSUNFTlNFLnR4dCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxcbiAqL1xcbjpyb290IHtcXG4gIC8qXFxuICAgKiBUeXBvZ3JhcGh5XFxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4gIC0tZm9udC1mYW1pbHktYmFzZTogJ1NlZ29lIFVJJywgJ0hlbHZldGljYU5ldWUtTGlnaHQnLCBzYW5zLXNlcmlmO1xcblxcbiAgLypcXG4gICAqIExheW91dFxcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuICAtLW1heC1jb250ZW50LXdpZHRoOiAxMDAwcHg7XFxuXFxuICAvKlxcbiAgICogTWVkaWEgcXVlcmllcyBicmVha3BvaW50c1xcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuICAtLXNjcmVlbi14cy1taW46IDQ4MHB4OyAgLyogRXh0cmEgc21hbGwgc2NyZWVuIC8gcGhvbmUgKi9cXG4gIC0tc2NyZWVuLXNtLW1pbjogNzY4cHg7ICAvKiBTbWFsbCBzY3JlZW4gLyB0YWJsZXQgKi9cXG4gIC0tc2NyZWVuLW1kLW1pbjogOTkycHg7ICAvKiBNZWRpdW0gc2NyZWVuIC8gZGVza3RvcCAqL1xcbiAgLS1zY3JlZW4tbGctbWluOiAxMjAwcHg7IC8qIExhcmdlIHNjcmVlbiAvIHdpZGUgZGVza3RvcCAqL1xcbn1cXG5ib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sLWFwcGxlLXN5c3RlbSxzeXN0ZW0tdWksQmxpbmtNYWNTeXN0ZW1Gb250LFNlZ29lIFVJLE94eWdlbixVYnVudHUsQ2FudGFyZWxsLEZpcmEgU2FucyxEcm9pZCBTYW5zLEhlbHZldGljYSBOZXVlLEFyaWFsLHNhbnMtc2VyaWY7XFxuICBsaW5lLWhlaWdodDogMS41O1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG59XFxuLkxvZ2luLWhlYWRpbmctMzJuQzYge1xcbiAgZm9udC13ZWlnaHQ6IDc7XFxufVxcbi5Mb2dpbi1zdWJoZWFkaW5nLW9jTnV5IHtcXG4gIGZvbnQtd2VpZ2h0OiAzO1xcbn1cXG5oMSxoMixoMyxoNCxoNSxoNntcXG4gIGZvbnQtd2VpZ2h0OiAzO1xcblxcbn1cXG4uTG9naW4tcm9vdC0zdzR5aCB7XFxuICBwYWRkaW5nOjA7XFxufVxcbi5Mb2dpbi1jb250YWluZXItM3RFam4ge1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBwYWRkaW5nOiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG4uTG9naW4tbGVhZC0yNEJMaiB7XFxuICBmb250LXNpemU6IDEuMjVlbTtcXG59XFxuLkxvZ2luLXdyYXBwZXItMkFhbWgge1xcbiAgd2lkdGg6MTAwJTtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC1tcy1mbGV4LXBhY2s6IGp1c3RpZnk7XFxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG4uTG9naW4tZm9ybUdyb3VwLTFGc0ZuIHtcXG4gICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcbn1cXG4uTG9naW4tbGFiZWwtMlFYZHQge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBmb250LXdlaWdodDogMzAwO1xcbiAgY29sb3I6ICMzNDNhNDA7XFxuICBtYXJnaW4tYm90dG9tOiAwLjVlbTtcXG59XFxuLkxvZ2luLWlucHV0LTJ1d2xRIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgbWFyZ2luOiA1cHggMCAwO1xcbiAgcGFkZGluZzogMTBweCAxNnB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDQ2cHg7XFxuICBjb2xvcjogIzQ5NTA1NztcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2NlZDRkYTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuMjVlbTtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjMzMzMzMzM7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IGJvcmRlci1jb2xvciBlYXNlLWluLW91dCAwLjE1cywgLXdlYmtpdC1ib3gtc2hhZG93IGVhc2UtaW4tb3V0IDAuMTVzO1xcbiAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIGVhc2UtaW4tb3V0IDAuMTVzLCAtd2Via2l0LWJveC1zaGFkb3cgZWFzZS1pbi1vdXQgMC4xNXM7XFxuICAtby10cmFuc2l0aW9uOiBib3JkZXItY29sb3IgZWFzZS1pbi1vdXQgMC4xNXMsIGJveC1zaGFkb3cgZWFzZS1pbi1vdXQgMC4xNXM7XFxuICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgZWFzZS1pbi1vdXQgMC4xNXMsIGJveC1zaGFkb3cgZWFzZS1pbi1vdXQgMC4xNXM7XFxuICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgZWFzZS1pbi1vdXQgMC4xNXMsIGJveC1zaGFkb3cgZWFzZS1pbi1vdXQgMC4xNXMsIC13ZWJraXQtYm94LXNoYWRvdyBlYXNlLWluLW91dCAwLjE1cztcXG4gIGZvbnQ6IDQwMCAxMy4zMzMzcHggQXJpYWw7XFxuXFxufVxcbi5Mb2dpbi1pbnB1dC0ydXdsUTpmb2N1cyB7XFxuICBjb2xvcjogIzQ5NTA1NztcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBib3JkZXItY29sb3I6ICM5YWNmZmE7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMCAwLjJyZW0gcmdiYSgzMywxNTAsMjQzLDAuMjUpO1xcbiAgYm94LXNoYWRvdzogMCAwIDAgMC4ycmVtIHJnYmEoMzMsMTUwLDI0MywwLjI1KTtcXG59XFxuLkxvZ2luLWJ1dHRvbi0xWk5LMiB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDEwcHggMTZweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgb3V0bGluZTogMDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMzNzMyNzc7XFxuICBib3JkZXItcmFkaXVzOiAwO1xcbiAgYmFja2dyb3VuZDogIzM3MzI3NztcXG4gIGNvbG9yOiAjZmZmO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgbGluZS1oZWlnaHQ6IDEuMzMzMzMzMztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLkxvZ2luLWJ1dHRvbi0xWk5LMjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDU0LCA1MCwgMTE5LCAwLjgpO1xcbn1cXG4uTG9naW4tYnV0dG9uLTFaTksyOmZvY3VzIHtcXG4gIGJvcmRlci1jb2xvcjogIzAwNzRjMjtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDhweCByZ2JhKDAsIDExNiwgMTk0LCAwLjYpO1xcbiAgICAgICAgICBib3gtc2hhZG93OiAwIDAgOHB4IHJnYmEoMCwgMTE2LCAxOTQsIDAuNik7XFxufVxcbi5Mb2dpbi1mYWNlYm9vay0yRnpTMCB7XFxuICBib3JkZXItY29sb3I6ICMzYjU5OTg7XFxuICBiYWNrZ3JvdW5kOiAjM2I1OTk4O1xcbn1cXG4uTG9naW4tZmFjZWJvb2stMkZ6UzA6aG92ZXIge1xcbiAgYmFja2dyb3VuZDogIzJkNDM3MztcXG59XFxuLkxvZ2luLW1pY3Jvc29mdC0zZTVtZiB7XFxuICBmb250LXdlaWdodDogMztcXG4gIGJvcmRlcjoxcHggc29saWQgI2ZmYjkwMDtcXG4gIGJhY2tncm91bmQ6ICNmZmI5MDA7XFxufVxcbi5Mb2dpbi1taWNyb3NvZnQtM2U1bWY6aG92ZXIge1xcbiAgYmFja2dyb3VuZDogI2U1YTgwMDtcXG59XFxuLkxvZ2luLWdvb2dsZS1sc3VxeSB7XFxuICBib3JkZXItY29sb3I6ICNkZDRiMzk7XFxuICBiYWNrZ3JvdW5kOiAjZGQ0YjM5O1xcbn1cXG4uTG9naW4tZ29vZ2xlLWxzdXF5OmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6ICNjMjMzMjE7XFxufVxcbi5Mb2dpbi10d2l0dGVyLTNERFNpIHtcXG4gIGJvcmRlci1jb2xvcjogIzU1YWNlZTtcXG4gIGJhY2tncm91bmQ6ICM1NWFjZWU7XFxufVxcbi5Mb2dpbi10d2l0dGVyLTNERFNpOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6ICMyNzk1ZTk7XFxufVxcbi5Mb2dpbi1pY29uLTNWUHpFIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIG1hcmdpbjogNXB4O1xcbiAgd2lkdGg6IDIwcHg7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgZmlsbDogY3VycmVudENvbG9yO1xcbn1cXG4uTG9naW4tbGluZVRocm91Z2gtMi1OeGsge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgei1pbmRleDogMTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgY29sb3I6ICM3NTc1NzU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDgwJTtcXG59XFxuLkxvZ2luLWxpbmVUaHJvdWdoLTItTnhrOjpiZWZvcmUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxuICB6LWluZGV4OiAtMTtcXG4gIG1hcmdpbi10b3A6IC01cHg7XFxuICBtYXJnaW4tbGVmdDogLTIwcHg7XFxuICB3aWR0aDogNDBweDtcXG4gIGhlaWdodDogMTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBjb250ZW50OiAnJztcXG59XFxuLkxvZ2luLWxpbmVUaHJvdWdoLTItTnhrOjphZnRlciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDQ5JTtcXG4gIHotaW5kZXg6IC0yO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xcbiAgY29udGVudDogJyc7XFxufVxcbi5Mb2dpbi1sb2dpbkJsb2NrLTIzbk1wIHtcXG4gIHBhZGRpbmc6IDYwcHggNDBweDtcXG4gIG1pbi13aWR0aDogMzAwcHg7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG59XFxuLkxvZ2luLXByb21vLTFvRkwzIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgZXNjYXBlKHJlcXVpcmUoXCIuL2JnLmpwZ1wiKSkgKyBcIik7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm9uZTtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5Mb2dpbi1wcm9tb1RleHQtMmQteEMge1xcbiAgY29sb3I6d2hpdGU7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgZm9udC1zaXplOiAzLjNlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbjowIGF1dG87XFxuICBtYXJnaW4tdG9wOjEwJTtcXG59XFxuLkxvZ2luLWxvZ28tMTByQzMge1xcbiAgd2lkdGg6IDEyMHB4O1xcbiAgaGVpZ2h0OiAxMjBweDtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBib3JkZXI6IDNweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpO1xcbiAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpO1xcbn1cXG4uTG9naW4tbG9nby0xMHJDMyBzdmcge1xcbiAgbWFyZ2luOiA1MCU7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSk7XFxuICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSk7XFxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSk7XFxufVxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJEOi/QnNCw0YDQuNGPL0RvY3VtZW50cy9Db3Vyc2VzL0xpemFyZFNvZnQvUHJvdG9uL3NyYy9yb3V0ZXMvbG9naW4vTG9naW4uY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOzs7Ozs7O0dBT0c7QUFDSDs7Ozs7OztHQU9HO0FBQ0g7RUFDRTs7Z0ZBRThFOztFQUU5RSxrRUFBa0U7O0VBRWxFOztnRkFFOEU7O0VBRTlFLDRCQUE0Qjs7RUFFNUI7O2dGQUU4RTs7RUFFOUUsdUJBQXVCLEVBQUUsZ0NBQWdDO0VBQ3pELHVCQUF1QixFQUFFLDJCQUEyQjtFQUNwRCx1QkFBdUIsRUFBRSw2QkFBNkI7RUFDdEQsd0JBQXdCLENBQUMsaUNBQWlDO0NBQzNEO0FBQ0Q7RUFDRSxxSkFBcUo7RUFDckosaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsVUFBVTtDQUNYO0FBQ0Q7RUFDRSxlQUFlO0NBQ2hCO0FBQ0Q7RUFDRSxlQUFlO0NBQ2hCO0FBQ0Q7RUFDRSxlQUFlOztDQUVoQjtBQUNEO0VBQ0UsVUFBVTtDQUNYO0FBQ0Q7RUFDRSxlQUFlO0VBQ2YsV0FBVztFQUNYLFlBQVk7RUFDWixjQUFjO0VBQ2QscUJBQXFCO0VBQ3JCLGNBQWM7Q0FDZjtBQUNEO0VBQ0Usa0JBQWtCO0NBQ25CO0FBQ0Q7RUFDRSxXQUFXO0VBQ1gscUJBQXFCO0VBQ3JCLGNBQWM7RUFDZCx1QkFBdUI7TUFDbkIsK0JBQStCO0NBQ3BDO0FBQ0Q7R0FDRyxvQkFBb0I7Q0FDdEI7QUFDRDtFQUNFLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLHFCQUFxQjtDQUN0QjtBQUNEO0VBQ0UsZUFBZTtFQUNmLCtCQUErQjtVQUN2Qix1QkFBdUI7RUFDL0IsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osYUFBYTtFQUNiLGVBQWU7RUFDZix1QkFBdUI7RUFDdkIsNkJBQTZCO0VBQzdCLDBCQUEwQjtFQUMxQixzQkFBc0I7RUFDdEIsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtFQUN2Qix5RkFBeUY7RUFDekYsaUZBQWlGO0VBQ2pGLDRFQUE0RTtFQUM1RSx5RUFBeUU7RUFDekUsK0dBQStHO0VBQy9HLDBCQUEwQjs7Q0FFM0I7QUFDRDtFQUNFLGVBQWU7RUFDZix1QkFBdUI7RUFDdkIsc0JBQXNCO0VBQ3RCLGNBQWM7RUFDZCx1REFBdUQ7RUFDdkQsK0NBQStDO0NBQ2hEO0FBQ0Q7RUFDRSxlQUFlO0VBQ2YsK0JBQStCO1VBQ3ZCLHVCQUF1QjtFQUMvQixVQUFVO0VBQ1YsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixXQUFXO0VBQ1gsMEJBQTBCO0VBQzFCLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtFQUN2QixnQkFBZ0I7Q0FDakI7QUFDRDtFQUNFLG1DQUFtQztDQUNwQztBQUNEO0VBQ0Usc0JBQXNCO0VBQ3RCLG1EQUFtRDtVQUMzQywyQ0FBMkM7Q0FDcEQ7QUFDRDtFQUNFLHNCQUFzQjtFQUN0QixvQkFBb0I7Q0FFckI7QUFDRDtFQUNFLG9CQUFvQjtDQUNyQjtBQUNEO0VBQ0UsZUFBZTtFQUNmLHlCQUF5QjtFQUN6QixvQkFBb0I7Q0FFckI7QUFDRDtFQUNFLG9CQUFvQjtDQUNyQjtBQUNEO0VBQ0Usc0JBQXNCO0VBQ3RCLG9CQUFvQjtDQUVyQjtBQUNEO0VBQ0Usb0JBQW9CO0NBQ3JCO0FBQ0Q7RUFDRSxzQkFBc0I7RUFDdEIsb0JBQW9CO0NBRXJCO0FBQ0Q7RUFDRSxvQkFBb0I7Q0FDckI7QUFDRDtFQUNFLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osWUFBWTtFQUNaLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0NBQ3BCO0FBQ0Q7RUFDRSxtQkFBbUI7RUFDbkIsV0FBVztFQUNYLGVBQWU7RUFDZixvQkFBb0I7RUFDcEIsWUFBWTtFQUNaLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsZUFBZTtDQUNoQjtBQUNEO0VBQ0UsbUJBQW1CO0VBQ25CLFNBQVM7RUFDVCxVQUFVO0VBQ1YsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsWUFBWTtDQUNiO0FBQ0Q7RUFDRSxtQkFBbUI7RUFDbkIsU0FBUztFQUNULFlBQVk7RUFDWixlQUFlO0VBQ2YsWUFBWTtFQUNaLDhCQUE4QjtFQUM5QixZQUFZO0NBQ2I7QUFDRDtFQUNFLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsa0JBQWtCO0NBQ25CO0FBQ0Q7RUFDRSxZQUFZO0VBQ1osZ0RBQWtDO0VBQ2xDLHdCQUF3QjtFQUN4Qiw0QkFBNEI7RUFDNUIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtDQUNwQjtBQUNEO0VBQ0UsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxlQUFlO0NBQ2hCO0FBQ0Q7RUFDRSxhQUFhO0VBQ2IsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1QsVUFBVTtFQUNWLHdDQUF3QztNQUNwQyxvQ0FBb0M7VUFDaEMsZ0NBQWdDO0NBQ3pDO0FBQ0Q7RUFDRSxZQUFZO0VBQ1osd0NBQXdDO01BQ3BDLG9DQUFvQztVQUNoQyxnQ0FBZ0M7Q0FDekNcIixcImZpbGVcIjpcIkxvZ2luLmNzc1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKipcXG4gKiBSZWFjdCBTdGFydGVyIEtpdCAoaHR0cHM6Ly93d3cucmVhY3RzdGFydGVya2l0LmNvbS8pXFxuICpcXG4gKiBDb3B5cmlnaHQgwqkgMjAxNC1wcmVzZW50IEtyaWFzb2Z0LCBMTEMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXFxuICpcXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcXG4gKiBMSUNFTlNFLnR4dCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxcbiAqL1xcbi8qKlxcbiAqIFJlYWN0IFN0YXJ0ZXIgS2l0IChodHRwczovL3d3dy5yZWFjdHN0YXJ0ZXJraXQuY29tLylcXG4gKlxcbiAqIENvcHlyaWdodCDCqSAyMDE0LXByZXNlbnQgS3JpYXNvZnQsIExMQy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cXG4gKlxcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxcbiAqIExJQ0VOU0UudHh0IGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXFxuICovXFxuOnJvb3Qge1xcbiAgLypcXG4gICAqIFR5cG9ncmFwaHlcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiAgLS1mb250LWZhbWlseS1iYXNlOiAnU2Vnb2UgVUknLCAnSGVsdmV0aWNhTmV1ZS1MaWdodCcsIHNhbnMtc2VyaWY7XFxuXFxuICAvKlxcbiAgICogTGF5b3V0XFxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4gIC0tbWF4LWNvbnRlbnQtd2lkdGg6IDEwMDBweDtcXG5cXG4gIC8qXFxuICAgKiBNZWRpYSBxdWVyaWVzIGJyZWFrcG9pbnRzXFxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4gIC0tc2NyZWVuLXhzLW1pbjogNDgwcHg7ICAvKiBFeHRyYSBzbWFsbCBzY3JlZW4gLyBwaG9uZSAqL1xcbiAgLS1zY3JlZW4tc20tbWluOiA3NjhweDsgIC8qIFNtYWxsIHNjcmVlbiAvIHRhYmxldCAqL1xcbiAgLS1zY3JlZW4tbWQtbWluOiA5OTJweDsgIC8qIE1lZGl1bSBzY3JlZW4gLyBkZXNrdG9wICovXFxuICAtLXNjcmVlbi1sZy1taW46IDEyMDBweDsgLyogTGFyZ2Ugc2NyZWVuIC8gd2lkZSBkZXNrdG9wICovXFxufVxcbmJvZHkge1xcbiAgZm9udC1mYW1pbHk6IFJvYm90bywtYXBwbGUtc3lzdGVtLHN5c3RlbS11aSxCbGlua01hY1N5c3RlbUZvbnQsU2Vnb2UgVUksT3h5Z2VuLFVidW50dSxDYW50YXJlbGwsRmlyYSBTYW5zLERyb2lkIFNhbnMsSGVsdmV0aWNhIE5ldWUsQXJpYWwsc2Fucy1zZXJpZjtcXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG4uaGVhZGluZyB7XFxuICBmb250LXdlaWdodDogNztcXG59XFxuLnN1YmhlYWRpbmcge1xcbiAgZm9udC13ZWlnaHQ6IDM7XFxufVxcbmgxLGgyLGgzLGg0LGg1LGg2e1xcbiAgZm9udC13ZWlnaHQ6IDM7XFxuXFxufVxcbi5yb290IHtcXG4gIHBhZGRpbmc6MDtcXG59XFxuLmNvbnRhaW5lciB7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIHBhZGRpbmc6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcbi5sZWFkIHtcXG4gIGZvbnQtc2l6ZTogMS4yNWVtO1xcbn1cXG4ud3JhcHBlciB7XFxuICB3aWR0aDoxMDAlO1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLW1zLWZsZXgtcGFjazoganVzdGlmeTtcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcbi5mb3JtR3JvdXAge1xcbiAgIG1hcmdpbi1ib3R0b206IDE1cHg7XFxufVxcbi5sYWJlbCB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICBjb2xvcjogIzM0M2E0MDtcXG4gIG1hcmdpbi1ib3R0b206IDAuNWVtO1xcbn1cXG4uaW5wdXQge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBtYXJnaW46IDVweCAwIDA7XFxuICBwYWRkaW5nOiAxMHB4IDE2cHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogNDZweDtcXG4gIGNvbG9yOiAjNDk1MDU3O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjY2VkNGRhO1xcbiAgYm9yZGVyLXJhZGl1czogMC4yNWVtO1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgbGluZS1oZWlnaHQ6IDEuMzMzMzMzMztcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIGVhc2UtaW4tb3V0IDAuMTVzLCAtd2Via2l0LWJveC1zaGFkb3cgZWFzZS1pbi1vdXQgMC4xNXM7XFxuICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgZWFzZS1pbi1vdXQgMC4xNXMsIC13ZWJraXQtYm94LXNoYWRvdyBlYXNlLWluLW91dCAwLjE1cztcXG4gIC1vLXRyYW5zaXRpb246IGJvcmRlci1jb2xvciBlYXNlLWluLW91dCAwLjE1cywgYm94LXNoYWRvdyBlYXNlLWluLW91dCAwLjE1cztcXG4gIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciBlYXNlLWluLW91dCAwLjE1cywgYm94LXNoYWRvdyBlYXNlLWluLW91dCAwLjE1cztcXG4gIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciBlYXNlLWluLW91dCAwLjE1cywgYm94LXNoYWRvdyBlYXNlLWluLW91dCAwLjE1cywgLXdlYmtpdC1ib3gtc2hhZG93IGVhc2UtaW4tb3V0IDAuMTVzO1xcbiAgZm9udDogNDAwIDEzLjMzMzNweCBBcmlhbDtcXG5cXG59XFxuLmlucHV0OmZvY3VzIHtcXG4gIGNvbG9yOiAjNDk1MDU3O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIGJvcmRlci1jb2xvcjogIzlhY2ZmYTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAwIDAuMnJlbSByZ2JhKDMzLDE1MCwyNDMsMC4yNSk7XFxuICBib3gtc2hhZG93OiAwIDAgMCAwLjJyZW0gcmdiYSgzMywxNTAsMjQzLDAuMjUpO1xcbn1cXG4uYnV0dG9uIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMTBweCAxNnB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBvdXRsaW5lOiAwO1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzM3MzI3NztcXG4gIGJvcmRlci1yYWRpdXM6IDA7XFxuICBiYWNrZ3JvdW5kOiAjMzczMjc3O1xcbiAgY29sb3I6ICNmZmY7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBsaW5lLWhlaWdodDogMS4zMzMzMzMzO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6IHJnYmEoNTQsIDUwLCAxMTksIDAuOCk7XFxufVxcbi5idXR0b246Zm9jdXMge1xcbiAgYm9yZGVyLWNvbG9yOiAjMDA3NGMyO1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgOHB4IHJnYmEoMCwgMTE2LCAxOTQsIDAuNik7XFxuICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCA4cHggcmdiYSgwLCAxMTYsIDE5NCwgMC42KTtcXG59XFxuLmZhY2Vib29rIHtcXG4gIGJvcmRlci1jb2xvcjogIzNiNTk5ODtcXG4gIGJhY2tncm91bmQ6ICMzYjU5OTg7XFxuICBjb21wb3NlczogYnV0dG9uO1xcbn1cXG4uZmFjZWJvb2s6aG92ZXIge1xcbiAgYmFja2dyb3VuZDogIzJkNDM3MztcXG59XFxuLm1pY3Jvc29mdCB7XFxuICBmb250LXdlaWdodDogMztcXG4gIGJvcmRlcjoxcHggc29saWQgI2ZmYjkwMDtcXG4gIGJhY2tncm91bmQ6ICNmZmI5MDA7XFxuICBjb21wb3NlczogYnV0dG9uO1xcbn1cXG4ubWljcm9zb2Z0OmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6ICNlNWE4MDA7XFxufVxcbi5nb29nbGUge1xcbiAgYm9yZGVyLWNvbG9yOiAjZGQ0YjM5O1xcbiAgYmFja2dyb3VuZDogI2RkNGIzOTtcXG4gIGNvbXBvc2VzOiBidXR0b247XFxufVxcbi5nb29nbGU6aG92ZXIge1xcbiAgYmFja2dyb3VuZDogI2MyMzMyMTtcXG59XFxuLnR3aXR0ZXIge1xcbiAgYm9yZGVyLWNvbG9yOiAjNTVhY2VlO1xcbiAgYmFja2dyb3VuZDogIzU1YWNlZTtcXG4gIGNvbXBvc2VzOiBidXR0b247XFxufVxcbi50d2l0dGVyOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6ICMyNzk1ZTk7XFxufVxcbi5pY29uIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIG1hcmdpbjogNXB4O1xcbiAgd2lkdGg6IDIwcHg7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgZmlsbDogY3VycmVudENvbG9yO1xcbn1cXG4ubGluZVRocm91Z2gge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgei1pbmRleDogMTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgY29sb3I6ICM3NTc1NzU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDgwJTtcXG59XFxuLmxpbmVUaHJvdWdoOjpiZWZvcmUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxuICB6LWluZGV4OiAtMTtcXG4gIG1hcmdpbi10b3A6IC01cHg7XFxuICBtYXJnaW4tbGVmdDogLTIwcHg7XFxuICB3aWR0aDogNDBweDtcXG4gIGhlaWdodDogMTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBjb250ZW50OiAnJztcXG59XFxuLmxpbmVUaHJvdWdoOjphZnRlciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDQ5JTtcXG4gIHotaW5kZXg6IC0yO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xcbiAgY29udGVudDogJyc7XFxufVxcbi5sb2dpbkJsb2NrIHtcXG4gIHBhZGRpbmc6IDYwcHggNDBweDtcXG4gIG1pbi13aWR0aDogMzAwcHg7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG59XFxuLnByb21vIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuL2JnLmpwZycpO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4ucHJvbW9UZXh0IHtcXG4gIGNvbG9yOndoaXRlO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGZvbnQtc2l6ZTogMy4zZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW46MCBhdXRvO1xcbiAgbWFyZ2luLXRvcDoxMCU7XFxufVxcbi5sb2dvIHtcXG4gIHdpZHRoOiAxMjBweDtcXG4gIGhlaWdodDogMTIwcHg7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgYm9yZGVyOiAzcHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKTtcXG4gICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKTtcXG59XFxuLmxvZ28gc3ZnIHtcXG4gIG1hcmdpbjogNTAlO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpO1xcbiAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcblxuLy8gZXhwb3J0c1xuZXhwb3J0cy5sb2NhbHMgPSB7XG5cdFwiaGVhZGluZ1wiOiBcIkxvZ2luLWhlYWRpbmctMzJuQzZcIixcblx0XCJzdWJoZWFkaW5nXCI6IFwiTG9naW4tc3ViaGVhZGluZy1vY051eVwiLFxuXHRcInJvb3RcIjogXCJMb2dpbi1yb290LTN3NHloXCIsXG5cdFwiY29udGFpbmVyXCI6IFwiTG9naW4tY29udGFpbmVyLTN0RWpuXCIsXG5cdFwibGVhZFwiOiBcIkxvZ2luLWxlYWQtMjRCTGpcIixcblx0XCJ3cmFwcGVyXCI6IFwiTG9naW4td3JhcHBlci0yQWFtaFwiLFxuXHRcImZvcm1Hcm91cFwiOiBcIkxvZ2luLWZvcm1Hcm91cC0xRnNGblwiLFxuXHRcImxhYmVsXCI6IFwiTG9naW4tbGFiZWwtMlFYZHRcIixcblx0XCJpbnB1dFwiOiBcIkxvZ2luLWlucHV0LTJ1d2xRXCIsXG5cdFwiYnV0dG9uXCI6IFwiTG9naW4tYnV0dG9uLTFaTksyXCIsXG5cdFwiZmFjZWJvb2tcIjogXCJMb2dpbi1mYWNlYm9vay0yRnpTMCBMb2dpbi1idXR0b24tMVpOSzJcIixcblx0XCJtaWNyb3NvZnRcIjogXCJMb2dpbi1taWNyb3NvZnQtM2U1bWYgTG9naW4tYnV0dG9uLTFaTksyXCIsXG5cdFwiZ29vZ2xlXCI6IFwiTG9naW4tZ29vZ2xlLWxzdXF5IExvZ2luLWJ1dHRvbi0xWk5LMlwiLFxuXHRcInR3aXR0ZXJcIjogXCJMb2dpbi10d2l0dGVyLTNERFNpIExvZ2luLWJ1dHRvbi0xWk5LMlwiLFxuXHRcImljb25cIjogXCJMb2dpbi1pY29uLTNWUHpFXCIsXG5cdFwibGluZVRocm91Z2hcIjogXCJMb2dpbi1saW5lVGhyb3VnaC0yLU54a1wiLFxuXHRcImxvZ2luQmxvY2tcIjogXCJMb2dpbi1sb2dpbkJsb2NrLTIzbk1wXCIsXG5cdFwicHJvbW9cIjogXCJMb2dpbi1wcm9tby0xb0ZMM1wiLFxuXHRcInByb21vVGV4dFwiOiBcIkxvZ2luLXByb21vVGV4dC0yZC14Q1wiLFxuXHRcImxvZ29cIjogXCJMb2dpbi1sb2dvLTEwckMzXCJcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBlc2NhcGUodXJsKSB7XG4gICAgaWYgKHR5cGVvZiB1cmwgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVybiB1cmxcbiAgICB9XG4gICAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gICAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gICAgfVxuICAgIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICAgIGlmICgvW1wiJygpIFxcdFxcbl0vLnRlc3QodXJsKSkge1xuICAgICAgICByZXR1cm4gJ1wiJyArIHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csICdcXFxcbicpICsgJ1wiJ1xuICAgIH1cblxuICAgIHJldHVybiB1cmxcbn1cbiIsIlxuICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNS1ydWxlcy0yIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNS1ydWxlcy0zIS4vTG9naW4uY3NzXCIpO1xuICAgIHZhciBpbnNlcnRDc3MgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9pc29tb3JwaGljLXN0eWxlLWxvYWRlci9saWIvaW5zZXJ0Q3NzLmpzXCIpO1xuXG4gICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgIH1cblxuICAgIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307XG4gICAgbW9kdWxlLmV4cG9ydHMuX2dldENvbnRlbnQgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGNvbnRlbnQ7IH07XG4gICAgbW9kdWxlLmV4cG9ydHMuX2dldENzcyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gY29udGVudC50b1N0cmluZygpOyB9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9pbnNlcnRDc3MgPSBmdW5jdGlvbihvcHRpb25zKSB7IHJldHVybiBpbnNlcnRDc3MoY29udGVudCwgb3B0aW9ucykgfTtcbiAgICBcbiAgICAvLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG4gICAgLy8gaHR0cHM6Ly93ZWJwYWNrLmdpdGh1Yi5pby9kb2NzL2hvdC1tb2R1bGUtcmVwbGFjZW1lbnRcbiAgICAvLyBPbmx5IGFjdGl2YXRlZCBpbiBicm93c2VyIGNvbnRleHRcbiAgICBpZiAobW9kdWxlLmhvdCAmJiB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuZG9jdW1lbnQpIHtcbiAgICAgIHZhciByZW1vdmVDc3MgPSBmdW5jdGlvbigpIHt9O1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtcnVsZXMtMiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTUtcnVsZXMtMyEuL0xvZ2luLmNzc1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtcnVsZXMtMiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTUtcnVsZXMtMyEuL0xvZ2luLmNzc1wiKTtcblxuICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVtb3ZlQ3NzID0gaW5zZXJ0Q3NzKGNvbnRlbnQsIHsgcmVwbGFjZTogdHJ1ZSB9KTtcbiAgICAgIH0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyByZW1vdmVDc3MoKTsgfSk7XG4gICAgfVxuICAiLCIvKipcbiAqIFJlYWN0IFN0YXJ0ZXIgS2l0IChodHRwczovL3d3dy5yZWFjdHN0YXJ0ZXJraXQuY29tLylcbiAqXG4gKiBDb3B5cmlnaHQgwqkgMjAxNC1wcmVzZW50IEtyaWFzb2Z0LCBMTEMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLnR4dCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHdpdGhTdHlsZXMgZnJvbSAnaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvbGliL3dpdGhTdHlsZXMnO1xuaW1wb3J0IHMgZnJvbSAnLi9Mb2dpbi5jc3MnO1xuaW1wb3J0IGJnIGZyb20gJy4vYmcuanBnJztcbmltcG9ydCBBcHAgZnJvbSAnLi9taWNyb3NvZnRMb2dpbic7XG5cbmNsYXNzIExvZ2luIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e3Mucm9vdH0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLmNvbnRhaW5lcn0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3MucHJvbW99PlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzLnByb21vVGV4dH0+XG4gICAgICAgICAgICAgIFdlbGNvbWUgdG8gW05BTUVdIVxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3MubG9nb30+XG48c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBpZD1cIkNhcGFfMVwiIHg9XCIwcHhcIiB5PVwiMHB4XCIgdmlld0JveD1cIjAgMCAyNy43OTMgMjcuNzkzXCIgd2lkdGg9XCI5MHB4XCIgaGVpZ2h0PVwiOTBweFwiPlxuPGc+XG4gIDxnIGlkPVwiYzFfcmF5XCI+XG4gICAgPHBvbHlnb24gcG9pbnRzPVwiMjAuOTcyLDAgNS4wNzYsMTUuODAzIDEwLjk3MiwxNS44MDMgNi40NCwyNy43OTMgMjIuNzE2LDExLjk4OSAxNi44MTksMTEuOTg5ICAgXCJcbiAgICBmaWxsPVwiIzdGQzJFNVwiLz5cbiAgPC9nPlxuICA8ZyBpZD1cIkNhcGFfMV8yOV9cIj5cbiAgPC9nPlxuICA8L2c+XG48L3N2Zz5cblxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3MubG9naW5CbG9ja30+XG4gICAgICAgICAgICA8aDE+e3RoaXMucHJvcHMudGl0bGV9PC9oMT5cbiAgICAgICAgICAgIHsvKiA8cCBjbGFzc05hbWU9e3MubGVhZH0+XG4gICAgICAgICAgICAgIExvZyBpbiB3aXRoIHlvdXIgdXNlcm5hbWUgb3IgY29tcGFueSBlbWFpbCBhZGRyZXNzLlxuICAgICAgICAgICAgPC9wPiAqL31cbiAgICAgICAgICAgIDxmb3JtIG1ldGhvZD1cInBvc3RcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3MuZm9ybUdyb3VwfT5cbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPXtzLmxhYmVsfSBodG1sRm9yPVwidXNlcm5hbWVPckVtYWlsXCI+XG4gICAgICAgICAgICAgICAgICBVc2VybmFtZSBvciBlbWFpbCBhZGRyZXNzOlxuICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17cy5pbnB1dH1cbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJ1c2VybmFtZU9yRW1haWxcIlxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ1c2VybmFtZU9yRW1haWxcIlxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkpvaG4gRG9lXCJcbiAgICAgICAgICAgICAgICAgICAgYXV0b0ZvY3VzIC8vIGVzbGludC1kaXNhYmxlLWxpbmUganN4LWExMXkvbm8tYXV0b2ZvY3VzXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cy5mb3JtR3JvdXB9PlxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9e3MubGFiZWx9IGh0bWxGb3I9XCJwYXNzd29yZFwiPlxuICAgICAgICAgICAgICAgICAgUGFzc3dvcmQ6XG4gICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzLmlucHV0fVxuICAgICAgICAgICAgICAgICAgICBpZD1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cy5mb3JtR3JvdXB9PlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzLmJ1dHRvbn0gdHlwZT1cInN1Ym1pdFwiPlxuICAgICAgICAgICAgICAgICAgTG9nIGluXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgPHN0cm9uZyBjbGFzc05hbWU9e3MubGluZVRocm91Z2h9Pk9SPC9zdHJvbmc+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IHtzLndyYXBwZXJ9PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cy5mb3JtR3JvdXB9PlxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17cy5mYWNlYm9va30gaHJlZj1cIi9sb2dpbi9mYWNlYm9va1wiPlxuICAgICAgICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3MuaWNvbn1cbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIzMFwiXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjMwXCJcbiAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAzMCAzMFwiXG4gICAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTIyIDE2bDEtNWgtNVY3YzAtMS41NDQuNzg0LTIgMy0yaDJWMGgtNGMtNC4wNzIgMC03IDIuNDM1LTcgN3Y0SDd2NWg1djE0aDZWMTZoNHpcIiAvPlxuICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3MuZm9ybUdyb3VwfT5cbiAgICAgICAgICAgICAgICA8QXBwIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cy5mb3JtR3JvdXB9PlxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17cy5nb29nbGV9IGhyZWY9XCIvbG9naW4vZ29vZ2xlXCI+XG4gICAgICAgICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17cy5pY29ufVxuICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjMwXCJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMzBcIlxuICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDMwIDMwXCJcbiAgICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgICAgICAgZD17XG4gICAgICAgICAgICAgICAgICAgICAgICAnTTMwIDEzaC00VjloLTJ2NGgtNHYyaDR2NGgydi00aDRtLTE1IDJzLTItMS4xNS0yLTJjMCAwLS41LTEuODI4IDEtMyAnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICcxLjUzNy0xLjIgMy0zLjAzNSAzLTUgMC0yLjMzNi0xLjA0Ni01LTMtNmgzbDIuMzg3LTFIMTBDNS44MzUgMCAyIDMuMzQ1IDIgN2MwICcgK1xuICAgICAgICAgICAgICAgICAgICAgICAgJzMuNzM1IDIuODUgNi41NiA3LjA4NiA2LjU2LjI5NSAwIC41OC0uMDA2Ljg2LS4wMjUtLjI3My41MjYtLjQ3IDEuMTItLjQ3IDEuNzM1ICcgK1xuICAgICAgICAgICAgICAgICAgICAgICAgJzAgMS4wMzcuODE3IDIuMDQyIDEuNTIzIDIuNzNIOWMtNS4xNiAwLTkgMi41OTMtOSA2IDAgMy4zNTUgNC44NyA2IDEwLjAzIDYgNS44ODIgJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAnMCA5Ljk3LTMgOS45Ny03IDAtMi42OS0yLjU0NS00LjI2NC01LTZ6bS00LTRjLTIuMzk1IDAtNS41ODctMi44NTctNi02QzQuNTg3ICcgK1xuICAgICAgICAgICAgICAgICAgICAgICAgJzMuODU2IDYuNjA3LjkzIDkgMWMyLjM5NC4wNyA0LjYwMyAyLjkwOCA1LjAxNyA2LjA1MkMxNC40MyAxMC4xOTUgMTMgMTMgMTEgJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAnMTN6bS0xIDE1Yy0zLjU2NiAwLTctMS4yOS03LTQgMC0yLjY1OCAzLjQzNC01LjAzOCA3LTUgLjgzMi4wMSAyIDAgMiAwIDEgMCAnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICcyLjg4Ljg4IDQgMiAxIDEgMSAyLjY3NCAxIDMgMCAzLTEuOTg2IDQtNyA0eidcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cy5mb3JtR3JvdXB9PlxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17cy50d2l0dGVyfSBocmVmPVwiL2xvZ2luL3R3aXR0ZXJcIj5cbiAgICAgICAgICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzLmljb259XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMzBcIlxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIzMFwiXG4gICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMzAgMzBcIlxuICAgICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgICAgICBkPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICdNMzAgNi43MDhjLTEuMTA1LjQ5LTIuNzU2IDEuMTQzLTQgMS4yOTIgMS4yNzMtLjc2MiAyLjU0LTIuNTYgJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAnMy00LS45Ny41NzctMi4wODcgMS4zNTUtMy4yMjcgMS43NzNMMjUgNWMtMS4xMi0xLjE5Ny0yLjIzLTItNC0yLTMuMzk4IDAtNiAnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICcyLjYwMi02IDYgMCAuNC4wNDcuNy4xMS45NTZMMTUgMTBDOSAxMCA1LjAzNCA4LjcyNCAyIDVjLS41My45MDgtMSAxLjg3Mi0xICcgK1xuICAgICAgICAgICAgICAgICAgICAgICAgJzMgMCAyLjEzNiAxLjM0OCAzLjg5NCAzIDUtMS4wMS0uMDMzLTIuMTctLjU0Mi0zLTEgMCAyLjk4IDQuMTg2IDYuNDMyIDcgNy0xICcgK1xuICAgICAgICAgICAgICAgICAgICAgICAgJzEtNC42MjMuMDc0LTUgMCAuNzg0IDIuNDQ3IDMuMzEgMy45NSA2IDQtMi4xMDUgMS42NDgtNC42NDcgMi41MS03LjUzIDIuNTEtLjUgJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAnMC0uOTg4LS4wMy0xLjQ3LS4wODRDMi43MjMgMjcuMTcgNi41MjMgMjggMTAgMjhjMTEuMzIyIDAgMTctOC44NjcgMTctMTcgJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAnMC0uMjY4LjAwOC0uNzM2IDAtMSAxLjItLjg2OCAyLjE3Mi0yLjA1OCAzLTMuMjkyeidcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHMpKExvZ2luKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInNyYy9yb3V0ZXMvbG9naW4vYmcuanBnP2I3NDY0M2NiXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3JjL3JvdXRlcy9sb2dpbi9iZy5qcGc/Yjc0NjQzY2JcIjsiLCIvKipcbiAqIFJlYWN0IFN0YXJ0ZXIgS2l0IChodHRwczovL3d3dy5yZWFjdHN0YXJ0ZXJraXQuY29tLylcbiAqXG4gKiBDb3B5cmlnaHQgwqkgMjAxNC1wcmVzZW50IEtyaWFzb2Z0LCBMTEMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLnR4dCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTGF5b3V0JztcbmltcG9ydCBMb2dpbiBmcm9tICcuL0xvZ2luJztcblxuY29uc3QgdGl0bGUgPSAnTG9nIGluJztcblxuZnVuY3Rpb24gYWN0aW9uKCkge1xuICByZXR1cm4ge1xuICAgIGNodW5rczogWydsb2dpbiddLFxuICAgIHRpdGxlLFxuICAgIGNvbXBvbmVudDogPExvZ2luIHRpdGxlPXt0aXRsZX0gLz4sXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGFjdGlvbjtcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBSZWFjdExvZ2luTVMgZnJvbSAncmVhY3QtbXMtbG9naW4nO1xuXG5pbXBvcnQgcyBmcm9tICcuL0xvZ2luLmNzcyc7XG5cbmNsYXNzIEFwcCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJBcHBcIj5cbiAgICAgICAgPFJlYWN0TG9naW5NU1xuICAgICAgICAgIGNsaWVudElkPVwiZDNkZjQ2MDMtOGUwYi00YTZmLWJmZTItMDYyNTc4NDUyMTBmXCIgLy8gcmVxdWlyZWQ6ICdhcHBsaWNhdGlvbiBpZC9jbGllbnQgaWQnIG9idGFpbmVkIGZyb20gaHR0cHM6Ly9hcHBzLmRldi5taWNyb3NvZnQuY29tIGZvciB5b3VyIGFwcFxuICAgICAgICAgIHJlZGlyZWN0VXJpPVwiaHR0cDovL2xvY2FsaG9zdDozMDAwL2Fib3V0XCIgLy8gcmVxdWlyZWQ6IHJlZGlyZWN0VXJpIHJlZ2lzdGVyZWQgaW4gaHR0cHM6Ly9hcHBzLmRldi5taWNyb3NvZnQuY29tIGZvciB5b3VyIGFwcFxuICAgICAgICAgIHNjb3Blcz17Wyd1c2VyLnJlYWQnXX0gLy8gb3B0aW9uYWw6IGRlZmF1bHRzIHRvIFwidXNlci5yZWFkXCIgZnVsbCBsaXN0IGlzIHByZXNlbnQgaHR0cHM6Ly9kZXZlbG9wZXIubWljcm9zb2Z0LmNvbS9lbi11cy9ncmFwaC9kb2NzL2NvbmNlcHRzL3Blcm1pc3Npb25zX3JlZmVyZW5jZVxuICAgICAgICAgIHJlc3BvbnNlVHlwZT1cInRva2VuXCIgLy8gb3B0aW9uYWw6IHZhbGlkIHZhbHVlcyBhcmUgXCJ0b2tlblwiIGZvciBgSW1wbGljaXRlIE9BdXRoIGZsb3dgIGFuZCBcImNvZGVcIiBmb3IgYEF1dGhvcml6YXRpb24gQ29kZSBmbG93YCBkZWZhdWx0cyB0byBcInRva2VuXCJcbiAgICAgICAgICBjc3NDbGFzcz17cy5taWNyb3NvZnR9IC8vIG9wdGlvbmFsOiBzcGFjZSBzZXBhcmF0ZWQgY2xhc3MgbmFtZXMgd2hpY2ggYXJlIGFwcGxpZWQgb24gdGhlIGh0bWwgQnV0dG9uIGVsZW1lbnRcbiAgICAgICAgICBidG5Db250ZW50PXtCdXR0b25Db250ZW50fSAvLyBvcHRpb25hbDogY2FuIGJlIHN0cmluZyBvciBhIHZhbGlkIHJlYWN0IGNvbXBvbmVudCB3aGljaCBjYW4gYmUgcmVuZGVyZWQgaW5zaWRlIGh0bWwgQnV0dG9uIGVsZW1lbnRcbiAgICAgICAgICBoYW5kbGVMb2dpbj17ZGF0YSA9PiBjb25zb2xlLmxvZyhkYXRhKX0gLy8gcmVxdWlyZWQ6IGNhbGxiYWNrIHRvIHJlY2VpdmUgdG9rZW4vY29kZSBhZnRlciBzdWNjZXNzZnVsIGxvZ2luXG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmNsYXNzIEJ1dHRvbkNvbnRlbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxzcGFuPlxuICAgICAgICA8c3ZnXG4gICAgICAgICAgY2xhc3NOYW1lPXtzLmljb259XG4gICAgICAgICAgd2lkdGg9XCIyMFwiXG4gICAgICAgICAgaGVpZ2h0PVwiMzBcIlxuICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjU2IDI1N1wiXG4gICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgcHJlc2VydmVBc3BlY3RSYXRpbz1cInhNaWRZTWlkXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICBkPVwiTTAgMzYuMzU3TDEwNC42MiAyMi4xMWwuMDQ1IDEwMC45MTQtMTA0LjU3LjU5NUwwIDM2LjM1OHptMTA0LjU3IDk4LjI5M2wuMDggMTAxLjAwMkwuMDgxIDIyMS4yNzVsLS4wMDYtODcuMzAyIDEwNC40OTQuNjc3em0xMi42ODItMTE0LjQwNUwyNTUuOTY4IDB2MTIxLjc0bC0xMzguNzE2IDEuMVYyMC4yNDZ6TTI1NiAxMzUuNmwtLjAzMyAxMjEuMTkxLTEzOC43MTYtMTkuNTc4LS4xOTQtMTAxLjg0TDI1NiAxMzUuNnpcIlxuICAgICAgICAgICAgZmlsbD1cIiNmZmZmZmZcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvc3ZnPlxuICAgICAgPC9zcGFuPlxuICAgICk7XG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IEFwcDtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDOUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0JBOzs7Ozs7OztBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFPQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFVQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBU0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFPQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBZUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBbUJBOzs7O0FBdElBO0FBQ0E7QUFEQTs7OztBQUNBO0FBQ0E7QUFEQTs7QUF3SUE7Ozs7Ozs7QUN6SkE7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7O0FBU0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBS0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkJBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQURBO0FBRUE7QUFGQTtBQUdBO0FBSEE7QUFJQTtBQUpBO0FBS0E7QUFMQTtBQU1BO0FBTkE7QUFPQTtBQUFBO0FBQUE7QUFQQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVdBOzs7O0FBZkE7QUFDQTtBQWlCQTs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFTQTtBQUNBO0FBRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBT0E7Ozs7QUFuQkE7QUFDQTtBQW9CQTs7OztBIiwic291cmNlUm9vdCI6IiJ9