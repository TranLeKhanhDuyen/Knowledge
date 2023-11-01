import TaskItem from "../template/task-item";

export default class TaskView {
  constructor() {
    this.taskName = document.querySelector(".task-input");
    this.todoStatus = document.querySelector(".todo");
    this.inProgressStatus = document.querySelector(".inprogress");
    this.doneStatus = document.querySelector(".done");
    this.archivedStatus = document.querySelector(".archived");
    this.taskBoard = document.querySelector(".task-board");
    this.tasks = [];
  }

  resetForm() {
    this.taskName.parentElement.reset();
  }

  showNewTask({ id, taskName, createDate, dueDate }) {
    const element = document.createElement("template");
    element.innerHTML = TaskItem.renderTaskItem(
      id,
      taskName,
      createDate,
      dueDate
    );
    this.todoStatus.appendChild(element.content.firstElementChild);
  }

  bindAddTask(handler) {
    this.taskName.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        event.preventDefault();
        handler(this.taskName.value);
      }
    });
  }
}
