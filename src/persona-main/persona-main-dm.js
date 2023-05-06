import { LitElement, html } from "lit";

class PersonaMainDM extends LitElement {
  static get properties() {
    return {
      people: { type: Array },
      yearForFilter: { type: Number },
    };
  }

  constructor() {
    super();
    this.people = [
      {
        name: "Camille Claudel",
        yearsInCompany: 1893,
        photo: {
          src: "./images/claudel-camille_la-valse_1895-1905_aware_women-artists_artistes-femmes-1158x1500.jpg",
          alt: "La Valse _ Camille Claudel",
        },
        canTeach: false,
        profile: "La Valse. Escultura vaciada en bronce. Museo Rodin, París.",
      },
      {
        name: "Auguste Rodin",
        yearsInCompany: 1889,
        photo: {
          src: "./images/Rodin-danaide.jpg",
          alt: "Danaide _ Auguste Rodin",
        },
        canTeach: true,
        profile: "Danaide. Escultura tallada en mármol. Museo Rodin, París.",
      },
      {
        name: "Constantin Brancusi",
        yearsInCompany: 1913,
        photo: {
          src: "./images/brancusi-danaide.jpg",
          alt: "Danaide _ Brancusi",
        },
        canTeach: true,
        profile:
          "Danaide. Escultura vaciada en bronce. Centro Pompidou, París.",
      },
      {
        name: "Agessandro, Atenodoro y Polidoro de Rodas",
        yearsInCompany: 1506,
        photo: {
          src: "./images/agessandro-laocoonte.jpg",
          alt: "Laocoonte y sus hijos _ Agessandro de Rodas",
        },
        canTeach: false,
        profile:
          "Laocoonte y sus hijos. Escultura tallada en mármol. Museo Pio-Clementino, Ciudad del Vaticano.",
      },
      {
        name: "Gian Lorenzo Bernini",
        yearsInCompany: 1625,
        photo: {
          src: "./images/bernini-apolodafne.jpg",
          alt: "Apolo y Dafne _ Gian Lorenzo Bernini",
        },
        canTeach: true,
        profile:
          "Apolo y Dafne. Escultura tallada en mármol. Galería Borghese, Roma.",
      },
    ];
  }

  updated(changedProperties) {
    console.log("updated persona main DM");

    if (changedProperties.has("people")) {
      console.log("Ha cambiado People");
      let peopleData = this.people;
      this.dispatchEvent(
        new CustomEvent("add-people", { detail: { people: peopleData } })
      );
      this.yearForFilter = 1950;
    }

    if (changedProperties.has("yearForFilter")) {
      console.log("Se ha seleccionado un año de creación como filtro");
      console.log(this.yearForFilter);
      this.personFilterCreateYearSelected(this.yearForFilter, this.people);
    }
  }

  personFilterCreateYearSelected(year, array) {
    console.log("personFilterCreateYearSelected");
    console.log("se va a filtrar " + array + " por el año " + year);
    this.people = array.filter(
      (peopleFilter) => peopleFilter.yearsInCompany <= year
    );
  }
}

customElements.define("persona-main-dm", PersonaMainDM);
