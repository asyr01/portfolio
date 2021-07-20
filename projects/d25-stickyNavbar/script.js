const nav = document.querySelector('.nav');
const links = document.querySelectorAll('a');
window.addEventListener('scroll', changeNav);

// When scrolled make the nav white.
function changeNav() {
  if (window.scrollY > nav.offsetHeight + 150) {
    links.forEach((link) => link.classList.remove('current'));
    nav.classList.add('active');
    links[2].classList.add('current');
  } else {
    links.forEach((link) => link.classList.remove('current'));
    nav.classList.remove('active');
    links[1].classList.add('current');
  }
}
