const faqTabs = document.querySelector('.faq-tabs');
const faqButtons = [...faqTabs.querySelectorAll('.faq-tabs__button')];
const faqAnswers = [...document.querySelectorAll('.faq-list')];

if (faqTabs) {
  faqTabs.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('faq-tabs__button') && !evt.target.classList.contains('faq-tabs__button--active')) {
      const index = faqButtons.indexOf(evt.target.closest('.faq-tabs__button'));
      faqTabs.querySelector('.faq-tabs__button--active').classList.remove('faq-tabs__button--active');
      evt.target.classList.add('faq-tabs__button--active');
      document.querySelector('.faq__list--active').classList.remove('faq__list--active');
      faqAnswers[index].classList.add('faq__list--active');
    }
  });
}
