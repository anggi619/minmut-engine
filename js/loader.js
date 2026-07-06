(function () {

    function loadCSS(url) {
        var css = document.createElement("link");
        css.rel = "stylesheet";
        css.href = url;
        document.head.appendChild(css);
    }

    function loadJS(url) {
        var script = document.createElement("script");
        script.src = url;
        script.defer = true;
        (document.head || document.documentElement).appendChild(script);
    }

    var base = "https://anggi619.github.io/minmut-engine/";

    loadCSS(base + "css/minmut.css");
    loadCSS(base + "css/bubble.css");

    loadJS(base + "js/bubble.js");
    loadJS(base + "js/core.js");
    loadJS(base + "js/animation.js");

})();
