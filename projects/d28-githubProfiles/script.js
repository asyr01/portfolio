// Our root url /username/repos will be concatenated to this.
const APIURL = 'https://api.github.com/users/';

const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');

getUser('asyr01');

// Make a request to get the user from Github API
async function getUser(username) {
  try {
    const { data } = await axios(APIURL + username);
    createUserCard(data);
    getRepos(username);
  } catch (err) {
    // If a user not found then call createErrorCard
    if (err.response.status == 404) {
      createErrorCard('No profile with that user name');
    }
  }
}

// Make a request to get the users' repos from Github API
async function getRepos(username) {
  try {
    const { data } = await axios(APIURL + username + '/repos?sort=created');
    addReposToCard(data);
  } catch (err) {
    createErrorCard('Problem with taking repos from API');
  }
}

// Inserting values to the DOM
function createUserCard(user) {
  const cardHTML = `<div class="card">
    <div>
      <img
        src="${user.avatar_url}"
        alt="${user.name}"
        class="avatar"
      />
    </div>
    <div class="user-info">
      <h2>${user.name}</h2>
      <p>
      ${user.bio}
      </p>
      <ul>
        <li>${user.followers} <strong>Followers</strong></li>
        <li>${user.following} <strong>Following</strong></li>
        <li>${user.public_repos} <strong>Repositories</strong></li>
      </ul>
      <div id="repos"></div>
    </div>
  </div>`;

  main.innerHTML = cardHTML;
}

// Shows an error to user when user not found
function createErrorCard(msg) {
  const cardHTML = `
     <div class="card">
       <h1>${msg}</h1>
     </div> 
    `;
  main.innerHTML = cardHTML;
}

// Inserting repos to the card element.
function addReposToCard(repos) {
  const reposEl = document.getElementById('repos');
  repos.slice(0, 22).forEach((repo) => {
    const repoEl = document.createElement('a');
    repoEl.classList.add('repo');
    repoEl.href = repo.html_url;
    repoEl.target = '_blank';
    repoEl.innerText = repo.name;
    reposEl.appendChild(repoEl);
  });
}

// It could be a keydown or change event but this will make a request every time
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const user = search.value;
  // if there is a user -text inside the box- make request
  if (user) {
    getUser(user);
    search.value = '';
  }
});
