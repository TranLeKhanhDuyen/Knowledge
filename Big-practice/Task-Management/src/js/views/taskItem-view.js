import TaskItemTemplate from "../template/taskItem-template";
// import TaskDetailTemplate from "../template/task-detail";
// import TaskModel from "../models/task";
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

  // showTaskItem(tasks) {
  //   tasks.forEach((task) => {
  //     const templateTaskItem = document.createElement("template");
  //     templateTaskItem.innerHTML = TaskItemTemplate.renderTaskItem(task);
  //     this.todoBoard.appendChild(templateTaskItem.content.firstElementChild);
  //   });
  // }

  showTaskItem() {
    console.log(this.tasks);

    // TODO: Refactor later
    // Get task list area

    let taskListDisplay = document.getElementById("task-list")
    taskListDisplay.innerHTML = ""

    this.tasks.forEach(({ taskName }) => {
      taskListDisplay.innerHTML += `<li>${taskName}</li>`
    })

    return
    const element = document.createElement("template");
    this.taskList.innerHTML = TaskItemTemplate.renderTaskItem(tasks);
    this.taskList.appendChild(element.content.firstElementChild);
  }

  bindAddTask() {
    this.taskInput.addEventListener("keyup", async (e) => {
      if (e.key === "Enter" ) {
        e.preventDefault();
        const newTaskName = this.taskInput.value;
       
        try {
          // Call request to create a task
          const addedTask = await this.taskListModel.addTask(newTaskName);
          
          // Update the current task list
          this.tasks = [...this.tasks, addedTask]

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
