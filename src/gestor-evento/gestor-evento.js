import { LitElement, html } from "lit";
import "../emisor-evento/emisor-evento";
import "../receptor-evento/receptor-evento";

class GestorEvento extends LitElement {
  static get properties() {
    return {};
  }

  constructor() {
    super();
  }

  render() {
    return html`
      <h1>Gestor Evento</h1>
      <!-- se recogey se captura el evento que ha lanzado el emisor -->
      <emisor-evento @test-event="${this.processEvent}"></emisor-evento>
      <receptor-evento
        id="gestor-evento-id"
        course="${this.course}"
        year="${this.year}"
      ></receptor-evento>
    `;
  }

  processEvent(e) {
    console.log(e.detail);
    console.log("capturado evento");
    this.shadowRoot.getElementById("gestor-evento-id").course = e.detail.course;
    this.shadowRoot.getElementById("gestor-evento-id").year = e.detail.year;
  }
}

customElements.define("gestor-evento", GestorEvento);
