/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/filterTasks.js":
/*!***************************!*\
  !*** ./js/filterTasks.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "filterTasks": () => (/* binding */ filterTasks)
/* harmony export */ });
function filterTasks(e) {
  var text = e.target.value.toLowerCase();
  document.querySelectorAll(".task").forEach(function (task) {
    var item = task.firstChild.textContent;

    if (item.toLowerCase().indexOf(text) != -1) {
      task.style.display = "flex";
    } else {
      task.style.display = "none";
    }
  });
}

/***/ }),

/***/ "./js/handleTodos.js":
/*!***************************!*\
  !*** ./js/handleTodos.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addTask": () => (/* binding */ addTask),
/* harmony export */   "taskHandler": () => (/* binding */ taskHandler),
/* harmony export */   "removeTask": () => (/* binding */ removeTask)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./js/index.js");
/* harmony import */ var _sessionStorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sessionStorage */ "./js/sessionStorage.js");



function addTask(e) {
  e.preventDefault();
  var task = _index__WEBPACK_IMPORTED_MODULE_0__.input.value;

  if (!task) {
    (0,_index__WEBPACK_IMPORTED_MODULE_0__.showAlert)("Please fill out the task", "warning");
    return;
  } else {
    (0,_index__WEBPACK_IMPORTED_MODULE_0__.showAlert)("Task Added!", "success");
    taskHandler();
  }
}
function taskHandler() {
  var task = _index__WEBPACK_IMPORTED_MODULE_0__.input.value;
  var taskElement = document.createElement("div");
  taskElement.classList.add("task");
  taskElement.innerHTML = task;
  var taskDelete = document.createElement("button");
  taskDelete.classList.add("task__delete-btn");
  taskDelete.innerHTML = '<i class="fas fa-times"></i>';
  taskElement.appendChild(taskDelete);
  _index__WEBPACK_IMPORTED_MODULE_0__.listElement.appendChild(taskElement);
  (0,_sessionStorage__WEBPACK_IMPORTED_MODULE_1__.storeTaskInLocalStorage)(task);
  _index__WEBPACK_IMPORTED_MODULE_0__.input.value = "";
}
function removeTask(e) {
  if (e.target.parentElement.classList.contains("task__delete-btn")) {
    if (confirm("Are You Sure?")) {
      e.target.parentElement.parentElement.remove();
      (0,_sessionStorage__WEBPACK_IMPORTED_MODULE_1__.removeTaskFromLocalStorage)(e.target.parentElement);
      (0,_index__WEBPACK_IMPORTED_MODULE_0__.showAlert)("Task Removed!", "success");
    }
  }
}

/***/ }),

/***/ "./js/index.js":
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "input": () => (/* binding */ input),
/* harmony export */   "listElement": () => (/* binding */ listElement),
/* harmony export */   "showAlert": () => (/* binding */ showAlert),
/* harmony export */   "disableEnter": () => (/* binding */ disableEnter)
/* harmony export */ });
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index.html */ "./index.html");
/* harmony import */ var _scss_index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scss/index.scss */ "./scss/index.scss");
/* harmony import */ var _sessionStorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sessionStorage */ "./js/sessionStorage.js");
/* harmony import */ var _filterTasks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./filterTasks */ "./js/filterTasks.js");
/* harmony import */ var _handleTodos__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./handleTodos */ "./js/handleTodos.js");





var input = document.querySelector('.header__form-input');
var listElement = document.querySelector('.tasks');
var form = document.querySelector('.header__form');
var filter = document.querySelector('.filter');
var messageContainer = document.querySelector('.message__container');
loadEventListeners();

function loadEventListeners() {
  document.addEventListener('DOMContentLoaded', _sessionStorage__WEBPACK_IMPORTED_MODULE_2__.getTasks);
  listElement.addEventListener('click', _handleTodos__WEBPACK_IMPORTED_MODULE_4__.removeTask);
  input.addEventListener('keydown', disableEnter);
  filter.addEventListener('keyup', _filterTasks__WEBPACK_IMPORTED_MODULE_3__.filterTasks);
  form.addEventListener('submit', _handleTodos__WEBPACK_IMPORTED_MODULE_4__.addTask);
}

