export default class TimerController {
    constructor(model, view) {
        this.model = model;
        this.view = view;
        this.view.focusBtn.addEventListener("click", () => {
            this.view.removeFocus();
            this.view.addFocus();
            this.model.setTimer('focus');
            this.view.displayTime(this.model.count);
            this.model.paused = true;
            clearInterval(this.model.set);
            this.view.showStartOnly();
            this.view.hideResetButton();
        });
    }
}
