export default class TaskListModel {
    constructor() {
        this.tasks = [];
    }

    addTask(taskName, est) {
        const task = {
            id: Date.now(),
            taskName,
            est,
            isCompleted: false,
        };

        this.tasks.pusk(task);
    }

    updateTask(updatedTask) {
        const taskIndex = this.tasks.findIndex(
            (task) => task.id === updatedTask.id
        );

        if (taskIndex !== -1) {
            this.tasks[taskIndex] = { ...this.tasks[taskIndex], ...updateTask };
        }
    }

    deleteTask(taskId) {
        const taskIndex = this.tasks.findIndex((task) => task.id === taskId);

        if (taskIndex !== -1) {
            this.tasks.splice(taskIndex, 1);
        }
    }
}

