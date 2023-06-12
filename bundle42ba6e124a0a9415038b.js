/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/InBox.js":
/*!**********************!*\
  !*** ./src/InBox.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ inBox)
/* harmony export */ });
/* harmony import */ var _localStorageProps__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./localStorageProps */ "./src/localStorageProps.js");

function inBox() {
  var inBoxData;
  (0,_localStorageProps__WEBPACK_IMPORTED_MODULE_0__.declareDatabase)(inBoxData);
  var inBox = document.createElement('div');
  inBox.classList.add('inBox');
  console.log(inBoxData);
  return {
    inBox: inBox,
    inBoxData: inBoxData
  };
}

/***/ }),

/***/ "./src/addData.js":
/*!************************!*\
  !*** ./src/addData.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addData),
/* harmony export */   displayTasks: () => (/* binding */ displayTasks)
/* harmony export */ });
/* harmony import */ var _remove__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./remove */ "./src/remove.js");
 //store task info in array as html elements

function addData(newTask) {
  var taskElement = [];

  for (var prop in newTask) {
    if (prop === 'priority') {
      taskElement.push(newTask[prop]);
      break;
    }

    taskElement.push("<p>".concat(newTask[prop], "</P>"));
  } //store in local storage and return to display


  return taskElement;
}
function displayTasks(data) {
  var taskContainer = document.createElement('div');
  var priority = data.pop();
  taskContainer.innerHTML = data.join('');
  taskContainer.classList.add('card');
  (0,_remove__WEBPACK_IMPORTED_MODULE_0__["default"])(taskContainer);
  setBackGround(priority, taskContainer);
  return taskContainer;
} //set task background based on priority

function setBackGround(priority, task) {
  if (priority === '1') {
    task.style.backgroundColor = '#f65b5d';
  } else if (priority === '2') {
    task.style.backgroundColor = '#fefe77';
  } else if (priority === '3') {
    task.style.backgroundColor = '#5cacf3';
  }
}

/***/ }),

/***/ "./src/localStorageProps.js":
/*!**********************************!*\
  !*** ./src/localStorageProps.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   declareDatabase: () => (/* binding */ declareDatabase)
/* harmony export */ });
//load up local storage content or empty array if no content
function declareDatabase(database) {
  if (localStorage.getItem('taskDatabase')) {
    database = JSON.parse(localStorage.getItem('taskDatabase'));
  } else {
    database = [];
  }

  console.log(database);
}

/***/ }),

/***/ "./src/remove.js":
/*!***********************!*\
  !*** ./src/remove.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cancelForm: () => (/* binding */ cancelForm),
/* harmony export */   "default": () => (/* binding */ addRemoveBtn),
/* harmony export */   removeOnClick: () => (/* binding */ removeOnClick)
/* harmony export */ });
//task remove button
function addRemoveBtn(container) {
  var removeBtn = document.createElement('input');
  removeBtn.type = 'radio';
  removeBtn.classList.add('removeBtn');
  container.appendChild(removeBtn);
  removeOnClick(removeBtn);
}
function cancelForm(button, form, addTask) {
  button.onclick = function () {
    form.style.display = 'none';
    addTask.style.display = 'block';
  };
} //remove on click behavior

function removeOnClick(btn) {
  btn.addEventListener('click', function () {
    var parent = document.querySelector('.inBox');
    var parentArr = Array.from(parent.children);
    var index = parentArr.indexOf(this.parentNode);
    var inBoxData = JSON.parse(localStorage.getItem('taskDatabase'));
    inBoxData.splice(index, 1);
    localStorage.setItem('taskDatabase', JSON.stringify(inBoxData));
    this.parentNode.remove();
  });
}

/***/ }),

