export default class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }

  handlerAddTask = async (taskName) => {
    const task = await this.model.addTask(taskName);
    this.view.displayNewTask(task);
    this.view.resetForm();
  };
}
