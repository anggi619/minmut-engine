class MinmutAvatar {

    constructor() {

        this.minmut = null;

        this.base = "https://anggi619.github.io/minmut-engine/";

        this.animation = new MinmutAvatarAnimation(this);

    }

    init() {

        this.minmut = document.getElementById("minmut");

    }

    sleep(ms) {

        return new Promise(resolve => {

            setTimeout(resolve, ms);

        });

    }

    setSprite(file) {

        if (!this.minmut) return;

        const img = this.minmut.querySelector("img");

        if (!img) return;

        img.src = this.base + "assets/" + file;

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

    async wave() {

        this.setSprite("wave/wave1.png");

        await this.sleep(120);

        this.setSprite("wave/wave2.png");

        await this.sleep(120);

        this.setSprite("wave/wave1.png");

        await this.sleep(120);

        this.setSprite("wave/wave2.png");

        await this.sleep(120);

        this.setSprite("idle/idle.png");

    }

}

window.MinmutAvatar = MinmutAvatar;
