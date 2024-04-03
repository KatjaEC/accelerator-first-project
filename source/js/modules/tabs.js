const tabs = document.querySelector('.price-tabs');
const tabButtons = [...tabs.querySelectorAll('.price-tabs__button')];
const optionsGroup = [...document.querySelectorAll('.prices__options-group')];

if (tabs) {
  tabs.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('price-tabs__button') && !evt.target.classList.contains('price-tabs__button--active')) {
      const index = tabButtons.indexOf(evt.target.closest('button'));
      tabs.querySelector('.price-tabs__button--active').classList.remove('price-tabs__button--active');
      evt.target.classList.add('price-tabs__button--active');
      document.querySelector('.prices__options-group--active').classList.remove('prices__options-group--active');
      optionsGroup[index].classList.add('prices__options-group--active');
    }
  });
}
