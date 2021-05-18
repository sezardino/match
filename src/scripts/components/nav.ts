import about from '../../assets/svg/about.svg';
import score from '../../assets/svg/best.svg';
import settings from '../../assets/svg/settings.svg';
import Component from './abs/component';

const navTemplate = () => `<nav class="nav">
<ul class="nav__list">
    <li class="nav__item">
        <a href="home" class="nav__link">
            <img
                class="nav__link-img"
                src="${about}"
            />
            <span class="nav__link-text">About Game</span>
        </a>
    </li>
    <li class="nav__item">
        <a href="score" class="nav__link">
            <img
                class="nav__link-img"
                src="${score}"
            />
            <span class="nav__link-text">Best Score</span>
        </a>
    </li>
    <li class="nav__item">
        <a href="settings" class="nav__link">
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
    activeLinkClass: string;
    currentLink: string;
    links: NodeListOf<HTMLAnchorElement>;
    constructor(props: { currentLink: string }) {
        super();

        this.activeLinkClass = 'nav__link--current';
        this.currentLink = props.currentLink;

        this.init();
    }

    getTemplate(): string {
        return navTemplate();
    }

    changeCurrentLink(link: string) {
        this.links.forEach((item: HTMLAnchorElement) => {
            if (item.pathname.includes(link)) {
                item.classList.add(this.activeLinkClass);
                this.currentLink = link;
            } else {
                item.classList.remove(this.activeLinkClass);
            }
        });
    }

    linksListener(handler: (pathname: string) => void): void {
        this.links.forEach((link) => {
            link.addEventListener('click', (evt) => {
                evt.preventDefault();
                const target = evt.target as HTMLAnchorElement;
                const link = target.closest('a');
                const slug = link.pathname.slice(1);
                this.changeCurrentLink(slug);
                handler(slug);
            });
        });
    }

    init() {
        super.init();
        this.links = this.element.querySelectorAll('a');
        this.changeCurrentLink(this.currentLink);
    }
}

export default Nav;
