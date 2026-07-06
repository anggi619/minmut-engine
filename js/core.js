console.log("CORE LOADED");

function start() {

    console.log("START");

    const div = document.createElement("div");

    div.style.position = "fixed";
    div.style.right = "20px";
    div.style.bottom = "20px";
    div.style.width = "120px";
    div.style.height = "120px";
    div.style.background = "red";
    div.style.zIndex = "999999";

    document.body.appendChild(div);

}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start);
} else {
    start();
}
