const toggles = document.querySelectorAll('.toggle');
const good = document.querySelector('#good');
const cheap = document.querySelector('#cheap');
const fast = document.querySelector('#fast');

toggles.forEach((toggle) => {
  toggle.addEventListener('change', (e) => checkClickedOne(e.target));
});

function checkClickedOne(theClickedToggle) {
  // All three checked
  if (good.checked && cheap.checked && fast.checked) {
    if (good === theClickedToggle) {
      fast.checked = false;
    }
    if (cheap === theClickedToggle) {
      good.checked = false;
    }
    if (fast === theClickedToggle) {
      cheap.checked = false;
    }
  }
}
