const container = document.querySelector('.container');
const unsplashURL = 'https://source.unsplash.com/random/';
const rows = 10;

createRandomImages();

// To create images -each row includes three images- and insert them to DOM
function createRandomImages() {
  for (let i = 0; i < rows * 3; i++) {
    const img = document.createElement('img');
    img.src = `${unsplashURL}${getRandomSize()}`;
    container.appendChild(img);
  }
}

// Get different size images
function getRandomSize() {
  return `${getRandomNr()}x${getRandomNr()}`;
}

// Get random number to get different size images
function getRandomNr() {
  return Math.floor(Math.random() * 10 + 300);
}

// Creates random Images and scrolls to top
function getRandomImages() {
  window.scrollTo({ top: 100, behavior: 'smooth' });
  container.innerHTML = ``;
  createRandomImages();
}
