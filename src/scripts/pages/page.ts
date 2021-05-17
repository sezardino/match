import { PageProps } from '../interfaces';
import render from '../utils/render';

abstract class Page {
    slug: string;
    element: Element | null;
    template: string | null;
    constructor(props: PageProps) {
        this.slug = props.slug;
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
}

export default Page;
