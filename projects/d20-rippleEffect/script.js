const buttons = document.querySelectorAll('.ripple');

buttons.forEach((button) => {
  button.addEventListener('click', function (e) {
    e.preventDefault();
    //Getting where we click at entire viewport
    const x = e.clientX;
    const y = e.clientY;
    // Start points of the button, from top and left they are constant.
    const buttonTop = e.target.offsetTop;
    const buttonLeft = e.target.offsetLeft;
    // Calculations for top and left values
    const xInside = x - buttonLeft;
    const yInside = y - buttonTop;
    // span element with cirlce class to activate animation
    const circle = document.createElement('span');
    circle.classList.add('circle');
    circle.style.top = yInside + 'px';
    circle.style.left = xInside + 'px';
    this.appendChild(circle);

    setTimeout(() => circle.remove(), 500);
  });
});
