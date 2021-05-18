import Component from './absComponent';

abstract class Screen extends Component {
    slug: string;
    constructor(slug: string) {
        super();

        this.slug = slug;
    }

    abstract getTemplate(): string;
}

export default Screen;
