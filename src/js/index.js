import debounce from "lodash.debounce";

// svg4everybody
import svg4everybody from "svg4everybody";

svg4everybody();

// Валидатор формы
import Bouncer from "formbouncerjs";

// Слайдер
import Swiper, {Pagination} from "swiper";

Swiper.use([Pagination]);

// Плагин для анимаций
import lax from "./lax";
// инициялизация lax.js
document.addEventListener("DOMContentLoaded", function() {
  lax.setup({
    breakpoints: {w0: 0, w768: 768, w992: 992, w1100: 1100, w1300: 1300}
  });


  const updateLax = () => {
    lax.update(window.scrollY);
    window.requestAnimationFrame(updateLax);
  };

  window.requestAnimationFrame(updateLax);
});

// Modal
import remodal from "remodal";

// Position Sticky Polifill
import Stickyfill from "stickyfilljs";

var elements = document.querySelectorAll(".sticky");
Stickyfill.add(elements);

// Scroll To Link
import "./jsscrollto";

$("#top-nav").activescroll({
  scroll: "scroll",
  active: "active",
  offset: 100,
  animate: 1000,
  callback: function () {
    document.querySelector(".header").classList.remove("active");
    document.querySelector(".btn-burger").classList.remove("active");
  }
});

Number.isNaN = Number.isNaN || function (value) {
  return typeof value === "number" && isNaN(value);
};

