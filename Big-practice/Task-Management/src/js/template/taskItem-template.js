import iconDelete from "../../assets/icons/delete.svg";
import iconClock from "../../assets/icons/clock.svg";
import date from "../utilities/date";

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

  static renderTaskItem(data) {
    if (Array.isArray(data)) {
      return data
        .map((item) => {
          return `
      <li class="task-item-container" draggable="true" data-id="${
        item.id
      }" data-status="${item.status}">
        <div class="task-content text-md">
          <h3 class="task-title">${item.taskName}</h3>  
          <button class="delete"> <img src="${iconDelete}" alt="delete icon" class="delete-icon">
          </button>  
        </div>
        <div class="task-date text-md">
          <p class="date-ago">${date.diffTime(item.createdDate)}</p>
          <div class="date-left text-sm">
            <img src="${iconClock}" class="clock-icon">
            <p class ="due-date">${date.diffTime(
              item.dueDate,
              Math.ceil,
              "left"
            )}</p>
          </div>
        </div>
      </li>
      `;
        })
        .join(" ");
    } else {
      return "";
    }
  }
}
