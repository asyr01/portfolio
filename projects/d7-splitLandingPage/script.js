const left = document.querySelector('.left');
const right = document.querySelector('.right');
const container = document.querySelector('.container');

left.addEventListener('mouseenter', () => {
  container.className = '';
  container.classList.add('hover-left');
});

right.addEventListener('mouseenter', () => {
  container.className = '';
  container.classList.add('hover-right');
});
