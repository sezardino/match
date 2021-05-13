import Component from './component';

const template = () => {
    return `
    <button class="button button--primary">
        Register new player
    </button>`;
};

class Header extends Component {
    element: HTMLElement | null;
    template: () => string;
    constructor() {
        super();

        this.template = template;
    }

    render(props) {}
}

export default Header;
