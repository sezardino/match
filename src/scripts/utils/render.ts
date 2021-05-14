import Component from '../components/component';
import { RENDER_POSITION } from '../constants';
class UtilFunctions {
    getElement(template: string) {
        const div = document.createElement('div');
        div.innerHTML = template;
        return div.children[0];
    }

    renderTemplate(
        container: Element | string,
        position: InsertPosition,
        template: string
    ) {
        if (typeof container === 'string') {
            const cont = document.querySelector(container);
            cont.insertAdjacentHTML(position, template);
        } else {
            container.insertAdjacentHTML(position, template);
        }
    }

    renderElement(
        container: Element | string,
        position: InsertPosition,
        element: Element
    ) {
        if (typeof container === 'string') {
            const cont = document.querySelector(container);
            cont.insertAdjacentElement(position, element);
        } else {
            container.insertAdjacentElement(position, element);
        }
    }

    renderBE(container: Element, component: Component) {
        this.renderElement(
            container,
            RENDER_POSITION.BEFORE_END as InsertPosition,
            component.element
        );
    }

    renderBB(container: Element, component: Component) {
        this.renderElement(
            container,
            RENDER_POSITION.BEFORE_BEGIN as InsertPosition,
            component.element
        );
    }

    renderAB(container: Element, component: Component) {
        this.renderElement(
            container,
            RENDER_POSITION.AFTER_BEGIN as InsertPosition,
            component.element
        );
    }

    renderAE(container: Element, component: Component) {
        this.renderElement(
            container,
            RENDER_POSITION.AFTER_END as InsertPosition,
            component.element
        );
    }
}

export default new UtilFunctions();
