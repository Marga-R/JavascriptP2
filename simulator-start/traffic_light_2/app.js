let trafficLight = document.getElementById('traffic-light');

let redB = document.getElementById('red');
let greenB = document.getElementById('green');
let yellowB = document.getElementById('yellow');
let shutOffB = document.getElementById('out');


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

redB.addEventListener('click', red);
greenB.addEventListener('click', green);
yellowB.addEventListener('click', yellow);
shutOffB.addEventListener('click', shutOff);