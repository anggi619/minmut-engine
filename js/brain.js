/**
 * -----------------------------------------
 * MINMUT Brain Engine
 * Version : 1.0
 * File    : brain.js
 * Author  : Anggi Pratama & OpenAI
 * -----------------------------------------
 */

class MinmutBrain {

    constructor() {

        this.base = "https://anggi619.github.io/minmut-engine/brain/";

        this.cache = {};

    }

    async load(path) {

        // Gunakan cache jika sudah pernah dimuat
        if (this.cache[path]) {

            return this.cache[path];

        }

        try {

            const response = await fetch(this.base + path);

            if (!response.ok) {

                throw new Error("File tidak ditemukan : " + path);

            }

            const json = await response.json();

            this.cache[path] = json;

            Logger.info("Brain Loaded : " + path);

            return json;

        }

        catch (e) {

            Logger.error(e.message);

            return null;

        }

    }

    clearCache() {

        this.cache = {};

        Logger.info("Brain Cache Cleared");

    }

}

window.Brain = new MinmutBrain();
