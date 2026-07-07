class MinmutAvatar {

    constructor(){

    this.minmut = null;

    this.animation = null;

}

    init(){

    this.minmut = document.getElementById("minmut");

    this.animation = new MinmutAvatarAnimation(this);

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

    wave() {

    console.log("Wave dipanggil");

    alert("Wave berhasil");

}

}

window.MinmutAvatar = MinmutAvatar;
