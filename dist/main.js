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
___CSS_LOADER_EXPORT___.push([module.id, "*{\n  margin: 0px;\n  padding: 0px;\n}\n\n.title{\nbackground: rgb(2,0,36);\nbackground: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(44,44,60,1) 0%, rgba(10,25,13,1) 100%, rgba(82,143,186,1) 100%, rgba(3,178,157,1) 100%, rgba(0,255,229,1) 100%);\nheight: 75px;\ncolor: #f3e9e9;\nfont-family: 'Varela Round', sans-serif;\nfont-size: 40px;\nfont-weight:normal;\n\n}\n\n.title p{\n  padding-left: 30px;\n  padding-top: 10px;\n}\n\n#content{\n  display: flex;\n}\n\n\n#sidebar{\n  text-align: center;\n  position: fixed;\n  width: 200px;\n  height: 100%;\n  color: #f3e9e9;\nfont-family: 'Varela Round', sans-serif;\nbackground: #2E2E3E;\nbackground: -webkit-linear-gradient(right, #2E2E3E, #1B2027);\nbackground: -moz-linear-gradient(right, #2E2E3E, #1B2027);\nbackground: linear-gradient(to left, #2E2E3E, #1B2027);\n}\n\n#workArea{\n  margin-left: 200px;\n  width: 100%;\n}\n\n.projectListItem{\n  width: 90%;\n  text-align: left;\n  background: #aaaaaa;\n  margin: 10px;\n  border-radius: 10px;\n  transition: box-shadow .3s;\n  cursor: pointer;\n}\n.projectListItem:hover {\nbox-shadow: 0 0 10px  #eeeeee;\n}\n\n\n.project{\n  color: #412b2b;\n  border: none;\n  background: none;\n  height: 40px;\n  font-size: large;\n  padding-left: 10px;\n}\n\n.remove-project{\n  border: none;\n  background:#a89191;\n  height: 30px;\n  width: 30px;\n  font-size: larger;\n  color: #c85000;\n  position: relative;\n  float: right;\n  margin-right: 10px;\n  margin-top: 4px;\n  \n}\n\n#openAddProject, #openAddTaskModal {\n  background: #FF4742;\n  border: 1px solid #FF4742;\n  border-radius: 6px;\n  box-shadow: rgba(0, 0, 0, 0.1) 1px 2px 4px;\n  box-sizing: border-box;\n  color: #FFFFFF;\n  cursor: pointer;\n  display: inline-block;\n  font-family: nunito,roboto,proxima-nova,\"proxima nova\",sans-serif;\n  font-size: 16px;\n  font-weight: 800;\n  line-height: 16px;\n  min-height: 40px;\n  outline: 0;\n  padding: 12px 14px;\n  text-align: center;\n  text-rendering: geometricprecision;\n  text-transform: none;\n  user-select: none;\n  -webkit-user-select: none;\n  touch-action: manipulation;\n  vertical-align: middle;\n}\n\n#openAddProject:hover,\n#openAddProject:active {\n  background-color: #FFFFFF;\n  background-position: 0 0;\n  color: #FF4742;\n}\n\n#openAddProject:active {\n  opacity: .5;\n}\n#openAddTaskModal {\n  margin: 30px;\n}\n\n#openAddTaskModal:hover, #openAddTaskModal:active{\n  background-color:initial;\n  background-position: 0 0;\n  color: #FF4742;\n}\n\n#openAddTaskModal:active{\n  opacity: .5;\n}\n\n\n\n#addProjectDiv{\n  height: 200px;\n  width: 100%;\n  margin-top: 10px;\n  margin-bottom: 5px;\n}\n\n#addProjectDiv input[type=text]{\n  border: none;\n  border-radius: 4px;\n  background-color: #5bf1ddc2;\n  color: rgb(49, 36, 36);\n  width: 70%;\n  height: 25px;\n  padding-left: 3px;\n  margin-bottom: 2px;\n  font-size: large;\n}\n\n#addProject{\n  width: 40%;\n  height: 25px;\n  border: none;\n  border-radius: 4px;\n  background-color: #7abe21c2;\n  color: #FFFFFF;\n  font-size: large;\n}\n\n#closeAddProject{\n  width: 30%;\n  border: none;\n  border-radius: 4px;\n  background-color: #7abe21c2;\n  color: #FFFFFF;\n  height: 25px;\n  margin: 3px;\n  font-size: large;\n}\n\n#newTask{\n  text-align: center;\n}\n\n\n.modal {\n  border-radius: 10px;\n display: none; /* Hidden by default */\n position: absolute; /* Stay in place */\n z-index: 1; \n left: 40%;\n top: 30%;\n padding-top:10px;\n padding-left: 10px;\n padding-right: 5px;\n width: 500px; /* Full width */\n height: 300px; /* Full height */\n overflow: auto; \ncolor: #1fe4f5;\nbox-shadow: 0 0 1px 2000px rgba(0, 0, 0, 0.3);\n\nbackground: rgb(255,175,75);\nbackground: -moz-radial-gradient(center, ellipse cover,  rgba(255,175,75,1) 0%, rgba(255,146,10,1) 100%);\nbackground: -webkit-radial-gradient(center, ellipse cover,  rgba(255,175,75,1) 0%,rgba(255,146,10,1) 100%);\nbackground: radial-gradient(ellipse at center,  rgba(255,175,75,1) 0%,rgba(255,146,10,1) 100%);\nfilter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffaf4b', endColorstr='#ff920a',GradientType=1 );\n\n\n \n}\n\n\n\n.close {\n color: #aaaaaa;\n float: right;\n font-size: 28px;\n font-weight: bold;\n width: 100%;\n text-align: right;\n}\n\n.close:hover,\n.close:focus {\n color: #000;\n text-decoration: none;\n cursor: pointer;\n}\n\n.modal label{\n  font-size: larger;\n  color: #291b1b;\n  margin: 4px;\n  margin-top: 10px;\n\n}\n\n.modal input[type=text]{\n  border: none;\n  border-radius: 4px;\n  height: 25px;\n  width: 300px;\n  margin-top: 10px;\n  font-size: large;\n  padding-left: 5px;\n\n}\n\n.modal input[type=date], .modal input[type=range]{\n  border: none;\n  border-radius: 4px;\n  margin-top: 20px;\n} \n\n#addTask {\n  margin-top: 20px;\n  align-items: center;\n  background-color: #FFFFFF;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  border-radius: .25rem;\n  box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;\n  box-sizing: border-box;\n  color: rgba(0, 0, 0, 0.85);\n  cursor: pointer;\n  display: inline-flex;\n  font-family: system-ui,-apple-system,system-ui,\"Helvetica Neue\",Helvetica,Arial,sans-serif;\n  font-size: 16px;\n  font-weight: 600;\n  justify-content: center;\n  line-height: 1.25;\n  min-height: 3rem;\n  padding: calc(.875rem - 1px) calc(1.5rem - 1px);\n  position: relative;\n  text-decoration: none;\n  transition: all 250ms;\n  user-select: none;\n  -webkit-user-select: none;\n  touch-action: manipulation;\n  vertical-align: baseline;\n  width: auto;\n}\n\n#addTask:hover,\n#addTask:focus {\n  border-color: rgba(0, 0, 0, 0.15);\n  box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;\n  color: rgba(0, 0, 0, 0.65);\n}\n\n#addTask:hover {\n  transform: translateY(-1px);\n}\n\n#addTask:active {\n  background-color: #F0F0F1;\n  border-color: rgba(0, 0, 0, 0.15);\n  box-shadow: rgba(0, 0, 0, 0.06) 0 2px 4px;\n  color: rgba(0, 0, 0, 0.65);\n  transform: translateY(0);\n}\n\n.card {\n    margin: 20px;\n    padding: 20px;\n    width: 300px;\n    min-height: 200px;\n    border-radius: 10px;\n    box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.25);\n    transition: all 0.2s;\n    background: radial-gradient(#1fe4f5, #3fbafe);\n    position: relative;\n\n  }\n\n  .card:hover {\n    box-shadow: 0px 6px 10px rgba(128, 115, 115, 0.4);\n    transform: scale(1.01);\n  }\n\n.headerCard {\n  font-family: 'Yuji Syuku', serif;\n  font-size: x-large;\n  font-weight: bolder;\n  color: #ffffff;\n}\n\n.containerCard{\n  font-size: larger;\n  font-family: 'Fjalla One', sans-serif;\n}\n\n#todoList{\n    display: flex;\n  flex-wrap: wrap;\n\n}\n\n.removeTodo, .doneTask{\n  align-items: center;\n  background-clip: padding-box;\n  background-color: #fa6400;\n  border: 1px solid transparent;\n  border-radius: .25rem;\n  box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;\n  box-sizing: border-box;\n  color: #fff;\n  cursor: pointer;\n  display: inline-flex;\n  font-family: system-ui,-apple-system,system-ui,\"Helvetica Neue\",Helvetica,Arial,sans-serif;\n  font-size: 16px;\n  font-weight: 600;\n  justify-content: center;\n  line-height: 1.25;\n  margin: 0;\n  min-height: 3rem;\n  padding: calc(.875rem - 1px) calc(1.5rem - 1px);\n  position: relative;\n  text-decoration: none;\n  transition: all 250ms;\n  user-select: none;\n  -webkit-user-select: none;\n  touch-action: manipulation;\n  vertical-align: baseline;\n  width: auto;\n}\n\n.removeTodo:hover, .removeTodo:focus, .doneTask:hover, .doneTask:focus {\n  background-color: #fb8332;\n  box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;\n}\n\n.removeTodo:hover, .doneTask:hover {\n  transform: translateY(-1px);\n}\n\n.removeTodo:active, .doneTask:active {\n  background-color: #c85000;\n  box-shadow: rgba(0, 0, 0, .06) 0 2px 4px;\n  transform: translateY(0);\n}\n\n.done{\n  background: #eeeeee;\nbackground: -moz-radial-gradient(center, ellipse cover,  #eeeeee 0%, #cccccc 100%);\nbackground: -webkit-radial-gradient(center, ellipse cover,  #eeeeee 0%,#cccccc 100%);\nbackground: radial-gradient(ellipse at center,  #eeeeee 0%,#cccccc 100%);\nfilter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#eeeeee', endColorstr='#cccccc',GradientType=1 );\n\n}\n\n.removeTodo{\n  position: absolute;\n  bottom: 10px;\n  left: 10px;\n}\n\n\n.doneTask{\n  position: absolute;\n  bottom: 10px;\n  right: 10px;\n}\n\n#newTask , #todoList , body{\n  background: #ecd5d5;\n}\n\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["*{\n  margin: 0px;\n  padding: 0px;\n}\n\n.title{\nbackground: rgb(2,0,36);\nbackground: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(44,44,60,1) 0%, rgba(10,25,13,1) 100%, rgba(82,143,186,1) 100%, rgba(3,178,157,1) 100%, rgba(0,255,229,1) 100%);\nheight: 75px;\ncolor: #f3e9e9;\nfont-family: 'Varela Round', sans-serif;\nfont-size: 40px;\nfont-weight:normal;\n\n}\n\n.title p{\n  padding-left: 30px;\n  padding-top: 10px;\n}\n\n#content{\n  display: flex;\n}\n\n\n#sidebar{\n  text-align: center;\n  position: fixed;\n  width: 200px;\n  height: 100%;\n  color: #f3e9e9;\nfont-family: 'Varela Round', sans-serif;\nbackground: #2E2E3E;\nbackground: -webkit-linear-gradient(right, #2E2E3E, #1B2027);\nbackground: -moz-linear-gradient(right, #2E2E3E, #1B2027);\nbackground: linear-gradient(to left, #2E2E3E, #1B2027);\n}\n\n#workArea{\n  margin-left: 200px;\n  width: 100%;\n}\n\n.projectListItem{\n  width: 90%;\n  text-align: left;\n  background: #aaaaaa;\n  margin: 10px;\n  border-radius: 10px;\n  transition: box-shadow .3s;\n  cursor: pointer;\n}\n.projectListItem:hover {\nbox-shadow: 0 0 10px  #eeeeee;\n}\n\n\n.project{\n  color: #412b2b;\n  border: none;\n  background: none;\n  height: 40px;\n  font-size: large;\n  padding-left: 10px;\n}\n\n.remove-project{\n  border: none;\n  background:#a89191;\n  height: 30px;\n  width: 30px;\n  font-size: larger;\n  color: #c85000;\n  position: relative;\n  float: right;\n  margin-right: 10px;\n  margin-top: 4px;\n  \n}\n\n#openAddProject, #openAddTaskModal {\n  background: #FF4742;\n  border: 1px solid #FF4742;\n  border-radius: 6px;\n  box-shadow: rgba(0, 0, 0, 0.1) 1px 2px 4px;\n  box-sizing: border-box;\n  color: #FFFFFF;\n  cursor: pointer;\n  display: inline-block;\n  font-family: nunito,roboto,proxima-nova,\"proxima nova\",sans-serif;\n  font-size: 16px;\n  font-weight: 800;\n  line-height: 16px;\n  min-height: 40px;\n  outline: 0;\n  padding: 12px 14px;\n  text-align: center;\n  text-rendering: geometricprecision;\n  text-transform: none;\n  user-select: none;\n  -webkit-user-select: none;\n  touch-action: manipulation;\n  vertical-align: middle;\n}\n\n#openAddProject:hover,\n#openAddProject:active {\n  background-color: #FFFFFF;\n  background-position: 0 0;\n  color: #FF4742;\n}\n\n#openAddProject:active {\n  opacity: .5;\n}\n#openAddTaskModal {\n  margin: 30px;\n}\n\n#openAddTaskModal:hover, #openAddTaskModal:active{\n  background-color:initial;\n  background-position: 0 0;\n  color: #FF4742;\n}\n\n#openAddTaskModal:active{\n  opacity: .5;\n}\n\n\n\n#addProjectDiv{\n  height: 200px;\n  width: 100%;\n  margin-top: 10px;\n  margin-bottom: 5px;\n}\n\n#addProjectDiv input[type=text]{\n  border: none;\n  border-radius: 4px;\n  background-color: #5bf1ddc2;\n  color: rgb(49, 36, 36);\n  width: 70%;\n  height: 25px;\n  padding-left: 3px;\n  margin-bottom: 2px;\n  font-size: large;\n}\n\n#addProject{\n  width: 40%;\n  height: 25px;\n  border: none;\n  border-radius: 4px;\n  background-color: #7abe21c2;\n  color: #FFFFFF;\n  font-size: large;\n}\n\n#closeAddProject{\n  width: 30%;\n  border: none;\n  border-radius: 4px;\n  background-color: #7abe21c2;\n  color: #FFFFFF;\n  height: 25px;\n  margin: 3px;\n  font-size: large;\n}\n\n#newTask{\n  text-align: center;\n}\n\n\n.modal {\n  border-radius: 10px;\n display: none; /* Hidden by default */\n position: absolute; /* Stay in place */\n z-index: 1; \n left: 40%;\n top: 30%;\n padding-top:10px;\n padding-left: 10px;\n padding-right: 5px;\n width: 500px; /* Full width */\n height: 300px; /* Full height */\n overflow: auto; \ncolor: #1fe4f5;\nbox-shadow: 0 0 1px 2000px rgba(0, 0, 0, 0.3);\n\nbackground: rgb(255,175,75);\nbackground: -moz-radial-gradient(center, ellipse cover,  rgba(255,175,75,1) 0%, rgba(255,146,10,1) 100%);\nbackground: -webkit-radial-gradient(center, ellipse cover,  rgba(255,175,75,1) 0%,rgba(255,146,10,1) 100%);\nbackground: radial-gradient(ellipse at center,  rgba(255,175,75,1) 0%,rgba(255,146,10,1) 100%);\nfilter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffaf4b', endColorstr='#ff920a',GradientType=1 );\n\n\n \n}\n\n\n\n.close {\n color: #aaaaaa;\n float: right;\n font-size: 28px;\n font-weight: bold;\n width: 100%;\n text-align: right;\n}\n\n.close:hover,\n.close:focus {\n color: #000;\n text-decoration: none;\n cursor: pointer;\n}\n\n.modal label{\n  font-size: larger;\n  color: #291b1b;\n  margin: 4px;\n  margin-top: 10px;\n\n}\n\n.modal input[type=text]{\n  border: none;\n  border-radius: 4px;\n  height: 25px;\n  width: 300px;\n  margin-top: 10px;\n  font-size: large;\n  padding-left: 5px;\n\n}\n\n.modal input[type=date], .modal input[type=range]{\n  border: none;\n  border-radius: 4px;\n  margin-top: 20px;\n} \n\n#addTask {\n  margin-top: 20px;\n  align-items: center;\n  background-color: #FFFFFF;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  border-radius: .25rem;\n  box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;\n  box-sizing: border-box;\n  color: rgba(0, 0, 0, 0.85);\n  cursor: pointer;\n  display: inline-flex;\n  font-family: system-ui,-apple-system,system-ui,\"Helvetica Neue\",Helvetica,Arial,sans-serif;\n  font-size: 16px;\n  font-weight: 600;\n  justify-content: center;\n  line-height: 1.25;\n  min-height: 3rem;\n  padding: calc(.875rem - 1px) calc(1.5rem - 1px);\n  position: relative;\n  text-decoration: none;\n  transition: all 250ms;\n  user-select: none;\n  -webkit-user-select: none;\n  touch-action: manipulation;\n  vertical-align: baseline;\n  width: auto;\n}\n\n#addTask:hover,\n#addTask:focus {\n  border-color: rgba(0, 0, 0, 0.15);\n  box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;\n  color: rgba(0, 0, 0, 0.65);\n}\n\n#addTask:hover {\n  transform: translateY(-1px);\n}\n\n#addTask:active {\n  background-color: #F0F0F1;\n  border-color: rgba(0, 0, 0, 0.15);\n  box-shadow: rgba(0, 0, 0, 0.06) 0 2px 4px;\n  color: rgba(0, 0, 0, 0.65);\n  transform: translateY(0);\n}\n\n.card {\n    margin: 20px;\n    padding: 20px;\n    width: 300px;\n    min-height: 200px;\n    border-radius: 10px;\n    box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.25);\n    transition: all 0.2s;\n    background: radial-gradient(#1fe4f5, #3fbafe);\n    position: relative;\n\n  }\n\n  .card:hover {\n    box-shadow: 0px 6px 10px rgba(128, 115, 115, 0.4);\n    transform: scale(1.01);\n  }\n\n.headerCard {\n  font-family: 'Yuji Syuku', serif;\n  font-size: x-large;\n  font-weight: bolder;\n  color: #ffffff;\n}\n\n.containerCard{\n  font-size: larger;\n  font-family: 'Fjalla One', sans-serif;\n}\n\n#todoList{\n    display: flex;\n  flex-wrap: wrap;\n\n}\n\n.removeTodo, .doneTask{\n  align-items: center;\n  background-clip: padding-box;\n  background-color: #fa6400;\n  border: 1px solid transparent;\n  border-radius: .25rem;\n  box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;\n  box-sizing: border-box;\n  color: #fff;\n  cursor: pointer;\n  display: inline-flex;\n  font-family: system-ui,-apple-system,system-ui,\"Helvetica Neue\",Helvetica,Arial,sans-serif;\n  font-size: 16px;\n  font-weight: 600;\n  justify-content: center;\n  line-height: 1.25;\n  margin: 0;\n  min-height: 3rem;\n  padding: calc(.875rem - 1px) calc(1.5rem - 1px);\n  position: relative;\n  text-decoration: none;\n  transition: all 250ms;\n  user-select: none;\n  -webkit-user-select: none;\n  touch-action: manipulation;\n  vertical-align: baseline;\n  width: auto;\n}\n\n.removeTodo:hover, .removeTodo:focus, .doneTask:hover, .doneTask:focus {\n  background-color: #fb8332;\n  box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;\n}\n\n.removeTodo:hover, .doneTask:hover {\n  transform: translateY(-1px);\n}\n\n.removeTodo:active, .doneTask:active {\n  background-color: #c85000;\n  box-shadow: rgba(0, 0, 0, .06) 0 2px 4px;\n  transform: translateY(0);\n}\n\n.done{\n  background: #eeeeee;\nbackground: -moz-radial-gradient(center, ellipse cover,  #eeeeee 0%, #cccccc 100%);\nbackground: -webkit-radial-gradient(center, ellipse cover,  #eeeeee 0%,#cccccc 100%);\nbackground: radial-gradient(ellipse at center,  #eeeeee 0%,#cccccc 100%);\nfilter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#eeeeee', endColorstr='#cccccc',GradientType=1 );\n\n}\n\n.removeTodo{\n  position: absolute;\n  bottom: 10px;\n  left: 10px;\n}\n\n\n.doneTask{\n  position: absolute;\n  bottom: 10px;\n  right: 10px;\n}\n\n#newTask , #todoList , body{\n  background: #ecd5d5;\n}\n\n"],"sourceRoot":""}]);
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
    addProject.textContent = 'Add'

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
function sidebarElement() {
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


    divModal.appendChild(closeModal)
    divModal.appendChild(labelTitle)
    divModal.appendChild(titleTodoInput)
    divModal.appendChild(document.createElement('br'))
    divModal.appendChild(labelDesc)
    divModal.appendChild(descTodoInput)
    divModal.appendChild(document.createElement('br'))
    divModal.appendChild(labelDueDate)
    divModal.appendChild(dueDateTodoInput)
    divModal.appendChild(document.createElement('br'))
    divModal.appendChild(labelPriority)
    divModal.appendChild(priorityTodoInput)
    divModal.appendChild(document.createElement('br'))
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
/* harmony import */ var _WorkArea_workAreaElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WorkArea/workAreaElement */ "./src/WorkArea/workAreaElement.js");
/* harmony import */ var _Sidebar_sidebarElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Sidebar/sidebarElement */ "./src/Sidebar/sidebarElement.js");



function initialLoad () {
    const content = document.createElement('div')
    content.setAttribute('id', 'content')
    content.appendChild((0,_Sidebar_sidebarElement__WEBPACK_IMPORTED_MODULE_1__["default"])())
    content.appendChild((0,_WorkArea_workAreaElement__WEBPACK_IMPORTED_MODULE_0__["default"])())

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
    let prioritText = ''
    if(todo.getPriority() === 0){
        prioritText = 'Low'
    }
    else if(todo.getPriority() === 1){
        prioritText = 'Medium'
    }
    else{
        prioritText = 'High'
    }
    priority.textContent = prioritText

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
/* harmony import */ var _Sidebar_addProjectElement__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Sidebar/addProjectElement */ "./src/Sidebar/addProjectElement.js");
/* harmony import */ var _Header_headerElement__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Header/headerElement */ "./src/Header/headerElement.js");







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
    
    todoAddElement.querySelector('.removeTodo').addEventListener('click', handleDeleteTask)
    todoAddElement.querySelector('.doneTask').addEventListener('click', hadnleStatusChange)
    document.getElementById('todoList').appendChild(todoAddElement)

    document.querySelector('#addTitle').value = ''
    document.querySelector('#addDesc').value = ''
    document.querySelector('#addDueDate').value = (new Date()).toJSON().slice(0, 10)
    document.querySelector('#addPriority').value = 1    
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

    const taskId = parseInt(e.target.dataset.id)
    allProjectsList.forEach(project =>{
        if(project.getListId() === selectedProjectId){
            project.changeStatus(taskId)
        }
    })

    document.getElementById(`${taskId}`).classList.toggle('done')

}

