const container = document.getElementById('container');
// random colors
const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71'];

const SQUARES = 500;

for (let i = 0; i < SQUARES; i++) {
  // Create element and give a class
  const square = document.createElement('div');
  square.classList.add('square');
  // Event listeners for squares
  square.addEventListener('mouseover', () => setColor(square));
  square.addEventListener('mouseout', () => removeColor(square));
  // Append it to the container
  container.appendChild(square);
}

// Set a random color to the targeted square
function setColor(element) {
  const color = getRandomColor();
  element.style.background = color;
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(element) {
  element.style.background = '#363232';
  element.style.boxShadow = '0 0 2px #000';
}

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}
