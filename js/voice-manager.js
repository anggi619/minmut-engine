class MinmutVoiceManager {

    constructor() {

        this.mode = "browser";

        this.browserVoice = new MinmutVoice();

    }

    setMode(mode) {

        this.mode = mode;

    }

    async speak(text) {

        if (this.mode === "browser") {

            return await this.browserVoice.speak(text);

        }

        if (this.mode === "openai") {

            return await MinmutOpenAI.speak(text);

        }

    }

}

window.MinmutVoiceManager = MinmutVoiceManager;
