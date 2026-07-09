class MinmutEventManager{

    constructor(){

        this.avatar = null;

    }

    init(){

        this.avatar = document.getElementById("minmut");

        if(!this.avatar) return;

        this.avatar.addEventListener("mouseenter", ()=>{

            Minmut.play("happy");

        });

        this.avatar.addEventListener("click", ()=>{

            Minmut.play("wave");

        });

    }

}

window.MinmutEvent = new MinmutEventManager();
