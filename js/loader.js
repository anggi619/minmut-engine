(function () {

    const base = "https://anggi619.github.io/minmut-engine/";

    function loadCSS(url){
        const css = document.createElement("link");
        css.rel = "stylesheet";
        css.href = url;
        document.head.appendChild(css);
    }

    function loadScript(url){
        return new Promise((resolve,reject)=>{

            const s = document.createElement("script");

            s.src = url;

            s.onload = resolve;

            s.onerror = reject;

            document.body.appendChild(s);

        });
    }

    loadCSS(base + "css/minmut.css");
    loadCSS(base + "css/bubble.css");
    loadCSS(base + "css/avatar-animation.css");

   async function start(){

    await loadScript(base+"js/bubble.js");

    await loadScript(base+"js/conversation.js");

    await loadScript(base+"js/api.js");

    await loadScript(base+"js/logger.js");

    await loadScript(base+"js/brain.js");

    await loadScript(base+"js/version.js");

    await loadScript(base+"js/scheduler.js");

    await loadScript(base+"js/event-manager.js");

    await loadScript(base+"js/voice.js");

    await loadScript(base+"js/openai-voice.js");

    await loadScript(base+"js/voice-manager.js");

    await loadScript(base+"js/talk-loop.js");

    await loadScript(base+"js/behavior-manager.js");

    await loadScript(base+"js/animation-queue.js");

    await loadScript(base+"js/animation-registry.js");

    await loadScript(base+"js/avatar-animation.js");

    await loadScript(base+"js/avatar.js");

    await loadScript(base+"js/core.js");

    await loadScript(base+"js/animation.js");

}

    start();

})();
