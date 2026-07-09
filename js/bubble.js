/**
 * -----------------------------------------
 * MINMUT Engine
 * Version : 3.2 Stable
 * File    : bubble.js
 * Author  : Anggi Pratama & OpenAI
 * -----------------------------------------
 */

class MinmutBubble {

    constructor() {

        this.bubble = null;

        this.visible = false;

        this.animating = false;

    }

    init() {

        if (document.getElementById("minmut-bubble")) return;

        const bubble = document.createElement("div");

        bubble.id = "minmut-bubble";

        bubble.className = "minmut-bubble";

        document.body.appendChild(bubble);

        this.bubble = bubble;

    }

    show(text) {

        if (!this.bubble) {

            this.bubble = document.getElementById("minmut-bubble");

        }

        if (!this.bubble) return;

        this.bubble.innerHTML = text;

        this.bubble.classList.add("show");

        this.visible = true;

    }

    hide() {

        if (!this.bubble) return;

        this.bubble.classList.remove("show");

        this.visible = false;

    }

    async change(text) {

        if (!this.bubble) return;

        this.bubble.classList.remove("show");

        await this.sleep(250);

        this.bubble.innerHTML = text;

        this.bubble.classList.add("show");

    }

    async showFor(text, duration = 2500) {

        this.show(text);

        await this.sleep(duration);

        this.hide();

    }

    async queue(messages) {

        for (const item of messages) {

            if (item.animation) {

                Minmut.play(item.animation);

            }

            if (this.visible) {

                await this.change(item.text);

            } else {

                this.show(item.text);

            }

            await this.sleep(item.duration ?? 2500);

        }

        this.hide();

    }

    sleep(ms) {

        return new Promise(resolve =>

            setTimeout(resolve, ms)

        );

    }

}

window.MinmutBubble = MinmutBubble;
