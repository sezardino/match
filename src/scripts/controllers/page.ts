import api from '../api/api';
import { DEFAULT_SETTINGS, SLUGS } from '../utils/constants';
import Router from '../router';
import utils from '../utils/utils';

import {
    Button,
    Component,
    Copy,
    Header,
    Main,
    Nav,
    Popup,
    RegisterForm,
    UserView,
    ScoreScreen,
    AboutScreen,
    SettingsScreen,
    SettingsForm
} from '../components/_index';
import GameController from './game';
import { userSettings } from '../interfaces';

type PageControllerProps = {
    root: string;
};

class PageController {
    root: Component;
    header: Header;
    userView: UserView;
    props: PageControllerProps;
    screens: {
        about: AboutScreen;
        settings: SettingsScreen;
        score: ScoreScreen;
    };
    popup: Popup;
    signIn: Button;
    nav: Nav;
    router: Router;
    currentScreen: string;
    userSettings: { cards: string; difficulty: string; placeholders: string };
    user: { name: string } | null;
    gameController: GameController;

    constructor(props: PageControllerProps) {
        this.props = props;
        this.screens = {
            about: new AboutScreen('home'),
            settings: new SettingsScreen('settings'),
            score: new ScoreScreen('score')
        };
        this.user = api.getUserData();
        this.userSettings = api.getSettingsData() || DEFAULT_SETTINGS;
        this.currentScreen = SLUGS.ABOUT;

        this.init();

        this.registerHandler = this.registerHandler.bind(this);
    }

    private render(root: string) {
        this.root = new Main();
        this.header = new Header({ user: this.user });
        this.popup = new Popup();
        utils.renderAB(document.querySelector(root), this.root);
        utils.renderBB(this.root.element, this.header);
        utils.renderAE(this.root.element, new Copy());
        utils.renderAE(this.root.element, this.popup);
    }

    //

    registerHandler() {
        const form = new RegisterForm();
        this.popup.open(form);

        form.submitHandler = (data: { name: string }) => {
            this.popup.close();
            this.user = data;
            this.header.setUser = data;
            api.setUserData(data);
        };
    }

    startGameHandler() {
        if (!this.gameController) {
            this.gameController = new GameController(this.userSettings);
            this.root.element.innerHTML = '';
            this.gameController.init(this.root.element);
            this.gameController.popup = this.popup;
        }
    }

    private settingsFormHandler(data: userSettings) {
        api.setSettingsData(data);
        this.userSettings = data;
    }

    private settingsHandler() {
        const component = this.screens.settings;
        const settingsForm = new SettingsForm(this.userSettings);
        settingsForm.formHandler = (data: userSettings) =>
            this.settingsFormHandler(data);
        component.formPlaceholder(settingsForm);
    }

    changeLinkHandler(slug) {
        const props = {
            prev: this.currentScreen,
            current: slug
        };
        this.currentScreen = slug;
        this.router.changeRoute(props);
    }

    //

    private routerInit(): void {
        const { pathname } = location;
        this.router = new Router(this.root.element);
        this.currentScreen = pathname === '/' ? SLUGS.ABOUT : pathname.slice(1);
        const screens = Object.entries(this.screens);
        screens.forEach((item) => {
            const [key, screen] = item;
            this.router.addRoute(screen.slug, screen);
            if (this[`${key}Handler`]) {
                this[`${key}Handler`]();
            }
        });
        this.router.onAppLoad(this.currentScreen);
    }

    addHeaderListeners() {
        const header = this.header;

        header.registerHandler = () => this.registerHandler();
        header.startGameHandler = () => this.startGameHandler();
        header.changeLinkHandler = (slug) => this.changeLinkHandler(slug);
    }

    private init() {
        this.render(this.props.root);
        this.routerInit();

        this.addHeaderListeners();
    }
}

export default PageController;
