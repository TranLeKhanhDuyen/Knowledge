import iconEdit from "../../assets/icons/edit.svg";
import iconClose from "../../assets/icons/close.svg";
import iconDelete from "../../assets/icons/delete.svg";
import userAvatar from "../../assets/images/user.svg";

export default class TaskDetailTemplate {
  constructor() {}

  static renderTaskDetail(data) {
    if (Array.isArray(data)) {
      return data
        .map(
          (item) => `
    <div class="detail-task-container" data-id="${item.id}">
    <div class="detail-header text-xl text-bold">
      <span class="task-title">${item.taskName}
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
        <form action="#" method="get" class="add-description">
          <input type="text" class="description-input text-lg">
        </form>
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
          <p class="time-ago text-sm">(${item.comments}) </p>
        </figure>
        <img class="delete-icon" src="${iconDelete}" alt="delete icon">
      </div>
      <p class="comments-content">${item.commentst}</p>
    </div>
  </div>
  `
        )
        .join(" ");
    } else {
      return "";
    }
  }
}
