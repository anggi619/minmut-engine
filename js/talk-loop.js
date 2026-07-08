class MinmutTalkLoop {

    constructor(){

        this.running = false;

    }

    async start(){

        if(this.running) return;

        this.running = true;

        while(this.running){

            // Mainkan animasi talk
            Minmut.play("talk");

            // Tunggu durasi satu siklus animasi talk
            const talk = Minmut.engine.avatar.animation.registry.get("talk");

            const duration =
                talk.sequence.length * talk.speed;

            await this.sleep(duration);

        }

    }

    stop(){

        this.running = false;

    }

    sleep(ms){

        return new Promise(resolve=>setTimeout(resolve, ms));

    }

}

window.MinmutTalkLoop = MinmutTalkLoop;
