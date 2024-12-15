let cube = document.getElementById('cubej');
let position = 0;



function moveCube(){

position = position + 20;
cube.style.left = position + 'px';

if(position >= innerWidth){
    position = 0;
}
}
setInterval(moveCube,150);


let colors = ['blue','red','purple','pink','black'];

cube.addEventListener('click', function(){
    let random = Math.floor(Math.random() * colors.length);
    cube.style.backgroundColor = colors[random];
   console.log("I was CLICKED")
})