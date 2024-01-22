import Controller from '@controller/task-controller';
import TaskListModel from '@models/taskList-model';
import TaskListView from '@views/taskList-view';
import TaskDetailView from '@views/taskDetail-view';
import CommentListModel from '@models/commentList-model';

new Controller(
  new TaskListModel(),
  new TaskListView(),
  new TaskDetailView(),
  new CommentListModel()
);
