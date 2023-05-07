import { LitElement } from "lit";

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

  updated(changedProperties) {
    console.log("updated calculator", changedProperties);

    if (changedProperties.has("fpeople")) {
      console.log("Ha cambiado el fpeople en calculator");
      // se debería sacar el cálculo en una variable

      this.dispatchEvent(
        new CustomEvent("change-fpeople-length", {
          detail: { fpeople: this.fpeople.length },
        })
      );
      this.getCanTeach();
    }
  }

  getCanTeach() {
    let ArrayCanTeach = this.fpeople.filter(
      (people) => people.canTeach === true
    );
    this.counterCanTeach = ArrayCanTeach.length;
    this.dispatchEvent(
      new CustomEvent("change-counterCanTeach", {
        detail: { counterCanTeach: this.counterCanTeach },
      })
    );
  }
}

customElements.define("persona-calculator", PersonaCalculator);
