export default class Controller {
  constructor(taskListModel, taskItemView, taskDetailView) {
    this.taskListModel = taskListModel;
    this.taskItemView = taskItemView;
    this.taskDetailView = taskDetailView;
    this.init();
  }

  async init() {
    await this.taskItemView.syncTasks();
    this.handleAddTask();
    this.handleDelete();
    this.handleDragDropBoard();
    this.handleTaskDetail();
    this.handleSearch();
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

  handleDelete = () => {
    this.taskItemView.bindDelete(async (id) => {
      try {
        await this.taskListModel.delete(id);
        await this.taskItemView.syncTasks();
        return this.taskItemView.showTaskItem();
      } catch (e) {
        this.showError(e.message);
        console.log(e);
      }
    });
  };

  handleDragDropBoard = () => {
    this.taskItemView.addBoardEvent(async (taskId, newStatus) => {
      const task = await this.taskListModel.edit(taskId, newStatus);
      const tasks = await this.taskListModel.getTask();
      this.taskItemView.revalidateTasks(tasks);
      return task;
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
      try {
        await this.taskListModel.edit(id, updateData);

        return { data: await this.taskListModel.find(id) };
      } catch (e) {
        console.error(e);
      }
    });

    this.taskDetailView.bindComments(async (id, updateData) => {
      await this.taskListModel.edit(id, updateData);

      return await this.taskListModel.find(id);
    });
  };

  handleSearch() {
    this.taskItemView.bindSearchTask(async (searchTerm) => {
      this.taskItemView.searchTasks(searchTerm);
    });
  }
}
