import utils from '../utils/utils';
import { Component } from './_index';

const timerTemplate = () => `
  <div class="timer">
    <p class="timer__count">
        <span class="timer__minutes">00</span>
        :
        <span class="timer__seconds">00</span>
    </p>
  </div>
`;

class Timer extends Component {
    minutesSelector: string;
    secondsSelector: string;
    secundCount: Element;
    minutesCount: Element;
    maxTime: number;
    time: number;
    intervalID: any;
    endGameHandler: (type: Boolean, time: number) => void;

    constructor() {
        super();

        this.minutesSelector = '.timer__minutes';
        this.secondsSelector = '.timer__seconds';

        this.maxTime = 300;
        this.time = 0;
        this.init();
    }

    updateClock() {
        const { min, sec } = utils.formatTime(this.time);
        this.minutesCount.textContent = min;
        this.secundCount.textContent = sec;
    }

    start() {
        this.intervalID = setInterval(() => {
            if (this.time >= this.maxTime) {
                this.stop(false);
                return;
            }
            this.time++;
            this.updateClock();
        }, 1000);
    }

    stop(type: Boolean) {
        clearInterval(this.intervalID);
        this.endGameHandler(type, this.time);
    }

    getTemplate() {
        return timerTemplate();
    }

    init() {
        super.init();

        this.secundCount = this.element.querySelector(this.secondsSelector);
        this.minutesCount = this.element.querySelector(this.minutesSelector);
    }
}

export default Timer;
