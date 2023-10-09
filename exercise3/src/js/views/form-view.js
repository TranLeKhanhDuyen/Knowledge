import { helpers } from '../helper/index';

export default class FormView {
    constructor() {
        this.taskForm = document.querySelector(".add-task-container");
        this.btnAdd = document.querySelector(".add-task-btn");
        this.btnCancel = document.querySelector(".btn-cancel");
        this.btnDelete = document.querySelector(".btn-delete");
        this.taskInput = document.querySelector(".task-input");
        this.quantityEst = document.querySelector(".quantity-input");
        this.btnQuantityUp = document.querySelector(".btn-quantity-up");
        this.btnQuantityDown = document.querySelector(".btn-quantity-down");
        this.taskForm.classList.add("hidden");
        this.btnDelete.classList.add("hidden");
    }

    toggleTaskForm() {
        this.btnAdd.addEventListener("click", () => {
            helpers.dom.toggleDisplay(this.taskForm, this.btnAdd);

            const showForm = this.taskForm.classList.contains("hidden");

            if (this.taskInput.value !== "" && showForm) {
                this.showAlert();
            }
        });

        this.btnCancel.addEventListener("click", () => {
            helpers.dom.toggleDisplay(this.taskForm, this.btnAdd);

            const formId = this.taskForm.getAttribute("form-id");

            if (this.taskInput !== "" && formId !== "") {
                this.btnAdd.classList.remove("hidden");
                this.showAlert();
            }
        });
    }

    showAlert() {
        alert("The changes will be lost. Are you sure you want to close it?");
        this.resetInput();
        this.btnAdd.classList.remove("hidden");
    }

    resetInput() {
        this.taskInput.value = "";
        this.quantityEst.value = 1;
        this.clickedTaskId = null;
        this.taskForm.setAttribute("form-id", "");
    }

    controlValue() {
        this.btnQuantityUp.addEventListener("click", () => {
            this.quantityEst.value = parseFloat(this.quantityEst.value) + 1;
        });

        this.btnQuantityDown.addEventListener("click", () => {
            if (this.quantityEst.value > 0) {
                this.quantityEst.value = parseFloat(this.quantityEst.value) - 1;
            }
        });
        return this.quantityEst.value;
    }

    submitTask(handleSubmitTask) {
        this.taskForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const taskNameValue = this.taskInput.value.trim();
            const estPomodoroValue = this.quantityEst.value.trim();
            const taskId = this.taskForm.getAttribute("form-id");

            if (taskNameValue && estPomodoroValue) {
                if (taskId) {
                    handleSubmitTask(
                        true,
                        taskId,
                        taskNameValue,
                        estPomodoroValue
                    );
                    this.taskForm.classList.add("hidden");
                } else {
                    handleSubmitTask(
                        false,
                        null,
                        taskNameValue,
                        estPomodoroValue
                    );
                }
            }

            this.resetInput();
        });
    }

    deleteTask(handleDeleteTask) {
        this.btnDelete.addEventListener("click", () => {
            const taskId = this.taskForm.getAttribute("form-id");

            if (taskId) {
                handleDeleteTask(taskId);
                this.taskForm.classList.add("hidden");
                this.resetInput();
            }
        });
    }

    renderForm(taskData) {
        if (taskData) {
            const taskName = document.querySelector(".task-input");
            const estPomodoro =
                document.querySelector(".quantity-input");
            taskName.value = taskData.taskNameDisplay; //
            estPomodoro.value = taskData.estPomodoro;

            this.taskForm.classList.remove("hidden");
        } else {
            this.taskForm.classList.remove("hidden");
        }
    }
}
