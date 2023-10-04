export default class TaskView {
    contructor() {
        this.app = this.getElement("#root");

        this.submitButton = this.createElement("button");
        this.submitButton.textContent = "Add Task";

        this.form = this.createElement("form");

        this.input = this.createElement("input");
        this.input.type = "text";
        this.input.plaholder = "What are you working on?";

        this.submitButton = this;
    }

    createElement(tag, classElement) {
        const element = document.createElement(tag);
        if (className) element.classList.add(className);

        return element;
    }

    getElement(selector) {
        const element = document.querySelector(selector);
        return element;
    }
}
