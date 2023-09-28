export default class TimerView {
    constructor() {
        this.time = document.getElementById("time");
        this.startBtn = document.getElementById("btn-start");
        this.resetBtn = document.getElementById("btn-reset");
        this.pauseBtn = document.getElementById("btn-pause");
        this.focusBtn = document.getElementById("focus");
        this.shortBreakBtn = document.getElementById("shortbreak");
        this.longBreakBtn = document.getElementById("longbreak");
    }
    displayTime(count) {
        const minutes = Math.floor(count / 60);
        const seconds = count % 60;
        this.time.textContent = `${minutes < 10 ? "0" : ""}${minutes}:${
            seconds < 10 ? "0" : ""
        }${seconds}`;
    }
    showPauseOnly() {
        this.startBtn.classList.add("hide");
        this.pauseBtn.classList.add("show");
        this.resetBtn.classList.remove("show");
    }
}
