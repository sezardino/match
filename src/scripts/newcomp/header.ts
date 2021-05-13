import logo from '../../assets/svg/logo.svg';
import about from '../../assets/svg/about.svg';
import score from '../../assets/svg/best.svg';
import settings from '../../assets/svg/settings.svg';
import Component from './component';
import Nav from './nav';
import { ComponentProps } from './interfaces';

const template = () => {
    return `<header class="header">
    <div class="header__logo" on="click|some">
        <img
            src="${logo}"
            alt="game logotype"
            class="logo"
        />
    </div>
    <div class="header__nav">
    {{nav}}
    </div>
    <div class="header__user">
        <button class="button button--primary">
            Register new player
        </button>
    </div>
    </header>`;
};

class Header extends Component {
    element: HTMLElement | null;
    template: () => string;
    constructor(props: ComponentProps) {
        super(props);
        this.name = props.name;
        this.template = template;
        this.components = [new Nav({ name: 'nav' })];
    }

    some() {
        console.log(1);
    }
}

export default Header;
