/**
 * -----------------------------------------
 * MINMUT Engine
 * Version : 4.1.0
 * File    : conversation.js
 * Author  : Anggi Pratama & OpenAI
 * -----------------------------------------
 */

class MinmutConversation {

    constructor() {

        this.queue = [];

        this.running = false;

    }

    // =====================================
    // Tambah Conversation
    // =====================================

    add(messages) {

        if (!Array.isArray(messages)) {

            messages = [messages];

        }

        this.queue.push(messages);

        this.run();

    }

    // =====================================
    // Jalankan Queue
    // =====================================

    async run() {

        if (this.running) return;

        this.running = true;

        while (this.queue.length > 0) {

            const messages = this.queue.shift();

            await this.play(messages);

        }

        this.running = false;

    }

    // =====================================
    // Play Conversation
    // =====================================

    async play(messages) {

        for (const message of messages) {

            // Animasi

            if (message.animation) {

                Minmut.play(message.animation);

            }

            // Bubble

            Minmut.say(message.text);

            // Voice

            await Minmut.engine.voiceQueue.addAndWait(

                message.text

            );

            // Delay

            await this.sleep(

                message.delay ?? 500

            );

        }

        Minmut.hideBubble();

    }

    // =====================================
    // Clear Queue
    // =====================================

    clear() {

        this.queue = [];

    }

    // =====================================
    // Status
    // =====================================

    isRunning() {

        return this.running;

    }

    // =====================================
    // Sleep
    // =====================================

    sleep(ms) {

        return new Promise(resolve =>

            setTimeout(resolve, ms)

        );

    }

}

window.MinmutConversation = MinmutConversation;
