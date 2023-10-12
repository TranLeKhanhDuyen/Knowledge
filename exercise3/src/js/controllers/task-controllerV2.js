export default class TaskControllerV2 {
    constructor(taskView, formView, taskListModel) {
        this.taskView = taskView;
        this.formView = formView;
        this.taskListModel = taskListModel;
    }

    initFormView() {
        this.formView.toggleTaskForm();
        this.formView.submitTask(this.handleSubmitTask.bind(this));
        this.formView.controlValue();
    }

    initTaskView() {
        if (this.taskListModel.tasks.length > 0) {
            this.taskView.renderTasks(
                this.taskListModel.tasks,
                this.handleRenderForm.bind(this)
            );
            this.formView.deleteTask(this.handleDeleteTask.bind(this));
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
        this.taskView.renderTasks(this.taskListModel.tasks);
        this.initTaskView();
    }

    handleRenderForm(taskData) {
        const tasksData = taskData;
        this.formView.renderForm(tasksData);
    }

    handleDeleteTask(taskId) {
        this.taskListModel.deleteTask(taskId);
        this.taskView.renderTasks(this.taskListModel.tasks);
    }

    initHome() {
        this.initFormView();
        this.initTaskView();
    }
}
