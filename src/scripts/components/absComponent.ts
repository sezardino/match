import render from '../utils/utils';

abstract class AbstractComponent {
    element: Element | null;
    constructor() {
        this.element = null;
    }

    abstract getTemplate(): string;

    getElement() {
        if (!this.element) {
            this.element = this.createElement(this.getTemplate());
        }

        return this.element;
    }

    removeElement() {
        this.element.remove();
        this.element = null;
    }

    createElement(template: string): Element {
        const wrapper = document.createElement('div');
        wrapper.innerHTML = template;
        console.log(wrapper.firstElementChild);
        return wrapper.firstElementChild;
    }
}

export default AbstractComponent;
