/**
 * -----------------------------------------
 * MINMUT Brain Engine
 * Version : 1.2
 * -----------------------------------------
 */

class MinmutBrain {

    constructor() {

        this.base = "https://anggi619.github.io/minmut-engine/brain/";

        this.cache = {};

    }

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

    // ==========================
    // Programs
    // ==========================

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

    // ==========================
    // System
    // ==========================

    async getSystem(file) {

        return await this.load(
            `system/${file}.json`
        );

    }

    // ==========================
    // Profile
    // ==========================

    async getProfile(file) {

        return await this.load(
            `profile/${file}.json`
        );

    }

    // ==========================
    // Cache
    // ==========================

    clearCache() {

        this.cache = {};

        Logger.info("Brain Cache Cleared");

    }

}

window.Brain = new MinmutBrain();
