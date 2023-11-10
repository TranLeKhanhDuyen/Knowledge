export default class TaskDetailView {
  constructor() {
    this.formAddDesc = document.querySelector("form.add-description");
    this.inputDesc = document.querySelector(".input-description");
    // this.taskListContainer = document.querySelector(".task-list-container");
    this.updateTasks = [];
  }

  bindUpdateTask(handler) {
    this.formAddDesc.addEventListener("keydown", async (e) => {
      console.log(e.key)
      if (e.key === "Enter") {
        e.preventDefault();
        const inputDesc = this.inputDesc.value;
        const taskDesc = await handler(inputDesc);
        try {
          this.updateTasks = [...this.updateTasks, taskDesc];
          this.showTaskDesc();
        } catch (erro) {
          console.log("...");
        }
      }
    });
  }

  showTaskDesc(taskDesc) {
    // Display the task description on the client's screen
    const taskElement = document.createElement("div");
    taskElement.textContent = taskDesc;
    this.inputDesc.value = taskDesc;
    this.inputDesc.appendChild(taskElement);

    // You can customize this method based on your HTML structure and styling
  }
}
