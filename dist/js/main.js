/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/js/index.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _jquery_maskedinput__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./jquery.maskedinput */ "./src/js/jquery.maskedinput.js");
/* harmony import */ var _jquery_maskedinput__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_jquery_maskedinput__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var formbouncerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formbouncerjs */ "./node_modules/formbouncerjs/dist/bouncer.polyfills.min.js");
/* harmony import */ var formbouncerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(formbouncerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var smoothscroll_polyfill__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! smoothscroll-polyfill */ "./node_modules/smoothscroll-polyfill/dist/smoothscroll.js");
/* harmony import */ var smoothscroll_polyfill__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(smoothscroll_polyfill__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _jquery_malihu_PageScroll2id_min__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./jquery.malihu.PageScroll2id.min */ "./src/js/jquery.malihu.PageScroll2id.min.js");
/* harmony import */ var _jquery_malihu_PageScroll2id_min__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_jquery_malihu_PageScroll2id_min__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.esm.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




$(".js-phone-mask").mask("+9 (999) 999 99 99", {
  autoclear: true
}); // kick off the polyfill!

smoothscroll_polyfill__WEBPACK_IMPORTED_MODULE_2___default.a.polyfill();
 // core version + navigation, pagination modules:

 // configure Swiper to use modules

swiper__WEBPACK_IMPORTED_MODULE_4__["default"].use([swiper__WEBPACK_IMPORTED_MODULE_4__["Navigation"]]); // init Swiper:

var mySwiper = new swiper__WEBPACK_IMPORTED_MODULE_4__["default"](".swiper-container", {
  // Optional parameters
  slidesPerView: 6,
  spaceBetween: 30,
  loop: true,
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  breakpoints: {
    1400: {
      slidesPerView: 6
    },
    1024: {
      slidesPerView: 5
    },
    768: {
      slidesPerView: 4
    },
    480: {
      slidesPerView: 3
    },
    0: {
      slidesPerView: 2,
      spaceBetween: 30
    }
  }
}); // Scroll In To View

var ScrollTo = /*#__PURE__*/function () {
  function ScrollTo() {
    _classCallCheck(this, ScrollTo);

    this.btns = [].slice.call(document.querySelectorAll(".js-go-to"));
  }

  _createClass(ScrollTo, [{
    key: "init",
    value: function init() {
      $(".viewbtn a,a[rel='m_PageScroll2id']").mPageScroll2id({
        highlightSelector: ".viewbtn a"
      });
      this.btns.forEach(function (item) {
        var to = item.dataset.to;
        item.addEventListener("click", function () {
          $.mPageScroll2id("scrollTo", to);
        });
      });
    }
  }]);

  return ScrollTo;
}();

function goTo(to) {
  $.mPageScroll2id("scrollTo", to);
}

window.goToLink = goTo;
var scrollTo = new ScrollTo();
scrollTo.init(); // Bouncer

