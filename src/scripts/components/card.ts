import { Component } from './_index';

const cardTemplate = () => `
  <button class="play-card play-card--open play-card--forest">
    <div class="play-card__image-wrapper">
      <img src="./assets/images/cards/dog/001-dog.svg" alt="" class="play-card__image" />
    </div>
    <input type="hidden" name="answer" class="play-card__answer" value=""/>
  </button>
`;

class Card extends Component {
    props: { text: string; extraClass: string };
    constructor(props: { text: string; extraClass: string }) {
        super();

        this.props = props;

        this.init();
    }

    getTemplate() {
        return cardTemplate();
    }
}

export default Card;
