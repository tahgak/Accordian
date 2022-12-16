let icon=document.querySelector('.icon');
let icon2=document.querySelector('.icon2');
let icon3=document.querySelector('.icon3');
let text =document.querySelector('.text');
let text2 =document.querySelector('.text2');
let text3 =document.querySelector('.text3');
icon.addEventListener('click',()=>{
    text.classList.toggle('open');
});
icon2.addEventListener('click',()=>{
    text2.classList.toggle('open');
});
icon3.addEventListener('click',()=>{
    text3.classList.toggle('open');
});

