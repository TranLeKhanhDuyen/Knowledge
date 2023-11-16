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

  handleAddTask = async () => {
    this.taskItemView.bindAddTask(async (task) => {
      return this.taskListModel.addTask(task);
    });
  };

  handleTaskDetail = async () => {
    this.taskItemView.bindTaskDetail(this.handleUpdateTask, (id) =>
      this.handleFindTask(id)
    );
  };

  handleFindTask = async (id) => {
    return this.taskListModel.find(id);
  };

  handleUpdateTask = async () => {
    this.taskDetailView.bindUpdateTask(async (id, updateData) => {
      return this.taskListModel.edit(id, updateData);
    });
  };
}