/***/ "./src/tasksComponent.js":
/*!*******************************!*\
  !*** ./src/tasksComponent.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Task)
/* harmony export */ });
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Task = /*#__PURE__*/_createClass(function Task(title, description, date, priority) {
  _classCallCheck(this, Task);

  this.title = title;
  this.description = description;
  this.date = date;
  this.priority = priority;
});



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css ***!
  \*********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n    font-family: sans-serif;\r\n}\r\n\r\nbody {\r\n    height: 100vh;\r\n    display: grid;\r\n    grid-template-rows: max-content auto;\r\n}\r\n\r\nheader {\r\n    padding: 10px;\r\n    background-color: #333333;\r\n\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\nheader h1 {\r\n    font-size: 2.7rem;\r\n    font-weight: bold;\r\n    color: rgb(231, 231, 225);\r\n}\r\n\r\n.logo {\r\n    width: 8%;\r\n}\r\n\r\n\r\n.mainContainer {\r\n    display: grid;\r\n    grid-template-columns: 1fr 3fr;\r\n}\r\n\r\n/******** projects List*********/\r\n\r\n.projectsList {\r\n    background-color: #dddddd;\r\n\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.defaultProjects,\r\n.userProjects {\r\n    padding: 2em 1em;\r\n\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.userProjects h1 {\r\n    margin-bottom: .8em;\r\n}\r\n\r\n.projectBtn,\r\n.addTaskBtn {\r\n    margin: 5px;\r\n    padding: 10px 20px;\r\n    width: 90%;\r\n    background-color: #dddddd;\r\n    border: none;\r\n    font-size: 1em;\r\n    border-radius: 8px;\r\n    text-align: start;\r\n}\r\n\r\n.projectBtn:hover,\r\n.addTaskBtn:hover {\r\n    cursor: pointer;\r\n    background-color: rgba(204, 204, 204, .5);\r\n}\r\n\r\n.projectBtn.active {\r\n    background-color: rgb(180, 180, 180);\r\n}\r\n\r\n.projectBtn i {\r\n    margin-right: 4px;\r\n}\r\n\r\n/************ Tasks pages *************/\r\n\r\n.tasksContainer {\r\n    padding: 2em;\r\n}\r\n\r\n.addTaskBtn {\r\n    background-color: white;\r\n}\r\n\r\nform {\r\n    display: none;\r\n}\r\n\r\nform input,\r\nform button {\r\n    padding: 5px;\r\n    border-radius: 5px;\r\n}\r\n\r\nform button:hover {\r\n    cursor: pointer;\r\n}\r\n\r\n.card {\r\n    padding: 10px;\r\n    border-radius: 8px;\r\n    position: relative;\r\n\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 5px;\r\n    margin: 10px;\r\n}\r\n\r\n.card p:first-child {\r\n    font-size: 1.5rem;\r\n    color: #195abd;\r\n}\r\n\r\n.card>p {\r\n    margin-left: 15px;\r\n}\r\n\r\n.card .removeBtn {\r\n    position: absolute;\r\n    top: 15px;\r\n    left: 2px;\r\n    cursor: pointer;\r\n    appearance: none;\r\n    font: inherit;\r\n    width: 1.15em;\r\n    height: 1.15em;\r\n    background-color: rgb(255, 255, 255);\r\n    border: .1px solid black;\r\n    border-radius: 50%;\r\n}", "",{"version":3,"sources":["webpack://./src/styles/styles.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT,UAAU;IACV,sBAAsB;IACtB,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,aAAa;IACb,oCAAoC;AACxC;;AAEA;IACI,aAAa;IACb,yBAAyB;;IAEzB,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,iBAAiB;IACjB,iBAAiB;IACjB,yBAAyB;AAC7B;;AAEA;IACI,SAAS;AACb;;;AAGA;IACI,aAAa;IACb,8BAA8B;AAClC;;AAEA,gCAAgC;;AAEhC;IACI,yBAAyB;;IAEzB,aAAa;IACb,sBAAsB;AAC1B;;AAEA;;IAEI,gBAAgB;;IAEhB,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;;IAEI,WAAW;IACX,kBAAkB;IAClB,UAAU;IACV,yBAAyB;IACzB,YAAY;IACZ,cAAc;IACd,kBAAkB;IAClB,iBAAiB;AACrB;;AAEA;;IAEI,eAAe;IACf,yCAAyC;AAC7C;;AAEA;IACI,oCAAoC;AACxC;;AAEA;IACI,iBAAiB;AACrB;;AAEA,uCAAuC;;AAEvC;IACI,YAAY;AAChB;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,aAAa;AACjB;;AAEA;;IAEI,YAAY;IACZ,kBAAkB;AACtB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,kBAAkB;IAClB,kBAAkB;;IAElB,aAAa;IACb,sBAAsB;IACtB,QAAQ;IACR,YAAY;AAChB;;AAEA;IACI,iBAAiB;IACjB,cAAc;AAClB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,kBAAkB;IAClB,SAAS;IACT,SAAS;IACT,eAAe;IACf,gBAAgB;IAChB,aAAa;IACb,aAAa;IACb,cAAc;IACd,oCAAoC;IACpC,wBAAwB;IACxB,kBAAkB;AACtB","sourcesContent":["* {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n    font-family: sans-serif;\r\n}\r\n\r\nbody {\r\n    height: 100vh;\r\n    display: grid;\r\n    grid-template-rows: max-content auto;\r\n}\r\n\r\nheader {\r\n    padding: 10px;\r\n    background-color: #333333;\r\n\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\nheader h1 {\r\n    font-size: 2.7rem;\r\n    font-weight: bold;\r\n    color: rgb(231, 231, 225);\r\n}\r\n\r\n.logo {\r\n    width: 8%;\r\n}\r\n\r\n\r\n.mainContainer {\r\n    display: grid;\r\n    grid-template-columns: 1fr 3fr;\r\n}\r\n\r\n/******** projects List*********/\r\n\r\n.projectsList {\r\n    background-color: #dddddd;\r\n\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.defaultProjects,\r\n.userProjects {\r\n    padding: 2em 1em;\r\n\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.userProjects h1 {\r\n    margin-bottom: .8em;\r\n}\r\n\r\n.projectBtn,\r\n.addTaskBtn {\r\n    margin: 5px;\r\n    padding: 10px 20px;\r\n    width: 90%;\r\n    background-color: #dddddd;\r\n    border: none;\r\n    font-size: 1em;\r\n    border-radius: 8px;\r\n    text-align: start;\r\n}\r\n\r\n.projectBtn:hover,\r\n.addTaskBtn:hover {\r\n    cursor: pointer;\r\n    background-color: rgba(204, 204, 204, .5);\r\n}\r\n\r\n.projectBtn.active {\r\n    background-color: rgb(180, 180, 180);\r\n}\r\n\r\n.projectBtn i {\r\n    margin-right: 4px;\r\n}\r\n\r\n/************ Tasks pages *************/\r\n\r\n.tasksContainer {\r\n    padding: 2em;\r\n}\r\n\r\n.addTaskBtn {\r\n    background-color: white;\r\n}\r\n\r\nform {\r\n    display: none;\r\n}\r\n\r\nform input,\r\nform button {\r\n    padding: 5px;\r\n    border-radius: 5px;\r\n}\r\n\r\nform button:hover {\r\n    cursor: pointer;\r\n}\r\n\r\n.card {\r\n    padding: 10px;\r\n    border-radius: 8px;\r\n    position: relative;\r\n\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 5px;\r\n    margin: 10px;\r\n}\r\n\r\n.card p:first-child {\r\n    font-size: 1.5rem;\r\n    color: #195abd;\r\n}\r\n\r\n.card>p {\r\n    margin-left: 15px;\r\n}\r\n\r\n.card .removeBtn {\r\n    position: absolute;\r\n    top: 15px;\r\n    left: 2px;\r\n    cursor: pointer;\r\n    appearance: none;\r\n    font: inherit;\r\n    width: 1.15em;\r\n    height: 1.15em;\r\n    background-color: rgb(255, 255, 255);\r\n    border: .1px solid black;\r\n    border-radius: 50%;\r\n}"],"sourceRoot":""}]);
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
  var list = [];

  // return the list of modules as css string
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
  };

  // import a list of modules into the list
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
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/styles.css":
/*!*******************************!*\
  !*** ./src/styles/styles.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
  }

  // For old IE
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
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
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

/***/ "./src/assets/logo.png":
/*!*****************************!*\
  !*** ./src/assets/logo.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "logo.png";

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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
/* harmony import */ var _styles_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/styles.css */ "./src/styles/styles.css");
/* harmony import */ var _assets_logo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/logo.png */ "./src/assets/logo.png");
/* harmony import */ var _tasksComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tasksComponent */ "./src/tasksComponent.js");
/* harmony import */ var _InBox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./InBox */ "./src/InBox.js");
/* harmony import */ var _addData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./addData */ "./src/addData.js");
/* harmony import */ var _remove__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./remove */ "./src/remove.js");






