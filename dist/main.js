/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/dom_node_collection.js":
/*!************************************!*\
  !*** ./src/dom_node_collection.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function DOMNodeCollection(array) {\n  this.array = array;\n\n}\n\nDOMNodeCollection.prototype.empty = function () {\n  this.array.forEach(el => {\n    el.innerHTML = '';\n  });\n}\n\nDOMNodeCollection.prototype.html = function (str) {\n  if (str) {\n    this.array.forEach( el => {\n      el.innerHTML = str;\n    });\n  } else {\n    str = str || this.array[0].innerHTML;\n    return str;\n  }\n}\n\nDOMNodeCollection.prototype.append = function (arg) {\n  if (arg instanceof HTMLElement) {\n    this.array.forEach(el => {\n      // let temp = el.innerHTML;\n      // el.innerHTML = temp + arg\n      el.innerHTML += arg;\n    });\n  } else if (typeof arg === 'string') {\n    this.array.forEach(el => {\n      // let temp = el.innerHTML;\n      // el.innerHTML = temp + arg\n      el.innerHTML += arg;\n    });\n  }\n}\n\nDOMNodeCollection.prototype.attr = function (name, value) {\n  if (value) {\n    this.array.forEach(el => {\n      el.setAttribute(name, value);\n    });\n  } else {\n    return this.array[0].getAttribute(name)\n  }\n}\n\nDOMNodeCollection.prototype.addClass = function (value) {\n  this.attr('class', value);\n}\n\nDOMNodeCollection.prototype.removeClass = function (value) {\n  if (value) {\n    this.array.forEach(el => {\n      if (el.getAttribute('class') === value) {\n        el.classList.remove(value);\n      }\n    });\n  } else {\n    this.array.forEach(el => {\n      el.setAttribute('class', '');\n    });\n  }\n}\n\nDOMNodeCollection.prototype.children = function() {\n  let juliaChilds = [];\n  this.array.forEach( el => {\n    juliaChilds = juliaChilds.concat(Array.from(el.children));\n  });\n  return new DOMNodeCollection(juliaChilds);\n}\n\nmodule.exports = DOMNodeCollection;\n\n//# sourceURL=webpack:///./src/dom_node_collection.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const DOMNodeCollection = __webpack_require__(/*! ../src/dom_node_collection */ \"./src/dom_node_collection.js\");\n\nwindow.$l = $l;\n\nfunction $l(arg) {\n  // console.log(`cool cooL ${arg}`);\n  // debugger\n  let domCollection;\n  if (arg instanceof HTMLElement) {\n    domCollection = new DOMNodeCollection([arg]);\n  } else if (typeof arg === 'string') {\n    domCollection = new DOMNodeCollection(Array.from(document.querySelectorAll(arg)))\n  } else if (arg instanceof NodeList) {\n    domCollection = new DOMNodeCollection(Array.from(arg))\n  }\n  return domCollection;\n}\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });