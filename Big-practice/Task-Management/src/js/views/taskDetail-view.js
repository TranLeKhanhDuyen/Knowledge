import { ERROR_MESSAGE } from "../constants/message";
import TaskDetailTemplate from "../template/taskDetail-template";
import date from "../utilities/date";

export default class TaskDetailView {
  constructor() {
    this.updateData = {};
  }

  // DOMContentLoaded -> bind event
  bindUpdateTask(handle) {
    const formAddDesc = document.querySelector("form.add-description");
    const taskDescContent = document.querySelector(".task-desc");
    if (formAddDesc) {
      taskDescContent.addEventListener("blur", (e) => {
        e.preventDefault();
        const description = taskDescContent.textContent;
        // eslint-disable-next-line sonarjs/no-duplicate-string
        const id = document.querySelector(".detail-task-container").dataset.id;
        const { data } = handle(id, { description });
        try {
          this.updateData = { ...this.updateData, ...data };
        } catch (error) {
          alert(ERROR_MESSAGE.ADD_FAIL);
        }
      });
    }

    //DATE
    const dueDateInput = document.querySelector(".date-select");

    if (dueDateInput) {
      dueDateInput.addEventListener("change", (e) => {
        const id = document.querySelector(".detail-task-container").dataset.id;

        const newDueDate = date.formatDate(e.target.value);

        // Update the days remaining in detail view
        const daysRemainingElement = document.querySelector(".daysRemaining");
        daysRemainingElement.innerHTML = date.diffTime(
          newDueDate,
          Math.round,
          "left"
        );

        const { data } = handle(id, {dueDate: newDueDate });

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

  bindComments(handle) {
    const inputComment = document.querySelector(".comments-input");
    if (inputComment) {
      inputComment.addEventListener("keydown",  async (e) => {
        if (e.key === "Enter") {
          e.preventDefault();

          const comments = inputComment.value.trim();
          console.log(comments)

          const id = document.querySelector(".detail-task-container").dataset.id;

          const data = await  handle(id, { comments });

          console.log(data);

          if (comments !== "") {
            // 
            this.updateData = { ...this.updateData, ...data };
            console.log("this.updateData",this.updateData)
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
