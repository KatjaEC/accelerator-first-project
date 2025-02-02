import Swiper from 'swiper';
import { Pagination, Navigation, Grid } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';

const swiperNews = document.querySelector('.news__slider-wrapper.swiper');
const swiperNewsList = swiperNews.querySelector('.news__slider-list');
const tabletWidth = 768;

const slide1 = swiperNewsList.querySelector('.news-slider__item--interview');
const slide2 = swiperNewsList.querySelector('.news-slider__item--travel');
const slide3 = swiperNewsList.querySelector('.news-slider__item--new-program');
const slide4 = swiperNewsList.querySelector('.news-slider__item--career');
const slide1Clone = slide1.cloneNode(true);
slide1Clone.classList.remove('news-slider__item--active');
slide1Clone.classList.remove('swiper-slide-active');
const slide2Clone = slide2.cloneNode(true);
const slide3Clone = slide3.cloneNode(true);
const slide4Clone = slide4.cloneNode(true);
const slide1Clone2 = slide1Clone.cloneNode(true);
const slide2Clone2 = slide2Clone.cloneNode(true);
const slide3Clone2 = slide3Clone.cloneNode(true);
const slide4Clone2 = slide4Clone.cloneNode(true);
const slide1Clone3 = slide1Clone2.cloneNode(true);
const slide2Clone3 = slide2Clone2.cloneNode(true);
const slide3Clone3 = slide3Clone2.cloneNode(true);
const slide4Clone3 = slide4Clone2.cloneNode(true);
const slide1Clone4 = slide1Clone3.cloneNode(true);
const slide2Clone4 = slide2Clone3.cloneNode(true);

const originalList = [slide1, slide2, slide3, slide4];
const newList = [slide1, slide3, slide2, slide4];
const clonedList = [slide3Clone, slide1Clone, slide2Clone, slide4Clone];
const clonedList2 = [slide4Clone2, slide1Clone2, slide2Clone2, slide3Clone2];
const clonedList3 = [slide1Clone3, slide2Clone3, slide3Clone3, slide4Clone3, slide1Clone4, slide2Clone4];

const changeSlidesOrder = () => {
  swiperNewsList.append(...newList, ...clonedList, ...clonedList2);
};

const updateSlider = () => {
  if (document.body.clientWidth < tabletWidth) {
    changeSlidesOrder();
  } else {
    swiperNewsList.append(...originalList, ...clonedList, ...clonedList2, ...clonedList3);
  }
};

updateSlider();

const newsSlider = new Swiper (swiperNews, {
  modules: [Navigation, Pagination, Grid],
  navigation: {
    nextEl: '.news__slider-nav .swiper-button-next',
    prevEl: '.news__slider-nav .swiper-button-prev',
    disabledClass: 'nav-buttons__button--inactive',
  },
  pagination: {
    el: '.news__pagination-wrapper.swiper-pagination',
    type: 'bullets',
    bulletClass: 'swiper-pagination-bullet',
    bulletActiveClass: 'swiper-pagination-bullet--active',
    currentClass: 'swiper-pagination-bullet--current',
    bulletElement: 'button',
    clickable: true,
    dynamicBullets: true,
    dynamicMainBullets: 4,
    renderBullet: function (index, className) {
      return `<button class="nav-list__button ${className}">${index + 1}</button>`;
    },
  },
  slideActiveClass: 'news-slider__item--active',
  autoplay: false,
  direction: 'horizontal',
  loop: false,
  watchSlidesProgress: true,
  slidesPerView: 'auto',
  updateOnWindowResize: true,
  observer: true,
  observeParents: true,
  loopAddBlankSlides: true,
  breakpoints: {
    320: {
      width: 290,
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 20,
      observer: true,
      observeParents: true,
      grid: {
        rows: 2,
        fill: 'row',
      },
    },
    768: {
      width: 678,
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 30,
      grid: {
        rows: 2,
        fill: 'row',
      },
    },
    1440: {
      width: 1240,
      slidesPerView: 4,
      spaceBetween: 32,
      simulateTouch: false,
    }
  },
});

const swiperNewsSlides = swiperNews.querySelectorAll('.news-slider__item');

const setTabIndex = (item, value) => {
  item.setAttribute('tabindex', value);
};

const setLinksFocus = () => {
  swiperNewsSlides.forEach((slide) => {
    const button = slide.querySelector('.news-slider__button');
    if (slide.classList.contains('swiper-slide-fully-visible') && !slide.classList.contains('swiper-slide-prev')) {
      setTabIndex(button, '0');
    } else {
      setTabIndex(button, '-1');
    }
  });
};

setLinksFocus();

const paginationWrapper = document.querySelector('.news__pagination-wrapper');
const paginationButtons = paginationWrapper.querySelectorAll('.nav-list .nav-list__button');

const setPaginationFocus = () => {
  const activeButtonCurrent = paginationWrapper.querySelector('.swiper-pagination-bullet--active');
  paginationButtons.forEach((button) => {
    if (button !== activeButtonCurrent && !button.classList.contains('swiper-pagination-bullet--active-main')) {
      setTabIndex(button, '-1');
    } else {
      setTabIndex(button, '0');
    }
  });
};

setPaginationFocus();

swiperNewsSlides.forEach((slide) => {
  slide.style.display = 'flex';
  slide.style.height = 'auto';
});

/* eslint-disable */

newsSlider.on('slideChange', function() {
  setPaginationFocus();
  const activeBullet = paginationWrapper.querySelector('.swiper-pagination-bullet--active.swiper-pagination-bullet--active-main');
  const nextBullet = paginationWrapper.querySelector('.swiper-pagination-bullet--active-next');
  const previousBullet = paginationWrapper.querySelector('.swiper-pagination-bullet--active-prev');
  const visibleBullets = paginationWrapper.querySelectorAll('.swiper-pagination-bullet--active-main');
  const findActiveBullet = (item) => item.classList.contains('swiper-pagination-bullet--active');
  const activeBulletIndex = [...visibleBullets].findIndex(findActiveBullet);
  const currentTransitionValue = parseInt(`${activeBullet.style.left}`, 10);

  paginationButtons.forEach((button) => {
    if (document.body.clientWidth >= tabletWidth) {
      if (activeBulletIndex === 3 && activeBullet !== paginationButtons[paginationButtons.length - 1]) {
        button.style.left = `${currentTransitionValue - 52}px`;
        setTabIndex(visibleBullets[0], '-1');
        if (nextBullet) {
          setTabIndex(nextBullet, 0);
        }
      } else if (activeBulletIndex < 1 && activeBullet !== paginationButtons[0]) {
        button.style.left = `${currentTransitionValue + 52}px`;
        setTabIndex(visibleBullets[visibleBullets.length - 1], '-1');
        if (previousBullet) {
          setTabIndex(previousBullet, 0);
        }
      }
      console.log(activeBulletIndex);
    } else {
      if (activeBulletIndex > 2 && activeBullet !== paginationButtons[paginationButtons.length - 1]) {
        button.style.left = `${currentTransitionValue - 42}px`;
      } else if (activeBulletIndex < 1 && activeBullet !== paginationButtons[0]) {
        button.style.left = `${currentTransitionValue + 42}px`;
      }
    }
  });
});

newsSlider.on('slideChangeTransitionEnd', function() {
  swiperNewsSlides.forEach((slide) => {
    if (slide.classList.contains('swiper-slide-prev')) {
      slide.classList.remove('swiper-slide-fully-visible');
    }
    setLinksFocus();
  });
});

/* eslint-enable */
