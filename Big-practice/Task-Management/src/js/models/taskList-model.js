import APITask from "../services/task";
import TaskModel from "./task-model";
export default class TaskListModel {
  constructor() {
    this.tasks = [];
    this.apiTask = new APITask("/tasks");
  }

  createTask(taskName) {
    const newTask = new TaskModel(taskName);
    this.tasks.push(newTask);
    return newTask;
  }

  async addTask(taskName) {
    try {
      const newTask = this.createTask(taskName);
      // return await this.apiTask.addItem(newTask);

      const apiResponse = await this.apiTask.addTask(newTask);

      // Assuming data property holds the new task
      return apiResponse.data;
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
