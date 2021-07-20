const body = document.body;
const slides = document.querySelectorAll('.slide');
const leftBtn = document.getElementById('left');
const rightBtn = document.getElementById('right');

// Unsplash API
const count = 30;
// Normally, don't store API Keys like this, but an exception made here because it is free, and the data is publicly available!
const apiKey = 'jFgS8tteGD425f4oZfygQVaVnD6gt6GucN2yyz3xFek';
const apiUrl = `https://api.unsplash.com/photos/random?client_id=${apiKey}&count=${count}`;

let ready = false;
let imagesLoaded = 0;
let totalImages = 0;
let photosArray = [];
let activeSlide = 0;

rightBtn.addEventListener('click', () => {
  activeSlide++;
  // If we hit the last image
  if (activeSlide > slides.length - 1) {
    activeSlide = 0;
  }
  setBgToBody();
  setActiveSlide();
});

leftBtn.addEventListener('click', () => {
  activeSlide--;
  // If we hit the last image
  if (activeSlide < 0) {
    activeSlide = slides.length - 1;
  }
  setBgToBody();
  setActiveSlide();
});

// On Load
setBgToBody();

function setBgToBody() {
  body.style.backgroundImage = slides[activeSlide].style.backgroundImage;
}

function setActiveSlide() {
  slides.forEach((slide) => {
    slide.classList.remove('active');
  });
  slides[activeSlide].classList.add('active');
}
