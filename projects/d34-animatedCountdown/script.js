const nums = document.querySelectorAll('.nums span');
const counter = document.querySelector('.counter');
const finalMessage = document.querySelector('.final');
const replay = document.querySelector('#replay');

runAnimation();

// Clear the classes, prepare the DOM for replay
function resetDOM() {
  counter.classList.remove('hide');
  finalMessage.classList.remove('show');

  nums.forEach((num) => {
    num.classList.value = '';
  });
  nums[0].classList.add('in');
}

// Changes the classes dynamically
function runAnimation() {
  nums.forEach((num, i) => {
    const nextToLast = nums.length - 1;
    // Run animation by adding 'in' and 'out' classes.
    num.addEventListener('animationend', (e) => {
      if (e.animationName === 'goIn' && i !== nextToLast) {
        // Remove in and add out if it's not last
        num.classList.remove('in');
        num.classList.add('out');
      } else if (e.animationName === 'goOut' && num.nextElementSibling) {
        // Add in if there is another sibling
        num.nextElementSibling.classList.add('in');
      } else {
        // Animation ends, shows the 'GO' and 'Replay'
        counter.classList.add('hide');
        finalMessage.classList.add('show');
      }
    });
  });
}

replay.addEventListener('click', () => {
  resetDOM();
  runAnimation();
});
