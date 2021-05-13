import Component from './newcomp/component';
import Header from './newcomp/header';

const template = () => {
    return `
    {{header}}
    `;
};

class App extends Component {
    root: HTMLElement;
    element: HTMLElement | null;
    template: () => string;
    components: Array<Component>;
    constructor(root: string) {
        super();

        this.root = document.querySelector(root);
        this.template = template;
        this.components = [new Header({ name: 'header' })];
    }

    renderApp() {
        const components = this.components.map((component) =>
            component.render()
        );
        components.map((component) => {
            this.root.insertAdjacentElement('beforeend', component.element);
        });
    }
}

export default App;
