export default class Controller {
    /** @type  {Model} */
    model;
    /** @type  {View} */
    view;

    constructor(model, view) {
        this.model = model;
        this.view = view;
        // this.taskListModel = this.model.taskListModel;
        // this.view.timerView.loadScript(this.model.timerModel);
    }

    initFormView() {
        this.view.formView.toggleTaskForm();
        this.view.formView.submitTask(this.handleSubmitTask.bind(this));
        this.view.formView.controlValue(); //
    }

    initTaskView() {
        if (this.taskListModel.tasks.length > 0) {
            this.view.taskView.renderTasks(
                this.taskListModel.tasks,
                this.handleRenderForm.bind(this)
            );
            this.view.formView.deleteTask(this.handleDeleteTask.bind(this));
        }
    }

    handleSubmitTask(isUpdate, taskId, taskNameDisplay = "", est = "") {
        if (isUpdate) {
            const updatedTask = {
                id: taskId,
                taskNameDisplay,
                est,
            };
            this.taskListModel.updateTask(updatedTask);
        } else {
            this.taskListModel.addTask(taskNameDisplay, est);
        }
        this.view.taskView.renderTasks(this.taskListModel.tasks);
        this.initTaskView();
    }

    handleRenderForm(taskData) {
        const tasksData = taskData;
        this.view.formView.renderForm(tasksData);
    }

    handleDeleteTask(taskId) {
        this.taskListModel.deleteTask(taskId);
        this.view.taskView.renderTasks(this.taskListModel.tasks);
    }

    initHome() {
        this.initFormView();
        this.initTaskView();
    }
}
