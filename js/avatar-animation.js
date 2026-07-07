class MinmutAvatarAnimation {

    constructor(avatar){

        this.avatar = avatar;

    }

    play(name){

        if(!this.avatar.minmut) return;

        const m = this.avatar.minmut;

        m.classList.remove(
            "blink",
            "wave",
            "happy",
            "thinking",
            "talk",
            "idle"
        );

        // Restart animation
        void m.offsetWidth;

        m.classList.add(name);

    }

}

window.MinmutAvatarAnimation = MinmutAvatarAnimation;
