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
    this.handleUpdateTask();
  }

  async handleAddTask() {
    this.taskItemView.bindAddTask(async (task) => {
      return await this.taskListModel.addTask(task);
    });
  }

  async handleTaskDetail() {
    this.taskItemView.bindTaskDetail(this.handleUpdateTask);
  }

  handleUpdateTask = () => {
    console.log("handleUpdateTask this: ", this);
    this.taskDetailView.bindUpdateTask(async (id, updateData) => {
      return await this.taskListModel.edit(id, updateData);
    });
  };
}
