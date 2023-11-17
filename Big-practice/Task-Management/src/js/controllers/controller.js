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
    this.handleComments();
  }

  handleAddTask = () => {
    this.taskItemView.bindAddTask(async (task) => {
      return this.taskListModel.addTask(task);
    });
  };

  handleTaskDetail = () => {
    this.taskItemView.bindTaskDetail(this.handleUpdateTask, (id) =>
      this.handleFindTask(id)
    );
    this.taskDetailView.bindComments(this.handleComments, (id) =>
    this.handleFindTask(id))
  };

  handleFindTask = (id) => {
    return this.taskListModel.find(id);
  };

  handleUpdateTask = () => {
    this.taskDetailView.bindUpdateTask((id, updateData) => {
      return this.taskListModel.edit(id, updateData);
    });
  };

  handleComments = () => {
    this.taskDetailView.bindComments((id, updateData) => {
      return this.taskListModel.edit(id, updateData);
    });
  };
}
