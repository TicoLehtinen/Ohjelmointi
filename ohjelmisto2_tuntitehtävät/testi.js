"use strict";

let teksti = document.querySelector("#result");
teksti.textContent = "Hei Maailma";

let nimi = prompt("Anna nimi:");
console.log(nimi);

document.querySelector("#calc").addEventListener("click", () => {
    let hintaInput = document.querySelector("#price");
    let hinta = parseFloat(hintaInput.value);

    let maaraInput = document.querySelector("#qty");
    let maara = parseInt(maaraInput.value);

    let kokonaishinta = maara * hinta;

    let teksti = document.querySelector("#result");
    teksti.textContent = `Hinta: ${kokonaishinta.toFixed(2)} €`;
});