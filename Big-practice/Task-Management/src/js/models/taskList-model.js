import APITask from "../services/task";
import TaskModel from "./task-model";
import { ERROR_CODE } from "../constants/message";
import { ERROR_MESSAGE } from "../constants/message";

export default class TaskListModel {
  constructor() {
    this.apiTask = new APITask();
    this.tasks = [];
  }

  bindError(callback) {
    this.showError = callback;
  }

  createTask(taskName) {
    const newTask = new TaskModel(taskName);
    this.tasks.push(newTask);
    return newTask;
  }

  async addTask(taskName) {
    try {
      const newTask = this.createTask(taskName);
      const apiResponse = await this.apiTask.addTask(newTask);

      // Assuming data property holds the new task
      return apiResponse.data;
    } catch (error) {
      return this.showError(ERROR_MESSAGE.ADD_FAIL);
    }
  }

  async delete(id) {
    try {
      const { status } = await this.apiTask.delete(id);

      if (status !== 200) return this.showError(ERROR_CODE[status]);
      return status;
    } catch (error) {
      return this.showError(ERROR_MESSAGE.SERVER_ERROR);
    }
  }

  async getTask(taskId) {
    try {
      // Call the API to get task detail by ID
      const apiResponse = await this.apiTask.getTask(taskId);

      // Assuming data property holds the task detail
      return apiResponse.data;
    } catch (error) {
      return this.showError(ERROR_MESSAGE.SERVER_ERROR);
    }
  }

  async find(id) {
    try {
      const { status, data } = await this.apiTask.findTask(id);

      if (status !== 200) return this.showError(ERROR_CODE[status]);
      return data;
    } catch (error) {
      return this.showError(ERROR_MESSAGE.SERVER_ERROR);
    }
  }

  async edit(id, payload) {
    try {
      const response = await this.apiTask.edit(id, payload);

      if (response.status !== 200)
        return this.showError(ERROR_CODE[response.status]);
    } catch (error) {
      return this.showError(ERROR_MESSAGE.ADD_FAIL);
    }
  }
}
