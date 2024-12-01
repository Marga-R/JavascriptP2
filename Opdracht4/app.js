/* let show ="";
let multpl = 10;

for (let i = 1; i <= 10; i++) {
let result = i * multpl;
show += i + " x " + multpl + " = " +result + "<br>";

}

document.getElementById("showJs").innerHTML = show;
 */


function tafel_van(){
    let show = "";
    let multpl = document.getElementById("input1");
    multpl = multpl.value;

    for (let i = 1; i <= 10; i++) {
        let result = i * multpl;
        show += i + " x " + multpl + " = " +result + "<br>";
    }
    document.getElementById("showJs").innerHTML = show;
}

