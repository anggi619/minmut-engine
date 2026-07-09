/**
 * -----------------------------------------
 * MINMUT Engine
 * Version : 4.0
 * File    : voice.js
 * Author  : Anggi Pratama & OpenAI
 * -----------------------------------------
 */

class MinmutVoice {

    constructor() {

        this.voice = null;

        speechSynthesis.onvoiceschanged = () => {

            this.loadVoice();

        };

        this.loadVoice();

    }

    // =====================================
    // Load Voice Browser
    // =====================================

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

        if (this.voice) {

            Logger.info("Voice Loaded : " + this.voice.name);

        } else {

            Logger.warn("Voice Browser tidak ditemukan.");

        }

    }

    // =====================================
    // Speak
    // =====================================

    async speak(text) {

        return new Promise(resolve => {

            const utterance = new SpeechSynthesisUtterance(text);

            utterance.lang = "id-ID";

            utterance.rate = 1;

            utterance.pitch = 1.15;

            utterance.volume = 1;

            if (this.voice) {

                utterance.voice = this.voice;

            }

            // =============================
            // START
            // =============================

            utterance.onstart = () => {

                Logger.info("Voice Start");

                if (Minmut.engine?.talk) {

                    Minmut.engine.talk.start();

                }

            };

            // =============================
            // END
            // =============================

            utterance.onend = () => {

                Logger.info("Voice End");

                if (Minmut.engine?.talk) {

                    Minmut.engine.talk.stop();

                }

                Minmut.play("idle");

                resolve();

            };

            // =============================
            // ERROR
            // =============================

            utterance.onerror = (e) => {

                Logger.error("Voice Error : " + e.error);

                if (Minmut.engine?.talk) {

                    Minmut.engine.talk.stop();

                }

                Minmut.play("idle");

                resolve();

            };

            speechSynthesis.speak(utterance);

        });

    }

    // =====================================
    // Stop Voice
    // =====================================

    stop() {

        speechSynthesis.cancel();

        if (Minmut.engine?.talk) {

            Minmut.engine.talk.stop();

        }

        Minmut.play("idle");

        Logger.info("Voice Stopped");

    }

    // =====================================
    // Status
    // =====================================

    isSpeaking() {

        return speechSynthesis.speaking;

    }

}

window.MinmutVoice = MinmutVoice;
