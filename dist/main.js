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
___CSS_LOADER_EXPORT___.push([module.id, "/* .title{\n    height: 50px;\n    margin: 0px;\n    padding: 0px;\n    background-color: bisque;\n    text-align: center;\n}\n\n\n\n#workArea{\n    background-color: rgb(147, 172, 172);\n    height: 750px;\n    margin-left: 150px;\n\n    \n}\n\nbody{\n    margin: 0px;\n    height: 800px;\n    font-family: \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif;\n}\np{\n    margin: 0px;\n    padding: 5px;\n    font-size: x-large;\n}\n\n#newTask{\n    text-align: center;\n    height: 100px;\n    background-color: rgb(218, 174, 110);\n\n}\n\n#addTask{\n    margin-top: 30px;\n}\n\n#display{\n    background-color: aquamarine;\n    height: 650px; \n}*/\n\n*{\n  margin: 0px;\n  padding: 0px;\n}\n\n.title{\nbackground: rgb(2,0,36);\nbackground: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(44,44,60,1) 0%, rgba(10,25,13,1) 100%, rgba(82,143,186,1) 100%, rgba(3,178,157,1) 100%, rgba(0,255,229,1) 100%);\nheight: 75px;\ncolor: #f3e9e9;\nfont-family: 'Varela Round', sans-serif;\nfont-size: 40px;\nfont-weight:normal;\n\n}\n\n.title p{\n  padding-left: 30px;\n  padding-top: 10px;\n}\n\n#content{\n  display: flex;\n}\n\n\n\n\n#sidebar{\n  text-align: center;\n  position: fixed;\n  width: 200px;\n  height: 100%;\n  color: #f3e9e9;\nfont-family: 'Varela Round', sans-serif;\n/* background: #0D2631; */\nbackground: #2E2E3E;\nbackground: -webkit-linear-gradient(right, #2E2E3E, #1B2027);\nbackground: -moz-linear-gradient(right, #2E2E3E, #1B2027);\nbackground: linear-gradient(to left, #2E2E3E, #1B2027);\n}\n\n#workArea{\n  margin-left: 200px;\n  width: 100%;\n}\n\n.projectListItem{\n  width: 90%;\n  text-align: left;\n  background: #aaaaaa;\n  margin: 10px;\n  border-radius: 10px;\n  transition: box-shadow .3s;\n  cursor: pointer;\n}\n.projectListItem:hover {\nbox-shadow: 0 0 10px  #eeeeee;\n}\n\n\n.project{\n  color: #412b2b;\n  border: none;\n  background: none;\n  height: 40px;\n  font-size: large;\n  padding-left: 10px;\n}\n\n.remove-project{\n  border: none;\n  background:#a89191;\n  height: 30px;\n  width: 30px;\n  font-size: larger;\n  color: #c85000;\n  position: relative;\n  float: right;\n  margin-right: 10px;\n  margin-top: 4px;\n  \n}\n\n#openAddProject, #openAddTaskModal {\n  background: #FF4742;\n  border: 1px solid #FF4742;\n  border-radius: 6px;\n  box-shadow: rgba(0, 0, 0, 0.1) 1px 2px 4px;\n  box-sizing: border-box;\n  color: #FFFFFF;\n  cursor: pointer;\n  display: inline-block;\n  font-family: nunito,roboto,proxima-nova,\"proxima nova\",sans-serif;\n  font-size: 16px;\n  font-weight: 800;\n  line-height: 16px;\n  min-height: 40px;\n  outline: 0;\n  padding: 12px 14px;\n  text-align: center;\n  text-rendering: geometricprecision;\n  text-transform: none;\n  user-select: none;\n  -webkit-user-select: none;\n  touch-action: manipulation;\n  vertical-align: middle;\n}\n\n#openAddProject:hover,\n#openAddProject:active {\n  background-color: #FFFFFF;\n  background-position: 0 0;\n  color: #FF4742;\n}\n\n#openAddProject:active {\n  opacity: .5;\n}\n#openAddTaskModal {\n  margin: 30px;\n}\n\n#openAddTaskModal:hover, #openAddTaskModal:active{\n  background-color:initial;\n  background-position: 0 0;\n  color: #FF4742;\n}\n\n#openAddTaskModal:active{\n  opacity: .5;\n}\n\n\n\n#addProjectDiv{\n  height: 200px;\n  width: 100%;\n  margin-top: 10px;\n  margin-bottom: 5px;\n}\n\n#addProjectDiv input[type=text]{\n  border: none;\n  border-radius: 4px;\n  background-color: #5bf1ddc2;\n  color: rgb(49, 36, 36);\n  width: 70%;\n  height: 25px;\n  padding-left: 3px;\n  margin-bottom: 2px;\n  font-size: large;\n}\n\n#addProject{\n  width: 40%;\n  height: 25px;\n  border: none;\n  border-radius: 4px;\n  background-color: #7abe21c2;\n  color: #FFFFFF;\n  font-size: large;\n}\n\n#closeAddProject{\n  width: 30%;\n  border: none;\n  border-radius: 4px;\n  background-color: #7abe21c2;\n  color: #FFFFFF;\n  height: 25px;\n  margin: 3px;\n  font-size: large;\n}\n\n#newTask{\n  text-align: center;\n}\n\n\n.modal {\n  border-radius: 10px;\n display: none; /* Hidden by default */\n position: absolute; /* Stay in place */\n z-index: 1; \n left: 40%;\n top: 30%;\n padding-top:10px;\n padding-left: 10px;\n padding-right: 5px;\n width: 500px; /* Full width */\n height: 300px; /* Full height */\n overflow: auto; \ncolor: #1fe4f5;\nbox-shadow: 0 0 1px 2000px rgba(0, 0, 0, 0.3);\n\nbackground: rgb(255,175,75);\nbackground: -moz-radial-gradient(center, ellipse cover,  rgba(255,175,75,1) 0%, rgba(255,146,10,1) 100%);\nbackground: -webkit-radial-gradient(center, ellipse cover,  rgba(255,175,75,1) 0%,rgba(255,146,10,1) 100%);\nbackground: radial-gradient(ellipse at center,  rgba(255,175,75,1) 0%,rgba(255,146,10,1) 100%);\nfilter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffaf4b', endColorstr='#ff920a',GradientType=1 );\n\n\n \n}\n\n\n\n.close {\n color: #aaaaaa;\n float: right;\n font-size: 28px;\n font-weight: bold;\n width: 100%;\n text-align: right;\n}\n\n.close:hover,\n.close:focus {\n color: #000;\n text-decoration: none;\n cursor: pointer;\n}\n\n.modal label{\n  font-size: larger;\n  color: #291b1b;\n  margin: 4px;\n  margin-top: 10px;\n\n}\n\n.modal input[type=text]{\n  border: none;\n  border-radius: 4px;\n  height: 25px;\n  width: 300px;\n  margin-top: 10px;\n  font-size: large;\n  padding-left: 5px;\n\n}\n\n.modal input[type=date], .modal input[type=range]{\n  border: none;\n  border-radius: 4px;\n  margin-top: 20px;\n} \n\n#addTask {\n  margin-top: 20px;\n  align-items: center;\n  background-color: #FFFFFF;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  border-radius: .25rem;\n  box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;\n  box-sizing: border-box;\n  color: rgba(0, 0, 0, 0.85);\n  cursor: pointer;\n  display: inline-flex;\n  font-family: system-ui,-apple-system,system-ui,\"Helvetica Neue\",Helvetica,Arial,sans-serif;\n  font-size: 16px;\n  font-weight: 600;\n  justify-content: center;\n  line-height: 1.25;\n  min-height: 3rem;\n  padding: calc(.875rem - 1px) calc(1.5rem - 1px);\n  position: relative;\n  text-decoration: none;\n  transition: all 250ms;\n  user-select: none;\n  -webkit-user-select: none;\n  touch-action: manipulation;\n  vertical-align: baseline;\n  width: auto;\n}\n\n#addTask:hover,\n#addTask:focus {\n  border-color: rgba(0, 0, 0, 0.15);\n  box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;\n  color: rgba(0, 0, 0, 0.65);\n}\n\n#addTask:hover {\n  transform: translateY(-1px);\n}\n\n#addTask:active {\n  background-color: #F0F0F1;\n  border-color: rgba(0, 0, 0, 0.15);\n  box-shadow: rgba(0, 0, 0, 0.06) 0 2px 4px;\n  color: rgba(0, 0, 0, 0.65);\n  transform: translateY(0);\n}\n\n\n\n\n\n.card {\n    margin: 20px;\n    padding: 20px;\n    width: 300px;\n    min-height: 200px;\n    border-radius: 10px;\n    box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.25);\n    transition: all 0.2s;\n    background: radial-gradient(#1fe4f5, #3fbafe);\n    position: relative;\n\n  }\n\n  .card:hover {\n    box-shadow: 0px 6px 10px rgba(128, 115, 115, 0.4);\n    transform: scale(1.01);\n  }\n\n.headerCard {\n  font-family: 'Yuji Syuku', serif;\n  font-size: x-large;\n  font-weight: bolder;\n  color: #ffffff;\n}\n\n.containerCard{\n  font-size: larger;\n  font-family: 'Fjalla One', sans-serif;\n}\n\n#todoList{\n    display: flex;\n  flex-wrap: wrap;\n\n}\n\n.removeTodo, .doneTask{\n  align-items: center;\n  background-clip: padding-box;\n  background-color: #fa6400;\n  border: 1px solid transparent;\n  border-radius: .25rem;\n  box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;\n  box-sizing: border-box;\n  color: #fff;\n  cursor: pointer;\n  display: inline-flex;\n  font-family: system-ui,-apple-system,system-ui,\"Helvetica Neue\",Helvetica,Arial,sans-serif;\n  font-size: 16px;\n  font-weight: 600;\n  justify-content: center;\n  line-height: 1.25;\n  margin: 0;\n  min-height: 3rem;\n  padding: calc(.875rem - 1px) calc(1.5rem - 1px);\n  position: relative;\n  text-decoration: none;\n  transition: all 250ms;\n  user-select: none;\n  -webkit-user-select: none;\n  touch-action: manipulation;\n  vertical-align: baseline;\n  width: auto;\n}\n\n.removeTodo:hover, .removeTodo:focus, .doneTask:hover, .doneTask:focus {\n  background-color: #fb8332;\n  box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;\n}\n\n.removeTodo:hover, .doneTask:hover {\n  transform: translateY(-1px);\n}\n\n.removeTodo:active, .doneTask:active {\n  background-color: #c85000;\n  box-shadow: rgba(0, 0, 0, .06) 0 2px 4px;\n  transform: translateY(0);\n}\n\n.done{\n  background: #eeeeee;\nbackground: -moz-radial-gradient(center, ellipse cover,  #eeeeee 0%, #cccccc 100%);\nbackground: -webkit-radial-gradient(center, ellipse cover,  #eeeeee 0%,#cccccc 100%);\nbackground: radial-gradient(ellipse at center,  #eeeeee 0%,#cccccc 100%);\nfilter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#eeeeee', endColorstr='#cccccc',GradientType=1 );\n\n}\n\n.removeTodo{\n  position: absolute;\n  bottom: 10px;\n  left: 10px;\n}\n\n\n.doneTask{\n  position: absolute;\n  bottom: 10px;\n  right: 10px;\n}\n\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["/* .title{\n    height: 50px;\n    margin: 0px;\n    padding: 0px;\n    background-color: bisque;\n    text-align: center;\n}\n\n\n\n#workArea{\n    background-color: rgb(147, 172, 172);\n    height: 750px;\n    margin-left: 150px;\n\n    \n}\n\nbody{\n    margin: 0px;\n    height: 800px;\n    font-family: \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif;\n}\np{\n    margin: 0px;\n    padding: 5px;\n    font-size: x-large;\n}\n\n#newTask{\n    text-align: center;\n    height: 100px;\n    background-color: rgb(218, 174, 110);\n\n}\n\n#addTask{\n    margin-top: 30px;\n}\n\n#display{\n    background-color: aquamarine;\n    height: 650px; \n}*/\n\n*{\n  margin: 0px;\n  padding: 0px;\n}\n\n.title{\nbackground: rgb(2,0,36);\nbackground: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(44,44,60,1) 0%, rgba(10,25,13,1) 100%, rgba(82,143,186,1) 100%, rgba(3,178,157,1) 100%, rgba(0,255,229,1) 100%);\nheight: 75px;\ncolor: #f3e9e9;\nfont-family: 'Varela Round', sans-serif;\nfont-size: 40px;\nfont-weight:normal;\n\n}\n\n.title p{\n  padding-left: 30px;\n  padding-top: 10px;\n}\n\n#content{\n  display: flex;\n}\n\n\n\n\n#sidebar{\n  text-align: center;\n  position: fixed;\n  width: 200px;\n  height: 100%;\n  color: #f3e9e9;\nfont-family: 'Varela Round', sans-serif;\n/* background: #0D2631; */\nbackground: #2E2E3E;\nbackground: -webkit-linear-gradient(right, #2E2E3E, #1B2027);\nbackground: -moz-linear-gradient(right, #2E2E3E, #1B2027);\nbackground: linear-gradient(to left, #2E2E3E, #1B2027);\n}\n\n#workArea{\n  margin-left: 200px;\n  width: 100%;\n}\n\n.projectListItem{\n  width: 90%;\n  text-align: left;\n  background: #aaaaaa;\n  margin: 10px;\n  border-radius: 10px;\n  transition: box-shadow .3s;\n  cursor: pointer;\n}\n.projectListItem:hover {\nbox-shadow: 0 0 10px  #eeeeee;\n}\n\n\n.project{\n  color: #412b2b;\n  border: none;\n  background: none;\n  height: 40px;\n  font-size: large;\n  padding-left: 10px;\n}\n\n.remove-project{\n  border: none;\n  background:#a89191;\n  height: 30px;\n  width: 30px;\n  font-size: larger;\n  color: #c85000;\n  position: relative;\n  float: right;\n  margin-right: 10px;\n  margin-top: 4px;\n  \n}\n\n#openAddProject, #openAddTaskModal {\n  background: #FF4742;\n  border: 1px solid #FF4742;\n  border-radius: 6px;\n  box-shadow: rgba(0, 0, 0, 0.1) 1px 2px 4px;\n  box-sizing: border-box;\n  color: #FFFFFF;\n  cursor: pointer;\n  display: inline-block;\n  font-family: nunito,roboto,proxima-nova,\"proxima nova\",sans-serif;\n  font-size: 16px;\n  font-weight: 800;\n  line-height: 16px;\n  min-height: 40px;\n  outline: 0;\n  padding: 12px 14px;\n  text-align: center;\n  text-rendering: geometricprecision;\n  text-transform: none;\n  user-select: none;\n  -webkit-user-select: none;\n  touch-action: manipulation;\n  vertical-align: middle;\n}\n\n#openAddProject:hover,\n#openAddProject:active {\n  background-color: #FFFFFF;\n  background-position: 0 0;\n  color: #FF4742;\n}\n\n#openAddProject:active {\n  opacity: .5;\n}\n#openAddTaskModal {\n  margin: 30px;\n}\n\n#openAddTaskModal:hover, #openAddTaskModal:active{\n  background-color:initial;\n  background-position: 0 0;\n  color: #FF4742;\n}\n\n#openAddTaskModal:active{\n  opacity: .5;\n}\n\n\n\n#addProjectDiv{\n  height: 200px;\n  width: 100%;\n  margin-top: 10px;\n  margin-bottom: 5px;\n}\n\n#addProjectDiv input[type=text]{\n  border: none;\n  border-radius: 4px;\n  background-color: #5bf1ddc2;\n  color: rgb(49, 36, 36);\n  width: 70%;\n  height: 25px;\n  padding-left: 3px;\n  margin-bottom: 2px;\n  font-size: large;\n}\n\n#addProject{\n  width: 40%;\n  height: 25px;\n  border: none;\n  border-radius: 4px;\n  background-color: #7abe21c2;\n  color: #FFFFFF;\n  font-size: large;\n}\n\n#closeAddProject{\n  width: 30%;\n  border: none;\n  border-radius: 4px;\n  background-color: #7abe21c2;\n  color: #FFFFFF;\n  height: 25px;\n  margin: 3px;\n  font-size: large;\n}\n\n#newTask{\n  text-align: center;\n}\n\n\n.modal {\n  border-radius: 10px;\n display: none; /* Hidden by default */\n position: absolute; /* Stay in place */\n z-index: 1; \n left: 40%;\n top: 30%;\n padding-top:10px;\n padding-left: 10px;\n padding-right: 5px;\n width: 500px; /* Full width */\n height: 300px; /* Full height */\n overflow: auto; \ncolor: #1fe4f5;\nbox-shadow: 0 0 1px 2000px rgba(0, 0, 0, 0.3);\n\nbackground: rgb(255,175,75);\nbackground: -moz-radial-gradient(center, ellipse cover,  rgba(255,175,75,1) 0%, rgba(255,146,10,1) 100%);\nbackground: -webkit-radial-gradient(center, ellipse cover,  rgba(255,175,75,1) 0%,rgba(255,146,10,1) 100%);\nbackground: radial-gradient(ellipse at center,  rgba(255,175,75,1) 0%,rgba(255,146,10,1) 100%);\nfilter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffaf4b', endColorstr='#ff920a',GradientType=1 );\n\n\n \n}\n\n\n\n.close {\n color: #aaaaaa;\n float: right;\n font-size: 28px;\n font-weight: bold;\n width: 100%;\n text-align: right;\n}\n\n.close:hover,\n.close:focus {\n color: #000;\n text-decoration: none;\n cursor: pointer;\n}\n\n.modal label{\n  font-size: larger;\n  color: #291b1b;\n  margin: 4px;\n  margin-top: 10px;\n\n}\n\n.modal input[type=text]{\n  border: none;\n  border-radius: 4px;\n  height: 25px;\n  width: 300px;\n  margin-top: 10px;\n  font-size: large;\n  padding-left: 5px;\n\n}\n\n.modal input[type=date], .modal input[type=range]{\n  border: none;\n  border-radius: 4px;\n  margin-top: 20px;\n} \n\n#addTask {\n  margin-top: 20px;\n  align-items: center;\n  background-color: #FFFFFF;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  border-radius: .25rem;\n  box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;\n  box-sizing: border-box;\n  color: rgba(0, 0, 0, 0.85);\n  cursor: pointer;\n  display: inline-flex;\n  font-family: system-ui,-apple-system,system-ui,\"Helvetica Neue\",Helvetica,Arial,sans-serif;\n  font-size: 16px;\n  font-weight: 600;\n  justify-content: center;\n  line-height: 1.25;\n  min-height: 3rem;\n  padding: calc(.875rem - 1px) calc(1.5rem - 1px);\n  position: relative;\n  text-decoration: none;\n  transition: all 250ms;\n  user-select: none;\n  -webkit-user-select: none;\n  touch-action: manipulation;\n  vertical-align: baseline;\n  width: auto;\n}\n\n#addTask:hover,\n#addTask:focus {\n  border-color: rgba(0, 0, 0, 0.15);\n  box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;\n  color: rgba(0, 0, 0, 0.65);\n}\n\n#addTask:hover {\n  transform: translateY(-1px);\n}\n\n#addTask:active {\n  background-color: #F0F0F1;\n  border-color: rgba(0, 0, 0, 0.15);\n  box-shadow: rgba(0, 0, 0, 0.06) 0 2px 4px;\n  color: rgba(0, 0, 0, 0.65);\n  transform: translateY(0);\n}\n\n\n\n\n\n.card {\n    margin: 20px;\n    padding: 20px;\n    width: 300px;\n    min-height: 200px;\n    border-radius: 10px;\n    box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.25);\n    transition: all 0.2s;\n    background: radial-gradient(#1fe4f5, #3fbafe);\n    position: relative;\n\n  }\n\n  .card:hover {\n    box-shadow: 0px 6px 10px rgba(128, 115, 115, 0.4);\n    transform: scale(1.01);\n  }\n\n.headerCard {\n  font-family: 'Yuji Syuku', serif;\n  font-size: x-large;\n  font-weight: bolder;\n  color: #ffffff;\n}\n\n.containerCard{\n  font-size: larger;\n  font-family: 'Fjalla One', sans-serif;\n}\n\n#todoList{\n    display: flex;\n  flex-wrap: wrap;\n\n}\n\n.removeTodo, .doneTask{\n  align-items: center;\n  background-clip: padding-box;\n  background-color: #fa6400;\n  border: 1px solid transparent;\n  border-radius: .25rem;\n  box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;\n  box-sizing: border-box;\n  color: #fff;\n  cursor: pointer;\n  display: inline-flex;\n  font-family: system-ui,-apple-system,system-ui,\"Helvetica Neue\",Helvetica,Arial,sans-serif;\n  font-size: 16px;\n  font-weight: 600;\n  justify-content: center;\n  line-height: 1.25;\n  margin: 0;\n  min-height: 3rem;\n  padding: calc(.875rem - 1px) calc(1.5rem - 1px);\n  position: relative;\n  text-decoration: none;\n  transition: all 250ms;\n  user-select: none;\n  -webkit-user-select: none;\n  touch-action: manipulation;\n  vertical-align: baseline;\n  width: auto;\n}\n\n.removeTodo:hover, .removeTodo:focus, .doneTask:hover, .doneTask:focus {\n  background-color: #fb8332;\n  box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;\n}\n\n.removeTodo:hover, .doneTask:hover {\n  transform: translateY(-1px);\n}\n\n.removeTodo:active, .doneTask:active {\n  background-color: #c85000;\n  box-shadow: rgba(0, 0, 0, .06) 0 2px 4px;\n  transform: translateY(0);\n}\n\n.done{\n  background: #eeeeee;\nbackground: -moz-radial-gradient(center, ellipse cover,  #eeeeee 0%, #cccccc 100%);\nbackground: -webkit-radial-gradient(center, ellipse cover,  #eeeeee 0%,#cccccc 100%);\nbackground: radial-gradient(ellipse at center,  #eeeeee 0%,#cccccc 100%);\nfilter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#eeeeee', endColorstr='#cccccc',GradientType=1 );\n\n}\n\n.removeTodo{\n  position: absolute;\n  bottom: 10px;\n  left: 10px;\n}\n\n\n.doneTask{\n  position: absolute;\n  bottom: 10px;\n  right: 10px;\n}\n\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksUUFBUSxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sTUFBTSxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsUUFBUSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksUUFBUSxLQUFLLFlBQVksdUJBQXVCLHlCQUF5QixXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxxQkFBcUIsdUJBQXVCLFdBQVcsVUFBVSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsZ0JBQWdCLFNBQVMsS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLE1BQU0sVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGNBQWMsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEs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dUI7QUFDaEY7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDs7O0FBR0E7O0FBRUE7QUFDQSxvREFBb0QsaUVBQU07QUFDMUQsb0RBQW9ELHdEQUFXO0FBQy9EOztBQUVBO0FBQ0EsdURBQXVELHlEQUFZO0FBQ25FOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QyxvQkFBb0I7O0FBRWxFO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7OztBQUdBLFlBQVk7O0FBRVosQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOzs7QUFHRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL0hlYWRlci9oZWFkZXJFbGVtZW50LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvU2lkZWJhci9hZGRQcm9qZWN0RWxlbWVudC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL1NpZGViYXIvc2lkZWJhckVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9Xb3JrQXJlYS9hZGRpbmdOZXdUYXNrRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL1dvcmtBcmVhL2Rpc3BsYXlUb2Rvc0VsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9Xb3JrQXJlYS93b3JrQXJlYUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9kaXNwbGF5VG9kb3MuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9pbml0aWFsTG9hZC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3RvZG9DYXJkLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiAudGl0bGV7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgbWFyZ2luOiAwcHg7XFxuICAgIHBhZGRpbmc6IDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmlzcXVlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcblxcblxcbiN3b3JrQXJlYXtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE0NywgMTcyLCAxNzIpO1xcbiAgICBoZWlnaHQ6IDc1MHB4O1xcbiAgICBtYXJnaW4tbGVmdDogMTUwcHg7XFxuXFxuICAgIFxcbn1cXG5cXG5ib2R5e1xcbiAgICBtYXJnaW46IDBweDtcXG4gICAgaGVpZ2h0OiA4MDBweDtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJTZWdvZSBVSVxcXCIsIFJvYm90bywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcXG59XFxucHtcXG4gICAgbWFyZ2luOiAwcHg7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgZm9udC1zaXplOiB4LWxhcmdlO1xcbn1cXG5cXG4jbmV3VGFza3tcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDEwMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjE4LCAxNzQsIDExMCk7XFxuXFxufVxcblxcbiNhZGRUYXNre1xcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xcbn1cXG5cXG4jZGlzcGxheXtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYXF1YW1hcmluZTtcXG4gICAgaGVpZ2h0OiA2NTBweDsgXFxufSovXFxuXFxuKntcXG4gIG1hcmdpbjogMHB4O1xcbiAgcGFkZGluZzogMHB4O1xcbn1cXG5cXG4udGl0bGV7XFxuYmFja2dyb3VuZDogcmdiKDIsMCwzNik7XFxuYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2JhKDIsMCwzNiwxKSAwJSwgcmdiYSg0NCw0NCw2MCwxKSAwJSwgcmdiYSgxMCwyNSwxMywxKSAxMDAlLCByZ2JhKDgyLDE0MywxODYsMSkgMTAwJSwgcmdiYSgzLDE3OCwxNTcsMSkgMTAwJSwgcmdiYSgwLDI1NSwyMjksMSkgMTAwJSk7XFxuaGVpZ2h0OiA3NXB4O1xcbmNvbG9yOiAjZjNlOWU5O1xcbmZvbnQtZmFtaWx5OiAnVmFyZWxhIFJvdW5kJywgc2Fucy1zZXJpZjtcXG5mb250LXNpemU6IDQwcHg7XFxuZm9udC13ZWlnaHQ6bm9ybWFsO1xcblxcbn1cXG5cXG4udGl0bGUgcHtcXG4gIHBhZGRpbmctbGVmdDogMzBweDtcXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xcbn1cXG5cXG4jY29udGVudHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcblxcblxcblxcbiNzaWRlYmFye1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgd2lkdGg6IDIwMHB4O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgY29sb3I6ICNmM2U5ZTk7XFxuZm9udC1mYW1pbHk6ICdWYXJlbGEgUm91bmQnLCBzYW5zLXNlcmlmO1xcbi8qIGJhY2tncm91bmQ6ICMwRDI2MzE7ICovXFxuYmFja2dyb3VuZDogIzJFMkUzRTtcXG5iYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChyaWdodCwgIzJFMkUzRSwgIzFCMjAyNyk7XFxuYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQocmlnaHQsICMyRTJFM0UsICMxQjIwMjcpO1xcbmJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCAjMkUyRTNFLCAjMUIyMDI3KTtcXG59XFxuXFxuI3dvcmtBcmVhe1xcbiAgbWFyZ2luLWxlZnQ6IDIwMHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5wcm9qZWN0TGlzdEl0ZW17XFxuICB3aWR0aDogOTAlO1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIGJhY2tncm91bmQ6ICNhYWFhYWE7XFxuICBtYXJnaW46IDEwcHg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAuM3M7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5wcm9qZWN0TGlzdEl0ZW06aG92ZXIge1xcbmJveC1zaGFkb3c6IDAgMCAxMHB4ICAjZWVlZWVlO1xcbn1cXG5cXG5cXG4ucHJvamVjdHtcXG4gIGNvbG9yOiAjNDEyYjJiO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG4gIGhlaWdodDogNDBweDtcXG4gIGZvbnQtc2l6ZTogbGFyZ2U7XFxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxufVxcblxcbi5yZW1vdmUtcHJvamVjdHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQ6I2E4OTE5MTtcXG4gIGhlaWdodDogMzBweDtcXG4gIHdpZHRoOiAzMHB4O1xcbiAgZm9udC1zaXplOiBsYXJnZXI7XFxuICBjb2xvcjogI2M4NTAwMDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGZsb2F0OiByaWdodDtcXG4gIG1hcmdpbi1yaWdodDogMTBweDtcXG4gIG1hcmdpbi10b3A6IDRweDtcXG4gIFxcbn1cXG5cXG4jb3BlbkFkZFByb2plY3QsICNvcGVuQWRkVGFza01vZGFsIHtcXG4gIGJhY2tncm91bmQ6ICNGRjQ3NDI7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjRkY0NzQyO1xcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjEpIDFweCAycHggNHB4O1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGNvbG9yOiAjRkZGRkZGO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgZm9udC1mYW1pbHk6IG51bml0byxyb2JvdG8scHJveGltYS1ub3ZhLFxcXCJwcm94aW1hIG5vdmFcXFwiLHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBmb250LXdlaWdodDogODAwO1xcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XFxuICBtaW4taGVpZ2h0OiA0MHB4O1xcbiAgb3V0bGluZTogMDtcXG4gIHBhZGRpbmc6IDEycHggMTRweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHRleHQtcmVuZGVyaW5nOiBnZW9tZXRyaWNwcmVjaXNpb247XFxuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4gIHRvdWNoLWFjdGlvbjogbWFuaXB1bGF0aW9uO1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG59XFxuXFxuI29wZW5BZGRQcm9qZWN0OmhvdmVyLFxcbiNvcGVuQWRkUHJvamVjdDphY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IDAgMDtcXG4gIGNvbG9yOiAjRkY0NzQyO1xcbn1cXG5cXG4jb3BlbkFkZFByb2plY3Q6YWN0aXZlIHtcXG4gIG9wYWNpdHk6IC41O1xcbn1cXG4jb3BlbkFkZFRhc2tNb2RhbCB7XFxuICBtYXJnaW46IDMwcHg7XFxufVxcblxcbiNvcGVuQWRkVGFza01vZGFsOmhvdmVyLCAjb3BlbkFkZFRhc2tNb2RhbDphY3RpdmV7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOmluaXRpYWw7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDA7XFxuICBjb2xvcjogI0ZGNDc0MjtcXG59XFxuXFxuI29wZW5BZGRUYXNrTW9kYWw6YWN0aXZle1xcbiAgb3BhY2l0eTogLjU7XFxufVxcblxcblxcblxcbiNhZGRQcm9qZWN0RGl2e1xcbiAgaGVpZ2h0OiAyMDBweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG4gIG1hcmdpbi1ib3R0b206IDVweDtcXG59XFxuXFxuI2FkZFByb2plY3REaXYgaW5wdXRbdHlwZT10ZXh0XXtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM1YmYxZGRjMjtcXG4gIGNvbG9yOiByZ2IoNDksIDM2LCAzNik7XFxuICB3aWR0aDogNzAlO1xcbiAgaGVpZ2h0OiAyNXB4O1xcbiAgcGFkZGluZy1sZWZ0OiAzcHg7XFxuICBtYXJnaW4tYm90dG9tOiAycHg7XFxuICBmb250LXNpemU6IGxhcmdlO1xcbn1cXG5cXG4jYWRkUHJvamVjdHtcXG4gIHdpZHRoOiA0MCU7XFxuICBoZWlnaHQ6IDI1cHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2FiZTIxYzI7XFxuICBjb2xvcjogI0ZGRkZGRjtcXG4gIGZvbnQtc2l6ZTogbGFyZ2U7XFxufVxcblxcbiNjbG9zZUFkZFByb2plY3R7XFxuICB3aWR0aDogMzAlO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzdhYmUyMWMyO1xcbiAgY29sb3I6ICNGRkZGRkY7XFxuICBoZWlnaHQ6IDI1cHg7XFxuICBtYXJnaW46IDNweDtcXG4gIGZvbnQtc2l6ZTogbGFyZ2U7XFxufVxcblxcbiNuZXdUYXNre1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG5cXG4ubW9kYWwge1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gZGlzcGxheTogbm9uZTsgLyogSGlkZGVuIGJ5IGRlZmF1bHQgKi9cXG4gcG9zaXRpb246IGFic29sdXRlOyAvKiBTdGF5IGluIHBsYWNlICovXFxuIHotaW5kZXg6IDE7IFxcbiBsZWZ0OiA0MCU7XFxuIHRvcDogMzAlO1xcbiBwYWRkaW5nLXRvcDoxMHB4O1xcbiBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxuIHBhZGRpbmctcmlnaHQ6IDVweDtcXG4gd2lkdGg6IDUwMHB4OyAvKiBGdWxsIHdpZHRoICovXFxuIGhlaWdodDogMzAwcHg7IC8qIEZ1bGwgaGVpZ2h0ICovXFxuIG92ZXJmbG93OiBhdXRvOyBcXG5jb2xvcjogIzFmZTRmNTtcXG5ib3gtc2hhZG93OiAwIDAgMXB4IDIwMDBweCByZ2JhKDAsIDAsIDAsIDAuMyk7XFxuXFxuYmFja2dyb3VuZDogcmdiKDI1NSwxNzUsNzUpO1xcbmJhY2tncm91bmQ6IC1tb3otcmFkaWFsLWdyYWRpZW50KGNlbnRlciwgZWxsaXBzZSBjb3ZlciwgIHJnYmEoMjU1LDE3NSw3NSwxKSAwJSwgcmdiYSgyNTUsMTQ2LDEwLDEpIDEwMCUpO1xcbmJhY2tncm91bmQ6IC13ZWJraXQtcmFkaWFsLWdyYWRpZW50KGNlbnRlciwgZWxsaXBzZSBjb3ZlciwgIHJnYmEoMjU1LDE3NSw3NSwxKSAwJSxyZ2JhKDI1NSwxNDYsMTAsMSkgMTAwJSk7XFxuYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGVsbGlwc2UgYXQgY2VudGVyLCAgcmdiYSgyNTUsMTc1LDc1LDEpIDAlLHJnYmEoMjU1LDE0NiwxMCwxKSAxMDAlKTtcXG5maWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudCggc3RhcnRDb2xvcnN0cj0nI2ZmYWY0YicsIGVuZENvbG9yc3RyPScjZmY5MjBhJyxHcmFkaWVudFR5cGU9MSApO1xcblxcblxcbiBcXG59XFxuXFxuXFxuXFxuLmNsb3NlIHtcXG4gY29sb3I6ICNhYWFhYWE7XFxuIGZsb2F0OiByaWdodDtcXG4gZm9udC1zaXplOiAyOHB4O1xcbiBmb250LXdlaWdodDogYm9sZDtcXG4gd2lkdGg6IDEwMCU7XFxuIHRleHQtYWxpZ246IHJpZ2h0O1xcbn1cXG5cXG4uY2xvc2U6aG92ZXIsXFxuLmNsb3NlOmZvY3VzIHtcXG4gY29sb3I6ICMwMDA7XFxuIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ubW9kYWwgbGFiZWx7XFxuICBmb250LXNpemU6IGxhcmdlcjtcXG4gIGNvbG9yOiAjMjkxYjFiO1xcbiAgbWFyZ2luOiA0cHg7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcblxcbn1cXG5cXG4ubW9kYWwgaW5wdXRbdHlwZT10ZXh0XXtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGhlaWdodDogMjVweDtcXG4gIHdpZHRoOiAzMDBweDtcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxuICBmb250LXNpemU6IGxhcmdlO1xcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XFxuXFxufVxcblxcbi5tb2RhbCBpbnB1dFt0eXBlPWRhdGVdLCAubW9kYWwgaW5wdXRbdHlwZT1yYW5nZV17XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcbn0gXFxuXFxuI2FkZFRhc2sge1xcbiAgbWFyZ2luLXRvcDogMjBweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgYm9yZGVyLXJhZGl1czogLjI1cmVtO1xcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjAyKSAwIDFweCAzcHggMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg1KTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbiAgZm9udC1mYW1pbHk6IHN5c3RlbS11aSwtYXBwbGUtc3lzdGVtLHN5c3RlbS11aSxcXFwiSGVsdmV0aWNhIE5ldWVcXFwiLEhlbHZldGljYSxBcmlhbCxzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgbGluZS1oZWlnaHQ6IDEuMjU7XFxuICBtaW4taGVpZ2h0OiAzcmVtO1xcbiAgcGFkZGluZzogY2FsYyguODc1cmVtIC0gMXB4KSBjYWxjKDEuNXJlbSAtIDFweCk7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICB0cmFuc2l0aW9uOiBhbGwgMjUwbXM7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICB0b3VjaC1hY3Rpb246IG1hbmlwdWxhdGlvbjtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG4gIHdpZHRoOiBhdXRvO1xcbn1cXG5cXG4jYWRkVGFzazpob3ZlcixcXG4jYWRkVGFzazpmb2N1cyB7XFxuICBib3JkZXItY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xNSk7XFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMSkgMCA0cHggMTJweDtcXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNjUpO1xcbn1cXG5cXG4jYWRkVGFzazpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XFxufVxcblxcbiNhZGRUYXNrOmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjBGMEYxO1xcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMTUpO1xcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjA2KSAwIDJweCA0cHg7XFxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjY1KTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcXG59XFxuXFxuXFxuXFxuXFxuXFxuLmNhcmQge1xcbiAgICBtYXJnaW46IDIwcHg7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIHdpZHRoOiAzMDBweDtcXG4gICAgbWluLWhlaWdodDogMjAwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJveC1zaGFkb3c6IDBweCA2cHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcXG4gICAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KCMxZmU0ZjUsICMzZmJhZmUpO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFxuICB9XFxuXFxuICAuY2FyZDpob3ZlciB7XFxuICAgIGJveC1zaGFkb3c6IDBweCA2cHggMTBweCByZ2JhKDEyOCwgMTE1LCAxMTUsIDAuNCk7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMSk7XFxuICB9XFxuXFxuLmhlYWRlckNhcmQge1xcbiAgZm9udC1mYW1pbHk6ICdZdWppIFN5dWt1Jywgc2VyaWY7XFxuICBmb250LXNpemU6IHgtbGFyZ2U7XFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcbiAgY29sb3I6ICNmZmZmZmY7XFxufVxcblxcbi5jb250YWluZXJDYXJke1xcbiAgZm9udC1zaXplOiBsYXJnZXI7XFxuICBmb250LWZhbWlseTogJ0ZqYWxsYSBPbmUnLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4jdG9kb0xpc3R7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuXFxufVxcblxcbi5yZW1vdmVUb2RvLCAuZG9uZVRhc2t7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmYTY0MDA7XFxuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gIGJvcmRlci1yYWRpdXM6IC4yNXJlbTtcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4wMikgMCAxcHggM3B4IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgY29sb3I6ICNmZmY7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG4gIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWksLWFwcGxlLXN5c3RlbSxzeXN0ZW0tdWksXFxcIkhlbHZldGljYSBOZXVlXFxcIixIZWx2ZXRpY2EsQXJpYWwsc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGxpbmUtaGVpZ2h0OiAxLjI1O1xcbiAgbWFyZ2luOiAwO1xcbiAgbWluLWhlaWdodDogM3JlbTtcXG4gIHBhZGRpbmc6IGNhbGMoLjg3NXJlbSAtIDFweCkgY2FsYygxLjVyZW0gLSAxcHgpO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgdHJhbnNpdGlvbjogYWxsIDI1MG1zO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcbiAgdG91Y2gtYWN0aW9uOiBtYW5pcHVsYXRpb247XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxuICB3aWR0aDogYXV0bztcXG59XFxuXFxuLnJlbW92ZVRvZG86aG92ZXIsIC5yZW1vdmVUb2RvOmZvY3VzLCAuZG9uZVRhc2s6aG92ZXIsIC5kb25lVGFzazpmb2N1cyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmI4MzMyO1xcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjEpIDAgNHB4IDEycHg7XFxufVxcblxcbi5yZW1vdmVUb2RvOmhvdmVyLCAuZG9uZVRhc2s6aG92ZXIge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xcbn1cXG5cXG4ucmVtb3ZlVG9kbzphY3RpdmUsIC5kb25lVGFzazphY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2M4NTAwMDtcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgLjA2KSAwIDJweCA0cHg7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XFxufVxcblxcbi5kb25le1xcbiAgYmFja2dyb3VuZDogI2VlZWVlZTtcXG5iYWNrZ3JvdW5kOiAtbW96LXJhZGlhbC1ncmFkaWVudChjZW50ZXIsIGVsbGlwc2UgY292ZXIsICAjZWVlZWVlIDAlLCAjY2NjY2NjIDEwMCUpO1xcbmJhY2tncm91bmQ6IC13ZWJraXQtcmFkaWFsLWdyYWRpZW50KGNlbnRlciwgZWxsaXBzZSBjb3ZlciwgICNlZWVlZWUgMCUsI2NjY2NjYyAxMDAlKTtcXG5iYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoZWxsaXBzZSBhdCBjZW50ZXIsICAjZWVlZWVlIDAlLCNjY2NjY2MgMTAwJSk7XFxuZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoIHN0YXJ0Q29sb3JzdHI9JyNlZWVlZWUnLCBlbmRDb2xvcnN0cj0nI2NjY2NjYycsR3JhZGllbnRUeXBlPTEgKTtcXG5cXG59XFxuXFxuLnJlbW92ZVRvZG97XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IDEwcHg7XFxuICBsZWZ0OiAxMHB4O1xcbn1cXG5cXG5cXG4uZG9uZVRhc2t7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IDEwcHg7XFxuICByaWdodDogMTBweDtcXG59XFxuXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQTJDRTs7QUFFRjtFQUNFLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7QUFDQSx1QkFBdUI7QUFDdkIsMEtBQTBLO0FBQzFLLFlBQVk7QUFDWixjQUFjO0FBQ2QsdUNBQXVDO0FBQ3ZDLGVBQWU7QUFDZixrQkFBa0I7O0FBRWxCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7Ozs7QUFLQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsWUFBWTtFQUNaLFlBQVk7RUFDWixjQUFjO0FBQ2hCLHVDQUF1QztBQUN2Qyx5QkFBeUI7QUFDekIsbUJBQW1CO0FBQ25CLDREQUE0RDtBQUM1RCx5REFBeUQ7QUFDekQsc0RBQXNEO0FBQ3REOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsMEJBQTBCO0VBQzFCLGVBQWU7QUFDakI7QUFDQTtBQUNBLDZCQUE2QjtBQUM3Qjs7O0FBR0E7RUFDRSxjQUFjO0VBQ2QsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGVB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QWtGO0FBQ2xGLG9GQUFvRjtBQUNwRix3RUFBd0U7QUFDeEUsbUhBQW1IOztBQUVuSDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osVUFBVTtBQUNaOzs7QUFHQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osV0FBVztBQUNiXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIC50aXRsZXtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICBtYXJnaW46IDBweDtcXG4gICAgcGFkZGluZzogMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBiaXNxdWU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuXFxuXFxuI3dvcmtBcmVhe1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTQ3LCAxNzIsIDE3Mik7XFxuICAgIGhlaWdodDogNzUwcHg7XFxuICAgIG1hcmdpbi1sZWZ0OiAxNTBweDtcXG5cXG4gICAgXFxufVxcblxcbmJvZHl7XFxuICAgIG1hcmdpbjogMHB4O1xcbiAgICBoZWlnaHQ6IDgwMHB4O1xcbiAgICBmb250LWZhbWlseTogXFxcIlNlZ29lIFVJXFxcIiwgUm9ib3RvLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xcbn1cXG5we1xcbiAgICBtYXJnaW46IDBweDtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBmb250LXNpemU6IHgtbGFyZ2U7XFxufVxcblxcbiNuZXdUYXNre1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGhlaWdodDogMTAwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTgsIDE3NCwgMTEwKTtcXG5cXG59XFxuXFxuI2FkZFRhc2t7XFxuICAgIG1hcmdpbi10b3A6IDMwcHg7XFxufVxcblxcbiNkaXNwbGF5e1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhbWFyaW5lO1xcbiAgICBoZWlnaHQ6IDY1MHB4OyBcXG59Ki9cXG5cXG4qe1xcbiAgbWFyZ2luOiAwcHg7XFxuICBwYWRkaW5nOiAwcHg7XFxufVxcblxcbi50aXRsZXtcXG5iYWNrZ3JvdW5kOiByZ2IoMiwwLDM2KTtcXG5iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHJnYmEoMiwwLDM2LDEpIDAlLCByZ2JhKDQ0LDQ0LDYwLDEpIDAlLCByZ2JhKDEwLDI1LDEzLDEpIDEwMCUsIHJnYmEoODIsMTQzLDE4NiwxKSAxMDAlLCByZ2JhKDMsMTc4LDE1NywxKSAxMDAlLCByZ2JhKDAsMjU1LDIyOSwxKSAxMDAlKTtcXG5oZWlnaHQ6IDc1cHg7XFxuY29sb3I6ICNmM2U5ZTk7XFxuZm9udC1mYW1pbHk6ICdWYXJlbGEgUm91bmQnLCBzYW5zLXNlcmlmO1xcbmZvbnQtc2l6ZTogNDBweDtcXG5mb250LXdlaWdodDpub3JtYWw7XFxuXFxufVxcblxcbi50aXRsZSBwe1xcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xcbiAgcGFkZGluZy10b3A6IDEwcHg7XFxufVxcblxcbiNjb250ZW50e1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuXFxuXFxuXFxuI3NpZGViYXJ7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB3aWR0aDogMjAwcHg7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBjb2xvcjogI2YzZTllOTtcXG5mb250LWZhbWlseTogJ1ZhcmVsYSBSb3VuZCcsIHNhbnMtc2VyaWY7XFxuLyogYmFja2dyb3VuZDogIzBEMjYzMTsgKi9cXG5iYWNrZ3JvdW5kOiAjMkUyRTNFO1xcbmJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHJpZ2h0LCAjMkUyRTNFLCAjMUIyMDI3KTtcXG5iYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudChyaWdodCwgIzJFMkUzRSwgIzFCMjAyNyk7XFxuYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsICMyRTJFM0UsICMxQjIwMjcpO1xcbn1cXG5cXG4jd29ya0FyZWF7XFxuICBtYXJnaW4tbGVmdDogMjAwcHg7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLnByb2plY3RMaXN0SXRlbXtcXG4gIHdpZHRoOiA5MCU7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgYmFja2dyb3VuZDogI2FhYWFhYTtcXG4gIG1hcmdpbjogMTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IC4zcztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLnByb2plY3RMaXN0SXRlbTpob3ZlciB7XFxuYm94LXNoYWRvdzogMCAwIDEwcHggICNlZWVlZWU7XFxufVxcblxcblxcbi5wcm9qZWN0e1xcbiAgY29sb3I6ICM0MTJiMmI7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgZm9udC1zaXplOiBsYXJnZTtcXG4gIHBhZGRpbmctbGVmdDogMTBweDtcXG59XFxuXFxuLnJlbW92ZS1wcm9qZWN0e1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZDojYTg5MTkxO1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgd2lkdGg6IDMwcHg7XFxuICBmb250LXNpemU6IGxhcmdlcjtcXG4gIGNvbG9yOiAjYzg1MDAwO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZmxvYXQ6IHJpZ2h0O1xcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbiAgbWFyZ2luLXRvcDogNHB4O1xcbiAgXFxufVxcblxcbiNvcGVuQWRkUHJvamVjdCwgI29wZW5BZGRUYXNrTW9kYWwge1xcbiAgYmFja2dyb3VuZDogI0ZGNDc0MjtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNGRjQ3NDI7XFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMSkgMXB4IDJweCA0cHg7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgY29sb3I6ICNGRkZGRkY7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBmb250LWZhbWlseTogbnVuaXRvLHJvYm90byxwcm94aW1hLW5vdmEsXFxcInByb3hpbWEgbm92YVxcXCIsc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XFxuICBsaW5lLWhlaWdodDogMTZweDtcXG4gIG1pbi1oZWlnaHQ6IDQwcHg7XFxuICBvdXRsaW5lOiAwO1xcbiAgcGFkZGluZzogMTJweCAxNHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgdGV4dC1yZW5kZXJpbmc6IGdlb21ldHJpY3ByZWNpc2lvbjtcXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcbiAgdG91Y2gtYWN0aW9uOiBtYW5pcHVsYXRpb247XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbn1cXG5cXG4jb3BlbkFkZFByb2plY3Q6aG92ZXIsXFxuI29wZW5BZGRQcm9qZWN0OmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAwO1xcbiAgY29sb3I6ICNGRjQ3NDI7XFxufVxcblxcbiNvcGVuQWRkUHJvamVjdDphY3RpdmUge1xcbiAgb3BhY2l0eTogLjU7XFxufVxcbiNvcGVuQWRkVGFza01vZGFsIHtcXG4gIG1hcmdpbjogMzBweDtcXG59XFxuXFxuI29wZW5BZGRUYXNrTW9kYWw6aG92ZXIsICNvcGVuQWRkVGFza01vZGFsOmFjdGl2ZXtcXG4gIGJhY2tncm91bmQtY29sb3I6aW5pdGlhbDtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IDAgMDtcXG4gIGNvbG9yOiAjRkY0NzQyO1xcbn1cXG5cXG4jb3BlbkFkZFRhc2tNb2RhbDphY3RpdmV7XFxuICBvcGFjaXR5OiAuNTtcXG59XFxuXFxuXFxuXFxuI2FkZFByb2plY3REaXZ7XFxuICBoZWlnaHQ6IDIwMHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xcbn1cXG5cXG4jYWRkUHJvamVjdERpdiBpbnB1dFt0eXBlPXRleHRde1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzViZjFkZGMyO1xcbiAgY29sb3I6IHJnYig0OSwgMzYsIDM2KTtcXG4gIHdpZHRoOiA3MCU7XFxuICBoZWlnaHQ6IDI1cHg7XFxuICBwYWRkaW5nLWxlZnQ6IDNweDtcXG4gIG1hcmdpbi1ib3R0b206IDJweDtcXG4gIGZvbnQtc2l6ZTogbGFyZ2U7XFxufVxcblxcbiNhZGRQcm9qZWN0e1xcbiAgd2lkdGg6IDQwJTtcXG4gIGhlaWdodDogMjVweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM3YWJlMjFjMjtcXG4gIGNvbG9yOiAjRkZGRkZGO1xcbiAgZm9udC1zaXplOiBsYXJnZTtcXG59XFxuXFxuI2Nsb3NlQWRkUHJvamVjdHtcXG4gIHdpZHRoOiAzMCU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2FiZTIxYzI7XFxuICBjb2xvcjogI0ZGRkZGRjtcXG4gIGhlaWdodDogMjVweDtcXG4gIG1hcmdpbjogM3B4O1xcbiAgZm9udC1zaXplOiBsYXJnZTtcXG59XFxuXFxuI25ld1Rhc2t7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcblxcbi5tb2RhbCB7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiBkaXNwbGF5OiBub25lOyAvKiBIaWRkZW4gYnkgZGVmYXVsdCAqL1xcbiBwb3NpdGlvbjogYWJzb2x1dGU7IC8qIFN0YXkgaW4gcGxhY2UgKi9cXG4gei1pbmRleDogMTsgXFxuIGxlZnQ6IDQwJTtcXG4gdG9wOiAzMCU7XFxuIHBhZGRpbmctdG9wOjEwcHg7XFxuIHBhZGRpbmctbGVmdDogMTBweDtcXG4gcGFkZGluZy1yaWdodDogNXB4O1xcbiB3aWR0aDogNTAwcHg7IC8qIEZ1bGwgd2lkdGggKi9cXG4gaGVpZ2h0OiAzMDBweDsgLyogRnVsbCBoZWlnaHQgKi9cXG4gb3ZlcmZsb3c6IGF1dG87IFxcbmNvbG9yOiAjMWZlNGY1O1xcbmJveC1zaGFkb3c6IDAgMCAxcHggMjAwMHB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcXG5cXG5iYWNrZ3JvdW5kOiByZ2IoMjU1LDE3NSw3NSk7XFxuYmFja2dyb3VuZDogLW1vei1yYWRpYWwtZ3JhZGllbnQoY2VudGVyLCBlbGxpcHNlIGNvdmVyLCAgcmdiYSgyNTUsMTc1LDc1LDEpIDAlLCByZ2JhKDI1NSwxNDYsMTAsMSkgMTAwJSk7XFxuYmFja2dyb3VuZDogLXdlYmtpdC1yYWRpYWwtZ3JhZGllbnQoY2VudGVyLCBlbGxpcHNlIGNvdmVyLCAgcmdiYSgyNTUsMTc1LDc1LDEpIDAlLHJnYmEoMjU1LDE0NiwxMCwxKSAxMDAlKTtcXG5iYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoZWxsaXBzZSBhdCBjZW50ZXIsICByZ2JhKDI1NSwxNzUsNzUsMSkgMCUscmdiYSgyNTUsMTQ2LDEwLDEpIDEwMCUpO1xcbmZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KCBzdGFydENvbG9yc3RyPScjZmZhZjRiJywgZW5kQ29sb3JzdHI9JyNmZjkyMGEnLEdyYWRpZW50VHlwZT0xICk7XFxuXFxuXFxuIFxcbn1cXG5cXG5cXG5cXG4uY2xvc2Uge1xcbiBjb2xvcjogI2FhYWFhYTtcXG4gZmxvYXQ6IHJpZ2h0O1xcbiBmb250LXNpemU6IDI4cHg7XFxuIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiB3aWR0aDogMTAwJTtcXG4gdGV4dC1hbGlnbjogcmlnaHQ7XFxufVxcblxcbi5jbG9zZTpob3ZlcixcXG4uY2xvc2U6Zm9jdXMge1xcbiBjb2xvcjogIzAwMDtcXG4gdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5tb2RhbCBsYWJlbHtcXG4gIGZvbnQtc2l6ZTogbGFyZ2VyO1xcbiAgY29sb3I6ICMyOTFiMWI7XFxuICBtYXJnaW46IDRweDtcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxuXFxufVxcblxcbi5tb2RhbCBpbnB1dFt0eXBlPXRleHRde1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgaGVpZ2h0OiAyNXB4O1xcbiAgd2lkdGg6IDMwMHB4O1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG4gIGZvbnQtc2l6ZTogbGFyZ2U7XFxuICBwYWRkaW5nLWxlZnQ6IDVweDtcXG5cXG59XFxuXFxuLm1vZGFsIGlucHV0W3R5cGU9ZGF0ZV0sIC5tb2RhbCBpbnB1dFt0eXBlPXJhbmdlXXtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxufSBcXG5cXG4jYWRkVGFzayB7XFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICBib3JkZXItcmFkaXVzOiAuMjVyZW07XFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMDIpIDAgMXB4IDNweCAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODUpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxuICBmb250LWZhbWlseTogc3lzdGVtLXVpLC1hcHBsZS1zeXN0ZW0sc3lzdGVtLXVpLFxcXCJIZWx2ZXRpY2EgTmV1ZVxcXCIsSGVsdmV0aWNhLEFyaWFsLHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBsaW5lLWhlaWdodDogMS4yNTtcXG4gIG1pbi1oZWlnaHQ6IDNyZW07XFxuICBwYWRkaW5nOiBjYWxjKC44NzVyZW0gLSAxcHgpIGNhbGMoMS41cmVtIC0gMXB4KTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIHRyYW5zaXRpb246IGFsbCAyNTBtcztcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4gIHRvdWNoLWFjdGlvbjogbWFuaXB1bGF0aW9uO1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbiAgd2lkdGg6IGF1dG87XFxufVxcblxcbiNhZGRUYXNrOmhvdmVyLFxcbiNhZGRUYXNrOmZvY3VzIHtcXG4gIGJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjE1KTtcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xKSAwIDRweCAxMnB4O1xcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42NSk7XFxufVxcblxcbiNhZGRUYXNrOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcXG59XFxuXFxuI2FkZFRhc2s6YWN0aXZlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGMEYwRjE7XFxuICBib3JkZXItY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xNSk7XFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMDYpIDAgMnB4IDRweDtcXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNjUpO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xcbn1cXG5cXG5cXG5cXG5cXG5cXG4uY2FyZCB7XFxuICAgIG1hcmdpbjogMjBweDtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgd2lkdGg6IDMwMHB4O1xcbiAgICBtaW4taGVpZ2h0OiAyMDBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYm94LXNoYWRvdzogMHB4IDZweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzO1xcbiAgICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoIzFmZTRmNSwgIzNmYmFmZSk7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXG4gIH1cXG5cXG4gIC5jYXJkOmhvdmVyIHtcXG4gICAgYm94LXNoYWRvdzogMHB4IDZweCAxMHB4IHJnYmEoMTI4LCAxMTUsIDExNSwgMC40KTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAxKTtcXG4gIH1cXG5cXG4uaGVhZGVyQ2FyZCB7XFxuICBmb250LWZhbWlseTogJ1l1amkgU3l1a3UnLCBzZXJpZjtcXG4gIGZvbnQtc2l6ZTogeC1sYXJnZTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuICBjb2xvcjogI2ZmZmZmZjtcXG59XFxuXFxuLmNvbnRhaW5lckNhcmR7XFxuICBmb250LXNpemU6IGxhcmdlcjtcXG4gIGZvbnQtZmFtaWx5OiAnRmphbGxhIE9uZScsIHNhbnMtc2VyaWY7XFxufVxcblxcbiN0b2RvTGlzdHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG5cXG59XFxuXFxuLnJlbW92ZVRvZG8sIC5kb25lVGFza3tcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZhNjQwMDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLXJhZGl1czogLjI1cmVtO1xcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjAyKSAwIDFweCAzcHggMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbiAgZm9udC1mYW1pbHk6IHN5c3RlbS11aSwtYXBwbGUtc3lzdGVtLHN5c3RlbS11aSxcXFwiSGVsdmV0aWNhIE5ldWVcXFwiLEhlbHZldGljYSxBcmlhbCxzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgbGluZS1oZWlnaHQ6IDEuMjU7XFxuICBtYXJnaW46IDA7XFxuICBtaW4taGVpZ2h0OiAzcmVtO1xcbiAgcGFkZGluZzogY2FsYyguODc1cmVtIC0gMXB4KSBjYWxjKDEuNXJlbSAtIDFweCk7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICB0cmFuc2l0aW9uOiBhbGwgMjUwbXM7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICB0b3VjaC1hY3Rpb246IG1hbmlwdWxhdGlvbjtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG4gIHdpZHRoOiBhdXRvO1xcbn1cXG5cXG4ucmVtb3ZlVG9kbzpob3ZlciwgLnJlbW92ZVRvZG86Zm9jdXMsIC5kb25lVGFzazpob3ZlciwgLmRvbmVUYXNrOmZvY3VzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmYjgzMzI7XFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMSkgMCA0cHggMTJweDtcXG59XFxuXFxuLnJlbW92ZVRvZG86aG92ZXIsIC5kb25lVGFzazpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XFxufVxcblxcbi5yZW1vdmVUb2RvOmFjdGl2ZSwgLmRvbmVUYXNrOmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzg1MDAwO1xcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAuMDYpIDAgMnB4IDRweDtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcXG59XFxuXFxuLmRvbmV7XFxuICBiYWNrZ3JvdW5kOiAjZWVlZWVlO1xcbmJhY2tncm91bmQ6IC1tb3otcmFkaWFsLWdyYWRpZW50KGNlbnRlciwgZWxsaXBzZSBjb3ZlciwgICNlZWVlZWUgMCUsICNjY2NjY2MgMTAwJSk7XFxuYmFja2dyb3VuZDogLXdlYmtpdC1yYWRpYWwtZ3JhZGllbnQoY2VudGVyLCBlbGxpcHNlIGNvdmVyLCAgI2VlZWVlZSAwJSwjY2NjY2NjIDEwMCUpO1xcbmJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChlbGxpcHNlIGF0IGNlbnRlciwgICNlZWVlZWUgMCUsI2NjY2NjYyAxMDAlKTtcXG5maWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudCggc3RhcnRDb2xvcnN0cj0nI2VlZWVlZScsIGVuZENvbG9yc3RyPScjY2NjY2NjJyxHcmFkaWVudFR5cGU9MSApO1xcblxcbn1cXG5cXG4ucmVtb3ZlVG9kb3tcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvdHRvbTogMTBweDtcXG4gIGxlZnQ6IDEwcHg7XFxufVxcblxcblxcbi5kb25lVGFza3tcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvdHRvbTogMTBweDtcXG4gIHJpZ2h0OiAxMHB4O1xcbn1cXG5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhlYWRlcigpIHtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKVxuICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKCd0aXRsZScpXG5cbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIHRpdGxlLnRleHRDb250ZW50ID0gXCJUby1Eby1MaXN0XCJcblxuICAgIGhlYWRlci5hcHBlbmRDaGlsZCh0aXRsZSlcblxuICAgIHJldHVybiBoZWFkZXJcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGRQcm9qZWN0RWxlbWVudCgpe1xuICAgIGNvbnN0IGFkZFByb2plY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGFkZFByb2plY3REaXYuc2V0QXR0cmlidXRlKCdpZCcsICdhZGRQcm9qZWN0RGl2JylcblxuICAgIGNvbnN0IHByb2plY3ROYW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgcHJvamVjdE5hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpXG4gICAgcHJvamVjdE5hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Byb2plY3ROYW1lSW5wdXQnKVxuXG4gICAgY29uc3QgYWRkUHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgYWRkUHJvamVjdC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2FkZFByb2plY3QnKVxuICAgIGFkZFByb2plY3QudGV4dENvbnRlbnQgPSAnQWRkJ1xuXG4gICAgY29uc3QgY2xvc2VBZGRQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICBjbG9zZUFkZFByb2plY3Quc2V0QXR0cmlidXRlKCdpZCcsICdjbG9zZUFkZFByb2plY3QnKVxuICAgIGNsb3NlQWRkUHJvamVjdC50ZXh0Q29udGVudCA9ICdDbG9zZSdcblxuXG5cbiAgICBhZGRQcm9qZWN0RGl2LmFwcGVuZENoaWxkKHByb2plY3ROYW1lSW5wdXQpXG4gICAgYWRkUHJvamVjdERpdi5hcHBlbmRDaGlsZChhZGRQcm9qZWN0KVxuICAgIGFkZFByb2plY3REaXYuYXBwZW5kQ2hpbGQoY2xvc2VBZGRQcm9qZWN0KVxuXG4gICAgcmV0dXJuIGFkZFByb2plY3REaXZcblxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNpZGViYXJFbGVtZW50KCkge1xuICAgIGNvbnN0IHNpZGVCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHNpZGVCYXIuc2V0QXR0cmlidXRlKCdpZCcsJ3NpZGViYXInKVxuXG4gICAgY29uc3QgZGl2RGVmYXVsdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgZGl2RGVmYXVsdC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2RpdkRlZmF1bHQnKVxuXG4gICAgY29uc3QgZGVmYXVsdEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJylcbiAgICBkZWZhdWx0SGVhZGVyLmNsYXNzTGlzdC5hZGQoJ3NpZGViYXItaGVhZGVyJylcbiAgICBkZWZhdWx0SGVhZGVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnZGVmYXVsdEhlYWRlcicpXG4gICAgZGVmYXVsdEhlYWRlci50ZXh0Q29udGVudCA9ICdEZWZhdWx0J1xuXG4gICAgY29uc3QgZGVmYXVsdFByb2plY3RzTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgZGVmYXVsdFByb2plY3RzTGlzdC5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWxpc3QnKVxuICAgIGRlZmF1bHRQcm9qZWN0c0xpc3Quc2V0QXR0cmlidXRlKCdpZCcsICdkZWZhdWx0UHJvamVjdHNMaXN0JylcbiAgICBcblxuICAgIGRpdkRlZmF1bHQuYXBwZW5kQ2hpbGQoZGVmYXVsdEhlYWRlcilcbiAgICBkaXZEZWZhdWx0LmFwcGVuZENoaWxkKGRlZmF1bHRQcm9qZWN0c0xpc3QpXG5cblxuICAgIGNvbnN0IGRpdlByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGRpdlByb2plY3Quc2V0QXR0cmlidXRlKCdpZCcsICdkaXZQcm9qZWN0JylcblxuICAgIGNvbnN0IHByb2plY3RIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpXG4gICAgcHJvamVjdEhlYWRlci5jbGFzc0xpc3QuYWRkKCdzaWRlYmFyLWhlYWRlcicpXG4gICAgcHJvamVjdEhlYWRlci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Byb2plY3RIZWFkZXInKVxuICAgIHByb2plY3RIZWFkZXIudGV4dENvbnRlbnQgPSAnUHJvamVjdCdcblxuICAgIGNvbnN0IG9wZW5BZGRQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICBvcGVuQWRkUHJvamVjdC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ29wZW5BZGRQcm9qZWN0JylcbiAgICBvcGVuQWRkUHJvamVjdC50ZXh0Q29udGVudCA9ICdBZGQgTmV3IFByb2plY3QnXG5cbiAgICBjb25zdCB1c2VyUHJvamVjdHNMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICB1c2VyUHJvamVjdHNMaXN0LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtbGlzdCcpXG4gICAgdXNlclByb2plY3RzTGlzdC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3VzZXJQcm9qZWN0c0xpc3QnKVxuXG4gICAgZGl2UHJvamVjdC5hcHBlbmRDaGlsZChwcm9qZWN0SGVhZGVyKVxuICAgIGRpdlByb2plY3QuYXBwZW5kQ2hpbGQob3BlbkFkZFByb2plY3QpXG4gICAgZGl2UHJvamVjdC5hcHBlbmRDaGlsZCh1c2VyUHJvamVjdHNMaXN0KVxuXG4gICAgc2lkZUJhci5hcHBlbmRDaGlsZChkaXZEZWZhdWx0KVxuICAgIHNpZGVCYXIuYXBwZW5kQ2hpbGQoZGl2UHJvamVjdClcblxuXG4gICAgcmV0dXJuIHNpZGVCYXJcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGRpbmdOZXdUYXNrRWxlbWVudCgpe1xuXG4gICAgY29uc3QgbmV3VGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgbmV3VGFzay5zZXRBdHRyaWJ1dGUoJ2lkJywgJ25ld1Rhc2snKVxuICAgIFxuICAgIGNvbnN0IG9wZW5Nb2RhbEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgb3Blbk1vZGFsQnRuLnNldEF0dHJpYnV0ZSgnaWQnLCAnb3BlbkFkZFRhc2tNb2RhbCcpXG4gICAgb3Blbk1vZGFsQnRuLnRleHRDb250ZW50ID0gXCJBZGQgTmV3IFRhc2tcIlxuXG4gICAgY29uc3QgZGl2TW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGRpdk1vZGFsLnNldEF0dHJpYnV0ZSgnaWQnLCAnZGl2TW9kYWwnKVxuICAgIGRpdk1vZGFsLmNsYXNzTGlzdC5hZGQoJ21vZGFsJylcblxuICAgIGNvbnN0IGNsb3NlTW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcbiAgICBjbG9zZU1vZGFsLmNsYXNzTGlzdC5hZGQoJ2Nsb3NlJylcbiAgICBjbG9zZU1vZGFsLnRleHRDb250ZW50ID0gXCJcXHUyNzRDXCJcblxuICAgIGNvbnN0IGxhYmVsVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4gICAgbGFiZWxUaXRsZS50ZXh0Q29udGVudCA9IFwiVGl0bGU6IFwiXG5cbiAgICBjb25zdCB0aXRsZVRvZG9JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICB0aXRsZVRvZG9JbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpXG4gICAgdGl0bGVUb2RvSW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsICdhZGRUaXRsZScpXG5cbiAgICBjb25zdCBsYWJlbERlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4gICAgbGFiZWxEZXNjLnRleHRDb250ZW50ID0gJ0Rlc2NyaXB0aW9uOiAnXG5cbiAgICBjb25zdCBkZXNjVG9kb0lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgIGRlc2NUb2RvSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKVxuICAgIGRlc2NUb2RvSW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsICdhZGREZXNjJylcblxuICAgIGNvbnN0IGxhYmVsRHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICBsYWJlbER1ZURhdGUudGV4dENvbnRlbnQgPSAnRHVlIERhdGU6ICdcblxuICAgIGNvbnN0IGR1ZURhdGVUb2RvSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgZHVlRGF0ZVRvZG9JbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnZGF0ZScpXG4gICAgZHVlRGF0ZVRvZG9JbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2FkZER1ZURhdGUnKVxuICAgIGR1ZURhdGVUb2RvSW5wdXQuc2V0QXR0cmlidXRlKCd2YWx1ZScsIChuZXcgRGF0ZSgpKS50b0pTT04oKS5zbGljZSgwLCAxMCkpXG5cbiAgICBjb25zdCBsYWJlbFByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgIGxhYmVsUHJpb3JpdHkudGV4dENvbnRlbnQgPSBcIlByaW9yaXR5OiBcIlxuXG4gICAgY29uc3QgcHJpb3JpdHlUb2RvSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgcHJpb3JpdHlUb2RvSW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsICdhZGRQcmlvcml0eScpXG4gICAgcHJpb3JpdHlUb2RvSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3JhbmdlJylcbiAgICBwcmlvcml0eVRvZG9JbnB1dC5zZXRBdHRyaWJ1dGUoJ21pbicsICcwJylcbiAgICBwcmlvcml0eVRvZG9JbnB1dC5zZXRBdHRyaWJ1dGUoJ21heCcsICcyJylcbiAgICBwcmlvcml0eVRvZG9JbnB1dC5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJzEnKVxuXG4gICAgY29uc3QgYnRuQWRkVGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgYnRuQWRkVGFzay5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2FkZFRhc2snKVxuICAgIGJ0bkFkZFRhc2sudGV4dENvbnRlbnQgPSBcIkFkZCBUYXNrXCJcblxuICAgIG9wZW5Nb2RhbEJ0bi5vbmNsaWNrID0gZnVuY3Rpb24oKXtcbiAgICAgICAgZGl2TW9kYWwuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIlxuICAgIH1cblxuICAgIGNsb3NlTW9kYWwub25jbGljayA9IGZ1bmN0aW9uKCl7XG4gICAgICAgIGRpdk1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIlxuICAgIH1cblxuICAgIHdpbmRvdy5vbmNsaWNrID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgaWYgKGV2ZW50LnRhcmdldCA9PSBkaXZNb2RhbCkge1xuICAgICAgICAgIGRpdk1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgfVxuICAgICAgfVxuXG5cbiAgICBkaXZNb2RhbC5hcHBlbmRDaGlsZChjbG9zZU1vZGFsKVxuICAgIGRpdk1vZGFsLmFwcGVuZENoaWxkKGxhYmVsVGl0bGUpXG4gICAgZGl2TW9kYWwuYXBwZW5kQ2hpbGQodGl0bGVUb2RvSW5wdXQpXG4gICAgZGl2TW9kYWwuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnInKSlcbiAgICBkaXZNb2RhbC5hcHBlbmRDaGlsZChsYWJlbERlc2MpXG4gICAgZGl2TW9kYWwuYXBwZW5kQ2hpbGQoZGVzY1RvZG9JbnB1dClcbiAgICBkaXZNb2RhbC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdicicpKVxuICAgIGRpdk1vZGFsLmFwcGVuZENoaWxkKGxhYmVsRHVlRGF0ZSlcbiAgICBkaXZNb2RhbC5hcHBlbmRDaGlsZChkdWVEYXRlVG9kb0lucHV0KVxuICAgIGRpdk1vZGFsLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2JyJykpXG4gICAgZGl2TW9kYWwuYXBwZW5kQ2hpbGQobGFiZWxQcmlvcml0eSlcbiAgICBkaXZNb2RhbC5hcHBlbmRDaGlsZChwcmlvcml0eVRvZG9JbnB1dClcbiAgICBkaXZNb2RhbC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdicicpKVxuICAgIGRpdk1vZGFsLmFwcGVuZENoaWxkKGJ0bkFkZFRhc2spXG5cbiAgICBuZXdUYXNrLmFwcGVuZENoaWxkKG9wZW5Nb2RhbEJ0bilcbiAgICBuZXdUYXNrLmFwcGVuZENoaWxkKGRpdk1vZGFsKVxuXG5cbiAgICByZXR1cm4gbmV3VGFza1xuICAgIFxufSAiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkaXNwbGF5VG9kb3NFbGVtZW50KCl7XG4gICAgY29uc3QgZGlzcGxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgZGlzcGxheS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2Rpc3BsYXknKVxuXG4gICAgcmV0dXJuIGRpc3BsYXlcbn0iLCJpbXBvcnQgYWRkaW5nTmV3VGFza0VsZW1lbnQgZnJvbSBcIi4vYWRkaW5nTmV3VGFza0VsZW1lbnRcIlxuaW1wb3J0IGRpc3BsYXlUb2Rvc0VsZW1lbnQgZnJvbSBcIi4vZGlzcGxheVRvZG9zRWxlbWVudFwiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHdvcmtBcmVhRWxlbWVudCgpe1xuICAgIGNvbnN0IHdvcmtBcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICB3b3JrQXJlYS5zZXRBdHRyaWJ1dGUoJ2lkJywnd29ya0FyZWEnKVxuXG4gICAgd29ya0FyZWEuYXBwZW5kQ2hpbGQoYWRkaW5nTmV3VGFza0VsZW1lbnQoKSlcbiAgICB3b3JrQXJlYS5hcHBlbmRDaGlsZChkaXNwbGF5VG9kb3NFbGVtZW50KCkpXG5cbiAgICByZXR1cm4gd29ya0FyZWFcblxufSIsImltcG9ydCB0b2RvQ2FyZCBmcm9tIFwiLi90b2RvQ2FyZFwiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRpc3BsYXlUb2RvcyAoYXJyVG9kb3MpIHtcbiAgICBjb25zdCB0b2RvTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgdG9kb0xpc3Quc2V0QXR0cmlidXRlKCdpZCcsJ3RvZG9MaXN0JylcblxuICAgIGFyclRvZG9zLmZvckVhY2godG9kbyA9PiB7XG4gICAgICAgIHRvZG9MaXN0LmFwcGVuZENoaWxkKHRvZG9DYXJkKHRvZG8pKVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRvZG9MaXN0XG59IiwiaW1wb3J0IHdvcmtBcmVhRWxlbWVudCBmcm9tIFwiLi9Xb3JrQXJlYS93b3JrQXJlYUVsZW1lbnRcIlxuaW1wb3J0IHNpZGViYXJFbGVtZW50IGZyb20gXCIuL1NpZGViYXIvc2lkZWJhckVsZW1lbnRcIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbml0aWFsTG9hZCAoKSB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29udGVudC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NvbnRlbnQnKVxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoc2lkZWJhckVsZW1lbnQoKSlcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHdvcmtBcmVhRWxlbWVudCgpKVxuXG4gICAgcmV0dXJuIGNvbnRlbnRcblxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvZG9DYXJkKHRvZG8pIHtcbiAgICBjb25zdCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjYXJkLmNsYXNzTGlzdC5hZGQoJ2NhcmQnKVxuICAgIGNhcmQuc2V0QXR0cmlidXRlKCdpZCcsIHRvZG8uZ2V0SWQoKSlcblxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2hlYWRlckNhcmQnKVxuXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9IHRvZG8uZ2V0VGl0bGUoKVxuXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKHRpdGxlKVxuICAgIGNhcmQuYXBwZW5kQ2hpbGQoaGVhZGVyKVxuXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29udGFpbmVyQ2FyZCcpXG5cbiAgICBjb25zdCBkZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgZGVzYy50ZXh0Q29udGVudCA9IHRvZG8uZ2V0RGVzY3JpcHRpb24oKVxuXG4gICAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIGR1ZURhdGUudGV4dENvbnRlbnQgPSB0b2RvLmdldER1ZURhdGUoKVxuXG4gICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBsZXQgcHJpb3JpdFRleHQgPSAnJ1xuICAgIGlmKHRvZG8uZ2V0UHJpb3JpdHkoKSA9PT0gMCl7XG4gICAgICAgIHByaW9yaXRUZXh0ID0gJ0xvdydcbiAgICB9XG4gICAgZWxzZSBpZih0b2RvLmdldFByaW9yaXR5KCkgPT09IDEpe1xuICAgICAgICBwcmlvcml0VGV4dCA9ICdNZWRpdW0nXG4gICAgfVxuICAgIGVsc2V7XG4gICAgICAgIHByaW9yaXRUZXh0ID0gJ0hpZ2gnXG4gICAgfVxuICAgIHByaW9yaXR5LnRleHRDb250ZW50ID0gcHJpb3JpdFRleHRcblxuICAgIGNvbnN0IGRlbGV0ZVRvZG9CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIGRlbGV0ZVRvZG9CdG4uY2xhc3NMaXN0LmFkZCgncmVtb3ZlVG9kbycpXG4gICAgZGVsZXRlVG9kb0J0bi5kYXRhc2V0LmlkID0gdG9kby5nZXRJZCgpXG4gICAgZGVsZXRlVG9kb0J0bi50ZXh0Q29udGVudCA9ICdSZW1vdmUnXG5cbiAgICBjb25zdCBjb21wbGV0ZVRvZG9CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIGNvbXBsZXRlVG9kb0J0bi5jbGFzc0xpc3QuYWRkKCdkb25lVGFzaycpXG4gICAgY29tcGxldGVUb2RvQnRuLmRhdGFzZXQuaWQgPSB0b2RvLmdldElkKClcbiAgICBjb21wbGV0ZVRvZG9CdG4udGV4dENvbnRlbnQgPSBcIlRhc2sgZG9uZVwiXG5cblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChkZXNjKVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChkdWVEYXRlKVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChwcmlvcml0eSlcbiAgICBjYXJkLmFwcGVuZENoaWxkKGNvbnRhaW5lcilcbiAgICBjYXJkLmFwcGVuZENoaWxkKGRlbGV0ZVRvZG9CdG4pXG4gICAgY2FyZC5hcHBlbmRDaGlsZChjb21wbGV0ZVRvZG9CdG4pXG5cblxuICAgIHJldHVybiBjYXJkXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBpbml0aWFsTG9hZCBmcm9tIFwiLi9pbml0aWFsTG9hZFwiXG5pbXBvcnQgZGlzcGxheVRvZG9zIGZyb20gXCIuL2Rpc3BsYXlUb2Rvc1wiXG5pbXBvcnQgdG9kb0NhcmQgZnJvbSBcIi4vdG9kb0NhcmRcIlxuaW1wb3J0ICcuL3N0eWxlLmNzcydcbmltcG9ydCBhZGRQcm9qZWN0RWxlbWVudCBmcm9tIFwiLi9TaWRlYmFyL2FkZFByb2plY3RFbGVtZW50XCJcbmltcG9ydCBoZWFkZXIgZnJvbSBcIi4vSGVhZGVyL2hlYWRlckVsZW1lbnRcIlxuXG4vL09iamVjdCBvZiBpbmRpdmlkdWFsIHRvZG9zXG5jb25zdCBUb0RvcyA9ICgpPT57XG4gICAgbGV0IHRpdGxlPVwiTm8gdGl0bGVcIlxuICAgIGxldCBkZXNjcmlwdGlvbj1cIlwiXG4gICAgbGV0IGR1ZURhdGU9IChuZXcgRGF0ZSgpKS50b0pTT04oKS5zbGljZSgwLCAxMClcbiAgICBsZXQgcHJpb3JpdHk9MFxuICAgIGxldCBpZCA9IDBcbiAgICBsZXQgc3RhdHVzID0gZmFsc2VcblxuICAgIGNvbnN0IHNldFRpdGxlID0gbmV3VGl0bGUgPT4gdGl0bGUgPSBuZXdUaXRsZVxuICAgIGNvbnN0IHNldERlc2NyaXB0aW9uID0gbmV3RGVzY3JpcHRpb24gPT4gZGVzY3JpcHRpb24gPSBuZXdEZXNjcmlwdGlvblxuICAgIGNvbnN0IHNldER1ZURhdGUgPSBuZXdEdWVEYXRlID0+IGR1ZURhdGUgPSBuZXdEdWVEYXRlXG4gICAgY29uc3Qgc2V0UHJpb3JpdHkgPSBuZXdQcmlvcnR5ID0+IHByaW9yaXR5ID0gbmV3UHJpb3J0eVxuICAgIGNvbnN0IHNldElkID0gbmV3SWQgPT4gaWQgPSBuZXdJZFxuICAgIGNvbnN0IHNldFN0YXR1cyA9IG5ld1N0YXR1cyA9PiBzdGF0dXMgPSBuZXdTdGF0dXNcblxuICAgIGNvbnN0IGdldFRpdGxlID0gKCkgPT4gdGl0bGVcbiAgICBjb25zdCBnZXREZXNjcmlwdGlvbiA9ICgpID0+IGRlc2NyaXB0aW9uXG4gICAgY29uc3QgZ2V0RHVlRGF0ZSA9ICgpID0+IGR1ZURhdGVcbiAgICBjb25zdCBnZXRQcmlvcml0eSA9ICgpID0+IHByaW9yaXR5XG4gICAgY29uc3QgZ2V0SWQgPSAoKSA9PiBpZFxuICAgIGNvbnN0IGdldFN0YXR1cyA9ICgpID0+IHN0YXR1c1xuXG4gICAgcmV0dXJuIHtzZXRUaXRsZSwgc2V0RGVzY3JpcHRpb24sIHNldER1ZURhdGUsIHNldFByaW9yaXR5LCBzZXRJZCxnZXRUaXRsZSwgc2V0U3RhdHVzLCBnZXREZXNjcmlwdGlvbiwgZ2V0RHVlRGF0ZSwgZ2V0UHJpb3JpdHksIGdldElkLCBnZXRTdGF0dXN9XG5cbn1cblxuLy9Db2xsZWN0aW9uIG9mIFRvZG9zXG5jb25zdCBjb2xsZWN0aW9uVG9kb3MgPSAobmFtZSwgbGlzdElkKSA9PntcbiAgICBsZXQgYXJyVG9kb3MgPSBbXVxuICAgIGNvbnN0IGFkZFRvRG9zID0gbmV3VG9kbyA9PiBhcnJUb2Rvcy5wdXNoKG5ld1RvZG8pXG5cbiAgICBjb25zdCBnZXROYW1lID0oKSA9PiBuYW1lXG5cbiAgICBjb25zdCBnZXRMaXN0SWQgPSAoKSAgPT4gbGlzdElkXG5cbiAgICBjb25zdCBkZWxldGVUb2RvcyA9IChpZCkgPT4ge1xuXG4gICAgICAgIGZvcihsZXQgaT0wOyBpPGFyclRvZG9zLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgIGlmKGFyclRvZG9zW2ldLmdldElkKCkgPT09IGlkKXtcbiAgICAgICAgICAgICAgICBhcnJUb2Rvcy5zcGxpY2UoaSwxKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9IFxuXG4gICAgY29uc3QgY2hhbmdlU3RhdHVzID0gKGlkKSA9PntcbiAgICAgICAgYXJyVG9kb3MuZm9yRWFjaCgodG9kbykgPT57XG4gICAgICAgICAgICBpZih0b2RvLmdldElkKCkgPT09IGlkKXtcbiAgICAgICAgICAgICAgICB0b2RvLnNldFN0YXR1cyghKHRvZG8uZ2V0U3RhdHVzKCkpKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgfVxuXG4gICAgY29uc3QgZ2V0TGVuZ3RoID0gKCkgPT4gIGFyclRvZG9zLmxlbmd0aFxuXG4gICAgcmV0dXJue2FyclRvZG9zLCBhZGRUb0RvcywgZGVsZXRlVG9kb3MsIGdldExlbmd0aCwgY2hhbmdlU3RhdHVzLCBnZXROYW1lLCBnZXRMaXN0SWR9XG59XG5cbmNvbnN0IHRvZG9MaXN0ID0gY29sbGVjdGlvblRvZG9zKCdUb2RheScsIDEpXG5jb25zdCB0b2RvTGlzdDEgPSBjb2xsZWN0aW9uVG9kb3MoJ1RvbW9ycm93JywgMilcblxuY29uc3QgZG9IdyA9IFRvRG9zKClcbmRvSHcuc2V0VGl0bGUoJ2RvIEhvbWV3b3JrJylcbmRvSHcuc2V0RGVzY3JpcHRpb24oJ2NvbGxlZ2UgaG9tZXdvcmsnKVxuZG9Idy5zZXRQcmlvcml0eSgwKVxuZG9Idy5zZXRJZCgxKVxuXG5jb25zdCBleGNlcmNpc2UgPSBUb0RvcygpXG5leGNlcmNpc2Uuc2V0VGl0bGUoJ2V4Y2VyY2lzZScpXG5leGNlcmNpc2Uuc2V0RGVzY3JpcHRpb24oJ2RvIGV4Y2VyY2lzZSBpbiBldmVuaW5nJylcbmV4Y2VyY2lzZS5zZXRQcmlvcml0eSgyKVxuZXhjZXJjaXNlLnNldElkKDIpXG5cbmNvbnN0IGNwID0gVG9Eb3MoKVxuY3Auc2V0VGl0bGUoJ0NvbXBldGl0dmUgUHJvZ3JhbW1pbmcnKVxuY3Auc2V0RGVzY3JpcHRpb24oJ29wZW4gbGVldGNvZGUgYW5kIGNvZGVjaGVmJylcbmNwLnNldElkKDEpXG5cbnRvZG9MaXN0LmFkZFRvRG9zKGRvSHcpXG50b2RvTGlzdC5hZGRUb0RvcyhleGNlcmNpc2UpXG5cbnRvZG9MaXN0MS5hZGRUb0RvcyhjcClcblxuY29uc3QgYWxsUHJvamVjdHNMaXN0ID0gW11cblxuYWxsUHJvamVjdHNMaXN0LnB1c2godG9kb0xpc3QpXG5hbGxQcm9qZWN0c0xpc3QucHVzaCh0b2RvTGlzdDEpXG5cblxuZnVuY3Rpb24gY2xlYXJFbGVtZW50Q29udGVudChlbGVtZW50SUQpIHtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChlbGVtZW50SUQpO1xuICAgICAgXG4gICAgd2hpbGUoZGl2LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgZGl2LnJlbW92ZUNoaWxkKGRpdi5maXJzdENoaWxkKTtcbiAgICB9XG59XG5cbmxldCBzZWxlY3RlZFByb2plY3RJZCA9IGFsbFByb2plY3RzTGlzdFswXS5nZXRMaXN0SWQoKVxuXG5jb25zdCBoYW5kbGVBZGROZXdUYXNrID0gKGUpID0+e1xuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZFRpdGxlJykudmFsdWVcbiAgICBjb25zdCBkZXNjID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZERlc2MnKS52YWx1ZVxuICAgIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkRHVlRGF0ZScpLnZhbHVlXG4gICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkUHJpb3JpdHknKS52YWx1ZVxuICAgIFxuXG4gICAgY29uc3QgbmV3VG9kbyA9IFRvRG9zKClcbiAgICBuZXdUb2RvLnNldFRpdGxlKHRpdGxlKVxuICAgIG5ld1RvZG8uc2V0RGVzY3JpcHRpb24oZGVzYylcbiAgICBuZXdUb2RvLnNldER1ZURhdGUoZHVlRGF0ZSlcbiAgICBuZXdUb2RvLnNldFByaW9yaXR5KHByaW9yaXR5KVxuICAgIFxuICAgIFxuICAgIGFsbFByb2plY3RzTGlzdC5mb3JFYWNoKHByb2plY3Q9PntcbiAgICAgICAgaWYocHJvamVjdC5nZXRMaXN0SWQoKSA9PT0gc2VsZWN0ZWRQcm9qZWN0SWQpe1xuICAgICAgICAgICAgbmV3VG9kby5zZXRJZChwcm9qZWN0LmdldExlbmd0aCgpKzEpXG4gICAgICAgICAgICBwcm9qZWN0LmFkZFRvRG9zKG5ld1RvZG8pXG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgY29uc3QgdG9kb0FkZEVsZW1lbnQgPXRvZG9DYXJkKG5ld1RvZG8pXG4gICAgXG4gICAgdG9kb0FkZEVsZW1lbnQucXVlcnlTZWxlY3RvcignLnJlbW92ZVRvZG8nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZURlbGV0ZVRhc2spXG4gICAgdG9kb0FkZEVsZW1lbnQucXVlcnlTZWxlY3RvcignLmRvbmVUYXNrJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYWRubGVTdGF0dXNDaGFuZ2UpXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG9MaXN0JykuYXBwZW5kQ2hpbGQodG9kb0FkZEVsZW1lbnQpXG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkVGl0bGUnKS52YWx1ZSA9ICcnXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZERlc2MnKS52YWx1ZSA9ICcnXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZER1ZURhdGUnKS52YWx1ZSA9IChuZXcgRGF0ZSgpKS50b0pTT04oKS5zbGljZSgwLCAxMClcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkUHJpb3JpdHknKS52YWx1ZSA9IDEgICAgXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkaXZNb2RhbFwiKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG59XG5cbmNvbnN0IGhhbmRsZURlbGV0ZVRhc2sgPSAoZSkgPT57XG4gICAgY29uc3QgdGFza0lkID0gcGFyc2VJbnQoZS50YXJnZXQuZGF0YXNldC5pZClcblxuICAgIGFsbFByb2plY3RzTGlzdC5mb3JFYWNoKHByb2plY3QgPT57XG4gICAgICAgIGlmKHByb2plY3QuZ2V0TGlzdElkKCkgPT09IHNlbGVjdGVkUHJvamVjdElkKXtcbiAgICAgICAgICAgIHByb2plY3QuZGVsZXRlVG9kb3ModGFza0lkKVxuXG4gICAgICAgIH1cbiAgICB9KVxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke3Rhc2tJZH1gKS5yZW1vdmUoKVxufVxuXG5jb25zdCBoYWRubGVTdGF0dXNDaGFuZ2UgPSAoZSkgPT57XG5cbiAgICBjb25zdCB0YXNrSWQgPSBwYXJzZUludChlLnRhcmdldC5kYXRhc2V0LmlkKVxuICAgIGFsbFByb2plY3RzTGlzdC5mb3JFYWNoKHByb2plY3QgPT57XG4gICAgICAgIGlmKHByb2plY3QuZ2V0TGlzdElkKCkgPT09IHNlbGVjdGVkUHJvamVjdElkKXtcbiAgICAgICAgICAgIHByb2plY3QuY2hhbmdlU3RhdHVzKHRhc2tJZClcbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHt0YXNrSWR9YCkuY2xhc3NMaXN0LnRvZ2dsZSgnZG9uZScpXG5cbn1cblxuY29uc3QgaGFuZGxlUHJvamVjdEJ0biA9IChlKT0+e1xuICAgIHNlbGVjdGVkUHJvamVjdElkID0gIHBhcnNlSW50KGUudGFyZ2V0LmlkLnNsaWNlKDcpKVxuICAgIGNsZWFyRWxlbWVudENvbnRlbnQoJ2Rpc3BsYXknKVxuICAgIGNvbnN0IHByb2plY3RUb1Nob3cgPSBhbGxQcm9qZWN0c0xpc3QuZmluZChwcm9qZWN0ID0+IHByb2plY3QuZ2V0TGlzdElkKCkgPT09IHNlbGVjdGVkUHJvamVjdElkKVxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkaXNwbGF5JykuYXBwZW5kQ2hpbGQoZGlzcGxheVRvZG9zKHByb2plY3RUb1Nob3cuYXJyVG9kb3MpKVxuXG4gICAgZGlzcGxheUxvYWRlci5hZGRSZW1vdmVFdmVudExpc3RlbmVycygpXG59XG5cblxuY29uc3QgaGFuZGxlUHJvamVjdFJlbW92ZUJ0biA9IChlKSA9PntcbiAgICBjb25zdCBwcm9qZWN0SWQgPSBwYXJzZUludChlLnRhcmdldC5pZC5zbGljZSgxMykpXG5cbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgcHJvamVjdExpc3RJdGVtJHtwcm9qZWN0SWR9YCkucmVtb3ZlKClcblxuICAgIGZvcihsZXQgaT0wOyBpPGFsbFByb2plY3RzTGlzdC5sZW5ndGg7IGkrKyl7XG4gICAgICAgIGlmKGFsbFByb2plY3RzTGlzdFtpXS5nZXRMaXN0SWQoKSA9PT0gcHJvamVjdElkKXtcbiAgICAgICAgICAgIGFsbFByb2plY3RzTGlzdC5zcGxpY2UoaSwxKVxuICAgICAgICB9XG4gICAgfVxuXG59XG5cbmNvbnN0IGhhbmRsZU9wZW5BZGRQcm9qZWN0ID0gKGUpPT57XG4gICAgLy9hZGQgJ2FkZFByb2plY3RFTGVtZW50JyB0byAjZGl2UHJvamVjdFxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkaXZQcm9qZWN0JykuYXBwZW5kQ2hpbGQoYWRkUHJvamVjdEVsZW1lbnQoKSlcbiAgICBlLnRhcmdldC5kaXNhYmxlZCA9IHRydWVcblxuICAgIC8vdGhlIGNsb3NlYWRkcHJvamVjdCBpcyBub3QgcHJlc2VudCBpbiB0aGUgZG9tIGFzIHdlIGFkZCBpdCBhZnRlciBjbGlja2luZyB0aGUgYnV0dG9uXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Nsb3NlQWRkUHJvamVjdCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KT0+e1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkUHJvamVjdERpdicpLnJlbW92ZSgpXG4gICAgICAgIGUudGFyZ2V0LmRpc2FibGVkID0gZmFsc2VcbiAgICB9KVxuXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZFByb2plY3QnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCk9PntcbiAgICAgICAgZS50YXJnZXQuZGlzYWJsZWQgPSBmYWxzZVxuICAgICAgICBjb25zdCBuYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3ROYW1lSW5wdXQnKS52YWx1ZSA9PT0gXCJcIiA/IFwiUHJvamVjdFwiIDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3ROYW1lSW5wdXQnKS52YWx1ZVxuICAgICAgICBjb25zdCBuZXdUb2RvTGlzdCA9IGNvbGxlY3Rpb25Ub2RvcyhuYW1lLCBhbGxQcm9qZWN0c0xpc3QubGVuZ3RoKzEpXG4gICAgICAgIGFsbFByb2plY3RzTGlzdC5wdXNoKG5ld1RvZG9MaXN0KVxuXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRQcm9qZWN0RGl2JykucmVtb3ZlKClcblxuICAgICAgICBjb25zdCBwcm9qZWN0TGlzdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBwcm9qZWN0TGlzdEl0ZW0uY2xhc3NMaXN0LmFkZCgncHJvamVjdExpc3RJdGVtJylcbiAgICAgICAgcHJvamVjdExpc3RJdGVtLnNldEF0dHJpYnV0ZSgnaWQnLCBgcHJvamVjdExpc3RJdGVtJHthbGxQcm9qZWN0c0xpc3QubGVuZ3RofWApXG5cbiAgICAgICAgY29uc3QgbmV3UHJvamVjdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgICAgIG5ld1Byb2plY3RCdG4udGV4dENvbnRlbnQgPSBuZXdUb2RvTGlzdC5nZXROYW1lKClcbiAgICAgICAgbmV3UHJvamVjdEJ0bi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0JylcbiAgICAgICAgbmV3UHJvamVjdEJ0bi5zZXRBdHRyaWJ1dGUoJ2lkJywgYHByb2plY3Qke2FsbFByb2plY3RzTGlzdC5sZW5ndGh9YClcbiAgICAgICAgbmV3UHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsaGFuZGxlUHJvamVjdEJ0bilcblxuICAgICAgICBjb25zdCByZW1vdmVQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICAgICAgcmVtb3ZlUHJvamVjdC50ZXh0Q29udGVudCA9ICdYJ1xuICAgICAgICByZW1vdmVQcm9qZWN0LmNsYXNzTGlzdC5hZGQoJ3JlbW92ZS1wcm9qZWN0JylcbiAgICAgICAgcmVtb3ZlUHJvamVjdC5zZXRBdHRyaWJ1dGUoJ2lkJywgYHJlbW92ZVByb2plY3Qke2FsbFByb2plY3RzTGlzdC5sZW5ndGh9YClcbiAgICAgICAgcmVtb3ZlUHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZVByb2plY3RSZW1vdmVCdG4pXG5cbiAgICAgICAgcHJvamVjdExpc3RJdGVtLmFwcGVuZENoaWxkKG5ld1Byb2plY3RCdG4pXG4gICAgICAgIHByb2plY3RMaXN0SXRlbS5hcHBlbmRDaGlsZChyZW1vdmVQcm9qZWN0KVxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndXNlclByb2plY3RzTGlzdCcpLmFwcGVuZENoaWxkKHByb2plY3RMaXN0SXRlbSlcbiAgICB9KVxuXG59XG5cblxuY29uc3QgZGlzcGxheUxvYWRlciA9ICgoKT0+e1xuXG4gICAgY29uc3QgcGFnZUxvYWQgPSAoKT0+e1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWFpbicpLmFwcGVuZENoaWxkKGhlYWRlcigpKVxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWFpbicpLmFwcGVuZENoaWxkKGluaXRpYWxMb2FkKCkpXG4gICAgfVxuXG4gICAgY29uc3QgdG9kb0Rpc3BsYXkgPSAoKT0+e1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGlzcGxheScpLmFwcGVuZENoaWxkKGRpc3BsYXlUb2RvcyhhbGxQcm9qZWN0c0xpc3RbMF0uYXJyVG9kb3MpKVxuICAgIH0gXG5cbiAgICBjb25zdCBhZGRSZW1vdmVFdmVudExpc3RlbmVycyA9ICgpID0+e1xuICAgICAgICBjb25zdCByZW1vdmVCdG5zID0gWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5yZW1vdmVUb2RvJyldXG5cbiAgICAgICAgcmVtb3ZlQnRucy5mb3JFYWNoKChyZW1vdmVCdG4pPT57XG4gICAgICAgICAgICByZW1vdmVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVEZWxldGVUYXNrKVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGNvbnN0IGFkZFRhc2tFdmVudExpc3RlbmVyID0gKCkgPT57XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGRUYXNrJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGhhbmRsZUFkZE5ld1Rhc2spXG4gICAgfVxuXG4gICAgY29uc3QgYWRkRGVmYXVsdFByb2plY3RzID0gKCkgPT57XG4gICAgICAgIGFsbFByb2plY3RzTGlzdC5mb3JFYWNoKHByb2plY3QgPT57XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0TGlzdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICAgICAgcHJvamVjdExpc3RJdGVtLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RMaXN0SXRlbScpXG4gICAgXG4gICAgICAgICAgICBjb25zdCBpdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICAgICAgICAgIGl0ZW0udGV4dENvbnRlbnQgPSBwcm9qZWN0LmdldE5hbWUoKVxuICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0JylcbiAgICAgICAgICAgIGl0ZW0uc2V0QXR0cmlidXRlKCdpZCcsIGBwcm9qZWN0JHtwcm9qZWN0LmdldExpc3RJZCgpfWApXG5cbiAgICAgICAgICAgIHByb2plY3RMaXN0SXRlbS5hcHBlbmRDaGlsZChpdGVtKVxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RlZmF1bHRQcm9qZWN0c0xpc3QnKS5hcHBlbmRDaGlsZChwcm9qZWN0TGlzdEl0ZW0pXG4gICAgICAgIH0pXG4gICAgfVxuXG5cbiAgICByZXR1cm4ge3BhZ2VMb2FkLCB0b2RvRGlzcGxheSxhZGRUYXNrRXZlbnRMaXN0ZW5lciAsYWRkUmVtb3ZlRXZlbnRMaXN0ZW5lcnMsIGFkZERlZmF1bHRQcm9qZWN0c31cblxufSkoKVxuXG5kaXNwbGF5TG9hZGVyLnBhZ2VMb2FkKClcbmRpc3BsYXlMb2FkZXIudG9kb0Rpc3BsYXkoKVxuZGlzcGxheUxvYWRlci5hZGRUYXNrRXZlbnRMaXN0ZW5lcigpXG5kaXNwbGF5TG9hZGVyLmFkZFJlbW92ZUV2ZW50TGlzdGVuZXJzKClcbmRpc3BsYXlMb2FkZXIuYWRkRGVmYXVsdFByb2plY3RzKClcblxuY29uc3QgZG9uZVRhc2tCdG5zID0gWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kb25lVGFzaycpXVxuXG5kb25lVGFza0J0bnMuZm9yRWFjaCgoZG9uZVRhc2tCdG4pID0+e1xuICAgIGRvbmVUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFkbmxlU3RhdHVzQ2hhbmdlKVxufSlcblxuXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb3BlbkFkZFByb2plY3QnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZU9wZW5BZGRQcm9qZWN0KVxuXG5jb25zdCBwcm9qZWN0QnRucyA9IFsuLi5kb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdwcm9qZWN0JyldXG5wcm9qZWN0QnRucy5mb3JFYWNoKHByb2plY3RCdG4gPT57XG4gICAgcHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZVByb2plY3RCdG4pXG59KVxuXG5cblxuXG5cblxuXG5cblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9