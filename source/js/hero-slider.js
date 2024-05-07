import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';
import { DEFAULT_SPEED } from './constants';
import 'swiper/css';
import 'swiper/css/pagination';

const swiperHero = document.querySelector('.hero-slider.swiper');
const heroSlides = swiperHero.querySelectorAll('.hero-slider__item.swiper-slide');
const desktopWidth = 1440;

const heroSlider = new Swiper (swiperHero, {
  speed: DEFAULT_SPEED,
  modules: [Pagination],
  pagination: {
    el: '.hero-slider__pagination-wrapper.swiper-pagination',
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

const setPaginationPosition = () => {
  if (document.body.clientWidth >= desktopWidth) {
    swiperPaginationList.style.top = 'auto';
    swiperPaginationList.style.left = 'auto';
    swiperPaginationList.style.bottom = '92px';
    swiperPaginationList.style.right = '120px';
  } else {
    swiperPaginationList.style.right = 0;
    swiperPaginationList.style.bottom = '40px';
  }
};

setPaginationPosition();

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

heroSlides.forEach((slide) => {
  slide.style.height = 'auto';
});

// Для улучшения доступности по Lighthouse

const sliderButtons = swiperHero.querySelectorAll('.slider-pagination__button');

const addButtonDescription = () => {
  const numbers = ['Первый', 'Второй', 'Третий', 'Четвертый', 'Пятый', 'Шестой', 'Седьмой'];
  for (let i = 0; i < sliderButtons.length; i++) {
    const descriptionElement = document.createElement('span');
    descriptionElement.classList.add('visually-hidden');
    descriptionElement.textContent = `${numbers[i]} слайд.`;
    sliderButtons[i].append(descriptionElement);
  }
};

addButtonDescription();

export { heroSlider };
