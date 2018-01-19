(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("$better", [], factory);
	else if(typeof exports === 'object')
		exports["$better"] = factory();
	else
		root["$better"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isValidDate;
/**
 * 校验是否是合法的时间
 * <pre>
 *   isValidDate('2017/12/07 24:00:00')   // => false
 *   isValidDate('2017/12/07 10:47:35')   // => true
 * 
 *   isValidDate(new Date('2017-13-01'))  // => false
 *   isValidDate(new Date('2017-12-07'))  // => true
 * </pre>
 * @param {*} _date    待校验的对象
 * @returns            是合法时间返回 true，否则返回 false
 */
function isValidDate(_date) {
  var date = _date instanceof Date ? _date : new Date(_date);
  return !isNaN(date);
}

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// 版本信息
var VERSION = '1.4.1';

// 默认语言
var LANG = 'zh_CN';

// 默认的时期格式
var DATE_FORMAT = 'yyyy-MM-dd HH:mm:ss';

// 默认中文的星期格式
var ZH_WEEK = ['日', '一', '二', '三', '四', '五', '六'];

// 默认英文日期格式
var EN_WEEK = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

// 默认中文上午/下午
var ZH_MERIDIEM = ['上午', '下午'];

// 默认英文上午/下午
var EN_MERIDIEM = ['AM', 'PM'];

exports.VERSION = VERSION;
exports.LANG = LANG;
exports.DATE_FORMAT = DATE_FORMAT;
exports.ZH_WEEK = ZH_WEEK;
exports.EN_WEEK = EN_WEEK;
exports.ZH_MERIDIEM = ZH_MERIDIEM;
exports.EN_MERIDIEM = EN_MERIDIEM;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.arrayEqual = exports.isValidDate = exports.dayCountOfMonth = exports.formatDate = exports.clone = exports.extend = exports.getClass = exports.version = undefined;

var _const = __webpack_require__(1);

var _getClass = __webpack_require__(3);

var _getClass2 = _interopRequireDefault(_getClass);

var _extend = __webpack_require__(4);

var _extend2 = _interopRequireDefault(_extend);

var _clone = __webpack_require__(5);

var _clone2 = _interopRequireDefault(_clone);

var _formatDate = __webpack_require__(6);

var _formatDate2 = _interopRequireDefault(_formatDate);

var _dayCountOfMonth = __webpack_require__(7);

var _dayCountOfMonth2 = _interopRequireDefault(_dayCountOfMonth);

var _isValidDate = __webpack_require__(0);

var _isValidDate2 = _interopRequireDefault(_isValidDate);

var _arrayEqual = __webpack_require__(8);

var _arrayEqual2 = _interopRequireDefault(_arrayEqual);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** ********************* date ************************/
/** ********************* util ************************/
exports.version = _const.VERSION;
exports.getClass = _getClass2.default;
exports.extend = _extend2.default;
exports.clone = _clone2.default;
exports.formatDate = _formatDate2.default;
exports.dayCountOfMonth = _dayCountOfMonth2.default;
exports.isValidDate = _isValidDate2.default;
exports.arrayEqual = _arrayEqual2.default;

/** ********************* array ***********************/

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getClass;
/**
 * 获取对象的类型
 * <pre>
 * getClass(null)             // => Null
 * getClass(undefined)        // => Undefined
 * getClass(1)                // => Number
 * getClass('1')              // => String
 * getClass(false)            // => Boolean
 * getClass({})               // => Object
 * getClass([])               // => Array
 * getClass(/./)              // => RegExp
 * getClass(new Date())       // => Date
 * getClass(function() {})    // => Function
 * </pre>
 * @param {*} object          待测试的对象
 * @return {String}           类型对应类型的字符串
 */
function getClass(object) {
  if (object === undefined) return 'Undefined';
  if (object === null) return 'Null';
  return Object.prototype.toString.call(object).slice(8, -1);
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = extend;
/**
 * 实现 JQuery.extend() 方法
 * <pre>
 *  extend()              // => {}
 *  extend({}, {a: 1})    // => {a: 1}
 *  extend(true, {a: {b: 2}, array: [3, 4]}, {a: {b: 1}, array: [1, 2]})  // => {a: {b: 1}, array: [1, 2]}
 * </pre>
 * 
 * @param {*} object    参数个数不限
 */
function extend(object) {
  var options = void 0,
      name = void 0,
      src = void 0,
      copy = void 0,
      clone = void 0,
      target = void 0,
      i = void 0,
      length = void 0,
      deep = void 0;

  target = arguments[0] || {};
  length = arguments.length;
  deep = false;
  i = 1;

  // 如果第一个参数是布尔型，则表示是否是深拷贝
  if (typeof arguments[0] === 'boolean') {
    deep = target;
    target = arguments[1] || {};
    i = 2;
  }

  // 当目标不是对象的时候
  if ((typeof target === 'undefined' ? 'undefined' : _typeof(target)) !== 'object') {
    target = {};
  }

  // 当没有参数或只有一个参数（不算深拷贝的参数）时，直接返回
  if (length <= i) {
    return target;
  }

  for (; i < length; i++) {
    // 排除 null/undefined 参数
    if ((options = arguments[i]) == null) {
      continue;
    }
    for (name in options) {
      // 排除非自有属性
      if (!options.hasOwnProperty(name)) {
        continue;
      }
      src = target[name];
      copy = options[name];

      // 排除 undefined
      if (copy === undefined) {
        continue;
      }
      // 防止死循环
      if (target === copy) {
        continue;
      }

      // 深拷贝
      if (deep) {
        // 处理 null 或非对象
        if (copy === null || (typeof copy === 'undefined' ? 'undefined' : _typeof(copy)) !== 'object') {
          target[name] = copy;
        } else if (copy instanceof Date) {
          target[name] = new Date();
          target[name].setTime(copy.getTime());
        } else if (copy instanceof Array) {
          clone = src && src instanceof Array ? src : [];
          target[name] = extend.call(this, deep, clone, copy);
        } else {
          clone = src && (typeof src === 'undefined' ? 'undefined' : _typeof(src)) === 'object' ? src : {};
          target[name] = extend.call(this, deep, clone, copy);
        }
      } else {
        target[name] = copy;
      }
    }
  }
  return target;
}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = clone;
/**
 * 深拷贝对象
 * <pre>
 *   clone()                    // => undefined
 *   clone(1)                   // => 1
 *   clone(new Date())          // => new Date()
 *   clone(['1', '2'])          // => ['1', '2']
 *   clone({a: 'A', b: 'B'})    // => {a: 'A', b: 'B'}
 * </pre>
 * @param {*} object    被拷贝的对象
 */
function clone(object) {
  var copy = void 0;
  // 处理 null/undefined 以及非 object
  if (object == null || (typeof object === 'undefined' ? 'undefined' : _typeof(object)) !== 'object') {
    return object;
  }
  // 处理时间对象
  if (object instanceof Date) {
    copy = new Date();
    copy.setTime(object.getTime());
    return copy;
  }
  // 处理数组
  if (object instanceof Array) {
    copy = [];
    for (var i = 0, length = object.length; i < length; i++) {
      copy[i] = clone.call(this, object[i]);
    }
    return copy;
  }
  // 处理其他对象
  copy = {};
  for (var name in object) {
    if (object.hasOwnProperty(name)) {
      copy[name] = clone.call(this, object[name]);
    }
  }
  return copy;
}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = formatDate;

var _const = __webpack_require__(1);

var _isValidDate = __webpack_require__(0);

var _isValidDate2 = _interopRequireDefault(_isValidDate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * 格式化时间
 * @param {string|date|number} _date    可以是时间格式的字符串，时间对象或者时间戳
 * @param {string} _format              可选参数，默认为 'yyyy-MM-dd HH:mm:ss'
 *                                      'yyyy-MM-dd E HH:mm:ss.S a' => '2017-08-02 WED 23:38:12.256'
 * @param {string} _lang                可选参数，默认为 'zh_CN'
 * @returns                             返回格式化后的时间字符串，非法日期返回空字符串
 */
function formatDate(_date, _format, _lang) {
  var date = void 0,
      fmt = void 0,
      language = void 0,
      week = void 0,
      meridiem = void 0,
      patternObj = void 0;

  if (!_date) {
    return '';
  }

  date = _date instanceof Date ? _date : new Date(_date);
  if (!(0, _isValidDate2.default)(date)) {
    return '';
  }

  fmt = _format || _const.DATE_FORMAT;
  language = _lang || _const.LANG;
  week = language === _const.LANG ? _const.ZH_WEEK : _const.EN_WEEK;
  meridiem = language === _const.LANG ? _const.ZH_MERIDIEM : _const.EN_MERIDIEM;
  patternObj = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours() === 12 ? 12 : date.getHours() % 12,
    'H+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds(),
    'S': date.getMilliseconds()

    // 格式化年份
  };if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
  }

  // 格式化月份至毫秒
  for (var p in patternObj) {
    if (new RegExp('(' + p + ')').test(fmt)) {
      fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? patternObj[p] : ('00' + patternObj[p]).substr(('' + patternObj[p]).length));
    }
  }

  // 格式化星期
  if (/(E)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, week[date.getDay()]);
  }

  // 格式化上午/下午
  if (/(a)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, date.getHours() < 12 ? meridiem[0] : meridiem[1]);
  }
  return fmt;
}

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = dayCountOfMonth;

