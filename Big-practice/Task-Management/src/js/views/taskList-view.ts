import { TaskModel } from './../models/task-model';
import TaskListTemplate from '../templates/taskList-template';
import {
  CONFIRM_MESSAGE,
  ERROR_MESSAGE,
  SUCCESS_MESSAGE
} from '../constants/message';
import TaskDetailTemplate from '../templates/taskDetail-template';
import { STATUS } from '../constants/status';
import showSuccessMessage from '../utilities/showMessage';
import TaskDetailView from './taskDetail-view';

export default class TaskListView {
  private formAddTask: HTMLFormElement;
  private taskInput: HTMLInputElement;
  private taskList: NodeListOf<Element>;
  private listTodo: HTMLElement;
  private listProgress: HTMLElement;
  private listDone: HTMLElement;
  private listArchived: HTMLElement;
  private tasks: TaskModel[]; // Declare tasks property

  constructor() {
    this.formAddTask = document.querySelector(
      'form.add-task'
    ) as HTMLFormElement;
    this.taskInput = this.formAddTask.querySelector(
      '.task-input'
    ) as HTMLInputElement;
    this.taskList = document.querySelectorAll('.task-list');
    this.listTodo = document.querySelector('#todo') as HTMLElement;
    this.listProgress = document.querySelector('#progress') as HTMLElement;
    this.listDone = document.querySelector('#done') as HTMLElement;
    this.listArchived = document.querySelector('#archived') as HTMLElement;
  }

  /**
   * Render all tasks from the API
   * @param {Array<Task>} tasks
   * @returns {void}
   */
  public showTasks(tasks: TaskModel[]): void {
    if (!tasks.length) return;

    this.tasks = tasks;

    // Get task list area
    this.listTodo.innerHTML = '';
    this.listProgress.innerHTML = '';
    this.listDone.innerHTML = '';
    this.listArchived.innerHTML = '';

    const taskStatus = Object.values(STATUS);

    [
      this.listTodo,
      this.listProgress,
      this.listDone,
      this.listArchived
    ].forEach((listElement, index) => {
      const filterTasks = tasks.filter(
        (task) => task.status === taskStatus[index]
      );
      listElement.innerHTML += TaskListTemplate.renderTaskList(filterTasks);
    });

    this.updateDraggableTasks();
  }

