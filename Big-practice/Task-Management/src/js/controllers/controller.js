export default class Controller {
  constructor(taskListModel, taskItemView, taskDetailView) {
    this.taskListModel = taskListModel;
    this.taskItemView = taskItemView;
    this.taskDetailView = taskDetailView;
    this.init();
  }

  async init() {
    this.taskItemView.syncTasks().then(() => {
      this.handleAddTask();
      this.handleDelete();
      this.handleDragDropBoard();
      this.handleTaskDetail();
      this.handleSearchTasks();
    });
    this.handleUpdateTask();
  }

  handleAddTask = () => {
    this.taskItemView.bindAddTask(
      async (task) => {
        return await this.taskListModel.addTask(task);
      },
      async (taskId, newStatus) => {
        return await this.taskListModel.edit(taskId, newStatus);
      }
    );
  };

  handleDragDropBoard = () => {
    this.taskItemView.addBoardEvent(async (taskId, newStatus) => {
      const res = await this.taskListModel.edit(taskId, newStatus);
      const tasks = await this.taskListModel.getTask();
      this.taskItemView.revalidateTasks(tasks);
      return res;
    });
  };

  handleTaskDetail = () => {
    this.taskItemView.bindTaskDetail(this.handleUpdateTask, (id) =>
      this.handleFindTask(id)
    );
  };

  handleFindTask = (id) => {
    return this.taskListModel.find(id);
  };

  handleUpdateTask = () => {
    this.taskDetailView.bindUpdateTask(async (id, updateData) => {
      // data: task list
      try {
        await this.taskListModel.edit(id, updateData);

        return { data: await this.taskListModel.find(id) };
      } catch (e) {
        console.error(e);
      }
    });

    this.taskDetailView.bindComments(async (id, updateData) => {
      // data: task list
      await this.taskListModel.edit(id, updateData);

      return await this.taskListModel.find(id);
    });
  };

  handleDelete = () => {
    this.taskItemView.bindDelete(async (id) => {
      try {
        await this.taskListModel.delete(id);
      } catch (e) {
        this.showError(e.message);
        console.log(e);
      }
    });
  };

  handleSearchTasks() {
    this.taskItemView.bindSearchTasks(async (searchTerm) => {
      const searchTasks = await this.taskListModel.searchTasks(searchTerm);
      this.taskItemView.revalidateTasks(searchTasks);
      this.taskItemView.showTaskItem(this.handleUpdateTask);
    });
  }
}
