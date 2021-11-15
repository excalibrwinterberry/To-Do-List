/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".title{\n    height: 50px;\n    margin: 0px;\n    padding: 0px;\n    background-color: bisque;\n    text-align: center;\n}\n\n#workArea{\n    background-color: rgb(147, 172, 172);\n    height: 750px;\n    \n}\n\nbody{\n    margin: 0px;\n    height: 800px;\n    font-family: \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif;\n}\np{\n    margin: 0px;\n    padding: 5px;\n    font-size: x-large;\n}\n\n#newTask{\n    text-align: center;\n    height: 100px;\n    background-color: rgb(218, 174, 110);\n\n}\n\n#addTask{\n    margin-top: 30px;\n}\n\n#display{\n    background-color: aquamarine;\n    height: 650px;\n}\n\n.card {\n    margin: 20px;\n    padding: 20px;\n    width: 300px;\n    min-height: 200px;\n    /* display: grid;\n    grid-template-columns: 20px 50px 50px; */\n    border-radius: 10px;\n    box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.25);\n    transition: all 0.2s;\n    background: radial-gradient(#1fe4f5, #3fbafe);\n  }\n\n  .card:hover {\n    box-shadow: 0px 6px 10px rgba(128, 115, 115, 0.4);\n    transform: scale(1.01);\n  }\n\n.headerCard {\n\n  font-weight: 400;\n  color: #ffffff;\n}\n\n#todoList{\n    display: flex;\n  flex-wrap: wrap;\n\n}\n\n.removeTodo, .doneTask{\n  align-items: center;\n  background-clip: padding-box;\n  background-color: #fa6400;\n  border: 1px solid transparent;\n  border-radius: .25rem;\n  box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;\n  box-sizing: border-box;\n  color: #fff;\n  cursor: pointer;\n  display: inline-flex;\n  font-family: system-ui,-apple-system,system-ui,\"Helvetica Neue\",Helvetica,Arial,sans-serif;\n  font-size: 16px;\n  font-weight: 600;\n  justify-content: center;\n  line-height: 1.25;\n  margin: 0;\n  min-height: 3rem;\n  padding: calc(.875rem - 1px) calc(1.5rem - 1px);\n  position: relative;\n  text-decoration: none;\n  transition: all 250ms;\n  user-select: none;\n  -webkit-user-select: none;\n  touch-action: manipulation;\n  vertical-align: baseline;\n  width: auto;\n}\n\n.removeTodo:hover, .removeTodo:focus, .doneTask:hover, .doneTask:focus {\n  background-color: #fb8332;\n  box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;\n}\n\n.removeTodo:hover, .doneTask:hover {\n  transform: translateY(-1px);\n}\n\n.removeTodo:active, .doneTask:active {\n  background-color: #c85000;\n  box-shadow: rgba(0, 0, 0, .06) 0 2px 4px;\n  transform: translateY(0);\n}\n\n.done{\n  background: #eeeeee;\nbackground: -moz-radial-gradient(center, ellipse cover,  #eeeeee 0%, #cccccc 100%);\nbackground: -webkit-radial-gradient(center, ellipse cover,  #eeeeee 0%,#cccccc 100%);\nbackground: radial-gradient(ellipse at center,  #eeeeee 0%,#cccccc 100%);\nfilter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#eeeeee', endColorstr='#cccccc',GradientType=1 );\n\n\n}\n\n.modal {\n  display: none; /* Hidden by default */\n  position: fixed; /* Stay in place */\n  z-index: 1; /* Sit on top */\n  padding-top: 100px; /* Location of the box */\n  left: 0;\n  top: 0;\n  width: 100%; /* Full width */\n  height: 100%; /* Full height */\n  overflow: auto; /* Enable scroll if needed */\n  background-color: rgb(0,0,0); /* Fallback color */\n  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\n\n  \n}\n\n.close {\n  color: #aaaaaa;\n  float: right;\n  font-size: 28px;\n  font-weight: bold;\n}\n\n.close:hover,\n.close:focus {\n  color: #000;\n  text-decoration: none;\n  cursor: pointer;\n}\n\n#sidebar {\n  height: 100%;\n  width: 150px;\n  position: fixed;\n  top: 0;\n  left: 0;\n  padding-top: 40px;\n  background-color: lightblue;\n  }\n  \n  \n\n#content{\n  margin-left: 150px;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,YAAY;IACZ,WAAW;IACX,YAAY;IACZ,wBAAwB;IACxB,kBAAkB;AACtB;;AAEA;IACI,oCAAoC;IACpC,aAAa;;AAEjB;;AAEA;IACI,WAAW;IACX,aAAa;IACb,6DAA6D;AACjE;AACA;IACI,WAAW;IACX,YAAY;IACZ,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;IAClB,aAAa;IACb,oCAAoC;;AAExC;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,4BAA4B;IAC5B,aAAa;AACjB;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,YAAY;IACZ,iBAAiB;IACjB;4CACwC;IACxC,mBAAmB;IACnB,4CAA4C;IAC5C,oBAAoB;IACpB,6CAA6C;EAC/C;;EAEA;IACE,iDAAiD;IACjD,sBAAsB;EACxB;;AAEF;;EAEE,gBAAgB;EAChB,cAAc;AAChB;;AAEA;IACI,aAAa;EACf,eAAe;;AAEjB;;AAEA;EACE,mBAAmB;EACnB,4BAA4B;EAC5B,yBAAyB;EACzB,6BAA6B;EAC7B,qBAAqB;EACrB,2CAA2C;EAC3C,sBAAsB;EACtB,WAAW;EACX,eAAe;EACf,oBAAoB;EACpB,0FAA0F;EAC1F,eAAe;EACf,gBAAgB;EAChB,uBAAuB;EACvB,iBAAiB;EACjB,SAAS;EACT,gBAAgB;EAChB,+CAA+C;EAC/C,kBAAkB;EAClB,qBAAqB;EACrB,qBAAqB;EACrB,iBAAiB;EACjB,yBAAyB;EACzB,0BAA0B;EAC1B,wBAAwB;EACxB,WAAW;AACb;;AAEA;EACE,yBAAyB;EACzB,yCAAyC;AAC3C;;AAEA;EACE,2BAA2B;AAC7B;;AAEA;EACE,yBAAyB;EACzB,wCAAwC;EACxC,wBAAwB;AAC1B;;AAEA;EACE,mBAAmB;AACrB,kFAAkF;AAClF,oFAAoF;AACpF,wEAAwE;AACxE,mHAAmH;;;AAGnH;;AAEA;EACE,aAAa,EAAE,sBAAsB;EACrC,eAAe,EAAE,kBAAkB;EACnC,UAAU,EAAE,eAAe;EAC3B,kBAAkB,EAAE,wBAAwB;EAC5C,OAAO;EACP,MAAM;EACN,WAAW,EAAE,eAAe;EAC5B,YAAY,EAAE,gBAAgB;EAC9B,cAAc,EAAE,4BAA4B;EAC5C,4BAA4B,EAAE,mBAAmB;EACjD,iCAAiC,EAAE,qBAAqB;;;AAG1D;;AAEA;EACE,cAAc;EACd,YAAY;EACZ,eAAe;EACf,iBAAiB;AACnB;;AAEA;;EAEE,WAAW;EACX,qBAAqB;EACrB,eAAe;AACjB;;AAEA;EACE,YAAY;EACZ,YAAY;EACZ,eAAe;EACf,MAAM;EACN,OAAO;EACP,iBAAiB;EACjB,2BAA2B;EAC3B;;;;AAIF;EACE,kBAAkB;AACpB","sourcesContent":[".title{\n    height: 50px;\n    margin: 0px;\n    padding: 0px;\n    background-color: bisque;\n    text-align: center;\n}\n\n#workArea{\n    background-color: rgb(147, 172, 172);\n    height: 750px;\n    \n}\n\nbody{\n    margin: 0px;\n    height: 800px;\n    font-family: \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif;\n}\np{\n    margin: 0px;\n    padding: 5px;\n    font-size: x-large;\n}\n\n#newTask{\n    text-align: center;\n    height: 100px;\n    background-color: rgb(218, 174, 110);\n\n}\n\n#addTask{\n    margin-top: 30px;\n}\n\n#display{\n    background-color: aquamarine;\n    height: 650px;\n}\n\n.card {\n    margin: 20px;\n    padding: 20px;\n    width: 300px;\n    min-height: 200px;\n    /* display: grid;\n    grid-template-columns: 20px 50px 50px; */\n    border-radius: 10px;\n    box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.25);\n    transition: all 0.2s;\n    background: radial-gradient(#1fe4f5, #3fbafe);\n  }\n\n  .card:hover {\n    box-shadow: 0px 6px 10px rgba(128, 115, 115, 0.4);\n    transform: scale(1.01);\n  }\n\n.headerCard {\n\n  font-weight: 400;\n  color: #ffffff;\n}\n\n#todoList{\n    display: flex;\n  flex-wrap: wrap;\n\n}\n\n.removeTodo, .doneTask{\n  align-items: center;\n  background-clip: padding-box;\n  background-color: #fa6400;\n  border: 1px solid transparent;\n  border-radius: .25rem;\n  box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;\n  box-sizing: border-box;\n  color: #fff;\n  cursor: pointer;\n  display: inline-flex;\n  font-family: system-ui,-apple-system,system-ui,\"Helvetica Neue\",Helvetica,Arial,sans-serif;\n  font-size: 16px;\n  font-weight: 600;\n  justify-content: center;\n  line-height: 1.25;\n  margin: 0;\n  min-height: 3rem;\n  padding: calc(.875rem - 1px) calc(1.5rem - 1px);\n  position: relative;\n  text-decoration: none;\n  transition: all 250ms;\n  user-select: none;\n  -webkit-user-select: none;\n  touch-action: manipulation;\n  vertical-align: baseline;\n  width: auto;\n}\n\n.removeTodo:hover, .removeTodo:focus, .doneTask:hover, .doneTask:focus {\n  background-color: #fb8332;\n  box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;\n}\n\n.removeTodo:hover, .doneTask:hover {\n  transform: translateY(-1px);\n}\n\n.removeTodo:active, .doneTask:active {\n  background-color: #c85000;\n  box-shadow: rgba(0, 0, 0, .06) 0 2px 4px;\n  transform: translateY(0);\n}\n\n.done{\n  background: #eeeeee;\nbackground: -moz-radial-gradient(center, ellipse cover,  #eeeeee 0%, #cccccc 100%);\nbackground: -webkit-radial-gradient(center, ellipse cover,  #eeeeee 0%,#cccccc 100%);\nbackground: radial-gradient(ellipse at center,  #eeeeee 0%,#cccccc 100%);\nfilter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#eeeeee', endColorstr='#cccccc',GradientType=1 );\n\n\n}\n\n.modal {\n  display: none; /* Hidden by default */\n  position: fixed; /* Stay in place */\n  z-index: 1; /* Sit on top */\n  padding-top: 100px; /* Location of the box */\n  left: 0;\n  top: 0;\n  width: 100%; /* Full width */\n  height: 100%; /* Full height */\n  overflow: auto; /* Enable scroll if needed */\n  background-color: rgb(0,0,0); /* Fallback color */\n  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\n\n  \n}\n\n.close {\n  color: #aaaaaa;\n  float: right;\n  font-size: 28px;\n  font-weight: bold;\n}\n\n.close:hover,\n.close:focus {\n  color: #000;\n  text-decoration: none;\n  cursor: pointer;\n}\n\n#sidebar {\n  height: 100%;\n  width: 150px;\n  position: fixed;\n  top: 0;\n  left: 0;\n  padding-top: 40px;\n  background-color: lightblue;\n  }\n  \n  \n\n#content{\n  margin-left: 150px;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/Header/headerElement.js":
/*!*************************************!*\
  !*** ./src/Header/headerElement.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ header)
/* harmony export */ });
function header() {
    const header = document.createElement('header')
    header.classList.add('title')

    const title = document.createElement('p')
    title.textContent = "To-Do-List"

    header.appendChild(title)

    return header
}

