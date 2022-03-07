
let resultMain = document.querySelector('.main-result');
let resultOne = document.querySelector('.result1');
let resultTwo = document.querySelector('.result2');
let resultThree = document.querySelector('.result3');
let resultFour = document.querySelector('.result4');
let firstTitle = document.querySelector('.firsttitle');
let Main = document.querySelector('.main');

document.body.addEventListener('keydown',function(event){
    event.preventDefault();
    resultMain.innerHTML=event.keyCode;
    resultOne.innerHTML =event.key;
    resultTwo.innerHTML =event.location;
    resultThree.innerHTML =event.which;
    resultFour.innerHTML =event.code;
    firstTitle.style.display='none';
    Main.style.display='flex';
})