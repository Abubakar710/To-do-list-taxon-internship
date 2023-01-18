// Initialize an empty array to store our to-do items
let toDoList = [];
displayToDoList();

// Function to add an item to the to-do list
function addToDo() {
  let input = document.getElementById("input-item");
  let item = input.value;
  toDoList.push(item);
  input.value = "";
  displayToDoList();
}

// Function to remove an item from the to-do list
function removeToDo(index) {
  toDoList.splice(index, 1);
  displayToDoList();
}

// Function to display the to-do list
function displayToDoList() {
  let list = document.getElementById("to-do-list");
  list.innerHTML = "";
  for (let i = 0; i < toDoList.length; i++) {
    let item = toDoList[i]+ "   ";
    let li = document.createElement("li");
    li.innerHTML = item;
    let btn = document.createElement("button");
    btn.innerHTML = "   X   ";
    btn.onclick = function() {
      removeToDo(i);
    };
    li.appendChild(btn);
    list.appendChild(li);
  }
}
