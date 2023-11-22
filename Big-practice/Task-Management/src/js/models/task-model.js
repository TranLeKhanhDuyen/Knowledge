import date from "../utilities/date";

export default class TaskModel {
  constructor(taskName) {
    this.taskName = taskName;
    this.description = "";
    this.dueDate = date.getDueDate();
    this.createdDate = date.getCurrentDate();
    this.comments = "";
    this.status = "";
  }
}
