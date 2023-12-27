import API from '../services/task';
import TaskModel from './task-model';

export default class TaskListModel {
  constructor() {
    this.apiTask = new API();
    this.tasks = [];
  }

  showError(errorMessage) {
    console.error(errorMessage);
  }

  async getTasks() {
    const response = await this.apiTask.getTask();
    this.tasks = response.data || [];
    return this.tasks;
  }

  createTask(taskName) {
    const newTask = TaskModel(taskName);
    this.tasks.push(newTask);
    return newTask;
  }

  async addTask(taskName) {
    const newTask = this.createTask(taskName);
    const apiResponse = await this.apiTask.addTask(newTask);

    // Assuming data property holds the new task
    return apiResponse.data;
  }

  async delete(id) {
    const { status } = await this.apiTask.delete(id);

    if (status !== 200) return;
    return status;
  }

  async getTask(taskId) {
    // Call the API to get task detail by ID
    const apiResponse = await this.apiTask.getTask(taskId);

    // Assuming data property holds the task detail
    return apiResponse.data;
  }

  async find(id) {
    const { status, data } = await this.apiTask.findTask(id);

    if (status !== 200) return;
    return data;
  }

  async edit(id, payload) {
    const response = await this.apiTask.edit(id, payload);

    if (response.status !== 200) return;
  }
}
