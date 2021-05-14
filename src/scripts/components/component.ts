import render from '../utils/render';

abstract class Component {
    element: Element | null;
    template: string | null;
    constructor() {
        this.element = null;
        this.template = null;
    }

    onLoad() {
        this.element = render.getElement(this.template);
    }
}

export default Component;