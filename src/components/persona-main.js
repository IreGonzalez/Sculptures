import { LitElement, html } from "lit";
import "./persona-ficha-listado";
import "./persona-form";
import "../data/persona-main-dm";

class PersonaMain extends LitElement {
  static get properties() {
    return {
      people: { type: Array },
      showPersonForm: { type: Boolean },
      createYearSelected: { type: Number },
    };
  }

  constructor() {
    super();

    this.people = [];

    this.showPersonForm = false;
  }

  peopleDataUpdate(e) {
    console.log(e.detail.people);
    this.people = e.detail.people;
  }

  updated(changedProperties) {
    console.log("updated");

    if (changedProperties.has("showPersonForm")) {
      console.log(
        "ha cambiado el valor de la propiedad showPersonForm en persona-main"
      );
      if (this.showPersonForm === true) {
        this.showPersonFormData();
      } else {
        this.showPersonList();
      }
    }

    if (changedProperties.has("people")) {
      console.log("Ha cambiado el Array ");
      let peopleDataInfo = this.people;
      console.log(peopleDataInfo);
      this.dispatchEvent(
        new CustomEvent("people-data-info", { detail: peopleDataInfo })
      );
      this.maxValueForFilter();
    }
  }

  showPersonList() {
    console.log("showPersonList");
    console.log("Mostrando el listado de personas");

    this.shadowRoot.getElementById("peopleList").classList.remove("d-none");
    this.shadowRoot.getElementById("personForm").classList.add("d-none");
  }

  showPersonFormData() {
    console.log("showPersonFormData");
    console.log("Mostrando el formulario de personas");

    this.shadowRoot.getElementById("peopleList").classList.add("d-none");
    this.shadowRoot.getElementById("personForm").classList.remove("d-none");
  }

  // El punto es necesario incluirlo porque no lo pasamos como atributo, sino como propiedad al componente
  render() {
    return html`
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ"
        crossorigin="anonymous"
      />
      <h2 class="text-center">Escultura</h2>
      <div class="row" id="peopleList" style="margin: 0;">
        <div
          class="row row-cols-1 row-cols-sm-4"
          style=" row-gap: var(--bs-gutter-x);"
        >
          ${this.people.map(
            (person) => html`
              <persona-ficha-listado
                fname="${person.name}"
                yearsInCompany="${person.yearsInCompany}"
                .photo="${person.photo}"
                .canTeach="${person.canTeach}"
                profile="${person.profile}"
                @delete-person="${this.deletePerson}"
                @info-person="${this.infoPerson}"
              ></persona-ficha-listado>
            `
          )}
        </div>
      </div>
      <div class="row">
        <persona-form
          id="personForm"
          class="border rounded border-primary d-none"
          @persona-form-close="${this.personFormClose}"
          @persona-form-store="${this.personFormStore}"
        ></persona-form>
      </div>
      <persona-main-dm
        @add-people="${this.peopleDataUpdate}"
        yearForFilter="${this.createYearSelected}"
      ></persona-main-dm>
    `;
  }

  deletePerson(e) {
    console.log("deletePerson en Main");
    console.log("Se va a borrar la persona de nombre " + e.detail.name);

    this.people = this.people.filter((person) => person.name != e.detail.name);
  }

  infoPerson(e) {
    console.log("infoPerson");
    console.log("Se ha pedido más información de la persona " + e.detail.name);
    console.log(e.detail);
    let chosenPerson = this.people.filter(
      (person) => person.name === e.detail.name
    );

    // var identificador => "valor"
    // las variables existen en memoria, pero realmente nosotros identificamos y utilizamos es el identificador, mientras que el propio programa lo que utiliza es el valor esto se relaciona utilizando las referencias. Las referencias son direcciones de memoria, son punteros "C"
    //#00FF "valor"

    let person = {};
    person.name = chosenPerson[0].name;
    person.profile = chosenPerson[0].profile;
    person.yearsInCompany = chosenPerson[0].yearsInCompany;
    person.canTeach = chosenPerson[0].canTeach;

    this.shadowRoot.getElementById("personForm").person = person;
    this.shadowRoot.getElementById("personForm").editingPerson = true;
    this.showPersonForm = true;
  }

  personFormClose(e) {
    console.log("personFormClose");
    console.log("se ha cerrado el formulario de persona");

    this.showPersonForm = false;
  }

  personFormStore(e) {
    console.log("personFormStore");
    console.log("Se va a almacenar una persona");

    if (e.detail.editingPerson === true) {
      console.log(
        "se va a actualizar la persona de nombre " + e.detail.person.name
      );
      this.people = this.people.map((person) =>
        person.name === e.detail.person.name
          ? (person = e.detail.person)
          : person
      );
      // let indexOfPerson = this.people.findIndex(
      //   (person) => person.name === e.detail.person.name
      // );
      // if (indexOfPerson >= 0) {
      //   console.log("persona encontrada para actualizar");
      //   this.people[indexOfPerson] = e.detail.person;
      // }
    } else {
      console.log("Se va a almacenar una persona nueva");
      // this.people.push(e.detail.person);
      this.people = [...this.people, e.detail.person];
    }

    console.log("persona almacenada");

    this.showPersonForm = false;
  }

  maxValueForFilter(e) {
    let maxValue = 1950;
    this.people.forEach((author) => {
      if (author.yearsInCompany > maxValue) {
        maxValue = author.yearsInCompany;
      }
    });
    this.dispatchEvent(
      new CustomEvent("max-value", {
        detail: { maxValue: maxValue },
      })
    );
  }
}

// ("nombre de la etiqueta", clase)
customElements.define("persona-main", PersonaMain);
