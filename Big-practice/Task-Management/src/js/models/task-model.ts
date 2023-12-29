import date from '../utilities/date';
import STATUS from '../constants/status';

interface TaskModel {
  taskName: number;
  description: string;
  dueDate: string;
  createdDate: string;
  status: string;
}

const createTaskModel = (taskName: number): TaskModel => ({
  taskName: taskName,
  description: '',
  dueDate: date.getDueDate(),
  createdDate: date.getCurrentDate(),
  status: STATUS.TODO
});

export default createTaskModel;
