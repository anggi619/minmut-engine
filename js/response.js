/**
 * -----------------------------------------
 * MINMUT Response Engine
 * Version : 1.0
 * -----------------------------------------
 */

class MinmutResponse {

    build(data){

        if(!data) return "Maaf, saya belum menemukan informasi tersebut.";

        // FAQ
        if(data.faq){

            return data.faq[0].answer;

        }

        // Info
        if(data.description){

            return data.description;

        }

        // Services
        if(data.services){

            return data.services
                .map(x => "• " + x.name)
                .join("\n");

        }

        // Health Tips
        if(data.tips){

            return data.tips.join("\n");

        }

        // News
        if(data.news){

            if(data.news.length===0){

                return "Belum ada berita terbaru.";

            }

            return data.news
                .map(x=>x.title)
                .join("\n");

        }

        return JSON.stringify(data,null,2);

    }

}

window.Response = new MinmutResponse();