/***/ }),

/***/ "./src/Sidebar/addProjectElement.js":
/*!******************************************!*\
  !*** ./src/Sidebar/addProjectElement.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addProjectElement)
/* harmony export */ });
function addProjectElement(){
    const addProjectDiv = document.createElement('div')
    addProjectDiv.setAttribute('id', 'addProjectDiv')

    const projectNameInput = document.createElement('input')
    projectNameInput.setAttribute('type', 'text')
    projectNameInput.setAttribute('id', 'projectNameInput')

    const addProject = document.createElement('button')
    addProject.setAttribute('id', 'addProject')
    addProject.textContent = 'Add Project'

    const closeAddProject = document.createElement('button')
    closeAddProject.setAttribute('id', 'closeAddProject')
    closeAddProject.textContent = 'Close'



    addProjectDiv.appendChild(projectNameInput)
    addProjectDiv.appendChild(addProject)
    addProjectDiv.appendChild(closeAddProject)

    return addProjectDiv

}

/***/ }),

/***/ "./src/Sidebar/sidebarElement.js":
/*!***************************************!*\
  !*** ./src/Sidebar/sidebarElement.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ sidebarElement)
/* harmony export */ });
function sidebarElement(projectsList) {
    const sideBar = document.createElement('div')
    sideBar.setAttribute('id','sidebar')

    const divDefault = document.createElement('div')
    divDefault.setAttribute('id', 'divDefault')

    const defaultHeader = document.createElement('h2')
    defaultHeader.classList.add('sidebar-header')
    defaultHeader.setAttribute('id', 'defaultHeader')
    defaultHeader.textContent = 'Default'

    const defaultProjectsList = document.createElement('div')
    defaultProjectsList.classList.add('project-list')
    defaultProjectsList.setAttribute('id', 'defaultProjectsList')

    projectsList.forEach((project, index) =>{
        const item = document.createElement('button')
        item.textContent = project.getName()
        item.classList.add('project')
        item.setAttribute('id', `project${project.getListId()}`)
        defaultProjectsList.appendChild(item)
    })
    

    divDefault.appendChild(defaultHeader)
    divDefault.appendChild(defaultProjectsList)


    const divProject = document.createElement('div')
    divProject.setAttribute('id', 'divProject')

    const projectHeader = document.createElement('h2')
    projectHeader.classList.add('sidebar-header')
    projectHeader.setAttribute('id', 'projectHeader')
    projectHeader.textContent = 'Project'

    const openAddProject = document.createElement('button')
    openAddProject.setAttribute('id', 'openAddProject')
    openAddProject.textContent = 'Add New Project'

    const userProjectsList = document.createElement('div')
    userProjectsList.classList.add('project-list')
    userProjectsList.setAttribute('id', 'userProjectsList')

    divProject.appendChild(projectHeader)
    divProject.appendChild(openAddProject)
    divProject.appendChild(userProjectsList)

    sideBar.appendChild(divDefault)
    sideBar.appendChild(divProject)


    return sideBar
}

/***/ }),

/***/ "./src/WorkArea/addingNewTaskElement.js":
/*!**********************************************!*\
  !*** ./src/WorkArea/addingNewTaskElement.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addingNewTaskElement)
/* harmony export */ });
function addingNewTaskElement(){
    const newTask = document.createElement('div')
    newTask.setAttribute('id', 'newTask')
    
    const openModalBtn = document.createElement('button')
    openModalBtn.setAttribute('id', 'openAddTaskModal')
    openModalBtn.textContent = "Add New Task"

    const divModal = document.createElement('div')
    divModal.setAttribute('id', 'divModal')
    divModal.classList.add('modal')

    const closeModal = document.createElement('span')
    closeModal.classList.add('close')
    closeModal.textContent = "\u274C"

    const labelTitle = document.createElement('label')
    labelTitle.textContent = "Title: "

    const titleTodoInput = document.createElement('input')
    titleTodoInput.setAttribute('type', 'text')
    titleTodoInput.setAttribute('id', 'addTitle')

    const labelDesc = document.createElement('label')
    labelDesc.textContent = 'Description: '

    const descTodoInput = document.createElement('input')
    descTodoInput.setAttribute('type', 'text')
    descTodoInput.setAttribute('id', 'addDesc')

    const labelDueDate = document.createElement('label')
    labelDueDate.textContent = 'Due Date: '

    const dueDateTodoInput = document.createElement('input')
    dueDateTodoInput.setAttribute('type', 'date')
    dueDateTodoInput.setAttribute('id', 'addDueDate')
    dueDateTodoInput.setAttribute('value', (new Date()).toJSON().slice(0, 10))

    const labelPriority = document.createElement('label')
    labelPriority.textContent = "Priority: "

    const priorityTodoInput = document.createElement('input')
    priorityTodoInput.setAttribute('id', 'addPriority')
    priorityTodoInput.setAttribute('type', 'range')
    priorityTodoInput.setAttribute('min', '0')
    priorityTodoInput.setAttribute('max', '2')
    priorityTodoInput.setAttribute('value', '1')

    const btnAddTask = document.createElement('button')
    btnAddTask.setAttribute('id', 'addTask')
    btnAddTask.textContent = "Add Task"

    openModalBtn.onclick = function(){
        divModal.style.display = "block"
    }

    closeModal.onclick = function(){
        divModal.style.display = "none"
    }

    window.onclick = function(event) {
        if (event.target == divModal) {
          divModal.style.display = "none";
        }
      }

    // newTask.appendChild(labelTitle)
    // newTask.appendChild(titleTodoInput)
    // newTask.appendChild(labelDesc)
    // newTask.appendChild(descTodoInput)
    // newTask.appendChild(labelDueDate)
    // newTask.appendChild(dueDateTodoInput)
    // newTask.appendChild(labelPriority)
    // newTask.appendChild(priorityTodoInput)
    // newTask.appendChild(btnAddTask)

    divModal.appendChild(closeModal)
    divModal.appendChild(labelTitle)
    divModal.appendChild(titleTodoInput)
    divModal.appendChild(labelDesc)
    divModal.appendChild(descTodoInput)
    divModal.appendChild(labelDueDate)
    divModal.appendChild(dueDateTodoInput)
    divModal.appendChild(labelPriority)
    divModal.appendChild(priorityTodoInput)
    divModal.appendChild(btnAddTask)

    newTask.appendChild(openModalBtn)
    newTask.appendChild(divModal)


    return newTask
    
} 

/***/ }),

/***/ "./src/WorkArea/displayTodosElement.js":
/*!*********************************************!*\
  !*** ./src/WorkArea/displayTodosElement.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ displayTodosElement)
/* harmony export */ });
function displayTodosElement(){
    const display = document.createElement('div')
    display.setAttribute('id', 'display')

    return display
}

/***/ }),

/***/ "./src/WorkArea/workAreaElement.js":
/*!*****************************************!*\
  !*** ./src/WorkArea/workAreaElement.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ workAreaElement)
/* harmony export */ });
/* harmony import */ var _addingNewTaskElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addingNewTaskElement */ "./src/WorkArea/addingNewTaskElement.js");
/* harmony import */ var _displayTodosElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displayTodosElement */ "./src/WorkArea/displayTodosElement.js");



function workAreaElement(){
    const workArea = document.createElement('div')
    workArea.setAttribute('id','workArea')

    workArea.appendChild((0,_addingNewTaskElement__WEBPACK_IMPORTED_MODULE_0__["default"])())
    workArea.appendChild((0,_displayTodosElement__WEBPACK_IMPORTED_MODULE_1__["default"])())

    return workArea

}

/***/ }),

/***/ "./src/displayTodos.js":
/*!*****************************!*\
  !*** ./src/displayTodos.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ displayTodos)
/* harmony export */ });
/* harmony import */ var _todoCard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoCard */ "./src/todoCard.js");


function displayTodos (arrTodos) {
    const todoList = document.createElement('div')
    todoList.setAttribute('id','todoList')

    arrTodos.forEach(todo => {
        todoList.appendChild((0,_todoCard__WEBPACK_IMPORTED_MODULE_0__["default"])(todo))
    });

    return todoList
}

/***/ }),

/***/ "./src/initialLoad.js":
/*!****************************!*\
  !*** ./src/initialLoad.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ initialLoad)
/* harmony export */ });
/* harmony import */ var _Header_headerElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Header/headerElement */ "./src/Header/headerElement.js");
/* harmony import */ var _WorkArea_workAreaElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./WorkArea/workAreaElement */ "./src/WorkArea/workAreaElement.js");



function initialLoad () {
    const content = document.createElement('div')
    content.setAttribute('id', 'content')
    content.appendChild((0,_Header_headerElement__WEBPACK_IMPORTED_MODULE_0__["default"])())
    content.appendChild((0,_WorkArea_workAreaElement__WEBPACK_IMPORTED_MODULE_1__["default"])())

    return content

}

/***/ }),