  public bindAddTask(handle: (newTaskName: string) => Promise<string>): void {
    this.formAddTask.addEventListener('keydown', async (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();

        if (!navigator.onLine) return alert(ERROR_MESSAGE.INTERNET_ERROR);

        const newTaskName = this.taskInput.value.trim();

        if (!newTaskName) return alert(ERROR_MESSAGE.TASK_EMPTY);

        try {
          const newTask = await handle(newTaskName);

          this.listTodo.insertAdjacentHTML(
            'beforeend',
            TaskListTemplate.renderTaskList([newTask])
          );

          showSuccessMessage(SUCCESS_MESSAGE.ADD_SUCCESS);

          this.resetForm();

          const taskElement = document.querySelector(
            '.task-item-container:last-child'
          );

          // Check if taskElement is not null before adding the event listener
          taskElement?.addEventListener('dragstart', this.dragStart.bind(this));
        } catch (error) {
          alert(ERROR_MESSAGE.SERVER_ERROR);
        }
      }
    });
  }

  private resetForm(): void {
    const formElement = this.taskInput.parentElement;
    if (formElement instanceof HTMLFormElement) {
      formElement.reset();
    }
  }

  // HANDLER TASK DETAIL

  private getTaskItem(target: EventTarget): HTMLElement | null {
    return (target as HTMLElement).closest('.task-item-container');
  }

  //  HANDLE DRAG DROP

  private updateDraggableTasks(): void {
    // Add event listeners for each task item
    const todos = document.querySelectorAll('.task-item-container');
    todos.forEach((task) => {
      task.addEventListener('dragstart', this.dragStart.bind(this));
    });
  }

  private dragStart(e) {
    e.dataTransfer.setData('text/plain', e.target.dataset.id);
    // Add class to represent drag
    e.target.classList.add('dragged-task');
  }

  public addBoardEvent(handler: (taskId: string, newStatus: string | {}) => void): void {
    const taskBoards = document.querySelectorAll('.task-board');
    taskBoards.forEach((board) => {
      board.addEventListener('dragover', this.dragOver.bind(this));
      board.addEventListener('drop', (e) =>
        this.dragDrop(e as DragEvent, handler)
      );
    });
  }

  private dragOver(e: DragEvent): void {
    e.preventDefault();
  }

  private dragDrop = async (
    e: DragEvent,
    handler: (taskId: string, newStatus: string | {}) => void
  ): Promise<void> => {
    e.preventDefault();

    if (!navigator.onLine) return alert(ERROR_MESSAGE.INTERNET_ERROR);

    const taskId = e.dataTransfer?.getData('text/plain') || '';
    const draggedTask = document.querySelector(
      `[data-id="${taskId}"]`
    ) as HTMLElement;
    const targetBoard = (e.target as HTMLElement).closest(
      '.task-board'
    ) as HTMLElement;

    if (targetBoard && draggedTask) {
      // Check and set default value for targetBoard.id
      const targetBoardId = targetBoard.id || 'js-default';
      const newStatus = targetBoardId.split('js-')[1] || 'todo  ';
      handler(taskId, { status: newStatus });
      // Move taskItem to new state
      draggedTask.parentNode?.removeChild(draggedTask);
      targetBoard.querySelector('.task-list')?.appendChild(draggedTask);
    }
  };

  //  HANDLE DELETE

  public bindDelete(handleDelete: (taskId: string) => Promise<number>): void {
    this.taskList.forEach((taskList) => {
      taskList.addEventListener('click', async (e) => {
        if (!e.target) return;

        const deleteButton = (e.target as Element).closest('.delete');

        if (!deleteButton) return;

        if (!navigator.onLine) return alert(ERROR_MESSAGE.INTERNET_ERROR);

        const taskItem = this.getTaskItem(deleteButton);

        if (!taskItem) return;
        const taskId = taskItem.dataset.id || '';

        const userConfirmed = confirm(CONFIRM_MESSAGE.DELETE_TASK);

        if (!userConfirmed) return;
        try {
          const status = await handleDelete(taskId);

          if (status !== 200) return alert(ERROR_MESSAGE.DELETE_FAIL);

          taskItem.remove();

          showSuccessMessage(SUCCESS_MESSAGE.DELETE_SUCCESS);
        } catch (error) {
          alert(error);
        }
      });
    });
  }

  public bindSearchTask(): void {
    const searchInput = document.querySelector(
      '.search-input'
    ) as HTMLInputElement | null;
    const taskElements = document.getElementsByClassName(
      'task-item-container'
    ) as HTMLCollectionOf<HTMLDivElement>;

    searchInput?.addEventListener('input', () => {
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
          task.style.display = 'block';
          return;
        }

        task.style.display = 'none';
      });
    });
  }

  public bindTaskDetail(
    handleInitEvent,
    handleFind,
    handleGetAllComments
  ): void {
    this.taskList.forEach((taskList) => {
      taskList.addEventListener('click', async (e) => {
        const taskItem = this.getTaskItem(e.target as HTMLElement);

        if ((e.target as Element).closest('.delete')) return;

        if (!taskItem) return;

        if (!navigator.onLine) return alert(ERROR_MESSAGE.INTERNET_ERROR);

        const taskId = taskItem.dataset.id;

        if (!taskId) return;

        const selectedTask = await handleFind(taskId);

        if (!selectedTask) return;

        const comments = await handleGetAllComments(+taskId);

        if (!handleInitEvent) return;

        this.renderTaskDetail(selectedTask, comments, handleInitEvent);

        const closeIcons = document.querySelectorAll('.close-icon');
        closeIcons.forEach((closeIcon) => {
          closeIcon.addEventListener('click', () => {
            this.closeTaskDetail();
          });
        });
      });
    });
  }

  public renderTaskDetail(
    selectedTasks,
    comments,
    handleInitTaskDetailEvent
  ): void {
    const overlay = document.querySelector('.overlay') as HTMLElement;
    const detailContainer = document.querySelector(
      '.detail-container'
    ) as HTMLElement;

    if (!overlay || !detailContainer) return;

    document.body.insertBefore(overlay, detailContainer);

    overlay.style.display = 'block';

    detailContainer.innerHTML = TaskDetailTemplate.renderTaskDetail(
      selectedTasks,
      comments
    );

    // Init all event for task detail
    handleInitTaskDetailEvent();
  }

  public closeTaskDetail(): void {
    const detailContainers = document.querySelectorAll(
      '.detail-task-container'
    );
    const overlay = document.querySelector('.overlay') as HTMLElement;

    detailContainers.forEach((detailContainer) => {
      if (!detailContainer || !overlay) return;
      detailContainer.classList.add('hidden');
      overlay.style.display = 'none';
    });
  }
}
