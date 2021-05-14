import { PageProps } from '../interfaces';
import Templates from '../templates';
import Page from './page';

class Settings extends Page {
    constructor(props: PageProps) {
        super(props);
        this.template = Templates.settings();
    }
}

export default Settings;
