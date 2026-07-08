class MinmutAPI {

    constructor() {

        this.engine = null;

    }

    setEngine(engine) {

        this.engine = engine;

    }

    show() {

        const m = document.getElementById("minmut");

        if(m){

            m.style.display = "block";

        }

    }

    hide() {

        const m = document.getElementById("minmut");

        if(m){

            m.style.display = "none";

        }

    }

    say(text) {

        const bubble = document.getElementById("minmut-bubble");

        if(!bubble) return;

        bubble.innerHTML = text;

        bubble.classList.add("show");

    }

    async speak(text){

        this.say(text);

        if(this.engine){

            await this.engine.voice.speak(text);

        }

    }

    play(name){

        if(this.engine?.avatar){

            this.engine.avatar.play(name);

        }

    }

}

window.Minmut = new MinmutAPI();
