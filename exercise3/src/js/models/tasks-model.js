export default class TaskModel {
    constructor() {
        this.tasks = [
            { id: 1, text: "abc", complete: false },
            { id: 2, text: "cde", complete: false },
        ];
    }

    getTasks() {
        return this.tasks;
    }

    addTask(taskText) {
        const task = {
            id:
                this.tasks.length > 0
                    ? this.tasks[this.tasks.length - 1].id + 1
                    : 1,
            text: taskText,
            complete: false,
        };
        this.tasks.push(task);
        console.log("Tasks updated:", this.tasks);
    }
    
    editTask(id, updateTask) {
        this.tasks = this.tasks.map((task) =>
            task.id === id
                ? { id: task.id, text: updateTask, complete: task.complete }
                : task
        );
    }

    deleteTask(id) {
        this.tasks = this.tasks.filter((task) => task.id !== id);
    }

    toggleTask(id) {
        this.tasks = this.tasks.map((task) =>
            task.id === id
                ? { id: task.id, text: task.text, complete: !task.complete }
                : todo
        );
    }
}
