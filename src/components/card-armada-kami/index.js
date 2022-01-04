import componentTemplateFactory from "../../utils/componentTemplateFactory.js";
import html from "./template.html";
import css from "./style.css";

const template = componentTemplateFactory(html, css);

class CardArmadaKamiApp extends HTMLElement{
    connectedCallback(){
        this.appendChild(template.content.cloneNode(true));

        this.src = this.getAttribute("src") || null;
        this.seat = this.getAttribute("seat") || null;
        this.title = this.getAttribute("title") || null;
        this.price = this.getAttribute("price") || null;


        this.querySelector(".container-card-armada img").src = this.src;
        this.querySelector(".seat").innerHTML = this.seat;
        this.querySelector(".title").innerHTML = this.title;
        this.querySelector(".price").innerHTML = this.price;
    }
}

customElements.define("card-armada-kami", CardArmadaKamiApp);