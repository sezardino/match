import { PageProps } from '../interfaces';
import Templates from '../templates';
import Page from './page';

class Score extends Page {
    constructor(props: PageProps) {
        super(props);
        this.template = Templates.score();
    }
}

export default Score;
