let stato = "circle";
let radioes = document.querySelectorAll("input[type=radio]:checked");

function statusChange() {
  let radioes = document.querySelectorAll("input[type=radio]");

  //Cambia lo stato di tutti i bottoni non disabilitati
  radioes.forEach(radio => 
    radio.disabled ? "" : radio.className = stato
  );

  if (stato == "cross") {
    stato = "circle";
  }
  else {
    stato = "cross";
  }
}

//Disabilita il bottone selezionato e lo rende una checkbox per poterne selezionarne diversi
function disable(input) {
  input.disabled = true;
  input.type = "checkbox";
}

function confirm() {
  let radioes = document.querySelectorAll("input[type=radio]:checked");

  radioes.forEach(radio => 
    radio.disabled ? "" : disable(radio)
  );

  statusChange();
}

//Aggiungi dialog 
//Aggiungi reset => seleziona tutto, lo unchecka, rimette le checkbox come radio, rimette tutte le classi a cross
//Aggiungi rilevazione fine partita