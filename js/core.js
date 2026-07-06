class MinmutCore {

    constructor(){

    this.base="https://anggi619.github.io/minmut-engine/";

    this.voice=new MinmutVoice();

}

    init() {

        console.log("MINMUT Engine 2.0");

        // Daftarkan engine ke API
        Minmut.setEngine(this);

        if (document.getElementById("minmut")) return;

        const div = document.createElement("div");
        div.id = "minmut";

        div.innerHTML = `
            <img src="${this.base}assets/minmut.png" alt="MINMUT">
        `;

        document.body.appendChild(div);

        // Bubble dibuat setelah Minmut ada
        const bubble = new MinmutBubble();
        bubble.init();

    }

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
