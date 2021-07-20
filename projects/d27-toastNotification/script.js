const button = document.getElementById('button');
const toasts = document.getElementById('toasts');

// To check random messages
const messages = [
  'Notification 1',
  'Notification 2',
  'Notification 3',
  'Notification 4',
];

button.addEventListener('click', () => createNotification());

// Getting random colors just for fun
const types = ['info', 'success', 'error'];

// This way you push one notification, we can use forEach to push all notifications at once

// This type argument can specified as error or success like in bootstrap
function createNotification(message = null, type = null) {
  const notif = document.createElement('div');
  // Close element for closing notification we can make it like popup by not appending close element
  const close = document.createElement('p');
  notif.classList.add('toast');
  notif.classList.add(type ? type : getRandomType());
  close.classList.add('close');
  close.innerText = 'X';
  notif.innerText = message ? message : getRandomMessage();

  notif.appendChild(close);
  toasts.appendChild(notif);

  close.addEventListener('click', () => setTimeout(notif.remove(), 300));
}

// To get a random index of array
function getRandomMessage() {
  return messages[Math.floor(Math.random() * messages.length)];
}

// To get a random type
function getRandomType() {
  return types[Math.floor(Math.random() * types.length)];
}
