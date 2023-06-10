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
    this.getCounterWorkshop();
  }

  getCounterPeople() {
    let counterPeople = this.fpeople?.filter(
      (author) => author.createdYear <= this.createdYearValueForFilter
    );
    this.dispatchEvent(
      new CustomEvent("change-fpeople-length", {
        detail: { fpeople: counterPeople?.length || 0 },
      })
    );
  }

  getCounterWorkshop() {
    let ArrayWorkshop = this.fpeople
      ?.filter((author) => author.createdYear <= this.createdYearValueForFilter)
      .filter((people) => people.Workshop === true);
    this.dispatchEvent(
      new CustomEvent("change-counterWorkshop", {
        detail: { counterWorkshop: ArrayWorkshop?.length || 0 },
      })
    );
  }
}

customElements.define("persona-calculator", PersonaCalculator);
