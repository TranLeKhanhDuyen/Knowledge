import Controller from '@js/controller/task-controller.ts';
import TaskListModel from '@js/models/taskList-model.ts';
import TaskListView from '@js/views/taskList-view.ts';
import TaskDetailView from '@js/views/taskDetail-view.ts';
import CommentListModel from '@js/models/commentList-model.ts';

new Controller(
  new TaskListModel(),
  new TaskListView(),
  new TaskDetailView(),
  new CommentListModel()
);
