/**
 * -----------------------------------------
 * MINMUT Response Engine
 * Version : 2.0
 * -----------------------------------------
 */

class MinmutResponse {

    build(data){

        if(!data){

            return "Maaf, saya belum menemukan informasi tersebut.";

        }

        // ==========================
        // FAQ
        // ==========================

        if(data.faq){

            return data.faq[0].answer;

        }

        // ==========================
        // INFO
        // ==========================

        if(data.description){

            let text = "";

            if(data.name){

                text += data.name + "\n\n";

            }

            text += data.description;

            return text;

        }

        // ==========================
        // SERVICES
        // ==========================

        if(data.services){

            let text =

                "Layanan yang tersedia meliputi:\n\n";

            data.services.forEach(service=>{

                text += "• " + service.name;

                if(service.description){

                    text +=

                        "\n   " + service.description;

                }

                text += "\n\n";

            });

            return text;

        }

        // ==========================
        // HEALTH TIPS
        // ==========================

        if(data.tips){

            let text =

                "Berikut beberapa tips kesehatan:\n\n";

            data.tips.forEach(tip=>{

                text += tip + "\n\n";

            });

            return text;

        }

        // ==========================
        // NEWS
        // ==========================

        if(data.news){

            if(data.news.length===0){

                return "Saat ini belum ada berita terbaru.";

            }

            let text =

                "Berita terbaru:\n\n";

            data.news.forEach(news=>{

                text +=

                    "• " + news.title + "\n";

            });

            return text;

        }

        // ==========================
        // POSTERS
        // ==========================

        if(data.posters){

            if(data.posters.length===0){

                return

                "Belum ada poster edukasi.";

            }

            let text="Poster Edukasi:\n\n";

            data.posters.forEach(p=>{

                text+="• "+p.title+"\n";

            });

            return text;

        }

        // ==========================
        // VIDEOS
        // ==========================

        if(data.videos){

            if(data.videos.length===0){

                return

                "Belum ada video edukasi.";

            }

            let text="Video Edukasi:\n\n";

            data.videos.forEach(v=>{

                text+="• "+v.title+"\n";

            });

            return text;

        }

        return

        "Maaf, saya belum bisa menjelaskan informasi tersebut.";

    }

}

window.Response = new MinmutResponse();
