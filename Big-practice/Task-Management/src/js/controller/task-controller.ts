import TaskListModel from '../models/taskList-model';
import CommentListModel from '../models/commentList-model';
import TaskListView from '../views/taskList-view';
import TaskDetailView from '../views/taskDetail-view';
import { TaskModel } from '../models/task-model';

export default class Controller<T> {
  private taskListModel: TaskListModel<TaskModel>;
  private taskListView: TaskListView;
  private taskDetailView: TaskDetailView;
  private commentListModel: CommentListModel;

  constructor(
    taskListModel: TaskListModel<TaskModel>,
    taskListView: TaskListView,
    taskDetailView: TaskDetailView,
    commentListModel: CommentListModel
  ) {
    this.taskListModel = taskListModel;
    this.taskListView = taskListView;
    this.taskDetailView = taskDetailView;
    this.commentListModel = commentListModel;
    this.init();
  }

  private async init() {
    await this.handleShowTask();
    this.handleAddTask();
    this.handleDelete();
    this.handleDragDropBoard();
    this.handleTaskDetail();
    this.handleSearch();
  }

  // Mount(Read): Model -> Controller -> View
  private handleShowTask = async () => {
    const tasks = await this.taskListModel.getTasks();
    this.taskListView.showTasks(tasks);
  };

  // View -> Controller -> Model
  private handleAddTask = () => {
    this.taskListView.bindAddTask((task: string) => {
      return this.taskListModel.addTask(task);
    });
  };

  private handleDelete = () => {
    this.taskListView.bindDelete((id: string) => {
      return this.taskListModel.delete(id);
    });
  };

  private handleDragDropBoard = () => {
    this.taskListView.addBoardEvent(
      async (taskId: string, newStatus: string) => {
        await this.taskListModel.edit(taskId, newStatus);
        return this.taskListModel.getTasks();
      }
    );
  };

  private handleTaskDetail = () => {
    this.taskListView.bindTaskDetail(
      this.handleInitTaskDetailEvent,
      (id: string) => this.taskListModel.find(id),
      // Get all comments based on taskId
      async (taskId: string) => await this.commentListModel.getComment(taskId)
    );
  };

  private handleInitTaskDetailEvent = () => {
    // Edit description handler
    this.handleDescription();
    // Add comment handler
    this.handleAddComment();
    // Delete comment handler
    this.handleDeleteComment();
  };

  private handleDescription = () => {
    this.taskDetailView.bindUpdateTask(async (id: string, updateData: any) => {
      await this.taskListModel.edit(id, updateData);
      return this.taskListModel.find(id);
    });
  };

  private handleAddComment = () => {
    this.taskDetailView.bindComments(
      async (content: string, taskId: string) =>
        await this.commentListModel.addComment(content, taskId)
    );
  };

  private handleDeleteComment = () => {
    this.taskDetailView.deleteComment(
      async (commentId: string) =>
        await this.commentListModel.deleteComment(commentId)
    );
  };

  private handleSearch = () => {
    this.taskListView.bindSearchTask();
  };
}
