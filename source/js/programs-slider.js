import Swiper from 'swiper';
import { Scrollbar, Navigation } from 'swiper/modules';
import 'swiper/css';

const swiperPrograms = document.querySelector('.programs__slider-wrapper');

const addClonedSlides = () => {
  const slidesList = swiperPrograms.querySelector('.programs__slider-list');
  const slideCopy1 = swiperPrograms.querySelector('.programs-slider__item--volunteering').cloneNode(true);
  const slideCopy2 = swiperPrograms.querySelector('.programs-slider__item--education').cloneNode(true);
  slidesList.append(slideCopy1);
  slidesList.append(slideCopy2);
};

addClonedSlides();

const programsSlider = new Swiper (swiperPrograms, {
  modules: [Scrollbar, Navigation],
  scrollbar: {
    el: '.programs__pagination.swiper-scrollbar',
    draggable: true,
    dragClass: 'slider-pagination__active-bar swiper-scrollbar-drag',
  },
  navigation: {
    nextEl: '.programs__slider-nav .swiper-button-next',
    prevEl: '.programs__slider-nav .swiper-button-prev',
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
      width: 678,
      slidesPerView: 2,
      spaceBetween: 30,
      scrollbar: {
        dragSize: '326px',
      }
    },
    1440: {
      width: 1240,
      slidesPerView: 3,
      spaceBetween: 32,
      simulateTouch: false,
      scrollbar: {
        dragSize: '394px',
      }
    }
  },
});

const swiperProgramsSlides = swiperPrograms.querySelectorAll('.programs-slider__item');

swiperProgramsSlides.forEach((slide) => {
  slide.style.display = 'flex';
  slide.style.height = 'auto';
});

const setTabIndex = (item, value) => {
  item.setAttribute('tabindex', value);
};

const setLinksFocus = () => {
  swiperProgramsSlides.forEach((slide) => {
    const button = slide.querySelector('.programs-slider__button');
    if (slide.classList.contains('swiper-slide-fully-visible')) {
      setTabIndex(button, '0');
    } else {
      setTabIndex(button, '-1');
    }
  });
};

setLinksFocus();

const scrollbarButton = document.querySelector('.programs__pagination-wrapper .slider-pagination__active-bar');

scrollbarButton.setAttribute('tabindex', '-1');

export { programsSlider };
