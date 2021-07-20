const ratings = document.querySelectorAll('.rating');
const ratingsContainer = document.querySelector('.ratings-container');
const sendBtn = document.querySelector('#send');
const panel = document.querySelector('#panel');
let selectedRating = 'Satisfied';

// Event bubbling, add event listener to parent
ratingsContainer.addEventListener('click', (e) => {
  if (e.target.parentNode.classList.contains('rating')) {
    removeActive();
    e.target.parentNode.classList.add('active');
    selectedRating = e.target.nextElementSibling.innerText;
  }
});

function setText() {
  if (selectedRating === 'Satisfied') {
    return 'We are happy for that you are satisfied.';
  } else if (selectedRating === 'Neutral') {
    return 'We will try to make you happier in the future.';
  } else {
    return 'We are sorry for that.';
  }
}

// When clicked manipulate the DOM and change the container
sendBtn.addEventListener('click', (e) => {
  const textString = setText();
  panel.innerHTML = `
     <i class="fas fa-heart"></i>
     <strong>Thank you!</strong> <br>
     <strong>Feedback: ${selectedRating} </strong>
     <p>${textString}</p>
     <p>We'll use your feedback to improve our customer support.<p>
    `;
});

// Remove active class from the element
function removeActive() {
  // forEach is better but variety is important
  for (let i = 0; i < ratings.length; i++) {
    ratings[i].classList.remove('active');
  }
}
