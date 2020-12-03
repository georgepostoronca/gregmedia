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
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash.debounce */ "./node_modules/lodash.debounce/index.js");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var svg4everybody__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! svg4everybody */ "./node_modules/svg4everybody/dist/svg4everybody.js");
/* harmony import */ var svg4everybody__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(svg4everybody__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var formbouncerjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formbouncerjs */ "./node_modules/formbouncerjs/dist/bouncer.polyfills.min.js");
/* harmony import */ var formbouncerjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(formbouncerjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.esm.js");
/* harmony import */ var _lax__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lax */ "./src/js/lax.js");
/* harmony import */ var _lax__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_lax__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var remodal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! remodal */ "./node_modules/remodal/dist/remodal.js");
/* harmony import */ var remodal__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(remodal__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var stickyfilljs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! stickyfilljs */ "./node_modules/stickyfilljs/dist/stickyfill.js");
/* harmony import */ var stickyfilljs__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(stickyfilljs__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _jsscrollto__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./jsscrollto */ "./src/js/jsscrollto.js");
/* harmony import */ var _jsscrollto__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_jsscrollto__WEBPACK_IMPORTED_MODULE_7__);
 // svg4everybody


svg4everybody__WEBPACK_IMPORTED_MODULE_1___default()(); // Валидатор формы

 // Слайдер


swiper__WEBPACK_IMPORTED_MODULE_3__["default"].use([swiper__WEBPACK_IMPORTED_MODULE_3__["Pagination"]]); // Плагин для анимаций

 // инициялизация lax.js

document.addEventListener("DOMContentLoaded", function () {
  _lax__WEBPACK_IMPORTED_MODULE_4___default.a.setup({
    breakpoints: {
      w0: 0,
      w768: 768,
      w992: 992,
      w1100: 1100,
      w1300: 1300
    }
  });

  var updateLax = function updateLax() {
    _lax__WEBPACK_IMPORTED_MODULE_4___default.a.update(window.scrollY);
    window.requestAnimationFrame(updateLax);
  };

  window.requestAnimationFrame(updateLax);
}); // Modal

 // Position Sticky Polifill


var elements = document.querySelectorAll(".sticky");
stickyfilljs__WEBPACK_IMPORTED_MODULE_6___default.a.add(elements); // Scroll To Link


$("#top-nav").activescroll({
  scroll: "scroll",
  active: "active",
  offset: 100,
  animate: 1000,
  callback: function callback() {
    document.querySelector(".header").classList.remove("active");
    document.querySelector(".btn-burger").classList.remove("active");
  }
});

Number.isNaN = Number.isNaN || function (value) {
  return typeof value === "number" && isNaN(value);
}; //ES6 version (полифил для object-fit в IE)


if ("objectFit" in document.documentElement.style === false) {
  document.addEventListener("DOMContentLoaded", function () {
    Array.prototype.forEach.call(document.querySelectorAll("img[data-object-fit]"), function (image) {
      (image.runtimeStyle || image.style).background = "url(\"".concat(image.src, "\") no-repeat 50%/").concat(image.currentStyle ? image.currentStyle["object-fit"] : image.getAttribute("data-object-fit"));
      image.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='".concat(image.width, "' height='").concat(image.height, "'%3E%3C/svg%3E");
    });
  });
} // Уменьшение меню при скроле


document.addEventListener("scroll", lodash_debounce__WEBPACK_IMPORTED_MODULE_0___default()(function () {
  // if(window.matchMedia("(max-width: 768px)").matches) return false;
  var top = window.scrollY || window.pageYOffset;
  var header = document.querySelector(".header");

  if (top > 50.21321321) {
    header.classList.add("fixed");
  } else {
    header.classList.remove("fixed");
  }
}, 10)); // Открыть/Закрыть Меню
// Блок Header

var menuWrap = document.querySelector(".js-menu"); // Кнопка закрыть/октрыть меню в блоке Header

var menuOpenBtn = document.querySelector(".js-open-menu");

if (menuWrap && menuOpenBtn) {
  menuOpenBtn.addEventListener("click", function () {
    this.classList.toggle("active");
    menuWrap.classList.toggle("active");
  });
} // Textarea авто высота


autosize();

function autosize() {
  var text = [].slice.call(document.querySelectorAll(".autosize"));
  if (!text) return false;
  text.forEach(function (item) {
    item.setAttribute("rows", 1);
    resize(item);
    item.addEventListener("input", function () {
      resize(this);
    });
  });

  function resize($text) {
    $text.style.height = "auto";
    $text.style.height = $text.scrollHeight + 2 + "px";
  }
} // Открыть/Закрыть cmodal


function openCmodal(item) {
  if (!item) return false;
  item.classList.add("active");
  item.classList.add("animate");
}

function closeCmodal(item) {
  if (!item) return false;
  item.classList.remove("animate");
  setTimeout(function () {
    item.classList.remove("active");
  }, 500);
}

(function () {
  var activeModal = undefined; // все блоки из списка

  var btns = [].slice.call(document.querySelectorAll("[data-cmodal-btn]")); // блоки попапов с контентом

  var contents = [].slice.call(document.querySelectorAll("[data-cmodal-content]")); // если ничего не нашли в DOM то возвращаем false;

  if (!btns.length || !contents.length) return false;
  btns.forEach(function (item) {
    item.addEventListener("click", function () {
      if (!window.matchMedia("(min-width: 769px)").matches) return false; // определяем index элемента в масиве

      var index = btns.indexOf(this); // передаем функций элемент из масива с индексом [index]

      activeModal = contents[index];
      openCmodal(contents[index]);
    });
  });
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" || event.key === "Esc") {
      closeCmodal(activeModal);
    }
  });
  contents.forEach(function (item) {
    // кнопка закрыть из попапа
    var close = item.querySelector("[data-cmodal-close]");
    close.addEventListener("click", function () {
      activeModal = undefined;
      closeCmodal(item);
    });
  });
})(); // cmodalslider slider(mobile)


