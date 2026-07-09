/**
 * -----------------------------------------
 * MINMUT Engine
 * Version : 3.2 Stable
 * File    : core.js
 * Author  : Anggi Pratama & OpenAI
 * -----------------------------------------
 */

class MinmutCore {

    constructor() {

        this.base = "https://anggi619.github.io/minmut-engine/";

        this.voice = new MinmutVoiceManager();

        this.avatar = new MinmutAvatar();

        this.talk = new MinmutTalkLoop();

        this.conversation = new MinmutConversation();

        this.behavior = new MinmutBehaviorManager();

        this.voiceQueue = new MinmutVoiceQueue();

    }

    init() {

        Logger.info(
            "MINMUT Engine " +
            MINMUT_VERSION.major + "." +
            MINMUT_VERSION.minor + "." +
            MINMUT_VERSION.patch +
            " (" + MINMUT_VERSION.status + ")"
        );

        // Hubungkan Engine ke Public API
        Minmut.setEngine(this);

        // Hindari membuat avatar dua kali
        if (document.getElementById("minmut")) return;

        // Avatar
        const div = document.createElement("div");

        div.id = "minmut";

        div.innerHTML = `
<img id="minmut-image"
     src="${this.base}assets/idle/idle1.png"
     alt="MINMUT">
`;

        document.body.appendChild(div);

        // Bubble
        const bubble = new MinmutBubble();

        bubble.init();

        // Avatar
        this.avatar.init();

        // Event
        MinmutEvent.init();

        // Behavior
        this.behavior.start();

        Logger.info("MINMUT Engine Ready");

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
