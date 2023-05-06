import { LitElement, html } from "lit";

class TestApi extends LitElement {
  static get properties() {
    return {
      movies: { type: Array },
    };
  }

  constructor() {
    super();

    this.movies = [];
    this.getMovieData();
  }

  render() {
    return html`
      ${this.movies.map(
        (movie) =>
          html`<div>
            la película ${movie.title} fue dirigida por ${movie.director}
          </div>`
      )}
    `;
  }

  getMovieData() {
    console.log("getMovieData");
    console.log("Obteniendo datos de las películas");

    //XMLHttpRequest es casi lo mismo que decir de AJAX
    let xhr = new XMLHttpRequest();

    xhr.onload = () => {
      //Si de una petición deriva a otra, esa petición de debe hacer dentro del onload, ya que aquí es el único sitio donde se controlan
      if (xhr.status === 200) {
        console.log("petición completada correctamente");

        let ApiResponse = JSON.parse(xhr.responseText);

        this.movies = ApiResponse.results;
      }
    };

    xhr.open("GET", "https://swapi.dev/api/films/");
    xhr.send();

    console.log("fin de getMovieData");
  }
}

customElements.define("test-api", TestApi);
