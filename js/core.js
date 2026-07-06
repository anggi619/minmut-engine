console.log("MINMUT Core Loaded");

document.addEventListener("DOMContentLoaded", () => {

    const test = document.createElement("div");

    test.innerHTML = "🐹 MINMUT Engine 2.1";

    test.style.position = "fixed";
    test.style.right = "20px";
    test.style.bottom = "20px";
    test.style.background = "#16a34a";
    test.style.color = "#fff";
    test.style.padding = "15px 20px";
    test.style.borderRadius = "15px";
    test.style.zIndex = "999999";

    document.body.appendChild(test);

});