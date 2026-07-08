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

    play(name){

    console.log("Avatar.play() :", name);

    this.animation.play(name);

}

}

window.MinmutAvatar = MinmutAvatar;
