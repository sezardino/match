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
import { RENDER_POSITION } from './constants';
import Page from './pages/page';
import router from './router';
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
    user: { name: string } | null;

    constructor(props: PageControllerProps) {
        this.props = props;
        this.screens = props.screens;
        this.user = localStorage.getItem(LS_NAME);

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

        this.nav = new Nav();
        this.header.controlNavPlaceHolder(this.nav);
    }

    private addListeners() {
        // this.header.signInHandler(() => {
        //     this.popup.open(this.registerForm());
        // });
    }

    private init() {
        this.render(this.props.root);
        this.headerController();

        this.registerScreens();
        this.addListeners();
        router.onAppLoad();
    }
}

export default PageController;
