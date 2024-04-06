import { NAME_REGEX, PHONE_REGEX, ErrorText, SubmitFormText } from './constants';
import { sendData } from './api';

const form = document.querySelector('.form__body');
const submitButton = form.querySelector('.form__button');
const nameField = document.getElementById('name-input');
const nameErrorLabel = form.querySelector('.form__error-message--name');
const phoneField = document.getElementById('tel-input');
const phoneErrorLabel = form.querySelector('.form__error-message--tel');

nameField.required = false;
phoneField.required = false;

const disableSubmitButton = () => {
  submitButton.disabled = true;
  submitButton.textContent = SubmitFormText.SENDING;
};

const enableSubmitButton = () => {
  submitButton.disabled = false;
  submitButton.textContent = SubmitFormText.IDLE;
};

const validate = (checkType, input, errorTag, errorText) => {
  const isValid = checkType.test(input.value);

  if (input.value.length === 0) {
    errorTag.textContent = ErrorText.REQUIRED;
    input.classList.add('form__input--error');
    errorTag.style.display = 'block';
  } else if (!isValid) {
    errorTag.textContent = errorText;
    input.classList.add('form__input--error');
    errorTag.style.display = 'block';
  } else {
    input.classList.remove('form__input--error');
    errorTag.style.display = 'none';
    errorTag.textContent = ErrorText.VALID;
  }
  return isValid;
};

const sendForm = (evt) => {
  evt.preventDefault();
  const checkedName = validate(NAME_REGEX, nameField, nameErrorLabel, ErrorText.NAME);
  const checkedPhone = validate(PHONE_REGEX, phoneField, phoneErrorLabel, ErrorText.PHONE);

  if (checkedName && checkedPhone) {
    disableSubmitButton();
    sendData(new FormData(evt.target))
      .then(() => {
        evt.target.reset();
      })
      .catch(ErrorText.SENDING_ERROR)
      .finally(() => enableSubmitButton());
  }
};

const onFormSubmit = () => {
  if (form) {
    form.addEventListener('submit', sendForm);
  }
};

export { onFormSubmit };
