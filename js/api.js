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

}

window.Minmut = new MinmutAPI();
