const faqList = document.querySelector('.faq-list');
const faqLiItems = faqList.querySelectorAll('.faq-list__item');

if (faqList) {
  faqLiItems.forEach((item) => {
    const faqCheckbox = item.querySelector('input[type=checkbox]');
    item.addEventListener('click', () => {
      if (faqCheckbox.checked) {
        item.classList.add('faq-card--active');
      } else {
        item.classList.remove('faq-card--active');
      }
    });
  });
}
