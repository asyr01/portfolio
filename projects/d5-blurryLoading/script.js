const loadText = document.querySelector('.loading-text');
const bg = document.querySelector('.bg');

let load = 0;

let timeInterval = setInterval(() => {
  blurring();
}, 30);

function blurring() {
  load++;
  // When load reaches 100, stop calling the blurring().
  if (load > 99) {
    clearInterval(timeInterval);
  }

  // Change the DOM
  loadText.innerText = `${load}%`;
  loadText.style.opacity = scale(load, 0, 100, 1, 0);
  bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
}

/* To make loadText invisible when reached 100%,
 source => https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
*/
function scale(number, inMin, inMax, outMin, outMax) {
  return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}
