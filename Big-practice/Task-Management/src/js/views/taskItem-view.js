// import TaskItemTemplate from "../template/taskItem-template";
// import TaskDetailTemplate from "../template/task-detail";
// import TaskModel from "../models/task";
import iconDelete from "../../assets/icons/delete.svg";
import iconClock from "../../assets/icons/clock.svg";
import date from "../utilities/date";

import TaskListModel from "../models/taskList-model";

export default class TaskItemView {
  constructor() {
    this.taskList = document.querySelector(".task-list");
    this.taskInput = document.querySelector(".task-input");
    this.todoBoard = document.getElementById("js-todo");
    this.taskListModel = new TaskListModel();
    // this.taskItem = document.querySelector(".task-item-container");
    this.bindAddTask(this.showTaskItem);

    // Get tasks from API
    this.tasks = [];
  }

  resetForm() {
    this.taskInput.parentElement.reset();
  }

  showTaskItem() {
    console.log(this.tasks);
    // TODO: Refactor later
    // Get task list area
    const taskListDisplay = document.getElementById("task-list");
    console.log(taskListDisplay);
    taskListDisplay.innerHTML = "";

    this.tasks.forEach((data) => {
      // taskListDisplay.innerHTML += TaskItemTemplate.renderTaskItem([taskName]);
      // this.taskListDisplay.appendChild(task.content.firstElementChild(task));
      // taskListDisplay.innerHTML += `<li>${task}</li>`;
      taskListDisplay.innerHTML += `
      <li class="task-item-container" >
      <div class="task-content text-md">
        <h3 class="task-title">${data.taskName}</h3>       
        <img src="${iconDelete}" alt="delete icon" class="delete-icon">
      </div>
      <div class="task-date text-md">
        <p class="date-ago">${date.diffTime(data.createdDate)} days ago</p>
        <div class="date-left text-sm">
          <img src="${iconClock}" class="clock-icon">
          <p>${date.diffTime(data.dueDate, Math.ceil, "left")}</p>
        </div>
      </div>
    </li>
      `;
      console.log(taskListDisplay);
    });
  }

  // const element = document.createElement("template");
  // this.taskList.innerHTML = TaskItemTemplate.renderTaskItem(tasks);
  // this.taskList.appendChild(element.content.firstElementChild);

  bindAddTask() {
    this.taskInput.addEventListener("keyup", async (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        const newTaskName = this.taskInput.value;

        try {
          // Call request to create a task
          const addedTask = await this.taskListModel.addTask(newTaskName);

          // Update the current task list
          // this.tasks = [...this.tasks, addedTask];
          this.tasks.push(addedTask);

          // Show the tasks
          this.showTaskItem();

          // Reset the form
          this.resetForm();
        } catch (error) {
          console.log("task is empty");
        }
      }
    });
  }
}
