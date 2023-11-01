import Controller from './controllers/controller.js';
import TaskList from './models/task-list';
import TaskView from './views/task';

new Controller(new TaskList(), new TaskView());
