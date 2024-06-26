
document.getElementsByClassName("confetti")[0].addEventListener("click", ()=>{
    let canvas= document.createElement("canvas");
    canvas.width=600;
    canvas.height=1000;
    let container= document.getElementsByClassName("confetti")[0];
    container.appendChild(canvas);
    let cb=confetti.create(canvas);
    cb().then(() => container.removeChild(canvas));
    particleCount:200;

})

const gluesong=document.querySelector('.gluesong');
const gluesong2=document.querySelector('.gluesong2');
const wow=document.querySelector('.wow');
const wow2=document.querySelector('.wow2');
const yui=document.querySelector('.yui');
const yui2=document.querySelector('.yui2');
const light=document.querySelector('.light');
const light2=document.querySelector('.light2');

var sound1=new Audio();
sound1.src="yui.mp3";
yui.addEventListener('click',()=>{
    sound1.play();
})
yui2.addEventListener('click',()=>{
    sound1.pause();
})
var sound2=new Audio();
sound2.src="gluesong.mp3";
gluesong.addEventListener('click',()=>{
    sound2.play();
})
gluesong2.addEventListener('click',()=>{
    sound2.pause();
})
var sound3=new Audio();
sound3.src="wow.mp3";
wow.addEventListener('click',()=>{
    sound3.play();
})
wow2.addEventListener('click',()=>{
    sound3.pause();
})
var sound4=new Audio();
sound4.src="light.mp3";
light.addEventListener('click',()=>{
    sound4.play();
})
light2.addEventListener('click',()=>{
    sound4.pause();
})



