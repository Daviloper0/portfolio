class RectangularCard extends HTMLElement {
    constructor () {
        super();

        this.src = "";
        this.heading = "";
        this.description = "";
    }
    connectedCallback() {
        this.heading = this.getAttribute("heading");
        this.description = this.getAttribute("description");
        this.src = this.getAttribute("src");
        this.render();
    }
    render() {
        this.innerHTML = `
        <div>
            <p class="rcard-title">${this.heading}</p>
            <p class="rcard-description">${this.description}</p>
            <a class="rcard-link" href="${this.src}" target="_blank" rel="external">Visitar o Projeto</a>
        </div>
        `;
    }
};

class SquareCard extends HTMLElement {
    constructor () {
        super();
        this.name = "";
        this.progress = 0;
    }
    connectedCallback() {
        this.name = this.getAttribute("name");
        this.progress = this.getAttribute("progress");
        this.render();
    }
    render() {
        this.innerHTML = `
        <div>
            <p class="scard-name">${this.name}</p>
            <p class="scard-progress-text">${this.progress}%*</p>
            <div class="scard-progress-bar" style="width:${this.progress}%"></div>

        </div>`;
    }
};

class informationCard extends HTMLElement {
    constructor () {
        super();
        this.heading = "";
        this.description = "";
    }
    connectedCallback() {
        this.heading = this.getAttribute("heading");
        this.description = this.getAttribute("description");
        this.render();
    }
    render() {
        this.innerHTML = `
        <div>
            <p class="rcard-title">${this.heading}</p>
            <p class="rcard-description">${this.description}</p>
        </div>`;
    }
};

customElements.define("r-card", RectangularCard);
customElements.define("s-card", SquareCard);
customElements.define("i-card", informationCard);