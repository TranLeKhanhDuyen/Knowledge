import iconEdit from "../../assets/icons/edit.svg";
import iconClose from "../../assets/icons/close.svg";
import iconDelete from "../../assets/icons/delete.svg";
import userAvatar from "../../assets/images/user.svg";

export default class TaskDetail {
  constructor() {}

  static renderTaskDetail = (data) => {
    return `
    <div class="detail-task-container">
    <div class="detail-header text-xl text-bold">
      <span class="task-title">${data.tasks.title}
        <select class="option">
          <option value="New">New</option>
          <option value="Old">Old</option>
        </select>
      </span>
      <img class="close-icon" src="${iconClose}" alt="close icon">
    </div>

    <div class="edit-task-container">
      <span class="title detail-title">Description
        <img class="edit-icon" src="${iconEdit}" alt="edit icon">
      </span>
      <p class="task-description">${data.tasks.description}</p>
    </div>

    <div class="date-container">
      <h3 class="title detail-title">Due Date</h3>
      <input class="date-select text-lg" type="date">
    </div>

    <div class="comments-container">
      <h3 class="title detail-title">Comments</h3>
      <input class="comments-input" type="text" placeholder="Enter new comment...">
      <div class="commenters">
        <figure class="user">
          <img class="user-avatar" src="${userAvatar}" alt="avatar">
          <span class="user-name text-bold">Sara M.</span> 
          <p class="time-ago">(${data.comments.timeAgo} mins ago) </p>
        </figure>
        <img class="delete-icon" src="${iconDelete}" alt="delete icon">
      </div>
      <p class="comments-content">${data.comments.text}</p>
    </div>
  </div>
    `;
  };
}
