import TaskTemplate from "";

export default class TaskView {
    constructor() {
        this.taskList = document.querySelector(".task-list");
        this.taskForm = document.querySelector(".add-task-container");
        this.btnAddTask = document.querySelector(".add-task-btn");
        this.btnsDeleteTask = document.querySelector(".btn-delete");
    }

    toggleVisibility() {
        this.taskForm.classList.add("hidden");
        this.btnAddTask.classList.remove("hidden");
        this.btnDeleteTask.classList.remove("hidden");
    }

    renderTasks(newTasks, renderForm) {
        this.taskListElement.innerHTML = "";
        newTasks.forEach((newTask) => {
            const taskTemplate = TaskTemplate.renderTask(newTask);
            this.taskListElement.innerHTML += taskTemplate;
        });

        this.taskList.addEventListener("click", (e) => {
            const taskElement = e.target.closest(".task-item[data-id]");
            const taskId = taskElement.getAttribute("data-id");

            if (taskId){
                const taskName = taskElement.querySelector('.task-name').textContent;
                const estValue = taskElement.querySelector('')
            }
        });
    }
}
