import smoothscroll from 'smoothscroll-polyfill';

// kick off the polyfill!
smoothscroll.polyfill();


import "./anim";
// import { debounce } from "lodash";
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


// let goToEl = ;
// goToEl.forEach(item => {
//   let to = item.dataset.to;
//   console.log(to)
//   item.addEventListener("click", () => {
//
//     goTo(to);
//   });
// });



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

let scrollTo = new ScrollTo();
scrollTo.init();