/***/ "./src/todoCard.js":
/*!*************************!*\
  !*** ./src/todoCard.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ todoCard)
/* harmony export */ });
function todoCard(todo) {
    const card = document.createElement('div')
    card.classList.add('card')
    card.setAttribute('id', todo.getId())

    const header = document.createElement('div')
    header.classList.add('headerCard')

    const title = document.createElement('p')
    title.textContent = todo.getTitle()

    header.appendChild(title)
    card.appendChild(header)

    const container = document.createElement('div')
    container.classList.add('containerCard')

    const desc = document.createElement('p')
    desc.textContent = todo.getDescription()

    const dueDate = document.createElement('p')
    dueDate.textContent = todo.getDueDate()

    const priority = document.createElement('p')
    priority.textContent = todo.getPriority()

    const deleteTodoBtn = document.createElement('button')
    deleteTodoBtn.classList.add('removeTodo')
    deleteTodoBtn.dataset.id = todo.getId()
    deleteTodoBtn.textContent = 'Remove'

    const completeTodoBtn = document.createElement('button')
    completeTodoBtn.classList.add('doneTask')
    completeTodoBtn.dataset.id = todo.getId()
    completeTodoBtn.textContent = "Task done"


    container.appendChild(desc)
    container.appendChild(dueDate)
    container.appendChild(priority)
    card.appendChild(container)
    card.appendChild(deleteTodoBtn)
    card.appendChild(completeTodoBtn)


    return card
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _initialLoad__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initialLoad */ "./src/initialLoad.js");
/* harmony import */ var _displayTodos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displayTodos */ "./src/displayTodos.js");
/* harmony import */ var _todoCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todoCard */ "./src/todoCard.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _Sidebar_sidebarElement__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Sidebar/sidebarElement */ "./src/Sidebar/sidebarElement.js");
/* harmony import */ var _Sidebar_addProjectElement__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Sidebar/addProjectElement */ "./src/Sidebar/addProjectElement.js");







//Object of individual todos
const ToDos = ()=>{
    let title="No title"
    let description=""
    let dueDate= (new Date()).toJSON().slice(0, 10)
    let priority=0
    let id = 0
    let status = false

    const setTitle = newTitle => title = newTitle
    const setDescription = newDescription => description = newDescription
    const setDueDate = newDueDate => dueDate = newDueDate
    const setPriority = newPriorty => priority = newPriorty
    const setId = newId => id = newId
    const setStatus = newStatus => status = newStatus

    const getTitle = () => title
    const getDescription = () => description
    const getDueDate = () => dueDate
    const getPriority = () => priority
    const getId = () => id
    const getStatus = () => status

    return {setTitle, setDescription, setDueDate, setPriority, setId,getTitle, setStatus, getDescription, getDueDate, getPriority, getId, getStatus}

}

//Collection of Todos
const collectionTodos = (name, listId) =>{
    let arrTodos = []
    const addToDos = newTodo => arrTodos.push(newTodo)

    const getName =() => name

    const getListId = ()  => listId

    const deleteTodos = (id) => {

        for(let i=0; i<arrTodos.length; i++){
            if(arrTodos[i].getId() === id){
                arrTodos.splice(i,1)
            }
        }

    } 

    const changeStatus = (id) =>{
        arrTodos.forEach((todo) =>{
            if(todo.getId() === id){
                todo.setStatus(!(todo.getStatus()))
            }
        })

    }

    const getLength = () =>  arrTodos.length

    return{arrTodos, addToDos, deleteTodos, getLength, changeStatus, getName, getListId}
}

const todoList = collectionTodos('Today', 1)
const todoList1 = collectionTodos('Tomorrow', 2)

const doHw = ToDos()
doHw.setTitle('do Homework')
doHw.setDescription('college homework')
doHw.setPriority(0)
doHw.setId(1)

const excercise = ToDos()
excercise.setTitle('excercise')
excercise.setDescription('do excercise in evening')
excercise.setPriority(2)
excercise.setId(2)

const cp = ToDos()
cp.setTitle('Competitve Programming')
cp.setDescription('open leetcode and codechef')
cp.setId(1)

todoList.addToDos(doHw)
todoList.addToDos(excercise)

todoList1.addToDos(cp)

const allProjectsList = []

allProjectsList.push(todoList)
allProjectsList.push(todoList1)


function clearElementContent(elementID) {
    const div = document.getElementById(elementID);
      
    while(div.firstChild) {
        div.removeChild(div.firstChild);
    }
}

let selectedProjectId = allProjectsList[0].getListId()

const handleAddNewTask = (e) =>{
    const title = document.querySelector('#addTitle').value
    const desc = document.querySelector('#addDesc').value
    const dueDate = document.querySelector('#addDueDate').value
    const priority = document.querySelector('#addPriority').value
    

    const newTodo = ToDos()
    newTodo.setTitle(title)
    newTodo.setDescription(desc)
    newTodo.setDueDate(dueDate)
    newTodo.setPriority(priority)
    
    
    allProjectsList.forEach(project=>{
        if(project.getListId() === selectedProjectId){
            newTodo.setId(project.getLength()+1)
            project.addToDos(newTodo)
        }
    })

    const todoAddElement =(0,_todoCard__WEBPACK_IMPORTED_MODULE_2__["default"])(newTodo)
    document.getElementById('todoList').appendChild(todoAddElement)

    document.querySelector('#addTitle').value = ''
    document.querySelector('#addDesc').value = ''
    document.querySelector('#addDueDate').value = (new Date()).toJSON().slice(0, 10)
    document.querySelector('#addPriority').value = 1    

    todoAddElement.querySelector('.removeTodo').addEventListener('click', handleDeleteTask)
    document.querySelector("#divModal").style.display = 'none'
}

const handleDeleteTask = (e) =>{
    const taskId = parseInt(e.target.dataset.id)

    allProjectsList.forEach(project =>{
        if(project.getListId() === selectedProjectId){
            project.deleteTodos(taskId)

        }
    })
    document.getElementById(`${taskId}`).remove()
}

const hadnleStatusChange = (e) =>{
    const id = parseInt(e.target.dataset.id)
    todoList.changeStatus(id)
    document.getElementById(`${id}`).classList.toggle('done')
}

const handleProjectBtn = (e)=>{
    selectedProjectId =  parseInt(e.target.id.slice(7))
    clearElementContent('display')
    const projectToShow = allProjectsList.find(project => project.getListId() === selectedProjectId)
    document.getElementById('display').appendChild((0,_displayTodos__WEBPACK_IMPORTED_MODULE_1__["default"])(projectToShow.arrTodos))

    displayLoader.addRemoveEventListeners()
}

const handleOpenAddProject = (e)=>{
    //add 'addProjectELement' to #divProject
    document.getElementById('divProject').appendChild((0,_Sidebar_addProjectElement__WEBPACK_IMPORTED_MODULE_5__["default"])())

    //the closeaddproject is not present in the dom as we add it after clicking the button
    document.getElementById('closeAddProject').addEventListener('click', (e)=>{
        document.getElementById('addProjectDiv').remove()
    })

    document.getElementById('addProject').addEventListener('click', (e)=>{
        const name = document.getElementById('projectNameInput').value === "" ? "Project" : document.getElementById('projectNameInput').value
        const newTodoList = collectionTodos(name, allProjectsList.length+1)
        allProjectsList.push(newTodoList)

        document.getElementById('addProjectDiv').remove()

        const newProjectBtn = document.createElement('button')
        newProjectBtn.textContent = newTodoList.getName()
        newProjectBtn.classList.add('project')
        newProjectBtn.setAttribute('id', `project${allProjectsList.length}`)
        document.getElementById('userProjectsList').appendChild(newProjectBtn)
        newProjectBtn.addEventListener('click',handleProjectBtn)
    })

}


const displayLoader = (()=>{

    const pageLoad = ()=>{
        document.querySelector('#main').appendChild((0,_initialLoad__WEBPACK_IMPORTED_MODULE_0__["default"])())
        document.querySelector('#main').appendChild((0,_Sidebar_sidebarElement__WEBPACK_IMPORTED_MODULE_4__["default"])(allProjectsList))
    }

    const todoDisplay = ()=>{
        document.querySelector('#display').appendChild((0,_displayTodos__WEBPACK_IMPORTED_MODULE_1__["default"])(todoList.arrTodos))
    } 

    const addRemoveEventListeners = () =>{
        const removeBtns = [...document.querySelectorAll('.removeTodo')]

        removeBtns.forEach((removeBtn)=>{
            removeBtn.addEventListener('click', handleDeleteTask)
        })
    }

    const addTaskEventListener = () =>{
        document.querySelector('#addTask').addEventListener('click',handleAddNewTask)
    }


    return {pageLoad, todoDisplay,addTaskEventListener ,addRemoveEventListeners}

})()

displayLoader.pageLoad()
displayLoader.todoDisplay()
displayLoader.addTaskEventListener()
displayLoader.addRemoveEventListeners()

const doneTaskBtns = [...document.querySelectorAll('.doneTask')]

doneTaskBtns.forEach((doneTaskBtn) =>{
    doneTaskBtn.addEventListener('click', hadnleStatusChange)
})


document.getElementById('openAddProject').addEventListener('click', handleOpenAddProject)

