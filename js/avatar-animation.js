class MinmutAvatarAnimation {

    constructor(avatar){

        this.avatar = avatar;

        this.base = "https://anggi619.github.io/minmut-engine/";

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

    sleep(ms){

        return new Promise(r=>setTimeout(r,ms));

    }

    async wave(){

        this.avatar.setImage(this.base+"wave/wave1.png");

        await this.sleep(180);

        this.avatar.setImage(this.base+"wave/wave2.png");

        await this.sleep(180);

        this.avatar.setImage(this.base+"wave/wave1.png");

        await this.sleep(180);

        this.avatar.setImage(this.base+"wave/wave2.png");

        await this.sleep(180);

        this.avatar.setImage(this.base+"assets/minmut.png");

    }

}

window.MinmutAvatarAnimation = MinmutAvatarAnimation;
