import { LitElement, html } from "lit";

    // lo extendemos para establecer la herencia (herencias por prototipos)
class HolaMundo extends LitElement {

    render() {
        // para hacer un filtrado del html
        return html`
            <div>Hola Mundo!</div>
        `;
    }

}


// ("nombre de la etiqueta", clase)
customElements.define("hola-mundo", HolaMundo);