import Screen from '../abs/screen';

const card = `            // <img
//     src="./assets/images/cards/dog/001-dog.svg"
//     alt=""
//     class="play-card__image"
// />`;

const gameTemplate = () => `
<section class="game">
    <div class="game__timer"></div>
    <div class="game__inner"></div>
</section>
`;

class GameScreen extends Screen {
    settings: { cards: string; difficulty: string; placeholders: string };

    constructor(props: {
        slug: string;
        settings: { cards: string; difficulty: string; placeholders: string };
    }) {
        super(props.slug);

        this.settings = props.settings;

        this.init();
    }

    getTemplate() {
        return gameTemplate();
    }

    init() {
        console.log(this.settings);
    }
}

export default GameScreen;
