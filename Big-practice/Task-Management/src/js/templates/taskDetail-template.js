import iconEdit from "../../assets/icons/edit.svg";
import iconClose from "../../assets/icons/close.svg";
import iconDelete from "../../assets/icons/delete.svg";
import userAvatar from "../../assets/images/user.svg";
import date from "../utilities/date";

export default class TaskDetailTemplate {
  static renderTaskDetail(data, comments) {
    const commentItems = this.renderComments(comments);

    return `
    <div class="detail-task-container" data-id="${data.id}">
    <div class="detail-header text-xl text-bold">
      <div class="task-title" >${data.taskName}
      </div>
      <img class="close-icon cursor" src="${iconClose}" alt="close icon">
    </div>

    <div class="edit-task-container">
      <figure class="title detail-title">Description
        <img class="edit-icon cursor" src="${iconEdit}" alt="edit icon">
      </figure>
        <div contenteditable="true" class="add-description">${
          data.description
        }</div> 
    </div>

    <div class="date-container">
      <h3 class="title detail-title">Due Date</h3>
      <input class="date-select text-lg" type="date"  value="${date.convertDateInput(
        data.dueDate
      )}" id= "due-date">
      <date class="daysRemaining">${date.diffTime(
        data.dueDate,
        Math.ceil,
        "left"
      )}</date>
    </div>

    <div class="comments-container">
      <h3 class="title detail-title">Comments</h3>
      <input class="comments-input" type="text" placeholder="Enter new comment...">
      <ul class="comment-list">${commentItems || ""}</ul>
    </div>
  </div>
  `;
  }

  static renderComments(comments) {
    if (!comments.length) return;

    return TaskDetailTemplate.renderComment(comments);
  }

  static renderComment(data) {
    return data
      .map((item) => {
        return `
      <li class="commenters" data-id="${item.id}">
        <div class="commenter">
          <figure class="user">
            <img class="user-avatar" src="${userAvatar}" alt="avatar">
            <span class="user-name text-bold">Sara M.</span> 
            <p class="time-ago text-sm">${date.timeAgo(item.timeStamp)}</p>
         </figure>
         <img class="delete-icon cursor" src="${iconDelete}" alt="delete icon">
        </div>
        <p class="comment-content">${item.comment}</p>
      </li>
  `;
      })
      .join(" ");
  }
}
