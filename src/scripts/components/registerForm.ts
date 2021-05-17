import Component from './component';

import userLogo from '../../assets/svg/user.svg';
import utils from '../utils/utils';

const registerFormTemplate = () => `
<section class="register-user">
    <h2 class="register-user__title">Register new Player</h2>
    <form class="register-user__form form form--register">
        <div class="form__row">
            <div class="form__wrapper">
                <label class="form__label form__label--invalid">
                    <span class="form__label-text"
                        >First Name</span
                    >
                    <input
                        required
                        type="text"
                        name="name"
                        class="form__input"
                    />
                </label>
                <label class="form__label form__label--valid">
                    <span class="form__label-text"
                        >Last Name</span
                    >
                    <input
                        required
                        type="text"
                        name="surname"
                        class="form__input"
                    />
                </label>
                <label class="form__label">
                    <span class="form__label-text">E-mail</span>
                    <input
                        required
                        type="email"
                        name="email"
                        class="form__input"
                    />
                </label>
            </div>
            <img
                src="${userLogo}"
                width="160"
                height="160"
                alt="user image"
                class="form__img"
            />
        </div>
        <footer class="form__footer">
            <button
                class="form__button form__submit button button--add button--uppercase"
            >
                Add user
            </button>
            <button
                class="form__button form__cancel button button--primary button--uppercase"
            >
                Cancel
            </button>
        </footer>
    </form>
</section>
`;

class RegisterForm extends Component {
    submitButtonSelector: string;
    cancelButtonSelector: string;
    form: HTMLFormElement;
    cancelButton: HTMLButtonElement;

    constructor() {
        super();
        this.template = registerFormTemplate();
        this.cancelButtonSelector = '.form__cancel';

        this.onLoad();
    }

    submitHandler(handler: (data: {}) => void): void {
        this.form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            const formData = utils.getFormData(evt.target as HTMLFormElement);
            handler(formData);
        });
    }

    cancelHandler(handler: () => void): void {
        this.cancelButton.addEventListener('click', (evt) => {
            evt.preventDefault();
            handler();
        });
    }

    onLoad() {
        super.onLoad();

        this.form = this.element.querySelector('form');

        this.cancelButton = this.element.querySelector(
            this.cancelButtonSelector
        );
    }
}

export default RegisterForm;
