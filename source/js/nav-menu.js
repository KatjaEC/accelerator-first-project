const navMenuContainer = document.querySelector('.nav-menu');
const menuToggle = navMenuContainer.querySelector('.nav-menu__toggle');
const menuList = navMenuContainer.querySelector('.nav-menu__list');
const submenuLiElements = navMenuContainer.querySelectorAll('.nav-menu__item--has-submenu');

const setTabIndex = (element, value) => element.setAttribute('tabindex', value);

const openNavMenu = () => {
  document.body.classList.add('page-body--nav-shown');
  menuToggle.classList.add('nav-menu__toggle--opened');
  menuList.classList.add('nav-menu__list--shown');
  document.addEventListener('keydown', onDocumentKeydown);
  document.addEventListener('click', onRandomClick);
};

if (submenuLiElements) {
  submenuLiElements.forEach((li) => {
    const submenuTitle = li.querySelector('.nav-menu__link--submenu-title');
    const submenuToggle = li.querySelector('.nav-menu__submenu-toggle');
    const submenuWrapper = li.querySelector('.nav-menu__submenu-wrapper');
    const submenuLinks = li.querySelectorAll('.nav-submenu__link');
    if (!li.classList.contains('nav-menu__item--submenu-shown')) {
      submenuLinks.forEach((link) => setTabIndex(link, '-1'));
    }
    li.addEventListener('click', (evt) => {
      if (!li.classList.contains('nav-menu__item--submenu-shown') && evt.target === submenuToggle && submenuWrapper) {
        li.classList.add('nav-menu__item--submenu-shown');
        submenuToggle.classList.add('nav-menu__submenu-toggle--submenu-shown');
        submenuTitle.classList.add('nav-menu__link--submenu-opened');
        submenuWrapper.classList.add('nav-menu__submenu-wrapper--opened');
        submenuLinks.forEach((link) => setTabIndex(link, 0));
      } else {
        li.classList.remove('nav-menu__item--submenu-shown');
        submenuToggle.classList.remove('nav-menu__submenu-toggle--submenu-shown');
        submenuTitle.classList.remove('nav-menu__link--submenu-opened');
        submenuWrapper.classList.remove('nav-menu__submenu-wrapper--opened');
        submenuLinks.forEach((link) => setTabIndex(link, '-1'));
      }
    });
  });
}

const closeNavMenu = () => {
  document.body.classList.remove('page-body--nav-shown');
  menuToggle.classList.remove('nav-menu__toggle--opened');
  menuList.classList.remove('nav-menu__list--shown');
  document.removeEventListener('keydown', onDocumentKeydown);
  document.removeEventListener('click', onRandomClick);
};

if (menuToggle) {
  menuToggle.addEventListener('click', (evt) => {
    if (!evt.target.classList.contains('nav-menu__toggle--opened')) {
      openNavMenu();
    } else {
      closeNavMenu();
    }
  });
}

const isEscKey = (evt) => evt.key === 'Escape';

function onDocumentKeydown(evt) {
  if (isEscKey(evt)) {
    evt.preventDefault();
    closeNavMenu();
  }
}

function onRandomClick(evt) {
  if (evt.target.classList.contains('page-body') || evt.target.classList.contains('nav-menu__link') || evt.target.classList.contains('nav-submenu__link')) {
    closeNavMenu();
  }
}
