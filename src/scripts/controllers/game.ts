import {
    Card,
    Component,
    GameWrapper,
    Popup,
    Results,
    Timer
} from '../components/_index';
import { DIFFICULTY, GAME_OVER_TEXT } from '../utils/constants';
import utils from '../utils/utils';

class GameController {
    settings: { cards: string; placeholders: string; difficulty: string };
    gameWrapper: GameWrapper;
    timer: Timer;
    root: Element;
    popup: Popup;
    openedCards: Array<Card>;

    constructor(settings: {
        cards: string;
        placeholders: string;
        difficulty: string;
    }) {
        this.settings = settings;
        this.openedCards = [];

        this.gameOverHandler = this.gameOverHandler.bind(this);
    }

    gameOverHandler(type: Boolean, time?: number) {
        const resultText = type ? GAME_OVER_TEXT.WIN() : GAME_OVER_TEXT.LOSE();

        const results = new Results(resultText);
    }

    timerControls() {
        this.timer = new Timer();
        this.timer.endGameHandler = this.gameOverHandler;
        this.gameWrapper.useTimerPlaceholder((container) => {
            utils.render(container, this.timer);
            this.timer.start();
        });
    }

    checkCards() {
        this.openedCards.map((item, index, arr) => {
            let result = false;
            if (index === 0) {
                console.log(arr[index + 1].value);
                result = item.value === arr[index + 1].value;
            }
            if (result) {
                item.addValid();
            } else {
                item.addInvalid();
                setTimeout(() => {
                    item.removeInvalid();
                    item.close();
                }, 1000);
            }
        });
        this.openedCards = [];
    }

    addToLine(card: Card) {
        this.openedCards.push(card);
        if (this.openedCards.length === 2) {
            this.checkCards();
        }
    }

    gameInnerControls(): void {
        const { cards, placeholders } = this.settings;
        const cardsLength = DIFFICULTY[this.settings.difficulty];

        const numbers = utils.getMathArray(cardsLength);

        const cardsArr = numbers.map((item) => {
            const card = new Card({
                value: item,
                placeholder: placeholders,
                type: cards
            });
            card.clickHandler((card: Card) => this.addToLine(card));
            return card;
        });
        this.gameWrapper.useGameInnerPlaceholder((container) => {
            cardsArr.map((item) => {
                utils.render(container, item);
            });
        });
    }

    init(root: Element) {
        this.root = root;
        this.gameWrapper = new GameWrapper(this.settings.difficulty);
        utils.render(this.root, this.gameWrapper);

        this.timerControls();

        this.gameInnerControls();

        // new Game
        // new Card
        // new Timer
    }
}

export default GameController;
