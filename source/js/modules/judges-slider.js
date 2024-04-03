import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import { DEFAULT_SPEED, SliderWidthJudges, SliderPerViewJudges, InitialSlide } from './constants';

const swiperJudges = document.querySelector('.slider__inner');

const judgesSlider = new Swiper(swiperJudges, {
  speed: DEFAULT_SPEED,
  modules: [Navigation],
  navigation: {
    prevEl: '.slider__button.swiper-button-prev',
    nextEl: '.slider__button.swiper-button-next',
  },
  loop: true,
  resizeObserver: true,
  watchSlidesProgress: true,
  breakpoints: {
    320: {
      width: SliderWidthJudges.MOBILE,
      initialSlide: InitialSlide.MOBILE,
      slidesPerView: SliderPerViewJudges.MOBILE,
      spaceBetween: 20,
    },
    768: {
      width: SliderWidthJudges.TABLET,
      initialSlide: InitialSlide.DEFAULT,
      slidesPerView: SliderPerViewJudges.TABLET,
    },
    1366: {
      width: SliderWidthJudges.DESKTOP,
      initialSlide: InitialSlide.DEFAULT,
      slidesPerView: SliderPerViewJudges.DESKTOP,
    },
  },
});

export { judgesSlider };
