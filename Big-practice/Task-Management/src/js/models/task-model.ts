import date from '@js/utilities/date';
import { STATUS } from '@js/constants/status';

export interface TaskModel {
  taskName: string;
  description: string;
  dueDate: string;
  createdDate: string;
  status: string;
  id: string;
}

export const createTaskModel = (taskName: string): TaskModel => ({
  id: '',
  taskName: taskName,
  description: '',
  dueDate: date.getDueDate(),
  createdDate: date.getCurrentDate(),
  status: STATUS.TODO
});
