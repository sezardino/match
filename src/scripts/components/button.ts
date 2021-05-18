// import Component from './components';

// const buttonTemplate = (props: { text: string; extraClass: string }) => {
//     const { text, extraClass } = props;
//     return `
//     <button class="button ${extraClass}">
//         ${text}
//     </button>`;
// };

// class Button extends Component {
//     constructor(props: { text: string; extraClass: string }) {
//         super();

//         this.template = buttonTemplate(props);

//         this.onLoad();
//     }

//     buttonListener(handler: () => void) {
//         this.element.addEventListener('click', (evt) => {
//             evt.preventDefault();
//             handler();
//         });
//     }

//     onLoad() {
//         super.onLoad();
//     }
// }

// export default Button;

import Component from './abs/absComponent';

const buttonTemplate = (props: { text: string; extraClass: string }) => {
    const { text, extraClass } = props;
    return `
    <button class="button ${extraClass}">
        ${text}
    </button>`;
};

class Button extends Component {
    props: { text: string; extraClass: string };
    constructor(props: { text: string; extraClass: string }) {
        super();

        this.props = props;

        this.init();
    }

    getTemplate() {
        return buttonTemplate(this.props);
    }

    buttonListener(handler: () => void) {
        this.element.addEventListener('click', (evt) => {
            evt.preventDefault();
            handler();
        });
    }
}

export default Button;
