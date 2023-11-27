import TaskModel from "../models/task-model";

export default class Controller {
  constructor(taskListModel, taskItemView, taskDetailView) {
    this.taskListModel = taskListModel;
    this.taskItemView = taskItemView;
    this.taskDetailView = taskDetailView;
    this.init();
  }

  async init() {
    this.taskItemView.syncTasks().then(() => {
      // const tasks = await this.taskListModel.syncTasks();
      // await this.taskItemView.showTaskItem(tasks).then(() => {
      this.handleAddTask();
      this.handleDragDropBoard();
      this.handleTaskDetail();
      this.handleUpdateTask();
    });
  }

  handleAddTask = () => {
    this.taskItemView.bindAddTask(
      async (task) => {
        return await this.taskListModel.addTask(task);
      },
      async (taskId, newStatus) => {
        return await this.taskListModel.edit(taskId, newStatus);
      }
    );
  };

  handleDragDropBoard = () => {
    this.taskItemView.addBoardEvent(async (taskId, newStatus) => {
      const res = await this.taskListModel.edit(taskId, newStatus);
      const tasks = await this.taskListModel.getTask();
      this.taskItemView.revalidateTasks(tasks);
      return res;
    });
  };

  handleTaskDetail = () => {
    this.taskItemView.bindTaskDetail(this.handleUpdateTask, (id) =>
      this.handleFindTask(id)
    );
  };

  handleFindTask = (id) => {
    return this.taskListModel.find(id);
  };

  // handleUpdateTask = () => {
  //   this.taskDetailView.bindUpdateTask((id, updateData) => {
  //     // data: task list
  //     const data = this.taskListModel.edit(id, updateData);
  //     this.taskDetailView.bindUpdateTask(data);
  //   });
  // };

  handleUpdateTask = () => {
    this.taskDetailView.bindUpdateTask(async (id, updateData) => {
      // Retrieve the existing task
      const existingTask = await this.taskListModel.find(id);
  
      // Merge the existing task with the updated data
      const updatedTask = { ...existingTask, ...updateData };
  
      // Create a new TaskModel instance with the merged data
      const taskModel = new TaskModel();
      Object.assign(taskModel, updatedTask);
  
      // Save the updated task
      await this.taskListModel.edit(id, taskModel.toJson());
  
      // Refresh the task list in the view
      const tasks = await this.taskListModel.getTask();
      this.taskItemView.revalidateTasks(tasks);
    });
  };
  

  
}
