const password = document.getElementById('password');
const backgroundEl = document.getElementById('background');

password.addEventListener('input', (e) => {
  const input = e.target.value;
  const length = input.length;
  let blurVal = 20 - length * 2;
  backgroundEl.style.filter = `blur(${blurVal}px)`;
});
