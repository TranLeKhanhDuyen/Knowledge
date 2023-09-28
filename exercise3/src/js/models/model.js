export default class Model {
    constructor() {
        this.count = 59;
        this.minCount = 24;
        this.active = "focus";
    }

    reset() {
        switch (this.active) {
            case "long":
                this.minCount = 14;
                break;
            case "short":
                this.minCount = 4;
                break;
            default:
                this.minCount = 24;
                break;
        }
        this.count = 59;
    }
}
