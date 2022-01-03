import componentTemplateFactory from "../../utils/componentTemplateFactory.js";
import html from "./template.html";
import css from "./style.css";

const template = componentTemplateFactory(html, css);

class CardAboutUs extends HTMLElement{
    connectedCallback(){
        this.appendChild(template.content.cloneNode(true));

        this.src = this.getAttribute("src") || null;
        this.alt = this.getAttribute("alt") || null;
        this.title = this.getAttribute("title") || null;
        this.caption = this.getAttribute("caption") || null;

        this.querySelector(".container-card img").src = this.src;
        this.querySelector(".container-card img").alt = this.alt;
        this.querySelector(".container-card div h3").innerHTML = this.title;
        this.querySelector(".container-card div p").innerHTML = this.caption;
    }
}

customElements.define("card-about-us", CardAboutUs);