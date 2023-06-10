import { LitElement, html, css } from "lit";

class PersonaFichaListado extends LitElement {
  static get properties() {
    return {
      fname: { type: String },
      createdYear: { type: Number },
      photo: { type: Object },
      Workshop: { type: Boolean },
      profile: { type: String },
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

      <div class="card h-100" style="display: flex;flex-direction: column; justify-content: space-between;">
        <div style="height: 200px;display: contents">
          <img
            class="card-img-top"
            src="${this.photo.src}"
            style="max-height: 100%; max-width: 100%"
            alt="${this.photo.alt}"
          />
          </div>
            <div class="card-body" style="max-height: 200px; margin-top:auto;">
              <h5 class="card-title">${this.fname}</h5>
              <p class="card-text">${this.profile}</p>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">${this.createdYear}</li>
              </ul>
              ${
                this.Workshop === true
                  ? html`<p><strong>Tiene taller</strong></p>`
                  : html``
              }
            </div>
            <div class="card-footer">
              <button
                class="btn btn-danger col-5"
                @click="${this.deletePerson}"
              >
                <strong>delete</strong>
              </button>
              <button
                class="btn btn-info col-5 offset-1"
                style="color: white;"
                @click="${this.moreInfo}"
              >
                <strong>Info</strong>
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  deletePerson() {
    console.log("deletePerson");
    console.log("se va a borrar la persona de nombre " + this.fname);

    this.dispatchEvent(
      new CustomEvent("delete-person", {
        detail: {
          name: this.fname,
        },
      })
    );
  }

  moreInfo() {
    console.log("moreInfo");
    console.log("Se ha pedido más información de la persona " + this.fname);

    this.dispatchEvent(
      new CustomEvent("info-person", {
        detail: {
          name: this.fname,
        },
      })
    );
  }
}

customElements.define("persona-ficha-listado", PersonaFichaListado);
