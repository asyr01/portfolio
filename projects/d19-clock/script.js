const hourEl = document.querySelector('.hour');
const minuteEl = document.querySelector('.minute');
const secondEl = document.querySelector('.second');
const timeEl = document.querySelector('.time');
const dateEl = document.querySelector('.date');
const toggle = document.querySelector('.toggle');

const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];
const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

// Light Dark Mode Functionality
toggle.addEventListener('click', (e) => {
  e.preventDefault();
  const html = document.querySelector('html');
  if (html.classList.contains('dark')) {
    html.classList.remove('dark');
    e.target.textContent = 'Dark Mode';
  } else {
    html.classList.add('dark');
    e.target.textContent = 'Light Mode';
  }
});

// Clock functionality
function setTime() {
  const time = new Date();
  const month = time.getMonth();
  const day = time.getDay();
  const date = time.getDate();
  const hours = time.getHours();
  // since it's a 12 hours clock.
  const hoursForClock = hours % 12;
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();
  const ampm = hours >= 12 ? 'PM' : 'AM';

  hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(
    hoursForClock,
    0,
    11,
    0,
    360
  )}deg) `;
  minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(
    minutes,
    0,
    59,
    0,
    360
  )}deg) `;
  secondEl.style.transform = `translate(-50%, -100%) rotate(${scale(
    seconds,
    0,
    59,
    0,
    360
  )}deg) `;

  // Setting the DOM with data.
  timeEl.textContent = `${hoursForClock}:${
    minutes < 10 ? `0${minutes}` : minutes
  } ${ampm}`;
  dateEl.innerHTML = `${days[day]}, ${months[month]}, <span class="circle">${date}</span>`;
}

// Helper function to transform time to degrees.
function scale(number, inMin, inMax, outMin, outMax) {
  return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}

// Call every second
setInterval(setTime, 1000);
