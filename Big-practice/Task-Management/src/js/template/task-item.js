import iconDelete from "../../assets/icons/delete.svg";
import iconClock from "../../assets/icons/clock.svg";
import date from "../utilities/date"

export default class TaskItemTemplate {
  constructor() {}

  /**
   * Create an HTML template string to display a task item.
   *
   * @param {Object} data - Information about the task item to be displayed.
   * @param {string} data.task.title - The title of the task.
   * @param {string} data.task.createDate - The task's creation date.
   * @param {string} data.task.dueDate - The task's due date.
   */

  static renderTaskItem(data){
    return `
    <div class="task-item-container"  data-id="${data.id}">
      <div class="task-content text-md">
        <h3 class="task-title">${data.task.title}</h3>
        <img src="${iconDelete}" alt="delete icon" class="delete-icon">
      </div>
      <div class="task-date text-md">
        <p class="date-ago">${date.diffTime(data.createdDate)} days ago</p>
        <div class="date-left text-sm">
          <img src="${iconClock}" class="clock-icon">
          <p>${date.diffTime(data.dueDate, Math.ceil, 'left')}</p>
        </div>
      </div>
    </div>`;
  }

//   <div class="task-item-container"  data-id="${data.id}">
//   <div class="task-content text-md">
//     <h3 class="task-title">${data.task.title}</h3>
//     <img src="${iconDelete}" alt="delete icon" class="delete-icon">
//   </div>
//   <div class="task-date text-md">
//     <p class="date-ago">${data.task.createDate} days ago</p>
//     <div class="date-left text-sm">
//       <img src="${iconClock}" class="clock-icon">
//       <p>${data.task.dueDate}</p>
//     </div>
//   </div>
// </div>`;

  // static renderDetailTask(data){

  // }
}
