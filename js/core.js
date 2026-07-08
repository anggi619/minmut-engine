class MinmutCore {

    constructor(){

    this.base = "https://anggi619.github.io/minmut-engine/";

    this.voice = new MinmutVoiceManager();

    this.avatar = new MinmutAvatar();

}

    init() {

        console.log("MINMUT Engine 2.0");

        // Daftarkan engine ke API
        Minmut.setEngine(this);

        if (document.getElementById("minmut")) return;

        const div = document.createElement("div");
        div.id = "minmut";

        div.innerHTML = `
    <img id="minmut-image"
         src="${this.base}assets/idle/idle1.png"
         alt="MINMUT">
`;

        document.body.appendChild(div);

        // Bubble dibuat setelah Minmut ada
        const bubble = new MinmutBubble();
        bubble.init();

        this.avatar.init();

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
