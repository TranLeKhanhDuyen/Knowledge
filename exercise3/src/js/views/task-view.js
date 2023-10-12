import TaskTemplate from "../template/index";

export default class TaskView {
    constructor() {
        this.taskList = document.querySelector(".task-list");
        this.taskForm = document.querySelector(".add-task-container");
        this.btnAddTask = document.querySelector(".add-task-btn");
        this.btnDeleteTask = document.querySelector(".btn-delete");
        this.btnCancel = document.querySelector(".btn-cancel");
    }

    toggleVisibility() {
        this.taskForm.classList.add("hidden");
        this.btnAddTask.classList.remove("hidden");
    }

    renderTasks(newTasks, renderForm) {
        this.taskList.innerHTML = "";
        newTasks.forEach((newTask) => {
            const taskTemplate = TaskTemplate.renderTask(newTask);
            this.taskList.innerHTML += taskTemplate;
        });

        this.taskList.addEventListener("click", (e) => {
            //nên event cho từng item
            const task = e.target.closest(".task-item[data-id]");
            const taskId = task.getAttribute("data-id");

            if (taskId) {
                const selectedTasks = document.querySelectorAll(
                    ".task-item.selected"
                );
                selectedTasks.forEach((task) =>
                    task.classList.remove("selected")
                );
                task.classList.add("selected");

                //luu data và get data từ model
                const taskNameValue =
                    task.querySelector(".task-name").textContent;
                const estValue = task.querySelector(".task-est").textContent;

                this.taskForm.setAttribute("form-id", taskId);
                renderForm({ taskNameDisplay: taskNameValue, est: estValue });
                this.toggleVisibility();

                this.taskForm.classList.remove("hidden");
                this.btnAddTask.classList.add("top");
            }
        });
    }
}
