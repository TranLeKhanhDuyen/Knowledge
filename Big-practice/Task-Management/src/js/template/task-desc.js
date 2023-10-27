import iconEdit from "../../assets/icons/edit.svg";
import iconClose from "../../assets/icons/close.svg";
import iconDelete from "../../assets/icons/delete.svg";
import userAvatar from "../../assets/images/user.svg";

export default class TaskDescription {
  constructor() {}

  static renderTaskDescription = (data) => {
    return `
    <div class="desc-task-container">
    <div class="desc-header">
      <span class="task-title">${data.tasks.title}
        <select class="desc-option">
          <option value="New">New</option>
          <option value="Old">Old</option>
        </select>
      </span>
      <img class="close-icon" src="${iconClose}" alt="close icon">
    </div>

    <div class="desc-edit">
      <span class="desc-title">Description
        <img class="edit-icon" src="${iconEdit}" alt="edit icon">
      </span>
      <p class="desc-task">${data.tasks.description}</p>
    </div>

    <div class="desc-date">
      <h3 class="desc-title">Due Date</h3>
      <input class="date-select" type="date">
    </div>

    <div class="comments">
      <h3 class="desc-title">Comments</h3>
      <input class="comments-input" type="text" placeholder="Enter new comment...">
      <div class="commenters">
        <figure class="user">
          <img class="user-avatar" src="${userAvatar}" alt="avatar">
          <span class="user-name">Sara M.
          <p class="time-ago">(${data.comments.timeAgo} mins ago) </p>
          </span> 
        </figure>
        <img class="delete-icon" src="${iconDelete}"></img>
      </div>
      <p class="comments-content">${data.comments.text}</p>
    </div>
  </div>
    `
  }
}
