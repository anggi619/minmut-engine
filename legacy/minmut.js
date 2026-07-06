class Minmut {

    constructor(config = {}) {

        this.config = Object.assign({
            image: "assets/minmut.png",
            size: 120,
            position: "bottom-right"
        }, config);

        this.element = null;
    }

    init() {

        console.log("MINMUT Engine 2.1 Loaded");

        this.create();

    }

    create() {

        const div = document.createElement("div");

        div.id = "minmut";

        div.innerHTML = `<img src="${this.config.image}" alt="Minmut">`;

        document.body.appendChild(div);

        this.element = div;

    }

}

document.addEventListener("DOMContentLoaded", function () {

    const minmut = new Minmut();

    minmut.init();

});
