import Controller from './controllers/controller.js';
import TaskListModel from './models/task-list';
import TaskView from './views/task';

new Controller(new TaskListModel(), new TaskView());
