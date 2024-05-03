import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import { DEFAULT_SPEED } from './constants';
import 'swiper/css';
import 'swiper/css/navigation';

const swiperInstructors = document.querySelector('.training__slider-wrapper.swiper');
const sliderCards = swiperInstructors.querySelectorAll('.instructors-slider__item');

const instructorsSlider = new Swiper (swiperInstructors, {
  speed: DEFAULT_SPEED,
  modules: [Navigation],
  navigation: {
    nextEl: '.training__slider-nav .swiper-button-next',
    prevEl: '.training__slider-nav .swiper-button-prev',
  },
  watchSlidesProgress: true,
  spaceBetween: 20,
  initialSlide: 0,
  breakpoints: {
    320: {
      slidesPerView: 1,
      initialSlide: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1440: {
      slidesPerView: 4,
      simulateTouch: false,
    }
  },
});

sliderCards.forEach((card) => {
  card.style.height = 'auto';
});

export { instructorsSlider };
