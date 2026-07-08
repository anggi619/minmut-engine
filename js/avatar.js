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

        if(!this.image) return;

        this.image.src = src;

    }

    blink(){

    this.animation.play("blink");

}

wave(){

    this.animation.play("wave");

}

happy(){

    this.animation.play("happy");

}

thinking(){

    this.animation.play("thinking");

}

play(name){

    this.animation.play(name);

}

        this.animation.play("wave");

    }

}

window.MinmutAvatar = MinmutAvatar;
