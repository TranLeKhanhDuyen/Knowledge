import TaskDetailTemplate from "../template/taskDetail-template";

export default class TaskDetailView {
  constructor() {
    this.formAddDesc = document.querySelector("form.add-description");
    this.taskDescContent = document.querySelector(".task-desc");
    this.taskListContainer = document.querySelector(".task-list-container");
    this.updateData = {};
  }

  // DOMContentLoaded -> bind event
  bindUpdateTask(handle) {
    const formAddDesc = document.querySelector("form.add-description");
    const taskDescContent = document.querySelector(".task-desc");
    console.log(formAddDesc);
    if (formAddDesc) {
      console.log(formAddDesc, " nhan duoc event");
      taskDescContent.addEventListener("blur", async (e) => { //focus out
        // if (e.key === "Enter") {
        //   console.log(e.key);
          e.preventDefault();
          const description = taskDescContent.textContent; //vvv
          const id = document.querySelector(".detail-task-container").dataset
            .id;
          const { data } = await handle(id, { description }); 
          try {
            this.updateData = {...this.updateData, ...data};

            this.showDesc();
          } catch (error) {
            alert(ERROR_MESSAGE.ADD_FAIL);
          }
        // }
      });
    }
  }

  showDesc() {
    const descDisplay = document.querySelector(".task-desc");
    descDisplay.innerHTML = "";
    console.log(this.updateData)
    descDisplay.innerHTML += `${this.updateData.description}`
    // this.updateData.forEach((task) => {
    //   descDisplay.innerHTML += TaskDetailTemplate.renderTaskDetail([task]);
    // });
  }
}
