const forms = document.querySelectorAll('.form__body .form__input-wrapper');

const isSpaceKey = (evt) => evt.key === ' ';
const isDownKey = (evt) => evt.key === 'ArrowDown';
const isRightKey = (evt) => evt.key === 'ArrowRight';
const isEnterKey = (evt) => evt.key === 'Enter';

forms.forEach((form) => {
  const selectList = form.querySelector('.form__select-dropdown');
  const selectInput = form.querySelector('.form__input--select');
  const selectItems = form.querySelectorAll('.select-list__item');

  selectItems.forEach((item) => {
    item.setAttribute('tabindex', '0');
    item.addEventListener('mouseover', () => {
      selectInput.value = item.innerText;
    });
    item.addEventListener('focus', () => {
      selectInput.value = item.innerText;
    });
  });
  selectInput.addEventListener('click', (evt) => {
    evt.preventDefault();
    if (!selectList.classList.contains('form__select-dropdown--shown')) {
      selectInput.classList.add('form__input--select-shown');
      selectList.classList.add('form__select-dropdown--shown');
    } else {
      selectInput.classList.remove('form__input--select-shown');
      selectList.classList.remove('form__select-dropdown--shown');
    }
  });
  selectInput.addEventListener('keydown', (evt) => {
    if (isSpaceKey(evt) || isDownKey(evt) || isRightKey(evt) && !selectList.classList.contains('form__select-dropdown--shown')) {
      evt.preventDefault();
      selectInput.classList.add('form__input--select-shown');
      selectList.classList.add('form__select-dropdown--shown');
    }
  });
  if (selectList.classList.contains('form__select-dropdown--shown')) {
    selectItems.forEach((item) => {
      item.addEventListener('keydown', (evt) => {
        if (isEnterKey(evt) || isSpaceKey(evt)) {
          selectInput.value = evt.target.innerText;
          selectList.classList.remove('form__select-dropdown--shown');
          selectInput.classList.remove('form__input--select-shown');
          selectList.blur();
        }
      });
    });
  }
  selectList.addEventListener('keydown', (evt) => {
    if (isEnterKey(evt) || isSpaceKey(evt)) {
      evt.preventDefault();
      selectInput.value = evt.target.innerText;
      selectList.classList.remove('form__select-dropdown--shown');
      selectInput.classList.remove('form__input--select-shown');
    }
  });
  selectList.addEventListener('click', (evt) => {
    selectInput.value = evt.target.innerText;
    selectList.classList.remove('form__select-dropdown--shown');
  });
  document.body.addEventListener('click', (evt) => {
    if (evt.target !== selectInput) {
      selectInput.classList.remove('form__input--select-shown');
      selectList.classList.remove('form__select-dropdown--shown');
    }
  });
});