var _isValidDate = __webpack_require__(0);

var _isValidDate2 = _interopRequireDefault(_isValidDate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * 获取指定月份的天数
 * <pre>
 *   dayCountOfMonth(new Date('2017-12'))    // => 31
 *   dayCountOfMonth()                       // => dayCountOfMonth(new Date())
 *   dayCountOfMonth('2017/12/07 15:61:20')  // => 0
 * </pre>
 * @param {string|date|number} _date  可以是时间格式的字符串，时间对象或者时间戳，
 *                                    可选参数，默认为当前月份
 * @return                            指定月份的天数，非法日期返回 0
 */
function dayCountOfMonth(_date) {
  if (!_date) {
    var _date2 = new Date();
    return dayCountOfMonth(_date2);
  }

  var date = _date instanceof Date ? _date : new Date(_date);
  if (!(0, _isValidDate2.default)(date)) {
    return 0;
  }
  date = new Date(date.getFullYear(), date.getMonth() + 1, 0);
  return date.getDate();
}

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = arrayEqual;
/**
 * 比较两个数组是否相等
 * <pre>
 *   arrayEqual()                  // => true
 *   arrayEqual([1])               // => false
 *   arrayEqual([1], [1, 2])       // => false
 *   arrayEqual([1, 2], [1, 2])    // => true
 * </pre>
 * @param {Array} lth
 * @param {Array} rth
 */
function arrayEqual(lth, rth) {
  if (lth === rth) return true;
  if (lth == null || rth == null) return false;
  if (lth.length !== rth.length) return false;
  for (var i = 0; i < lth.length; i++) {
    if (lth[i] !== rth[i]) return false;
  }
  return true;
}

/***/ })
/******/ ]);
});