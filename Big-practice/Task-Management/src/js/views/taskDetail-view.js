import {
  CONFIRM_MESSAGE,
  ERROR_MESSAGE,
  SUCCESS_MESSAGE,
} from "../constants/message";
import TaskDetailTemplate from "../templates/taskDetail-template";
import date from "../utilities/date";
import showSuccessMessage from "../utilities/showMessage";

export default class TaskDetailView {
  constructor() {
    this.detailContainer = document.querySelector(".detail-task-container");
    this.addDesc = document.querySelector(".add-description");
    this.editIcon = document.querySelector(".edit-icon");
    this.dueDateInput = document.querySelector(".date-select");
    this.commentInput = document.querySelector(".comments-input");
    this.commentList = document.querySelector(".comment-list");

  }

  bindUpdateTask(handleUpdateTask) {
    if (this.addDesc && this.editIcon) {
      this.editIcon.addEventListener("click", (e) => {
        e.preventDefault();
        this.focusEditDescripton();
      });

      this.addDesc.addEventListener("blur", (e) => {
        e.preventDefault();
        this.editDescription();
      });
    }

    if (this.dueDateInput) {
      this.dueDateInput.addEventListener("change", (e) => {
        this.changeDueDate(handleUpdateTask, e);
      });
    }
  }

  focusEditDescripton() {
    const range = document.createRange();
    range.selectNodeContents(this.addDesc);
    range.collapse(false);
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
  }

  editDescription(handleUpdateTask) {
    console.log(handleUpdateTask);
    const description = this.addDesc.textContent;
    console.log(description);
    const id = this.detailContainer.dataset.id;
    console.log(id);
    const { data } = handleUpdateTask(id, { description });
    console.log(data);
    try {
      this.updateData = { ...this.updateData, ...data };
    } catch (error) {
      alert(ERROR_MESSAGE.ADD_FAIL);
    }
  }

  changeDueDate(handle, event) {
    const id = this.detailContainer.dataset.id;
    const newDueDate = date.formatDate(event.target.value);
    const { data } = handle(id, { dueDate: newDueDate });

    this.updateData = { ...this.updateData, ...data };

    const taskItem = document.querySelector(
      `.task-item-container[data-id="${id}"]`
    );
    if (taskItem) {
      const dueDateElement = taskItem.querySelector(".due-date");
      if (dueDateElement) {
        dueDateElement.innerHTML = date.diffTime(newDueDate, Math.ceil, "left");
      }
    }

    const daysRemainingElement = document.querySelector(".daysRemaining");
    if (daysRemainingElement) {
      daysRemainingElement.innerHTML = date.diffTime(
        newDueDate,
        Math.ceil,
        "left"
      );
    }
  }

  bindComments(handleAddComment) {
    if (!this.commentInput) return;

    this.commentInput.addEventListener("keydown", async (e) => {
      if (e.key !== "Enter") return;
      e.preventDefault();

      const commentValue = this.commentInput.value.trim();
      const taskId = this.detailContainer.dataset.id;

      if (!commentValue) {
        alert(ERROR_MESSAGE.COMMENT_EMPTY);
        return;
      }

      const data = await handleAddComment(commentValue, +taskId);

      this.showComments(data);
      this.commentInput.value = "";

      showSuccessMessage(SUCCESS_MESSAGE.COMMENT_SUCCESS);
    });
  }

  showComments(data) {
    const commentHTML = TaskDetailTemplate.renderComment([data]);
    this.commentList.innerHTML += commentHTML;
  }

  deleteComment(handleDelete) {
    document.body.addEventListener("click", async (e) => {
      const deleteComment = e.target.closest(".delete-icon");
      if (!deleteComment) return;

      const commentItem = e.target.closest(".commenters");
      if (!commentItem) return;

      const commentId = commentItem.dataset.id;
      const userConfirmed = confirm(CONFIRM_MESSAGE.DELETE_COMMENT);

      if (!userConfirmed) return;
      try {
        const status = await handleDelete(commentId);

        if (status !== 200) return alert(ERROR_MESSAGE.DELETE_FAIL);

        commentItem.remove();
      } catch (error) {
        alert(error);
      }

      showSuccessMessage(SUCCESS_MESSAGE.DELETE_COMMENT_SUCCESS);
    });
  }
}
