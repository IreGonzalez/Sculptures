import { LitElement, html } from "lit";

class PersonaSidebar extends LitElement {
  static get properties() {
    return {
      peopleLength: { type: Number },
      peopleCanTeach: { type: Number },
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

      <aside>
        <section>
          <div class="mt-5">
            <button
              class="w-100 btn btn-success"
              style="font-size: 50px; display: flex; justify-content: center;"
              @click="${this.newPerson}"
            >
              <strong>Añadir</strong>
            </button>
            <h2 class="text-center">Hay ${this.peopleLength} autores,</h2>
            <h2 class="text-center">${this.peopleCanTeach} tienen taller</h2>
            <div>
              <input
                type="range"
                list="createYear"
                @input=${this.createYearSelect}
                min="1450"
                max="1950"
                step="50"
              />
            </div>
          </div>
        </section>
      </aside>
    `;
  }

  newPerson() {
    console.log("new-person en persona-sidebar");
    console.log("se va a crear una nueva persona");
    this.dispatchEvent(new CustomEvent("new-person", {}));
  }

  createYearSelect(e) {
    console.log("createYearSelect");
    console.log("se ha seleccionado el año " + e.target.value);
    let createYearSelected = e.target.value;
    this.dispatchEvent(
      new CustomEvent("createYear-selected", { detail: createYearSelected })
    );
  }
}

customElements.define("persona-sidebar", PersonaSidebar);