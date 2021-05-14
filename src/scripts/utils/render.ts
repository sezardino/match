interface IUtilsFunctions {
    renderTemplate: (
        container: Element,
        position: InsertPosition,
        template: string
    ) => void;

    getElement: (template: string) => Element;
}
class UtilFunctions implements IUtilsFunctions {
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
}

export default new UtilFunctions();
