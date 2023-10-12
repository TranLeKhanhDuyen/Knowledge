import TimerController from "./timer-controler";
import TaskController from "./task-controller";

export default class Controller {
    constructor() {
        const timerController = new TimerController();
        timerController.initHome();

        const taskController = new TaskController();
        taskController.initHome();
        
    }
}
