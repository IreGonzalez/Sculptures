import { LitElement, html } from "lit";
//se importa uno dentro del otro para que compartan las estructuras del DOM. También así se sigue una coherencia en la que se importan los componentes en el sitio en el que se van a utilizar
import "./components/persona-header";
import "./components/persona-sidebar";
import "./components/persona-main";
import "./components/persona-footer";
import "./components/persona-calculator";

class PersonaApp extends LitElement {
  static get properties() {
    return {
      people: { type: Array },
    };
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
      <persona-header></persona-header>
      <persona-calculator
        @change-fpeople-length="${this.getPeopleLength}"
        @change-counterCanTeach="${this.getCounterCanTeach}"
      ></persona-calculator>
      <div class="row">
        <persona-sidebar
          class="col-2"
          @new-person="${this.newPerson}"
          @createdYearValue-for-filter=${this.createdYearValueForFilter}
        ></persona-sidebar>
        <persona-main
          class="col-10"
          @people-data-info="${this.peopleDataInfo}"
          @max-value="${this.maxValue}"
          @min-value="${this.minValue}"
        ></persona-main>
      </div>
      <persona-footer></persona-footer>
    `;
  }

  newPerson(e) {
    console.log("newPerson en persona-app");
    this.shadowRoot.querySelector("persona-main").showPersonForm = true;
  }

  getPeopleLength(e) {
    console.log("getPeopleLength", e.detail.fpeople);
    this.shadowRoot.querySelector("persona-sidebar").peopleLength =
      e.detail.fpeople;
  }

  getCounterCanTeach(e) {
    console.log("getCounterCanTeach", e.detail.counterCanTeach);
    this.shadowRoot.querySelector("persona-sidebar").peopleCanTeach =
      e.detail.counterCanTeach;
  }

  peopleDataInfo(e) {
    console.log("recibe el array");
    this.shadowRoot.querySelector("persona-calculator").fpeople = e.detail;
  }

  maxValue(e) {
    console.log("recoge el máximo valor de createdYear " + e.detail);
    this.shadowRoot.querySelector("persona-sidebar").maxValueForFilter =
      e.detail.maxValue;
  }

  minValue(e) {
    console.log("recoge el máximo valor de createdYear " + e.detail);
    this.shadowRoot.querySelector("persona-sidebar").minValueForFilter =
      e.detail.minValue;
  }

  createdYearValueForFilter(e) {
    console.log(
      "recoge el valor establecido para el filtro, que es: " +
        e.detail.createdYearValueForFilter
    );
    this.shadowRoot.querySelector("persona-main").createdYearValueForFilter =
      e.detail.createdYearValueForFilter;
  }
}

customElements.define("persona-app", PersonaApp);
