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
        return render.getElement(this.template);
    }
}

export default Page;
