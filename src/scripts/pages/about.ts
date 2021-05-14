import { PageProps } from '../interfaces';
import Templates from '../templates';
import Page from './page';

class About extends Page {
    constructor(props: PageProps) {
        super(props);
        this.template = Templates.about();
    }
}

export default About;
