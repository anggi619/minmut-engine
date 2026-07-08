class MinmutAvatarAnimation {

    constructor(avatar){

        this.avatar = avatar;

        this.base = "https://anggi619.github.io/minmut-engine/assets/";

        this.registry = new MinmutAnimationRegistry();

        this.queue = [];

        this.running = false;

    }

    sleep(ms){

        return new Promise(resolve => setTimeout(resolve, ms));

    }

    enqueue(name){

        this.queue.push(name);

        this.runQueue();

    }

    play(name){

        this.enqueue(name);

    }

    async runQueue(){

        if(this.running) return;

        this.running = true;

        while(this.queue.length > 0){

            const name = this.queue.shift();

            const animation = this.registry.get(name);

            if(animation){

                await this.playFrames(animation);

            }else{

                console.warn("Animation tidak ditemukan :", name);

            }

        }

        this.running = false;

    }

    async playFrames(animation){

        for(let i = 1; i <= animation.frames; i++){

            this.avatar.setImage(

                this.base +
                animation.folder +
                "/" +
                animation.folder +
                i +
                ".png"

            );

            await this.sleep(animation.speed);

        }

        this.avatar.setImage(

            this.base + "idle/idle1.png"

        );

    }

}

window.MinmutAvatarAnimation = MinmutAvatarAnimation;
