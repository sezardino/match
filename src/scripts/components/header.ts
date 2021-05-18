import utils from '../utils/utils';
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

class Header extends Component {
    user: { name: string };
    userSelector: string;
    navSelector: string;
    signIn: Button;
    nav: Nav;
    constructor(props: { user: { name: string } } | null) {
        super();
        this.user = props.user;
        this.userSelector = '.header__user';
        this.navSelector = '.header__nav';

        this.init();
    }

    getTemplate() {
        return headerTemplate();
    }

    controlUserPlaceHolder(content: any): void {
        const userRoot = this.element.querySelector(this.userSelector);
        utils.render(userRoot, content);
    }

    controlNavPlaceHolder(content: any): void {
        const userRoot = this.element.querySelector(this.navSelector);
        utils.render(userRoot, content);
    }
}

export default Header;
