import Controller from "./mvc/controller";
import Model from "./mvc/model";
import View from "./mvc/view";

const app = new Controller(new Model(), new View());
