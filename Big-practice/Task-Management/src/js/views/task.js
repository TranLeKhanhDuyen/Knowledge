import TaskItem from "../template/task-item";

export default class TaskView {
  constructor() {
    this.taskName = document.querySelector(".task-input");
    this.todoStatus = document.querySelector(".todo");
    this.taskList = document.querySelector(".task-list");
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
