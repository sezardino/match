import render from '../utils/render';
import Component from './component';
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

    constructor() {
        super();
        this.template = popupTemplate();

        this.popupClass = 'popup';
        this.popupOpenClass = 'popup--open';
        this.popupInnerSelector = '.popup__inner';

        this.onLoad();
    }

    open(inner: Component | RegisterForm): void {
        if (inner) {
            const popupInner = this.element.querySelector(
                this.popupInnerSelector
            );
            this.element.classList.add(this.popupOpenClass);
            render.renderAB(popupInner, inner);
        }
    }

    onLoad() {
        super.onLoad();

        this.element.addEventListener('click', (evt: MouseEvent) => {
            if (evt.target.classList.contains(this.popupClass)) {
                this.element.classList.remove(this.popupOpenClass);
            }
        });
    }
}

export default Popup;
