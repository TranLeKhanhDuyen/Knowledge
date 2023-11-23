export default class Controller {
  constructor(taskListModel, taskItemView, taskDetailView) {
    this.taskListModel = taskListModel;
    this.taskItemView = taskItemView;
    this.taskDetailView = taskDetailView;
    this.init();
  }

  init() {
    this.handleAddTask();
    this.handleTaskDetail();
    this.handleUpdateTaskStatus();
    this.handleUpdateTask();
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

  handleTaskDetail = () => {
    this.taskItemView.bindTaskDetail(this.handleUpdateTask, (id) =>
      this.handleFindTask(id)
    );
  };

  handleUpdateTaskStatus = () => {
    this.taskItemView.updateDraggableTasks((taskId, newStatus) => {
      return this.taskListModel.edit(taskId, newStatus);
    });
  };

  handleFindTask = (id) => {
    return this.taskListModel.find(id);
  };

  handleUpdateTask = () => {
    this.taskDetailView.bindUpdateTask((id, updateData) => {
      
      // data: task list
      const data = this.taskListModel.edit(id, updateData);
      this.taskItemView.renderListTask(data)
    });

    
  };
}
