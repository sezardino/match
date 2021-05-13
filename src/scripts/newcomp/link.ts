import Component from './component';
import { ComponentProps } from './interfaces';

const template = () => {
    return `<a href={{href}} class="{{class}}">{{content}}</a>`;
};

class Link extends Component {
    element: HTMLElement | null;
    template: () => string;
    constructor(props: ComponentProps) {
        super(props);

        this.template = template;
    }
}

export default Link;
