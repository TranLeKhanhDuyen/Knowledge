import View from './views/index'
import Model from './models/index'
import Controller from './controllers/controller'
import HomeController from './controllers/'
import TimerModel from './models/timer-model'
import FormView from './views/form-view'
import TaskListModel from './models/task-list-model'
import TaskModel from './models/tasks-model'
import TaskView from './views/task-view'
import TimerView from './views/timer-view'

start = () => {
    // const controller = new Controller(new Model(), new View())
    // controller.initHome()

    new HomeController({
        timerModel: new TimerModel(),
        formView: new FormView(),
        taskListModel: new TaskListModel(),
        taskModel: new TaskModel(),
        taskView: new TaskView(),
        timerView: new TimerView(),
    })
}
document.addEventListener('DOMContentLoaded', () => {
    start()
})
