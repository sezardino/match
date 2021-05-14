import Component from './component';

const registerTemplate = () => `
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
                      type="text"
                      name="surname"
                      class="form__input"
                  />
              </label>
              <label class="form__label">
                  <span class="form__label-text">E-mail</span>
                  <input
                      type="mail"
                      name="email"
                      class="form__input"
                  />
              </label>
          </div>
          <img
              src="./assets/svg/user.svg"
              width="160"
              height="160"
              alt="user image"
              class="form__img"
          />
      </div>
      <footer class="form__footer">
          <button
              class="
                  form__button
                  button button--add button--uppercase
              "
          >
              Add user
          </button>
          <button
              class="
                  form__button
                  button button--primary button--uppercase
              "
          >
              Cancel
          </button>
      </footer>
  </form>
</section>`;

class Popup extends Component {
    constructor() {
        super();
        this.template = registerTemplate();

        this.onLoad();
    }
}

export default Popup;
