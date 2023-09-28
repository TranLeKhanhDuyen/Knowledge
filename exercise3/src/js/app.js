import TimerModel from "./models/model.js";
import TimerView from "./views/view.js";
import TimerController from "./controllers/controller.js";

new TimerController(new TimerModel(), new TimerView());
