import TaskItemTemplate from "../template/taskItem-template";
import { ERROR_MESSAGE } from "../constants/message";
import TaskDetailTemplate from "../template/taskDetail-template";

export default class TaskItemView {
  constructor() {
    this.taskList = document.querySelector(".task-list");
    this.formAddTask = document.querySelector("form.add-task");
    this.taskInput = document.querySelector(".task-input");
    this.taskItem = document.querySelector(".task-item-container");
    this.taskDetail = document.querySelector(".detail-task-container");
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

  bindAddTask(handle) {
    this.formAddTask.addEventListener("keydown", async (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        const newTaskName = this.taskInput.value;
        const newTask = await handle(newTaskName);
        try {
          this.tasks = [...this.tasks, newTask];
          // Show the tasks
          this.showTaskItem();

          // Reset the form
          this.resetForm();
        } catch (error) {
          alert(ERROR_MESSAGE.ADD_FAIL);
        }
      }
    });
  }

  bindTaskDetail(handle) {
    this.taskList.addEventListener("click", async (e) => {
      const taskItem = e.target.closest(".task-item-container");
      const taskId = taskItem.dataset.id;
      const selectedTask = this.tasks.find(
        (task) => Number(task.id) === Number(taskId)
      );

      console.log("Selected Task:", selectedTask);

      if (handle) {
        this.renderTaskDetail(selectedTask);
        console.log(this.renderTaskDetail(selectedTask));
      }
    });
  }

  renderTaskDetail(selectedTask) {
    const taskDetail = document.querySelectorAll(".detail-task-container");
    console.log("Task Detail Container:", taskDetail);

    if (taskDetail) {
      taskDetail.innerHTML = TaskDetailTemplate.renderTaskDetail([
        selectedTask,
      ]);
    } else {
      console.error("Cannot find .detail-task-container");
    }
  }

  // bindTaskDetail() {
  //   this.taskList.addEventListener("click", async (e) => {
  //     const taskItem = e.target.closest(".task-item-container");
  //     const taskId = taskItem.dataset.id;

  //     const selectedTask = this.tasks.find(
  //       (task) => Number(task.id) === Number(taskId)
  //     );
  //     console.log(selectedTask);
  //     if (taskItem) {
  //       taskItem.innerHTML = TaskDetailTemplate.renderTaskDetail([
  //         selectedTask,
  //       ]);
  //     }
  //   });
  // }
  // taskDetail.innerHTML += TaskDetailTemplate.renderTaskDetail(data);

  // handleTaskDetail = (event) => {
  //   const taskItem = document.querySelector(".task-item-container");
  //   const closeIconElement = document.querySelector(".close-icon ");

  //   const showTaskDetail = [
  //     {
  //       element: taskItem,
  //       action: () => {
  //         taskItem.classList.add("active");
  //       },
  //     },
  //     {
  //       element: closeIconElement,
  //       action: () => {
  //         taskItem.classList.remove("active");
  //       },
  //     },
  //   ];

  //   for (const displayTaskDetail of showTaskDetail) {
  //     if (event.target === displayTaskDetail.element) {
  //       displayTaskDetail.action();
  //     }
  //   }
  // };
}
