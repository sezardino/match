interface IRouter {
    addRoute: (slug: string, callback: () => void) => void;
    removeRoute: (route: string) => void;
}

class Router implements IRouter {
    private base: string;
    routes: Map<string, () => void>;

    constructor() {
        this.base = '/';
        this.dir = document.querySelector('#content');
        this.routes = new Map();

        this.init();
    }

    addRoute(slug: string, callback: () => void) {
        this.routes.set(slug, callback);
    }

    removeRoute(route: string) {
        this.routes.delete(route);
    }

    createLink(link: HTMLAnchorElement) {
        link.addEventListener('click', (evt) => {
            evt.preventDefault();
            const slug = evt.target.pathname;
            if (this.routes.has(slug)) {
                window.history.pushState({ slug }, '', slug);
            }
        });
    }

    refresh() {
        this.routes.clear();
    }

    private init() {
        // back forward buttons
        window.addEventListener('popstate', (evt) => {
            console.log(evt);
        });
    }
}

export default Router;
