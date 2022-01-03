import componentTemplateFactory from "../../utils/componentTemplateFactory";
import html from "./template.html";
import css from "./style.css";

const template = componentTemplateFactory(html, css);

class CardFormApp extends HTMLElement{
    connectedCallback(){
        this.appendChild(template.content.cloneNode(true));
    }
}

customElements.define("card-form-app", CardFormApp);