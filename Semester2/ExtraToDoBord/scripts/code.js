const setup = () => {
    let tasks = [
        { id: 'task1', content: 'Boodschappen doen', status: 'todo' },
        { id: 'task2', content: 'Gamen', status: 'todo' },
        { id: 'task3', content: 'Kuisen', status: 'todo' }
    ];

    let draggedTaskId = null;

    const columns = ['todo', 'inprogress', 'done'];

    const saveTasks = () => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    };

    const renderTasks = () => {
        columns.forEach(col => {
            document.getElementById(col).innerHTML = `<h2>${col.replace(/^\w/, c => c.toUpperCase())}</h2>`;
        });

        tasks.forEach(task => {
            const taskEl = document.createElement('div');
            taskEl.className = 'task';
            taskEl.textContent = task.content;
            taskEl.id = task.id;
            taskEl.draggable = true;
            taskEl.addEventListener('dragstart', (event) => {
                draggedTaskId = event.target.id;
            });
            document.getElementById(task.status).appendChild(taskEl);
        });
    };

    const handleDrop = (event, newStatus) => {
        event.preventDefault();
        const task = tasks.find(t => t.id === draggedTaskId);
        if (task) {
            task.status = newStatus;
            saveTasks();
            renderTasks();
        }
    };

    columns.forEach(col => {
        const columnEl = document.getElementById(col);
        columnEl.addEventListener("dragover", (event) => event.preventDefault());
        columnEl.addEventListener("drop", (event) => handleDrop(event, col));
    });

    const stored = localStorage.getItem('tasks');
    if (stored) {
        tasks = JSON.parse(stored);
    }

    renderTasks();
};

window.addEventListener("load", setup);
