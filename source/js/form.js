import { SubmitFormText } from './constants';

const form = document.querySelector('.form__body');
const phoneInput = form.querySelector('#phone');
const emailInput = form.querySelector('#email');
const phoneLabel = form.querySelector('.form__label--phone');
const emailLabel = form.querySelector('.form__label--email');
const submitButton = form.querySelector('.form__button');

const hideLabel = (label) => {
  label.style.display = 'none';
};

const showLabel = (label) => {
  label.style.display = 'block';
};

const updateLabel = (input, label) => {
  if (input.value.length > 0) {
    hideLabel(label);
  } else {
    showLabel(label);
  }
};

phoneInput.addEventListener('input', () => updateLabel(phoneInput, phoneLabel));
emailInput.addEventListener('input', () => updateLabel(emailInput, emailLabel));

const validityCheck = (input) => {
  input.addEventListener('invalid', (evt) => {
    const isValid = evt.target.checkValidity();

    if(!isValid && input.value.length > 0) {
      input.classList.add('form__input--error');
    } else {
      input.classList.remove('form__input--error');
    }
  });
};

const phoneValid = validityCheck(phoneInput);
const emailValid = validityCheck(emailInput);

if (form) {
  form.addEventListener('submit', (evt) => {
    if (phoneValid && emailValid) {
      evt.preventDefault();
      submitButton.textContent = SubmitFormText.IDLE;
    }
    submitButton.textContent = SubmitFormText.SENDING;
    form.submit();
  });
}