(function () {
  // breakpoint where swiper will be destroyed
  // and switches to a dual-column layout
  var breakpoint = window.matchMedia("(min-width:769px)"); // keep track of swiper instances to destroy later

  var mySwiper; //////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////

  var breakpointChecker = function breakpointChecker() {
    // if larger viewport and multi-row layout needed
    if (breakpoint.matches === true) {
      // clean up old instances and inline styles when available
      if (mySwiper !== undefined) mySwiper.destroy(true, true); // or/and do nothing

      return; // else if a small viewport and single column layout needed
    } else if (breakpoint.matches === false) {
      // fire small viewport version of swiper
      return enableSwiper();
    }
  }; //////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////


  var enableSwiper = function enableSwiper() {
    mySwiper = new swiper__WEBPACK_IMPORTED_MODULE_3__["default"](".js-cmodalslider", {
      slidesPerView: 3,
      spaceBetween: 10,
      autoHeight: true,
      pagination: {
        el: ".js-cmodalslider-pagination",
        clickable: true
      },
      on: {
        init: function init() {
          var el = document.querySelector(".js-cmodalslider .swiper-wrapper");
          el.style.height = "auto";
        }
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 10,
          autoHeight: true
        },
        370: {
          slidesPerView: 1,
          spaceBetween: 30
        },
        450: {
          slidesPerView: 1,
          spaceBetween: 10
        },
        650: {
          slidesPerView: 2,
          spaceBetween: 10 // autoHeight: false,

        }
      }
    });
    setTimeout(function () {
      mySwiper.slideTo(0);
    }, 500);
  }; //////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////
  // keep an eye on viewport size changes


  breakpoint.addListener(breakpointChecker); // kickstart

  breakpointChecker();
})(); // Header Slider
// let bsliderEl = document.querySelector(".js-bslider");
// if(bsliderEl) {
//     let bslider = new Swiper(".js-bslider", {
//         slidesPerView: 1,
//         pagination: {
//             el: ".js-bslider-pagination",
//             clickable: true,
//         }
//     });
// }
// Валидация формы


var validatorClass = document.querySelectorAll(".js-form-validator");

