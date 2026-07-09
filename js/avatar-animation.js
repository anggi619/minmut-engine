class MinmutAvatarAnimation {

    constructor(avatar){

        this.avatar = avatar;

        this.base = "https://anggi619.github.io/minmut-engine/assets/";

        this.registry = new MinmutAnimationRegistry();

        this.queue = new MinmutAnimationQueue(this);

    }

    sleep(ms){

        return new Promise(resolve => setTimeout(resolve, ms));

    }

    play(name){

        console.log("AvatarAnimation.play() :", name);

        this.queue.add(name);

    }

    async playFrames(animation){

        for(const frame of animation.sequence){

            console.log(animation.folder, frame);

            this.avatar.setImage(

                this.base +
                animation.folder +
                "/" +
                animation.folder +
                frame +
                ".png"

            );

            await this.sleep(animation.speed);

        }

        if(animation.returnIdle !== false){

            this.avatar.setImage(

                this.base + "idle/idle1.png"

            );

        }

    }

}

window.MinmutAvatarAnimation = MinmutAvatarAnimation;
