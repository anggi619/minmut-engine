class MinmutAnimationRegistry{

    constructor(){

        this.animations={

           idle:{
    folder:"idle",
    frames:1,
    speed:1000
},

blink:{
    folder:"blink",
    frames:2,
    speed:120
},

wave:{
    folder:"wave",
    frames:2,
    speed:350
},

talk:{
    folder:"talk",
    frames:3,
    speed:90
},

happy:{
    folder:"happy",
    frames:3,
    speed:180
},

thinking:{
    folder:"thinking",
    frames:3,
    speed:250
},

sad:{
    folder:"sad",
    frames:3,
    speed:220
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
