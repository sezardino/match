import Component from './component';

const userTemplate = () => `
  <div class="user">
    <button class="button button--primary user__button">
      Start Game
    </button>
    <div class="user__img-wrapper">
      <img src="#" alt="#" class="user__avatar" />
    </div>
  </div>`;

class UserView extends Component {
    constructor() {
        super();
        this.template = userTemplate();

        this.onLoad();
    }

    buttonHandler(handler: () => void) {
        this.element
            .querySelector('button')
            .addEventListener('click', (evt) => {
                evt.preventDefault();
                handler();
            });
    }

    onLoad() {
        super.onLoad();
    }
}

export default UserView;