if (validatorClass.length) {
  var bouncer = new formbouncerjs__WEBPACK_IMPORTED_MODULE_2___default.a(".js-form-validator", {
    disableSubmit: true,
    fieldClass: "error",
    // Applied to fields with errors
    errorClass: "error-message",
    // Applied to the error message for invalid fields
    fieldPrefix: "bouncer-field_",
    // If a field doesn't have a name or ID, one is generated with this prefix
    errorPrefix: "bouncer-error_",
    // Prefix used for error message IDs
    patterns: {
      email: /^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*(\.\w{2,})+$/,
      // password: /(?=.*\d)(?=.*[a-zа-яё|A-ZА-ЯЁ]).{8,}/,
      password: /[\d\w\W\D\d].{7,}/,
      tel: /^(\+7|7|8)?[\s\-]?\(?[0-9]{3}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/,
      phone: /^(\+7|7|8)?[\s\-]?\(?[0-9]{3}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/
    }
  }); // document.addEventListener('bouncerFormInvalid', function (event) {
  // }, false);

  document.addEventListener("bouncerFormValid", function (el) {
    try {
      var fn = el.target.dataset.submit;
      window[fn](el);
    } catch (e) {
      console.log("Form Submit Error!");
    }
  }, false);
} // Test Open Second Modal
// когда будет понятно как работает формы этот код надо удалить и сделать нормально!


var modalBtnElement = [].slice.call(document.querySelectorAll(".js-open-second-modal"));
var firstModal = document.querySelector(".js-first-modal");
var secondModal = document.querySelector(".js-second-modal");
var bmodalNumber = document.querySelector(".bmodal__head");
var modalSubmit = document.querySelector(".js-modal-submit");
modalSubmit.addEventListener("click", function () {
  var modal = $("[data-remodal-id='modal']").remodal();
  modal.close();
});
modalBtnElement.forEach(function (item) {
  item.addEventListener("change", function () {
    firstModal.classList.remove("active");
    secondModal.classList.add("active");
    var child = [].slice.call(bmodalNumber.children);
    child.forEach(function (item) {
      item.classList.remove("active");
    });
    child[2].classList.add("active");
  });
}); // ============================================
// Swipe
// ============================================

var swipeDetector = function swipeDetector(swipeCallback, element) {
  if (!swipeCallback) throw "Swipe-listening makes no sense without a callback function!";
  var minimumPixelDistance = 1;
  var minimumSpeed = 100;
  var startTime, startX, startY;
  var highSpeed = false;
  var that = {};

  that.getSensor = function () {
    return element || document.body;
  };

  that.setStartState = function (startMoveX, startMoveY) {
    startTime = new Date().getTime();
    highSpeed = false;
    startX = startMoveX;
    startY = startMoveY;
  };

  that.setMoveState = function (moveX, moveY, event) {
    if (!that.isStarted() || !event) return;

    if (!highSpeed) {
      var elapsedTime = getElapsedTime();

      if (elapsedTime > 0) {
        if (getSpeed(elapsedTime, startX, moveX) >= minimumSpeed || getSpeed(elapsedTime, startY, moveY) >= minimumSpeed) highSpeed = true;
      }
    }

    if (highSpeed) event.preventDefault();
  };

  that.detectSwipe = function (endMoveX, endMoveY) {
    if (!that.isStarted()) return;
    var elapsedTime = getElapsedTime();

    if (elapsedTime > 0) {
      if (getDistance(startX, endMoveX) >= getMinimumPixelDistanceX() || getDistance(startY, endMoveY) >= getMinimumPixelDistanceY()) {
        var speedX = getSpeed(elapsedTime, startX, endMoveX) >= minimumSpeed;
        var speedY = getSpeed(elapsedTime, startY, endMoveY) >= minimumSpeed;
        if (!(speedX && speedY)) // movement was not horizontal AND vertical
          if (speedX) swipeCallback(endMoveX < startX ? "left" : "right");else if (speedY) swipeCallback(endMoveY < startY ? "up" : "down");
      }
    }

    startTime = undefined;
    highSpeed = false;
  };

  that.isStarted = function () {
    return startTime !== undefined;
  };

  var getElapsedTime = function getElapsedTime() {
    return new Date().getTime() - startTime;
  };

  var getSpeed = function getSpeed(elapsedTime, start, move) {
    return 100 * getDistance(start, move) / elapsedTime;
  };

  var getDistance = function getDistance(start, move) {
    return Math.abs(move - start);
  };

  var getMinimumPixelDistanceX = function getMinimumPixelDistanceX() {
    return Math.min(minimumPixelDistance, that.getSensor().offsetWidth - 20);
  };

  var getMinimumPixelDistanceY = function getMinimumPixelDistanceY() {
    return Math.min(minimumPixelDistance, that.getSensor().offsetHeight - 20);
  };

  return that;
};

var swipeMouse = function swipeMouse(swipeCallback, element) {
  var detector = swipeDetector(swipeCallback, element);
  element = detector.getSensor();
  element.addEventListener("mousedown", function (event) {
    detector.setStartState(event.pageX, event.pageY);
  });
  element.addEventListener("mousemove", function (event) {
    if (detector.isStarted()) detector.setMoveState(event.pageX, event.pageY, event);
  });
  element.addEventListener("mouseup", function (event) {
    detector.detectSwipe(event.pageX, event.pageY);
  });
  element.addEventListener("mouseout", function (event) {
    detector.detectSwipe(event.pageX, event.pageY);
  });
};

var swipeTouch = function swipeTouch(swipeCallback, element) {
  var detector = swipeDetector(swipeCallback, element);
  element = detector.getSensor();

  var touchCallback = function touchCallback(event, isStart, isEnd) {
    if (event.changedTouches.length === 1) {
      var touch = event.changedTouches[0];
      if (isStart) detector.setStartState(touch.pageX, touch.pageY);else if (isEnd) detector.detectSwipe(touch.pageX, touch.pageY);else detector.setMoveState(touch.pageX, touch.pageY, event);
    }
  };

  element.addEventListener("touchstart", function (event) {
    touchCallback(event, true, false);
  });
  element.addEventListener("touchmove", function (event) {
    touchCallback(event, false, false);
  });

  var touchEndCallback = function touchEndCallback(event) {
    touchCallback(event, false, true);
  };

  element.addEventListener("touchend", touchEndCallback);
  element.addEventListener("touchcancel", touchEndCallback);
  return detector;
};

(function () {
  var classes = {
    anim: ".bsldier__anim",
    img: ".bsldier__img",
    info: ".bsldier__info",
    wrap: ".js-bsldier-swipe",
    pagination: ".js-bsldier-pagination"
  };
  var bslider = document.querySelector(".js-bsldier");
  if (!bslider) return 0;
  var currentIndex = 0;
  var transitionsEnd = true;
  var loopInterval;
  var timeInterval = 3000;
  var items = [].slice.call(document.querySelectorAll(".js-bsldier-item"));
  var wrap = bslider.querySelector(classes.wrap);
  var img = bslider.querySelector(classes.img);
  var anim = bslider.querySelector(classes.anim);
  var info = bslider.querySelector(classes.info);
  var pagination = bslider.querySelector(classes.pagination);
  items.forEach(function (item, index) {
    var pagitem = document.createElement("button");
    var span = document.createElement("span");
    pagitem.dataset.index = index;

    if (index <= 9) {
      span.appendChild(document.createTextNode("0" + (index + 1)));
    } else {
      span.appendChild(document.createTextNode(index + 1));
    }

    pagitem.appendChild(span);

    if (index == 0) {
      pagitem.classList.add("active");
    }

    pagitem.addEventListener("click", function () {
      if (!transitionsEnd) return false;
      if (currentIndex === index) return false;
      this.classList.add("active");
      var self = this;
      var childs = [].slice.call(this.parentElement.children);
      var siblings = childs.filter(function (item) {
        if (item == self) return false;
        return item;
      });
      siblings.forEach(function (item) {
        item.classList.remove("active");
      });
      goTo(index);
    });
    pagination.appendChild(pagitem);
  }); // function loop(type) {
  //     console.log("LOOP");
  //     if(type) {
  //         console.log("type");
  //         setTimeout(function () {
  //             next();
  //         }, 6000);
  //     } else {
  //         console.log("type false");
  //
  //         loopInterval = setInterval(function() {
  //             if((items.length - 1) == currentIndex) {
  //                 goTo(0);
  //                 console.log("GoTo");
  //             } else {
  //                 next();
  //                 console.log("Next");
  //             }
  //         }, 6000);
  //     }
  //
  //     activateCurentPagination();
  // }

  function activateCurentPagination() {
    if (!transitionsEnd) return false;
    var el = [].slice.call(pagination.querySelectorAll("button"));
    var childs = [].slice.call(el[currentIndex].parentElement.children);
    el[currentIndex].classList.add("active");
    var siblings = childs.filter(function (val) {
      if (val == el[currentIndex]) return false;
      return val;
    });
    siblings.forEach(function (item) {
      item.classList.remove("active");
    });
  }

  activateCurentPagination();

  function disbaleSwipe(type) {
    switch (type) {
      case "disable":
        bslider.classList.add("enabled");
        bslider.classList.remove("disabled");
        break;

      case "enable":
        bslider.classList.add("disabled");
        bslider.classList.remove("enabled");
        break;

      default:
        bslider.classList.add("disabled");
        bslider.classList.remove("enabled");
    }
  }

  function returnNode(index) {
    var img = items[index].querySelector(classes.img);
    var anim = items[index].querySelector(classes.anim);
    var info = items[index].querySelector(classes.info);
    return {
      anim: anim,
      img: img,
      info: info,
      item: items[index]
    };
  } // Prev


  function prev() {
    if (!transitionsEnd) return false;
    loop("stop");

    if (currentIndex >= 1) {
      transitionsEnd = false;
      disbaleSwipe("disable");
      var data = returnNode(currentIndex);
      var _img = data.img;
      var _anim = data.anim;
      var _info = data.info;
      var item = data.item;

      _img.classList.add("first");

      _anim.classList.add("first");

      _info.classList.add("first");

      animatePrev(_img, _anim, _info);
      currentIndex--;

      var nextAnim = function nextAnim() {
        item.classList.remove("active");
        var data2 = returnNode(currentIndex);
        var img2 = data2.img;
        var anim2 = data2.anim;
        var info2 = data2.info;
        var item2 = data2.item;
        img2.classList.remove("first");
        anim2.classList.remove("first");
        info2.classList.remove("first");
        item2.classList.add("active");
        setTimeout(function () {
          animateNext(img2, anim2, info2);
        }, 100);

        var endAnim = function endAnim() {
          setTimeout(function () {
            transitionsEnd = true;
            activateCurentPagination();
          }, 200);
          setTimeout(function () {
            disbaleSwipe();
          }, 500);

          _anim.removeEventListener("animationend", nextAnim);

          anim2.removeEventListener("animationend", endAnim);
        };

        anim2.addEventListener("animationend", endAnim);
      };

      _anim.addEventListener("animationend", nextAnim);
    }
  } // Next


  function next() {
    if (!transitionsEnd) return false;
    loop("stop");

    if (currentIndex <= items.length - 2) {
      transitionsEnd = false;
      disbaleSwipe("disable");
      var data = returnNode(currentIndex);
      var _img2 = data.img;
      var _anim2 = data.anim;
      var _info2 = data.info;
      var item = data.item;
      animatePrev(_img2, _anim2, _info2);

      _img2.classList.add("first");

      _anim2.classList.add("first");

      _info2.classList.add("first");

      currentIndex++;

      var nextAnim = function nextAnim() {
        item.classList.remove("active");
        var data2 = returnNode(currentIndex);
        var img2 = data2.img;
        var anim2 = data2.anim;
        var info2 = data2.info;
        var item2 = data2.item;
        item2.classList.add("active");
        setTimeout(function () {
          animateNext(img2, anim2, info2);
        }, 100);
        img2.classList.remove("first");
        anim2.classList.remove("first");
        info2.classList.remove("first");

        var endAnim = function endAnim() {
          setTimeout(function () {
            transitionsEnd = true;
            activateCurentPagination();
          }, 200);
          setTimeout(function () {
            disbaleSwipe();
            loop();
          }, 500);

          _anim2.removeEventListener("animationend", nextAnim);

          anim2.removeEventListener("animationend", endAnim);
        };

        anim2.addEventListener("animationend", endAnim);
      };

      _anim2.addEventListener("animationend", nextAnim);
    }
  }

  function goTo(index) {
    if (!transitionsEnd) return false;
    loop("stop");

    if (currentIndex <= items.length - 1) {
      transitionsEnd = false;
      disbaleSwipe("disable");
      var data = returnNode(currentIndex);
      var _img3 = data.img;
      var _anim3 = data.anim;
      var _info3 = data.info;
      var item = data.item;
      animatePrev(_img3, _anim3, _info3);

      _img3.classList.add("first");

      _anim3.classList.add("first");

      _info3.classList.add("first");

      currentIndex = index;

      var nextAnim = function nextAnim() {
        item.classList.remove("active");
        var data2 = returnNode(currentIndex);
        var img2 = data2.img;
        var anim2 = data2.anim;
        var info2 = data2.info;
        var item2 = data2.item;
        item2.classList.add("active");
        setTimeout(function () {
          animateNext(img2, anim2, info2);
        }, 100);
        img2.classList.remove("first");
        anim2.classList.remove("first");
        info2.classList.remove("first");

        var endAnim = function endAnim() {
          setTimeout(function () {
            transitionsEnd = true;
          }, 200);
          setTimeout(function () {
            disbaleSwipe();
            loop();
          }, 500);

          _anim3.removeEventListener("animationend", nextAnim);

          anim2.removeEventListener("animationend", endAnim);
        };

        anim2.addEventListener("animationend", endAnim);
      };

      _anim3.addEventListener("animationend", nextAnim);
    }
  }

  function loop(type) {
    if (type === "init") {
      setTimeout(function () {
        next();
      }, timeInterval);
    } else {
      loopInterval = setTimeout(function () {
        if (items.length - 1 === currentIndex) {
          goTo(0);
        } else {
          next();
        }
      }, timeInterval);
    }

    if (type === "stop") {
      clearTimeout(loopInterval);
    }

    activateCurentPagination();
  } // Init


  function init() {
    window.onload = function () {
      bslider.classList.add("active");
      setTimeout(function () {
        animateNext(img, anim, info);
      }, 500);
      setTimeout(function () {
        img.classList.add("first");
        anim.classList.add("first");
        info.classList.add("first");
      }, 1000);
      loop("init");
    };
  }

  init();

  function animateNext(img, anim, info) {
    img.classList.add("animate");
    setTimeout(function () {
      anim.classList.add("animate");
    }, 200);
    setTimeout(function () {
      info.classList.add("animate");
    }, 400);
  }

  function animatePrev(img, anim, info) {
    img.classList.remove("animate");
    setTimeout(function () {
      info.classList.remove("animate");
    }, 200);
    setTimeout(function () {
      anim.classList.remove("animate");
    }, 400);
  }

  swipeMouse(function (dir) {
    switch (dir) {
      case "left":
        if (items.length - 1 === currentIndex) {
          goTo(0);
        } else {
          next();
        }

        break;

      case "right":
        if (currentIndex === 0) {
          goTo(items.length - 1);
        } else {
          prev();
        }

        break;

      default:
        if (items.length - 1 === currentIndex) {
          goTo(0);
        } else {
          next();
        }

    }
  }, wrap);
  swipeTouch(function (dir) {
    switch (dir) {
      case "left":
        if (items.length - 1 === currentIndex) {
          goTo(0);
        } else {
          next();
        }

        break;

      case "right":
        if (currentIndex === 0) {
          goTo(items.length - 1);
        } else {
          prev();
        }

        break;

      default:
        if (items.length - 1 === currentIndex) {
          goTo(0);
        } else {
          next();
        }

    }
  }, wrap);
})(); // ============================================
// ============================================
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./src/js/jsscrollto.js":
/*!******************************!*\
  !*** ./src/js/jsscrollto.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
 * Active Scroll v1.0.0
 * jQuery Plugin for Smooth scrolling with anchor highlighting
 * MIT License
 * Author: Gareth Cozens (Cuzzy)
 */
!function (t) {
  "use strict";

   true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (t),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
}(function (t) {
  "use strict";

  var a,
      e,
      i = {
    data: "scroll",
    active: "active",
    offset: 20,
    animate: 1e3,
    callback: function callback() {}
  },
      o = [],
      n = "",
      r = {
    closest: function closest(t) {
      var a = o[n],
          e = Math.abs(t - a);

      for (var i in o) {
        var r = Math.abs(t - o[i]);
        e > r && (e = r, a = o[i]);
      }

      return a;
    },
    attach: function attach() {
      t(window).scroll(function () {
        var a = t(window).scrollTop(),
            n = r.closest(a);
        e.removeClass(i.active);
        var s = i.firstKey;

        for (var c in o) {
          if (o[c] === n) {
            s = c;
            break;
          }
        }

        t("[data-" + i.data + "=\"" + s + "\"]").addClass(i.active);
      }), t("[data-" + i.data + "]").click(function (n) {
        i.callback();
        var r = t(this).data(i.data);
        t("html, body").animate({
          scrollTop: t("#" + r).offset().top - i.offset
        }, i.animate, function () {
          var n = t(window).scrollTop() + i.offset;
          n !== o[r] && (e.removeClass(i.active), t(a).find("[data-" + i.data + "=\"" + r + "\"]").addClass(i.active));
        }), n.stopImmediatePropagation();
      });
    },
    init: function init(s, c) {
      a = s, e = t(a).find("[data-" + i.data + "]"), i = t.extend(i, c);
      var f = 0;
      e.each(function () {
        var a = t(this).data(i.data);
        o[a] = t("#" + a).offset().top, n = 0 === f ? a : n, f++;
      }), r.attach();
    }
  };

  t.fn.activescroll = function (t) {
    return r.init(this, t);
  };
});

/***/ }),

