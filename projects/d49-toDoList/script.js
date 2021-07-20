const form = document.getElementById('form');
const input = document.getElementById('input');
const todosUL = document.getElementById('todos');

// localStorage functionality
const todos = JSON.parse(localStorage.getItem('todos'));

// if there is todo in localStorage
if (todos) {
  todos.forEach((todo) => addTodo(todo));
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  addTodo();
});

// addTodo adds li to the ul -todosUL-
function addTodo(todo) {
  let todoText = input.value;
  // if todo passed as an argument, keep it in a variable
  if (todo) {
    todoText = todo.text;
  }
  // if todo text exist -not empty-, sets from local storage
  if (todoText) {
    const todoEl = document.createElement('li');
    if (todo && todo.completed) {
      todoEl.classList.add('completed');
    } else if (todo && todo.important) {
      todoEl.classList.add('important');
    }
    todoEl.innerText = todoText;
    // Marks as completed when clicked
    todoEl.addEventListener('click', () => {
      todoEl.classList.toggle('completed');
      updateLS();
    });
    // Marks as important when double clicked
    todoEl.addEventListener('dblclick', () => {
      todoEl.classList.toggle('important');
      updateLS();
    });

    // Removes todo when there is a right click
    todoEl.addEventListener('contextmenu', (e) => {
      e.preventDefault();
      todoEl.remove();
      updateLS();
    });
    todosUL.appendChild(todoEl);
    input.value = '';
    updateLS();
  }
}

// Updates local storage
function updateLS() {
  todosEl = document.querySelectorAll('li');
  const todos = [];

  // Object for each li to manipulate DOM
  todosEl.forEach((todoEl) => {
    todos.push({
      text: todoEl.innerText,
      completed: todoEl.classList.contains('completed'),
      important: todoEl.classList.contains('important'),
    });
  });

  localStorage.setItem('todos', JSON.stringify(todos));
}
