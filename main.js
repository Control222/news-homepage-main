const hamburgerMenu = document.querySelector('.hamburger__menu');
const navbar = document.querySelector('nav');
const iconMenu = document.getElementById('icon__menu');
const iconMenuClose = document.getElementById('icon__menu__close');
const body = document.querySelector('body');

hamburgerMenu.addEventListener('click', () => {
  navbar.classList.toggle('active');
  iconMenu.classList.toggle('active');
  iconMenuClose.classList.toggle('active');
  body.classList.toggle('active');
});
