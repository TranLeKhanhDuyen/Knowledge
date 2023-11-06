export default class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    // this.view.bindAddTask(this.handlerAddTask());
  }

  // handlerAddTask = async (taskName) => {
  //   const task = await this.model.addTask(taskName);
  //   console.log(task);
  //   this.view.showTaskItem(task);
  //   this.view.resetForm();
  // };
}
