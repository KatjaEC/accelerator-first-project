import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import { DEFAULT_SPEED } from './constants';
import 'swiper/css';
import 'swiper/css/navigation';

const swiperTours = document.querySelector('.tours__list-wrapper.swiper');

const toursSlider = new Swiper (swiperTours, {
  speed: DEFAULT_SPEED,
  modules: [Navigation],
  navigation: {
    nextEl: '.tours__slider-nav .swiper-button-next',
    prevEl: '.tours__slider-nav .swiper-button-prev',
  },
  watchSlidesProgress: true,
  slidesPerView: 1,
  breakpoints: {
    320: {
      spaceBetween: 20,
    },
    768: {
      spaceBetween: 18,
    },
    1440: {
      spaceBetween: 30,
      simulateTouch: false,
    }
  },
});

export { toursSlider };
