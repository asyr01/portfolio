const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');
const headerContainer = document.querySelector('.header__container');

// Toggle the nav
navToggle.addEventListener('click', () => {
  document.body.classList.toggle('nav-open');
});

// When a link is clicked on nav
navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    document.body.classList.remove('nav-open');
  });
});

window.addEventListener('scroll', changeNav);

function changeNav() {
  if (window.scrollY > headerContainer.offsetHeight + 150) {
    headerContainer.classList.add('active');
  } else {
    headerContainer.classList.remove('active');
  }
}

const projects = [
  {
    number: 1,
    subtitle: 'An excellent project with an excellent roadmap',
    name: 'Expanding Cards',
    explanation: 'This project has four parts ....',
    pathName: 'd1-expandingCards',
    imgLink: '1-expanding-cards.png',
  },
  {
    number: 2,
    subtitle: 'An excellent project with an excellent roadmap',
    name: 'Progress Steps',
    explanation: 'This project has five parts ....',
    pathName: 'd2-progressSteps',
    imgLink: '2-progress-steps.png',
  },
  {
    number: 3,
    subtitle: 'An excellent project with an excellent roadmap',
    name: 'Quotarium',
    explanation: 'This project has five parts ....',
    pathName: 'quotarium',
    imgLink: '3-quotarium.png',
  },
];

const projectsEl = document.getElementById('portfolio');

projects.forEach((project) => {
  projectEl = document.createElement('div');
  projectEl.classList.add('portfolio__container');
  projectEl.innerHTML = `
  <a href="./portfolio-page.html" class="portfolio__item">
          <img src="img/projects-img/${project.imgLink}" alt="${project.name}"
            class="portfolio__img"
          />
        </a>
          <h4>${project.name}</h4>
          <a
              href="/projects/${project.pathName}/"
              target="_blank"
              class="btn"
              >Live Demo</a
          >
  `;
  projectsEl.appendChild(projectEl);
});
