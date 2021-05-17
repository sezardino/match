import Page from '../pages/page';
import render from '../utils/utils';

class Router {
    routes: Map<string, Page>;
    root: Element;
    activeLinkClass: string;

    constructor(root: Element) {
        this.routes = new Map();
        this.root = root;

        this.init();
    }

    addRoute(slug: string, screen: Page) {
        this.routes.set(slug, screen);
    }

    private removeRoute(route: string) {
        this.routes.delete(route);
    }

    private 404(): void {
        this.root.innerHTML = '<h2>Cant find page</h2>';
    }

    private changeRoute(props: { current: string; prev: string }): void {
        const { current, prev } = props;
        const prevPage = this.routes.get(prev);
        const currentPage = this.routes.get(current);
        const currentUrl = current === 'home' ? '/' : current;
        history.pushState({ slug: currentUrl }, '', currentUrl);
        if (prevPage) {
            prevPage.removePage();
        } else {
            this.root.innerHTML = '';
        }
        currentPage.getElement();
        render.renderAB(this.root, currentPage);
    }

    refresh() {
        this.routes.clear();
    }

    onAppLoad(slug: string) {
        const currentScreen = this.routes.get(slug);
        if (currentScreen) {
            currentScreen.getElement();
            render.renderAB(this.root, currentScreen);
        } else {
            this[404]();
        }
    }

    private init() {
        // back forward buttons
        window.addEventListener('popstate', (evt) => {
            console.log(evt);
        });
    }
}

export default Router;