function showAlert(message, className) {
  messageContainer.innerHTML = "<span class=\"".concat(className, " message\">").concat(message, "</span>");
  setTimeout(function () {
    document.querySelector(".".concat(className)).remove();
  }, 3000);
}
function disableEnter(e) {
  if (e.keyCode === 13 && e.target.value.length < 3) {
    e.preventDefault();
    showAlert('Task can\'t be shorter than 3 symbol', 'warning');
    return false;
  }
}

/***/ }),

/***/ "./js/sessionStorage.js":
/*!******************************!*\
  !*** ./js/sessionStorage.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getTasks": () => (/* binding */ getTasks),
/* harmony export */   "storeTaskInLocalStorage": () => (/* binding */ storeTaskInLocalStorage),
/* harmony export */   "removeTaskFromLocalStorage": () => (/* binding */ removeTaskFromLocalStorage)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./js/index.js");

function getTasks() {
  var tasks;

  if (sessionStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(sessionStorage.getItem("tasks"));
  }

  tasks.forEach(function (task) {
    var taskElement = document.createElement("div");
    taskElement.classList.add("task");
    taskElement.innerHTML = task;
    var taskDelete = document.createElement("button");
    taskDelete.classList.add("task__delete-btn");
    taskDelete.innerHTML = '<i class="fas fa-times"></i>';
    taskElement.appendChild(taskDelete);
    _index__WEBPACK_IMPORTED_MODULE_0__.listElement.appendChild(taskElement);
  });
}
function storeTaskInLocalStorage(task) {
  var tasks;

  if (sessionStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(sessionStorage.getItem("tasks"));
  }

  tasks.push(task);
  sessionStorage.setItem("tasks", JSON.stringify(tasks));
}
function removeTaskFromLocalStorage(taskItem) {
  var tasks;

  if (sessionStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(sessionStorage.getItem("tasks"));
  }

  tasks.forEach(function (task, index) {
    if (taskItem.parentElement.textContent === task) {
      tasks.splice(index, 1);
    }
  });
  sessionStorage.setItem("tasks", JSON.stringify(tasks));
}

/***/ }),

/***/ "./index.html":
/*!********************!*\
  !*** ./index.html ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Module
var code = "<!DOCTYPE html>\r\n<html lang=\"en\">\r\n<head>\r\n  <meta charset=\"UTF-8\">\r\n  <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\r\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n  <link rel=\"stylesheet\" href=\"https://use.fontawesome.com/releases/v5.15.4/css/all.css\" integrity=\"sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm\" crossorigin=\"anonymous\"/>\r\n  <title>My ToDo List</title>\r\n</head>\r\n<body>\r\n  <div class=\"container\">\r\n    <header class=\"header\">\r\n      <div class=\"heading\">\r\n        <h1 class=\"header__title title\">ToDo List</h1>\r\n        <input type=\"text\" name=\"filter\" class=\"filter\" placeholder=\"Find task\">\r\n      </div>\r\n      <form class=\"header__form\">\r\n        <input \r\n        type=\"text\" \r\n        class=\"header__form-input\"\r\n        placeholder=\"What do you have planned?\"\r\n        >\r\n        <input \r\n          type=\"submit\" \r\n          class=\"header__form-submit\"\r\n          value=\"add task\"\r\n        >\r\n      </form>\r\n      <div class=\"message__container\">\r\n        <span class=\"warning\"></span>\r\n      </div>\r\n      \r\n    </header>\r\n    <section class=\"task-list\">\r\n      <h2 class=\"task-list__title title\">Tasks</h2>\r\n      <div class=\"tasks\">\r\n        \r\n      </div>\r\n    </section>\r\n  </div>\r\n</body>\r\n</html>";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./scss/index.scss":
/*!*************************!*\
  !*** ./scss/index.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/******/ 			// no module.id needed
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./js/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.js.map