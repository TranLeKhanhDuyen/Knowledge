export default class TimerModel {
    constructor() {
        this.count = 25 * 60
        this.active = 'focus'
        this.minCounts = {
            focus: 25 * 60,
            shortbreak: 5 * 60,
            longbreak: 15 * 60,
        }
        this.paused = true
    }

    setTimer(mode) {
        // set countdown time: focus, short, long
        this.count = this.minCounts[mode]
        this.active = mode
    }
}
