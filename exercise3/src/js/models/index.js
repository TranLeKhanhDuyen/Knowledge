import TimerModel from './timer-model';
import TaskModel from './tasks-model';

export default class Model {
  constructor() {
    this.timerModel = new TimerModel();
    this.taskModel = new TaskModel();
  }
}
