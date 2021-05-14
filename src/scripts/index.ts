import PageController from './pageController';
import About from './pages/about';
import Score from './pages/score';
import Settings from './pages/settings';

window.addEventListener('load', () => {
    new PageController({
        root: 'body',
        screens: [
            new About({ slug: '/' }),
            new Score({ slug: 'score' }),
            new Settings({ slug: 'settings' })
        ]
    });
});
