export default class TaskListModel {
    constructor() {
        this.tasks = []
    }

    addTask(taskNameDisplay, est) {
        const task = {
            id: window.crypto.randomUUID(),
            taskNameDisplay,
            est,
        }

        this.tasks.push(task)
    }

    updateTask(updatedTask) {
        const taskIndex = this.tasks.findIndex((task) => task.id === updatedTask.id)

        if (taskIndex !== -1) {
            this.tasks[taskIndex] = { ...this.tasks[taskIndex], ...updatedTask } //creates a new copy of the task object found at taskIndex
        }
    }

    deleteTask(taskId) {
        const taskIndex = this.tasks.findIndex((task) => task.id === taskId)

        if (taskIndex !== -1) {
            this.tasks.splice(taskIndex, 1)
        }
    }
}
