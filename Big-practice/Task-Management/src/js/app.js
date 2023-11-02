import Controller from './controllers/controller.js';
import TaskListModel from './models/task-list';
import TaskItemView from './views/taskItem.js';

new Controller(new TaskListModel(), new TaskItemView());
