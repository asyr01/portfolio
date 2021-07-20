const imgs = document.getElementById('imgs');
const leftBtn = document.getElementById('left');
const rightBtn = document.getElementById('right');

const img = document.querySelectorAll('#imgs img');

// idx and interval for automatic sliding
let idx = 0;
let interval = setInterval(run, 3000);

function run() {
  idx++;
  changeImage();
}

// Change images by sliding -translateX-
function changeImage() {
  if (idx > img.length - 1) {
    idx = 0;
  } else if (idx < 0) {
    idx = img.length - 1;
  }
  imgs.style.transform = `translateX(${-idx * 500}px)`;
}

// Resets interval
function resetInterval() {
  clearInterval(interval);
  interval = setInterval(run, 3000);
}

rightBtn.addEventListener('click', () => {
  idx++;
  changeImage();
  resetInterval();
});

leftBtn.addEventListener('click', () => {
  idx--;
  changeImage();
  resetInterval();
});