/***/ "./src/js/lax.js":
/*!***********************!*\
  !*** ./src/js/lax.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

//
// lax v1.2.3 (Alex Fox)
// Simple & light weight vanilla javascript plugin to create beautiful animations things when you scrolllll!!
//
// Licensed under the terms of the MIT license.
//
// You may use it in your theme if you credit me. 
// It is also free to use on any individual website.
//
// Exception:
// The only restriction is to not publish any  
// extension for browsers or native application
// without getting a written permission first.
//
(function () {
  var lax = function () {
    var lax = {
      elements: []
    };
    var lastY = 0;
    var currentBreakpoint = 'default';
    var breakpointsSeparator = "_";
    var transformFns = {
      "data-lax-opacity": function dataLaxOpacity(style, v) {
        style.opacity = v;
      },
      "data-lax-translate": function dataLaxTranslate(style, v) {
        style.transform += " translate(".concat(v, "px, ").concat(v, "px)");
      },
      "data-lax-translate-x": function dataLaxTranslateX(style, v) {
        style.transform += " translateX(".concat(v, "px)");
      },
      "data-lax-translate-y": function dataLaxTranslateY(style, v) {
        style.transform += " translateY(".concat(v, "px)");
      },
      "data-lax-scale": function dataLaxScale(style, v) {
        style.transform += " scale(".concat(v, ")");
      },
      "data-lax-scale-x": function dataLaxScaleX(style, v) {
        style.transform += " scaleX(".concat(v, ")");
      },
      "data-lax-scale-y": function dataLaxScaleY(style, v) {
        style.transform += " scaleY(".concat(v, ")");
      },
      "data-lax-skew": function dataLaxSkew(style, v) {
        style.transform += " skew(".concat(v, "deg, ").concat(v, "deg)");
      },
      "data-lax-skew-x": function dataLaxSkewX(style, v) {
        style.transform += " skewX(".concat(v, "deg)");
      },
      "data-lax-skew-y": function dataLaxSkewY(style, v) {
        style.transform += " skewY(".concat(v, "deg)");
      },
      "data-lax-rotate": function dataLaxRotate(style, v) {
        style.transform += " rotate(".concat(v, "deg)");
      },
      "data-lax-rotate-x": function dataLaxRotateX(style, v) {
        style.transform += " rotateX(".concat(v, "deg)");
      },
      "data-lax-rotate-y": function dataLaxRotateY(style, v) {
        style.transform += " rotateY(".concat(v, "deg)");
      },
      "data-lax-brightness": function dataLaxBrightness(style, v) {
        style.filter += " brightness(".concat(v, "%)");
      },
      "data-lax-contrast": function dataLaxContrast(style, v) {
        style.filter += " contrast(".concat(v, "%)");
      },
      "data-lax-hue-rotate": function dataLaxHueRotate(style, v) {
        style.filter += " hue-rotate(".concat(v, "deg)");
      },
      "data-lax-blur": function dataLaxBlur(style, v) {
        style.filter += " blur(".concat(v, "px)");
      },
      "data-lax-invert": function dataLaxInvert(style, v) {
        style.filter += "  invert(".concat(v, "%)");
      },
      "data-lax-saturate": function dataLaxSaturate(style, v) {
        style.filter += "  saturate(".concat(v, "%)");
      },
      "data-lax-grayscale": function dataLaxGrayscale(style, v) {
        style.filter += "  grayscale(".concat(v, "%)");
      },
      "data-lax-bg-pos": function dataLaxBgPos(style, v) {
        style.backgroundPosition = "".concat(v, "px ").concat(v, "px");
      },
      "data-lax-bg-pos-x": function dataLaxBgPosX(style, v) {
        style.backgroundPositionX = "".concat(v, "px");
      },
      "data-lax-bg-pos-y": function dataLaxBgPosY(style, v) {
        style.backgroundPositionY = "".concat(v, "px");
      }
    };
    var _crazy = "";

    for (var i = 0; i < 20; i++) {
      _crazy += " " + i * 5 + " " + i * 47 % 360 + ", ";
    }

    lax.presets = {
      linger: function linger(v) {
        return {
          "data-lax-translate-y": "(vh*0.7) 0, 0 200, -500 0"
        };
      },
      lazy: function lazy() {
        var v = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 100;
        return {
          "data-lax-translate-y": "(vh) 0, (-elh) ".concat(v)
        };
      },
      eager: function eager() {
        var v = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 100;
        return {
          "data-lax-translate-y": "(vh) 0, (-elh) -".concat(v)
        };
      },
      slalom: function slalom() {
        var v = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 50;
        return {
          "data-lax-translate-x": "vh ".concat(v, ", (vh*0.8) ").concat(-v, ", (vh*0.6) ").concat(v, ", (vh*0.4) ").concat(-v, ", (vh*0.2) ").concat(v, ", (vh*0) ").concat(-v, ", (-elh) ").concat(v)
        };
      },
      crazy: function crazy(v) {
        return {
          "data-lax-hue-rotate": "".concat(_crazy, " | loop=20")
        };
      },
      spin: function spin() {
        var v = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 360;
        return {
          "data-lax-rotate": "(vh) 0, (-elh) ".concat(v)
        };
      },
      spinRev: function spinRev() {
        var v = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 360;
        return {
          "data-lax-rotate": "(vh) 0, (-elh) ".concat(-v)
        };
      },
      spinIn: function spinIn() {
        var v = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 360;
        return {
          "data-lax-rotate": "vh ".concat(v, ", (vh*0.5) 0")
        };
      },
      spinOut: function spinOut() {
        var v = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 360;
        return {
          "data-lax-rotate": "(vh*0.5) 0, -elh ".concat(v)
        };
      },
      blurInOut: function blurInOut() {
        var v = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 40;
        return {
          "data-lax-blur": "(vh) ".concat(v, ", (vh*0.8) 0, (vh*0.2) 0, 0 ").concat(v)
        };
      },
      blurIn: function blurIn() {
        var v = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 40;
        return {
          "data-lax-blur": "(vh) ".concat(v, ", (vh*0.7) 0")
        };
      },
      blurOut: function blurOut() {
        var v = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 40;
        return {
          "data-lax-blur": "(vh*0.3) 0, 0 ".concat(v)
        };
      },
      fadeInOut: function fadeInOut() {
        return {
          "data-lax-opacity": "(vh) 0, (vh*0.8) 1, (vh*0.2) 1, 0 0"
        };
      },
      fadeIn: function fadeIn() {
        return {
          "data-lax-opacity": "(vh) 0, (vh*0.7) 1"
        };
      },
      fadeOut: function fadeOut() {
        return {
          "data-lax-opacity": "(vh*0.3) 1, 0 0"
        };
      },
      driftLeft: function driftLeft() {
        var v = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 100;
        return {
          "data-lax-translate-x": "vh ".concat(v, ", -elh ").concat(-v)
        };
      },
      driftRight: function driftRight() {
        var v = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 100;
        return {
          "data-lax-translate-x": "vh ".concat(-v, ", -elh ").concat(v)
        };
      },
      leftToRight: function leftToRight() {
        var v = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
        return {
          "data-lax-translate-x": "vh 0, -elh (vw*".concat(v, ")")
        };
      },
      rightToLeft: function rightToLeft() {
        var v = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
        return {
          "data-lax-translate-x": "vh 0, -elh (vw*".concat(-v, ")")
        };
      },
      zoomInOut: function zoomInOut() {
        var v = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0.2;
        return {
          "data-lax-scale": "(vh) ".concat(v, ", (vh*0.8) 1, (vh*0.2) 1, -elh ").concat(v)
        };
      },
      zoomIn: function zoomIn() {
        var v = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0.2;
        return {
          "data-lax-scale": "(vh) ".concat(v, ", (vh*0.7) 1")
        };
      },
      zoomOut: function zoomOut() {
        var v = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0.2;
        return {
          "data-lax-scale": "(vh*0.3) 1, -elh ".concat(v)
        };
      },
      speedy: function speedy() {
        var v = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 30;
        return {
          "data-lax-skew-x": "(vh) ".concat(v, ", -elh ").concat(-v)
        };
      },
      swing: function swing() {
        var v = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 30;
        return {
          "data-lax-skew-y": "(vh) ".concat(v, ", -elh ").concat(-v)
        };
      }
    };

    lax.addPreset = function (p, o) {
      lax.presets[p] = o;
    };

    function intrp(t, v) {
      var i = 0;

      while (t[i][0] <= v && t[i + 1] !== undefined) {
        i += 1;
      }

      var x = t[i][0];
      var prevX = t[i - 1] === undefined ? x : t[i - 1][0];
      var y = t[i][1];
      var prevY = t[i - 1] === undefined ? y : t[i - 1][1];
      var xPoint = Math.min(Math.max((v - prevX) / (x - prevX), 0), 1);
      var yPoint = xPoint * (y - prevY) + prevY;
      return yPoint;
    }

    function fnOrVal(s) {
      if (s[0] === "(") return eval(s);else return parseFloat(s);
    }

    lax.setup = function () {
      var o = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      lax.breakpoints = o.breakpoints || {};
      lax.selector = o.selector || '.lax';
      lax.populateElements();
    };

    lax.removeElement = function (el) {
      var i = lax.elements.findIndex(function (o) {
        return o.el === el;
      });

      if (i > -1) {
        lax.elements.splice(i, 1);
      }
    };

    lax.createLaxObject = function (el) {
      var o = {
        el: el,
        originalStyle: {
          transform: el.style.transform,
          filter: el.style.filter
        },
        transforms: {}
      };
      return o;
    };

    lax.calcTransforms = function (o) {
      var el = o.el; //find presets in data attributes

      var presets = [];

      for (var _i = 0; _i < el.attributes.length; _i++) {
        var a = el.attributes[_i];

        if (a.name.indexOf("data-lax-preset") > -1) {
          presets.push(a);
        }
      } //unwrap presets into transformations


      var _loop = function _loop(_i2) {
        var a = presets[_i2];
        var b = a.name.split(breakpointsSeparator);
        var breakpoint = b[1] ? "".concat(breakpointsSeparator).concat(b[1]) : '';
        a.value.split(" ").forEach(function (p) {
          var bits = p.split("-");
          var fn = lax.presets[bits[0]];

          if (!fn) {
            console.log("lax error: preset ".concat(bits[0], " is not defined"));
          } else {
            var d = fn(bits[1]);

            for (var k in d) {
              el.setAttribute("".concat(k).concat(breakpoint), d[k]);
            }
          }
        });
        var currentAnchor = el.getAttribute("data-lax-anchor");
        if (!currentAnchor || currentAnchor === "") el.setAttribute("data-lax-anchor", "self");
        el.attributes.removeNamedItem(a.name);
      };

      for (var _i2 = 0; _i2 < presets.length; _i2++) {
        _loop(_i2);
      } // use gpu


      var useGpu = !(el.attributes["data-lax-use-gpu"] && el.attributes["data-lax-use-gpu"].value === 'false');

      if (useGpu) {
        el.style["backface-visibility"] = "hidden";
        el.style["-webkit-backface-visibility"] = "hidden";
      }

      if (el.attributes["data-lax-use-gpu"]) el.attributes.removeNamedItem("data-lax-use-gpu"); // optmise off screen

      o.optimise = false;

      if (el.attributes["data-lax-optimize"] && el.attributes["data-lax-optimize"].value === 'true') {
        o.optimise = true;
        var bounds = el.getBoundingClientRect();
        el.setAttribute("data-lax-opacity", "".concat(-bounds.height - 1, " 0, ").concat(-bounds.height, " 1, ").concat(window.innerHeight, " 1, ").concat(window.innerHeight + 1, " 0"));
        el.attributes.removeNamedItem("data-lax-optimize");
      } // build transform list


      for (var _i3 = 0; _i3 < el.attributes.length; _i3++) {
        var _a = el.attributes[_i3];
        if (_a.name.indexOf("data-lax") < 0) continue;

        var b = _a.name.split(breakpointsSeparator);

        var bits = b[0].split("-");
        var breakpoint = b[1] || "default";

        if (bits[1] === "lax") {
          if (_a.name === "data-lax-anchor") {
            o["data-lax-anchor"] = _a.value === "self" ? el : document.querySelector(_a.value);
            var rect = o["data-lax-anchor"].getBoundingClientRect();
            o.anchorTop = Math.floor(rect.top) + window.scrollY;
          } else {
            (function () {
              var tString = _a.value.replace(/vw/g, window.innerWidth).replace(/vh/g, window.innerHeight).replace(/elh/g, el.clientHeight).replace(/elw/g, el.clientWidth).replace(/\s+/g, " ");

              var _tString$split = tString.split("|"),
                  _tString$split2 = _slicedToArray(_tString$split, 2),
                  arrString = _tString$split2[0],
                  optionString = _tString$split2[1];

              var options = {};

              if (optionString) {
                optionString.split(" ").forEach(function (o) {
                  var _o$split = o.split("="),
                      _o$split2 = _slicedToArray(_o$split, 2),
                      key = _o$split2[0],
                      val = _o$split2[1];

                  options[key] = key && fnOrVal(val);
                });
              }

              var name = b[0];
              var valueMap = arrString.split(",").map(function (x) {
                return x.trim().split(" ").map(fnOrVal);
              }).sort(function (a, b) {
                return a[0] - b[0];
              });

              if (!o.transforms[name]) {
                o.transforms[name] = {};
              }

              o.transforms[name][breakpoint] = {
                valueMap: valueMap,
                options: options
              };
            })();
          }
        }
      } // sprite sheet animation


      var spriteData = el.attributes["data-lax-sprite-data"] && el.attributes["data-lax-sprite-data"].value;

      if (spriteData) {
        o.spriteData = spriteData.split(",").map(function (x) {
          return parseInt(x);
        });
        el.style.height = o.spriteData[1] + "px";
        el.style.width = o.spriteData[0] + "px";
        var spriteImage = el.attributes["data-lax-sprite-image"] && el.attributes["data-lax-sprite-image"].value;

        if (spriteImage) {
          el.style.backgroundImage = "url(".concat(spriteImage, ")");
        }
      }

      return o;
    };

    lax.addElement = function (el) {
      var o = lax.calcTransforms(lax.createLaxObject(el));
      lax.elements.push(o);
      lax.updateElement(o);
    };

    lax.populateElements = function () {
      lax.elements = [];
      var laxElements = [].slice.call(document.querySelectorAll(lax.selector));
      laxElements.forEach(lax.addElement);
      currentBreakpoint = lax.getCurrentBreakPoint();
    };

    lax.updateElements = function () {
      lax.elements.forEach(function (o) {
        lax.calcTransforms(o);
        lax.updateElement(o);
      });
      currentBreakpoint = lax.getCurrentBreakPoint();
    };

    lax.getCurrentBreakPoint = function () {
      var b = 'default';
      var w = window.innerWidth;

      for (var _i4 in lax.breakpoints) {
        var px = parseFloat(lax.breakpoints[_i4]);

        if (px <= w) {
          b = _i4;
        } else {
          break;
        }
      }

      return b;
    };

    lax.updateElement = function (o) {
      var originalStyle = o.originalStyle,
          anchorTop = o.anchorTop,
          transforms = o.transforms,
          spriteData = o.spriteData,
          el = o.el;
      var r = anchorTop ? anchorTop - lastY : lastY;
      var style = {
        transform: originalStyle.transform,
        filter: originalStyle.filter
      };

      for (var _i5 in transforms) {
        var transformData = transforms[_i5][currentBreakpoint] || transforms[_i5]["default"];

        if (!transformData) {
          // console.log(`lax error: there is no setting for key ${i} and screen size ${currentBreakpoint}. Try adding a default value!`)
          continue;
        }

        var _r = r;
        if (transformData.options.offset) _r = _r + transformData.options.offset;
        if (transformData.options.speed) _r = _r * transformData.options.speed;
        if (transformData.options.loop) _r = _r % transformData.options.loop;
        var t = transformFns[_i5];
        var v = intrp(transformData.valueMap, _r);

        if (!t) {
          // console.info(`lax: error ${i} is not supported`)
          continue;
        }

        t(style, v);
      }

      if (spriteData) {
        var _spriteData = _slicedToArray(spriteData, 5),
            frameW = _spriteData[0],
            frameH = _spriteData[1],
            numFrames = _spriteData[2],
            cols = _spriteData[3],
            scrollStep = _spriteData[4];

        var frameNo = Math.floor(lastY / scrollStep) % numFrames;
        var framePosX = frameNo % cols;
        var framePosY = Math.floor(frameNo / cols);
        style.backgroundPosition = "-".concat(framePosX * frameW, "px -").concat(framePosY * frameH, "px");
      }

      if (style.opacity === 0) {
        // if opacity 0 don't update
        el.style.opacity = 0;
      } else {
        for (var k in style) {
          el.style[k] = style[k];
        }
      }
    };

    lax.update = function (y) {
      if (lastY === y) return;
      lastY = y;
      lax.elements.forEach(lax.updateElement);
    };

    return lax;
  }();

  if ( true && typeof module.exports !== 'undefined') module.exports = lax;else window.lax = lax;
})();

/***/ })

/******/ });
//# sourceMappingURL=main.js.map