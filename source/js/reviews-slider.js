import Swiper from 'swiper';
import { Scrollbar, Navigation } from 'swiper/modules';
import 'swiper/css';
// import 'swiper/css/scrollbar';
// import 'swiper/css/navigation';

const swiperReviews = document.querySelector('.reviews__slider-wrapper.swiper');

const reviewsSlider = new Swiper (swiperReviews, {
  modules: [Scrollbar, Navigation],
  scrollbar: {
    el: '.reviews__pagination.swiper-scrollbar',
    draggable: true,
    dragClass: 'slider-pagination__active-bar swiper-scrollbar-drag',
    scrollbarDisabledClass: 'swiper-scrollbar-disabled',
    hide: false,
  },
  navigation: {
    nextEl: '.reviews__slider-nav .swiper-button-next',
    prevEl: '.reviews__slider-nav .swiper-button-prev',
    disabledClass: 'nav-buttons__button--inactive',
  },
  autoplay: false,
  loop: false,
  watchSlidesProgress: true,
  spaceBetween: 20,
  slidesPerView: 'auto',
  breakpoints: {
    320: {
      width: 290,
      slidesPerView: 1,
    },
    768: {
      width: 560,
      slidesPerView: 1,
      spaceBetween: 30,
      scrollbar: {
        dragSize: '326px',
      }
    },
    1440: {
      width: 1240,
      slidesPerView: 2,
      spaceBetween: 32,
      simulateTouch: false,
      scrollbar: {
        dragSize: '394px',
      }
    }
  },
});

const swiperReviewsSlides = swiperReviews.querySelectorAll('.reviews-slider__item');

swiperReviewsSlides.forEach((slide) => {
  slide.style.display = 'flex';
  slide.style.height = 'auto';
});

const scrollbarButton = document.querySelector('.reviews__pagination-wrapper .slider-pagination__active-bar');

scrollbarButton.setAttribute('tabindex', '-1');

export { reviewsSlider };
