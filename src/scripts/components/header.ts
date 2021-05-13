import AbstractComponent from './component';
import logo from '../../assets/svg/logo.svg';
import about from '../..//assets/svg/about.svg';
import score from '../../assets/svg/best.svg';
import settings from '../../assets/svg/settings.svg';

class Header extends AbstractComponent {
    constructor() {
        super();
    }

    getTemplate() {
        return `
        <header class="header">
        <div class="header__logo">
            <img
                src="${logo}"
                alt="game logotype"
                class="logo"
            />
        </div>
        <div class="header__nav">
            <nav class="nav">
                <ul class="nav__list">
                    <li class="nav__item nav__item--current">
                        <a href="/about" class="nav__link">
                            <img
                                class="nav__link-img"
                                src="${about}"
                            />
                            <span class="nav__link-text">About Game</span>
                        </a>
                    </li>
                    <li class="nav__item">
                        <a href="/score" class="nav__link">
                            <img
                                class="nav__link-img"
                                src="${score}"
                            />
                            <span class="nav__link-text">Best Score</span>
                        </a>
                    </li>
                    <li class="nav__item">
                        <a href="/settings" class="nav__link">
                            <img
                                class="nav__link-img"
                                src="${settings}"
                            />
                            <span class="nav__link-text"
                                >Game Settings</span
                            >
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
        <div class="header__user">
            <button class="button button--primary">
                Register new player
            </button>
        </div>
    </header>`;
    }

    addLinkListeners(callback: () => void) {
        const links = this.element.querySelectorAll('a');
        links.forEach((link) => {
            link.addEventListener('click', (evt) => {
                evt.preventDefault();
                console.log(1);
                callback();
            });
        });
    }
}

export default Header;
