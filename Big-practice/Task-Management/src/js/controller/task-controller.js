export default class Controller {
  constructor(taskListModel, taskListView, taskDetailView, commentListModel) {
    this.taskListModel = taskListModel;
    this.taskListView = taskListView;
    this.taskDetailView = taskDetailView;
    this.commentListModel = commentListModel;
    this.init();
  }

  async init() {
    await this.handleShowTask();
    this.handleAddTask();
    this.handleDelete();
    this.handleDragDropBoard();
    this.handleTaskDetail();
    this.handleSearch();
  }

  // Mount(Read): Model -> Controller -> View
  handleShowTask = async () => {
    const tasks = await this.taskListModel.getTasks();
    this.taskListView.showTaskItem(tasks);
  };

  //View -> Controller -> Model
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
      return await this.taskListModel.delete(id);
    });
  };

  handleDragDropBoard = () => {
    this.taskListView.addBoardEvent(async (taskId, newStatus) => {
      const task = await this.taskListModel.edit(taskId, newStatus);
      this.taskListModel.getTask(task);
    });
  };

  handleTaskDetail = () => {
    this.taskListView.bindTaskDetail(
      this.handleInitTaskDetailEvent,
      (id) => this.taskListModel.find(id),
      // Get all comments base on taskId
      async (taskId) => this.commentListModel.getComment(taskId)
    );
  };

  handleInitTaskDetailEvent = () => {
    // Edit desciption handler
    this.handleDescription();
    // Edit desciption handler
    this.handeAddComment();
    // Delete
    this.handleDeleteComment();
  };

  handleDescription = () => {
    this.taskDetailView.bindUpdateTask(async (id, updateData) => {
      await this.taskListModel.edit(id, updateData);
      return this.taskListModel.find(id);
    });
  };

  handeAddComment = () => {
    this.taskDetailView.bindComments(async (content, taskId) =>
      this.commentListModel.addComment(content, taskId)
    );
  };

  handleDeleteComment = () => {
    this.taskDetailView.deleteComment(async (commentId) =>
      this.commentListModel.deleteComment(commentId)
    );
  };

  handleSearch = () => {
    this.taskListView.bindSearchTask();
  };
}
