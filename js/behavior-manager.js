class MinmutBehaviorManager {

    constructor(){

        this.running = false;

        this.enabled = true;

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

        while(this.running){

            if(this.enabled){

                await this.idle();

            }

            await this.sleep(1000);

        }

    }

    async idle(){

        // sementara kosong

    }

    sleep(ms){

        return new Promise(resolve=>setTimeout(resolve,ms));

    }

}

window.MinmutBehaviorManager = MinmutBehaviorManager;
