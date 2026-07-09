/**
 * -----------------------------------------
 * MINMUT Engine
 * Version : 3.2 Stable
 * File    : conversation.js
 * Author  : Anggi Pratama & OpenAI
 * -----------------------------------------
 */

class MinmutConversation {

    constructor() {

        this.running = false;

        this.stopped = false;

    }

    async play(messages) {

        if (this.running) {

            Logger.warn("Conversation sedang berjalan.");

            return;

        }

        this.running = true;

        this.stopped = false;

        Logger.info("Conversation Started");

        try {

            for (const message of messages) {

                if (this.stopped) break;

                if (message.animation) {

                    Minmut.play(message.animation);

                }

                await Minmut.sayFor(

                    message.text,

                    message.duration ?? 2500

                );

            }

        } finally {

            this.running = false;

            this.stopped = false;

            Logger.info("Conversation Finished");

        }

    }

    stop() {

        this.stopped = true;

        Minmut.hideBubble();

        Logger.info("Conversation Stopped");

    }

    isRunning() {

        return this.running;

    }

}

window.MinmutConversation = MinmutConversation;
