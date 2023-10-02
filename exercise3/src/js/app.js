import TimerModel from "./models/timer-model.js";
import TimerView from "./views/timer-view.js";
import TimerController from "./controllers/timer-controller.js";

new TimerController(new TimerModel(), new TimerView());
