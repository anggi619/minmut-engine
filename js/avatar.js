class MinmutAvatar {

    constructor() {

        this.minmut = null;

        this.img = null;

        this.animation = new MinmutAvatarAnimation(this);

    }

    init() {

        this.minmut = document.getElementById("minmut");

        this.img = this.minmut.querySelector("img");

    }

    setImage(src){

        if(this.img){

            this.img.src = src;

        }

    }

    blink(){

        this.animation.play("blink");

    }

    happy(){

        this.animation.play("happy");

    }

    thinking(){

        this.animation.play("thinking");

    }

    wave(){

        this.animation.play("wave");

    }

}

window.MinmutAvatar = MinmutAvatar;
