import Controller from "./controller/controller.js";
import TaskListModel from "./models/taskList-model.js";
import TaskListView from "./views/taskList-view.js";
import TaskDetailView from "./views/taskDetail-view.js";

new Controller(new TaskListModel(), new TaskListView(), new TaskDetailView());
