/**
 * -----------------------------------------
 * MINMUT Engine
 * Version : 5.0.0
 * File    : brain.js
 * Author  : Anggi Pratama & OpenAI
 * -----------------------------------------
 */

class MinmutBrain {

    constructor() {

        this.base = "https://anggi619.github.io/minmut-engine/brain/";

        this.cache = {};

        this.registry = null;

    }

    // =====================================
    // Load JSON
    // =====================================

    async load(path) {

        if (this.cache[path]) {

            return this.cache[path];

        }

        try {

            const response = await fetch(this.base + path);

            if (!response.ok) {

                throw new Error("Brain file tidak ditemukan : " + path);

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

    // =====================================
    // Registry
    // =====================================

    async loadRegistry() {

        if (this.registry) {

            return this.registry;

        }

        const data = await this.load("index.json");

        if (!data) {

            return null;

        }

        this.registry = data.modules;

        return this.registry;

    }

    async getModules() {

        return await this.loadRegistry();

    }

    async hasModule(id) {

        const modules = await this.loadRegistry();

        return modules.some(m => m.id === id);

    }

    async getModule(id) {

        const modules = await this.loadRegistry();

        return modules.find(m => m.id === id);

    }

    // =====================================
    // Programs
    // =====================================

    async getInfo(module) {

        return await this.load(

            `programs/${module}/info.json`

        );

    }

    async getFAQ(module) {

        return await this.load(

            `programs/${module}/faq.json`

        );

    }

    async getServices(module) {

        return await this.load(

            `programs/${module}/services.json`

        );

    }

    async getHealthTips(module) {

        return await this.load(

            `programs/${module}/healthtips.json`

        );

    }

    async getNews(module) {

        return await this.load(

            `programs/${module}/news.json`

        );

    }

    async getPosters(module) {

        return await this.load(

            `programs/${module}/posters.json`

        );

    }

    async getVideos(module) {

        return await this.load(

            `programs/${module}/videos.json`

        );

    }

    async getAvatar(module) {

        return await this.load(

            `programs/${module}/avatar.json`

        );

    }

    // =====================================
    // Profile
    // =====================================

    async getProfile(file) {

        return await this.load(

            `profile/${file}.json`

        );

    }

    // =====================================
    // System
    // =====================================

    async getSystem(file) {

        return await this.load(

            `system/${file}.json`

        );

    }

    // =====================================
    // Cache
    // =====================================

    clearCache() {

        this.cache = {};

        this.registry = null;

        Logger.info("Brain Cache Cleared");

    }

}

window.Brain = new MinmutBrain();
