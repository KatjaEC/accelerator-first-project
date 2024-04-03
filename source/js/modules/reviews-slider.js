import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import { DEFAULT_SPEED, SliderWidthReviews, InitialSlide } from './constants';

const swiperReviews = document.querySelector('.reviews__inner.swiper');
const reviewLiItems = [...document.querySelectorAll('.reviews-list__item')];

const reviewsSlider = new Swiper(swiperReviews, {
  speed: DEFAULT_SPEED,
  modules: [Navigation],
  navigation: {
    prevEl: '.reviews__button.swiper-button-prev',
    nextEl: '.reviews__button.swiper-button-next',
  },
  loop: false,
  spaceBetween: 0,
  initialSlide: InitialSlide.DEFAULT,
  watchSlidesProgress: true,
  breakpoints: {
    320: {
      width: SliderWidthReviews.MOBILE,
    },
    768: {
      width: SliderWidthReviews.TABLET,
    },
    1366: {
      width: SliderWidthReviews.DESKTOP,
    },
  },
});

// To make review cards the same height

reviewLiItems.forEach((item) => {
  item.style.height = 'auto';
});

export { reviewsSlider };
