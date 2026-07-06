class MinmutVoice {

    speak(text){

        speechSynthesis.cancel();

        const u = new SpeechSynthesisUtterance(text);

        u.lang = "id-ID";

        speechSynthesis.speak(u);

    }

}

window.MinmutVoice = MinmutVoice;
