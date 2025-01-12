let hunger = 100;
let energy = 100;
let happiness = 100;

let bfeed = document.getElementById("feed");
let bsleep = document.getElementById("sleep");
let bplay = document.getElementById("play");

let dhunger = document.getElementById("hunger");
let denergy = document.getElementById("energy");
let dhappiness = document.getElementById("happiness");

let statusmessage = document.getElementById("statusMessage");


function status() {
   dhunger.innerText = "Hunger: " + hunger;
   denergy.innerText = "Energy: " + energy;
   dhappiness.innerText = "Happiness: " + happiness;

   if( hunger == 0 && energy == 0 && happiness == 0) {
    statusmessage.innerText = 'Your Tamagotchi has died....why did you let this happen...?'
   }
   else {
    statusmessage.innerText = 'Your Tamagotchi is still alive and well'
   }
}

 function hungerFuntioning() {
    hunger = Math.min(hunger + 15, 100);
    status();
 }

 function energyFuntioning() {
    energy = Math.min(energy + 15, 100);
    status();
 }

 function happinessFuntioning() {
    happiness = Math.min(happiness + 15, 100);
    status();
 }
 
bfeed.addEventListener('click', hungerFuntioning);
bsleep.addEventListener('click', energyFuntioning);
bplay.addEventListener('click', happinessFuntioning);

function decrease(){
    happiness = Math.max(happiness - 1, 0);
    energy = Math.max(energy - 1, 0);
    hunger = Math.max(hunger - 1, 0);
    status()
}


setInterval(decrease, 1000);



status()