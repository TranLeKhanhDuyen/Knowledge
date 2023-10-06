import TaskModel from "../models/tasks-model";
import TaskView from "../views/tasks-view";

export default class TaskController {
    constructor() {
        this.model = new TaskModel();
        this.view = new TaskView();

        this.view.addBtn.addEventListener("click", () =>
            this.view.showTaskForm()
        );
        this.view.saveBtn.addEventListener("click", () =>
            this.handleSaveTask()
        );
        this.view.cancelBtn.addEventListener("click", () =>
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
