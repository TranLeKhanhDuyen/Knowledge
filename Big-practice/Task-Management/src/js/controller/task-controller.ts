import { TaskModel } from './../models/task-model';
import TaskListModel from '../models/taskList-model';
import CommentListModel from '../models/commentList-model';
import TaskListView from '../views/taskList-view';
import TaskDetailView from '../views/taskDetail-view';

export default class Controller {
  private taskListModel: TaskListModel;
  private taskListView: TaskListView;
  private taskDetailView: TaskDetailView;
  private commentListModel: CommentListModel;

  constructor(
    taskListModel: TaskListModel,
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

  private async init(): Promise<void> {
    await this.handleShowTask();
    this.handleAddTask();
    this.handleDelete();
    this.handleDragDropBoard();
    this.handleTaskDetail();
    this.handleSearch();
  }

  // Mount(Read): Model -> Controller -> View
  private handleShowTask = async (): Promise<void> => {
    const tasks = await this.taskListModel.getTasks();
    this.taskListView.showTasks(tasks);
  };

  // View -> Controller -> Model
  private handleAddTask = (): void => {
    this.taskListView.bindAddTask((task: string) => {
      return this.taskListModel.addTask(task);
    });
  };

  private handleDelete = (): void => {
    this.taskListView.bindDelete((id: string) => {
      return this.taskListModel.delete(id);
    });
  };

  private handleDragDropBoard = (): void => {
    this.taskListView.addBoardEvent(
      async (taskId: string,  newStatus: { status: string }) => {
        await this.taskListModel.edit(taskId, newStatus);
        return this.taskListModel.getTasks();
      }
    );
  };

  private handleTaskDetail = (): void => {
    this.taskListView.bindTaskDetail(
      this.handleInitTaskDetailEvent,
      (id: string) => this.taskListModel.find(id),
      // Get all comments based on taskId
      async (taskId: string) => await this.commentListModel.getComment(taskId)
    );
  };

  private handleInitTaskDetailEvent = (): void => {
    // Edit description handler
    this.handleDescription();
    // Add comment handler
    this.handleAddComment();
    // Delete comment handler
    this.handleDeleteComment();
  };

  private handleDescription = (): void => {
    this.taskDetailView.bindUpdateTask(async (id: string, updateData: TaskModel) => {
      await this.taskListModel.edit(id, updateData);
      return this.taskListModel.find(id);
    });
  };

  private handleAddComment = (): void => {
    this.taskDetailView.bindComments(
      async (content: string, taskId: string) =>
        await this.commentListModel.addComment(content, taskId)
    );
  };

  private handleDeleteComment = (): void => {
    this.taskDetailView.deleteComment(
      async (commentId: string) =>
        await this.commentListModel.deleteComment(commentId)
    );
  };

  private handleSearch = (): void => {
    this.taskListView.bindSearchTask();
  };
}
