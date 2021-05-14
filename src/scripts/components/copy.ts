import Component from './component';

const copyTemplate = () => `
<div class="copy">
  Icons made by
  <a href="https://www.freepik.com" title="Freepik">Freepik</a> from
  <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
</div>`;

class Copy extends Component {
    constructor() {
        super();
        this.template = copyTemplate();

        this.onLoad();
    }
}

export default Copy;
