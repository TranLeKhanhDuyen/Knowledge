import TaskModel from "../models/tasks-model";
import TaskView from "../views/tasks-view";

export default class TaskController {
    constructor(model, view) {
      this.model = model;
      this.view = view;
      this.taskListModel = this.model.taskListModel;
    }
  
    initFormView() {
      this.view.timerView.handleSwitchMode();
      this.view.formView.toggleTaskForm();
      this.view.formView.submitTask(this.handleSubmitTask.bind(this));
      this.view.formView.controlValue();
    }
  
    initTaskView() {
      if (this.taskListModel.tasks.length > 0) {
        this.view.taskView.renderTasks(this.taskListModel.tasks, this.handleRenderForm.bind(this));
        this.view.formView.deleteTask(this.handleDeleteTask.bind(this));
      }
    }
  
    // Handle the submission of a task.
    handleSubmitTask(isUpdate, taskId, taskName = '', estPomodoro = '') {
      // If it's an update, create an updated task object.
      if (isUpdate) {
        const updatedTask = {
          id: taskId,
          taskName,
          estPomodoro
        };
        this.taskListModel.updateTask(updatedTask);
      } else {
        this.taskListModel.addTask(taskName, estPomodoro);
      }
      this.view.taskView.renderTasks(this.taskListModel.tasks);
      this.initTaskView();
    }
  
    handleRenderForm(taskData) {
      const tasksData = taskData;
      this.view.formView.renderForm(tasksData);
    }
  
    handleDeleteTask(taskId) {
      this.taskListModel.deleteTask(taskId);
      this.view.taskView.renderTasks(this.taskListModel.tasks);
    }
  
    initHome() {
      this.initFormView();
      this.initTaskView();
    }
  }
