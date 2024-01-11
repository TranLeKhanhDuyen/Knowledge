import Controller from './controller/task-controller.ts';
import TaskListModel from './models/taskList-model.ts';
import TaskListView from './views/taskList-view.ts';
import TaskDetailView from './views/taskDetail-view.ts';
import CommentListModel from './models/commentList-model.ts';

new Controller(
  new TaskListModel(),
  new TaskListView(),
  new TaskDetailView(),
  new CommentListModel()
);
