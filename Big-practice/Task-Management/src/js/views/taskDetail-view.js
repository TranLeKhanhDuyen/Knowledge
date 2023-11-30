import { ERROR_MESSAGE } from "../constants/message";
import TaskDetailTemplate from "../template/taskDetail-template";

export default class TaskDetailView {
  constructor() {
    this.updateData = {};
  }

  // DOMContentLoaded -> bind event
  // eslint-disable-next-line sonarjs/cognitive-complexity
  bindUpdateTask(handle) {
    const formAddDesc = document.querySelector("form.add-description");
    const taskDescContent = document.querySelector(".task-desc");
    if (formAddDesc) {
      taskDescContent.addEventListener("blur", async (e) => {
        e.preventDefault();
        const description = taskDescContent.textContent;
        // eslint-disable-next-line sonarjs/no-duplicate-string
        const id = document.querySelector(".detail-task-container").dataset.id;
        const { data } = await handle(id, { description });
        try {
          this.updateData = { ...this.updateData, ...data };
        } catch (error) {
          alert(ERROR_MESSAGE.ADD_FAIL);
        }
      });
    }

    //DATE
    const dueDateInput = document.querySelector(".date-select");
    const daysRemainingElement = document.querySelector(".daysRemaining");

    if (dueDateInput) {
      // Add event change
      dueDateInput.addEventListener("change", (event) => {
        const selectedDate = new Date(event.target.value);

        const id = document.querySelector(".detail-task-container").dataset.id;

        try {
          const { data } = handle(id, { selectedDate });
          console.log(data);
          this.updateData = { ...this.updateData, ...data };
          // Get the current date
          const currentDate = new Date();
          console.log(currentDate);
          // Calculate the number of milliseconds difference between the selected date and the current date
          const timeDiff = selectedDate.getTime() - currentDate.getTime();
          console.log(timeDiff);

          // Convert from milliseconds to days + round down
          const daysRemaining = Math.floor(
            timeDiff / (1000 * 60 * 60 * 24) + 1
          );

          // Show the number of days remaining
          daysRemainingElement.textContent = `${daysRemaining} day left`;
        } catch (error) {
          console.error("Fail:", error);
        }
      });
    }

    // Handle Comments
    const inputComment = document.querySelector(".comments-input");
    if (inputComment) {
      inputComment.addEventListener("keydown", async (e) => {
        if (e.key === "Enter") {
          e.preventDefault();
          const comments = inputComment.value.trim();
          const id = document.querySelector(".detail-task-container").dataset
            .id;
          console.log(id);
          const { data } = await handle(id, { comments });
          if (comments !== "") {
            this.updateData = { ...this.updateData, ...data };
            this.showComment();
            inputComment.value = "";
          } else {
            alert(ERROR_MESSAGE.COMMENT_EMPTY);
          }
        }
      });
    }
  }

  showComment() {
    const commentDisplay = document.querySelector(".comment-list");
    commentDisplay.innerHTML = "";
    if (this.updateData) {
      const renderedComment = TaskDetailTemplate.renderComment(this.updateData);
      commentDisplay.innerHTML += renderedComment;
    }
  }
}
