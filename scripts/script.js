const mobileMenu = document.querySelector('.mobile-menu');
const hamburgerIcon = document.querySelector('.hamburger-menu');

hamburgerIcon.addEventListener('click', () => {
    mobileMenu.classList.toggle('show-mobile-menu');
});