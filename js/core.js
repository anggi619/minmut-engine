class MinmutCore {

    constructor(){

        this.base="https://anggi619.github.io/minmut-engine/";

    }

    init(){

        console.log("MINMUT Engine 2.0");

        this.create();

    }

    create(){

        if(document.getElementById("minmut")) return;

        const div=document.createElement("div");

        div.id="minmut";

        div.innerHTML=`
            <img
            src="${this.base}assets/minmut.png"
            alt="MINMUT">
        `;

        document.body.appendChild(div);

    }

}

const engine=new MinmutCore();

engine.init();
