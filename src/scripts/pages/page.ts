import { PageProps } from '../interfaces';
import render from '../utils/render';

abstract class Page {
    slug: string;
    element: Element | null;
    template: string | null;
    constructor(slug: string) {
        this.slug = slug;
        this.element = null;
        this.template = null;
    }

    getElement() {
        this.element = render.getElement(this.template);
    }

    removePage() {
        this.element.parentElement.innerHTML = '';
        this.element = null;
    }

    pageHandlers(handlers) {
        console.log(1);
    }
}

export default Page;
