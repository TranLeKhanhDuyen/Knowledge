import API from '../services/task';
import { TaskModel, createTaskModel } from './task-model';

export default class TaskListModel<T extends TaskModel> {
  private apiTask: API<T>;
  private tasks: T[];

  constructor() {
    this.apiTask = new API<T>();
    this.tasks = [];
  }

  async getTasks(): Promise<T[]> {
    const response = await this.apiTask.getTask();
    this.tasks = Array.isArray(response.data) ? response.data : [];
    return this.tasks;
  }

  private createTask(taskName: string): T {
    const newTask = createTaskModel(taskName) as T;
    this.tasks.push(newTask);
    return newTask;
  }

  async addTask(taskName: string): Promise<T | undefined | string> {
    const newTask = this.createTask(taskName);
    const response = await this.apiTask.addTask(newTask as T);

    // Assuming data property holds the new task
    return response.data;
  }

  async delete(id: string): Promise<number | undefined> {
    const { status } = await this.apiTask.delete(id);

    if (status !== 200) return;
    return status;
  }

  async find(id: string): Promise<T | undefined> {
    const { status, data } = await this.apiTask.findTask(id);

    if (status !== 200) return;
    return data;
  }

  async edit(id: string, payload: T): Promise<void> {
    const response = await this.apiTask.edit(id, payload);

    if (response.status !== 200) return;
  }
}
