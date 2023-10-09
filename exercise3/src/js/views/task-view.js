import TaskTemplate from "../template/index";

export default class TaskView {
    constructor() {
        this.taskList = document.querySelector(".task-list");
        this.taskForm = document.querySelector(".add-task-container");
        this.btnAddTask = document.querySelector(".add-task-btn");
        this.btnDeleteTask = document.querySelector(".btn-delete");
    }

    toggleVisibility() {
        this.taskForm.classList.add("hidden");
        this.btnAddTask.classList.remove("hidden");
        this.btnDeleteTask.classList.remove("hidden");
    }

    renderTasks(newTasks, renderForm) {
        this.taskList.innerHTML = "";
        newTasks.forEach((newTask) => {
            const taskTemplate = TaskTemplate.renderTask(newTask);
            this.taskList.innerHTML += taskTemplate;
        });

        this.taskList.addEventListener("click", (e) => {
            const task = e.target.closest(".task-item[data-id]");
            const taskId = task.getAttribute("data-id");

            if (taskId) {
                const taskNameValue =
                    task.querySelector(".task-name").textContent;
                const estValue = task.querySelector("task-est").textContent;

                this.taskForm.setAttribute("form-id", taskId);
                renderForm({ taskName: taskNameValue, estPomodoro: estValue });
                this.toggleVisibility();

                setTimeout(() => {
                    this.taskForm.classList.remove("hidden");
                    this.btnAddTask.classList.add("top");
                }, 100);
            }
        });
    }
}
