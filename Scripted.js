let taskInput = document.getElementById('taskInput');
let taskList = document.getElementById('taskList');

// Add task function
function addTask() {
    let taskText = taskInput.value.trim();
    if (taskText !== '') {
        let li = document.createElement('li');
        li.innerHTML = `
            <span>${taskText}</span>
            <button onclick="completeTask(this)">Complete</button>
            <button onclick="deleteTask(this)">Delete</button>
        `;
        taskList.appendChild(li);
        taskInput.value = '';
    }
}

// Complete task function
function completeTask(button) {
    let task = button.parentNode;
    task.classList.toggle('completed');
}

// Delete task function
function deleteTask(button) {
    let task = button.parentNode;
    taskList.removeChild(task);
}
