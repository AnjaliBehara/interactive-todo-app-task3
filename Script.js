function addTask() {
    let input = document.getElementById("taskInput");
    let taskText = input.value.trim();

    if (taskText === "") {
        alert("Please enter a task");
        return;
    }

    let li = document.createElement("li");

    li.innerHTML = `
        <span>${taskText}</span>

        <div class="actions">
          <button class="complete" onclick="completeTask(this)">✔</button>
          <button class="delete" onclick="deleteTask(this)">✖</button>
        </div>
      `;

    document.getElementById("taskList").appendChild(li);

    input.value = "";
}

function completeTask(button) {
    button.parentElement.parentElement.classList.toggle("completed");
}

function deleteTask(button) {
    button.parentElement.parentElement.remove();
}

function toggleDarkMode() {
    document.body.classList.toggle("dark");
}