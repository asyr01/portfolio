const codes = document.querySelectorAll('.code');

// To focus to the first input box
codes[0].focus();

codes.forEach((code, i) => {
  code.addEventListener('keydown', (e) => {
    // if number is valid focus to the next input
    if (e.key >= 0 && e.key <= 9) {
      codes[i].value = '';
      // wait a little for the first input
      setTimeout(() => codes[i + 1].focus(), 10);
    } else if (e.key === 'Backspace') {
      setTimeout(() => codes[i - 1].focus(), 10);
    }
  });
});
