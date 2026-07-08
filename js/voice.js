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

    async speak(text){

        return new Promise(resolve=>{

            speechSynthesis.cancel();

            const u = new SpeechSynthesisUtterance(text);

            u.lang = "id-ID";
            u.rate = 1;
            u.pitch = 1.15;
            u.volume = 1;

            if(this.voice){

                u.voice = this.voice;

            }

            // Saat mulai bicara
            u.onstart = ()=>{

                console.log("Voice Start");

                if(Minmut.engine?.talk){

                    Minmut.engine.talk.start();

                }

            };

            // Saat selesai bicara
            u.onend = ()=>{

                console.log("Voice End");

                if(Minmut.engine?.talk){

                    Minmut.engine.talk.stop();

                }

                Minmut.play("idle");

                resolve();

            };

            u.onerror = (e)=>{

                console.error("Voice Error", e);

                if(Minmut.engine?.talk){

                    Minmut.engine.talk.stop();

                }

                resolve();

            };

            speechSynthesis.speak(u);

        });

    }

}

window.MinmutVoice = MinmutVoice;
