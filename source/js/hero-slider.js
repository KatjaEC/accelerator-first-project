import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';
import { DEFAULT_SPEED } from './constants';
import 'swiper/css';
import 'swiper/css/pagination';

const swiperHero = document.querySelector('.hero-slider.swiper');

const heroSlider = new Swiper (swiperHero, {
  speed: DEFAULT_SPEED,
  modules: [Pagination],
  pagination: {
    el: '.hero-slider__pagination.swiper-pagination',
    type: 'bullets',
    bulletClass: 'slider-pagination__button',
    bulletActiveClass: 'slider-pagination__button--active',
    bulletElement: 'button',
    clickable: true,
  },
  loop: true,
  watchSlidesProgress: true,
  spaceBetween: 0,
  slidesPerView: 1,
  breakpoints: {
    1440: {
      simulateTouch: false,
    }
  },
});

const swiperContainer = document.querySelector('.swiper-wrapper');
const swiperLinks = swiperContainer.querySelectorAll('a[href]');
const swiperPaginationList = swiperHero.querySelector('.slider-pagination');

swiperPaginationList.style.top = 0;
swiperPaginationList.style.bottom = 0;

const setTabIndex = () => heroSlider.slides[heroSlider.activeIndex].querySelector('a').setAttribute('tabindex', '0');

swiperLinks.forEach((link) => {
  link.setAttribute('tabindex', '-1');
  setTabIndex();
});

/* eslint-disable */
heroSlider.on('activeIndexChange', function() {
  swiperLinks.forEach((link) => {
    link.setAttribute('tabindex', '-1');
    setTabIndex();
  });
});
/* eslint-enable */

export { heroSlider };
