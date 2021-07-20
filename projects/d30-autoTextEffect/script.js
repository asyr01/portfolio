const textEl = document.querySelector('#text');
const speedEl = document.querySelector('#speed');
const inputEl = document.querySelector('#input');
const startBtn = document.querySelector('#start-btn');

// index to increase text when inserted, speed for typing effect 600 could be any value.
let idx = 1;
let speed = 600 / speedEl.value;

// Default value of text
let text = 'We Love Programming!';

// Reads text from input  to determine text value
function readText() {
  if (inputEl.value) {
    text = inputEl.value;
  }
  inputEl.style.display = 'none';
  startBtn.style.display = 'none';
  return text;
}

// Writes text with a managable speed
function writeText() {
  textEl.innerText = text.slice(0, idx);
  idx++;

  // Repeat the text
  if (idx > text.length) {
    idx = 1;
  }
  // Recursive function
  setTimeout(writeText, speed);
}

speedEl.addEventListener('input', (e) => {
  speed = 600 / e.target.value;
});

// Event listeners to read and write text
startBtn.addEventListener('click', readText);
startBtn.addEventListener('click', writeText);
