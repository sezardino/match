import render from '../utils/utils';
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

    controlUserPlaceHolder(content: any): void {
        const userRoot = this.element.querySelector(this.userSelector);
        render.renderAB(userRoot, content);
    }

    controlNavPlaceHolder(content: any): void {
        const userRoot = this.element.querySelector(this.navSelector);
        render.renderAB(userRoot, content);
    }
}

export default Header;
