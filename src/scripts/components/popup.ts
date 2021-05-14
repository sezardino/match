import Component from './component';

const popupTemplate = () => `
<div class="popup">
  <div class="popup__inner">
  </div>
</div>`;

class Popup extends Component {
    constructor() {
        super();
        this.template = popupTemplate();

        this.onLoad();
    }
}

export default Popup;
