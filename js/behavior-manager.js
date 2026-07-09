/**
 * -----------------------------------------
 * MINMUT Engine
 * Version : 3.3
 * File    : behavior-manager.js
 * Author  : Anggi Pratama & OpenAI
 * -----------------------------------------
 */

class MinmutBehaviorManager {

    constructor() {

        this.running = false;

        this.enabled = true;

        this.welcomed = false;

    }

    // =====================================
    // Engine
    // =====================================

    start() {

        if (this.running) return;

        this.running = true;

        Logger.info("Behavior Started");

        this.loop();

    }

    stop() {

        this.running = false;

        Logger.info("Behavior Stopped");

    }

    enable() {

        this.enabled = true;

    }

    disable() {

        this.enabled = false;

    }

    // =====================================
    // Main Loop
    // =====================================

    async loop() {

        // Welcome hanya sekali
        if (!this.welcomed) {

            await this.welcome();

            this.welcomed = true;

        }

        // Behavior utama
        while (this.running) {

            if (!this.enabled) {

                await this.sleep(1000);

                continue;

            }

            await this.idle();

        }

    }

    // =====================================
    // Welcome
    // =====================================

    async welcome() {

        await Minmut.conversation([

            {
                text: "Halo! 👋",
                animation: "wave",
                duration: 2000
            },

            {
                text:
`Saya Minmut.

Asisten Virtual
Puskesmas Sungai Manau.`,
                animation: "happy",
                duration: 3000
            },

            {
                text:
`Saya siap membantu
menemukan informasi
layanan kesehatan.`,
                animation: "thinking",
                duration: 3500
            },

            {
                text:
`💚

Silakan lanjut membaca website ini.

Kalau butuh bantuan,
klik saya kapan saja 😊`,
                animation: "happy",
                duration: 5000
            }

        ]);

    }

    // =====================================
    // Idle
    // =====================================

    async idle() {

        await this.sleep(

            this.random(8000,15000)

        );

        if(!this.running || !this.enabled) return;

        await this.blinkBehavior();

        await this.sleep(

            this.random(10000,20000)

        );

        if(!this.running || !this.enabled) return;

        await this.thinkingBehavior();

        await this.sleep(

            this.random(15000,25000)

        );

        if(!this.running || !this.enabled) return;

        await this.happyBehavior();

    }

    // =====================================
    // Blink
    // =====================================

    async blinkBehavior(){

        Logger.info("Behavior : Blink");

        Minmut.play("blink");

    }

    // =====================================
    // Thinking
    // =====================================

    async thinkingBehavior(){

        Logger.info("Behavior : Thinking");

        Minmut.play("thinking");

    }

    // =====================================
    // Happy
    // =====================================

    async happyBehavior(){

        Logger.info("Behavior : Happy");

        Minmut.play("happy");

    }

    // =====================================
    // Health Tips
    // (Engine 3.3)
    // =====================================

    async healthTipsBehavior(){

        // Akan kita isi berikutnya

    }

    // =====================================
    // Greeting
    // (Engine 3.3)
    // =====================================

    async greetingBehavior(){

        // Akan kita isi berikutnya

    }

    // =====================================
    // Utility
    // =====================================

    random(min,max){

        return Math.floor(

            Math.random()*(max-min+1)

        )+min;

    }

    sleep(ms){

        return new Promise(resolve=>setTimeout(resolve,ms));

    }

}

window.MinmutBehaviorManager = MinmutBehaviorManager;
