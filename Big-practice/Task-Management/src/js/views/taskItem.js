import TaskItemTemplate from "../template/task-item";
import TaskModel from "../models/task";

export default class TaskItemView {
  constructor() {
    this.taskList = document.querySelector(".task-list");
    this.taskInput = document.querySelector(".task-input");

    this.taskInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter" && this.taskInput.value.trim() !== "") {
        e.preventDefault();
        const newTask = new TaskModel(this.taskInput.value);
        const taskItemTemplate = TaskItemTemplate.renderTaskItem({
          id: Math.random(), 
          task: {
            title: newTask.taskName,
            createDate: newTask.createdDate,
            dueDate: newTask.dueDate,
          },
        });
        this.taskList.innerHTML += taskItemTemplate;
        this.taskInput.value = "";
      }
    });
  }
}
