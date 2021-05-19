import SmartComponent from './smartComponent';

abstract class Screen extends SmartComponent {
    slug: string;
    constructor(slug: string) {
        super();

        this.slug = slug;
    }
}

export default Screen;
