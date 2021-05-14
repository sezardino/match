import render from '../utils/render';
import Component from './component';

import logo from '../../assets/svg/logo.svg';
import Button from './button';
import Nav from './nav';

const headerTemplate = () => `
<header class="header">
    <div class="header__logo">
        <img
            src="${logo}"
            alt="game logotype"
            class="logo"
        />
    </div>
    <div class="header__nav"></div>
    <div class="header__user"></div>
</header>`;

const buttonProps = {
    text: 'Register new player',
    extraClass: 'button--primary'
};

type HeaderProps = {
    user: { name: string } | null;
};

class Header extends Component {
    user: { name: string };
    userSelector: string;
    navSelector: string;
    signIn: Button;
    nav: Nav;
    constructor(props: HeaderProps) {
        super();
        this.user = props.user;
        this.template = headerTemplate();
        this.userSelector = '.header__user';
        this.navSelector = '.header__nav';

        this.onLoad();
    }

    signInHandler(handler: () => void) {
        this.signIn.buttonListener(handler);
    }

    renderNav() {
        this.nav = new Nav();
        const navRoot = this.element.querySelector(this.navSelector);
        render.renderAB(navRoot, this.nav);
    }

    renderSignIn(root: Element) {
        this.signIn = new Button(buttonProps);
        render.renderAB(root, this.signIn);
    }

    onLoad() {
        super.onLoad();
        this.renderNav()
        const userRoot = this.element.querySelector(this.userSelector);
        if (this.user) {
            console.log('have user');
        } else {
            this.renderSignIn(userRoot);
        }
    }
}

export default Header;
