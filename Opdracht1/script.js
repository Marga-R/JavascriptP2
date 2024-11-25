let scard = ['Bananas', 'Whiskey', 'Chips', 'Beans', 'Potatoes'];



document.getElementById('opdr1').innerText = 'There are ' + scard.length + ' items in the shopping cart';

document.getElementById('opdr2').innerText = 'Your products are: ' + scard;

document.getElementById('opdr3').innerText = 'The 4th product in the shoppind card is ' + scard[4];

scard[1] = 'Beer';
document.getElementById("opdr4").innerText = scard;


document.getElementById("opdr5").innerText = scard

function add_product() {

    scard.push('Cholocate');
    document.getElementById("opdr5").innerText = scard;
}

if (scard.length > 1) {
    document.getElementById("opdr6").innerText = 'You can go shopping!!';
}

else {
    document.getElementById("opdr6").innerText = 'you have no products in your card';
}

if (scard[5] == 'Candy') {
    document.getElementById("opdr7").innerText = scard;
}

else {
    document.getElementById("opdr7").innerText = 'You have no Candy for some reason?';
}

document.getElementById("opdr8").innerText = scard.join(" ");

document.getElementById("opdr9").innerText = scard;

function slice() {
    scard.splice(0, 2);
    document.getElementById("opdr9").innerText = scard;
}
document.getElementById("opdr10").innerText = scard;

function sort(){
    
    document.getElementById("opdr10").innerText = scard.sort();
}



