const tagsEl = document.getElementById('tags');
const textarea = document.getElementById('textarea');

textarea.focus();

textarea.addEventListener('keyup', (e) => {
  createTags(e.target.value);
  if (e.key === 'Enter') {
    setTimeout(() => {
      e.target.value = '';
    }, 10);
    randomSelect();
  }
});

// Create tags and put them into DOM.
function createTags(input) {
  // filter blank spaces and multiple comma
  const tags = input
    .split(',')
    .filter((tag) => tag.trim() !== '')
    .map((tag) => tag.trim());

  tagsEl.innerHTML = '';
  tags.forEach((tag) => {
    const tagEl = document.createElement('span');
    tagEl.classList.add('tag');
    tagEl.innerText = tag;
    tagsEl.appendChild(tagEl);
  });
}

//Runs when user hit the enter, animation and select.
function randomSelect() {
  //Number of times it will highlight before stoping
  const times = 30;
  //Interval to higlight every 100ms
  const interval = setInterval(() => {
    const randomTag = pickRandomTag();
    highlightTag(randomTag);
    setTimeout(() => {
      unhighlightTag(randomTag);
    }, 100);
  }, 100);

  //Stop the animation and higlight a random tag
  setTimeout(() => {
    clearInterval(interval);
    setTimeout(() => {
      const randomTag = pickRandomTag();
      highlightTag(randomTag);
    });
  }, times * 100);
}

// To highlight randomly
function pickRandomTag() {
  const tags = document.querySelectorAll('.tag');
  return tags[Math.floor(Math.random() * tags.length)];
}

// To add highlight class
function highlightTag(tag) {
  tag.classList.add('highlight');
}

// To remove highlight class
function unhighlightTag(tag) {
  tag.classList.remove('highlight');
}
