import TaskModel from "./task.js"
import APITask from "../services/task";

export default class TaskListModel {
  constructor() {
    this.APITask = new APITask();
  }

  async addTask(taskName) {
    if (!taskName) throw new Error("Invalid task data");
    const task = new TaskModel(taskName);
    try {
      return await this.APITask.addTask(task)
    } catch (error) {
      throw new error ('Error ocurred in adding process')
    }
  }
}
