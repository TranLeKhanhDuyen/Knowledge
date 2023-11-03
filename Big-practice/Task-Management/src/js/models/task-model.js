import date from "../utilities/date";

export default class TaskModel {
  constructor(taskName) {
    // this.id = Date.now();
    this.taskName = taskName;
    this.detail = "";
    this.dueDate = date.getDueDate();
    this.createdDate = date.getCurrentDate();
  }
}
