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

/***/ "./src/NestTokens.js":
/*!***************************!*\
  !*** ./src/NestTokens.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return nextTokens; });\n\r\n/**\r\n * 折叠的嵌套 token \r\n * 将 # 与 / 之间有 tokens 整合起来，作为下标为 3 的数组\r\n */\r\nfunction nextTokens(tokens) {\r\n  let nestedTokens = []\r\n\r\n  // 使用 栈 来保存 tokens\r\n  let sections = []\r\n  // 一直指向 nestedTokens 结果数组，\r\n  // 入栈时 向下层移动，出栈时，向上层移动\r\n  let collector = nestedTokens\r\n  let token, section\r\n  for (let i = 0; i < tokens.length; i++) {\r\n    token = tokens[i]\r\n    switch (token[0]) {\r\n      case '#':\r\n        // // 遇到 # 则入栈\r\n        // // 给该  token 下标为 2 的项创建数组引用，以收集子元素\r\n        // token[2] = []\r\n        // sections.push(token)\r\n        // // console.log(token[1] + ' pushed to stack')\r\n        // nestedTokens.push(token)\r\n\r\n        // 使用收集器\r\n        collector.push(token)\r\n        sections.push(token)\r\n        // 将收集器指向新的位置，即要嵌套的子数组的位置\r\n        collector = token[2] = []\r\n        break\r\n      case '/':\r\n        // 遇到 / 则出栈\r\n        section = sections.pop()\r\n        // console.log(section[1] + ' popped')\r\n        // 把弹出来的项加入结果\r\n        // nestedTokens.push(section)\r\n        // 收集器要返回到上一层的数组位置，即栈的队尾，下标为2的数组\r\n        collector = sections.length > 0 ?\r\n        sections[sections.length - 1][2] : nestedTokens\r\n        break\r\n      default:\r\n        // // 判断当前栈中是否为空\r\n        // if (sections.length == 0) {\r\n        //   nestedTokens.push(token)\r\n        // } else {\r\n        //   // 如果不为空，则加入结果数组\r\n        //   sections[sections.length - 1][2].push(token)\r\n        // }\r\n\r\n        // 不管当前的 collector 是谁，推入 collector 即可\r\n        collector.push(token)\r\n    }\r\n  }\r\n  return nestedTokens\r\n}\n\n//# sourceURL=webpack:///./src/NestTokens.js?");

/***/ }),

/***/ "./src/Parser.js":
/*!***********************!*\
  !*** ./src/Parser.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return parseTemplateToTokens; });\n/* harmony import */ var _Scanner__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Scanner */ \"./src/Scanner.js\");\n/* harmony import */ var _NestTokens__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NestTokens */ \"./src/NestTokens.js\");\n\r\n\r\n\r\n/**\r\n * 将模板字符串处理成 tokens 数组\r\n */\r\nfunction parseTemplateToTokens(templateStr) {\r\n  let tokens = []\r\n  let scanner = new _Scanner__WEBPACK_IMPORTED_MODULE_0__[\"default\"](templateStr)\r\n\r\n  // 交替执行\r\n  let word\r\n  while (!scanner.eos()) {\r\n    // 开始标记之前的字符\r\n    word = scanner.scanUntil('{{')\r\n    if (word) {\r\n      tokens.push(['text', word])\r\n    }\r\n    scanner.scan('{{')\r\n\r\n    word = scanner.scanUntil('}}')\r\n    if (word) {\r\n      // 判断是否是 # 和 /\r\n      if (word[0] == '#') {\r\n        tokens.push(['#', word.substring(1)])\r\n      } else if (word[0] == '/') {\r\n        tokens.push(['/', word.substring(1)])\r\n      } else {\r\n        tokens.push(['name', word])\r\n      }\r\n    }\r\n    scanner.scan('}}')\r\n  }\r\n  return Object(_NestTokens__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(tokens)\r\n}\n\n//# sourceURL=webpack:///./src/Parser.js?");

/***/ }),

/***/ "./src/Scanner.js":
/*!************************!*\
  !*** ./src/Scanner.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Scanner; });\n/**\r\n * Scanner\r\n */\r\n\r\nclass Scanner {\r\n  constructor(templateStr) {\r\n    this.templateStr = templateStr\r\n    // 定义指针位置\r\n    this.pos = 0\r\n    // 尾部字符串\r\n    this.tail = templateStr\r\n  }\r\n\r\n  /**\r\n   * 只扫描 {{}} ，无返回值\r\n   */\r\n  scan(tag) {\r\n    if (this.tail.indexOf(tag) == 0) {\r\n      // 当前位置向前移动 tag 长度\r\n      this.pos += tag.length\r\n      this.tail = this.templateStr.substring(this.pos)\r\n    }\r\n  }\r\n\r\n  /**\r\n   * 扫描除 {{}} 外的其他字符\r\n   * 即一直扫描，直到遇到特定字符\r\n   * 并返回之前的所有字符\r\n   */\r\n  scanUntil(stopTag) {\r\n    // 记录开始位置\r\n    const pos_backup = this.pos\r\n    // 当尾部字符串不是以结束符开头的时候，就一直往后扫描\r\n    while (!this.eos() && this.tail.indexOf(stopTag) != 0) {\r\n      this.pos++\r\n      // 重新定义尾部字符串，包括当前位置字符\r\n      this.tail = this.templateStr.substring(this.pos)\r\n    }\r\n    return this.templateStr.substring(pos_backup, this.pos)\r\n  }\r\n\r\n  eos() {\r\n    // 是否到达最大查找长度\r\n    return this.pos == this.templateStr.length\r\n  }\r\n\r\n}\n\n//# sourceURL=webpack:///./src/Scanner.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Parser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Parser */ \"./src/Parser.js\");\n\r\n\r\n\r\nwindow.MyMustache = {\r\n  render(templateStr, data) {\r\n    console.info(templateStr)\r\n    let tokens = Object(_Parser__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(templateStr)\r\n    console.log(tokens)\r\n  }\r\n}\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });