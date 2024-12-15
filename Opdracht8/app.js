let cube = document.getElementById('cubej');
let positionH = 0;
let positionV = 0;
let rightInterval, leftInterval, upInterval, downInterval; 


function clearAllIntervals(){
    clearInterval(rightInterval);
    clearInterval(leftInterval);
    clearInterval(upInterval);
    clearInterval(downInterval);

}

window.addEventListener('keydown', function (e) {
    clearAllIntervals(); 

    if (e.key == "d") {
        rightInterval = setInterval(function () {
            positionH += 20; 
            cube.style.left = positionH + 'px';
        }, 100); 
    } else if (e.key == "a") {
        leftInterval = setInterval(function () {
            positionH -= 20; 
            cube.style.left = positionH + 'px';
        }, 100); 
    } else if (e.key == "w") {
        upInterval = setInterval(function () {
            positionV -= 20; 
            cube.style.top = positionV + 'px';
        }, 100); 
    } else if (e.key == "s") {
        downInterval = setInterval(function () {
            positionV += 20; 
            cube.style.top = positionV + 'px';
        }, 100); 
    }
});

