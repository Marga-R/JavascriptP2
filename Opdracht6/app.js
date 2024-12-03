let cube = document.getElementById('cubej');
let position = 0;

function moveCube(){

position = position + 20;
cube.style.left = position + 'px';

if(position >= innerWidth){
    position = 0;
}
}
setInterval(moveCube,100);

