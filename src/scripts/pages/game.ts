import Page from './page';

const gameTemplate = () => `
<section class="game">
<div class="game__timer timer">
    <p class="timer__count">
        <span class="timer__minutes">00</span>
        :
        <span class="timer__seconds">01</span>
    </p>
</div>
<div class="game__inner">
    <button class="play-card play-card--open play-card--forest">
        <div class="play-card__image-wrapper">
            <img
                src="./assets/images/cards/dog/001-dog.svg"
                alt=""
                class="play-card__image"
            />
        </div>
        <input
            type="hidden"
            name="answer"
            class="play-card__answer"
            value=""
        />
    </button>
    <button class="play-card play-card--forest">
        <div class="play-card__image-wrapper">
            <img
                src="./assets/images/cards/dog/001-dog.svg"
                alt=""
                class="play-card__image"
            />
        </div>
        <input
            type="hidden"
            name="answer"
            class="play-card__answer"
            value=""
        />
    </button>
    <button class="play-card play-card--mounts">
        <div class="play-card__image-wrapper">
            <img
                src="./assets/images/cards/dog/001-dog.svg"
                alt=""
                class="play-card__image"
            />
        </div>
        <input
            type="hidden"
            name="answer"
            class="play-card__answer"
            value=""
        />
    </button>
    <button class="play-card play-card--shine">
        <div class="play-card__image-wrapper">
            <img
                src="./assets/images/cards/dog/001-dog.svg"
                alt=""
                class="play-card__image"
            />
        </div>
        <input
            type="hidden"
            name="answer"
            class="play-card__answer"
            value=""
        />
    </button>
    <button class="play-card play-card--city">
        <div class="play-card__image-wrapper">
            <img
                src="./assets/images/cards/dog/001-dog.svg"
                alt=""
                class="play-card__image"
            />
        </div>
        <input
            type="hidden"
            name="answer"
            class="play-card__answer"
            value=""
        />
    </button>
    <button class="play-card play-card--canyon">
        <div class="play-card__image-wrapper">
            <img
                src="./assets/images/cards/dog/001-dog.svg"
                alt=""
                class="play-card__image"
            />
        </div>
        <input
            type="hidden"
            name="answer"
            class="play-card__answer"
            value=""
        />
    </button>
    <button
        class="
            play-card
            play-card--open
            play-card--valid
            play-card--canyon
        "
    >
        <div class="play-card__image-wrapper">
            <img
                src="./assets/images/cards/dog/001-dog.svg"
                alt=""
                class="play-card__image"
            />
        </div>
        <input
            type="hidden"
            name="answer"
            class="play-card__answer"
            value=""
        />
    </button>
    <button
        class="
            play-card
            play-card--open
            play-card--invalid
            play-card--canyon
        "
    >
        <div class="play-card__image-wrapper">
            <img
                src="./assets/images/cards/dog/001-dog.svg"
                alt=""
                class="play-card__image"
            />
        </div>
        <input
            type="hidden"
            name="answer"
            class="play-card__answer"
            value=""
        />
    </button>
</div>
</section>
`;

class Game extends Page {
    constructor(slug: string) {
        super(slug);
        this.template = gameTemplate();
    }
}

export default Game;
