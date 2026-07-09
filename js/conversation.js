/**
 * -----------------------------------------
 * MINMUT Engine
 * Version : 3.3
 * File    : conversation.js
 * Author  : Anggi Pratama & OpenAI
 * -----------------------------------------
 */

class MinmutConversation {

    constructor(){

        this.running = false;

    }

    async play(messages){

        if(this.running) return;

        this.running = true;

        for(const message of messages){

            if(message.animation){

                Minmut.play(message.animation);

            }

            await Minmut.sayFor(

                message.text,

                message.duration ?? 2500

            );

        }

        this.running = false;

    }

}

window.MinmutConversation = MinmutConversation;
