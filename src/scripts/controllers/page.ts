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
    GameScreen,
    Screen
} from '../components/_index';
import GameController from './game';

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

    private registerForm(): RegisterForm {
        const form = new RegisterForm();

        form.submitHandler((data) => {
            this.user = data;
            this.checkUser();
            this.popup.close();
            api.setUserData(data);
        });

        form.cancelHandler(() => {
            this.popup.close();
        });

        return form;
    }

    startGameHandler() {
        if (!this.gameController) {
            this.gameController = new GameController(this.userSettings);
            this.root.element.innerHTML = '';
            this.gameController.init(this.root.element);
            this.gameController.popup = this.popup;
        }
    }

    private checkUser() {
        if (this.user?.name) {
            this.userView = new UserView();
            this.userView.buttonHandler(() => {
                this.startGameHandler();
            });
            this.header.controlUserPlaceHolder(this.userView);
        } else {
            this.signIn = new Button({
                text: 'Register new player',
                extraClass: 'button--primary'
            });
            this.signIn.buttonListener(() =>
                this.popup.open(this.registerForm())
            );
            this.header.controlUserPlaceHolder(this.signIn);
        }
    }

    private headerController(): void {
        this.checkUser();
        this.nav = new Nav({ currentLink: this.currentScreen });
        this.nav.linksListener((pathname) => {
            if (pathname !== this.currentScreen) {
                const props = {
                    prev: this.currentScreen,
                    current: pathname
                };
                this.currentScreen = pathname;
                this.router.changeRoute(props);
            }
        });
        this.header.controlNavPlaceHolder(this.nav);
    }

    private settingsHandler() {
        const component = this.screens.settings;
        component.handler = (data) => {
            api.setSettingsData(data);
        };
    }

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

    private init() {
        this.render(this.props.root);
        this.routerInit();

        this.headerController();
    }
}

export default PageController;
