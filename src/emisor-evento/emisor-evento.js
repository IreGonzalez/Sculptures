import { LitElement, html } from "lit";

class EmisorEvento extends LitElement {
  static get properties() {
    return {};
  }

  constructor() {
    super();
  }

  render() {
    return html`
      <h3>Emisor Evento</h3>
      <button @click="${this.sendEvent}">No Pulsar</button>
    `;
  }

  sendEvent(e) {
    console.log("sendEvent");

    this.dispatchEvent(
      // CustomEvent solo sube un nivel, para que suba hasta el final, habría que pos¡ner compose como true
      // el evento que tenemos se llama test-event, con ese nombre se capturará en el componente padre

      new CustomEvent("test-event", {
        detail: {
          course: "TechU",
          year: 2023,
        },
      })
    );
  }
}

customElements.define("emisor-evento", EmisorEvento);
