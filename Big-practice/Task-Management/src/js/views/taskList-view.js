import TaskListTemplate from "../template/taskList-template";
import { ERROR_MESSAGE } from "../constants/message";
import TaskDetailTemplate from "../template/taskDetail-template";
import STATUS from "../constants/status";

export default class TaskListView {
  constructor() {
    this.formAddTask = document.querySelector("form.add-task");
    this.taskInput = document.querySelector(".task-input");
    this.taskList = document.querySelector(".task-list");
    this.listTodo = document.querySelector("#todo");
    this.listProgress = document.querySelector("#progress");
    this.listDone = document.querySelector("#done");
    this.listArchived = document.querySelector("#archived");

    this.tasks = [];
  }
  resetForm() {
    this.taskInput.parentElement.reset();
  }

  /**
   * Render all tasks from the API
   * @param {Array<Task>} tasks
   * @returns {void}
   */
  showTaskItem(tasks) {
    if (!tasks.length) return;

    this.tasks = tasks;

    // Get task list area
    this.listTodo.innerHTML = "";
    this.listProgress.innerHTML = "";
    this.listDone.innerHTML = "";
    this.listArchived.innerHTML = "";

    const taskStatus = Object.values(STATUS);

    [
      this.listTodo,
      this.listProgress,
      this.listDone,
      this.listArchived,
    ].forEach((listElement, index) => {
      const filterTasks = tasks.filter(
        (task) => task.status === taskStatus[index]
      );
      listElement.innerHTML += TaskListTemplate.renderTaskList(filterTasks);
    });

    this.updateDraggableTasks();
  }

  bindAddTask(handle) {
    this.formAddTask.addEventListener("keydown", async (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        const newTaskName = this.taskInput.value;
        try {
          const newTask = await handle(newTaskName);
          this.listTodo.innerHTML =
            TaskListTemplate.renderTaskList([newTask]) +
            this.listTodo.innerHTML;
          this.resetForm();
        } catch (error) {
          alert(ERROR_MESSAGE.ADD_FAIL);
        }
      }
    });
  }

  // HANDLER TASK DETAIL

  getTaskItem(target) {
    return target.closest(".task-item-container");
  }

  bindTaskDetail(handleInitEvent, handleFind, handleGetAllComments) {
    document.body.addEventListener("click", async (e) => {
      const taskItem = this.getTaskItem(e.target);

      if (e.target.closest(".delete")) {
        return;
      }

      if (taskItem) {
        const taskId = taskItem.dataset.id;
        const selectedTask = await handleFind(taskId);
        const comments = await handleGetAllComments(+taskId);

        if (handleInitEvent) {
          this.renderTaskDetail(selectedTask, comments, handleInitEvent);

          const closeIcons = document.querySelectorAll(".close-icon");
          closeIcons.forEach((closeIcon) => {
            closeIcon.addEventListener("click", () => {
              this.closeTaskDetail();
            });
          });
        }
      }
    });
  }

  revalidateTasks(tasks) {
    this.tasks = tasks;
  }

  renderTaskDetail(selectedTasks, comments, handleInitTaskDetailEvent) {
    const detailContainer = document.querySelector(".detail-container");
    detailContainer.innerHTML = TaskDetailTemplate.renderTaskDetail(
      selectedTasks,
      comments
    );

    //Init all event for task detail
    handleInitTaskDetailEvent();
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

  //  HANDLE DRAG DROP

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

  //  HANDLE DELETE

  bindDelete(handleDelete) {
    document.body.addEventListener("click", async (e) => {
      const deleteButton = e.target.closest(".delete");
      if (deleteButton) {
        const taskItem = this.getTaskItem(deleteButton);
        if (taskItem) {
          const taskId = taskItem.dataset.id;

          const userConfirmed = confirm(
            "Are you sure you want to delete this task?"
          );

          if (userConfirmed) {
            try {
              await handleDelete(taskId);
              taskItem.remove();
            } catch (error) {
              alert(error);
            }
          }
        }
      }
    });
  }

  bindSearchTask() {
    const searchInput = document.querySelector(".search-input");
    const taskElements = document.getElementsByClassName("task-item-container");

    searchInput.addEventListener("input", () => {
      const searchTerm = searchInput.value.toLowerCase();
      const filteredTasks = this.tasks.filter(
        (task) =>
          task.taskName && task.taskName.toLowerCase().includes(searchTerm)
      );

      Array.from(taskElements).forEach((task) => {
        const isInSearchArr = filteredTasks.some(
          (item) => item.id === +task.dataset.id
        );

        if (isInSearchArr) {
          task.style.display = "block";
          return;
        }

        task.style.display = "none";
      });
    });
  }
}