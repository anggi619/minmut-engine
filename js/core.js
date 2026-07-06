class MinmutCore {

    constructor() {

        this.version = "2.1.0";

        this.base =
            "https://anggi619.github.io/minmut-engine/";

    }

    init() {

        console.log(
            "MINMUT Engine",
            this.version
        );

        this.createMinmut();

    }

    createMinmut() {

        if(document.getElementById("minmut")){
            return;
        }

        const minmut = document.createElement("div");

        minmut.id = "minmut";

        minmut.innerHTML =
            `<img src="${this.base}assets/minmut.png"
                  alt="Minmut">`;

        document.body.appendChild(minmut);

    }

}

document.addEventListener("DOMContentLoaded",()=>{

    const engine = new MinmutCore();

    engine.init();

});