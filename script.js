const vowel=document.querySelector('.vowel');
const snake=document.querySelector('.snake');
const website=document.querySelector('.website');
const recipe=document.querySelector('.recipe');
const weather=document.querySelector('.weather');
const cat=document.querySelector('.cat');
const disp=document.querySelector('.disp');


vowel.addEventListener('click', ()=>{
    var url=["https://github.com/bellbuuu/vowel-counter"];
    window.open(url);
})
snake.addEventListener('click', ()=>{
    var url=["https://github.com/bellbuuu/simple-snake-game-"];
    window.open(url);
})
website.addEventListener('click', ()=>{
    var url=["https://github.com/bellbuuu/beas.ink"];
    window.open(url);
})
recipe.addEventListener('click', ()=>{
    var url=["https://github.com/bellbuuu/recipeapp"];
    window.open(url);
})
weather.addEventListener('click', ()=>{
    var url=["https://github.com/bellbuuu/weatherapp"];
    window.open(url);
})

let count=0;
 function aura(x){
    disp.innerHTML=`<h4>aura points collected= ${count}</h4>`;
 }

cat.addEventListener('click',()=>{
    count++;
    aura(count);
})