import TaskDetailTemplate from "../template/taskDetail-template";

export default class TaskDetailView {
  constructor() {
    this.formAddDesc = document.querySelector("form.add-description");
    this.inputDesc = document.querySelector(".input-description");
    this.taskListContainer = document.querySelector(".task-list-container");
    this.updateData = {};
  }

  // DOMContentLoaded -> bind event
  bindUpdateTask(handle) {
    const formAddDesc = document.querySelector("form.add-description");
    const inputDesc = document.querySelector(".input-description");
    console.log(formAddDesc);
    if (formAddDesc) {
      console.log(formAddDesc, " nhan duoc event");
      inputDesc.addEventListener("keydown", async (e) => {
        if (e.key === "Enter") {
          console.log(e.key);
          e.preventDefault();
          const desc = inputDesc.value;
          const id = document.querySelector(".detail-task-container").dataset
            .id;
          const taskDesc = await handle(id, desc); // 200
          try {
            this.updateData = [...this.updateData, {taskName: taskDesc}];
            console.log(this.updateData);
          } catch (erro) {
            console.log("...");
          }
        }
      });
    }
  }

  showDesc() {
    const descDisplay = document.querySelector(".task-desc");
    descDisplay.innerHTML = "";

    this.updateData.forEach((task) => {
      descDisplay.innerHTML += TaskDetailTemplate.renderTaskDetail([task]);
    });
  }
}
