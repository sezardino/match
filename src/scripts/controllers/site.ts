import Copy from '../components/copy';
import Header from '../components/header';
import Root from '../components/rootContainer';
import { RENDER_POSITION } from '../constants';
import $ from '../utils/render';

interface ISiteController {}

class SiteController implements ISiteController {
    root: string;
    constructor(root: string) {
        this.root = root;

        this.init();
    }

    private init() {
        const copy = new Copy();
        const root = new Root();
        const header = new Header();
        $.find(this.root).render(
            RENDER_POSITION.AFTER_BEGIN,
            root.getElement()
        );

        $.find(this.root).render(
            RENDER_POSITION.AFTER_BEGIN,
            header.getElement()
        );

        $.find(this.root).render(RENDER_POSITION.BEFORE_END, copy.getElement());

        header.addLinkListeners(() => {});
    }
}

export default SiteController;
