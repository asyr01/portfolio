const loveMe = document.querySelector('.loveMe');
const times = document.querySelector('#times');

// Variable for counting time between clicks
let clickTime = 0;
let timesClicked = 0;

// Instead of using dblclick event listener we will use click
loveMe.addEventListener('click', (e) => {
  // When there is a click,
  if (clickTime === 0) {
    clickTime = new Date().getTime();
  } else {
    // Compare current time and the time when image clicked and if it's smaller than 800ms it's dblclick create heart
    if (new Date().getTime() - clickTime < 800) {
      createHeart(e);
      clickTime = 0;
    } else {
      clickTime = new Date().getTime();
    }
  }
});

// Creates a heart to insert over the image
const createHeart = (e) => {
  const heart = document.createElement('i');
  heart.classList.add('fas');
  heart.classList.add('fa-heart');
  // Figure out the exact position
  const x = e.clientX;
  const y = e.clientY;

  const leftOffset = e.target.offsetLeft;
  const topOffset = e.target.offsetTop;

  const xInside = x - leftOffset;
  const yInside = y - topOffset;
  // Set the position of the heart
  heart.style.top = `${yInside}px`;
  heart.style.left = `${xInside}px`;
  //Insert it to DOM
  loveMe.appendChild(heart);
  // increment timesClicked
  times.innerHTML = ++timesClicked;
  // Remove the heart after 1 second
  setTimeout(() => heart.remove(), 1000);
};
