export default class FormView {
    constructor() {
        this.taskForm = document.querySelector(".add-task-container");
        this.btnAdd = document.querySelector(".add-task-btn");
        this.btnCancel = document.querySelector(".btn-cancel");
        this.btnDelete = document.querySelector(".btn-delete");
        this.taskInput = document.querySelector(".task-input");
        this.quantityEst = document.querySelector(".quantity-input");

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

}
