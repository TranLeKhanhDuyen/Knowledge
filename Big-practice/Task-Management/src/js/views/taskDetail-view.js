import { ERROR_MESSAGE } from "../constants/message";

export default class TaskDetailView {
  constructor() {
    this.updateData = {};
  }

  // DOMContentLoaded -> bind event
  bindUpdateTask(handle) {
    const formAddDesc = document.querySelector("form.add-description");
    const taskDescContent = document.querySelector(".task-desc");
    console.log(formAddDesc);
    if (formAddDesc) {
      taskDescContent.addEventListener("blur", async (e) => {
        e.preventDefault();
        const description = taskDescContent.textContent;
        const id = document.querySelector(".detail-task-container").dataset.id;
        const { data } = await handle(id, { description });
        try {
          this.updateData = { ...this.updateData, ...data };
          this.showDesc();
        } catch (error) {
          alert(ERROR_MESSAGE.ADD_FAIL);
        }
      });
    }
  }

  showDesc() {
    const descDisplay = document.querySelector(".task-desc");
    descDisplay.innerHTML = "";
    console.log(this.updateData);
    descDisplay.innerHTML += `${this.updateData.description}`;
  }
}
