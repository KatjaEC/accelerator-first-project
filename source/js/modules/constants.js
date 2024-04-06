const DEFAULT_SPEED = 500;
const SLIDES_GAP = 40;

const VIDEO_LINK = `<iframe class="about__video" width="320" height="170"
src="https://www.youtube.com/embed/9TZXsZItgdw?si=mQjLP-_5hAQ4JTLA&amp?&autoplay=1;controls=0" loading="lazy"
title="Видео нашего тренажерного зала."
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
allowfullscreen>
</iframe>`;

const BASE_URL = 'https://echo.htmlacademy.ru/';

const NAME_REGEX = /^[a-zа-яё]{0,}$/i;
const PHONE_REGEX = /^[0-9\s]{0,}$/;

const ErrorText = {
  REQUIRED: 'Пожалуйста, заполните поле',
  NAME: 'Допускаются только буквы',
  PHONE: 'Допускаются только цифры',
  SENDING_ERROR: 'Ошибка отправки формы. Попробуйте еще раз',
  VALID: '',
};

const SubmitFormText = {
  IDLE: 'Отправить',
  SENDING: 'Отправляю...',
};

const SliderWidthJudges = {
  MOBILE: 227,
  TABLET: 560,
  DESKTOP: 1160,
};

const SliderWidthReviews = {
  MOBILE: 320,
  TABLET: 580,
  DESKTOP: 640,
};

const SliderPerViewJudges = {
  MOBILE: 1,
  TABLET: 2,
  DESKTOP: 4,
};

const InitialSlide = {
  DEFAULT: 0,
  MOBILE: 2,
};

export { DEFAULT_SPEED, SLIDES_GAP, BASE_URL, NAME_REGEX, PHONE_REGEX, ErrorText, SubmitFormText, VIDEO_LINK, SliderWidthJudges, SliderWidthReviews, SliderPerViewJudges, InitialSlide };
