let inpName = document.getElementById("nome");
let inpKm = document.getElementById("km");
let inpAge = document.getElementById("age");
let inpTicket = document.getElementById("ticket");
let btnSub = document.getElementById("btnSub");

/* let UserName = inpName.value; */

btnSub.addEventListener("click", onSubmitClick);
function onSubmitClick(event) {
  event.preventDefault();
  let UserName = inpName.value;
  calcolaPrezzo();
  console.log(UserName);
}
