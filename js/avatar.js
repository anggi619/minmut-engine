class MinmutAvatar {

    constructor() {

    this.base = "https://anggi619.github.io/minmut-engine/assets/";

    this.minmut = null;

    this.image = null;

    this.animation = new MinmutAvatarAnimation(this);

}

    init() {

    this.minmut = document.getElementById("minmut");

    this.image = document.getElementById("minmut-image");

}

    setImage(src){

        if(this.img){

            this.img.src = src;

        }
    setImage(path){

    if(!this.image) return;

    this.image.src = this.base + path;

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
