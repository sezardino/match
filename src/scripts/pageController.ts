import { RENDER_POSITION } from './constants';
import Page from './pages/page';
import router from './router';
import Templates from './templates';
import utils from './utils/render';

type PageControllerProps = {
    root: string;
    screens: Array<any>;
};

class PageController {
    root: Element;
    header: Element;
    nav: Element;
    props: PageControllerProps;
    screens: Array<any>;

    constructor(props: PageControllerProps) {
        this.props = props;
        this.screens = props.screens;

        this.init();
    }

    private render(root: string) {
        this.root = utils.getElement(Templates.main());
        utils.renderElement(
            root,
            RENDER_POSITION.AFTER_BEGIN as InsertPosition,
            this.root
        );
        this.header = utils.getElement(Templates.header());
        utils.renderElement(
            this.root,
            RENDER_POSITION.BEFORE_BEGIN as InsertPosition,
            this.header
        );
        this.nav = utils.getElement(Templates.nav());
        utils.renderElement(
            '.header__nav',
            RENDER_POSITION.BEFORE_END as InsertPosition,
            this.nav
        );
        utils.renderElement(
            this.root,
            RENDER_POSITION.AFTER_END as InsertPosition,
            utils.getElement(Templates.copy())
        );
    }

    private renderScreen(screen: Page) {
        this.root.innerHTML = '';
        utils.renderElement(
            this.root,
            RENDER_POSITION.BEFORE_END as InsertPosition,
            screen.getElement()
        );
    }

    private registerScreens() {
        this.screens.forEach((screen) => {
            router.addRoute(screen.slug, () => this.renderScreen(screen));
        });
    }

    private addListeners() {
        this.nav.querySelectorAll('a').forEach((link) => {
            router.createLink(link);
        });
    }

    private init() {
        this.render(this.props.root);
        this.registerScreens();
        this.addListeners();
        router.onAppLoad();
    }
}

export default PageController;
