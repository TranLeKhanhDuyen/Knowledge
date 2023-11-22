import TaskItemTemplate from "../template/taskItem-template";
import { ERROR_MESSAGE } from "../constants/message";
import TaskDetailTemplate from "../template/taskDetail-template";

export default class TaskItemView {
  constructor() {
    this.taskList = document.querySelector(".task-list");
    this.formAddTask = document.querySelector("form.add-task");
    this.taskInput = document.querySelector(".task-input");
    this.taskDetail = document.querySelector(".detail-task-container");
    // this.todos = document.querySelectorAll(".task-item-container");

    // this.board = document.querySelector(".task-board");
    // Get tasks from API
    this.tasks = [];
    this.handleDrag();
  }

  updateDraggableTasks() {
    // Add event listeners for each task item
    // eslint-disable-next-line sonarjs/no-duplicate-string
    const todos = document.querySelectorAll(".task-item-container");
    todos.forEach((task) => {
      task.addEventListener("dragstart", this.dragStart.bind(this));
      task.addEventListener("dragend", this.dragEnd.bind(this));
    });
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

    this.updateDraggableTasks();
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

  /* HANDLER TASK DETAIL */

  bindTaskDetail(handleUpdate, handleFind) {
    this.taskList.addEventListener("click", async (e) => {
      const taskItem = e.target.closest(".task-item-container");
      const taskId = taskItem.dataset.id;
      const selectedTask = await handleFind(taskId);
      if (handleUpdate) {
        this.renderTaskDetail([selectedTask], handleUpdate);

        const closeIcons = document.querySelectorAll(".close-icon");
        closeIcons.forEach((closeIcon) => {
          closeIcon.addEventListener("click", () => {
            this.closeTaskDetail();
          });
        });
      }
    });
  }

  renderTaskDetail(selectedTask, handleUpdateTask) {
    const detailContainer = document.querySelector(".detail-container");
    detailContainer.innerHTML =
      TaskDetailTemplate.renderTaskDetail(selectedTask);
    // Add event update task
    handleUpdateTask();
  }

  closeTaskDetail() {
    const detailContainers = document.querySelectorAll(
      ".detail-task-container"
    );
    detailContainers.forEach((detailContainer) => {
      if (detailContainer) {
        detailContainer.classList.add("hidden");
      }
    });
  }

  // HANFLE DRAG DROP

  handleDrag() {
    // Add event for each task item
    const todos = document.querySelectorAll(".task-item-container");
    todos.forEach((task) => {
      task.addEventListener("dragstart", this.dragStart.bind(this));
      task.addEventListener("dragend", this.dragEnd.bind(this));
    });

    // Add event for task boards
    const taskBoards = document.querySelectorAll(".task-board");
    taskBoards.forEach((board) => {
      board.addEventListener("dragover", this.dragOver.bind(this));
      board.addEventListener("drop", this.dragDrop.bind(this));
    });

    //Display task detail => fail
    todos.forEach((task) => {
      task.addEventListener("click", this.bindTaskDetail.bind(this));
    });
  }

  dragStart(e) {
    e.dataTransfer.setData("text/plain", e.target.dataset.id);
    console.log(e.target.dataset.id); //ok
    // Add a class để biểu thị việc drag
    e.target.classList.add("dragged-task");
    console.log("dragStart");
  }

  dragEnd() {
    // Remove the class when dragging ends
    const draggedTask = document.querySelector(".dragged-task");
    console.log("draggedTask", draggedTask); //OK
    if (draggedTask) {
      draggedTask.classList.remove("dragged-task");
    }
  }

  dragOver(e) {
    e.preventDefault();
  }

  dragDrop(e) {
    e.preventDefault();
    const taskId = e.dataTransfer.getData("text/plain");
    const draggedTask = document.querySelector(`[data-id="${taskId}"]`);
    const targetBoard = e.target.closest(".task-board");

    if (targetBoard && draggedTask) {
      draggedTask.parentNode.removeChild(draggedTask);
      targetBoard.querySelector(".task-list").appendChild(draggedTask);

      this.updateDraggableTasks();
    }
  }
}
