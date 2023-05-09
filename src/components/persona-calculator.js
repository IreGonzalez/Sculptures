import { LitElement } from "lit";

class PersonaCalculator extends LitElement {
  static get properties() {
    return {
      fpeople: { type: Array },
      createdYearValueForFilter: { type: Number },
    };
  }

  constructor() {
    super();
  }

  updated(changedProperties) {
    console.log("updated calculator", changedProperties);
    this.getCounterPeople();
    this.getCounterCanTeach();
  }

  getCounterPeople() {
    let counterPeople = this.fpeople?.filter(
      (author) => author.createdYear <= this.createdYearValueForFilter
    );
    this.dispatchEvent(
      new CustomEvent("change-fpeople-length", {
        detail: { fpeople: counterPeople?.length || -1 },
      })
    );
  }

  getCounterCanTeach() {
    let ArrayCanTeach = this.fpeople
      ?.filter((author) => author.createdYear <= this.createdYearValueForFilter)
      .filter((people) => people.canTeach === true);
    this.dispatchEvent(
      new CustomEvent("change-counterCanTeach", {
        detail: { counterCanTeach: ArrayCanTeach?.length || -1 },
      })
    );
  }
}

customElements.define("persona-calculator", PersonaCalculator);
