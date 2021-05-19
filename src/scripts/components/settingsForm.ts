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
    </form>
`;

class SettingsForm extends Component {
    constructor() {
        super();

        this.init();
    }

    getTemplate() {
        return settingsFormTemplate();
    }
}

export default SettingsForm;
