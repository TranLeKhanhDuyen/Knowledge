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

    loadScript(model) {
        this.model = model;
        this.focusBtn.addEventListener("click", () => {
            this.removeFocus();
            this.addFocus();
            this.model.setTimer("focus");
            this.displayTime(this.model.count);
            this.model.paused = true;
            clearInterval(this.model.set);
            this.showStartOnly();
            this.hideResetButton();
            document.body.style.backgroundColor = "rgb(186, 73, 73)";
        });

        this.defaultTime(this.model.minCounts.focus);

        this.shortBreakBtn.addEventListener("click", () => {
            this.removeFocus();
            this.addShortBreakFocus();
            this.model.setTimer("shortbreak");
            this.displayTime(this.model.count);
            this.model.paused = true;
            clearInterval(this.model.set);
            this.showStartOnly();
            this.hideResetButton();
            document.body.style.backgroundColor = "rgb(56, 133, 198)";
        });

        this.longBreakBtn.addEventListener("click", () => {
            this.removeFocus();
            this.addLongBreakFocus();
            this.model.setTimer("longbreak");
            this.displayTime(this.model.count);
            this.model.paused = true;
            clearInterval(this.model.set);
            this.showStartOnly();
            this.hideResetButton();
            document.body.style.backgroundColor = "rgb(57, 112, 151)";
        });

        this.resetBtn.addEventListener("click", () => {
            this.model.paused = true;
            clearInterval(this.model.set);
            this.model.setTimer(this.model.active);
            this.displayTime(this.model.count);
            this.showStartOnly();
            this.hideResetButton();
            this.resetBtn.classList.remove("show");
            this.pauseBtn.classList.remove("show");
            this.startBtn.classList.remove("hide");
            this.startBtn.classList.add("show");
        });

        this.pauseBtn.addEventListener("click", () => {
            this.model.paused = true;
            clearInterval(this.model.set);
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

            if (this.model.paused) {
                this.model.paused = false;
                this.displayTime(this.model.count);
                this.model.set = setInterval(() => {
                    if (this.model.count > 0 && !this.model.paused) {
                        this.model.count--;
                        this.displayTime(this.model.count);
                    } else {
                        clearInterval(this.model.set);
                    }
                }, 1000);
            }
        });
    }
}
