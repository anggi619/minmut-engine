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

    say(text) {

        const bubble = document.getElementById("minmut-bubble");

        if (!bubble) return;

        bubble.innerHTML = text;

        bubble.classList.add("show");

    }

    speak(text) {

        this.say(text);

        if (this.engine && this.engine.voice) {

            this.engine.voice.speak(text);

        }

    }

}

window.Minmut = new MinmutAPI();
