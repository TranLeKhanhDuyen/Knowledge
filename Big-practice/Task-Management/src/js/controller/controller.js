export default class Controller {
  constructor(taskListModel, taskListView, taskDetailView) {
    this.taskListModel = taskListModel;
    this.taskListView = taskListView;
    this.taskDetailView = taskDetailView;
    this.init();
  }

  async init() {
    await this.taskListView.syncTasks();
    this.handleAddTask();
    this.handleDelete();
    this.handleDragDropBoard();
    this.handleTaskDetail();
    this.handleSearch();
    this.handleUpdateTask();
  }

  handleAddTask = () => {
    this.taskListView.bindAddTask(
      async (task) => {
        return await this.taskListModel.addTask(task);
      },
      async (taskId, newStatus) => {
        return await this.taskListModel.edit(taskId, newStatus);
      }
    );
  };

  handleDelete = () => {
    this.taskListView.bindDelete(async (id) => {
      try {
        await this.taskListModel.delete(id);
        await this.taskListView.syncTasks();
        return this.taskListView.showTaskItem();
      } catch (e) {
        this.showError(e.message);
      }
    });
  };

  handleDragDropBoard = () => {
    this.taskListView.addBoardEvent(async (taskId, newStatus) => {
      const task = await this.taskListModel.edit(taskId, newStatus);
      const tasks = await this.taskListModel.getTask();
      this.taskListView.revalidateTasks(tasks);
      return task;
    });
  };

  handleTaskDetail() {
    this.taskListView.bindTaskDetail(this.handleUpdateTask, (id) =>
      this.taskListModel.find(id)
    );
  }

  handleUpdateTask = () => {
    this.taskDetailView.bindUpdateTask(this.handleEditAndComment);
    this.taskDetailView.bindComments(this.handleEditAndComment);
  };

  handleEditAndComment = async (id, updateData) => {
    await this.taskListModel.edit(id, updateData);
    return this.taskListModel.find(id);
  };

  handleSearch() {
    this.taskListView.bindSearchTask(async (searchTerm) => {
      this.taskListView.searchTasks(searchTerm);
    });
  }
}
