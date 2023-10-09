export default class Controller {
    constructor(model, view) {
        this.model = model;
        this.view = view;
        this.taskListModel = this.model.taskListModel;
        this.view.focusBtn.addEventListener("click", () => {
            this.view.removeFocus();
            this.view.addFocus();
            this.model.setTimer("focus");
            this.view.displayTime(this.model.count);
            this.model.paused = true;
            clearInterval(this.model.set);
            this.view.showStartOnly();
            this.view.hideResetButton();
        });

        this.view.defaultTime(this.model.minCounts.focus);

        this.view.shortBreakBtn.addEventListener("click", () => {
            this.view.removeFocus();
            this.view.addShortBreakFocus();
            this.model.setTimer("shortbreak");
            this.view.displayTime(this.model.count);
            this.model.paused = true;
            clearInterval(this.model.set);
            this.view.showStartOnly();
            this.view.hideResetButton();
        });

        this.view.longBreakBtn.addEventListener("click", () => {
            this.view.removeFocus();
            this.view.addLongBreakFocus();
            this.model.setTimer("longbreak");
            this.view.displayTime(this.model.count);
            this.model.paused = true;
            clearInterval(this.model.set);
            this.view.showStartOnly();
            this.view.hideResetButton();
        });

        this.view.resetBtn.addEventListener("click", () => {
            this.model.paused = true;
            clearInterval(this.model.set);
            this.model.setTimer(this.model.active);
            this.view.displayTime(this.model.count);
            this.view.showStartOnly();
            this.view.hideResetButton();
            this.view.resetBtn.classList.remove("show");
            this.view.pauseBtn.classList.remove("show");
            this.view.startBtn.classList.remove("hide");
            this.view.startBtn.classList.add("show");
        });

        this.view.pauseBtn.addEventListener("click", () => {
            this.model.paused = true;
            clearInterval(this.model.set);
            this.view.showStartOnly();
            this.view.resetBtn.classList.remove("show");
            this.view.pauseBtn.classList.remove("show");
            this.view.startBtn.classList.remove("hide");
            this.view.startBtn.classList.add("show");
        });

        this.view.startBtn.addEventListener("click", () => {
            this.view.resetBtn.classList.add("show");
            this.view.pauseBtn.classList.add("show");
            this.view.startBtn.classList.add("hide");
            this.view.startBtn.classList.remove("show");

            if (this.model.paused) {
                this.model.paused = false;
                this.view.displayTime(this.model.count);
                this.model.set = setInterval(() => {
                    if (this.model.count > 0 && !this.model.paused) {
                        this.model.count--;
                        this.view.displayTime(this.model.count);
                    } else {
                        clearInterval(this.model.set);
                    }
                }, 1000);
            }
        });
    }

    initFormView() {
        this.view.timerView.handleSwitchMode();
        this.view.formView.toggleTaskForm();
        this.view.formView.submitTask(this.handleSubmitTask.bind(this));
        this.view.formView.controlValue();
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

    // Handle the submission of a task.
    handleSubmitTask(isUpdate, taskId, taskName = "", est = "") {
        // If it's an update, create an updated task object.
        if (isUpdate) {
            const updatedTask = {
                id: taskId,
                taskName,
                est,
            };
            this.taskListModel.updateTask(updatedTask);
        } else {
            this.taskListModel.addTask(taskName, est);
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
