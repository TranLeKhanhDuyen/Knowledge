import TaskItemTemplate from "../template/task-item";
// import TaskDetailTemplate from "../template/task-detail";
import TaskModel from "../models/task";
// import TaskListModel from "../models/task-list";
import Storage from "../utilities/localStorage";

export default class TaskItemView {
  constructor() {
    this.taskList = document.querySelector(".task-list");
    this.taskInput = document.querySelector(".task-input");
    // this.taskItem = document.querySelector(".task-item-container");
    this.handlerShowTask();
    this.bindTaskDetail();
    this.displayTasksFromLocalStorage();
  }

  displayTasksFromLocalStorage() {
    const tasks = Storage.getData("tasks") || [];
    tasks.forEach((taskData) => {
      const taskItem = TaskItemTemplate.renderTaskItem(taskData);
      this.taskList.innerHTML += taskItem;
    });
  }

  handlerShowTask() {
    this.taskInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter" && this.taskInput.value.trim() !== "") {
        e.preventDefault();
        const newTask = new TaskModel(this.taskInput.value);
        const taskData = {
          id: Math.random(),
          task: {
            title: newTask.taskName,
            createDate: newTask.createdDate,
            dueDate: newTask.dueDate,
          },
        };

        //save new task at Local Storage
        const tasks = Storage.getData("tasks") || []; // get tasks from Local Storage
        tasks.push(taskData); // add new task to tasks
        Storage.setData("tasks", tasks); // save new tasks mới to Local Storage

        const taskItem = TaskItemTemplate.renderTaskItem(taskData);
        this.taskList.innerHTML += taskItem;
        this.taskInput.value = "";
      }
    });
  }

  bindTaskDetail() {
    const taskList = document.querySelector(".task-list");
    taskList.addEventListener("click", (e) => {
      if (e.target.closest(".task-item-container")) {
        console.log("cs");
        const taskDetailData = this.getTaskDetailData();
        if (taskDetailData) {
          this.renderTaskDetail(taskDetailData);
        }
      }
    });
  }
}
