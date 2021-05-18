import render from '../utils/utils';
import Component from './abs/component';
import RegisterForm from './registerForm';

const popupTemplate = () => `
<div class="popup">
    <div class="popup__inner">
    </div>
</div>`;

class Popup extends Component {
    popupClass: string;
    popupOpenClass: string;
    popupInnerSelector: string;
    inner: Component | null;

    constructor() {
        super();
        this.inner = null;

        this.popupClass = 'popup';
        this.popupOpenClass = 'popup--open';
        this.popupInnerSelector = '.popup__inner';

        this.init();
    }

    getTemplate() {
        return popupTemplate();
    }

    open(inner: Component | RegisterForm): void {
        if (inner) {
            this.inner = inner;
            const popupInner = this.element.querySelector(
                this.popupInnerSelector
            );
            this.element.classList.add(this.popupOpenClass);
            render.renderAB(popupInner, this.inner);
        }
    }

    close() {
        this.element.classList.remove(this.popupOpenClass);
        this.inner.removeElement();
        this.inner = null;
    }

    init() {
        super.init();

        this.element.addEventListener('click', (evt: MouseEvent) => {
            if (evt.target.classList.contains(this.popupClass)) {
                this.close();
            }
        });
    }
}

export default Popup;
