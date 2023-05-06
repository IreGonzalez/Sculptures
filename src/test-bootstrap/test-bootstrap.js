import { LitElement, html, css } from "lit";

class TestBootstrap extends LitElement {
  static get styles() {
    return css`
      .redbg {
        background-color: red;
      }

      .greenbg {
        background-color: green;
      }

      .bluebg {
        background-color: blue;
      }

      .greybg {
        background-color: grey;
      }
    `;
  }
  static get properties() {
    return {};
  }

  constructor() {
    super();
  }

  render() {
    return html`
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ"
        crossorigin="anonymous"
      />
      <h3>test-bootstrap</h3>
      <div class="row greybg">
        <div class="col-2 col-sm-6 redbg">col 1</div>
        <div class="col-3 col-sm-1 greenbg">col 2</div>
        <div class="col-4 col-sm-1 bluebg">col 3</div>
      </div>
    `;
  }
}

customElements.define("test-bootstrap", TestBootstrap);
