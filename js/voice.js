class MinmutVoice {

    constructor() {

        this.voice = null;

        speechSynthesis.onvoiceschanged = () => {
            this.loadVoice();
        };

        this.loadVoice();

    }

    loadVoice() {

        const voices = speechSynthesis.getVoices();

        this.voice =
            voices.find(v =>
                v.lang.startsWith("id") &&
                v.name.toLowerCase().includes("male")
            ) ||

            voices.find(v =>
                v.lang.startsWith("id")
            ) ||

            voices[0] ||

            null;

    }

    speak(text) {

        speechSynthesis.cancel();

        const u = new SpeechSynthesisUtterance(text);

        u.lang = "id-ID";
        u.rate = 1;
        u.pitch = 1.15;
        u.volume = 1;

        if (this.voice) {
            u.voice = this.voice;
        }

        speechSynthesis.speak(u);

    }

}

window.MinmutVoice = MinmutVoice;
