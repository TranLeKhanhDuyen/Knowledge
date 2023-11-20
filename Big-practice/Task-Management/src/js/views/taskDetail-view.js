import { ERROR_MESSAGE } from "../constants/message";
import TaskDetailTemplate from "../template/taskDetail-template";

export default class TaskDetailView {
  constructor() {
    this.updateData = [];
  }

  // DOMContentLoaded -> bind event
  bindUpdateTask(handle) {
    const formAddDesc = document.querySelector("form.add-description");
    const taskDescContent = document.querySelector(".task-desc");
    console.log("formAddDesc", formAddDesc);
    console.log("taskDescContent", taskDescContent);
    if (formAddDesc) {
      taskDescContent.addEventListener("blur", async (e) => {
        e.preventDefault();
        const description = taskDescContent.textContent;
        console.log("description", description);
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
    // const formComment = document.querySelector(".comments-container");
    const inputComment = document.querySelector(".comments-input");
    if (inputComment) {
      inputComment.addEventListener("keydown", async (e) => {
        if (e.key === "Enter") {
          e.preventDefault();
          const comments = inputComment.value;
          console.log(comments);
          const id = document.querySelector(".detail-task-container").dataset
            .id;
          console.log(id);
          const { data } = await handle(id, { comments });
          console.log(data);
          try {
            this.updateData = { ...this.updateData, ...data };
            console.log(this.updateData);
            this.showComment();
            console.log(this.showComment);
            inputComment.value = "";
          } catch (error) {
            alert("cmt is emty");
            // alert(ERROR_MESSAGE.ADD_FAIL);
          }
        }
      });
    }
  }

  showComment() {
    console.log("show cmt");
    const commentDisplay = document.querySelector(".comment-list");
    commentDisplay.innerHTML = "";

    if (this.updateData) {
      this.updateData.forEach((comments) => {
        commentDisplay.innerHTML += TaskDetailTemplate.renderComment([
          comments,
        ]);
      });
    } else {
      console.error("updateData is not an array", this.updateData);
    }
  }
}
