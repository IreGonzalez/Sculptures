import { LitElement, html } from "lit";


class PersonaFooter extends LitElement {
    
    static get properties(){
        return {

        };
    }

    constructor(){
        super();
    }

    render() {
        return html`
            <h5>@PersonaApp 2023</h5>
        `;
    }

}


// ("nombre de la etiqueta", clase)
customElements.define("persona-footer", PersonaFooter);