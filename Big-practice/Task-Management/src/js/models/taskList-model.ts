import API from '../services/task';
import { TaskModel, createTaskModel } from './task-model';

export default class TaskListModel<T>{
  private apiTask: API<T>;
  private tasks: TaskModel[];

  constructor() {
    this.apiTask = new API<T>();
    this.tasks = [];
  }

  async getTasks(data: T): Promise<TaskModel[]> {
    const response = await this.apiTask.getTask(data);
    this.tasks = Array.isArray(response.data) ? response.data : [];
    return this.tasks;
  }

  private createTask(taskName: string): TaskModel {
    const newTask = createTaskModel(taskName);
    this.tasks.push(newTask);
    return newTask;
  }

  async addTask(taskName: string): Promise<string> {
    const newTask = this.createTask(taskName);
    const response = await this.apiTask.addTask(newTask);

    // Assuming data property holds the new task
    return response.data;
  }

  async delete(id: string): Promise<number | undefined> {
    const { status } = await this.apiTask.delete(id);

    if (status !== 200) return;
    return status;
  }
  
  async find(id: string): Promise<string | undefined> {
    const { status, data } = await this.apiTask.findTask(id);

    if (status !== 200) return;
    return data;
  }

  async edit(id: string, payload: any): Promise<void> {
    const response = await this.apiTask.edit(id, payload);

    if (response.status !== 200) return;
  }
}
