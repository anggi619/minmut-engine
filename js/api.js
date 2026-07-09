/**
 * -----------------------------------------
 * MINMUT Engine
 * Version : 4.1.0
 * File    : api.js
 * Author  : Anggi Pratama & OpenAI
 * -----------------------------------------
 */

class MinmutAPI {

    constructor() {

        this.engine = null;

    }

    // =====================================
    // Engine
    // =====================================

    setEngine(engine) {

        this.engine = engine;

    }

    // =====================================
    // Avatar
    // =====================================

    show() {

        const avatar = document.getElementById("minmut");

        if (avatar) {

            avatar.style.display = "block";

        }

    }

    hide() {

        const avatar = document.getElementById("minmut");

        if (avatar) {

            avatar.style.display = "none";

        }

    }

    // =====================================
    // Bubble
    // =====================================

    say(text) {

        const bubble = document.getElementById("minmut-bubble");

        if (!bubble) return;

        bubble.innerHTML = text;

        bubble.classList.add("show");

    }

    hideBubble() {

        const bubble = document.getElementById("minmut-bubble");

        if (!bubble) return;

        bubble.classList.remove("show");

    }

    // =====================================
    // Voice
    // =====================================

    async speak(text) {

        if (!this.engine) return;

        this.say(text);

        await this.engine.voiceQueue.addAndWait(text);

    }

    // =====================================
    // Conversation
    // =====================================

    conversation(messages) {

        if (!this.engine) return;

        this.engine.conversation.add(messages);

    }

    // =====================================
    // Brain Chat
    // =====================================

    async ask(question) {

        const data = await BrainSearch.ask(question);

        const text = Response.build(data);

        this.conversation([

            {

                text: text,

                animation: "thinking",

                delay: 500

            }

        ]);

    }

    // =====================================
    // Animation
    // =====================================

    play(animation) {

        if (!this.engine?.avatar) return;

        this.engine.avatar.play(animation);

    }

    // =====================================
    // Version
    // =====================================

    getVersion() {

        return window.MINMUT_VERSION ?? "Unknown";

    }

}

window.Minmut = new MinmutAPI();
