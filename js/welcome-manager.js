class MinmutWelcomeManager{

    constructor(){

        this.played = false;

    }

    async start(){

        if(this.played) return;

        this.played = true;

        Minmut.play("wave");

        await this.sleep(500);

        Minmut.say("Halo 👋");

        await this.sleep(2000);

        Minmut.say("Saya Minmut.");

        await this.sleep(2000);

        Minmut.say("Asisten Virtual\nPuskesmas Sungai Manau.");

        await this.sleep(3000);

        Minmut.say("Ada yang bisa saya bantu?\nKlik saya kapan saja 😊");

        await this.sleep(5000);

        const bubble = document.getElementById("minmut-bubble");

        if(bubble){

            bubble.classList.remove("show");

        }

    }

    sleep(ms){

        return new Promise(resolve=>setTimeout(resolve,ms));

    }

}

window.MinmutWelcomeManager = MinmutWelcomeManager;
