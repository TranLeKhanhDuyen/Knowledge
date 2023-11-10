export default class Controller {
  constructor(taskListModel, taskItemView, taskDetailView) {
    this.taskListModel = taskListModel;
    this.taskItemView = taskItemView;
    this.taskDetailView = taskDetailView;
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
    this.taskItemView.bindTaskDetail(async (taskDetail) => {
      return await this.taskListModel.getTask(taskDetail);
    });
  }
}
