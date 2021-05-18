import { DIFFICULTY } from '../utils/constants';
import { Component } from './_index';

const gameTemplate = (difficulty: string) => `
<section class="game">
    <div class="game__timer"></div>
    <div class="game__inner game__inner--${difficulty}">
    </div>
</section>
`;

class GameWrapper extends Component {
    timerSelector: string;
    innerSelector: string;
    difficulty: string;

    constructor(difficulty: string) {
        super();
        this.timerSelector = '.game__timer';
        this.innerSelector = '.game__inner';

        this.difficulty = difficulty;

        this.init();
    }

    getTemplate() {
        return gameTemplate(this.difficulty);
    }

    useTimerPlaceholder(renderFunction: (wrapper: Element) => void) {
        const wrapper = this.element.querySelector(this.timerSelector);
        renderFunction(wrapper);
    }

    useGameInnerPlaceholder(renderFunction: (wrapper: Element) => void) {
        const wrapper = this.element.querySelector(this.innerSelector);
        renderFunction(wrapper);
    }
}

export default GameWrapper;
