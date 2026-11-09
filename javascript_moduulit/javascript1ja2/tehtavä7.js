const heittoja = parseInt(prompt('Montako kertaa noppaa heitetään?'));

let summa = 0;
for (let i = 0; i < heittoja; i++) {
  summa += Math.floor(Math.random() * 6) + 1;
}

document.getElementById('tulos').textContent =
  `Silmälukujen summa ${heittoja} heitolla: ${summa}`;
