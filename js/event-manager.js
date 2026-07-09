/**
 * -----------------------------------------
 * MINMUT Engine
 * Version : 5.1.0
 * File    : event-manager.js
 * Status  : DEVELOPMENT
 * Author  : Anggi Pratama & OpenAI
 * -----------------------------------------
 */

class MinmutEventManager {

    constructor() {

        this.events = {};

        this.avatar = null;

    }

    // =====================================
    // Init
    // =====================================

    init() {

        this.avatar = document.getElementById("minmut");

        if (!this.avatar) return;

        // Hover Avatar
        this.avatar.addEventListener("mouseenter", () => {

            this.emit("avatar:hover");

        });

        // Click Avatar
        this.avatar.addEventListener("click", () => {

            this.emit("avatar:click");

        });

        Logger.info("Event Manager Ready");

    }

    // =====================================
    // Register Event
    // =====================================

    on(event, callback) {

        if (!this.events[event]) {

            this.events[event] = [];

        }

        this.events[event].push(callback);

    }

    // =====================================
    // Register One Time Event
    // =====================================

    once(event, callback) {

        const wrapper = (...args) => {

            callback(...args);

            this.off(event, wrapper);

        };

        this.on(event, wrapper);

    }

    // =====================================
    // Remove Event
    // =====================================

    off(event, callback) {

        if (!this.events[event]) return;

        this.events[event] = this.events[event].filter(

            fn => fn !== callback

        );

    }

    // =====================================
    // Emit Event
    // =====================================

    emit(event, data = null) {

        if (!this.events[event]) return;

        Logger.info("Event : " + event);

        for (const callback of this.events[event]) {

            try {

                callback(data);

            }

            catch (e) {

                Logger.error(e);

            }

        }

    }

    // =====================================
    // Clear
    // =====================================

    clear() {

        this.events = {};

    }

    // =====================================
    // Debug
    // =====================================

    list() {

        return this.events;

    }

}

window.MinmutEvent = new MinmutEventManager();
