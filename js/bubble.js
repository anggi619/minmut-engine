class MinmutBubble{

constructor(){

this.box=null;

}

init(){

this.box=document.createElement("div");

this.box.id="minmut-bubble";

this.box.innerHTML="Halo 👋<br>Saya Minmut.<br>Ada yang bisa saya bantu?";

document.body.appendChild(this.box);

const minmut=document.getElementById("minmut");

minmut.addEventListener("click",()=>{

this.box.classList.toggle("show");

});

}

}

window.MinmutBubble=MinmutBubble;
