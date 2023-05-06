import { LitElement, html } from "lit";

class PersonaForm extends LitElement {
  static get properties() {
    return {
      person: { type: Object },
      editingPerson: { type: Boolean },
    };
  }

  constructor() {
    super();

    this.resetFormData();
  }

  render() {
    return html`
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ"
        crossorigin="anonymous"
      />
      <div>
        <form>
          <div class="form-group">
            <label>Autor</label>
            <input
              type="text"
              class="form-control"
              placeholder="Nombre completo"
              .value="${this.person.name}"
              @input="${this.updateName}"
              ?disabled="${this.editingPerson}"
            />
          </div>
          <div class="form-group">
            <label>Descripción</label>
            <textarea
              type="text"
              class="form-control"
              placeholder="perfil"
              rows="5"
              .value="${this.person.profile}"
              @input="${this.updateProfile}"
            ></textarea>
          </div>
          <div class="form-group">
            <label>Año de creación</label>
            <input
              type="text"
              class="form-control"
              placeholder="Año de creación"
              .value="${this.person.yearsInCompany}"
              @input="${this.updateYearsInCompany}"
            />
          </div>
          <div class="form-group">
            <label
              >Tiene Taller
              <input
                type="checkbox"
                placeholder="Si"
                ?checked="${this.person.canTeach}"
                @change="${this.updateCanTeach}"
            /></label>
          </div>
          <button class="btn btn-primary" @click="${this.goBack}">
            <!-- Este componente es el que debe obtener la responsabilidad de limpiar el formulario -->
            <strong>Atrás</strong>
          </button>
          <button
            class="btn btn-primary btn-success"
            @click="${this.storePerson}"
          >
            <strong>Guardar</strong>
          </button>
        </form>
      </div>
    `;
  }

  updateName(e) {
    console.log("updateName");
    console.log(
      "actualizamos la propiedad name con el valor de " + e.target.value
    );

    this.person.name = e.target.value;
  }

  updateProfile(e) {
    console.log("updateProfile");
    console.log(
      "actualizamos la propiedad profile con el valor de " + e.target.value
    );

    this.person.profile = e.target.value;
  }

  updateYearsInCompany(e) {
    console.log("updateYearsInCompany");
    console.log(
      "actualizamos los años en lacompañía con el valor de " + e.target.value
    );

    this.person.yearsInCompany = e.target.value;
  }

  updateCanTeach(e) {
    console.log("updateCanTeach");
    console.log("actualizamos si tiene taller " + e.target.checked);

    this.person.updateCanTeach = e.target.checked;
  }

  goBack(e) {
    console.log("goBack");
    e.preventDefault();

    this.dispatchEvent(new CustomEvent("persona-form-close", {}));

    this.resetFormData();
  }

  storePerson(e) {
    e.preventDefault();
    console.log("storePerson");
    console.log("La propiedad name vale " + this.person.name);
    console.log("La propiedad profile vale " + this.person.profile);
    console.log(
      "La propiedad yearsInCompany vale " + this.person.yearsInCompany
    );

    this.person.photo = {
      src: "./images/escultura.jpg",
      alt: "persona",
    };

    this.dispatchEvent(
      new CustomEvent("persona-form-store", {
        detail: {
          person: {
            name: this.person.name,
            profile: this.person.profile,
            yearsInCompany: this.person.yearsInCompany,
            photo: this.person.photo,
            canTeach: this.person.updateCanTeach,
          },
          editingPerson: this.editingPerson,
        },
      })
    );
  }

  resetFormData() {
    console.log("resetFormData");
    this.person = {};
    this.person.name = "";
    this.person.profile = "";
    this.person.yearsInCompany = "";
    this.person.updateCanTeach = false;
    this.editingPerson = false;
  }
}

customElements.define("persona-form", PersonaForm);
