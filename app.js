// Step 1: Select DOM elements
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const filterTodo = document.querySelector(".filter-todo");
const todoList = document.querySelector(".todo-list");

// Step 2: Create event listeners
todoButton.addEventListener("click", addToDo);
todoList.addEventListener("click", deleteOrCompleteTodo);
filterTodo.addEventListener("change", filterTodos);

// Step 3: Function to add new task
// e (event) = the information of a change on the website
function addToDo(e) {
  // Prevents the form submission
  e.preventDefault();

  // Create the todoDiv container
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");

  // Create a new todo list item
  const newTodo = document.createElement("li");
  newTodo.classList.add("todo-item");
  newTodo.innerText = todoInput.value;
  todoDiv.appendChild(newTodo);

  // Create the complete todo button.
  const completeButton = document.createElement("button");
  completeButton.classList.add("complete-btn");
  completeButton.innerHTML = `<i class="fas fa-check"></i>`;
  todoDiv.appendChild(completeButton);

  // Create the delete todo button
  const trashButton = document.createElement("button");
  trashButton.classList.add("trash-btn");
  trashButton.innerHTML = `<i class="fas fa-trash"></i>`;
  todoDiv.appendChild(trashButton);
  todoList.appendChild(todoDiv);
  todoInput.value = "";
}

// Step 4: Function to delete or complete task
// event.target = the element that the event happened on
function deleteOrCompleteTodo(e) {
  const targetBtn = e.target;
  if (targetBtn.classList.contains("trash-btn")) {
    const todoDiv = targetBtn.parentElement;
    todoDiv.classList.add("fall");
    todoDiv.addEventListener("transitionend", function () {
      todoDiv.remove();
    });
  }
  if (targetBtn.classList.contains("complete-btn")) {
    const todoDiv = targetBtn.parentElement;
    todoDiv.classList.toggle("completed");
  }
}

// Step 5: Function to filter task based on completion status
function filterTodos(e) {
  const todos = todoList.childNodes;
  todos.forEach(function (todo) {
    const filterValue = e.target.value;
    if (filterValue == "all") {
      todo.style.display = "flex";
    } else if (filterValue == "completed") {
      if (todo.classList.contains("completed")) {
        todo.style.display = "flex";
      } else {
        todo.style.display = "none";
      }
    } else if (filterValue == "uncompleted") {
      if (todo.classList.contains("completed")) {
        todo.style.display = "none";
      } else {
        todo.style.display = "flex";
      }
    }
  });
}
