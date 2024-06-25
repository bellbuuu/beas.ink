const recipe=document.querySelector('.one');
const weather=document.querySelector('.two');
const pong=document.querySelector('.three');
const snake=document.querySelector('.four');
const vowel=document.querySelector('.five');
const portfolio=document.querySelector('.seven');
const calc=document.querySelector('.six');
const gluesong=document.querySelector('.gluesong');
const gluesong2=document.querySelector('.gluesong2');
const wow=document.querySelector('.wow');
const wow2=document.querySelector('.wow2');
const yui=document.querySelector('.yui');
const yui2=document.querySelector('.yui2');
const light=document.querySelector('.light');
const light2=document.querySelector('.light2');

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

recipe.addEventListener('click', ()=>{
    var url=["https://github.com/bellbuuu/recipeapp"];
    window.open(url);
})
weather.addEventListener('click', ()=>{
    var url=["https://github.com/bellbuuu/weatherapp"];
    window.open(url);
})
pong.addEventListener('click', ()=>{
    var url=["https://github.com/bellbuuu/pong-game"];
    window.open(url);
})
snake.addEventListener('click', ()=>{
    var url=["https://github.com/bellbuuu/simple-snake-game-"];
    window.open(url);
})
vowel.addEventListener('click', ()=>{
    var url=["https://github.com/bellbuuu/vowel-counter"];
    window.open(url);
})
calc.addEventListener('click', ()=>{
    var url=["https://github.com/bellbuuu/calculator"];
    window.open(url);
})
portfolio.addEventListener('click', ()=>{
    var url=["https://github.com/bellbuuu/beas.ink"];
    window.open(url);
})
