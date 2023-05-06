import { LitElement, html } from "lit";
import "../emisor-evento/emisor-evento";

class ReceptorEvento extends LitElement {
  static get properties() {
    return {
      course: { type: String },
      year: { type: String },
    };
  }

  constructor() {
    super();
  }

  render() {
    return html`
      <h3>receptor Evento</h3>
      <h5>Este curso es de ${this.course}</h5>
      <h5>Y estamos en el año ${this.year}</h5>
    `;
  }
}

customElements.define("receptor-evento", ReceptorEvento);
