import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import { DEFAULT_SPEED } from './constants';
import 'swiper/css';
import 'swiper/css/navigation';

const swiperReviews = document.querySelector('.reviews__list-wrapper.swiper');
const sliderCards = swiperReviews.querySelectorAll('.reviews-list__item');
const desktopWidth = 768;

const reviewsSlider = new Swiper (swiperReviews, {
  speed: DEFAULT_SPEED,
  modules: [Navigation],
  navigation: {
    nextEl: '.reviews__slider-nav .swiper-button-next',
    prevEl: '.reviews__slider-nav .swiper-button-prev',
  },
  watchSlidesProgress: true,
  spaceBetween: 20,
  initialSlide: 0,
  slidesPerView: 1,
  breakpoints: {
    320: {
      width: 290,
      spaceBetween: 30,
    },
    768: {
      width: 565,
      spaceBetween: 30,
    },
    1440: {
      width: 700,
      spaceBetween: 120,
      simulateTouch: false,
    }
  },
});

sliderCards.forEach((card) => {
  if (document.body.clientWidth >= desktopWidth) {
    card.style.display = 'flex';
  }
  card.style.height = 'auto';
});

export { reviewsSlider };
