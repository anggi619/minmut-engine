class MinmutAvatarAnimation {

    constructor(avatar){

    this.avatar=avatar;

    this.base="https://anggi619.github.io/minmut-engine/assets/";

    this.registry=new MinmutAnimationRegistry();

}

    sleep(ms){

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

        this.base+"idle/idle1.png"

    );

}
    async play(name){

        switch(name){

            case "wave":

                await this.wave();

                break;

            default:

                console.log(name);

        }

    }

    async wave(){

        this.avatar.setImage(this.base + "wave/wave1.png");

        await this.sleep(180);

        this.avatar.setImage(this.base + "wave/wave2.png");

        await this.sleep(180);

        this.avatar.setImage(this.base + "wave/wave1.png");

        await this.sleep(180);

        this.avatar.setImage(this.base + "wave/wave2.png");

        await this.sleep(180);

        this.avatar.setImage(this.base + "idle/idle1.png");

    }

}

window.MinmutAvatarAnimation = MinmutAvatarAnimation;
