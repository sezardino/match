import utils from '../../utils/utils';
import Component from '../abs/component';
import Screen from '../abs/screen';

const settingsTemplate = () => `
<section class="settings">
    <h1 class="hidden">Settings</h1>
    <div class="settings__form"></div>
</section>`;

class SettingsScreen extends Screen {
    form: HTMLFormElement;
    handler: (formData: {}) => void | null;
    formSelector: string;

    constructor(slug: string) {
        super(slug);

        this.formSelector = '.settings__form';

        this.formHandler = this.formHandler.bind(this);

        this.init();
    }

    getTemplate() {
        return settingsTemplate();
    }

    addListeners() {
        this.form.addEventListener('submit', this.formHandler);
    }

    removeListeners() {
        this.form.removeEventListener('submit', this.formHandler);
    }

    formHandler(evt: Event) {
        evt.preventDefault();
        const formData = utils.getFormData(this.form);
        this.handler(formData);
    }

    formPlaceholder(content: Component) {
        const formRoot = this.element.querySelector(this.formSelector);
        utils.render(formRoot, content);
    }

    init() {
        super.init();

        // this.form = this.element.querySelector('form');
        // this.addListeners();
    }
}

export default SettingsScreen;
