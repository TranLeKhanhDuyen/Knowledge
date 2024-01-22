import API from '@services/task';
import { TaskModel, createTaskModel } from '@models/task-model';

export default class TaskListModel {
  private apiTask: API<TaskModel>;
  private tasks: TaskModel[];

  constructor() {
    this.apiTask = new API<TaskModel>();
    this.tasks = [];
  }

  async getTasks(): Promise<TaskModel[]> {
    const response = await this.apiTask.getTask();
    this.tasks = Array.isArray(response.data) ? response.data : [];
    return this.tasks;
  }

  private createTask(taskName: string): TaskModel {
    const newTask = createTaskModel(taskName);
    this.tasks.push(newTask);
    return newTask;
  }

  async addTask(taskName: string): Promise<TaskModel | undefined> {
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

  async find(id: string): Promise<TaskModel | undefined> {
    const { status, data } = await this.apiTask.findTask(id);

    if (status !== 200) return;
    return data;
  }

  async edit(id: string, payload: TaskModel): Promise<void> {
    const response = await this.apiTask.edit(id, payload);

    if (response.status !== 200) return;
  }
}
