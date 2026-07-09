class MinmutScheduler{

    constructor(){

        this.jobs = [];

    }

    every(seconds, callback){

        const id = setInterval(callback, seconds * 1000);

        this.jobs.push(id);

        return id;

    }

    after(seconds, callback){

        const id = setTimeout(callback, seconds * 1000);

        this.jobs.push(id);

        return id;

    }

    stopAll(){

        for(const id of this.jobs){

            clearTimeout(id);

            clearInterval(id);

        }

        this.jobs = [];

    }

}

window.MinmutScheduler = new MinmutScheduler();
