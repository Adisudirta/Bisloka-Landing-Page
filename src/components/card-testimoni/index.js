import componentTemplateFactory from "../../utils/componentTemplateFactory.js";
import html from "./template.html";
import css from "./style.css";

const template = componentTemplateFactory(html, css);

class CardTestimoniApp extends HTMLElement{
    connectedCallback(){
        this.appendChild(template.content.cloneNode(true));
    }
}

customElements.define("card-testimoni", CardTestimoniApp);