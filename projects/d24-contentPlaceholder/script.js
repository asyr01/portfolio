const header = document.getElementById('header');
const title = document.getElementById('title');
const excerpt = document.getElementById('excerpt');
const profile_img = document.getElementById('profile_img');
const authorName = document.getElementById('name');
const date = document.getElementById('date');

// Select all elements wh,ch have those classes
const animated_bgs = document.querySelectorAll('.animated-bg');
const animated_bg_texts = document.querySelectorAll('.animated-bg-text');

// Call the function after showing animation
setTimeout(getData, 2500);

// to load card and manipulate DOM after animation.
function getData() {
  // This data could come from an api which you made -backend-
  header.innerHTML =
    ' <img src="https://source.unsplash.com/random/800x600" alt="A random photo"/>';
  title.textContent = 'Lorem ipsum dolor sit amet.';
  excerpt.textContent =
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, vitae.';
  profile_img.innerHTML =
    '<img src="https://randomuser.me/api/portraits/men/35.jpg" alt="Photograph of a man" />';
  authorName.textContent = 'John Doe';
  date.textContent = ' June 05, 2021';

  // Clear the animation
  animated_bgs.forEach((bg) => {
    bg.classList.remove('animated-bg');
  });

  animated_bg_texts.forEach((bg) => {
    bg.classList.remove('animated-bg-text');
  });
}
