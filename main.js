var image1 = document.querySelector('.image-1');
var image2 = document.querySelector('.image-2');

var text1 = document.querySelector('.text-1');
var text2 = document.querySelector('.text-2');
var text3 = document.querySelector('.text-3');
var wrapper = document.querySelector('.wrapper');
var text4 = document.querySelector('.text-4');
var text5 = document.querySelector('.text-5');
var text6 = document.querySelector('.text-6');
var text7 = document.querySelector('.text-7');
var button = document.querySelector('.btn');

function blinkwrapper(){
    wrapper.classList.add("blink");
}
function showwrapper(){
    wrapper.classList.remove("blink");
}
function handleImage1(){
    image1.classList.add("show")
}

function handleImage2(){
    image2.classList.add("show")
}

function handleText1(){
    text1.classList.add("show")
}
function handleText2(){
    text2.classList.add("show")
}
function handleText3(){
    text3.classList.add("show")
}
function handleText4(){
    text4.classList.add("show")
}
function removeText4(){
    text4.classList.remove("show");
    text4.classList.add("remove");
}
function handleText5(){
    text5.classList.add("show")
}
function removeText5(){
    text5.classList.remove("show");
    text5.classList.add("remove");
}
function handleText6(){
    text6.classList.add("show")
}
function removeText6(){
    text6.classList.remove("show");
    text6.classList.add("remove");
}
function handleText7(){
    text7.classList.add("show")
}
function removeText7(){
    text7.classList.remove("show");
    text7.classList.add("remove");
}
function click(){
    button.classList.add("show")
}

function removebtn()
{
    button.classList.remove("show");
}

function removeall()
{
    image1.classList.remove("show");
    image2.classList.remove("show");
    text1.classList.remove("show");
    text2.classList.remove("show");
    text3.classList.remove("show");
    text4.classList.remove("remove");
    text5.classList.remove("remove");
    text6.classList.remove("remove");
    text7.classList.remove("remove");
}
animate();
function animate()
{
setTimeout(handleImage1,1000);
setTimeout(handleImage2,2000);
setTimeout(blinkwrapper,2200);
setTimeout(showwrapper,2300);
setTimeout(handleText1,2500);
setTimeout(blinkwrapper,2700);
setTimeout(showwrapper,2800);
setTimeout(handleText3,3000);
setTimeout(handleText2,4000);
setTimeout(handleText4,4800);
setTimeout(handleText5,4800);
setTimeout(removeText4,6000);
setTimeout(removeText5,6000);
setTimeout(handleText6,6500);
setTimeout(handleText7,6800);
setTimeout(removeText6,8000);
setTimeout(removeText7,8000);
setTimeout(click,9000);
setTimeout(removebtn,9500);
setTimeout(removeall,10500);
setTimeout(blinkwrapper,11000);
setTimeout(showwrapper,11300);
setTimeout(animate,11300);
}