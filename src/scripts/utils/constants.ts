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
    WIN: () => `Congratulations!, You successfully found all matches on
        minutes`,
    LOSE: () => `You Are Lose! Maybe you can try later`
};

const DIFFICULTY = {
    easy: 12,
    normal: 16,
    insane: 24,
    god: 40
};

export { RENDER_POSITION, SLUGS, DEFAULT_SETTINGS, GAME_OVER_TEXT, DIFFICULTY };
