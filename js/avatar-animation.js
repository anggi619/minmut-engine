class MinmutAvatarAnimation {

    constructor(avatar){

    this.avatar = avatar;

    this.base = "https://anggi619.github.io/minmut-engine/assets/";

    this.registry = new MinmutAnimationRegistry();

    this.queue = [];

    this.running = false;

}

    sleep(ms){

        enqueue(name){

    this.queue.push(name);

    this.runQueue();

}
        return new Promise(resolve => setTimeout(resolve, ms));

    }

    async playFrames(animation){

        for(let i=1;i<=animation.frames;i++){

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

    async play(name){

        const animation = this.registry.get(name);

        if(!animation){

            console.warn("Animation tidak ditemukan:", name);

            return;

        }

        await this.playFrames(animation);

    }

}

window.MinmutAvatarAnimation = MinmutAvatarAnimation;
