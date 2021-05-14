import about from '../../assets/svg/about.svg';
import score from '../../assets/svg/best.svg';
import settings from '../../assets/svg/settings.svg';
import router from '../router';
import Component from './component';

const navTemplate = () => `<nav class="nav">
<ul class="nav__list">
    <li class="nav__item">
        <a href="/" class="nav__link nav__link--current">
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
</nav>`;

class Nav extends Component {
    constructor() {
        super();
        this.template = navTemplate();

        this.onLoad();
    }

    registerLinks() {
        this.element.querySelectorAll('a').forEach((link) => {
            router.createLink(link);
        });
    }

    onLoad() {
        super.onLoad();
        this.registerLinks();
    }
}

export default Nav;
