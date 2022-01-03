// Components
import "../../components/card-about-us/index.js"

import componentTemplateFactory from "../../utils/componentTemplateFactory.js";
import html from "./template.html";
import css from "./style.css";

const template = componentTemplateFactory(html, css);

class AboutUsApp extends HTMLElement{
    connectedCallback(){
        this.appendChild(template.content.cloneNode(true));
    }
}

customElements.define("about-us", AboutUsApp);