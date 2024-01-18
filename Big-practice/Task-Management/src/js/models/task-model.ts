import date from '../utilities/date';
import { STATUS } from '../constants/status';

export interface TaskModel {
  taskName: string;
  description: string;
  dueDate: string;
  createdDate: string;
  status: string;
  id: string;
}

export const createTaskModel = (taskName: string, id: string): TaskModel => ({
  id,
  taskName: taskName,
  description: '',
  dueDate: date.getDueDate(),
  createdDate: date.getCurrentDate(),
  status: STATUS.TODO
});
