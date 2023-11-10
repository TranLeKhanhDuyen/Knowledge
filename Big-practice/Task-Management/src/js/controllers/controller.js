export default class Controller {
  constructor(taskListModel, taskItemView) {
    this.taskListModel = taskListModel;
    this.taskItemView = taskItemView;
    this.init();
  }

  init() {
    this.handleAddTask();
    this.handleTaskDetail();
  }

  async handleAddTask() {
    this.taskItemView.bindAddTask(async (task) => {
      return await this.taskListModel.addTask(task);
    });
  }

  async handleTaskDetail() {
    // const detail = await this.taskListModel.getTaskDetail();
    const a = await this.taskListModel.getTaskDetail();
    this.taskItemView.bindTaskDetail(a);
  }
}
// async handleTaskDetail() {
//   this.taskDetailView.bindTaskDetail(async (taskDetail) => {
//     return await this.taskListModel.getDetailTask(taskDetail);
//   });
// }

// this.taskDetailView.bindTaskDetail(async (taskId) => {
//   const taskDetail = await this.taskListModel.getTaskDetail(taskId);
//   console.log("Task Detail:", taskDetail);
// });
