
const form = document.getElementById("taskForm");
const input = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

// Load tasks on page load
loadTasks();

// Add task
form.addEventListener("submit", function(event) {
    event.preventDefault();
    const text = input.value.trim();
    if (text === "") return;

    createTask(text, false);
    input.value = "";
    saveTasks();
});

// Create task element
function createTask(text, done) {
    const li = document.createElement("li");
    if (done) li.classList.add("done");

    li.innerHTML = `
        <span>${text}</span>
        <button class="doneBtn">${done ? "Done" : "Mark as done"}</button>
        <button class="deleteBtn">Delete</button>
    `;

    // Mark as done toggle
    const doneBtn = li.querySelector(".doneBtn");
    doneBtn.addEventListener("click", function() {
        li.classList.toggle("done");
        doneBtn.textContent = li.classList.contains("done") ? "Done" : "Mark as done";
        saveTasks();
    });

    // Delete task
    li.querySelector(".deleteBtn").addEventListener("click", function() {
        li.remove();
        saveTasks();
    });

    taskList.appendChild(li);
}

// Save tasks to LocalStorage
function saveTasks() {
    const tasks = [];
    document.querySelectorAll("#taskList li").forEach(li => {
        tasks.push({
            text: li.querySelector("span").textContent,
            done: li.classList.contains("done")
        });
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Load tasks from LocalStorage
function loadTasks() {
    const saved = JSON.parse(localStorage.getItem("tasks"));
    if (!saved) return;

    saved.forEach(task => createTask(task.text, task.done));
}


