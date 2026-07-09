/**
 * -----------------------------------------
 * MINMUT Brain Engine
 * Version : 1.1
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

        catch(e){

            Logger.error(e.message);

            return null;

        }

    }

    async getInfo(program){

        return await this.load(

            `program/${program}/info.json`

        );

    }

    async getFAQ(program){

        return await this.load(

            `program/${program}/faq.json`

        );

    }

    async getServices(program){

        return await this.load(

            `program/${program}/services.json`

        );

    }

    async getHealthTips(program){

        return await this.load(

            `program/${program}/healthtips.json`

        );

    }

    async getNews(program){

        return await this.load(

            `program/${program}/news.json`

        );

    }

    async getAvatar(program){

        return await this.load(

            `program/${program}/avatar.json`

        );

    }

    clearCache(){

        this.cache = {};

    }

}

window.Brain = new MinmutBrain();
