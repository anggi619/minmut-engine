/**
 * -----------------------------------------
 * MINMUT Brain Search Engine
 * Version : 2.0
 * -----------------------------------------
 */

class MinmutBrainSearch {

    constructor(){

        this.modules = [

            "promkes",
            "ckg",
            "tb",
            "malaria",
            "gizi",
            "kia",
            "imunisasi",
            "posyandu"

        ];

    }

    normalize(text){

        return text
            .toLowerCase()
            .replace(/[^\w\s]/g,"")
            .trim();

    }

    async ask(question){

        question = this.normalize(question);

        const intent = Intent.detect(question);

        for(const module of this.modules){

            if(question.includes(module)){

                switch(intent){

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

        return null;

    }

}

window.BrainSearch = new MinmutBrainSearch();
