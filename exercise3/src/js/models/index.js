import TimerModel from './timer-model';
import TaskModel from './tasks-model';
import TaskListModel from './task-list-model';

export default class Model {
    /** @type {TimerModel} */
    timerModel
    /** @type {TaskModel} */
    taskModel
    /** @type {TaskListModel} */
    taskListModel


  constructor() {
    this.timerModel = new TimerModel();
    this.taskModel = new TaskModel();
    this.taskListModel = new TaskListModel();
  }
}
