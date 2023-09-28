export default class TimerModel {
    constructor() {
        this.count = 25 * 60;
        this.set = null;
        this.active = "focus";
        this.minCounts = {
            focus: 25 * 60,
            shortbreak: 5 * 60,
            longbreak: 15 * 60,
        };
        this.paused = true;
    }
    setTimer(mode) {
        this.count = this.minCounts[mode];
        this.active = mode;
    }
    setPaused(paused) {
        this.paused = paused;
    }
}
