import {
  CONFIRM_MESSAGE,
  ERROR_MESSAGE,
  SUCCESS_MESSAGE,
} from "../constants/message";
import TaskDetailTemplate from "../templates/taskDetail-template";
import date from "../utilities/date";
import showSuccessMessage from "../utilities/showMessage";

export default class TaskDetailView {
  constructor() {}

  getId() {
    const detailContainer = document.querySelector(".detail-task-container");
    return detailContainer ? detailContainer.dataset.id : null;
  }

  bindUpdateTask(handle) {
    const addDesc = document.querySelector(".add-description");
    const editIcon = document.querySelector(".edit-icon");
    const dueDateInput = document.querySelector(".date-select");

    if (addDesc && editIcon) {
      editIcon.addEventListener("click", (e) => {
        e.preventDefault();
        this.focusEditDescripton(addDesc);
      });

      addDesc.addEventListener("blur", (e) => {
        e.preventDefault();
        this.editDescription(handle);
      });
    }

    if (dueDateInput) {
      dueDateInput.addEventListener("change", (e) => {
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
    const addDesc = document.querySelector(".add-description");
    const description = addDesc.textContent;
    const id = this.getId();
    const { data } = handle(id, { description });

    try {
      this.updateData = { ...this.updateData, ...data };
    } catch (error) {
      alert(ERROR_MESSAGE.ADD_FAIL);
    }
  }

  //Event when change date
  changeDueDate(handle, event) {
    const id = this.getId();
    const newDueDate = date.formatDate(event.target.value);
    const { data } = handle(id, { dueDate: newDueDate });

    this.updateData = { ...this.updateData, ...data };

    // Update date for task item
    const taskItem = document.querySelector(
      `.task-item-container[data-id="${id}"]`
    );
    if (taskItem) {
      const dueDateElement = taskItem.querySelector(".due-date");
      if (dueDateElement) {
        dueDateElement.innerHTML = date.diffTime(
          newDueDate,
          Math.round,
          "left"
        );
      }
    }

    // Update date for task detail
    const daysRemainingElement = document.querySelector(".daysRemaining");
    if (daysRemainingElement) {
      daysRemainingElement.innerHTML = date.diffTime(
        newDueDate,
        Math.round,
        "left"
      );
    }
  }

  // HANDLER COMMENTS

  bindComments(handleAddComment) {
    const inputComment = document.querySelector(".comments-input");
    if (!inputComment) return;

    inputComment.addEventListener("keydown", async (e) => {
      if (e.key !== "Enter") return;
      e.preventDefault();

      const commentValue = inputComment.value.trim();
      const taskId = this.getId();

      if (!commentValue) {
        alert(ERROR_MESSAGE.COMMENT_EMPTY);
        return;
      }

      const data = await handleAddComment(commentValue, +taskId);

      this.showComments(data);
      inputComment.value = "";

      showSuccessMessage(SUCCESS_MESSAGE.COMMENT_SUCCESS);
    });
  }

  // showComments(data: Comments)
  showComments(data) {
    const commentList = document.querySelector(".comment-list");
    commentList.innerHTML += TaskDetailTemplate.renderComment([data]);
  }

  deleteComment(handleDelete) {
    document.body.addEventListener("click", async (e) => {
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
      } catch (error) {
        alert(error);
      }

      showSuccessMessage(SUCCESS_MESSAGE.DELETE_COMMENT_SUCCESS);
    });
  }
}
