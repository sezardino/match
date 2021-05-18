abstract class Component {
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
        return wrapper.firstElementChild;
    }

    init(): void {
        this.getElement();
    }
}

export default Component;
