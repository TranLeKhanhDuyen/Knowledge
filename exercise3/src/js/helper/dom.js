export default class Dom {
    constructor() {}

    toggleDisplay = (...elements) => {
        elements.forEach((element) => {
            if (element) {
                element.classList.toggle("hidden");
            }
        });
    };
}
