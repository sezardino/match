import PageController from './controllers/page';

window.addEventListener('load', () => {
    new PageController({
        root: 'body'
    });
});
