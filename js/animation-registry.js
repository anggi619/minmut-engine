class MinmutAnimationRegistry {

    constructor(){

        this.animations = {

    idle:{
        folder:"idle",
        speed:1000,
        sequence:[1],
        returnIdle:false
    },

    blink:{
        folder:"blink",
        speed:180,
        sequence:[1,2,1],
        returnIdle:true
    },

    wave:{
        folder:"wave",
        speed:450,
        sequence:[1,2,1,2,1,2],
        returnIdle:true
    },

    talk:{
        folder:"talk",
        speed:150,
        sequence:[1,2,3,2,1,2,3,2],
        returnIdle:false
    },

    happy:{
        folder:"happy",
        speed:350,
        sequence:[1,2,3,2,1],
        returnIdle:true
    },

    thinking:{
        folder:"thinking",
        speed:500,
        sequence:[1,2,3,2,1],
        returnIdle:true
    },

    sad:{
        folder:"sad",
        speed:450,
        sequence:[1,2,3,2,1],
        returnIdle:true
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
