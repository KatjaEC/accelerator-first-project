import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const swiperHero = document.querySelector('.hero-slider__list-wrapper.swiper');
const swiperSlides = swiperHero.querySelectorAll('.hero-slider__item');
const swiperLinks = swiperHero.querySelectorAll('.hero-slider__button');
const desktopWidth = 1440;

const heroSlider = new Swiper (swiperHero, {
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
  updateOnWindowResize: true,
  breakpoints: {
    1440: {
      simulateTouch: false,
      allowTouchMove: false,
    }
  },
});

const setTabIndex = () => {
  swiperLinks.forEach((link) => {
    link.setAttribute('tabindex', '-1');
  });
  heroSlider.slides[heroSlider.activeIndex].querySelector('a').setAttribute('tabindex', '0');
};

setTabIndex();

const addButtonDescription = () => {
  const numbers = ['Первый', 'Второй', 'Третий', 'Четвертый', 'Пятый', 'Шестой', 'Седьмой', 'Восьмой'];
  const paginationButtons = swiperHero.querySelectorAll('.hero-slider__pagination .slider-pagination__button');
  for (let i = 0; i < paginationButtons.length; i++) {
    const descriptionElement = document.createElement('span');
    descriptionElement.classList.add('visually-hidden');
    descriptionElement.textContent = `${numbers[i]} экран промо-блока.`;
    paginationButtons[i].append(descriptionElement);
  }
};

addButtonDescription();

const paginationWrapper = swiperHero.querySelector('.hero-slider__pagination-wrapper');
const sliderPagination = paginationWrapper.querySelector('.slider-pagination');

sliderPagination.style.top = 'auto';
sliderPagination.style.bottom = 'auto';
sliderPagination.style.width = 'auto';

swiperSlides.forEach((slide) => {
  const slideTextWrapper = slide.querySelector('.hero-slider__content-wrapper');
  const paginationCopy = paginationWrapper.cloneNode(true);
  slideTextWrapper.append(paginationCopy);
  paginationCopy.style.zIndex = '5';
  const buttons = paginationCopy.querySelectorAll('.slider-pagination__button');
  const buttonDescriptions = paginationCopy.querySelectorAll('.slider-pagination__button > span');
  buttons.forEach((button) => button.setAttribute('tabindex', '-1'));
  buttons.forEach((button) => button.setAttribute('aria-hidden', 'true'));
  buttonDescriptions.forEach((description) => description.setAttribute('aria-hidden', 'true'));
  slide.style.display = 'flex';
  slide.style.height = 'auto';
});

/* eslint-disable */

heroSlider.on('slideChange', function () {
  let activeIndex = heroSlider.realIndex;
  let activeSlide = heroSlider.slides[activeIndex];
  const slider = swiperHero.querySelector('.hero-slider__list');
  const paginations = slider.querySelectorAll('.hero-slider__pagination-wrapper');

  paginations.forEach((list) => {
    list.querySelector('.slider-pagination__button--active').classList.remove('slider-pagination__button--active');
    list.querySelectorAll('.slider-pagination__button')[activeIndex].classList.add('slider-pagination__button--active');
  });
  activeSlide.prepend(paginationWrapper);
});

heroSlider.on('slideChangeTransitionEnd', function() {
  const activePaginationButton = sliderPagination.querySelector('.slider-pagination__button--active');
  setTabIndex();
  if (document.body.clientWidth >= desktopWidth) {
    activePaginationButton.focus();
  }
});

/* eslint-enable */
