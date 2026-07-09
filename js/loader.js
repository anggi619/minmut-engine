/**
 * -----------------------------------------
 * MINMUT Engine Loader
 * Version : 5.1.1
 * Status  : DEVELOPMENT
 * -----------------------------------------
 */

(function () {

    const base = "https://anggi619.github.io/minmut-engine/";

    function loadCSS(url) {

        const css = document.createElement("link");

        css.rel = "stylesheet";

        css.href = url;

        document.head.appendChild(css);

    }

    function loadScript(url) {

        return new Promise((resolve, reject) => {

            const script = document.createElement("script");

            script.src = url;

            script.onload = () => {

                console.log("Loaded :", url);

                resolve();

            };

            script.onerror = () => {

                console.error("Failed :", url);

                reject();

            };

            document.body.appendChild(script);

        });

    }

    // ==========================
    // CSS
    // ==========================

    loadCSS(base + "css/minmut.css");
    loadCSS(base + "css/bubble.css");
    loadCSS(base + "css/avatar-animation.css");

    async function start() {

        console.log("===== MINMUT ENGINE START =====");

        // ==========================
        // FOUNDATION
        // ==========================

        await loadScript(base + "js/logger.js");
        await loadScript(base + "js/version.js");

        // ==========================
        // BRAIN
        // ==========================

        await loadScript(base + "js/brain.js");
        await loadScript(base + "js/context.js");
        await loadScript(base + "js/brain-intent.js");
        await loadScript(base + "js/brain-search.js");
        await loadScript(base + "js/response.js");

        // ==========================
        // API
        // ==========================

        await loadScript(base + "js/api.js");
        await loadScript(base + "js/conversation.js");

        // ==========================
        // EVENT
        // ==========================

        await loadScript(base + "js/event-manager.js");
        await loadScript(base + "js/scheduler.js");

        // ==========================
        // VOICE
        // ==========================

        await loadScript(base + "js/voice.js");
        await loadScript(base + "js/openai-voice.js");
        await loadScript(base + "js/voice-manager.js");
        await loadScript(base + "js/voice-queue.js");
        await loadScript(base + "js/talk-loop.js");

        // ==========================
        // AVATAR
        // ==========================

        await loadScript(base + "js/animation-queue.js");
        await loadScript(base + "js/animation-registry.js");
        await loadScript(base + "js/avatar-animation.js");
        await loadScript(base + "js/avatar.js");
        await loadScript(base + "js/animation.js");
        await loadScript(base + "js/bubble.js");

        // ==========================
        // BEHAVIOR
        // ==========================

        await loadScript(base + "js/behavior-manager.js");

        // ==========================
        // CORE
        // ==========================

        await loadScript(base + "js/core.js");

        console.log("===== MINMUT ENGINE READY =====");

    }

    start();

})();
