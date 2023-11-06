import TaskItemTemplate from "../template/taskItem-template";
// import TaskDetailTemplate from "../template/taskDetail-template";
import TaskListModel from "../models/taskList-model";

export default class TaskItemView {
  constructor() {
    this.taskList = document.querySelector(".task-list");
    this.taskInput = document.querySelector(".task-input");
    this.todoBoard = document.getElementById("js-todo");
    this.taskListModel = new TaskListModel();
    this.bindAddTask(this.showTaskItem);
    // this.showTaskDetail();

    // Get tasks from API
    this.tasks = [];
  }

  resetForm() {
    this.taskInput.parentElement.reset();
  }

  showTaskItem() {
    // Get task list area
    const taskListDisplay = document.querySelector(".task-list");
    console.log(taskListDisplay);
    taskListDisplay.innerHTML = "";

    this.tasks.forEach((task) => {
      taskListDisplay.innerHTML += TaskItemTemplate.renderTaskItem([task]);
    });
  }

  bindAddTask() {
    this.taskInput.addEventListener("keyup", async (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        const newTaskName = this.taskInput.value;

        try {
          // Call request to create a task
          const addedTask = await this.taskListModel.addTask(newTaskName);

          // Update the current task list
          this.tasks = [...this.tasks, addedTask];
          // this.tasks.push(addedTask);

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
