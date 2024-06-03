import Swiper from 'swiper';
import { Scrollbar, Navigation } from 'swiper/modules';
import 'swiper/css';
// import 'swiper/css/scrollbar';
// import 'swiper/css/navigation';

const swiperPrograms = document.querySelector('.programs__slider-wrapper');
// const swiperProgramsList = swiperPrograms.querySelector('.programs__slider-list');
const swiperProgramsSlides = swiperPrograms.querySelectorAll('.programs-slider__item');

const programsSlider = new Swiper (swiperPrograms, {
  modules: [Scrollbar, Navigation],
  scrollbar: {
    el: '.programs__pagination.swiper-scrollbar',
    draggable: true,
    dragClass: 'slider-pagination__active-bar swiper-scrollbar-drag',
  },
  navigation: {
    nextEl: '.nav-buttons__button.swiper-button-next',
    prevEl: '.nav-buttons__button.swiper-button-prev',
    disabledClass: 'nav-buttons__button--inactive',
  },
  autoplay: false,
  loop: false,
  watchSlidesProgress: true,
  spaceBetween: 20,
  slidesPerView: 'auto',
  autoHeight: true,
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

swiperProgramsSlides.forEach((slide) => {
  slide.style.display = 'flex';
});

const scrollbarButton = document.querySelector('.programs__pagination-wrapper .slider-pagination__active-bar');

scrollbarButton.setAttribute('tabindex', '-1');

// const addScrollbarDescription = () => {
//   const paginationScrollbar = document.querySelector('.swiper-scrollbar-drag');
//   const descriptionElement = document.createElement('span');
//   descriptionElement.classList.add('visually-hidden');
//   descriptionElement.textContent = 'Активный элемент скроллбара.';
//   paginationScrollbar.append(descriptionElement);
// };

// addScrollbarDescription();

export { programsSlider };
