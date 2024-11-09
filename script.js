let inpName = document.getElementById("nome");
let inpKm = document.getElementById("km");
let inpAge = document.getElementById("age");
let inpTicket = document.getElementById("ticket");
let btnSub = document.getElementById("btnSub");

btnSub.addEventListener("click", onSubmitClick);
function onSubmitClick(event) {
  event.preventDefault();
  let UserName = inpName.value;
  document.getElementById("passeggero").innerHTML = UserName;
  document.getElementById("codice").innerHTML = randomNumber(1000, 5000);
  document.getElementById("carrozza").innerHTML = randomNumber(1, 10);
  document.getElementById("offerta").innerHTML = inpAge.value;
  calcolaPrezzo();
  inpTicket.classList.remove("d-none");
}

function calcolaPrezzo() {
  let km = inpKm.value;
  let age = parseInt(inpAge.value);
  let prezzo = km * 0.21;
  let sconto = 0;
  if (age <= 17) {
    sconto = (prezzo * 20) / 100;
  } else if (age >= 65) {
    sconto = prezzo * 0.4;
  }
  prezzo -= sconto;
  document.getElementById("costo").innerHTML = prezzo.toFixed(2) + "€";
}

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