const handleProjectBtn = (e)=>{
    selectedProjectId =  parseInt(e.target.id.slice(7))
    clearElementContent('display')
    const projectToShow = allProjectsList.find(project => project.getListId() === selectedProjectId)
    document.getElementById('display').appendChild((0,_displayTodos__WEBPACK_IMPORTED_MODULE_1__["default"])(projectToShow.arrTodos))

    displayLoader.addRemoveEventListeners()
}


const handleProjectRemoveBtn = (e) =>{
    const projectId = parseInt(e.target.id.slice(13))

    document.getElementById(`projectListItem${projectId}`).remove()

    for(let i=0; i<allProjectsList.length; i++){
        if(allProjectsList[i].getListId() === projectId){
            allProjectsList.splice(i,1)
        }
    }

}

const handleOpenAddProject = (e)=>{
    //add 'addProjectELement' to #divProject
    document.getElementById('divProject').appendChild((0,_Sidebar_addProjectElement__WEBPACK_IMPORTED_MODULE_4__["default"])())
    e.target.disabled = true

    //the closeaddproject is not present in the dom as we add it after clicking the button
    document.getElementById('closeAddProject').addEventListener('click', (event)=>{
        document.getElementById('addProjectDiv').remove()
        e.target.disabled = false
    })

    document.getElementById('addProject').addEventListener('click', (event)=>{
        e.target.disabled = false
        const name = document.getElementById('projectNameInput').value === "" ? "Project" : document.getElementById('projectNameInput').value
        const newTodoList = collectionTodos(name, allProjectsList.length+1)
        allProjectsList.push(newTodoList)

        document.getElementById('addProjectDiv').remove()

        const projectListItem = document.createElement('div')
        projectListItem.classList.add('projectListItem')
        projectListItem.setAttribute('id', `projectListItem${allProjectsList.length}`)

        const newProjectBtn = document.createElement('button')
        newProjectBtn.textContent = newTodoList.getName()
        newProjectBtn.classList.add('project')
        newProjectBtn.setAttribute('id', `project${allProjectsList.length}`)
        newProjectBtn.addEventListener('click',handleProjectBtn)

        const removeProject = document.createElement('button')
        removeProject.textContent = 'X'
        removeProject.classList.add('remove-project')
        removeProject.setAttribute('id', `removeProject${allProjectsList.length}`)
        removeProject.addEventListener('click', handleProjectRemoveBtn)

        projectListItem.appendChild(newProjectBtn)
        projectListItem.appendChild(removeProject)
        document.getElementById('userProjectsList').appendChild(projectListItem)
    })

}


