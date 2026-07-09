/**
 * -----------------------------------------
 * MINMUT Voice Queue
 * Version : 1.0
 * -----------------------------------------
 */

class MinmutVoiceQueue {

    constructor(){

        this.queue = [];

        this.running = false;

    }

    add(text){

        this.queue.push(text);

        this.run();

    }

    async run(){

        if(this.running) return;

        this.running = true;

        while(this.queue.length>0){

            const text = this.queue.shift();

            await Minmut.engine.voice.speak(text);

        }

        this.running = false;

    }

    clear(){

        this.queue = [];

        speechSynthesis.cancel();

    }

}

window.MinmutVoiceQueue = MinmutVoiceQueue;
