import TaskItemTemplate from "../template/taskItem-template";
import { ERROR_MESSAGE } from "../constants/message";
import TaskDetailTemplate from "../template/taskDetail-template";
import APITask from "../services/task";
import STATUS from "../constants/status";

export default class TaskItemView {
  constructor() {
    this.formAddTask = document.querySelector("form.add-task");
    this.taskInput = document.querySelector(".task-input");
    this.taskDetail = document.querySelector(".detail-task-container");
    this.taskList = document.querySelector(".task-list");
    this.listTodo = document.querySelector("#todo");
    this.listProgress = document.querySelector("#progress");
    this.listDone = document.querySelector("#done");
    this.listArchived = document.querySelector("#archived");
  }

  async syncTasks() {
    this.tasks =
      (await new APITask("/tasks").getTask().then((res) => res.data)) || [];
  }

  resetForm() {
    this.taskInput.parentElement.reset();
  }

  showTaskItem(handleUpdate) {
    // Get task list area
    this.listTodo.innerHTML = "";
    this.listProgress.innerHTML = "";
    this.listDone.innerHTML = "";
    this.listArchived.innerHTML = "";

    const taskStatus = Object.values(STATUS);

    Array.from([
      this.listTodo,
      this.listProgress,
      this.listDone,
      this.listArchived,
    ]).forEach((listElm, idx) => {
      const filterTasks = this.tasks.filter(
        (task) => task.status === taskStatus[idx]
      );
      console.log(this.tasks);
      listElm.innerHTML += TaskItemTemplate.renderTaskItem(filterTasks);
    });

    this.updateDraggableTasks(handleUpdate);
  }

  bindAddTask(handle, handleUpdate) {
    this.showTaskItem(handleUpdate);
    this.formAddTask.addEventListener("keydown", async (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        const newTaskName = this.taskInput.value;
        const newTask = await handle(newTaskName);
        try {
          this.tasks = [...this.tasks, newTask];
          // console.log(this.tasks)

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

  revalidateTasks(tasks) {
    this.tasks = tasks;
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
  updateDraggableTasks() {
    // Add event listeners for each task item
    const todos = document.querySelectorAll(".task-item-container");

    todos.forEach((task) => {
      task.addEventListener("dragstart", this.dragStart.bind(this));
    });
  }

  addBoardEvent(handler) {
    const taskBoards = document.querySelectorAll(".task-board");
    taskBoards.forEach((board) => {
      board.addEventListener("dragover", this.dragOver.bind(this));
      board.addEventListener("drop", (e) => this.dragDrop(e, handler));
    });
  }
  dragStart(e) {
    e.dataTransfer.setData("text/plain", e.target.dataset.id);
    // Add class to represent drag
    e.target.classList.add("dragged-task");
  }

  dragOver(e) {
    e.preventDefault();
  }

  dragDrop = async (e, handler) => {
    e.preventDefault();
    const taskId = e.dataTransfer.getData("text/plain");
    const draggedTask = document.querySelector(`[data-id="${taskId}"]`);
    const targetBoard = e.target.closest(".task-board");

    if (targetBoard && draggedTask) {
      // Check and set default value for targetBoard.id
      const targetBoardId = targetBoard.id || "js-default";
      const newStatus = targetBoardId.split("js-")[1] || null;

      handler(taskId, { status: newStatus });
      // Move taskItem to new state
      draggedTask.parentNode.removeChild(draggedTask);
      targetBoard.querySelector(".task-list").appendChild(draggedTask);
    }
  };
}
