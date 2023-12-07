function showModal() {
    document.getElementById("modal_wrapper").style.display = "block";
}

function hideModal() {
    document.getElementById("modal_wrapper").style.display = "none";
}

document.getElementById("show_modal").addEventListener("click", showModal);
document.getElementById("close_modal").addEventListener("click", hideModal);

document.getElementById("modal_wrapper").addEventListener("click", function(event) {
    if (event.target.id === "modal_wrapper") {
        hideModal();
    }
});

function editTask(index) {
    const task = taskData[index];
    document.getElementById("new_task_title").value = task.title;
    document.getElementById("new_task_description").value = task.description;
    document.getElementById("new_task_due_date").value = task.dueDate;
    showModal();
}

window.addEventListener("DOMContentLoaded", function() {
    const taskData = [
        {
            title: "First task",
            description: "Just an example task. The description contains text.",
            dueDate: "2024-01-01",
        },
        {
            title: "Task (overdue)",
            description: "This task is overdue (due in the past)",
            dueDate: "2023-11-10",
            completed: false
        },
        {
            title: "Another task (completed)",
            description: "This task has the property completed: true",
            dueDate: "2023-10-10",
            completed: true,
        },
        {
            title: "Another completed task",
            description: "This task is completed but the due date was before the other one",
            dueDate: "2023-06-01",
            completed: true
        }
    ]

    const taskContainer = document.getElementById("task_container");

    taskData.forEach(function(task, index) {
        const taskElement = document.createElement("li");
        taskElement.innerHTML = `
            <input type="checkbox" id="task_${index}" ${task.completed ? 'checked' : ''}>
            <label for="task_${index}">${task.title}</label>
            <p>${task.description}</p>
            <p>Due: ${new Date(task.dueDate).toLocaleDateString()}</p>
            <p class="task_actions">
                <button class="edit_task" onclick="editTask(${index})">Edit</button>
                <button class="delete_task">Delete</button>
            </p>
        `;
        taskContainer.appendChild(taskElement);
    });
});
