import iconEdit from "../../assets/icons/edit.svg";
import iconClose from "../../assets/icons/close.svg";
import iconDelete from "../../assets/icons/delete.svg";
import userAvatar from "../../assets/images/user.svg";
import date from "../utilities/date";

export default class TaskDetailTemplate {
  constructor() {}

  static renderTaskDetail(data) {
    return `
    <div class="detail-task-container" data-id="${data.id}">
    <div class="detail-header text-xl text-bold">
      <span class="task-title">${data.taskName}
        <select class="option">
          <option value="New">New</option>
          <option value="Old">Old</option>
        </select>
      </span>
      <img class="close-icon cursor" src="${iconClose}" alt="close icon">
    </div>

    <div class="edit-task-container">
      <span class="title detail-title">Description
        <img class="edit-icon" src="${iconEdit}" alt="edit icon">
      </span>
      <form action="#" method="get" class="add-description">
        <p contenteditable="true" class="task-desc">${data.description}</p>
      </form>
    </div>

    <div class="date-container">
      <h3 class="title detail-title">Due Date</h3>
      <input class="date-select text-lg" type="date"  value="${date.convertDateInput(
        data.dueDate
      )}" id= "due-date">
      <p class="daysRemaining">${date.diffTime(
        data.dueDate,
        Math.ceil,
        "left"
      )}</p>
    </div>

    <div class="comments-container">
      <h3 class="title detail-title">Comments</h3>
      <input class="comments-input" type="text" placeholder="Enter new comment...">
      <ul class="comment-list"></ul>
    </div>
  </div>
  `;
  }

  static renderComment(data) {
    return `
      <li class="commenters">
        <div class="commenter">
          <figure class="user">
            <img class="user-avatar" src="${userAvatar}" alt="avatar">
            <span class="user-name text-bold">Sara M.</span> 
            <p class="time-ago text-sm"></p>
         </figure>
         <img class="delete-icon cursor" src="${iconDelete}" alt="delete icon">
        </div>
        <p class="comment-content">${data.comments}</p>
      </li>
  `;
  }
}
