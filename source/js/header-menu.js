const navMenu = document.querySelector('.nav-menu__list');
const navMenuToggle = document.querySelector('.nav-menu__toggle');

const openMenu = () => {
  navMenu.classList.remove('nav-menu__list--closed');
  document.body.style.overflow = 'hidden';
};

const closeMenu = () => {
  navMenu.classList.add('nav-menu__list--closed');
  document.body.style.overflow = 'visible';
};

if (navMenuToggle) {
  navMenuToggle.addEventListener('click', () => {
    if (navMenu.classList.contains('nav-menu__list--closed')) {
      openMenu();
    } else {
      closeMenu();
    }
  });
}

if (navMenu) {
  navMenu.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('nav-menu__link')) {
      closeMenu();
    }
  });
}
