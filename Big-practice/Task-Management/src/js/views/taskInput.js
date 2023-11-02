// import TaskItemTemplate from "../template/task-item";

// export default class TaskView {
//   constructor() {
//     this.taskInput = document.querySelector(".task-input");
//     this.todoStatus = document.querySelector(".todo");
//     this.inProgressStatus = document.querySelector(".inprogress");
//     this.doneStatus = document.querySelector(".done");
//     this.archivedStatus = document.querySelector(".archived");
//     this.taskBoard = document.querySelector(".task-board");
//     this.tasks = [];
//   }

//   resetForm() {
//     this.taskInput.value = "";
//   }

//   bindAddTask(handler) {
//     this.taskInput.addEventListener("keydown", (event) => {
//       const taskName = this.taskName.value.trim();
//       if (event.key === "Enter") {
//         event.preventDefault();

//         if (taskName) {
//           handler(taskName);
//           return;
//         }
//       }
//     });
//   }

//   addTask(taskName) {
//     const taskItem = new TaskItemTemplate(taskName);
//     this.tasks.push(taskItem);
//     this.taskBoard.innerHTML += taskItem.render();
//   }
// }
