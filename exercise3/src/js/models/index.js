import TimerModel from './timer-model';
import TaskModel from './tasks-model';
import TaskListModel from './tasks-list-model';

export default class Model {
  constructor() {
    this.timerModel = new TimerModel();
    this.taskModel = new TaskModel();
    this.TaskListModel = new TaskListModel();
  }
}
