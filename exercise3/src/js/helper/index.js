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


class Helper {
    constructor(){
        this.dom = new Dom()
    }
}

export const helpers = new Helper();
