import iconDelete from "../../assets/icons/delete.svg";
import iconClock from "../../assets/icons/clock.svg";

export default class TaskItem {
  /**
   *  HTML template for rendering the task item.
   */
  constructor() {}
  static renderTaskItem = (data) => {
    return `
    <div class="task-item-container">
    <div class="task-content">
      <h3 class="task-title">${data.task.title}</h3>
      <img src="${iconDelete}" alt="delete icon" class="icon-delete">
    </div>
    <div class="task-date">
      <p class="date-ago">${data.task.createDate}</p>
      <div class="date-left">
        <img src="${iconClock}" class="clock-icon"></img>
        <p>${data.task.dueDate}</p>
      </div>
    </div>
  </div>`;
  };
}
