const API_URL = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=f69b71c8e65b1aef0270ca2280da25a6&page=`;

const IMG_PATH = `https://image.tmdb.org/t/p/w1280`;

const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=f69b71c8e65b1aef0270ca2280da25a6&query="`;

const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');
const links = document.querySelectorAll('.pages');
const leftBtn = document.getElementById('left');
const numInput = document.getElementById('numInput');
const rightBtn = document.getElementById('right');
const pagination = document.querySelector('.pagination');
let pageNumber = numInput.value;

async function getMovies(url) {
  const res = await fetch(url);
  const data = await res.json();
  showMovies(data.results);
}

function showMovies(movies) {
  main.innerHTML = '';
  movies.forEach((movie) => {
    const { title, poster_path, vote_average, overview } = movie;
    const movieEl = document.createElement('div');
    movieEl.classList.add('movie');
    movieEl.innerHTML = `
          <img
            src="${IMG_PATH + movie.poster_path}"
            alt="${movie.title}"
          />
          <div class="movie-info">
            <h3>${movie.title}</h3>
            <span class="${getClassByRate(vote_average)}">${
      movie.vote_average
    }</span>
          </div>
          <div class="overview">
            <h3>${movie.title}</h3>
            <h3>${movie.overview}</h3>
          </div>
    `;
    main.appendChild(movieEl);
  });
}

function getClassByRate(vote) {
  if (vote > 7.5) {
    return 'green';
  } else if (vote >= 5) {
    return 'orange';
  } else {
    return 'red';
  }
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  pagination.style.display = 'none';
  const searchTerm = search.value;

  if (searchTerm && searchTerm !== '') {
    getMovies(SEARCH_API + searchTerm);
    search.value = '';
  } else {
    window.location.reload();
  }
});

// If rightBtn clicked increment the page, otherwise decrease.
function changeThePage(int) {
  if (int === 1) {
    leftBtn.disabled = false;
    pageNumber++;
    numInput.value++;
  } else if (int === -1 && pageNumber > 1) {
    pageNumber--;
    numInput.value--;
  }
  main.innerHTML = '';
  getMovies(API_URL + pageNumber);
}

// Set the page from input box.
function setThePage() {
  pageNumber = numInput.value;
  getMovies(API_URL + pageNumber);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Get initial movies on load.
getMovies(API_URL);
