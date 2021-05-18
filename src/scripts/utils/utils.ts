import Component from '../components/component';
import { RENDER_POSITION } from '../constants';
import Page from '../pages/page';
class UtilFunctions {
    getElement(template: string) {
        const div = document.createElement('div');
        div.innerHTML = template;
        return div.children[0];
    }

    createElement(template: string) {
        const div = document.createElement('div');
        div.innerHTML = template;
        return div.firstElementChild;
    }

    render(
        container: Element,
        component: Component,
        place: InsertPosition = 'afterbegin'
    ) {
        const element = component.getElement();
        container.insertAdjacentElement(place, element);
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

    renderBE(container: Element, component: Component | Page) {
        this.renderElement(
            container,
            RENDER_POSITION.BEFORE_END as InsertPosition,
            component.element
        );
    }

    renderBB(container: Element, component: Component | Page) {
        this.renderElement(
            container,
            RENDER_POSITION.BEFORE_BEGIN as InsertPosition,
            component.element
        );
    }

    renderAB(container: Element, component: Component | Page) {
        this.renderElement(
            container,
            RENDER_POSITION.AFTER_BEGIN as InsertPosition,
            component.element
        );
    }

    renderAE(container: Element, component: Component | Page) {
        this.renderElement(
            container,
            RENDER_POSITION.AFTER_END as InsertPosition,
            component.element
        );
    }

    getFormData(form: HTMLFormElement): {} {
        const inputs = form.querySelectorAll('input');
        const selects = form.querySelectorAll('select');
        const formData = {};
        inputs.forEach((input: HTMLInputElement) => {
            formData[input.name] = input.value;
        });
        selects.forEach((input: HTMLInputElement) => {
            formData[input.name] = input.value;
        });
        return formData;
    }
}

export default new UtilFunctions();