const displayLoader = (()=>{

    const pageLoad = ()=>{
        document.querySelector('#main').appendChild((0,_Header_headerElement__WEBPACK_IMPORTED_MODULE_5__["default"])())
        document.querySelector('#main').appendChild((0,_initialLoad__WEBPACK_IMPORTED_MODULE_0__["default"])())
    }

    const todoDisplay = ()=>{
        document.querySelector('#display').appendChild((0,_displayTodos__WEBPACK_IMPORTED_MODULE_1__["default"])(allProjectsList[0].arrTodos))
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

    const addDefaultProjects = () =>{
        allProjectsList.forEach(project =>{
            const projectListItem = document.createElement('div')
            projectListItem.classList.add('projectListItem')
    
            const item = document.createElement('button')
            item.textContent = project.getName()
            item.classList.add('project')
            item.setAttribute('id', `project${project.getListId()}`)

            projectListItem.appendChild(item)
            document.getElementById('defaultProjectsList').appendChild(projectListItem)
        })
    }


    return {pageLoad, todoDisplay,addTaskEventListener ,addRemoveEventListeners, addDefaultProjects}

})()

displayLoader.pageLoad()
displayLoader.todoDisplay()
displayLoader.addTaskEventListener()
displayLoader.addRemoveEventListeners()
displayLoader.addDefaultProjects()

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sTUFBTSxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsUUFBUSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksUUFBUSxLQUFLLFlBQVksdUJBQXVCLHlCQUF5QixXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxxQkFBcUIsdUJBQXVCLFdBQVcsVUFBVSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsZ0JBQWdCLFNBQVMsS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLE1BQU0sVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGNBQWMsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLE1BQU0sTUFBTSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZ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dC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL0hlYWRlci9oZWFkZXJFbGVtZW50LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvU2lkZWJhci9hZGRQcm9qZWN0RWxlbWVudC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL1NpZGViYXIvc2lkZWJhckVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9Xb3JrQXJlYS9hZGRpbmdOZXdUYXNrRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL1dvcmtBcmVhL2Rpc3BsYXlUb2Rvc0VsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9Xb3JrQXJlYS93b3JrQXJlYUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9kaXNwbGF5VG9kb3MuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9pbml0aWFsTG9hZC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3RvZG9DYXJkLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqe1xcbiAgbWFyZ2luOiAwcHg7XFxuICBwYWRkaW5nOiAwcHg7XFxufVxcblxcbi50aXRsZXtcXG5iYWNrZ3JvdW5kOiByZ2IoMiwwLDM2KTtcXG5iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHJnYmEoMiwwLDM2LDEpIDAlLCByZ2JhKDQ0LDQ0LDYwLDEpIDAlLCByZ2JhKDEwLDI1LDEzLDEpIDEwMCUsIHJnYmEoODIsMTQzLDE4NiwxKSAxMDAlLCByZ2JhKDMsMTc4LDE1NywxKSAxMDAlLCByZ2JhKDAsMjU1LDIyOSwxKSAxMDAlKTtcXG5oZWlnaHQ6IDc1cHg7XFxuY29sb3I6ICNmM2U5ZTk7XFxuZm9udC1mYW1pbHk6ICdWYXJlbGEgUm91bmQnLCBzYW5zLXNlcmlmO1xcbmZvbnQtc2l6ZTogNDBweDtcXG5mb250LXdlaWdodDpub3JtYWw7XFxuXFxufVxcblxcbi50aXRsZSBwe1xcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xcbiAgcGFkZGluZy10b3A6IDEwcHg7XFxufVxcblxcbiNjb250ZW50e1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuXFxuI3NpZGViYXJ7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB3aWR0aDogMjAwcHg7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBjb2xvcjogI2YzZTllOTtcXG5mb250LWZhbWlseTogJ1ZhcmVsYSBSb3VuZCcsIHNhbnMtc2VyaWY7XFxuYmFja2dyb3VuZDogIzJFMkUzRTtcXG5iYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChyaWdodCwgIzJFMkUzRSwgIzFCMjAyNyk7XFxuYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQocmlnaHQsICMyRTJFM0UsICMxQjIwMjcpO1xcbmJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCAjMkUyRTNFLCAjMUIyMDI3KTtcXG59XFxuXFxuI3dvcmtBcmVhe1xcbiAgbWFyZ2luLWxlZnQ6IDIwMHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5wcm9qZWN0TGlzdEl0ZW17XFxuICB3aWR0aDogOTAlO1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIGJhY2tncm91bmQ6ICNhYWFhYWE7XFxuICBtYXJnaW46IDEwcHg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAuM3M7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5wcm9qZWN0TGlzdEl0ZW06aG92ZXIge1xcbmJveC1zaGFkb3c6IDAgMCAxMHB4ICAjZWVlZWVlO1xcbn1cXG5cXG5cXG4ucHJvamVjdHtcXG4gIGNvbG9yOiAjNDEyYjJiO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG4gIGhlaWdodDogNDBweDtcXG4gIGZvbnQtc2l6ZTogbGFyZ2U7XFxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxufVxcblxcbi5yZW1vdmUtcHJvamVjdHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQ6I2E4OTE5MTtcXG4gIGhlaWdodDogMzBweDtcXG4gIHdpZHRoOiAzMHB4O1xcbiAgZm9udC1zaXplOiBsYXJnZXI7XFxuICBjb2xvcjogI2M4NTAwMDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGZsb2F0OiByaWdodDtcXG4gIG1hcmdpbi1yaWdodDogMTBweDtcXG4gIG1hcmdpbi10b3A6IDRweDtcXG4gIFxcbn1cXG5cXG4jb3BlbkFkZFByb2plY3QsICNvcGVuQWRkVGFza01vZGFsIHtcXG4gIGJhY2tncm91bmQ6ICNGRjQ3NDI7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjRkY0NzQyO1xcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjEpIDFweCAycHggNHB4O1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGNvbG9yOiAjRkZGRkZGO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgZm9udC1mYW1pbHk6IG51bml0byxyb2JvdG8scHJveGltYS1ub3ZhLFxcXCJwcm94aW1hIG5vdmFcXFwiLHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBmb250LXdlaWdodDogODAwO1xcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XFxuICBtaW4taGVpZ2h0OiA0MHB4O1xcbiAgb3V0bGluZTogMDtcXG4gIHBhZGRpbmc6IDEycHggMTRweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHRleHQtcmVuZGVyaW5nOiBnZW9tZXRyaWNwcmVjaXNpb247XFxuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4gIHRvdWNoLWFjdGlvbjogbWFuaXB1bGF0aW9uO1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG59XFxuXFxuI29wZW5BZGRQcm9qZWN0OmhvdmVyLFxcbiNvcGVuQWRkUHJvamVjdDphY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IDAgMDtcXG4gIGNvbG9yOiAjRkY0NzQyO1xcbn1cXG5cXG4jb3BlbkFkZFByb2plY3Q6YWN0aXZlIHtcXG4gIG9wYWNpdHk6IC41O1xcbn1cXG4jb3BlbkFkZFRhc2tNb2RhbCB7XFxuICBtYXJnaW46IDMwcHg7XFxufVxcblxcbiNvcGVuQWRkVGFza01vZGFsOmhvdmVyLCAjb3BlbkFkZFRhc2tNb2RhbDphY3RpdmV7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOmluaXRpYWw7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDA7XFxuICBjb2xvcjogI0ZGNDc0MjtcXG59XFxuXFxuI29wZW5BZGRUYXNrTW9kYWw6YWN0aXZle1xcbiAgb3BhY2l0eTogLjU7XFxufVxcblxcblxcblxcbiNhZGRQcm9qZWN0RGl2e1xcbiAgaGVpZ2h0OiAyMDBweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG4gIG1hcmdpbi1ib3R0b206IDVweDtcXG59XFxuXFxuI2FkZFByb2plY3REaXYgaW5wdXRbdHlwZT10ZXh0XXtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM1YmYxZGRjMjtcXG4gIGNvbG9yOiByZ2IoNDksIDM2LCAzNik7XFxuICB3aWR0aDogNzAlO1xcbiAgaGVpZ2h0OiAyNXB4O1xcbiAgcGFkZGluZy1sZWZ0OiAzcHg7XFxuICBtYXJnaW4tYm90dG9tOiAycHg7XFxuICBmb250LXNpemU6IGxhcmdlO1xcbn1cXG5cXG4jYWRkUHJvamVjdHtcXG4gIHdpZHRoOiA0MCU7XFxuICBoZWlnaHQ6IDI1cHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2FiZTIxYzI7XFxuICBjb2xvcjogI0ZGRkZGRjtcXG4gIGZvbnQtc2l6ZTogbGFyZ2U7XFxufVxcblxcbiNjbG9zZUFkZFByb2plY3R7XFxuICB3aWR0aDogMzAlO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzdhYmUyMWMyO1xcbiAgY29sb3I6ICNGRkZGRkY7XFxuICBoZWlnaHQ6IDI1cHg7XFxuICBtYXJnaW46IDNweDtcXG4gIGZvbnQtc2l6ZTogbGFyZ2U7XFxufVxcblxcbiNuZXdUYXNre1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG5cXG4ubW9kYWwge1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gZGlzcGxheTogbm9uZTsgLyogSGlkZGVuIGJ5IGRlZmF1bHQgKi9cXG4gcG9zaXRpb246IGFic29sdXRlOyAvKiBTdGF5IGluIHBsYWNlICovXFxuIHotaW5kZXg6IDE7IFxcbiBsZWZ0OiA0MCU7XFxuIHRvcDogMzAlO1xcbiBwYWRkaW5nLXRvcDoxMHB4O1xcbiBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxuIHBhZGRpbmctcmlnaHQ6IDVweDtcXG4gd2lkdGg6IDUwMHB4OyAvKiBGdWxsIHdpZHRoICovXFxuIGhlaWdodDogMzAwcHg7IC8qIEZ1bGwgaGVpZ2h0ICovXFxuIG92ZXJmbG93OiBhdXRvOyBcXG5jb2xvcjogIzFmZTRmNTtcXG5ib3gtc2hhZG93OiAwIDAgMXB4IDIwMDBweCByZ2JhKDAsIDAsIDAsIDAuMyk7XFxuXFxuYmFja2dyb3VuZDogcmdiKDI1NSwxNzUsNzUpO1xcbmJhY2tncm91bmQ6IC1tb3otcmFkaWFsLWdyYWRpZW50KGNlbnRlciwgZWxsaXBzZSBjb3ZlciwgIHJnYmEoMjU1LDE3NSw3NSwxKSAwJSwgcmdiYSgyNTUsMTQ2LDEwLDEpIDEwMCUpO1xcbmJhY2tncm91bmQ6IC13ZWJraXQtcmFkaWFsLWdyYWRpZW50KGNlbnRlciwgZWxsaXBzZSBjb3ZlciwgIHJnYmEoMjU1LDE3NSw3NSwxKSAwJSxyZ2JhKDI1NSwxNDYsMTAsMSkgMTAwJSk7XFxuYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGVsbGlwc2UgYXQgY2VudGVyLCAgcmdiYSgyNTUsMTc1LDc1LDEpIDAlLHJnYmEoMjU1LDE0NiwxMCwxKSAxMDAlKTtcXG5maWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudCggc3RhcnRDb2xvcnN0cj0nI2ZmYWY0YicsIGVuZENvbG9yc3RyPScjZmY5MjBhJyxHcmFkaWVudFR5cGU9MSApO1xcblxcblxcbiBcXG59XFxuXFxuXFxuXFxuLmNsb3NlIHtcXG4gY29sb3I6ICNhYWFhYWE7XFxuIGZsb2F0OiByaWdodDtcXG4gZm9udC1zaXplOiAyOHB4O1xcbiBmb250LXdlaWdodDogYm9sZDtcXG4gd2lkdGg6IDEwMCU7XFxuIHRleHQtYWxpZ246IHJpZ2h0O1xcbn1cXG5cXG4uY2xvc2U6aG92ZXIsXFxuLmNsb3NlOmZvY3VzIHtcXG4gY29sb3I6ICMwMDA7XFxuIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ubW9kYWwgbGFiZWx7XFxuICBmb250LXNpemU6IGxhcmdlcjtcXG4gIGNvbG9yOiAjMjkxYjFiO1xcbiAgbWFyZ2luOiA0cHg7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcblxcbn1cXG5cXG4ubW9kYWwgaW5wdXRbdHlwZT10ZXh0XXtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGhlaWdodDogMjVweDtcXG4gIHdpZHRoOiAzMDBweDtcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxuICBmb250LXNpemU6IGxhcmdlO1xcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XFxuXFxufVxcblxcbi5tb2RhbCBpbnB1dFt0eXBlPWRhdGVdLCAubW9kYWwgaW5wdXRbdHlwZT1yYW5nZV17XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcbn0gXFxuXFxuI2FkZFRhc2sge1xcbiAgbWFyZ2luLXRvcDogMjBweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgYm9yZGVyLXJhZGl1czogLjI1cmVtO1xcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjAyKSAwIDFweCAzcHggMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg1KTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbiAgZm9udC1mYW1pbHk6IHN5c3RlbS11aSwtYXBwbGUtc3lzdGVtLHN5c3RlbS11aSxcXFwiSGVsdmV0aWNhIE5ldWVcXFwiLEhlbHZldGljYSxBcmlhbCxzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgbGluZS1oZWlnaHQ6IDEuMjU7XFxuICBtaW4taGVpZ2h0OiAzcmVtO1xcbiAgcGFkZGluZzogY2FsYyguODc1cmVtIC0gMXB4KSBjYWxjKDEuNXJlbSAtIDFweCk7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICB0cmFuc2l0aW9uOiBhbGwgMjUwbXM7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICB0b3VjaC1hY3Rpb246IG1hbmlwdWxhdGlvbjtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG4gIHdpZHRoOiBhdXRvO1xcbn1cXG5cXG4jYWRkVGFzazpob3ZlcixcXG4jYWRkVGFzazpmb2N1cyB7XFxuICBib3JkZXItY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xNSk7XFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMSkgMCA0cHggMTJweDtcXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNjUpO1xcbn1cXG5cXG4jYWRkVGFzazpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XFxufVxcblxcbiNhZGRUYXNrOmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjBGMEYxO1xcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMTUpO1xcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjA2KSAwIDJweCA0cHg7XFxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjY1KTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcXG59XFxuXFxuLmNhcmQge1xcbiAgICBtYXJnaW46IDIwcHg7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIHdpZHRoOiAzMDBweDtcXG4gICAgbWluLWhlaWdodDogMjAwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJveC1zaGFkb3c6IDBweCA2cHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcXG4gICAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KCMxZmU0ZjUsICMzZmJhZmUpO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFxuICB9XFxuXFxuICAuY2FyZDpob3ZlciB7XFxuICAgIGJveC1zaGFkb3c6IDBweCA2cHggMTBweCByZ2JhKDEyOCwgMTE1LCAxMTUsIDAuNCk7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMSk7XFxuICB9XFxuXFxuLmhlYWRlckNhcmQge1xcbiAgZm9udC1mYW1pbHk6ICdZdWppIFN5dWt1Jywgc2VyaWY7XFxuICBmb250LXNpemU6IHgtbGFyZ2U7XFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcbiAgY29sb3I6ICNmZmZmZmY7XFxufVxcblxcbi5jb250YWluZXJDYXJke1xcbiAgZm9udC1zaXplOiBsYXJnZXI7XFxuICBmb250LWZhbWlseTogJ0ZqYWxsYSBPbmUnLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4jdG9kb0xpc3R7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuXFxufVxcblxcbi5yZW1vdmVUb2RvLCAuZG9uZVRhc2t7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmYTY0MDA7XFxuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gIGJvcmRlci1yYWRpdXM6IC4yNXJlbTtcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4wMikgMCAxcHggM3B4IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgY29sb3I6ICNmZmY7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG4gIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWksLWFwcGxlLXN5c3RlbSxzeXN0ZW0tdWksXFxcIkhlbHZldGljYSBOZXVlXFxcIixIZWx2ZXRpY2EsQXJpYWwsc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGxpbmUtaGVpZ2h0OiAxLjI1O1xcbiAgbWFyZ2luOiAwO1xcbiAgbWluLWhlaWdodDogM3JlbTtcXG4gIHBhZGRpbmc6IGNhbGMoLjg3NXJlbSAtIDFweCkgY2FsYygxLjVyZW0gLSAxcHgpO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgdHJhbnNpdGlvbjogYWxsIDI1MG1zO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcbiAgdG91Y2gtYWN0aW9uOiBtYW5pcHVsYXRpb247XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxuICB3aWR0aDogYXV0bztcXG59XFxuXFxuLnJlbW92ZVRvZG86aG92ZXIsIC5yZW1vdmVUb2RvOmZvY3VzLCAuZG9uZVRhc2s6aG92ZXIsIC5kb25lVGFzazpmb2N1cyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmI4MzMyO1xcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjEpIDAgNHB4IDEycHg7XFxufVxcblxcbi5yZW1vdmVUb2RvOmhvdmVyLCAuZG9uZVRhc2s6aG92ZXIge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xcbn1cXG5cXG4ucmVtb3ZlVG9kbzphY3RpdmUsIC5kb25lVGFzazphY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2M4NTAwMDtcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgLjA2KSAwIDJweCA0cHg7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XFxufVxcblxcbi5kb25le1xcbiAgYmFja2dyb3VuZDogI2VlZWVlZTtcXG5iYWNrZ3JvdW5kOiAtbW96LXJhZGlhbC1ncmFkaWVudChjZW50ZXIsIGVsbGlwc2UgY292ZXIsICAjZWVlZWVlIDAlLCAjY2NjY2NjIDEwMCUpO1xcbmJhY2tncm91bmQ6IC13ZWJraXQtcmFkaWFsLWdyYWRpZW50KGNlbnRlciwgZWxsaXBzZSBjb3ZlciwgICNlZWVlZWUgMCUsI2NjY2NjYyAxMDAlKTtcXG5iYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoZWxsaXBzZSBhdCBjZW50ZXIsICAjZWVlZWVlIDAlLCNjY2NjY2MgMTAwJSk7XFxuZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoIHN0YXJ0Q29sb3JzdHI9JyNlZWVlZWUnLCBlbmRDb2xvcnN0cj0nI2NjY2NjYycsR3JhZGllbnRUeXBlPTEgKTtcXG5cXG59XFxuXFxuLnJlbW92ZVRvZG97XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IDEwcHg7XFxuICBsZWZ0OiAxMHB4O1xcbn1cXG5cXG5cXG4uZG9uZVRhc2t7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IDEwcHg7XFxuICByaWdodDogMTBweDtcXG59XFxuXFxuI25ld1Rhc2sgLCAjdG9kb0xpc3QgLCBib2R5e1xcbiAgYmFja2dyb3VuZDogI2VjZDVkNTtcXG59XFxuXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFdBQVc7RUFDWCxZQUFZ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Q0UsaURBQWlEO0lBQ2pELHNCQUFzQjtFQUN4Qjs7QUFFRjtFQUNFLGdDQUFnQztFQUNoQyxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIscUNBQXFDO0FBQ3ZDOztBQUVBO0lBQ0ksYUFBYTtFQUNmLGVBQWU7O0FBRWpCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLDRCQUE0QjtFQUM1Qix5QkFBeUI7RUFDekIsNkJBQTZCO0VBQzdCLHFCQUFxQjtFQUNyQiwyQ0FBMkM7RUFDM0Msc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxlQUFlO0VBQ2Ysb0JBQW9CO0VBQ3BCLDBGQUEwRjtFQUMxRixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtFQUN2QixpQkFBaUI7RUFDakIsU0FBUztFQUNULGdCQUFnQjtFQUNoQiwrQ0FBK0M7RUFDL0Msa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixxQkFBcUI7RUFDckIsaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUN6QiwwQkFBMEI7RUFDMUIsd0JBQXdCO0VBQ3hCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6Qix5Q0FBeUM7QUFDM0M7O0FBRUE7RUFDRSwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsd0NBQXdDO0VBQ3hDLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQixrRkFBa0Y7QUFDbEYsb0ZBQW9GO0FBQ3BGLHdFQUF3RTtBQUN4RSxtSEFBbUg7O0FBRW5IOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixVQUFVO0FBQ1o7OztBQUdBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKntcXG4gIG1hcmdpbjogMHB4O1xcbiAgcGFkZGluZzogMHB4O1xcbn1cXG5cXG4udGl0bGV7XFxuYmFja2dyb3VuZDogcmdiKDIsMCwzNik7XFxuYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2JhKDIsMCwzNiwxKSAwJSwgcmdiYSg0NCw0NCw2MCwxKSAwJSwgcmdiYSgxMCwyNSwxMywxKSAxMDAlLCByZ2JhKDgyLDE0MywxODYsMSkgMTAwJSwgcmdiYSgzLDE3OCwxNTcsMSkgMTAwJSwgcmdiYSgwLDI1NSwyMjksMSkgMTAwJSk7XFxuaGVpZ2h0OiA3NXB4O1xcbmNvbG9yOiAjZjNlOWU5O1xcbmZvbnQtZmFtaWx5OiAnVmFyZWxhIFJvdW5kJywgc2Fucy1zZXJpZjtcXG5mb250LXNpemU6IDQwcHg7XFxuZm9udC13ZWlnaHQ6bm9ybWFsO1xcblxcbn1cXG5cXG4udGl0bGUgcHtcXG4gIHBhZGRpbmctbGVmdDogMzBweDtcXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xcbn1cXG5cXG4jY29udGVudHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcblxcbiNzaWRlYmFye1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgd2lkdGg6IDIwMHB4O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgY29sb3I6ICNmM2U5ZTk7XFxuZm9udC1mYW1pbHk6ICdWYXJlbGEgUm91bmQnLCBzYW5zLXNlcmlmO1xcbmJhY2tncm91bmQ6ICMyRTJFM0U7XFxuYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQocmlnaHQsICMyRTJFM0UsICMxQjIwMjcpO1xcbmJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KHJpZ2h0LCAjMkUyRTNFLCAjMUIyMDI3KTtcXG5iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgIzJFMkUzRSwgIzFCMjAyNyk7XFxufVxcblxcbiN3b3JrQXJlYXtcXG4gIG1hcmdpbi1sZWZ0OiAyMDBweDtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4ucHJvamVjdExpc3RJdGVte1xcbiAgd2lkdGg6IDkwJTtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICBiYWNrZ3JvdW5kOiAjYWFhYWFhO1xcbiAgbWFyZ2luOiAxMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIHRyYW5zaXRpb246IGJveC1zaGFkb3cgLjNzO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4ucHJvamVjdExpc3RJdGVtOmhvdmVyIHtcXG5ib3gtc2hhZG93OiAwIDAgMTBweCAgI2VlZWVlZTtcXG59XFxuXFxuXFxuLnByb2plY3R7XFxuICBjb2xvcjogIzQxMmIyYjtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICBmb250LXNpemU6IGxhcmdlO1xcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbn1cXG5cXG4ucmVtb3ZlLXByb2plY3R7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kOiNhODkxOTE7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICB3aWR0aDogMzBweDtcXG4gIGZvbnQtc2l6ZTogbGFyZ2VyO1xcbiAgY29sb3I6ICNjODUwMDA7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBmbG9hdDogcmlnaHQ7XFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxuICBtYXJnaW4tdG9wOiA0cHg7XFxuICBcXG59XFxuXFxuI29wZW5BZGRQcm9qZWN0LCAjb3BlbkFkZFRhc2tNb2RhbCB7XFxuICBiYWNrZ3JvdW5kOiAjRkY0NzQyO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI0ZGNDc0MjtcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xKSAxcHggMnB4IDRweDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBjb2xvcjogI0ZGRkZGRjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGZvbnQtZmFtaWx5OiBudW5pdG8scm9ib3RvLHByb3hpbWEtbm92YSxcXFwicHJveGltYSBub3ZhXFxcIixzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgZm9udC13ZWlnaHQ6IDgwMDtcXG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xcbiAgbWluLWhlaWdodDogNDBweDtcXG4gIG91dGxpbmU6IDA7XFxuICBwYWRkaW5nOiAxMnB4IDE0cHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB0ZXh0LXJlbmRlcmluZzogZ2VvbWV0cmljcHJlY2lzaW9uO1xcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICB0b3VjaC1hY3Rpb246IG1hbmlwdWxhdGlvbjtcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxufVxcblxcbiNvcGVuQWRkUHJvamVjdDpob3ZlcixcXG4jb3BlbkFkZFByb2plY3Q6YWN0aXZlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDA7XFxuICBjb2xvcjogI0ZGNDc0MjtcXG59XFxuXFxuI29wZW5BZGRQcm9qZWN0OmFjdGl2ZSB7XFxuICBvcGFjaXR5OiAuNTtcXG59XFxuI29wZW5BZGRUYXNrTW9kYWwge1xcbiAgbWFyZ2luOiAzMHB4O1xcbn1cXG5cXG4jb3BlbkFkZFRhc2tNb2RhbDpob3ZlciwgI29wZW5BZGRUYXNrTW9kYWw6YWN0aXZle1xcbiAgYmFja2dyb3VuZC1jb2xvcjppbml0aWFsO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAwO1xcbiAgY29sb3I6ICNGRjQ3NDI7XFxufVxcblxcbiNvcGVuQWRkVGFza01vZGFsOmFjdGl2ZXtcXG4gIG9wYWNpdHk6IC41O1xcbn1cXG5cXG5cXG5cXG4jYWRkUHJvamVjdERpdntcXG4gIGhlaWdodDogMjAwcHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxuICBtYXJnaW4tYm90dG9tOiA1cHg7XFxufVxcblxcbiNhZGRQcm9qZWN0RGl2IGlucHV0W3R5cGU9dGV4dF17XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWJmMWRkYzI7XFxuICBjb2xvcjogcmdiKDQ5LCAzNiwgMzYpO1xcbiAgd2lkdGg6IDcwJTtcXG4gIGhlaWdodDogMjVweDtcXG4gIHBhZGRpbmctbGVmdDogM3B4O1xcbiAgbWFyZ2luLWJvdHRvbTogMnB4O1xcbiAgZm9udC1zaXplOiBsYXJnZTtcXG59XFxuXFxuI2FkZFByb2plY3R7XFxuICB3aWR0aDogNDAlO1xcbiAgaGVpZ2h0OiAyNXB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzdhYmUyMWMyO1xcbiAgY29sb3I6ICNGRkZGRkY7XFxuICBmb250LXNpemU6IGxhcmdlO1xcbn1cXG5cXG4jY2xvc2VBZGRQcm9qZWN0e1xcbiAgd2lkdGg6IDMwJTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM3YWJlMjFjMjtcXG4gIGNvbG9yOiAjRkZGRkZGO1xcbiAgaGVpZ2h0OiAyNXB4O1xcbiAgbWFyZ2luOiAzcHg7XFxuICBmb250LXNpemU6IGxhcmdlO1xcbn1cXG5cXG4jbmV3VGFza3tcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuXFxuLm1vZGFsIHtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuIGRpc3BsYXk6IG5vbmU7IC8qIEhpZGRlbiBieSBkZWZhdWx0ICovXFxuIHBvc2l0aW9uOiBhYnNvbHV0ZTsgLyogU3RheSBpbiBwbGFjZSAqL1xcbiB6LWluZGV4OiAxOyBcXG4gbGVmdDogNDAlO1xcbiB0b3A6IDMwJTtcXG4gcGFkZGluZy10b3A6MTBweDtcXG4gcGFkZGluZy1sZWZ0OiAxMHB4O1xcbiBwYWRkaW5nLXJpZ2h0OiA1cHg7XFxuIHdpZHRoOiA1MDBweDsgLyogRnVsbCB3aWR0aCAqL1xcbiBoZWlnaHQ6IDMwMHB4OyAvKiBGdWxsIGhlaWdodCAqL1xcbiBvdmVyZmxvdzogYXV0bzsgXFxuY29sb3I6ICMxZmU0ZjU7XFxuYm94LXNoYWRvdzogMCAwIDFweCAyMDAwcHggcmdiYSgwLCAwLCAwLCAwLjMpO1xcblxcbmJhY2tncm91bmQ6IHJnYigyNTUsMTc1LDc1KTtcXG5iYWNrZ3JvdW5kOiAtbW96LXJhZGlhbC1ncmFkaWVudChjZW50ZXIsIGVsbGlwc2UgY292ZXIsICByZ2JhKDI1NSwxNzUsNzUsMSkgMCUsIHJnYmEoMjU1LDE0NiwxMCwxKSAxMDAlKTtcXG5iYWNrZ3JvdW5kOiAtd2Via2l0LXJhZGlhbC1ncmFkaWVudChjZW50ZXIsIGVsbGlwc2UgY292ZXIsICByZ2JhKDI1NSwxNzUsNzUsMSkgMCUscmdiYSgyNTUsMTQ2LDEwLDEpIDEwMCUpO1xcbmJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChlbGxpcHNlIGF0IGNlbnRlciwgIHJnYmEoMjU1LDE3NSw3NSwxKSAwJSxyZ2JhKDI1NSwxNDYsMTAsMSkgMTAwJSk7XFxuZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoIHN0YXJ0Q29sb3JzdHI9JyNmZmFmNGInLCBlbmRDb2xvcnN0cj0nI2ZmOTIwYScsR3JhZGllbnRUeXBlPTEgKTtcXG5cXG5cXG4gXFxufVxcblxcblxcblxcbi5jbG9zZSB7XFxuIGNvbG9yOiAjYWFhYWFhO1xcbiBmbG9hdDogcmlnaHQ7XFxuIGZvbnQtc2l6ZTogMjhweDtcXG4gZm9udC13ZWlnaHQ6IGJvbGQ7XFxuIHdpZHRoOiAxMDAlO1xcbiB0ZXh0LWFsaWduOiByaWdodDtcXG59XFxuXFxuLmNsb3NlOmhvdmVyLFxcbi5jbG9zZTpmb2N1cyB7XFxuIGNvbG9yOiAjMDAwO1xcbiB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLm1vZGFsIGxhYmVse1xcbiAgZm9udC1zaXplOiBsYXJnZXI7XFxuICBjb2xvcjogIzI5MWIxYjtcXG4gIG1hcmdpbjogNHB4O1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG5cXG59XFxuXFxuLm1vZGFsIGlucHV0W3R5cGU9dGV4dF17XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBoZWlnaHQ6IDI1cHg7XFxuICB3aWR0aDogMzAwcHg7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgZm9udC1zaXplOiBsYXJnZTtcXG4gIHBhZGRpbmctbGVmdDogNXB4O1xcblxcbn1cXG5cXG4ubW9kYWwgaW5wdXRbdHlwZT1kYXRlXSwgLm1vZGFsIGlucHV0W3R5cGU9cmFuZ2Vde1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgbWFyZ2luLXRvcDogMjBweDtcXG59IFxcblxcbiNhZGRUYXNrIHtcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gIGJvcmRlci1yYWRpdXM6IC4yNXJlbTtcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4wMikgMCAxcHggM3B4IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44NSk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG4gIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWksLWFwcGxlLXN5c3RlbSxzeXN0ZW0tdWksXFxcIkhlbHZldGljYSBOZXVlXFxcIixIZWx2ZXRpY2EsQXJpYWwsc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGxpbmUtaGVpZ2h0OiAxLjI1O1xcbiAgbWluLWhlaWdodDogM3JlbTtcXG4gIHBhZGRpbmc6IGNhbGMoLjg3NXJlbSAtIDFweCkgY2FsYygxLjVyZW0gLSAxcHgpO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgdHJhbnNpdGlvbjogYWxsIDI1MG1zO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcbiAgdG91Y2gtYWN0aW9uOiBtYW5pcHVsYXRpb247XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxuICB3aWR0aDogYXV0bztcXG59XFxuXFxuI2FkZFRhc2s6aG92ZXIsXFxuI2FkZFRhc2s6Zm9jdXMge1xcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMTUpO1xcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjEpIDAgNHB4IDEycHg7XFxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjY1KTtcXG59XFxuXFxuI2FkZFRhc2s6aG92ZXIge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xcbn1cXG5cXG4jYWRkVGFzazphY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0YwRjBGMTtcXG4gIGJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjE1KTtcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4wNikgMCAycHggNHB4O1xcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42NSk7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XFxufVxcblxcbi5jYXJkIHtcXG4gICAgbWFyZ2luOiAyMHB4O1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICB3aWR0aDogMzAwcHg7XFxuICAgIG1pbi1oZWlnaHQ6IDIwMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBib3gtc2hhZG93OiAwcHggNnB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XFxuICAgIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudCgjMWZlNGY1LCAjM2ZiYWZlKTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcblxcbiAgfVxcblxcbiAgLmNhcmQ6aG92ZXIge1xcbiAgICBib3gtc2hhZG93OiAwcHggNnB4IDEwcHggcmdiYSgxMjgsIDExNSwgMTE1LCAwLjQpO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDEpO1xcbiAgfVxcblxcbi5oZWFkZXJDYXJkIHtcXG4gIGZvbnQtZmFtaWx5OiAnWXVqaSBTeXVrdScsIHNlcmlmO1xcbiAgZm9udC1zaXplOiB4LWxhcmdlO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG4gIGNvbG9yOiAjZmZmZmZmO1xcbn1cXG5cXG4uY29udGFpbmVyQ2FyZHtcXG4gIGZvbnQtc2l6ZTogbGFyZ2VyO1xcbiAgZm9udC1mYW1pbHk6ICdGamFsbGEgT25lJywgc2Fucy1zZXJpZjtcXG59XFxuXFxuI3RvZG9MaXN0e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcblxcbn1cXG5cXG4ucmVtb3ZlVG9kbywgLmRvbmVUYXNre1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmE2NDAwO1xcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItcmFkaXVzOiAuMjVyZW07XFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMDIpIDAgMXB4IDNweCAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxuICBmb250LWZhbWlseTogc3lzdGVtLXVpLC1hcHBsZS1zeXN0ZW0sc3lzdGVtLXVpLFxcXCJIZWx2ZXRpY2EgTmV1ZVxcXCIsSGVsdmV0aWNhLEFyaWFsLHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBsaW5lLWhlaWdodDogMS4yNTtcXG4gIG1hcmdpbjogMDtcXG4gIG1pbi1oZWlnaHQ6IDNyZW07XFxuICBwYWRkaW5nOiBjYWxjKC44NzVyZW0gLSAxcHgpIGNhbGMoMS41cmVtIC0gMXB4KTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIHRyYW5zaXRpb246IGFsbCAyNTBtcztcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4gIHRvdWNoLWFjdGlvbjogbWFuaXB1bGF0aW9uO1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbiAgd2lkdGg6IGF1dG87XFxufVxcblxcbi5yZW1vdmVUb2RvOmhvdmVyLCAucmVtb3ZlVG9kbzpmb2N1cywgLmRvbmVUYXNrOmhvdmVyLCAuZG9uZVRhc2s6Zm9jdXMge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZiODMzMjtcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xKSAwIDRweCAxMnB4O1xcbn1cXG5cXG4ucmVtb3ZlVG9kbzpob3ZlciwgLmRvbmVUYXNrOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcXG59XFxuXFxuLnJlbW92ZVRvZG86YWN0aXZlLCAuZG9uZVRhc2s6YWN0aXZlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNjODUwMDA7XFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIC4wNikgMCAycHggNHB4O1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xcbn1cXG5cXG4uZG9uZXtcXG4gIGJhY2tncm91bmQ6ICNlZWVlZWU7XFxuYmFja2dyb3VuZDogLW1vei1yYWRpYWwtZ3JhZGllbnQoY2VudGVyLCBlbGxpcHNlIGNvdmVyLCAgI2VlZWVlZSAwJSwgI2NjY2NjYyAxMDAlKTtcXG5iYWNrZ3JvdW5kOiAtd2Via2l0LXJhZGlhbC1ncmFkaWVudChjZW50ZXIsIGVsbGlwc2UgY292ZXIsICAjZWVlZWVlIDAlLCNjY2NjY2MgMTAwJSk7XFxuYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGVsbGlwc2UgYXQgY2VudGVyLCAgI2VlZWVlZSAwJSwjY2NjY2NjIDEwMCUpO1xcbmZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KCBzdGFydENvbG9yc3RyPScjZWVlZWVlJywgZW5kQ29sb3JzdHI9JyNjY2NjY2MnLEdyYWRpZW50VHlwZT0xICk7XFxuXFxufVxcblxcbi5yZW1vdmVUb2Rve1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiAxMHB4O1xcbiAgbGVmdDogMTBweDtcXG59XFxuXFxuXFxuLmRvbmVUYXNre1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiAxMHB4O1xcbiAgcmlnaHQ6IDEwcHg7XFxufVxcblxcbiNuZXdUYXNrICwgI3RvZG9MaXN0ICwgYm9keXtcXG4gIGJhY2tncm91bmQ6ICNlY2Q1ZDU7XFxufVxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGVhZGVyKCkge1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpXG4gICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ3RpdGxlJylcblxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSBcIlRvLURvLUxpc3RcIlxuXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKHRpdGxlKVxuXG4gICAgcmV0dXJuIGhlYWRlclxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZFByb2plY3RFbGVtZW50KCl7XG4gICAgY29uc3QgYWRkUHJvamVjdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgYWRkUHJvamVjdERpdi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2FkZFByb2plY3REaXYnKVxuXG4gICAgY29uc3QgcHJvamVjdE5hbWVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICBwcm9qZWN0TmFtZUlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0JylcbiAgICBwcm9qZWN0TmFtZUlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCAncHJvamVjdE5hbWVJbnB1dCcpXG5cbiAgICBjb25zdCBhZGRQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICBhZGRQcm9qZWN0LnNldEF0dHJpYnV0ZSgnaWQnLCAnYWRkUHJvamVjdCcpXG4gICAgYWRkUHJvamVjdC50ZXh0Q29udGVudCA9ICdBZGQnXG5cbiAgICBjb25zdCBjbG9zZUFkZFByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIGNsb3NlQWRkUHJvamVjdC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2Nsb3NlQWRkUHJvamVjdCcpXG4gICAgY2xvc2VBZGRQcm9qZWN0LnRleHRDb250ZW50ID0gJ0Nsb3NlJ1xuXG5cblxuICAgIGFkZFByb2plY3REaXYuYXBwZW5kQ2hpbGQocHJvamVjdE5hbWVJbnB1dClcbiAgICBhZGRQcm9qZWN0RGl2LmFwcGVuZENoaWxkKGFkZFByb2plY3QpXG4gICAgYWRkUHJvamVjdERpdi5hcHBlbmRDaGlsZChjbG9zZUFkZFByb2plY3QpXG5cbiAgICByZXR1cm4gYWRkUHJvamVjdERpdlxuXG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2lkZWJhckVsZW1lbnQoKSB7XG4gICAgY29uc3Qgc2lkZUJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgc2lkZUJhci5zZXRBdHRyaWJ1dGUoJ2lkJywnc2lkZWJhcicpXG5cbiAgICBjb25zdCBkaXZEZWZhdWx0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBkaXZEZWZhdWx0LnNldEF0dHJpYnV0ZSgnaWQnLCAnZGl2RGVmYXVsdCcpXG5cbiAgICBjb25zdCBkZWZhdWx0SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKVxuICAgIGRlZmF1bHRIZWFkZXIuY2xhc3NMaXN0LmFkZCgnc2lkZWJhci1oZWFkZXInKVxuICAgIGRlZmF1bHRIZWFkZXIuc2V0QXR0cmlidXRlKCdpZCcsICdkZWZhdWx0SGVhZGVyJylcbiAgICBkZWZhdWx0SGVhZGVyLnRleHRDb250ZW50ID0gJ0RlZmF1bHQnXG5cbiAgICBjb25zdCBkZWZhdWx0UHJvamVjdHNMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBkZWZhdWx0UHJvamVjdHNMaXN0LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtbGlzdCcpXG4gICAgZGVmYXVsdFByb2plY3RzTGlzdC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2RlZmF1bHRQcm9qZWN0c0xpc3QnKVxuICAgIFxuXG4gICAgZGl2RGVmYXVsdC5hcHBlbmRDaGlsZChkZWZhdWx0SGVhZGVyKVxuICAgIGRpdkRlZmF1bHQuYXBwZW5kQ2hpbGQoZGVmYXVsdFByb2plY3RzTGlzdClcblxuXG4gICAgY29uc3QgZGl2UHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgZGl2UHJvamVjdC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2RpdlByb2plY3QnKVxuXG4gICAgY29uc3QgcHJvamVjdEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJylcbiAgICBwcm9qZWN0SGVhZGVyLmNsYXNzTGlzdC5hZGQoJ3NpZGViYXItaGVhZGVyJylcbiAgICBwcm9qZWN0SGVhZGVyLnNldEF0dHJpYnV0ZSgnaWQnLCAncHJvamVjdEhlYWRlcicpXG4gICAgcHJvamVjdEhlYWRlci50ZXh0Q29udGVudCA9ICdQcm9qZWN0J1xuXG4gICAgY29uc3Qgb3BlbkFkZFByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIG9wZW5BZGRQcm9qZWN0LnNldEF0dHJpYnV0ZSgnaWQnLCAnb3BlbkFkZFByb2plY3QnKVxuICAgIG9wZW5BZGRQcm9qZWN0LnRleHRDb250ZW50ID0gJ0FkZCBOZXcgUHJvamVjdCdcblxuICAgIGNvbnN0IHVzZXJQcm9qZWN0c0xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHVzZXJQcm9qZWN0c0xpc3QuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1saXN0JylcbiAgICB1c2VyUHJvamVjdHNMaXN0LnNldEF0dHJpYnV0ZSgnaWQnLCAndXNlclByb2plY3RzTGlzdCcpXG5cbiAgICBkaXZQcm9qZWN0LmFwcGVuZENoaWxkKHByb2plY3RIZWFkZXIpXG4gICAgZGl2UHJvamVjdC5hcHBlbmRDaGlsZChvcGVuQWRkUHJvamVjdClcbiAgICBkaXZQcm9qZWN0LmFwcGVuZENoaWxkKHVzZXJQcm9qZWN0c0xpc3QpXG5cbiAgICBzaWRlQmFyLmFwcGVuZENoaWxkKGRpdkRlZmF1bHQpXG4gICAgc2lkZUJhci5hcHBlbmRDaGlsZChkaXZQcm9qZWN0KVxuXG5cbiAgICByZXR1cm4gc2lkZUJhclxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZGluZ05ld1Rhc2tFbGVtZW50KCl7XG5cbiAgICBjb25zdCBuZXdUYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBuZXdUYXNrLnNldEF0dHJpYnV0ZSgnaWQnLCAnbmV3VGFzaycpXG4gICAgXG4gICAgY29uc3Qgb3Blbk1vZGFsQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICBvcGVuTW9kYWxCdG4uc2V0QXR0cmlidXRlKCdpZCcsICdvcGVuQWRkVGFza01vZGFsJylcbiAgICBvcGVuTW9kYWxCdG4udGV4dENvbnRlbnQgPSBcIkFkZCBOZXcgVGFza1wiXG5cbiAgICBjb25zdCBkaXZNb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgZGl2TW9kYWwuc2V0QXR0cmlidXRlKCdpZCcsICdkaXZNb2RhbCcpXG4gICAgZGl2TW9kYWwuY2xhc3NMaXN0LmFkZCgnbW9kYWwnKVxuXG4gICAgY29uc3QgY2xvc2VNb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuICAgIGNsb3NlTW9kYWwuY2xhc3NMaXN0LmFkZCgnY2xvc2UnKVxuICAgIGNsb3NlTW9kYWwudGV4dENvbnRlbnQgPSBcIlxcdTI3NENcIlxuXG4gICAgY29uc3QgbGFiZWxUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICBsYWJlbFRpdGxlLnRleHRDb250ZW50ID0gXCJUaXRsZTogXCJcblxuICAgIGNvbnN0IHRpdGxlVG9kb0lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgIHRpdGxlVG9kb0lucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0JylcbiAgICB0aXRsZVRvZG9JbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2FkZFRpdGxlJylcblxuICAgIGNvbnN0IGxhYmVsRGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICBsYWJlbERlc2MudGV4dENvbnRlbnQgPSAnRGVzY3JpcHRpb246ICdcblxuICAgIGNvbnN0IGRlc2NUb2RvSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgZGVzY1RvZG9JbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpXG4gICAgZGVzY1RvZG9JbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2FkZERlc2MnKVxuXG4gICAgY29uc3QgbGFiZWxEdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgIGxhYmVsRHVlRGF0ZS50ZXh0Q29udGVudCA9ICdEdWUgRGF0ZTogJ1xuXG4gICAgY29uc3QgZHVlRGF0ZVRvZG9JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICBkdWVEYXRlVG9kb0lucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICdkYXRlJylcbiAgICBkdWVEYXRlVG9kb0lucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCAnYWRkRHVlRGF0ZScpXG4gICAgZHVlRGF0ZVRvZG9JbnB1dC5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgKG5ldyBEYXRlKCkpLnRvSlNPTigpLnNsaWNlKDAsIDEwKSlcblxuICAgIGNvbnN0IGxhYmVsUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4gICAgbGFiZWxQcmlvcml0eS50ZXh0Q29udGVudCA9IFwiUHJpb3JpdHk6IFwiXG5cbiAgICBjb25zdCBwcmlvcml0eVRvZG9JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICBwcmlvcml0eVRvZG9JbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2FkZFByaW9yaXR5JylcbiAgICBwcmlvcml0eVRvZG9JbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAncmFuZ2UnKVxuICAgIHByaW9yaXR5VG9kb0lucHV0LnNldEF0dHJpYnV0ZSgnbWluJywgJzAnKVxuICAgIHByaW9yaXR5VG9kb0lucHV0LnNldEF0dHJpYnV0ZSgnbWF4JywgJzInKVxuICAgIHByaW9yaXR5VG9kb0lucHV0LnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnMScpXG5cbiAgICBjb25zdCBidG5BZGRUYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICBidG5BZGRUYXNrLnNldEF0dHJpYnV0ZSgnaWQnLCAnYWRkVGFzaycpXG4gICAgYnRuQWRkVGFzay50ZXh0Q29udGVudCA9IFwiQWRkIFRhc2tcIlxuXG4gICAgb3Blbk1vZGFsQnRuLm9uY2xpY2sgPSBmdW5jdGlvbigpe1xuICAgICAgICBkaXZNb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiXG4gICAgfVxuXG4gICAgY2xvc2VNb2RhbC5vbmNsaWNrID0gZnVuY3Rpb24oKXtcbiAgICAgICAgZGl2TW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiXG4gICAgfVxuXG4gICAgd2luZG93Lm9uY2xpY2sgPSBmdW5jdGlvbihldmVudCkge1xuICAgICAgICBpZiAoZXZlbnQudGFyZ2V0ID09IGRpdk1vZGFsKSB7XG4gICAgICAgICAgZGl2TW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICB9XG4gICAgICB9XG5cblxuICAgIGRpdk1vZGFsLmFwcGVuZENoaWxkKGNsb3NlTW9kYWwpXG4gICAgZGl2TW9kYWwuYXBwZW5kQ2hpbGQobGFiZWxUaXRsZSlcbiAgICBkaXZNb2RhbC5hcHBlbmRDaGlsZCh0aXRsZVRvZG9JbnB1dClcbiAgICBkaXZNb2RhbC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdicicpKVxuICAgIGRpdk1vZGFsLmFwcGVuZENoaWxkKGxhYmVsRGVzYylcbiAgICBkaXZNb2RhbC5hcHBlbmRDaGlsZChkZXNjVG9kb0lucHV0KVxuICAgIGRpdk1vZGFsLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2JyJykpXG4gICAgZGl2TW9kYWwuYXBwZW5kQ2hpbGQobGFiZWxEdWVEYXRlKVxuICAgIGRpdk1vZGFsLmFwcGVuZENoaWxkKGR1ZURhdGVUb2RvSW5wdXQpXG4gICAgZGl2TW9kYWwuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnInKSlcbiAgICBkaXZNb2RhbC5hcHBlbmRDaGlsZChsYWJlbFByaW9yaXR5KVxuICAgIGRpdk1vZGFsLmFwcGVuZENoaWxkKHByaW9yaXR5VG9kb0lucHV0KVxuICAgIGRpdk1vZGFsLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2JyJykpXG4gICAgZGl2TW9kYWwuYXBwZW5kQ2hpbGQoYnRuQWRkVGFzaylcblxuICAgIG5ld1Rhc2suYXBwZW5kQ2hpbGQob3Blbk1vZGFsQnRuKVxuICAgIG5ld1Rhc2suYXBwZW5kQ2hpbGQoZGl2TW9kYWwpXG5cblxuICAgIHJldHVybiBuZXdUYXNrXG4gICAgXG59ICIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRpc3BsYXlUb2Rvc0VsZW1lbnQoKXtcbiAgICBjb25zdCBkaXNwbGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBkaXNwbGF5LnNldEF0dHJpYnV0ZSgnaWQnLCAnZGlzcGxheScpXG5cbiAgICByZXR1cm4gZGlzcGxheVxufSIsImltcG9ydCBhZGRpbmdOZXdUYXNrRWxlbWVudCBmcm9tIFwiLi9hZGRpbmdOZXdUYXNrRWxlbWVudFwiXG5pbXBvcnQgZGlzcGxheVRvZG9zRWxlbWVudCBmcm9tIFwiLi9kaXNwbGF5VG9kb3NFbGVtZW50XCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gd29ya0FyZWFFbGVtZW50KCl7XG4gICAgY29uc3Qgd29ya0FyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHdvcmtBcmVhLnNldEF0dHJpYnV0ZSgnaWQnLCd3b3JrQXJlYScpXG5cbiAgICB3b3JrQXJlYS5hcHBlbmRDaGlsZChhZGRpbmdOZXdUYXNrRWxlbWVudCgpKVxuICAgIHdvcmtBcmVhLmFwcGVuZENoaWxkKGRpc3BsYXlUb2Rvc0VsZW1lbnQoKSlcblxuICAgIHJldHVybiB3b3JrQXJlYVxuXG59IiwiaW1wb3J0IHRvZG9DYXJkIGZyb20gXCIuL3RvZG9DYXJkXCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGlzcGxheVRvZG9zIChhcnJUb2Rvcykge1xuICAgIGNvbnN0IHRvZG9MaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICB0b2RvTGlzdC5zZXRBdHRyaWJ1dGUoJ2lkJywndG9kb0xpc3QnKVxuXG4gICAgYXJyVG9kb3MuZm9yRWFjaCh0b2RvID0+IHtcbiAgICAgICAgdG9kb0xpc3QuYXBwZW5kQ2hpbGQodG9kb0NhcmQodG9kbykpXG4gICAgfSk7XG5cbiAgICByZXR1cm4gdG9kb0xpc3Rcbn0iLCJpbXBvcnQgd29ya0FyZWFFbGVtZW50IGZyb20gXCIuL1dvcmtBcmVhL3dvcmtBcmVhRWxlbWVudFwiXG5pbXBvcnQgc2lkZWJhckVsZW1lbnQgZnJvbSBcIi4vU2lkZWJhci9zaWRlYmFyRWxlbWVudFwiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGluaXRpYWxMb2FkICgpIHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb250ZW50LnNldEF0dHJpYnV0ZSgnaWQnLCAnY29udGVudCcpXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChzaWRlYmFyRWxlbWVudCgpKVxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQod29ya0FyZWFFbGVtZW50KCkpXG5cbiAgICByZXR1cm4gY29udGVudFxuXG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9kb0NhcmQodG9kbykge1xuICAgIGNvbnN0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNhcmQuY2xhc3NMaXN0LmFkZCgnY2FyZCcpXG4gICAgY2FyZC5zZXRBdHRyaWJ1dGUoJ2lkJywgdG9kby5nZXRJZCgpKVxuXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgnaGVhZGVyQ2FyZCcpXG5cbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIHRpdGxlLnRleHRDb250ZW50ID0gdG9kby5nZXRUaXRsZSgpXG5cbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQodGl0bGUpXG4gICAgY2FyZC5hcHBlbmRDaGlsZChoZWFkZXIpXG5cbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb250YWluZXJDYXJkJylcblxuICAgIGNvbnN0IGRlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBkZXNjLnRleHRDb250ZW50ID0gdG9kby5nZXREZXNjcmlwdGlvbigpXG5cbiAgICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgZHVlRGF0ZS50ZXh0Q29udGVudCA9IHRvZG8uZ2V0RHVlRGF0ZSgpXG5cbiAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIGxldCBwcmlvcml0VGV4dCA9ICcnXG4gICAgaWYodG9kby5nZXRQcmlvcml0eSgpID09PSAwKXtcbiAgICAgICAgcHJpb3JpdFRleHQgPSAnTG93J1xuICAgIH1cbiAgICBlbHNlIGlmKHRvZG8uZ2V0UHJpb3JpdHkoKSA9PT0gMSl7XG4gICAgICAgIHByaW9yaXRUZXh0ID0gJ01lZGl1bSdcbiAgICB9XG4gICAgZWxzZXtcbiAgICAgICAgcHJpb3JpdFRleHQgPSAnSGlnaCdcbiAgICB9XG4gICAgcHJpb3JpdHkudGV4dENvbnRlbnQgPSBwcmlvcml0VGV4dFxuXG4gICAgY29uc3QgZGVsZXRlVG9kb0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgZGVsZXRlVG9kb0J0bi5jbGFzc0xpc3QuYWRkKCdyZW1vdmVUb2RvJylcbiAgICBkZWxldGVUb2RvQnRuLmRhdGFzZXQuaWQgPSB0b2RvLmdldElkKClcbiAgICBkZWxldGVUb2RvQnRuLnRleHRDb250ZW50ID0gJ1JlbW92ZSdcblxuICAgIGNvbnN0IGNvbXBsZXRlVG9kb0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgY29tcGxldGVUb2RvQnRuLmNsYXNzTGlzdC5hZGQoJ2RvbmVUYXNrJylcbiAgICBjb21wbGV0ZVRvZG9CdG4uZGF0YXNldC5pZCA9IHRvZG8uZ2V0SWQoKVxuICAgIGNvbXBsZXRlVG9kb0J0bi50ZXh0Q29udGVudCA9IFwiVGFzayBkb25lXCJcblxuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGRlc2MpXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGR1ZURhdGUpXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHByaW9yaXR5KVxuICAgIGNhcmQuYXBwZW5kQ2hpbGQoY29udGFpbmVyKVxuICAgIGNhcmQuYXBwZW5kQ2hpbGQoZGVsZXRlVG9kb0J0bilcbiAgICBjYXJkLmFwcGVuZENoaWxkKGNvbXBsZXRlVG9kb0J0bilcblxuXG4gICAgcmV0dXJuIGNhcmRcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IGluaXRpYWxMb2FkIGZyb20gXCIuL2luaXRpYWxMb2FkXCJcbmltcG9ydCBkaXNwbGF5VG9kb3MgZnJvbSBcIi4vZGlzcGxheVRvZG9zXCJcbmltcG9ydCB0b2RvQ2FyZCBmcm9tIFwiLi90b2RvQ2FyZFwiXG5pbXBvcnQgJy4vc3R5bGUuY3NzJ1xuaW1wb3J0IGFkZFByb2plY3RFbGVtZW50IGZyb20gXCIuL1NpZGViYXIvYWRkUHJvamVjdEVsZW1lbnRcIlxuaW1wb3J0IGhlYWRlciBmcm9tIFwiLi9IZWFkZXIvaGVhZGVyRWxlbWVudFwiXG5cbi8vT2JqZWN0IG9mIGluZGl2aWR1YWwgdG9kb3NcbmNvbnN0IFRvRG9zID0gKCk9PntcbiAgICBsZXQgdGl0bGU9XCJObyB0aXRsZVwiXG4gICAgbGV0IGRlc2NyaXB0aW9uPVwiXCJcbiAgICBsZXQgZHVlRGF0ZT0gKG5ldyBEYXRlKCkpLnRvSlNPTigpLnNsaWNlKDAsIDEwKVxuICAgIGxldCBwcmlvcml0eT0wXG4gICAgbGV0IGlkID0gMFxuICAgIGxldCBzdGF0dXMgPSBmYWxzZVxuXG4gICAgY29uc3Qgc2V0VGl0bGUgPSBuZXdUaXRsZSA9PiB0aXRsZSA9IG5ld1RpdGxlXG4gICAgY29uc3Qgc2V0RGVzY3JpcHRpb24gPSBuZXdEZXNjcmlwdGlvbiA9PiBkZXNjcmlwdGlvbiA9IG5ld0Rlc2NyaXB0aW9uXG4gICAgY29uc3Qgc2V0RHVlRGF0ZSA9IG5ld0R1ZURhdGUgPT4gZHVlRGF0ZSA9IG5ld0R1ZURhdGVcbiAgICBjb25zdCBzZXRQcmlvcml0eSA9IG5ld1ByaW9ydHkgPT4gcHJpb3JpdHkgPSBuZXdQcmlvcnR5XG4gICAgY29uc3Qgc2V0SWQgPSBuZXdJZCA9PiBpZCA9IG5ld0lkXG4gICAgY29uc3Qgc2V0U3RhdHVzID0gbmV3U3RhdHVzID0+IHN0YXR1cyA9IG5ld1N0YXR1c1xuXG4gICAgY29uc3QgZ2V0VGl0bGUgPSAoKSA9PiB0aXRsZVxuICAgIGNvbnN0IGdldERlc2NyaXB0aW9uID0gKCkgPT4gZGVzY3JpcHRpb25cbiAgICBjb25zdCBnZXREdWVEYXRlID0gKCkgPT4gZHVlRGF0ZVxuICAgIGNvbnN0IGdldFByaW9yaXR5ID0gKCkgPT4gcHJpb3JpdHlcbiAgICBjb25zdCBnZXRJZCA9ICgpID0+IGlkXG4gICAgY29uc3QgZ2V0U3RhdHVzID0gKCkgPT4gc3RhdHVzXG5cbiAgICByZXR1cm4ge3NldFRpdGxlLCBzZXREZXNjcmlwdGlvbiwgc2V0RHVlRGF0ZSwgc2V0UHJpb3JpdHksIHNldElkLGdldFRpdGxlLCBzZXRTdGF0dXMsIGdldERlc2NyaXB0aW9uLCBnZXREdWVEYXRlLCBnZXRQcmlvcml0eSwgZ2V0SWQsIGdldFN0YXR1c31cblxufVxuXG4vL0NvbGxlY3Rpb24gb2YgVG9kb3NcbmNvbnN0IGNvbGxlY3Rpb25Ub2RvcyA9IChuYW1lLCBsaXN0SWQpID0+e1xuICAgIGxldCBhcnJUb2RvcyA9IFtdXG4gICAgY29uc3QgYWRkVG9Eb3MgPSBuZXdUb2RvID0+IGFyclRvZG9zLnB1c2gobmV3VG9kbylcblxuICAgIGNvbnN0IGdldE5hbWUgPSgpID0+IG5hbWVcblxuICAgIGNvbnN0IGdldExpc3RJZCA9ICgpICA9PiBsaXN0SWRcblxuICAgIGNvbnN0IGRlbGV0ZVRvZG9zID0gKGlkKSA9PiB7XG5cbiAgICAgICAgZm9yKGxldCBpPTA7IGk8YXJyVG9kb3MubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgaWYoYXJyVG9kb3NbaV0uZ2V0SWQoKSA9PT0gaWQpe1xuICAgICAgICAgICAgICAgIGFyclRvZG9zLnNwbGljZShpLDEpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH0gXG5cbiAgICBjb25zdCBjaGFuZ2VTdGF0dXMgPSAoaWQpID0+e1xuICAgICAgICBhcnJUb2Rvcy5mb3JFYWNoKCh0b2RvKSA9PntcbiAgICAgICAgICAgIGlmKHRvZG8uZ2V0SWQoKSA9PT0gaWQpe1xuICAgICAgICAgICAgICAgIHRvZG8uc2V0U3RhdHVzKCEodG9kby5nZXRTdGF0dXMoKSkpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICB9XG5cbiAgICBjb25zdCBnZXRMZW5ndGggPSAoKSA9PiAgYXJyVG9kb3MubGVuZ3RoXG5cbiAgICByZXR1cm57YXJyVG9kb3MsIGFkZFRvRG9zLCBkZWxldGVUb2RvcywgZ2V0TGVuZ3RoLCBjaGFuZ2VTdGF0dXMsIGdldE5hbWUsIGdldExpc3RJZH1cbn1cblxuY29uc3QgdG9kb0xpc3QgPSBjb2xsZWN0aW9uVG9kb3MoJ1RvZGF5JywgMSlcbmNvbnN0IHRvZG9MaXN0MSA9IGNvbGxlY3Rpb25Ub2RvcygnVG9tb3Jyb3cnLCAyKVxuXG5jb25zdCBkb0h3ID0gVG9Eb3MoKVxuZG9Idy5zZXRUaXRsZSgnZG8gSG9tZXdvcmsnKVxuZG9Idy5zZXREZXNjcmlwdGlvbignY29sbGVnZSBob21ld29yaycpXG5kb0h3LnNldFByaW9yaXR5KDApXG5kb0h3LnNldElkKDEpXG5cbmNvbnN0IGV4Y2VyY2lzZSA9IFRvRG9zKClcbmV4Y2VyY2lzZS5zZXRUaXRsZSgnZXhjZXJjaXNlJylcbmV4Y2VyY2lzZS5zZXREZXNjcmlwdGlvbignZG8gZXhjZXJjaXNlIGluIGV2ZW5pbmcnKVxuZXhjZXJjaXNlLnNldFByaW9yaXR5KDIpXG5leGNlcmNpc2Uuc2V0SWQoMilcblxuY29uc3QgY3AgPSBUb0RvcygpXG5jcC5zZXRUaXRsZSgnQ29tcGV0aXR2ZSBQcm9ncmFtbWluZycpXG5jcC5zZXREZXNjcmlwdGlvbignb3BlbiBsZWV0Y29kZSBhbmQgY29kZWNoZWYnKVxuY3Auc2V0SWQoMSlcblxudG9kb0xpc3QuYWRkVG9Eb3MoZG9IdylcbnRvZG9MaXN0LmFkZFRvRG9zKGV4Y2VyY2lzZSlcblxudG9kb0xpc3QxLmFkZFRvRG9zKGNwKVxuXG5jb25zdCBhbGxQcm9qZWN0c0xpc3QgPSBbXVxuXG5hbGxQcm9qZWN0c0xpc3QucHVzaCh0b2RvTGlzdClcbmFsbFByb2plY3RzTGlzdC5wdXNoKHRvZG9MaXN0MSlcblxuXG5mdW5jdGlvbiBjbGVhckVsZW1lbnRDb250ZW50KGVsZW1lbnRJRCkge1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGVsZW1lbnRJRCk7XG4gICAgICBcbiAgICB3aGlsZShkaXYuZmlyc3RDaGlsZCkge1xuICAgICAgICBkaXYucmVtb3ZlQ2hpbGQoZGl2LmZpcnN0Q2hpbGQpO1xuICAgIH1cbn1cblxubGV0IHNlbGVjdGVkUHJvamVjdElkID0gYWxsUHJvamVjdHNMaXN0WzBdLmdldExpc3RJZCgpXG5cbmNvbnN0IGhhbmRsZUFkZE5ld1Rhc2sgPSAoZSkgPT57XG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkVGl0bGUnKS52YWx1ZVxuICAgIGNvbnN0IGRlc2MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkRGVzYycpLnZhbHVlXG4gICAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGREdWVEYXRlJykudmFsdWVcbiAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGRQcmlvcml0eScpLnZhbHVlXG4gICAgXG5cbiAgICBjb25zdCBuZXdUb2RvID0gVG9Eb3MoKVxuICAgIG5ld1RvZG8uc2V0VGl0bGUodGl0bGUpXG4gICAgbmV3VG9kby5zZXREZXNjcmlwdGlvbihkZXNjKVxuICAgIG5ld1RvZG8uc2V0RHVlRGF0ZShkdWVEYXRlKVxuICAgIG5ld1RvZG8uc2V0UHJpb3JpdHkocHJpb3JpdHkpXG4gICAgXG4gICAgXG4gICAgYWxsUHJvamVjdHNMaXN0LmZvckVhY2gocHJvamVjdD0+e1xuICAgICAgICBpZihwcm9qZWN0LmdldExpc3RJZCgpID09PSBzZWxlY3RlZFByb2plY3RJZCl7XG4gICAgICAgICAgICBuZXdUb2RvLnNldElkKHByb2plY3QuZ2V0TGVuZ3RoKCkrMSlcbiAgICAgICAgICAgIHByb2plY3QuYWRkVG9Eb3MobmV3VG9kbylcbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICBjb25zdCB0b2RvQWRkRWxlbWVudCA9dG9kb0NhcmQobmV3VG9kbylcbiAgICBcbiAgICB0b2RvQWRkRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcucmVtb3ZlVG9kbycpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlRGVsZXRlVGFzaylcbiAgICB0b2RvQWRkRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuZG9uZVRhc2snKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhZG5sZVN0YXR1c0NoYW5nZSlcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kb0xpc3QnKS5hcHBlbmRDaGlsZCh0b2RvQWRkRWxlbWVudClcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGRUaXRsZScpLnZhbHVlID0gJydcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkRGVzYycpLnZhbHVlID0gJydcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkRHVlRGF0ZScpLnZhbHVlID0gKG5ldyBEYXRlKCkpLnRvSlNPTigpLnNsaWNlKDAsIDEwKVxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGRQcmlvcml0eScpLnZhbHVlID0gMSAgICBcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Rpdk1vZGFsXCIpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbn1cblxuY29uc3QgaGFuZGxlRGVsZXRlVGFzayA9IChlKSA9PntcbiAgICBjb25zdCB0YXNrSWQgPSBwYXJzZUludChlLnRhcmdldC5kYXRhc2V0LmlkKVxuXG4gICAgYWxsUHJvamVjdHNMaXN0LmZvckVhY2gocHJvamVjdCA9PntcbiAgICAgICAgaWYocHJvamVjdC5nZXRMaXN0SWQoKSA9PT0gc2VsZWN0ZWRQcm9qZWN0SWQpe1xuICAgICAgICAgICAgcHJvamVjdC5kZWxldGVUb2Rvcyh0YXNrSWQpXG5cbiAgICAgICAgfVxuICAgIH0pXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7dGFza0lkfWApLnJlbW92ZSgpXG59XG5cbmNvbnN0IGhhZG5sZVN0YXR1c0NoYW5nZSA9IChlKSA9PntcblxuICAgIGNvbnN0IHRhc2tJZCA9IHBhcnNlSW50KGUudGFyZ2V0LmRhdGFzZXQuaWQpXG4gICAgYWxsUHJvamVjdHNMaXN0LmZvckVhY2gocHJvamVjdCA9PntcbiAgICAgICAgaWYocHJvamVjdC5nZXRMaXN0SWQoKSA9PT0gc2VsZWN0ZWRQcm9qZWN0SWQpe1xuICAgICAgICAgICAgcHJvamVjdC5jaGFuZ2VTdGF0dXModGFza0lkKVxuICAgICAgICB9XG4gICAgfSlcblxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke3Rhc2tJZH1gKS5jbGFzc0xpc3QudG9nZ2xlKCdkb25lJylcblxufVxuXG5jb25zdCBoYW5kbGVQcm9qZWN0QnRuID0gKGUpPT57XG4gICAgc2VsZWN0ZWRQcm9qZWN0SWQgPSAgcGFyc2VJbnQoZS50YXJnZXQuaWQuc2xpY2UoNykpXG4gICAgY2xlYXJFbGVtZW50Q29udGVudCgnZGlzcGxheScpXG4gICAgY29uc3QgcHJvamVjdFRvU2hvdyA9IGFsbFByb2plY3RzTGlzdC5maW5kKHByb2plY3QgPT4gcHJvamVjdC5nZXRMaXN0SWQoKSA9PT0gc2VsZWN0ZWRQcm9qZWN0SWQpXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rpc3BsYXknKS5hcHBlbmRDaGlsZChkaXNwbGF5VG9kb3MocHJvamVjdFRvU2hvdy5hcnJUb2RvcykpXG5cbiAgICBkaXNwbGF5TG9hZGVyLmFkZFJlbW92ZUV2ZW50TGlzdGVuZXJzKClcbn1cblxuXG5jb25zdCBoYW5kbGVQcm9qZWN0UmVtb3ZlQnRuID0gKGUpID0+e1xuICAgIGNvbnN0IHByb2plY3RJZCA9IHBhcnNlSW50KGUudGFyZ2V0LmlkLnNsaWNlKDEzKSlcblxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBwcm9qZWN0TGlzdEl0ZW0ke3Byb2plY3RJZH1gKS5yZW1vdmUoKVxuXG4gICAgZm9yKGxldCBpPTA7IGk8YWxsUHJvamVjdHNMaXN0Lmxlbmd0aDsgaSsrKXtcbiAgICAgICAgaWYoYWxsUHJvamVjdHNMaXN0W2ldLmdldExpc3RJZCgpID09PSBwcm9qZWN0SWQpe1xuICAgICAgICAgICAgYWxsUHJvamVjdHNMaXN0LnNwbGljZShpLDEpXG4gICAgICAgIH1cbiAgICB9XG5cbn1cblxuY29uc3QgaGFuZGxlT3BlbkFkZFByb2plY3QgPSAoZSk9PntcbiAgICAvL2FkZCAnYWRkUHJvamVjdEVMZW1lbnQnIHRvICNkaXZQcm9qZWN0XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RpdlByb2plY3QnKS5hcHBlbmRDaGlsZChhZGRQcm9qZWN0RWxlbWVudCgpKVxuICAgIGUudGFyZ2V0LmRpc2FibGVkID0gdHJ1ZVxuXG4gICAgLy90aGUgY2xvc2VhZGRwcm9qZWN0IGlzIG5vdCBwcmVzZW50IGluIHRoZSBkb20gYXMgd2UgYWRkIGl0IGFmdGVyIGNsaWNraW5nIHRoZSBidXR0b25cbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2xvc2VBZGRQcm9qZWN0JykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpPT57XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRQcm9qZWN0RGl2JykucmVtb3ZlKClcbiAgICAgICAgZS50YXJnZXQuZGlzYWJsZWQgPSBmYWxzZVxuICAgIH0pXG5cbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkUHJvamVjdCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KT0+e1xuICAgICAgICBlLnRhcmdldC5kaXNhYmxlZCA9IGZhbHNlXG4gICAgICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdE5hbWVJbnB1dCcpLnZhbHVlID09PSBcIlwiID8gXCJQcm9qZWN0XCIgOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdE5hbWVJbnB1dCcpLnZhbHVlXG4gICAgICAgIGNvbnN0IG5ld1RvZG9MaXN0ID0gY29sbGVjdGlvblRvZG9zKG5hbWUsIGFsbFByb2plY3RzTGlzdC5sZW5ndGgrMSlcbiAgICAgICAgYWxsUHJvamVjdHNMaXN0LnB1c2gobmV3VG9kb0xpc3QpXG5cbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZFByb2plY3REaXYnKS5yZW1vdmUoKVxuXG4gICAgICAgIGNvbnN0IHByb2plY3RMaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIHByb2plY3RMaXN0SXRlbS5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0TGlzdEl0ZW0nKVxuICAgICAgICBwcm9qZWN0TGlzdEl0ZW0uc2V0QXR0cmlidXRlKCdpZCcsIGBwcm9qZWN0TGlzdEl0ZW0ke2FsbFByb2plY3RzTGlzdC5sZW5ndGh9YClcblxuICAgICAgICBjb25zdCBuZXdQcm9qZWN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICAgICAgbmV3UHJvamVjdEJ0bi50ZXh0Q29udGVudCA9IG5ld1RvZG9MaXN0LmdldE5hbWUoKVxuICAgICAgICBuZXdQcm9qZWN0QnRuLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QnKVxuICAgICAgICBuZXdQcm9qZWN0QnRuLnNldEF0dHJpYnV0ZSgnaWQnLCBgcHJvamVjdCR7YWxsUHJvamVjdHNMaXN0Lmxlbmd0aH1gKVxuICAgICAgICBuZXdQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxoYW5kbGVQcm9qZWN0QnRuKVxuXG4gICAgICAgIGNvbnN0IHJlbW92ZVByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgICAgICByZW1vdmVQcm9qZWN0LnRleHRDb250ZW50ID0gJ1gnXG4gICAgICAgIHJlbW92ZVByb2plY3QuY2xhc3NMaXN0LmFkZCgncmVtb3ZlLXByb2plY3QnKVxuICAgICAgICByZW1vdmVQcm9qZWN0LnNldEF0dHJpYnV0ZSgnaWQnLCBgcmVtb3ZlUHJvamVjdCR7YWxsUHJvamVjdHNMaXN0Lmxlbmd0aH1gKVxuICAgICAgICByZW1vdmVQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlUHJvamVjdFJlbW92ZUJ0bilcblxuICAgICAgICBwcm9qZWN0TGlzdEl0ZW0uYXBwZW5kQ2hpbGQobmV3UHJvamVjdEJ0bilcbiAgICAgICAgcHJvamVjdExpc3RJdGVtLmFwcGVuZENoaWxkKHJlbW92ZVByb2plY3QpXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1c2VyUHJvamVjdHNMaXN0JykuYXBwZW5kQ2hpbGQocHJvamVjdExpc3RJdGVtKVxuICAgIH0pXG5cbn1cblxuXG5jb25zdCBkaXNwbGF5TG9hZGVyID0gKCgpPT57XG5cbiAgICBjb25zdCBwYWdlTG9hZCA9ICgpPT57XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtYWluJykuYXBwZW5kQ2hpbGQoaGVhZGVyKCkpXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtYWluJykuYXBwZW5kQ2hpbGQoaW5pdGlhbExvYWQoKSlcbiAgICB9XG5cbiAgICBjb25zdCB0b2RvRGlzcGxheSA9ICgpPT57XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkaXNwbGF5JykuYXBwZW5kQ2hpbGQoZGlzcGxheVRvZG9zKGFsbFByb2plY3RzTGlzdFswXS5hcnJUb2RvcykpXG4gICAgfSBcblxuICAgIGNvbnN0IGFkZFJlbW92ZUV2ZW50TGlzdGVuZXJzID0gKCkgPT57XG4gICAgICAgIGNvbnN0IHJlbW92ZUJ0bnMgPSBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnJlbW92ZVRvZG8nKV1cblxuICAgICAgICByZW1vdmVCdG5zLmZvckVhY2goKHJlbW92ZUJ0bik9PntcbiAgICAgICAgICAgIHJlbW92ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZURlbGV0ZVRhc2spXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgY29uc3QgYWRkVGFza0V2ZW50TGlzdGVuZXIgPSAoKSA9PntcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZFRhc2snKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsaGFuZGxlQWRkTmV3VGFzaylcbiAgICB9XG5cbiAgICBjb25zdCBhZGREZWZhdWx0UHJvamVjdHMgPSAoKSA9PntcbiAgICAgICAgYWxsUHJvamVjdHNMaXN0LmZvckVhY2gocHJvamVjdCA9PntcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RMaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgICAgICBwcm9qZWN0TGlzdEl0ZW0uY2xhc3NMaXN0LmFkZCgncHJvamVjdExpc3RJdGVtJylcbiAgICBcbiAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgICAgICAgICAgaXRlbS50ZXh0Q29udGVudCA9IHByb2plY3QuZ2V0TmFtZSgpXG4gICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QnKVxuICAgICAgICAgICAgaXRlbS5zZXRBdHRyaWJ1dGUoJ2lkJywgYHByb2plY3Qke3Byb2plY3QuZ2V0TGlzdElkKCl9YClcblxuICAgICAgICAgICAgcHJvamVjdExpc3RJdGVtLmFwcGVuZENoaWxkKGl0ZW0pXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVmYXVsdFByb2plY3RzTGlzdCcpLmFwcGVuZENoaWxkKHByb2plY3RMaXN0SXRlbSlcbiAgICAgICAgfSlcbiAgICB9XG5cblxuICAgIHJldHVybiB7cGFnZUxvYWQsIHRvZG9EaXNwbGF5LGFkZFRhc2tFdmVudExpc3RlbmVyICxhZGRSZW1vdmVFdmVudExpc3RlbmVycywgYWRkRGVmYXVsdFByb2plY3RzfVxuXG59KSgpXG5cbmRpc3BsYXlMb2FkZXIucGFnZUxvYWQoKVxuZGlzcGxheUxvYWRlci50b2RvRGlzcGxheSgpXG5kaXNwbGF5TG9hZGVyLmFkZFRhc2tFdmVudExpc3RlbmVyKClcbmRpc3BsYXlMb2FkZXIuYWRkUmVtb3ZlRXZlbnRMaXN0ZW5lcnMoKVxuZGlzcGxheUxvYWRlci5hZGREZWZhdWx0UHJvamVjdHMoKVxuXG5jb25zdCBkb25lVGFza0J0bnMgPSBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRvbmVUYXNrJyldXG5cbmRvbmVUYXNrQnRucy5mb3JFYWNoKChkb25lVGFza0J0bikgPT57XG4gICAgZG9uZVRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYWRubGVTdGF0dXNDaGFuZ2UpXG59KVxuXG5cbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvcGVuQWRkUHJvamVjdCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlT3BlbkFkZFByb2plY3QpXG5cbmNvbnN0IHByb2plY3RCdG5zID0gWy4uLmRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3Byb2plY3QnKV1cbnByb2plY3RCdG5zLmZvckVhY2gocHJvamVjdEJ0biA9PntcbiAgICBwcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlUHJvamVjdEJ0bilcbn0pXG5cblxuXG5cblxuXG5cblxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=