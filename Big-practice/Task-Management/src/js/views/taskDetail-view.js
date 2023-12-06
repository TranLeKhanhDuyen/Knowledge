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
    if (addDesc) {
      addDesc.addEventListener("blur", (e) => {
        e.preventDefault();
        const description = addDesc.textContent;
        const id = this.getId()
        const { data } = handle(id, { description });
        try {
          this.updateData = { ...this.updateData, ...data };
        } catch (error) {
          alert(ERROR_MESSAGE.ADD_FAIL);
        }
      });
    }

    /* HANDLER DATE */
    const dueDateInput = document.querySelector(".date-select");

    if (dueDateInput) {
      dueDateInput.addEventListener("change", (e) => {
        const id = this.getId()
        const newDueDate = date.formatDate(e.target.value);

        const { data } = handle(id, { dueDate: newDueDate });

        // Update the due date in updateData
        this.updateData = { ...this.updateData, ...data };

        // Update the task item's due date
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
      });
    }
  }

  /* HANDLER COMMENTS */

  bindComments(handle) {
    const inputComment = document.querySelector(".comments-input");
    if (inputComment) {
      inputComment.addEventListener("keydown", async (e) => {
        if (e.key === "Enter") {
          e.preventDefault();
          const comments = inputComment.value.trim();
          const id = this.getId()
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
