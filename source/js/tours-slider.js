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
  initialSlide: 0,
  breakpoints: {
    320: {
      spaceBetween: 20,
      slidesPerView: 1,
    },
    768: {
      spaceBetween: 18,
      slidesPerView: 2,
    },
    1440: {
      spaceBetween: 30,
      slidesPerView: 3,
      simulateTouch: false,
    }
  },
});

export { toursSlider };
