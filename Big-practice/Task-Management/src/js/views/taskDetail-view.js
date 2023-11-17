import { ERROR_MESSAGE } from "../constants/message";

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
    const formComment = document.querySelector(".comments-container");
    const inputComment = document.querySelector(".comments-input");
    const commentDisplay = document.querySelector(".comments-content");

    if (formComment) {
      formComment.addEventListener("keydown", async (e) => {
        if (e.key === "Enter") {
          e.preventDefault();
          const comments = inputComment.value;
          commentDisplay.textContent = comments
          console.log("comments", comments);
          // const id = document.querySelector(".detail-task-container").dataset.id;
          // console.log("id", id);
          const { data } = await handle({ comments });
          try {
            this.updateData = { ...this.updateData, ...data };

            this.showComment();
            inputComment.value = "";
          } catch (error) {
            alert(ERROR_MESSAGE.ADD_FAIL);
          }
        }
      });
    }
  }

  // showComment() {
  //   const commentContainer = document.querySelector(".show-comments");
  //   // const commentDisplay = document.querySelector(".comments-content");
  //   // console.log(commentDisplay)
  //   commentContainer.innerHTML = "";

  //   this.updateData.forEach((comments) => {
  //     commentContainer.innerHTML += ``;
  //   });
  // }

  showComment() {
    const commentList = document.querySelector(".show-comments");
    this.updateData.forEach((comment) => {
      const commentItem = document.createElement("li");
      commentItem.innerHTML = `<p class="comments-content">${comment}</p>`;
      commentList.appendChild(commentItem);
    });
  }
  

  bindComments() {
    const formComment = document.querySelector(".comments-container");
    const inputComment = document.querySelector(".comments-input");
    console.log("formComment", formComment);
    console.log("inputComment", inputComment);
    // if (formComment) {
    //   formComment.addEventListener("keydown", async (e) => {
    //     if (e.key === "Enter") {
    //       e.preventDefault();
    //       const comments = inputComment.value;
    //       console.log("comments", comments);
    //       const id = document.querySelector(".detail-task-container").dataset
    //         .id;
    //       console.log("id", id);
    //       const { data } = await handle(id, { comments });
    //       try {
    //         this.updateData = { ...this.updateData, ...data };

    //         this.showComment();
    //         inputComment.value = "";
    //       } catch (error) {
    //         alert(ERROR_MESSAGE.ADD_FAIL);
    //       }
    //     }
    //   });
    // }
  }

  // showComment() {
  //   const commentDisplay = document.querySelector(".comment-list");
  //   commentDisplay.innerHTML = "";

  //   this.updateData.forEach((comments) => {
  //     commentDisplay.innerHTML += `<li>
  //     <p class="comments-content">${comments}</p>
  //     <div class="commenters">
  //       <figure class="user">
  //         <img class="user-avatar"  alt="avatar">
  //         <span class="user-name text-bold">Sara M.</span>
  //         <p class="time-ago text-sm">${comments}</p>
  //       </figure>
  //       <img class="delete-icon" alt="delete icon">
  //     </div>
  //   </li>`;
  //   });
  // }
}
