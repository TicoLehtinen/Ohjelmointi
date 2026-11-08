const tulos = document.getElementById('tulos');

if (confirm('Lasketaanko neliöjuuri?')) {
  const luku = parseFloat(prompt('Anna luku:'));
  if (luku < 0) {
    tulos.textContent = 'Negatiivisen luvun neliöjuurta ei ole määritelty.';
  } else {
    tulos.textContent = `Luvun ${luku} neliöjuuri on ${Math.sqrt(luku)}.`;
  }
} else {
  tulos.textContent = 'Neliöjuurta ei lasketa.';
}
