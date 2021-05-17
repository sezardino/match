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
import Page from './pages/page';
import Router from './router';
import utils from './utils/render';

type PageControllerProps = {
    root: string;
    screens: Array<any>;
};

const LS_NAME = 'math-game-user';

class PageController {
    root: Component;
    header: Header;
    userView: UserView;
    props: PageControllerProps;
    screens: Array<any>;
    popup: Popup;
    signIn: Button;
    nav: Nav;
    router: Router;
    currentScreen: string;
    user: { name: string } | null;

    constructor(props: PageControllerProps) {
        this.props = props;
        this.screens = props.screens;
        this.user = localStorage.getItem(LS_NAME);
        this.currentScreen = '/';

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
            const stringifyData = JSON.stringify(data);
            localStorage.setItem(LS_NAME, stringifyData);
            this.popup.close();
        });

        form.cancelHandler(() => {
            this.popup.close();
        });

        return form;
    }

    headerController(): void {
        if (this.user) {
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

    routerInit(): void {
        const { pathname } = location;
        this.router = new Router(this.root.element);
        this.currentScreen =
            this.currentScreen !== pathname ? pathname.slice(1) : pathname;
        this.screens.forEach((screen) => {
            this.router.addRoute(screen.slug, screen);
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
