const panels = document.querySelectorAll('.panel');

panels.forEach((panel) => {
  panel.addEventListener('click', () => {
    removeActiveClasses();
    panel.classList.add('active');
  });
});

// Remove active classes before adding another
function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove('active');
  });
}
