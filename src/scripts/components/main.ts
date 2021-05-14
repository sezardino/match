import Component from './component';

const main = () => `<main class="container"></main>`;

class Main extends Component {
    constructor() {
        super();
        this.template = main();

        this.onLoad();
    }
}

export default Main;
