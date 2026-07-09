class MinmutBehaviorManager {

    constructor() {

        this.running = false;

        this.enabled = true;

        this.welcomed = false;

    }

    start() {

        if (this.running) return;

        this.running = true;

        this.loop();

    }

    stop() {

        this.running = false;

    }

    enable() {

        this.enabled = true;

    }

    disable() {

        this.enabled = false;

    }

    async loop() {

        // Welcome hanya sekali
        if (!this.welcomed) {

            await this.welcome();

            this.welcomed = true;

        }

        // Behavior utama
        while (this.running) {

            if (this.enabled) {

                await this.idle();

            }

        }

    }

    // ==========================
    // Welcome
    // ==========================

    async welcome() {

        await Minmut.sayQueue([

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

    // ==========================
    // Idle Behavior
    // ==========================

    async idle() {

        // Tunggu acak 8 - 15 detik
        await this.sleep(

            this.random(8000, 15000)

        );

        if (!this.running || !this.enabled) return;

        Minmut.play("blink");

        // Tunggu acak 20 - 40 detik
        await this.sleep(

            this.random(20000, 40000)

        );

        if (!this.running || !this.enabled) return;

        Minmut.play("thinking");

    }

    // ==========================
    // Utility
    // ==========================

    random(min, max) {

        return Math.floor(

            Math.random() * (max - min + 1)

        ) + min;

    }

    sleep(ms) {

        return new Promise(resolve =>

            setTimeout(resolve, ms)

        );

    }

}

window.MinmutBehaviorManager = MinmutBehaviorManager;
