
class taskTemplate {
    constructor() {}

    static renderTask = (newTask) =>
        `<li class="task-item" data-id="${newTask.id}" >
            <div class="task-wrapper task-check">
              <span class="icon-checked">
              </span>
              <p class="task-name">${newTask.taskName}</p>
            </div>
    `;
}
