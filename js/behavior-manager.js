class MinmutBehaviorManager {

    constructor(){

        this.running = false;

        this.enabled = true;

        this.welcomed = false;

    }

    start(){

        if(this.running) return;

        this.running = true;

        this.loop();

    }

    stop(){

        this.running = false;

    }

    enable(){

        this.enabled = true;

    }

    disable(){

        this.enabled = false;

    }

    async loop(){

        // Welcome hanya sekali
        if(!this.welcomed){

            await this.welcome();

            this.welcomed = true;

        }

        while(this.running){

            if(this.enabled){

                await this.idle();

            }

            await this.sleep(1000);

        }

    }

    async welcome(){

        Minmut.play("wave");

        await this.sleep(800);

        Minmut.say("Halo 👋");

        await this.sleep(2000);

        Minmut.say("Saya Minmut.");

        await this.sleep(2000);

        Minmut.say("Asisten Virtual\nPuskesmas Sungai Manau.");

        await this.sleep(2500);

        Minmut.say("Ada yang bisa saya bantu?\nKlik saya kapan saja 😊");

        await this.sleep(5000);

        const bubble = document.getElementById("minmut-bubble");

        if(bubble){

            bubble.classList.remove("show");

        }

    }

    async idle(){

        // Akan kita isi pada Engine 3.3
    }

    sleep(ms){

        return new Promise(resolve => setTimeout(resolve, ms));

    }

}

window.MinmutBehaviorManager = MinmutBehaviorManager;
