import Component from './abs/component';

const mainTemplate = () => `<main class="container"></main>`;

class Main extends Component {
    constructor() {
        super();

        this.init();
    }

    getTemplate() {
        return mainTemplate();
    }
}

export default Main;
