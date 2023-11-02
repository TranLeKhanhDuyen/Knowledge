// import TaskModel from "./task.js"
// import APITask from "../services/task";

// export default class TaskListModel {
//   constructor() {
//     this.APITask = new APITask();
//   }

//   async addTask(taskName) {
//     if (!taskName) throw new Error("Invalid task data");
//     const task = new TaskModel(taskName);
//     try {
//       return await this.APITask.addTask(task)
//     } catch (error) {
//       throw new error;
//     }
//   }
// }

export default class TaskListModel {
  constructor() {
    this.tasks = [];
  }

  addTask(taskNameDisplay) {
    const task = {
      id: window.crypto.randomUUID(),
      taskNameDisplay,
    };

    this.tasks.push(task);
  }

  updateTask(updatedTask) {
    const taskIndex = this.tasks.findIndex(
      (task) => task.id === updatedTask.id
    );

    if (taskIndex !== -1) {
      this.tasks[taskIndex] = { ...this.tasks[taskIndex], ...updatedTask }; //creates a new copy of the task object found at taskIndex
    }
  }

  deleteTask(taskId) {
    const taskIndex = this.tasks.findIndex((task) => task.id === taskId);

    if (taskIndex !== -1) {
      this.tasks.splice(taskIndex, 1);
    }
  }
}
