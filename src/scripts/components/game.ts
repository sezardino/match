import { Component } from './_index';

const gameTemplate = () => `
<section class="game">
    <div class="game__timer"></div>
    <div class="game__inner"></div>
</section>
`;

class GameWrapper extends Component {
    timerSelector: string;
    innerSelector: string;

    constructor() {
        super();
        this.timerSelector = '.game__timer';
        this.innerSelector = '.game__inner';

        this.init();
    }

    getTemplate() {
        return gameTemplate();
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
