const TimerModel = {
    minCount: 24,
    count: 59,
    active: "focus",
    paused: true,

    startTimer() {
        this.paused = false;
        this.updateDisplay();
        this.set = setInterval(() => {
            this.count--;
            this.updateDisplay();
            if (this.count === 0) {
                if (this.minCount !== 0) {
                    this.minCount--;
                    this.count = 60;
                } else {
                    clearInterval(this.set);
                }
            }
        }, 1000);
    },

    pauseTimer() {
        this.paused = true;
        clearInterval(this.set);
    },

    resetTimer() {
        this.pauseTimer();
        switch (this.active) {
            case "long":
                this.minCount = 14;
                break;
            case "short":
                this.minCount = 4;
                break;
            default:
                this.minCount = 24;
                break;
        }
        this.count = 59;
        this.updateDisplay();
    },

    updateDisplay() {
        TimerView.updateDisplay(this.minCount, this.count);
    },
};

export default TimerModel;