const projectBtns = [...document.getElementsByClassName('project')]
projectBtns.forEach(projectBtn =>{
    projectBtn.addEventListener('click', handleProjectBtn)
})










})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBLEtBQUs7O0FBRUwsMEJBQTBCLHFEQUFRO0FBQ2xDOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTCwrQkFBK0IsT0FBTztBQUN0Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsR0FBRztBQUNsQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1EQUFtRCx5REFBWTs7QUFFL0Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0RBQXNELHNFQUFpQjs7QUFFdkU7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtREFBbUQsdUJBQXVCO0FBQzFFO0FBQ0E7QUFDQSxLQUFLOztBQUVMOzs7QUFHQTs7QUFFQTtBQUNBLG9EQUFvRCx3REFBVztBQUMvRCxvREFBb0QsbUVBQWM7QUFDbEU7O0FBRUE7QUFDQSx1REFBdUQseURBQVk7QUFDbkU7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0EsWUFBWTs7QUFFWixDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOzs7QUFHRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL0hlYWRlci9oZWFkZXJFbGVtZW50LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvU2lkZWJhci9hZGRQcm9qZWN0RWxlbWVudC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL1NpZGViYXIvc2lkZWJhckVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9Xb3JrQXJlYS9hZGRpbmdOZXdUYXNrRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL1dvcmtBcmVhL2Rpc3BsYXlUb2Rvc0VsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9Xb3JrQXJlYS93b3JrQXJlYUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9kaXNwbGF5VG9kb3MuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9pbml0aWFsTG9hZC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3RvZG9DYXJkLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIudGl0bGV7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgbWFyZ2luOiAwcHg7XFxuICAgIHBhZGRpbmc6IDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmlzcXVlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbiN3b3JrQXJlYXtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE0NywgMTcyLCAxNzIpO1xcbiAgICBoZWlnaHQ6IDc1MHB4O1xcbiAgICBcXG59XFxuXFxuYm9keXtcXG4gICAgbWFyZ2luOiAwcHg7XFxuICAgIGhlaWdodDogODAwcHg7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiU2Vnb2UgVUlcXFwiLCBSb2JvdG8sIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XFxufVxcbnB7XFxuICAgIG1hcmdpbjogMHB4O1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGZvbnQtc2l6ZTogeC1sYXJnZTtcXG59XFxuXFxuI25ld1Rhc2t7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiAxMDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxOCwgMTc0LCAxMTApO1xcblxcbn1cXG5cXG4jYWRkVGFza3tcXG4gICAgbWFyZ2luLXRvcDogMzBweDtcXG59XFxuXFxuI2Rpc3BsYXl7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGFxdWFtYXJpbmU7XFxuICAgIGhlaWdodDogNjUwcHg7XFxufVxcblxcbi5jYXJkIHtcXG4gICAgbWFyZ2luOiAyMHB4O1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICB3aWR0aDogMzAwcHg7XFxuICAgIG1pbi1oZWlnaHQ6IDIwMHB4O1xcbiAgICAvKiBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIwcHggNTBweCA1MHB4OyAqL1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBib3gtc2hhZG93OiAwcHggNnB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XFxuICAgIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudCgjMWZlNGY1LCAjM2ZiYWZlKTtcXG4gIH1cXG5cXG4gIC5jYXJkOmhvdmVyIHtcXG4gICAgYm94LXNoYWRvdzogMHB4IDZweCAxMHB4IHJnYmEoMTI4LCAxMTUsIDExNSwgMC40KTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAxKTtcXG4gIH1cXG5cXG4uaGVhZGVyQ2FyZCB7XFxuXFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgY29sb3I6ICNmZmZmZmY7XFxufVxcblxcbiN0b2RvTGlzdHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG5cXG59XFxuXFxuLnJlbW92ZVRvZG8sIC5kb25lVGFza3tcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZhNjQwMDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLXJhZGl1czogLjI1cmVtO1xcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjAyKSAwIDFweCAzcHggMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbiAgZm9udC1mYW1pbHk6IHN5c3RlbS11aSwtYXBwbGUtc3lzdGVtLHN5c3RlbS11aSxcXFwiSGVsdmV0aWNhIE5ldWVcXFwiLEhlbHZldGljYSxBcmlhbCxzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgbGluZS1oZWlnaHQ6IDEuMjU7XFxuICBtYXJnaW46IDA7XFxuICBtaW4taGVpZ2h0OiAzcmVtO1xcbiAgcGFkZGluZzogY2FsYyguODc1cmVtIC0gMXB4KSBjYWxjKDEuNXJlbSAtIDFweCk7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICB0cmFuc2l0aW9uOiBhbGwgMjUwbXM7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICB0b3VjaC1hY3Rpb246IG1hbmlwdWxhdGlvbjtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG4gIHdpZHRoOiBhdXRvO1xcbn1cXG5cXG4ucmVtb3ZlVG9kbzpob3ZlciwgLnJlbW92ZVRvZG86Zm9jdXMsIC5kb25lVGFzazpob3ZlciwgLmRvbmVUYXNrOmZvY3VzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmYjgzMzI7XFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMSkgMCA0cHggMTJweDtcXG59XFxuXFxuLnJlbW92ZVRvZG86aG92ZXIsIC5kb25lVGFzazpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XFxufVxcblxcbi5yZW1vdmVUb2RvOmFjdGl2ZSwgLmRvbmVUYXNrOmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzg1MDAwO1xcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAuMDYpIDAgMnB4IDRweDtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcXG59XFxuXFxuLmRvbmV7XFxuICBiYWNrZ3JvdW5kOiAjZWVlZWVlO1xcbmJhY2tncm91bmQ6IC1tb3otcmFkaWFsLWdyYWRpZW50KGNlbnRlciwgZWxsaXBzZSBjb3ZlciwgICNlZWVlZWUgMCUsICNjY2NjY2MgMTAwJSk7XFxuYmFja2dyb3VuZDogLXdlYmtpdC1yYWRpYWwtZ3JhZGllbnQoY2VudGVyLCBlbGxpcHNlIGNvdmVyLCAgI2VlZWVlZSAwJSwjY2NjY2NjIDEwMCUpO1xcbmJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChlbGxpcHNlIGF0IGNlbnRlciwgICNlZWVlZWUgMCUsI2NjY2NjYyAxMDAlKTtcXG5maWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudCggc3RhcnRDb2xvcnN0cj0nI2VlZWVlZScsIGVuZENvbG9yc3RyPScjY2NjY2NjJyxHcmFkaWVudFR5cGU9MSApO1xcblxcblxcbn1cXG5cXG4ubW9kYWwge1xcbiAgZGlzcGxheTogbm9uZTsgLyogSGlkZGVuIGJ5IGRlZmF1bHQgKi9cXG4gIHBvc2l0aW9uOiBmaXhlZDsgLyogU3RheSBpbiBwbGFjZSAqL1xcbiAgei1pbmRleDogMTsgLyogU2l0IG9uIHRvcCAqL1xcbiAgcGFkZGluZy10b3A6IDEwMHB4OyAvKiBMb2NhdGlvbiBvZiB0aGUgYm94ICovXFxuICBsZWZ0OiAwO1xcbiAgdG9wOiAwO1xcbiAgd2lkdGg6IDEwMCU7IC8qIEZ1bGwgd2lkdGggKi9cXG4gIGhlaWdodDogMTAwJTsgLyogRnVsbCBoZWlnaHQgKi9cXG4gIG92ZXJmbG93OiBhdXRvOyAvKiBFbmFibGUgc2Nyb2xsIGlmIG5lZWRlZCAqL1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsMCwwKTsgLyogRmFsbGJhY2sgY29sb3IgKi9cXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC40KTsgLyogQmxhY2sgdy8gb3BhY2l0eSAqL1xcblxcbiAgXFxufVxcblxcbi5jbG9zZSB7XFxuICBjb2xvcjogI2FhYWFhYTtcXG4gIGZsb2F0OiByaWdodDtcXG4gIGZvbnQtc2l6ZTogMjhweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4uY2xvc2U6aG92ZXIsXFxuLmNsb3NlOmZvY3VzIHtcXG4gIGNvbG9yOiAjMDAwO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jc2lkZWJhciB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTUwcHg7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgcGFkZGluZy10b3A6IDQwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGJsdWU7XFxuICB9XFxuICBcXG4gIFxcblxcbiNjb250ZW50e1xcbiAgbWFyZ2luLWxlZnQ6IDE1MHB4O1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxZQUFZO0lBQ1osd0JBQXdCO0lBQ3hCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLG9DQUFvQztJQUNwQyxhQUFhOztBQUVqQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2IsNkRBQTZEO0FBQ2pFO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2Isb0NBQW9DOztBQUV4Qzs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLDRCQUE0QjtJQUM1QixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCOzRDQUN3QztJQUN4QyxtQkFBbUI7SUFDbkIsNENBQTRDO0lBQzVDLG9CQUFvQjtJQUNwQiw2Q0FBNkM7RUFDL0M7O0VBRUE7SUFDRSxpREFBaUQ7SUFDakQsc0JBQXNCO0VBQ3hCOztBQUVGOztFQUVFLGdCQUFnQjtFQUNoQixjQUFjO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtFQUNmLGVBQWU7O0FBRWpCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLDRCQUE0QjtFQUM1Qix5QkFBeUI7RUFDekIsNkJBQTZCO0VBQzdCLHFCQUFxQjtFQUNyQiwyQ0FBMkM7RUFDM0Msc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxlQUFlO0VBQ2Ysb0JBQW9CO0VBQ3BCLDBGQUEwRjtFQUMxRixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtFQUN2QixpQkFBaUI7RUFDakIsU0FBUztFQUNULGdCQUFnQjtFQUNoQiwrQ0FBK0M7RUFDL0Msa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixxQkFBcUI7RUFDckIsaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUN6QiwwQkFBMEI7RUFDMUIsd0JBQXdCO0VBQ3hCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6Qix5Q0FBeUM7QUFDM0M7O0FBRUE7RUFDRSwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsd0NBQXdDO0VBQ3hDLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQixrRkFBa0Y7QUFDbEYsb0ZBQW9GO0FBQ3BGLHdFQUF3RTtBQUN4RSxtSEFBbUg7OztBQUduSDs7QUFFQTtFQUNFLGFBQWEsRUFBRSxzQkFBc0I7RUFDckMsZUFBZSxFQUFFLGtCQUFrQjtFQUNuQyxVQUFVLEVBQUUsZUFBZTtFQUMzQixrQkFBa0IsRUFBRSx3QkFBd0I7RUFDNUMsT0FBTztFQUNQLE1BQU07RUFDTixXQUFXLEVBQUUsZUFBZTtFQUM1QixZQUFZLEVBQUUsZ0JBQWdCO0VBQzlCLGNBQWMsRUFBRSw0QkFBNEI7RUFDNUMsNEJBQTRCLEVBQUUsbUJBQW1CO0VBQ2pELGlDQUFpQyxFQUFFLHFCQUFxQjs7O0FBRzFEOztBQUVBO0VBQ0UsY0FBYztFQUNkLFlBQVk7RUFDWixlQUFlO0VBQ2YsaUJBQWlCO0FBQ25COztBQUVBOztFQUVFLFdBQVc7RUFDWCxxQkFBcUI7RUFDckIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1osZUFBZTtFQUNmLE1BQU07RUFDTixPQUFPO0VBQ1AsaUJBQWlCO0VBQ2pCLDJCQUEyQjtFQUMzQjs7OztBQUlGO0VBQ0Usa0JBQWtCO0FBQ3BCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi50aXRsZXtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICBtYXJnaW46IDBweDtcXG4gICAgcGFkZGluZzogMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBiaXNxdWU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuI3dvcmtBcmVhe1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTQ3LCAxNzIsIDE3Mik7XFxuICAgIGhlaWdodDogNzUwcHg7XFxuICAgIFxcbn1cXG5cXG5ib2R5e1xcbiAgICBtYXJnaW46IDBweDtcXG4gICAgaGVpZ2h0OiA4MDBweDtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJTZWdvZSBVSVxcXCIsIFJvYm90bywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcXG59XFxucHtcXG4gICAgbWFyZ2luOiAwcHg7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgZm9udC1zaXplOiB4LWxhcmdlO1xcbn1cXG5cXG4jbmV3VGFza3tcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDEwMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjE4LCAxNzQsIDExMCk7XFxuXFxufVxcblxcbiNhZGRUYXNre1xcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xcbn1cXG5cXG4jZGlzcGxheXtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYXF1YW1hcmluZTtcXG4gICAgaGVpZ2h0OiA2NTBweDtcXG59XFxuXFxuLmNhcmQge1xcbiAgICBtYXJnaW46IDIwcHg7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIHdpZHRoOiAzMDBweDtcXG4gICAgbWluLWhlaWdodDogMjAwcHg7XFxuICAgIC8qIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjBweCA1MHB4IDUwcHg7ICovXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJveC1zaGFkb3c6IDBweCA2cHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcXG4gICAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KCMxZmU0ZjUsICMzZmJhZmUpO1xcbiAgfVxcblxcbiAgLmNhcmQ6aG92ZXIge1xcbiAgICBib3gtc2hhZG93OiAwcHggNnB4IDEwcHggcmdiYSgxMjgsIDExNSwgMTE1LCAwLjQpO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDEpO1xcbiAgfVxcblxcbi5oZWFkZXJDYXJkIHtcXG5cXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBjb2xvcjogI2ZmZmZmZjtcXG59XFxuXFxuI3RvZG9MaXN0e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcblxcbn1cXG5cXG4ucmVtb3ZlVG9kbywgLmRvbmVUYXNre1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmE2NDAwO1xcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItcmFkaXVzOiAuMjVyZW07XFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMDIpIDAgMXB4IDNweCAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxuICBmb250LWZhbWlseTogc3lzdGVtLXVpLC1hcHBsZS1zeXN0ZW0sc3lzdGVtLXVpLFxcXCJIZWx2ZXRpY2EgTmV1ZVxcXCIsSGVsdmV0aWNhLEFyaWFsLHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBsaW5lLWhlaWdodDogMS4yNTtcXG4gIG1hcmdpbjogMDtcXG4gIG1pbi1oZWlnaHQ6IDNyZW07XFxuICBwYWRkaW5nOiBjYWxjKC44NzVyZW0gLSAxcHgpIGNhbGMoMS41cmVtIC0gMXB4KTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIHRyYW5zaXRpb246IGFsbCAyNTBtcztcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4gIHRvdWNoLWFjdGlvbjogbWFuaXB1bGF0aW9uO1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbiAgd2lkdGg6IGF1dG87XFxufVxcblxcbi5yZW1vdmVUb2RvOmhvdmVyLCAucmVtb3ZlVG9kbzpmb2N1cywgLmRvbmVUYXNrOmhvdmVyLCAuZG9uZVRhc2s6Zm9jdXMge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZiODMzMjtcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xKSAwIDRweCAxMnB4O1xcbn1cXG5cXG4ucmVtb3ZlVG9kbzpob3ZlciwgLmRvbmVUYXNrOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcXG59XFxuXFxuLnJlbW92ZVRvZG86YWN0aXZlLCAuZG9uZVRhc2s6YWN0aXZlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNjODUwMDA7XFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIC4wNikgMCAycHggNHB4O1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xcbn1cXG5cXG4uZG9uZXtcXG4gIGJhY2tncm91bmQ6ICNlZWVlZWU7XFxuYmFja2dyb3VuZDogLW1vei1yYWRpYWwtZ3JhZGllbnQoY2VudGVyLCBlbGxpcHNlIGNvdmVyLCAgI2VlZWVlZSAwJSwgI2NjY2NjYyAxMDAlKTtcXG5iYWNrZ3JvdW5kOiAtd2Via2l0LXJhZGlhbC1ncmFkaWVudChjZW50ZXIsIGVsbGlwc2UgY292ZXIsICAjZWVlZWVlIDAlLCNjY2NjY2MgMTAwJSk7XFxuYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGVsbGlwc2UgYXQgY2VudGVyLCAgI2VlZWVlZSAwJSwjY2NjY2NjIDEwMCUpO1xcbmZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KCBzdGFydENvbG9yc3RyPScjZWVlZWVlJywgZW5kQ29sb3JzdHI9JyNjY2NjY2MnLEdyYWRpZW50VHlwZT0xICk7XFxuXFxuXFxufVxcblxcbi5tb2RhbCB7XFxuICBkaXNwbGF5OiBub25lOyAvKiBIaWRkZW4gYnkgZGVmYXVsdCAqL1xcbiAgcG9zaXRpb246IGZpeGVkOyAvKiBTdGF5IGluIHBsYWNlICovXFxuICB6LWluZGV4OiAxOyAvKiBTaXQgb24gdG9wICovXFxuICBwYWRkaW5nLXRvcDogMTAwcHg7IC8qIExvY2F0aW9uIG9mIHRoZSBib3ggKi9cXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDA7XFxuICB3aWR0aDogMTAwJTsgLyogRnVsbCB3aWR0aCAqL1xcbiAgaGVpZ2h0OiAxMDAlOyAvKiBGdWxsIGhlaWdodCAqL1xcbiAgb3ZlcmZsb3c6IGF1dG87IC8qIEVuYWJsZSBzY3JvbGwgaWYgbmVlZGVkICovXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwwLDApOyAvKiBGYWxsYmFjayBjb2xvciAqL1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjQpOyAvKiBCbGFjayB3LyBvcGFjaXR5ICovXFxuXFxuICBcXG59XFxuXFxuLmNsb3NlIHtcXG4gIGNvbG9yOiAjYWFhYWFhO1xcbiAgZmxvYXQ6IHJpZ2h0O1xcbiAgZm9udC1zaXplOiAyOHB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5jbG9zZTpob3ZlcixcXG4uY2xvc2U6Zm9jdXMge1xcbiAgY29sb3I6ICMwMDA7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNzaWRlYmFyIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxNTBweDtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICBwYWRkaW5nLXRvcDogNDBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Ymx1ZTtcXG4gIH1cXG4gIFxcbiAgXFxuXFxuI2NvbnRlbnR7XFxuICBtYXJnaW4tbGVmdDogMTUwcHg7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGVhZGVyKCkge1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpXG4gICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ3RpdGxlJylcblxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSBcIlRvLURvLUxpc3RcIlxuXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKHRpdGxlKVxuXG4gICAgcmV0dXJuIGhlYWRlclxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZFByb2plY3RFbGVtZW50KCl7XG4gICAgY29uc3QgYWRkUHJvamVjdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgYWRkUHJvamVjdERpdi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2FkZFByb2plY3REaXYnKVxuXG4gICAgY29uc3QgcHJvamVjdE5hbWVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICBwcm9qZWN0TmFtZUlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0JylcbiAgICBwcm9qZWN0TmFtZUlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCAncHJvamVjdE5hbWVJbnB1dCcpXG5cbiAgICBjb25zdCBhZGRQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICBhZGRQcm9qZWN0LnNldEF0dHJpYnV0ZSgnaWQnLCAnYWRkUHJvamVjdCcpXG4gICAgYWRkUHJvamVjdC50ZXh0Q29udGVudCA9ICdBZGQgUHJvamVjdCdcblxuICAgIGNvbnN0IGNsb3NlQWRkUHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgY2xvc2VBZGRQcm9qZWN0LnNldEF0dHJpYnV0ZSgnaWQnLCAnY2xvc2VBZGRQcm9qZWN0JylcbiAgICBjbG9zZUFkZFByb2plY3QudGV4dENvbnRlbnQgPSAnQ2xvc2UnXG5cblxuXG4gICAgYWRkUHJvamVjdERpdi5hcHBlbmRDaGlsZChwcm9qZWN0TmFtZUlucHV0KVxuICAgIGFkZFByb2plY3REaXYuYXBwZW5kQ2hpbGQoYWRkUHJvamVjdClcbiAgICBhZGRQcm9qZWN0RGl2LmFwcGVuZENoaWxkKGNsb3NlQWRkUHJvamVjdClcblxuICAgIHJldHVybiBhZGRQcm9qZWN0RGl2XG5cbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzaWRlYmFyRWxlbWVudChwcm9qZWN0c0xpc3QpIHtcbiAgICBjb25zdCBzaWRlQmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBzaWRlQmFyLnNldEF0dHJpYnV0ZSgnaWQnLCdzaWRlYmFyJylcblxuICAgIGNvbnN0IGRpdkRlZmF1bHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGRpdkRlZmF1bHQuc2V0QXR0cmlidXRlKCdpZCcsICdkaXZEZWZhdWx0JylcblxuICAgIGNvbnN0IGRlZmF1bHRIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpXG4gICAgZGVmYXVsdEhlYWRlci5jbGFzc0xpc3QuYWRkKCdzaWRlYmFyLWhlYWRlcicpXG4gICAgZGVmYXVsdEhlYWRlci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2RlZmF1bHRIZWFkZXInKVxuICAgIGRlZmF1bHRIZWFkZXIudGV4dENvbnRlbnQgPSAnRGVmYXVsdCdcblxuICAgIGNvbnN0IGRlZmF1bHRQcm9qZWN0c0xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGRlZmF1bHRQcm9qZWN0c0xpc3QuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1saXN0JylcbiAgICBkZWZhdWx0UHJvamVjdHNMaXN0LnNldEF0dHJpYnV0ZSgnaWQnLCAnZGVmYXVsdFByb2plY3RzTGlzdCcpXG5cbiAgICBwcm9qZWN0c0xpc3QuZm9yRWFjaCgocHJvamVjdCwgaW5kZXgpID0+e1xuICAgICAgICBjb25zdCBpdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICAgICAgaXRlbS50ZXh0Q29udGVudCA9IHByb2plY3QuZ2V0TmFtZSgpXG4gICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZCgncHJvamVjdCcpXG4gICAgICAgIGl0ZW0uc2V0QXR0cmlidXRlKCdpZCcsIGBwcm9qZWN0JHtwcm9qZWN0LmdldExpc3RJZCgpfWApXG4gICAgICAgIGRlZmF1bHRQcm9qZWN0c0xpc3QuYXBwZW5kQ2hpbGQoaXRlbSlcbiAgICB9KVxuICAgIFxuXG4gICAgZGl2RGVmYXVsdC5hcHBlbmRDaGlsZChkZWZhdWx0SGVhZGVyKVxuICAgIGRpdkRlZmF1bHQuYXBwZW5kQ2hpbGQoZGVmYXVsdFByb2plY3RzTGlzdClcblxuXG4gICAgY29uc3QgZGl2UHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgZGl2UHJvamVjdC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2RpdlByb2plY3QnKVxuXG4gICAgY29uc3QgcHJvamVjdEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJylcbiAgICBwcm9qZWN0SGVhZGVyLmNsYXNzTGlzdC5hZGQoJ3NpZGViYXItaGVhZGVyJylcbiAgICBwcm9qZWN0SGVhZGVyLnNldEF0dHJpYnV0ZSgnaWQnLCAncHJvamVjdEhlYWRlcicpXG4gICAgcHJvamVjdEhlYWRlci50ZXh0Q29udGVudCA9ICdQcm9qZWN0J1xuXG4gICAgY29uc3Qgb3BlbkFkZFByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIG9wZW5BZGRQcm9qZWN0LnNldEF0dHJpYnV0ZSgnaWQnLCAnb3BlbkFkZFByb2plY3QnKVxuICAgIG9wZW5BZGRQcm9qZWN0LnRleHRDb250ZW50ID0gJ0FkZCBOZXcgUHJvamVjdCdcblxuICAgIGNvbnN0IHVzZXJQcm9qZWN0c0xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHVzZXJQcm9qZWN0c0xpc3QuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1saXN0JylcbiAgICB1c2VyUHJvamVjdHNMaXN0LnNldEF0dHJpYnV0ZSgnaWQnLCAndXNlclByb2plY3RzTGlzdCcpXG5cbiAgICBkaXZQcm9qZWN0LmFwcGVuZENoaWxkKHByb2plY3RIZWFkZXIpXG4gICAgZGl2UHJvamVjdC5hcHBlbmRDaGlsZChvcGVuQWRkUHJvamVjdClcbiAgICBkaXZQcm9qZWN0LmFwcGVuZENoaWxkKHVzZXJQcm9qZWN0c0xpc3QpXG5cbiAgICBzaWRlQmFyLmFwcGVuZENoaWxkKGRpdkRlZmF1bHQpXG4gICAgc2lkZUJhci5hcHBlbmRDaGlsZChkaXZQcm9qZWN0KVxuXG5cbiAgICByZXR1cm4gc2lkZUJhclxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZGluZ05ld1Rhc2tFbGVtZW50KCl7XG4gICAgY29uc3QgbmV3VGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgbmV3VGFzay5zZXRBdHRyaWJ1dGUoJ2lkJywgJ25ld1Rhc2snKVxuICAgIFxuICAgIGNvbnN0IG9wZW5Nb2RhbEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgb3Blbk1vZGFsQnRuLnNldEF0dHJpYnV0ZSgnaWQnLCAnb3BlbkFkZFRhc2tNb2RhbCcpXG4gICAgb3Blbk1vZGFsQnRuLnRleHRDb250ZW50ID0gXCJBZGQgTmV3IFRhc2tcIlxuXG4gICAgY29uc3QgZGl2TW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGRpdk1vZGFsLnNldEF0dHJpYnV0ZSgnaWQnLCAnZGl2TW9kYWwnKVxuICAgIGRpdk1vZGFsLmNsYXNzTGlzdC5hZGQoJ21vZGFsJylcblxuICAgIGNvbnN0IGNsb3NlTW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcbiAgICBjbG9zZU1vZGFsLmNsYXNzTGlzdC5hZGQoJ2Nsb3NlJylcbiAgICBjbG9zZU1vZGFsLnRleHRDb250ZW50ID0gXCJcXHUyNzRDXCJcblxuICAgIGNvbnN0IGxhYmVsVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4gICAgbGFiZWxUaXRsZS50ZXh0Q29udGVudCA9IFwiVGl0bGU6IFwiXG5cbiAgICBjb25zdCB0aXRsZVRvZG9JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICB0aXRsZVRvZG9JbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpXG4gICAgdGl0bGVUb2RvSW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsICdhZGRUaXRsZScpXG5cbiAgICBjb25zdCBsYWJlbERlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4gICAgbGFiZWxEZXNjLnRleHRDb250ZW50ID0gJ0Rlc2NyaXB0aW9uOiAnXG5cbiAgICBjb25zdCBkZXNjVG9kb0lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgIGRlc2NUb2RvSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKVxuICAgIGRlc2NUb2RvSW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsICdhZGREZXNjJylcblxuICAgIGNvbnN0IGxhYmVsRHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICBsYWJlbER1ZURhdGUudGV4dENvbnRlbnQgPSAnRHVlIERhdGU6ICdcblxuICAgIGNvbnN0IGR1ZURhdGVUb2RvSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgZHVlRGF0ZVRvZG9JbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnZGF0ZScpXG4gICAgZHVlRGF0ZVRvZG9JbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2FkZER1ZURhdGUnKVxuICAgIGR1ZURhdGVUb2RvSW5wdXQuc2V0QXR0cmlidXRlKCd2YWx1ZScsIChuZXcgRGF0ZSgpKS50b0pTT04oKS5zbGljZSgwLCAxMCkpXG5cbiAgICBjb25zdCBsYWJlbFByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgIGxhYmVsUHJpb3JpdHkudGV4dENvbnRlbnQgPSBcIlByaW9yaXR5OiBcIlxuXG4gICAgY29uc3QgcHJpb3JpdHlUb2RvSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgcHJpb3JpdHlUb2RvSW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsICdhZGRQcmlvcml0eScpXG4gICAgcHJpb3JpdHlUb2RvSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3JhbmdlJylcbiAgICBwcmlvcml0eVRvZG9JbnB1dC5zZXRBdHRyaWJ1dGUoJ21pbicsICcwJylcbiAgICBwcmlvcml0eVRvZG9JbnB1dC5zZXRBdHRyaWJ1dGUoJ21heCcsICcyJylcbiAgICBwcmlvcml0eVRvZG9JbnB1dC5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJzEnKVxuXG4gICAgY29uc3QgYnRuQWRkVGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgYnRuQWRkVGFzay5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2FkZFRhc2snKVxuICAgIGJ0bkFkZFRhc2sudGV4dENvbnRlbnQgPSBcIkFkZCBUYXNrXCJcblxuICAgIG9wZW5Nb2RhbEJ0bi5vbmNsaWNrID0gZnVuY3Rpb24oKXtcbiAgICAgICAgZGl2TW9kYWwuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIlxuICAgIH1cblxuICAgIGNsb3NlTW9kYWwub25jbGljayA9IGZ1bmN0aW9uKCl7XG4gICAgICAgIGRpdk1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIlxuICAgIH1cblxuICAgIHdpbmRvdy5vbmNsaWNrID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgaWYgKGV2ZW50LnRhcmdldCA9PSBkaXZNb2RhbCkge1xuICAgICAgICAgIGRpdk1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgLy8gbmV3VGFzay5hcHBlbmRDaGlsZChsYWJlbFRpdGxlKVxuICAgIC8vIG5ld1Rhc2suYXBwZW5kQ2hpbGQodGl0bGVUb2RvSW5wdXQpXG4gICAgLy8gbmV3VGFzay5hcHBlbmRDaGlsZChsYWJlbERlc2MpXG4gICAgLy8gbmV3VGFzay5hcHBlbmRDaGlsZChkZXNjVG9kb0lucHV0KVxuICAgIC8vIG5ld1Rhc2suYXBwZW5kQ2hpbGQobGFiZWxEdWVEYXRlKVxuICAgIC8vIG5ld1Rhc2suYXBwZW5kQ2hpbGQoZHVlRGF0ZVRvZG9JbnB1dClcbiAgICAvLyBuZXdUYXNrLmFwcGVuZENoaWxkKGxhYmVsUHJpb3JpdHkpXG4gICAgLy8gbmV3VGFzay5hcHBlbmRDaGlsZChwcmlvcml0eVRvZG9JbnB1dClcbiAgICAvLyBuZXdUYXNrLmFwcGVuZENoaWxkKGJ0bkFkZFRhc2spXG5cbiAgICBkaXZNb2RhbC5hcHBlbmRDaGlsZChjbG9zZU1vZGFsKVxuICAgIGRpdk1vZGFsLmFwcGVuZENoaWxkKGxhYmVsVGl0bGUpXG4gICAgZGl2TW9kYWwuYXBwZW5kQ2hpbGQodGl0bGVUb2RvSW5wdXQpXG4gICAgZGl2TW9kYWwuYXBwZW5kQ2hpbGQobGFiZWxEZXNjKVxuICAgIGRpdk1vZGFsLmFwcGVuZENoaWxkKGRlc2NUb2RvSW5wdXQpXG4gICAgZGl2TW9kYWwuYXBwZW5kQ2hpbGQobGFiZWxEdWVEYXRlKVxuICAgIGRpdk1vZGFsLmFwcGVuZENoaWxkKGR1ZURhdGVUb2RvSW5wdXQpXG4gICAgZGl2TW9kYWwuYXBwZW5kQ2hpbGQobGFiZWxQcmlvcml0eSlcbiAgICBkaXZNb2RhbC5hcHBlbmRDaGlsZChwcmlvcml0eVRvZG9JbnB1dClcbiAgICBkaXZNb2RhbC5hcHBlbmRDaGlsZChidG5BZGRUYXNrKVxuXG4gICAgbmV3VGFzay5hcHBlbmRDaGlsZChvcGVuTW9kYWxCdG4pXG4gICAgbmV3VGFzay5hcHBlbmRDaGlsZChkaXZNb2RhbClcblxuXG4gICAgcmV0dXJuIG5ld1Rhc2tcbiAgICBcbn0gIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGlzcGxheVRvZG9zRWxlbWVudCgpe1xuICAgIGNvbnN0IGRpc3BsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGRpc3BsYXkuc2V0QXR0cmlidXRlKCdpZCcsICdkaXNwbGF5JylcblxuICAgIHJldHVybiBkaXNwbGF5XG59IiwiaW1wb3J0IGFkZGluZ05ld1Rhc2tFbGVtZW50IGZyb20gXCIuL2FkZGluZ05ld1Rhc2tFbGVtZW50XCJcbmltcG9ydCBkaXNwbGF5VG9kb3NFbGVtZW50IGZyb20gXCIuL2Rpc3BsYXlUb2Rvc0VsZW1lbnRcIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB3b3JrQXJlYUVsZW1lbnQoKXtcbiAgICBjb25zdCB3b3JrQXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgd29ya0FyZWEuc2V0QXR0cmlidXRlKCdpZCcsJ3dvcmtBcmVhJylcblxuICAgIHdvcmtBcmVhLmFwcGVuZENoaWxkKGFkZGluZ05ld1Rhc2tFbGVtZW50KCkpXG4gICAgd29ya0FyZWEuYXBwZW5kQ2hpbGQoZGlzcGxheVRvZG9zRWxlbWVudCgpKVxuXG4gICAgcmV0dXJuIHdvcmtBcmVhXG5cbn0iLCJpbXBvcnQgdG9kb0NhcmQgZnJvbSBcIi4vdG9kb0NhcmRcIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkaXNwbGF5VG9kb3MgKGFyclRvZG9zKSB7XG4gICAgY29uc3QgdG9kb0xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHRvZG9MaXN0LnNldEF0dHJpYnV0ZSgnaWQnLCd0b2RvTGlzdCcpXG5cbiAgICBhcnJUb2Rvcy5mb3JFYWNoKHRvZG8gPT4ge1xuICAgICAgICB0b2RvTGlzdC5hcHBlbmRDaGlsZCh0b2RvQ2FyZCh0b2RvKSlcbiAgICB9KTtcblxuICAgIHJldHVybiB0b2RvTGlzdFxufSIsImltcG9ydCBoZWFkZXIgZnJvbSBcIi4vSGVhZGVyL2hlYWRlckVsZW1lbnRcIlxuaW1wb3J0IHdvcmtBcmVhRWxlbWVudCBmcm9tIFwiLi9Xb3JrQXJlYS93b3JrQXJlYUVsZW1lbnRcIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbml0aWFsTG9hZCAoKSB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29udGVudC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NvbnRlbnQnKVxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGVyKCkpXG4gICAgY29udGVudC5hcHBlbmRDaGlsZCh3b3JrQXJlYUVsZW1lbnQoKSlcblxuICAgIHJldHVybiBjb250ZW50XG5cbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b2RvQ2FyZCh0b2RvKSB7XG4gICAgY29uc3QgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY2FyZC5jbGFzc0xpc3QuYWRkKCdjYXJkJylcbiAgICBjYXJkLnNldEF0dHJpYnV0ZSgnaWQnLCB0b2RvLmdldElkKCkpXG5cbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKCdoZWFkZXJDYXJkJylcblxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSB0b2RvLmdldFRpdGxlKClcblxuICAgIGhlYWRlci5hcHBlbmRDaGlsZCh0aXRsZSlcbiAgICBjYXJkLmFwcGVuZENoaWxkKGhlYWRlcilcblxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NvbnRhaW5lckNhcmQnKVxuXG4gICAgY29uc3QgZGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIGRlc2MudGV4dENvbnRlbnQgPSB0b2RvLmdldERlc2NyaXB0aW9uKClcblxuICAgIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBkdWVEYXRlLnRleHRDb250ZW50ID0gdG9kby5nZXREdWVEYXRlKClcblxuICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgcHJpb3JpdHkudGV4dENvbnRlbnQgPSB0b2RvLmdldFByaW9yaXR5KClcblxuICAgIGNvbnN0IGRlbGV0ZVRvZG9CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIGRlbGV0ZVRvZG9CdG4uY2xhc3NMaXN0LmFkZCgncmVtb3ZlVG9kbycpXG4gICAgZGVsZXRlVG9kb0J0bi5kYXRhc2V0LmlkID0gdG9kby5nZXRJZCgpXG4gICAgZGVsZXRlVG9kb0J0bi50ZXh0Q29udGVudCA9ICdSZW1vdmUnXG5cbiAgICBjb25zdCBjb21wbGV0ZVRvZG9CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIGNvbXBsZXRlVG9kb0J0bi5jbGFzc0xpc3QuYWRkKCdkb25lVGFzaycpXG4gICAgY29tcGxldGVUb2RvQnRuLmRhdGFzZXQuaWQgPSB0b2RvLmdldElkKClcbiAgICBjb21wbGV0ZVRvZG9CdG4udGV4dENvbnRlbnQgPSBcIlRhc2sgZG9uZVwiXG5cblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChkZXNjKVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChkdWVEYXRlKVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChwcmlvcml0eSlcbiAgICBjYXJkLmFwcGVuZENoaWxkKGNvbnRhaW5lcilcbiAgICBjYXJkLmFwcGVuZENoaWxkKGRlbGV0ZVRvZG9CdG4pXG4gICAgY2FyZC5hcHBlbmRDaGlsZChjb21wbGV0ZVRvZG9CdG4pXG5cblxuICAgIHJldHVybiBjYXJkXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBpbml0aWFsTG9hZCBmcm9tIFwiLi9pbml0aWFsTG9hZFwiXG5pbXBvcnQgZGlzcGxheVRvZG9zIGZyb20gXCIuL2Rpc3BsYXlUb2Rvc1wiXG5pbXBvcnQgdG9kb0NhcmQgZnJvbSBcIi4vdG9kb0NhcmRcIlxuaW1wb3J0ICcuL3N0eWxlLmNzcydcbmltcG9ydCBzaWRlYmFyRWxlbWVudCBmcm9tIFwiLi9TaWRlYmFyL3NpZGViYXJFbGVtZW50XCJcbmltcG9ydCBhZGRQcm9qZWN0RWxlbWVudCBmcm9tIFwiLi9TaWRlYmFyL2FkZFByb2plY3RFbGVtZW50XCJcblxuLy9PYmplY3Qgb2YgaW5kaXZpZHVhbCB0b2Rvc1xuY29uc3QgVG9Eb3MgPSAoKT0+e1xuICAgIGxldCB0aXRsZT1cIk5vIHRpdGxlXCJcbiAgICBsZXQgZGVzY3JpcHRpb249XCJcIlxuICAgIGxldCBkdWVEYXRlPSAobmV3IERhdGUoKSkudG9KU09OKCkuc2xpY2UoMCwgMTApXG4gICAgbGV0IHByaW9yaXR5PTBcbiAgICBsZXQgaWQgPSAwXG4gICAgbGV0IHN0YXR1cyA9IGZhbHNlXG5cbiAgICBjb25zdCBzZXRUaXRsZSA9IG5ld1RpdGxlID0+IHRpdGxlID0gbmV3VGl0bGVcbiAgICBjb25zdCBzZXREZXNjcmlwdGlvbiA9IG5ld0Rlc2NyaXB0aW9uID0+IGRlc2NyaXB0aW9uID0gbmV3RGVzY3JpcHRpb25cbiAgICBjb25zdCBzZXREdWVEYXRlID0gbmV3RHVlRGF0ZSA9PiBkdWVEYXRlID0gbmV3RHVlRGF0ZVxuICAgIGNvbnN0IHNldFByaW9yaXR5ID0gbmV3UHJpb3J0eSA9PiBwcmlvcml0eSA9IG5ld1ByaW9ydHlcbiAgICBjb25zdCBzZXRJZCA9IG5ld0lkID0+IGlkID0gbmV3SWRcbiAgICBjb25zdCBzZXRTdGF0dXMgPSBuZXdTdGF0dXMgPT4gc3RhdHVzID0gbmV3U3RhdHVzXG5cbiAgICBjb25zdCBnZXRUaXRsZSA9ICgpID0+IHRpdGxlXG4gICAgY29uc3QgZ2V0RGVzY3JpcHRpb24gPSAoKSA9PiBkZXNjcmlwdGlvblxuICAgIGNvbnN0IGdldER1ZURhdGUgPSAoKSA9PiBkdWVEYXRlXG4gICAgY29uc3QgZ2V0UHJpb3JpdHkgPSAoKSA9PiBwcmlvcml0eVxuICAgIGNvbnN0IGdldElkID0gKCkgPT4gaWRcbiAgICBjb25zdCBnZXRTdGF0dXMgPSAoKSA9PiBzdGF0dXNcblxuICAgIHJldHVybiB7c2V0VGl0bGUsIHNldERlc2NyaXB0aW9uLCBzZXREdWVEYXRlLCBzZXRQcmlvcml0eSwgc2V0SWQsZ2V0VGl0bGUsIHNldFN0YXR1cywgZ2V0RGVzY3JpcHRpb24sIGdldER1ZURhdGUsIGdldFByaW9yaXR5LCBnZXRJZCwgZ2V0U3RhdHVzfVxuXG59XG5cbi8vQ29sbGVjdGlvbiBvZiBUb2Rvc1xuY29uc3QgY29sbGVjdGlvblRvZG9zID0gKG5hbWUsIGxpc3RJZCkgPT57XG4gICAgbGV0IGFyclRvZG9zID0gW11cbiAgICBjb25zdCBhZGRUb0RvcyA9IG5ld1RvZG8gPT4gYXJyVG9kb3MucHVzaChuZXdUb2RvKVxuXG4gICAgY29uc3QgZ2V0TmFtZSA9KCkgPT4gbmFtZVxuXG4gICAgY29uc3QgZ2V0TGlzdElkID0gKCkgID0+IGxpc3RJZFxuXG4gICAgY29uc3QgZGVsZXRlVG9kb3MgPSAoaWQpID0+IHtcblxuICAgICAgICBmb3IobGV0IGk9MDsgaTxhcnJUb2Rvcy5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICBpZihhcnJUb2Rvc1tpXS5nZXRJZCgpID09PSBpZCl7XG4gICAgICAgICAgICAgICAgYXJyVG9kb3Muc3BsaWNlKGksMSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfSBcblxuICAgIGNvbnN0IGNoYW5nZVN0YXR1cyA9IChpZCkgPT57XG4gICAgICAgIGFyclRvZG9zLmZvckVhY2goKHRvZG8pID0+e1xuICAgICAgICAgICAgaWYodG9kby5nZXRJZCgpID09PSBpZCl7XG4gICAgICAgICAgICAgICAgdG9kby5zZXRTdGF0dXMoISh0b2RvLmdldFN0YXR1cygpKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgIH1cblxuICAgIGNvbnN0IGdldExlbmd0aCA9ICgpID0+ICBhcnJUb2Rvcy5sZW5ndGhcblxuICAgIHJldHVybnthcnJUb2RvcywgYWRkVG9Eb3MsIGRlbGV0ZVRvZG9zLCBnZXRMZW5ndGgsIGNoYW5nZVN0YXR1cywgZ2V0TmFtZSwgZ2V0TGlzdElkfVxufVxuXG5jb25zdCB0b2RvTGlzdCA9IGNvbGxlY3Rpb25Ub2RvcygnVG9kYXknLCAxKVxuY29uc3QgdG9kb0xpc3QxID0gY29sbGVjdGlvblRvZG9zKCdUb21vcnJvdycsIDIpXG5cbmNvbnN0IGRvSHcgPSBUb0RvcygpXG5kb0h3LnNldFRpdGxlKCdkbyBIb21ld29yaycpXG5kb0h3LnNldERlc2NyaXB0aW9uKCdjb2xsZWdlIGhvbWV3b3JrJylcbmRvSHcuc2V0UHJpb3JpdHkoMClcbmRvSHcuc2V0SWQoMSlcblxuY29uc3QgZXhjZXJjaXNlID0gVG9Eb3MoKVxuZXhjZXJjaXNlLnNldFRpdGxlKCdleGNlcmNpc2UnKVxuZXhjZXJjaXNlLnNldERlc2NyaXB0aW9uKCdkbyBleGNlcmNpc2UgaW4gZXZlbmluZycpXG5leGNlcmNpc2Uuc2V0UHJpb3JpdHkoMilcbmV4Y2VyY2lzZS5zZXRJZCgyKVxuXG5jb25zdCBjcCA9IFRvRG9zKClcbmNwLnNldFRpdGxlKCdDb21wZXRpdHZlIFByb2dyYW1taW5nJylcbmNwLnNldERlc2NyaXB0aW9uKCdvcGVuIGxlZXRjb2RlIGFuZCBjb2RlY2hlZicpXG5jcC5zZXRJZCgxKVxuXG50b2RvTGlzdC5hZGRUb0Rvcyhkb0h3KVxudG9kb0xpc3QuYWRkVG9Eb3MoZXhjZXJjaXNlKVxuXG50b2RvTGlzdDEuYWRkVG9Eb3MoY3ApXG5cbmNvbnN0IGFsbFByb2plY3RzTGlzdCA9IFtdXG5cbmFsbFByb2plY3RzTGlzdC5wdXNoKHRvZG9MaXN0KVxuYWxsUHJvamVjdHNMaXN0LnB1c2godG9kb0xpc3QxKVxuXG5cbmZ1bmN0aW9uIGNsZWFyRWxlbWVudENvbnRlbnQoZWxlbWVudElEKSB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZWxlbWVudElEKTtcbiAgICAgIFxuICAgIHdoaWxlKGRpdi5maXJzdENoaWxkKSB7XG4gICAgICAgIGRpdi5yZW1vdmVDaGlsZChkaXYuZmlyc3RDaGlsZCk7XG4gICAgfVxufVxuXG5sZXQgc2VsZWN0ZWRQcm9qZWN0SWQgPSBhbGxQcm9qZWN0c0xpc3RbMF0uZ2V0TGlzdElkKClcblxuY29uc3QgaGFuZGxlQWRkTmV3VGFzayA9IChlKSA9PntcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGRUaXRsZScpLnZhbHVlXG4gICAgY29uc3QgZGVzYyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGREZXNjJykudmFsdWVcbiAgICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZER1ZURhdGUnKS52YWx1ZVxuICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZFByaW9yaXR5JykudmFsdWVcbiAgICBcblxuICAgIGNvbnN0IG5ld1RvZG8gPSBUb0RvcygpXG4gICAgbmV3VG9kby5zZXRUaXRsZSh0aXRsZSlcbiAgICBuZXdUb2RvLnNldERlc2NyaXB0aW9uKGRlc2MpXG4gICAgbmV3VG9kby5zZXREdWVEYXRlKGR1ZURhdGUpXG4gICAgbmV3VG9kby5zZXRQcmlvcml0eShwcmlvcml0eSlcbiAgICBcbiAgICBcbiAgICBhbGxQcm9qZWN0c0xpc3QuZm9yRWFjaChwcm9qZWN0PT57XG4gICAgICAgIGlmKHByb2plY3QuZ2V0TGlzdElkKCkgPT09IHNlbGVjdGVkUHJvamVjdElkKXtcbiAgICAgICAgICAgIG5ld1RvZG8uc2V0SWQocHJvamVjdC5nZXRMZW5ndGgoKSsxKVxuICAgICAgICAgICAgcHJvamVjdC5hZGRUb0RvcyhuZXdUb2RvKVxuICAgICAgICB9XG4gICAgfSlcblxuICAgIGNvbnN0IHRvZG9BZGRFbGVtZW50ID10b2RvQ2FyZChuZXdUb2RvKVxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvTGlzdCcpLmFwcGVuZENoaWxkKHRvZG9BZGRFbGVtZW50KVxuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZFRpdGxlJykudmFsdWUgPSAnJ1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGREZXNjJykudmFsdWUgPSAnJ1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGREdWVEYXRlJykudmFsdWUgPSAobmV3IERhdGUoKSkudG9KU09OKCkuc2xpY2UoMCwgMTApXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZFByaW9yaXR5JykudmFsdWUgPSAxICAgIFxuXG4gICAgdG9kb0FkZEVsZW1lbnQucXVlcnlTZWxlY3RvcignLnJlbW92ZVRvZG8nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZURlbGV0ZVRhc2spXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkaXZNb2RhbFwiKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG59XG5cbmNvbnN0IGhhbmRsZURlbGV0ZVRhc2sgPSAoZSkgPT57XG4gICAgY29uc3QgdGFza0lkID0gcGFyc2VJbnQoZS50YXJnZXQuZGF0YXNldC5pZClcblxuICAgIGFsbFByb2plY3RzTGlzdC5mb3JFYWNoKHByb2plY3QgPT57XG4gICAgICAgIGlmKHByb2plY3QuZ2V0TGlzdElkKCkgPT09IHNlbGVjdGVkUHJvamVjdElkKXtcbiAgICAgICAgICAgIHByb2plY3QuZGVsZXRlVG9kb3ModGFza0lkKVxuXG4gICAgICAgIH1cbiAgICB9KVxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke3Rhc2tJZH1gKS5yZW1vdmUoKVxufVxuXG5jb25zdCBoYWRubGVTdGF0dXNDaGFuZ2UgPSAoZSkgPT57XG4gICAgY29uc3QgaWQgPSBwYXJzZUludChlLnRhcmdldC5kYXRhc2V0LmlkKVxuICAgIHRvZG9MaXN0LmNoYW5nZVN0YXR1cyhpZClcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtpZH1gKS5jbGFzc0xpc3QudG9nZ2xlKCdkb25lJylcbn1cblxuY29uc3QgaGFuZGxlUHJvamVjdEJ0biA9IChlKT0+e1xuICAgIHNlbGVjdGVkUHJvamVjdElkID0gIHBhcnNlSW50KGUudGFyZ2V0LmlkLnNsaWNlKDcpKVxuICAgIGNsZWFyRWxlbWVudENvbnRlbnQoJ2Rpc3BsYXknKVxuICAgIGNvbnN0IHByb2plY3RUb1Nob3cgPSBhbGxQcm9qZWN0c0xpc3QuZmluZChwcm9qZWN0ID0+IHByb2plY3QuZ2V0TGlzdElkKCkgPT09IHNlbGVjdGVkUHJvamVjdElkKVxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkaXNwbGF5JykuYXBwZW5kQ2hpbGQoZGlzcGxheVRvZG9zKHByb2plY3RUb1Nob3cuYXJyVG9kb3MpKVxuXG4gICAgZGlzcGxheUxvYWRlci5hZGRSZW1vdmVFdmVudExpc3RlbmVycygpXG59XG5cbmNvbnN0IGhhbmRsZU9wZW5BZGRQcm9qZWN0ID0gKGUpPT57XG4gICAgLy9hZGQgJ2FkZFByb2plY3RFTGVtZW50JyB0byAjZGl2UHJvamVjdFxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkaXZQcm9qZWN0JykuYXBwZW5kQ2hpbGQoYWRkUHJvamVjdEVsZW1lbnQoKSlcblxuICAgIC8vdGhlIGNsb3NlYWRkcHJvamVjdCBpcyBub3QgcHJlc2VudCBpbiB0aGUgZG9tIGFzIHdlIGFkZCBpdCBhZnRlciBjbGlja2luZyB0aGUgYnV0dG9uXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Nsb3NlQWRkUHJvamVjdCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpPT57XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRQcm9qZWN0RGl2JykucmVtb3ZlKClcbiAgICB9KVxuXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZFByb2plY3QnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKT0+e1xuICAgICAgICBjb25zdCBuYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3ROYW1lSW5wdXQnKS52YWx1ZSA9PT0gXCJcIiA/IFwiUHJvamVjdFwiIDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3ROYW1lSW5wdXQnKS52YWx1ZVxuICAgICAgICBjb25zdCBuZXdUb2RvTGlzdCA9IGNvbGxlY3Rpb25Ub2RvcyhuYW1lLCBhbGxQcm9qZWN0c0xpc3QubGVuZ3RoKzEpXG4gICAgICAgIGFsbFByb2plY3RzTGlzdC5wdXNoKG5ld1RvZG9MaXN0KVxuXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRQcm9qZWN0RGl2JykucmVtb3ZlKClcblxuICAgICAgICBjb25zdCBuZXdQcm9qZWN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICAgICAgbmV3UHJvamVjdEJ0bi50ZXh0Q29udGVudCA9IG5ld1RvZG9MaXN0LmdldE5hbWUoKVxuICAgICAgICBuZXdQcm9qZWN0QnRuLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QnKVxuICAgICAgICBuZXdQcm9qZWN0QnRuLnNldEF0dHJpYnV0ZSgnaWQnLCBgcHJvamVjdCR7YWxsUHJvamVjdHNMaXN0Lmxlbmd0aH1gKVxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndXNlclByb2plY3RzTGlzdCcpLmFwcGVuZENoaWxkKG5ld1Byb2plY3RCdG4pXG4gICAgICAgIG5ld1Byb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGhhbmRsZVByb2plY3RCdG4pXG4gICAgfSlcblxufVxuXG5cbmNvbnN0IGRpc3BsYXlMb2FkZXIgPSAoKCk9PntcblxuICAgIGNvbnN0IHBhZ2VMb2FkID0gKCk9PntcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21haW4nKS5hcHBlbmRDaGlsZChpbml0aWFsTG9hZCgpKVxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWFpbicpLmFwcGVuZENoaWxkKHNpZGViYXJFbGVtZW50KGFsbFByb2plY3RzTGlzdCkpXG4gICAgfVxuXG4gICAgY29uc3QgdG9kb0Rpc3BsYXkgPSAoKT0+e1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGlzcGxheScpLmFwcGVuZENoaWxkKGRpc3BsYXlUb2Rvcyh0b2RvTGlzdC5hcnJUb2RvcykpXG4gICAgfSBcblxuICAgIGNvbnN0IGFkZFJlbW92ZUV2ZW50TGlzdGVuZXJzID0gKCkgPT57XG4gICAgICAgIGNvbnN0IHJlbW92ZUJ0bnMgPSBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnJlbW92ZVRvZG8nKV1cblxuICAgICAgICByZW1vdmVCdG5zLmZvckVhY2goKHJlbW92ZUJ0bik9PntcbiAgICAgICAgICAgIHJlbW92ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZURlbGV0ZVRhc2spXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgY29uc3QgYWRkVGFza0V2ZW50TGlzdGVuZXIgPSAoKSA9PntcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZFRhc2snKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsaGFuZGxlQWRkTmV3VGFzaylcbiAgICB9XG5cblxuICAgIHJldHVybiB7cGFnZUxvYWQsIHRvZG9EaXNwbGF5LGFkZFRhc2tFdmVudExpc3RlbmVyICxhZGRSZW1vdmVFdmVudExpc3RlbmVyc31cblxufSkoKVxuXG5kaXNwbGF5TG9hZGVyLnBhZ2VMb2FkKClcbmRpc3BsYXlMb2FkZXIudG9kb0Rpc3BsYXkoKVxuZGlzcGxheUxvYWRlci5hZGRUYXNrRXZlbnRMaXN0ZW5lcigpXG5kaXNwbGF5TG9hZGVyLmFkZFJlbW92ZUV2ZW50TGlzdGVuZXJzKClcblxuY29uc3QgZG9uZVRhc2tCdG5zID0gWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kb25lVGFzaycpXVxuXG5kb25lVGFza0J0bnMuZm9yRWFjaCgoZG9uZVRhc2tCdG4pID0+e1xuICAgIGRvbmVUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFkbmxlU3RhdHVzQ2hhbmdlKVxufSlcblxuXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb3BlbkFkZFByb2plY3QnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZU9wZW5BZGRQcm9qZWN0KVxuXG5jb25zdCBwcm9qZWN0QnRucyA9IFsuLi5kb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdwcm9qZWN0JyldXG5wcm9qZWN0QnRucy5mb3JFYWNoKHByb2plY3RCdG4gPT57XG4gICAgcHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZVByb2plY3RCdG4pXG59KVxuXG5cblxuXG5cblxuXG5cblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9