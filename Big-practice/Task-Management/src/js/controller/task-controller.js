export default class Controller {
  constructor(taskListModel, taskListView, taskDetailView, commentListModel) {
    this.taskListModel = taskListModel;
    this.taskListView = taskListView;
    this.taskDetailView = taskDetailView;
    this.commentListModel = commentListModel;
    this.init();
  }

  async init() {
    // await this.taskListView.getTasks();
    await this.handleShowTask(); // Block
    // Mount(Read): Model -> Controller -> View
    // CUD: View -> COntroller -> Model
    this.handleAddTask();
    this.handleDelete();
    this.handleDragDropBoard();
    this.handleTaskDetail();
    this.handleSearch();
    // this.handleUpdateTask();
    // this.handeAddComment();
  }

  // Mount(Read): Model -> Controller -> View
  handleShowTask = async () => {
    const tasks = await this.taskListModel.getTasks();
    this.taskListView.showTaskItem(tasks);
  };

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
      await this.taskListModel.delete(id);
      await this.taskListView.getTasks();
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

  handleTaskDetail = () => {
    this.taskListView.bindTaskDetail(
      this.handleInitTaskDetailEvent, // Include events init after render Detail component
      (id) => this.taskListModel.find(id),
      // Get all comments base on taskId
      async (taskId) => this.commentListModel.getComment(taskId)
    );
    // Param 3(get comments): (id) => this.commentModel.get(`localhost:3000/comments?taskId=${id}`)
  };

  handleInitTaskDetailEvent = () => {
    // Edit desciption handler
    this.taskDetailView.bindUpdateTask(this.handleEditAndComment);

    // Edit desciption handler
    this.handeAddComment();

    // Delete
    this.handleDeleteComment();
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

  handleEditAndComment = async (id, updateData) => {
    await this.taskListModel.edit(id, updateData);
    return this.taskListModel.find(id);
  };

  handleSearch = () => {
    this.taskListView.bindSearchTask();
  };
}
