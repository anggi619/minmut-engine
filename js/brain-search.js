/**
 * -----------------------------------------
 * MINMUT Brain Search Engine
 * Version : 1.0
 * Author  : Anggi Pratama & OpenAI
 * -----------------------------------------
 */

class MinmutBrainSearch {

    constructor() {

        this.programs = [

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

        // Cari berdasarkan nama program

        for(const program of this.programs){

            if(question.includes(program)){

                return await Brain.getInfo(program);

            }

        }

        return null;

    }

}

window.BrainSearch = new MinmutBrainSearch();
