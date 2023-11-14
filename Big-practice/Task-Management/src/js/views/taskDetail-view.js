import TaskDetailTemplate from "../template/taskDetail-template";

export default class TaskDetailView {
  constructor() {
    this.formAddDesc = document.querySelector("form.edit-task-container");
    this.inputDesc = document.querySelector(".input-description");
    // this.taskDesc = document.querySelector(".task-desc");
    this.updateTasks = [];
  }

  bindUpdateTask(handle) {
    console.log(document.querySelector(".input-description"));
    if (this.formAddDesc) {
      this.formAddDesc.addEventListener("input", async (e) => {
        if (e.key === "Enter") {
          e.preventDefault();
          const desc = this.inputDesc.value;
          console.log(desc);
          const descContent = await handle(desc);
          try {
            this.updateTasks = [...this.updateTasks, descContent];

            // Show the tasks
            this.showDesc();
          } catch (error) {
            console.error("Error:");
          }
        }
      });
    }
  }

  showDesc() {
    const descDisplay = document.querySelector(".task-desc");
    descDisplay.innerHTML = "";

    this.updateTasks.forEach((updateTask) => {
      descDisplay.innerHTML += TaskDetailTemplate.renderTaskDetail([
        updateTask,
      ]);
    });
  }
}
