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

    async speak(text){

    this.say(text);

    if(this.engine){

        await this.engine.voice.speak(text);

    }

}

blink(){

    if(this.engine?.avatar){

        this.engine.avatar.blink();

    }

}

wave(){

    if(this.engine?.avatar){

        this.engine.avatar.wave();

    }

}

happy(){

    if(this.engine?.avatar){

        this.engine.avatar.happy();

    }

}

thinking(){

    if(this.engine?.avatar){

        this.engine.avatar.thinking();

    }

}

}

window.Minmut = new MinmutAPI();
