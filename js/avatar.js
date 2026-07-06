class MinmutAvatar {

    constructor() {
        this.minmut = null;
    }

    init() {
        this.minmut = document.getElementById("minmut");
    }

    play(name){

        if(!this.minmut) return;

        this.minmut.classList.remove(
            "blink",
            "happy",
            "thinking",
            "wave"
        );

        void this.minmut.offsetWidth;

        this.minmut.classList.add(name);

    }

    blink(){
        this.play("blink");
    }

    happy(){
        this.play("happy");
    }

    thinking(){
        this.play("thinking");
    }

    wave(){
        this.play("wave");
    }

}

window.MinmutAvatar = MinmutAvatar;
