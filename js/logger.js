class MinmutLogger {

    constructor(){

        this.enabled = true;

    }

    enable(){

        this.enabled = true;

    }

    disable(){

        this.enabled = false;

    }

    info(message){

        if(this.enabled){

            console.log("[MINMUT INFO]", message);

        }

    }

    warn(message){

        if(this.enabled){

            console.warn("[MINMUT WARN]", message);

        }

    }

    error(message){

        if(this.enabled){

            console.error("[MINMUT ERROR]", message);

        }

    }

}

window.Logger = new MinmutLogger();
