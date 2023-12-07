import date from "../utilities/date";
import STATUS from "../constants/status";

const createTaskModel = (taskName) => ({
  taskName,
  description: "",
  dueDate: date.getDueDate(),
  createdDate: date.getCurrentDate(),
  comments: "",
  status: STATUS.TODO,
});

export default createTaskModel;
