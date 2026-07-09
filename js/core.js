/**
 * -----------------------------------------
 * MINMUT Engine
 * Version : 5.0.0
 * File    : core.js
 * Author  : Anggi Pratama & OpenAI
 * -----------------------------------------
 */

class MinmutCore {

    constructor() {

        this.base = "https://anggi619.github.io/minmut-engine/";

        this.logger = Logger;

        this.voice = new MinmutVoiceManager();

        this.voiceQueue = new MinmutVoiceQueue();

        this.avatar = new MinmutAvatar();

        this.talk = new MinmutTalkLoop();

        this.conversation = new MinmutConversation();

        this.behavior = new MinmutBehaviorManager();

        this.ready = false;

    }

    // =====================================
    // INIT
    // =====================================

    init() {

        this.logger.info("MINMUT Engine 5.0 Starting...");

        Minmut.setEngine(this);

        this.createAvatar();

        this.createBubble();

        this.avatar.init();

        if (typeof MinmutEvent !== "undefined") {

            MinmutEvent.init();

        }

        this.behavior.start();

        this.ready = true;

        this.logger.info("MINMUT Engine Ready");

    }

    // =====================================
    // Avatar
    // =====================================

    createAvatar() {

        if (document.getElementById("minmut")) {

            return;

        }

        const div = document.createElement("div");

        div.id = "minmut";

        div.innerHTML = `

<img id="minmut-image"

src="${this.base}assets/idle/idle1.png"

alt="MINMUT">

`;

        document.body.appendChild(div);

    }

    // =====================================
    // Bubble
    // =====================================

    createBubble() {

        const bubble = new MinmutBubble();

        bubble.init();

    }

    // =====================================
    // Status
    // =====================================

    isReady() {

        return this.ready;

    }

}

function startEngine() {

    const engine = new MinmutCore();

    engine.init();

}

if (document.readyState === "loading") {

    document.addEventListener(

        "DOMContentLoaded",

        startEngine

    );

}

else {

    startEngine();

}
