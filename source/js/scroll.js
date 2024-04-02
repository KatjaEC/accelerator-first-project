const heroButton = document.querySelector('.hero__button');

const scrollToPrices = () => {
  const element = document.getElementById('prices');
  element.scrollIntoView({ behavior: 'smooth'});
};

heroButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  scrollToPrices();
});

