import APIService from "../services/service";
import TaskModel from "./task-model";
export default class TaskListModel {
  constructor() {
    this.tasks = [];
    this.apiService = new APIService("/tasks");
  }

  createTask(taskName) {
    const newTask = new TaskModel(taskName);
    const taskData = {
      // id: Math.random(),
      taskName: newTask.taskName,
      createDate: newTask.createdDate,
      dueDate: newTask.dueDate,
      description: "TODO: Fix me",
    };
    this.tasks.push(taskData);
    return taskData;
  }

  async addTask(taskName) {
    try {
      const newTask = this.createTask(taskName);
      console.log('Call me');
      return await this.apiService.addItem(newTask);
      // const addedTask = await this.apiService.addItem(newTask);
      // return addedTask;
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

  // deleteTask(taskId) {
  //   this.tasks = this.tasks.filter((task) => task.id !== taskId);
  //   Storage.setData("tasks", this.tasks);
  // }
}
