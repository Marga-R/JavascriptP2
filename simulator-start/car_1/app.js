let car = document.getElementById('car');
position = 580;
let drive;


function start(){
position -= 5;
car.style.top = position + "px";
drive = setTimeout(start, 100)
}

function again(){
clearTimeout(drive);
position = 580
car.style.top = position + "px";    
}

function stop(){
clearTimeout(drive);    
}
