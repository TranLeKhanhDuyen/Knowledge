import View from "./views/index";
import Model from "./models/index";
import Controller from "./controllers/controller";

start = () => {
    const controller = new Controller(new Model(), new View());
    controller.initHome();
};
document.addEventListener("DOMContentLoaded", () => {
    start();
});
