import Controller from "./controllers/controller.js";
import TaskListModel from "./models/taskList-model.js";
import TaskItemView from "./views/taskItem-view.js";
import TaskDetailView from "./views/taskDetail-view.js";

new Controller(new TaskListModel(), new TaskItemView(), new TaskDetailView());
