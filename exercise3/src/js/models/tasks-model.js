export default class TaskModel {
    constructor(id, taskText, numberPomodoro) {
        this.id = id;
        this.taskText = taskText;
        this.numberPomodoro = numberPomodoro;
        this.isCompleted = false;
    }
}
