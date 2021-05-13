import { ComponentProps, IComponent } from './interfaces';

abstract class Component implements IComponent {
    element: HTMLElement | null;
    template: () => string;
    name: string;
    components: Array<IComponent>;
    constructor(props: ComponentProps) {
        this.element = null;

        this.name = props.name;
        this.components = [];
    }

    getTemplate() {
        let template = this.template().trim();
        this.components.forEach((component) => {
            template = template.replace(
                `{{${component.name}}}`,
                component.getTemplate()
            );
        });
        return template;
    }

    private shadowRender(props: {}) {
        const div = document.createElement('div');
        div.innerHTML = this.getTemplate();
        this.element = div.childNodes[0] as HTMLElement;
    }

    private addListeners() {
        const tags = this.element.querySelectorAll('[on]');
        tags.forEach((item) => {
            const attributeString = item.getAttribute('on');
            const [event, func] = attributeString.split('|');
            item.removeAttribute('on');
            item.addEventListener(event, this[func]);
        });
    }

    render(props?: {}) {
        this.shadowRender(props);
        this.addListeners();
        return this;
    }
}

export default Component;
