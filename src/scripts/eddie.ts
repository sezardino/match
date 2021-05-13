interface IEddie {}

class Eddie implements IEddie {
    constructor(root) {
        this.root = document.querySelector(root);
    }
}

export default Eddie;
