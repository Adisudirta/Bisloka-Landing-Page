import componentTemplateFactory from "../../utils/componentTemplateFactory";
import html from "./template.html";
import css from "./style.css";

const template = componentTemplateFactory(html, css);

class HeaderApp extends HTMLElement{
    
    connectedCallback(){
        this.attachShadow({mode: "open"});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

}

customElements.define("header-app", HeaderApp);