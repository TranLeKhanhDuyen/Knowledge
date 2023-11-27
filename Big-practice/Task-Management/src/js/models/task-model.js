import date from "../utilities/date";
import STATUS from "../constants/status";

export default class TaskModel {
  constructor(taskName) {
    this.taskName = taskName;
    this.description = "";
    this.dueDate = date.getDueDate();
    this.createdDate = date.getCurrentDate();
    this.comments = "";
    this.status = STATUS.TODO;
  }

  toJson() {
    return {
      taskName: this.taskName,
      description: this.description,
      dueDate: this.dueDate,
      createdDate: this.createdDate,
      comments: this.comments,
      status: this.status,
    };
  }
}
