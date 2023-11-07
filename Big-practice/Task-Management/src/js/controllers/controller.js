export default class Controller {
  constructor(taskListModel, taskItemView) {
    this.taskListModel = taskListModel;
    this.taskItemView = taskItemView;

    this.init();
  }

  init() {
    this.handleAddTask();
  }

  async handleAddTask() {
    this.taskItemView.bindAddTask(async (task) => {
      return await this.taskListModel.addTask(task);
    });
  }
}
