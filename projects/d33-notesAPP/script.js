const addBtn = document.getElementById('add');
// Get data from local storage
const notes = JSON.parse(localStorage.getItem('notes'));

addBtn.addEventListener('click', () => addNewNote(''));

// If there is data on local storage
if (notes) {
  notes.forEach((note) => addNewNote(note));
}

function addNewNote(text) {
  // Creates a new note
  const note = document.createElement('div');
  note.classList.add('note');
  note.innerHTML = `
      <div class="tools">
        <button class="edit"><i class="fas fa-edit"></i></button>
        <button class="trash"><i class="fas fa-trash-alt"></i></button>
      </div>
      <div class="main ${text ? '' : 'hidden'}"></div>
      <textarea class="${text ? 'hidden' : ''}"></textarea>
  `;
  const editBtn = note.querySelector('.edit');
  const deleteBtn = note.querySelector('.trash');
  const main = note.querySelector('.main');
  const textArea = note.querySelector('textarea');
  // Set the textarea value to the div
  textArea.value = text;
  main.innerHTML = marked(text);

  // Delete the note
  deleteBtn.addEventListener('click', () => {
    note.remove();
    updateLS();
  });

  // Switch between textarea and div
  editBtn.addEventListener('click', () => {
    main.classList.toggle('hidden');
    textArea.classList.toggle('hidden');
  });

  // When there is a change updateLS and use markdown
  textArea.addEventListener('input', (e) => {
    main.innerHTML = marked(e.target.value);
    updateLS();
  });

  // Append the note to the body
  document.body.appendChild(note);

  // To scroll bottom when new note added
  window.scrollTo(0, document.body.scrollHeight);
}

// Saving notes to the local storage
function updateLS() {
  const noteTexts = document.querySelectorAll('textarea');
  const notes = [];
  // Take the values of the textareas to the array
  noteTexts.forEach((note) => notes.push(note.value));
  localStorage.setItem('notes', JSON.stringify(notes));
}
