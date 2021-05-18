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
    constructor(settings: {
        cards: string;
        placeholders: string;
        difficulty: string;
    }) {
        this.settings = settings;

        this.gameOverHandler = this.gameOverHandler.bind(this);
    }

    gameOverHandler(type: Boolean, time?: number) {
        const resultText = type ? GAME_OVER_TEXT.WIN() : GAME_OVER_TEXT.LOSE();

        const results = new Results(resultText);
        this.popup.open(results);
    }

    timerControls() {
        this.timer = new Timer();
        this.timer.endGameHandler = this.gameOverHandler;
        this.gameWrapper.useTimerPlaceholder((container) => {
            utils.render(container, this.timer);
            this.timer.start();
        });
    }

    gameInnerControls(): void {
        const { cards, placeholders } = this.settings;
        const cardsLength = DIFFICULTY[this.settings.difficulty];
        console.log({ cards, placeholders, cardsLength });
    }

    init(root: Element) {
        this.root = root;
        this.gameWrapper = new GameWrapper();
        utils.render(this.root, this.gameWrapper);

        this.timerControls();

        this.gameInnerControls();

        // new Game
        // new Card
        // new Timer
    }
}

export default GameController;
