import Controller from "./controller/task-controller.js";
import TaskListModel from "./models/taskList-model.js";
import TaskListView from "./views/taskList-view.js";
import TaskDetailView from "./views/taskDetail-view.js";
import CommentListModel from "./models/commentList-model.js";

new Controller(
  new TaskListModel(),
  new TaskListView(),
  new TaskDetailView(),
  new CommentListModel()
);
