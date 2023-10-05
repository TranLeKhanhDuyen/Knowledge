import TimerView from './timer-view';
import FormView from './form-view';

export default class View {
  constructor() {
    this.timerView = new TimerView();
    this.formView = new FormView();
  }
}
