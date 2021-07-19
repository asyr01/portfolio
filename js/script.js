const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');
const headerContainer = document.querySelector('.header__container');

// Toggle the nav
navToggle.addEventListener('click', () => {
  document.body.classList.toggle('nav-open');
});

// When a link is clicked on nav
navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    document.body.classList.remove('nav-open');
  });
});

window.addEventListener('scroll', changeNav);

function changeNav() {
  if (window.scrollY > headerContainer.offsetHeight + 150) {
    headerContainer.classList.add('active');
  } else {
    headerContainer.classList.remove('active');
  }
}
