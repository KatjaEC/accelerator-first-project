const aboutUsButton = document.querySelector('.about-us__button');
const modal = document.querySelector('.modal');
const modalButton = modal.querySelector('.modal__button');

const showModal = () => {
  modal.classList.add('modal--shown');
  document.addEventListener('keydown', onDocumentKeydown);
  modal.addEventListener('click', onRandomClick);
};

const closeModal = () => {
  modal.classList.remove('modal--shown');
  document.removeEventListener('keydown', onDocumentKeydown);
  modal.removeEventListener('click', onRandomClick);
};

if (aboutUsButton) {
  aboutUsButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    showModal();
    aboutUsButton.removeEventListener('click', showModal);
  });
}

if (modalButton) {
  modalButton.addEventListener('click', () => closeModal());
}

const isEscKey = (evt) => evt.key === 'Escape';

function onDocumentKeydown(evt) {
  if (isEscKey(evt)) {
    evt.preventDefault();
    closeModal();
  }
}

function onRandomClick(evt) {
  if (evt.target.classList.contains('page-body__modal')) {
    closeModal();
  }
}
