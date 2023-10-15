/** @typedef */

export default class HomeController {
    /** @type { import("../type").TimerModel} */
    timerModel
    /** @type { import("../type").TaskModel} */
    taskModel
    /** @type { import("../type").TaskListModel} */
    taskListModel
    /** @type { import("../type").TimeView} */
    timerView
    /** @type { import("../type").FormView} */
    formView
    /** @type { import("../type").TaskView} */
    taskView

    constructor({ timerModel, taskModel, taskListModel, timerView, formView, taskView }) {
        Object.assign(this, {
            timerModel,
            taskModel,
            taskListModel,
            timerView,
            formView,
            taskView,
        })

        this.init()
    }

    init() {
        this.timerView.bindSetTimer(this.timerModel)
        this.timerView.bindClickActionButton()
        this.formView.bindTaskForm()
        this.formView.bindSubmitTask(this.handleSaveTask)
        this.formView.bindDeleteTask(this.handleDeleteTask)
    }

    handleSaveTask = (isUpdate, taskId, taskNameDisplay = '', est = '') => {
        if (isUpdate) {
            const updatedTask = {
                id: taskId,
                taskNameDisplay,
                est,
            }
            this.taskListModel.updateTask(updatedTask)
        } else {
            this.taskListModel.addTask(taskNameDisplay, est)
        }
        this.taskView.renderTasks(this.taskListModel.tasks, (taskData) => {
            this.formView.renderForm(taskData)
        })
    }

    handleDeleteTask = (taskId) => {
        this.taskListModel.deleteTask(taskId)
        this.taskView.renderTasks(this.taskListModel.tasks)
    }
}
