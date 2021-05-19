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

    removeElement() {
        super.removeElement();
        this.components?.map((component) => component.removeElement());
        console.log(this);
        if (this.removeListeners) {
            this.removeListeners();
        }
    }

    rerender(container: HTMLElement) {
        utils.render(container, this);
    }
}

export default SmartComponent;
