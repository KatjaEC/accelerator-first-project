const aboutUsButton = document.querySelector('.about-us__button');
const modal = document.querySelector('.modal');
const modalButton = modal.querySelector('.modal__button');
const formBody = modal.querySelector('.form__body');

let winX = null;
let winY = null;

window.addEventListener('scroll', () => {
  if (winX !== null && winY !== null) {
    window.scrollTo(winX, winY);
  }
});

const disableScroll = () => {
  winX = window.scrollX;
  winY = window.scrollY;
};

const enableScroll = () => {
  winX = null;
  winY = null;
};

if (modal.classList.contains('modal--shown')) {
  document.addEventListener('keydown', (evt) => {
    evt.preventDefault();
    modal.focus();
  });
}

const showModal = () => {
  modal.classList.add('modal--shown');
  document.addEventListener('keydown', onDocumentKeydown);
  modal.addEventListener('click', onRandomClick);
  disableScroll();
  formBody.setAttribute('tabindex', '0');
  formBody.focus();
};

const closeModal = () => {
  modal.classList.remove('modal--shown');
  document.removeEventListener('keydown', onDocumentKeydown);
  modal.removeEventListener('click', onRandomClick);
  enableScroll();
  aboutUsButton.focus();
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
