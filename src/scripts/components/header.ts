import utils from '../utils/utils';
import Component from './abs/component';

import logo from '../../assets/svg/logo.svg';
import Button from './button';
import Nav from './nav';
import LoggedUser from './loggedUser';

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
    currentPage: string;
    nav: Nav;
    loggedUser: LoggedUser;
    navRoot: HTMLDivElement;
    userRoot: HTMLDivElement;
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

    set setUser(user: { name: string }) {
        this.user = user;
        this.checkUser();
    }

    set setCurrentPage(page: string) {
        this.currentPage = page;
    }

    set registerHandler(handler: () => void) {
        if (this.signIn) {
            this.signIn.buttonListener(handler);
        }
    }

    set startGameHandler(handler: () => void) {
        this.loggedUser.buttonHandler(handler);
    }

    set changeLinkHandler(handler: () => void) {
        this.nav.linksListener = (slug) => {
            handler(slug);
        };
    }

    checkUser() {
        if (this.user?.name) {
            this.userRoot.innerHTML = '';
            utils.render(this.userRoot, this.loggedUser);
        } else {
            utils.render(this.userRoot, this.signIn);
        }
    }

    init() {
        super.init();

        this.navRoot = this.element.querySelector(this.navSelector);
        this.userRoot = this.element.querySelector(this.userSelector);

        this.nav = new Nav(this.currentPage);
        this.loggedUser = new LoggedUser();
        this.signIn = new Button({
            text: 'Register new player',
            extraClass: 'button--primary'
        });
        utils.render(this.navRoot, this.nav);
        this.checkUser();
    }
}

export default Header;

// this.nav = new Nav({ currentLink: this.currentScreen });
// this.nav.linksListener((pathname) => {
//     if (pathname !== this.currentScreen) {
//         const props = {
//             prev: this.currentScreen,
//             current: pathname
//         };
//         this.currentScreen = pathname;
//         this.router.changeRoute(props);
//     }
// });
// this.header.controlNavPlaceHolder(this.nav);
