import APITask from "../services/task";
import TaskModel from "./task-model";
import { ERROR_MESSAGE } from "../constants/message";

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

  async getTask(taskId) {
    try {
      // Call the API to get task detail by ID
      const apiResponse = await this.apiTask.getTask(taskId);

      // Assuming data property holds the task detail
      return apiResponse.data;
    } catch (error) {
      throw new Error("Error occurred in getting task detail");
    }
  }

  async find(id) {
    try {
      const { status, data } = await this.apiTask.find(id);

      if (status !== 200) return this.showError("vvvv");
      return data;
    } catch (error) {
      return this.showError("Vvv");
    }
  }

  async edit(id, updateData) {
    try {
      const { status } = await this.apiTask.edit(id, updateData);

      if (status !== 200) return this.showError(ERROR_MESSAGE[status]);
      return status;
    } catch (error) {
      return this.showError(ERROR_MESSAGE).SERVER_ERROR;
    }
  }
}
