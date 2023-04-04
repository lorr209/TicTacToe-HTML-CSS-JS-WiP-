let stato = "circle";

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

function winCondition() {
  let checkboxes = document.querySelectorAll("input[type=checkbox].cross");
  checkboxes.forEach(checkbox => {
    console.log(checkbox.id)
    }
  );

}

//Cerca nell'array questi valori sia per le croci che per i cerchi, se li trova finisce la partita
//Da possibilità di resettare e annuncia il vincitore
[0, 1, 2],
[0, 3, 6],
[0, 4, 8],
[1, 4, 7],
[2, 4, 6],
[2, 5, 8],
[3, 4, 5],
[6, 7, 8]

//Aggiungi dialog 
//Aggiungi reset => seleziona tutto, lo unchecka, rimette le checkbox come radio, rimette tutte le classi a cross
//Aggiungi rilevazione fine partita