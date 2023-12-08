import { ERROR_MESSAGE } from "../constants/message";
import TaskDetailTemplate from "../templates/taskDetail-template";
import date from "../utilities/date";

export default class TaskDetailView {
  constructor() {
    this.updateData = {};
  }

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
        Math.ceil,
        "left"
      );
    }
  }

  // HANDLER COMMENTS

  bindComments(handle) {
    const inputComment = document.querySelector(".comments-input");
    if (inputComment) {
      inputComment.addEventListener("keydown", async (e) => {
        if (e.key === "Enter") {
          e.preventDefault();
          const comments = inputComment.value.trim();
          const id = this.getId();
          const data = await handle(id, { comments });
          if (comments !== "") {
            this.updateData = { ...this.updateData, ...data };
            this.showComments();
            inputComment.value = "";
          } else {
            alert(ERROR_MESSAGE.COMMENT_EMPTY);
          }
        }
      });
    }
  }

  showComments() {
    const commentDisplay = document.querySelector(".comment-list");
    commentDisplay.innerHTML = "";
    if (this.updateData) {
      const renderedComment = TaskDetailTemplate.renderComment(this.updateData);
      commentDisplay.innerHTML += renderedComment;
    }
  }
}
