import Component from './component';
import { ComponentProps } from './interfaces';
import Link from './link';

const template = () => {
    return `
  <nav class="nav">
          <ul class="nav__list">
              <li class="nav__item nav__item--current">
                  <a href="/about" class="nav__link">
                      <img
                          class="nav__link-img"
                          src=""
                      />
                      <span class="nav__link-text">About Game</span>
                  </a>
              </li>
              <li class="nav__item">
                  <a href="/score" class="nav__link">
                      <img
                          class="nav__link-img"
                          src=""
                      />
                      <span class="nav__link-text">Best Score</span>
                  </a>
              </li>
              <li class="nav__item">
                  <a href="/settings" class="nav__link">
                      <img
                          class="nav__link-img"
                          src=""
                      />
                      <span class="nav__link-text"
                          >Game Settings</span
                      >
                  </a>
              </li>
          </ul>
      </nav>`;
};

class Nav extends Component {
    element: HTMLElement | null;
    template: () => string;
    constructor(props: ComponentProps) {
        super(props);

        this.name = props.name;
        this.template = template;
        this.components = [new Link({ name: 'aboutLink' })];
    }
}

export default Nav;
