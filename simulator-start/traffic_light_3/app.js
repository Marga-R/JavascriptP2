let trafficLight = document.getElementById('traffic-light');

let redB = document.getElementById('red');
let greenB = document.getElementById('green');
let yellowB = document.getElementById('yellow');
let shutOffB = document.getElementById('out');

let working;
let outOfOrder;

function red() {
trafficLight.src = "./img/trafficLightRed.png";
}

function green() {
trafficLight.src = "./img/trafficLightGreen.png";
}

function yellow() {
trafficLight.src = "./img/trafficLightYellow.png";
}

function shutOff() {
trafficLight.src = "./img/shutOff.png";
}



function turnOn() {
clearTimeout(outOfOrder);
red()
working = setTimeout(green, 4000);
working = setTimeout(yellow, 2000);
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

//the cleartimeout sometimes doesn't work..not totally sure what's wrong- help?