import iconDelete from "../../assets/icons/delete.svg";
import iconClock from "../../assets/icons/clock.svg";

export default class TaskItem {
  constructor() {}

  /**
   * Create an HTML template string to display a task item.
   *
   * @param {Object} data - Information about the task item to be displayed.
   * @param {string} data.task.title - The title of the task.
   * @param {string} data.task.createDate - The task's creation date.
   * @param {string} data.task.dueDate - The task's due date.
   */

  static renderTaskItem = (data) => {
    return `
    <div class="task-item-container">
    <div class="task-content">
      <h3 class="task-title">${data.task.title}</h3>
      <img src="${iconDelete}" alt="delete icon" class="icon-delete">
    </div>
    <div class="task-date">
      <p class="date-ago">${data.task.createDate}</p>
      <div class="date-left text-sm">
        <img src="${iconClock}" class="clock-icon">
        <p>${data.task.dueDate}</p>
      </div>
    </div>
  </div>`;
  };
}