var logo = document.querySelector('.logo');
logo.src = _assets_logo_png__WEBPACK_IMPORTED_MODULE_1__;
var tasksContainer = document.getElementById('tasksContainer');
var addTask = document.querySelector('.addTaskBtn'); //form data

var form = document.querySelector('form');
var title = document.getElementById('title');
var description = document.getElementById('description');
var date = document.getElementById('date');
var priority = document.getElementById('priority');
var taskBtn = document.getElementById('submit');
var cancelBtn = document.getElementById('cancel');
var inBoxContainer = (0,_InBox__WEBPACK_IMPORTED_MODULE_3__["default"])().inBox;
tasksContainer.insertBefore(inBoxContainer, addTask);
var dataBase = (0,_InBox__WEBPACK_IMPORTED_MODULE_3__["default"])().inBoxData;
addTask.addEventListener('click', function () {
  form.style.display = 'block';
  addTask.style.display = 'none';
});

if (localStorage.getItem('taskDatabase')) {
  var tasks = JSON.parse(localStorage.getItem('taskDatabase'));
  tasks.forEach(function (task) {
    task = (0,_addData__WEBPACK_IMPORTED_MODULE_4__["default"])(task); //display task on page

    inBoxContainer.appendChild((0,_addData__WEBPACK_IMPORTED_MODULE_4__.displayTasks)(task));
  });
}

taskBtn.addEventListener('click', function () {
  var task = new _tasksComponent__WEBPACK_IMPORTED_MODULE_2__["default"](title.value, description.value, date.value, priority.value); //store task in database in html format

  dataBase.push(task);
  var taskElement = (0,_addData__WEBPACK_IMPORTED_MODULE_4__["default"])(task);
  localStorage.setItem('taskDatabase', JSON.stringify(dataBase)); //display task on page

  inBoxContainer.appendChild((0,_addData__WEBPACK_IMPORTED_MODULE_4__.displayTasks)(taskElement));
  form.style.display = 'none';
  addTask.style.display = 'block'; //clear inputs

  document.querySelectorAll('form input').forEach(function (input) {
    input.value = '';
  });
}); //remove form

(0,_remove__WEBPACK_IMPORTED_MODULE_5__.cancelForm)(cancelBtn, form, addTask);
})();

/******/ })()
;
//# sourceMappingURL=bundle42ba6e124a0a9415038b.js.map