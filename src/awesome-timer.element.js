import mainCss from "./main.css?url"
import clsx from "clsx"


class JsonResumeElement extends HTMLElement {
    resume = {};

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }



    connectedCallback() {
        const template = document.createElement('template');
        template.innerHTML = `
<link rel="stylesheet" href="${mainCss}">
<main class="page">
    <section class="${clsx("xyz")}">
    Use clsx wrapper the class naem to trigger eslint
</section>
    <section class="page-content">
       Useing wrong class names without error
    </section>
</main>`;
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }




}

customElements.define('awesome-timer', JsonResumeElement);