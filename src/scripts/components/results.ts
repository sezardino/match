import { Component } from './_index';

const resultsTemplate = (props) => `
  <section class="results">
    <h2 class="hidden">Results</h2>
    <p class="results__text">
      ${props.text}
    </p>
  </section>
`;

class Results extends Component {
    text: string;
    constructor(text: string) {
        super();

        this.text = text;

        this.init();
    }

    getTemplate() {
        return resultsTemplate({ text: this.text });
    }
}

export default Results;
