var todoInput = document.querySelector("#todo-text");
var todoForm = document.querySelector("#todo-form");
var todoList = document.querySelector("#todo-list");
var todoCountSpan = document.querySelector("#todo-count");

var todos = [];

// To submit to dos.
function renderTodos() {
  // Checks how many items are in the array and displays them on page.
  todoList.innerHTML = "";
  todoCountSpan.textContent = todos.length;
  
  // Checks how many items are in the array and adds items to list on page.
  for (var i = 0; i < todos.length; i++) {
    var todo = todos[i];

    var li = document.createElement("li");
    li.textContent = todo;
    li.setAttribute("data-index", i);
  // Adds attributes
    var button = document.createElement("button");
    button.textContent = "Complete ✔️";

    li.appendChild(button);
    todoList.appendChild(li);
  }
}

// Checking if there is anything in local storage.
function init() {
  // Creates a variable that parses the JSON in local storage.
  var storedTodos = JSON.parse(localStorage.getItem("todos"));
  // If stored to dos isn't empty then it updates to dos with the stored to dos.
  if (storedTodos !== null) {
    todos = storedTodos;
  }
  // Takes items stored in storage and adds them to the page.
  renderTodos();
}

function storeTodos() {
  // Sets "to dos" in local storage as a string.
  localStorage.setItem("todos", JSON.stringify(todos));
}
// Adds an event listener 
todoForm.addEventListener("submit", function(event) {
  event.preventDefault();
  var todoText = todoInput.value.trim();
  // 
  if (todoText === "") {
    return;
  }
 // TODO: Describe the purpose of the following lines of code.
  todos.push(todoText);
  todoInput.value = "";
 
  // TODO: What will happen when the following functions are called?
  storeTodos();
  renderTodos();
});

// TODO: Describe the purpose of the following line of code.
todoList.addEventListener("click", function(event) {
  var element = event.target;
  // TODO: Describe the functionality of the following `if` statement.
  if (element.matches("button") === true) {
    var index = element.parentElement.getAttribute("data-index");
    todos.splice(index, 1);
    // TODO: What will happen when the following functions are called?
    storeTodos();
    renderTodos();
  }
});

init();
