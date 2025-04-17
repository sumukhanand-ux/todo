function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();
  const taskList = document.getElementById("taskList");

  if (taskText !== "") {
    const li = document.createElement("li");
    li.innerHTML = `${taskText} <button class="delete-btn" onclick="removeTask(this)">Delete</button>`;
    taskList.appendChild(li);
    taskInput.value = "";
  }
}

function removeTask(button) {
  const li = button.parentElement;
  li.remove();
}