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
    openedCard: Card | null;
    playGround: Array<Card>;
    moves: Array<Array<Card>>;

    constructor(settings: {
        cards: string;
        placeholders: string;
        difficulty: string;
    }) {
        this.settings = settings;

        this.playGround = [];
        this.openedCard = null;

        this.moves = [];

        this.gameOverHandler = this.gameOverHandler.bind(this);
    }

    gameOverHandler(type: Boolean) {
        const resultText = type
            ? GAME_OVER_TEXT.WIN(this.timer.time)
            : GAME_OVER_TEXT.LOSE();

        const result = new Results(resultText);
        this.popup.open(result);
    }

    timerControls() {
        this.timer = new Timer();
        this.timer.endGameHandler = this.gameOverHandler;
        this.gameWrapper.useTimerPlaceholder((container) => {
            utils.render(container, this.timer);
            this.timer.start();
        });
    }

    checkCards() {}

    addToLine(card: Card) {
        const move = this.moves.find((item) => item.length === 1);
        if (!move) {
            this.moves.push([card]);
            return;
        }
        move.push(card);

        const card1 = move[0];
        const card2 = move[1];

        if (card1.value === card2.value) {
            move.map((item) => {
                item.addValid();
            });
            this.playGround = this.playGround.filter(
                (item) => item.value !== card1.value
            );
            if (this.playGround.length === 0) {
                this.timer.stop(true);
            }
        } else {
            move.map((item) => {
                item.addInvalid();
                item.close();
            });
        }

        // if (this.openedCard) {
        //     console.log(card.value);
        //     console.log(this.openedCard.value);
        //     if (card.value === this.openedCard.value) {
        //         console.log(true);
        //         this.openedCard = null;
        //     } else if (card.value !== this.openedCard.value) {
        //         console.log(false);
        //         setTimeout(() => {
        //             card.close();
        //             this.openedCard.close();
        //         }, 2000);
        //         this.openedCard = null;
        //     }
        //     return;
        // }
        // this.openedCard = card;
    }

    gameInnerControls(): void {
        const { cards, placeholders } = this.settings;
        const cardsLength = DIFFICULTY[this.settings.difficulty];

        const numbers = utils.getMathArray(cardsLength);

        this.playGround = numbers.map((item) => {
            const card = new Card({
                value: item,
                placeholder: placeholders,
                type: cards
            });
            card.clickHandler((card: Card) => this.addToLine(card));
            return card;
        });
        this.gameWrapper.useGameInnerPlaceholder((container) => {
            this.playGround.map((item) => {
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
