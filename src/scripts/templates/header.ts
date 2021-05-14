import logo from '../../assets/svg/logo.svg';

const header = () => `
<header class="header">
    <div class="header__logo">
        <img
            src="${logo}"
            alt="game logotype"
            class="logo"
        />
    </div>
    <div class="header__nav">
    </div>
    <div class="header__user">
        <button class="button button--primary">
            Register new player
        </button>
    </div>
</header>`;

export default header;
