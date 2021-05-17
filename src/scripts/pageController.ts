import api from './api/api';
import Button from './components/button';
import Component from './components/component';
import Copy from './components/copy';
import Header from './components/header';
import Main from './components/main';
import Nav from './components/nav';
import Popup from './components/popup';
import RegisterForm from './components/registerForm';
import UserView from './components/user';
import { SLUGS } from './constants';
import About from './pages/about';
import Game from './pages/game';
import Page from './pages/page';
import Score from './pages/score';
import Settings from './pages/settings';
import Router from './router';
import utils from './utils/utils';

type PageControllerProps = {
    root: string;
};

const LS_NAME = 'math-game-user';

class PageController {
    root: Component;
    header: Header;
    userView: UserView;
    props: PageControllerProps;
    screens: { about: About; settings: Settings; score: Score; game: Game };
    popup: Popup;
    signIn: Button;
    nav: Nav;
    router: Router;
    currentScreen: string;
    user: { name: string } | null;

    constructor(props: PageControllerProps) {
        this.props = props;
        this.screens = {
            about: new About('home'),
            settings: new Settings('settings'),
            score: new Score('score'),
            game: new Game('game')
        };
        this.user = api.getUserData();
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

    registerForm(): RegisterForm {
        const form = new RegisterForm();

        form.submitHandler((data) => {
            api.setUserData(data);
            this.popup.close();
        });

        form.cancelHandler(() => {
            this.popup.close();
        });

        return form;
    }

    headerController(): void {
        if (this.user.name) {
            this.userView = new UserView();
            this.userView.buttonHandler(() => {
                console.log('start');
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

    settingsHandler() {
        const component = this.screens.settings;
        component.handler = (data) => {
            console.log(data);
            api.setSettingsData(data);
        };
    }

    routerInit(): void {
        const { pathname } = location;
        this.router = new Router(this.root.element);
        this.currentScreen = pathname === '/' ? SLUGS.ABOUT : pathname.slice(1);
        const screens = Object.entries(this.screens);
        screens.forEach(([key, screen]) => {
            this.router.addRoute(screen.slug, screen);
            if (this[`${key}Handler`]) {
                this[`${key}Handler`]();
            }
        });
        this.router.onAppLoad(this.currentScreen);
    }

    private init() {
        console.log(this.user);
        this.render(this.props.root);
        this.routerInit();

        this.headerController();
    }
}

export default PageController;
