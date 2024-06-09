import { closeModal } from './modal';
import { sendData } from './api';
const forms = document.querySelectorAll('.form__body');

forms.forEach((form) => {
  const nameInput = form.querySelector('.form__input--name');
  const phoneInput = form.querySelector('.form__input--phone');
  const messageInput = form.querySelector('.form__input--textarea');
  const selectInput = form.querySelector('.form__input--select');
  const checkboxInput = form.querySelector('.form__checkbox');
  const formSubmitButton = form.querySelector('.form__button');

  const phoneValid = phoneInput.checkValidity();
  const nameValid = nameInput.checkValidity();

  formSubmitButton.addEventListener('click', (evt) => {
    if (!phoneValid) {
      phoneInput.classList.add('form__input--error');
    } else {
      phoneInput.classList.remove('form__input--error');
    }
    if (!nameValid) {
      nameInput.classList.add('form__input--error');
    } else {
      nameInput.classList.remove('form__input--error');
    }
    if (messageInput) {
      const messageChecked = messageInput.checkValidity();
      if (!messageChecked) {
        messageInput.classList.add('form__input--error');
      } else {
        messageInput.classList.remove('form__input--error');
      }
    }
    if (selectInput.value.length < 2) {
      evt.preventDefault();
      selectInput.classList.add('form__input--error');
    } else {
      selectInput.classList.remove('form__input--error');
    }
    if (!checkboxInput.checked) {
      checkboxInput.classList.add('form__checkbox--error');
    } else {
      checkboxInput.classList.remove('form__checkbox--error');
    }
  });

  const formInputs = form.querySelectorAll('.form__input');

  const resetOnSubmit = () => {
    form.reset();
    formInputs.forEach((input) => input.classList.remove('form__input--error'));
    if (form.classList.contains('form__body--modal')) {
      closeModal();
    }
  };

  const setFormSubmit = (onSuccess) => {
    form.addEventListener('submit', (evt) => {
      evt.preventDefault();

      const isValid = form.checkValidity();
      if (isValid) {
        sendData(new FormData(evt.target))
          .then(onSuccess)
          .catch(() => {
            throw new Error('Не удалось отправить форму. Попробуйте ещё раз');
          }
          )
          .finally(resetOnSubmit());
      }
    });
  };

  setFormSubmit();
});
