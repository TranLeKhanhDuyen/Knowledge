import TaskItemTemplate from "../template/taskItem-template";
// import TaskDetailTemplate from "../template/taskDetail-template";
import TaskListModel from "../models/taskList-model";
import { ERROR_MESSAGE } from "../constants/message";

export default class TaskItemView {
  constructor() {
    this.taskList = document.querySelector(".task-list");
    this.formAddTask = document.querySelector("form.add-task");
    this.taskInput = document.querySelector(".task-input");
    this.todoBoard = document.getElementById("js-todo");
    this.taskListModel = new TaskListModel();

    // Get tasks from API
    this.tasks = [];
  }

  resetForm() {
    this.taskInput.parentElement.reset();
  }

  showTaskItem() {
    // Get task list area
    const taskListDisplay = document.querySelector(".task-list");
    taskListDisplay.innerHTML = "";

    this.tasks.forEach((task) => {
      taskListDisplay.innerHTML += TaskItemTemplate.renderTaskItem([task]);
    });
  }

  bindAddTask(handler) {
    this.formAddTask.addEventListener("submit", async (e) => {
      e.preventDefault();
      e.stopPropagation();
      console.log(this.taskInput);
      const newTaskName = this.taskInput.value;
      console.log(newTaskName);
      const newTask = await handler(newTaskName);
      try {
        this.tasks = [...this.tasks, newTask];
        console.log(this.tasks);

        // Show the tasks
        this.showTaskItem();

        // Reset the form
        this.resetForm();
      } catch (error) {
        alert(ERROR_MESSAGE.ADD_FAIL);
      }
    });
  }
}
