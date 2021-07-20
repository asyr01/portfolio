const screens = document.querySelectorAll('.screen');
const choose_insect_btn = document.querySelectorAll('.choose-insect-btn');
const start_btn = document.getElementById('start-btn');
const game_container = document.getElementById('game-container');
const timeEl = document.getElementById('time');
const scoreEl = document.getElementById('score');
const message = document.getElementById('message');

let seconds = 0;
let score = 0;
let selected_insect = {};

// Goes second screen
start_btn.addEventListener('click', () => screens[0].classList.add('up'));

// Takes image path and alt attribute of which box is selected at second screen.
choose_insect_btn.forEach((btn) => {
  btn.addEventListener('click', () => {
    const img = btn.querySelector('img');
    const src = img.getAttribute('src');
    const alt = img.getAttribute('alt');
    selected_insect = { src, alt };
    // Goes third screen
    screens[1].classList.add('up');
    setTimeout(createInsect, 1000);
    startGame();
  });
});

// Sets an interval to start counting time etc.
function startGame() {
  setInterval(increaseTime, 1000);
}

// Starts time and insert a 0 according to condition.
function increaseTime() {
  let m = Math.floor(seconds / 60);
  let s = seconds % 60;
  m = m < 10 ? `0${m}` : m;
  s = s < 10 ? `0${s}` : s;
  timeEl.innerHTML = `Time: ${m}:${s}`;
  seconds++;
}

// Inserts insect to the DOM, top and left values are random.
function createInsect() {
  const insect = document.createElement('div');
  insect.classList.add('insect');
  const { x, y } = getRandomLocation();
  insect.style.left = `${x}px`;
  insect.style.top = `${y}px`;
  // manipulate with selected insect and rotate with inline style
  insect.innerHTML = `<img src="${selected_insect.src}" alt="${
    selected_insect.alt
  }" style="transform: rotate(${Math.random() * 360}deg)"/>`;
  insect.addEventListener('click', catchInsect);
  game_container.appendChild(insect);
}

// Figures out width of window and returns x,y randomly.
function getRandomLocation() {
  const width = window.innerWidth;
  const height = window.innerHeight;
  const x = Math.random() * (width - 100);
  const y = Math.random() * (height - 100);
  return { x, y };
}

// When you clicked on insect it runs
function catchInsect() {
  increaseScore();
  this.classList.add('caught');
  setTimeout(() => this.remove(), 2000);
  addInsects();
}

// Add more insects to the game
function addInsects() {
  setTimeout(createInsect, 1000);
  setTimeout(createInsect, 1500);
}

// increase the score when clicked display annoyed message after 19.
function increaseScore() {
  score++;
  if (score > 19) {
    message.classList.add('visible');
  }
  scoreEl.innerHTML = `Score: ${score}`;
}
