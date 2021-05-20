import { userSettings } from '../../interfaces';
import utils from '../../utils/utils';
import Component from '../abs/component';
import Screen from '../abs/screen';

const settingsTemplate = () => `
<section class="settings">
    <h1 class="hidden">Settings</h1>
    <div class="settings__form">
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
    </div>
</section>`;

class SettingsScreen extends Screen {
    form: HTMLFormElement;
    formHandler: (formData: {}) => void | null;
    formSelector: string;
    settings: userSettings;

    constructor(slug: string) {
        super(slug);

        this.formSelector = '.settings__form';

        this.submitHandler = this.submitHandler.bind(this);

        this.init();
    }

    getTemplate() {
        return settingsTemplate();
    }

    set setSettings(settings: userSettings) {
        this.settings = settings;
    }

    set setSubmitHandler(handler: (data: userSettings) => void) {
        this.formHandler = handler;
        this.addListeners();
    }

    checkSelect() {
        this.element.querySelectorAll('select').forEach((item) => {
            item.value = this.settings[item.name];
        });
    }

    submitHandler(evt: Event) {
        evt.preventDefault();
        const formData = utils.getFormData(
            evt.target as HTMLFormElement
        ) as userSettings;
        this.element
            .querySelector('.form-settings__suc')
            .classList.remove('hidden');
        this.formHandler(formData);
    }

    addListeners() {
        if (this.settings) {
            this.checkSelect();
        }
        this.form = this.element.querySelector('form');
        this.form.addEventListener('submit', this.submitHandler);
    }

    removeListeners() {
        this.form.removeEventListener('submit', this.submitHandler);
    }
}

export default SettingsScreen;
