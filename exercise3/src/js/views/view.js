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
        const minutes = Math.floor(count / 60); //update display time based on the count
        const seconds = count % 60;
        this.time.textContent = `${minutes < 10 ? "0" : ""}${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
    }

    defaultTime(count) {
        const minutes = Math.floor(count / 60);
        const seconds = count % 60;
        this.time.textContent = `${minutes < 10 ? "0" : ""}${minutes}:${seconds < 10 ? "0" : ""
        }${seconds}`;
    }

    showStartOnly() {
        this.startBtn.classList.add("hide");
        this.pauseBtn.classList.remove("show");
        this.resetBtn.classList.remove("show");
    }

    showPauseOnly() {
        this.startBtn.classList.add("hide");
        this.pauseBtn.classList.add("show");
        this.resetBtn.classList.remove("show");
    }

    showResetButton() {
        this.resetBtn.classList.add("show");
    }

    hideResetButton() {
        this.resetBtn.classList.remove("show");
    }

    removeFocus() {
        this.focusBtn.classList.remove("btn-focus");
        this.shortBreakBtn.classList.remove("btn-focus");
        this.longBreakBtn.classList.remove("btn-focus");
    }

    addFocus() {
        this.focusBtn.classList.add("btn-focus");
    }

    addShortBreakFocus() {
        this.shortBreakBtn.classList.add("btn-focus");
    }

    addLongBreakFocus() {
        this.longBreakBtn.classList.add("btn-focus");
    }
}
