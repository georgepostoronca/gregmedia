// core version + navigation, pagination modules:
import Swiper, { Navigation } from "swiper";

// configure Swiper to use modules
Swiper.use([Navigation]);

// init Swiper:
let mySwiper = new Swiper('.swiper-container', {
  // Optional parameters
  slidesPerView: 6,
  spaceBetween: 30,
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
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