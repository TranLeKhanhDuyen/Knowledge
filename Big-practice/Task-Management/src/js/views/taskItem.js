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

//   renderTasks(newTasks, renderFormCallback) {
//     this.taskList.innerHTML = "";
//     newTasks.forEach((newTask) => {
//       const taskItemTemplate = TaskItemTemplate.renderTaskItem(newTask);
//       this.taskList.innerHTML += taskItemTemplate;
//     });

//     this.taskList.addEventListener("click", (e) => {
//       const task = e.target.closest(".task-item[data-id]");
//       const taskId = task.getAttribute("data-id");
//       if (taskId) {
//         const selectedTasks = document.querySelectorAll(".task-item.selected");
//         selectedTasks.forEach((task) => task.classList.remove("selected"));
//         task.classList.add("selected");

//         const taskTitleValue = task.querySelector(".task-title").textContent;

//         // this.taskForm.setAttribute("form-id", taskId);
//         renderFormCallback({ taskTitleDisplay: taskTitleValue });
//       }
//     });
//   }
}
