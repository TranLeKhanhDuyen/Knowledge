import TaskTemplate from '';

export default class TaskView {
    constructor() {
        this.taskList = document.querySelector(".task-list");
        this.taskForm = document.querySelector(".add-task-container");
        this.buttonAddTask = document.querySelector(".add-task-button");
        this.buttonDeleteTask = document.querySelector(".button-delete");
    }

    toggleVisibility() {
        this.taskForm.classList.add('hidden');
        this.buttonAddTask.classList.remove('hidden');
        this.buttonDeleteTask.classList.remove('hidden');
      }

    renderTasks(newTasks, renderForm) {
        this.taskListElement.innerHTML = '';
        newTasks.forEach(newTask => {
          const taskTemplate = TaskTemplate.renderTask(newTask);
          this.taskListElement.innerHTML += taskTemplate;
        });
    }
}
