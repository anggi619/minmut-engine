class MinmutAnimationRegistry{

    constructor(){

        this.animations={

            idle:{
                folder:"idle",
                frames:1,
                speed:800
            },

            blink:{
                folder:"blink",
                frames:2,
                speed:120
            },

            wave:{
                folder:"wave",
                frames:2,
                speed:180
            },

            talk:{
                folder:"talk",
                frames:3,
                speed:120
            },

            happy:{
                folder:"happy",
                frames:3,
                speed:150
            },

            thinking:{
                folder:"thinking",
                frames:3,
                speed:220
            },

            sad:{
                folder:"sad",
                frames:3,
                speed:180
            }

        };

    }

    get(name){

        return this.animations[name] ?? null;

    }

    has(name){

        return name in this.animations;

    }

    all(){

        return this.animations;

    }

}

window.MinmutAnimationRegistry = MinmutAnimationRegistry;
