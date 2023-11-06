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
    const add = await this.taskListModel.addTask();
    this.taskItemView.bindAddTask(add);
  }
}
