import { LitElement, html } from "lit";

class PersonaHeader extends LitElement {
  static get properties() {
    return {};
  }

  constructor() {
    super();
  }

  render() {
    return html` <h1 style="visibility: hidden;">persona Header</h1> `;
  }
}

customElements.define("persona-header", PersonaHeader);
