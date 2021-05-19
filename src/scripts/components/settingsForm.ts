import { userSettings } from '../interfaces';
import utils from '../utils/utils';
import { Component } from './_index';

const settingsFormTemplate = () => `
    <form class="settings-form">
        <label class="settings-form__label">
            <span class="settings-form__label-text">Game Cards</span>
            <select
            name="cards"
            id="cards"
            class="settings-form__select">
                <option value="bear">Bear</option>
                <option value="dog">Dog</option>
                <option value="nature">Nature</option>
            </select>
        </label>
        <label class="settings-form__label">
            <span class="settings-form__label-text">Card Placeholder</span>
            <select
            name="placeholders"
            id="placeholders"
            class="settings-form__select">
                <option value="canyon">Canyon</option>
                <option value="city">City</option>
                <option value="forest">Forest</option>
                <option value="mounts">Mounts</option>
                <option value="shine">Shine</option>
            </select>
        </label>
        <label class="settings-form__label">
            <span class="settings-form__label-text">Difficulty</span>
            <select
            name="difficulty"
            id="difficulty"
            class="settings-form__select">
                <option value="easy">Easy</option>
                <option value="normal">Normal</option>
                <option value="insane">Insane</option>
                <option value="god">God!</option>
            </select>
        </label>
        <button class="button button--primary settings-form__button">
            Save
        </button>
        <span class="form-settings__suc hidden">Your data has been successfully saved</span>
    </form>
`;

class SettingsForm extends Component {
    settings: userSettings;
    constructor(settings: userSettings) {
        super();
        this.settings = settings;

        this.init();
    }

    set formHandler(handler: (data: userSettings) => void) {
        this.addFormEvent(handler);
    }

    getTemplate() {
        return settingsFormTemplate();
    }

    addFormEvent(handler: (data: userSettings) => void) {
        this.element.addEventListener('submit', (evt) => {
            evt.preventDefault();
            const formData = utils.getFormData(
                evt.target as HTMLFormElement
            ) as userSettings;
            this.element
                .querySelector('.form-settings__suc')
                .classList.remove('hidden');
            handler(formData);
        });
    }

    init() {
        super.init();

        this.element.querySelectorAll('select').forEach((item) => {
            item.value = this.settings[item.name];
        });
    }
}

export default SettingsForm;
