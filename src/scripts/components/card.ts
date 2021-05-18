import { Component } from './_index';

const cardTemplate = (props: {
    value: number;
    placeholder: string;
    type: string;
}) => `
  <button class="play-card play-card--${props.placeholder}">
  ${props.value}
    <div class="play-card__image-wrapper">
      <img src="./assets/images/cards/${props.type}/${props.value}.svg" alt="${props.type}" class="play-card__image" />
    </div>
  </button>
`;

class Card extends Component {
    props: { value: number; placeholder: string; type: string };
    openClass: string;
    value: number;
    validClass: string;
    invalidClass: string;

    constructor(props: { value: number; placeholder: string; type: string }) {
        super();
        this.openClass = 'play-card--open';
        this.validClass = 'play-card--valid';
        this.invalidClass = 'play-card--invalid';

        this.value = props.value;
        this.props = props;

        this.init();

        this.close = this.close.bind(this);
    }

    open() {
        this.element.classList.add(this.openClass);
    }

    close() {
        this.element.classList.remove(this.openClass);
    }

    addInvalid() {
        this.element.classList.add(this.invalidClass);
    }
    addValid() {
        this.element.classList.add(this.validClass);
    }

    removeInvalid() {
        this.element.classList.remove(this.invalidClass);
    }
    removeValid() {
        this.element.classList.remove(this.validClass);
    }

    clickHandler(handler: (card: Card) => void): void {
        this.element.addEventListener('click', (evt) => {
            evt.preventDefault();
            const target = evt.target;
            const card = target.closest('.play-card');
            if (!card.classList.contains(this.openClass)) {
                this.open();
                setTimeout(this.close, 5000);
                handler(this);
            }
        });
    }

    getTemplate() {
        return cardTemplate(this.props);
    }
}

export default Card;
