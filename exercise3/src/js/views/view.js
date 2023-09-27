import TimerView from "../models/model.js";

const TimerView = {
    updateDisplay(minCount, count) {
        const timeElement = document.getElementById("time");
        timeElement.textContent = `${appendZero(minCount)}:${appendZero(
            count
        )}`;
    },

    toggleStartPauseButtons(showStart) {
        const startBtn = document.getElementById("btn-start");
        const pauseBtn = document.getElementById("btn-pause");
        if (showStart) {
            startBtn.classList.remove("hide");
            startBtn.classList.add("show");
            pauseBtn.classList.remove("show");
            pauseBtn.classList.add("hide");
        } else {
            startBtn.classList.remove("show");
            startBtn.classList.add("hide");
            pauseBtn.classList.remove("hide");
            pauseBtn.classList.add("show");
        }
    },
};

export default TimerView;
