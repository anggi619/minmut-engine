class MinmutTalkLoop {

    constructor(){

        this.running = false;

    }

    async start(){

        if(this.running) return;

        this.running = true;

        while(this.running){

            Minmut.play("talk");

            await this.sleep(1200);

        }

    }

    stop(){

        this.running = false;

    }

    sleep(ms){

        return new Promise(resolve=>setTimeout(resolve,ms));

    }

}

window.MinmutTalkLoop = MinmutTalkLoop;
