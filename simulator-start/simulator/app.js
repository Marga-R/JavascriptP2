let trafficLight = document.getElementById('traffic-light');

let redB = document.getElementById('red');
let greenB = document.getElementById('green');
let yellowB = document.getElementById('yellow');
let shutOffB = document.getElementById('out');

let car = document.getElementById('car');
position = 700;
let drive;

let working;
let outOfOrder;
let breakm = false;

function red() {
trafficLight.src = "./img/trafficLightRed.png";
breakm = true;
}

function green() {
trafficLight.src = "./img/trafficLightGreen.png";
breakm = false;
}

function yellow() {
trafficLight.src = "./img/trafficLightYellow.png";
breakm = false;
}

function shutOff() {
trafficLight.src = "./img/shutOff.png";
}



function turnOn() {
clearTimeout(outOfOrder);
red()
working = setTimeout(green, 2000);
working = setTimeout(yellow, 4000);
working = setTimeout(turnOn, 6000);
}

function blink() {
clearTimeout(working);
outOfOrder = setTimeout(yellow, 500);
outOfOrder = setTimeout(shutOff, 1000);
outOfOrder = setTimeout(blink, 1500); 
}

function turnOff() {
clearTimeout(working);
clearTimeout(outOfOrder);
shutOff(); 
}



function start(){
    let speed = 5;

    if (car.getBoundingClientRect().top <= 0) { 
        position = 700;
        car.style.top = position + "px";
   }
    if(breakm == true && position == 520) {
        speed = 0;
    }else{
        speed = 5; 
    }
    position -= speed;
    drive = setTimeout(start, 100);
    car.style.top = position + "px";
}

function again(){
    clearTimeout(drive);
    position = 700;
    car.style.top = position + "px";



}

function stop(){
clearTimeout(drive);    
}


//the cleartimeout sometimes doesn't work..not totally sure what's wrong- help?