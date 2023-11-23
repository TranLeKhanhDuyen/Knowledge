/* eslint-disable sonarjs/no-duplicate-string */
import TaskItemTemplate from "../template/taskItem-template";
import { ERROR_MESSAGE } from "../constants/message";
import TaskDetailTemplate from "../template/taskDetail-template";

export default class TaskItemView {
  constructor() {
    this.formAddTask = document.querySelector("form.add-task");
    this.taskInput = document.querySelector(".task-input");
    this.taskDetail = document.querySelector(".detail-task-container");

    this.tasks = [];
  }

  resetForm() {
    this.taskInput.parentElement.reset();
  }

  showTaskItem(handleUpdate) {
    // Get task list area
    const taskListDisplay = document.querySelector(".task-list");
    taskListDisplay.innerHTML = "";

    this.tasks.forEach((task) => {
      taskListDisplay.innerHTML += TaskItemTemplate.renderTaskItem([task]);
    });

    this.updateDraggableTasks(handleUpdate);
  }

  bindAddTask(handle, handleUpdate) {
    this.formAddTask.addEventListener("keydown", async (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        const newTaskName = this.taskInput.value;
        const newTask = await handle(newTaskName);
        try {
          this.tasks = [...this.tasks, newTask];
          // Show the tasks
          this.showTaskItem(handleUpdate);
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
    const taskList = document.querySelector(".task-list");
    taskList.addEventListener("click", async (e) => {
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

  /* HANDLE DRAG DROP */
  //remove -> add
  
  updateDraggableTasks(handler) {
    // Add event listeners for each task item
    const todos = document.querySelectorAll(".task-item-container");

    console.log("todos", todos)

    todos.forEach((task) => {
      console.log("hi");
      task.addEventListener("dragstart", this.dragStart.bind(this));
      task.addEventListener("dragend", this.dragEnd.bind(this));
    });

    console.log("handler 10", handler);

    const taskBoards = document.querySelectorAll(".task-board");
    taskBoards.forEach((board) => {
      board.addEventListener("dragover", this.dragOver.bind(this));
      board.addEventListener("drop", (e) => this.dragDrop(e, handler));
    });
  }

  dragStart(e) {
    e.dataTransfer.setData("text/plain", e.target.dataset.id);
    console.log("ni", e.target.dataset); //OK

    console.log("dragStart status:", e.target.dataset.status); //OK
    // Stores the current state
    // e.target.dataset.oldStatus = e.target.dataset.status;
    // console.log("oldStatus:", e.target.dataset.oldStatus); //OK

    // Add class to represent drag
    e.target.classList.add("dragged-task");
  }

  dragEnd() {
    // Remove the class when dragging ends
    const draggedTask = document.querySelector(".dragged-task");
    console.log("draggedTask", draggedTask); //OK
    if (draggedTask) {
      draggedTask.classList.remove(".dragged-task");
    }
  }

  dragOver(e) {
    e.preventDefault();
  }

  dragDrop = async (e, handler) => {
    e.preventDefault();

    // console.log("e", e.dataTransfer)
    const taskId = e.dataTransfer.getData("text/plain");

    // console.log("taskId:", taskId); //OK
    const draggedTask = document.querySelector(`[data-id="${taskId}"]`);
    // console.log("draggedTask: ", draggedTask); //OK
    const targetBoard = e.target.closest(".task-board");
    // console.log("targetBoard:", targetBoard);

    if (targetBoard && draggedTask) {
      // Check and set default value for targetBoard.id
      const targetBoardId = targetBoard.id || "js-default";
      // console.log("targetBoardId: ", targetBoardId);

      const newStatus = targetBoardId.split("js-")[1] || null; //OK
      // console.log("newStatus:", newStatus);

      console.log("handler 20", handler)

      handler(taskId, { status: newStatus });

      // console.log("data dc di ma", data);

      const oldStatus = draggedTask.dataset.oldStatus; //FAIL
      // console.log("oldStatus:", oldStatus);

      // Update status for item of this.tasks
      const updateTasks = this.tasks.map((task) => {
        console.log(targetBoard);
        if (task.id === taskId) {
          task.status = newStatus;
          console.log(newStatus);
        }
        return task;
      });

      this.tasks = updateTasks;

      // Move taskItem to new state
      draggedTask.parentNode.removeChild(draggedTask);
      targetBoard.querySelector(".task-list").appendChild(draggedTask);

      // Delete taskItem from its old state
      this.tasks = this.tasks.filter((task) => task.status !== oldStatus);
    }
  }
}
