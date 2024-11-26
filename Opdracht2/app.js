let output = document.getElementById('output');
let input = document.getElementById('input');

let shop = [];

let product = input.value

function add_product(){
    let product = input.value;
    shop.push(product);
    output.innerText = shop
}