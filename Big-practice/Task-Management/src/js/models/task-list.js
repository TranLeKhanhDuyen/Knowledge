export default class TaskListModel {
  constructor() {
    this.tasks = [];
  }

  addTask(task) {
    this.tasks.push(task);
    Storage.setData("tasks", this.tasks);
  }

  getTasks() {
    return this.tasks;
  }

  getTaskById(taskId) {
    return this.tasks.find((task) => task.id === taskId);
  }

  deleteTask(taskId) {
    this.tasks = this.tasks.filter((task) => task.id !== taskId);
    Storage.setData("tasks", this.tasks);
  }
}
