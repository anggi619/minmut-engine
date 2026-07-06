class MinmutVoice {

    speak(text){

        const u = new SpeechSynthesisUtterance(text);

        u.lang = "id-ID";

        speechSynthesis.cancel();
        speechSynthesis.speak(u);

    }

}

window.MinmutVoice = MinmutVoice;
