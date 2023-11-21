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
    const inputComment = document.querySelector(".comments-input");
    inputComment.addEventListener("keydown", async (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        const comments = inputComment.value.trim();
        const id = document.querySelector(".detail-task-container").dataset.id;
        const { data } = await handle(id, { comments });
        if (comments !== "") {
          try {
            this.updateData = { ...this.updateData, ...data };
            this.showComment();
            inputComment.value = "";
          } catch (error) {
            alert("cmt is emty");
            // alert(ERROR_MESSAGE.ADD_FAIL);
          }
        } else {
          alert("Comment cannot be empty");
        }
      }
    });
  }

  showComment() {
    const commentDisplay = document.querySelector(".comment-list");
    commentDisplay.innerHTML = "";

    // if (this.updateData.length > 0) {
    //   this.updateData.forEach((data) => {
    //     const renderedComment = TaskDetailTemplate.renderComment(data);
    //     commentDisplay.innerHTML += renderedComment;
    //   });
    // } else {
    //   console.error(
    //     "updateData không xác định hoặc không phải là một mảng có dữ liệu",
    //     this.updateData
    //   );
    // }

    if (this.updateData) {
      const renderedComment = TaskDetailTemplate.renderComment(this.updateData);
      commentDisplay.innerHTML += renderedComment;
    } else {
      console.error(
        "updateData không xác định hoặc không phải là một đối tượng",
        this.updateData
      );
    }
  }
}
