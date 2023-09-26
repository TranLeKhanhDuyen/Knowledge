import TimerModel from "./models/model.js";
import TimerView from "./views/view.js";
import TimerController from "./controllers/controller.js";

export class App {
    start() {
      const controller = new TimerController(new TimerModel(), new TimerView());
      controller.init();
    }
  }
