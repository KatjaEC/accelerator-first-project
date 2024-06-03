import Swiper from 'swiper';
import { Pagination, Navigation, Grid } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/grid';
// import 'swiper/css/navigation';

const swiperNews = document.querySelector('.news__slider-wrapper.swiper');
// const swiperProgramsList = swiperPrograms.querySelector('.programs__slider-list');
const swiperNewsSlides = swiperNews.querySelectorAll('.news-slider__item');

const newsSlider = new Swiper (swiperNews, {
  modules: [Pagination, Navigation, Grid],
  pagination: {
    el: 'nav-buttons__wrapper .swiper-pagination',
    type: 'bullets',
    bulletClass: 'nav-list__button',
    bulletActiveClass: 'nav-list__button--active',
    bulletElement: 'button',
    clickable: true,
    dynamicBullets: true,
    dynamicMainBullets: 4,
    renderBullet: function (index, className) {
      return `<button class="${className}">${index + 1}</button>`;
    },
  },
  navigation: {
    nextEl: '.nav-buttons__button.swiper-button-next',
    prevEl: '.nav-buttons__button.swiper-button-prev',
    disabledClass: 'nav-buttons__button--inactive',
  },
  slideActiveClass: 'news-slider__item--active',
  autoplay: false,
  autoHeight: true,
  loop: false,
  watchSlidesProgress: true,
  slidesPerView: 'auto',
  breakpoints: {
    320: {
      width: 290,
      slidesPerView: 1,
      spaceBetween: 20,
      autoHeight: false,
      observer: true,
      observeParents: true,
      grid: {
        rows: 2,
        fill: 'column',
      },
    },
    768: {
      width: 678,
      slidesPerView: 2,
      spaceBetween: 0,
      grid: {
        rows: 2,
        fill: 'row',
      },
    },
    1440: {
      width: 1240,
      slidesPerView: 3,
      spaceBetween: 32,
      simulateTouch: false,
      grid: {
        rows: 1,
      }
    }
  },
});

swiperNewsSlides.forEach((slide) => {
  slide.style.display = 'flex';
  slide.style.height = 'auto';
});

// swiperProgramsSlides.forEach((slide) => {
//   slide.style.display = 'flex';
// });

// const addScrollbarDescription = () => {
//   const paginationScrollbar = document.querySelector('.swiper-scrollbar-drag');
//   const descriptionElement = document.createElement('span');
//   descriptionElement.classList.add('visually-hidden');
//   descriptionElement.textContent = 'Активный элемент скроллбара.';
//   paginationScrollbar.append(descriptionElement);
// };

// addScrollbarDescription();

export { newsSlider };
