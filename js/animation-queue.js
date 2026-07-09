class MinmutAnimationQueue {

    constructor(animation){

        this.animation = animation;

        this.queue = [];

        this.running = false;

    }

    add(name){

        this.queue.push(name);

        this.run();

    }

    async run(){

        if(this.running) return;

        this.running = true;

        while(this.queue.length > 0){

            const name = this.queue.shift();

            const animation = this.animation.registry.get(name);

            if(animation){

                await this.animation.playFrames(animation);

            }else{

                console.warn("Animation tidak ditemukan:", name);

            }

        }

        this.running = false;

    }

}

window.MinmutAnimationQueue = MinmutAnimationQueue;
