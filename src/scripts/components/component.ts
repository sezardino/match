abstract class AbstractComponent {
    abstract getTemplate(props: {}): string;
    element: HTMLElement;

    constructor() {
        this.element = null;
    }

    getElement(props?: {}) {
        const div = document.createElement('div');
        div.innerHTML = this.getTemplate(props).trim();
        this.element = div.childNodes[0];
        return this.element;
    }
}

export default AbstractComponent;
