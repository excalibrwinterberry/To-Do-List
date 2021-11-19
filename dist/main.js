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
    dueDateTodoInput.setAttribute('min', (new Date()).toJSON().slice(0, 10))

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


let allProjectsList = []

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0EsNENBQTRDLGdCQUFnQixpQkFBaUIsR0FBRyxXQUFXLDBCQUEwQiw2S0FBNkssZUFBZSxpQkFBaUIsMENBQTBDLGtCQUFrQixxQkFBcUIsS0FBSyxhQUFhLHVCQUF1QixzQkFBc0IsR0FBRyxhQUFhLGtCQUFrQixHQUFHLGVBQWUsdUJBQXVCLG9CQUFvQixpQkFBaUIsaUJBQWlCLG1CQUFtQiwwQ0FBMEMsc0JBQXNCLCtEQUErRCw0REFBNEQseURBQXlELEdBQUcsY0FBYyx1QkFBdUIsZ0JBQWdCLEdBQUcscUJBQXFCLGVBQWUscUJBQXFCLHdCQUF3QixpQkFBaUIsd0JBQXdCLCtCQUErQixvQkFBb0IsR0FBRywwQkFBMEIsZ0NBQWdDLEdBQUcsZUFBZSxtQkFBbUIsaUJBQWlCLHFCQUFxQixpQkFBaUIscUJBQXFCLHVCQUF1QixHQUFHLG9CQUFvQixpQkFBaUIsdUJBQXVCLGlCQUFpQixnQkFBZ0Isc0JBQXNCLG1CQUFtQix1QkFBdUIsaUJBQWlCLHVCQUF1QixvQkFBb0IsT0FBTyx3Q0FBd0Msd0JBQXdCLDhCQUE4Qix1QkFBdUIsK0NBQStDLDJCQUEyQixtQkFBbUIsb0JBQW9CLDBCQUEwQix3RUFBd0Usb0JBQW9CLHFCQUFxQixzQkFBc0IscUJBQXFCLGVBQWUsdUJBQXVCLHVCQUF1Qix1Q0FBdUMseUJBQXlCLHNCQUFzQiw4QkFBOEIsK0JBQStCLDJCQUEyQixHQUFHLG9EQUFvRCw4QkFBOEIsNkJBQTZCLG1CQUFtQixHQUFHLDRCQUE0QixnQkFBZ0IsR0FBRyxxQkFBcUIsaUJBQWlCLEdBQUcsc0RBQXNELDZCQUE2Qiw2QkFBNkIsbUJBQW1CLEdBQUcsNkJBQTZCLGdCQUFnQixHQUFHLHVCQUF1QixrQkFBa0IsZ0JBQWdCLHFCQUFxQix1QkFBdUIsR0FBRyxvQ0FBb0MsaUJBQWlCLHVCQUF1QixnQ0FBZ0MsMkJBQTJCLGVBQWUsaUJBQWlCLHNCQUFzQix1QkFBdUIscUJBQXFCLEdBQUcsZ0JBQWdCLGVBQWUsaUJBQWlCLGlCQUFpQix1QkFBdUIsZ0NBQWdDLG1CQUFtQixxQkFBcUIsR0FBRyxxQkFBcUIsZUFBZSxpQkFBaUIsdUJBQXVCLGdDQUFnQyxtQkFBbUIsaUJBQWlCLGdCQUFnQixxQkFBcUIsR0FBRyxhQUFhLHVCQUF1QixHQUFHLGNBQWMsd0JBQXdCLGtCQUFrQiw4Q0FBOEMsa0NBQWtDLGFBQWEsWUFBWSxvQkFBb0Isc0JBQXNCLHNCQUFzQixpQkFBaUIsa0NBQWtDLG9DQUFvQyxpQkFBaUIsZ0RBQWdELGdDQUFnQywyR0FBMkcsNkdBQTZHLGlHQUFpRyxzSEFBc0gsVUFBVSxnQkFBZ0Isa0JBQWtCLGdCQUFnQixtQkFBbUIscUJBQXFCLGVBQWUscUJBQXFCLEdBQUcsaUNBQWlDLGVBQWUseUJBQXlCLG1CQUFtQixHQUFHLGlCQUFpQixzQkFBc0IsbUJBQW1CLGdCQUFnQixxQkFBcUIsS0FBSyw0QkFBNEIsaUJBQWlCLHVCQUF1QixpQkFBaUIsaUJBQWlCLHFCQUFxQixxQkFBcUIsc0JBQXNCLEtBQUssc0RBQXNELGlCQUFpQix1QkFBdUIscUJBQXFCLElBQUksY0FBYyxxQkFBcUIsd0JBQXdCLDhCQUE4Qix5Q0FBeUMsMEJBQTBCLGdEQUFnRCwyQkFBMkIsK0JBQStCLG9CQUFvQix5QkFBeUIsaUdBQWlHLG9CQUFvQixxQkFBcUIsNEJBQTRCLHNCQUFzQixxQkFBcUIsb0RBQW9ELHVCQUF1QiwwQkFBMEIsMEJBQTBCLHNCQUFzQiw4QkFBOEIsK0JBQStCLDZCQUE2QixnQkFBZ0IsR0FBRyxxQ0FBcUMsc0NBQXNDLDhDQUE4QywrQkFBK0IsR0FBRyxvQkFBb0IsZ0NBQWdDLEdBQUcscUJBQXFCLDhCQUE4QixzQ0FBc0MsOENBQThDLCtCQUErQiw2QkFBNkIsR0FBRyxXQUFXLG1CQUFtQixvQkFBb0IsbUJBQW1CLHdCQUF3QiwwQkFBMEIsbURBQW1ELDJCQUEyQixvREFBb0QseUJBQXlCLE9BQU8sbUJBQW1CLHdEQUF3RCw2QkFBNkIsS0FBSyxpQkFBaUIscUNBQXFDLHVCQUF1Qix3QkFBd0IsbUJBQW1CLEdBQUcsbUJBQW1CLHNCQUFzQiwwQ0FBMEMsR0FBRyxjQUFjLG9CQUFvQixvQkFBb0IsS0FBSywyQkFBMkIsd0JBQXdCLGlDQUFpQyw4QkFBOEIsa0NBQWtDLDBCQUEwQixnREFBZ0QsMkJBQTJCLGdCQUFnQixvQkFBb0IseUJBQXlCLGlHQUFpRyxvQkFBb0IscUJBQXFCLDRCQUE0QixzQkFBc0IsY0FBYyxxQkFBcUIsb0RBQW9ELHVCQUF1QiwwQkFBMEIsMEJBQTBCLHNCQUFzQiw4QkFBOEIsK0JBQStCLDZCQUE2QixnQkFBZ0IsR0FBRyw0RUFBNEUsOEJBQThCLDhDQUE4QyxHQUFHLHdDQUF3QyxnQ0FBZ0MsR0FBRywwQ0FBMEMsOEJBQThCLDZDQUE2Qyw2QkFBNkIsR0FBRyxVQUFVLHdCQUF3QixxRkFBcUYsdUZBQXVGLDJFQUEyRSxzSEFBc0gsS0FBSyxnQkFBZ0IsdUJBQXVCLGlCQUFpQixlQUFlLEdBQUcsZ0JBQWdCLHVCQUF1QixpQkFBaUIsZ0JBQWdCLEdBQUcsZ0NBQWdDLHdCQUF3QixHQUFHLFdBQVcsZ0ZBQWdGLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksUUFBUSxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sTUFBTSxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsUUFBUSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksUUFBUSxLQUFLLFlBQVksdUJBQXVCLHlCQUF5QixXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxxQkFBcUIsdUJBQXVCLFdBQVcsVUFBVSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsZ0JBQWdCLFNBQVMsS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLE1BQU0sVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGNBQWMsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLE1BQU0sTUFBTSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZ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LWRvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9IZWFkZXIvaGVhZGVyRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL1NpZGViYXIvYWRkUHJvamVjdEVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9TaWRlYmFyL3NpZGViYXJFbGVtZW50LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvV29ya0FyZWEvYWRkaW5nTmV3VGFza0VsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9Xb3JrQXJlYS9kaXNwbGF5VG9kb3NFbGVtZW50LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvV29ya0FyZWEvd29ya0FyZWFFbGVtZW50LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvZGlzcGxheVRvZG9zLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvaW5pdGlhbExvYWQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy90b2RvQ2FyZC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKntcXG4gIG1hcmdpbjogMHB4O1xcbiAgcGFkZGluZzogMHB4O1xcbn1cXG5cXG4udGl0bGV7XFxuYmFja2dyb3VuZDogcmdiKDIsMCwzNik7XFxuYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2JhKDIsMCwzNiwxKSAwJSwgcmdiYSg0NCw0NCw2MCwxKSAwJSwgcmdiYSgxMCwyNSwxMywxKSAxMDAlLCByZ2JhKDgyLDE0MywxODYsMSkgMTAwJSwgcmdiYSgzLDE3OCwxNTcsMSkgMTAwJSwgcmdiYSgwLDI1NSwyMjksMSkgMTAwJSk7XFxuaGVpZ2h0OiA3NXB4O1xcbmNvbG9yOiAjZjNlOWU5O1xcbmZvbnQtZmFtaWx5OiAnVmFyZWxhIFJvdW5kJywgc2Fucy1zZXJpZjtcXG5mb250LXNpemU6IDQwcHg7XFxuZm9udC13ZWlnaHQ6bm9ybWFsO1xcblxcbn1cXG5cXG4udGl0bGUgcHtcXG4gIHBhZGRpbmctbGVmdDogMzBweDtcXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xcbn1cXG5cXG4jY29udGVudHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcblxcbiNzaWRlYmFye1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgd2lkdGg6IDIwMHB4O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgY29sb3I6ICNmM2U5ZTk7XFxuZm9udC1mYW1pbHk6ICdWYXJlbGEgUm91bmQnLCBzYW5zLXNlcmlmO1xcbmJhY2tncm91bmQ6ICMyRTJFM0U7XFxuYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQocmlnaHQsICMyRTJFM0UsICMxQjIwMjcpO1xcbmJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KHJpZ2h0LCAjMkUyRTNFLCAjMUIyMDI3KTtcXG5iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgIzJFMkUzRSwgIzFCMjAyNyk7XFxufVxcblxcbiN3b3JrQXJlYXtcXG4gIG1hcmdpbi1sZWZ0OiAyMDBweDtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4ucHJvamVjdExpc3RJdGVte1xcbiAgd2lkdGg6IDkwJTtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICBiYWNrZ3JvdW5kOiAjYWFhYWFhO1xcbiAgbWFyZ2luOiAxMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIHRyYW5zaXRpb246IGJveC1zaGFkb3cgLjNzO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4ucHJvamVjdExpc3RJdGVtOmhvdmVyIHtcXG5ib3gtc2hhZG93OiAwIDAgMTBweCAgI2VlZWVlZTtcXG59XFxuXFxuXFxuLnByb2plY3R7XFxuICBjb2xvcjogIzQxMmIyYjtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICBmb250LXNpemU6IGxhcmdlO1xcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbn1cXG5cXG4ucmVtb3ZlLXByb2plY3R7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kOiNhODkxOTE7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICB3aWR0aDogMzBweDtcXG4gIGZvbnQtc2l6ZTogbGFyZ2VyO1xcbiAgY29sb3I6ICNjODUwMDA7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBmbG9hdDogcmlnaHQ7XFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxuICBtYXJnaW4tdG9wOiA0cHg7XFxuICBcXG59XFxuXFxuI29wZW5BZGRQcm9qZWN0LCAjb3BlbkFkZFRhc2tNb2RhbCB7XFxuICBiYWNrZ3JvdW5kOiAjRkY0NzQyO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI0ZGNDc0MjtcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xKSAxcHggMnB4IDRweDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBjb2xvcjogI0ZGRkZGRjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGZvbnQtZmFtaWx5OiBudW5pdG8scm9ib3RvLHByb3hpbWEtbm92YSxcXFwicHJveGltYSBub3ZhXFxcIixzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgZm9udC13ZWlnaHQ6IDgwMDtcXG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xcbiAgbWluLWhlaWdodDogNDBweDtcXG4gIG91dGxpbmU6IDA7XFxuICBwYWRkaW5nOiAxMnB4IDE0cHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB0ZXh0LXJlbmRlcmluZzogZ2VvbWV0cmljcHJlY2lzaW9uO1xcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICB0b3VjaC1hY3Rpb246IG1hbmlwdWxhdGlvbjtcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxufVxcblxcbiNvcGVuQWRkUHJvamVjdDpob3ZlcixcXG4jb3BlbkFkZFByb2plY3Q6YWN0aXZlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDA7XFxuICBjb2xvcjogI0ZGNDc0MjtcXG59XFxuXFxuI29wZW5BZGRQcm9qZWN0OmFjdGl2ZSB7XFxuICBvcGFjaXR5OiAuNTtcXG59XFxuI29wZW5BZGRUYXNrTW9kYWwge1xcbiAgbWFyZ2luOiAzMHB4O1xcbn1cXG5cXG4jb3BlbkFkZFRhc2tNb2RhbDpob3ZlciwgI29wZW5BZGRUYXNrTW9kYWw6YWN0aXZle1xcbiAgYmFja2dyb3VuZC1jb2xvcjppbml0aWFsO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAwO1xcbiAgY29sb3I6ICNGRjQ3NDI7XFxufVxcblxcbiNvcGVuQWRkVGFza01vZGFsOmFjdGl2ZXtcXG4gIG9wYWNpdHk6IC41O1xcbn1cXG5cXG5cXG5cXG4jYWRkUHJvamVjdERpdntcXG4gIGhlaWdodDogMjAwcHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxuICBtYXJnaW4tYm90dG9tOiA1cHg7XFxufVxcblxcbiNhZGRQcm9qZWN0RGl2IGlucHV0W3R5cGU9dGV4dF17XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWJmMWRkYzI7XFxuICBjb2xvcjogcmdiKDQ5LCAzNiwgMzYpO1xcbiAgd2lkdGg6IDcwJTtcXG4gIGhlaWdodDogMjVweDtcXG4gIHBhZGRpbmctbGVmdDogM3B4O1xcbiAgbWFyZ2luLWJvdHRvbTogMnB4O1xcbiAgZm9udC1zaXplOiBsYXJnZTtcXG59XFxuXFxuI2FkZFByb2plY3R7XFxuICB3aWR0aDogNDAlO1xcbiAgaGVpZ2h0OiAyNXB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzdhYmUyMWMyO1xcbiAgY29sb3I6ICNGRkZGRkY7XFxuICBmb250LXNpemU6IGxhcmdlO1xcbn1cXG5cXG4jY2xvc2VBZGRQcm9qZWN0e1xcbiAgd2lkdGg6IDMwJTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM3YWJlMjFjMjtcXG4gIGNvbG9yOiAjRkZGRkZGO1xcbiAgaGVpZ2h0OiAyNXB4O1xcbiAgbWFyZ2luOiAzcHg7XFxuICBmb250LXNpemU6IGxhcmdlO1xcbn1cXG5cXG4jbmV3VGFza3tcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuXFxuLm1vZGFsIHtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuIGRpc3BsYXk6IG5vbmU7IC8qIEhpZGRlbiBieSBkZWZhdWx0ICovXFxuIHBvc2l0aW9uOiBhYnNvbHV0ZTsgLyogU3RheSBpbiBwbGFjZSAqL1xcbiB6LWluZGV4OiAxOyBcXG4gbGVmdDogNDAlO1xcbiB0b3A6IDMwJTtcXG4gcGFkZGluZy10b3A6MTBweDtcXG4gcGFkZGluZy1sZWZ0OiAxMHB4O1xcbiBwYWRkaW5nLXJpZ2h0OiA1cHg7XFxuIHdpZHRoOiA1MDBweDsgLyogRnVsbCB3aWR0aCAqL1xcbiBoZWlnaHQ6IDMwMHB4OyAvKiBGdWxsIGhlaWdodCAqL1xcbiBvdmVyZmxvdzogYXV0bzsgXFxuY29sb3I6ICMxZmU0ZjU7XFxuYm94LXNoYWRvdzogMCAwIDFweCAyMDAwcHggcmdiYSgwLCAwLCAwLCAwLjMpO1xcblxcbmJhY2tncm91bmQ6IHJnYigyNTUsMTc1LDc1KTtcXG5iYWNrZ3JvdW5kOiAtbW96LXJhZGlhbC1ncmFkaWVudChjZW50ZXIsIGVsbGlwc2UgY292ZXIsICByZ2JhKDI1NSwxNzUsNzUsMSkgMCUsIHJnYmEoMjU1LDE0NiwxMCwxKSAxMDAlKTtcXG5iYWNrZ3JvdW5kOiAtd2Via2l0LXJhZGlhbC1ncmFkaWVudChjZW50ZXIsIGVsbGlwc2UgY292ZXIsICByZ2JhKDI1NSwxNzUsNzUsMSkgMCUscmdiYSgyNTUsMTQ2LDEwLDEpIDEwMCUpO1xcbmJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChlbGxpcHNlIGF0IGNlbnRlciwgIHJnYmEoMjU1LDE3NSw3NSwxKSAwJSxyZ2JhKDI1NSwxNDYsMTAsMSkgMTAwJSk7XFxuZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoIHN0YXJ0Q29sb3JzdHI9JyNmZmFmNGInLCBlbmRDb2xvcnN0cj0nI2ZmOTIwYScsR3JhZGllbnRUeXBlPTEgKTtcXG5cXG5cXG4gXFxufVxcblxcblxcblxcbi5jbG9zZSB7XFxuIGNvbG9yOiAjYWFhYWFhO1xcbiBmbG9hdDogcmlnaHQ7XFxuIGZvbnQtc2l6ZTogMjhweDtcXG4gZm9udC13ZWlnaHQ6IGJvbGQ7XFxuIHdpZHRoOiAxMDAlO1xcbiB0ZXh0LWFsaWduOiByaWdodDtcXG59XFxuXFxuLmNsb3NlOmhvdmVyLFxcbi5jbG9zZTpmb2N1cyB7XFxuIGNvbG9yOiAjMDAwO1xcbiB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLm1vZGFsIGxhYmVse1xcbiAgZm9udC1zaXplOiBsYXJnZXI7XFxuICBjb2xvcjogIzI5MWIxYjtcXG4gIG1hcmdpbjogNHB4O1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG5cXG59XFxuXFxuLm1vZGFsIGlucHV0W3R5cGU9dGV4dF17XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBoZWlnaHQ6IDI1cHg7XFxuICB3aWR0aDogMzAwcHg7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgZm9udC1zaXplOiBsYXJnZTtcXG4gIHBhZGRpbmctbGVmdDogNXB4O1xcblxcbn1cXG5cXG4ubW9kYWwgaW5wdXRbdHlwZT1kYXRlXSwgLm1vZGFsIGlucHV0W3R5cGU9cmFuZ2Vde1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgbWFyZ2luLXRvcDogMjBweDtcXG59IFxcblxcbiNhZGRUYXNrIHtcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gIGJvcmRlci1yYWRpdXM6IC4yNXJlbTtcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4wMikgMCAxcHggM3B4IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44NSk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG4gIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWksLWFwcGxlLXN5c3RlbSxzeXN0ZW0tdWksXFxcIkhlbHZldGljYSBOZXVlXFxcIixIZWx2ZXRpY2EsQXJpYWwsc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGxpbmUtaGVpZ2h0OiAxLjI1O1xcbiAgbWluLWhlaWdodDogM3JlbTtcXG4gIHBhZGRpbmc6IGNhbGMoLjg3NXJlbSAtIDFweCkgY2FsYygxLjVyZW0gLSAxcHgpO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgdHJhbnNpdGlvbjogYWxsIDI1MG1zO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcbiAgdG91Y2gtYWN0aW9uOiBtYW5pcHVsYXRpb247XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxuICB3aWR0aDogYXV0bztcXG59XFxuXFxuI2FkZFRhc2s6aG92ZXIsXFxuI2FkZFRhc2s6Zm9jdXMge1xcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMTUpO1xcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjEpIDAgNHB4IDEycHg7XFxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjY1KTtcXG59XFxuXFxuI2FkZFRhc2s6aG92ZXIge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xcbn1cXG5cXG4jYWRkVGFzazphY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0YwRjBGMTtcXG4gIGJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjE1KTtcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4wNikgMCAycHggNHB4O1xcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42NSk7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XFxufVxcblxcbi5jYXJkIHtcXG4gICAgbWFyZ2luOiAyMHB4O1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICB3aWR0aDogMzAwcHg7XFxuICAgIG1pbi1oZWlnaHQ6IDIwMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBib3gtc2hhZG93OiAwcHggNnB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XFxuICAgIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudCgjMWZlNGY1LCAjM2ZiYWZlKTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcblxcbiAgfVxcblxcbiAgLmNhcmQ6aG92ZXIge1xcbiAgICBib3gtc2hhZG93OiAwcHggNnB4IDEwcHggcmdiYSgxMjgsIDExNSwgMTE1LCAwLjQpO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDEpO1xcbiAgfVxcblxcbi5oZWFkZXJDYXJkIHtcXG4gIGZvbnQtZmFtaWx5OiAnWXVqaSBTeXVrdScsIHNlcmlmO1xcbiAgZm9udC1zaXplOiB4LWxhcmdlO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG4gIGNvbG9yOiAjZmZmZmZmO1xcbn1cXG5cXG4uY29udGFpbmVyQ2FyZHtcXG4gIGZvbnQtc2l6ZTogbGFyZ2VyO1xcbiAgZm9udC1mYW1pbHk6ICdGamFsbGEgT25lJywgc2Fucy1zZXJpZjtcXG59XFxuXFxuI3RvZG9MaXN0e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcblxcbn1cXG5cXG4ucmVtb3ZlVG9kbywgLmRvbmVUYXNre1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmE2NDAwO1xcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItcmFkaXVzOiAuMjVyZW07XFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMDIpIDAgMXB4IDNweCAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxuICBmb250LWZhbWlseTogc3lzdGVtLXVpLC1hcHBsZS1zeXN0ZW0sc3lzdGVtLXVpLFxcXCJIZWx2ZXRpY2EgTmV1ZVxcXCIsSGVsdmV0aWNhLEFyaWFsLHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBsaW5lLWhlaWdodDogMS4yNTtcXG4gIG1hcmdpbjogMDtcXG4gIG1pbi1oZWlnaHQ6IDNyZW07XFxuICBwYWRkaW5nOiBjYWxjKC44NzVyZW0gLSAxcHgpIGNhbGMoMS41cmVtIC0gMXB4KTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIHRyYW5zaXRpb246IGFsbCAyNTBtcztcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4gIHRvdWNoLWFjdGlvbjogbWFuaXB1bGF0aW9uO1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbiAgd2lkdGg6IGF1dG87XFxufVxcblxcbi5yZW1vdmVUb2RvOmhvdmVyLCAucmVtb3ZlVG9kbzpmb2N1cywgLmRvbmVUYXNrOmhvdmVyLCAuZG9uZVRhc2s6Zm9jdXMge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZiODMzMjtcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xKSAwIDRweCAxMnB4O1xcbn1cXG5cXG4ucmVtb3ZlVG9kbzpob3ZlciwgLmRvbmVUYXNrOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcXG59XFxuXFxuLnJlbW92ZVRvZG86YWN0aXZlLCAuZG9uZVRhc2s6YWN0aXZlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNjODUwMDA7XFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIC4wNikgMCAycHggNHB4O1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xcbn1cXG5cXG4uZG9uZXtcXG4gIGJhY2tncm91bmQ6ICNlZWVlZWU7XFxuYmFja2dyb3VuZDogLW1vei1yYWRpYWwtZ3JhZGllbnQoY2VudGVyLCBlbGxpcHNlIGNvdmVyLCAgI2VlZWVlZSAwJSwgI2NjY2NjYyAxMDAlKTtcXG5iYWNrZ3JvdW5kOiAtd2Via2l0LXJhZGlhbC1ncmFkaWVudChjZW50ZXIsIGVsbGlwc2UgY292ZXIsICAjZWVlZWVlIDAlLCNjY2NjY2MgMTAwJSk7XFxuYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGVsbGlwc2UgYXQgY2VudGVyLCAgI2VlZWVlZSAwJSwjY2NjY2NjIDEwMCUpO1xcbmZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KCBzdGFydENvbG9yc3RyPScjZWVlZWVlJywgZW5kQ29sb3JzdHI9JyNjY2NjY2MnLEdyYWRpZW50VHlwZT0xICk7XFxuXFxufVxcblxcbi5yZW1vdmVUb2Rve1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiAxMHB4O1xcbiAgbGVmdDogMTBweDtcXG59XFxuXFxuXFxuLmRvbmVUYXNre1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiAxMHB4O1xcbiAgcmlnaHQ6IDEwcHg7XFxufVxcblxcbiNuZXdUYXNrICwgI3RvZG9MaXN0ICwgYm9keXtcXG4gIGJhY2tncm91bmQ6ICNlY2Q1ZDU7XFxufVxcblxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxXQUFXO0VB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RUFFQTtJQUNFLGlEQUFpRDtJQUNqRCxzQkFBc0I7RUFDeEI7O0FBRUY7RUFDRSxnQ0FBZ0M7RUFDaEMsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLHFDQUFxQztBQUN2Qzs7QUFFQTtJQUNJLGFBQWE7RUFDZixlQUFlOztBQUVqQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQiw0QkFBNEI7RUFDNUIseUJBQXlCO0VBQ3pCLDZCQUE2QjtFQUM3QixxQkFBcUI7RUFDckIsMkNBQTJDO0VBQzNDLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsZUFBZTtFQUNmLG9CQUFvQjtFQUNwQiwwRkFBMEY7RUFDMUYsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQix1QkFBdUI7RUFDdkIsaUJBQWlCO0VBQ2pCLFNBQVM7RUFDVCxnQkFBZ0I7RUFDaEIsK0NBQStDO0VBQy9DLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQUNqQix5QkFBeUI7RUFDekIsMEJBQTBCO0VBQzFCLHdCQUF3QjtFQUN4QixXQUFXO0FBQ2I7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIseUNBQXlDO0FBQzNDOztBQUVBO0VBQ0UsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLHdDQUF3QztFQUN4Qyx3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckIsa0ZBQWtGO0FBQ2xGLG9GQUFvRjtBQUNwRix3RUFBd0U7QUFDeEUsbUhBQW1IOztBQUVuSDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osVUFBVTtBQUNaOzs7QUFHQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIip7XFxuICBtYXJnaW46IDBweDtcXG4gIHBhZGRpbmc6IDBweDtcXG59XFxuXFxuLnRpdGxle1xcbmJhY2tncm91bmQ6IHJnYigyLDAsMzYpO1xcbmJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgcmdiYSgyLDAsMzYsMSkgMCUsIHJnYmEoNDQsNDQsNjAsMSkgMCUsIHJnYmEoMTAsMjUsMTMsMSkgMTAwJSwgcmdiYSg4MiwxNDMsMTg2LDEpIDEwMCUsIHJnYmEoMywxNzgsMTU3LDEpIDEwMCUsIHJnYmEoMCwyNTUsMjI5LDEpIDEwMCUpO1xcbmhlaWdodDogNzVweDtcXG5jb2xvcjogI2YzZTllOTtcXG5mb250LWZhbWlseTogJ1ZhcmVsYSBSb3VuZCcsIHNhbnMtc2VyaWY7XFxuZm9udC1zaXplOiA0MHB4O1xcbmZvbnQtd2VpZ2h0Om5vcm1hbDtcXG5cXG59XFxuXFxuLnRpdGxlIHB7XFxuICBwYWRkaW5nLWxlZnQ6IDMwcHg7XFxuICBwYWRkaW5nLXRvcDogMTBweDtcXG59XFxuXFxuI2NvbnRlbnR7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG5cXG4jc2lkZWJhcntcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHdpZHRoOiAyMDBweDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGNvbG9yOiAjZjNlOWU5O1xcbmZvbnQtZmFtaWx5OiAnVmFyZWxhIFJvdW5kJywgc2Fucy1zZXJpZjtcXG5iYWNrZ3JvdW5kOiAjMkUyRTNFO1xcbmJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHJpZ2h0LCAjMkUyRTNFLCAjMUIyMDI3KTtcXG5iYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudChyaWdodCwgIzJFMkUzRSwgIzFCMjAyNyk7XFxuYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsICMyRTJFM0UsICMxQjIwMjcpO1xcbn1cXG5cXG4jd29ya0FyZWF7XFxuICBtYXJnaW4tbGVmdDogMjAwcHg7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLnByb2plY3RMaXN0SXRlbXtcXG4gIHdpZHRoOiA5MCU7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgYmFja2dyb3VuZDogI2FhYWFhYTtcXG4gIG1hcmdpbjogMTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IC4zcztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLnByb2plY3RMaXN0SXRlbTpob3ZlciB7XFxuYm94LXNoYWRvdzogMCAwIDEwcHggICNlZWVlZWU7XFxufVxcblxcblxcbi5wcm9qZWN0e1xcbiAgY29sb3I6ICM0MTJiMmI7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgZm9udC1zaXplOiBsYXJnZTtcXG4gIHBhZGRpbmctbGVmdDogMTBweDtcXG59XFxuXFxuLnJlbW92ZS1wcm9qZWN0e1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZDojYTg5MTkxO1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgd2lkdGg6IDMwcHg7XFxuICBmb250LXNpemU6IGxhcmdlcjtcXG4gIGNvbG9yOiAjYzg1MDAwO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZmxvYXQ6IHJpZ2h0O1xcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbiAgbWFyZ2luLXRvcDogNHB4O1xcbiAgXFxufVxcblxcbiNvcGVuQWRkUHJvamVjdCwgI29wZW5BZGRUYXNrTW9kYWwge1xcbiAgYmFja2dyb3VuZDogI0ZGNDc0MjtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNGRjQ3NDI7XFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMSkgMXB4IDJweCA0cHg7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgY29sb3I6ICNGRkZGRkY7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBmb250LWZhbWlseTogbnVuaXRvLHJvYm90byxwcm94aW1hLW5vdmEsXFxcInByb3hpbWEgbm92YVxcXCIsc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XFxuICBsaW5lLWhlaWdodDogMTZweDtcXG4gIG1pbi1oZWlnaHQ6IDQwcHg7XFxuICBvdXRsaW5lOiAwO1xcbiAgcGFkZGluZzogMTJweCAxNHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgdGV4dC1yZW5kZXJpbmc6IGdlb21ldHJpY3ByZWNpc2lvbjtcXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcbiAgdG91Y2gtYWN0aW9uOiBtYW5pcHVsYXRpb247XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbn1cXG5cXG4jb3BlbkFkZFByb2plY3Q6aG92ZXIsXFxuI29wZW5BZGRQcm9qZWN0OmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAwO1xcbiAgY29sb3I6ICNGRjQ3NDI7XFxufVxcblxcbiNvcGVuQWRkUHJvamVjdDphY3RpdmUge1xcbiAgb3BhY2l0eTogLjU7XFxufVxcbiNvcGVuQWRkVGFza01vZGFsIHtcXG4gIG1hcmdpbjogMzBweDtcXG59XFxuXFxuI29wZW5BZGRUYXNrTW9kYWw6aG92ZXIsICNvcGVuQWRkVGFza01vZGFsOmFjdGl2ZXtcXG4gIGJhY2tncm91bmQtY29sb3I6aW5pdGlhbDtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IDAgMDtcXG4gIGNvbG9yOiAjRkY0NzQyO1xcbn1cXG5cXG4jb3BlbkFkZFRhc2tNb2RhbDphY3RpdmV7XFxuICBvcGFjaXR5OiAuNTtcXG59XFxuXFxuXFxuXFxuI2FkZFByb2plY3REaXZ7XFxuICBoZWlnaHQ6IDIwMHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xcbn1cXG5cXG4jYWRkUHJvamVjdERpdiBpbnB1dFt0eXBlPXRleHRde1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzViZjFkZGMyO1xcbiAgY29sb3I6IHJnYig0OSwgMzYsIDM2KTtcXG4gIHdpZHRoOiA3MCU7XFxuICBoZWlnaHQ6IDI1cHg7XFxuICBwYWRkaW5nLWxlZnQ6IDNweDtcXG4gIG1hcmdpbi1ib3R0b206IDJweDtcXG4gIGZvbnQtc2l6ZTogbGFyZ2U7XFxufVxcblxcbiNhZGRQcm9qZWN0e1xcbiAgd2lkdGg6IDQwJTtcXG4gIGhlaWdodDogMjVweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM3YWJlMjFjMjtcXG4gIGNvbG9yOiAjRkZGRkZGO1xcbiAgZm9udC1zaXplOiBsYXJnZTtcXG59XFxuXFxuI2Nsb3NlQWRkUHJvamVjdHtcXG4gIHdpZHRoOiAzMCU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2FiZTIxYzI7XFxuICBjb2xvcjogI0ZGRkZGRjtcXG4gIGhlaWdodDogMjVweDtcXG4gIG1hcmdpbjogM3B4O1xcbiAgZm9udC1zaXplOiBsYXJnZTtcXG59XFxuXFxuI25ld1Rhc2t7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcblxcbi5tb2RhbCB7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiBkaXNwbGF5OiBub25lOyAvKiBIaWRkZW4gYnkgZGVmYXVsdCAqL1xcbiBwb3NpdGlvbjogYWJzb2x1dGU7IC8qIFN0YXkgaW4gcGxhY2UgKi9cXG4gei1pbmRleDogMTsgXFxuIGxlZnQ6IDQwJTtcXG4gdG9wOiAzMCU7XFxuIHBhZGRpbmctdG9wOjEwcHg7XFxuIHBhZGRpbmctbGVmdDogMTBweDtcXG4gcGFkZGluZy1yaWdodDogNXB4O1xcbiB3aWR0aDogNTAwcHg7IC8qIEZ1bGwgd2lkdGggKi9cXG4gaGVpZ2h0OiAzMDBweDsgLyogRnVsbCBoZWlnaHQgKi9cXG4gb3ZlcmZsb3c6IGF1dG87IFxcbmNvbG9yOiAjMWZlNGY1O1xcbmJveC1zaGFkb3c6IDAgMCAxcHggMjAwMHB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcXG5cXG5iYWNrZ3JvdW5kOiByZ2IoMjU1LDE3NSw3NSk7XFxuYmFja2dyb3VuZDogLW1vei1yYWRpYWwtZ3JhZGllbnQoY2VudGVyLCBlbGxpcHNlIGNvdmVyLCAgcmdiYSgyNTUsMTc1LDc1LDEpIDAlLCByZ2JhKDI1NSwxNDYsMTAsMSkgMTAwJSk7XFxuYmFja2dyb3VuZDogLXdlYmtpdC1yYWRpYWwtZ3JhZGllbnQoY2VudGVyLCBlbGxpcHNlIGNvdmVyLCAgcmdiYSgyNTUsMTc1LDc1LDEpIDAlLHJnYmEoMjU1LDE0NiwxMCwxKSAxMDAlKTtcXG5iYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoZWxsaXBzZSBhdCBjZW50ZXIsICByZ2JhKDI1NSwxNzUsNzUsMSkgMCUscmdiYSgyNTUsMTQ2LDEwLDEpIDEwMCUpO1xcbmZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KCBzdGFydENvbG9yc3RyPScjZmZhZjRiJywgZW5kQ29sb3JzdHI9JyNmZjkyMGEnLEdyYWRpZW50VHlwZT0xICk7XFxuXFxuXFxuIFxcbn1cXG5cXG5cXG5cXG4uY2xvc2Uge1xcbiBjb2xvcjogI2FhYWFhYTtcXG4gZmxvYXQ6IHJpZ2h0O1xcbiBmb250LXNpemU6IDI4cHg7XFxuIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiB3aWR0aDogMTAwJTtcXG4gdGV4dC1hbGlnbjogcmlnaHQ7XFxufVxcblxcbi5jbG9zZTpob3ZlcixcXG4uY2xvc2U6Zm9jdXMge1xcbiBjb2xvcjogIzAwMDtcXG4gdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5tb2RhbCBsYWJlbHtcXG4gIGZvbnQtc2l6ZTogbGFyZ2VyO1xcbiAgY29sb3I6ICMyOTFiMWI7XFxuICBtYXJnaW46IDRweDtcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxuXFxufVxcblxcbi5tb2RhbCBpbnB1dFt0eXBlPXRleHRde1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgaGVpZ2h0OiAyNXB4O1xcbiAgd2lkdGg6IDMwMHB4O1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG4gIGZvbnQtc2l6ZTogbGFyZ2U7XFxuICBwYWRkaW5nLWxlZnQ6IDVweDtcXG5cXG59XFxuXFxuLm1vZGFsIGlucHV0W3R5cGU9ZGF0ZV0sIC5tb2RhbCBpbnB1dFt0eXBlPXJhbmdlXXtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxufSBcXG5cXG4jYWRkVGFzayB7XFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICBib3JkZXItcmFkaXVzOiAuMjVyZW07XFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMDIpIDAgMXB4IDNweCAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODUpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxuICBmb250LWZhbWlseTogc3lzdGVtLXVpLC1hcHBsZS1zeXN0ZW0sc3lzdGVtLXVpLFxcXCJIZWx2ZXRpY2EgTmV1ZVxcXCIsSGVsdmV0aWNhLEFyaWFsLHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBsaW5lLWhlaWdodDogMS4yNTtcXG4gIG1pbi1oZWlnaHQ6IDNyZW07XFxuICBwYWRkaW5nOiBjYWxjKC44NzVyZW0gLSAxcHgpIGNhbGMoMS41cmVtIC0gMXB4KTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIHRyYW5zaXRpb246IGFsbCAyNTBtcztcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4gIHRvdWNoLWFjdGlvbjogbWFuaXB1bGF0aW9uO1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbiAgd2lkdGg6IGF1dG87XFxufVxcblxcbiNhZGRUYXNrOmhvdmVyLFxcbiNhZGRUYXNrOmZvY3VzIHtcXG4gIGJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjE1KTtcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xKSAwIDRweCAxMnB4O1xcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42NSk7XFxufVxcblxcbiNhZGRUYXNrOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcXG59XFxuXFxuI2FkZFRhc2s6YWN0aXZlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGMEYwRjE7XFxuICBib3JkZXItY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xNSk7XFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMDYpIDAgMnB4IDRweDtcXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNjUpO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xcbn1cXG5cXG4uY2FyZCB7XFxuICAgIG1hcmdpbjogMjBweDtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgd2lkdGg6IDMwMHB4O1xcbiAgICBtaW4taGVpZ2h0OiAyMDBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYm94LXNoYWRvdzogMHB4IDZweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzO1xcbiAgICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoIzFmZTRmNSwgIzNmYmFmZSk7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXG4gIH1cXG5cXG4gIC5jYXJkOmhvdmVyIHtcXG4gICAgYm94LXNoYWRvdzogMHB4IDZweCAxMHB4IHJnYmEoMTI4LCAxMTUsIDExNSwgMC40KTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAxKTtcXG4gIH1cXG5cXG4uaGVhZGVyQ2FyZCB7XFxuICBmb250LWZhbWlseTogJ1l1amkgU3l1a3UnLCBzZXJpZjtcXG4gIGZvbnQtc2l6ZTogeC1sYXJnZTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuICBjb2xvcjogI2ZmZmZmZjtcXG59XFxuXFxuLmNvbnRhaW5lckNhcmR7XFxuICBmb250LXNpemU6IGxhcmdlcjtcXG4gIGZvbnQtZmFtaWx5OiAnRmphbGxhIE9uZScsIHNhbnMtc2VyaWY7XFxufVxcblxcbiN0b2RvTGlzdHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG5cXG59XFxuXFxuLnJlbW92ZVRvZG8sIC5kb25lVGFza3tcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZhNjQwMDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLXJhZGl1czogLjI1cmVtO1xcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjAyKSAwIDFweCAzcHggMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbiAgZm9udC1mYW1pbHk6IHN5c3RlbS11aSwtYXBwbGUtc3lzdGVtLHN5c3RlbS11aSxcXFwiSGVsdmV0aWNhIE5ldWVcXFwiLEhlbHZldGljYSxBcmlhbCxzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgbGluZS1oZWlnaHQ6IDEuMjU7XFxuICBtYXJnaW46IDA7XFxuICBtaW4taGVpZ2h0OiAzcmVtO1xcbiAgcGFkZGluZzogY2FsYyguODc1cmVtIC0gMXB4KSBjYWxjKDEuNXJlbSAtIDFweCk7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICB0cmFuc2l0aW9uOiBhbGwgMjUwbXM7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICB0b3VjaC1hY3Rpb246IG1hbmlwdWxhdGlvbjtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG4gIHdpZHRoOiBhdXRvO1xcbn1cXG5cXG4ucmVtb3ZlVG9kbzpob3ZlciwgLnJlbW92ZVRvZG86Zm9jdXMsIC5kb25lVGFzazpob3ZlciwgLmRvbmVUYXNrOmZvY3VzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmYjgzMzI7XFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMSkgMCA0cHggMTJweDtcXG59XFxuXFxuLnJlbW92ZVRvZG86aG92ZXIsIC5kb25lVGFzazpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XFxufVxcblxcbi5yZW1vdmVUb2RvOmFjdGl2ZSwgLmRvbmVUYXNrOmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzg1MDAwO1xcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAuMDYpIDAgMnB4IDRweDtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcXG59XFxuXFxuLmRvbmV7XFxuICBiYWNrZ3JvdW5kOiAjZWVlZWVlO1xcbmJhY2tncm91bmQ6IC1tb3otcmFkaWFsLWdyYWRpZW50KGNlbnRlciwgZWxsaXBzZSBjb3ZlciwgICNlZWVlZWUgMCUsICNjY2NjY2MgMTAwJSk7XFxuYmFja2dyb3VuZDogLXdlYmtpdC1yYWRpYWwtZ3JhZGllbnQoY2VudGVyLCBlbGxpcHNlIGNvdmVyLCAgI2VlZWVlZSAwJSwjY2NjY2NjIDEwMCUpO1xcbmJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChlbGxpcHNlIGF0IGNlbnRlciwgICNlZWVlZWUgMCUsI2NjY2NjYyAxMDAlKTtcXG5maWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudCggc3RhcnRDb2xvcnN0cj0nI2VlZWVlZScsIGVuZENvbG9yc3RyPScjY2NjY2NjJyxHcmFkaWVudFR5cGU9MSApO1xcblxcbn1cXG5cXG4ucmVtb3ZlVG9kb3tcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvdHRvbTogMTBweDtcXG4gIGxlZnQ6IDEwcHg7XFxufVxcblxcblxcbi5kb25lVGFza3tcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvdHRvbTogMTBweDtcXG4gIHJpZ2h0OiAxMHB4O1xcbn1cXG5cXG4jbmV3VGFzayAsICN0b2RvTGlzdCAsIGJvZHl7XFxuICBiYWNrZ3JvdW5kOiAjZWNkNWQ1O1xcbn1cXG5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhlYWRlcigpIHtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKVxuICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKCd0aXRsZScpXG5cbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIHRpdGxlLnRleHRDb250ZW50ID0gXCJUby1Eby1MaXN0XCJcblxuICAgIGhlYWRlci5hcHBlbmRDaGlsZCh0aXRsZSlcblxuICAgIHJldHVybiBoZWFkZXJcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGRQcm9qZWN0RWxlbWVudCgpe1xuICAgIGNvbnN0IGFkZFByb2plY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGFkZFByb2plY3REaXYuc2V0QXR0cmlidXRlKCdpZCcsICdhZGRQcm9qZWN0RGl2JylcblxuICAgIGNvbnN0IHByb2plY3ROYW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgcHJvamVjdE5hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpXG4gICAgcHJvamVjdE5hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Byb2plY3ROYW1lSW5wdXQnKVxuXG4gICAgY29uc3QgYWRkUHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgYWRkUHJvamVjdC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2FkZFByb2plY3QnKVxuICAgIGFkZFByb2plY3QudGV4dENvbnRlbnQgPSAnQWRkJ1xuXG4gICAgY29uc3QgY2xvc2VBZGRQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICBjbG9zZUFkZFByb2plY3Quc2V0QXR0cmlidXRlKCdpZCcsICdjbG9zZUFkZFByb2plY3QnKVxuICAgIGNsb3NlQWRkUHJvamVjdC50ZXh0Q29udGVudCA9ICdDbG9zZSdcblxuXG5cbiAgICBhZGRQcm9qZWN0RGl2LmFwcGVuZENoaWxkKHByb2plY3ROYW1lSW5wdXQpXG4gICAgYWRkUHJvamVjdERpdi5hcHBlbmRDaGlsZChhZGRQcm9qZWN0KVxuICAgIGFkZFByb2plY3REaXYuYXBwZW5kQ2hpbGQoY2xvc2VBZGRQcm9qZWN0KVxuXG4gICAgcmV0dXJuIGFkZFByb2plY3REaXZcblxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNpZGViYXJFbGVtZW50KCkge1xuICAgIGNvbnN0IHNpZGVCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHNpZGVCYXIuc2V0QXR0cmlidXRlKCdpZCcsJ3NpZGViYXInKVxuXG4gICAgY29uc3QgZGl2RGVmYXVsdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgZGl2RGVmYXVsdC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2RpdkRlZmF1bHQnKVxuXG4gICAgY29uc3QgZGVmYXVsdEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJylcbiAgICBkZWZhdWx0SGVhZGVyLmNsYXNzTGlzdC5hZGQoJ3NpZGViYXItaGVhZGVyJylcbiAgICBkZWZhdWx0SGVhZGVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnZGVmYXVsdEhlYWRlcicpXG4gICAgZGVmYXVsdEhlYWRlci50ZXh0Q29udGVudCA9ICdEZWZhdWx0J1xuXG4gICAgY29uc3QgZGVmYXVsdFByb2plY3RzTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgZGVmYXVsdFByb2plY3RzTGlzdC5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWxpc3QnKVxuICAgIGRlZmF1bHRQcm9qZWN0c0xpc3Quc2V0QXR0cmlidXRlKCdpZCcsICdkZWZhdWx0UHJvamVjdHNMaXN0JylcbiAgICBcblxuICAgIGRpdkRlZmF1bHQuYXBwZW5kQ2hpbGQoZGVmYXVsdEhlYWRlcilcbiAgICBkaXZEZWZhdWx0LmFwcGVuZENoaWxkKGRlZmF1bHRQcm9qZWN0c0xpc3QpXG5cblxuICAgIGNvbnN0IGRpdlByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGRpdlByb2plY3Quc2V0QXR0cmlidXRlKCdpZCcsICdkaXZQcm9qZWN0JylcblxuICAgIGNvbnN0IHByb2plY3RIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpXG4gICAgcHJvamVjdEhlYWRlci5jbGFzc0xpc3QuYWRkKCdzaWRlYmFyLWhlYWRlcicpXG4gICAgcHJvamVjdEhlYWRlci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Byb2plY3RIZWFkZXInKVxuICAgIHByb2plY3RIZWFkZXIudGV4dENvbnRlbnQgPSAnUHJvamVjdCdcblxuICAgIGNvbnN0IG9wZW5BZGRQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICBvcGVuQWRkUHJvamVjdC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ29wZW5BZGRQcm9qZWN0JylcbiAgICBvcGVuQWRkUHJvamVjdC50ZXh0Q29udGVudCA9ICdBZGQgTmV3IFByb2plY3QnXG5cbiAgICBjb25zdCB1c2VyUHJvamVjdHNMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICB1c2VyUHJvamVjdHNMaXN0LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtbGlzdCcpXG4gICAgdXNlclByb2plY3RzTGlzdC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3VzZXJQcm9qZWN0c0xpc3QnKVxuXG4gICAgZGl2UHJvamVjdC5hcHBlbmRDaGlsZChwcm9qZWN0SGVhZGVyKVxuICAgIGRpdlByb2plY3QuYXBwZW5kQ2hpbGQob3BlbkFkZFByb2plY3QpXG4gICAgZGl2UHJvamVjdC5hcHBlbmRDaGlsZCh1c2VyUHJvamVjdHNMaXN0KVxuXG4gICAgc2lkZUJhci5hcHBlbmRDaGlsZChkaXZEZWZhdWx0KVxuICAgIHNpZGVCYXIuYXBwZW5kQ2hpbGQoZGl2UHJvamVjdClcblxuXG4gICAgcmV0dXJuIHNpZGVCYXJcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGRpbmdOZXdUYXNrRWxlbWVudCgpe1xuXG4gICAgY29uc3QgbmV3VGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgbmV3VGFzay5zZXRBdHRyaWJ1dGUoJ2lkJywgJ25ld1Rhc2snKVxuICAgIFxuICAgIGNvbnN0IG9wZW5Nb2RhbEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgb3Blbk1vZGFsQnRuLnNldEF0dHJpYnV0ZSgnaWQnLCAnb3BlbkFkZFRhc2tNb2RhbCcpXG4gICAgb3Blbk1vZGFsQnRuLnRleHRDb250ZW50ID0gXCJBZGQgTmV3IFRhc2tcIlxuXG4gICAgY29uc3QgZGl2TW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGRpdk1vZGFsLnNldEF0dHJpYnV0ZSgnaWQnLCAnZGl2TW9kYWwnKVxuICAgIGRpdk1vZGFsLmNsYXNzTGlzdC5hZGQoJ21vZGFsJylcblxuICAgIGNvbnN0IGNsb3NlTW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcbiAgICBjbG9zZU1vZGFsLmNsYXNzTGlzdC5hZGQoJ2Nsb3NlJylcbiAgICBjbG9zZU1vZGFsLnRleHRDb250ZW50ID0gXCJcXHUyNzRDXCJcblxuICAgIGNvbnN0IGxhYmVsVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4gICAgbGFiZWxUaXRsZS50ZXh0Q29udGVudCA9IFwiVGl0bGU6IFwiXG5cbiAgICBjb25zdCB0aXRsZVRvZG9JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICB0aXRsZVRvZG9JbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpXG4gICAgdGl0bGVUb2RvSW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsICdhZGRUaXRsZScpXG5cbiAgICBjb25zdCBsYWJlbERlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4gICAgbGFiZWxEZXNjLnRleHRDb250ZW50ID0gJ0Rlc2NyaXB0aW9uOiAnXG5cbiAgICBjb25zdCBkZXNjVG9kb0lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgIGRlc2NUb2RvSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKVxuICAgIGRlc2NUb2RvSW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsICdhZGREZXNjJylcblxuICAgIGNvbnN0IGxhYmVsRHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICBsYWJlbER1ZURhdGUudGV4dENvbnRlbnQgPSAnRHVlIERhdGU6ICdcblxuICAgIGNvbnN0IGR1ZURhdGVUb2RvSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgZHVlRGF0ZVRvZG9JbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnZGF0ZScpXG4gICAgZHVlRGF0ZVRvZG9JbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2FkZER1ZURhdGUnKVxuICAgIGR1ZURhdGVUb2RvSW5wdXQuc2V0QXR0cmlidXRlKCd2YWx1ZScsIChuZXcgRGF0ZSgpKS50b0pTT04oKS5zbGljZSgwLCAxMCkpXG4gICAgZHVlRGF0ZVRvZG9JbnB1dC5zZXRBdHRyaWJ1dGUoJ21pbicsIChuZXcgRGF0ZSgpKS50b0pTT04oKS5zbGljZSgwLCAxMCkpXG5cbiAgICBjb25zdCBsYWJlbFByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgIGxhYmVsUHJpb3JpdHkudGV4dENvbnRlbnQgPSBcIlByaW9yaXR5OiBcIlxuXG4gICAgY29uc3QgcHJpb3JpdHlUb2RvSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgcHJpb3JpdHlUb2RvSW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsICdhZGRQcmlvcml0eScpXG4gICAgcHJpb3JpdHlUb2RvSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3JhbmdlJylcbiAgICBwcmlvcml0eVRvZG9JbnB1dC5zZXRBdHRyaWJ1dGUoJ21pbicsICcwJylcbiAgICBwcmlvcml0eVRvZG9JbnB1dC5zZXRBdHRyaWJ1dGUoJ21heCcsICcyJylcbiAgICBwcmlvcml0eVRvZG9JbnB1dC5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJzEnKVxuXG4gICAgY29uc3QgYnRuQWRkVGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgYnRuQWRkVGFzay5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2FkZFRhc2snKVxuICAgIGJ0bkFkZFRhc2sudGV4dENvbnRlbnQgPSBcIkFkZCBUYXNrXCJcblxuICAgIG9wZW5Nb2RhbEJ0bi5vbmNsaWNrID0gZnVuY3Rpb24oKXtcbiAgICAgICAgZGl2TW9kYWwuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIlxuICAgIH1cblxuICAgIGNsb3NlTW9kYWwub25jbGljayA9IGZ1bmN0aW9uKCl7XG4gICAgICAgIGRpdk1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIlxuICAgIH1cblxuICAgIHdpbmRvdy5vbmNsaWNrID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgaWYgKGV2ZW50LnRhcmdldCA9PSBkaXZNb2RhbCkge1xuICAgICAgICAgIGRpdk1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgfVxuICAgICAgfVxuXG5cbiAgICBkaXZNb2RhbC5hcHBlbmRDaGlsZChjbG9zZU1vZGFsKVxuICAgIGRpdk1vZGFsLmFwcGVuZENoaWxkKGxhYmVsVGl0bGUpXG4gICAgZGl2TW9kYWwuYXBwZW5kQ2hpbGQodGl0bGVUb2RvSW5wdXQpXG4gICAgZGl2TW9kYWwuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnInKSlcbiAgICBkaXZNb2RhbC5hcHBlbmRDaGlsZChsYWJlbERlc2MpXG4gICAgZGl2TW9kYWwuYXBwZW5kQ2hpbGQoZGVzY1RvZG9JbnB1dClcbiAgICBkaXZNb2RhbC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdicicpKVxuICAgIGRpdk1vZGFsLmFwcGVuZENoaWxkKGxhYmVsRHVlRGF0ZSlcbiAgICBkaXZNb2RhbC5hcHBlbmRDaGlsZChkdWVEYXRlVG9kb0lucHV0KVxuICAgIGRpdk1vZGFsLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2JyJykpXG4gICAgZGl2TW9kYWwuYXBwZW5kQ2hpbGQobGFiZWxQcmlvcml0eSlcbiAgICBkaXZNb2RhbC5hcHBlbmRDaGlsZChwcmlvcml0eVRvZG9JbnB1dClcbiAgICBkaXZNb2RhbC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdicicpKVxuICAgIGRpdk1vZGFsLmFwcGVuZENoaWxkKGJ0bkFkZFRhc2spXG5cbiAgICBuZXdUYXNrLmFwcGVuZENoaWxkKG9wZW5Nb2RhbEJ0bilcbiAgICBuZXdUYXNrLmFwcGVuZENoaWxkKGRpdk1vZGFsKVxuXG5cbiAgICByZXR1cm4gbmV3VGFza1xuICAgIFxufSAiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkaXNwbGF5VG9kb3NFbGVtZW50KCl7XG4gICAgY29uc3QgZGlzcGxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgZGlzcGxheS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2Rpc3BsYXknKVxuXG4gICAgcmV0dXJuIGRpc3BsYXlcbn0iLCJpbXBvcnQgYWRkaW5nTmV3VGFza0VsZW1lbnQgZnJvbSBcIi4vYWRkaW5nTmV3VGFza0VsZW1lbnRcIlxuaW1wb3J0IGRpc3BsYXlUb2Rvc0VsZW1lbnQgZnJvbSBcIi4vZGlzcGxheVRvZG9zRWxlbWVudFwiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHdvcmtBcmVhRWxlbWVudCgpe1xuICAgIGNvbnN0IHdvcmtBcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICB3b3JrQXJlYS5zZXRBdHRyaWJ1dGUoJ2lkJywnd29ya0FyZWEnKVxuXG4gICAgd29ya0FyZWEuYXBwZW5kQ2hpbGQoYWRkaW5nTmV3VGFza0VsZW1lbnQoKSlcbiAgICB3b3JrQXJlYS5hcHBlbmRDaGlsZChkaXNwbGF5VG9kb3NFbGVtZW50KCkpXG5cbiAgICByZXR1cm4gd29ya0FyZWFcblxufSIsImltcG9ydCB0b2RvQ2FyZCBmcm9tIFwiLi90b2RvQ2FyZFwiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRpc3BsYXlUb2RvcyAoYXJyVG9kb3MpIHtcbiAgICBjb25zdCB0b2RvTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgdG9kb0xpc3Quc2V0QXR0cmlidXRlKCdpZCcsJ3RvZG9MaXN0JylcblxuICAgIGFyclRvZG9zLmZvckVhY2godG9kbyA9PiB7XG4gICAgICAgIHRvZG9MaXN0LmFwcGVuZENoaWxkKHRvZG9DYXJkKHRvZG8pKVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRvZG9MaXN0XG59IiwiaW1wb3J0IHdvcmtBcmVhRWxlbWVudCBmcm9tIFwiLi9Xb3JrQXJlYS93b3JrQXJlYUVsZW1lbnRcIlxuaW1wb3J0IHNpZGViYXJFbGVtZW50IGZyb20gXCIuL1NpZGViYXIvc2lkZWJhckVsZW1lbnRcIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbml0aWFsTG9hZCAoKSB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29udGVudC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NvbnRlbnQnKVxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoc2lkZWJhckVsZW1lbnQoKSlcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHdvcmtBcmVhRWxlbWVudCgpKVxuXG4gICAgcmV0dXJuIGNvbnRlbnRcblxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvZG9DYXJkKHRvZG8pIHtcbiAgICBjb25zdCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjYXJkLmNsYXNzTGlzdC5hZGQoJ2NhcmQnKVxuICAgIGNhcmQuc2V0QXR0cmlidXRlKCdpZCcsIHRvZG8uZ2V0SWQoKSlcblxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2hlYWRlckNhcmQnKVxuXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9IHRvZG8uZ2V0VGl0bGUoKVxuXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKHRpdGxlKVxuICAgIGNhcmQuYXBwZW5kQ2hpbGQoaGVhZGVyKVxuXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29udGFpbmVyQ2FyZCcpXG5cbiAgICBjb25zdCBkZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgZGVzYy50ZXh0Q29udGVudCA9IHRvZG8uZ2V0RGVzY3JpcHRpb24oKVxuXG4gICAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIGR1ZURhdGUudGV4dENvbnRlbnQgPSB0b2RvLmdldER1ZURhdGUoKVxuXG4gICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBsZXQgcHJpb3JpdFRleHQgPSAnJ1xuICAgIGlmKHRvZG8uZ2V0UHJpb3JpdHkoKSA9PT0gMCl7XG4gICAgICAgIHByaW9yaXRUZXh0ID0gJ0xvdydcbiAgICB9XG4gICAgZWxzZSBpZih0b2RvLmdldFByaW9yaXR5KCkgPT09IDEpe1xuICAgICAgICBwcmlvcml0VGV4dCA9ICdNZWRpdW0nXG4gICAgfVxuICAgIGVsc2V7XG4gICAgICAgIHByaW9yaXRUZXh0ID0gJ0hpZ2gnXG4gICAgfVxuICAgIHByaW9yaXR5LnRleHRDb250ZW50ID0gcHJpb3JpdFRleHRcblxuICAgIGNvbnN0IGRlbGV0ZVRvZG9CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIGRlbGV0ZVRvZG9CdG4uY2xhc3NMaXN0LmFkZCgncmVtb3ZlVG9kbycpXG4gICAgZGVsZXRlVG9kb0J0bi5kYXRhc2V0LmlkID0gdG9kby5nZXRJZCgpXG4gICAgZGVsZXRlVG9kb0J0bi50ZXh0Q29udGVudCA9ICdSZW1vdmUnXG5cbiAgICBjb25zdCBjb21wbGV0ZVRvZG9CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIGNvbXBsZXRlVG9kb0J0bi5jbGFzc0xpc3QuYWRkKCdkb25lVGFzaycpXG4gICAgY29tcGxldGVUb2RvQnRuLmRhdGFzZXQuaWQgPSB0b2RvLmdldElkKClcbiAgICBjb21wbGV0ZVRvZG9CdG4udGV4dENvbnRlbnQgPSBcIlRhc2sgZG9uZVwiXG5cblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChkZXNjKVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChkdWVEYXRlKVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChwcmlvcml0eSlcbiAgICBjYXJkLmFwcGVuZENoaWxkKGNvbnRhaW5lcilcbiAgICBjYXJkLmFwcGVuZENoaWxkKGRlbGV0ZVRvZG9CdG4pXG4gICAgY2FyZC5hcHBlbmRDaGlsZChjb21wbGV0ZVRvZG9CdG4pXG5cblxuICAgIHJldHVybiBjYXJkXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBpbml0aWFsTG9hZCBmcm9tIFwiLi9pbml0aWFsTG9hZFwiXG5pbXBvcnQgZGlzcGxheVRvZG9zIGZyb20gXCIuL2Rpc3BsYXlUb2Rvc1wiXG5pbXBvcnQgdG9kb0NhcmQgZnJvbSBcIi4vdG9kb0NhcmRcIlxuaW1wb3J0ICcuL3N0eWxlLmNzcydcbmltcG9ydCBhZGRQcm9qZWN0RWxlbWVudCBmcm9tIFwiLi9TaWRlYmFyL2FkZFByb2plY3RFbGVtZW50XCJcbmltcG9ydCBoZWFkZXIgZnJvbSBcIi4vSGVhZGVyL2hlYWRlckVsZW1lbnRcIlxuXG4vL09iamVjdCBvZiBpbmRpdmlkdWFsIHRvZG9zXG5jb25zdCBUb0RvcyA9ICgpPT57XG4gICAgbGV0IHRpdGxlPVwiTm8gdGl0bGVcIlxuICAgIGxldCBkZXNjcmlwdGlvbj1cIlwiXG4gICAgbGV0IGR1ZURhdGU9IChuZXcgRGF0ZSgpKS50b0pTT04oKS5zbGljZSgwLCAxMClcbiAgICBsZXQgcHJpb3JpdHk9MFxuICAgIGxldCBpZCA9IDBcbiAgICBsZXQgc3RhdHVzID0gZmFsc2VcblxuICAgIGNvbnN0IHNldFRpdGxlID0gbmV3VGl0bGUgPT4gdGl0bGUgPSBuZXdUaXRsZVxuICAgIGNvbnN0IHNldERlc2NyaXB0aW9uID0gbmV3RGVzY3JpcHRpb24gPT4gZGVzY3JpcHRpb24gPSBuZXdEZXNjcmlwdGlvblxuICAgIGNvbnN0IHNldER1ZURhdGUgPSBuZXdEdWVEYXRlID0+IGR1ZURhdGUgPSBuZXdEdWVEYXRlXG4gICAgY29uc3Qgc2V0UHJpb3JpdHkgPSBuZXdQcmlvcnR5ID0+IHByaW9yaXR5ID0gbmV3UHJpb3J0eVxuICAgIGNvbnN0IHNldElkID0gbmV3SWQgPT4gaWQgPSBuZXdJZFxuICAgIGNvbnN0IHNldFN0YXR1cyA9IG5ld1N0YXR1cyA9PiBzdGF0dXMgPSBuZXdTdGF0dXNcblxuICAgIGNvbnN0IGdldFRpdGxlID0gKCkgPT4gdGl0bGVcbiAgICBjb25zdCBnZXREZXNjcmlwdGlvbiA9ICgpID0+IGRlc2NyaXB0aW9uXG4gICAgY29uc3QgZ2V0RHVlRGF0ZSA9ICgpID0+IGR1ZURhdGVcbiAgICBjb25zdCBnZXRQcmlvcml0eSA9ICgpID0+IHByaW9yaXR5XG4gICAgY29uc3QgZ2V0SWQgPSAoKSA9PiBpZFxuICAgIGNvbnN0IGdldFN0YXR1cyA9ICgpID0+IHN0YXR1c1xuXG4gICAgcmV0dXJuIHtzZXRUaXRsZSwgc2V0RGVzY3JpcHRpb24sIHNldER1ZURhdGUsIHNldFByaW9yaXR5LCBzZXRJZCxnZXRUaXRsZSwgc2V0U3RhdHVzLCBnZXREZXNjcmlwdGlvbiwgZ2V0RHVlRGF0ZSwgZ2V0UHJpb3JpdHksIGdldElkLCBnZXRTdGF0dXN9XG5cbn1cblxuLy9Db2xsZWN0aW9uIG9mIFRvZG9zXG5jb25zdCBjb2xsZWN0aW9uVG9kb3MgPSAobmFtZSwgbGlzdElkKSA9PntcbiAgICBsZXQgYXJyVG9kb3MgPSBbXVxuICAgIGNvbnN0IGFkZFRvRG9zID0gbmV3VG9kbyA9PiBhcnJUb2Rvcy5wdXNoKG5ld1RvZG8pXG5cbiAgICBjb25zdCBnZXROYW1lID0oKSA9PiBuYW1lXG5cbiAgICBjb25zdCBnZXRMaXN0SWQgPSAoKSAgPT4gbGlzdElkXG5cbiAgICBjb25zdCBkZWxldGVUb2RvcyA9IChpZCkgPT4ge1xuXG4gICAgICAgIGZvcihsZXQgaT0wOyBpPGFyclRvZG9zLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgIGlmKGFyclRvZG9zW2ldLmdldElkKCkgPT09IGlkKXtcbiAgICAgICAgICAgICAgICBhcnJUb2Rvcy5zcGxpY2UoaSwxKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9IFxuXG4gICAgY29uc3QgY2hhbmdlU3RhdHVzID0gKGlkKSA9PntcbiAgICAgICAgYXJyVG9kb3MuZm9yRWFjaCgodG9kbykgPT57XG4gICAgICAgICAgICBpZih0b2RvLmdldElkKCkgPT09IGlkKXtcbiAgICAgICAgICAgICAgICB0b2RvLnNldFN0YXR1cyghKHRvZG8uZ2V0U3RhdHVzKCkpKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgfVxuXG4gICAgY29uc3QgZ2V0TGVuZ3RoID0gKCkgPT4gIGFyclRvZG9zLmxlbmd0aFxuXG4gICAgcmV0dXJue2FyclRvZG9zLCBhZGRUb0RvcywgZGVsZXRlVG9kb3MsIGdldExlbmd0aCwgY2hhbmdlU3RhdHVzLCBnZXROYW1lLCBnZXRMaXN0SWR9XG59XG5cbmNvbnN0IHRvZG9MaXN0ID0gY29sbGVjdGlvblRvZG9zKCdUb2RheScsIDEpXG5jb25zdCB0b2RvTGlzdDEgPSBjb2xsZWN0aW9uVG9kb3MoJ1RvbW9ycm93JywgMilcblxuY29uc3QgZG9IdyA9IFRvRG9zKClcbmRvSHcuc2V0VGl0bGUoJ2RvIEhvbWV3b3JrJylcbmRvSHcuc2V0RGVzY3JpcHRpb24oJ2NvbGxlZ2UgaG9tZXdvcmsnKVxuZG9Idy5zZXRQcmlvcml0eSgwKVxuZG9Idy5zZXRJZCgxKVxuXG5jb25zdCBleGNlcmNpc2UgPSBUb0RvcygpXG5leGNlcmNpc2Uuc2V0VGl0bGUoJ2V4Y2VyY2lzZScpXG5leGNlcmNpc2Uuc2V0RGVzY3JpcHRpb24oJ2RvIGV4Y2VyY2lzZSBpbiBldmVuaW5nJylcbmV4Y2VyY2lzZS5zZXRQcmlvcml0eSgyKVxuZXhjZXJjaXNlLnNldElkKDIpXG5cbmNvbnN0IGNwID0gVG9Eb3MoKVxuY3Auc2V0VGl0bGUoJ0NvbXBldGl0dmUgUHJvZ3JhbW1pbmcnKVxuY3Auc2V0RGVzY3JpcHRpb24oJ29wZW4gbGVldGNvZGUgYW5kIGNvZGVjaGVmJylcbmNwLnNldElkKDEpXG5cbnRvZG9MaXN0LmFkZFRvRG9zKGRvSHcpXG50b2RvTGlzdC5hZGRUb0RvcyhleGNlcmNpc2UpXG5cbnRvZG9MaXN0MS5hZGRUb0RvcyhjcClcblxuXG5sZXQgYWxsUHJvamVjdHNMaXN0ID0gW11cblxuYWxsUHJvamVjdHNMaXN0LnB1c2godG9kb0xpc3QpXG5hbGxQcm9qZWN0c0xpc3QucHVzaCh0b2RvTGlzdDEpXG5cblxuXG5mdW5jdGlvbiBjbGVhckVsZW1lbnRDb250ZW50KGVsZW1lbnRJRCkge1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGVsZW1lbnRJRCk7XG4gICAgICBcbiAgICB3aGlsZShkaXYuZmlyc3RDaGlsZCkge1xuICAgICAgICBkaXYucmVtb3ZlQ2hpbGQoZGl2LmZpcnN0Q2hpbGQpO1xuICAgIH1cbn1cblxubGV0IHNlbGVjdGVkUHJvamVjdElkID0gYWxsUHJvamVjdHNMaXN0WzBdLmdldExpc3RJZCgpXG5cbmNvbnN0IGhhbmRsZUFkZE5ld1Rhc2sgPSAoZSkgPT57XG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkVGl0bGUnKS52YWx1ZVxuICAgIGNvbnN0IGRlc2MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkRGVzYycpLnZhbHVlXG4gICAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGREdWVEYXRlJykudmFsdWVcbiAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGRQcmlvcml0eScpLnZhbHVlXG4gICAgXG5cbiAgICBjb25zdCBuZXdUb2RvID0gVG9Eb3MoKVxuICAgIG5ld1RvZG8uc2V0VGl0bGUodGl0bGUpXG4gICAgbmV3VG9kby5zZXREZXNjcmlwdGlvbihkZXNjKVxuICAgIG5ld1RvZG8uc2V0RHVlRGF0ZShkdWVEYXRlKVxuICAgIG5ld1RvZG8uc2V0UHJpb3JpdHkocHJpb3JpdHkpXG4gICAgXG4gICAgXG4gICAgYWxsUHJvamVjdHNMaXN0LmZvckVhY2gocHJvamVjdD0+e1xuICAgICAgICBpZihwcm9qZWN0LmdldExpc3RJZCgpID09PSBzZWxlY3RlZFByb2plY3RJZCl7XG4gICAgICAgICAgICBuZXdUb2RvLnNldElkKHByb2plY3QuZ2V0TGVuZ3RoKCkrMSlcbiAgICAgICAgICAgIHByb2plY3QuYWRkVG9Eb3MobmV3VG9kbylcbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICBjb25zdCB0b2RvQWRkRWxlbWVudCA9dG9kb0NhcmQobmV3VG9kbylcbiAgICBcbiAgICB0b2RvQWRkRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcucmVtb3ZlVG9kbycpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlRGVsZXRlVGFzaylcbiAgICB0b2RvQWRkRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuZG9uZVRhc2snKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhZG5sZVN0YXR1c0NoYW5nZSlcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kb0xpc3QnKS5hcHBlbmRDaGlsZCh0b2RvQWRkRWxlbWVudClcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGRUaXRsZScpLnZhbHVlID0gJydcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkRGVzYycpLnZhbHVlID0gJydcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkRHVlRGF0ZScpLnZhbHVlID0gKG5ldyBEYXRlKCkpLnRvSlNPTigpLnNsaWNlKDAsIDEwKVxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGRQcmlvcml0eScpLnZhbHVlID0gMSAgICBcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Rpdk1vZGFsXCIpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbn1cblxuY29uc3QgaGFuZGxlRGVsZXRlVGFzayA9IChlKSA9PntcbiAgICBjb25zdCB0YXNrSWQgPSBwYXJzZUludChlLnRhcmdldC5kYXRhc2V0LmlkKVxuXG4gICAgYWxsUHJvamVjdHNMaXN0LmZvckVhY2gocHJvamVjdCA9PntcbiAgICAgICAgaWYocHJvamVjdC5nZXRMaXN0SWQoKSA9PT0gc2VsZWN0ZWRQcm9qZWN0SWQpe1xuICAgICAgICAgICAgcHJvamVjdC5kZWxldGVUb2Rvcyh0YXNrSWQpXG5cbiAgICAgICAgfVxuICAgIH0pXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7dGFza0lkfWApLnJlbW92ZSgpXG59XG5cbmNvbnN0IGhhZG5sZVN0YXR1c0NoYW5nZSA9IChlKSA9PntcblxuICAgIGNvbnN0IHRhc2tJZCA9IHBhcnNlSW50KGUudGFyZ2V0LmRhdGFzZXQuaWQpXG4gICAgYWxsUHJvamVjdHNMaXN0LmZvckVhY2gocHJvamVjdCA9PntcbiAgICAgICAgaWYocHJvamVjdC5nZXRMaXN0SWQoKSA9PT0gc2VsZWN0ZWRQcm9qZWN0SWQpe1xuICAgICAgICAgICAgcHJvamVjdC5jaGFuZ2VTdGF0dXModGFza0lkKVxuICAgICAgICB9XG4gICAgfSlcblxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke3Rhc2tJZH1gKS5jbGFzc0xpc3QudG9nZ2xlKCdkb25lJylcblxufVxuXG5jb25zdCBoYW5kbGVQcm9qZWN0QnRuID0gKGUpPT57XG4gICAgc2VsZWN0ZWRQcm9qZWN0SWQgPSAgcGFyc2VJbnQoZS50YXJnZXQuaWQuc2xpY2UoNykpXG4gICAgY2xlYXJFbGVtZW50Q29udGVudCgnZGlzcGxheScpXG4gICAgY29uc3QgcHJvamVjdFRvU2hvdyA9IGFsbFByb2plY3RzTGlzdC5maW5kKHByb2plY3QgPT4gcHJvamVjdC5nZXRMaXN0SWQoKSA9PT0gc2VsZWN0ZWRQcm9qZWN0SWQpXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rpc3BsYXknKS5hcHBlbmRDaGlsZChkaXNwbGF5VG9kb3MocHJvamVjdFRvU2hvdy5hcnJUb2RvcykpXG5cbiAgICBkaXNwbGF5TG9hZGVyLmFkZFJlbW92ZUV2ZW50TGlzdGVuZXJzKClcbn1cblxuXG5jb25zdCBoYW5kbGVQcm9qZWN0UmVtb3ZlQnRuID0gKGUpID0+e1xuICAgIGNvbnN0IHByb2plY3RJZCA9IHBhcnNlSW50KGUudGFyZ2V0LmlkLnNsaWNlKDEzKSlcblxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBwcm9qZWN0TGlzdEl0ZW0ke3Byb2plY3RJZH1gKS5yZW1vdmUoKVxuXG4gICAgZm9yKGxldCBpPTA7IGk8YWxsUHJvamVjdHNMaXN0Lmxlbmd0aDsgaSsrKXtcbiAgICAgICAgaWYoYWxsUHJvamVjdHNMaXN0W2ldLmdldExpc3RJZCgpID09PSBwcm9qZWN0SWQpe1xuICAgICAgICAgICAgYWxsUHJvamVjdHNMaXN0LnNwbGljZShpLDEpXG4gICAgICAgIH1cbiAgICB9XG5cbn1cblxuY29uc3QgaGFuZGxlT3BlbkFkZFByb2plY3QgPSAoZSk9PntcbiAgICAvL2FkZCAnYWRkUHJvamVjdEVMZW1lbnQnIHRvICNkaXZQcm9qZWN0XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RpdlByb2plY3QnKS5hcHBlbmRDaGlsZChhZGRQcm9qZWN0RWxlbWVudCgpKVxuICAgIGUudGFyZ2V0LmRpc2FibGVkID0gdHJ1ZVxuXG4gICAgLy90aGUgY2xvc2VhZGRwcm9qZWN0IGlzIG5vdCBwcmVzZW50IGluIHRoZSBkb20gYXMgd2UgYWRkIGl0IGFmdGVyIGNsaWNraW5nIHRoZSBidXR0b25cbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2xvc2VBZGRQcm9qZWN0JykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpPT57XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRQcm9qZWN0RGl2JykucmVtb3ZlKClcbiAgICAgICAgZS50YXJnZXQuZGlzYWJsZWQgPSBmYWxzZVxuICAgIH0pXG5cbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkUHJvamVjdCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KT0+e1xuICAgICAgICBlLnRhcmdldC5kaXNhYmxlZCA9IGZhbHNlXG4gICAgICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdE5hbWVJbnB1dCcpLnZhbHVlID09PSBcIlwiID8gXCJQcm9qZWN0XCIgOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdE5hbWVJbnB1dCcpLnZhbHVlXG4gICAgICAgIGNvbnN0IG5ld1RvZG9MaXN0ID0gY29sbGVjdGlvblRvZG9zKG5hbWUsIGFsbFByb2plY3RzTGlzdC5sZW5ndGgrMSlcbiAgICAgICAgYWxsUHJvamVjdHNMaXN0LnB1c2gobmV3VG9kb0xpc3QpXG5cbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZFByb2plY3REaXYnKS5yZW1vdmUoKVxuXG4gICAgICAgIGNvbnN0IHByb2plY3RMaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIHByb2plY3RMaXN0SXRlbS5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0TGlzdEl0ZW0nKVxuICAgICAgICBwcm9qZWN0TGlzdEl0ZW0uc2V0QXR0cmlidXRlKCdpZCcsIGBwcm9qZWN0TGlzdEl0ZW0ke2FsbFByb2plY3RzTGlzdC5sZW5ndGh9YClcblxuICAgICAgICBjb25zdCBuZXdQcm9qZWN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICAgICAgbmV3UHJvamVjdEJ0bi50ZXh0Q29udGVudCA9IG5ld1RvZG9MaXN0LmdldE5hbWUoKVxuICAgICAgICBuZXdQcm9qZWN0QnRuLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QnKVxuICAgICAgICBuZXdQcm9qZWN0QnRuLnNldEF0dHJpYnV0ZSgnaWQnLCBgcHJvamVjdCR7YWxsUHJvamVjdHNMaXN0Lmxlbmd0aH1gKVxuICAgICAgICBuZXdQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxoYW5kbGVQcm9qZWN0QnRuKVxuXG4gICAgICAgIGNvbnN0IHJlbW92ZVByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgICAgICByZW1vdmVQcm9qZWN0LnRleHRDb250ZW50ID0gJ1gnXG4gICAgICAgIHJlbW92ZVByb2plY3QuY2xhc3NMaXN0LmFkZCgncmVtb3ZlLXByb2plY3QnKVxuICAgICAgICByZW1vdmVQcm9qZWN0LnNldEF0dHJpYnV0ZSgnaWQnLCBgcmVtb3ZlUHJvamVjdCR7YWxsUHJvamVjdHNMaXN0Lmxlbmd0aH1gKVxuICAgICAgICByZW1vdmVQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlUHJvamVjdFJlbW92ZUJ0bilcblxuICAgICAgICBwcm9qZWN0TGlzdEl0ZW0uYXBwZW5kQ2hpbGQobmV3UHJvamVjdEJ0bilcbiAgICAgICAgcHJvamVjdExpc3RJdGVtLmFwcGVuZENoaWxkKHJlbW92ZVByb2plY3QpXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1c2VyUHJvamVjdHNMaXN0JykuYXBwZW5kQ2hpbGQocHJvamVjdExpc3RJdGVtKVxuICAgIH0pXG5cbn1cblxuXG5jb25zdCBkaXNwbGF5TG9hZGVyID0gKCgpPT57XG5cbiAgICBjb25zdCBwYWdlTG9hZCA9ICgpPT57XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtYWluJykuYXBwZW5kQ2hpbGQoaGVhZGVyKCkpXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtYWluJykuYXBwZW5kQ2hpbGQoaW5pdGlhbExvYWQoKSlcbiAgICB9XG5cbiAgICBjb25zdCB0b2RvRGlzcGxheSA9ICgpPT57XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkaXNwbGF5JykuYXBwZW5kQ2hpbGQoZGlzcGxheVRvZG9zKGFsbFByb2plY3RzTGlzdFswXS5hcnJUb2RvcykpXG4gICAgfSBcblxuICAgIGNvbnN0IGFkZFJlbW92ZUV2ZW50TGlzdGVuZXJzID0gKCkgPT57XG4gICAgICAgIGNvbnN0IHJlbW92ZUJ0bnMgPSBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnJlbW92ZVRvZG8nKV1cblxuICAgICAgICByZW1vdmVCdG5zLmZvckVhY2goKHJlbW92ZUJ0bik9PntcbiAgICAgICAgICAgIHJlbW92ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZURlbGV0ZVRhc2spXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgY29uc3QgYWRkVGFza0V2ZW50TGlzdGVuZXIgPSAoKSA9PntcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZFRhc2snKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsaGFuZGxlQWRkTmV3VGFzaylcbiAgICB9XG5cbiAgICBjb25zdCBhZGREZWZhdWx0UHJvamVjdHMgPSAoKSA9PntcbiAgICAgICAgYWxsUHJvamVjdHNMaXN0LmZvckVhY2gocHJvamVjdCA9PntcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RMaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgICAgICBwcm9qZWN0TGlzdEl0ZW0uY2xhc3NMaXN0LmFkZCgncHJvamVjdExpc3RJdGVtJylcbiAgICBcbiAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgICAgICAgICAgaXRlbS50ZXh0Q29udGVudCA9IHByb2plY3QuZ2V0TmFtZSgpXG4gICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QnKVxuICAgICAgICAgICAgaXRlbS5zZXRBdHRyaWJ1dGUoJ2lkJywgYHByb2plY3Qke3Byb2plY3QuZ2V0TGlzdElkKCl9YClcblxuICAgICAgICAgICAgcHJvamVjdExpc3RJdGVtLmFwcGVuZENoaWxkKGl0ZW0pXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVmYXVsdFByb2plY3RzTGlzdCcpLmFwcGVuZENoaWxkKHByb2plY3RMaXN0SXRlbSlcbiAgICAgICAgfSlcbiAgICB9XG5cblxuICAgIHJldHVybiB7cGFnZUxvYWQsIHRvZG9EaXNwbGF5LGFkZFRhc2tFdmVudExpc3RlbmVyICxhZGRSZW1vdmVFdmVudExpc3RlbmVycywgYWRkRGVmYXVsdFByb2plY3RzfVxuXG59KSgpXG5cbmRpc3BsYXlMb2FkZXIucGFnZUxvYWQoKVxuZGlzcGxheUxvYWRlci50b2RvRGlzcGxheSgpXG5kaXNwbGF5TG9hZGVyLmFkZFRhc2tFdmVudExpc3RlbmVyKClcbmRpc3BsYXlMb2FkZXIuYWRkUmVtb3ZlRXZlbnRMaXN0ZW5lcnMoKVxuZGlzcGxheUxvYWRlci5hZGREZWZhdWx0UHJvamVjdHMoKVxuXG5jb25zdCBkb25lVGFza0J0bnMgPSBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRvbmVUYXNrJyldXG5cbmRvbmVUYXNrQnRucy5mb3JFYWNoKChkb25lVGFza0J0bikgPT57XG4gICAgZG9uZVRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYWRubGVTdGF0dXNDaGFuZ2UpXG59KVxuXG5cbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvcGVuQWRkUHJvamVjdCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlT3BlbkFkZFByb2plY3QpXG5cbmNvbnN0IHByb2plY3RCdG5zID0gWy4uLmRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3Byb2plY3QnKV1cbnByb2plY3RCdG5zLmZvckVhY2gocHJvamVjdEJ0biA9PntcbiAgICBwcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlUHJvamVjdEJ0bilcbn0pXG5cblxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=