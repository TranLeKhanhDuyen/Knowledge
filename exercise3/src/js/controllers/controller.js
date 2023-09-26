import TimerModel from "../models/model.js";
import TimerView from "../views/view.js";

const TimerController = {
    init() {
        const startBtn = document.getElementById("btn-start");
        const pauseBtn = document.getElementById("btn-pause");
        const resetBtn = document.getElementById("btn-reset");

        startBtn.addEventListener("click", () => {
            TimerModel.startTimer();
            TimerView.toggleStartPauseButtons(false);
        });

        pauseBtn.addEventListener("click", () => {
            TimerModel.pauseTimer();
            TimerView.toggleStartPauseButtons(true);
        });

        resetBtn.addEventListener("click", () => {
            TimerModel.resetTimer();
            TimerView.toggleStartPauseButtons(true);
        });

        TimerView.updateDisplay(TimerModel.minCount, TimerModel.count);
    },
};

export default TimerController;
