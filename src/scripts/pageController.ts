import Component from './components/component';
import Copy from './components/copy';
import Header from './components/header';
import Main from './components/main';
import { RENDER_POSITION } from './constants';
import Page from './pages/page';
import router from './router';
import utils from './utils/render';

type PageControllerProps = {
    root: string;
    screens: Array<any>;
};

class PageController {
    root: Component;
    header: Component;
    props: PageControllerProps;
    screens: Array<any>;
    user: { name: string } | null;

    constructor(props: PageControllerProps) {
        this.props = props;
        this.screens = props.screens;
        this.user = null;

        this.init();
    }

    private render(root: string) {
        this.root = new Main();
        this.header = new Header({ user: this.user });
        utils.renderAB(document.querySelector(root), this.root);
        utils.renderBB(this.root.element, this.header);
        utils.renderAE(this.root.element, new Copy());
    }

    private renderScreen(screen: Page) {
        this.root.element.innerHTML = '';
        utils.renderElement(
            this.root.element,
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
        // this.header.registerBtnHandler((evt) => {
        //     console.log(evt);
        // });
    }

    private init() {
        this.render(this.props.root);
        this.registerScreens();
        this.addListeners();
        router.onAppLoad();
    }
}

export default PageController;
