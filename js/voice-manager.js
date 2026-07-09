/**
 * -----------------------------------------
 * MINMUT Engine
 * Version : 4.0
 * File    : voice-manager.js
 * Author  : Anggi Pratama & OpenAI
 * -----------------------------------------
 */

class MinmutVoiceManager {

    constructor() {

        // Browser atau OpenAI
        this.mode = "browser";

        // Voice browser dibuat satu kali saja
        this.browserVoice = new MinmutVoice();

    }

    // =====================================
    // Voice Mode
    // =====================================

    setMode(mode) {

        this.mode = mode;

        Logger.info("Voice Mode : " + mode);

    }

    getMode() {

        return this.mode;

    }

    // =====================================
    // Speak
    // =====================================

    async speak(text) {

        if (!text) return;

        switch (this.mode) {

            case "browser":

                return await this.browserVoice.speak(text);

            case "openai":

                if (typeof MinmutOpenAI !== "undefined") {

                    return await MinmutOpenAI.speak(text);

                }

                Logger.warn("OpenAI Voice belum tersedia.");

                return;

            default:

                Logger.warn("Voice Mode tidak dikenali : " + this.mode);

        }

    }

    // =====================================
    // Stop
    // =====================================

    stop() {

        switch (this.mode) {

            case "browser":

                this.browserVoice.stop();

                break;

            case "openai":

                // nanti kita isi saat OpenAI Voice selesai
                break;

        }

    }

    // =====================================
    // Status
    // =====================================

    isSpeaking() {

        switch (this.mode) {

            case "browser":

                return this.browserVoice.isSpeaking();

            case "openai":

                return false;

            default:

                return false;

        }

    }

}

window.MinmutVoiceManager = MinmutVoiceManager;
