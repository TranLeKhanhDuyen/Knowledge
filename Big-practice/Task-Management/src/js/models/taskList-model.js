import APIService from "../services/service";
import TaskModel from "./task-model";
export default class TaskListModel {
  constructor() {
    this.tasks = [];
    this.apiService = new APIService("/tasks");
  }

  createTask(taskName) {
    const newTask = new TaskModel(taskName);
    this.tasks.push(newTask);
    return newTask;
  }

  async addTask(taskName) {
    try {
      const newTask = this.createTask(taskName);
      return await this.apiService.addItem(newTask);
    } catch (error) {
      throw new Error("Error occurred in adding process");
    }
  }

  getTasks() {
    return this.tasks;
  }

  getTaskById(taskId) {
    return this.tasks.find((task) => task.id === taskId);
  }
}
