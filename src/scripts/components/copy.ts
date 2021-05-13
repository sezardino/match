import AbstractComponent from './component';

class CopyContainer extends AbstractComponent {
    constructor() {
        super();
    }

    getTemplate() {
        return `<div>Copy</div>`;
    }
}

export default CopyContainer;
