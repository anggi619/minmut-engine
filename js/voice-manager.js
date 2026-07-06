class MinmutVoiceManager {

    constructor() {

        this.mode = "browser";

    }

    setMode(mode) {

        this.mode = mode;

    }

    async speak(text) {

        if (this.mode === "browser") {

            const v = new MinmutVoice();
            v.speak(text);

            return;

        }

        if (this.mode === "openai") {

            await MinmutOpenAI.speak(text);

        }

    }

}

window.MinmutVoiceManager = MinmutVoiceManager;
