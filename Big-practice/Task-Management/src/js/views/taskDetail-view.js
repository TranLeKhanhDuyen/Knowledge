import {
  CONFIRM_MESSAGE,
  ERROR_MESSAGE,
  SUCCESS_MESSAGE,
} from "../constants/message";
import TaskDetailTemplate from "../templates/taskDetail-template";
import date from "../utilities/date";
import showSuccessMessage from "../utilities/showMessage";

export default class TaskDetailView {
  bindUpdateTask(handle) {
    this.detailContainer = document.querySelector(".detail-task-container");
    this.addDesc = document.querySelector(".add-description");
    this.editIcon = document.querySelector(".edit-icon");
    this.dueDateInput = document.querySelector(".date-select");
    this.inputComment = document.querySelector(".comments-input");
    this.commentList = document.querySelector(".comment-list");

    if (this.addDesc && this.editIcon) {
      this.editIcon.addEventListener("click", (e) => {
        e.preventDefault();
        this.focusEditDescripton(this.addDesc);
      });

      this.addDesc.addEventListener("blur", (e) => {
        e.preventDefault();
        this.editDescription(handle);
      });
    }

    if (this.dueDateInput) {
      this.dueDateInput.addEventListener("change", (e) => {
        this.changeDueDate(handle, e);
      });
    }
  }

  // Event for icon edit
  focusEditDescripton(element) {
    const range = document.createRange();
    range.selectNodeContents(element);
    range.collapse(false);
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
  }

  // Event when click to input
  editDescription(handle) {
    const description = this.addDesc.textContent;
    const id = this.detailContainer.dataset.id;
    const { data } = handle(id, { description });

    try {
      this.updateData = { ...this.updateData, ...data };
    } catch (error) {
      alert(ERROR_MESSAGE.ADD_FAIL);
    }
  }

  //Event when change date
  changeDueDate(handle, event) {
    const id = this.detailContainer.dataset.id;
    const newDueDate = date.formatDate(event.target.value);
    const { data } = handle(id, { dueDate: newDueDate });

    this.updateData = { ...this.updateData, ...data };

    // Update date for task item
    const taskItem = document.querySelector(
      `.task-item-container[data-id="${id}"]`
    );

    if (!taskItem) return;
    const dueDateElement = taskItem.querySelector(".due-date");
    if (!dueDateElement) return;
    dueDateElement.innerHTML = date.diffTime(newDueDate, Math.ceil, "left");

    // Update date for task detail
    const daysRemainingElement = document.querySelector(".daysRemaining");
    if (!daysRemainingElement) return;
    daysRemainingElement.innerHTML = date.diffTime(
      newDueDate,
      Math.ceil,
      "left"
    );
  }

  // HANDLER COMMENTS

  bindComments(handleAddComment) {
    if (!this.inputComment) return;

    this.inputComment.addEventListener("keydown", async (e) => {
      if (e.key !== "Enter") return;
      e.preventDefault();

      const commentValue = this.inputComment.value.trim();
      const taskId = this.detailContainer.dataset.id;

      if (!commentValue) return alert(ERROR_MESSAGE.COMMENT_EMPTY);

      const data = await handleAddComment(commentValue, +taskId);

      this.showComments(data);
      this.inputComment.value = "";

      showSuccessMessage(SUCCESS_MESSAGE.COMMENT_SUCCESS);
    });
  }

  // showComments(data: Comments)
  showComments(data) {
    this.commentList.innerHTML += TaskDetailTemplate.renderComment([data]);
  }

  deleteComment(handleDelete) {
    this.commentList.addEventListener("click", async (e) => {
      const deleteComment = e.target.closest(".delete-icon");
      if (!deleteComment) return;

      const commentItem = e.target.closest(".commenters");
      if (!commentItem) return;

      // Save id item
      const commentId = commentItem.dataset.id;
      const userConfirmed = confirm(CONFIRM_MESSAGE.DELETE_COMMENT);

      if (!userConfirmed) return;
      try {
        const status = await handleDelete(commentId);

        if (status !== 200) return alert(ERROR_MESSAGE.DELETE_FAIL);

        commentItem.remove();
        showSuccessMessage(SUCCESS_MESSAGE.DELETE_COMMENT_SUCCESS);
      } catch (error) {
        alert(error);
      }
    });
  }
}
