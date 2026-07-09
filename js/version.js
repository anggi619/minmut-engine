/**
 * -----------------------------------------
 * MINMUT Engine
 * Version : 5.1.0
 * File    : version.js
 * Status  : FINAL
 * Author  : Anggi Pratama & OpenAI
 * -----------------------------------------
 */

window.MINMUT_VERSION = {

    major: 5,

    minor: 1,

    patch: 0,

    status: "Foundation",

    build: "2026.07.10",

    codename: "Alpha",

    author: "Anggi Pratama",

    engine: "MINMUT Engine"

};

// =====================================
// Helper
// =====================================

MINMUT_VERSION.toString = function () {

    return `${this.major}.${this.minor}.${this.patch}`;

};

MINMUT_VERSION.fullVersion = function () {

    return `${this.engine} ${this.toString()} (${this.status})`;

};

MINMUT_VERSION.info = function () {

    return {

        engine: this.engine,

        version: this.toString(),

        status: this.status,

        build: this.build,

        codename: this.codename,

        author: this.author

    };

};

// =====================================
// Console
// =====================================

console.log(
    `%c${MINMUT_VERSION.fullVersion()}`,
    "color:#16a34a;font-weight:bold;"
);

console.log(
    "Build :",
    MINMUT_VERSION.build
);

console.log(
    "Author:",
    MINMUT_VERSION.author
);
