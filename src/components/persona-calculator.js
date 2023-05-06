import { LitElement, html } from "lit";

class PersonaCalculator extends LitElement {
  static get properties() {
    return {
      fpeople: { type: Array },
      counterCanTeach: { type: Array },
    };
  }

  constructor() {
    super();
  }

  render() {
    return html` <h1 style="visibility: hidden;">persona calculator</h1> `;
  }

  updated(changedProperties) {
    console.log("updated calculator");

    if (changedProperties.has("fpeople")) {
      console.log("Ha cambiado el fpeople en calculator");
      // se debería sacar el cálculo en una variable

      this.dispatchEvent(
        new CustomEvent("change-fpeople-length", {
          detail: { fpeople: this.fpeople.length },
        })
      );

      let ArrayCanTeach = this.fpeople.filter(
        (people) => people.canTeach === true
      );
      this.counterCanTeach = ArrayCanTeach.length;
      console.log(this.counterCanTeach);

      this.dispatchEvent(
        new CustomEvent("change-counterCanTeach", {
          detail: { counterCanTeach: this.counterCanTeach },
        })
      );
    }

    console.log("fpeople actualizado");
  }
}

customElements.define("persona-calculator", PersonaCalculator);
