const btn = document.getElementById('btn');
const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
tasks.forEach(task => {
    addTaskToDOM(task.name, task.done);
});

function addTaskToDOM(taskName, done = false) {
    const taskItem = document.createElement('div');
    taskItem.className = 'task-item';
    taskItem.innerHTML = `
        <span>${taskName}</span>
        <input type="checkbox" ${done ? 'checked' : ''} onChange="updateTaskStatus(this)">
        <button class="delete-btn" onClick="deleteTask(this)">Delete</button>
    `;

    const tasksList = document.getElementById('tasks-list');
    tasksList.appendChild(taskItem);
}

function addTask() {
    const task = document.getElementById('task-input');
    const taskName = task.value.trim();

    if (taskName === '') {
        alert('Please enter a task name.');
        return;
    }

    addTaskToDOM(taskName);

    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.push({ name: taskName, done: false });
    localStorage.setItem('tasks', JSON.stringify(tasks));

    task.value = '';
}

function updateTaskStatus(checkbox) {
    const taskItem = checkbox.closest('.task-item');
    taskItem.classList.toggle('done', checkbox.checked);

    const taskName = taskItem.querySelector('span').textContent;
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    const updatedTasks = tasks.map(task => {
        if (task.name === taskName) {
            task.done = checkbox.checked;
        }
        return task;
    });
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
}

function deleteTask(deleteBtn) {
    const taskItem = deleteBtn.closest('.task-item');
    taskItem.remove();

    const taskName = taskItem.querySelector('span').textContent;
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    const updatedTasks = tasks.filter(task => task.name !== taskName);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
}

btn.addEventListener('click', addTask);
