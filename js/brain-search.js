/**
 * -----------------------------------------
 * MINMUT Brain Search Engine
 * Version : 3.0
 * File    : brain-search.js
 * Author  : Anggi Pratama & OpenAI
 * -----------------------------------------
 */

class MinmutBrainSearch {

    constructor() {

    }

    normalize(text) {

        return text
            .toLowerCase()
            .replace(/[^\w\s]/g, "")
            .trim();

    }

    async findModule(question) {

        const modules = await Brain.getModules();

        if (!modules) {

            return null;

        }

        question = this.normalize(question);

        for (const module of modules) {

            // id
            if (question.includes(module.id.toLowerCase())) {

                return module.id;

            }

            // name
            if (
                module.name &&
                question.includes(module.name.toLowerCase())
            ) {

                return module.id;

            }

            // keywords
            if (module.keywords) {

                for (const keyword of module.keywords) {

                    if (
                        question.includes(
                            keyword.toLowerCase()
                        )
                    ) {

                        return module.id;

                    }

                }

            }

        }

        return null;

    }

    async ask(question) {

        question = this.normalize(question);

        const module = await this.findModule(question);

        if (!module) {

            return null;

        }

        const intent = Intent.detect(question);

        switch (intent) {

            case "faq":

                return await Brain.getFAQ(module);

            case "services":

                return await Brain.getServices(module);

            case "healthtips":

                return await Brain.getHealthTips(module);

            case "news":

                return await Brain.getNews(module);

            default:

                return await Brain.getInfo(module);

        }

    }

}

window.BrainSearch = new MinmutBrainSearch();
