import Controller from './controllers/controller.js';
import TaskListModel from './models/taskList-model.js';
import TaskItemView from './views/taskItem-view.js';

new Controller(new TaskListModel(), new TaskItemView());
