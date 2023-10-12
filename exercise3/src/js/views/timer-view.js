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
        this.time.textContent = `${minutes < 10 ? "0" : ""}${minutes}:${
            seconds < 10 ? "0" : ""
        }${seconds}`;
    }

    defaultTime(count) {
        const minutes = Math.floor(count / 60);
        const seconds = count % 60;
        this.time.textContent = `${minutes < 10 ? "0" : ""}${minutes}:${
            seconds < 10 ? "0" : ""
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

    loadScript(timeNumber) {
        this.timeNumber = timeNumber;
        this.focusBtn.addEventListener("click", () => {
            this.removeFocus();
            this.addFocus();
            this.timeNumber.setTimer("focus");
            this.displayTime(this.timeNumber.count);
            this.timeNumber.paused = true;
            clearInterval(this.timeNumber.set);
            this.showStartOnly();
            this.hideResetButton();
            document.body.style.backgroundColor = "rgb(186, 73, 73)";
        });

        this.defaultTime(this.timeNumber.minCounts.focus);

        this.shortBreakBtn.addEventListener("click", () => {
            this.removeFocus();
            this.addShortBreakFocus();
            this.timeNumber.setTimer("shortbreak");
            this.displayTime(this.timeNumber.count);
            this.timeNumber.paused = true;
            clearInterval(this.timeNumber.set);
            this.showStartOnly();
            this.hideResetButton();
            document.body.style.backgroundColor = "rgb(56, 133, 138)";
        });

        this.longBreakBtn.addEventListener("click", () => {
            this.removeFocus();
            this.addLongBreakFocus();
            this.timeNumber.setTimer("longbreak");
            this.displayTime(this.timeNumber.count);
            this.timeNumber.paused = true;
            clearInterval(this.timeNumber.set);
            this.showStartOnly();
            this.hideResetButton();
            document.body.style.backgroundColor = "rgb(57, 112, 151)";
        });

        this.resetBtn.addEventListener("click", () => {
            this.timeNumber.paused = true;
            clearInterval(this.timeNumber.set);
            this.timeNumber.setTimer(this.timeNumber.active);
            this.displayTime(this.timeNumber.count);
            this.showStartOnly();
            this.hideResetButton();
            this.resetBtn.classList.remove("show");
            this.pauseBtn.classList.remove("show");
            this.startBtn.classList.remove("hide");
            this.startBtn.classList.add("show");
        });

        this.pauseBtn.addEventListener("click", () => {
            this.timeNumber.paused = true;
            clearInterval(this.timeNumber.set);
            this.showStartOnly();
            this.resetBtn.classList.remove("show");
            this.pauseBtn.classList.remove("show");
            this.startBtn.classList.remove("hide");
            this.startBtn.classList.add("show");
        });

        this.startBtn.addEventListener("click", () => {
            this.resetBtn.classList.add("show");
            this.pauseBtn.classList.add("show");
            this.startBtn.classList.add("hide");
            this.startBtn.classList.remove("show");

            if (this.timeNumber.paused) {
                this.timeNumber.paused = false;
                this.displayTime(this.timeNumber.count);
                this.timeNumber.set = setInterval(() => {
                    if (this.timeNumber.count > 0 && !this.timeNumber.paused) {
                        this.timeNumber.count--;
                        this.displayTime(this.timeNumber.count);
                    } else {
                        clearInterval(this.timeNumber.set);
                    }
                }, 1000);
            }
        });
    }
}
