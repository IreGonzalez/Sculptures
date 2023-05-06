import { LitElement, html } from "lit";

class FichaPersona extends LitElement {

    static get properties(){
        return {
            fname: {type: String},
            yearsInCompany: {type: Number},
            personInfo: {type: String},
        }
    }

    constructor(){
        //siempre se suele llamar a super como buena práctica, para no romper la jerarquía de herencia
        super();

        this.fname = "Prueba Nombre";
        this.yearsInCompany = 10;

        // No hace falta poner esta llamada ya que sería redundante al crearse directamente al actualizarse el valor de yearsInCompany
        // this.updatePersonInfo();
    }

    //solo se llamará si está registrada en el return de las propiedades
    updated(changedProperties){
        console.log("updated");

        changedProperties.forEach(
            (oldValue, propName) => {
                console.log("Propiedad " + propName + " cambia valor, anterior era " + oldValue);
            }
        )

        if(changedProperties.has("fname")) {
            console.log("Propiedad fname cambia valor, anterior era " + changedProperties.get("fname") + " nuevo es " + this.fname);
        }
        if(changedProperties.has("yearsInCompany")) {
            console.log("Propiedad yearsInCompany cambia valor, anterior era " + changedProperties.get("yearsInCompany") + " nuevo es " + this.yearsInCompany);
         
            this.updatePersonInfo();
        }
    }



    render() {
        //Data Binding: este enlace se está haciendo en una dirección concreta. Las propiedades están a nivel conceptual arriba y el html está "abajo"
        return html`
            <div>
                <label>Nombre Completo</label>
                <input type="text" value="${this.fname}" @input="${this.updateName}"></input>
                <br />
                <label>Años en la compañía</label>
                <input type="text" value="${this.yearsInCompany}" @input="${this.updateYearsInCompany}"></input>
                <br />
                <input type="text" value="${this.personInfo}" disabled></input>
                <br />
            </div>
        `;
    }
        //con el evento input se puede ver el árbol de los eventos
    updateName(e){
        console.log("updateName");
        // console.log(e);
        // console.log(e.target);
        // console.log(e.target.value);
        this.fname = e.target.value;
            //con esto enlazamos ambos valores y hacemos que las llamadas sean bidireccionales
    }

    updateYearsInCompany(e){
        // al poner el árbol de condiciones, supondrá una deuda técnica. No tenemos por qué asumir que las cosas seguirán construyéndose de esta manera, por ello, es mejor mantener separadas ambas cosas
        console.log("updateYear");
        this.yearsInCompany = e.target.value;
    }

    updatePersonInfo(){
        console.log("updatedPersonInfo");

        if (this.yearsInCompany >= 7){
            this.personInfo = "lead";
        } else if (this.yearsInCompany >= 5) {
            this.personInfo = "senior";
        } else if (this.yearsInCompany >= 3) {
            this.personInfo = "team";
        } else {
            this.personInfo = "junior";
        }
    }

}


customElements.define("ficha-persona", FichaPersona);