import "../../components/card-testimoni/index.js";

import componentTemplateFactory from "../../utils/componentTemplateFactory.js";
import html from "./template.html";
import css from "./style.css";

const template = componentTemplateFactory(html, css);

class TestimoniApp extends HTMLElement{
    connectedCallback(){
        this.appendChild(template.content.cloneNode(true));

        const content = this.querySelector(".carousel");
        const btnRight = this.querySelector("#right-btn");
        const btnLeft = this.querySelector("#left-btn");

        btnRight.addEventListener("click", function(){
            const currentPos = content.scrollLeft;
            content.scrollLeft -= 100;
        });

        btnLeft.addEventListener("click", function(){
            const currentPos = content.scrollLeft;
            content.scrollLeft += 100;
        });
    }
}

customElements.define("testimoni-app", TestimoniApp);