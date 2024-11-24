let Cookie = document.getElementById('Cw');
let CWall = document.getElementById('cwall');
let Button = document.getElementById('CwBtn');
let Closebtn = document.getElementsById("closeb");
let AgeButton = document.getElementById('AgeB');
let Agep = document.getElementById('Agep');

function openwall() {
    Cookie.style.display = "block";
  }

function closewall() {
    Cookie.style.display = "none";
  }

function agecheck() {
  let Ageinp = document.getElementById('ageipt');
    if(Ageinp.value >= 18) {

      Cookie.style.display = "none";
      window.location.href = 'redirect.html';
    }

    else {
      let BeforeCookie = document.getElementById('cbf');
      let AfterCookie = document.getElementById('ack');
      Cookie.style.display = "none";
      BeforeCookie.style.display = "none";
      AfterCookie.style.display = "block";

    }
}