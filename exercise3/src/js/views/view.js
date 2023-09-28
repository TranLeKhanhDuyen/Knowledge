export default class View {
    constructor(controller) {
        this.controller = controller;
        this.focusButton = document.getElementById("focus");
        this.shortBreakButton = document.getElementById("shortbreak");
        this.longBreakButton = document.getElementById("longbreak");
        this.startBtn = document.getElementById("btn-start");
        this.resetButton = document.getElementById("btn-reset");
        this.pauseButton = document.getElementById("btn-pause");
        this.time = document.getElementById("time");

        this.initEventListeners();
    }

    initEventListeners() {
        this.resetButton.addEventListener("click", () => {
            this.controller.handleReset();
        });
    }
    
    appendZero(value) {
        return value < 10 ? `0${value}` : value;
    }

    displayTime(minCount, count) {
        const timeElement = document.getElementById('time');
        const formattedMinCount = this.appendZero(minCount);
        const formattedCount = this.appendZero(count);
        timeElement.textContent = `${formattedMinCount}:${formattedCount}`;
    }
}
