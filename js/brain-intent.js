/**
 * -----------------------------------------
 * MINMUT Intent Engine
 * Version : 1.0
 * -----------------------------------------
 */

class MinmutIntent {

    detect(question){

        question = question.toLowerCase();

        // FAQ
        if(
            question.includes("apa itu") ||
            question.includes("apa yang dimaksud") ||
            question.includes("jelaskan")
        ){
            return "faq";
        }

        // Service
        if(
            question.includes("layanan") ||
            question.includes("pelayanan")
        ){
            return "services";
        }

        // Health Tips
        if(
            question.includes("tips") ||
            question.includes("cara") ||
            question.includes("mencegah")
        ){
            return "healthtips";
        }

        // News
        if(
            question.includes("berita") ||
            question.includes("kegiatan")
        ){
            return "news";
        }

        return "info";

    }

}

window.Intent = new MinmutIntent();
