class MinmutAPI {

    constructor() {

        this.engine = null;

    }

    setEngine(engine) {

        this.engine = engine;

    }

    show() {

        const m = document.getElementById("minmut");

        if (m) {

            m.style.display = "block";

        }

    }

    hide() {

        const m = document.getElementById("minmut");

        if (m) {

            m.style.display = "none";

        }

    }

    // ==========================
    // Bubble
    // ==========================

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

    async sayFor(text, duration = 2000) {

        this.say(text);

        return new Promise(resolve => {

            setTimeout(() => {

                this.hideBubble();

                resolve();

            }, duration);

        });

    }

    // ==========================
    // Voice
    // ==========================

    async speak(text) {

        this.say(text);

        if (this.engine) {

            await this.engine.voice.speak(text);

        }

    }

    async conversation(messages){

    if(this.engine){

        await this.engine.conversation.play(messages);

    }

}

    // ==========================
    // Avatar Animation
    // ==========================

    play(name) {

        if (this.engine?.avatar) {

            this.engine.avatar.play(name);

        }

    }

    // ==========================
    // Helper
    // ==========================

    getVersion() {

        return window.MINMUT_VERSION ?? null;

    }

}

window.Minmut = new MinmutAPI();
