// Define UI Vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// Load all event listeners
loadEventListeners();

// Load all event listeners

function loadEventListeners() {
  // Add Task event
  form.addEventListener('submit', addTask);
  clearBtn.addEventListener('onclick', removeTask);
}

function addTask(e) {
  if (taskInput.value === '') {
    alert('Add a task.');
  } else {
    const li = document.createElement('li');
    li.className = 'collection-item';
    li.appendChild(document.createTextNode(taskInput.value));

    // Create new link element
    const link = document.createElement('a');
    link.className = 'delete-item secondary-content';

    // Add icon html
    link.innerHTML = '<i class="fa fa-remove"></i>';

    li.appendChild(link);

    // Append li to ul
    taskList.appendChild(li);

    taskInput.value = '';
  }

  e.preventDefault();
}

function removeTask(e) {
  console.log(e, ' is target');
  e.preventDefault();
}
