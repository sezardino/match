interface IRouter {
    addRoute: (slug: string, callback: () => void) => void;
    removeRoute: (route: string) => void;
    refresh: () => void;
    createLink: (link: HTMLAnchorElement) => void;
}

class Router implements IRouter {
    routes: Map<string, () => void>;
    links: Map<string, HTMLAnchorElement>;

    constructor() {
        this.routes = new Map();
        this.links = new Map();

        this.init();
    }

    addRoute(slug: string, callback: () => void) {
        this.routes.set(slug, callback);
    }

    removeRoute(route: string) {
        this.routes.delete(route);
    }

    private deleteActiveClassOnLinks() {
        this.links.forEach((link) => {
            link.classList.remove('nav__link--current');
        });
    }

    createLink(link: HTMLAnchorElement) {
        const path = link.pathname;
        const slug = path.length > 1 ? path.slice(1) : path;

        this.links.set(slug, link);

        link.addEventListener('click', (evt) => {
            evt.preventDefault();
            if (this.routes.has(slug)) {
                const renderFunc = this.routes.get(slug);
                window.history.pushState({ slug }, '', path);
                renderFunc();
                this.deleteActiveClassOnLinks();
                link.classList.add('nav__link--current');
            }
        });
    }

    refresh() {
        this.routes.clear();
    }

    onAppLoad() {
        const { pathname } = location;
        const slug = pathname.length > 1 ? pathname.slice(1) : pathname;
        const renderFunction = this.routes.get(slug);
        renderFunction();
    }

    private init() {
        // back forward buttons
        window.addEventListener('popstate', (evt) => {
            console.log(evt);
        });
    }
}

export default new Router();
