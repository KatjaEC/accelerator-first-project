import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import { DEFAULT_SPEED } from './constants';
import 'swiper/css';
import 'swiper/css/navigation';

const swiperAdvantagesWrapper = document.querySelector('.advantages__list-wrapper');
const swiperAdvantagesList = swiperAdvantagesWrapper.querySelector('.advantages-list');
const swiperAdvantagesSlides = swiperAdvantagesList.querySelectorAll('.advantages-list__item');
const desktopWidth = 1440;

const initAdvantagesSlider = () => {
  new Swiper ('.advantages__list-wrapper', {
    speed: DEFAULT_SPEED,
    modules: [Navigation],
    navigation: {
      nextEl: '.advantages__slider-nav .swiper-button-next',
      prevEl: '.advantages__slider-nav .swiper-button-prev',
    },
    watchSlidesProgress: true,
    spaceBetween: 30,
    initialSlide: 2,
    centeredSlides: true,
    slidesPerView: 'auto',
    slidesPerGroup: 2,
    simulateTouch: false,
    loop: true,
    loopAddBlankSlides: false,
    loopAdditionalSlides: 0,
  });
};

const addSwiperClass = () => {
  swiperAdvantagesWrapper.classList.add('swiper');
  swiperAdvantagesList.classList.add('swiper-wrapper');
  swiperAdvantagesList.style.justifyContent = 'flex-start';
  swiperAdvantagesList.style.gap = 0;
  swiperAdvantagesSlides.forEach((slide) => {
    slide.classList.add('swiper-slide');
    slide.style.height = 'auto';
  });
};

if (document.body.clientWidth >= desktopWidth) {
  addSwiperClass();
  initAdvantagesSlider();
}
