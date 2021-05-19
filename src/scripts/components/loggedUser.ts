import Component from './abs/component';

const userTemplate = () => `
  <div class="user">
    <button class="button button--primary user__button">
      Start Game
    </button>
    <div class="user__img-wrapper">
      <img src="#" alt="#" class="user__avatar" />
    </div>
  </div>`;

class LoggedUser extends Component {
    constructor() {
        super();

        this.init();
    }

    getTemplate() {
        return userTemplate();
    }

    buttonHandler(handler: () => void) {
        this.element
            .querySelector('button')
            .addEventListener('click', (evt) => {
                evt.preventDefault();
                handler();
            });
    }
}

export default LoggedUser;
