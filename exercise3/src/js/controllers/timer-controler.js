export default class TimerController {
    constructor(TimerModel, TimerView) {
        this.timerModel = TimerModel;
        this.timerView = TimerView;
    }

    async initHome() {
        await this.loadTimer();
    }

    async loadTimer() {
        const settime = await this.timerModel.timeNumber();
        this.timerView.loadTimer(settime);
    }
}
