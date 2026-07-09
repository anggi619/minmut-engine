/**
 * -----------------------------------------
 * MINMUT Context Manager
 * Version : 1.0
 * -----------------------------------------
 */

class MinmutContext {

    constructor() {

        this.clear();

    }

    // ==========================
    // Module
    // ==========================

    setModule(module) {

        this.currentModule = module;

    }

    getModule() {

        return this.currentModule;

    }

    // ==========================
    // Intent
    // ==========================

    setIntent(intent) {

        this.currentIntent = intent;

    }

    getIntent() {

        return this.currentIntent;

    }

    // ==========================
    // Question
    // ==========================

    setQuestion(question) {

        this.lastQuestion = question;

    }

    getQuestion() {

        return this.lastQuestion;

    }

    // ==========================
    // Answer
    // ==========================

    setAnswer(answer) {

        this.lastAnswer = answer;

    }

    getAnswer() {

        return this.lastAnswer;

    }

    // ==========================
    // History
    // ==========================

    push(question, answer) {

        this.history.push({

            question,

            answer,

            time: Date.now()

        });

        if (this.history.length > 20) {

            this.history.shift();

        }

    }

    getHistory() {

        return this.history;

    }

    // ==========================
    // Reset
    // ==========================

    clear() {

        this.currentModule = null;

        this.currentIntent = null;

        this.lastQuestion = null;

        this.lastAnswer = null;

        this.history = [];

    }

}

window.Context = new MinmutContext();
