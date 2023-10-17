import HomeController from './controllers/'
import TimerModel from './models/timer-model'
import FormView from './views/form-view'
import TaskListModel from './models/task-list-model'
import TaskView from './views/task-view'
import TimerView from './views/timer-view'

start = () => {
    new HomeController({
        timerModel: new TimerModel(),
        formView: new FormView(),
        taskListModel: new TaskListModel(),
        taskView: new TaskView(),
        timerView: new TimerView(),
    })
}

document.addEventListener('DOMContentLoaded', () => {
    start()
})
