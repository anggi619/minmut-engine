/**
 * -----------------------------------------
 * MINMUT Engine
 * Version : 4.1.0
 * File    : voice-queue.js
 * Author  : Anggi Pratama & OpenAI
 * -----------------------------------------
 */

class MinmutVoiceQueue {

    constructor() {

        this.queue = [];

        this.running = false;

    }

    // =====================================
    // Tambah ke Queue (tanpa menunggu)
    // =====================================

    add(text) {

        this.queue.push({

            text,

            resolve: null

        });

        this.run();

    }

    // =====================================
    // Tambah ke Queue (menunggu selesai)
    // =====================================

    addAndWait(text) {

        return new Promise(resolve => {

            this.queue.push({

                text,

                resolve

            });

            this.run();

        });

    }

    // =====================================
    // Jalankan Queue
    // =====================================

    async run() {

        if (this.running) return;

        this.running = true;

        while (this.queue.length > 0) {

            const item = this.queue.shift();

            try {

                await Minmut.engine.voice.speak(

                    item.text

                );

            }

            catch (e) {

                console.error(e);

            }

            if (item.resolve) {

                item.resolve();

            }

        }

        this.running = false;

    }

    // =====================================
    // Bersihkan Queue
    // =====================================

    clear() {

        this.queue = [];

        if (Minmut.engine?.voice) {

            Minmut.engine.voice.stop();

        }

    }

    // =====================================
    // Status
    // =====================================

    isRunning() {

        return this.running;

    }

}

window.MinmutVoiceQueue = MinmutVoiceQueue;
