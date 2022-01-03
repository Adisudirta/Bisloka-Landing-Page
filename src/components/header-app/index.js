import componentTemplateFactory from "../../utils/componentTemplateFactory";
import html from "./template.html";
import css from "./style.css";

const template = componentTemplateFactory(html, css);

class HeaderApp extends HTMLElement{
    connectedCallback(){
        this.appendChild(template.content.cloneNode(true));
        
        const toggleBtn = document.getElementById('toggleBtn');
        const mobileNav = document.querySelector('#mobile.container-menu');
        const header = document.querySelector("header");
        const btn = document.querySelector("#desktop.container-menu .container-button button");
        const btn1 = document.querySelector("#desktop.container-menu .container-button button:last-child");

        toggleBtn.addEventListener('click', function(){
            mobileNav.classList.toggle('hide');
            this.childNodes[1].classList.toggle('rotate');
        });

        window.addEventListener("scroll", function () {
            if (this.scrollY > 10) {
              header.classList.add("background");
              btn.style.color = "#828282";
              btn1.style.color = "#828282";
              btn1.style.border = "1px solid #828282";
            } else {
              header.classList.remove("background");
              btn.style.color = "white";
              btn1.style.color = "white";
              btn1.style.border = "1px solid white";
            }
        });
    }
}

customElements.define("header-app", HeaderApp);