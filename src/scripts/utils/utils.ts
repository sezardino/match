import Component from '../components/abs/component';
import { RENDER_POSITION } from './constants';
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

    getTime(time: number): Array<number> {
        const min = Math.floor(time / 60);
        const sec = time % 60;
        return [sec, min];
    }

    formatTime(time: number): { sec: string; min: string } {
        const [sec, min] = this.getTime(time).map((number) => {
            const stringNumber = number.toString();
            return stringNumber.length > 1 ? stringNumber : '0' + stringNumber;
        });
        return { min, sec };
    }

    getRandNumInRange(min: number, max: number) {
        return Math.floor(Math.random() * max + min);
    }

    getMathArray(maxLength: number) {
        const workArr = Array(maxLength / 2).fill(null);
        workArr.map((_, index) => {
            let number;
            do {
                number = this.getRandNumInRange(1, 30);
            } while (workArr.includes(number));
            workArr[index] = number;
        });

        let finalArray = Array(maxLength).fill(null);
        workArr.map((item) => {
            let index,
                count = 0;
            do {
                index = this.getRandNumInRange(0, finalArray.length);
                if (finalArray[index] === null) {
                    finalArray[index] = item;
                    count++;
                }
            } while (finalArray[index] !== null && count < 2);
        });
        return finalArray;
    }
}

export default new UtilFunctions();
