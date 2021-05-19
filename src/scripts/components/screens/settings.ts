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

        this.init();
    }

    getTemplate() {
        return settingsTemplate();
    }

    formPlaceholder(content: Component) {
        const formRoot = this.element.querySelector(this.formSelector);
        utils.render(formRoot, content);
    }
}

export default SettingsScreen;
