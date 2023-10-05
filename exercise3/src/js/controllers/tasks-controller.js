import TaskModel from "../models/tasks-model";
import TaskView from "../views/tasks-view";

export default class TaskController {
    constructor() {
        this.model = new TaskModel();
        this.view = new TaskView();

        this.view.addButton.addEventListener("click", () =>
            this.view.showTaskForm()
        );
        this.view.saveButton.addEventListener("click", () =>
            this.handleSaveTask()
        );
        this.view.cancelButton.addEventListener("click", () =>
            this.handleCancel()
        );
    }

    handleSaveTask() {
        const taskText = this.view.getTaskInputValue();
        const est = this.view.getEstInputValue();

        if (taskText.trim() !== "") {
            this.model.addTask(taskText, est);
            this.view.hideTaskForm();
        }
    }

    handleCancel() {
        this.view.hideTaskForm();
    }
}
