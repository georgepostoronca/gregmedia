import mask from "./jquery.maskedinput";
import Bouncer from "formbouncerjs";
import smoothscroll from 'smoothscroll-polyfill';

$(".js-phone-mask").mask("+9 (999) 999 99 99", {
  autoclear: true
});

// kick off the polyfill!
smoothscroll.polyfill();

import "./jquery.malihu.PageScroll2id.min";

// core version + navigation, pagination modules:
import Swiper, { Navigation } from "swiper";

// configure Swiper to use modules
Swiper.use([Navigation]);

// init Swiper:
let mySwiper = new Swiper(".swiper-container", {
  // Optional parameters
  slidesPerView: 6,
  spaceBetween: 30,
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
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
      spaceBetween: 30,
    }
  }
});

// Scroll In To View
class ScrollTo {
  constructor() {
    this.btns = [].slice.call(document.querySelectorAll(".js-go-to"));
  }

  init() {
    $(".viewbtn a,a[rel='m_PageScroll2id']").mPageScroll2id({
      highlightSelector: ".viewbtn a"
    });


    this.btns.forEach(item => {
      let to = item.dataset.to;
      item.addEventListener("click", () => {
        $.mPageScroll2id("scrollTo",to);
      });
    });
  }
}

function goTo(to) {
  $.mPageScroll2id("scrollTo",to);
}
window.goToLink = goTo;

let scrollTo = new ScrollTo();
scrollTo.init();


// Bouncer

let bouncer = new Bouncer('.js-form-validator', {
  disableSubmit: true,
  fieldClass: 'error', // Applied to fields with errors
  errorClass: 'error-message', // Applied to the error message for invalid fields
  fieldPrefix: 'bouncer-field_', // If a field doesn't have a name or ID, one is generated with this prefix
  errorPrefix: 'bouncer-error_', // Prefix used for error message IDs
  patterns: {
    email: /^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*(\.\w{2,})+$/,
    tel: /^(\+7|7|8)?[\s\-]?\(?[0-9]{3}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/,
    phone: /^(\+7|7|8)?[\s\-]?\(?[0-9]{3}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/
  },
  customValidations: {
    valueMismatch: function (field) {
      // Look for a selector for a field to compare
      // If there isn't one, return false (no error)
      var selector = field.getAttribute('data-bouncer-match');
      if (!selector) return false;

      // Get the field to compare
      var otherField = field.form.querySelector(selector);
      if (!otherField) return false;

      // Compare the two field values
      // We use a negative comparison here because if they do match, the field validates
      // We want to return true for failures, which can be confusing
      return otherField.value !== field.value;

    }
  },
});

// document.addEventListener('bouncerFormInvalid', function (event) {
//   // console.log(event.detail.errors);
//   window.scrollTo(0, event.target.offsetTop);
// }, false);

document.addEventListener('bouncerFormValid', function (el) {
  try {
    var fn = el.target.dataset.submit;
    window[fn](el);
  } catch(e) {
    console.log("Form Submit Error!")
  }
}, false);

document.addEventListener("DOMContentLoaded", function() {
  document.body.classList.add("loaded");
});

// Opne Menu
document.querySelector(".js-open-menu").addEventListener("click", function () {
  document.querySelector(".header").classList.toggle("active")
  document.body.classList.toggle("block-scroll")
})
