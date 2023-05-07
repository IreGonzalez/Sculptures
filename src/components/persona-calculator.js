import { LitElement } from "lit";

class PersonaCalculator extends LitElement {
  static get properties() {
    return {
      fpeople: { type: Array },
      counterCanTeach: { type: Array },
      counterPeople: { type: Array },
      createdYearValueForFilter: { type: Number },
    };
  }

  constructor() {
    super();
  }

  updated(changedProperties) {
    console.log("updated calculator", changedProperties);

    if (changedProperties.has("fpeople")) {
      console.log("Ha cambiado el fpeople en calculator");
      this.getCounterPeople();
      this.getCounterCanTeach();
    }

    if (changedProperties.has("createdYearValueForFilter")) {
      this.peopleFiltered(this.createdYearValueForFilter);
    }
  }

  getCounterPeople() {
    this.counterPeople = this.fpeople;
    this.dispatchEvent(
      new CustomEvent("change-fpeople-length", {
        detail: { fpeople: this.counterPeople.length },
      })
    );
  }

  peopleFiltered(filtro) {
    this.fpeople = this.fpeople.filter(
      (author) => author.createdYear <= filtro
    );
  }

  getCounterCanTeach() {
    let ArrayCanTeach = this.fpeople.filter(
      (people) => people.canTeach === true
    );
    this.counterCanTeach = ArrayCanTeach;
    this.dispatchEvent(
      new CustomEvent("change-counterCanTeach", {
        detail: { counterCanTeach: this.counterCanTeach.length },
      })
    );
  }
}

customElements.define("persona-calculator", PersonaCalculator);
