import utils from '../../utils/utils';
import Component from './component';

abstract class SmartComponent extends Component {
    element: Element | null;
    components: Array<Component> | null;
    constructor() {
        super();
        this.components = [];
    }

    abstract getTemplate(): string;
    abstract removeListeners(): void;
    abstract addListeners(): void;

    getElement(): Element {
        super.getElement();
        if (this.addListeners) {
            this.recoveryListeners();
        }

        return this.element;
    }

    removeElement() {
        super.removeElement();
        this.components?.map((component) => component.removeElement());
        if (this.removeListeners) {
            this.removeListeners();
        }
    }

    recoveryListeners() {
        this.addListeners();
    }
}

export default SmartComponent;
