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

    loadCSS(base+"css/minmut.css");
    loadCSS(base+"css/bubble.css");

   async function start(){

    await loadScript(base+"js/bubble.js");

    await loadScript(base+"js/api.js");

    await loadScript(base+"js/voice.js");

    await loadScript(base+"js/core.js");

    await loadScript(base+"js/animation.js");

}

    start();

})();