//ES6 version (полифил для object-fit в IE)
if ("objectFit" in document.documentElement.style === false) {
  document.addEventListener("DOMContentLoaded", () => {
    Array.prototype.forEach.call(document.querySelectorAll("img[data-object-fit]"), image => {
      (image.runtimeStyle || image.style).background = `url("${image.src}") no-repeat 50%/${image.currentStyle ? image.currentStyle["object-fit"] : image.getAttribute("data-object-fit")}`;
      image.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='${image.width}' height='${image.height}'%3E%3C/svg%3E`;
    });
  });
}

// Уменьшение меню при скроле
document.addEventListener("scroll", debounce(function () {
  // if(window.matchMedia("(max-width: 768px)").matches) return false;
  let top = window.scrollY || window.pageYOffset;
  let header = document.querySelector(".header");

  if (top > 50.21321321) {
    header.classList.add("fixed");
  } else {
    header.classList.remove("fixed");
  }
}, 10));

// Открыть/Закрыть Меню
// Блок Header
let menuWrap = document.querySelector(".js-menu");
// Кнопка закрыть/октрыть меню в блоке Header
let menuOpenBtn = document.querySelector(".js-open-menu");
if (menuWrap && menuOpenBtn) {
  menuOpenBtn.addEventListener("click", function () {
    this.classList.toggle("active");
    menuWrap.classList.toggle("active");
  });
}

// Textarea авто высота
autosize();

function autosize() {
  let text = [].slice.call(document.querySelectorAll(".autosize"));
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
}


// Открыть/Закрыть cmodal
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
  let activeModal = undefined;
  // все блоки из списка
  let btns = [].slice.call(document.querySelectorAll("[data-cmodal-btn]"));

  // блоки попапов с контентом
  let contents = [].slice.call(document.querySelectorAll("[data-cmodal-content]"));

  // если ничего не нашли в DOM то возвращаем false;
  if (!btns.length || !contents.length) return false;

  btns.forEach(function (item) {
    item.addEventListener("click", function () {
      if (!window.matchMedia("(min-width: 769px)").matches) return false;
      // определяем index элемента в масиве
      let index = btns.indexOf(this);

      // передаем функций элемент из масива с индексом [index]
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
    let close = item.querySelector("[data-cmodal-close]");

    close.addEventListener("click", function () {
      activeModal = undefined;
      closeCmodal(item);
    });
  });
})();


// cmodalslider slider(mobile)
(function () {

  // breakpoint where swiper will be destroyed
  // and switches to a dual-column layout
  const breakpoint = window.matchMedia("(min-width:769px)");

  // keep track of swiper instances to destroy later
  let mySwiper;

  //////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////

  const breakpointChecker = function () {
    // if larger viewport and multi-row layout needed
    if (breakpoint.matches === true) {

      // clean up old instances and inline styles when available
      if (mySwiper !== undefined) mySwiper.destroy(true, true);
      // or/and do nothing
      return;

      // else if a small viewport and single column layout needed
    } else if (breakpoint.matches === false) {
      // fire small viewport version of swiper
      return enableSwiper();

    }

  };

  //////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////
  const enableSwiper = function () {
    mySwiper = new Swiper(".js-cmodalslider", {
      slidesPerView: 3,
      spaceBetween: 10,
      autoHeight: true,
      pagination: {
        el: ".js-cmodalslider-pagination",
        clickable: true,
      },
      on: {
        init: function () {
          let el = document.querySelector(".js-cmodalslider .swiper-wrapper");
          el.style.height = "auto";
        },
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 10,
          autoHeight: true,
        },
        370: {
          slidesPerView: 1,
          spaceBetween: 30,
        },
        450: {
          slidesPerView: 1,
          spaceBetween: 10
        },
        650: {
          slidesPerView: 2,
          spaceBetween: 10,
          // autoHeight: false,
        },
      }
    });

    setTimeout(function () {
      mySwiper.slideTo(0);
    }, 500);
  };

  //////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////

  // keep an eye on viewport size changes
  breakpoint.addListener(breakpointChecker);

  // kickstart
  breakpointChecker();
})();


// Header Slider
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
  var bouncer = new Bouncer(".js-form-validator", {
    disableSubmit: true,
    fieldClass: "error", // Applied to fields with errors
    errorClass: "error-message", // Applied to the error message for invalid fields
    fieldPrefix: "bouncer-field_", // If a field doesn't have a name or ID, one is generated with this prefix
    errorPrefix: "bouncer-error_", // Prefix used for error message IDs
    patterns: {
      email: /^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*(\.\w{2,})+$/,
      // password: /(?=.*\d)(?=.*[a-zа-яё|A-ZА-ЯЁ]).{8,}/,
      password: /[\d\w\W\D\d].{7,}/,
      tel: /^(\+7|7|8)?[\s\-]?\(?[0-9]{3}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/,
      phone: /^(\+7|7|8)?[\s\-]?\(?[0-9]{3}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/
    },
  });

  // document.addEventListener('bouncerFormInvalid', function (event) {
  // }, false);

  document.addEventListener("bouncerFormValid", function (el) {
    try {
      var fn = el.target.dataset.submit;
      window[fn](el);
    } catch (e) {
      console.log("Form Submit Error!");
    }
  }, false);
}


// Test Open Second Modal
// когда будет понятно как работает формы этот код надо удалить и сделать нормально!
let modalBtnElement = [].slice.call(document.querySelectorAll(".js-open-second-modal"));
let firstModal = document.querySelector(".js-first-modal");
let secondModal = document.querySelector(".js-second-modal");
let bmodalNumber = document.querySelector(".bmodal__head");
let modalSubmit = document.querySelector(".js-modal-submit");

modalSubmit.addEventListener("click", function () {
  let modal = $("[data-remodal-id='modal']").remodal();
  modal.close();
});

modalBtnElement.forEach(function (item) {
  item.addEventListener("change", function () {
    firstModal.classList.remove("active");
    secondModal.classList.add("active");

    let child = [].slice.call(bmodalNumber.children);

    child.forEach(function (item) {
      item.classList.remove("active");
    });
    child[2].classList.add("active");
  });
});


// ============================================
// Swipe
// ============================================
var swipeDetector = function (swipeCallback, element) {
  if (!swipeCallback)
    throw "Swipe-listening makes no sense without a callback function!";

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
    if (!that.isStarted() || !event)
      return;

    if (!highSpeed) {
      var elapsedTime = getElapsedTime();
      if (elapsedTime > 0) {
        if (getSpeed(elapsedTime, startX, moveX) >= minimumSpeed ||
          getSpeed(elapsedTime, startY, moveY) >= minimumSpeed)
          highSpeed = true;
      }
    }

    if (highSpeed)
      event.preventDefault();
  };

  that.detectSwipe = function (endMoveX, endMoveY) {
    if (!that.isStarted())
      return;

    var elapsedTime = getElapsedTime();
    if (elapsedTime > 0) {
      if (getDistance(startX, endMoveX) >= getMinimumPixelDistanceX() ||
        getDistance(startY, endMoveY) >= getMinimumPixelDistanceY()) {
        var speedX = (getSpeed(elapsedTime, startX, endMoveX) >= minimumSpeed);
        var speedY = (getSpeed(elapsedTime, startY, endMoveY) >= minimumSpeed);

        if (!(speedX && speedY)) // movement was not horizontal AND vertical
          if (speedX)
            swipeCallback(endMoveX < startX ? "left" : "right");
          else if (speedY)
            swipeCallback(endMoveY < startY ? "up" : "down");
      }
    }

    startTime = undefined;
    highSpeed = false;
  };

  that.isStarted = function () {
    return startTime !== undefined;
  };


  var getElapsedTime = function () {
    return new Date().getTime() - startTime;
  };

  var getSpeed = function (elapsedTime, start, move) {
    return 100 * getDistance(start, move) / elapsedTime;
  };

  var getDistance = function (start, move) {
    return Math.abs(move - start);
  };

  var getMinimumPixelDistanceX = function () {
    return Math.min(minimumPixelDistance, that.getSensor().offsetWidth - 20);
  };

  var getMinimumPixelDistanceY = function () {
    return Math.min(minimumPixelDistance, that.getSensor().offsetHeight - 20);
  };


  return that;
};

var swipeMouse = function (swipeCallback, element) {
  var detector = swipeDetector(swipeCallback, element);
  element = detector.getSensor();

  element.addEventListener("mousedown", function (event) {
    detector.setStartState(event.pageX, event.pageY);
  });

  element.addEventListener("mousemove", function (event) {
    if (detector.isStarted())
      detector.setMoveState(event.pageX, event.pageY, event);
  });

  element.addEventListener("mouseup", function (event) {
    detector.detectSwipe(event.pageX, event.pageY);
  });
  element.addEventListener("mouseout", function (event) {
    detector.detectSwipe(event.pageX, event.pageY);
  });
};

var swipeTouch = function (swipeCallback, element) {
  var detector = swipeDetector(swipeCallback, element);
  element = detector.getSensor();

  var touchCallback = function (event, isStart, isEnd) {
    if (event.changedTouches.length === 1) {
      var touch = event.changedTouches[0];
      if (isStart)
        detector.setStartState(touch.pageX, touch.pageY);
      else if (isEnd)
        detector.detectSwipe(touch.pageX, touch.pageY);
      else
        detector.setMoveState(touch.pageX, touch.pageY, event);
    }
  };

  element.addEventListener("touchstart", function (event) {
    touchCallback(event, true, false);
  });

  element.addEventListener("touchmove", function (event) {
    touchCallback(event, false, false);
  });

  var touchEndCallback = function (event) {
    touchCallback(event, false, true);
  };
  element.addEventListener("touchend", touchEndCallback);
  element.addEventListener("touchcancel", touchEndCallback);

  return detector;
};

(function () {
  const classes = {
    anim: ".bsldier__anim",
    img: ".bsldier__img",
    info: ".bsldier__info",
    wrap: ".js-bsldier-swipe",
    pagination: ".js-bsldier-pagination"
  };

  let bslider = document.querySelector(".js-bsldier");
  if (!bslider) return 0;

  let currentIndex = 0;
  let transitionsEnd = true;
  let loopInterval;
  let timeInterval = 3000;

  let items = [].slice.call(document.querySelectorAll(".js-bsldier-item"));
  let wrap = bslider.querySelector(classes.wrap);
  let img = bslider.querySelector(classes.img);
  let anim = bslider.querySelector(classes.anim);
  let info = bslider.querySelector(classes.info);
  let pagination = bslider.querySelector(classes.pagination);

  items.forEach(function (item, index) {
    let pagitem = document.createElement("button");
    let span = document.createElement("span");
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
      let self = this;
      let childs = [].slice.call(this.parentElement.children);
      let siblings = childs.filter(function (item) {
        if (item == self) return false;
        return item;
      });

      siblings.forEach(function (item) {
        item.classList.remove("active");
      });

      goTo(index);
    });
    pagination.appendChild(pagitem);
  });

  // function loop(type) {
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
    let el = [].slice.call(pagination.querySelectorAll("button"));

    let childs = [].slice.call(el[currentIndex].parentElement.children);

    el[currentIndex].classList.add("active");
    let siblings = childs.filter(function (val) {
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
    let img = items[index].querySelector(classes.img);
    let anim = items[index].querySelector(classes.anim);
    let info = items[index].querySelector(classes.info);

    return {
      anim: anim,
      img: img,
      info: info,
      item: items[index]
    };
  }

  // Prev
  function prev() {
    if (!transitionsEnd) return false;
    loop("stop");
    if (currentIndex >= 1) {
      transitionsEnd = false;
      disbaleSwipe("disable");
      let data = returnNode(currentIndex);
      let img = data.img;
      let anim = data.anim;
      let info = data.info;
      let item = data.item;

      img.classList.add("first");
      anim.classList.add("first");
      info.classList.add("first");

      animatePrev(img, anim, info);

      currentIndex--;

      let nextAnim = function () {
        item.classList.remove("active");
        let data2 = returnNode(currentIndex);
        let img2 = data2.img;
        let anim2 = data2.anim;
        let info2 = data2.info;
        let item2 = data2.item;

        img2.classList.remove("first");
        anim2.classList.remove("first");
        info2.classList.remove("first");

        item2.classList.add("active");
        setTimeout(function () {
          animateNext(img2, anim2, info2);
        }, 100);

        let endAnim = function () {
          setTimeout(function () {
            transitionsEnd = true;
            activateCurentPagination();
          }, 200);
          setTimeout(function () {
            disbaleSwipe();
          }, 500);
          anim.removeEventListener("animationend", nextAnim);
          anim2.removeEventListener("animationend", endAnim);
        };
        anim2.addEventListener("animationend", endAnim);
      };

      anim.addEventListener("animationend", nextAnim);
    }
  }

  // Next
  function next() {
    if (!transitionsEnd) return false;
    loop("stop");
    if (currentIndex <= items.length - 2) {
      transitionsEnd = false;
      disbaleSwipe("disable");
      let data = returnNode(currentIndex);

      let img = data.img;
      let anim = data.anim;
      let info = data.info;
      let item = data.item;

      animatePrev(img, anim, info);
      img.classList.add("first");
      anim.classList.add("first");
      info.classList.add("first");

      currentIndex++;

      let nextAnim = function () {
        item.classList.remove("active");
        let data2 = returnNode(currentIndex);
        let img2 = data2.img;
        let anim2 = data2.anim;
        let info2 = data2.info;
        let item2 = data2.item;

        item2.classList.add("active");
        setTimeout(function () {
          animateNext(img2, anim2, info2);
        }, 100);

        img2.classList.remove("first");
        anim2.classList.remove("first");
        info2.classList.remove("first");

        let endAnim = function () {
          setTimeout(function () {
            transitionsEnd = true;
            activateCurentPagination();
          }, 200);
          setTimeout(function () {
            disbaleSwipe();
            loop();
          }, 500);


          anim.removeEventListener("animationend", nextAnim);
          anim2.removeEventListener("animationend", endAnim);
        };
        anim2.addEventListener("animationend", endAnim);
      };

      anim.addEventListener("animationend", nextAnim);
    }
  }

  function goTo(index) {
    if (!transitionsEnd) return false;
    loop("stop");
    if (currentIndex <= items.length - 1) {
      transitionsEnd = false;
      disbaleSwipe("disable");
      let data = returnNode(currentIndex);

      let img = data.img;
      let anim = data.anim;
      let info = data.info;
      let item = data.item;

      animatePrev(img, anim, info);
      img.classList.add("first");
      anim.classList.add("first");
      info.classList.add("first");

      currentIndex = index;

      let nextAnim = function () {
        item.classList.remove("active");
        let data2 = returnNode(currentIndex);
        let img2 = data2.img;
        let anim2 = data2.anim;
        let info2 = data2.info;
        let item2 = data2.item;

        item2.classList.add("active");
        setTimeout(function () {
          animateNext(img2, anim2, info2);
        }, 100);

        img2.classList.remove("first");
        anim2.classList.remove("first");
        info2.classList.remove("first");

        let endAnim = function () {
          setTimeout(function () {
            transitionsEnd = true;
          }, 200);

          setTimeout(function () {
            disbaleSwipe();
            loop();
          }, 500);

          anim.removeEventListener("animationend", nextAnim);
          anim2.removeEventListener("animationend", endAnim);
        };
        anim2.addEventListener("animationend", endAnim);
      };

      anim.addEventListener("animationend", nextAnim);
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
  }

  // Init
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
})();
// ============================================
// ============================================

