class MinmutCore {

    constructor() {
        this.base = "https://anggi619.github.io/minmut-engine/";
    }

    init() {

        console.log("MINMUT Engine 2.0");

        if (document.getElementById("minmut")) return;

        const div = document.createElement("div");
        div.id = "minmut";

        div.innerHTML = `
            <img src="${this.base}assets/minmut.png" alt="MINMUT">
        `;

        document.body.appendChild(div);

    }
const bubble=new MinmutBubble();

bubble.init();
}

function startEngine() {

    const engine = new MinmutCore();
    engine.init();

}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", startEngine);
} else {
    startEngine();
}
