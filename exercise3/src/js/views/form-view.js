const REASON = {
    CANCEL: "The changes will be lost. Are you sure you want to close it?",
    SAVE: "",
};

export default class FormView {
    constructor() {
        this.taskForm = document.querySelector(".add-task-container");
        this.btnAddTask = document.querySelector(".add-task-btn");
        this.btnCancel = document.querySelector(".btn-cancel");
        this.btnDelete = document.querySelector(".btn-delete");
        this.taskInput = document.querySelector(".task-input");
        this.quantityEst = document.querySelector(".quantity");
        this.btnQuantityUp = document.querySelector(".btn-quantity-up");
        this.btnQuantityDown = document.querySelector(".btn-quantity-down");

        this.taskForm.classList.add("visibility-hidden");
    }

    displayTaskForm(isShow) {
        this.taskForm.classList.toggle("visibility-hidden", !isShow); //  remove hidden => isShow = true
        this.btnAddTask.classList.toggle("hidden", isShow); //  remove hidden => isShow = true
    }

    bindTaskForm() {
        this.btnAddTask.addEventListener("click", () => {
            const btnDelete = document.querySelector(".btn-delete");
            this.displayTaskForm(true);
            btnDelete.classList.add("visibility-hidden");
            if (this.taskInput.value.trim() !== '') {
                this.showAlert()
            }
        });

        this.btnCancel.addEventListener("click", () => {
            this.displayTaskForm(false);

            if (this.taskInput.value.trim() !== "") {
                this.btnAddTask.classList.remove("visibility-hidden");
                this.showAlert();
            }
        });

        this.btnQuantityUp.addEventListener("click", () => {
            this.quantityEst.value = parseFloat(this.quantityEst.value) + 1;
        });

        this.btnQuantityDown.addEventListener("click", () => {
            if (this.quantityEst.value > 0) {
                this.quantityEst.value = parseFloat(this.quantityEst.value) - 1;
            }
        });
    }

    resetInput() {
        this.taskInput.value = "";
        this.quantityEst.value = 1;
        this.clickedTaskId = null;
        this.taskForm.setAttribute("form-id", "");
    }

    bindSubmitTask(handleSubmitTask) {
        this.taskForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const taskNameValue = this.taskInput.value.trim();
            const estPomodoroValue = this.quantityEst.value.trim();
            const taskId = this.taskForm.getAttribute("form-id");

            console.log("taskNameValue:", taskNameValue);
            console.log("estPomodoroValue:", estPomodoroValue);
            console.log("taskId:", taskId);

            if (taskNameValue && estPomodoroValue) {
                if (taskId) {
                    handleSubmitTask(
                        true,
                        taskId,
                        taskNameValue,
                        estPomodoroValue,
                    );
                    this.taskForm.classList.add("visibility-hidden");
                } else {
                    handleSubmitTask(
                        false,
                        null,
                        taskNameValue,
                        estPomodoroValue,
                    );
                }
            }

            this.resetInput();
        });
    }

    bindDeleteTask(handleDeleteTask) {
        this.btnDelete.addEventListener("click", () => {
            const taskId = this.taskForm.getAttribute("form-id");

            if (taskId) {
                handleDeleteTask(taskId);
                this.taskForm.classList.add("visibility-hidden");
                this.resetInput();
            }
        });
    }

    renderForm(taskData) {
        if (taskData) {
            const taskName = document.querySelector(".task-input");
            const estPomodoro = document.querySelector(".quantity");
            const btnDelete = document.querySelector(".btn-delete");

            btnDelete.classList.remove("visibility-hidden");
            taskName.value = taskData.taskNameDisplay;
            estPomodoro.value = taskData.est;

            this.taskForm.classList.remove("visibility-hidden");
        } else {
            this.taskForm.classList.remove("visibility-hidden");
        }
    }

    showAlert(message = REASON.CANCEL) {
        alert(message);
        this.resetInput();
        this.btnAddTask.classList.remove("visibility-hidden");
    }
}
