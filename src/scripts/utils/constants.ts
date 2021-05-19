import utils from './utils';

const RENDER_POSITION = {
    BEFORE_END: 'beforeend',
    AFTER_END: 'afterend',
    BEFORE_BEGIN: 'beforebegin',
    AFTER_BEGIN: 'afterbegin'
};

const SLUGS = {
    ABOUT: 'home',
    SCORE: 'score',
    SETTINGS: 'settings',
    GAME: 'game'
};

const DEFAULT_SETTINGS = {
    cards: 'bear',
    difficulty: 'easy',
    placeholders: 'canyon'
};

const GAME_OVER_TEXT = {
    WIN: (time: number) => {
        const { min, sec } = utils.formatTime(time);
        return `Congratulations!, You successfully found all matches on
        ${min}:${sec} minutes`;
    },
    LOSE: () => `You Are Lose! Maybe you can try later`
};

const DIFFICULTY = {
    easy: 16,
    normal: 36,
    insane: 48,
    god: 60
};

export { RENDER_POSITION, SLUGS, DEFAULT_SETTINGS, GAME_OVER_TEXT, DIFFICULTY };
