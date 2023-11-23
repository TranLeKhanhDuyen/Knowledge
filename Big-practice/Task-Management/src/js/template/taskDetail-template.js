import iconEdit from "../../assets/icons/edit.svg";
import iconClose from "../../assets/icons/close.svg";
import iconDelete from "../../assets/icons/delete.svg";
import userAvatar from "../../assets/images/user.svg";

export default class TaskDetailTemplate {
  constructor() {}

  static renderTaskDetail(data) {
    return `${data
      .map(
        (item) =>
          `
    <div class="detail-task-container" data-id="${item.id}">
    <div class="detail-header text-xl text-bold">
      <span class="task-title">${item.taskName}
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
        <p contenteditable="true" class="task-desc">${item.description}</p>
      </form>
    </div>

    <div class="date-container">
      <h3 class="title detail-title">Due Date</h3>
      <input class="date-select text-lg" type="date">
    </div>

    <div class="comments-container">
      <h3 class="title detail-title">Comments</h3>
      <input class="comments-input" type="text" placeholder="Enter new comment...">
      <ul class="comment-list"></ul>
    </div>
  </div>
  `
      )
      .join(" ")}`;
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
