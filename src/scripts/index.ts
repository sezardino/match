import Router from './router';

const router = new Router();

router.addRoute('/about', () => console.log(1))

document.querySelectorAll('a').forEach((a) => {
    router.createLink(a);
});