var bouncer = new formbouncerjs__WEBPACK_IMPORTED_MODULE_1___default.a('.js-form-validator', {
  disableSubmit: true,
  fieldClass: 'error',
  // Applied to fields with errors
  errorClass: 'error-message',
  // Applied to the error message for invalid fields
  fieldPrefix: 'bouncer-field_',
  // If a field doesn't have a name or ID, one is generated with this prefix
  errorPrefix: 'bouncer-error_',
  // Prefix used for error message IDs
  patterns: {
    email: /^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*(\.\w{2,})+$/,
    tel: /^(\+7|7|8)?[\s\-]?\(?[0-9]{3}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/,
    phone: /^(\+7|7|8)?[\s\-]?\(?[0-9]{3}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/
  },
  customValidations: {
    valueMismatch: function valueMismatch(field) {
      // Look for a selector for a field to compare
      // If there isn't one, return false (no error)
      var selector = field.getAttribute('data-bouncer-match');
      if (!selector) return false; // Get the field to compare

      var otherField = field.form.querySelector(selector);
      if (!otherField) return false; // Compare the two field values
      // We use a negative comparison here because if they do match, the field validates
      // We want to return true for failures, which can be confusing

      return otherField.value !== field.value;
    }
  }
}); // document.addEventListener('bouncerFormInvalid', function (event) {
//   // console.log(event.detail.errors);
//   window.scrollTo(0, event.target.offsetTop);
// }, false);

document.addEventListener('bouncerFormValid', function (el) {
  try {
    var fn = el.target.dataset.submit;
    window[fn](el);
  } catch (e) {
    console.log("Form Submit Error!");
  }
}, false);
document.addEventListener("DOMContentLoaded", function () {
  document.body.classList.add("loaded");
}); // Opne Menu

document.querySelector(".js-open-menu").addEventListener("click", function () {
  document.querySelector(".header").classList.toggle("active");
  document.body.classList.toggle("block-scroll");
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./src/js/jquery.malihu.PageScroll2id.min.js":
/*!***************************************************!*\
  !*** ./src/js/jquery.malihu.PageScroll2id.min.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/* == Page scroll to id == Version: 1.6.5, License: MIT License (MIT) */
!function (e, t, a) {
  var n,
      l,
      s,
      i,
      o,
      r,
      c,
      u,
      h,
      f,
      g,
      d,
      p = "mPageScroll2id",
      _ = "mPS2id",
      C = ".m_PageScroll2id,a[rel~='m_PageScroll2id'],.page-scroll-to-id,a[rel~='page-scroll-to-id'],._ps2id",
      v = {
    scrollSpeed: 1e3,
    autoScrollSpeed: !0,
    scrollEasing: "easeInOutQuint",
    scrollingEasing: "easeOutQuint",
    pageEndSmoothScroll: !0,
    layout: "vertical",
    offset: 0,
    highlightSelector: !1,
    clickedClass: _ + "-clicked",
    targetClass: _ + "-target",
    highlightClass: _ + "-highlight",
    forceSingleHighlight: !1,
    keepHighlightUntilNext: !1,
    highlightByNextTarget: !1,
    disablePluginBelow: !1,
    clickEvents: !0,
    appendHash: !1,
    onStart: function onStart() {},
    onComplete: function onComplete() {},
    defaultSelector: !1,
    live: !0,
    liveSelector: !1,
    excludeSelectors: !1,
    encodeLinks: !1
  },
      m = 0,
      I = {
    init: function init(r) {
      var r = e.extend(!0, {}, v, r);

      if (e(a).data(_, r), l = e(a).data(_), !this.selector) {
        var c = "__" + _;
        this.each(function () {
          var t = e(this);
          t.hasClass(c) || t.addClass(c);
        }), this.selector = "." + c;
      }

      l.liveSelector && (this.selector += "," + l.liveSelector), n = n ? n + "," + this.selector : this.selector, l.defaultSelector && ("object" == _typeof(e(n)) && 0 !== e(n).length || (n = C)), l.clickEvents && e(a).undelegate("." + _).delegate(n, "click." + _, function (t) {
        if (S._isDisabled.call(null)) return void S._removeClasses.call(null);
        var a = e(this),
            n = a.attr("href"),
            s = a.prop("href").baseVal || a.prop("href");
        l.excludeSelectors && a.is(l.excludeSelectors) || n && -1 !== n.indexOf("#/") || (S._reset.call(null), f = a.data("ps2id-offset") || 0, S._isValid.call(null, n, s) && S._findTarget.call(null, n) && (t.preventDefault(), i = "selector", o = a, S._setClasses.call(null, !0), S._scrollTo.call(null)));
      }), e(t).unbind("." + _).bind("scroll." + _ + " resize." + _, function () {
        if (S._isDisabled.call(null)) return void S._removeClasses.call(null);
        var t = e("._" + _ + "-t");
        t.each(function (a) {
          var n = e(this),
              l = n.attr("id"),
              s = S._findHighlight.call(null, l);

          S._setClasses.call(null, !1, n, s), a == t.length - 1 && S._extendClasses.call(null);
        });
      }), s = !0, S._setup.call(null), S._live.call(null);
    },
    scrollTo: function scrollTo(t, a) {
      if (S._isDisabled.call(null)) return void S._removeClasses.call(null);

      if (t && "undefined" != typeof t) {
        S._isInit.call(null);

        var n = {
          layout: l.layout,
          offset: l.offset,
          clicked: !1
        },
            a = e.extend(!0, {}, n, a);
        S._reset.call(null), u = a.layout, h = a.offset, t = -1 !== t.indexOf("#") ? t : "#" + t, S._isValid.call(null, t) && S._findTarget.call(null, t) && (i = "scrollTo", o = a.clicked, o && S._setClasses.call(null, !0), S._scrollTo.call(null));
      }
    },
    destroy: function destroy() {
      e(t).unbind("." + _), e(a).undelegate("." + _).removeData(_), e("._" + _ + "-t").removeData(_), S._removeClasses.call(null, !0);
    }
  },
      S = {
    _isDisabled: function _isDisabled() {
      var e = t,
          n = "inner",
          s = l.disablePluginBelow instanceof Array ? [l.disablePluginBelow[0] || 0, l.disablePluginBelow[1] || 0] : [l.disablePluginBelow || 0, 0];
      return "innerWidth" in t || (n = "client", e = a.documentElement || a.body), e[n + "Width"] <= s[0] || e[n + "Height"] <= s[1];
    },
    _isValid: function _isValid(e, a) {
      if (e) {
        a = a ? a : e;
        var n = -1 !== a.indexOf("#/") ? a.split("#/")[0] : a.split("#")[0],
            l = t.location !== t.parent.location ? t.parent.location : t.location,
            s = l.toString().split("#")[0];
        return "#" !== e && -1 !== e.indexOf("#") && ("" === n || decodeURIComponent(n) === decodeURIComponent(s));
      }
    },
    _setup: function _setup() {
      var t = S._highlightSelector(),
          n = 1,
          s = 0;

      return e(t).each(function () {
        var i = e(this),
            o = i.attr("href"),
            r = i.prop("href").baseVal || i.prop("href");

        if (S._isValid.call(null, o, r)) {
          if (l.excludeSelectors && i.is(l.excludeSelectors)) return;
          var c = -1 !== o.indexOf("#/") ? o.split("#/")[1] : o.split("#")[1],
              u = e(-1 !== c.indexOf("%") ? a.getElementById(c) : "#" + c);

          if (u.length > 0) {
            l.highlightByNextTarget && u !== s && (s ? s.data(_, {
              tn: u
            }) : u.data(_, {
              tn: "0"
            }), s = u), u.hasClass("_" + _ + "-t") || u.addClass("_" + _ + "-t"), u.data(_, {
              i: n
            }), i.hasClass("_" + _ + "-h") || i.addClass("_" + _ + "-h");

            var h = S._findHighlight.call(null, c);

            S._setClasses.call(null, !1, u, h), m = n, n++, n == e(t).length && S._extendClasses.call(null);
          }
        }
      });
    },
    _highlightSelector: function _highlightSelector() {
      return l.highlightSelector && "" !== l.highlightSelector ? l.highlightSelector : n;
    },
    _findTarget: function _findTarget(t) {
      var n = -1 !== t.indexOf("#/") ? t.split("#/")[1] : t.split("#")[1],
          s = e(-1 !== n.indexOf("%") ? a.getElementById(n) : "#" + n);

      if (s.length < 1 || "fixed" === s.css("position")) {
        if ("top" !== n) return;
        s = e("body");
      }

      return r = s, u || (u = l.layout), h = S._setOffset.call(null), c = [(s.offset().top - h[0]).toString(), (s.offset().left - h[1]).toString()], c[0] = c[0] < 0 ? 0 : c[0], c[1] = c[1] < 0 ? 0 : c[1], c;
    },
    _setOffset: function _setOffset() {
      h || (h = l.offset ? l.offset : 0), f && (h = f);
      var t, a, n, s;

      switch (_typeof(h)) {
        case "object":
        case "string":
          t = [h.y ? h.y : h, h.x ? h.x : h], a = [t[0] instanceof jQuery ? t[0] : e(t[0]), t[1] instanceof jQuery ? t[1] : e(t[1])], a[0].length > 0 ? (n = a[0].height(), "fixed" === a[0].css("position") && (n += a[0][0].offsetTop)) : n = !isNaN(parseFloat(t[0])) && isFinite(t[0]) ? parseInt(t[0]) : 0, a[1].length > 0 ? (s = a[1].width(), "fixed" === a[1].css("position") && (s += a[1][0].offsetLeft)) : s = !isNaN(parseFloat(t[1])) && isFinite(t[1]) ? parseInt(t[1]) : 0;
          break;

        case "function":
          t = h.call(null), t instanceof Array ? (n = t[0], s = t[1]) : n = s = t;
          break;

        default:
          n = s = parseInt(h);
      }

      return [n, s];
    },
    _findHighlight: function _findHighlight(a) {
      var n = t.location !== t.parent.location ? t.parent.location : t.location,
          s = n.toString().split("#")[0],
          i = n.pathname;

      if (-1 !== s.indexOf("'") && (s = s.replace("'", "\\'")), -1 !== i.indexOf("'") && (i = i.replace("'", "\\'")), s = decodeURIComponent(s), i = decodeURIComponent(i), l.encodeLinks) {
        var o = encodeURI(s).toLowerCase(),
            r = encodeURI(i).toLowerCase();
        return e("._" + _ + "-h[href='#" + a + "'],._" + _ + "-h[href='" + s + "#" + a + "'],._" + _ + "-h[href='" + i + "#" + a + "'],._" + _ + "-h[href='#/" + a + "'],._" + _ + "-h[href='" + s + "#/" + a + "'],._" + _ + "-h[href='" + i + "#/" + a + "'],._" + _ + "-h[href='" + o + "#/" + a + "'],._" + _ + "-h[href='" + o + "#" + a + "'],._" + _ + "-h[href='" + r + "#/" + a + "'],._" + _ + "-h[href='" + r + "#" + a + "']");
      }

      return e("._" + _ + "-h[href='#" + a + "'],._" + _ + "-h[href='" + s + "#" + a + "'],._" + _ + "-h[href='" + i + "#" + a + "'],._" + _ + "-h[href='#/" + a + "'],._" + _ + "-h[href='" + s + "#/" + a + "'],._" + _ + "-h[href='" + i + "#/" + a + "']");
    },
    _setClasses: function _setClasses(t, a, n) {
      var s = l.clickedClass,
          i = l.targetClass,
          r = l.highlightClass;
      t && s && "" !== s ? (e("." + s).removeClass(s), o.addClass(s)) : a && i && "" !== i && n && r && "" !== r && (S._currentTarget.call(null, a) ? (a.addClass(i), n.addClass(r)) : (!l.keepHighlightUntilNext || e("." + r).length > 1) && (a.removeClass(i), n.removeClass(r)));
    },
    _extendClasses: function _extendClasses() {
      var t = l.targetClass,
          a = l.highlightClass,
          n = e("." + t),
          s = e("." + a),
          i = t + "-first",
          o = t + "-last",
          r = a + "-first",
          c = a + "-last";
      e("._" + _ + "-t").removeClass(i + " " + o), e("._" + _ + "-h").removeClass(r + " " + c), l.forceSingleHighlight ? l.keepHighlightUntilNext && n.length > 1 ? (n.slice(0, 1).removeClass(t), s.slice(0, 1).removeClass(a)) : (n.slice(1).removeClass(t), s.slice(1).removeClass(a)) : (n.slice(0, 1).addClass(i).end().slice(-1).addClass(o), s.slice(0, 1).addClass(r).end().slice(-1).addClass(c));
    },
    _removeClasses: function _removeClasses(t) {
      e("." + l.clickedClass).removeClass(l.clickedClass), e("." + l.targetClass).removeClass(l.targetClass + " " + l.targetClass + "-first " + l.targetClass + "-last"), e("." + l.highlightClass).removeClass(l.highlightClass + " " + l.highlightClass + "-first " + l.highlightClass + "-last"), t && (e("._" + _ + "-t").removeClass("_" + _ + "-t"), e("._" + _ + "-h").removeClass("_" + _ + "-h"));
    },
    _currentTarget: function _currentTarget(a) {
      if (a.data(_)) {
        var n = l["target_" + a.data(_).i],
            s = a.data("ps2id-target"),
            i = s && e(s)[0] ? e(s)[0].getBoundingClientRect() : a[0].getBoundingClientRect();

        if ("undefined" != typeof n) {
          var o = a.offset().top,
              r = a.offset().left,
              c = n.from ? n.from + o : o,
              u = n.to ? n.to + o : o,
              h = n.fromX ? n.fromX + r : r,
              f = n.toX ? n.toX + r : r;
          return i.top >= u && i.top <= c && i.left >= f && i.left <= h;
        }

        var g = e(t).height(),
            d = e(t).width(),
            p = s ? e(s).height() : a.height(),
            C = s ? e(s).width() : a.width(),
            v = 1 + p / g,
            m = v,
            I = g > p ? v * (g / p) : v,
            S = 1 + C / d,
            O = S,
            M = d > C ? S * (d / C) : S,
            b = [i.top <= g / m, i.bottom >= g / I, i.left <= d / O, i.right >= d / M];

        if (l.highlightByNextTarget) {
          var y = a.data(_).tn;

          if (y) {
            var w = y[0].getBoundingClientRect();
            "vertical" === l.layout ? b = [i.top <= g / 2, w.top > g / 2, 1, 1] : "horizontal" === l.layout && (b = [1, 1, i.left <= d / 2, w.left > d / 2]);
          }
        }

        return b[0] && b[1] && b[2] && b[3];
      }
    },
    _scrollTo: function _scrollTo() {
      d = S._scrollSpeed.call(null), c = l.pageEndSmoothScroll ? S._pageEndSmoothScroll.call(null) : c;
      var a = e("html,body"),
          n = l.autoScrollSpeed ? S._autoScrollSpeed.call(null) : d,
          s = a.is(":animated") ? l.scrollingEasing : l.scrollEasing,
          i = e(t).scrollTop(),
          o = e(t).scrollLeft();

      switch (u) {
        case "horizontal":
          o != c[1] && (S._callbacks.call(null, "onStart"), a.stop().animate({
            scrollLeft: c[1]
          }, n, s).promise().then(function () {
            S._callbacks.call(null, "onComplete");
          }));
          break;

        case "auto":
          if (i != c[0] || o != c[1]) if (S._callbacks.call(null, "onStart"), navigator.userAgent.match(/(iPod|iPhone|iPad|Android)/)) {
            var r;
            a.stop().animate({
              pageYOffset: c[0],
              pageXOffset: c[1]
            }, {
              duration: n,
              easing: s,
              step: function step(e, a) {
                "pageXOffset" == a.prop ? r = e : "pageYOffset" == a.prop && t.scrollTo(r, e);
              }
            }).promise().then(function () {
              S._callbacks.call(null, "onComplete");
            });
          } else a.stop().animate({
            scrollTop: c[0],
            scrollLeft: c[1]
          }, n, s).promise().then(function () {
            S._callbacks.call(null, "onComplete");
          });
          break;

        default:
          i != c[0] && (S._callbacks.call(null, "onStart"), a.stop().animate({
            scrollTop: c[0]
          }, n, s).promise().then(function () {
            S._callbacks.call(null, "onComplete");
          }));
      }
    },
    _pageEndSmoothScroll: function _pageEndSmoothScroll() {
      var n = e(a).height(),
          l = e(a).width(),
          s = e(t).height(),
          i = e(t).width();
      return [n - c[0] < s ? n - s : c[0], l - c[1] < i ? l - i : c[1]];
    },
    _scrollSpeed: function _scrollSpeed() {
      var t = l.scrollSpeed;
      return o && o.length && o.add(o.parent()).each(function () {
        var a = e(this);

        if (a.attr("class")) {
          var n = a.attr("class").split(" ");

          for (var l in n) {
            if (String(n[l]).match(/^ps2id-speed-\d+$/)) {
              t = n[l].split("ps2id-speed-")[1];
              break;
            }
          }
        }
      }), parseInt(t);
    },
    _autoScrollSpeed: function _autoScrollSpeed() {
      var n = e(t).scrollTop(),
          l = e(t).scrollLeft(),
          s = e(a).height(),
          i = e(a).width(),
          o = [d + d * Math.floor(Math.abs(c[0] - n) / s * 100) / 100, d + d * Math.floor(Math.abs(c[1] - l) / i * 100) / 100];
      return Math.max.apply(Math, o);
    },
    _callbacks: function _callbacks(e) {
      if (l) switch (this[_] = {
        trigger: i,
        clicked: o,
        target: r,
        scrollTo: {
          y: c[0],
          x: c[1]
        }
      }, e) {
        case "onStart":
          if (l.appendHash && t.history && t.history.pushState && o && o.length) {
            var a = "#" + o.attr("href").split("#")[1];
            a !== t.location.hash && history.pushState("", "", a);
          }

          l.onStart.call(null, this[_]);
          break;

        case "onComplete":
          l.onComplete.call(null, this[_]);
      }
    },
    _reset: function _reset() {
      u = h = f = !1;
    },
    _isInit: function _isInit() {
      s || I.init.apply(this);
    },
    _live: function _live() {
      g = setTimeout(function () {
        l.live ? e(S._highlightSelector()).length !== m && S._setup.call(null) : g && clearTimeout(g), S._live.call(null);
      }, 1e3);
    },
    _easing: function _easing() {
      function t(e) {
        var t = 7.5625,
            a = 2.75;
        return 1 / a > e ? t * e * e : 2 / a > e ? t * (e -= 1.5 / a) * e + .75 : 2.5 / a > e ? t * (e -= 2.25 / a) * e + .9375 : t * (e -= 2.625 / a) * e + .984375;
      }

      e.easing.easeInQuad = e.easing.easeInQuad || function (e) {
        return e * e;
      }, e.easing.easeOutQuad = e.easing.easeOutQuad || function (e) {
        return 1 - (1 - e) * (1 - e);
      }, e.easing.easeInOutQuad = e.easing.easeInOutQuad || function (e) {
        return .5 > e ? 2 * e * e : 1 - Math.pow(-2 * e + 2, 2) / 2;
      }, e.easing.easeInCubic = e.easing.easeInCubic || function (e) {
        return e * e * e;
      }, e.easing.easeOutCubic = e.easing.easeOutCubic || function (e) {
        return 1 - Math.pow(1 - e, 3);
      }, e.easing.easeInOutCubic = e.easing.easeInOutCubic || function (e) {
        return .5 > e ? 4 * e * e * e : 1 - Math.pow(-2 * e + 2, 3) / 2;
      }, e.easing.easeInQuart = e.easing.easeInQuart || function (e) {
        return e * e * e * e;
      }, e.easing.easeOutQuart = e.easing.easeOutQuart || function (e) {
        return 1 - Math.pow(1 - e, 4);
      }, e.easing.easeInOutQuart = e.easing.easeInOutQuart || function (e) {
        return .5 > e ? 8 * e * e * e * e : 1 - Math.pow(-2 * e + 2, 4) / 2;
      }, e.easing.easeInQuint = e.easing.easeInQuint || function (e) {
        return e * e * e * e * e;
      }, e.easing.easeOutQuint = e.easing.easeOutQuint || function (e) {
        return 1 - Math.pow(1 - e, 5);
      }, e.easing.easeInOutQuint = e.easing.easeInOutQuint || function (e) {
        return .5 > e ? 16 * e * e * e * e * e : 1 - Math.pow(-2 * e + 2, 5) / 2;
      }, e.easing.easeInExpo = e.easing.easeInExpo || function (e) {
        return 0 === e ? 0 : Math.pow(2, 10 * e - 10);
      }, e.easing.easeOutExpo = e.easing.easeOutExpo || function (e) {
        return 1 === e ? 1 : 1 - Math.pow(2, -10 * e);
      }, e.easing.easeInOutExpo = e.easing.easeInOutExpo || function (e) {
        return 0 === e ? 0 : 1 === e ? 1 : .5 > e ? Math.pow(2, 20 * e - 10) / 2 : (2 - Math.pow(2, -20 * e + 10)) / 2;
      }, e.easing.easeInSine = e.easing.easeInSine || function (e) {
        return 1 - Math.cos(e * Math.PI / 2);
      }, e.easing.easeOutSine = e.easing.easeOutSine || function (e) {
        return Math.sin(e * Math.PI / 2);
      }, e.easing.easeInOutSine = e.easing.easeInOutSine || function (e) {
        return -(Math.cos(Math.PI * e) - 1) / 2;
      }, e.easing.easeInCirc = e.easing.easeInCirc || function (e) {
        return 1 - Math.sqrt(1 - Math.pow(e, 2));
      }, e.easing.easeOutCirc = e.easing.easeOutCirc || function (e) {
        return Math.sqrt(1 - Math.pow(e - 1, 2));
      }, e.easing.easeInOutCirc = e.easing.easeInOutCirc || function (e) {
        return .5 > e ? (1 - Math.sqrt(1 - Math.pow(2 * e, 2))) / 2 : (Math.sqrt(1 - Math.pow(-2 * e + 2, 2)) + 1) / 2;
      }, e.easing.easeInElastic = e.easing.easeInElastic || function (e) {
        return 0 === e ? 0 : 1 === e ? 1 : -Math.pow(2, 10 * e - 10) * Math.sin((10 * e - 10.75) * (2 * Math.PI / 3));
      }, e.easing.easeOutElastic = e.easing.easeOutElastic || function (e) {
        return 0 === e ? 0 : 1 === e ? 1 : Math.pow(2, -10 * e) * Math.sin((10 * e - .75) * (2 * Math.PI / 3)) + 1;
      }, e.easing.easeInOutElastic = e.easing.easeInOutElastic || function (e) {
        return 0 === e ? 0 : 1 === e ? 1 : .5 > e ? -(Math.pow(2, 20 * e - 10) * Math.sin((20 * e - 11.125) * (2 * Math.PI / 4.5))) / 2 : Math.pow(2, -20 * e + 10) * Math.sin((20 * e - 11.125) * (2 * Math.PI / 4.5)) / 2 + 1;
      }, e.easing.easeInBack = e.easing.easeInBack || function (e) {
        return 2.70158 * e * e * e - 1.70158 * e * e;
      }, e.easing.easeOutBack = e.easing.easeOutBack || function (e) {
        return 1 + 2.70158 * Math.pow(e - 1, 3) + 1.70158 * Math.pow(e - 1, 2);
      }, e.easing.easeInOutBack = e.easing.easeInOutBack || function (e) {
        return .5 > e ? Math.pow(2 * e, 2) * (7.189819 * e - 2.5949095) / 2 : (Math.pow(2 * e - 2, 2) * (3.5949095 * (2 * e - 2) + 2.5949095) + 2) / 2;
      }, e.easing.easeInBounce = e.easing.easeInBounce || function (e) {
        return 1 - t(1 - e);
      }, e.easing.easeOutBounce = e.easing.easeOutBounce || t, e.easing.easeInOutBounce = e.easing.easeInOutBounce || function (e) {
        return .5 > e ? (1 - t(1 - 2 * e)) / 2 : (1 + t(2 * e - 1)) / 2;
      };
    }
  };
  S._easing.call(), e.fn[p] = function (t) {
    return I[t] ? I[t].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != _typeof(t) && t ? void e.error("Method " + t + " does not exist") : I.init.apply(this, arguments);
  }, e[p] = function (t) {
    return I[t] ? I[t].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != _typeof(t) && t ? void e.error("Method " + t + " does not exist") : I.init.apply(this, arguments);
  }, e[p].defaults = v;
}(jQuery, window, document);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./src/js/jquery.maskedinput.js":
/*!**************************************!*\
  !*** ./src/js/jquery.maskedinput.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

(function (factory) {
  if (true) {
    // AMD. Register as an anonymous module.
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(function ($) {
  var ua = navigator.userAgent,
      iPhone = /iphone/i.test(ua),
      chrome = /chrome/i.test(ua),
      android = /android/i.test(ua),
      caretTimeoutId;
  $.mask = {
    //Predefined character definitions
    definitions: {
      '9': "[0-9]",
      'a': "[A-Za-z]",
      '*': "[A-Za-z0-9]"
    },
    autoclear: true,
    dataName: "rawMaskFn",
    placeholder: '_'
  };
  $.fn.extend({
    //Helper Function for Caret positioning
    caret: function caret(begin, end) {
      var range;

      if (this.length === 0 || this.is(":hidden") || this.get(0) !== document.activeElement) {
        return;
      }

      if (typeof begin == 'number') {
        end = typeof end === 'number' ? end : begin;
        return this.each(function () {
          if (this.setSelectionRange) {
            this.setSelectionRange(begin, end);
          } else if (this.createTextRange) {
            range = this.createTextRange();
            range.collapse(true);
            range.moveEnd('character', end);
            range.moveStart('character', begin);
            range.select();
          }
        });
      } else {
        if (this[0].setSelectionRange) {
          begin = this[0].selectionStart;
          end = this[0].selectionEnd;
        } else if (document.selection && document.selection.createRange) {
          range = document.selection.createRange();
          begin = 0 - range.duplicate().moveStart('character', -100000);
          end = begin + range.text.length;
        }

        return {
          begin: begin,
          end: end
        };
      }
    },
    unmask: function unmask() {
      return this.trigger("unmask");
    },
    mask: function mask(_mask, settings) {
      var input, defs, tests, partialPosition, firstNonMaskPos, lastRequiredNonMaskPos, len, oldVal;

      if (!_mask && this.length > 0) {
        input = $(this[0]);
        var fn = input.data($.mask.dataName);
        return fn ? fn() : undefined;
      }

      settings = $.extend({
        autoclear: $.mask.autoclear,
        placeholder: $.mask.placeholder,
        // Load default placeholder
        completed: null
      }, settings);
      defs = $.mask.definitions;
      tests = [];
      partialPosition = len = _mask.length;
      firstNonMaskPos = null;
      _mask = String(_mask);
      $.each(_mask.split(""), function (i, c) {
        if (c == '?') {
          len--;
          partialPosition = i;
        } else if (defs[c]) {
          tests.push(new RegExp(defs[c]));

          if (firstNonMaskPos === null) {
            firstNonMaskPos = tests.length - 1;
          }

          if (i < partialPosition) {
            lastRequiredNonMaskPos = tests.length - 1;
          }
        } else {
          tests.push(null);
        }
      });
      return this.trigger("unmask").each(function () {
        var input = $(this),
            buffer = $.map(_mask.split(""), function (c, i) {
          if (c != '?') {
            return defs[c] ? getPlaceholder(i) : c;
          }
        }),
            defaultBuffer = buffer.join(''),
            focusText = input.val();

        function tryFireCompleted() {
          if (!settings.completed) {
            return;
          }

          for (var i = firstNonMaskPos; i <= lastRequiredNonMaskPos; i++) {
            if (tests[i] && buffer[i] === getPlaceholder(i)) {
              return;
            }
          }

          settings.completed.call(input);
        }

        function getPlaceholder(i) {
          if (i < settings.placeholder.length) return settings.placeholder.charAt(i);
          return settings.placeholder.charAt(0);
        }

        function seekNext(pos) {
          while (++pos < len && !tests[pos]) {
            ;
          }

          return pos;
        }

        function seekPrev(pos) {
          while (--pos >= 0 && !tests[pos]) {
            ;
          }

          return pos;
        }

        function shiftL(begin, end) {
          var i, j;

          if (begin < 0) {
            return;
          }

          for (i = begin, j = seekNext(end); i < len; i++) {
            if (tests[i]) {
              if (j < len && tests[i].test(buffer[j])) {
                buffer[i] = buffer[j];
                buffer[j] = getPlaceholder(j);
              } else {
                break;
              }

              j = seekNext(j);
            }
          }

          writeBuffer();
          input.caret(Math.max(firstNonMaskPos, begin));
        }

        function shiftR(pos) {
          var i, c, j, t;

          for (i = pos, c = getPlaceholder(pos); i < len; i++) {
            if (tests[i]) {
              j = seekNext(i);
              t = buffer[i];
              buffer[i] = c;

              if (j < len && tests[j].test(t)) {
                c = t;
              } else {
                break;
              }
            }
          }
        }

        function androidInputEvent(e) {
          var curVal = input.val();
          var pos = input.caret();

          if (oldVal && oldVal.length && oldVal.length > curVal.length) {
            // a deletion or backspace happened
            checkVal(true);

            while (pos.begin > 0 && !tests[pos.begin - 1]) {
              pos.begin--;
            }

            if (pos.begin === 0) {
              while (pos.begin < firstNonMaskPos && !tests[pos.begin]) {
                pos.begin++;
              }
            }

            input.caret(pos.begin, pos.begin);
          } else {
            var pos2 = checkVal(true);
            var lastEnteredValue = curVal.charAt(pos.begin);

            if (pos.begin < len) {
              if (!tests[pos.begin]) {
                pos.begin++;

                if (tests[pos.begin].test(lastEnteredValue)) {
                  pos.begin++;
                }
              } else {
                if (tests[pos.begin].test(lastEnteredValue)) {
                  pos.begin++;
                }
              }
            }

            input.caret(pos.begin, pos.begin);
          }

          tryFireCompleted();
        }

        function blurEvent(e) {
          checkVal();
          if (input.val() != focusText) input.change();
        }

        function keydownEvent(e) {
          if (input.prop("readonly")) {
            return;
          }

          var k = e.which || e.keyCode,
              pos,
              begin,
              end;
          oldVal = input.val(); //backspace, delete, and escape get special treatment

          if (k === 8 || k === 46 || iPhone && k === 127) {
            pos = input.caret();
            begin = pos.begin;
            end = pos.end;

            if (end - begin === 0) {
              begin = k !== 46 ? seekPrev(begin) : end = seekNext(begin - 1);
              end = k === 46 ? seekNext(end) : end;
            }

            clearBuffer(begin, end);
            shiftL(begin, end - 1);
            e.preventDefault();
          } else if (k === 13) {
            // enter
            blurEvent.call(this, e);
          } else if (k === 27) {
            // escape
            input.val(focusText);
            input.caret(0, checkVal());
            e.preventDefault();
          }
        }

        function keypressEvent(e) {
          if (input.prop("readonly")) {
            return;
          }

          var k = e.which || e.keyCode,
              pos = input.caret(),
              p,
              c,
              next;

          if (e.ctrlKey || e.altKey || e.metaKey || k < 32) {
            //Ignore
            return;
          } else if (k && k !== 13) {
            if (pos.end - pos.begin !== 0) {
              clearBuffer(pos.begin, pos.end);
              shiftL(pos.begin, pos.end - 1);
            }

            p = seekNext(pos.begin - 1);

            if (p < len) {
              c = String.fromCharCode(k);

              if (tests[p].test(c)) {
                shiftR(p);
                buffer[p] = c;
                writeBuffer();
                next = seekNext(p);

                if (android) {
                  //Path for CSP Violation on FireFox OS 1.1
                  var proxy = function proxy() {
                    $.proxy($.fn.caret, input, next)();
                  };

                  setTimeout(proxy, 0);
                } else {
                  input.caret(next);
                }

                if (pos.begin <= lastRequiredNonMaskPos) {
                  tryFireCompleted();
                }
              }
            }

            e.preventDefault();
          }
        }

        function clearBuffer(start, end) {
          var i;

          for (i = start; i < end && i < len; i++) {
            if (tests[i]) {
              buffer[i] = getPlaceholder(i);
            }
          }
        }

        function writeBuffer() {
          input.val(buffer.join(''));
        }

        function checkVal(allow) {
          //try to place characters where they belong
          var test = input.val(),
              lastMatch = -1,
              i,
              c,
              pos;

          for (i = 0, pos = 0; i < len; i++) {
            if (tests[i]) {
              buffer[i] = getPlaceholder(i);

              while (pos++ < test.length) {
                c = test.charAt(pos - 1);

                if (tests[i].test(c)) {
                  buffer[i] = c;
                  lastMatch = i;
                  break;
                }
              }

              if (pos > test.length) {
                clearBuffer(i + 1, len);
                break;
              }
            } else {
              if (buffer[i] === test.charAt(pos)) {
                pos++;
              }

              if (i < partialPosition) {
                lastMatch = i;
              }
            }
          }

          if (allow) {
            writeBuffer();
          } else if (lastMatch + 1 < partialPosition) {
            if (settings.autoclear || buffer.join('') === defaultBuffer) {
              // Invalid value. Remove it and replace it with the
              // mask, which is the default behavior.
              if (input.val()) input.val("");
              clearBuffer(0, len);
            } else {
              // Invalid value, but we opt to show the value to the
              // user and allow them to correct their mistake.
              writeBuffer();
            }
          } else {
            writeBuffer();
            input.val(input.val().substring(0, lastMatch + 1));
          }

          return partialPosition ? i : firstNonMaskPos;
        }

        input.data($.mask.dataName, function () {
          return $.map(buffer, function (c, i) {
            return tests[i] && c != getPlaceholder(i) ? c : null;
          }).join('');
        });
        input.one("unmask", function () {
          input.off(".mask").removeData($.mask.dataName);
        }).on("focus.mask", function () {
          if (input.prop("readonly")) {
            return;
          }

          clearTimeout(caretTimeoutId);
          var pos;
          focusText = input.val();
          pos = checkVal();
          caretTimeoutId = setTimeout(function () {
            if (input.get(0) !== document.activeElement) {
              return;
            }

            writeBuffer();

            if (pos == _mask.replace("?", "").length) {
              input.caret(0, pos);
            } else {
              input.caret(pos);
            }
          }, 10);
        }).on("blur.mask", blurEvent).on("keydown.mask", keydownEvent).on("keypress.mask", keypressEvent).on("input.mask paste.mask", function () {
          if (input.prop("readonly")) {
            return;
          }

          setTimeout(function () {
            var pos = checkVal(true);
            input.caret(pos);
            tryFireCompleted();
          }, 0);
        });

        if (chrome && android) {
          input.off('input.mask').on('input.mask', androidInputEvent);
        }

        checkVal(); //Perform initial check for existing values
      });
    }
  });
});

/***/ })

/******/ });
//# sourceMappingURL=main.js.map