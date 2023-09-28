export default class Controller {
    constructor(model, view) {
        this.model = model;
        this.view = view;
    }

    handleReset() {
        this.model.reset();
        this.view.displayTime(this.model.minCount, this.model.count);
    }
}
