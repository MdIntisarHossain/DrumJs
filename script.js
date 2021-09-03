swal("Only Mouse and Keyboard Inputs"); //Custom Alert

//Key Selector
const wkey = document.querySelector(".w");
const akey = document.querySelector(".a");
const skey = document.querySelector(".s");
const dkey = document.querySelector(".d");
const jkey = document.querySelector(".j");
const kkey = document.querySelector(".k");
const lkey = document.querySelector(".l");
//


//Play Music Function
function tom1(){
    var tom = new Audio("/sounds/tom-1.mp3");
    tom.play();
}
function tom2(){
    var tom = new Audio("/sounds/tom-2.mp3");
    tom.play();
}
function tom3(){
    var tom = new Audio("/sounds/tom-3.mp3");
    tom.play();
}
function tom4(){
    var tom = new Audio("/sounds/tom-4.mp3");
    tom.play();
}
function crash(){
    var crash = new Audio("/sounds/crash.mp3");
    crash.play();
}
function kick(){
    var kick = new Audio("/sounds/kick-bass.mp3");
    kick.play();
}
function snare(){
    var snare = new Audio("/sounds/snare.mp3");
    snare.play();
}

//

//Keyboard presses
window.addEventListener("keydown",function (event){
    if(event.key === "w"){
        tom1();
    }
    if(event.key === "a"){
        tom2();
    }
    if(event.key === "s"){
        tom3();
    }
    if(event.key === "d"){
        tom4();
    }
    if(event.key === "j"){
        crash();
    }
    if(event.key === "k"){
        kick();
    }
    if(event.key === "l"){
        snare();
    }
})
//


//Mouse events
wkey.addEventListener("click", function(){
    tom1();
})
akey.addEventListener("click", function(){
    tom2();
})
skey.addEventListener("click", function(){
    tom3();
})
dkey.addEventListener("click", function(){
    tom4();
})
jkey.addEventListener("click", function(){
    crash();
})
kkey.addEventListener("click", function(){
    kick();
})
lkey.addEventListener("click", function(){
    snare();
})