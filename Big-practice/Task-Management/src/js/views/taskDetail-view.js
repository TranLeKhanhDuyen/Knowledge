import { ERROR_MESSAGE } from "../constants/message";

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
        console.log(description)
        const id = document.querySelector(".detail-task-container").dataset.id;
        const { data } = await handle(id, { description });
        try {
          this.updateData = { ...this.updateData, ...data };
        } catch (error) {
          alert(ERROR_MESSAGE.ADD_FAIL);
        }
      });
    }
  }

  bindComments(handle) {
    const formComment = document.querySelector(".comments-container");
    const inputComment = document.querySelector(".comments-input");
    if (formComment) {
      formComment.addEventListener("keydown", async (e) => {
        if (e.key === "Enter") {
          e.preventDefault();
          const comments = inputComment.value;
          const id = document.querySelector(".detail-task-container").dataset
            .id;
          const { data } = await handle(id, { comments });
          try {
            this.updateData = { ...this.updateData, ...data };
          } catch (error) {
            alert(ERROR_MESSAGE.ADD_FAIL);
          }
        }
      });
    }
  }

  showComment(){
    const commentDisplay = document.querySelector(".comment-list");
    commentDisplay.innerHTML = "";

    
    this.updateData.forEach((comments) => {
      commentDisplay.innerHTML += `<li>${comments}</li>`;
    });
  }
}
