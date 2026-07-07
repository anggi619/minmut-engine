class MinmutAvatar {

    constructor() {

        this.minmut = null;

        this.animation = new MinmutAvatarAnimation(this);

    }

    init() {

        this.minmut = document.getElementById("minmut");

    }

    blink() {

        this.animation.play("blink");

    }

    happy() {

        this.animation.play("happy");

    }

    thinking() {

        this.animation.play("thinking");

    }

    wave() {

        this.animation.play("wave");

    }

}

window.MinmutAvatar = MinmutAvatar;
