const DEFAULT_SPEED = 500;

const BASE_URL = 'https://echo.htmlacademy.ru/';

const EMAIL_REGEX = /[^@\s]+@[^@\s]+\.[^@\s]+/i;
// const PHONE_REGEX = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;

const SubmitFormText = {
  IDLE: 'Отправить',
  SENDING: 'Отправляю...',
};

export { DEFAULT_SPEED, BASE_URL, EMAIL_REGEX, SubmitFormText };
