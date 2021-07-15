const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');

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
