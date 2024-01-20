const btn = document.getElementById('btn');

function addTask() {
    const task = document.getElementById('task-input');
    const taskName = task.value;

    if (taskName.trim() === '') {
        alert('Please enter a task name.');
        return;
    }

    var taskItem = document.createElement('div');
    taskItem.className = 'task-item';
    taskItem.innerHTML = `
        <span>${taskName}</span>
        <input type="checkbox" onChange="updateTaskStatus(this)">
        <button class="delete-btn" onClick="deleteTask(this)">Delete</button>
    `;

    const tasksList = document.getElementById('tasks-list');
    tasksList.appendChild(taskItem);

    task.value = '';
}

function updateTaskStatus(checkbox) {
    var taskItem = checkbox.closest('.task-item');
    taskItem.classList.toggle('done', checkbox.checked);
}

function deleteTask(deleteBtn) {
    var taskItem = deleteBtn.closest('.task-item');
    taskItem.remove();
}

btn.addEventListener('click', addTask);
