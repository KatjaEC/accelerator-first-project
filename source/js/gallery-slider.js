import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import { DEFAULT_SPEED } from './constants';
import 'swiper/css';
import 'swiper/css/navigation';

const swiperGalleryWrapper = document.querySelector('.gallery__slider-wrapper');
const swiperGalleryList = swiperGalleryWrapper.querySelector('.gallery__slider');
const swiperGallerySlides = swiperGalleryWrapper.querySelectorAll('.gallery__item');
const desktopWidth = 1440;

const initGallerySlider = () => {
  new Swiper ('.gallery__slider-wrapper', {
    speed: DEFAULT_SPEED,
    modules: [Navigation],
    navigation: {
      nextEl: '.gallery__slider-nav .swiper-button-next',
      prevEl: '.gallery__slider-nav .swiper-button-prev',
    },
    watchSlidesProgress: true,
    spaceBetween: 5,
    initialSlide: 0,
    slidesPerView: 1,
    loop: true,
    loopAddBlankSlides: false,
    loopAdditionalSlides: 0,
    breakpoints: {
      320: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      1440: {
        slidesPerView: 5,
        loop: false,
        simulateTouch: false,
      }
    },
  });
};

const updateSwiper = () => {
  if (document.body.clientWidth >= desktopWidth) {
    swiperGalleryWrapper.classList.remove('swiper');
    swiperGalleryList.classList.remove('swiper-wrapper');
    swiperGallerySlides.forEach((slide) => {
      slide.classList.remove('swiper-slide');
    });
  } else {
    initGallerySlider();
    swiperGallerySlides.forEach((slide) => {
      slide.style.display = 'flex';
      slide.style.height = 'auto';
    });
  }
};

updateSwiper();
