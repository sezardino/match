import Component from './component';

const buttonTemplate = (props: { text: string; extraClass: string }) => {
    const { text, extraClass } = props;
    return `
    <button class="button ${extraClass}">
        ${text}
    </button>`;
};

class Button extends Component {
    constructor(props: { text: string; extraClass: string }) {
        super();

        this.template = buttonTemplate(props);

        this.onLoad();
    }

    buttonListener(handler: () => void) {
        this.element.addEventListener('click', (evt) => {
            evt.preventDefault();
            handler();
        });
    }

    onLoad() {
        super.onLoad();
    }
}

export default Button;
