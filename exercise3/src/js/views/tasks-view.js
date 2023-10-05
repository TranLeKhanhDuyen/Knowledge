export default class FormView {
    constructor() {
        this.taskForm = document.querySelector(".add-task-container");
        this.buttonAdd = document.querySelector(".add-task-button");
        this.buttonCancel = document.querySelector(".button-cancel");
        this.buttonDelete = document.querySelector(".button-delete");
        this.taskInput = document.querySelector(".task-input");
        this.quantityEst = document.querySelector(".quantity-input");

        this.taskForm.classList.add("hidden");
        this.buttonDelete.classList.add("hidden");
    }

    toggleTaskForm() {
        this.btnAdd.addEventListener("click", () => {
            helpers.dom.toggleDisplay(this.taskForm, this.buttonAdd);

            const showForm = this.taskForm.classList.contains("hidden");

            if (this.taskInput.value !== "" && showForm) {
                this.showAlert();
            }
        });

        this.buttonCancel.addEventListener("click", () => {
            helpers.dom.toggleDisplay(this.taskForm, this.buttonAdd);

            const formId = this.taskForm.getAttribute("form-id");

            if (this.taskInput !== "" && formId !== "") {
                this.buttonAdd.classList.remove("hidden");
                this.showAlert();
            }
        });
    }

    showAlert() {
        alert("The changes will be lost. Are you sure you want to close it?");
        this.resetInput();
        this.buttonAdd.classList.remove("hidden");
    }

    resetInput() {
        this.taskInput.value = "";
        this.est.value = 1;
        this.clickedTaskId = null;
    }
}
