interface IRenderUtils {
    find: (el: string) => IRenderUtils;
    addClass: (className: string) => IRenderUtils;
}

class RenderUtils implements IRenderUtils {
    private element: HTMLElement;
    constructor() {
        this.element = null;
    }

    find(el: string) {
        this.element = document.querySelector(el);
        return this;
    }

    addClass(className: string) {
        if (this.element) {
            this.element.classList.add(className);
            return this;
        }
    }

    render(place: InsertPosition, component: HTMLElement) {
        this.element.insertAdjacentElement(place, component);
    }
}

export default new RenderUtils();
