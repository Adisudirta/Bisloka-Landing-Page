import componentTemplateFactory from "../../utils/componentTemplateFactory";
import html from "./template.html";
import css from "./style.css";

const template = componentTemplateFactory(html, css);

class FooterApp extends HTMLElement{
    connectedCallback(){
        this.appendChild(template.content.cloneNode(true));
    }
}

customElements.define("footer-app", FooterApp);