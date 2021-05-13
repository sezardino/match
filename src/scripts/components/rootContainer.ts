import AbstractComponent from './component';

class RootContainer extends AbstractComponent {
    getTemplate() {
        return `<main>Root Container</main>`;
    }
}

export default RootContainer;
