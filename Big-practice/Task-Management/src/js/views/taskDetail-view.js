import { ERROR_MESSAGE } from "../constants/message";
import TaskDetailTemplate from "../template/taskDetail-template";

export default class TaskDetailView {
  constructor() {
    this.updateData = {};
  }

  // DOMContentLoaded -> bind event
  bindUpdateTask(handle) {
    const formAddDesc = document.querySelector("form.add-description");
    const taskDescContent = document.querySelector(".task-desc");
    if (formAddDesc) {
      taskDescContent.addEventListener("blur", async (e) => {
        e.preventDefault();
        const description = taskDescContent.textContent;
        const id = document.querySelector(".detail-task-container").dataset.id;
        const { data } = await handle(id, { description });
        try {
          this.updateData = { ...this.updateData, ...data };
        } catch (error) {
          alert(ERROR_MESSAGE.ADD_FAIL);
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
          const id = document.querySelector(".detail-task-container").dataset.id;
          console.log(id)
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
