import editIcon from "../assets/icons/icon-option.png";

export default class taskTemplate {
    constructor() {}

    static renderTask = (newTask) =>
        `<li class="task-item" data-id="${newTask.id}" >
            <div class="task-wrapper task-check">
              <span class="icon-checked">
              </span>
              <p class="task-name">${newTask.taskNameDisplay}</p>
            </div>
            <div class="task-wrapper">
              <div class="task-item-done">
              <span class="task-actual">0</span>
        
              <span class="task-est">${newTask.est}</span>
            </div>
             <button class="btn-option">
              <img src="${editIcon}" alt="icon more" class="icon-more edit">
        </button>
      </div>
    </li>
    `;
}